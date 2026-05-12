import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { rentalBikes } from "@/lib/sample-data";

export const metadata: Metadata = {
  title: "Motorverhuur",
  description:
    "Huur een Suzuki V-Strom of GSX-8S bij Ovaa Motors. Seizoen 1 april t/m 1 oktober. Daag-, weekend-, midweek- en weektarieven.",
};

export default function VerhuurPage() {
  return (
    <>
      <PageHero
        eyebrow="Verhuur"
        title="Motorverhuur — ontdek Zeeland op twee wielen"
        subtitle="Seizoen: 1 april t/m 1 oktober. Drie motoren beschikbaar — alles inclusief verzekering en pechhulp."
        image="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1800&q=70"
        breadcrumbs={[{ label: "Verhuur" }]}
      />

      <Section>
        <Container>
          <header className="mb-10 max-w-2xl">
            <h2>Onze verhuurvloot</h2>
            <p className="mt-3 text-[var(--color-ink-muted)]">
              Allemaal modellen die wij zelf vertegenwoordigen — goed onderhouden, recent en met
              alle moderne assistentie aan boord.
            </p>
          </header>
          <ul className="grid gap-6 lg:grid-cols-3">
            {rentalBikes.map((b) => (
              <li
                key={b.slug}
                className="overflow-hidden rounded-xl bg-white shadow-[var(--shadow-card)]"
              >
                <div className="relative aspect-[4/3] bg-[var(--color-surface-2)]">
                  <Image
                    src={b.image}
                    alt={b.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl">{b.name}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-muted)]">
                    {b.engineCc} cc • Rijbewijs {b.licenseRequired}
                  </p>
                  <p className="mt-3 text-sm text-[var(--color-ink-muted)]">{b.description}</p>
                  <table className="mt-5 w-full text-sm">
                    <tbody>
                      <tr className="border-b border-black/5">
                        <td className="py-1.5 text-[var(--color-ink-muted)]">Per dag</td>
                        <td className="py-1.5 text-right font-semibold">€{b.pricing.dayEur}</td>
                      </tr>
                      <tr className="border-b border-black/5">
                        <td className="py-1.5 text-[var(--color-ink-muted)]">Weekend</td>
                        <td className="py-1.5 text-right font-semibold">€{b.pricing.weekendEur}</td>
                      </tr>
                      <tr className="border-b border-black/5">
                        <td className="py-1.5 text-[var(--color-ink-muted)]">Midweek</td>
                        <td className="py-1.5 text-right font-semibold">€{b.pricing.midweekEur}</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 text-[var(--color-ink-muted)]">Week</td>
                        <td className="py-1.5 text-right font-semibold">€{b.pricing.weekEur}</td>
                      </tr>
                    </tbody>
                  </table>
                  <ButtonLink href={`/verhuur/boeken?motor=${b.slug}`} variant="primary" className="mt-5 w-full">
                    Reserveer deze motor
                  </ButtonLink>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="muted">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2>Inbegrepen bij elke huur</h2>
            <ul className="mt-5 space-y-2 text-sm">
              {[
                "Allrisk verzekering",
                "Europese pechhulp (Mobility Service)",
                "Onbeperkt aantal kilometers",
                "Eerste tankvulling",
                "Tassen of topkoffer beschikbaar (€10/dag)",
                "Helm en motorjas op aanvraag (€15/dag)",
              ].map((x) => (
                <li key={x} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-[var(--color-brand-accent)]" />
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Voorwaarden</h2>
            <ul className="mt-5 space-y-2 text-sm">
              <li>• Geldig motorrijbewijs A (of A2 voor GSX-8S)</li>
              <li>• Minimaal 24 jaar oud</li>
              <li>• Twee geldige identiteitsbewijzen vereist</li>
              <li>• Borg: €750 — wordt na inlevering terugbetaald</li>
              <li>• Eigen risico: €1.250 per schade</li>
              <li>• Vooraf volledig betaald — geen tankcontract</li>
            </ul>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="text-center">
          <h2>Klaar om te reserveren?</h2>
          <p className="mx-auto mt-3 max-w-xl text-[var(--color-ink-muted)]">
            Vul het reserveringsformulier in of bel ons direct voor advies en beschikbaarheid.
          </p>
          <ButtonLink href="/verhuur/boeken" variant="primary" size="lg" className="mt-6">
            Online reserveren
          </ButtonLink>
        </Container>
      </Section>
    </>
  );
}
