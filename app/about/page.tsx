import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Icon, type IconName } from "@/components/ui/icons";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Who we are, why we exist and the values behind the Energy Mobility network.",
  path: "/about",
});

const values: Array<{ icon: IconName; title: string; desc: string }> = [
  {
    icon: "shield",
    title: "Safety first",
    desc: "Certified operators, calibrated equipment and documented quality governance at every station.",
  },
  {
    icon: "leaf",
    title: "Cleaner choices",
    desc: "EV, CNG and solar-powered stations — choices that make the same journey lighter on the planet.",
  },
  {
    icon: "users",
    title: "People on the road",
    desc: "Truckers, commuters and families move this country. Every station is built around them.",
  },
  {
    icon: "spark",
    title: "Relentless improvement",
    desc: "From charging uptime to café queue times, we measure, publish and raise the bar.",
  },
];

const milestones = [
  { year: "2019", text: "First Energy Mobility stations open in Bengaluru and Mumbai." },
  { year: "2021", text: "Pulse EV charging network launches; CNG added at city sites." },
  { year: "2023", text: "Fleet Connect and Doorstep Diesel roll out for business customers." },
  { year: "2025", text: "Wild Café and convenience formats reach 80+ stations." },
  { year: "Today", text: "500+ EV points and stations across 40 cities — and growing." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Who we are"
        title="Energy for every journey"
        description="We are an energy and mobility network built to keep India moving — with fuel you can trust, charging that keeps pace and stops designed to be worth it."
        breadcrumb={[{ label: "About" }]}
      />

      {/* Purpose */}
      <section className="container-site grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-20">
        <div>
          <SectionHeader
            eyebrow="Our purpose"
            title="The modern way to refuel"
            description="Filling up used to mean a quick, forgettable stop. We are rebuilding the roadside around the traveller: fuel that protects your engine, charging that fits your timeline, and a café worth the minutes."
          />
          <p className="mt-5 text-sm leading-relaxed text-slate-600">
            Everything we build — the station locator, the fuel-card platform, the
            loyalty programme — exists so that moving by road feels simpler, safer and
            a little more enjoyable.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/products-and-services" iconRight="arrow-right">
              Explore services
            </Button>
            <Button href="/locate" variant="secondary" icon="map-pin">
              Visit a station
            </Button>
          </div>
        </div>

        {/* Milestones */}
        <ol className="relative space-y-6 border-l-2 border-brand-200 pl-8">
          {milestones.map((m) => (
            <li key={m.year} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[2.35rem] top-1 size-4 rounded-full border-4 border-brand-200 bg-brand-700"
              />
              <p className="text-sm font-extrabold uppercase tracking-widest text-brand-700">
                {m.year}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">{m.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Values */}
      <section className="bg-brand-50/60 py-16 lg:py-20">
        <div className="container-site">
          <SectionHeader
            eyebrow="What we stand for"
            title="Values that travel with us"
            align="center"
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <li key={v.title} className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
                <span className="inline-grid size-11 place-items-center rounded-xl bg-brand-700 text-white">
                  <Icon name={v.icon} className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-extrabold text-slate-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Demo note */}
      <section className="container-site py-14">
        <p className="mx-auto max-w-2xl text-center text-xs leading-relaxed text-slate-400">
          This page is part of a development deliverable. Company history, figures and
          milestones are illustrative placeholder content and do not represent a real
          organisation.
        </p>
      </section>
    </>
  );
}