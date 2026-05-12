import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { ContactPanel } from "@/components/site/ContactPanel";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { RentalForm } from "@/components/forms/RentalForm";

export const metadata: Metadata = {
  title: "Reserveren — Motorverhuur",
  description: "Reserveer online uw huurmotor bij Ovaa Motors.",
};

export default async function BoekenPage(props: {
  searchParams: Promise<{ motor?: string }>;
}) {
  const sp = await props.searchParams;
  return (
    <>
      <PageHero
        eyebrow="Verhuur"
        title="Reserveer uw motor"
        subtitle="Vul onderstaand formulier in en we bevestigen binnen één werkdag."
        breadcrumbs={[
          { label: "Verhuur", href: "/verhuur" },
          { label: "Reserveren" },
        ]}
      />
      <Section>
        <Container className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <RentalForm preselectedMotor={sp.motor} />
          </div>
          <aside>
            <ContactPanel compact />
          </aside>
        </Container>
      </Section>
    </>
  );
}
