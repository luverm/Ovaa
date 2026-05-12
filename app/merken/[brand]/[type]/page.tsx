import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/site/PageHero";
import { BikeCard } from "@/components/site/BikeCard";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { brands } from "@/lib/site-config";
import { featuredBikes } from "@/lib/sample-data";

const typeLabels: Record<string, string> = {
  straat: "Straatmotoren",
  "off-road": "Off-Road",
};

export function generateStaticParams() {
  return brands.flatMap((b) => b.categories.map((c) => ({ brand: b.slug, type: c })));
}

export async function generateMetadata(props: {
  params: Promise<{ brand: string; type: string }>;
}): Promise<Metadata> {
  const { brand, type } = await props.params;
  const b = brands.find((x) => x.slug === brand);
  const label = typeLabels[type];
  if (!b || !label) return {};
  return { title: `${b.name} ${label}` };
}

export default async function BrandTypePage(props: {
  params: Promise<{ brand: string; type: string }>;
}) {
  const { brand, type } = await props.params;
  const b = brands.find((x) => x.slug === brand);
  const label = typeLabels[type];
  if (!b || !label || !b.categories.includes(type as never)) notFound();

  // For now, filter sample data loosely by brand. Real version pulls from Payload.
  const matches = featuredBikes.filter((x) => x.brand.toLowerCase() === b.name.toLowerCase());

  return (
    <>
      <PageHero
        eyebrow={b.name}
        title={`${b.name} ${label}`}
        subtitle={`Het volledige ${b.name} ${label.toLowerCase()} aanbod bij Ovaa Motors.`}
        image="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1800&q=70"
        breadcrumbs={[
          { label: "Merken", href: "/merken" },
          { label: b.name, href: `/merken/${b.slug}` },
          { label },
        ]}
      />
      <Section>
        <Container>
          {matches.length > 0 ? (
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {matches.map((bike) => (
                <li key={bike.slug}>
                  <BikeCard bike={bike} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="rounded-xl border border-dashed border-black/10 bg-white p-10 text-center">
              <h3>Modellen worden binnenkort online geplaatst</h3>
              <p className="mt-2 text-[var(--color-ink-muted)]">
                Bel ons voor het actuele aanbod {b.name} {label.toLowerCase()} of plan een
                showroombezoek.
              </p>
              <ButtonLink href="/contact" variant="primary" className="mt-6">
                Neem contact op
              </ButtonLink>
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
