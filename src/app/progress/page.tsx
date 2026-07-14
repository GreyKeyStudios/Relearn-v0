"use client";

import { PageHeader } from "@/components/layout/PageHeader";
import { StatCard } from "@/components/dashboard/StatCard";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { getAllCertifications } from "@/lib/content-selectors";
import {
  getCertProgressPercent,
  getCertQuizAccuracy,
  getDomainReviewAttempts,
  getQuizAccuracy,
} from "@/lib/progress-metrics";
import { countCurriculumSteps, countCompletedCurriculumSteps } from "@/lib/curriculum";
import { getCertMasteryPercent, getDomainAverageScore } from "@/lib/mastery";
import { DomainMasteryBar } from "@/components/mastery/DomainMasteryBar";
import { getWeakObjectivesForActiveCerts } from "@/lib/objective-mastery";
import { WeakObjectivesCard } from "@/components/mastery/WeakObjectivesCard";
import { buildDailyPlan } from "@/lib/study-planner";
import { getExamPaceSummary } from "@/lib/exam-pace";
import { activeCertsSupportObjectives } from "@/lib/objective-support";
import { ExamCountdownCard } from "@/components/planner/ExamCountdownCard";
import { StudyPlanSettings } from "@/components/planner/StudyPlanSettings";
import { DailyPlanCard } from "@/components/planner/DailyPlanCard";
import { ResetProgressCard } from "@/components/progress/ResetProgressCard";
import { useProgressStore } from "@/stores/progress-store";
import { Flame, Percent, BookOpen } from "lucide-react";

export default function ProgressPage() {
  const streak = useProgressStore((s) => s.streak);
  const lastStudyDate = useProgressStore((s) => s.lastStudyDate);
  const quizAttempts = useProgressStore((s) => s.quizAttempts);
  const completedLessons = useProgressStore((s) => s.completedLessons);
  const completedAssignments = useProgressStore((s) => s.completedAssignments);
  const recentActivity = useProgressStore((s) => s.recentActivity);
  const progressState = useProgressStore((s) => s);
  const certs = getAllCertifications();
  const globalAccuracy = getQuizAccuracy(quizAttempts);
  const totalLessons = Object.keys(completedLessons).length;
  const totalAssignments = Object.keys(completedAssignments).length;

  const domainReviewsByCert = certs
    .map((cert) => ({
      cert,
      attempts: getDomainReviewAttempts(cert.id, quizAttempts),
    }))
    .filter((entry) => entry.attempts.length > 0);

  const dailyPlan = buildDailyPlan(progressState, certs);
  const examPace = getExamPaceSummary(progressState, certs);
  const weakObjectives = activeCertsSupportObjectives(certs, progressState.studyPlan.activeCertIds)
    ? getWeakObjectivesForActiveCerts(progressState, certs, 5)
    : [];

  return (
    <div>
      <PageHeader title="Progress" subtitle="Your study stats and history" />

      {examPace && <ExamCountdownCard pace={examPace} />}

      <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatCard label="Streak" value={`${streak} days`} icon={<Flame className="h-4 w-4 text-amber-400" />} />
        <StatCard label="Accuracy" value={`${globalAccuracy}%`} icon={<Percent className="h-4 w-4 text-sky-400" />} />
        <StatCard label="Lessons" value={totalLessons} icon={<BookOpen className="h-4 w-4 text-emerald-400" />} />
        <StatCard label="Assignments" value={totalAssignments} icon={<BookOpen className="h-4 w-4 text-sky-400" />} />
      </div>

      {lastStudyDate && (
        <Card className="mb-6">
          <p className="text-xs text-zinc-500">Last studied</p>
          <p className="text-sm text-zinc-200">{lastStudyDate}</p>
        </Card>
      )}

      <section className="mb-6">
        <StudyPlanSettings />
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-400">
          Today&apos;s plan
        </h2>
        <DailyPlanCard plan={dailyPlan} />
      </section>

      {weakObjectives.length > 0 && (
        <section className="mb-6">
          <WeakObjectivesCard objectives={weakObjectives} />
        </section>
      )}

      <section className="mb-6">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-400">
          Per Course
        </h2>
        <div className="flex flex-col gap-3">
          {certs
            .filter((c) => c.domains.some((d) => d.topics.length > 0))
            .map((cert) => {
              const progress = getCertProgressPercent(cert, {
                completedLessons,
                completedAssignments,
              });
              const accuracy = getCertQuizAccuracy(cert.id, quizAttempts);
              const mastery = getCertMasteryPercent(cert, progressState);
              const totalSteps = countCurriculumSteps(cert);
              const doneSteps = countCompletedCurriculumSteps(cert, progressState);
              const showDomains = cert.domains.some((d) =>
                d.topics.some((t) => (t.objectives?.length ?? 0) > 0)
              );
              return (
                <Card key={cert.id}>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-zinc-100">{cert.shortName}</span>
                    <span className="text-sm text-zinc-400">{accuracy}% accuracy</span>
                  </div>
                  <p className="mt-1 text-xs text-zinc-500">
                    {doneSteps} / {totalSteps} steps · Mastery {mastery}%
                  </p>
                  <ProgressBar value={progress} className="mt-2" showLabel />
                  {showDomains && (
                    <div className="mt-3 space-y-2 border-t border-zinc-800 pt-3">
                      {cert.domains.map((domain) => (
                        <DomainMasteryBar
                          key={domain.id}
                          domainName={domain.name}
                          averageScore={getDomainAverageScore(cert, domain.id, progressState)}
                        />
                      ))}
                    </div>
                  )}
                </Card>
              );
            })}
        </div>
      </section>

      {domainReviewsByCert.length > 0 && (
        <section className="mb-6">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-400">
            Domain Reviews
          </h2>
          <div className="flex flex-col gap-4">
            {domainReviewsByCert.map(({ cert, attempts }) => (
              <div key={cert.id}>
                <p className="mb-2 text-xs font-medium text-zinc-500">{cert.shortName}</p>
                <div className="flex flex-col gap-2">
                  {attempts.slice(0, 5).map((attempt) => (
                    <Card key={attempt.completedAt + attempt.topicKey} className="text-sm">
                      <p className="text-zinc-200">
                        {attempt.topicKey.split(":domain-review:")[1]?.replace(/-/g, " ") ?? "Domain"}
                      </p>
                      <p className="text-xs text-zinc-500">
                        Score {attempt.score}/{attempt.total} ·{" "}
                        {new Date(attempt.completedAt).toLocaleDateString()}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-400">
          Quiz History
        </h2>
        <ActivityFeed
          activities={recentActivity.filter((a) => a.type === "quiz")}
          limit={10}
        />
      </section>

      <section className="mt-8">
        <ResetProgressCard />
      </section>
    </div>
  );
}
