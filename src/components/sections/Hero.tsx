import { Award, GraduationCap, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import type { Locale, Messages } from "@/lib/i18n";

export function Hero({
  locale,
  messages,
}: {
  locale: Locale;
  messages: Messages;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[var(--color-ink-50)] to-white">
      <Container className="relative grid gap-10 py-12 sm:gap-12 sm:py-16 lg:py-24 lg:grid-cols-[1.1fr_1fr] items-center">
        <div className="flex flex-col items-start gap-6">
          <Badge tone="primary" className="px-3 py-1.5">
            {messages.hero.eyebrow}
          </Badge>
          <h1 className="text-[clamp(2rem,7vw,3.75rem)] font-extrabold leading-[1.1] tracking-tight text-[var(--color-ink-900)]">
            {messages.hero.title_1}
            <br />
            <span className="text-[var(--color-primary-600)]">
              {messages.hero.title_2}
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-ink-500)] leading-relaxed max-w-xl">
            {messages.hero.sub}
          </p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap w-full sm:w-auto gap-3">
            <ButtonLink
              href={`/${locale}/courses/`}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto justify-center"
            >
              {messages.hero.cta_primary}
              <ArrowRight size={18} className="rtl:rotate-180" />
            </ButtonLink>
            <ButtonLink
              href={`/${locale}/about/`}
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto justify-center"
            >
              {messages.hero.cta_secondary}
            </ButtonLink>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 mt-2 border-t border-[var(--color-ink-200)] w-full max-w-md">
            <Stat value="17+" label={messages.hero.trust_years} />
            <Divider />
            <Stat value="500+" label={messages.hero.trust_students} />
            <Divider />
            <Stat value="80+" label={messages.hero.trust_videos} />
          </div>
        </div>

        <div className="relative px-2 sm:px-0">
          <div className="relative aspect-[4/5] w-full max-w-sm sm:max-w-md mx-auto rounded-[var(--radius-xl)] overflow-hidden bg-[var(--color-ink-100)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/riadh-portrait.png"
              alt="Riadh Koubaa"
              className="w-full h-full object-cover"
            />
          </div>

          <FloatingCard
            className="absolute -top-3 start-3 lg:-start-8"
            icon={<Award className="text-[var(--color-primary-600)]" size={20} />}
            title={messages.hero.credential_fulbright}
            sub={messages.hero.credential_fulbright_sub}
          />

          <FloatingCard
            className="absolute -bottom-4 end-3 lg:-end-8"
            icon={<GraduationCap className="text-[var(--color-primary-600)]" size={20} />}
            title={messages.hero.credential_asu}
            sub={messages.hero.credential_asu_sub}
          />
        </div>
      </Container>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-2xl font-extrabold text-[var(--color-ink-900)] leading-none">
        {value}
      </span>
      <span className="text-xs text-[var(--color-ink-500)] mt-1">{label}</span>
    </div>
  );
}

function Divider() {
  return (
    <span
      className="hidden sm:inline-block w-px h-10 bg-[var(--color-ink-200)]"
      aria-hidden
    />
  );
}

function FloatingCard({
  icon,
  title,
  sub,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  sub: string;
  className?: string;
}) {
  return (
    <div
      className={
        "bg-white rounded-[var(--radius-lg)] border border-[var(--color-ink-200)] shadow-[var(--shadow-floating)] px-4 py-3 flex items-center gap-3 max-w-[240px] " +
        (className || "")
      }
    >
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-[var(--color-primary-50)] shrink-0">
        {icon}
      </span>
      <div className="leading-tight">
        <div className="font-bold text-sm text-[var(--color-ink-900)]">{title}</div>
        <div className="text-xs text-[var(--color-ink-500)] mt-0.5">{sub}</div>
      </div>
    </div>
  );
}
