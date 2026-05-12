import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/site/PageHero";
import { BikeCard } from "@/components/site/BikeCard";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { featuredBikes } from "@/lib/sample-data";

const types = {
  demo: {
    title: "Demo motoren",
    subtitle:
      "Onze demo motoren — fabrieksgarantie, BTW verrekenbaar, vrijwel nieuwstaat. 10 dagen gratis all-risk verzekering inbegrepen.",
    filter: (b: (typeof featuredBikes)[number]) => b.condition === "demo",
  },
  straat: {
    title: "Occasions wegmotoren",
    subtitle: "Onze straat-occasions: sport, tour, naked en adventure motoren.",
    filter: (b: (typeof featuredBikes)[number]) =>
      ["Naked", "Adventure", "Sport", "Tour", "Supermoto"].includes(b.type),
  },
  "off-road": {
    title: "Occasions off-road",
    subtitle: "Cross, enduro en motard occasions — door onze monteurs nagekeken.",
    filter: (b: (typeof featuredBikes)[number]) =>
      ["Motocross", "Enduro", "Cross"].includes(b.type),
  },
} as const;

export function generateStaticParams() {
  return Object.keys(types).map((type) => ({ type }));
}

export async function generateMetadata(props: {
  params: Promise<{ type: keyof typeof types }>;
}): Promise<Metadata> {
  const { type } = await props.params;
  const meta = types[type];
  return meta ? { title: meta.title, description: meta.subtitle } : {};
}

export default async function OccasionTypePage(props: {
  params: Promise<{ type: keyof typeof types }>;
}) {
  const { type } = await props.params;
  const meta = types[type];
  if (!meta) notFound();
  const bikes = featuredBikes.filter(meta.filter);

  return (
    <>
      <PageHero
        eyebrow="Aanbod"
        title={meta.title}
        subtitle={meta.subtitle}
        image="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1800&q=70"
        breadcrumbs={[{ label: "Occasions", href: "/occasions" }, { label: meta.title }]}
      />
      <Section>
        <Container>
          {bikes.length > 0 ? (
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {bikes.map((b) => (
                <li key={b.slug}>
                  <BikeCard bike={b} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="rounded-xl border border-dashed border-black/10 bg-white p-10 text-center">
              <h3>Geen motoren in deze categorie</h3>
              <p className="mt-2 text-[var(--color-ink-muted)]">
                Staat de motor er niet tussen? Neem contact op — wij hebben mogelijk wat anders
                beschikbaar.
              </p>
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
