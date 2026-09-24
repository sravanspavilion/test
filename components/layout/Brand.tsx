import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SITE_NAME } from "@/lib/config";

/**
 * JIO ENERGY MOBILITY brand mark.
 * Uses the official Jio-bp logo mark (replaces the old curved icon box)
 * followed by the Jio / Energy Mobility wordmark. Colors follow the
 * design tokens (white & green theme).
 */
export function BrandMark({
  className,
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex shrink-0 items-center justify-center",
        light && "rounded-lg bg-white p-1 shadow-sm",
        className
      )}
    >
      <Image
        src="/images/jio-bp-logo.svg"
        alt=""
        width={212}
        height={132}
        className={cn("h-9 w-auto", light ? "h-8" : "h-9")}
      />
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
      <BrandMark light={light} />
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