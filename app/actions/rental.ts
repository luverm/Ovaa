"use server";

import { rentalSchema } from "@/lib/validators";
import { sendMail, escapeHtml } from "@/lib/email";
import { rentalBikes } from "@/lib/sample-data";

export type FormState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string; fieldErrors?: Record<string, string> };

export async function submitRental(_prev: FormState, formData: FormData): Promise<FormState> {
  // accessoires arrives as multiple FormData entries with the same key
  const raw: Record<string, unknown> = Object.fromEntries(formData.entries());
  raw.accessoires = formData.getAll("accessoires");

  const parsed = rentalSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const err of parsed.error.errors) {
      fieldErrors[err.path.join(".")] = err.message;
    }
    return { status: "error", message: "Controleer de invoer.", fieldErrors };
  }

  const d = parsed.data;
  const bike = rentalBikes.find((b) => b.slug === d.motor);
  const bikeName = bike?.name ?? d.motor;

  const html = `
    <h2>Nieuwe reserveringsaanvraag — verhuur</h2>
    <p><strong>Motor:</strong> ${escapeHtml(bikeName)}</p>
    <p><strong>Periode:</strong> ${escapeHtml(d.startdatum)} t/m ${escapeHtml(d.einddatum)}</p>
    <p><strong>Rijbewijs:</strong> ${escapeHtml(d.rijbewijs)}</p>
    <p><strong>Accessoires:</strong> ${
      d.accessoires && d.accessoires.length ? d.accessoires.map(escapeHtml).join(", ") : "geen"
    }</p>
    <hr/>
    <p><strong>Naam:</strong> ${escapeHtml(d.naam)}</p>
    <p><strong>E-mail:</strong> ${escapeHtml(d.email)}</p>
    <p><strong>Telefoon:</strong> ${escapeHtml(d.telefoon)}</p>
    <p><strong>Opmerkingen:</strong></p>
    <p style="white-space: pre-wrap; padding:12px; background:#f7f7f8; border-left:4px solid #1c82db;">${escapeHtml(
      d.opmerkingen ?? "—",
    )}</p>
    <p style="color:#888;font-size:12px;">Geen automatische bevestiging — neem contact op met de klant ter bevestiging van beschikbaarheid.</p>
  `;

  const result = await sendMail({
    subject: `Verhuur-aanvraag: ${bikeName} (${d.startdatum} → ${d.einddatum})`,
    html,
    replyTo: d.email,
  });

  if (!result.ok) {
    return {
      status: "error",
      message: "Er ging iets mis bij het versturen. Probeer het later opnieuw of bel ons direct.",
    };
  }
  return { status: "success" };
}
