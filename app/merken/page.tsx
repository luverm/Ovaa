import Link from "next/link";
import type { Metadata } from "next";
import { Bike } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { brands } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Merken",
  description: "Officieel dealer van Suzuki, Yamaha, KTM, Husqvarna en GASGAS.",
};

export default function MerkenPage() {
  return (
    <>
      <PageHero
        eyebrow="Officieel dealer"
        title="Onze merken"
        subtitle="Ovaa Motors is officieel dealer van vijf gerenommeerde motormerken — voor straat én off-road."
        image="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1800&q=70"
        breadcrumbs={[{ label: "Merken" }]}
      />
      <Section>
        <Container>
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {brands.map((b) => (
              <li key={b.slug}>
                <Link
                  href={`/merken/${b.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-black/5 bg-white p-7 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
                >
                  <span
                    className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg text-white"
                    style={{ backgroundColor: b.accent }}
                  >
                    <Bike className="h-6 w-6" />
                  </span>
                  <h2 className="text-2xl">{b.name}</h2>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-muted)]">
                    Dealer sinds {b.dealerSince} • {b.categories.join(" / ")}
                  </p>
                  <p className="mt-3 flex-1 text-sm text-[var(--color-ink-muted)] leading-relaxed">
                    {b.blurb}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-brand-accent)]">
                    Naar {b.name} →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
