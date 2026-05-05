import { cn } from "@/lib/cn";

type Size = "sm" | "md" | "lg" | "xl";

const sizes: Record<Size, string> = {
  sm: "w-10 h-10",
  md: "w-12 h-12",
  lg: "w-16 h-16",
  xl: "w-20 h-20",
};

export function Avatar({
  src,
  alt,
  size = "md",
  className,
}: {
  src: string;
  alt: string;
  size?: Size;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-full overflow-hidden ring-2 ring-white border border-[var(--color-ink-200)] shrink-0",
        sizes[size],
        className,
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}
