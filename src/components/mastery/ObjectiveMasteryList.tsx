"use client";

import Link from "next/link";
import type { ObjectiveMasteryEntry } from "@/lib/objective-mastery";
import { OBJECTIVE_MIN_ATTEMPTS, OBJECTIVE_WEAK_PERCENT } from "@/lib/mastery-thresholds";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { DisclosureSection } from "@/components/ui/DisclosureSection";

interface ObjectiveMasteryListProps {
  certId: string;
  topicId: string;
  entries: ObjectiveMasteryEntry[];
}

export function ObjectiveMasteryList({
  certId,
  topicId,
  entries,
}: ObjectiveMasteryListProps) {
  const practiced = entries.filter((e) => e.attemptCount > 0);
  if (practiced.length === 0) return null;

  return (
    <DisclosureSection title="Objective mastery" titleClassName="text-zinc-200" className="mb-6">
      <ul className="space-y-3">
        {practiced.map((entry) => (
          <li key={entry.objectiveId}>
            <div className="mb-1 flex items-center justify-between gap-2 text-xs">
              <span className="text-zinc-300">{entry.shortLabel}</span>
              <span className="shrink-0 text-zinc-500">{entry.score}%</span>
            </div>
            <ProgressBar value={entry.score} />
            {entry.score < OBJECTIVE_WEAK_PERCENT && entry.attemptCount >= OBJECTIVE_MIN_ATTEMPTS && (
              <Link
                href={`/cert/${certId}/quiz/${topicId}?objective=${encodeURIComponent(entry.objectiveId)}`}
                className="mt-1 inline-block text-xs text-sky-400 hover:underline"
              >
                Practice this objective
              </Link>
            )}
            {entry.attemptCount > 0 && entry.attemptCount < OBJECTIVE_MIN_ATTEMPTS && (
              <p className="mt-1 text-xs text-zinc-600">
                {entry.attemptCount}/{OBJECTIVE_MIN_ATTEMPTS} attempts for coaching
              </p>
            )}
          </li>
        ))}
      </ul>
    </DisclosureSection>
  );
}
