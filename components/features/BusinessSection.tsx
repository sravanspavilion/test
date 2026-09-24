import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Icon } from "@/components/ui/icons";

/**
 * Nation-wide delivery + fleet CTA band.
 */
const points = [
  {
    icon: "truck" as const,
    title: "Doorstep Diesel",
    desc: "Verified, quantity-checked diesel delivered to generators, sites and industrial assets — scheduled or on demand.",
    href: "/products-and-services/doorstep-diesel",
    cta: "Request delivery",
  },
  {
    icon: "fleet" as const,
    title: "Fleet Connect",
    desc: "Fuel cards accepted across the network, live tracking and spend insights that keep commercial fleets moving.",
    href: "/products-and-services/fleet-connect",
    cta: "Explore fleet solutions",
  },
];

export function BusinessSection() {
  return (
    <section className="bg-brand-50/60 py-20 lg:py-24" aria-labelledby="business-heading">
      <div className="container-site">
        <SectionHeader
          eyebrow="For business"
          title="Keep your operations fueled"
          description="Fleet owners and site operators run on predictable supply. We make it measurable, compliant and on time."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {points.map((p) => (
            <div
              key={p.title}
              className="relative overflow-hidden rounded-2xl border border-border bg-surface p-8 shadow-sm"
            >
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-10 size-40 rounded-full bg-brand-100/70 blur-2xl"
              />
              <span className="inline-grid size-13 place-items-center rounded-2xl bg-brand-700 text-white shadow-sm">
                <Icon name={p.icon} className="size-6" />
              </span>
              <h3 className="mt-5 text-xl font-extrabold text-slate-900">{p.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
                {p.desc}
              </p>
              <Link
                href={p.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-700 transition-colors hover:text-brand-800"
              >
                {p.cta}
                <Icon name="arrow-right" className="size-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}