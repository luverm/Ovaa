# Ovaa Motors — website rebuild

Modern rebuild of [ovaamotors.nl](https://www.ovaamotors.nl/), Zeeland's
motorcycle dealership since 1978.

**Stack:** Next.js 15 (App Router, TypeScript) · Tailwind CSS v4 · Resend (email)
· Sonner (toasts) · Embla (carousel) · Lucide (icons) · Zod (validation).

Designed to evolve into a Payload CMS–backed site (see *Roadmap*).

---

## Quick start

```bash
npm install
cp .env.example .env.local      # add your Resend key when you have one
npm run dev                     # http://localhost:3000
```

The site runs without any env vars. Form submissions are logged to the console
in dev when `RESEND_API_KEY` is unset.

### Scripts

| command         | what it does                          |
| --------------- | ------------------------------------- |
| `npm run dev`   | dev server with hot reload            |
| `npm run build` | production build                      |
| `npm run start` | start production build                |
| `npm run lint`  | eslint                                |
| `npm run typecheck` | strict TypeScript                |

---

## Site map

| Route                             | What lives here                                    |
| --------------------------------- | -------------------------------------------------- |
| `/`                               | Homepage — hero slider, USPs, merken, occasions, services, news, contact |
| `/merken`                         | Overview of all brands                             |
| `/merken/[brand]`                 | Brand hub (Suzuki, Yamaha, KTM, Husqvarna, GASGAS) |
| `/merken/[brand]/[type]`          | Brand × category (straat / off-road)               |
| `/occasions`                      | Hub of bike categories                             |
| `/occasions/[demo\|straat\|off-road]` | Filtered list                                  |
| `/occasions/[slug]`               | Bike detail page                                   |
| `/diensten`                       | Services hub                                       |
| `/diensten/[slug]`                | Werkplaats · bandenservice · financiering · verlengde-garantie · suzuki-verzekering · combi-verzekering · parts-finder |
| `/verhuur`                        | Rental info + fleet + pricing                      |
| `/verhuur/boeken`                 | Online reservation form                            |
| `/nieuws`                         | Promotions / news list                             |
| `/nieuws/[slug]`                  | News post                                          |
| `/contact`                        | Contact form + map                                 |
| `/privacy` · `/cookies` · `/algemene-voorwaarden` | Legal               |
| `/sitemap.xml` · `/robots.txt`    | Auto-generated                                     |

---

## Architecture

```
app/
├── layout.tsx              ← Header + Footer + global styles, schema.org LocalBusiness JSON-LD
├── page.tsx                ← Homepage
├── globals.css             ← Tailwind v4 @theme tokens + base styles
├── sitemap.ts · robots.ts
├── not-found.tsx
├── actions/
│   ├── contact.ts          ← server action → Resend
│   └── rental.ts           ← server action → Resend
└── (route folders, see Site map)

components/
├── ui/                     ← Container, Section, Button (primitives)
├── site/                   ← Header, Footer, Hero, USPGrid, BikeCard, PageHero, ContactPanel, MapEmbed, CategoryTile, Logo
└── forms/                  ← Field, ContactForm, RentalForm

lib/
├── site-config.ts          ← single source of truth (contact, hours, nav, brands, services)
├── sample-data.ts          ← placeholder bikes/news/rentals (replace with CMS in Phase 5)
├── service-content.tsx     ← Dutch copy for each /diensten/[slug] page
├── validators.ts           ← Zod schemas for forms
├── email.ts                ← Resend wrapper (dev-fallback logs to console)
└── cn.ts                   ← clsx + tailwind-merge
```

### Design tokens

All colors and shadows live in `app/globals.css` under `@theme`. Brand-critical:

- `--color-brand-bg: #293133` — header / dark sections (matches current site)
- `--color-brand-accent: #1c82db` — CTAs and hover (matches current site)
- `--color-surface: #f7f7f8` — body background

---

## Email

Forms use **Resend**. Set `RESEND_API_KEY` in `.env.local`. Without it, the
contact and rental server actions log the email payload to the dev console — so
the UX flow works end-to-end while you're integrating.

Sender / recipient via env:
- `CONTACT_EMAIL_FROM` (default `website@ovaamotors.nl` — needs domain verified in Resend)
- `CONTACT_EMAIL_TO` (default `info@ovaamotors.nl`)

Anti-spam: Zod validation + honeypot `website` field. Add Turnstile/hCaptcha before launch.

---

## Roadmap

Implemented:
1. Full static site, all ~25 pages
2. Design system + reusable components
3. Contact + rental booking forms with Resend integration
4. SEO basics: metadata API, sitemap, robots, schema.org JSON-LD

Pending:
5. **Payload CMS v3** integration (collections: Bikes, Brands, NewsPosts, RentalBikes, Services, SiteSettings, Media). Currently bikes/news come from `lib/sample-data.ts` — switch to Payload calls.
6. Real motorcycle photography (current placeholders are Unsplash)
7. Turnstile/hCaptcha on forms
8. Optional: Plausible analytics + cookie banner
9. Deploy to Vercel + DNS cutover

---

## Deployment notes

- Recommended host: Vercel
- Required env vars (production): `RESEND_API_KEY`, `CONTACT_EMAIL_TO`, `CONTACT_EMAIL_FROM`, `NEXT_PUBLIC_SITE_URL`
- Domain verification in Resend (DKIM + SPF) needed for production sending
- Images: switch to a CDN-backed media library when CMS lands
