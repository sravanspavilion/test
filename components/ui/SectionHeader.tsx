import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  badge,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  badge?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {badge ? <Badge tone="brand" className="mb-3">{badge}</Badge> : null}
      {eyebrow ? (
        <p className="mb-2 text-sm font-bold uppercase tracking-widest text-accent-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-slate-600">{description}</p>
      ) : null}
    </div>
  );
}