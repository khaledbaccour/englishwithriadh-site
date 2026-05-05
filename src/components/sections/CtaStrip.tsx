import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight, MessageCircle } from "lucide-react";
import type { Locale, Messages } from "@/lib/i18n";
import { buildWhatsAppLink } from "@/lib/format";

export function CtaStrip({
  locale,
  messages,
}: {
  locale: Locale;
  messages: Messages;
}) {
  const wa =
    locale === "ar"
      ? "السلام عليكم رياض، أودّ التسجيل في إحدى الدورات."
      : "Hi Riadh, I would like to register for one of your courses.";
  return (
    <section className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[var(--radius-xl)] bg-[var(--color-ink-900)] text-white px-8 py-14 md:px-14 md:py-16">
          <div className="absolute -top-16 -end-16 w-72 h-72 rounded-full bg-[var(--color-primary-500)]/20 blur-3xl" aria-hidden />
          <div className="relative max-w-2xl">
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold tracking-tight">
              {messages.cta_strip.title}
            </h2>
            <p className="mt-3 text-white/70 text-lg">
              {messages.cta_strip.sub}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink
                href={`/${locale}/reservation/`}
                variant="primary"
                size="lg"
              >
                {messages.cta_strip.primary}
                <ArrowRight size={18} className="rtl:rotate-180" />
              </ButtonLink>
              <ButtonLink
                href={buildWhatsAppLink(wa)}
                target="_blank"
                variant="secondary"
                size="lg"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30"
              >
                <MessageCircle size={18} />
                {messages.cta_strip.secondary}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
