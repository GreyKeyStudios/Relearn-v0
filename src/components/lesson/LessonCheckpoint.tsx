"use client";

import { useState } from "react";
import type { QuizQuestion } from "@/content/types";
import { QuestionCard } from "@/components/quiz/QuestionCard";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ClipboardCheck } from "lucide-react";

interface LessonCheckpointProps {
  questions: QuizQuestion[];
  stepNumber: number;
  onContinue: () => void;
}

export function LessonCheckpoint({
  questions,
  stepNumber,
  onContinue,
}: LessonCheckpointProps) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const question = questions[questionIndex];
  if (!question) return null;

  const isCorrect = selected === question.correctChoiceId;
  const isMulti = questions.length > 1;
  const isLastQuestion = questionIndex >= questions.length - 1;

  function handleCheck() {
    if (!selected) return;
    setShowResult(true);
  }

  function handleContinue() {
    if (!isLastQuestion) {
      setQuestionIndex((i) => i + 1);
      setSelected(null);
      setShowResult(false);
      return;
    }
    onContinue();
  }

  return (
    <Card className="border-sky-900/50 bg-sky-950/20 p-4">
      <div className="mb-3 flex items-center gap-2 text-sky-400">
        <ClipboardCheck className="h-4 w-4" />
        <span className="text-xs font-semibold uppercase tracking-wide">
          Checkpoint {stepNumber}
          {isMulti ? ` · Question ${questionIndex + 1} of ${questions.length}` : ""}
        </span>
      </div>
      <QuestionCard
        question={question}
        questionNumber={questionIndex + 1}
        totalQuestions={questions.length}
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
          <Button className="w-full" onClick={handleContinue}>
            {isLastQuestion ? "Continue" : "Next question"}
          </Button>
        </div>
      )}
    </Card>
  );
}
