"use client";

import Link from "next/link";
import type { CoachRecommendation } from "@/lib/coach-recommendation";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Clock, Sparkles } from "lucide-react";

interface StudyNowCardProps {
  recommendation: CoachRecommendation | null;
  emptyHref?: string;
  emptyLabel?: string;
  sessionMinutes?: number | null;
}

const typeLabels: Record<CoachRecommendation["type"], string> = {
  review: "Review due",
  objective: "Weak objective",
  weak: "Weak area",
  curriculum: "Continue learning",
};

export function StudyNowCard({
  recommendation,
  emptyHref = "/certifications",
  emptyLabel = "Browse certifications",
  sessionMinutes,
}: StudyNowCardProps) {
  if (!recommendation) {
    return (
      <Card className="mb-6 p-4">
        <p className="text-sm text-zinc-400">
          No study recommendation yet. Explore a certification to get started.
        </p>
        <Link href={emptyHref}>
          <Button className="mt-3 w-full" variant="secondary">
            {emptyLabel}
          </Button>
        </Link>
      </Card>
    );
  }

  return (
    <Card className="mb-6 border-emerald-500/30 bg-emerald-500/5 p-4">
      <div className="mb-2 flex items-center gap-2 text-emerald-400">
        <Sparkles className="h-4 w-4" />
        <span className="text-xs font-semibold uppercase tracking-wide">
          {sessionMinutes ? `Study now · ${sessionMinutes} min session` : "Study now"}
        </span>
      </div>
      <p className="text-xs text-zinc-500">{recommendation.reason}</p>
      <p className="mt-1 text-lg font-semibold text-zinc-50">{recommendation.label}</p>
      <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-zinc-500">
        <span>{recommendation.certName}</span>
        <span className="flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" />~{recommendation.estimatedMinutes} min
        </span>
        {recommendation.score !== undefined && (
          <span className="font-medium text-amber-400">{recommendation.score}% mastery</span>
        )}
        <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-zinc-400">
          {typeLabels[recommendation.type]}
        </span>
      </div>
      <Link href={recommendation.href}>
        <Button className="mt-4 w-full">Start</Button>
      </Link>
    </Card>
  );
}
