import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

export type Bike = {
  slug: string;
  brand: string;
  model: string;
  type: string;
  year: number;
  mileageKm?: number;
  hours?: number;
  engineCc?: number;
  priceEur: number;
  condition: "nieuw" | "demo" | "occasion";
  image: string;
  imageAlt?: string;
  featured?: boolean;
};

const conditionLabels: Record<Bike["condition"], string> = {
  nieuw: "Nieuw",
  demo: "Demo",
  occasion: "Occasion",
};

export function BikeCard({ bike }: { bike: Bike }) {
  return (
    <Link
      href={`/occasions/${bike.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-lift)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-surface-2)]">
        <Image
          src={bike.image}
          alt={bike.imageAlt ?? `${bike.brand} ${bike.model}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span
          className={cn(
            "absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold",
            bike.condition === "nieuw"
              ? "bg-[var(--color-brand-accent)] text-white"
              : bike.condition === "demo"
              ? "bg-amber-500 text-white"
              : "bg-white text-[var(--color-ink)]",
          )}
        >
          {conditionLabels[bike.condition]}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-muted)]">
          {bike.brand} • {bike.type}
        </p>
        <h3 className="mt-1 line-clamp-2 text-base font-bold leading-snug">{bike.model}</h3>
        <dl className="mt-3 grid flex-1 grid-cols-3 gap-1 text-xs text-[var(--color-ink-muted)]">
          <div>
            <dt className="opacity-70">Bouwjaar</dt>
            <dd className="font-semibold text-[var(--color-ink)]">{bike.year}</dd>
          </div>
          <div>
            <dt className="opacity-70">{bike.hours != null ? "Uren" : "KM-stand"}</dt>
            <dd className="font-semibold text-[var(--color-ink)]">
              {bike.hours != null
                ? `${bike.hours} u`
                : bike.mileageKm != null
                ? `${bike.mileageKm.toLocaleString("nl-NL")} km`
                : "—"}
            </dd>
          </div>
          <div>
            <dt className="opacity-70">Cilinder</dt>
            <dd className="font-semibold text-[var(--color-ink)]">
              {bike.engineCc ? `${bike.engineCc} cc` : "—"}
            </dd>
          </div>
        </dl>
        <div className="mt-4 flex items-center justify-between border-t border-black/5 pt-4">
          <span className="text-lg font-bold text-[var(--color-brand-accent)]">
            €{bike.priceEur.toLocaleString("nl-NL")}
          </span>
          <span className="text-sm font-medium text-[var(--color-brand-bg)] group-hover:text-[var(--color-brand-accent)]">
            Details →
          </span>
        </div>
      </div>
    </Link>
  );
}
