/**
 * DEMO / DEVELOPMENT DATA ONLY — fictional press & company news.
 * Not real announcements.
 */
import type { NewsArticle, NewsCategory } from "@/types";

export const mockNewsCategories: NewsCategory[] = [
  { id: "nc-1", name: "Press Release", slug: "press-release" },
  { id: "nc-2", name: "Company", slug: "company" },
  { id: "nc-3", name: "Partnerships", slug: "partnerships" },
  { id: "nc-4", name: "Sustainability", slug: "sustainability" },
  { id: "nc-5", name: "Electric Mobility", slug: "electric-mobility" },
];

export const mockNews: NewsArticle[] = [
  {
    id: "n-1",
    title: "Energy Mobility crosses 500 EV fast-charging points",
    slug: "energy-mobility-crosses-500-ev-fast-charging-points",
    summary:
      "Our Pulse EV network has crossed 500 fast-charging points across 40 cities, with highway corridors next in line.",
    content:
      "Energy Mobility today announced that its Pulse EV fast-charging network has crossed 500 charging points across 40 cities in India.\n\nThe network, which began with a handful of city stations two years ago, now serves electric cars, buses and light commercial vehicles on major urban routes.\n\n\"Demand for dependable public charging has grown far faster than the industry expected,\" said the company's EV vertical lead. \"Our next focus is highway corridors so intercity travellers can charge with the same confidence they refuel today.\"\n\nThe company plans to add another 250 charging points in the next twelve months, prioritising state highways and national corridors.",
    category: "electric-mobility",
    author: "Communications Team",
    publishedAt: "2026-09-02T05:30:00.000Z",
    status: "PUBLISHED",
    seoTitle: "500 EV Fast-Charging Points | Energy Mobility News",
    seoDescription:
      "Energy Mobility's Pulse EV network crosses 500 fast-charging points across 40 cities. Read the announcement.",
  },
  {
    id: "n-2",
    title: "New partnership brings doorstep diesel to construction sites",
    slug: "partnership-brings-doorstep-diesel-to-construction-sites",
    summary:
      "A pan-India builder's body will now offtake Doorstep Diesel across 60+ active project sites.",
    content:
      "Energy Mobility has signed a partnership with a national builders' association to supply Doorstep Diesel to more than 60 active construction sites across six states.\n\nUnder the arrangement, certified mobile dispensing units will deliver quantity-verified diesel directly to generators and heavy machinery, replacing intermediate fuel storage on many sites.\n\n\"Fuel accountability is a real challenge on construction sites,\" said our business development head. \"This model gives site managers one verified supplier, digital records and a single invoice.\"\n\nRollout begins this financial year, starting with sites in Maharashtra, Karnataka and Telangana.",
    category: "partnerships",
    author: "Corporate Office",
    publishedAt: "2026-08-18T10:00:00.000Z",
    status: "PUBLISHED",
    seoTitle: "Doorstep Diesel Partnership For Construction | Energy Mobility",
    seoDescription:
      "Energy Mobility to supply Doorstep Diesel to 60+ construction sites through a new pan-India partnership.",
  },
  {
    id: "n-3",
    title: "Annual sustainability report: 38% lower carbon intensity per litre sold",
    slug: "annual-sustainability-report-38-percent-lower-carbon-intensity",
    summary:
      "Our latest sustainability report shows measurable progress on efficiency, waste and community programmes.",
    content:
      "Energy Mobility has published its annual sustainability report, recording a 38% reduction in carbon intensity per litre sold compared with the baseline year.\n\nThe report covers fuel-efficiency gains across the logistics chain, solar generation at select stations, water recovery in vehicle wash facilities and zero-landfill targets for café and convenience waste.\n\nIt also details community programmes in the towns around our new stations, including road-safety workshops and skill training for station staff.\n\nThe full report is available on request through the contact page.",
    category: "sustainability",
    author: "Sustainability Office",
    publishedAt: "2026-07-30T05:30:00.000Z",
    status: "PUBLISHED",
    seoTitle: "Annual Sustainability Report | Energy Mobility",
    seoDescription:
      "Energy Mobility's latest sustainability report: 38% lower carbon intensity per litre and stronger community programmes.",
  },
  {
    id: "n-4",
    title: "EM Rewards refreshes: fuel points now redeemable at Wild Café",
    slug: "em-rewards-refresh-fuel-points-redeemable-at-wild-cafe",
    summary:
      "Members can now redeem loyalty points at Wild Café outlets, in addition to fuel discounts and merchandise.",
    content:
      "EM Rewards, our loyalty programme, has added Wild Café redemptions to its menu.\n\nMembers already earn points on every fuel litre through EM Rewards. From this month, those points can also be redeemed against coffee, snacks and quick bites at participating Wild Café outlets.\n\n\"Loyalty should feel useful every day, not just at the pump,\" said the programme lead. \"Adding café redemptions makes points travel with you.\"\n\nRedemption is available through the EM Rewards app and at participating counters.",
    category: "company",
    author: "Loyalty Team",
    publishedAt: "2026-07-12T09:00:00.000Z",
    status: "PUBLISHED",
    seoTitle: "EM Rewards — Redeem Points At Wild Café | Energy Mobility",
    seoDescription:
      "EM Rewards members can now redeem loyalty points at Wild Café outlets alongside fuel discounts and merchandise.",
  },
  {
    id: "n-5",
    title: "Four new CNG stations open on the Delhi–Chandigarh corridor",
    slug: "four-new-cng-stations-open-delhi-chandigarh-corridor",
    summary:
      "Highway travellers on the Delhi–Chandigarh corridor now have four new convenient CNG stops.",
    content:
      "Energy Mobility has commissioned four new CNG stations along the Delhi–Chandigarh highway corridor.\n\nThe stations are positioned so that light commercial vehicles and passenger cars can refuel without significant detours from the carriageway.\n\nEach station runs regulated dispensing equipment with trained operators, and live operational status is shown in our station locator.\n\nFurther CNG stations are planned for the adjoining Ambala–Ludhiana section later this year.",
    category: "press-release",
    author: "Communications Team",
    publishedAt: "2026-06-25T04:00:00.000Z",
    status: "PUBLISHED",
    seoTitle: "New CNG Stations Delhi–Chandigarh Corridor | Energy Mobility",
    seoDescription:
      "Four new CNG stations open along the Delhi–Chandigarh corridor. Locate them with the Energy Mobility station locator.",
  },
  {
    id: "n-6",
    title: "Fleet Connect adds live trip reporting for last-mile operators",
    slug: "fleet-connect-adds-live-trip-reporting-last-mile",
    summary:
      "A new dashboard gives last-mile operators per-trip fuel and route insights in near real time.",
    content:
      "Fleet Connect has introduced live trip reporting, giving last-mile and local delivery operators per-trip visibility into fuel consumption and route efficiency.\n\nThe new dashboard aggregates telemetry from participating vehicles and maps it against fuel card transactions at our stations.\n\nOperators can set trip-level budgets and review exceptions — like refuels outside geofenced areas — the same evening.\n\nThe feature is available to Fleet Connect customers at no additional cost.",
    category: "company",
    author: "Fleet Products Team",
    publishedAt: "2026-06-08T07:00:00.000Z",
    status: "PUBLISHED",
    seoTitle: "Fleet Connect Live Trip Reporting | Energy Mobility",
    seoDescription:
      "Fleet Connect adds live trip reporting with per-trip fuel and route insights for last-mile operators.",
  },
  {
    id: "n-7",
    title: "Rooftop solar now powers a third of our highway stations",
    slug: "rooftop-solar-powers-third-of-highway-stations",
    summary:
      "Solar generation offsets a meaningful share of station draw and powers EV chargers during the day.",
    content:
      "More than a third of Energy Mobility's highway stations now generate part of their own electricity through rooftop solar.\n\nThe panels offset daytime station consumption and, where configured, feed into our Pulse EV chargers — lowering the carbon footprint of every kilowatt-hour dispensed.\n\n\"Solar at scale only works if it pays for itself,\" noted our energy transition lead. \"By pairing generation with EV load at the same site, the economics are now clear.\"\n\nThe programme continues at city sites with suitable roofs.",
    category: "sustainability",
    author: "Energy Transition Office",
    publishedAt: "2026-05-22T05:30:00.000Z",
    status: "PUBLISHED",
    seoTitle: "Rooftop Solar At Highway Stations | Energy Mobility",
    seoDescription:
      "Rooftop solar now powers a third of Energy Mobility highway stations, including EV chargers during daytime.",
  },
  {
    id: "n-8",
    title: "Energy Mobility named 'Fuel Retailer of the Year' at industry awards",
    slug: "energy-mobility-named-fuel-retailer-of-the-year",
    summary:
      "The award recognises network growth, service standards and the pace of our EV and CNG expansion.",
    content:
      "Energy Mobility has been named 'Fuel Retailer of the Year' at a national energy industry awards ceremony.\n\nThe jury cited balanced network growth, consistent fuel-quality governance and the pace of our Pulse EV and CNG expansion as deciding factors.\n\n\"This one is for the people at our stations who show up every day,\" said our chief executive. \"The award reflects thousands of small, consistent decisions made at the forecourt.\"\n\nThe company continues to open new stations in Tier-2 and Tier-3 cities.",
    category: "press-release",
    author: "Communications Team",
    publishedAt: "2026-05-05T06:00:00.000Z",
    status: "PUBLISHED",
    seoTitle: "Fuel Retailer Of The Year Award | Energy Mobility",
    seoDescription:
      "Energy Mobility named 'Fuel Retailer of the Year' at national energy industry awards. Read the announcement.",
  },
  {
    id: "n-9",
    title: "Wild Café rolls out at 25 new stations this quarter",
    slug: "wild-cafe-rolls-out-25-new-stations",
    summary:
      "The café format keeps expanding, with trained baristas and a tighter menu built for quick highway stops.",
    content:
      "Wild Café has opened at 25 new stations this quarter, bringing the format's cumulative footprint past 80 outlets.\n\nThe rollout pairs each new café with station staff training, ensuring consistent brew quality and counter speed even at busy highway locations.\n\nA streamlined menu — built around coffee, tea, snacks and a few hot meals — keeps average order times under two minutes.\n\nThe next tranche of cafés is planned for southern state highways.",
    category: "company",
    author: "Retail Formats Team",
    publishedAt: "2026-04-18T08:00:00.000Z",
    status: "PUBLISHED",
    seoTitle: "Wild Café Expands To 80+ Outlets | Energy Mobility",
    seoDescription:
      "Wild Café opens at 25 new stations in the quarter, crossing 80 cumulative outlets. Find a café near you.",
  },
  {
    id: "n-10",
    title: "Tyre Care nitrogen inflation now at 60 stations",
    slug: "tyre-care-nitrogen-inflation-at-60-stations",
    summary:
      "Free nitrogen inflation has been extended to 60 stations, with priority at truck-stop locations.",
    content:
      "Tyre Care, our nitrogen inflation service, is now available at 60 stations across the network.\n\nNitrogen escapes tyres more slowly than compressed air, so pressures stay stable longer — a practical benefit for highway travellers and long-haul trucking alike.\n\nThe latest installations prioritised truck-stop sites, where extended tyre life translates directly into operating savings.\n\nThe service is offered free at participating stations.",
    category: "press-release",
    author: "Station Services Team",
    publishedAt: "2026-04-02T05:30:00.000Z",
    status: "PUBLISHED",
    seoTitle: "Tyre Care Nitrogen Inflation At 60 Stations | Energy Mobility",
    seoDescription:
      "Tyre Care nitrogen inflation reaches 60 stations with priority at truck stops. Find a participating station.",
  },
];

export const newsCategoryMap = new Map(mockNewsCategories.map((c) => [c.slug, c]));