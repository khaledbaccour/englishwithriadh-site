import { Container } from "@/components/ui/Container";
import { CourseCard } from "@/components/cards/CourseCard";
import { ButtonLink } from "@/components/ui/Button";
import { COURSES } from "@/data/courses";
import type { Locale, Messages } from "@/lib/i18n";
import { ArrowRight } from "lucide-react";

export function FeaturedCourses({
  locale,
  messages,
}: {
  locale: Locale;
  messages: Messages;
}) {
  return (
    <section className="py-20 bg-[var(--color-ink-50)]">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-[var(--color-ink-900)]">
              {messages.courses_section.title}
            </h2>
            <p className="mt-3 text-[var(--color-ink-500)]">
              {messages.courses_section.sub}
            </p>
          </div>
          <ButtonLink href={`/${locale}/courses/`} variant="secondary" size="md">
            {messages.courses_section.view_all}
            <ArrowRight size={16} className="rtl:rotate-180" />
          </ButtonLink>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((c) => (
            <CourseCard key={c.slug} course={c} locale={locale} messages={messages} />
          ))}
        </div>
      </Container>
    </section>
  );
}
