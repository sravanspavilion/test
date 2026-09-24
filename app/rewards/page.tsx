import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardHeader } from "@/components/ui/Card";
import { Icon, type IconName } from "@/components/ui/icons";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "EM Rewards",
  description:
    "EM Rewards — earn points on fuel, EV charging and café purchases, then redeem across the network.",
  path: "/rewards",
});

const earn: Array<{ icon: IconName; title: string; desc: string; rate: string }> = [
  { icon: "fuel", title: "Fuel", desc: "Every litre of petrol or diesel", rate: "2 pts / litre" },
  { icon: "ev", title: "EV charging", desc: "Pulse fast-charging sessions", rate: "1 pt / kWh" },
  { icon: "cafe", title: "Wild Café", desc: "Coffee, snacks & quick bites", rate: "1 pt / ₹100" },
  { icon: "store", title: "Convenience", desc: "Store purchases at stations", rate: "1 pt / ₹100" },
];

const redeem: Array<{ icon: IconName; title: string; desc: string }> = [
  { icon: "fuel", title: "Fuel discounts", desc: "Swap points for value off your next fill." },
  { icon: "cafe", title: "Café treats", desc: "Free or discounted brews at Wild Café." },
  { icon: "store", title: "Merchandise", desc: "Travel gear and station merch." },
  { icon: "spark", title: "Member-only offers", desc: "Early access to new stations and campaigns." },
];

const tiers = [
  { name: "Go", pts: "0+", perks: "Earn on every transaction, birthday offers" },
  { name: "Plus", pts: "2,500+ / yr", perks: "Higher earn rates, priority café queue" },
  { name: "Prime", pts: "10,000+ / yr", perks: "Best rates, fuel price alerts, annual wash" },
];

export default function RewardsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Loyalty"
        title="EM Rewards"
        description="Earn points on fuel, EV charging and café visits — redeem them across the network. Rewarding every journey, however you move."
        breadcrumb={[{ label: "Rewards" }]}
      />

      {/* Earn / redeem */}
      <section className="container-site grid gap-10 py-14 lg:grid-cols-2">
        <div>
          <SectionHeader eyebrow="Earn" title="Ways to earn points" />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {earn.map((e) => (
              <li key={e.title} className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="inline-grid size-10 place-items-center rounded-xl bg-brand-50 text-brand-700">
                    <Icon name={e.icon} className="size-5" />
                  </span>
                  <span className="rounded-full bg-accent-100 px-2.5 py-1 text-xs font-bold text-accent-700">
                    {e.rate}
                  </span>
                </div>
                <h3 className="mt-3 text-sm font-extrabold text-slate-900">{e.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">{e.desc}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <SectionHeader eyebrow="Redeem" title="Ways to use points" />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {redeem.map((r) => (
              <li key={r.title} className="rounded-2xl bg-brand-50 p-5">
                <span className="inline-grid size-10 place-items-center rounded-xl bg-white text-brand-700 shadow-sm">
                  <Icon name={r.icon} className="size-5" />
                </span>
                <h3 className="mt-3 text-sm font-extrabold text-slate-900">{r.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">{r.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tiers */}
      <section className="bg-brand-50/60 py-14">
        <div className="container-site">
          <SectionHeader
            eyebrow="Membership tiers"
            title="Smarter with every journey"
            description="Move up tiers as you travel more — better rates and perks come with you."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {tiers.map((t, i) => (
              <Card
                key={t.name}
                className={i === 1 ? "border-brand-700 ring-2 ring-brand-700/20" : ""}
              >
                <CardHeader
                  title={`${t.name} tier`}
                  subtitle={`${t.pts} points`}
                  icon={<Icon name={i === 1 ? "star" : "spark"} className="size-5" />}
                />
                <p className="text-sm leading-relaxed text-slate-600">{t.perks}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/*
        Loyalty is intentionally informational / CMS-only at this stage.
        The points ledger, authentication and redemption features are planned
        backend phases; the public site only describes the programme.
      */}
      <section className="container-site py-14 text-center">
        <h2 className="text-xl font-extrabold text-slate-900">Ready to start earning?</h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600">
          Membership opens at the nearest Energy Mobility station — just ask the
          counter. No app required to begin.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button href="/locate" icon="map-pin">
            Find a station
          </Button>
          <Button href="/faqs" variant="secondary">
            Rewards FAQs
          </Button>
        </div>
      </section>
    </>
  );
}