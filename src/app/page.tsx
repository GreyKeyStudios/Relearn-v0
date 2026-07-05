"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Flame,
  Target,
  Percent,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { StatCard } from "@/components/dashboard/StatCard";
import { TrackCard } from "@/components/dashboard/TrackCard";
import { FlagshipHero } from "@/components/dashboard/FlagshipHero";
import { CertProgressCard } from "@/components/dashboard/CertProgressCard";
import { WeakAreaList } from "@/components/dashboard/WeakAreaList";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { DailyPlanCard } from "@/components/planner/DailyPlanCard";
import { StudyNowCard } from "@/components/planner/StudyNowCard";
import { StudyPlanSettings } from "@/components/planner/StudyPlanSettings";
import { ExamCountdownCard } from "@/components/planner/ExamCountdownCard";
import { SessionLengthPicker } from "@/components/planner/SessionLengthPicker";
import { OnboardingWizard } from "@/components/onboarding/OnboardingWizard";
import { WeakObjectivesCard } from "@/components/mastery/WeakObjectivesCard";
import { getAllCertifications } from "@/lib/content-selectors";
import { getCoachRecommendationForSession } from "@/lib/coach-recommendation";
import { getNextCurriculumStep } from "@/lib/curriculum";
import { buildDailyPlan } from "@/lib/study-planner";
import { getWeakObjectivesForActiveCerts } from "@/lib/objective-mastery";
import { getExamPaceSummary } from "@/lib/exam-pace";
import { filterPlanBySessionMinutes } from "@/lib/session-planning";
import {
  activeCertsSupportObjectives,
  certSupportsObjectiveCoaching,
} from "@/lib/objective-support";
import { getQuizAccuracy } from "@/lib/progress-metrics";
import { getPrimaryTrack, groupTracksByStatus } from "@/lib/track-status";
import { useProgressStore } from "@/stores/progress-store";
import { useStoreHydration } from "@/hooks/use-store-hydration";

export default function DashboardPage() {
  const hydrated = useStoreHydration();
  const onboardingComplete = useProgressStore((s) => s.onboardingComplete);
  const streak = useProgressStore((s) => s.streak);
  const quizAttempts = useProgressStore((s) => s.quizAttempts);
  const recentActivity = useProgressStore((s) => s.recentActivity);
  const progressState = useProgressStore((s) => s);
  const getWeakTopics = useProgressStore((s) => s.getWeakTopics);
  const sessionMinutes = useProgressStore((s) => s.studyPlan.sessionMinutes);
  const [planExpanded, setPlanExpanded] = useState(false);
  const [detailsExpanded, setDetailsExpanded] = useState(false);

  const certs = getAllCertifications();
  const weakTopics = getWeakTopics();
  const accuracy = getQuizAccuracy(quizAttempts);
  const activeCertIds = progressState.studyPlan.activeCertIds;

  const { active: activeTracks, early: earlyTracks } = groupTracksByStatus(certs);
  const heroCert = getPrimaryTrack(certs, activeCertIds);

  const rawPlan = hydrated ? buildDailyPlan(progressState, certs) : null;
  const plan =
    rawPlan && sessionMinutes
      ? filterPlanBySessionMinutes(rawPlan, sessionMinutes)
      : rawPlan;

  const coachRec = hydrated ? getCoachRecommendationForSession(progressState, certs) : null;
  const examPace = hydrated ? getExamPaceSummary(progressState, certs) : null;

  const weakObjectives = hydrated
    ? getWeakObjectivesForActiveCerts(progressState, certs, 3).filter(
        (obj) => coachRec?.href !== obj.href
      )
    : [];

  const primaryCertId = activeCertIds.length === 1 ? activeCertIds[0] : null;
  const primaryCert = primaryCertId ? certs.find((c) => c.id === primaryCertId) : null;
  const nextStep = primaryCert ? getNextCurriculumStep(primaryCert, progressState) : null;
  const objectiveEmptyHref =
    nextStep?.href ??
    (primaryCert
      ? `/cert/${primaryCert.id}/lesson/${primaryCert.domains[0]?.topics[0]?.id ?? ""}`
      : "/certifications");

  const showObjectiveSection =
    hydrated &&
    activeCertsSupportObjectives(certs, activeCertIds) &&
    (weakObjectives.length > 0 || quizAttempts.length === 0);

  const showObjectiveEmpty =
    showObjectiveSection && weakObjectives.length === 0 && quizAttempts.length === 0;

  const weakObjectivesTitle = primaryCert
    ? `Weak objectives · ${primaryCert.shortName}`
    : "Weak objectives";

  const planItemsBeyondCoach =
    plan?.items.filter((item) => item.href !== coachRec?.href) ?? [];

  // Courses to surface on the dashboard: the learner's active picks if set,
  // otherwise every live track. Early-access tracks stay in the library only.
  const dashboardTracks = activeTracks.filter(
    (c) => activeCertIds.length === 0 || activeCertIds.includes(c.id)
  );

  if (hydrated && !onboardingComplete) {
    return <OnboardingWizard />;
  }

  return (
    <div>
      <PageHeader title="ReLearn" subtitle="Your certification study hub" />

      {heroCert && <FlagshipHero cert={heroCert} />}

      <SessionLengthPicker />

      {examPace && <ExamCountdownCard pace={examPace} />}

      {hydrated && (
        <StudyNowCard recommendation={coachRec} sessionMinutes={sessionMinutes} />
      )}

      <div className="mb-6 grid grid-cols-3 gap-3">
        <StatCard label="Streak" value={streak} icon={<Flame className="h-4 w-4 text-amber-400" />} />
        <StatCard label="Accuracy" value={`${accuracy}%`} icon={<Percent className="h-4 w-4 text-sky-400" />} />
        <StatCard label="Weak Areas" value={weakTopics.length} icon={<Target className="h-4 w-4 text-amber-400" />} />
      </div>

      <section className="mb-6">
        <StudyPlanSettings />
        <button
          type="button"
          onClick={() => setPlanExpanded((v) => !v)}
          className="mb-3 flex w-full items-center justify-between text-sm font-semibold uppercase tracking-wide text-zinc-400"
        >
          <span>Today&apos;s study plan</span>
          {planExpanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>
        {!planExpanded && plan && plan.items.length > 0 && (
          <p className="mb-2 text-xs text-zinc-500">
            {plan.items.length} item{plan.items.length === 1 ? "" : "s"} · {plan.usedMinutes}/
            {plan.dailyBudgetMinutes} min
            {coachRec ? " — expand for full plan" : ""}
          </p>
        )}
        {planExpanded &&
          (plan ? (
            <DailyPlanCard plan={plan} highlightHref={coachRec?.href} />
          ) : (
            <p className="text-sm text-zinc-500">Loading plan…</p>
          ))}
        {!planExpanded && coachRec && planItemsBeyondCoach.length > 0 && (
          <button
            type="button"
            onClick={() => setPlanExpanded(true)}
            className="text-xs text-sky-400 hover:text-sky-300"
          >
            +{planItemsBeyondCoach.length} more in today&apos;s plan
          </button>
        )}
      </section>

      {showObjectiveSection && (
        <section className="mb-6">
          <WeakObjectivesCard
            objectives={weakObjectives}
            title={weakObjectivesTitle}
            showEmptyState={showObjectiveEmpty}
            emptyHref={objectiveEmptyHref}
            certId={primaryCertId ?? (certSupportsObjectiveCoaching("ccna") ? "ccna" : undefined)}
          />
        </section>
      )}

      {dashboardTracks.length > 0 && (
        <section className="mb-6">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
              Your courses
            </h2>
            <Link href="/certifications" className="text-xs text-sky-400 hover:text-sky-300">
              Library
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            {dashboardTracks.map((cert) => (
              <TrackCard key={cert.id} cert={cert} />
            ))}
          </div>
        </section>
      )}

      {earlyTracks.length > 0 && (
        <Link
          href="/certifications"
          className="mb-6 flex items-center justify-between gap-3 rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/40 p-4 transition-colors hover:border-zinc-700 hover:bg-zinc-900/70"
        >
          <div className="min-w-0">
            <p className="text-sm font-medium text-zinc-200">The library is growing</p>
            <p className="mt-0.5 text-xs text-zinc-500">
              {earlyTracks.length} more track{earlyTracks.length === 1 ? "" : "s"} in development —
              question banks are already live.
            </p>
          </div>
          <ArrowRight className="h-4 w-4 shrink-0 text-zinc-500" aria-hidden />
        </Link>
      )}

      <section className="mb-6">
        <button
          type="button"
          onClick={() => setDetailsExpanded((v) => !v)}
          className="mb-3 flex w-full items-center justify-between text-sm font-semibold uppercase tracking-wide text-zinc-400"
        >
          <span>Progress &amp; weak areas</span>
          {detailsExpanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>

        {detailsExpanded && (
          <>
            <div className="mb-6">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  All active tracks
                </h3>
                <Link href="/certifications" className="text-xs text-sky-400">
                  View all
                </Link>
              </div>
              <div className="flex flex-col gap-3">
                {activeTracks
                  .filter((c) => c.domains.some((d) => d.topics.length > 0))
                  .filter((c) => activeCertIds.length === 0 || activeCertIds.includes(c.id))
                  .map((cert) => (
                    <CertProgressCard key={cert.id} cert={cert} />
                  ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Weak areas by topic
              </h3>
              <WeakAreaList weakTopics={weakTopics} limit={3} />
            </div>

            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Recent activity
              </h3>
              <ActivityFeed activities={recentActivity} />
            </div>
          </>
        )}
      </section>
    </div>
  );
}
