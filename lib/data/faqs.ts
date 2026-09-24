/**
 * DEMO / DEVELOPMENT DATA ONLY — fictional FAQ content.
 */
import type { FAQ, FAQCategory } from "@/types";

export const mockFAQCategories: FAQCategory[] = [
  { id: "fcat-1", name: "General", slug: "general", description: "About the Energy Mobility network" },
  { id: "fcat-2", name: "Fuel", slug: "fuel", description: "Petrol and diesel questions" },
  { id: "fcat-3", name: "EV Charging", slug: "ev-charging", description: "Pulse EV network" },
  { id: "fcat-4", name: "CNG", slug: "cng", description: "Natural-gas filling" },
  { id: "fcat-5", name: "Fuel Delivery", slug: "fuel-delivery", description: "Doorstep diesel" },
  { id: "fcat-6", name: "Rewards", slug: "rewards", description: "EM Rewards loyalty" },
];

export const mockFAQs: FAQ[] = [
  {
    id: "f-1",
    question: "What is Energy Mobility?",
    answer:
      "Energy Mobility is an energy and mobility network offering premium fuel, EV fast charging, CNG, doorstep diesel, fleet solutions, cafés, convenience stores and more — designed around the modern traveller and business.",
    categorySlug: "general",
    displayOrder: 1,
    status: "ACTIVE",
  },
  {
    id: "f-2",
    question: "Where can I find an Energy Mobility station?",
    answer:
      "Use the Locate page to search by city, service (fuel, EV, CNG, café and more) or you can simply let the locator use your location. Each station card shows address, operating hours, available services and day's fuel prices.",
    categorySlug: "general",
    displayOrder: 2,
    status: "ACTIVE",
  },
  {
    id: "f-3",
    question: "Which payment methods are accepted at stations?",
    answer:
      "All stations accept UPI, major credit and debit cards, mobile wallets and select fuel cards. Cash is accepted at most locations. Receipts can be sent by SMS or email on request.",
    categorySlug: "fuel",
    displayOrder: 3,
    status: "ACTIVE",
  },
  {
    id: "f-4",
    question: "Is the fuel quality checked?",
    answer:
      "Yes. Every station follows a documented fuel-quality governance process, including regular third-party lab testing and calibrated dispensing equipment that is inspected on a set schedule.",
    categorySlug: "fuel",
    displayOrder: 4,
    status: "ACTIVE",
  },
  {
    id: "f-5",
    question: "How do I find charging stations for my electric car?",
    answer:
      "Open the Locate page and filter by 'EV Charging'. Station cards show charger type, power level and operating hours. Availability shown is indicative and can vary with real-time load.",
    categorySlug: "ev-charging",
    displayOrder: 5,
    status: "ACTIVE",
  },
  {
    id: "f-6",
    question: "Which connectors are supported at Pulse EV chargers?",
    answer:
      "Our DC fast chargers support CCS2, CHAdeMO and GB/T connectors. Charger-level connector details are listed on each station's EV service information.",
    categorySlug: "ev-charging",
    displayOrder: 6,
    status: "ACTIVE",
  },
  {
    id: "f-7",
    question: "How is EV charging billed?",
    answer:
      "Charging is billed per kilowatt-hour (kWh) at the rate displayed at the charger before you begin. Payment is digital — UPI, cards or wallets — at the end of the session.",
    categorySlug: "ev-charging",
    displayOrder: 7,
    status: "ACTIVE",
  },
  {
    id: "f-8",
    question: "Which vehicles can fuel with CNG at your stations?",
    answer:
      "CNG is available for factory-fit and government-certified conversion kits on cars, rickshaws, auto-rickshaws and light commercial vehicles. Trained staff verify eligibility before dispensing.",
    categorySlug: "cng",
    displayOrder: 8,
    status: "ACTIVE",
  },
  {
    id: "f-9",
    question: "Can I order doorstep diesel for my generator or site?",
    answer:
      "Yes. Doorstep Diesel serves business and institutional customers — generators, construction sites and industrial machinery. Send a request through the Partnerships page or contact us and our team will confirm scheduling, pricing and documentation.",
    categorySlug: "fuel-delivery",
    displayOrder: 9,
    status: "ACTIVE",
  },
  {
    id: "f-10",
    question: "What payment terms apply to doorstep diesel?",
    answer:
      "Terms depend on order size and customer profile. Typically, corporate customers are offered credit terms after verification; others pay per delivery. Every delivery is quantity-verified and comes with a digital invoice.",
    categorySlug: "fuel-delivery",
    displayOrder: 10,
    status: "ACTIVE",
  },
  {
    id: "f-11",
    question: "How does EM Rewards work?",
    answer:
      "Every rupee of eligible spend at our stations earns points. Points can be redeemed against fuel, café purchases and merchandise. Points never expire as long as you transact at least once in 12 months.",
    categorySlug: "rewards",
    displayOrder: 11,
    status: "ACTIVE",
  },
  {
    id: "f-12",
    question: "How do I check my rewards balance?",
    answer:
      "Sign in to the EM Rewards portal using the mobile number linked to your membership. Your balance, transaction history and redemption options are shown right away.",
    categorySlug: "rewards",
    displayOrder: 12,
    status: "ACTIVE",
  },
];