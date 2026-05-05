import Link from "next/link";
import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { LangSwitcher } from "./LangSwitcher";
import { MobileDrawer } from "./MobileDrawer";
import { getMessages, type Locale } from "@/lib/i18n";

export function Navbar({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);

  const links = [
    { href: `/${locale}/courses/`, label: messages.nav.courses },
    { href: `/${locale}/books/`, label: messages.nav.books },
    { href: `/${locale}/about/`, label: messages.nav.about },
    { href: `/${locale}/faq/`, label: messages.nav.faq },
    { href: `/${locale}/contact/`, label: messages.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-[var(--color-ink-200)]">
      <Container className="h-[72px] flex items-center gap-6">
        <Link
          href={`/${locale}/`}
          aria-label={messages.meta.site_name}
          className="flex items-center gap-2 text-[var(--color-ink-900)] font-bold text-lg shrink-0"
        >
          <span className="inline-flex items-center justify-center w-11 h-11 rounded-md bg-[var(--color-primary-500)] text-white font-bold">
            R
          </span>
          <span className="hidden sm:inline">{messages.meta.site_name}</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 ms-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[15px] font-medium text-[var(--color-ink-700)] hover:text-[var(--color-primary-600)] transition"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ms-auto flex items-center gap-1 sm:gap-2">
          <a
            href="tel:+21625102107"
            aria-label="+216 25 102 107"
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-md text-[var(--color-ink-700)] hover:bg-[var(--color-ink-100)] transition"
          >
            <Phone size={20} strokeWidth={2} />
          </a>
          <a
            href="tel:+21625102107"
            className="hidden md:inline-flex items-center gap-1.5 h-10 px-3 rounded-md text-sm font-semibold text-[var(--color-ink-700)] hover:bg-[var(--color-ink-100)] transition"
          >
            <Phone size={16} strokeWidth={2} />
            +216 25 102 107
          </a>
          <div className="hidden md:block">
            <LangSwitcher locale={locale} />
          </div>
          <ButtonLink
            href={`/${locale}/reservation/`}
            variant="primary"
            size="md"
            className="hidden md:inline-flex"
          >
            {messages.nav.book_session}
          </ButtonLink>
          <MobileDrawer locale={locale} />
        </div>
      </Container>
    </header>
  );
}
