import { cn } from "@/lib/utils";

/**
 * Original inline icon set — 24x24, stroke-based, consistent stroke width.
 * No external icon libraries or assets.
 */

export type IconName =
  | "fuel"
  | "ev"
  | "cng"
  | "delivery"
  | "fleet"
  | "rewards"
  | "cafe"
  | "store"
  | "lube"
  | "wrench"
  | "nitrogen"
  | "payment"
  | "aviation"
  | "food"
  | "spark"
  | "map-pin"
  | "search"
  | "menu"
  | "close"
  | "chevron-down"
  | "chevron-left"
  | "chevron-right"
  | "arrow-right"
  | "arrow-up-right"
  | "check"
  | "check-circle"
  | "star"
  | "truck"
  | "users"
  | "leaf"
  | "shield"
  | "clock"
  | "phone"
  | "mail"
  | "calendar"
  | "location"
  | "navigation"
  | "filter"
  | "plus"
  | "minus"
  | "alert"
  | "info"
  | "download"
  | "home"
  | "quote"
  | "camera"
  | "play"
  | "news";

const paths: Record<IconName, React.ReactNode> = {
  // Fuel pump nozzle
  fuel: (
    <>
      <path d="M4 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16" />
      <path d="M3 21h12" />
      <path d="M14 8h3a2 2 0 0 1 2 2v6a2 2 0 0 0 4 0v-4.5" />
      <path d="M20.5 7.5 22 9" />
      <path d="M9 7v2" />
      <path d="M9 11v2" />
    </>
  ),
  // EV plug
  ev: (
    <>
      <path d="M9 3v6" />
      <path d="M15 3v6" />
      <path d="M7 9h10a2 2 0 0 1 2 2v4a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4v-4a2 2 0 0 1 2-2z" />
      <path d="M12 19v4" />
      <path d="M7 14h2" />
      <path d="M15 14h2" />
    </>
  ),
  // CNG cylinder
  cng: (
    <>
      <path d="M10 2h4a1 1 0 0 1 1 1v3a5 5 0 0 1-6 0V3a1 1 0 0 1 1-1z" />
      <path d="M7 12a5 5 0 0 0 10 0V8a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v4z" />
      <path d="M12 12v4" />
      <path d="M12 18a1.5 1.5 0 1 0 0 .01" />
    </>
  ),
  // Doorstep delivery truck
  delivery: (
    <>
      <path d="M3 7h11v9H3z" />
      <path d="M14 10h4l3 3v3h-7" />
      <circle cx="7" cy="18.5" r="1.8" />
      <circle cx="17" cy="18.5" r="1.8" />
      <path d="M9 18.5h6.2" />
    </>
  ),
  // Fleet
  fleet: (
    <>
      <rect x="3" y="5" width="14" height="11" rx="2" />
      <path d="M17 9h3l1 4v3h-4" />
      <path d="M10 12h2" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="18" cy="18" r="1.6" />
      <path d="M8 18h8.4" />
    </>
  ),
  // Rewards badge/star
  rewards: (
    <>
      <path d="m12 3 2.2 4.7 5.1.6-3.8 3.5 1 5-4.5-2.5-4.5 2.5 1-5L4.7 8.3l5.1-.6L12 3z" />
      <path d="M12 3v5.3m0 8.4V21" transform="rotate(0 12 3)" />
    </>
  ),
  // Café cup
  cafe: (
    <>
      <path d="M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9z" />
      <path d="M17 10h2a2 2 0 0 1 0 4h-2" />
      <path d="M8 3c-.5 1 .5 1.5 0 2.5M12 3c-.5 1 .5 1.5 0 2.5" />
    </>
  ),
  // Convenience store
  store: (
    <>
      <path d="M4 9h16l-1-4H5l-1 4z" />
      <path d="M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9" />
      <path d="M9 20v-5h6v5" />
      <path d="M8 13h8" />
    </>
  ),
  // Lubricant oil can
  lube: (
    <>
      <path d="M6 8h9l3 6v6a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8z" transform="translate(1 -2)" />
      <path d="M7 20h12" />
      <path d="M10 2h6l-1 6H9l1-6z" />
      <path d="M12 10v-3" />
    </>
  ),
  // Wrench
  wrench: (
    <>
      <path d="M14.5 6.5a4.5 4.5 0 0 0-6 6L3 18l3 3 5.5-5.5a4.5 4.5 0 0 0 6-6L14 13l-3-3 3.5-3.5z" />
      <path d="M14.5 6.5 18 3l3 3-3.5 3.5" />
    </>
  ),
  // Nitrogen wheel
  nitrogen: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 4v5" />
      <path d="M12 15v5" />
      <path d="M4 12h5" />
      <path d="M15 12h5" />
    </>
  ),
  // Payment card
  payment: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18" />
      <path d="M7 15h4" />
    </>
  ),
  // Aviation plane
  aviation: (
    <>
      <path d="M3 12h18" />
      <path d="M17 8 21 12l-4 4" />
      <path d="M7 8 3 12l4 4" />
      <path d="M12 3v6m0 6v6" />
    </>
  ),
  // Food platter
  food: (
    <>
      <path d="M4 18h16" />
      <path d="M6 18a6 6 0 0 1 12 0" />
      <path d="M8 14h8" />
      <path d="M9 9h6" />
      <path d="M12 5v4" />
    </>
  ),
  // Spark
  spark: (
    <>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
      <path d="M19 16l.7 2 .15 1.6" strokeDasharray="0.1 3" />
    </>
  ),
  // Map pin
  "map-pin": (
    <>
      <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  // Search
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </>
  ),
  // Menu hamburger
  menu: (
    <>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </>
  ),
  // Close
  close: (
    <>
      <path d="M18 6 6 18M6 6l12 12" />
    </>
  ),
  "chevron-down": <path d="m6 9 6 6 6-6" />,
  "chevron-left": <path d="m15 18-6-6 6-6" />,
  "chevron-right": <path d="m9 18 6-6-6-6" />,
  "arrow-right": (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  "arrow-up-right": (
    <>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  "check-circle": (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.5 2.5 2.5 5-5.5" />
    </>
  ),
  star: (
    <path d="m12 3 2.2 4.7 5.1.6-3.8 3.5 1 5-4.5-2.5-4.5 2.5 1-5L4.7 8.3l5.1-.6L12 3z" />
  ),
  truck: (
    <>
      <path d="M3 6h11v10H3z" />
      <path d="M14 9h3.5L21 12.5V16h-7" />
      <circle cx="7.5" cy="17.5" r="1.5" />
      <circle cx="16.5" cy="17.5" r="1.5" />
      <path d="M9 17.5h6" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M16 4.6a3.5 3.5 0 0 1 0 6.8" />
      <path d="M18 14.4c1.7 1 3 2.8 3 5.1" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19c0-8 4-14 14-14-1 9-6 14-14 14z" />
      <path d="M5 19c3-6 6-9 10-11" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 5.5V11c0 4.5 3 8 7 10 4-2 7-5.5 7-10V5.5L12 3z" />
      <path d="m9 11.5 2.2 2.2L15.5 9.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  phone: (
    <path d="M5 4h4l1.5 4.5L8 10a12 12 0 0 0 6 6l1.5-2.5L20 15v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </>
  ),
  location: (
    <>
      <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  navigation: <path d="M3 11 21 3l-8 18-2.5-7.5L3 11z" />,
  filter: (
    <>
      <path d="M3 5h18l-7 8v6l-4 2v-8L3 5z" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  alert: (
    <>
      <path d="M12 3 2.5 20h19L12 3z" />
      <path d="M12 10v4" />
      <path d="M12 17h.01" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8h.01" />
      <path d="M12 11v5" />
    </>
  ),
  download: (
    <>
      <path d="M12 4v11" />
      <path d="m7 11 5 5 5-5" />
      <path d="M4 20h16" />
    </>
  ),
  home: (
    <>
      <path d="m4 11 8-7 8 7" />
      <path d="M6 10v10h12V10" />
    </>
  ),
  quote: (
    <>
      <path d="M9 7H6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v2a3 3 0 0 1-3 3" />
      <path d="M20 7h-3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v2a3 3 0 0 1-3 3" />
    </>
  ),
  camera: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="m8 7 1.5-2.5h5L16 7" />
      <circle cx="12" cy="13" r="3.5" />
    </>
  ),
  play: <path d="M8 5.5v13l11-6.5-11-6.5z" />,
  news: (
    <>
      <path d="M4 5h13a2 2 0 0 1 2 2v12H6a2 2 0 0 1-2-2V5z" />
      <path d="M19 10h1a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
      <path d="M7 8h7M7 12h7M7 16h4" />
    </>
  ),
};

export function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("size-5 shrink-0", className)}
    >
      {paths[name]}
    </svg>
  );
}