import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/icons";
import { getNews, getNewsCategories } from "@/services/content";
import { buildMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Newsroom",
  description:
    "Press releases, company updates, partnerships and milestones from across the Energy Mobility network.",
  path: "/news",
});

export default async function NewsPage() {
  const [articles, categories] = await Promise.all([getNews(), getNewsCategories()]);

  return (
    <>
      <PageHeader
        eyebrow="Newsroom"
        title="News & updates"
        description="The latest announcements, partnerships and milestones from across the Energy Mobility network."
        breadcrumb={[{ label: "News" }]}
      />

      <section className="container-site py-12 lg:py-16">
        {/* Category chips */}
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <span
              key={c.slug}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-semibold text-slate-600"
            >
              <Icon name="spark" className="size-3.5 text-brand-500" />
              {c.name}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <article
              key={a.id}
              className="group overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-shadow hover:shadow-md"
            >
              <div aria-hidden="true" className="relative h-32 bg-gradient-to-br from-brand-700 to-brand-950">
                <Icon name="spark" className="absolute right-4 top-4 size-10 rotate-12 text-white/10 transition-transform group-hover:rotate-45" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <Badge tone="brand">{a.category}</Badge>
                  <time dateTime={a.publishedAt} className="text-xs uppercase tracking-wider text-slate-400">
                    {formatDate(a.publishedAt)}
                  </time>
                </div>
                <h2 className="mt-3 text-lg font-extrabold text-slate-900">
                  <Link href={`/news/${a.slug}`} className="transition-colors hover:text-brand-700">
                    {a.title}
                  </Link>
                </h2>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600">
                  {a.summary}
                </p>
                <p className="mt-4 text-xs font-semibold text-slate-500">{a.author}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}