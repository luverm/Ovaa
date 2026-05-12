import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Phone, Mail, Calendar, Gauge, Cog, Tag } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { ContactPanel } from "@/components/site/ContactPanel";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { featuredBikes } from "@/lib/sample-data";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return featuredBikes.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const bike = featuredBikes.find((b) => b.slug === slug);
  if (!bike) return {};
  return {
    title: `${bike.brand} ${bike.model} (${bike.year})`,
    description: `${bike.brand} ${bike.model} ${bike.year} — €${bike.priceEur.toLocaleString("nl-NL")}.`,
  };
}

export default async function OccasionDetailPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const bike = featuredBikes.find((b) => b.slug === slug);
  if (!bike) notFound();

  const subject = encodeURIComponent(`Interesse in ${bike.brand} ${bike.model} (${bike.year})`);

  return (
    <>
      <PageHero
        eyebrow={bike.brand}
        title={`${bike.model}`}
        subtitle={`${bike.year} • ${bike.type} • ${bike.engineCc ?? "—"} cc`}
        breadcrumbs={[
          { label: "Occasions", href: "/occasions" },
          { label: `${bike.brand} ${bike.model}` },
        ]}
      />
      <Section>
        <Container className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[var(--color-surface-2)]">
              <Image
                src={bike.image}
                alt={`${bike.brand} ${bike.model}`}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="prose-content">
              <h2>Over deze motor</h2>
              <p>
                Deze {bike.brand} {bike.model} uit {bike.year} verkeert in goede staat en is volledig
                nagekeken in onze eigen werkplaats. Wij leveren elke occasion afleveringsklaar af:
                APK (indien van toepassing), grote beurt, kentekenoverdracht en uitgebreide
                rij-instructie inbegrepen.
              </p>
              <h3>Inbegrepen</h3>
              <ul>
                <li>BOVAG garantie en occasionplus garantie mogelijk</li>
                <li>Volledige beurt en olieverversing voor aflevering</li>
                <li>Optioneel: verlengde garantie tot 5 jaar</li>
                <li>Inruil mogelijk — wij maken u een eerlijk bod</li>
                <li>Financiering en verzekering kunnen direct geregeld worden</li>
              </ul>
            </div>
          </div>

          <aside className="space-y-5">
            <div className="rounded-xl bg-white p-6 shadow-[var(--shadow-card)]">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-muted)]">
                Vraagprijs
              </p>
              <p className="text-3xl font-bold text-[var(--color-brand-accent)]">
                €{bike.priceEur.toLocaleString("nl-NL")}
              </p>
              <ul className="mt-5 space-y-2.5 text-sm">
                <li className="flex items-center justify-between border-b border-black/5 pb-2">
                  <span className="flex items-center gap-2 text-[var(--color-ink-muted)]">
                    <Calendar className="h-4 w-4" /> Bouwjaar
                  </span>
                  <span className="font-semibold">{bike.year}</span>
                </li>
                <li className="flex items-center justify-between border-b border-black/5 pb-2">
                  <span className="flex items-center gap-2 text-[var(--color-ink-muted)]">
                    <Gauge className="h-4 w-4" />
                    {bike.hours != null ? "Draaiuren" : "KM-stand"}
                  </span>
                  <span className="font-semibold">
                    {bike.hours != null
                      ? `${bike.hours} u`
                      : `${bike.mileageKm?.toLocaleString("nl-NL") ?? "—"} km`}
                  </span>
                </li>
                <li className="flex items-center justify-between border-b border-black/5 pb-2">
                  <span className="flex items-center gap-2 text-[var(--color-ink-muted)]">
                    <Cog className="h-4 w-4" /> Cilinderinhoud
                  </span>
                  <span className="font-semibold">{bike.engineCc ? `${bike.engineCc} cc` : "—"}</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-[var(--color-ink-muted)]">
                    <Tag className="h-4 w-4" /> Type
                  </span>
                  <span className="font-semibold">{bike.type}</span>
                </li>
              </ul>
              <div className="mt-6 grid gap-2">
                <ButtonLink href="/contact" variant="primary" className="w-full">
                  Plan een proefrit
                </ButtonLink>
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-[var(--color-brand-bg)] px-5 text-sm font-medium hover:bg-[var(--color-brand-bg)] hover:text-white"
                >
                  <Phone className="h-4 w-4" /> Bel direct
                </a>
                <a
                  href={`mailto:${siteConfig.contact.email}?subject=${subject}`}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-[var(--color-brand-bg)] px-5 text-sm font-medium hover:bg-[var(--color-brand-bg)] hover:text-white"
                >
                  <Mail className="h-4 w-4" /> E-mail ons
                </a>
              </div>
            </div>
            <ContactPanel compact />
          </aside>
        </Container>
      </Section>
    </>
  );
}
