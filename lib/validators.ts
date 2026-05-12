import { z } from "zod";

export const contactSchema = z.object({
  naam: z.string().min(2, "Vul uw naam in"),
  email: z.string().email("Vul een geldig e-mailadres in"),
  telefoon: z.string().optional().or(z.literal("")),
  onderwerp: z.string().min(2, "Kies een onderwerp"),
  bericht: z.string().min(10, "Vertel ons iets meer (minimaal 10 tekens)"),
  // honeypot — should always be empty
  website: z.string().max(0, "Spam gedetecteerd").optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const rentalSchema = z
  .object({
    motor: z.string().min(1, "Kies een motor"),
    startdatum: z.string().min(1, "Vul een startdatum in"),
    einddatum: z.string().min(1, "Vul een einddatum in"),
    rijbewijs: z.enum(["A", "A2"], { errorMap: () => ({ message: "Kies A of A2" }) }),
    accessoires: z.array(z.enum(["helm", "jas", "topkoffer"])).optional().default([]),
    naam: z.string().min(2, "Vul uw naam in"),
    email: z.string().email("Vul een geldig e-mailadres in"),
    telefoon: z.string().min(8, "Vul een telefoonnummer in"),
    opmerkingen: z.string().optional().or(z.literal("")),
    website: z.string().max(0).optional().or(z.literal("")),
  })
  .refine((d) => new Date(d.einddatum) > new Date(d.startdatum), {
    message: "Einddatum moet na startdatum liggen",
    path: ["einddatum"],
  });

export type RentalInput = z.infer<typeof rentalSchema>;
