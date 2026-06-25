"use client";

import { useState } from "react";
import Link from "next/link";
import type { WeakObjective } from "@/lib/objective-mastery";
import { coachingLevelLabel } from "@/lib/objective-support";
import { OBJECTIVE_MIN_ATTEMPTS } from "@/lib/mastery-thresholds";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Button } from "@/components/ui/Button";
import { Target } from "lucide-react";

interface WeakObjectivesCardProps {
  objectives: WeakObjective[];
  title?: string;
  emptyHref?: string;
  showEmptyState?: boolean;
  certId?: string;
  coachingLabel?: string;
}

export function WeakObjectivesCard({
  objectives,
  title = "Weak objectives",
  emptyHref,
  showEmptyState = false,
  certId,
  coachingLabel,
}: WeakObjectivesCardProps) {
  if (objectives.length === 0) {
    if (!showEmptyState || !emptyHref) return null;
    const levelLabel = coachingLabel ?? (certId ? coachingLevelLabel(certId) : "Topic-level coaching");

    return (
      <Card className="mb-6 p-4">
        <div className="mb-2 flex items-center gap-2">
          <Target className="h-4 w-4 text-zinc-500" />
          <h3 className="text-sm font-semibold text-zinc-400">{title}</h3>
        </div>
        <p className="text-xs text-zinc-600">{levelLabel}</p>
        {certId && coachingLevelLabel(certId) === "Exam-objective coaching" ? (
          <p className="mt-2 text-sm text-zinc-500">
            Complete quizzes on tagged topics to unlock objective-level coaching. We need at least{" "}
            {OBJECTIVE_MIN_ATTEMPTS} attempts per objective before surfacing weak areas.
          </p>
        ) : (
          <p className="mt-2 text-sm text-zinc-500">
            Take quizzes to identify topic-level weak areas. Objective drills are available for CCNA;
            other tracks use topic-level coaching.
          </p>
        )}
        <Link href={emptyHref}>
          <Button className="mt-3 w-full" variant="secondary">
            Take a quiz
          </Button>
        </Link>
      </Card>
    );
  }

  return (
    <Card className="mb-6 p-4">
      <div className="mb-3 flex items-center gap-2">
        <Target className="h-4 w-4 text-amber-400" />
        <h3 className="text-sm font-semibold text-zinc-200">{title}</h3>
      </div>
      <ul className="space-y-3">
        {objectives.map((obj) => (
          <li key={obj.objectiveId}>
            <Link
              href={obj.href}
              className="block rounded-lg border border-zinc-800 p-3 hover:bg-zinc-900"
            >
              <div className="mb-1 flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-zinc-200">{obj.shortLabel}</p>
                  <p className="text-xs text-zinc-500">{obj.topicName}</p>
                </div>
                <span className="shrink-0 text-sm font-medium text-amber-400">{obj.score}%</span>
              </div>
              <ProgressBar value={obj.score} />
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  );
}
