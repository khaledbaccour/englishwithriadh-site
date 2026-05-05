import { Container } from "@/components/ui/Container";
import { STATS } from "@/data/stats";
import type { Messages } from "@/lib/i18n";

export function StatsRow({ messages }: { messages: Messages }) {
  const items = [
    { value: `${STATS.years}+`, label: messages.stats.years },
    { value: `${STATS.students}+`, label: messages.stats.students },
    { value: `${STATS.videos}+`, label: messages.stats.videos },
    { value: `${STATS.courses}`, label: messages.stats.courses },
  ];
  return (
    <section className="py-12 border-y border-[var(--color-ink-200)] bg-white">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.label} className="text-center md:text-start">
              <div className="text-3xl md:text-4xl font-extrabold text-[var(--color-ink-900)] tracking-tight">
                {it.value}
              </div>
              <div className="mt-1 text-sm text-[var(--color-ink-500)]">
                {it.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
