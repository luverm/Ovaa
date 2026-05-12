import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Wrench, Bike, ShieldCheck } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { USPGrid } from "@/components/site/USPGrid";
import { BikeCard } from "@/components/site/BikeCard";
import { ContactPanel } from "@/components/site/ContactPanel";
import { MapEmbed } from "@/components/site/MapEmbed";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { brands } from "@/lib/site-config";
import { heroSlides, featuredBikes, newsPosts } from "@/lib/sample-data";

export default function HomePage() {
  return (
    <>
      <Hero slides={heroSlides} />
      <USPGrid />

      {/* Brand showcase */}
      <Section tone="default" size="lg">
        <Container>
          <header className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-accent)]">
                Officieel dealer
              </p>
              <h2 className="mt-2">De merken waar wij voor staan</h2>
            </div>
            <ButtonLink href="/merken" variant="outline">
              Alle merken bekijken
            </ButtonLink>
          </header>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {brands.map((b) => (
              <li key={b.slug}>
                <Link
                  href={`/merken/${b.slug}`}
                  className="group flex aspect-square flex-col items-center justify-center rounded-xl border border-black/5 bg-white p-6 text-center shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
                >
                  <span
                    className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full text-white"
                    style={{ backgroundColor: b.accent }}
                    aria-hidden
                  >
                    <Bike className="h-6 w-6" />
                  </span>
                  <span className="text-lg font-bold">{b.name}</span>
                  <span className="mt-1 text-xs text-[var(--color-ink-muted)]">
                    Dealer sinds {b.dealerSince}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Featured occasions */}
      <Section tone="muted" size="lg">
        <Container>
          <header className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-accent)]">
                Uitgelicht
              </p>
              <h2 className="mt-2">Onze nieuwste occasions & demo's</h2>
              <p className="mt-2 max-w-2xl text-[var(--color-ink-muted)]">
                Een selectie uit ons aanbod — alles met BOVAG garantie en inruil mogelijk.
              </p>
            </div>
            <ButtonLink href="/occasions" variant="primary">
              Alle occasions
            </ButtonLink>
          </header>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredBikes.slice(0, 6).map((b) => (
              <li key={b.slug}>
                <BikeCard bike={b} />
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Services teaser */}
      <Section tone="default" size="lg">
        <Container className="grid gap-8 lg:grid-cols-3">
          {[
            {
              icon: Wrench,
              title: "Werkplaats",
              body: "Onderhoud en reparaties door gecertificeerde monteurs. Originele onderdelen, scherpe doorlooptijden.",
              href: "/diensten/werkplaats",
            },
            {
              icon: ShieldCheck,
              title: "Verlengde garantie",
              body: "Tot 5 jaar extra zekerheid. Vraag naar de voorwaarden bij aanschaf van uw nieuwe motor.",
              href: "/diensten/verlengde-garantie",
            },
            {
              icon: Bike,
              title: "Motorverhuur",
              body: "Huur een V-Strom of GSX-8S vanaf €89/dag en ontdek de mooiste routes van Zeeland.",
              href: "/verhuur",
            },
          ].map(({ icon: Icon, title, body, href }) => (
            <Link
              key={href}
              href={href}
              className="group rounded-xl border border-black/5 bg-white p-7 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
            >
              <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-brand-accent)]/10 text-[var(--color-brand-accent)]">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="text-xl">{title}</h3>
              <p className="mt-2 text-sm text-[var(--color-ink-muted)] leading-relaxed">{body}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-brand-accent)]">
                Meer informatie <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </Container>
      </Section>

      {/* News teaser */}
      <Section tone="muted" size="lg">
        <Container>
          <header className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-accent)]">
                Nieuws & acties
              </p>
              <h2 className="mt-2">Wat speelt er bij Ovaa Motors</h2>
            </div>
            <ButtonLink href="/nieuws" variant="outline">
              Alle berichten
            </ButtonLink>
          </header>
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {newsPosts.slice(0, 4).map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/nieuws/${p.slug}`}
                  className="group block overflow-hidden rounded-xl bg-white shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-lift)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-surface-2)]">
                    <Image
                      src={p.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-brand-accent)]">
                      {p.category}
                    </p>
                    <h3 className="mt-1 line-clamp-2 text-base">{p.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-[var(--color-ink-muted)]">{p.excerpt}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Contact + map */}
      <Section tone="default" size="lg">
        <Container className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-accent)]">
              Bezoek ons
            </p>
            <h2 className="mt-2">Kom langs in Vlissingen</h2>
            <p className="mt-4 text-[var(--color-ink-muted)]">
              Onze showroom en werkplaats vinden u op de Mercuriusweg in Vlissingen — eenvoudig bereikbaar
              vanuit heel Zeeland.
            </p>
            <div className="mt-6">
              <ContactPanel />
            </div>
          </div>
          <div className="lg:col-span-2">
            <MapEmbed className="h-full" />
          </div>
        </Container>
      </Section>
    </>
  );
}
