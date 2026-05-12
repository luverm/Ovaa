import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const buttonStyles = cva(
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-accent)]",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--color-brand-accent)] text-white hover:bg-[var(--color-brand-accent-hover)]",
        secondary: "bg-[var(--color-brand-bg)] text-white hover:bg-[var(--color-brand-bg-2)]",
        outline:
          "border border-[var(--color-brand-bg)] text-[var(--color-brand-bg)] hover:bg-[var(--color-brand-bg)] hover:text-white",
        ghost: "text-[var(--color-brand-bg)] hover:bg-black/5",
        light: "bg-white text-[var(--color-brand-bg)] hover:bg-white/90",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-11 px-5 text-sm",
        lg: "h-12 px-7 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles> & { href?: never };

type LinkProps = Omit<React.ComponentProps<typeof Link>, "className"> &
  VariantProps<typeof buttonStyles> & { className?: string; href: string };

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonStyles({ variant, size }), className)} {...props} />;
}

export function ButtonLink({ className, variant, size, ...props }: LinkProps) {
  return <Link className={cn(buttonStyles({ variant, size }), className)} {...props} />;
}
