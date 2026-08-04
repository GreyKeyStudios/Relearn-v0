"use client";

import Link from "next/link";
import type { QuizAnswer } from "@/types/progress";
import type { QuizQuestion } from "@/content/types";
import {
  QUIZ_PASS_PERCENT,
  SRS_PASS_PERCENT,
  WEAK_CLEAR_PERCENT,
  OBJECTIVE_MIN_ATTEMPTS,
  quizPassLabel,
  thresholdGuideText,
} from "@/lib/mastery-thresholds";
import { storeQuizRetryIds, quizRetryHref } from "@/lib/quiz-retry";
import { certSupportsObjectiveCoaching } from "@/lib/objective-support";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { RotateCcw, BookOpen, Target } from "lucide-react";
import { TopicWhatsNext, type NextTopicInfo } from "@/components/topic/TopicWhatsNext";
import { getTopic } from "@/lib/content-selectors";
import { getCcnaV20RemediationCopy } from "@/content/certifications/ccna/v20-remediation-copy";

export interface QuizRemediationProps {
  certId: string;
  topicId: string;
  lessonHref: string;
  objectiveDrill?: {
    objectiveId: string;
    label: string;
    attemptCount: number;
    reviewTopicId?: string;
  } | null;
}

interface QuizResultsProps {
  score: number;
  total: number;
  questions: QuizQuestion[];
  answers: QuizAnswer[];
  onDone: () => void;
  remediation?: QuizRemediationProps;
  topicName?: string;
  nextTopic?: NextTopicInfo | null;
}

export function QuizResults({
  score,
  total,
  questions,
  answers,
  onDone,
  remediation,
  topicName,
  nextTopic = null,
}: QuizResultsProps) {
  const percent = Math.round((score / total) * 100);
  const passed = percent >= QUIZ_PASS_PERCENT;
  const missedIds = answers.filter((a) => !a.correct).map((a) => a.questionId);
  const hasMissed = missedIds.length > 0;

  function handleRetryMissed() {
    if (!remediation) return;
    storeQuizRetryIds(remediation.certId, remediation.topicId, missedIds);
    window.location.href = quizRetryHref(remediation.certId, remediation.topicId);
  }

  const objectiveDrill = remediation?.objectiveDrill;
  const reviewTopicName =
    remediation && objectiveDrill?.reviewTopicId
      ? getTopic(remediation.certId, objectiveDrill.reviewTopicId)?.topic.name
      : undefined;
  const showObjectiveDrill =
    objectiveDrill &&
    certSupportsObjectiveCoaching(remediation!.certId) &&
    (objectiveDrill.attemptCount >= OBJECTIVE_MIN_ATTEMPTS || hasMissed);

  return (
    <div className="flex flex-col gap-6">
      <Card className="text-center">
        <p className="text-sm text-zinc-400">Your Score</p>
        <p className="mt-1 text-4xl font-bold text-zinc-50">
          {score}/{total}
        </p>
        <Badge variant={passed ? "success" : "warning"} className="mt-2">
          {percent}% — {passed ? "Passing" : "Keep studying"}
        </Badge>
        <p className="mt-2 text-xs text-zinc-500">{quizPassLabel(percent)}</p>
        <p className="mt-1 text-xs text-zinc-600">{thresholdGuideText()}</p>
      </Card>

      {hasMissed && remediation && (
        <Card className="border-amber-500/20 bg-amber-500/5 p-4">
          <p className="mb-3 text-sm font-medium text-zinc-200">Recommended next steps</p>
          <div className="flex flex-col gap-2">
            <Button className="w-full" onClick={handleRetryMissed}>
              <RotateCcw className="mr-2 inline h-4 w-4" />
              Retry {missedIds.length} missed question{missedIds.length === 1 ? "" : "s"}
            </Button>
            {showObjectiveDrill && objectiveDrill && (
              <Link
                href={`/cert/${remediation.certId}/quiz/${remediation.topicId}?objective=${encodeURIComponent(objectiveDrill.objectiveId)}`}
              >
                <Button className="w-full" variant="secondary">
                  <Target className="mr-2 inline h-4 w-4" />
                  Practice objective: {objectiveDrill.label}
                </Button>
              </Link>
            )}
            {objectiveDrill?.reviewTopicId && hasMissed && (
              <Link
                href={`/cert/${remediation.certId}/lesson/${objectiveDrill.reviewTopicId}`}
              >
                <Button className="w-full" variant="secondary">
                  <BookOpen className="mr-2 inline h-4 w-4" />
                  Review weak area: {reviewTopicName ?? "teaching lesson"}
                </Button>
              </Link>
            )}
            {objectiveDrill &&
              certSupportsObjectiveCoaching(remediation.certId) &&
              objectiveDrill.attemptCount < OBJECTIVE_MIN_ATTEMPTS &&
              hasMissed && (
                <p className="text-xs text-zinc-500">
                  Objective coaching unlocks after {OBJECTIVE_MIN_ATTEMPTS} attempts per objective (
                  {objectiveDrill.attemptCount}/{OBJECTIVE_MIN_ATTEMPTS} so far).
                </p>
              )}
            <Link href={remediation.lessonHref}>
              <Button className="w-full" variant="secondary">
                <BookOpen className="mr-2 inline h-4 w-4" />
                Review lesson
              </Button>
            </Link>
          </div>
        </Card>
      )}

      {!hasMissed && percent < SRS_PASS_PERCENT && (
        <p className="text-center text-xs text-zinc-500">
          Score {SRS_PASS_PERCENT}%+ to advance spaced review intervals.
        </p>
      )}

      {percent >= WEAK_CLEAR_PERCENT && hasMissed === false && (
        <p className="text-center text-xs text-emerald-500/80">
          Strong score — this may clear a weak-area flag.
        </p>
      )}

      {remediation && topicName && (
        <TopicWhatsNext
          certId={remediation.certId}
          topicId={remediation.topicId}
          topicName={topicName}
          nextTopic={nextTopic}
          variant="quiz"
          onBackToTopic={onDone}
        />
      )}

      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold text-zinc-300">Review</h3>
        {questions.map((q, i) => {
          const answer = answers.find((a) => a.questionId === q.id);
          const misconceptionHit =
            answer &&
            !answer.correct &&
            (q.misconceptionChoiceIds?.includes(answer.selectedChoiceId) ??
              false);
          const remediationCopy = misconceptionHit
            ? getCcnaV20RemediationCopy(q.remediationActivityId)
            : undefined;
          return (
            <Card key={q.id} className="flex flex-col gap-2">
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-medium text-zinc-200">
                  {i + 1}. {q.prompt}
                </p>
                <Badge variant={answer?.correct ? "success" : "warning"}>
                  {answer?.correct ? "Correct" : "Missed"}
                </Badge>
              </div>
              <p className="text-xs text-zinc-400">{q.explanation}</p>
              {remediationCopy && (
                <div
                  className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-3"
                  data-testid="results-diagnostic-remediation"
                  data-remediation-id={q.remediationActivityId}
                >
                  <p className="text-xs font-medium text-amber-300">
                    Misconception remediation — {remediationCopy.title}
                  </p>
                  <p className="mt-1 text-xs text-zinc-300">{remediationCopy.body}</p>
                </div>
              )}
            </Card>
          );
        })}
      </div>

      {!remediation && (
        <Button onClick={onDone} className="w-full" variant={hasMissed ? "secondary" : "primary"}>
          Back to topic
        </Button>
      )}
    </div>
  );
}
