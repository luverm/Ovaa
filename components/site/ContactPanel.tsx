import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function ContactPanel({ compact = false }: { compact?: boolean }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-[var(--shadow-card)]">
      <h3 className="mb-4 text-lg font-bold">Contact</h3>
      <ul className="space-y-3 text-sm">
        <li className="flex items-start gap-3">
          <MapPin className="mt-0.5 h-4 w-4 flex-none text-[var(--color-brand-accent)]" />
          <a
            href={`https://www.google.com/maps?q=${encodeURIComponent(
              `${siteConfig.contact.address.street}, ${siteConfig.contact.address.city}`,
            )}`}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--color-brand-accent)]"
          >
            {siteConfig.contact.address.street}, {siteConfig.contact.address.postal}{" "}
            {siteConfig.contact.address.city}
          </a>
        </li>
        <li className="flex items-start gap-3">
          <Phone className="mt-0.5 h-4 w-4 flex-none text-[var(--color-brand-accent)]" />
          <a
            href={`tel:${siteConfig.contact.phoneRaw}`}
            className="hover:text-[var(--color-brand-accent)]"
          >
            {siteConfig.contact.phone}
          </a>
        </li>
        <li className="flex items-start gap-3">
          <Mail className="mt-0.5 h-4 w-4 flex-none text-[var(--color-brand-accent)]" />
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="hover:text-[var(--color-brand-accent)]"
          >
            {siteConfig.contact.email}
          </a>
        </li>
      </ul>

      {!compact && (
        <>
          <h4 className="mt-6 mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide">
            <Clock className="h-4 w-4 text-[var(--color-brand-accent)]" /> Openingstijden
          </h4>
          <ul className="space-y-1 text-sm">
            {siteConfig.hours.map((h) => (
              <li key={h.day} className="flex justify-between border-b border-black/5 py-1">
                <span className="text-[var(--color-ink-muted)]">{h.day}</span>
                <span className="font-medium">{h.hours}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
