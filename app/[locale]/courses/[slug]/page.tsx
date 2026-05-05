import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Award } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { RatingStars } from "@/components/ui/RatingStars";
import { COURSES, getCourseBySlug } from "@/data/courses";
import { LOCALES, getMessages, isLocale, type Locale } from "@/lib/i18n";
import { formatPriceTND } from "@/lib/format";

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of LOCALES) {
    for (const c of COURSES) {
      params.push({ locale, slug: c.slug });
    }
  }
  return params;
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const course = getCourseBySlug(slug);
  if (!course) notFound();
  const messages = getMessages(locale);

  return (
    <>
      <Container className="pt-8">
        <Link
          href={`/${locale}/courses/`}
          className="inline-flex items-center gap-1.5 text-sm text-[var(--color-ink-500)] hover:text-[var(--color-primary-600)]"
        >
          <ArrowLeft size={16} className="rtl:rotate-180" />
          {messages.courses_page.back_to_courses}
        </Link>
      </Container>

      <section className="py-10">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-5">
                {course.comingSoon ? (
                  <Badge tone="warning">{messages.courses_page.coming_soon}</Badge>
                ) : (
                  <Badge tone="primary">{course.level}</Badge>
                )}
                {course.rating > 0 && (
                  <RatingStars value={course.rating} count={course.ratingCount} />
                )}
              </div>
              <h1 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight text-[var(--color-ink-900)]">
                {course.title[locale]}
              </h1>
              <p className="mt-4 text-lg text-[var(--color-ink-500)] leading-relaxed">
                {course.longDescription[locale]}
              </p>

              <div className="mt-8 aspect-[16/10] rounded-[var(--radius-lg)] overflow-hidden bg-[var(--color-ink-100)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={course.image} alt={course.title[locale]} className="w-full h-full object-cover" />
              </div>

              {course.outcomes[locale].length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl font-extrabold text-[var(--color-ink-900)]">
                    {messages.courses_page.what_youll_learn}
                  </h2>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {course.outcomes[locale].map((o) => (
                      <li key={o} className="flex items-start gap-2.5 text-[var(--color-ink-700)]">
                        <CheckCircle2 size={20} className="text-[var(--color-success)] shrink-0 mt-0.5" />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {course.syllabus[locale].length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl font-extrabold text-[var(--color-ink-900)]">
                    {messages.courses_page.syllabus}
                  </h2>
                  <ol className="mt-5 space-y-3">
                    {course.syllabus[locale].map((s, i) => (
                      <li
                        key={s}
                        className="flex items-start gap-4 p-4 bg-white border border-[var(--color-ink-200)] rounded-[var(--radius-lg)]"
                      >
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-[var(--color-primary-50)] text-[var(--color-primary-600)] font-bold text-sm shrink-0">
                          {i + 1}
                        </span>
                        <span className="text-[var(--color-ink-700)]">{s}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>

            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="bg-white border border-[var(--color-ink-200)] rounded-[var(--radius-lg)] p-6 shadow-[var(--shadow-card)]">
                {!course.comingSoon ? (
                  <div className="flex items-baseline gap-3 mb-5">
                    <span className="text-3xl font-extrabold text-[var(--color-ink-900)]">
                      {course.priceTND !== null ? formatPriceTND(course.priceTND, locale) : "—"}
                    </span>
                    {course.oldPriceTND && (
                      <span className="text-base text-[var(--color-ink-400)] line-through">
                        {formatPriceTND(course.oldPriceTND, locale)}
                      </span>
                    )}
                  </div>
                ) : (
                  <div className="mb-5 text-lg font-semibold text-[var(--color-warning)]">
                    {messages.courses_page.coming_soon}
                  </div>
                )}

                <ButtonLink
                  href={`/${locale}/reservation/?course=${course.slug}`}
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  {messages.courses_page.reserve}
                </ButtonLink>

                {!course.comingSoon && (
                  <dl className="mt-6 space-y-3 text-sm">
                    <Row label={messages.courses_page.lessons} value={String(course.lessons)} />
                    <Row label={messages.courses_page.hours} value={String(course.hours)} />
                    <Row label={messages.courses_page.students} value={String(course.students)} />
                    <Row label={messages.courses_page.level} value={course.level} />
                  </dl>
                )}

                <div className="mt-6 pt-6 border-t border-[var(--color-ink-200)]">
                  <span className="text-xs uppercase tracking-wider font-bold text-[var(--color-ink-500)]">
                    {messages.courses_page.instructor}
                  </span>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-[var(--color-ink-100)] shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/images/riadh-portrait.png" alt="Riadh Koubaa" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-bold text-[var(--color-ink-900)]">Riadh Koubaa</div>
                      <div className="text-xs text-[var(--color-ink-500)] flex items-center gap-1 mt-0.5">
                        <Award size={12} className="text-[var(--color-primary-600)]" />
                        Fulbright · ASU certified
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-[var(--color-ink-700)]">
      <dt className="text-[var(--color-ink-500)]">{label}</dt>
      <dd className="font-semibold">{value}</dd>
    </div>
  );
}
