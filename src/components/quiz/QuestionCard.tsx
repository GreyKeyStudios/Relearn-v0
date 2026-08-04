"use client";

import type { QuizQuestion } from "@/content/types";
import { getCcnaV20RemediationCopy } from "@/content/certifications/ccna/v20-remediation-copy";

interface QuestionCardProps {
  question: QuizQuestion;
  questionNumber: number;
  totalQuestions: number;
  selectedChoiceId: string | null;
  onSelect: (choiceId: string) => void;
  showResult?: boolean;
}

export function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedChoiceId,
  onSelect,
  showResult = false,
}: QuestionCardProps) {
  const misconceptionHit =
    showResult &&
    selectedChoiceId != null &&
    selectedChoiceId !== question.correctChoiceId &&
    (question.misconceptionChoiceIds?.includes(selectedChoiceId) ?? false);
  const remediation = misconceptionHit
    ? getCcnaV20RemediationCopy(question.remediationActivityId)
    : undefined;

  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs text-zinc-500">
        Question {questionNumber} of {totalQuestions}
      </p>
      <h2 className="text-lg font-medium text-zinc-100">{question.prompt}</h2>
      <div className="flex flex-col gap-2">
        {question.choices.map((choice) => {
          const isSelected = selectedChoiceId === choice.id;
          const isCorrect = choice.id === question.correctChoiceId;
          let style = "border-zinc-700 bg-zinc-900 hover:border-zinc-600";
          if (showResult) {
            if (isCorrect) style = "border-emerald-500 bg-emerald-500/10";
            else if (isSelected && !isCorrect) style = "border-red-500 bg-red-500/10";
          } else if (isSelected) {
            style = "border-emerald-500 bg-emerald-500/10";
          }

          return (
            <button
              key={choice.id}
              type="button"
              disabled={showResult}
              onClick={() => onSelect(choice.id)}
              className={`min-h-12 rounded-xl border p-4 text-left text-sm transition-colors ${style}`}
            >
              {choice.text}
            </button>
          );
        })}
      </div>
      {showResult && (
        <div className="rounded-xl border border-zinc-700 bg-zinc-800/50 p-4">
          <p className="text-xs font-medium text-sky-400">Explanation</p>
          <p className="mt-1 text-sm text-zinc-300">{question.explanation}</p>
          {remediation && (
            <div
              className="mt-3 rounded-lg border border-amber-500/30 bg-amber-500/10 p-3"
              data-testid="diagnostic-remediation"
              data-remediation-id={question.remediationActivityId}
            >
              <p className="text-xs font-medium text-amber-300">
                Misconception remediation — {remediation.title}
              </p>
              <p className="mt-1 text-sm text-zinc-300">{remediation.body}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
