import { Container } from "@/components/ui/Container";
import { Accordion } from "@/components/Accordion";
import { getMessages, isLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const messages = getMessages(locale);

  const groups = [
    {
      title: messages.faq.tabs.online,
      items: [
        { id: "online_1", question: messages.faq.items.online_1_q, answer: messages.faq.items.online_1_a },
        { id: "online_2", question: messages.faq.items.online_2_q, answer: messages.faq.items.online_2_a },
        { id: "online_3", question: messages.faq.items.online_3_q, answer: messages.faq.items.online_3_a },
      ],
    },
    {
      title: messages.faq.tabs.payment,
      items: [
        { id: "payment_1", question: messages.faq.items.payment_1_q, answer: messages.faq.items.payment_1_a },
        { id: "payment_2", question: messages.faq.items.payment_2_q, answer: messages.faq.items.payment_2_a },
      ],
    },
    {
      title: messages.faq.tabs.pricing,
      items: [
        { id: "pricing_1", question: messages.faq.items.pricing_1_q, answer: messages.faq.items.pricing_1_a },
        { id: "pricing_2", question: messages.faq.items.pricing_2_q, answer: messages.faq.items.pricing_2_a },
      ],
    },
  ];

  return (
    <>
      <section className="bg-[var(--color-ink-50)] py-16">
        <Container>
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight text-[var(--color-ink-900)]">
            {messages.faq.title}
          </h1>
          <p className="mt-3 text-lg text-[var(--color-ink-500)] max-w-2xl">{messages.faq.sub}</p>
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-3xl space-y-12">
          {groups.map((g) => (
            <div key={g.title}>
              <h2 className="text-xl font-extrabold text-[var(--color-ink-900)] mb-4">{g.title}</h2>
              <Accordion items={g.items} />
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
