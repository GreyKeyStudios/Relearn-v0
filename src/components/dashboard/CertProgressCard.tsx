"use client";

import Link from "next/link";
import type { Certification } from "@/content/types";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { getCertProgressPercent } from "@/lib/progress-metrics";
import { getCertMasteryPercent } from "@/lib/mastery";
import { useProgressStore } from "@/stores/progress-store";

interface CertProgressCardProps {
  cert: Certification;
}

export function CertProgressCard({ cert }: CertProgressCardProps) {
  const completedLessons = useProgressStore((s) => s.completedLessons);
  const completedAssignments = useProgressStore((s) => s.completedAssignments);
  const progressState = useProgressStore((s) => s);
  const progress = getCertProgressPercent(cert, { completedLessons, completedAssignments });
  const mastery = getCertMasteryPercent(cert, progressState);
  const hasContent = cert.domains.some((d) => d.topics.length > 0);

  return (
    <Link href={hasContent ? `/cert/${cert.id}` : "/certifications"}>
      <Card className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-lg font-bold text-emerald-400">
          {cert.shortName.slice(0, 2)}
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-medium text-zinc-100">{cert.shortName}</p>
          <p className="truncate text-xs text-zinc-500">{cert.vendor}</p>
          {hasContent ? (
            <>
              <ProgressBar value={progress} className="mt-2" />
              <p className="mt-1 text-xs text-zinc-500">Mastery {mastery}%</p>
            </>
          ) : (
            <p className="mt-1 text-xs text-zinc-500">Content coming soon</p>
          )}
        </div>
        <span className="text-sm font-medium text-emerald-400">{hasContent ? `${progress}%` : "—"}</span>
      </Card>
    </Link>
  );
}
