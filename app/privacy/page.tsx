import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = { title: "Privacybeleid" };

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacybeleid" eyebrow="Juridisch" breadcrumbs={[{ label: "Privacy" }]} />
      <Section>
        <Container size="narrow">
          <article className="prose-content">
            <p>Laatst bijgewerkt: {new Date().toLocaleDateString("nl-NL")}.</p>
            <h2>Wie zijn wij</h2>
            <p>
              {siteConfig.name}, gevestigd aan {siteConfig.contact.address.street},{" "}
              {siteConfig.contact.address.postal} {siteConfig.contact.address.city}, is
              verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in deze
              verklaring.
            </p>
            <h2>Welke gegevens verzamelen wij</h2>
            <ul>
              <li>Naam, adres, e-mailadres en telefoonnummer (bij contact of reservering)</li>
              <li>Voertuiggegevens (bij werkplaatsbezoek of inruil)</li>
              <li>Anonieme websitestatistieken</li>
            </ul>
            <h2>Waarvoor gebruiken wij ze</h2>
            <ul>
              <li>Beantwoorden van uw vraag of aanvraag</li>
              <li>Uitvoeren van werkplaats- en verkoopopdrachten</li>
              <li>Versturen van service-informatie (alleen als u zich daarvoor heeft aangemeld)</li>
            </ul>
            <h2>Hoe lang bewaren we ze</h2>
            <p>
              Niet langer dan wettelijk vereist of zinvol voor de doeleinden hierboven. Standaard
              bewaartermijn voor klantendossiers: 7 jaar (fiscaal).
            </p>
            <h2>Uw rechten</h2>
            <p>
              U heeft het recht uw gegevens in te zien, te corrigeren of te laten verwijderen. Stuur
              hiervoor een verzoek naar{" "}
              <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
            </p>
          </article>
        </Container>
      </Section>
    </>
  );
}
