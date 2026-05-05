import { Container } from "@/components/ui/Container";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { ReservationForm } from "@/components/forms/ReservationForm";
import { getMessages, isLocale, type Locale } from "@/lib/i18n";
import { buildWhatsAppLink } from "@/lib/format";
import { notFound } from "next/navigation";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const messages = getMessages(locale);

  const wa =
    locale === "ar"
      ? "السلام عليكم رياض، عندي سؤال…"
      : "Hi Riadh, I have a question…";

  return (
    <>
      <section className="bg-[var(--color-ink-50)] py-16">
        <Container>
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight text-[var(--color-ink-900)]">
            {messages.contact.title}
          </h1>
          <p className="mt-3 text-lg text-[var(--color-ink-500)] max-w-2xl">
            {messages.contact.sub}
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="text-2xl font-extrabold text-[var(--color-ink-900)]">
                {messages.contact.form_title}
              </h2>
              <div className="mt-6">
                <ReservationForm locale={locale} mode="contact" />
              </div>
            </div>

            <aside className="space-y-6">
              <div className="bg-white border border-[var(--color-ink-200)] rounded-[var(--radius-lg)] p-6 space-y-4">
                <Item icon={<Phone size={18} />} label={messages.contact.phone} value="+216 25 102 107" href="tel:+21625102107" />
                <Item icon={<Mail size={18} />} label={messages.contact.email} value="Riadhkoubaaa@gmail.com" href="mailto:Riadhkoubaaa@gmail.com" />
                <Item icon={<MapPin size={18} />} label={messages.contact.address} value={messages.contact.address_value} />
                <Item icon={<Clock size={18} />} label={messages.contact.hours} value={messages.contact.hours_value} />
              </div>

              <ButtonLink
                href={buildWhatsAppLink(wa)}
                target="_blank"
                variant="primary"
                size="lg"
                className="w-full"
              >
                <MessageCircle size={18} />
                {messages.contact.open_whatsapp}
              </ButtonLink>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}

function Item({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex items-center justify-center w-9 h-9 rounded-md bg-[var(--color-primary-50)] text-[var(--color-primary-600)] shrink-0">
        {icon}
      </span>
      <div>
        <div className="text-xs uppercase tracking-wider font-bold text-[var(--color-ink-500)]">
          {label}
        </div>
        <div className="text-[var(--color-ink-900)] font-semibold mt-0.5">{value}</div>
      </div>
    </div>
  );
  if (href) {
    return (
      <a href={href} className="block hover:text-[var(--color-primary-600)] transition">
        {inner}
      </a>
    );
  }
  return inner;
}
