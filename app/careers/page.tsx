import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/icons";
import { getJobs } from "@/services/content";
import { buildMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";
import { jobDepartments } from "@/lib/data/careers";

export const metadata: Metadata = buildMetadata({
  title: "Careers",
  description:
    "Join Energy Mobility — roles in technology, operations, sales and more across India.",
  path: "/careers",
});

const employmentType: Record<string, string> = {
  FULL_TIME: "Full-time",
  PART_TIME: "Part-time",
  CONTRACT: "Contract",
  INTERNSHIP: "Internship",
};

export default async function CareersPage() {
  const jobs = await getJobs();

  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Work that moves the country"
        description="From forecourts to code — build the road network of the future with teams across India."
        breadcrumb={[{ label: "Careers" }]}
      />

      <section className="bg-brand-50/60 py-10">
        <div className="container-site">
          <SectionHeader
            eyebrow="Life at Energy Mobility"
            title="Where you could fit"
            description="We hire for energy, wherever it shows up — engineering, operations, sales, design and support."
          />
          <ul className="mt-8 flex flex-wrap gap-2">
            <li className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-semibold text-slate-600">
              <Icon name="map-pin" className="size-3.5 text-brand-600" />
              Hybrid &amp; on-site roles across India
            </li>
            <li className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-semibold text-slate-600">
              <Icon name="users" className="size-3.5 text-brand-600" />
              {jobDepartments.join(" · ")}
            </li>
            <li className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-semibold text-slate-600">
              <Icon name="check-circle" className="size-3.5 text-brand-600" />
              Learning budget for every team member
            </li>
          </ul>
        </div>
      </section>

      <section className="container-site py-14">
        <SectionHeader
          eyebrow="Open roles"
          title={`${jobs.length} open position${jobs.length === 1 ? "" : "s"}`}
          description="Demo listings for development purposes — applications go nowhere on this build."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {jobs.map((j) => (
            <Card key={j.id} className="flex flex-col">
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone="brand">{j.department}</Badge>
                <Badge tone="neutral">{employmentType[j.employmentType]}</Badge>
              </div>
              <h3 className="mt-3 text-lg font-extrabold text-slate-900">{j.title}</h3>
              <p className="mt-1.5 inline-flex items-center gap-1.5 text-sm text-slate-500">
                <Icon name="map-pin" className="size-4 text-brand-600" />
                {j.location}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{j.description}</p>
              <ul className="mt-4 space-y-1.5 border-t border-border pt-4">
                {j.requirements.slice(0, 3).map((r) => (
                  <li key={r} className="flex items-start gap-2 text-sm text-slate-600">
                    <Icon name="check" className="mt-0.5 size-4 shrink-0 text-brand-600" />
                    {r}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex items-center justify-between pt-5">
                <time dateTime={j.publishedAt} className="text-xs text-slate-400">
                  Posted {formatDate(j.publishedAt)}
                </time>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:text-brand-800"
                >
                  Apply via contact
                  <Icon name="arrow-right" className="size-4" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}