"use client";

import { useState } from "react";
import type { StudyPlanPreferences } from "@/types/mastery";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { getAllCertifications } from "@/lib/content-selectors";
import { useProgressStore } from "@/stores/progress-store";
import { Settings2 } from "lucide-react";

export function StudyPlanSettings() {
  const studyPlan = useProgressStore((s) => s.studyPlan);
  const updateStudyPlan = useProgressStore((s) => s.updateStudyPlan);
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<StudyPlanPreferences>(studyPlan);
  const certs = getAllCertifications().filter((c) =>
    c.domains.some((d) => d.topics.length > 0)
  );

  function save() {
    updateStudyPlan(draft);
    setOpen(false);
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => {
          setDraft(studyPlan);
          setOpen(true);
        }}
        className="mb-3 flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
      >
        <Settings2 className="h-3.5 w-3.5" />
        Study plan settings
      </button>
    );
  }

  return (
    <Card className="mb-4 p-4">
      <h3 className="mb-3 font-serif text-lg font-medium text-foreground">Study plan settings</h3>
      <label className="mb-3 block text-xs text-muted-foreground">
        Exam date (optional)
        <input
          type="date"
          value={draft.examDate ?? ""}
          onChange={(e) =>
            setDraft((d) => ({ ...d, examDate: e.target.value || null }))
          }
          className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
        />
      </label>
      <label className="mb-3 block text-xs text-muted-foreground">
        Weekly study minutes ({draft.weeklyMinutes}) — ~{Math.round(draft.weeklyMinutes / 7)} min/day
        <input
          type="range"
          min={60}
          max={600}
          step={30}
          value={draft.weeklyMinutes}
          onChange={(e) =>
            setDraft((d) => ({ ...d, weeklyMinutes: Number(e.target.value) }))
          }
          className="mt-2 w-full"
        />
      </label>
      <p className="mb-2 text-xs text-faint">Active courses (empty = all)</p>
      <div className="mb-4 flex flex-wrap gap-2">
        {certs.map((cert) => {
          const active =
            draft.activeCertIds.length === 0 ||
            draft.activeCertIds.includes(cert.id);
          return (
            <button
              key={cert.id}
              type="button"
              onClick={() => {
                setDraft((d) => {
                  const ids =
                    d.activeCertIds.length === 0
                      ? certs.map((c) => c.id)
                      : [...d.activeCertIds];
                  const has = ids.includes(cert.id);
                  const next = has
                    ? ids.filter((id) => id !== cert.id)
                    : [...ids, cert.id];
                  return {
                    ...d,
                    activeCertIds:
                      next.length === certs.length ? [] : next,
                  };
                });
              }}
              className={`rounded-full border px-2.5 py-1 text-xs transition-colors ${
                active
                  ? "border-primary/50 bg-primary/10 text-primary"
                  : "border-border text-faint hover:text-foreground"
              }`}
            >
              {cert.shortName}
            </button>
          );
        })}
      </div>
      <div className="flex gap-2">
        <Button className="flex-1" onClick={save}>
          Save
        </Button>
        <Button className="flex-1" variant="secondary" onClick={() => setOpen(false)}>
          Cancel
        </Button>
      </div>
    </Card>
  );
}
