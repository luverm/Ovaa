import Link from "next/link";
import { Facebook, Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { siteConfig, brands } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-[var(--color-brand-bg)] text-white">
      <Container className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Contact column */}
        <div>
          <Logo dark className="mb-4" />
          <p className="text-sm opacity-80 leading-relaxed">
            Sinds 1978 dé motorspecialist van Zeeland. Officieel dealer van Suzuki, Yamaha, KTM, Husqvarna en GASGAS.
          </p>
          <address className="mt-6 space-y-2 not-italic text-sm">
            <a
              href={`https://www.google.com/maps?q=${encodeURIComponent(
                `${siteConfig.contact.address.street}, ${siteConfig.contact.address.city}`,
              )}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-2 hover:text-[var(--color-brand-accent)]"
            >
              <MapPin className="mt-0.5 h-4 w-4 flex-none" />
              <span>
                {siteConfig.contact.address.street}
                <br />
                {siteConfig.contact.address.postal} {siteConfig.contact.address.city}
              </span>
            </a>
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="flex items-center gap-2 hover:text-[var(--color-brand-accent)]"
            >
              <Phone className="h-4 w-4" /> {siteConfig.contact.phone}
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-2 hover:text-[var(--color-brand-accent)]"
            >
              <Mail className="h-4 w-4" /> {siteConfig.contact.email}
            </a>
          </address>
        </div>

        {/* Hours */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
            Openingstijden
          </h3>
          <ul className="space-y-1.5 text-sm">
            {siteConfig.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4 border-b border-white/10 py-1">
                <span className="opacity-80">{h.day}</span>
                <span className="font-medium">{h.hours}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Merken */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide">Merken</h3>
          <ul className="space-y-2 text-sm">
            {brands.map((b) => (
              <li key={b.slug}>
                <Link
                  href={`/merken/${b.slug}`}
                  className="opacity-80 hover:text-[var(--color-brand-accent)] hover:opacity-100"
                >
                  {b.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Snelkoppelingen */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide">Snelkoppelingen</h3>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Occasions", href: "/occasions" },
              { label: "Diensten", href: "/diensten" },
              { label: "Werkplaats", href: "/diensten/werkplaats" },
              { label: "Verhuur", href: "/verhuur" },
              { label: "Nieuws & acties", href: "/nieuws" },
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="opacity-80 hover:text-[var(--color-brand-accent)] hover:opacity-100"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={siteConfig.contact.facebookUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm opacity-80 hover:text-[var(--color-brand-accent)] hover:opacity-100"
          >
            <Facebook className="h-4 w-4" /> Volg ons op Facebook
          </a>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-5 text-xs opacity-70 md:flex-row">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}. Alle rechten voorbehouden.
          </span>
          <ul className="flex gap-5">
            <li>
              <Link href="/privacy" className="hover:text-[var(--color-brand-accent)]">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="hover:text-[var(--color-brand-accent)]">
                Cookies
              </Link>
            </li>
            <li>
              <Link href="/algemene-voorwaarden" className="hover:text-[var(--color-brand-accent)]">
                Algemene voorwaarden
              </Link>
            </li>
          </ul>
        </Container>
      </div>
    </footer>
  );
}
