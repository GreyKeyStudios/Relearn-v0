/**
 * Adapter: live Path A curriculum (`Certification`) → interchange course manifest.
 *
 * Read-only over the content registry. Does not change mastery, SRS, or
 * curriculum ordering — it describes what the engine already delivers.
 */

import type { Assignment, Certification, Topic } from "@/content/types";
import { CERTIFICATIONS, getCertification } from "@/content/registry";
import { CCNA_OBJECTIVES } from "@/content/objectives/ccna";
import { APLUS_OBJECTIVES } from "@/content/objectives/a-plus";
import { buildLiveSubjects } from "@/content/production/hierarchy";
import { getCcnaV20OfficialLine } from "@/content/production/objectives/ccna-200-301-v2.0";
import { getOrderedPracticeAssignments } from "@/lib/curriculum";
import { assignmentKey } from "@/lib/ids";
import { isSkillsTrack } from "@/lib/track-kind";
import { getTrackStatusMeta, type TrackStatus } from "@/lib/track-status";
import packageJson from "../../package.json";
import {
  RELEARN_INTERCHANGE_VERSION,
  SCHEMA_IDS,
  lessonActivityIdFor,
  lessonIdFor,
  moduleIdFor,
  type ActivityDefinition,
  type ActivityKind,
  type CourseCatalog,
  type CourseManifest,
  type CourseMaturity,
  type CourseSummary,
  type EngineInfo,
  type EvidenceMode,
  type LessonDefinition,
  type ObjectiveDefinition,
} from "./contract";

export const ENGINE_INFO: EngineInfo = { name: "ReLearn", version: packageJson.version };

/**
 * Track status → interchange maturity. Legacy "reference"/"skill" tiers are
 * published conservatively as first-pass: they are studyable but have not
 * passed the CCNA-style QA gates.
 */
const MATURITY: Record<TrackStatus, CourseMaturity> = {
  flagship: "pilot",
  "gold-standard": "stable",
  stable: "stable",
  "learner-qa": "learner-qa",
  "internal-review": "internal-review",
  "first-pass": "first-pass",
  reference: "first-pass",
  skill: "first-pass",
  early: "early",
  planned: "planned",
};

/** Course-specific caveats a consumer must show next to the course. */
const COURSE_NOTICES: Record<string, string[]> = {
  ccna: [
    "Independent study material for Cisco CCNA 200-301. Not an official Cisco course or affiliated with Cisco.",
    "Network Fundamentals is ReLearn's exam-ready pilot module; other modules are studyable at earlier review stages.",
    "Lessons marked with a v2.0 variant appear only when the learner selects the CCNA v2.0 objectives pathway.",
  ],
};

const GENERIC_NOTICES = [
  "Progress is stored on the learner's device. ReLearn has no accounts or server-side learner records.",
];

function objectiveCatalog(cert: Certification): ObjectiveDefinition[] {
  const source = cert.id === "ccna" ? CCNA_OBJECTIVES : cert.id === "a-plus" ? APLUS_OBJECTIVES : [];
  const out: ObjectiveDefinition[] = source.map((o) => ({
    id: o.id,
    moduleId: moduleIdFor(cert.id, o.domain),
    text: o.text,
  }));
  if (cert.id === "ccna") {
    // v2.0 vertical slices cite official v2.0 lines directly; publish the ones in use.
    const known = new Set(out.map((o) => o.id));
    for (const t of cert.domains.flatMap((d) => d.topics)) {
      for (const id of t.objectives ?? []) {
        const line = known.has(id) ? undefined : getCcnaV20OfficialLine(id);
        if (line) {
          out.push({ id: line.id, text: `${line.number} ${line.text} (CCNA ${line.objectivesVersion})` });
          known.add(line.id);
        }
      }
    }
  }
  return out;
}

function assignmentKind(a: Assignment): { kind: ActivityKind; evidenceMode: EvidenceMode } {
  switch (a.type) {
    case "simulator":
    case "case-study":
      return { kind: a.type, evidenceMode: "auto-graded" };
    case "external-lab":
      return { kind: "external-lab", evidenceMode: "external-attested" };
    case "quiz":
      return { kind: "quiz", evidenceMode: "auto-graded" };
    case "flashcard":
      return { kind: "flashcards", evidenceMode: "self-reported" };
    default:
      return { kind: "reading", evidenceMode: "self-reported" };
  }
}

function lessonActivities(certId: string, topic: Topic): ActivityDefinition[] {
  const lessonId = lessonIdFor(certId, topic.id);
  const base = `/cert/${certId}`;
  const out: ActivityDefinition[] = [
    {
      id: lessonActivityIdFor(lessonId, "lesson"),
      kind: "lesson",
      title: topic.lesson.title,
      evidenceMode: "self-reported",
      launchPath: `${base}/lesson/${topic.id}`,
    },
  ];
  if (topic.quiz.length > 0) {
    out.push({
      id: lessonActivityIdFor(lessonId, "quiz"),
      kind: "quiz",
      title: `${topic.name} quiz`,
      evidenceMode: "auto-graded",
      itemCount: topic.quiz.length,
      launchPath: `${base}/quiz/${topic.id}`,
    });
  }
  if ((topic.questionBank?.length ?? 0) > 0) {
    out.push({
      id: lessonActivityIdFor(lessonId, "question-bank"),
      kind: "question-bank",
      title: `${topic.name} question bank`,
      evidenceMode: "auto-graded",
      itemCount: topic.questionBank!.length,
      launchPath: `${base}/quiz/${topic.id}?bank=1`,
    });
  }
  if (topic.flashcards.length > 0) {
    out.push({
      id: lessonActivityIdFor(lessonId, "flashcards"),
      kind: "flashcards",
      title: `${topic.name} flashcards`,
      evidenceMode: "self-reported",
      itemCount: topic.flashcards.length,
      launchPath: `${base}/flashcards/${topic.id}`,
    });
  }
  for (const a of getOrderedPracticeAssignments(topic.assignments)) {
    out.push({
      id: assignmentKey(certId, a.id),
      ...assignmentKind(a),
      title: a.title,
      estimatedMinutes: a.estimatedMinutes,
      launchPath: `${base}/assignment/${a.id}`,
    });
  }
  return out;
}

function lessonDefinition(certId: string, topic: Topic, order: number): LessonDefinition {
  return {
    id: lessonIdFor(certId, topic.id),
    sourceId: topic.id,
    title: topic.name,
    order,
    launchPath: `/cert/${certId}/lesson/${topic.id}`,
    ...(topic.difficulty ? { difficulty: topic.difficulty } : {}),
    ...(topic.estimatedStudyMinutes ? { estimatedMinutes: topic.estimatedStudyMinutes } : {}),
    objectiveIds: [...(topic.objectives ?? [])],
    prerequisiteLessonIds: (topic.prerequisites ?? []).map((p) => lessonIdFor(certId, p)),
    ...(topic.objectivesVersion ? { variant: `objectives-${topic.objectivesVersion}` } : {}),
    activities: lessonActivities(certId, topic),
  };
}

let templateCache: Map<string, CourseSummary["template"]> | null = null;
function templateFor(certId: string): CourseSummary["template"] {
  templateCache ??= new Map(buildLiveSubjects().map((s) => [s.liveTrackId ?? s.id, s.template]));
  return templateCache.get(certId) ?? "A";
}

export function buildCourseSummary(cert: Certification): CourseSummary {
  const meta = getTrackStatusMeta(cert);
  const lessons = cert.domains.flatMap((d) => d.topics);
  return {
    id: cert.id,
    title: cert.name,
    shortName: cert.shortName,
    provider: cert.vendor,
    kind: isSkillsTrack(cert) ? "skills-track" : "certification-prep",
    template: templateFor(cert.id),
    maturity: MATURITY[meta.status],
    maturityLabel: meta.label,
    studyable: meta.live && lessons.length > 0,
    description: cert.overview,
    launchPath: `/cert/${cert.id}`,
    counts: {
      modules: cert.domains.length,
      lessons: lessons.length,
      activities: lessons.reduce((n, t) => n + lessonActivities(cert.id, t).length, 0),
      objectives: objectiveCatalog(cert).length,
    },
  };
}

export function buildCourseManifest(cert: Certification): CourseManifest {
  let order = 0;
  return {
    schema: SCHEMA_IDS.manifest,
    schemaVersion: RELEARN_INTERCHANGE_VERSION,
    engine: ENGINE_INFO,
    course: buildCourseSummary(cert),
    modules: cert.domains.map((d, i) => ({
      id: moduleIdFor(cert.id, d.id),
      sourceId: d.id,
      title: d.name,
      order: i + 1,
      lessons: d.topics.map((t) => lessonDefinition(cert.id, t, ++order)),
    })),
    objectives: objectiveCatalog(cert),
    notices: [...(COURSE_NOTICES[cert.id] ?? []), ...GENERIC_NOTICES],
  };
}

export function buildCourseCatalog(certs: Certification[] = CERTIFICATIONS): CourseCatalog {
  return {
    schema: SCHEMA_IDS.catalog,
    schemaVersion: RELEARN_INTERCHANGE_VERSION,
    engine: ENGINE_INFO,
    courses: certs.map(buildCourseSummary),
  };
}

export function getCourseManifest(courseId: string): CourseManifest | undefined {
  const cert = getCertification(courseId);
  return cert ? buildCourseManifest(cert) : undefined;
}
