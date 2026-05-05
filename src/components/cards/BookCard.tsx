import Link from "next/link";
import { Card, CardImage, CardBody } from "@/components/ui/Card";
import { RatingStars } from "@/components/ui/RatingStars";
import { ButtonLink } from "@/components/ui/Button";
import type { Book } from "@/data/books";
import type { Locale, Messages } from "@/lib/i18n";
import { formatPriceTND } from "@/lib/format";

export function BookCard({
  book,
  locale,
  messages,
}: {
  book: Book;
  locale: Locale;
  messages: Messages;
}) {
  const href = `/${locale}/books/${book.slug}/`;
  return (
    <Card>
      <Link href={href} className="block">
        <CardImage src={book.image} alt={book.title[locale]} className="aspect-[3/4]" />
      </Link>
      <CardBody className="flex flex-col gap-3">
        <RatingStars value={book.rating} count={book.ratingCount} />
        <Link href={href}>
          <h3 className="text-[15px] sm:text-[17px] font-bold leading-snug text-[var(--color-ink-900)] hover:text-[var(--color-primary-600)] transition">
            {book.title[locale]}
          </h3>
        </Link>
        <p className="text-sm text-[var(--color-ink-500)] leading-relaxed line-clamp-2">
          {book.shortDescription[locale]}
        </p>
        <div className="flex flex-wrap items-center justify-between gap-3 mt-2 pt-3 border-t border-[var(--color-ink-100)]">
          <span className="text-lg font-bold text-[var(--color-ink-900)]">
            {formatPriceTND(book.priceTND, locale)}
          </span>
          <ButtonLink href={href} variant="primary" size="sm" className="ms-auto">
            {messages.books_page.buy_now}
          </ButtonLink>
        </div>
      </CardBody>
    </Card>
  );
}
