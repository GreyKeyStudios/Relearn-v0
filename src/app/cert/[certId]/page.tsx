"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { DomainSection } from "@/components/cert/DomainSection";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Card } from "@/components/ui/Card";
import { getCertification } from "@/lib/content-selectors";
import { curriculumStepForTopic } from "@/lib/curriculum";
import { getCoachRecommendationForSession } from "@/lib/coach-recommendation";
import { getExamPaceSummary } from "@/lib/exam-pace";
import { certSupportsObjectiveCoaching } from "@/lib/objective-support";
import { isSkillsTrack, trackSubtitle } from "@/lib/track-kind";
import { ExamCountdownCard } from "@/components/planner/ExamCountdownCard";
import { getCertProgressPercent } from "@/lib/progress-metrics";
import { getCertMasteryPercent } from "@/lib/mastery";
import { getWeakObjectivesFromState } from "@/lib/objective-mastery";
import { WeakObjectivesCard } from "@/components/mastery/WeakObjectivesCard";
import { StudyNowCard } from "@/components/planner/StudyNowCard";
import { CfPlacementWizard } from "@/components/cf/CfPlacementWizard";
import { CcnaVersionPathwayCard } from "@/components/ccna/CcnaVersionPathwayCard";
import { useProgressStore } from "@/stores/progress-store";
import {
  filterCertificationForCcnaPathway,
  resolveEffectiveCcnaPathway,
} from "@/lib/ccna-version-pathway";

interface CertDetailPageProps {
  params: Promise<{ certId: string }>;
}

export default function CertDetailPage({ params }: CertDetailPageProps) {
  const { certId } = use(params);
  const cert = getCertification(certId);
  if (!cert) notFound();

  const completedLessons = useProgressStore((s) => s.completedLessons);
  const completedAssignments = useProgressStore((s) => s.completedAssignments);
  const getWeakTopics = useProgressStore((s) => s.getWeakTopics);
  const weakTopics = getWeakTopics().filter((w) => w.certId === certId);
  const progressState = useProgressStore((s) => s);
  const pathwayPreference = useProgressStore((s) => s.ccnaPathwayPreference);
  const progressCert =
    certId === "ccna"
      ? filterCertificationForCcnaPathway(
          cert,
          resolveEffectiveCcnaPathway(pathwayPreference ?? null)
        )
      : cert;
  const progress = getCertProgressPercent(progressCert, {
    completedLessons,
    completedAssignments,
  });
  const masteryPercent = getCertMasteryPercent(progressCert, progressState);
  const sessionMinutes = useProgressStore((s) => s.studyPlan.sessionMinutes);
  const coachRec = getCoachRecommendationForSession(progressState, [cert], { certId });
  const examPace = getExamPaceSummary(progressState, [cert]);
  const weakObjectives = certSupportsObjectiveCoaching(certId)
    ? getWeakObjectivesFromState(cert, progressState, 5).filter(
        (obj) => coachRec?.href !== obj.href
      )
    : [];
  const hasContent = cert.domains.some((d) => d.topics.length > 0);
  const nextStep = hasContent
    ? curriculumStepForTopic(
        cert,
        cert.domains[0]?.topics[0]?.id ?? "",
        progressState,
        "Start studying"
      )
    : null;

  return (
    <div className="mx-auto max-w-5xl">
      <PageHeader
        title={cert.shortName}
        subtitle={trackSubtitle(cert)}
        backHref="/certifications"
      />

      {examPace && !isSkillsTrack(cert) && <ExamCountdownCard pace={examPace} />}

      {certId === "computer-fundamentals" && <CfPlacementWizard />}

      {certId === "ccna" && <CcnaVersionPathwayCard />}

      {hasContent && (
        <StudyNowCard
          recommendation={coachRec}
          sessionMinutes={sessionMinutes}
          emptyHref={nextStep?.href ?? `/cert/${certId}`}
          emptyLabel="Start first lesson"
        />
      )}

      <Card className="mb-6 p-5 sm:p-6">
        <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">{cert.overview}</p>
        {hasContent && (
          <div className="mt-4 space-y-2">
            <ProgressBar value={progress} showLabel />
            <p className="text-xs text-faint">
              Mastery: {masteryPercent}% topics at proficient or above
            </p>
          </div>
        )}
        {cert.examSummary.questionCount > 0 && (
          <div className="mt-5 grid grid-cols-2 gap-3 border-t border-hairline pt-4 text-xs text-faint sm:grid-cols-4">
            <span>{cert.examSummary.questionCount} questions</span>
            <span>{cert.examSummary.durationMinutes} minutes</span>
            <span>Pass: {cert.examSummary.passingScore}</span>
            <span>{cert.examSummary.format}</span>
          </div>
        )}
        {isSkillsTrack(cert) && (
          <div className="mt-4 rounded-lg border border-accent/20 bg-accent/5 px-3 py-2 text-xs text-muted-foreground">
            <p className="font-medium text-accent">Skills track — not a vendor exam</p>
            <p className="mt-1">
              Pass: {cert.examSummary.passingScore}. Format: {cert.examSummary.format}.
            </p>
          </div>
        )}
      </Card>

      {certId === "ccna" && (
        <Card className="mb-6 p-4">
          <h2 className="font-serif text-lg font-medium text-foreground">Study tools</h2>
          <p className="mt-1 text-xs text-muted-foreground">
            External labs use Cisco Packet Tracer — install once, reuse across subnetting, VLANs, and routing topics.
          </p>
          <Link
            href={`/cert/${certId}/tool/packet-tracer`}
            className="mt-3 inline-block text-sm font-medium text-accent hover:underline"
          >
            Packet Tracer getting-started guide →
          </Link>
        </Card>
      )}

      {weakObjectives.length > 0 && (
        <WeakObjectivesCard objectives={weakObjectives} />
      )}

      {weakTopics.length > 0 && (
        <section className="mb-6">
          <h2 className="mb-3 font-serif text-xl font-medium text-foreground">
            Weak Areas ({weakTopics.length})
          </h2>
          <div className="flex flex-col gap-2">
            {weakTopics.map((w) => {
              const topicId = w.topicKey.split(":").slice(1).join(":");
              const topic = cert.domains.flatMap((d) => d.topics).find((t) => t.id === topicId);
              const step = curriculumStepForTopic(
                cert,
                topicId,
                progressState,
                "Review weak area"
              );
              return (
                <Link key={w.topicKey} href={step.href}>
                  <Card className="text-sm text-foreground">
                    <p>{topic?.name ?? topicId}</p>
                    {step.stepType === "assignment" && step.assignmentTitle && (
                      <p className="mt-1 text-xs text-accent">{step.assignmentTitle}</p>
                    )}
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {hasContent ? (
        <DomainSection cert={cert} />
      ) : (
        <Card>
          <p className="text-sm text-muted-foreground">Content for this certification is coming soon.</p>
        </Card>
      )}
    </div>
  );
}
