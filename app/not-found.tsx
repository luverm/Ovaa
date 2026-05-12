import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-accent)]">
        404 — Pagina niet gevonden
      </p>
      <h1 className="mt-3">Deze afslag bestaat niet</h1>
      <p className="mt-3 max-w-md text-[var(--color-ink-muted)]">
        We konden de pagina die u zoekt niet vinden. Misschien is hij verplaatst, of bestaat hij
        niet meer.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/" variant="primary">Terug naar home</ButtonLink>
        <ButtonLink href="/occasions" variant="outline">Bekijk occasions</ButtonLink>
      </div>
    </Container>
  );
}
