import { Resend } from "resend";
import { siteConfig } from "./site-config";

const resendKey = process.env.RESEND_API_KEY;
const resend = resendKey ? new Resend(resendKey) : null;

const TO = process.env.CONTACT_EMAIL_TO ?? siteConfig.contact.email;
const FROM = process.env.CONTACT_EMAIL_FROM ?? `website@ovaamotors.nl`;

export type Mail = {
  subject: string;
  html: string;
  replyTo?: string;
  to?: string;
};

export async function sendMail({ subject, html, replyTo, to = TO }: Mail) {
  if (!resend) {
    // Dev fallback: log to console so the rest of the flow still works without a key.
    // eslint-disable-next-line no-console
    console.log("[email:dev] would send →", { to, subject, replyTo });
    // eslint-disable-next-line no-console
    console.log(html);
    return { ok: true as const, devMode: true };
  }
  const result = await resend.emails.send({
    from: FROM,
    to: [to],
    subject,
    html,
    replyTo,
  });
  if (result.error) {
    return { ok: false as const, error: result.error.message };
  }
  return { ok: true as const, id: result.data?.id };
}

export function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
