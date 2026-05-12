import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/site/PageHero";
import { ContactPanel } from "@/components/site/ContactPanel";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { services } from "@/lib/site-config";
import { serviceContent } from "@/lib/service-content";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const c = serviceContent[slug];
  if (!c) return {};
  return { title: c.title, description: c.subtitle };
}

export default async function ServicePage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const c = serviceContent[slug];
  if (!c) notFound();

  return (
    <>
      <PageHero
        eyebrow="Diensten"
        title={c.title}
        subtitle={c.subtitle}
        breadcrumbs={[{ label: "Diensten", href: "/diensten" }, { label: c.title }]}
        image="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1800&q=70"
      />
      <Section>
        <Container className="grid gap-10 lg:grid-cols-3">
          <article className="prose-content lg:col-span-2">{c.body}</article>
          <aside className="space-y-5">
            <div className="rounded-xl bg-[var(--color-brand-bg)] p-6 text-white">
              <h3 className="text-white">Vraag direct aan</h3>
              <p className="mt-2 text-sm opacity-90">
                Telefonisch of via het contactformulier — wij reageren snel.
              </p>
              {c.cta && (
                <ButtonLink href={c.cta.href} variant="primary" className="mt-5 w-full">
                  {c.cta.label}
                </ButtonLink>
              )}
            </div>
            <ContactPanel compact />
          </aside>
        </Container>
      </Section>
    </>
  );
}
