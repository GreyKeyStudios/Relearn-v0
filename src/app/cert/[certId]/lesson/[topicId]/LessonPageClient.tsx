"use client";

import { PageHeader } from "@/components/layout/PageHeader";
import { LessonContent } from "@/components/lesson/LessonContent";
import { LessonStepper } from "@/components/lesson/LessonStepper";
import { StructuredLessonStepper } from "@/components/lesson/StructuredLessonStepper";
import { ExperiencePlayer } from "@/components/lesson/ExperiencePlayer";
import { KeyFactsList } from "@/components/lesson/KeyFactsList";
import { TopicDeepDive } from "@/components/lesson/TopicDeepDive";
import { TopicMetadataBar } from "@/components/lesson/TopicMetadataBar";
import { TopicPrerequisiteRefreshers } from "@/components/lesson/TopicPrerequisiteRefreshers";
import { TopicPracticeHub } from "@/components/topic/TopicPracticeHub";
import { TopicLightbulbMoment } from "@/components/lesson/TopicLightbulbMoment";
import { TopicCheatSheets } from "@/components/topic/TopicCheatSheets";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { TopicAssignments } from "@/components/assignments/TopicAssignments";
import { MasteryBadge } from "@/components/mastery/MasteryBadge";
import { ObjectiveMasteryList } from "@/components/mastery/ObjectiveMasteryList";
import type { Certification, Domain, Topic } from "@/content/types";
import { getTopicMastery } from "@/lib/mastery";
import { getObjectiveMasteryForTopic } from "@/lib/objective-mastery";
import { topicKey } from "@/lib/ids";
import { useProgressStore } from "@/stores/progress-store";
import { useStoreHydration } from "@/hooks/use-store-hydration";
import { CheckCircle2, RotateCcw } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { getNextTopicInPath } from "@/lib/curriculum";
import {
  clearLessonProgress,
} from "@/lib/lesson-steps";
import { TopicWhatsNext } from "@/components/topic/TopicWhatsNext";

interface LessonPageClientProps {
  certId: string;
  topicId: string;
  cert: Certification;
  domain: Domain;
  topic: Topic;
  prerequisiteNames: Record<string, string>;
}

export function LessonPageClient({
  certId,
  topicId,
  cert,
  domain,
  topic,
  prerequisiteNames,
}: LessonPageClientProps) {
  const key = topicKey(certId, topicId);
  const hydrated = useStoreHydration();
  const isComplete = useProgressStore((s) => !!s.completedLessons[key]);
  const isWeak = useProgressStore((s) => !!s.weakTopics[key]);
  const completeLesson = useProgressStore((s) => s.completeLesson);
  const storedMastery = useProgressStore((s) => s.topicMastery[key]);

  const usesStructuredDelivery =
    (topic.lesson.experience?.screens?.length ?? 0) > 0 ||
    (topic.lesson.steps?.length ?? 0) > 0;

  const handleLessonComplete = () => {
    setLessonUnlocked(true);
    if (!isComplete) {
      completeLesson(certId, topicId, topic.name);
    }
  };

  const mastery = useMemo(() => {
    if (storedMastery) return storedMastery;
    return getTopicMastery(useProgressStore.getState(), certId, topicId);
  }, [storedMastery, certId, topicId]);

  const objectiveEntries = useMemo(
    () =>
      getObjectiveMasteryForTopic(
        certId,
        topic,
        mastery.objectiveScores,
        mastery.objectiveAttempts ?? {}
      ),
    [certId, topic, mastery.objectiveScores, mastery.objectiveAttempts]
  );

  const [lessonUnlocked, setLessonUnlocked] = useState(false);
  const [lessonRunKey, setLessonRunKey] = useState(0);

  useEffect(() => {
    if (!hydrated || !isComplete) return;
    setLessonUnlocked(true);
  }, [hydrated, isComplete, certId, topicId]);

  const handleRedoLesson = useCallback(() => {
    clearLessonProgress(certId, topicId);
    setLessonRunKey((k) => k + 1);
    setLessonUnlocked(false);
  }, [certId, topicId]);
  const checkpointPool = useMemo(() => {
    // Quiz questions follow lesson progression; bank stays for graded drill.
    if (topic.quiz.length > 0) return topic.quiz;
    return topic.questionBank ?? [];
  }, [topic.quiz, topic.questionBank]);

  const showReferenceLesson = isComplete && lessonUnlocked && !usesStructuredDelivery;

  const nextTopic = useMemo(
    () => getNextTopicInPath(cert, topicId),
    [cert, topicId]
  );

  // Avoid mounting the lesson player/stepper before hydration.
  // Otherwise a completed lesson can look like it "restarts" on fresh load
  // until the store finishes hydrating and unlocks the after-lesson hub.
  if (!hydrated) {
    return (
      <div>
        <PageHeader
          title={topic.name}
          subtitle={`${cert.shortName} · ${domain.name}`}
          backHref={`/cert/${certId}`}
        />
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4 text-sm text-zinc-400">
          Loading your progress…
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        title={topic.name}
        subtitle={`${cert.shortName} · ${domain.name}`}
        backHref={`/cert/${certId}`}
      />

      <div className="mb-4 flex flex-wrap gap-2">
        <MasteryBadge level={mastery.level} score={mastery.score} showScore />
        {isComplete && (
          <Badge variant="success">
            <CheckCircle2 className="mr-1 inline h-3 w-3" />
            Complete
          </Badge>
        )}
        {isWeak && <Badge variant="warning">Weak area</Badge>}
      </div>

      <TopicMetadataBar
        certId={certId}
        topic={topic}
        prerequisiteNames={prerequisiteNames}
      />

      <TopicPrerequisiteRefreshers
        certId={certId}
        topicId={topicId}
        prerequisiteIds={topic.prerequisites ?? []}
        prerequisiteNames={prerequisiteNames}
      />

      <div className="mb-6">
        {!lessonUnlocked ? (
          topic.lesson.experience?.screens &&
          topic.lesson.experience.screens.length > 0 ? (
            <ExperiencePlayer
              key={lessonRunKey}
              certId={certId}
              topicId={topicId}
              title={topic.lesson.title}
              screens={topic.lesson.experience.screens}
              anchorType={topic.lesson.experience.anchor.type}
              checkpointPool={checkpointPool}
              onComplete={handleLessonComplete}
            />
          ) : topic.lesson.steps && topic.lesson.steps.length > 0 ? (
            <StructuredLessonStepper
              key={lessonRunKey}
              certId={certId}
              topicId={topicId}
              title={topic.lesson.title}
              steps={topic.lesson.steps}
              checkpointPool={checkpointPool}
              lessonVisual={topic.lesson.visual}
              onComplete={handleLessonComplete}
            />
          ) : (
            <LessonStepper
              key={lessonRunKey}
              certId={certId}
              topicId={topicId}
              title={topic.lesson.title}
              content={topic.lesson.content}
              checkpointPool={checkpointPool}
              lessonCheckpointIds={topic.lessonCheckpoints}
              onComplete={handleLessonComplete}
            />
          )
        ) : showReferenceLesson ? (
          <div>
            <div className="mb-3 flex justify-end">
              <Button variant="secondary" onClick={handleRedoLesson}>
                <RotateCcw className="mr-2 inline h-4 w-4" />
                Redo lesson
              </Button>
            </div>
            <LessonContent title={topic.lesson.title} content={topic.lesson.content} />
          </div>
        ) : (
          <Card className="mb-4 border-emerald-900/40 bg-emerald-950/20 p-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-emerald-400">Lesson complete</p>
                <p className="mt-1 text-sm text-zinc-400">
                  {topicId === "wireless-basics"
                    ? "Wave 1 network fundamentals done. Start with your lightbulb moment below."
                    : "Start with your lightbulb moment — one idea to take with you."}
                </p>
              </div>
              <Button variant="secondary" onClick={handleRedoLesson}>
                <RotateCcw className="mr-2 inline h-4 w-4" />
                Redo lesson
              </Button>
            </div>
          </Card>
        )}
      </div>

      {lessonUnlocked && (
        <>
          {topic.lightbulbMoment && (
            <TopicLightbulbMoment moment={topic.lightbulbMoment} />
          )}

          {/* Practice path + primary CTA before dense reference sections */}
          <TopicPracticeHub certId={certId} topic={topic} primaryCtaAtTop />

          <KeyFactsList
            facts={topic.keyFacts}
            subtitle="From your lesson — reinforce before practice."
            collapsible
          />

          <TopicDeepDive topic={topic} />

          <TopicCheatSheets topic={topic} />

          <ObjectiveMasteryList
            certId={certId}
            topicId={topicId}
            entries={objectiveEntries}
          />

          <TopicAssignments certId={certId} assignments={topic.assignments} />

          <div className="mb-6">
            <TopicWhatsNext
              certId={certId}
              topicId={topicId}
              topicName={topic.name}
              nextTopic={nextTopic}
              variant="hub"
            />
          </div>

          {!usesStructuredDelivery && !isComplete && (
            <div>
              <Button
                className="w-full"
                onClick={() => completeLesson(certId, topicId, topic.name)}
              >
                Mark Lesson Complete
              </Button>
              <p className="mt-2 text-center text-xs text-zinc-500">
                Mark complete after reading to advance your study plan and curriculum.
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
