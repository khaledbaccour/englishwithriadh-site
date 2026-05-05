import Link from "next/link";
import { Card, CardImage, CardBody } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { RatingStars } from "@/components/ui/RatingStars";
import { ButtonLink } from "@/components/ui/Button";
import type { Course } from "@/data/courses";
import type { Locale, Messages } from "@/lib/i18n";
import { formatPriceTND } from "@/lib/format";
import { ArrowRight } from "lucide-react";

export function CourseCard({
  course,
  locale,
  messages,
}: {
  course: Course;
  locale: Locale;
  messages: Messages;
}) {
  const href = `/${locale}/courses/${course.slug}/`;

  return (
    <Card>
      <Link href={href} className="block">
        <CardImage src={course.image} alt={course.title[locale]} />
      </Link>
      <CardBody className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          {course.comingSoon ? (
            <Badge tone="warning">{messages.courses_page.coming_soon}</Badge>
          ) : (
            <Badge tone="primary">{course.level}</Badge>
          )}
          {!course.comingSoon && course.rating > 0 && (
            <RatingStars value={course.rating} count={course.ratingCount} />
          )}
        </div>

        <Link href={href} className="block">
          <h3 className="text-[18px] font-bold leading-snug text-[var(--color-ink-900)] hover:text-[var(--color-primary-600)] transition">
            {course.title[locale]}
          </h3>
        </Link>

        <p className="text-sm text-[var(--color-ink-500)] leading-relaxed line-clamp-2">
          {course.shortDescription[locale]}
        </p>

        {!course.comingSoon && (
          <div className="flex items-center gap-1.5 text-xs text-[var(--color-ink-500)]">
            <span>
              {course.lessons} {messages.courses_page.lessons}
            </span>
            <span>·</span>
            <span>
              {course.hours} {messages.courses_page.hours}
            </span>
            <span>·</span>
            <span>
              {course.students} {messages.courses_page.students}
            </span>
          </div>
        )}

        <div className="flex items-end justify-between mt-2 pt-3 border-t border-[var(--color-ink-100)]">
          {course.comingSoon ? (
            <span className="text-sm text-[var(--color-ink-500)]">
              {messages.courses_page.coming_soon}
            </span>
          ) : (
            <div className="flex items-baseline gap-2">
              {course.oldPriceTND && (
                <span className="text-sm text-[var(--color-ink-400)] line-through">
                  {formatPriceTND(course.oldPriceTND, locale)}
                </span>
              )}
              <span className="text-lg font-bold text-[var(--color-ink-900)]">
                {course.priceTND !== null ? formatPriceTND(course.priceTND, locale) : "—"}
              </span>
            </div>
          )}
          <ButtonLink href={href} variant="ghost" size="sm" className="px-3">
            {messages.common.learn_more}
            <ArrowRight size={14} className="rtl:rotate-180" />
          </ButtonLink>
        </div>
      </CardBody>
    </Card>
  );
}
