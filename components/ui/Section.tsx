import { cn } from "@/lib/cn";

type Props = React.HTMLAttributes<HTMLElement> & {
  tone?: "default" | "muted" | "dark" | "accent";
  size?: "sm" | "md" | "lg";
};

export function Section({ className, tone = "default", size = "md", ...props }: Props) {
  const tones = {
    default: "bg-white",
    muted: "bg-[var(--color-surface-2)]",
    dark: "bg-[var(--color-brand-bg)] text-white",
    accent: "bg-[var(--color-brand-accent)] text-white",
  };
  const sizes = {
    sm: "py-10 md:py-14",
    md: "py-14 md:py-20",
    lg: "py-20 md:py-28",
  };
  return <section className={cn(tones[tone], sizes[size], className)} {...props} />;
}
