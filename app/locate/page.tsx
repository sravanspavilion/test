import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { StationLocator } from "@/components/features/StationLocator";
import { MAP_PROVIDER } from "@/lib/config";
import { getStations } from "@/services/stations";
import { buildMetadata } from "@/lib/seo";
import { Icon } from "@/components/ui/icons";

export const metadata: Metadata = buildMetadata({
  title: "Locate a Station",
  description:
    "Find Energy Mobility stations near you — filter by fuel, EV charging, CNG, cafés and more, and get directions.",
  path: "/locate",
});

export default async function LocatePage() {
  const stations = await getStations();

  return (
    <>
      <PageHeader
        eyebrow="Station locator"
        title="Find a station near you"
        description="Search by city, PIN code or service. Filter for fuel, EV charging, CNG, cafés and more, then get directions straight from your phone."
        breadcrumb={[{ label: "Locate" }]}
      />

      <section className="container-site py-10 lg:py-14">
        <StationLocator stations={stations} />

        {/* Map placeholder — pluggable provider note */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-slate-100">
          <div className="grid min-h-64 place-items-center bg-[radial-gradient(circle_at_center,var(--brand-100),var(--brand-50))] p-8 text-center">
            <div className="max-w-md">
              <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-white text-brand-700 shadow-sm">
                <Icon name="map-pin" className="size-7" />
              </span>
              <h2 className="mt-5 text-lg font-extrabold text-slate-900">
                Live map coming online
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                The interactive map plugs in via our provider abstraction (currently{" "}
                <span className="font-bold uppercase">{MAP_PROVIDER}</span>). Set{" "}
                <code className="rounded bg-slate-200 px-1.5 py-0.5 text-xs">
                  NEXT_PUBLIC_MAP_PROVIDER
                </code>{" "}
                to <code className="rounded bg-slate-200 px-1.5 py-0.5 text-xs">google</code> or{" "}
                <code className="rounded bg-slate-200 px-1.5 py-0.5 text-xs">mapbox</code> with your
                key to enable it. Every station card already links to turn-by-turn directions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}