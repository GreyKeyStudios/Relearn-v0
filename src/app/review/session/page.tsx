"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { QuizEngine } from "@/components/quiz/QuizEngine";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  adaptiveReviewProgressKey,
  buildAdaptiveReviewSession,
  type AdaptiveReviewSession,
} from "@/lib/adaptive-review";
import { maxQuestionsForSession } from "@/lib/session-planning";
import { parseTopicKey } from "@/lib/ids";
import { useProgressStore } from "@/stores/progress-store";
import { useStoreHydration } from "@/hooks/use-store-hydration";

export default function ReviewSessionPage() {
  const hydrated = useStoreHydration();
  const sessionMinutes = useProgressStore((s) => s.studyPlan.sessionMinutes);
  const recordAdaptiveReview = useProgressStore((s) => s.recordAdaptiveReview);
  const [session, setSession] = useState<AdaptiveReviewSession | null>(null);
  const sessionBuiltRef = useRef(false);

  const maxQuestions = maxQuestionsForSession(sessionMinutes) ?? 20;

  useEffect(() => {
    if (!hydrated || sessionBuiltRef.current) return;
    sessionBuiltRef.current = true;
    setSession(buildAdaptiveReviewSession(useProgressStore.getState(), maxQuestions));
  }, [hydrated, maxQuestions]);

  if (!hydrated || session === null) {
    return <p className="p-4 text-center text-sm text-zinc-500">Loading review…</p>;
  }

  if (!session || session.questions.length === 0) {
    return (
      <div>
        <PageHeader title="Adaptive Review" subtitle="Spaced repetition session" backHref="/review" />
        <Card className="p-4">
          <p className="text-sm text-zinc-400">
            No topics are due for review right now. Complete more quizzes and drills to build your
            review schedule.
          </p>
          <Link href="/review">
            <Button className="mt-4 w-full" variant="secondary">
              Back to review
            </Button>
          </Link>
        </Card>
      </div>
    );
  }

  const questionTopicMap = Object.fromEntries(
    session.questions.map((q) => [q.id, q.sourceTopicKey])
  );

  const reviewTopic = {
    id: "adaptive-review",
    name: "Adaptive Review",
    lesson: { title: "", content: "" },
    keyFacts: [],
    quiz: [],
    flashcards: [],
  };

  return (
    <div>
      <PageHeader
        title="Adaptive Review"
        subtitle={`${session.questions.length} questions · ${session.dueCount} topics due`}
        backHref="/review"
      />
      <QuizEngine
        certId="adaptive"
        topic={reviewTopic}
        questions={session.questions}
        progressKey={adaptiveReviewProgressKey()}
        doneHref="/review"
        activityLabel="Adaptive review"
        recordAttempt={false}
        onComplete={(attempt) => {
          const byTopic: Record<string, { correct: number; total: number }> = {};
          for (const a of attempt.answers) {
            const tk = questionTopicMap[a.questionId];
            if (!tk) continue;
            if (!byTopic[tk]) byTopic[tk] = { correct: 0, total: 0 };
            byTopic[tk].total += 1;
            if (a.correct) byTopic[tk].correct += 1;
          }
          const topicScores = Object.entries(byTopic).map(([tk, scores]) => {
            const { certId, topicId } = parseTopicKey(tk);
            return { certId, topicId, ...scores };
          });
          recordAdaptiveReview(attempt, topicScores);
        }}
      />
    </div>
  );
}
