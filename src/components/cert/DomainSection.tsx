"use client";

import Link from "next/link";
import type { Certification, Domain, Topic } from "@/content/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { MasteryBadge } from "@/components/mastery/MasteryBadge";
import { DomainMasteryBar } from "@/components/mastery/DomainMasteryBar";
import { useProgressStore } from "@/stores/progress-store";
import { topicKey } from "@/lib/ids";
import {
  getDomainAverageScore,
  getDomainMasteryPercent,
  getTopicMastery,
} from "@/lib/mastery";
import { CheckCircle2, AlertTriangle, Circle, Library } from "lucide-react";
import { useState } from "react";

interface DomainSectionProps {
  cert: Certification;
}

function TopicRow({
  certId,
  topic,
  isComplete,
  isWeak,
  masteryLevel,
  masteryScore,
}: {
  certId: string;
  topic: Topic;
  isComplete: boolean;
  isWeak: boolean;
  masteryLevel: import("@/types/mastery").MasteryLevel;
  masteryScore: number;
}) {
  const Icon = isComplete ? CheckCircle2 : isWeak ? AlertTriangle : Circle;
  const iconColor = isComplete
    ? "text-emerald-400"
    : isWeak
      ? "text-amber-400"
      : "text-zinc-600";

  return (
    <Link href={`/cert/${certId}/lesson/${topic.id}`}>
      <Card className="flex items-center gap-3 py-3">
        <Icon className={`h-5 w-5 shrink-0 ${iconColor}`} />
        <span className="flex-1 text-sm text-zinc-200">{topic.name}</span>
        <MasteryBadge level={masteryLevel} score={masteryScore} showScore />
        {isWeak && <Badge variant="warning">Weak</Badge>}
      </Card>
    </Link>
  );
}

function domainQuestionCount(domain: Domain): number {
  return domain.topics.reduce((sum, t) => sum + (t.questionBank?.length ?? 0), 0);
}

export function DomainSection({ cert }: DomainSectionProps) {
  const completedLessons = useProgressStore((s) => s.completedLessons);
  const weakTopics = useProgressStore((s) => s.weakTopics);
  const progressState = useProgressStore((s) => s);
  const [expanded, setExpanded] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(cert.domains.map((d) => [d.id, true]))
  );

  return (
    <div className="flex flex-col gap-4">
      {cert.domains.map((domain) => {
        const bankCount = domainQuestionCount(domain);
        const avgScore = getDomainAverageScore(cert, domain.id, progressState);
        const proficientPct = getDomainMasteryPercent(cert, domain.id, progressState);
        return (
        <div key={domain.id}>
          <div className="mb-2 flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={() =>
                setExpanded((e) => ({ ...e, [domain.id]: !e[domain.id] }))
              }
              className="flex min-w-0 flex-1 flex-col text-left"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-zinc-300">{domain.name}</h3>
                <span className="shrink-0 text-xs text-zinc-500">
                  {expanded[domain.id] ? "▼" : "▶"} {domain.topics.length} topics
                </span>
              </div>
              <DomainMasteryBar
                domainName=""
                averageScore={avgScore}
                proficientCount={Math.round((proficientPct / 100) * domain.topics.length)}
                topicCount={domain.topics.length}
              />
            </button>
            {bankCount > 0 && (
              <Link href={`/cert/${cert.id}/domain-review/${domain.id}`}>
                <Button variant="ghost" className="min-h-10 shrink-0 px-3 py-1 text-xs">
                  <Library className="mr-1 inline h-3 w-3" />
                  Review ({bankCount})
                </Button>
              </Link>
            )}
          </div>
          {expanded[domain.id] && (
            <div className="flex flex-col gap-2">
              {domain.topics.map((topic) => {
                const key = topicKey(cert.id, topic.id);
                const mastery = getTopicMastery(progressState, cert.id, topic.id);
                return (
                  <TopicRow
                    key={topic.id}
                    certId={cert.id}
                    topic={topic}
                    isComplete={!!completedLessons[key]}
                    isWeak={!!weakTopics[key]}
                    masteryLevel={mastery.level}
                    masteryScore={mastery.score}
                  />
                );
              })}
            </div>
          )}
        </div>
        );
      })}
    </div>
  );
}
