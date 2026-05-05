import { cn } from "@/lib/cn";

type Tone = "primary" | "neutral" | "success" | "warning";

const tones: Record<Tone, string> = {
  primary: "bg-[var(--color-primary-50)] text-[var(--color-primary-700)]",
  neutral: "bg-[var(--color-ink-100)] text-[var(--color-ink-700)]",
  success: "bg-emerald-50 text-emerald-700",
  warning: "bg-amber-50 text-amber-700",
};

export function Badge({
  tone = "primary",
  className,
  children,
}: {
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold tracking-wide",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
