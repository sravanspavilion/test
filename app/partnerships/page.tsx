import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { LeadForm } from "@/components/features/LeadForm";
import { Card, CardHeader } from "@/components/ui/Card";
import { Icon, type IconName } from "@/components/ui/icons";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Partnerships",
  description:
    "Partner with Energy Mobility — site owners, franchisees, fuel suppliers, fleet operators and EV sites.",
  path: "/partnerships",
});

const opportunities: Array<{
  icon: IconName;
  title: string;
  desc: string;
  points: string[];
}> = [
  {
    icon: "map-pin",
    title: "Site owners",
    desc: "Have a highway-adjacent plot or city corner? We build and operate modern stations on your land.",
    points: ["Lease or joint-venture models", "Development handled end-to-end", "Transparent, audited payouts"],
  },
  {
    icon: "store",
    title: "Franchise & licensees",
    desc: "Bring our formats — fuel, CNG, café, convenience — to your market with full operating support.",
    points: ["Brand & training included", "Supply chain handled centrally", "Field support on the ground"],
  },
  {
    icon: "delivery",
    title: "Fuel & logistics partners",
    desc: "Suppliers, distributors and logistics operators who want long-term, forecastable offtake.",
    points: ["Pan-India network demand", "Structured tenders", "Digital scheduling"],
  },
  {
    icon: "fleet",
    title: "Fleet & corporate",
    desc: "Fleets, construction groups and institutions consolidating fuel spend across one network.",
    points: ["Fleet fuel cards", "Single monthly invoice", "Spend analytics"],
  },
  {
    icon: "ev",
    title: "EV ecosystem",
    desc: "Charge-point operators, OEMs and landlords pairing EV sites with a growing charging network.",
    points: ["Site co-location", "Charger OEM partnerships", "Volume-backed growth"],
  },
];

export default function PartnershipsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Grow with us"
        title="Partner with Energy Mobility"
        description="Site owners, franchisees, suppliers and fleets — build a durable revenue stream on a fast-growing energy network."
        breadcrumb={[{ label: "Partnerships" }]}
      />

      <section className="container-site py-14">
        <SectionHeader
          eyebrow="Opportunities"
          title="Ways to partner"
          description="Five doors in, one partnership team. Tell us where you fit."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {opportunities.map((o) => (
            <Card key={o.title} className="flex flex-col">
              <CardHeader
                title={o.title}
                subtitle={o.desc}
                icon={<Icon name={o.icon} className="size-5" />}
              />
              <ul className="mt-auto space-y-2 border-t border-border pt-4">
                {o.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-slate-600">
                    <Icon name="check" className="mt-0.5 size-4 shrink-0 text-brand-600" />
                    {p}
                  </li>
                ))}
              </ul>
            </Card>
          ))}

          <Card className="flex flex-col items-start justify-center bg-brand-950 text-white">
            <h3 className="text-lg font-extrabold text-white">Not sure where to start?</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Send the partnership team a note — we will point you to the right model.
            </p>
            <a
              href="#enquire"
              className="mt-5 inline-flex h-10 items-center gap-2 rounded-lg bg-accent-500 px-4 text-sm font-bold text-brand-950 transition-colors hover:bg-accent-400"
            >
              Enquire now
              <Icon name="arrow-right" className="size-4" />
            </a>
          </Card>
        </div>
      </section>

      <section id="enquire" className="scroll-mt-28 bg-slate-50 py-14">
        <div className="container-site grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeader
              eyebrow="Get in touch"
              title="Tell us about your opportunity"
              description="Our partnerships team reviews every enquiry personally and responds within two working days."
            />
            <ul className="mt-8 space-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-2.5">
                <Icon name="check-circle" className="size-5 text-brand-600" />
                Non-disclosure terms available on request
              </li>
              <li className="flex items-center gap-2.5">
                <Icon name="check-circle" className="size-5 text-brand-600" />
                Site visits organised for shortlisted locations
              </li>
              <li className="flex items-center gap-2.5">
                <Icon name="check-circle" className="size-5 text-brand-600" />
                Deal structures shared after a quick call
              </li>
            </ul>
          </div>
          <Card className="p-6 sm:p-8">
            <LeadForm variant="partnership" />
          </Card>
        </div>
      </section>
    </>
  );
}