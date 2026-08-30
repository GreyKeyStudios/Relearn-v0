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
      <p className="eyebrow">
        Question {questionNumber} of {totalQuestions}
      </p>
      <h2 className="text-balance font-serif text-2xl font-medium leading-snug text-foreground">{question.prompt}</h2>
      <div className="flex flex-col gap-2">
        {question.choices.map((choice) => {
          const isSelected = selectedChoiceId === choice.id;
          const isCorrect = choice.id === question.correctChoiceId;
          let style = "border-border bg-surface hover:border-primary/40 hover:bg-surface-raised";
          if (showResult) {
            if (isCorrect) style = "border-accent bg-accent/10";
            else if (isSelected && !isCorrect) style = "border-risk bg-risk/10";
          } else if (isSelected) {
            style = "border-accent bg-accent/10";
          }

          return (
            <button
              key={choice.id}
              type="button"
              disabled={showResult}
              onClick={() => onSelect(choice.id)}
              className={`relearn-card min-h-12 rounded-[var(--radius)] border p-4 text-left text-sm text-foreground transition-colors ${style}`}
            >
              {choice.text}
            </button>
          );
        })}
      </div>
      {showResult && (
        <div className="rounded-[var(--radius)] border border-accent/25 bg-accent/5 p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">Explanation</p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{question.explanation}</p>
          {remediation && (
            <div
              className="mt-3 rounded-lg border border-primary/30 bg-primary/10 p-3"
              data-testid="diagnostic-remediation"
              data-remediation-id={question.remediationActivityId}
            >
              <p className="text-xs font-medium text-[#8a631c]">
                Misconception remediation — {remediation.title}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{remediation.body}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
