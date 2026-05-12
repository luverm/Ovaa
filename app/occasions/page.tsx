import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { BikeCard } from "@/components/site/BikeCard";
import { CategoryTilePair } from "@/components/site/CategoryTile";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { featuredBikes } from "@/lib/sample-data";

export const metadata: Metadata = {
  title: "Occasions",
  description:
    "Bekijk ons aanbod gebruikte motoren, demo modellen en occasions. Alles met BOVAG garantie.",
};

export default function OccasionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Aanbod"
        title="Occasions & demo motoren"
        subtitle="Een wisselend aanbod kwaliteitsoccasions en demo modellen — onderhouden in onze eigen werkplaats."
        image="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1800&q=70"
        breadcrumbs={[{ label: "Occasions" }]}
      />

      <Section>
        <Container>
          <div className="mb-10">
            <h2>Kies een categorie</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                href: "/occasions/demo",
                title: "Demo motoren",
                subtitle: "Aantrekkelijke prijzen",
                image:
                  "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=70",
              },
              {
                href: "/occasions/straat",
                title: "Occasions straat",
                subtitle: "Wegmotoren",
                image:
                  "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=70",
              },
              {
                href: "/occasions/off-road",
                title: "Occasions off-road",
                subtitle: "Cross & enduro",
                image:
                  "https://images.unsplash.com/photo-1593277224027-fe72b80fbb91?auto=format&fit=crop&w=1200&q=70",
              },
            ].map((t) => (
              <a
                key={t.href}
                href={t.href}
                className="group relative block aspect-[4/3] overflow-hidden rounded-xl bg-[var(--color-brand-bg)]"
              >
                <img
                  src={t.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-80 transition-all group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-accent)]">
                    {t.subtitle}
                  </p>
                  <h3 className="mt-1 text-2xl text-white">{t.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <header className="mb-8 flex items-end justify-between gap-4">
            <h2>Actueel aanbod</h2>
          </header>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredBikes.map((b) => (
              <li key={b.slug}>
                <BikeCard bike={b} />
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
