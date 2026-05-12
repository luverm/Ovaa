import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { Container } from "@/components/ui/Container";

type Breadcrumb = { label: string; href?: string };

export function PageHero({
  title,
  eyebrow,
  subtitle,
  image,
  breadcrumbs = [],
}: {
  title: string;
  eyebrow?: string;
  subtitle?: string;
  image?: string;
  breadcrumbs?: Breadcrumb[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-brand-bg)] text-white">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            sizes="100vw"
            className="absolute inset-0 -z-10 object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </>
      )}
      <Container className="py-16 md:py-24">
        {breadcrumbs.length > 0 && (
          <nav aria-label="Kruimelpad" className="mb-4">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs opacity-80">
              <li>
                <Link href="/" className="inline-flex items-center gap-1 hover:text-[var(--color-brand-accent)]">
                  <Home className="h-3 w-3" /> Home
                </Link>
              </li>
              {breadcrumbs.map((b, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <ChevronRight className="h-3 w-3 opacity-60" />
                  {b.href ? (
                    <Link href={b.href} className="hover:text-[var(--color-brand-accent)]">
                      {b.label}
                    </Link>
                  ) : (
                    <span>{b.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-accent)]">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 max-w-3xl text-white">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-base md:text-lg opacity-90">{subtitle}</p>}
      </Container>
    </section>
  );
}
