"use client";

import { useMemo, useState } from "react";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { FAQ, FAQCategory } from "@/types";

export function FAQSection({
  faqs,
  categories,
  limit,
}: {
  faqs: FAQ[];
  categories: FAQCategory[];
  limit?: number;
}) {
  const [active, setActive] = useState("all");

  const filtered = useMemo(() => {
    const list = active === "all" ? faqs : faqs.filter((f) => f.categorySlug === active);
    return limit ? list.slice(0, limit) : list;
  }, [faqs, active, limit]);

  return (
    <section className="bg-slate-50 py-20 lg:py-24" aria-labelledby="faq-heading">
      <div className="container-site">
        <SectionHeader
          eyebrow="Help centre"
          title="Frequently asked questions"
          description="Quick answers about fuel, EV charging, CNG, delivery and rewards."
          align="center"
        />

        <div
          role="tablist"
          aria-label="FAQ categories"
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          <button
            type="button"
            role="tab"
            aria-selected={active === "all"}
            onClick={() => setActive("all")}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
              active === "all"
                ? "border-brand-700 bg-brand-700 text-white"
                : "border-border bg-surface text-slate-600 hover:border-brand-300"
            )}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c.slug}
              type="button"
              role="tab"
              aria-selected={active === c.slug}
              onClick={() => setActive(c.slug)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                active === c.slug
                  ? "border-brand-700 bg-brand-700 text-white"
                  : "border-border bg-surface text-slate-600 hover:border-brand-300"
              )}
            >
              {c.name}
            </button>
          ))}
        </div>

        <Accordion
          className="mx-auto mt-8 max-w-3xl"
          items={filtered.map((f) => ({
            id: f.id,
            question: f.question,
            answer: f.answer,
          }))}
        />

        {filtered.length === 0 ? (
          <p className="mt-8 text-center text-sm text-slate-500">
            No answers here yet —{" "}
            <a href="/contact" className="font-semibold text-brand-700 underline">
              ask us directly
            </a>
            .
          </p>
        ) : null}

        <div className="mt-10 flex justify-center">
          <Button href="/faqs" variant="secondary" iconRight="arrow-right">
            View all FAQs
          </Button>
        </div>
      </div>
    </section>
  );
}