"use client";

import { SESSION_LENGTH_OPTIONS } from "@/lib/session-planning";
import { useProgressStore } from "@/stores/progress-store";
import { Clock } from "lucide-react";

export function SessionLengthPicker() {
  const sessionMinutes = useProgressStore((s) => s.studyPlan.sessionMinutes);
  const updateStudyPlan = useProgressStore((s) => s.updateStudyPlan);

  return (
    <div className="mb-4">
      <p className="mb-2 flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-zinc-500">
        <Clock className="h-3.5 w-3.5" />
        Session length
      </p>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => updateStudyPlan({ sessionMinutes: null })}
          className={`rounded-full px-3 py-1.5 text-xs ${
            sessionMinutes === null
              ? "bg-emerald-500/20 text-emerald-400"
              : "bg-zinc-800 text-zinc-500 hover:text-zinc-300"
          }`}
        >
          Full day
        </button>
        {SESSION_LENGTH_OPTIONS.map((mins) => (
          <button
            key={mins}
            type="button"
            onClick={() => updateStudyPlan({ sessionMinutes: mins })}
            className={`rounded-full px-3 py-1.5 text-xs ${
              sessionMinutes === mins
                ? "bg-emerald-500/20 text-emerald-400"
                : "bg-zinc-800 text-zinc-500 hover:text-zinc-300"
            }`}
          >
            {mins} min
          </button>
        ))}
      </div>
      {sessionMinutes && (
        <p className="mt-2 text-xs text-zinc-500">
          Recommendations filtered to fit ~{sessionMinutes} minutes.
        </p>
      )}
    </div>
  );
}
