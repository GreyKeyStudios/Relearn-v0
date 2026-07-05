"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Certification } from "@/content/types";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { getCertProgressPercent } from "@/lib/progress-metrics";
import { getCertMasteryPercent } from "@/lib/mastery";
import { getTrackStatusMeta } from "@/lib/track-status";
import { isSkillsTrack } from "@/lib/track-kind";
import { useProgressStore } from "@/stores/progress-store";

interface TrackCardProps {
  cert: Certification;
}

/**
 * A single course presented as an editorial index entry: a hairline row with
 * a serif title, a quiet sub-label, and progress shown only when meaningful.
 */
export function TrackCard({ cert }: TrackCardProps) {
  const completedLessons = useProgressStore((s) => s.completedLessons);
  const completedAssignments = useProgressStore((s) => s.completedAssignments);
  const progressState = useProgressStore((s) => s);

  const meta = getTrackStatusMeta(cert);
  const hasContent = cert.domains.some((d) => d.topics.length > 0);
  const progress = getCertProgressPercent(cert, { completedLessons, completedAssignments });
  const mastery = getCertMasteryPercent(cert, progressState);
  const kindLabel = isSkillsTrack(cert) ? "ReLearn · Job skill" : cert.vendor;

  const isEarly = meta.status === "early";
  const showProgress = meta.live && hasContent;

  return (
    <Link
      href={hasContent ? `/cert/${cert.id}` : "/certifications"}
      className="group block py-4 focus:outline-none"
      aria-label={`${cert.shortName} — ${meta.label}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3
              className={`truncate font-serif text-lg font-medium ${
                isEarly ? "text-muted-foreground" : "text-foreground"
              }`}
            >
              {cert.shortName}
            </h3>
            <span className="eyebrow shrink-0">{meta.label}</span>
          </div>
          <p className="mt-0.5 truncate text-xs text-faint">{kindLabel}</p>

          {showProgress ? (
            <div className="mt-3 max-w-xs">
              <ProgressBar value={progress} />
              <p className="mt-1.5 text-xs text-faint">
                {progress}% complete · mastery {mastery}%
              </p>
            </div>
          ) : (
            <p className="mt-2 text-xs text-faint">{meta.tagline}</p>
          )}
        </div>

        <ArrowRight
          className={`mt-1 h-4 w-4 shrink-0 transition-all group-hover:translate-x-0.5 ${
            isEarly ? "text-faint group-hover:text-muted-foreground" : "text-muted-foreground group-hover:text-primary"
          }`}
          aria-hidden
        />
      </div>
    </Link>
  );
}
