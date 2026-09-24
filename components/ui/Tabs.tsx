"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function Tabs({
  tabs,
  defaultIndex = 0,
  onChange,
  className,
}: {
  tabs: Array<{ id: string; label: string; content: React.ReactNode }>;
  defaultIndex?: number;
  onChange?: (index: number) => void;
  className?: string;
}) {
  const [active, setActive] = useState(defaultIndex);

  return (
    <div className={className}>
      <div
        role="tablist"
        aria-label="Section tabs"
        className="flex flex-wrap gap-2 border-b border-border pb-0"
      >
        {tabs.map((tab, i) => {
          const selected = i === active;
          return (
            <button
              key={tab.id}
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`panel-${tab.id}`}
              onClick={() => {
                setActive(i);
                onChange?.(i);
              }}
              className={cn(
                "-mb-px border-b-2 px-4 py-3 text-sm font-semibold transition-colors",
                selected
                  ? "border-brand-700 text-brand-700"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div
        role="tabpanel"
        id={`panel-${tabs[active].id}`}
        aria-labelledby={`tab-${tabs[active].id}`}
        className="pt-6"
      >
        {tabs[active].content}
      </div>
    </div>
  );
}