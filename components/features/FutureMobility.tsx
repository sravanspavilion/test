import { Icon, type IconName } from "@/components/ui/icons";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

const steps: Array<{ icon: IconName; title: string; desc: string }> = [
  {
    icon: "map-pin",
    title: "Locate",
    desc: "Find chargers with live availability, power level and connector info.",
  },
  {
    icon: "ev",
    title: "Charge",
    desc: "Plug in with CCS2, CHAdeMO or GB/T — from 15 minutes for most cars.",
  },
  {
    icon: "payment",
    title: "Pay digitally",
    desc: "Pay per kWh with UPI, cards or wallets. Receipts land in your inbox.",
  },
  {
    icon: "cafe",
    title: "Take a break",
    desc: "Grab a coffee while you charge — that's what the stop is for.",
  },
];

export function FutureMobility() {
  return (
    <section className="relative overflow-hidden bg-brand-950 py-20 text-white lg:py-24" aria-labelledby="mobility-heading">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-15%] top-[-40%] size-[36rem] rounded-full bg-accent-500/15 blur-3xl" />
        <div className="absolute bottom-[-50%] left-[-10%] size-[30rem] rounded-full bg-brand-600/40 blur-3xl" />
      </div>

      <div className="container-site relative">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeader
            eyebrow="Electric future"
            title="Pulse EV charging, done right"
            description="High-speed charging built around the way you actually travel — city, corridor or commercial route."
            className="text-white [&_h2]:text-white [&_p]:text-slate-300"
          />
          <Button
            href="/locate"
            variant="accent"
            size="lg"
            icon="ev"
            className="w-fit"
          >
            Find charging near me
          </Button>
        </div>

        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <span className="absolute right-5 top-5 text-4xl font-extrabold text-white/10">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="inline-grid size-11 place-items-center rounded-xl bg-accent-500/20 text-accent-400">
                <Icon name={s.icon} className="size-5" />
              </span>
              <h3 className="mt-4 font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}