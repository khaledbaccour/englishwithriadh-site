import { Container } from "@/components/ui/Container";
import { ReservationForm } from "@/components/forms/ReservationForm";
import { getMessages, isLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function ReservationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const messages = getMessages(locale);

  return (
    <>
      <section className="bg-[var(--color-ink-50)] py-16">
        <Container>
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight text-[var(--color-ink-900)]">
            {messages.nav.book_session}
          </h1>
          <p className="mt-3 text-lg text-[var(--color-ink-500)] max-w-2xl">
            {messages.cta_strip.sub}
          </p>
        </Container>
      </section>
      <section className="py-16">
        <Container className="max-w-3xl">
          <ReservationForm locale={locale} mode="reservation" />
        </Container>
      </section>
    </>
  );
}
