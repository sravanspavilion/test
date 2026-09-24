/**
 * DEMO / DEVELOPMENT DATA ONLY — fictional job openings.
 */
import type { Job } from "@/types";

export const mockJobs: Job[] = [
  {
    id: "j-1",
    title: "Senior Frontend Engineer — Web",
    slug: "senior-frontend-engineer-web",
    department: "Technology",
    location: "Bengaluru (Hybrid)",
    employmentType: "FULL_TIME",
    description:
      "You will own customer-facing Next.js experiences across the Energy Mobility web platform — from the station locator to the rewards portal — working with designers and API engineers to ship accessible, fast interfaces.",
    requirements: [
      "5+ years building production web applications",
      "Strong TypeScript and modern React (App Router) experience",
      "A good eye for accessibility and performance budgets",
      "Comfort shipping features end-to-end with APIs",
    ],
    status: "PUBLISHED",
    publishedAt: "2026-09-10T00:00:00.000Z",
  },
  {
    id: "j-2",
    title: "Fleet Account Manager",
    slug: "fleet-account-manager",
    department: "Sales",
    location: "Mumbai (Hybrid)",
    employmentType: "FULL_TIME",
    description:
      "Own the relationship for mid-size commercial fleets: onboarding, fuel-card rollout, usage reviews and renewals. You will work closely with the Fleet Connect product team to turn customer feedback into roadmap input.",
    requirements: [
      "4+ years in B2B sales or account management",
      "Experience selling fuel, logistics or mobility services preferred",
      "Strong data fluency — you review usage reports before you call",
      "Willingness to travel within the assigned region",
    ],
    status: "PUBLISHED",
    publishedAt: "2026-09-01T00:00:00.000Z",
  },
  {
    id: "j-3",
    title: "Station Operations Associate",
    slug: "station-operations-associate",
    department: "Operations",
    location: "Nagpur",
    employmentType: "FULL_TIME",
    description:
      "Run day-to-day station operations — quality checks, licensee support, staff scheduling and incident response — across a cluster of stations in Central Maharashtra.",
    requirements: [
      "2+ years in retail or fuel-station operations",
      "Record-keeping discipline and comfort with digital tools",
      "Excellent Hindi and Marathi communication",
      "Valid two-wheeler driving licence and mobility within the cluster",
    ],
    status: "PUBLISHED",
    publishedAt: "2026-08-20T00:00:00.000Z",
  },
  {
    id: "j-4",
    title: "Charging Network Engineer — EV",
    slug: "charging-network-engineer-ev",
    department: "Technology",
    location: "Pune (On-site)",
    employmentType: "FULL_TIME",
    description:
      "Engineer the physical and digital backbone of our Pulse EV network: site due-diligence, charger commissioning, uptime monitoring and vendor coordination with charger OEMs.",
    requirements: [
      "3+ years in EV charging, power electronics or grid infrastructure",
      "Hands-on experience commissioning DC fast chargers",
      "Comfortable with field travel and site-level troubleshooting",
      "Electrical safety certification or willingness to obtain one",
    ],
    status: "PUBLISHED",
    publishedAt: "2026-08-05T00:00:00.000Z",
  },
  {
    id: "j-5",
    title: "Senior Brand Designer",
    slug: "senior-brand-designer",
    department: "Marketing",
    location: "Bengaluru (Hybrid)",
    employmentType: "FULL_TIME",
    description:
      "Keep the Energy Mobility brand sharp across stations, digital and campaigns. You will evolve our design system, art-direct station signage refreshes and partner with product designers on the locator and rewards portal.",
    requirements: [
      "6+ years in brand or visual design",
      "A portfolio showing systemic thinking, not just screens",
      "Fluency in Figma and motion design basics",
      "Comfort presenting to leadership and franchise partners",
    ],
    status: "PUBLISHED",
    publishedAt: "2026-07-22T00:00:00.000Z",
  },
];

export const jobDepartments = [...new Set(mockJobs.map((j) => j.department))].sort();