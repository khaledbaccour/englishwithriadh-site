import { Container } from "@/components/ui/Container";
import { Award, GraduationCap, MapPin, Languages } from "lucide-react";
import { QUALIFICATIONS } from "@/data/qualifications";
import { StatsRow } from "@/components/sections/StatsRow";
import { CtaStrip } from "@/components/sections/CtaStrip";
import { getMessages, isLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function AboutPage({
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
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] items-center">
            <div className="aspect-[4/5] rounded-[var(--radius-xl)] overflow-hidden bg-[var(--color-ink-100)] max-w-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/riadh-about.png" alt="Riadh Koubaa" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold tracking-tight text-[var(--color-ink-900)]">
                {messages.about.title}
              </h1>
              <p className="mt-4 text-xl text-[var(--color-ink-500)]">{messages.about.sub}</p>
              <div className="mt-6 space-y-4 text-[var(--color-ink-700)] leading-relaxed">
                <p>{messages.about.bio_p1}</p>
                <p>{messages.about.bio_p2}</p>
                <p>{messages.about.bio_p3}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--color-ink-500)]">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={15} /> Sfax, Tunisia
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Languages size={15} /> English · Arabic · French
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <StatsRow messages={messages} />

      <section className="py-20">
        <Container>
          <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-[var(--color-ink-900)]">
            {messages.about.qualifications}
          </h2>
          <div className="mt-10 relative">
            <div className="absolute start-4 top-2 bottom-2 w-px bg-[var(--color-ink-200)]" aria-hidden />
            <ol className="space-y-6">
              {QUALIFICATIONS.map((q) => (
                <li key={q.year + q.title.en} className="relative ps-12">
                  <span className="absolute start-0 top-1 inline-flex items-center justify-center w-9 h-9 rounded-full bg-[var(--color-primary-50)] text-[var(--color-primary-600)]">
                    {q.title.en.includes("Fulbright") ? <Award size={16} /> : <GraduationCap size={16} />}
                  </span>
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <span className="text-sm font-bold text-[var(--color-primary-600)]">{q.year}</span>
                    <span className="font-bold text-[var(--color-ink-900)]">{q.title[locale]}</span>
                  </div>
                  <div className="text-sm text-[var(--color-ink-500)] mt-0.5">{q.org[locale]}</div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <CtaStrip locale={locale} messages={messages} />
    </>
  );
}
