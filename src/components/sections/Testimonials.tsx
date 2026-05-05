import { Container } from "@/components/ui/Container";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { TESTIMONIALS } from "@/data/testimonials";
import type { Locale, Messages } from "@/lib/i18n";

export function Testimonials({
  locale,
  messages,
}: {
  locale: Locale;
  messages: Messages;
}) {
  return (
    <section className="py-20 bg-[var(--color-ink-50)]">
      <Container>
        <div className="max-w-2xl mb-10">
          <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-[var(--color-ink-900)]">
            {messages.testimonials.title}
          </h2>
          <p className="mt-3 text-[var(--color-ink-500)]">
            {messages.testimonials.sub}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} locale={locale} />
          ))}
        </div>
      </Container>
    </section>
  );
}
