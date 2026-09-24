import Link from "next/link";
import { Icon } from "@/components/ui/icons";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { formatDate } from "@/lib/utils";
import type { NewsArticle } from "@/types";

export function NewsCard({ article, featured = false }: { article: NewsArticle; featured?: boolean }) {
  return (
    <article
      className={
        featured
          ? "group relative overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-shadow hover:shadow-md lg:col-span-2"
          : "group relative overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-shadow hover:shadow-md"
      }
    >
      <div
        aria-hidden="true"
        className={
          featured
            ? "h-40 bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950"
            : "h-28 bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900"
        }
      >
        <Icon
          name="spark"
          className={
            featured ? "absolute right-6 top-6 size-16 text-white/10" : "absolute right-4 top-4 size-10 text-white/10"
          }
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3">
          <Badge tone="brand">{article.category}</Badge>
          <time dateTime={article.publishedAt} className="text-xs uppercase tracking-wider text-slate-400">
            {formatDate(article.publishedAt)}
          </time>
        </div>
        <h3 className={`mt-3 font-extrabold text-slate-900 ${featured ? "text-xl" : "text-lg"}`}>
          <Link href={`/news/${article.slug}`} className="transition-colors hover:text-brand-700">
            {article.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{article.summary}</p>
        <p className="mt-4 text-xs font-semibold text-slate-500">{article.author}</p>
      </div>
    </article>
  );
}

export function NewsSection({ articles }: { articles: NewsArticle[] }) {
  const [featured, ...rest] = articles;

  return (
    <section className="container-site py-20 lg:py-24" aria-labelledby="news-heading">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeader
          eyebrow="Newsroom"
          title="Latest from the network"
          description="Announcements, partnerships and milestones from across Energy Mobility."
        />
        <Link
          href="/news"
          className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-brand-700 transition-colors hover:text-brand-800"
        >
          All news
          <Icon name="arrow-right" className="size-4" />
        </Link>
      </div>

      {articles.length > 0 ? (
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featured ? <NewsCard article={featured} featured /> : null}
          {rest.slice(0, 4).map((a) => (
            <NewsCard key={a.id} article={a} />
          ))}
        </div>
      ) : null}
    </section>
  );
}