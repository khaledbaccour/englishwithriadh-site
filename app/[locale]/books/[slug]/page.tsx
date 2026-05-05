import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { RatingStars } from "@/components/ui/RatingStars";
import { BOOKS, getBookBySlug } from "@/data/books";
import { LOCALES, getMessages, isLocale, type Locale } from "@/lib/i18n";
import { formatPriceTND, buildWhatsAppLink } from "@/lib/format";

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of LOCALES) {
    for (const b of BOOKS) {
      params.push({ locale, slug: b.slug });
    }
  }
  return params;
}

export default async function BookDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const book = getBookBySlug(slug);
  if (!book) notFound();
  const messages = getMessages(locale);

  const wa =
    locale === "ar"
      ? `السلام عليكم رياض، أودّ طلب: ${book.title.ar}`
      : `Hi Riadh, I would like to order: ${book.title.en}`;

  return (
    <>
      <Container className="pt-8">
        <Link
          href={`/${locale}/books/`}
          className="inline-flex items-center gap-1.5 text-sm text-[var(--color-ink-500)] hover:text-[var(--color-primary-600)]"
        >
          <ArrowLeft size={16} className="rtl:rotate-180" />
          {messages.books_page.back_to_books}
        </Link>
      </Container>

      <section className="py-10">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <div className="aspect-[3/4] rounded-[var(--radius-lg)] overflow-hidden bg-[var(--color-ink-100)] border border-[var(--color-ink-200)] max-w-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={book.image} alt={book.title[locale]} className="w-full h-full object-cover" />
            </div>

            <div>
              <RatingStars value={book.rating} count={book.ratingCount} />
              <h1 className="mt-3 text-[clamp(2rem,4vw,2.75rem)] font-extrabold tracking-tight text-[var(--color-ink-900)]">
                {book.title[locale]}
              </h1>
              <p className="mt-4 text-lg text-[var(--color-ink-500)] leading-relaxed">
                {book.longDescription[locale]}
              </p>

              <div className="mt-8 flex items-center gap-3">
                <span className="text-3xl font-extrabold text-[var(--color-ink-900)]">
                  {formatPriceTND(book.priceTND, locale)}
                </span>
                <ButtonLink href={buildWhatsAppLink(wa)} target="_blank" variant="primary" size="lg">
                  {messages.books_page.buy_now}
                </ButtonLink>
              </div>

              <div className="mt-10">
                <h2 className="text-xl font-extrabold text-[var(--color-ink-900)]">
                  {messages.books_page.what_inside}
                </h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {book.contents[locale].map((c) => (
                    <li key={c} className="flex items-start gap-2.5 text-[var(--color-ink-700)]">
                      <CheckCircle2 size={20} className="text-[var(--color-success)] shrink-0 mt-0.5" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
