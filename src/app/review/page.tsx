"use client";

import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { WeakAreaList } from "@/components/dashboard/WeakAreaList";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getDueReviewCount } from "@/lib/study-planner";
import { getCoachRecommendationForSession } from "@/lib/coach-recommendation";
import { getAllCertifications } from "@/lib/content-selectors";
import { useProgressStore } from "@/stores/progress-store";
import { useStoreHydration } from "@/hooks/use-store-hydration";
import { RotateCcw, Sparkles } from "lucide-react";

export default function ReviewPage() {
  const hydrated = useStoreHydration();
  const getWeakTopics = useProgressStore((s) => s.getWeakTopics);
  const progressState = useProgressStore((s) => s);
  const weakTopics = getWeakTopics();
  const dueCount = hydrated ? getDueReviewCount(progressState) : 0;
  const certs = getAllCertifications();
  const coachRec = hydrated ? getCoachRecommendationForSession(progressState, certs) : null;
  const isEmpty = dueCount === 0 && weakTopics.length === 0;

  return (
    <div>
      <PageHeader
        title="Review"
        subtitle="Spaced repetition and weak-area focus"
      />

      <section className="mb-6">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-400">
          Adaptive Review
        </h2>
        {dueCount > 0 ? (
          <Card className="p-4">
            <p className="mb-1 font-medium text-zinc-100">
              {dueCount} topic{dueCount === 1 ? "" : "s"} due
            </p>
            <p className="mb-4 text-sm text-zinc-400">
              Question bank drill pulled by mastery level — spaced repetition based on your past
              performance.
            </p>
            <Link href="/review/session">
              <Button className="w-full">
                <RotateCcw className="mr-2 inline h-4 w-4" />
                Start review session
              </Button>
            </Link>
          </Card>
        ) : (
          <Card className="p-4">
            <p className="text-sm text-zinc-400">
              No topics due for review. Keep studying — your review schedule builds automatically
              after quizzes and flashcards.
            </p>
            {isEmpty && coachRec && (
              <Link href={coachRec.href} className="mt-4 block">
                <Button className="w-full">
                  <Sparkles className="mr-2 inline h-4 w-4" />
                  Start here: {coachRec.label}
                </Button>
              </Link>
            )}
            {isEmpty && !coachRec && (
              <Link href="/certifications" className="mt-4 block">
                <Button className="w-full" variant="secondary">
                  Browse courses
                </Button>
              </Link>
            )}
          </Card>
        )}
      </section>

      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-400">
          Weak Areas
        </h2>
        <WeakAreaList weakTopics={weakTopics} limit={50} />
      </section>
    </div>
  );
}
