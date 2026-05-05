"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

export type AccordionItem = { id: string; question: string; answer: string };

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<string | null>(items[0]?.id ?? null);
  return (
    <div className="divide-y divide-[var(--color-ink-200)] border border-[var(--color-ink-200)] rounded-[var(--radius-lg)] bg-white overflow-hidden">
      {items.map((it) => {
        const isOpen = open === it.id;
        return (
          <div key={it.id}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : it.id)}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-start hover:bg-[var(--color-ink-50)] transition"
            >
              <span className="font-semibold text-[var(--color-ink-900)]">{it.question}</span>
              <ChevronDown
                size={20}
                className={cn(
                  "shrink-0 text-[var(--color-ink-500)] transition duration-200",
                  isOpen && "rotate-180",
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-in-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 text-[var(--color-ink-500)] leading-relaxed">
                  {it.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
