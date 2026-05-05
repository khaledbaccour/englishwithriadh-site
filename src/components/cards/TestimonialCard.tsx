import { Star } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import type { Testimonial } from "@/data/testimonials";
import type { Locale } from "@/lib/i18n";

export function TestimonialCard({
  testimonial,
  locale,
}: {
  testimonial: Testimonial;
  locale: Locale;
}) {
  return (
    <figure className="bg-white border border-[var(--color-ink-200)] rounded-[var(--radius-lg)] p-6 flex flex-col gap-4">
      <div className="flex items-center gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className="fill-[var(--color-rating)] text-[var(--color-rating)]"
            strokeWidth={0}
          />
        ))}
      </div>
      <blockquote className="text-[15px] text-[var(--color-ink-700)] leading-relaxed">
        “{testimonial.quote[locale]}”
      </blockquote>
      <figcaption className="flex items-center gap-3 mt-auto pt-4 border-t border-[var(--color-ink-100)]">
        <Avatar src={testimonial.avatar} alt={testimonial.name} size="md" />
        <div>
          <div className="font-bold text-sm text-[var(--color-ink-900)]">
            {testimonial.name}
          </div>
          <div className="text-xs text-[var(--color-ink-500)]">
            {testimonial.role[locale]}
          </div>
        </div>
      </figcaption>
    </figure>
  );
}
