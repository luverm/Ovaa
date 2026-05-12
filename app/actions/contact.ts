"use server";

import { contactSchema } from "@/lib/validators";
import { sendMail, escapeHtml } from "@/lib/email";

export type FormState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string; fieldErrors?: Record<string, string> };

export async function submitContact(_prev: FormState, formData: FormData): Promise<FormState> {
  const raw = Object.fromEntries(formData.entries());
  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const err of parsed.error.errors) {
      fieldErrors[err.path.join(".")] = err.message;
    }
    return { status: "error", message: "Controleer de invoer en probeer opnieuw.", fieldErrors };
  }

  const { naam, email, telefoon, onderwerp, bericht } = parsed.data;

  const html = `
    <h2>Nieuw contactformulier — ovaamotors.nl</h2>
    <p><strong>Naam:</strong> ${escapeHtml(naam)}</p>
    <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
    <p><strong>Telefoon:</strong> ${escapeHtml(telefoon ?? "—")}</p>
    <p><strong>Onderwerp:</strong> ${escapeHtml(onderwerp)}</p>
    <p><strong>Bericht:</strong></p>
    <p style="white-space: pre-wrap; padding: 12px; background:#f7f7f8; border-left:4px solid #1c82db;">${escapeHtml(
      bericht,
    )}</p>
  `;

  const result = await sendMail({
    subject: `Contactformulier: ${onderwerp}`,
    html,
    replyTo: email,
  });

  if (!result.ok) {
    return {
      status: "error",
      message:
        "Er ging iets mis bij het versturen. Probeer het later opnieuw of bel ons direct.",
    };
  }
  return { status: "success" };
}
