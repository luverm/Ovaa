import type { Bike } from "@/components/site/BikeCard";

// Placeholder Unsplash imagery — replace with real photography or Payload Media later.
// All images are free-license motorcycle photos.

const moto = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=70`;

export const heroSlides = [
  {
    image: moto("photo-1568772585407-9361f9bf3a87"),
    alt: "Suzuki straatmotor in beweging",
    eyebrow: "Nieuw 2026",
    title: "Suzuki GSX-8R — sportief, dagelijks bruikbaar",
    body: "De nieuwste sport-tourer van Suzuki, nu beschikbaar bij Ovaa Motors. Vraag een proefrit aan.",
    href: "/merken/suzuki/straat",
    cta: "Bekijk modellen",
  },
  {
    image: moto("photo-1558981806-ec527fa84c39"),
    alt: "Off-road motor in actie",
    eyebrow: "Off-road",
    title: "Klaar voor het seizoen — KTM SX & EXC 2026",
    body: "Volledig assortiment cross- en endurormodellen op voorraad. Ready to Race.",
    href: "/merken/ktm/off-road",
    cta: "Off-road lineup",
  },
  {
    image: moto("photo-1449426468159-d96dbf08f19f"),
    alt: "Motoren voor verhuur",
    eyebrow: "Verhuur",
    title: "Huur een motor, ervaar Zeeland",
    body: "V-STROM 800DE, V-STROM 1050 of GSX-8S — vanaf €95 per dag, inclusief verzekering.",
    href: "/verhuur",
    cta: "Boek nu",
  },
];

export const featuredBikes: Bike[] = [
  {
    slug: "suzuki-v-strom-800de-2024",
    brand: "Suzuki",
    model: "V-Strom 800DE",
    type: "Adventure",
    year: 2024,
    mileageKm: 4280,
    engineCc: 776,
    priceEur: 11950,
    condition: "demo",
    image: moto("photo-1558981806-ec527fa84c39"),
    imageAlt: "Suzuki V-Strom 800DE adventure motor",
    featured: true,
  },
  {
    slug: "ktm-690-smc-r-2023",
    brand: "KTM",
    model: "690 SMC R",
    type: "Supermoto",
    year: 2023,
    mileageKm: 8120,
    engineCc: 693,
    priceEur: 10495,
    condition: "occasion",
    image: moto("photo-1611241443322-b5ea34d61029"),
  },
  {
    slug: "husqvarna-norden-901-2024",
    brand: "Husqvarna",
    model: "Norden 901",
    type: "Adventure",
    year: 2024,
    mileageKm: 1850,
    engineCc: 889,
    priceEur: 13750,
    condition: "demo",
    image: moto("photo-1568772585407-9361f9bf3a87"),
  },
  {
    slug: "suzuki-gsx-8s-2024",
    brand: "Suzuki",
    model: "GSX-8S",
    type: "Naked",
    year: 2024,
    mileageKm: 0,
    engineCc: 776,
    priceEur: 9499,
    condition: "nieuw",
    image: moto("photo-1517649763962-0c623066013b"),
  },
  {
    slug: "yamaha-yz450f-2025",
    brand: "Yamaha",
    model: "YZ450F",
    type: "Motocross",
    year: 2025,
    hours: 12,
    engineCc: 450,
    priceEur: 8995,
    condition: "occasion",
    image: moto("photo-1564396797379-e1e9a9cda5a2"),
  },
  {
    slug: "gasgas-ec-300-2024",
    brand: "GASGAS",
    model: "EC 300",
    type: "Enduro",
    year: 2024,
    hours: 45,
    engineCc: 293,
    priceEur: 8750,
    condition: "occasion",
    image: moto("photo-1593277224027-fe72b80fbb91"),
  },
];

export const newsPosts = [
  {
    slug: "ktm-tech-upgrade-2026",
    title: "KTM Tech Upgrade — gratis upgrade pakket bij iedere nieuwe SX of EXC",
    excerpt:
      "Bij aanschaf van een nieuwe KTM SX of EXC krijgt u t/m juli 2026 een gratis Tech Upgrade pakket ter waarde van €499.",
    image: moto("photo-1558981806-ec527fa84c39"),
    publishedAt: "2026-04-15",
    category: "KTM",
  },
  {
    slug: "suzuki-accessoirepack",
    title: "Suzuki Accessoire Pack — €1.000 korting op originele accessoires",
    excerpt:
      "Bij aanschaf van een nieuwe Suzuki V-Strom of GSX-8 serie ontvangt u nu €1.000 te besteden aan originele accessoires.",
    image: moto("photo-1568772585407-9361f9bf3a87"),
    publishedAt: "2026-04-01",
    category: "Suzuki",
  },
  {
    slug: "demo-deals-voorjaar",
    title: "Demo Deals — voorjaarsacties op onze demo motoren",
    excerpt: "Onze demo motoren maken plaats voor het nieuwe modeljaar. Profiteer van scherpe prijzen.",
    image: moto("photo-1449426468159-d96dbf08f19f"),
    publishedAt: "2026-03-20",
    category: "Acties",
  },
  {
    slug: "husqvarna-norden-901-actie",
    title: "Husqvarna Norden 901 — €1.500 voordeel + 2 jaar extra garantie",
    excerpt: "Tijdelijke actie op de Norden 901 en Norden 901 Expedition. Volledig uitgeruste avonturenmotor.",
    image: moto("photo-1611241443322-b5ea34d61029"),
    publishedAt: "2026-03-05",
    category: "Husqvarna",
  },
];

export const rentalBikes = [
  {
    slug: "v-strom-800de",
    name: "Suzuki V-Strom 800DE",
    image: moto("photo-1558981806-ec527fa84c39"),
    engineCc: 776,
    licenseRequired: "A" as const,
    description:
      "Lichte adventure-twin, ideaal voor zowel asfalt als onverharde paden. Twin-spark 270° crank.",
    pricing: { dayEur: 95, weekendEur: 175, midweekEur: 295, weekEur: 475 },
  },
  {
    slug: "v-strom-1050",
    name: "Suzuki V-Strom 1050",
    image: moto("photo-1568772585407-9361f9bf3a87"),
    engineCc: 1037,
    licenseRequired: "A" as const,
    description:
      "Krachtige V-twin voor langeafstandsritten met comfort en techniek (cruise control, hill hold).",
    pricing: { dayEur: 115, weekendEur: 215, midweekEur: 365, weekEur: 575 },
  },
  {
    slug: "gsx-8s",
    name: "Suzuki GSX-8S",
    image: moto("photo-1517649763962-0c623066013b"),
    engineCc: 776,
    licenseRequired: "A2" as const,
    description: "Sportieve naked bike, A2-geschikt na restrictie. Direct vermogen en wendbaar.",
    pricing: { dayEur: 89, weekendEur: 165, midweekEur: 275, weekEur: 445 },
  },
];

export type RentalBike = (typeof rentalBikes)[number];
export type NewsPost = (typeof newsPosts)[number];
