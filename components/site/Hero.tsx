"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

export type Slide = {
  image: string;
  alt: string;
  eyebrow?: string;
  title: string;
  body?: string;
  href?: string;
  cta?: string;
};

export function Hero({ slides }: { slides: Slide[] }) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, duration: 30 });
  const [selected, setSelected] = useState(0);

  const scrollTo = useCallback((i: number) => embla?.scrollTo(i), [embla]);
  const prev = useCallback(() => embla?.scrollPrev(), [embla]);
  const next = useCallback(() => embla?.scrollNext(), [embla]);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
    const t = setInterval(() => embla.scrollNext(), 6000);
    return () => {
      embla.off("select", onSelect);
      clearInterval(t);
    };
  }, [embla]);

  return (
    <section className="relative bg-[var(--color-brand-bg)] text-white" aria-label="Uitgelichte motoren">
      <div ref={emblaRef} className="embla">
        <div className="embla__container">
          {slides.map((slide, i) => (
            <div key={i} className="embla__slide relative">
              <div className="relative h-[58vh] min-h-[420px] md:h-[72vh] md:min-h-[560px] w-full">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  sizes="100vw"
                  priority={i === 0}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
              </div>
              <div className="absolute inset-x-0 bottom-0 px-4 pb-14 md:pb-20">
                <div className="mx-auto max-w-[1200px]">
                  {slide.eyebrow && (
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-accent)]">
                      {slide.eyebrow}
                    </p>
                  )}
                  <h1 className="max-w-3xl text-white drop-shadow-md">{slide.title}</h1>
                  {slide.body && (
                    <p className="mt-4 max-w-2xl text-base md:text-lg opacity-90">{slide.body}</p>
                  )}
                  {slide.href && slide.cta && (
                    <Link
                      href={slide.href}
                      className="mt-7 inline-flex items-center gap-2 rounded-md bg-[var(--color-brand-accent)] px-6 py-3 text-sm font-semibold hover:bg-[var(--color-brand-accent-hover)] transition-colors"
                    >
                      {slide.cta} →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <button
        type="button"
        onClick={prev}
        aria-label="Vorige"
        className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/40 backdrop-blur hover:bg-black/60"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Volgende"
        className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/40 backdrop-blur hover:bg-black/60"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => scrollTo(i)}
            aria-label={`Naar slide ${i + 1}`}
            className={cn(
              "h-1.5 rounded-full transition-all",
              selected === i ? "w-8 bg-white" : "w-3 bg-white/50 hover:bg-white/80",
            )}
          />
        ))}
      </div>
    </section>
  );
}
