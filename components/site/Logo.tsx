import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({ className, dark = false }: { className?: string; dark?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Ovaa Motors — naar de homepagina"
      className={cn("inline-flex items-center gap-2 font-bold tracking-tight", className)}
    >
      <svg width="34" height="34" viewBox="0 0 40 40" aria-hidden="true">
        <circle cx="20" cy="20" r="19" fill="none" stroke={dark ? "#fff" : "#293133"} strokeWidth="2" />
        <path
          d="M12 26 L20 13 L28 26 M15 22 H25"
          stroke={dark ? "#fff" : "#293133"}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <span className={cn("text-lg leading-none", dark ? "text-white" : "text-[var(--color-brand-bg)]")}>
        OVAA <span className="font-light">MOTORS</span>
      </span>
    </Link>
  );
}
