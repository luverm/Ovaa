import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/site/PageHero";
import { CategoryTilePair } from "@/components/site/CategoryTile";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { brands } from "@/lib/site-config";

const brandImages: Record<string, { hero: string; straat: string; offroad: string }> = {
  suzuki: {
    hero: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1800&q=70",
    straat: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=70",
    offroad: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=70",
  },
  yamaha: {
    hero: "https://images.unsplash.com/photo-1564396797379-e1e9a9cda5a2?auto=format&fit=crop&w=1800&q=70",
    straat: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=70",
    offroad: "https://images.unsplash.com/photo-1564396797379-e1e9a9cda5a2?auto=format&fit=crop&w=1200&q=70",
  },
  ktm: {
    hero: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1800&q=70",
    straat: "https://images.unsplash.com/photo-1611241443322-b5ea34d61029?auto=format&fit=crop&w=1200&q=70",
    offroad: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=70",
  },
  husqvarna: {
    hero: "https://images.unsplash.com/photo-1611241443322-b5ea34d61029?auto=format&fit=crop&w=1800&q=70",
    straat: "https://images.unsplash.com/photo-1611241443322-b5ea34d61029?auto=format&fit=crop&w=1200&q=70",
    offroad: "https://images.unsplash.com/photo-1593277224027-fe72b80fbb91?auto=format&fit=crop&w=1200&q=70",
  },
  gasgas: {
    hero: "https://images.unsplash.com/photo-1593277224027-fe72b80fbb91?auto=format&fit=crop&w=1800&q=70",
    straat: "https://images.unsplash.com/photo-1593277224027-fe72b80fbb91?auto=format&fit=crop&w=1200&q=70",
    offroad: "https://images.unsplash.com/photo-1593277224027-fe72b80fbb91?auto=format&fit=crop&w=1200&q=70",
  },
};

export function generateStaticParams() {
  return brands.map((b) => ({ brand: b.slug }));
}

export async function generateMetadata(props: { params: Promise<{ brand: string }> }): Promise<Metadata> {
  const { brand } = await props.params;
  const b = brands.find((x) => x.slug === brand);
  if (!b) return {};
  return {
    title: b.name,
    description: b.blurb,
  };
}

export default async function BrandPage(props: { params: Promise<{ brand: string }> }) {
  const { brand } = await props.params;
  const b = brands.find((x) => x.slug === brand);
  if (!b) notFound();
  const imgs = brandImages[b.slug];

  const tiles = b.categories.map((c) => ({
    href: `/merken/${b.slug}/${c}`,
    title: c === "straat" ? "Straatmotoren" : "Off-Road",
    subtitle: b.name,
    image: c === "straat" ? imgs.straat : imgs.offroad,
  })) as Parameters<typeof CategoryTilePair>[0]["tiles"];

  return (
    <>
      <PageHero
        eyebrow={`Officieel ${b.name} dealer sinds ${b.dealerSince}`}
        title={b.name}
        subtitle={b.blurb}
        image={imgs.hero}
        breadcrumbs={[{ label: "Merken", href: "/merken" }, { label: b.name }]}
      />
      <Section>
        <Container>
          <header className="mb-8 max-w-2xl">
            <h2>Kies uw categorie</h2>
            <p className="mt-3 text-[var(--color-ink-muted)]">
              Bekijk ons {b.name}-aanbod, opgesplitst in {b.categories.length === 2 ? "straat en off-road" : "off-road"}.
            </p>
          </header>
          {tiles.length === 2 ? (
            <CategoryTilePair tiles={tiles as [(typeof tiles)[0], (typeof tiles)[1]]} />
          ) : (
            <div className="grid gap-5 md:grid-cols-2">
              {tiles.map((t) => (
                <Link
                  key={t.href}
                  href={t.href}
                  className="group relative block aspect-[16/10] overflow-hidden rounded-xl bg-[var(--color-brand-bg)]"
                >
                  <img
                    src={t.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-80 transition-all group-hover:opacity-100 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-accent)]">
                      {t.subtitle}
                    </p>
                    <h3 className="mt-1 text-2xl text-white">{t.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </Section>
      <Section tone="muted">
        <Container className="flex flex-wrap items-center justify-between gap-4">
          <div className="max-w-xl">
            <h3>Interesse in een {b.name}?</h3>
            <p className="mt-2 text-[var(--color-ink-muted)]">
              Bel of bezoek onze showroom in Vlissingen voor persoonlijk advies, een proefrit of inruil.
            </p>
          </div>
          <div className="flex gap-3">
            <ButtonLink href="/contact" variant="primary">Neem contact op</ButtonLink>
            <ButtonLink href="/occasions" variant="outline">Bekijk occasions</ButtonLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
