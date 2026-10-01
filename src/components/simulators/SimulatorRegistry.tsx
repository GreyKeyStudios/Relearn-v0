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

/**
 * One clickable area of a hotspot diagram.
 *
 * `d` is SVG path data in the item's own viewBox space, so any shape works
 * without the pool needing a bitmap. Diagrams are authored as data rather than
 * sourced as photographs: no licensing, no asset pipeline, crisp at any size,
 * and they inherit the theme.
 */
export interface HotspotRegion {
  id: string;
  /** The real name, revealed only after the learner answers. */
  label: string;
  /** SVG path data, e.g. "M40 40H300V240H40Z". */
  d: string;
  /**
   * Neutral, position-based description for keyboard and screen-reader users
   * — "large square socket near the top left", never "CPU". Naming the part
   * here would hand over the answer.
   */
  ariaLabel?: string;
}

export interface HotspotDrillItem {
  id: string;
  prompt: string;
  /** e.g. "0 0 400 300" — all region paths are in this coordinate space. */
  viewBox: string;
  /** Non-interactive shapes drawn beneath the regions, for context. */
  backdrop?: { d: string }[];
  regions: HotspotRegion[];
  correctRegionId: string;
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

interface HotspotDrillRunnerProps extends DrillRunnerProps {
  pool: HotspotDrillItem[];
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
          let style = "border-hairline bg-surface hover:border-border";
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
              onClick={() => setSelected(choice.id)}
              className={`min-h-12 rounded-xl border p-4 text-left text-sm transition-colors ${style}`}
            >
              {choice.text}
            </button>
          );
        })}
      </div>
      {showResult && current.explanation && (
        <div className="rounded-xl border border-hairline bg-muted p-4">
          <p className="text-xs font-medium text-primary">Explanation</p>
          <p className="mt-1 text-sm text-muted-foreground">{current.explanation}</p>
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
        <p className="mb-2 text-xs font-medium text-faint">Your order (top → bottom)</p>
        <div className="mb-4 flex min-h-24 flex-col gap-2 rounded-xl border border-dashed border-hairline p-3">
          {ordered.length === 0 ? (
            <p className="text-sm text-faint">Tap items below to build the order</p>
          ) : (
            ordered.map((item, i) => {
              let style = "border-hairline bg-surface";
              if (showResult) {
                if (item === current.items[i]) {
                  style = "border-accent bg-accent/10";
                } else {
                  style = "border-risk bg-risk/10";
                }
              } else {
                style = "border-accent/30 bg-accent/10";
              }
              return (
                <div
                  key={`${item}-${i}`}
                  className={`rounded-lg border px-3 py-2 text-sm text-foreground ${style}`}
                >
                  {i + 1}. {item}
                  {showResult && item !== current.items[i] && (
                    <span className="ml-2 text-xs text-risk">✗</span>
                  )}
                  {showResult && item === current.items[i] && (
                    <span className="ml-2 text-xs text-accent">✓</span>
                  )}
                </div>
              );
            })
          )}
        </div>
        {!showResult && (
          <>
            <p className="mb-2 text-xs font-medium text-faint">Available items</p>
            <div className="flex flex-col gap-2">
              {remaining.map((item) => (
                <button
                  key={item}
                  type="button"
                  disabled={showResult}
                  onClick={() => handlePick(item)}
                  className="min-h-12 rounded-xl border border-hairline bg-surface p-3 text-left text-sm hover:border-border disabled:opacity-50"
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
              ? "border-accent/40 bg-accent/10"
              : "border-primary/40 bg-primary/10"
          }`}
        >
          <p
            className={`text-sm font-semibold ${
              isFullyCorrect ? "text-accent" : "text-primary"
            }`}
          >
            {isFullyCorrect
              ? "Correct — nice work."
              : `Not quite — ${wrongCount} of ${ordered.length} out of place.`}
          </p>
          {!isFullyCorrect && (
            <>
              <p className="mt-2 text-xs font-medium text-primary">Correct order:</p>
              <ol className="mt-1 list-inside list-decimal space-y-1 text-sm text-muted-foreground">
                {current.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </>
          )}
          {current.explanation && (
            <p className="mt-2 text-sm text-muted-foreground">{current.explanation}</p>
          )}
        </div>
      )}
    </DrillFrame>
  );
}

/**
 * Spatial-identification drill — "click the part". The learner points at the
 * thing before anything names it, which is the `experience` half of BLS-4
 * (examples before definitions) applied to hardware.
 *
 * Serves ~14 A+/Computer Fundamentals topics on its own, and the settings-panel
 * topics too: clicking a CPU socket and clicking a Windows setting are the same
 * interaction over a different diagram.
 */
export function HotspotDrillRunner({
  pool,
  onComplete,
  minItems = 5,
  maxItems = 8,
}: HotspotDrillRunnerProps) {
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
  const correctRegion = current.regions.find((r) => r.id === current.correctRegionId);

  function handleNext() {
    if (!selected) return;

    if (!showResult) {
      const grade = gradeChoice(selected, current.correctRegionId, current.weakConcept);
      if (grade.correct) setScore((s) => s + 1);
      else if (grade.weakConcept) setWeakConcepts((w) => [...w, grade.weakConcept!]);
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
      label={`Diagram ${index + 1} of ${sessionItems.length}`}
      prompt={current.prompt}
      actionLabel={
        showResult ? (index < sessionItems.length - 1 ? "Next" : "Finish") : "Check Answer"
      }
      actionDisabled={!selected}
      onAction={handleNext}
    >
      <svg
        viewBox={current.viewBox}
        role="group"
        aria-label="Diagram — select a region"
        className="w-full rounded-xl border border-hairline bg-background/40"
      >
        {current.backdrop?.map((shape, i) => (
          <path key={i} d={shape.d} className="fill-muted stroke-hairline" strokeWidth={2} />
        ))}
        {current.regions.map((region) => {
          const isSelected = selected === region.id;
          const isCorrect = region.id === current.correctRegionId;
          let className = "fill-surface-raised stroke-faint hover:fill-muted";
          if (showResult) {
            if (isCorrect) className = "fill-accent/25 stroke-accent";
            else if (isSelected) className = "fill-[var(--risk)]/25 stroke-[var(--risk)]";
          } else if (isSelected) {
            className = "fill-primary/25 stroke-primary";
          }
          return (
            <path
              key={region.id}
              d={region.d}
              role="button"
              tabIndex={showResult ? -1 : 0}
              aria-label={region.ariaLabel ?? `Region ${region.id}`}
              aria-pressed={isSelected}
              onClick={() => !showResult && setSelected(region.id)}
              onKeyDown={(event) => {
                if (showResult) return;
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setSelected(region.id);
                }
              }}
              strokeWidth={2}
              className={`cursor-pointer outline-none transition-colors focus-visible:stroke-primary focus-visible:[stroke-width:4] ${className}`}
            />
          );
        })}
      </svg>

      {showResult && (
        <div
          className={`rounded-xl p-3 text-sm ${
            selected === current.correctRegionId
              ? "bg-accent/10 text-foreground"
              : "bg-muted text-muted-foreground"
          }`}
          aria-live="polite"
        >
          <p className="font-medium text-foreground">
            {selected === current.correctRegionId
              ? `Correct — that is the ${correctRegion?.label}.`
              : `Not quite. The highlighted region is the ${correctRegion?.label}.`}
          </p>
          {current.explanation && <p className="mt-1">{current.explanation}</p>}
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
        <p className="mb-2 text-xs text-faint">{label}</p>
        <h3 className="mb-4 text-base font-medium text-foreground">{prompt}</h3>
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
