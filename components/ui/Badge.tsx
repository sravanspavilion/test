import { cn } from "@/lib/utils";

type Tone = "brand" | "accent" | "neutral" | "success" | "warning";

const tones: Record<Tone, string> = {
  brand: "bg-brand-100 text-brand-800",
  accent: "bg-accent-100 text-accent-700",
  neutral: "bg-slate-100 text-slate-700",
  success: "bg-green-100 text-green-800",
  warning: "bg-amber-100 text-amber-800",
};

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}