"use client";

import Link from "next/link";
import type { WeakTopic } from "@/types/progress";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { getTopicByKey } from "@/lib/content-selectors";
import { curriculumStepForTopic } from "@/lib/curriculum";
import { parseTopicKey } from "@/lib/ids";
import { WEAK_CLEAR_PERCENT } from "@/lib/mastery-thresholds";
import { useProgressStore } from "@/stores/progress-store";

interface WeakAreaListProps {
  weakTopics: WeakTopic[];
  limit?: number;
}

const SEVERITY_LABELS: Record<number, string> = {
  1: "Minor — review when you can",
  2: "Moderate — prioritize soon",
  3: "Critical — focus here first",
};

export function WeakAreaList({ weakTopics, limit = 5 }: WeakAreaListProps) {
  const items = weakTopics.slice(0, limit);

  if (items.length === 0) {
    return (
      <Card>
        <p className="text-sm text-zinc-400">No weak areas yet. Take a quiz to identify gaps.</p>
      </Card>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-zinc-600">
        Clear weak areas with {WEAK_CLEAR_PERCENT}%+ on a quiz. Levels reflect repeat misses.
      </p>
      {items.map((weak) => {
        const resolved = getTopicByKey(weak.topicKey);
        const { certId, topicId } = parseTopicKey(weak.topicKey);
        const name = resolved?.topic.name ?? topicId;
        const certName = resolved?.cert.shortName ?? certId;
        const step = resolved
          ? curriculumStepForTopic(
              resolved.cert,
              topicId,
              useProgressStore.getState(),
              "Review weak area"
            )
          : null;
        const href = step?.href ?? `/cert/${certId}/lesson/${topicId}`;

        return (
          <Link key={weak.topicKey} href={href}>
            <Card className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate font-medium text-zinc-100">{name}</p>
                <p className="text-xs text-zinc-500">{certName}</p>
                {step?.stepType === "assignment" && step.assignmentTitle && (
                  <p className="mt-0.5 truncate text-xs text-sky-400">{step.assignmentTitle}</p>
                )}
              </div>
              <div className="shrink-0 text-right">
                <Badge variant="warning">Level {weak.severity}</Badge>
                <p className="mt-0.5 text-[10px] text-zinc-600">{SEVERITY_LABELS[weak.severity]}</p>
              </div>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
