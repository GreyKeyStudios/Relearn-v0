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
          <Target className="h-4 w-4 text-faint" />
          <h3 className="font-serif text-lg font-medium text-foreground">{title}</h3>
        </div>
        <p className="eyebrow">{levelLabel}</p>
        {certId && coachingLevelLabel(certId) === "Exam-objective coaching" ? (
          <p className="mt-2 text-sm text-muted-foreground">
            Complete quizzes on tagged topics to unlock objective-level coaching. We need at least{" "}
            {OBJECTIVE_MIN_ATTEMPTS} attempts per objective before surfacing weak areas.
          </p>
        ) : (
          <p className="mt-2 text-sm text-muted-foreground">
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
        <Target className="h-4 w-4 text-primary" />
        <h3 className="font-serif text-lg font-medium text-foreground">{title}</h3>
      </div>
      <ul className="space-y-3">
        {objectives.map((obj) => (
          <li key={obj.objectiveId}>
            <Link
              href={obj.href}
              className="block rounded-md border border-border p-3 transition-colors hover:border-hairline hover:bg-surface-raised"
            >
              <div className="mb-1 flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground">{obj.shortLabel}</p>
                  <p className="text-xs text-faint">{obj.topicName}</p>
                </div>
                <span className="shrink-0 text-sm font-medium text-primary">{obj.score}%</span>
              </div>
              <ProgressBar value={obj.score} />
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  );
}
