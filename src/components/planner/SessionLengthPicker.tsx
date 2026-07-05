"use client";

import { SESSION_LENGTH_OPTIONS } from "@/lib/session-planning";
import { useProgressStore } from "@/stores/progress-store";
import { Clock } from "lucide-react";

export function SessionLengthPicker() {
  const sessionMinutes = useProgressStore((s) => s.studyPlan.sessionMinutes);
  const updateStudyPlan = useProgressStore((s) => s.updateStudyPlan);

  return (
    <div>
      <p className="eyebrow mb-3 flex items-center gap-1.5">
        <Clock className="h-3.5 w-3.5" />
        Session length
      </p>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => updateStudyPlan({ sessionMinutes: null })}
          className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
            sessionMinutes === null
              ? "border-primary/50 bg-primary/10 text-primary"
              : "border-border text-faint hover:text-foreground"
          }`}
        >
          Full day
        </button>
        {SESSION_LENGTH_OPTIONS.map((mins) => (
          <button
            key={mins}
            type="button"
            onClick={() => updateStudyPlan({ sessionMinutes: mins })}
            className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
              sessionMinutes === mins
                ? "border-primary/50 bg-primary/10 text-primary"
                : "border-border text-faint hover:text-foreground"
            }`}
          >
            {mins} min
          </button>
        ))}
      </div>
      {sessionMinutes && (
        <p className="mt-2 text-xs text-faint">
          Recommendations filtered to fit ~{sessionMinutes} minutes.
        </p>
      )}
    </div>
  );
}
