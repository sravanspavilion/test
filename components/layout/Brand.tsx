import Link from "next/link";
import { cn } from "@/lib/utils";
import { SITE_NAME } from "@/lib/config";

/**
 * JIO ENERGY MOBILITY brand mark.
 * "Jio" is the highlighted word; "Energy Mobility" sits below as the
 * descriptor. Colors follow the design tokens (white & green theme).
 */
export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 text-accent-400 shadow-sm",
        className
      )}
    >
      <svg viewBox="0 0 24 24" fill="none" className="size-5">
        <path
          d="M12 2c.5 3-2.5 4.5-2.5 8a4.5 4.5 0 1 0 9 0c0-1.6-.6-2.9-1.5-4 .3 1.2-.2 2-1 2.5C16.5 7.5 15 6 13.5 4.5 13 4 12.5 3 12 2z"
          fill="currentColor"
        />
        <path
          d="M12 2c.5 3-2.5 4.5-2.5 8a4.5 4.5 0 1 0 9 0c0-1.6-.6-2.9-1.5-4 .3 1.2-.2 2-1 2.5C16.5 7.5 15 6 13.5 4.5 13 4 12.5 3 12 2z"
          fill="currentColor"
          opacity="0.9"
        />
        <circle cx="12" cy="12" r="0.5" fill="#fff" opacity="0.9" />
      </svg>
    </span>
  );
}

export function Brand({
  className,
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2.5", className)}
      aria-label={`${SITE_NAME} — home`}
    >
      <BrandMark />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-lg font-extrabold tracking-tight",
            light ? "text-white" : "text-brand-600"
          )}
        >
          Jio
        </span>
        <span
          className={cn(
            "text-[0.65rem] font-bold uppercase tracking-[0.22em]",
            light ? "text-accent-400" : "text-slate-500"
          )}
        >
          Energy Mobility
        </span>
      </span>
    </Link>
  );
}