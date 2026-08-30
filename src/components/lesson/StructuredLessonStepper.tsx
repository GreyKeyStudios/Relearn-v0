"use client";

import { useEffect, useMemo, useState } from "react";
import type { LessonStepDef, QuizQuestion } from "@/content/types";
import { lessonProgressStorageKey } from "@/lib/lesson-steps";
import { LessonCheckpoint } from "@/components/lesson/LessonCheckpoint";
import { OsiStackDiagram } from "@/components/lesson/OsiStackDiagram";
import { StudyTipCard } from "@/components/lesson/StudyTipCard";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Card } from "@/components/ui/Card";
import { BookOpen } from "lucide-react";

interface StructuredLessonStepperProps {
  certId: string;
  topicId: string;
  title: string;
  steps: LessonStepDef[];
  checkpointPool: QuizQuestion[];
  lessonVisual?: "osi-stack";
  onComplete: () => void;
}

type Phase = "reading" | "checkpoint" | "done";

export function StructuredLessonStepper({
  certId,
  topicId,
  title,
  steps,
  checkpointPool,
  lessonVisual,
  onComplete,
}: StructuredLessonStepperProps) {
  const storageKey = lessonProgressStorageKey(certId, topicId);
  const questionsById = useMemo(
    () => new Map(checkpointPool.map((q) => [q.id, q])),
    [checkpointPool]
  );

  const [stepIndex, setStepIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("reading");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(storageKey);
      if (raw) {
        const saved = JSON.parse(raw) as { stepIndex: number; phase: Phase };
        if (saved.stepIndex >= 0 && saved.stepIndex < steps.length) {
          setStepIndex(saved.stepIndex);
          setPhase(saved.phase === "checkpoint" ? "checkpoint" : "reading");
        }
      }
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, [storageKey, steps.length]);

  useEffect(() => {
    if (!hydrated) return;
    sessionStorage.setItem(
      storageKey,
      JSON.stringify({ stepIndex, phase: phase === "done" ? "reading" : phase })
    );
  }, [hydrated, storageKey, stepIndex, phase]);

  const current = steps[stepIndex];
  const checkpoint =
    current?.checkpointQuestionId != null
      ? questionsById.get(current.checkpointQuestionId) ?? null
      : null;
  const progress = ((stepIndex + (phase === "checkpoint" ? 0.5 : 0)) / steps.length) * 100;

  function advanceStep() {
    if (stepIndex < steps.length - 1) {
      setStepIndex((i) => i + 1);
      setPhase("reading");
    } else {
      sessionStorage.removeItem(storageKey);
      setPhase("done");
      onComplete();
    }
  }

  function handleReadingContinue() {
    if (checkpoint) {
      setPhase("checkpoint");
    } else {
      advanceStep();
    }
  }

  if (!hydrated || !current) {
    return <p className="text-sm text-zinc-500">Loading lesson…</p>;
  }

  if (phase === "done") {
    return null;
  }

  const paragraphs = current.body.split("\n\n").filter(Boolean);
  const showOsi =
    lessonVisual === "osi-stack" &&
    (current.osiLayer != null || current.showFullStack);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="mb-2 flex items-center justify-between text-xs text-zinc-500">
          <span className="flex items-center gap-1.5 font-medium text-zinc-400">
            <BookOpen className="h-3.5 w-3.5" />
            {title}
          </span>
          <span>
            Step {stepIndex + 1} of {steps.length}
          </span>
        </div>
        <ProgressBar value={progress} />
      </div>

      {phase === "reading" && (
        <>
          {showOsi && (
            <OsiStackDiagram
              highlightLayer={
                current.showFullStack ? undefined : current.osiLayer ?? undefined
              }
            />
          )}
          <Card className="p-5 sm:p-7">
            <h3 className="mb-4 font-serif text-2xl font-medium text-foreground">{current.title}</h3>
            <div className="flex flex-col gap-4 text-base leading-8 text-foreground">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            {current.studyTip && (
              <div className="mt-4">
                <StudyTipCard tip={current.studyTip} />
              </div>
            )}
          </Card>
          <Button className="w-full" onClick={handleReadingContinue}>
            {checkpoint ? "Check my understanding" : "Continue"}
          </Button>
        </>
      )}

      {phase === "checkpoint" && checkpoint && (
        <>
          {showOsi && (
            <OsiStackDiagram
              highlightLayer={
                current.showFullStack ? undefined : current.osiLayer ?? undefined
              }
            />
          )}
          <LessonCheckpoint
            key={`${current.id}-${stepIndex}`}
            questions={[checkpoint]}
            stepNumber={stepIndex + 1}
            onContinue={advanceStep}
          />
        </>
      )}
    </div>
  );
}
