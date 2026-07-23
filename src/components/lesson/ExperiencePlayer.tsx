"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ExperienceAnchorType, ExperienceScreen, ExperienceTerm, QuizQuestion } from "@/content/types";
import { lessonProgressStorageKey } from "@/lib/lesson-steps";
import { LessonCheckpoint } from "@/components/lesson/LessonCheckpoint";
import { GitWorkflowDiagram } from "@/components/lesson/GitWorkflowDiagram";
import { PowerShellShellDiagram } from "@/components/lesson/PowerShellShellDiagram";
import { SynthesisSignalPathDiagram } from "@/components/lesson/SynthesisSignalPathDiagram";
import { OsiStackDiagram } from "@/components/lesson/OsiStackDiagram";
import { TcpIpStackDiagram } from "@/components/lesson/TcpIpStackDiagram";
import { StudyTipCard } from "@/components/lesson/StudyTipCard";
import { ExperienceMedia } from "@/components/lesson/ExperienceMedia";
import { SubnetBlockTableStrip } from "@/components/lesson/SubnetBlockTableStrip";
import { LaterLearnBlock } from "@/components/lesson/LaterLearnBlock";
import { TermChipList, TermPopover } from "@/components/lesson/TermPopover";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Card } from "@/components/ui/Card";
import { BookOpen, ChevronLeft } from "lucide-react";

interface ExperiencePlayerProps {
  certId: string;
  topicId: string;
  title: string;
  screens: ExperienceScreen[];
  anchorType: ExperienceAnchorType;
  checkpointPool: QuizQuestion[];
  onComplete: () => void;
}

const SWIPE_THRESHOLD = 48;

export function ExperiencePlayer({
  certId,
  topicId,
  title,
  screens,
  anchorType,
  checkpointPool,
  onComplete,
}: ExperiencePlayerProps) {
  const storageKey = lessonProgressStorageKey(certId, topicId);
  const questionsById = useMemo(
    () => new Map(checkpointPool.map((q) => [q.id, q])),
    [checkpointPool]
  );

  const [screenIndex, setScreenIndex] = useState(0);
  const [hydrated, setHydrated] = useState(false);
  const [slideDir, setSlideDir] = useState<"left" | "right">("left");
  const [activeTerm, setActiveTerm] = useState<ExperienceTerm | null>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(storageKey);
      if (raw) {
        const saved = JSON.parse(raw) as { screenIndex: number };
        if (saved.screenIndex >= 0 && saved.screenIndex < screens.length) {
          setScreenIndex(saved.screenIndex);
        }
      }
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, [storageKey, screens.length]);

  useEffect(() => {
    if (!hydrated) return;
    sessionStorage.setItem(storageKey, JSON.stringify({ screenIndex }));
  }, [hydrated, storageKey, screenIndex]);

  const current = screens[screenIndex];
  const progress = ((screenIndex + 1) / screens.length) * 100;

  const checkpointQuestions = useMemo(() => {
    if (!current) return [];
    const ids =
      current.checkpointQuestionIds ??
      (current.checkpointQuestionId ? [current.checkpointQuestionId] : []);
    return ids
      .map((id) => questionsById.get(id))
      .filter((q): q is QuizQuestion => q != null);
  }, [current, questionsById]);

  const isCheckpoint =
    current?.type === "checkpoint" || checkpointQuestions.length > 0;

  const highlightLayer =
    current?.showFullStack === true
      ? undefined
      : anchorType === "tcp-ip-stack"
        ? current?.tcpLayer ?? undefined
        : anchorType === "osi-stack"
          ? current?.osiLayer ?? undefined
          : undefined;

  const gitWorkflowStep =
    anchorType === "git-workflow" ? current?.gitWorkflowStep : undefined;

  const powershellShellStep =
    anchorType === "powershell-shell" ? current?.powershellShellStep : undefined;

  const synthesisSignalPathStage =
    anchorType === "synthesis-signal-path"
      ? current?.synthesisSignalPathStage
      : undefined;

  const subnetHighlightPrefix = useMemo(() => {
    if (topicId !== "subnetting") return undefined;
    const media = current?.media;
    if (!media) return undefined;
    if (media.kind === "subnet-pie") return media.prefix ?? 24;
    if (media.kind === "block-finder") return media.prefix;
    return undefined;
  }, [topicId, current?.media]);

  const advance = useCallback(() => {
    if (screenIndex < screens.length - 1) {
      setSlideDir("left");
      setScreenIndex((i) => i + 1);
    } else {
      sessionStorage.removeItem(storageKey);
      onComplete();
    }
  }, [screenIndex, screens.length, storageKey, onComplete]);

  const goBack = useCallback(() => {
    if (screenIndex > 0) {
      setSlideDir("right");
      setScreenIndex((i) => i - 1);
    }
  }, [screenIndex]);

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta < -SWIPE_THRESHOLD) {
      if (!isCheckpoint || checkpointQuestions.length > 0) advance();
    } else if (delta > SWIPE_THRESHOLD) {
      goBack();
    }
    touchStartX.current = null;
  }

  if (!hydrated || !current) {
    return <p className="text-sm text-zinc-500">Loading lesson…</p>;
  }

  return (
    <div className="flex flex-col gap-3">
      <div>
        <div className="mb-2 flex items-center justify-between text-xs text-zinc-500">
          <span className="flex items-center gap-1.5 font-medium text-zinc-400">
            <BookOpen className="h-3.5 w-3.5" />
            {title}
          </span>
          <span>
            Card {screenIndex + 1} of {screens.length}
          </span>
        </div>
        <ProgressBar value={progress} />
      </div>

      {anchorType === "osi-stack" && (
        <div
          className={
            isCheckpoint
              ? "pointer-events-none select-none opacity-25 blur-[2px] transition-opacity"
              : undefined
          }
          aria-hidden={isCheckpoint}
        >
          <OsiStackDiagram highlightLayer={highlightLayer} compact />
        </div>
      )}
      {anchorType === "tcp-ip-stack" && (
        <div
          className={
            isCheckpoint
              ? "pointer-events-none select-none opacity-25 blur-[2px] transition-opacity"
              : undefined
          }
          aria-hidden={isCheckpoint}
        >
          <TcpIpStackDiagram highlightLayer={highlightLayer} compact />
        </div>
      )}
      {anchorType === "git-workflow" && (
        <div className="shrink-0">
          <GitWorkflowDiagram highlightStep={gitWorkflowStep} compact />
        </div>
      )}
      {anchorType === "powershell-shell" && (
        <div className="shrink-0">
          <PowerShellShellDiagram highlightStep={powershellShellStep} compact />
        </div>
      )}
      {anchorType === "synthesis-signal-path" && (
        <div className="shrink-0">
          <SynthesisSignalPathDiagram
            highlightStage={synthesisSignalPathStage}
            compact
          />
        </div>
      )}

      {topicId === "subnetting" && (
        <div
          className={
            isCheckpoint
              ? "pointer-events-none select-none opacity-25 blur-[2px] transition-opacity"
              : undefined
          }
          aria-hidden={isCheckpoint}
        >
          <SubnetBlockTableStrip highlightPrefix={subnetHighlightPrefix} />
        </div>
      )}

      <div
        className="flex min-h-0 flex-1 flex-col touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {isCheckpoint && checkpointQuestions.length > 0 ? (
          <LessonCheckpoint
            key={`${current.id}-${screenIndex}`}
            questions={checkpointQuestions}
            stepNumber={screenIndex + 1}
            onContinue={advance}
          />
        ) : (
          <Card
            key={current.id}
            className={`flex flex-col p-4 ${
              slideDir === "left" ? "experience-enter" : "experience-enter-back"
            }`}
          >
            <h3 className="text-lg font-semibold leading-snug text-zinc-100">
              {current.headline}
            </h3>
            {current.body && (
              <div className="mt-2 space-y-2">
                {current.body.split(/\n\n+/).map((para, i) => (
                  <p key={i} className="text-base leading-relaxed text-zinc-300">
                    {para}
                  </p>
                ))}
              </div>
            )}
            {current.terms && current.terms.length > 0 && (
              <TermChipList terms={current.terms} onSelect={setActiveTerm} />
            )}
            {current.media && (
              <div className="mt-3">
                <ExperienceMedia media={current.media} />
              </div>
            )}
            {current.laterLearn && current.laterLearn.length > 0 && (
              <LaterLearnBlock items={current.laterLearn} />
            )}
            {current.studyTip && (
              <div className="mt-4">
                <StudyTipCard tip={current.studyTip} />
              </div>
            )}
            <Button className="mt-4 w-full" onClick={advance}>
              Continue
            </Button>
          </Card>
        )}
      </div>

      <div className="flex items-center justify-between gap-2">
        <Button
          variant="ghost"
          disabled={screenIndex === 0}
          onClick={goBack}
          className="min-h-10 px-2 text-sm text-zinc-500"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back
        </Button>
        <p className="text-center text-[10px] text-zinc-600">Swipe left or tap Continue</p>
      </div>

      {activeTerm && (
        <TermPopover
          term={activeTerm}
          open={!!activeTerm}
          onClose={() => setActiveTerm(null)}
        />
      )}
    </div>
  );
}
