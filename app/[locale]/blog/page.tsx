import { Container } from "@/components/ui/Container";
import { getMessages, isLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function BlogPage({
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
            {messages.blog.title}
          </h1>
          <p className="mt-3 text-lg text-[var(--color-ink-500)] max-w-2xl">{messages.blog.sub}</p>
        </Container>
      </section>
      <section className="py-16">
        <Container className="max-w-2xl text-center">
          <div className="bg-white border border-[var(--color-ink-200)] rounded-[var(--radius-lg)] p-12">
            <p className="text-[var(--color-ink-500)]">{messages.blog.empty}</p>
          </div>
        </Container>
      </section>
    </>
  );
}
