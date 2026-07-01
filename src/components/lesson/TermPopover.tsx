"use client";

import { useEffect, useRef } from "react";
import type { ExperienceTerm } from "@/content/types";
import { X } from "lucide-react";

interface TermPopoverProps {
  term: ExperienceTerm;
  open: boolean;
  onClose: () => void;
}

export function TermPopover({ term, open, onClose }: TermPopoverProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const laterItems =
    term.laterItems ??
    (term.laterTopicLabel ? [term.laterTopicLabel] : []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-4 sm:items-center"
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-labelledby="term-popover-title"
        className="w-full max-w-sm rounded-2xl border border-zinc-700 bg-zinc-900 p-4 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-3 flex items-start justify-between gap-2">
          <h4 id="term-popover-title" className="text-lg font-semibold text-zinc-100">
            {term.label}
          </h4>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1 text-zinc-500 hover:bg-zinc-800 hover:text-zinc-300"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <p className="text-sm leading-relaxed text-zinc-300">{term.shortDefinition}</p>
        {term.example && (
          <p className="mt-2 rounded-lg border border-zinc-700 bg-zinc-950/80 px-3 py-2 font-mono text-sm text-sky-200">
            {term.example}
          </p>
        )}
        {(term.tier === "basics" || term.tier === "later") && (
          <p className="mt-3 text-sm font-medium text-emerald-400">That&apos;s enough for today.</p>
        )}
        {laterItems.length > 0 && (
          <div className="mt-3 border-t border-zinc-800 pt-3">
            <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-sky-400">
              {term.laterTopicLabel
                ? `Deeper dive → ${term.laterTopicLabel}`
                : "Later you'll learn"}
            </p>
            <ul className="flex flex-col gap-1">
              {laterItems.map((item) => (
                <li key={item} className="text-sm text-zinc-400">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

const TIER_STYLES: Record<ExperienceTerm["tier"], string> = {
  now: "border-emerald-800/50 bg-emerald-950/30 text-emerald-200",
  basics: "border-amber-800/50 bg-amber-950/30 text-amber-200",
  later: "border-sky-800/50 bg-sky-950/30 text-sky-200",
};

interface TermChipListProps {
  terms: ExperienceTerm[];
  onSelect: (term: ExperienceTerm) => void;
}

export function TermChipList({ terms, onSelect }: TermChipListProps) {
  if (terms.length === 0) return null;

  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {terms.map((term) => (
        <button
          key={term.id}
          type="button"
          onClick={() => onSelect(term)}
          className={`rounded-lg border px-2.5 py-1 text-xs font-medium underline-offset-2 transition-colors hover:opacity-90 hover:underline ${TIER_STYLES[term.tier]}`}
        >
          {term.label}
          {term.tier === "later" && term.laterTopicLabel && (
            <span className="ml-1 opacity-70">→ {term.laterTopicLabel}</span>
          )}
        </button>
      ))}
    </div>
  );
}
