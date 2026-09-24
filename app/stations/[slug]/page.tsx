import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Icon, type IconName } from "@/components/ui/icons";
import { formatINR } from "@/lib/utils";
import { MAP_PROVIDER } from "@/lib/config";
import { getStationBySlug, getStations } from "@/services/stations";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export async function generateStaticParams() {
  const stations = await getStations();
  return stations.map((s) => ({ slug: s.slug }));
}

function directionsUrl(lat: number, lng: number): string {
  if (MAP_PROVIDER === "google")
    return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
  if (MAP_PROVIDER === "mapbox")
    return `https://www.mapbox.com/directions?destination=${lat},${lng}`;
  return `https://www.openstreetmap.org/directions?to=${lat}%2C${lng}`;
}

const serviceIcon: Record<string, IconName> = {
  FUEL: "fuel",
  EV: "ev",
  CNG: "cng",
  CAFE: "cafe",
  CONVENIENCE: "store",
  WASHROOM: "clock",
  AIR: "spark",
  LUBRICANTS: "lube",
  FOOD: "food",
  TRUCK_STOP: "truck",
  PARKING: "location",
  NITROGEN: "nitrogen",
  OIL_CHANGE: "wrench",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const station = await getStationBySlug(slug);
  if (!station) return {};
  return buildMetadata({
    title: `${station.stationName} — Station Details`,
    description: `${station.stationName} in ${station.city}, ${station.state}. Hours, services and fuel prices.`,
    path: `/stations/${station.slug}`,
  });
}

export default async function StationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [station, stations] = await Promise.all([getStationBySlug(slug), getStations()]);

  if (!station) notFound();

  const nearby = stations
    .filter((s) => s.id !== station.id && s.state === station.state)
    .slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow={station.stationCode}
        title={station.stationName}
        description={`${station.address}, ${station.city}, ${station.state} — ${station.pincode}`}
        breadcrumb={[
          { label: "Locate", href: "/locate" },
          { label: station.stationName },
        ]}
      />

      <section className="container-site grid gap-8 py-12 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-8">
          {/* Services */}
          <Card>
            <CardHeader
              title="Services available"
              icon={<Icon name="spark" className="size-5" />}
            />
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {station.services.map((s) => (
                <li
                  key={s.type}
                  className="flex items-center gap-2.5 rounded-xl border border-border bg-slate-50/60 px-3.5 py-3 text-sm font-semibold text-slate-700"
                >
                  <Icon name={serviceIcon[s.type] ?? "spark"} className="size-4.5 text-brand-600" />
                  {s.label}
                </li>
              ))}
            </ul>
          </Card>

          {/* Prices */}
          {station.prices && station.prices.length > 0 ? (
            <Card>
              <CardHeader
                title="Fuel prices today"
                icon={<Icon name="fuel" className="size-5" />}
              />
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-xs uppercase tracking-wider text-slate-500">
                    <th className="pb-2 font-semibold">Fuel</th>
                    <th className="pb-2 text-right font-semibold">Price / litre</th>
                  </tr>
                </thead>
                <tbody>
                  {station.prices.map((p) => (
                    <tr key={p.fuelType} className="border-b border-slate-100 last:border-0">
                      <td className="py-3 font-bold text-slate-800">
                        {p.fuelType.replace("_", " ")}
                      </td>
                      <td className="py-3 text-right font-extrabold text-brand-700">
                        {formatINR(p.price)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-3 text-xs leading-relaxed text-slate-400">
                Indicative daily reference price. Final billing is at the rate displayed
                at the pump.
              </p>
            </Card>
          ) : null}
        </div>

        <aside className="h-fit space-y-6 lg:sticky lg:top-24">
          <Card>
            <CardHeader title="Station info" icon={<Icon name="location" className="size-5" />} />
            <dl className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <Icon name="clock" className="mt-0.5 size-4 text-brand-600" />
                <dd>
                  {station.is24Hours ? (
                    <Badge tone="success">Open 24 hours</Badge>
                  ) : (
                    <>
                      {station.openingTime} – {station.closingTime}
                    </>
                  )}
                </dd>
              </div>
              <div className="flex items-start gap-2.5">
                <Icon name="phone" className="mt-0.5 size-4 text-brand-600" />
                <dd>
                  <a href={`tel:${station.phone}`} className="hover:text-brand-700">
                    {station.phone}
                  </a>
                </dd>
              </div>
              {station.email ? (
                <div className="flex items-start gap-2.5">
                  <Icon name="mail" className="mt-0.5 size-4 text-brand-600" />
                  <dd>
                    <a href={`mailto:${station.email}`} className="hover:text-brand-700">
                      {station.email}
                    </a>
                  </dd>
                </div>
              ) : null}
              <div className="flex items-start gap-2.5">
                <Icon name="map-pin" className="mt-0.5 size-4 text-brand-600" />
                <dd>
                  {station.address}, {station.city} — {station.pincode}
                </dd>
              </div>
            </dl>
            <div className="mt-6 flex flex-col gap-2 border-t border-border pt-5">
              <a
                href={directionsUrl(station.latitude, station.longitude)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-brand-700 px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
              >
                <Icon name="navigation" className="size-4" />
                Get directions
              </a>
              <a
                href={`tel:${station.phone}`}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-300 px-5 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-400 hover:text-brand-700"
              >
                <Icon name="phone" className="size-4" />
                Call station
              </a>
            </div>
          </Card>

          {nearby.length > 0 ? (
            <Card>
              <CardHeader title="Other stations in the state" icon={<Icon name="location" className="size-5" />} />
              <ul className="space-y-3">
                {nearby.map((s) => (
                  <li key={s.id}>
                    <Link
                      href={`/stations/${s.slug}`}
                      className="group flex items-center justify-between gap-3 rounded-xl border border-border px-4 py-3 transition-colors hover:border-brand-300"
                    >
                      <div>
                        <p className="text-sm font-bold text-slate-800 group-hover:text-brand-700">
                          {s.stationName}
                        </p>
                        <p className="text-xs text-slate-500">{s.city}</p>
                      </div>
                      <Icon name="chevron-right" className="size-4 text-slate-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>
          ) : null}
        </aside>
      </section>
    </>
  );
}