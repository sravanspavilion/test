import { Breadcrumb } from "@/components/ui/Breadcrumb";

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumb?: Array<{ label: string; href?: string }>;
}) {
  return (
    <div className="relative overflow-hidden border-b border-border bg-brand-950 py-14 text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 -top-20 size-72 rounded-full bg-brand-600/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-16 size-64 rounded-full bg-accent-500/10 blur-3xl" />
      </div>
      <div className="container-site relative">
        {breadcrumb ? (
          <div className="[&_a]:text-slate-400 [&_a:hover]:text-accent-300 [&_li]:text-slate-400 [&_[aria-current]]:text-white [&_svg]:text-slate-600">
            <Breadcrumb items={breadcrumb} />
          </div>
        ) : null}
        {eyebrow ? (
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.25em] text-accent-400">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}