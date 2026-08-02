"use client";

import { useId, useState } from "react";
import type { PerspectiveMode, PerspectiveSet } from "@/content/perspectives/types";
import { PERSPECTIVE_MODE_LABELS } from "@/content/perspectives/types";
import { Badge } from "@/components/ui/Badge";

interface PerspectiveToggleProps {
  perspectiveSet: PerspectiveSet;
  className?: string;
}

const MODE_ORDER: PerspectiveMode[] = ["neutral", "red", "blue", "purple"];

/**
 * Switches educational perspective blocks for the same concept.
 * Not a theme toggle — each mode shows distinct content.
 */
export function PerspectiveToggle({
  perspectiveSet,
  className = "",
}: PerspectiveToggleProps) {
  const groupId = useId();
  const available = MODE_ORDER.filter((mode) =>
    perspectiveSet.blocks.some((b) => b.mode === mode)
  );
  const [mode, setMode] = useState<PerspectiveMode>(available[0] ?? "neutral");
  const block = perspectiveSet.blocks.find((b) => b.mode === mode);

  return (
    <section
      className={`rounded-xl border border-border bg-surface-raised/40 p-4 sm:p-5 ${className}`}
      aria-labelledby={`${groupId}-title`}
    >
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <h2
          id={`${groupId}-title`}
          className="font-serif text-xl font-medium text-foreground"
        >
          {perspectiveSet.title}
        </h2>
        <Badge variant="default">Perspectives</Badge>
      </div>

      <div
        role="tablist"
        aria-label="Learning perspective"
        className="mb-4 flex flex-wrap gap-2"
      >
        {available.map((m) => {
          const selected = m === mode;
          return (
            <button
              key={m}
              type="button"
              role="tab"
              id={`${groupId}-tab-${m}`}
              aria-selected={selected}
              aria-controls={`${groupId}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setMode(m)}
              onKeyDown={(e) => {
                const idx = available.indexOf(m);
                if (e.key === "ArrowRight") {
                  e.preventDefault();
                  setMode(available[(idx + 1) % available.length]!);
                } else if (e.key === "ArrowLeft") {
                  e.preventDefault();
                  setMode(available[(idx - 1 + available.length) % available.length]!);
                }
              }}
              className={`min-h-11 rounded-md border px-3 py-2 text-sm font-medium transition-colors ${
                selected
                  ? "border-primary bg-primary/15 text-foreground"
                  : "border-border bg-surface text-muted-foreground hover:bg-surface-raised"
              }`}
            >
              {PERSPECTIVE_MODE_LABELS[m]}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`${groupId}-panel`}
        aria-labelledby={`${groupId}-tab-${mode}`}
      >
        {block ? (
          <>
            <h3 className="mb-2 text-sm font-medium text-foreground">{block.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{block.body}</p>
            {block.bullets && block.bullets.length > 0 && (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                {block.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
          </>
        ) : (
          <p className="text-sm text-faint">No content for this perspective yet.</p>
        )}
      </div>
    </section>
  );
}
