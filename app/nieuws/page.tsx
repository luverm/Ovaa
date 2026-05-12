import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { newsPosts } from "@/lib/sample-data";

export const metadata: Metadata = {
  title: "Nieuws & acties",
  description: "Actuele aanbiedingen, model-introducties en acties bij Ovaa Motors.",
};

export default function NieuwsPage() {
  return (
    <>
      <PageHero
        eyebrow="Acties"
        title="Nieuws & acties"
        subtitle="Lopende aanbiedingen, model-introducties en nieuws uit onze showroom."
        image="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1800&q=70"
        breadcrumbs={[{ label: "Nieuws" }]}
      />
      <Section>
        <Container>
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsPosts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/nieuws/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-lift)]"
                >
                  <div className="relative aspect-[16/10] bg-[var(--color-surface-2)]">
                    <Image
                      src={p.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-brand-accent)]">
                      {p.category} • {new Date(p.publishedAt).toLocaleDateString("nl-NL", { year: "numeric", month: "long", day: "numeric" })}
                    </p>
                    <h3 className="mt-1 line-clamp-2 text-xl">{p.title}</h3>
                    <p className="mt-2 line-clamp-3 text-sm text-[var(--color-ink-muted)]">{p.excerpt}</p>
                    <span className="mt-auto pt-4 text-sm font-semibold text-[var(--color-brand-accent)]">
                      Lees meer →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
