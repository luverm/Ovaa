import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";

const items = [
  "Officieel dealer van Suzuki, Yamaha, KTM, Husqvarna en GASGAS",
  "Meer dan 40 jaar ervaring in motoren",
  "Exclusief Suzuki dealer voor Zeeland",
  "Eigen werkplaats met gecertificeerde monteurs",
  "Grote voorraad originele onderdelen en accessoires",
  "Tot 6 jaar fabrieksgarantie op nieuwe Suzuki's",
  "Officieel Dunlop Pro Dealer",
  "Persoonlijk advies — geen verkoop op afstand",
];

export function USPGrid() {
  return (
    <section className="bg-[var(--color-brand-bg)] text-white">
      <Container className="py-12 md:py-16">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-accent)]">
            Waarom Ovaa Motors
          </p>
          <h2 className="mt-2 text-white">Zeeland's motorspecialist sinds 1978</h2>
        </div>
        <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm leading-snug">
              <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[var(--color-brand-accent)]">
                <Check className="h-3 w-3" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
