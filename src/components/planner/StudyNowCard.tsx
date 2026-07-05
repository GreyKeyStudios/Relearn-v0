"use client";

import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import type { CoachRecommendation } from "@/lib/coach-recommendation";

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

/**
 * "Today's focus" — a single guided next step, presented like a note pinned
 * to a study desk rather than a promotional call-to-action card.
 */
export function StudyNowCard({
  recommendation,
  emptyHref = "/certifications",
  emptyLabel = "Browse certifications",
  sessionMinutes,
}: StudyNowCardProps) {
  if (!recommendation) {
    return (
      <section className="mb-10">
        <p className="eyebrow mb-3">Today&apos;s focus</p>
        <p className="text-pretty leading-relaxed text-muted-foreground">
          No recommendation yet. Choose a track and your coach will line up the
          next thing worth studying.
        </p>
        <Link
          href={emptyHref}
          className="group mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-foreground"
        >
          <span className="border-b border-primary/40 pb-0.5 group-hover:border-foreground">
            {emptyLabel}
          </span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </Link>
      </section>
    );
  }

  return (
    <section className="mb-10 rounded-lg border border-border bg-surface p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="eyebrow">
          {sessionMinutes ? `Today's focus · ${sessionMinutes} min` : "Today's focus"}
        </p>
        <span className="rounded-full border border-primary/30 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-primary">
          {typeLabels[recommendation.type]}
        </span>
      </div>

      <p className="mt-4 text-balance font-serif text-2xl font-medium leading-snug text-foreground">
        {recommendation.label}
      </p>
      <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
        {recommendation.reason}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-faint">
        <span>{recommendation.certName}</span>
        <span className="flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" aria-hidden />~{recommendation.estimatedMinutes} min
        </span>
        {recommendation.score !== undefined && (
          <span className="text-primary">{recommendation.score}% mastery</span>
        )}
      </div>

      <Link
        href={recommendation.href}
        className="group mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
      >
        Start this session
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
      </Link>
    </section>
  );
}
