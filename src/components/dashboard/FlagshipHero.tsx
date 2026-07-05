"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Certification } from "@/content/types";
import { getCertProgressPercent } from "@/lib/progress-metrics";
import { getCertMasteryPercent } from "@/lib/mastery";
import { getNextCurriculumStep } from "@/lib/curriculum";
import { getTrackStatusMeta } from "@/lib/track-status";
import { isSkillsTrack } from "@/lib/track-kind";
import { useProgressStore } from "@/stores/progress-store";

interface FlagshipHeroProps {
  cert: Certification;
}

/**
 * The editorial hero — a single, calm "here is what matters right now" moment.
 * Large serif display, hairline structure, one restrained accent. No boxes,
 * no gradients, no stat tiles.
 */
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
    <section className="mb-10 border-b border-hairline pb-8">
      <p className="eyebrow mb-4">
        {meta.label} · {kindLabel}
      </p>

      <h2 className="text-balance font-serif text-4xl font-medium leading-[1.05] tracking-tight text-foreground">
        {cert.shortName}
      </h2>
      <p className="mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground">
        {cert.overview ?? cert.name}
      </p>

      {hasContent ? (
        <>
          {started && (
            <div className="mt-6 flex items-baseline gap-6">
              <span className="flex items-baseline gap-1.5">
                <span className="font-serif text-2xl font-medium text-foreground">
                  {progress}
                  <span className="text-base text-faint">%</span>
                </span>
                <span className="eyebrow">complete</span>
              </span>
              <span className="flex items-baseline gap-1.5">
                <span className="font-serif text-2xl font-medium text-foreground">
                  {mastery}
                  <span className="text-base text-faint">%</span>
                </span>
                <span className="eyebrow">mastery</span>
              </span>
            </div>
          )}

          <Link
            href={href}
            className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-foreground"
          >
            <span className="border-b border-primary/40 pb-0.5 group-hover:border-foreground">
              {started ? "Continue where you left off" : "Begin the course"}
            </span>
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
        </>
      ) : (
        <p className="mt-6 text-sm text-muted-foreground">
          Content for this track is coming soon.
        </p>
      )}
    </section>
  );
}
