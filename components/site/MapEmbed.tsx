import { siteConfig } from "@/lib/site-config";

export function MapEmbed({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-xl bg-black/5 shadow-[var(--shadow-card)] ${className}`}>
      <iframe
        src={siteConfig.contact.mapEmbedUrl}
        title="Locatie Ovaa Motors op Google Maps"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block aspect-video w-full"
      />
    </div>
  );
}
