"use client";

import { useMemo } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { QuizEngine } from "@/components/quiz/QuizEngine";
import type { QuizQuestion, Topic, Certification } from "@/content/types";
import { consumeQuizRetryIds } from "@/lib/quiz-retry";
import { getNextTopicInPath } from "@/lib/curriculum";
import { topicBankKey } from "@/lib/ids";
import { useProgressStore } from "@/stores/progress-store";

interface QuizPageClientProps {
  certId: string;
  topicId: string;
  cert: Certification;
  topic: Topic;
  questions: QuizQuestion[];
  isBank: boolean;
  isRetryMissed: boolean;
  objective?: string;
  objectiveUnavailable?: boolean;
  subtitle: string;
  title: string;
}

export function QuizPageClient({
  certId,
  topicId,
  cert,
  topic,
  questions: serverQuestions,
  isBank,
  isRetryMissed,
  objective,
  objectiveUnavailable,
  subtitle,
  title,
}: QuizPageClientProps) {
  const sessionMinutes = useProgressStore((s) => s.studyPlan.sessionMinutes);

  const questions = useMemo(() => {
    if (isRetryMissed) {
      const retryIds = consumeQuizRetryIds(certId, topicId);
      if (retryIds) {
        const idSet = new Set(retryIds);
        const filtered = serverQuestions.filter((q) => idSet.has(q.id));
        if (filtered.length > 0) return filtered;
      }
    }
    return serverQuestions;
  }, [certId, topicId, isRetryMissed, serverQuestions]);

  const nextTopic = useMemo(
    () => getNextTopicInPath(cert, topicId),
    [cert, topicId]
  );

  return (
    <div>
      <PageHeader
        title={title}
        subtitle={subtitle}
        backHref={`/cert/${certId}/lesson/${topicId}`}
      />
      {objectiveUnavailable && (
        <p className="mb-4 rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 text-sm text-amber-200">
          No questions tagged for this objective — showing full quiz instead.
        </p>
      )}
      <QuizEngine
        certId={certId}
        topic={topic}
        questions={questions}
        progressKey={isBank ? topicBankKey(certId, topicId) : undefined}
        activityLabel={isBank ? `${topic.name} question bank` : undefined}
        isRetryMissed={isRetryMissed}
        sessionCapMinutes={sessionMinutes}
        nextTopic={nextTopic}
      />
    </div>
  );
}
