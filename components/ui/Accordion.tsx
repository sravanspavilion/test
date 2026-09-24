"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/icons";

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = `acc-panel-${title.replace(/\W+/g, "-").toLowerCase()}`;
  const buttonId = `${panelId}-btn`;

  return (
    <div className="rounded-xl border border-border bg-surface transition-shadow hover:shadow-sm">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        >
          <span className="text-sm font-semibold text-slate-900 sm:text-base">
            {title}
          </span>
          <Icon
            name="chevron-down"
            className={cn(
              "size-5 shrink-0 text-slate-400 transition-transform",
              open && "rotate-180 text-brand-600"
            )}
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
        className="px-5 pb-5"
      >
        <p className="text-sm leading-relaxed text-slate-600">{children}</p>
      </div>
    </div>
  );
}

export function Accordion({
  items,
  className,
}: {
  items: Array<{ id: string; question: string; answer: string }>;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {items.map((item) => (
        <AccordionItem key={item.id} title={item.question}>
          {item.answer}
        </AccordionItem>
      ))}
    </div>
  );
}