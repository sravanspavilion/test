import { API_URL } from "@/lib/config";
import { delay } from "@/lib/utils";
import { mockStations } from "@/lib/data/stations";
import type { Station } from "@/types";

/** Stations/locator service — mirror of the future /api/v1/stations endpoints. */

async function get<T>(path: string): Promise<T> {
  if (!API_URL) return undefined as unknown as Promise<T>;
  const res = await fetch(`${API_URL}/api/v1${path}`, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error(`API ${res.status} on ${path}`);
  const body = await res.json();
  return body.data as T;
}

export async function getStations(): Promise<Station[]> {
  if (API_URL) return get<Station[]>("/stations");
  await delay(250);
  return mockStations.filter((s) => s.status === "ACTIVE");
}

export async function getStationBySlug(slug: string): Promise<Station | null> {
  if (API_URL) return get<Station | null>(`/stations/${slug}`);
  await delay(150);
  return mockStations.find((s) => s.slug === slug) ?? null;
}

export async function getStationsByService(service: string): Promise<Station[]> {
  if (API_URL) return get<Station[]>(`/stations?service=${service}`);
  return mockStations.filter((s) =>
    s.services.some((sv) => sv.type === service.toUpperCase())
  );
}