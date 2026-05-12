import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { ContactPanel } from "@/components/site/ContactPanel";
import { MapEmbed } from "@/components/site/MapEmbed";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met Ovaa Motors in Vlissingen. Bel, mail of stuur ons een bericht via het formulier.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Neem contact op"
        subtitle="Wij helpen u graag verder — bel, mail of stuur ons een bericht via het formulier."
        breadcrumbs={[{ label: "Contact" }]}
      />
      <Section>
        <Container className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2>Stuur ons een bericht</h2>
            <p className="mt-2 mb-6 text-[var(--color-ink-muted)]">
              We reageren doorgaans binnen één werkdag.
            </p>
            <ContactForm />
          </div>
          <aside>
            <ContactPanel />
          </aside>
        </Container>
      </Section>
      <Section tone="muted">
        <Container>
          <h2 className="mb-6">Zo vindt u ons</h2>
          <MapEmbed />
        </Container>
      </Section>
    </>
  );
}
