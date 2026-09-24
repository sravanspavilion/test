/**
 * Global site configuration.
 * Re-brand the whole site by editing these values / .env.
 * Never commit real secrets — see .env.example.
 */

export const SITE_NAME = "Jio Energy Mobility";
export const SITE_SHORT_NAME = "JEM";
export const SITE_TAGLINE =
  "Energy and mobility for every journey — fuel, EV charging, CNG, cafés and more.";
export const SITE_DESCRIPTION =
  "Jio Energy Mobility is an enterprise-grade energy and mobility network — premium fuel, fast EV charging, CNG, doorstep fuel delivery, fleet solutions and convenience services across India.";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/** When set, the frontend talks to the NestJS API. Empty = mock/demo data. */
export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

/** Pluggable map provider: "google" | "mapbox" | "osm" */
export const MAP_PROVIDER = process.env.NEXT_PUBLIC_MAP_PROVIDER ?? "osm";
export const MAP_API_KEY = process.env.NEXT_PUBLIC_MAP_API_KEY ?? "";

export const SUPPORT_PHONE =
  process.env.NEXT_PUBLIC_SUPPORT_PHONE ?? "1800-000-0000";
export const SUPPORT_EMAIL =
  process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "care@energymobility.example";

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Products & Services", href: "/products-and-services" },
  { label: "Locate", href: "/locate" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Rewards", href: "/rewards" },
  { label: "News", href: "/news" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
] as const;

/** API is unavailable → frontend serves demo data. */
export const IS_DEMO_MODE = API_URL === "";