import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = { title: "Cookiebeleid" };

export default function CookiesPage() {
  return (
    <>
      <PageHero title="Cookiebeleid" eyebrow="Juridisch" breadcrumbs={[{ label: "Cookies" }]} />
      <Section>
        <Container size="narrow">
          <article className="prose-content">
            <p>Wij gebruiken alleen strikt noodzakelijke cookies en geanonimiseerde statistieken.</p>
            <h2>Welke cookies plaatsen wij</h2>
            <ul>
              <li>
                <strong>Functioneel:</strong> noodzakelijk voor het functioneren van de site
                (sessie, formulieren).
              </li>
              <li>
                <strong>Statistiek (geanonimiseerd):</strong> om bezoekersaantallen en
                paginaprestaties te meten. Geen persoonlijke gegevens, geen tracking-cookies.
              </li>
            </ul>
            <h2>Marketingcookies</h2>
            <p>Wij plaatsen geen marketing- of tracking-cookies van derden.</p>
            <h2>Cookies verwijderen</h2>
            <p>
              Cookies kunt u zelf op elk moment via uw browserinstellingen verwijderen.
            </p>
          </article>
        </Container>
      </Section>
    </>
  );
}
