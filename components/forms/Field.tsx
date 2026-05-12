import { cn } from "@/lib/cn";

export function Field({
  label,
  htmlFor,
  error,
  required,
  hint,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={htmlFor} className="text-sm font-medium">
        {label}
        {required && <span className="ml-0.5 text-[var(--color-danger)]">*</span>}
      </label>
      {children}
      {hint && !error && <p className="text-xs text-[var(--color-ink-muted)]">{hint}</p>}
      {error && <p className="text-xs text-[var(--color-danger)]">{error}</p>}
    </div>
  );
}

export const inputClass =
  "h-11 w-full rounded-md border border-black/10 bg-white px-3 text-sm shadow-sm focus:border-[var(--color-brand-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-accent)]/30";
