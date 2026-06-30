"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { Topic, QuizQuestion } from "@/content/types";
import type { QuizAttempt, QuizInProgress } from "@/types/progress";
import { topicKey } from "@/lib/ids";
import { suggestObjectiveDrill } from "@/lib/quiz-remediation";
import { maxQuestionsForSession } from "@/lib/session-planning";
import { useProgressStore } from "@/stores/progress-store";
import { useStoreHydration } from "@/hooks/use-store-hydration";
import { QuestionCard } from "./QuestionCard";
import { QuizResults } from "./QuizResults";
import type { NextTopicInfo } from "@/components/topic/TopicWhatsNext";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";

interface QuizEngineProps {
  certId: string;
  topic: Topic;
  questions: QuizQuestion[];
  progressKey?: string;
  doneHref?: string;
  activityLabel?: string;
  onComplete?: (attempt: QuizAttempt) => void;
  recordAttempt?: boolean;
  isRetryMissed?: boolean;
  sessionCapMinutes?: number | null;
  nextTopic?: NextTopicInfo | null;
}

function questionIdsFor(questions: QuizQuestion[]): string[] {
  return questions.map((q) => q.id);
}

function canRestoreProgress(
  saved: QuizInProgress,
  key: string,
  ids: string[]
): boolean {
  if (saved.topicKey !== key) return false;
  if (ids.length === 0) return false;
  if (saved.currentIndex < 0 || saved.currentIndex >= ids.length) return false;

  if (saved.questionIds) {
    if (saved.questionIds.length !== ids.length) return false;
    if (!saved.questionIds.every((id, i) => id === ids[i])) return false;
  } else {
    const valid = new Set(ids);
    if (!Object.keys(saved.answers).every((id) => valid.has(id))) return false;
  }

  return true;
}

export function QuizEngine({
  certId,
  topic,
  questions: allQuestions,
  progressKey,
  doneHref,
  activityLabel,
  onComplete,
  recordAttempt = true,
  isRetryMissed = false,
  sessionCapMinutes = null,
  nextTopic = null,
}: QuizEngineProps) {
  const router = useRouter();
  const hydrated = useStoreHydration();
  const recordQuizAttempt = useProgressStore((s) => s.recordQuizAttempt);
  const saveQuizProgress = useProgressStore((s) => s.saveQuizProgress);
  const clearQuizProgress = useProgressStore((s) => s.clearQuizProgress);
  const key = progressKey ?? topicKey(certId, topic.id);
  const finishHref = doneHref ?? `/cert/${certId}/lesson/${topic.id}`;

  const sessionMax = maxQuestionsForSession(sessionCapMinutes);
  const questions = useMemo(() => {
    if (sessionMax && allQuestions.length > sessionMax && !isRetryMissed) {
      return allQuestions.slice(0, sessionMax);
    }
    return allQuestions;
  }, [allQuestions, sessionMax, isRetryMissed]);

  const idsKey = useMemo(() => questionIdsFor(questions).join("|"), [questions]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [finished, setFinished] = useState(false);
  const [finalAttempt, setFinalAttempt] = useState<QuizAttempt | null>(null);
  const [progressRestored, setProgressRestored] = useState(false);
  const lastIdsKeyRef = useRef(idsKey);

  // Reset local state when the question set changes (e.g. invalid resume)
  useEffect(() => {
    if (lastIdsKeyRef.current === idsKey) return;
    lastIdsKeyRef.current = idsKey;
    setCurrentIndex(0);
    setAnswers({});
    setShowResult(false);
    setFinished(false);
    setFinalAttempt(null);
    setProgressRestored(false);
  }, [idsKey]);

  useEffect(() => {
    if (!hydrated || progressRestored) return;

    const saved = useProgressStore.getState().quizInProgress;
    const ids = questionIdsFor(questions);

    if (saved && canRestoreProgress(saved, key, ids)) {
      setCurrentIndex(saved.currentIndex);
      setAnswers(saved.answers);
      setShowResult(saved.showResult);
    } else if (saved?.topicKey) {
      clearQuizProgress();
    }

    setProgressRestored(true);
  }, [hydrated, key, idsKey, questions, clearQuizProgress, progressRestored]);

  useEffect(() => {
    if (!hydrated || !progressRestored || finished) return;

    saveQuizProgress({
      topicKey: key,
      certId,
      currentIndex,
      answers,
      showResult,
      questionIds: questionIdsFor(questions),
    });
  }, [
    hydrated,
    progressRestored,
    key,
    certId,
    currentIndex,
    answers,
    showResult,
    finished,
    questions,
    saveQuizProgress,
  ]);

  const current = questions[currentIndex];

  if (!hydrated || !progressRestored) {
    return <p className="text-center text-sm text-zinc-500">Loading quiz…</p>;
  }

  if (!current) {
    return (
      <p className="text-center text-sm text-zinc-500">
        No questions available.{" "}
        <button
          type="button"
          className="text-sky-400 underline"
          onClick={() => {
            clearQuizProgress();
            router.push(finishHref);
          }}
        >
          Go back
        </button>
      </p>
    );
  }

  const selected = answers[current.id] ?? null;
  const progress = ((currentIndex + (showResult ? 1 : 0)) / questions.length) * 100;

  const handleSelect = (choiceId: string) => {
    if (showResult) return;
    setAnswers((prev) => ({ ...prev, [current.id]: choiceId }));
  };

  const handleNext = () => {
    if (!selected) return;
    if (!showResult) {
      setShowResult(true);
      return;
    }
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setShowResult(false);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    const quizAnswers = questions.map((q) => ({
      questionId: q.id,
      selectedChoiceId: answers[q.id] ?? "",
      correct: answers[q.id] === q.correctChoiceId,
    }));
    const score = quizAnswers.filter((a) => a.correct).length;
    const attempt: QuizAttempt = {
      topicKey: key,
      certId,
      score,
      total: questions.length,
      answers: quizAnswers,
      completedAt: new Date().toISOString(),
    };
    if (recordAttempt) {
      recordQuizAttempt(attempt, activityLabel ?? topic.name);
    } else {
      clearQuizProgress();
    }
    onComplete?.(attempt);
    setFinalAttempt(attempt);
    setFinished(true);
  };

  if (finished && finalAttempt) {
    const objectiveDrill = suggestObjectiveDrill(
      certId,
      topic,
      finalAttempt.answers,
      questions,
      useProgressStore.getState()
    );

    return (
      <QuizResults
        score={finalAttempt.score}
        total={finalAttempt.total}
        questions={questions}
        answers={finalAttempt.answers}
        onDone={() => router.push(finishHref)}
        remediation={
          recordAttempt
            ? {
                certId,
                topicId: topic.id,
                lessonHref: finishHref,
                objectiveDrill,
              }
            : undefined
        }
        topicName={topic.name}
        nextTopic={nextTopic}
      />
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {isRetryMissed && (
        <p className="text-center text-xs text-amber-400">Retrying missed questions only</p>
      )}
      {sessionMax && allQuestions.length > sessionMax && !isRetryMissed && (
        <p className="text-center text-xs text-zinc-500">
          Short session: {questions.length} of {allQuestions.length} questions
        </p>
      )}
      <ProgressBar value={progress} />
      <QuestionCard
        question={current}
        questionNumber={currentIndex + 1}
        totalQuestions={questions.length}
        selectedChoiceId={selected}
        onSelect={handleSelect}
        showResult={showResult}
      />
      <Button onClick={handleNext} disabled={!selected} className="w-full">
        {showResult
          ? currentIndex < questions.length - 1
            ? "Next Question"
            : "See Results"
          : "Check Answer"}
      </Button>
    </div>
  );
}
