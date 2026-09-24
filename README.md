# Energy Mobility — Frontend (Next.js 16)

Enterprise-grade energy & mobility corporate website frontend. Original
implementation modeled only on the *public information architecture* of a
reference energy retailer — no code, assets or text copied.

## Stack

- **Next.js 16** (App Router) + React 19 + TypeScript (strict)
- **Tailwind CSS v4** — design tokens in `app/globals.css` (`@theme`)
- No external UI or icon libraries — all icons and visuals are original SVG/CSS

## Quick start

```bash
npm install
cp .env.example .env.local   # defaults = demo mode; no changes needed to run
npm run dev                  # http://localhost:3000
```

Production build:

```bash
npm run build
npm run start
```

## Demo mode vs live API

The service layer (`services/*`) reads `NEXT_PUBLIC_API_URL`:

- **Empty** → the site runs standalone on clearly-labelled fictional seed data in
  `lib/data/*` (stations, products, news, FAQs, careers).
- **Set** (e.g. `http://localhost:4000`) → the same service functions call the
  NestJS API at `/api/v1/...` with `{success, message, code}` responses, so the
  swap is transparent to pages.

Map provider is pluggable via `NEXT_PUBLIC_MAP_PROVIDER` (`osm` | `google` |
`mapbox`); station cards already link to turn-by-turn directions for the
configured provider.

## Pages

| Route | Description |
| --- | --- |
| `/` | Homepage (hero, services, prices, EV, business, news, FAQs, CTA) |
| `/products-and-services` | Portfolio hub grouped by category |
| `/products-and-services/[slug]` | Product/service detail |
| `/locate` | Station locator — search, filters, geolocation, directions |
| `/stations/[slug]` | Station detail (services, prices, hours, contact) |
| `/news` · `/news/[slug]` | Newsroom list & article |
| `/faqs` | FAQ accordions by category |
| `/contact` | Contact + callback request forms |
| `/about` · `/partnerships` · `/rewards` · `/careers` | Corporate pages |
| `/legal/privacy` | Demo privacy policy |
| `/admin/login` · `/admin` | Demo admin (localStorage session, no real auth) |

## Structure

```
app/            routes, layouts, metadata, sitemap, robots, error/loading/404
components/
  layout/       header (client), footer, brand
  ui/           icons, button, card, form controls, accordion, tabs, etc.
  features/     hero, service grid, station locator, news, faqs, lead forms
lib/            config, utils, seo helpers, demo auth, demo data
services/       data-access layer (API or mock fallback)
types/          shared domain types mirroring the backend DTOs
```

## Notes

- All seed content is fictional and labelled as demo data.
- No real credentials anywhere; the admin screen is a simulated flow until the
  backend (NestJS + JWT/RBAC) lands in later phases.
- Accessibility: skip link, focus-visible rings, aria labels, reduced-motion
  support, semantic landmarks throughout.