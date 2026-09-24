import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  padded = true,
}: {
  children: React.ReactNode;
  className?: string;
  padded?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-surface shadow-sm",
        padded && "p-6",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  title,
  subtitle,
  icon,
  className,
}: {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mb-4 flex items-start gap-3", className)}>
      {icon ? (
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
          {icon}
        </div>
      ) : null}
      <div>
        <h3 className="text-base font-bold text-slate-900">{title}</h3>
        {subtitle ? (
          <p className="mt-0.5 text-sm text-slate-500">{subtitle}</p>
        ) : null}
      </div>
    </div>
  );
}