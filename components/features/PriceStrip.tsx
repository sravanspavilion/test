import { Icon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { formatINR } from "@/lib/utils";
import type { FuelPrice, Station } from "@/types";

/**
 * Compact fuel-price strip used on the homepage and locator results.
 * "Reference" prices vary by city in India, so these are displayed
 * as indicative, not as a price guarantee.
 */
export function PriceStrip({
  stations,
  className,
}: {
  stations: Station[];
  className?: string;
}) {
  const rows = stations.flatMap((s) => s.prices ?? []);

  const byType = new Map<FuelPrice["fuelType"], FuelPrice[]>();
  for (const p of rows) {
    const list = byType.get(p.fuelType) ?? [];
    list.push(p);
    byType.set(p.fuelType, list);
  }

  const order: FuelPrice["fuelType"][] = ["PETROL", "DIESEL", "CNG", "AUTO_LPG"];

  return (
    <div className={cn("rounded-2xl border border-border bg-surface p-6 shadow-sm", className)}>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
          Indicative fuel prices
        </h3>
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400">
          <Icon name="info" className="size-3.5" />
          Daily reference, city-wise
        </span>
      </div>

      <dl className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {order.map((type) => {
          const list = byType.get(type);
          const avg = list?.length
            ? list.reduce((sum, p) => sum + p.price, 0) / list.length
            : null;

          return (
            <div key={type} className="rounded-xl bg-slate-50 px-4 py-3">
              <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {type.replace("_", " ")}
              </dt>
              <dd className="mt-1 text-lg font-extrabold text-slate-900">
                {avg != null ? formatINR(avg) : "—"}
                <span className="ml-0.5 text-xs font-medium text-slate-400">/L</span>
              </dd>
            </div>
          );
        })}
      </dl>
      <p className="mt-3 text-xs text-slate-400">
        Average across network stations. Actual prices are set per city and listed at
        each station.
      </p>
    </div>
  );
}