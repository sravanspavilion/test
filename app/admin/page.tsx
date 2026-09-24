"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getSession, signOut, type DemoSession, type DemoRole } from "@/lib/demoAuth";
import { mockProducts } from "@/lib/data/catalog";
import { mockStations } from "@/lib/data/stations";
import { mockNews } from "@/lib/data/news";
import { mockJobs } from "@/lib/data/careers";
import { Icon, type IconName } from "@/components/ui/icons";
import { Badge } from "@/components/ui/Badge";
import { Brand } from "@/components/layout/Brand";
import { cn } from "@/lib/utils";

const roleTone: Record<DemoRole, "brand" | "accent" | "neutral" | "success" | "warning"> = {
  SUPER_ADMIN: "accent",
  ADMIN: "brand",
  EDITOR: "success",
  SUPPORT: "neutral",
};

const navItems: Array<{ label: string; icon: IconName; href: string; badge?: string }> = [
  { label: "Dashboard", icon: "home", href: "/admin" },
  { label: "Content (CMS)", icon: "spark", href: "#", badge: "Phase 19+" },
  { label: "Stations", icon: "map-pin", href: "#", badge: "Upcoming" },
  { label: "User & Roles", icon: "users", href: "#", badge: "Upcoming" },
  { label: "Enquiries", icon: "mail", href: "#", badge: "Upcoming" },
];

const statCards: Array<{ label: string; value: number; icon: IconName; note: string }> = [
  { label: "Active products", value: mockProducts.filter((p) => p.status === "ACTIVE").length, icon: "spark", note: "catalog items live" },
  { label: "Stations", value: mockStations.filter((s) => s.status === "ACTIVE").length, icon: "map-pin", note: "across 10 cities" },
  { label: "Published news", value: mockNews.filter((n) => n.status === "PUBLISHED").length, icon: "news", note: "in newsroom" },
  { label: "Open roles", value: mockJobs.filter((j) => j.status === "PUBLISHED").length, icon: "users", note: "on careers" },
];

export default function AdminDashboardPage() {
  const router = useRouter();

  // Session state is client-only (localStorage). Reading it lazily at
  // render would mismatch SSR HTML, so we defer the read until after the
  // first paint — keeping the server/client output consistent.
  const [session, setSession] = useState<DemoSession | null>(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const s = getSession();
      if (!s) {
        router.replace("/admin/login");
        return;
      }
      setSession(s);
    });
    return () => cancelAnimationFrame(frame);
  }, [router]);

  if (!session) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center" role="status">
        <p className="text-sm font-semibold text-slate-500">Checking session…</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-[85vh] flex-col bg-slate-50 lg:flex-row">
      {/* Sidebar */}
      <aside className="w-full shrink-0 border-b border-border bg-brand-950 text-slate-300 lg:w-64 lg:border-b-0 lg:border-r">
        <div className="flex items-center justify-between p-5">
          <Brand light />
          <Link
            href="/"
            className="grid size-8 place-items-center rounded-lg text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Back to public site"
          >
            <Icon name="arrow-up-right" className="size-4" />
          </Link>
        </div>
        <nav aria-label="Admin" className="flex gap-1 overflow-x-auto p-3 lg:flex-col">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              aria-current={item.href === "/admin" ? "page" : undefined}
              className={cn(
                "flex shrink-0 items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors lg:w-full",
                item.href === "/admin"
                  ? "bg-white/10 text-white"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              )}
            >
              <Icon name={item.icon} className="size-4.5" />
              {item.label}
              {item.badge ? (
                <span className="ml-auto hidden rounded-full bg-white/10 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-accent-300 sm:inline">
                  {item.badge}
                </span>
              ) : null}
            </Link>
          ))}
        </nav>
        <div className="hidden border-t border-white/10 p-5 lg:block">
          <p className="text-[0.65rem] font-bold uppercase tracking-widest text-slate-500">
            Demo build
          </p>
          <p className="mt-1 text-xs leading-relaxed text-slate-400">
            Deep links become live as CMS, stations and roles ship in later phases.
          </p>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1">
        <div className="sticky top-16 z-10 border-b border-border bg-white/90 px-6 py-4 backdrop-blur lg:top-0">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h1 className="text-lg font-extrabold text-slate-900">Dashboard</h1>
              <p className="text-xs text-slate-500">
                Welcome back, {session.name}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Badge tone={roleTone[session.role]}>{session.role.replace("_", " ").toLowerCase()}</Badge>
              <button
                type="button"
                onClick={() => {
                  signOut();
                  router.push("/admin/login");
                }}
                className="inline-flex h-9 items-center gap-2 rounded-lg border border-slate-300 px-3.5 text-sm font-semibold text-slate-700 transition-colors hover:border-red-300 hover:text-red-600"
              >
                <Icon name="close" className="size-4" />
                Sign out
              </button>
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Stat cards */}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {statCards.map((c) => (
              <div key={c.label} className="rounded-2xl border border-border bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {c.label}
                  </span>
                  <span className="grid size-9 place-items-center rounded-xl bg-brand-50 text-brand-700">
                    <Icon name={c.icon} className="size-4.5" />
                  </span>
                </div>
                <p className="mt-3 text-3xl font-extrabold text-slate-900">{c.value}</p>
                <p className="mt-1 text-xs text-slate-500">{c.note}</p>
              </div>
            ))}
          </div>

          {/* Placeholder panels — real modules come with the backend */}
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-6">
              <h2 className="flex items-center gap-2 text-sm font-extrabold text-slate-900">
                <Icon name="spark" className="size-4 text-brand-600" />
                Content pipeline
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                The CMS module (draft → review → publish, with roles-based editing) ships
                with the backend phases. This dashboard is wired to demo data only.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Products", "News", "FAQs", "Stations"].map((t) => (
                  <span key={t} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-6">
              <h2 className="flex items-center gap-2 text-sm font-extrabold text-slate-900">
                <Icon name="shield" className="size-4 text-brand-600" />
                RBAC preview
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <Badge tone="accent">super admin</Badge> full access to settings &amp; roles
                </li>
                <li className="flex items-center gap-2">
                  <Badge tone="brand">admin</Badge> manage content, stations &amp; users
                </li>
                <li className="flex items-center gap-2">
                  <Badge tone="success">editor</Badge> create &amp; edit content, no publish
                </li>
                <li className="flex items-center gap-2">
                  <Badge tone="neutral">support</Badge> enquiries &amp; read-only dashboards
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-8 text-center text-xs text-slate-400">
            Demo admin — data shown is fictional seed content. Real authentication,
            CRUD and auditing arrive with the NestJS backend phases.
          </p>
        </div>
      </main>
    </div>
  );
}