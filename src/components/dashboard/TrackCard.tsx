"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Certification } from "@/content/types";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { getCertProgressPercent } from "@/lib/progress-metrics";
import { getCertMasteryPercent } from "@/lib/mastery";
import { getTrackStatusMeta, type TrackStatus } from "@/lib/track-status";
import { isSkillsTrack } from "@/lib/track-kind";
import { useProgressStore } from "@/stores/progress-store";

interface TrackCardProps {
  cert: Certification;
}

const badgeTone: Record<TrackStatus, string> = {
  flagship: "border-emerald-500/40 bg-emerald-500/15 text-emerald-300",
  reference: "border-sky-500/40 bg-sky-500/15 text-sky-300",
  skill: "border-sky-500/30 bg-sky-500/10 text-sky-300",
  early: "border-zinc-700 bg-zinc-800/60 text-zinc-400",
};

const monogramTone: Record<TrackStatus, string> = {
  flagship: "bg-emerald-500/20 text-emerald-300",
  reference: "bg-sky-500/20 text-sky-300",
  skill: "bg-sky-500/15 text-sky-300",
  early: "bg-zinc-800 text-zinc-500",
};

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

  return (
    <Link
      href={hasContent ? `/cert/${cert.id}` : "/certifications"}
      className="group block focus:outline-none"
      aria-label={`${cert.shortName} — ${meta.label}`}
    >
      <div
        className={`flex items-center gap-4 rounded-2xl border p-4 transition-colors ${
          isEarly
            ? "border-zinc-800/70 bg-zinc-900/40 hover:border-zinc-700 hover:bg-zinc-900/70"
            : "border-zinc-800 bg-zinc-900 hover:border-zinc-700 hover:bg-zinc-800/80"
        }`}
      >
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg font-bold ${monogramTone[meta.status]}`}
        >
          {cert.shortName.slice(0, 2)}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <p className={`truncate font-medium ${isEarly ? "text-zinc-300" : "text-zinc-100"}`}>
              {cert.shortName}
            </p>
            <span
              className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${badgeTone[meta.status]}`}
            >
              {meta.label}
            </span>
          </div>
          <p className="truncate text-xs text-zinc-500">{kindLabel}</p>

          {meta.live && hasContent ? (
            <>
              <ProgressBar value={progress} className="mt-2" />
              <p className="mt-1 text-xs text-zinc-500">
                {progress}% complete · mastery {mastery}%
              </p>
            </>
          ) : (
            <p className="mt-1 text-xs text-zinc-500">{meta.tagline}</p>
          )}
        </div>

        <ChevronRight
          className={`h-4 w-4 shrink-0 transition-colors ${
            isEarly ? "text-zinc-600 group-hover:text-zinc-400" : "text-zinc-500 group-hover:text-emerald-400"
          }`}
          aria-hidden
        />
      </div>
    </Link>
  );
}
