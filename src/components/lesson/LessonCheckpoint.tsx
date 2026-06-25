"use client";

import { useState } from "react";
import type { QuizQuestion } from "@/content/types";
import { QuestionCard } from "@/components/quiz/QuestionCard";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ClipboardCheck } from "lucide-react";

interface LessonCheckpointProps {
  question: QuizQuestion;
  stepNumber: number;
  onContinue: () => void;
}

export function LessonCheckpoint({
  question,
  stepNumber,
  onContinue,
}: LessonCheckpointProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const isCorrect = selected === question.correctChoiceId;

  function handleCheck() {
    if (!selected) return;
    setShowResult(true);
  }

  return (
    <Card className="border-sky-900/50 bg-sky-950/20 p-4">
      <div className="mb-3 flex items-center gap-2 text-sky-400">
        <ClipboardCheck className="h-4 w-4" />
        <span className="text-xs font-semibold uppercase tracking-wide">
          Checkpoint {stepNumber}
        </span>
      </div>
      <QuestionCard
        question={question}
        questionNumber={stepNumber}
        totalQuestions={stepNumber}
        selectedChoiceId={selected}
        onSelect={setSelected}
        showResult={showResult}
      />
      {!showResult ? (
        <Button
          className="mt-4 w-full"
          disabled={!selected}
          onClick={handleCheck}
        >
          Check answer
        </Button>
      ) : (
        <div className="mt-4 flex flex-col gap-2">
          <p
            className={`text-center text-sm font-medium ${isCorrect ? "text-emerald-400" : "text-amber-400"}`}
          >
            {isCorrect ? "Nice — keep going." : "Review the explanation, then continue."}
          </p>
          <Button className="w-full" onClick={onContinue}>
            Continue
          </Button>
        </div>
      )}
    </Card>
  );
}
