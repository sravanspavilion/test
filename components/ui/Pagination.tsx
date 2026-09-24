"use client";

import { Icon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export function Pagination({
  page,
  totalPages,
  onPageChange,
  className,
}: {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      aria-label="Pagination"
      className={cn("flex items-center justify-center gap-1.5", className)}
    >
      <button
        type="button"
        onClick={() => onPageChange(page - 1)}
        disabled={page <= 1}
        aria-label="Previous page"
        className="flex size-9 items-center justify-center rounded-lg border border-border text-slate-600 transition-colors hover:border-brand-400 hover:text-brand-700 disabled:opacity-40"
      >
        <Icon name="chevron-left" className="size-4" />
      </button>
      {pages.map((p) => (
        <button
          key={p}
          type="button"
          onClick={() => onPageChange(p)}
          aria-current={p === page ? "page" : undefined}
          className={cn(
            "size-9 rounded-lg text-sm font-semibold transition-colors",
            p === page
              ? "bg-brand-700 text-white"
              : "border border-border text-slate-600 hover:border-brand-400 hover:text-brand-700"
          )}
        >
          {p}
        </button>
      ))}
      <button
        type="button"
        onClick={() => onPageChange(page + 1)}
        disabled={page >= totalPages}
        aria-label="Next page"
        className="flex size-9 items-center justify-center rounded-lg border border-border text-slate-600 transition-colors hover:border-brand-400 hover:text-brand-700 disabled:opacity-40"
      >
        <Icon name="chevron-right" className="size-4" />
      </button>
    </nav>
  );
}