"use client";

import { useMemo, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { QuizEngine } from "@/components/quiz/QuizEngine";
import type { Certification, Topic } from "@/content/types";
import { getNextTopicInPath } from "@/lib/curriculum";
import { getObjectiveLabel } from "@/lib/content-selectors";
import { topicBankKey } from "@/lib/ids";
import { filterQuestionsByObjective } from "@/lib/objective-mastery";
import { consumeQuizRetryIds } from "@/lib/quiz-retry";
import { useProgressStore } from "@/stores/progress-store";

interface QuizPageClientProps {
  certId: string;
  topicId: string;
  cert: Certification;
  topic: Topic;
}

export function QuizPageClient({
  certId,
  topicId,
  cert,
  topic,
}: QuizPageClientProps) {
  const searchParams = useSearchParams();
  const sessionMinutes = useProgressStore((s) => s.studyPlan.sessionMinutes);

  const bank = searchParams.get("bank");
  const objective = searchParams.get("objective") ?? undefined;
  const retry = searchParams.get("retry");

  const isBank = bank === "1";
  const isRetryMissed = retry === "missed";
  const retryIdsRef = useRef<string[] | null>(null);

  const { questions, objectiveUnavailable, subtitle, title } = useMemo(() => {
    const baseQuestions = isBank ? (topic.questionBank ?? []) : topic.quiz;
    let resolved = baseQuestions;
    let unavailable = false;

    if (objective) {
      const filtered = filterQuestionsByObjective(baseQuestions, objective);
      if (filtered.length > 0) {
        resolved = filtered;
      } else {
        unavailable = true;
      }
    }

    const resolvedSubtitle = objective
      ? `${getObjectiveLabel(certId, objective)} · ${cert.shortName}`
      : `${topic.name} · ${cert.shortName}`;

    const resolvedTitle = isRetryMissed
      ? "Retry Missed"
      : isBank
        ? "Question Bank Drill"
        : objective
          ? "Objective Practice"
          : "Quiz";

    return {
      questions: resolved,
      objectiveUnavailable: unavailable,
      subtitle: resolvedSubtitle,
      title: resolvedTitle,
    };
  }, [cert, certId, isBank, isRetryMissed, objective, topic]);

  const displayQuestions = useMemo(() => {
    if (isRetryMissed) {
      if (retryIdsRef.current === null) {
        retryIdsRef.current = consumeQuizRetryIds(certId, topicId);
      }
      const retryIds = retryIdsRef.current;
      if (retryIds) {
        const idSet = new Set(retryIds);
        const filtered = questions.filter((q) => idSet.has(q.id));
        if (filtered.length > 0) return filtered;
      }
    }
    return questions;
  }, [certId, topicId, isRetryMissed, questions]);

  const nextTopic = useMemo(
    () => getNextTopicInPath(cert, topicId),
    [cert, topicId]
  );

  if (displayQuestions.length === 0) {
    return (
      <div className="mx-auto max-w-3xl">
        <PageHeader
          title="Quiz"
          subtitle={`${topic.name} · ${cert.shortName}`}
          backHref={`/cert/${certId}/lesson/${topicId}`}
        />
        <p className="text-sm text-muted-foreground">No quiz questions available for this topic.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader
        title={title}
        subtitle={subtitle}
        backHref={`/cert/${certId}/lesson/${topicId}`}
      />
      {objectiveUnavailable && (
        <p className="mb-4 rounded-lg border border-primary/30 bg-primary/10 p-3 text-sm text-[#76551a]">
          No questions tagged for this objective — showing full quiz instead.
        </p>
      )}
      <section className="relearn-card rounded-[var(--radius)] border border-border bg-surface p-5 sm:p-7">
        <QuizEngine
          certId={certId}
          topic={topic}
          questions={displayQuestions}
          progressKey={isBank ? topicBankKey(certId, topicId) : undefined}
          activityLabel={isBank ? `${topic.name} question bank` : undefined}
          isRetryMissed={isRetryMissed}
          sessionCapMinutes={sessionMinutes}
          nextTopic={nextTopic}
        />
      </section>
    </div>
  );
}
