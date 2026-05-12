export const siteConfig = {
  name: "Ovaa Motors",
  tagline: "Dé motorspecialist van Zeeland sinds 1978",
  description:
    "Ovaa Motors is dé motorspecialist van Zeeland. Officieel dealer van Suzuki, Yamaha, KTM, Husqvarna en GASGAS. Nieuwe motoren, occasions, werkplaats, verhuur en meer.",
  url: "https://www.ovaamotors.nl",

  contact: {
    address: {
      street: "Mercuriusweg 1",
      postal: "4382 NC",
      city: "Vlissingen",
      country: "Nederland",
    },
    phone: "+31 (0)118 461485",
    phoneRaw: "+31118461485",
    email: "info@ovaamotors.nl",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.0!2d3.585!3d51.46!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVmxpc3NpbmdlbiwgTmw!5e0!3m2!1snl!2snl",
    facebookUrl: "https://www.facebook.com/ovaamotors",
  },

  hours: [
    { day: "Maandag", hours: "Op afspraak" },
    { day: "Dinsdag", hours: "08:45 – 17:30" },
    { day: "Woensdag", hours: "08:45 – 17:30" },
    { day: "Donderdag", hours: "08:45 – 17:30" },
    { day: "Donderdagavond", hours: "19:30 – 21:00" },
    { day: "Vrijdag", hours: "08:45 – 17:30" },
    { day: "Zaterdag", hours: "09:00 – 15:00" },
    { day: "Zondag", hours: "Gesloten" },
  ],
} as const;

export const brands = [
  {
    slug: "suzuki",
    name: "Suzuki",
    dealerSince: 1978,
    categories: ["straat", "off-road"],
    blurb:
      "Officieel Suzuki-dealer met een breed assortiment straatmotoren en off-road modellen. Inclusief de unieke Suzuki 6-jaar garantie.",
    accent: "#003875",
  },
  {
    slug: "yamaha",
    name: "Yamaha",
    dealerSince: 1985,
    categories: ["off-road"],
    blurb:
      "Yamaha off-road specialist: van YZ65 voor de jongste rijders tot de YZ450F voor pro-rijders.",
    accent: "#0a3b8b",
  },
  {
    slug: "ktm",
    name: "KTM",
    dealerSince: 2003,
    categories: ["straat", "off-road"],
    blurb:
      "Ready to Race. Dealer voor zowel KTM straatmotoren als het volledige off-road gamma, inclusief de SX en EXC-series.",
    accent: "#ff6600",
  },
  {
    slug: "husqvarna",
    name: "Husqvarna",
    dealerSince: 2014,
    categories: ["straat", "off-road"],
    blurb:
      "Pioneering since 1903. Officieel dealer voor Husqvarna Motorcycles — straat (Vitpilen, Svartpilen, Norden) en off-road (FC, TC, FE, TE).",
    accent: "#1e3a8a",
  },
  {
    slug: "gasgas",
    name: "GASGAS",
    dealerSince: 2021,
    categories: ["off-road"],
    blurb: "Dare the Impossible. Volledige GASGAS off-road lineup: motocross, enduro en trial.",
    accent: "#e30613",
  },
] as const;

export type BrandSlug = (typeof brands)[number]["slug"];

export const services = [
  { slug: "werkplaats", title: "Werkplaats", excerpt: "Onderhoud en reparatie door gecertificeerde monteurs.", icon: "wrench" },
  { slug: "bandenservice", title: "Bandenservice", excerpt: "Officieel Dunlop Pro dealer — montage, balanceren, advies.", icon: "circle" },
  { slug: "financiering", title: "Financiering", excerpt: "Flexibele financieringsmogelijkheden voor uw nieuwe motor.", icon: "credit-card" },
  { slug: "verlengde-garantie", title: "Verlengde garantie", excerpt: "Tot 5 jaar extra zekerheid op uw motor.", icon: "shield-check" },
  { slug: "suzuki-verzekering", title: "Suzuki Motorverzekering", excerpt: "WA, Casco of Allrisk — speciaal voor Suzuki-rijders.", icon: "shield" },
  { slug: "combi-verzekering", title: "Combi Motorverzekering", excerpt: "Vergelijking uit meer dan 144 verzekeringen via Quakel.", icon: "shield-half" },
  { slug: "parts-finder", title: "Parts Finder", excerpt: "Originele onderdelen voor Husqvarna, KTM, GASGAS en Yamaha.", icon: "search" },
] as const;

export type Service = (typeof services)[number];

export const navigation = [
  {
    label: "Merken",
    children: brands.map((b) => ({
      label: b.name,
      href: `/merken/${b.slug}`,
      children: b.categories.map((c) => ({
        label: c === "straat" ? "Straatmotoren" : "Off-Road",
        href: `/merken/${b.slug}/${c}`,
      })),
    })),
  },
  {
    label: "Occasions",
    children: [
      { label: "Alle occasions", href: "/occasions" },
      { label: "Demo motoren", href: "/occasions/demo" },
      { label: "Occasions straat", href: "/occasions/straat" },
      { label: "Occasions off-road", href: "/occasions/off-road" },
    ],
  },
  {
    label: "Diensten",
    children: services.map((s) => ({ label: s.title, href: `/diensten/${s.slug}` })),
  },
  { label: "Verhuur", href: "/verhuur" },
  { label: "Nieuws", href: "/nieuws" },
  { label: "Contact", href: "/contact" },
] as const;
