import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icons";

const stats = [
  { value: "500+", label: "EV charging points" },
  { value: "40", label: "Cities served" },
  { value: "100%", label: "Quality-checked fuel" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-950 text-white">
      {/* Ambient gradient blobs — pure CSS, no images */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-[-10%] size-[34rem] rounded-full bg-brand-600/30 blur-3xl" />
        <div className="absolute bottom-[-40%] left-[-10%] size-[30rem] rounded-full bg-accent-500/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(251,191,36,0.10),transparent_55%)]" />
      </div>

      <div className="container-site relative grid items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-300">
            <Icon name="spark" className="size-3.5" />
            Energy &amp; mobility network
          </p>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl xl:text-6xl">
            Fuel, charge &amp; go —{" "}
            <span className="text-accent-400">every journey</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            Premium fuel, fast EV charging, CNG, doorstep diesel and roadside
            cafés — built for how India moves today.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/locate" size="lg" icon="map-pin">
              Find a station
            </Button>
            <Button
              href="/products-and-services"
              size="lg"
              variant="outline"
              className="border-white/25 text-white hover:border-accent-400 hover:text-accent-300"
              iconRight="arrow-right"
            >
              Explore services
            </Button>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-2xl font-extrabold text-accent-400">
                  {s.value}
                </dd>
                <dd className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Visual panel — pure CSS composition */}
        <div className="relative hidden lg:block" aria-hidden="true">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold uppercase tracking-widest text-slate-400">
                Today&apos;s network
              </p>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-green-400/15 px-2.5 py-1 text-xs font-semibold text-green-300">
                <span className="size-1.5 rounded-full bg-green-400" />
                Live
              </span>
            </div>
            <div className="mt-6 space-y-3">
              {[
                { icon: "fuel" as const, label: "Precision Fuel", note: "Petrol & diesel" },
                { icon: "ev" as const, label: "Pulse EV Charging", note: "Up to 360 kW" },
                { icon: "cng" as const, label: "CNG Filling", note: "City & highway" },
                { icon: "delivery" as const, label: "Doorstep Diesel", note: "For business" },
                { icon: "cafe" as const, label: "Wild Café", note: "Breaks on the road" },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <span className="grid size-10 place-items-center rounded-xl bg-accent-500/20 text-accent-400">
                    <Icon name={row.icon} className="size-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-white">{row.label}</p>
                    <p className="text-xs text-slate-400">{row.note}</p>
                  </div>
                  <Icon name="check-circle" className="size-5 text-green-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-brand-950/60">
        <div className="container-site flex flex-wrap items-center gap-x-8 gap-y-2 py-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
          {["UPI • Cards • Wallets", "24×7 highway stations", "Rewards on every litre", "Certified operators"].map(
            (t) => (
              <span key={t} className="inline-flex items-center gap-2">
                <Icon name="check" className="size-3.5 text-accent-400" />
                {t}
              </span>
            )
          )}
          <Link
            href="/locate"
            className="ml-auto inline-flex items-center gap-1.5 text-accent-300 transition-colors hover:text-accent-200"
          >
            Locate now <Icon name="arrow-right" className="size-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}