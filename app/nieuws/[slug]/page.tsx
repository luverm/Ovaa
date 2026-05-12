import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { newsPosts } from "@/lib/sample-data";

export function generateStaticParams() {
  return newsPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const post = newsPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function NewsPostPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const post = newsPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <PageHero
        eyebrow={`${post.category} • ${new Date(post.publishedAt).toLocaleDateString("nl-NL", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}`}
        title={post.title}
        breadcrumbs={[{ label: "Nieuws", href: "/nieuws" }, { label: post.title }]}
      />
      <Section>
        <Container size="narrow">
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-[var(--color-surface-2)]">
            <Image src={post.image} alt="" fill sizes="(max-width: 1024px) 100vw, 800px" className="object-cover" priority />
          </div>
          <article className="prose-content mt-8">
            <p className="text-lg">{post.excerpt}</p>
            <p>
              Wilt u meer informatie over deze actie? Bel ons of stuur een bericht via het
              contactformulier — wij vertellen u graag de details, voorwaarden en beschikbaarheid.
            </p>
            <p>
              <strong>Actievoorwaarden:</strong> deze actie is geldig zolang de voorraad strekt en
              kan zonder opgaaf van reden gewijzigd worden. Vraag in de showroom naar de exacte
              voorwaarden.
            </p>
          </article>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact" variant="primary">Vraag meer informatie</ButtonLink>
            <ButtonLink href="/nieuws" variant="outline">Alle berichten</ButtonLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
