"use client";

import { useActionState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Field, inputClass } from "./Field";
import { Button } from "@/components/ui/Button";
import { submitRental, type FormState } from "@/app/actions/rental";
import { rentalBikes } from "@/lib/sample-data";

const initial: FormState = { status: "idle" };

export function RentalForm({ preselectedMotor }: { preselectedMotor?: string }) {
  const [state, action, pending] = useActionState(submitRental, initial);
  const errors = state.status === "error" ? state.fieldErrors ?? {} : {};

  if (state.status === "success") {
    return (
      <div className="rounded-xl border border-[var(--color-success)]/30 bg-[var(--color-success)]/5 p-6">
        <div className="flex items-center gap-3 text-[var(--color-success)]">
          <CheckCircle2 className="h-6 w-6" />
          <h3 className="text-lg font-semibold">Aanvraag verzonden!</h3>
        </div>
        <p className="mt-2 text-sm">
          Wij nemen binnen één werkdag contact met u op om de beschikbaarheid te bevestigen en de
          reservering definitief te maken.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-4">
      {state.status === "error" && state.message && (
        <div className="flex items-start gap-2 rounded-md border border-[var(--color-danger)]/30 bg-[var(--color-danger)]/5 p-3 text-sm text-[var(--color-danger)]">
          <AlertCircle className="mt-0.5 h-4 w-4 flex-none" />
          {state.message}
        </div>
      )}

      <Field label="Motor" htmlFor="motor" error={errors.motor} required>
        <select id="motor" name="motor" required className={inputClass} defaultValue={preselectedMotor ?? ""}>
          <option value="" disabled>Kies een motor</option>
          {rentalBikes.map((b) => (
            <option key={b.slug} value={b.slug}>
              {b.name} — vanaf €{b.pricing.dayEur}/dag
            </option>
          ))}
        </select>
      </Field>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Startdatum" htmlFor="startdatum" error={errors.startdatum} required>
          <input id="startdatum" name="startdatum" type="date" required className={inputClass} />
        </Field>
        <Field label="Einddatum" htmlFor="einddatum" error={errors.einddatum} required>
          <input id="einddatum" name="einddatum" type="date" required className={inputClass} />
        </Field>
      </div>

      <Field label="Rijbewijs" htmlFor="rijbewijs" error={errors.rijbewijs} required>
        <select id="rijbewijs" name="rijbewijs" required className={inputClass} defaultValue="">
          <option value="" disabled>Selecteer</option>
          <option value="A">A (onbeperkt)</option>
          <option value="A2">A2 (beperkt vermogen)</option>
        </select>
      </Field>

      <fieldset>
        <legend className="text-sm font-medium">Accessoires</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-3">
          {[
            { value: "helm", label: "Helm (€10/dag)" },
            { value: "jas", label: "Motorjas (€10/dag)" },
            { value: "topkoffer", label: "Topkoffer (€10/dag)" },
          ].map((opt) => (
            <label key={opt.value} className="flex items-center gap-2 rounded-md border border-black/10 bg-white px-3 py-2 text-sm">
              <input type="checkbox" name="accessoires" value={opt.value} />
              {opt.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Naam" htmlFor="naam" error={errors.naam} required>
          <input id="naam" name="naam" required autoComplete="name" className={inputClass} />
        </Field>
        <Field label="Telefoon" htmlFor="telefoon" error={errors.telefoon} required>
          <input id="telefoon" name="telefoon" required autoComplete="tel" className={inputClass} />
        </Field>
      </div>

      <Field label="E-mail" htmlFor="email" error={errors.email} required>
        <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
      </Field>

      <Field label="Opmerkingen" htmlFor="opmerkingen">
        <textarea id="opmerkingen" name="opmerkingen" rows={4} className={`${inputClass} h-auto min-h-[100px] py-2`} />
      </Field>

      <div className="hidden" aria-hidden="true">
        <label>Website<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <p className="text-xs text-[var(--color-ink-muted)]">
        Dit is een aanvraag — pas na onze bevestiging is uw reservering definitief.
      </p>

      <Button type="submit" disabled={pending} className="w-full md:w-auto">
        {pending ? "Versturen…" : <>Stuur reserveringsaanvraag <Send className="h-4 w-4" /></>}
      </Button>
    </form>
  );
}
