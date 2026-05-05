"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { LangSwitcher } from "./LangSwitcher";
import { type Locale, getMessages } from "@/lib/i18n";

export function MobileDrawer({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const messages = getMessages(locale);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: `/${locale}/courses/`, label: messages.nav.courses },
    { href: `/${locale}/books/`, label: messages.nav.books },
    { href: `/${locale}/about/`, label: messages.nav.about },
    { href: `/${locale}/faq/`, label: messages.nav.faq },
    { href: `/${locale}/contact/`, label: messages.nav.contact },
  ];

  return (
    <>
      <button
        type="button"
        aria-label={messages.nav.menu}
        onClick={() => setOpen(true)}
        className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-md hover:bg-[var(--color-ink-100)] transition"
      >
        <Menu size={22} strokeWidth={2} />
      </button>

      {open && mounted && createPortal(
        <div className="lg:hidden fixed inset-0 z-[100]">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="absolute end-0 top-0 bottom-0 w-[88%] max-w-sm bg-white shadow-[var(--shadow-floating)] flex flex-col">
            <div className="flex items-center justify-between h-[72px] px-5 border-b border-[var(--color-ink-200)]">
              <span className="text-base font-bold text-[var(--color-ink-900)]">
                {messages.nav.menu}
              </span>
              <button
                aria-label={messages.nav.close}
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center w-11 h-11 rounded-md hover:bg-[var(--color-ink-100)]"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto py-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-5 py-3 text-base font-semibold text-[var(--color-ink-900)] hover:bg-[var(--color-ink-50)]"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="p-5 border-t border-[var(--color-ink-200)] flex flex-col gap-3">
              <ButtonLink
                href={`/${locale}/reservation/`}
                variant="primary"
                className="w-full justify-center"
              >
                {messages.nav.book_session}
              </ButtonLink>
              <a
                href="tel:+21625102107"
                className="flex items-center justify-center gap-2 h-11 rounded-md border border-[var(--color-ink-200)] text-sm font-semibold text-[var(--color-ink-700)] hover:bg-[var(--color-ink-50)]"
              >
                <Phone size={16} strokeWidth={2} />
                +216 25 102 107
              </a>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[var(--color-ink-500)]">
                  {messages.lang.label}
                </span>
                <LangSwitcher locale={locale} />
              </div>
            </div>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
