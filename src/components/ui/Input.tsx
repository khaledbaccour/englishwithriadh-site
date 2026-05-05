import { cn } from "@/lib/cn";

const fieldBase =
  "w-full bg-white border border-[var(--color-ink-200)] rounded-md px-4 py-3 text-[15px] text-[var(--color-ink-900)] placeholder:text-[var(--color-ink-400)] transition duration-150 focus:outline-none focus:border-[var(--color-primary-500)] focus:ring-4 focus:ring-[var(--color-primary-50)]";

export function Field({
  label,
  required,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block mb-1.5 text-sm font-semibold text-[var(--color-ink-900)]">
        {label}
        {required && <span className="text-[var(--color-primary-600)] ms-0.5">*</span>}
      </span>
      {children}
      {hint && (
        <span className="block mt-1.5 text-xs text-[var(--color-ink-500)]">{hint}</span>
      )}
    </label>
  );
}

export function Input({
  className,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(fieldBase, className)} {...rest} />;
}

export function Textarea({
  className,
  rows = 4,
  ...rest
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea rows={rows} className={cn(fieldBase, "resize-y min-h-[120px]", className)} {...rest} />;
}

export function Select({
  className,
  children,
  ...rest
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select className={cn(fieldBase, "appearance-none bg-no-repeat bg-[right_1rem_center] pe-10", className)} {...rest}>
      {children}
    </select>
  );
}
