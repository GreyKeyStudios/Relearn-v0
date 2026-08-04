"use client";

import { useMemo, useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useProgressStore } from "@/stores/progress-store";
import { buildCcnaVersionSelectionFromOptionalDate } from "@/content/production/ccna-transition/version-selection";
import { isUtcCalendarDate } from "@/content/production/ccna-transition/dates";
import {
  CCNA_V20_LIVE_SLICES,
  CCNA_V20_UNFINISHED_BATCH1,
  resolveEffectiveCcnaPathway,
} from "@/lib/ccna-version-pathway";

/**
 * Learner-facing CCNA version pathway picker.
 * Switching pathways never deletes mastery/SRS — only catalog visibility changes.
 */
export function CcnaVersionPathwayCard() {
  const preference = useProgressStore((s) => s.ccnaPathwayPreference);
  const setPreference = useProgressStore((s) => s.setCcnaPathwayPreference);
  const [dateDraft, setDateDraft] = useState(
    preference?.intendedExamDate ?? ""
  );

  const selection = useMemo(
    () =>
      buildCcnaVersionSelectionFromOptionalDate(
        preference?.intendedExamDate ?? null
      ),
    [preference?.intendedExamDate]
  );
  const effective = resolveEffectiveCcnaPathway(preference ?? null);

  function applyDate() {
    if (!dateDraft) {
      setPreference({ intendedExamDate: null });
      return;
    }
    if (!isUtcCalendarDate(dateDraft)) return;
    setPreference({ intendedExamDate: dateDraft });
  }

  return (
    <Card className="mb-6 space-y-4 p-4" data-testid="ccna-version-pathway">
      <div>
        <h2 className="text-sm font-semibold text-zinc-200">
          {selection.learnerCopy.headline}
        </h2>
        <p className="mt-1 text-xs text-zinc-500">{selection.learnerCopy.body}</p>
      </div>

      <div className="flex flex-wrap items-end gap-2">
        <label className="flex flex-col gap-1 text-xs text-zinc-400">
          Intended exam date (UTC calendar)
          <input
            type="date"
            data-testid="ccna-exam-date"
            value={dateDraft}
            onChange={(e) => setDateDraft(e.target.value)}
            className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-100"
          />
        </label>
        <Button
          variant="secondary"
          data-testid="ccna-exam-date-apply"
          onClick={applyDate}
        >
          Apply date
        </Button>
      </div>

      <div className="flex flex-wrap gap-2" data-testid="ccna-pathway-buttons">
        <Button
          data-testid="ccna-pathway-v1.1"
          variant={effective === "v1.1" ? "primary" : "secondary"}
          onClick={() => setPreference({ preferredObjectivesVersion: "v1.1" })}
        >
          Study v1.1 pathway
        </Button>
        <Button
          data-testid="ccna-pathway-v2.0"
          variant={effective === "v2.0" ? "primary" : "secondary"}
          onClick={() => setPreference({ preferredObjectivesVersion: "v2.0" })}
        >
          Study v2.0 pathway
        </Button>
        <Button
          data-testid="ccna-pathway-clear-override"
          variant="ghost"
          onClick={() => setPreference({ preferredObjectivesVersion: null })}
        >
          Clear override
        </Button>
      </div>

      <p className="text-xs text-zinc-400" data-testid="ccna-effective-pathway">
        Effective pathway: <span className="text-zinc-200">{effective}</span>
        {preference?.preferredObjectivesVersion
          ? " (manual override)"
          : selection.recommendedVersion
            ? ` (from exam date → ${selection.recommendedVersion})`
            : " (default v1.1 until date/override set)"}
      </p>
      <p className="text-xs text-zinc-600">{selection.learnerCopy.footnote}</p>

      {effective === "v2.0" && (
        <div className="space-y-2 rounded-lg border border-sky-500/20 bg-sky-500/5 p-3">
          <p className="text-xs font-medium text-sky-300">v2.0 live vertical slices</p>
          <ul className="list-inside list-disc text-xs text-zinc-400">
            {CCNA_V20_LIVE_SLICES.map((s) => (
              <li key={s.number} data-testid={`v20-live-${s.number}`}>
                {s.number} — {s.title}
              </li>
            ))}
          </ul>
          <p className="text-xs font-medium text-amber-300">
            Unfinished v2.0 pathway (spec-ready, not learner-facing yet)
          </p>
          <ul
            className="list-inside list-disc text-xs text-zinc-500"
            data-testid="v20-unfinished-list"
          >
            {CCNA_V20_UNFINISHED_BATCH1.map((s) => (
              <li key={s.number}>
                {s.number} — {s.title} · {s.status}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
}
