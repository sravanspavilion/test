import Link from "next/link";
import { Icon, type IconName } from "@/components/ui/icons";
import { SectionHeader } from "@/components/ui/SectionHeader";

const services: Array<{
  icon: IconName;
  title: string;
  blurb: string;
  href: string;
}> = [
  {
    icon: "fuel",
    title: "Fuel Retail",
    blurb: "Additivised premium petrol & diesel at 100% of our stations.",
    href: "/products-and-services/precision-fuel",
  },
  {
    icon: "ev",
    title: "EV Charging",
    blurb: "Pulse fast charging up to 360 kW for cars, buses and fleets.",
    href: "/products-and-services/ev-charging",
  },
  {
    icon: "cng",
    title: "CNG",
    blurb: "Cleaner, low-cost natural gas at city and highway stations.",
    href: "/products-and-services/cng",
  },
  {
    icon: "delivery",
    title: "Doorstep Diesel",
    blurb: "Verified on-site diesel for generators, sites and industry.",
    href: "/products-and-services/doorstep-diesel",
  },
  {
    icon: "fleet",
    title: "Fleet Connect",
    blurb: "Fuel cards, live tracking and spend control for fleets.",
    href: "/products-and-services/fleet-connect",
  },
  {
    icon: "cafe",
    title: "Wild Café",
    blurb: "Fresh brews and quick bites at select stations across India.",
    href: "/locate",
  },
  {
    icon: "store",
    title: "Convenience",
    blurb: "Snacks, drinks and travel essentials open when you travel.",
    href: "/products-and-services/convenience-stop",
  },
  {
    icon: "wrench",
    title: "Express Lube",
    blurb: "Professional oil change performed in a single stop.",
    href: "/products-and-services/express-lube",
  },
];

export function ServiceGrid() {
  return (
    <section className="container-site py-20 lg:py-24" aria-labelledby="services-heading">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeader
          eyebrow="What we offer"
          title="Everything your journey needs"
          description="From the forecourt to the café, a complete energy and mobility ecosystem at every stop."
        />
        <Link
          href="/products-and-services"
          className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-brand-700 transition-colors hover:text-brand-800"
        >
          All products & services
          <Icon name="arrow-right" className="size-4" />
        </Link>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <Link
            key={s.title}
            href={s.href}
            className="group rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-md"
          >
            <span className="inline-grid size-12 place-items-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-white">
              <Icon name={s.icon} className="size-6" />
            </span>
            <h3 className="mt-5 text-base font-bold text-slate-900">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.blurb}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
              Learn more
              <Icon
                name="arrow-right"
                className="size-4 transition-transform group-hover:translate-x-1"
              />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}