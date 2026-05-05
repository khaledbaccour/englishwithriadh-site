import { Container } from "@/components/ui/Container";
import { CourseCard } from "@/components/cards/CourseCard";
import { COURSES } from "@/data/courses";
import { getMessages, isLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function CoursesPage({
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
            {messages.courses_page.title}
          </h1>
          <p className="mt-3 text-lg text-[var(--color-ink-500)] max-w-2xl">
            {messages.courses_page.sub}
          </p>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COURSES.map((c) => (
              <CourseCard key={c.slug} course={c} locale={locale} messages={messages} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
