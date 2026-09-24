import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/icons";
import { CTABanner } from "@/components/features/CTABanner";
import { buildMetadata } from "@/lib/seo";
import { getCategories, getProductBySlug, getProducts } from "@/services/catalog";

export const dynamicParams = false;

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({ slug: p.slug }));
}

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return {};
  return buildMetadata({
    title: product.seoTitle,
    description: product.seoDescription,
    path: `/products-and-services/${product.slug}`,
  });
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [product, categories] = await Promise.all([
    getProductBySlug(slug),
    getCategories(),
  ]);

  if (!product) notFound();

  const category = categories.find((c) => c.code === product.category);

  return (
    <>
      <PageHeader
        eyebrow={category?.name ?? "Service"}
        title={product.name}
        description={product.shortDescription}
        breadcrumb={[
          { label: "Products & Services", href: "/products-and-services" },
          { label: product.name },
        ]}
      />

      <section className="container-site grid gap-10 py-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="inline-grid size-14 place-items-center rounded-2xl bg-brand-700 text-white shadow-sm">
              <Icon name={categoryIcon[product.category] ?? "spark"} className="size-7" />
            </span>
            <Badge tone="brand">{category?.name ?? "Service"}</Badge>
          </div>

          <h2 className="mt-8 text-2xl font-extrabold text-slate-900">About this service</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            {product.description}
          </p>

          <h3 className="mt-10 text-xl font-extrabold text-slate-900">Key features</h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {product.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 rounded-xl bg-slate-50 p-3.5 text-sm text-slate-700">
                <Icon name="check-circle" className="mt-0.5 size-4.5 shrink-0 text-brand-600" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <aside className="h-fit rounded-2xl border border-border bg-surface p-6 shadow-sm lg:sticky lg:top-24">
          <h3 className="text-base font-extrabold text-slate-900">Why choose it</h3>
          <ul className="mt-4 space-y-3">
            {product.benefits.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm text-slate-700">
                <Icon name="star" className="mt-0.5 size-4 shrink-0 text-accent-500" />
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-2 border-t border-border pt-6">
            <Button href={product.ctaUrl} fullWidth size="lg" iconRight="arrow-right">
              {product.ctaText}
            </Button>
            <Button href="/contact" variant="secondary" fullWidth>
              Talk to our team
            </Button>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-slate-400">
            Details are illustrative demo content. Availability varies by station —
            check the locator for the latest operational information.
          </p>
        </aside>
      </section>

      <CTABanner />
    </>
  );
}