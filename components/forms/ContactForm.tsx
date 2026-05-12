"use client";

import { useActionState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Field, inputClass } from "./Field";
import { Button } from "@/components/ui/Button";
import { submitContact, type FormState } from "@/app/actions/contact";

const initial: FormState = { status: "idle" };

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initial);
  const errors = state.status === "error" ? state.fieldErrors ?? {} : {};

  if (state.status === "success") {
    return (
      <div className="rounded-xl border border-[var(--color-success)]/30 bg-[var(--color-success)]/5 p-6">
        <div className="flex items-center gap-3 text-[var(--color-success)]">
          <CheckCircle2 className="h-6 w-6" />
          <h3 className="text-lg font-semibold">Bedankt voor uw bericht!</h3>
        </div>
        <p className="mt-2 text-sm text-[var(--color-ink)]">
          We hebben uw bericht ontvangen en nemen zo snel mogelijk contact met u op — meestal binnen
          één werkdag.
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

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Naam" htmlFor="naam" error={errors.naam} required>
          <input id="naam" name="naam" autoComplete="name" required className={inputClass} />
        </Field>
        <Field label="E-mail" htmlFor="email" error={errors.email} required>
          <input id="email" name="email" type="email" autoComplete="email" required className={inputClass} />
        </Field>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Telefoon" htmlFor="telefoon" error={errors.telefoon}>
          <input id="telefoon" name="telefoon" autoComplete="tel" className={inputClass} />
        </Field>
        <Field label="Onderwerp" htmlFor="onderwerp" error={errors.onderwerp} required>
          <select id="onderwerp" name="onderwerp" required className={inputClass} defaultValue="">
            <option value="" disabled>Kies een onderwerp</option>
            <option>Algemene vraag</option>
            <option>Interesse in een occasion</option>
            <option>Werkplaats / onderhoud</option>
            <option>Verhuur</option>
            <option>Financiering</option>
            <option>Verzekering</option>
            <option>Onderdelen</option>
          </select>
        </Field>
      </div>

      <Field label="Bericht" htmlFor="bericht" error={errors.bericht} required>
        <textarea
          id="bericht"
          name="bericht"
          rows={6}
          required
          className={`${inputClass} h-auto min-h-[140px] py-2`}
        />
      </Field>

      {/* Honeypot — hidden from users */}
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <p className="text-xs text-[var(--color-ink-muted)]">
        Door dit formulier te versturen gaat u akkoord met ons{" "}
        <a href="/privacy" className="underline">privacybeleid</a>.
      </p>

      <Button type="submit" disabled={pending} className="w-full md:w-auto">
        {pending ? "Versturen…" : <>Verstuur bericht <Send className="h-4 w-4" /></>}
      </Button>
    </form>
  );
}
