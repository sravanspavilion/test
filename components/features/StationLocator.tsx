"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  stationCities,
  stationServiceTypes,
  stationStates,
} from "@/lib/data/stations";
import { MAP_PROVIDER } from "@/lib/config";
import { cn, distanceKm, formatINR } from "@/lib/utils";
import { Icon, type IconName } from "@/components/ui/icons";
import { Badge } from "@/components/ui/Badge";
import { Select } from "@/components/ui/form";
import type { Station } from "@/types";

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

function directionsUrl(station: Station): string {
  if (MAP_PROVIDER === "google") {
    return `https://www.google.com/maps/dir/?api=1&destination=${station.latitude},${station.longitude}`;
  }
  if (MAP_PROVIDER === "mapbox") {
    return `https://www.mapbox.com/directions?destination=${station.latitude},${station.longitude}`;
  }
  return `https://www.openstreetmap.org/directions?to=${station.latitude}%2C${station.longitude}`;
}

export function StationCard({
  station,
  distance,
}: {
  station: Station;
  distance?: number;
}) {
  const name = station.stationName;
  const prices = station.prices ?? [];

  return (
    <article className="flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-bold text-slate-900">
            <Link href={`/stations/${station.slug}`} className="hover:text-brand-700">
              {name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            {station.address}, {station.city} — {station.pincode}
          </p>
        </div>
        {station.is24Hours ? (
          <Badge tone="success">24×7</Badge>
        ) : (
          <Badge tone="neutral">
            {station.openingTime}–{station.closingTime}
          </Badge>
        )}
      </div>

      {prices.length > 0 ? (
        <ul className="mt-4 flex flex-wrap gap-2">
          {prices.map((p) => (
            <li
              key={p.fuelType}
              className="rounded-lg bg-slate-50 px-2.5 py-1.5 text-sm font-bold text-slate-800"
            >
              {p.fuelType.replace("_", " ")}{" "}
              <span className="font-extrabold text-brand-700">
                {formatINR(p.price)}
                <span className="text-xs font-medium text-slate-400">/L</span>
              </span>
            </li>
          ))}
        </ul>
      ) : null}

      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Available services">
        {station.services.slice(0, 6).map((s) => (
          <li
            key={s.type}
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-xs font-semibold text-slate-600"
          >
            <Icon
              name={serviceIcon[s.type] ?? "spark"}
              className="size-3.5 text-brand-600"
            />
            {s.label}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center justify-between gap-3 border-t border-border pt-4">
        <p className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700">
          <Icon name="map-pin" className="size-4 text-brand-600" />
          {distance != null ? (
            <>
              {distance < 1
                ? `${Math.round(distance * 1000)} m`
                : `${distance.toFixed(1)} km`}{" "}
              away
            </>
          ) : (
            station.city
          )}
        </p>
        <div className="flex items-center gap-2">
          <a
            href={directionsUrl(station)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm font-semibold text-slate-500 transition-colors hover:text-brand-700"
          >
            <Icon name="navigation" className="size-4" />
            Directions
          </a>
          <Link
            href={`/stations/${station.slug}`}
            className="inline-flex items-center gap-1 text-sm font-bold text-brand-700 hover:text-brand-800"
          >
            Details <Icon name="arrow-right" className="size-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}

type SortKey = "relevance" | "name" | "city";

export function StationLocator({ stations }: { stations: Station[] }) {
  const [query, setQuery] = useState("");
  const [service, setService] = useState<string>("ALL");
  const [state, setState] = useState<string>("ALL");
  const [sortKey, setSortKey] = useState<SortKey>("relevance");
  const [geo, setGeo] = useState<{ lat: number; lng: number } | null>(null);
  const [locating, setLocating] = useState(false);
  const [geoError, setGeoError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 6;

  const cities = useMemo(
    () => stationCities.filter((c) => state === "ALL" || stations.some((s) => s.state === state && s.city === c)),
    [state, stations]
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = stations.filter((s) => {
      const matchesQuery =
        !q ||
        s.stationName.toLowerCase().includes(q) ||
        s.address.toLowerCase().includes(q) ||
        s.city.toLowerCase().includes(q) ||
        s.pincode.includes(q);
      const matchesService =
        service === "ALL" || s.services.some((sv) => sv.type === service);
      const matchesState = state === "ALL" || s.state === state;
      return matchesQuery && matchesService && matchesState;
    });

    list = [...list].sort((a, b) => {
      if (sortKey === "name") return a.stationName.localeCompare(b.stationName);
      if (sortKey === "city") return a.city.localeCompare(b.city);
      if (geo) {
        return (
          distanceKm(geo.lat, geo.lng, a.latitude, a.longitude) -
          distanceKm(geo.lat, geo.lng, b.latitude, b.longitude)
        );
      }
      return a.stationName.localeCompare(b.stationName);
    });

    return list;
  }, [stations, query, service, state, sortKey, geo]);

  const totalPages = Math.max(1, Math.ceil(results.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paged = results.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const locateMe = () => {
    if (!("geolocation" in navigator)) {
      setGeoError("Geolocation is not supported in this browser.");
      return;
    }
    setLocating(true);
    setGeoError(null);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setGeo({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setSortKey("relevance");
        setLocating(false);
      },
      () => {
        setGeoError("Could not access your location — search by city instead.");
        setLocating(false);
      },
      { timeout: 8000 }
    );
  };

  return (
    <div>
      {/* Search & filters */}
      <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm sm:p-6">
        <div className="grid gap-4 md:grid-cols-[1.5fr_1fr_1fr_auto]">
          <label className="relative block">
            <span className="sr-only">Search stations</span>
            <Icon
              name="search"
              className="pointer-events-none absolute left-3.5 top-1/2 size-4.5 -translate-y-1/2 text-slate-400"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
              placeholder="Search by station, city or PIN code"
              className="w-full rounded-lg border border-slate-300 bg-white py-2.5 pl-10 pr-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
            />
          </label>

          <div>
            <label htmlFor="state-filter" className="sr-only">
              Filter by state
            </label>
            <Select
              id="state-filter"
              value={state}
              onChange={(e) => {
                setState(e.target.value);
                setPage(1);
              }}
            >
              <option value="ALL">All states</option>
              {stationStates.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </Select>
          </div>

          <div>
            <label htmlFor="city-filter" className="sr-only">
              Filter by city
            </label>
            <Select
              id="city-filter"
              value={cities.includes(query) ? query : "ALL"}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
            >
              <option value="ALL">All cities</option>
              {cities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </Select>
          </div>

          <button
            type="button"
            onClick={locateMe}
            disabled={locating}
            className="inline-flex h-full items-center justify-center gap-2 rounded-lg bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-800 disabled:opacity-60"
          >
            <Icon name="location" className="size-4" />
            {locating ? "Locating…" : "Use my location"}
          </button>
        </div>

        {geoError ? (
          <p className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-amber-700" role="alert">
            <Icon name="alert" className="size-4" />
            {geoError}
          </p>
        ) : null}

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => {
              setService("ALL");
              setPage(1);
            }}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors",
              service === "ALL"
                ? "border-brand-700 bg-brand-700 text-white"
                : "border-border bg-white text-slate-600 hover:border-brand-300"
            )}
          >
            All services
          </button>
          {stationServiceTypes.map((sv) => (
            <button
              key={sv.type}
              type="button"
              aria-pressed={service === sv.type}
              onClick={() => {
                setService(service === sv.type ? "ALL" : sv.type);
                setPage(1);
              }}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors",
                service === sv.type
                  ? "border-brand-700 bg-brand-700 text-white"
                  : "border-border bg-white text-slate-600 hover:border-brand-300"
              )}
            >
              <Icon name={serviceIcon[sv.type] ?? "spark"} className="size-3.5" />
              {sv.label}
            </button>
          ))}
        </div>
      </div>

      {/* Sort + count */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-slate-600" role="status">
          <span className="font-bold text-slate-900">{results.length}</span>{" "}
          station{results.length === 1 ? "" : "s"} found
        </p>
        <label className="inline-flex items-center gap-2 text-sm text-slate-600">
          <Icon name="filter" className="size-4 text-slate-400" />
          Sort
          <select
            value={sortKey}
            onChange={(e) => setSortKey(e.target.value as SortKey)}
            className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm focus:border-brand-500 focus:outline-none"
          >
            <option value="relevance">
              {geo ? "Nearest first" : "A–Z by station"}
            </option>
            <option value="name">Station name</option>
            <option value="city">City</option>
          </select>
        </label>
      </div>

      {/* Results */}
      {paged.length > 0 ? (
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {paged.map((s) => (
            <StationCard
              key={s.id}
              station={s}
              distance={
                geo ? distanceKm(geo.lat, geo.lng, s.latitude, s.longitude) : undefined
              }
            />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
          <Icon name="search" className="mx-auto size-10 text-slate-300" />
          <h3 className="mt-4 text-lg font-bold text-slate-800">No stations match</h3>
          <p className="mt-2 text-sm text-slate-500">
            Try clearing a filter, or search a different city. New stations open
            every quarter.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setService("ALL");
              setState("ALL");
              setPage(1);
            }}
            className="mt-5 text-sm font-bold text-brand-700 underline-offset-4 hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 ? (
        <div className="mt-8 flex items-center justify-center gap-1.5">
          <button
            type="button"
            onClick={() => setPage(currentPage - 1)}
            disabled={currentPage <= 1}
            aria-label="Previous page"
            className="flex size-9 items-center justify-center rounded-lg border border-border text-slate-600 transition-colors hover:border-brand-400 hover:text-brand-700 disabled:opacity-40"
          >
            <Icon name="chevron-left" className="size-4" />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPage(p)}
              aria-current={p === currentPage ? "page" : undefined}
              className={cn(
                "size-9 rounded-lg text-sm font-semibold transition-colors",
                p === currentPage
                  ? "bg-brand-700 text-white"
                  : "border border-border text-slate-600 hover:border-brand-400 hover:text-brand-700"
              )}
            >
              {p}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setPage(currentPage + 1)}
            disabled={currentPage >= totalPages}
            aria-label="Next page"
            className="flex size-9 items-center justify-center rounded-lg border border-border text-slate-600 transition-colors hover:border-brand-400 hover:text-brand-700 disabled:opacity-40"
          >
            <Icon name="chevron-right" className="size-4" />
          </button>
        </div>
      ) : null}
    </div>
  );
}