import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = { title: "Algemene voorwaarden" };

export default function VoorwaardenPage() {
  return (
    <>
      <PageHero
        title="Algemene voorwaarden"
        eyebrow="Juridisch"
        breadcrumbs={[{ label: "Algemene voorwaarden" }]}
      />
      <Section>
        <Container size="narrow">
          <article className="prose-content">
            <p>
              Op alle aanbiedingen, overeenkomsten en leveringen van Ovaa Motors zijn de algemene
              BOVAG-voorwaarden van toepassing. De volledige tekst is op aanvraag verkrijgbaar in
              onze showroom of via e-mail.
            </p>
            <h2>Aanbod en prijzen</h2>
            <p>
              Alle prijzen op deze website zijn inclusief BTW, tenzij anders aangegeven. Demo-
              motoren worden BTW verrekenbaar aangeboden. Druk- en zetfouten voorbehouden.
            </p>
            <h2>Werkplaats</h2>
            <p>
              Werkzaamheden worden uitgevoerd conform de Bovag-voorwaarden. Voor reparaties boven de
              €250 vragen wij vooraf akkoord. Afgegeven offertes zijn 30 dagen geldig.
            </p>
            <h2>Verhuur</h2>
            <p>
              Voor het huren van een motor gelden aanvullende voorwaarden. Zie hiervoor de
              huurovereenkomst die u bij de aanvraag ontvangt.
            </p>
          </article>
        </Container>
      </Section>
    </>
  );
}
