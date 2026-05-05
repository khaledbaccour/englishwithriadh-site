import Link from "next/link";
import { MessageCircle, PenTool, ScrollText, GraduationCap, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import type { Locale, Messages } from "@/lib/i18n";

export function CategoriesGrid({
  locale,
  messages,
}: {
  locale: Locale;
  messages: Messages;
}) {
  const items = [
    {
      icon: <MessageCircle size={22} />,
      title: messages.categories.conversation_title,
      sub: messages.categories.conversation_sub,
      href: `/${locale}/courses/?cat=conversation`,
    },
    {
      icon: <PenTool size={22} />,
      title: messages.categories.writing_title,
      sub: messages.categories.writing_sub,
      href: `/${locale}/courses/?cat=writing`,
    },
    {
      icon: <ScrollText size={22} />,
      title: messages.categories.exams_title,
      sub: messages.categories.exams_sub,
      href: `/${locale}/courses/?cat=exams`,
    },
    {
      icon: <GraduationCap size={22} />,
      title: messages.categories.school_title,
      sub: messages.categories.school_sub,
      href: `/${locale}/courses/?cat=school`,
    },
  ];

  return (
    <section className="py-20">
      <Container>
        <div className="max-w-2xl mb-10">
          <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-[var(--color-ink-900)]">
            {messages.categories.title}
          </h2>
          <p className="mt-3 text-[var(--color-ink-500)]">
            {messages.categories.sub}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <Link
              key={it.title}
              href={it.href}
              className="group bg-white border border-[var(--color-ink-200)] rounded-[var(--radius-lg)] p-6 transition duration-200 hover:border-[var(--color-primary-500)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5"
            >
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-[var(--color-primary-50)] text-[var(--color-primary-600)] mb-4">
                {it.icon}
              </span>
              <h3 className="text-base font-bold text-[var(--color-ink-900)]">
                {it.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-ink-500)] leading-relaxed">
                {it.sub}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary-600)]">
                {messages.common.learn_more}
                <ArrowRight size={14} className="transition group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
