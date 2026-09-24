import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/icons";
import { getNews, getNewsBySlug } from "@/services/content";
import { buildMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

export const dynamicParams = false;

export async function generateStaticParams() {
  const articles = await getNews();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getNewsBySlug(slug);
  if (!article) return {};
  return buildMetadata({
    title: article.seoTitle,
    description: article.seoDescription,
    path: `/news/${article.slug}`,
    type: "article",
    publishedTime: article.publishedAt,
  });
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [article, all] = await Promise.all([getNewsBySlug(slug), getNews()]);

  if (!article) notFound();

  const more = all.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow={article.category}
        title={article.title}
        description={article.summary}
        breadcrumb={[
          { label: "News", href: "/news" },
          { label: article.title },
        ]}
      />

      <div className="container-site flex flex-col gap-12 py-12 lg:flex-row lg:py-16">
        <article className="max-w-3xl flex-1">
          <div className="rounded-2xl border border-border bg-surface p-2 shadow-sm">
            <div
              aria-hidden="true"
              className="flex h-44 items-end justify-start rounded-xl bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 p-6"
            >
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-accent-300">
                <Icon name="spark" className="size-4" />
                Energy Mobility Newsroom
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500">
            <Badge tone="brand">{article.category}</Badge>
            <time dateTime={article.publishedAt} className="inline-flex items-center gap-1.5">
              <Icon name="calendar" className="size-4" />
              {formatDate(article.publishedAt)}
            </time>
            <span className="inline-flex items-center gap-1.5">
              <Icon name="users" className="size-4" />
              {article.author}
            </span>
          </div>

          <div className="prose-em mt-8 space-y-5">
            {article.content.split("\n\n").map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-slate-700">
                {para}
              </p>
            ))}
          </div>

          <div className="mt-10 border-t border-border pt-6">
            <p className="text-xs uppercase tracking-wider text-slate-400">
              Demo content — fictional press material for development purposes.
            </p>
          </div>
        </article>

        <aside className="w-full shrink-0 lg:w-80">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500">
            More from the newsroom
          </h2>
          <ul className="mt-4 space-y-3">
            {more.map((a) => (
              <li key={a.id}>
                <Link
                  href={`/news/${a.slug}`}
                  className="block rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-brand-300 hover:shadow-sm"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                    {a.category}
                  </span>
                  <span className="mt-1.5 block text-sm font-bold leading-snug text-slate-800 hover:text-brand-700">
                    {a.title}
                  </span>
                  <time dateTime={a.publishedAt} className="mt-2 block text-xs text-slate-400">
                    {formatDate(a.publishedAt)}
                  </time>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </>
  );
}