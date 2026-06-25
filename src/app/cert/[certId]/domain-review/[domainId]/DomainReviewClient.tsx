"use client";

import { useMemo } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { QuizEngine } from "@/components/quiz/QuizEngine";
import type { QuizQuestion } from "@/content/types";
import { domainReviewKey } from "@/lib/ids";
import { shuffleArray } from "@/lib/shuffle";

interface DomainReviewClientProps {
  certId: string;
  domainId: string;
  certShortName: string;
  domainName: string;
  bankQuestions: QuizQuestion[];
}

export function DomainReviewClient({
  certId,
  domainId,
  certShortName,
  domainName,
  bankQuestions,
}: DomainReviewClientProps) {
  const questions = useMemo(() => shuffleArray(bankQuestions), [bankQuestions]);

  const reviewTopic = {
    id: `domain-review-${domainId}`,
    name: domainName,
    lesson: { title: "", content: "" },
    keyFacts: [],
    quiz: [],
    flashcards: [],
  };

  return (
    <div>
      <PageHeader
        title="Domain Review"
        subtitle={`${domainName} · ${certShortName}`}
        backHref={`/cert/${certId}`}
      />
      <p className="mb-4 text-sm text-zinc-400">
        {questions.length} shuffled questions from the {domainName} question bank
      </p>
      <QuizEngine
        certId={certId}
        topic={reviewTopic}
        questions={questions}
        progressKey={domainReviewKey(certId, domainId)}
        doneHref={`/cert/${certId}`}
        activityLabel={`${domainName} domain review`}
      />
    </div>
  );
}
