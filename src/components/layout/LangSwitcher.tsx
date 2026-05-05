"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { LOCALES, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/cn";

const labels: Record<Locale, string> = {
  en: "EN",
  ar: "AR",
};

export function LangSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  function buildHref(target: Locale) {
    const segments = (pathname || "/").split("/").filter(Boolean);
    if (segments.length === 0) return `/${target}/`;
    segments[0] = target;
    return `/${segments.join("/")}/`;
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-1.5 h-10 px-3 rounded-md text-sm font-semibold text-[var(--color-ink-900)] hover:bg-[var(--color-ink-100)] transition"
      >
        <Globe size={16} strokeWidth={2} />
        {labels[locale]}
      </button>
      {open && (
        <div
          role="menu"
          className="absolute end-0 mt-2 w-32 bg-white border border-[var(--color-ink-200)] rounded-md shadow-[var(--shadow-floating)] overflow-hidden z-50"
        >
          {LOCALES.map((l) => (
            <Link
              key={l}
              href={buildHref(l)}
              role="menuitem"
              className={cn(
                "block px-3 py-2 text-sm hover:bg-[var(--color-ink-50)]",
                l === locale && "font-semibold text-[var(--color-primary-600)]",
              )}
              onClick={() => setOpen(false)}
            >
              {l === "en" ? "English" : "العربية"}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
