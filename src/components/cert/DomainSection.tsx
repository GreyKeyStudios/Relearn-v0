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
import { useMemo, useState } from "react";
import {
  filterCertificationForCcnaPathway,
  resolveEffectiveCcnaPathway,
} from "@/lib/ccna-version-pathway";

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
      ? "text-accent"
    : isWeak
      ? "text-primary"
      : "text-faint";

  return (
    <Link href={`/cert/${certId}/lesson/${topic.id}`}>
      <Card className="flex items-center gap-3 py-3.5 shadow-none transition-colors hover:border-primary/35 hover:bg-surface-raised">
        <Icon className={`h-5 w-5 shrink-0 ${iconColor}`} />
        <span className="flex-1 text-sm font-medium text-foreground">{topic.name}</span>
        {topic.pathwayBadge && (
          <Badge variant="default">{topic.pathwayBadge}</Badge>
        )}
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
  const pathwayPreference = useProgressStore((s) => s.ccnaPathwayPreference);
  const visibleCert = useMemo(() => {
    if (cert.id !== "ccna") return cert;
    const pathway = resolveEffectiveCcnaPathway(pathwayPreference ?? null);
    return filterCertificationForCcnaPathway(cert, pathway);
  }, [cert, pathwayPreference]);
  const [expanded, setExpanded] = useState<Record<string, boolean>>(() => {
    const firstIncomplete = visibleCert.domains.find((domain) =>
      domain.topics.some((topic) => !completedLessons[topicKey(cert.id, topic.id)])
    );
    const focusedDomainId = firstIncomplete?.id ?? visibleCert.domains[0]?.id;
    return Object.fromEntries(
      visibleCert.domains.map((domain) => [domain.id, domain.id === focusedDomainId])
    );
  });

  return (
    <section className="relearn-card rounded-[var(--radius)] border border-border bg-surface p-5 sm:p-6" data-testid="domain-section">
      <div className="mb-6">
        <p className="eyebrow mb-2">Curriculum</p>
        <h2 className="font-serif text-2xl font-medium tracking-tight">Course structure</h2>
      </div>
      <div className="flex flex-col gap-5">
      {visibleCert.domains.map((domain) => {
        const bankCount = domainQuestionCount(domain);
        const avgScore = getDomainAverageScore(cert, domain.id, progressState);
        const proficientPct = getDomainMasteryPercent(cert, domain.id, progressState);
        return (
        <div key={domain.id} className="border-t border-hairline pt-4 first:border-t-0 first:pt-0">
          <div className="mb-3 flex items-center justify-between gap-2">
            <button
              type="button"
              aria-expanded={!!expanded[domain.id]}
              aria-controls={`domain-topics-${domain.id}`}
              onClick={() =>
                setExpanded((e) => ({ ...e, [domain.id]: !e[domain.id] }))
              }
              className="flex min-w-0 flex-1 flex-col text-left"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-lg font-medium text-foreground">{domain.name}</h3>
                <span className="shrink-0 text-xs text-faint">
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
          </div>
          {expanded[domain.id] && (
            <div id={`domain-topics-${domain.id}`} className="flex flex-col gap-2">
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
              {bankCount > 0 && (
                <Link href={`/cert/${cert.id}/domain-review/${domain.id}`}>
                  <Button variant="ghost" className="min-h-11 w-full px-3 py-2 text-xs">
                    <Library className="mr-1 inline h-3 w-3" />
                    Review this module ({bankCount} questions)
                  </Button>
                </Link>
              )}
            </div>
          )}
        </div>
        );
      })}
      </div>
    </section>
  );
}
