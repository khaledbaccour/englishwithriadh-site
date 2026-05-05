#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Deploy script for englishwithriadh site.
Usage: python deploy.py [--host HOST] [--user USER] [--password PASSWORD]
Reads SSH_HOST / SSH_USER / SSH_PASSWORD from env if args not provided.
"""
import os, sys, argparse, pathlib, paramiko
from paramiko import SSHClient, AutoAddPolicy

REMOTE_DIR  = "/srv/riadh"
CADDY_BLOCK = """
### English With Riadh Koubaa
riadh.51-77-148-106.nip.io {
    root * /srv/riadh
    file_server
    encode gzip zstd
    header {
        Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
        X-Content-Type-Options "nosniff"
        Referrer-Policy "strict-origin-when-cross-origin"
        -Server
    }
    log {
        output stdout
        format console
    }
}
"""

STATIC_EXTS = {
    ".html", ".css", ".js", ".png", ".jpg", ".jpeg",
    ".webp", ".gif", ".svg", ".ico", ".woff", ".woff2",
    ".ttf", ".txt", ".json",
}

def parse_args():
    p = argparse.ArgumentParser()
    p.add_argument("--host",     default=os.environ.get("SSH_HOST", "51.77.148.106"))
    p.add_argument("--user",     default=os.environ.get("SSH_USER", "ubuntu"))
    p.add_argument("--password", default=os.environ.get("SSH_PASSWORD", ""))
    p.add_argument("--key",      default=os.environ.get("SSH_KEY_PATH", ""))
    return p.parse_args()


def run(client, cmd, check=True):
    print(f"  $ {cmd}")
    _, out, err = client.exec_command(cmd)
    stdout = out.read().decode().strip()
    stderr = err.read().decode().strip()
    rc = out.channel.recv_exit_status()
    if stdout: print(f"    {stdout}")
    if stderr: print(f"    ERR: {stderr}", file=sys.stderr)
    if check and rc != 0:
        raise RuntimeError(f"Command failed (rc={rc}): {cmd}")
    return stdout


def ensure_caddy_entry(client):
    """Append Caddy block if not already present."""
    existing = run(client, "cat /srv/Caddyfile", check=False)
    marker = "riadh.51-77-148-106.nip.io"
    if marker in existing:
        print("  Caddy entry already present - skipping")
        return
    print("  Adding Caddy entry...")
    # Write block via tee (sudo)
    import shlex
    block_escaped = CADDY_BLOCK.replace("'", "'\\''")
    run(client, f"sudo cp /srv/Caddyfile /srv/Caddyfile.bak.pre-riadh-$(date +%s)")
    # Use printf + sudo tee -a to append
    run(client,
        f"printf '%s' '{block_escaped}' | sudo tee -a /srv/Caddyfile > /dev/null")


def upload_site(client, local_root: pathlib.Path):
    sftp = client.open_sftp()

    # Ensure remote dir (needs sudo because /srv is root:users)
    run(client, f"sudo mkdir -p {REMOTE_DIR}/images", check=False)
    run(client, f"sudo chown -R ubuntu:ubuntu {REMOTE_DIR}", check=False)

    uploaded = 0
    for local_path in local_root.rglob("*"):
        if local_path.is_dir():
            continue
        if local_path.suffix.lower() not in STATIC_EXTS:
            continue
        # Skip hidden / git / github dirs
        parts = local_path.relative_to(local_root).parts
        if any(p.startswith(".") for p in parts):
            continue

        rel      = local_path.relative_to(local_root)
        remote   = f"{REMOTE_DIR}/{rel.as_posix()}"
        rdir     = remote.rsplit("/", 1)[0]
        run(client, f"mkdir -p {rdir}", check=False)

        print(f"  -> {rel}")
        sftp.put(str(local_path), remote)
        uploaded += 1

    sftp.close()
    print(f"  Uploaded {uploaded} files")


def ensure_riadh_volume(client):
    """Ensure /srv/riadh is mounted in the Caddy container."""
    compose = run(client, "cat /srv/Portfolio/docker-compose.yml", check=False)
    if "/srv/riadh:/srv/riadh" in compose:
        print("  Volume already mounted - skipping")
        return
    print("  Adding /srv/riadh volume to Caddy compose...")
    run(client, r"sudo sed -i '/- \/srv\/mohamed-haddadi\/dist:\/srv\/mohamed-haddadi:ro/a\      - /srv/riadh:/srv/riadh:ro' /srv/Portfolio/docker-compose.yml")
    run(client, "cd /srv/Portfolio && docker compose up -d --no-deps caddy")
    import time; time.sleep(3)


def reload_caddy(client):
    print("  Reloading Caddy...")
    out = run(
        client,
        "docker exec portfolio-caddy caddy reload --config /etc/caddy/Caddyfile 2>&1 || true",
        check=False,
    )
    print(f"  Caddy: {out[:200] if out else 'done'}")


def main():
    args = parse_args()

    print(f"\n=== Deploying to {args.host} as {args.user} ===\n")
    local_root = pathlib.Path(__file__).parent.resolve()

    client = SSHClient()
    client.set_missing_host_key_policy(AutoAddPolicy())

    connect_kwargs = dict(hostname=args.host, username=args.user, timeout=20)
    if args.key and pathlib.Path(args.key).exists():
        connect_kwargs["key_filename"] = args.key
    elif args.password:
        connect_kwargs["password"] = args.password
    else:
        raise SystemExit("Provide --password or --key / SSH_PASSWORD or SSH_KEY_PATH env var")

    client.connect(**connect_kwargs)
    print("SSH connected.\n")

    print("[1/4] Uploading site files...")
    upload_site(client, local_root)

    print("\n[2/4] Ensuring Caddy entry...")
    ensure_caddy_entry(client)

    print("\n[3/4] Ensuring Docker volume mount...")
    ensure_riadh_volume(client)

    print("\n[4/4] Reloading Caddy...")
    reload_caddy(client)

    client.close()
    print(f"\nDeployed! -> https://riadh.51-77-148-106.nip.io\n")


if __name__ == "__main__":
    main()
