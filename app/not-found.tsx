import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en" dir="ltr">
      <body style={{ fontFamily: "Inter, system-ui, sans-serif", display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "center", margin: 0, background: "#fafafa" }}>
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <h1 style={{ fontSize: "3rem", margin: 0, color: "#18181b" }}>404</h1>
          <p style={{ color: "#71717a", marginTop: "0.5rem" }}>Page not found.</p>
          <Link href="/en/" style={{ display: "inline-block", marginTop: "1.5rem", padding: "0.75rem 1.5rem", background: "#FF4742", color: "white", borderRadius: 8, textDecoration: "none", fontWeight: 600 }}>
            Go home
          </Link>
        </div>
      </body>
    </html>
  );
}
