import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export type Tile = {
  href: string;
  title: string;
  subtitle?: string;
  image: string;
};

export function CategoryTilePair({ tiles }: { tiles: [Tile, Tile] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {tiles.map((t) => (
        <CategoryTile key={t.href} {...t} />
      ))}
    </div>
  );
}

export function CategoryTile({ href, title, subtitle, image }: Tile) {
  return (
    <Link
      href={href}
      className="group relative block overflow-hidden rounded-xl bg-[var(--color-brand-bg)] aspect-[4/3] sm:aspect-[16/10]"
    >
      <Image
        src={image}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        {subtitle && (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-accent)]">
            {subtitle}
          </p>
        )}
        <h3 className="mt-1 text-2xl text-white">{title}</h3>
        <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium">
          Bekijk modellen <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
