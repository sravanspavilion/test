import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icons";

const stats = [
  { value: "500+", label: "EV charging points" },
  { value: "40", label: "Cities served" },
  { value: "100%", label: "Quality-checked fuel" },
];

const networkRows = [
  { icon: "fuel" as const, label: "Precision Fuel", note: "Petrol & diesel" },
  { icon: "ev" as const, label: "Pulse EV Charging", note: "Up to 360 kW" },
  { icon: "cng" as const, label: "CNG Filling", note: "City & highway" },
  { icon: "delivery" as const, label: "Doorstep Diesel", note: "For business" },
  { icon: "cafe" as const, label: "Wild Café", note: "Breaks on the road" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white text-slate-900">
      {/* Background image — Jio — shown at higher opacity. The overlay fades
          to transparent on the right so the image really pops, while the
          left keeps enough white for the copy to stay readable */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/images/jio-front.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/55 to-white/0" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-white/45" />
      </div>

      {/* Ambient green glows — pure CSS accents */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-[-10%] size-[34rem] rounded-full bg-brand-300/30 blur-3xl" />
        <div className="absolute bottom-[-30%] left-[-10%] size-[30rem] rounded-full bg-brand-200/40 blur-3xl" />
      </div>

      <div className="container-site relative grid items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:pb-16 lg:pt-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/85 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-700 shadow-sm backdrop-blur">
            <Icon name="spark" className="size-3.5" />
            Energy &amp; mobility network
          </p>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl xl:text-6xl">
            Fuel, charge &amp; go —{" "}
            <span className="text-brand-600">every journey</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
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
              className="border-brand-300 bg-white/75 text-brand-700 backdrop-blur hover:border-brand-500 hover:text-brand-600"
              iconRight="arrow-right"
            >
              Explore services
            </Button>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-brand-100 pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-2xl font-extrabold text-brand-600">
                  {s.value}
                </dd>
                <dd className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right column — network panel in a single line, CTAs just below */}
        <div className="relative hidden self-end lg:block">
          <div className="rounded-3xl border border-white/60 bg-white/85 p-5 shadow-xl shadow-brand-900/10 backdrop-blur">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold uppercase tracking-widest text-slate-500">
                Today&apos;s network
              </p>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-100 px-2.5 py-1 text-xs font-semibold text-brand-700">
                <span className="size-1.5 rounded-full bg-brand-500" />
                Live
              </span>
            </div>
            <div className="mt-4 grid grid-cols-5 gap-2">
              {networkRows.map((row) => (
                <div
                  key={row.label}
                  className="flex flex-col items-center gap-1.5 rounded-xl border border-brand-100 bg-white/85 px-1 py-2.5 text-center"
                >
                  <span className="grid size-8 place-items-center rounded-lg bg-brand-50 text-brand-600">
                    <Icon name={row.icon} className="size-4" />
                  </span>
                  <p className="text-[0.7rem] font-bold leading-tight text-slate-800">
                    {row.label}
                  </p>
                  <p className="text-[0.62rem] leading-tight text-slate-500">
                    {row.note}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex justify-end gap-2">
            <Button href="/locate" variant="secondary" size="sm" icon="map-pin">
              Locate a station
            </Button>
            <Button href="/contact" size="sm" iconRight="arrow-right">
              Get in touch
            </Button>
          </div>
        </div>
      </div>

      {/* Green bottom band */}
      <div className="relative border-t border-brand-800 bg-brand-700">
        <div className="container-site flex flex-wrap items-center gap-x-8 gap-y-2 py-4 text-xs font-semibold uppercase tracking-widest text-white/85">
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
            className="ml-auto inline-flex items-center gap-1.5 text-white transition-colors hover:text-accent-300"
          >
            Locate now <Icon name="arrow-right" className="size-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}