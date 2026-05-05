import { Star } from "lucide-react";
import { cn } from "@/lib/cn";

export function RatingStars({
  value,
  count,
  className,
}: {
  value: number;
  count?: number;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-1 text-sm text-[var(--color-ink-700)]", className)}>
      <Star size={16} className="fill-[var(--color-rating)] text-[var(--color-rating)]" strokeWidth={0} />
      <span className="font-semibold">{value.toFixed(1)}</span>
      {typeof count === "number" && (
        <span className="text-[var(--color-ink-500)]">({count})</span>
      )}
    </span>
  );
}
