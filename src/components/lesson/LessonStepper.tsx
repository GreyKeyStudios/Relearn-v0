"use client";

import { useEffect, useMemo, useState } from "react";
import type { QuizQuestion } from "@/content/types";
import {
  buildLessonSteps,
  lessonProgressStorageKey,
  type LessonStep,
} from "@/lib/lesson-steps";
import { LessonCheckpoint } from "@/components/lesson/LessonCheckpoint";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Card } from "@/components/ui/Card";
import { BookOpen } from "lucide-react";

interface LessonStepperProps {
  certId: string;
  topicId: string;
  title: string;
  content: string;
  /** Pool for inline checkpoints — bank questions preferred so graded quiz stays fresh. */
  checkpointPool: QuizQuestion[];
  onComplete: () => void;
}

type Phase = "reading" | "checkpoint" | "done";

export function LessonStepper({
  certId,
  topicId,
  title,
  content,
  checkpointPool,
  onComplete,
}: LessonStepperProps) {
  const storageKey = lessonProgressStorageKey(certId, topicId);
  const steps = useMemo(
    () => buildLessonSteps(content, checkpointPool),
    [content, checkpointPool]
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

  const current: LessonStep | undefined = steps[stepIndex];
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
    if (current?.checkpoint) {
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

  const paragraphs = current.content.split("\n\n").filter(Boolean);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="mb-2 flex items-center justify-between text-xs text-zinc-500">
          <span className="flex items-center gap-1.5 font-medium text-zinc-400">
            <BookOpen className="h-3.5 w-3.5" />
            {title}
          </span>
          <span>
            Part {stepIndex + 1} of {steps.length}
          </span>
        </div>
        <ProgressBar value={progress} />
      </div>

      {phase === "reading" && (
        <>
          <Card className="p-4">
            <div className="flex flex-col gap-4 text-base leading-relaxed text-zinc-300">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Card>
          <Button className="w-full" onClick={handleReadingContinue}>
            {current.checkpoint ? "Check my understanding" : "Continue"}
          </Button>
        </>
      )}

      {phase === "checkpoint" && current.checkpoint && (
        <LessonCheckpoint
          key={`${current.id}-${stepIndex}`}
          question={current.checkpoint}
          stepNumber={stepIndex + 1}
          onContinue={advanceStep}
        />
      )}
    </div>
  );
}
