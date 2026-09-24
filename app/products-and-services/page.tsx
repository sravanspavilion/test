import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Icon, type IconName } from "@/components/ui/icons";
import { Badge } from "@/components/ui/Badge";
import { getCategories, getProducts } from "@/services/catalog";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Products & Services",
  description:
    "Fuel, EV charging, CNG, doorstep diesel, fleet solutions, cafés and convenience — explore the full Energy Mobility portfolio.",
  path: "/products-and-services",
});

const categoryIcon: Record<string, IconName> = {
  FUEL: "fuel",
  EV: "ev",
  CNG: "cng",
  FUEL_DELIVERY: "delivery",
  FLEET: "fleet",
  LOYALTY: "rewards",
  CAFE: "cafe",
  CONVENIENCE: "store",
  LUBRICANTS: "lube",
  OIL_CHANGE: "wrench",
  NITROGEN: "nitrogen",
  PAYMENT: "payment",
  AVIATION: "aviation",
  FOOD: "food",
  OTHER: "spark",
};

export default async function ProductsServicesPage() {
  const [categories, products] = await Promise.all([getCategories(), getProducts()]);

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Products & services"
        description="A complete energy and mobility ecosystem — from premium fuel and fast charging to fleets, fuel delivery and everyday conveniences."
        breadcrumb={[{ label: "Products & Services" }]}
      />

      {/* Category strip */}
      <section className="container-site py-12" aria-label="Browse by category">
        <div className="h-scroll flex gap-2 overflow-x-auto pb-2">
          {categories
            .filter((c) => products.some((p) => p.category === c.code))
            .map((c) => (
              <a
                key={c.code}
                href={`#cat-${c.code.toLowerCase()}`}
                className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:border-brand-400 hover:text-brand-700"
              >
                <Icon name={categoryIcon[c.code] ?? "spark"} className="size-4 text-brand-600" />
                {c.name}
              </a>
            ))}
        </div>
      </section>

      {/* Products grouped by category */}
      <section className="container-site pb-20">
        {categories
          .filter((c) => products.some((p) => p.category === c.code))
          .map((cat) => {
            const items = products.filter((p) => p.category === cat.code);
            if (items.length === 0) return null;
            return (
              <div key={cat.id} id={`cat-${cat.code.toLowerCase()}`} className="scroll-mt-28 py-6 first:pt-0">
                <SectionHeader eyebrow={cat.name} title={cat.name} description={cat.description} />
                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {items.map((p) => (
                    <a
                      key={p.id}
                      href={`/products-and-services/${p.slug}`}
                      className="group rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <span className="inline-grid size-11 place-items-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-white">
                          <Icon name={categoryIcon[p.category] ?? "spark"} className="size-5" />
                        </span>
                        <Badge tone="neutral">{cat.name}</Badge>
                      </div>
                      <h3 className="mt-4 text-lg font-extrabold text-slate-900 group-hover:text-brand-700">
                        {p.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {p.shortDescription}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700">
                        Explore
                        <Icon name="arrow-right" className="size-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
      </section>
    </>
  );
}