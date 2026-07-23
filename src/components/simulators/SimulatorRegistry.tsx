"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import {
  buildSimulatorResult,
  gradeChoice,
  gradeOrder,
  pickDrillItems,
  shuffle,
} from "@/lib/simulator-scoring";
import type { SimulatorResult } from "@/types/simulator";

export interface ChoiceDrillItem {
  id: string;
  prompt: string;
  choices: { id: string; text: string }[];
  correctChoiceId: string;
  weakConcept: string;
  explanation?: string;
}

export interface OrderDrillItem {
  id: string;
  prompt: string;
  items: string[];
  weakConcept: string;
  explanation?: string;
}

interface DrillRunnerProps {
  onComplete: (result: SimulatorResult) => void;
  minItems?: number;
  maxItems?: number;
}

interface ChoiceDrillRunnerProps extends DrillRunnerProps {
  pool: ChoiceDrillItem[];
}

interface OrderDrillRunnerProps extends DrillRunnerProps {
  pool: OrderDrillItem[];
}

/** Multiple-choice drill session — 5–10 randomized items */
export function ChoiceDrillRunner({
  pool,
  onComplete,
  minItems = 5,
  maxItems = 8,
}: ChoiceDrillRunnerProps) {
  const sessionItems = useMemo(
    () => pickDrillItems(pool, minItems, maxItems),
    [pool, minItems, maxItems]
  );

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [weakConcepts, setWeakConcepts] = useState<string[]>([]);

  const current = sessionItems[index];
  const progress = ((index + (showResult ? 1 : 0)) / sessionItems.length) * 100;

  function handleNext() {
    if (!selected) return;

    if (!showResult) {
      const grade = gradeChoice(selected, current.correctChoiceId, current.weakConcept);
      if (grade.correct) {
        setScore((s) => s + 1);
      } else if (grade.weakConcept) {
        setWeakConcepts((w) => [...w, grade.weakConcept!]);
      }
      setShowResult(true);
      return;
    }

    if (index < sessionItems.length - 1) {
      setIndex((i) => i + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      onComplete(buildSimulatorResult(score, sessionItems.length, weakConcepts));
    }
  }

  return (
    <DrillFrame
      progress={progress}
      label={`Question ${index + 1} of ${sessionItems.length}`}
      prompt={current.prompt}
      actionLabel={
        showResult
          ? index < sessionItems.length - 1
            ? "Next"
            : "Finish"
          : "Check Answer"
      }
      actionDisabled={!selected}
      onAction={handleNext}
    >
      <div className="flex flex-col gap-2">
        {current.choices.map((choice) => {
          const isSelected = selected === choice.id;
          const isCorrect = choice.id === current.correctChoiceId;
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
              onClick={() => setSelected(choice.id)}
              className={`min-h-12 rounded-xl border p-4 text-left text-sm transition-colors ${style}`}
            >
              {choice.text}
            </button>
          );
        })}
      </div>
      {showResult && current.explanation && (
        <div className="rounded-xl border border-zinc-700 bg-zinc-800/50 p-4">
          <p className="text-xs font-medium text-sky-400">Explanation</p>
          <p className="mt-1 text-sm text-zinc-300">{current.explanation}</p>
        </div>
      )}
    </DrillFrame>
  );
}

/** Tap-to-order drill — touch-friendly reordering without drag libraries */
export function OrderDrillRunner({
  pool,
  onComplete,
  minItems = 5,
  maxItems = 7,
}: OrderDrillRunnerProps) {
  const sessionItems = useMemo(
    () => pickDrillItems(pool, minItems, maxItems),
    [pool, minItems, maxItems]
  );

  const [index, setIndex] = useState(0);
  const [ordered, setOrdered] = useState<string[]>([]);
  const [remaining, setRemaining] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [weakConcepts, setWeakConcepts] = useState<string[]>([]);

  const current = sessionItems[index];
  const progress = ((index + (showResult ? 1 : 0)) / sessionItems.length) * 100;

  useEffect(() => {
    setRemaining(shuffle(sessionItems[index].items));
    setOrdered([]);
    setShowResult(false);
  }, [index, sessionItems]);

  function handlePick(item: string) {
    if (showResult) return;
    setOrdered((prev) => [...prev, item]);
    setRemaining((prev) => prev.filter((r) => r !== item));
  }

  function handleUndo() {
    if (showResult || ordered.length === 0) return;
    const last = ordered[ordered.length - 1];
    setOrdered((prev) => prev.slice(0, -1));
    setRemaining((prev) => [...prev, last]);
  }

  function handleCheck() {
    const grade = gradeOrder(ordered, current.items, current.weakConcept);
    if (grade.correct) {
      setScore((s) => s + 1);
    } else if (grade.weakConcept) {
      setWeakConcepts((w) => [...w, grade.weakConcept!]);
    }
    setShowResult(true);
  }

  function handleNext() {
    if (index < sessionItems.length - 1) {
      setIndex((i) => i + 1);
    } else {
      onComplete(buildSimulatorResult(score, sessionItems.length, weakConcepts));
    }
  }

  const canCheck = ordered.length === current.items.length && !showResult;
  const isFullyCorrect =
    showResult && ordered.every((item, i) => item === current.items[i]);
  const wrongCount = showResult
    ? ordered.filter((item, i) => item !== current.items[i]).length
    : 0;

  return (
    <DrillFrame
      progress={progress}
      label={`Item ${index + 1} of ${sessionItems.length}`}
      prompt={current.prompt}
      actionLabel={showResult ? (index < sessionItems.length - 1 ? "Next" : "Finish") : "Check Order"}
      actionDisabled={!canCheck && !showResult}
      onAction={showResult ? handleNext : handleCheck}
      secondaryAction={
        !showResult && ordered.length > 0
          ? { label: "Undo last", onClick: handleUndo }
          : undefined
      }
    >
      <div>
        <p className="mb-2 text-xs font-medium text-zinc-500">Your order (top → bottom)</p>
        <div className="mb-4 flex min-h-24 flex-col gap-2 rounded-xl border border-dashed border-zinc-700 p-3">
          {ordered.length === 0 ? (
            <p className="text-sm text-zinc-500">Tap items below to build the order</p>
          ) : (
            ordered.map((item, i) => {
              let style = "border-zinc-700 bg-zinc-900";
              if (showResult) {
                if (item === current.items[i]) {
                  style = "border-emerald-500 bg-emerald-500/10";
                } else {
                  style = "border-red-500 bg-red-500/10";
                }
              } else {
                style = "border-emerald-500/30 bg-emerald-500/10";
              }
              return (
                <div
                  key={`${item}-${i}`}
                  className={`rounded-lg border px-3 py-2 text-sm text-zinc-100 ${style}`}
                >
                  {i + 1}. {item}
                  {showResult && item !== current.items[i] && (
                    <span className="ml-2 text-xs text-red-400">✗</span>
                  )}
                  {showResult && item === current.items[i] && (
                    <span className="ml-2 text-xs text-emerald-400">✓</span>
                  )}
                </div>
              );
            })
          )}
        </div>
        {!showResult && (
          <>
            <p className="mb-2 text-xs font-medium text-zinc-500">Available items</p>
            <div className="flex flex-col gap-2">
              {remaining.map((item) => (
                <button
                  key={item}
                  type="button"
                  disabled={showResult}
                  onClick={() => handlePick(item)}
                  className="min-h-12 rounded-xl border border-zinc-700 bg-zinc-900 p-3 text-left text-sm hover:border-zinc-600 disabled:opacity-50"
                >
                  {item}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
      {showResult && (
        <div
          className={`rounded-xl border p-4 ${
            isFullyCorrect
              ? "border-emerald-800/50 bg-emerald-950/30"
              : "border-amber-800/50 bg-amber-950/25"
          }`}
        >
          <p
            className={`text-sm font-semibold ${
              isFullyCorrect ? "text-emerald-400" : "text-amber-400"
            }`}
          >
            {isFullyCorrect
              ? "Correct — nice work."
              : `Not quite — ${wrongCount} of ${ordered.length} out of place.`}
          </p>
          {!isFullyCorrect && (
            <>
              <p className="mt-2 text-xs font-medium text-sky-400">Correct order:</p>
              <ol className="mt-1 list-inside list-decimal space-y-1 text-sm text-zinc-300">
                {current.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </>
          )}
          {current.explanation && (
            <p className="mt-2 text-sm text-zinc-400">{current.explanation}</p>
          )}
        </div>
      )}
    </DrillFrame>
  );
}

interface DrillFrameProps {
  progress: number;
  label: string;
  prompt: string;
  children: React.ReactNode;
  actionLabel: string;
  actionDisabled?: boolean;
  onAction: () => void;
  secondaryAction?: { label: string; onClick: () => void };
}

function DrillFrame({
  progress,
  label,
  prompt,
  children,
  actionLabel,
  actionDisabled,
  onAction,
  secondaryAction,
}: DrillFrameProps) {
  return (
    <div className="flex flex-col gap-4">
      <ProgressBar value={progress} />
      <Card className="p-4">
        <p className="mb-2 text-xs text-zinc-500">{label}</p>
        <h3 className="mb-4 text-base font-medium text-zinc-100">{prompt}</h3>
        <div className="flex flex-col gap-4">{children}</div>
      </Card>
      <div className="flex flex-col gap-2">
        <Button onClick={onAction} disabled={actionDisabled} className="w-full">
          {actionLabel}
        </Button>
        {secondaryAction && (
          <Button variant="ghost" onClick={secondaryAction.onClick} className="w-full">
            {secondaryAction.label}
          </Button>
        )}
      </div>
    </div>
  );
}
