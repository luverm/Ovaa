import { CheckCircle2 } from "lucide-react";
import type { ReactNode } from "react";

type ServiceContent = {
  title: string;
  subtitle: string;
  body: ReactNode;
  bullets?: string[];
  cta?: { label: string; href: string };
};

const SectionH = ({ children }: { children: ReactNode }) => (
  <h2 className="mt-8 mb-3">{children}</h2>
);

export const serviceContent: Record<string, ServiceContent> = {
  werkplaats: {
    title: "Werkplaats",
    subtitle:
      "Onderhoud, reparaties en APK door ervaren, fabrieksgetrainde monteurs — met gebruik van originele onderdelen.",
    body: (
      <>
        <p>
          Onze werkplaats staat onder leiding van ervaren technici, waaronder onze meerjarig
          uitgeroepen Suzuki Technicus van het Jaar. Wij beschikken over de meest recente
          diagnose-apparatuur en zijn officieel erkend door alle merken die wij verkopen.
        </p>
        <SectionH>Wat we voor u doen</SectionH>
        <ul>
          <li>Periodiek onderhoud — kleine en grote beurten</li>
          <li>APK keuringen (motoren {">"}3500 kg vrijgesteld, andere op afspraak)</li>
          <li>Storingsdiagnose met merkspecifieke uitleesapparatuur</li>
          <li>Bandenservice (Dunlop Pro Dealer)</li>
          <li>Schadeherstel en spuitwerk</li>
          <li>Modificaties en accessoiremontage</li>
        </ul>
        <SectionH>Haal- en brengservice</SectionH>
        <p>
          Geen tijd om langs te komen? Wij halen uw motor binnen Zeeland gratis op en brengen 'm na
          de werkzaamheden netjes terug. Vraag naar de mogelijkheden.
        </p>
        <SectionH>Mobility Service</SectionH>
        <p>
          Wij zijn aangesloten bij de Mobility Service programma's van Suzuki en KTM/Husqvarna/GASGAS.
          Daarmee bent u bij pech onderweg altijd verzekerd van hulp — Europa-wijd.
        </p>
      </>
    ),
    cta: { label: "Plan een werkplaatsafspraak", href: "/contact" },
  },

  bandenservice: {
    title: "Bandenservice",
    subtitle:
      "Officieel Dunlop Pro Dealer. Bandenadvies, montage, balanceren en uitlijnen — voor straat én off-road.",
    body: (
      <>
        <p>
          Een goede band kan het verschil maken tussen veilig thuiskomen en problemen. Daarom werken
          wij uitsluitend met topmerken zoals Dunlop, en kunnen wij u op basis van uw rijstijl en
          motor altijd het juiste type aanraden.
        </p>
        <SectionH>Wat we leveren</SectionH>
        <ul>
          <li>Sport, sport-touring, adventure, off-road en cross banden</li>
          <li>Montage met de nieuwste bandmachines (geen beschadiging van velgen)</li>
          <li>Hoogwaardige uitbalancering</li>
          <li>Druk- en slijtagecheck — gratis bij elke werkplaatsbeurt</li>
        </ul>
      </>
    ),
    cta: { label: "Vraag een bandenadvies", href: "/contact" },
  },

  financiering: {
    title: "Financiering",
    subtitle: "Slim financieren bij Ovaa Motors — flexibele looptijden, snel duidelijkheid.",
    body: (
      <>
        <p>
          Een nieuwe motor hoeft niet altijd uit eigen zak. Wij werken samen met gerenommeerde
          partners en kunnen u snel een passende financiering aanbieden, met scherpe rentepercentages
          en flexibele looptijden.
        </p>
        <SectionH>Mogelijkheden</SectionH>
        <ul>
          <li>Persoonlijke lening of doorlopend krediet</li>
          <li>Aanbetalen, hoeveel u wilt — al vanaf 0%</li>
          <li>Looptijden van 12 tot 84 maanden</li>
          <li>Direct online aanvragen, snel akkoord</li>
        </ul>
      </>
    ),
    cta: { label: "Vraag een offerte aan", href: "/contact" },
  },

  "verlengde-garantie": {
    title: "Verlengde garantie",
    subtitle: "Tot vijf jaar extra zekerheid op uw nieuwe of demo motor.",
    body: (
      <>
        <p>
          Bovenop de fabrieksgarantie biedt Ovaa Motors een verlengde garantie aan, zodat u jarenlang
          zorgeloos kunt rijden. Geschikt voor de meeste merken die wij verkopen.
        </p>
        <SectionH>Voorwaarden in het kort</SectionH>
        <ul>
          <li>Maximaal 80.000 km bij aanvang</li>
          <li>Motor mag maximaal 12 jaar oud zijn</li>
          <li>Beurten volgens fabrieksschema bij erkende dealer</li>
        </ul>
        <SectionH>Tariefindicatie</SectionH>
        <table className="mt-3 w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-black/10">
              <th className="py-2 text-left">Duur</th>
              <th className="py-2 text-left">Tarief</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-black/5"><td className="py-2">12 maanden</td><td>vanaf €337</td></tr>
            <tr className="border-b border-black/5"><td className="py-2">24 maanden</td><td>vanaf €529</td></tr>
            <tr><td className="py-2">36 maanden</td><td>vanaf €804</td></tr>
          </tbody>
        </table>
      </>
    ),
    cta: { label: "Vraag voorwaarden op", href: "/contact" },
  },

  "suzuki-verzekering": {
    title: "Suzuki Motorverzekering",
    subtitle:
      "Speciaal ontwikkeld voor Suzuki-rijders: WA, WA+ Beperkt Casco of Allrisk Casco met aantrekkelijke voordelen.",
    body: (
      <>
        <p>
          De Suzuki Motorverzekering is alleen verkrijgbaar voor Suzuki-rijders en biedt unieke
          voordelen die u bij andere verzekeraars niet vindt.
        </p>
        <SectionH>Voordelen</SectionH>
        <ul>
          <li>10 dagen gratis Allrisk-dekking direct na aankoop</li>
          <li>€75 dealer-reparatie korting bij schadeherstel bij Ovaa Motors</li>
          <li>Originele Suzuki accessoires verzekerd tot €2.500</li>
          <li>Geen waardedaling — nieuwwaarderegeling tot 36 maanden</li>
          <li>Snelle schadeafhandeling via uw dealer</li>
        </ul>
      </>
    ),
    cta: { label: "Vraag een offerte", href: "/contact" },
  },

  "combi-verzekering": {
    title: "Combi Motorverzekering",
    subtitle:
      "Via Quakel Assuradeuren vergelijken wij meer dan 144 verzekeringen voor de scherpste premie.",
    body: (
      <>
        <p>
          Geen Suzuki of liever een andere verzekeraar? Geen probleem. Via onze partner Quakel
          Assuradeuren vergelijken wij meer dan 144 motorverzekeringen, zodat u altijd de beste
          dekking voor de scherpste premie kunt afsluiten.
        </p>
        <SectionH>Hoe het werkt</SectionH>
        <ul>
          <li>Vrijblijvend offerte aanvragen — bel 0172-427035 of via ons</li>
          <li>Alle merken en motortypen verzekerbaar</li>
          <li>Persoonlijk advies, ook bij schadeafhandeling</li>
        </ul>
      </>
    ),
    cta: { label: "Aanvraag indienen", href: "/contact" },
  },

  "parts-finder": {
    title: "Parts Finder",
    subtitle:
      "Online uw originele onderdelen vinden voor Husqvarna, KTM, GASGAS en Yamaha — wij bestellen voor u.",
    body: (
      <>
        <p>
          Heeft u originele onderdelen nodig? Via onze parts finders bekijkt u eenvoudig de
          fabrieksexplosietekeningen van uw merk en model en noteert u de onderdeelnummers. Mail of
          bel ons met de nummers en wij bestellen het voor u — meestal binnen 1–2 werkdagen leverbaar.
        </p>
        <SectionH>Beschikbare merken</SectionH>
        <ul>
          <li>Husqvarna Motorcycles</li>
          <li>KTM Motorcycles</li>
          <li>GASGAS</li>
          <li>Yamaha</li>
        </ul>
        <p>
          Voor Suzuki onderdelen helpen wij u graag direct in onze werkplaats — bel even.
        </p>
      </>
    ),
    cta: { label: "Onderdeel aanvragen", href: "/contact" },
  },
};

export function ServiceBullets({ bullets }: { bullets: string[] }) {
  return (
    <ul className="mt-6 space-y-2 text-sm">
      {bullets.map((b) => (
        <li key={b} className="flex gap-2">
          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-[var(--color-brand-accent)]" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}
