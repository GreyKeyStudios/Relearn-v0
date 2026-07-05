"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import type { Certification } from "@/content/types";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { getCertProgressPercent } from "@/lib/progress-metrics";
import { getCertMasteryPercent } from "@/lib/mastery";
import { getNextCurriculumStep } from "@/lib/curriculum";
import { getTrackStatusMeta } from "@/lib/track-status";
import { isSkillsTrack } from "@/lib/track-kind";
import { useProgressStore } from "@/stores/progress-store";

interface FlagshipHeroProps {
  cert: Certification;
}

export function FlagshipHero({ cert }: FlagshipHeroProps) {
  const completedLessons = useProgressStore((s) => s.completedLessons);
  const completedAssignments = useProgressStore((s) => s.completedAssignments);
  const progressState = useProgressStore((s) => s);

  const meta = getTrackStatusMeta(cert);
  const hasContent = cert.domains.some((d) => d.topics.length > 0);
  const progress = getCertProgressPercent(cert, { completedLessons, completedAssignments });
  const mastery = getCertMasteryPercent(cert, progressState);
  const started = progress > 0;

  const nextStep = hasContent ? getNextCurriculumStep(cert, progressState) : null;
  const href = nextStep?.href ?? `/cert/${cert.id}`;
  const kindLabel = isSkillsTrack(cert) ? "ReLearn skill track" : `${cert.vendor} certification`;

  return (
    <section className="mb-6 overflow-hidden rounded-2xl border border-emerald-500/25 bg-gradient-to-br from-emerald-500/10 via-zinc-900 to-zinc-900">
      <div className="p-5">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/20 text-xl font-bold text-emerald-300">
              {cert.shortName.slice(0, 2)}
            </div>
            <div className="min-w-0">
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/40 bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-300">
                <Sparkles className="h-3 w-3" aria-hidden />
                {meta.label}
              </span>
              <h2 className="mt-1 text-xl font-semibold text-zinc-50">{cert.shortName}</h2>
              <p className="truncate text-xs text-zinc-400">{kindLabel}</p>
            </div>
          </div>
        </div>

        {hasContent ? (
          <>
            <ProgressBar value={progress} className="mb-2" />
            <div className="mb-4 flex items-center justify-between text-xs text-zinc-400">
              <span>{progress}% complete</span>
              <span>Mastery {mastery}%</span>
            </div>
            <Link
              href={href}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-500 active:bg-emerald-700"
            >
              {started ? "Continue studying" : "Start the course"}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </>
        ) : (
          <p className="text-sm text-zinc-400">Content for this track is coming soon.</p>
        )}
      </div>
    </section>
  );
}
