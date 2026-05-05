import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

function YoutubeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8A3 3 0 0 0 2.6 19.9c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
    </svg>
  );
}
function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}
import { Container } from "@/components/ui/Container";
import { getMessages, type Locale } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);

  return (
    <footer className="bg-[var(--color-ink-50)] border-t border-[var(--color-ink-200)] mt-24">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href={`/${locale}/`}
              className="inline-flex items-center gap-2 text-[var(--color-ink-900)] font-bold text-lg"
            >
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-[var(--color-primary-500)] text-white">
                R
              </span>
              {messages.meta.site_name}
            </Link>
            <p className="mt-4 text-sm text-[var(--color-ink-500)] leading-relaxed max-w-xs">
              {messages.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-[var(--color-ink-900)] mb-4 uppercase tracking-wider">
              {messages.footer.learn}
            </h4>
            <ul className="space-y-2.5">
              <FooterLink href={`/${locale}/courses/`}>{messages.nav.courses}</FooterLink>
              <FooterLink href={`/${locale}/books/`}>{messages.nav.books}</FooterLink>
              <FooterLink href={`/${locale}/faq/`}>{messages.nav.faq}</FooterLink>
              <FooterLink href={`/${locale}/blog/`}>{messages.nav.blog}</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-[var(--color-ink-900)] mb-4 uppercase tracking-wider">
              {messages.footer.company}
            </h4>
            <ul className="space-y-2.5">
              <FooterLink href={`/${locale}/about/`}>{messages.nav.about}</FooterLink>
              <FooterLink href={`/${locale}/contact/`}>{messages.nav.contact}</FooterLink>
              <FooterLink href={`/${locale}/reservation/`}>{messages.nav.book_session}</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-[var(--color-ink-900)] mb-4 uppercase tracking-wider">
              {messages.footer.follow}
            </h4>
            <ul className="space-y-2.5 text-sm text-[var(--color-ink-700)]">
              <li className="flex items-center gap-2">
                <Phone size={15} className="shrink-0" />
                <a href="tel:+21625102107" className="hover:text-[var(--color-primary-600)]">
                  +216 25 102 107
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={15} className="shrink-0" />
                <a href="mailto:Riadhkoubaaa@gmail.com" className="hover:text-[var(--color-primary-600)]">
                  Riadhkoubaaa@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={15} className="shrink-0 mt-0.5" />
                <span>{messages.contact.address_value}</span>
              </li>
            </ul>
            <div className="flex items-center gap-2 mt-4">
              <SocialLink href="https://www.youtube.com/" label="YouTube">
                <YoutubeIcon />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/" label="LinkedIn">
                <LinkedinIcon />
              </SocialLink>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[var(--color-ink-200)] flex flex-wrap items-center justify-between gap-4 text-xs text-[var(--color-ink-500)]">
          <span>
            © {new Date().getFullYear()} {messages.meta.site_name}. {messages.footer.rights}
          </span>
          <div className="flex items-center gap-4">
            <Link href={`/${locale}/privacy/`} className="hover:text-[var(--color-ink-900)]">
              {messages.footer.privacy}
            </Link>
            <Link href={`/${locale}/terms/`} className="hover:text-[var(--color-ink-900)]">
              {messages.footer.terms}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-[var(--color-ink-500)] hover:text-[var(--color-primary-600)] transition"
      >
        {children}
      </Link>
    </li>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-white border border-[var(--color-ink-200)] text-[var(--color-ink-700)] hover:text-[var(--color-primary-600)] hover:border-[var(--color-primary-500)] transition"
    >
      {children}
    </a>
  );
}
