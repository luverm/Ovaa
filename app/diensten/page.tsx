import type { Metadata } from "next";
import Link from "next/link";
import {
  Wrench,
  Circle,
  CreditCard,
  ShieldCheck,
  Shield,
  ShieldHalf,
  Search,
  ArrowRight,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { services } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Werkplaats, bandenservice, financiering, verzekeringen, garanties en parts finder bij Ovaa Motors.",
};

const iconMap = {
  wrench: Wrench,
  circle: Circle,
  "credit-card": CreditCard,
  "shield-check": ShieldCheck,
  shield: Shield,
  "shield-half": ShieldHalf,
  search: Search,
} as const;

export default function DienstenPage() {
  return (
    <>
      <PageHero
        eyebrow="Onze service"
        title="Diensten"
        subtitle="Van werkplaats tot verzekering — alles onder één dak voor een zorgeloos motorbezit."
        image="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1800&q=70"
        breadcrumbs={[{ label: "Diensten" }]}
      />
      <Section>
        <Container>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = iconMap[s.icon as keyof typeof iconMap] ?? Wrench;
              return (
                <li key={s.slug}>
                  <Link
                    href={`/diensten/${s.slug}`}
                    className="group flex h-full flex-col rounded-xl border border-black/5 bg-white p-7 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
                  >
                    <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-brand-accent)]/10 text-[var(--color-brand-accent)]">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="text-xl">{s.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-[var(--color-ink-muted)] leading-relaxed">
                      {s.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-brand-accent)]">
                      Meer informatie{" "}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>
    </>
  );
}
