/**
 * Integration-boundary checks: every live course produces a valid manifest,
 * the catalog validates, output is deterministic, and a learner record built
 * from the real store shape resolves against its manifest with no unknown ids.
 */

import { CERTIFICATIONS, getCertification } from "@/content/registry";
import { DEFAULT_STUDY_PLAN } from "@/types/mastery";
import type { ProgressState } from "@/types/progress";
import {
  resolveProgressAgainstManifest,
  validateCourseCatalog,
  validateCourseManifest,
  validateLearnerRecord,
} from "./contract";
import { buildCourseCatalog, buildCourseManifest } from "./course-manifest";
import { buildLearnerRecord } from "./learner-record";

export interface IntegrationIssue {
  severity: "error" | "warning";
  where: string;
  message: string;
}

const LAUNCH_PATTERNS = [
  /^\/cert\/[^/]+$/,
  /^\/cert\/[^/]+\/lesson\/[^/]+$/,
  /^\/cert\/[^/]+\/quiz\/[^/?]+(\?bank=1)?$/,
  /^\/cert\/[^/]+\/flashcards\/[^/]+$/,
  /^\/cert\/[^/]+\/assignment\/[^/]+$/,
];

export function emptyProgressState(): ProgressState {
  return {
    completedLessons: {},
    completedAssignments: {},
    quizAttempts: [],
    flashcardSessions: [],
    simulatorAttempts: [],
    weakTopics: {},
    quizInProgress: null,
    flashcardInProgress: null,
    lastStudyDate: null,
    streak: 0,
    recentActivity: [],
    topicMastery: {},
    studyPlan: DEFAULT_STUDY_PLAN,
    onboardingComplete: false,
    questionStats: {},
    caseStudyAttempts: [],
    competencyEvidence: {},
  };
}

/** A small, realistic CCNA learner state using real topic/assignment ids. */
export function sampleCcnaProgressState(): ProgressState {
  const state = emptyProgressState();
  const ccna = getCertification("ccna")!;
  const subnetting = ccna.domains.flatMap((d) => d.topics).find((t) => t.id === "subnetting")!;
  const sim = subnetting.assignments!.find((a) => a.type === "simulator")!;
  const at = "2026-10-01T12:00:00.000Z";
  state.completedLessons["ccna:osi-model"] = true;
  state.completedLessons["ccna:subnetting"] = true;
  state.completedAssignments[`ccna:${sim.id}`] = true;
  state.quizAttempts.push({
    topicKey: "ccna:subnetting",
    certId: "ccna",
    score: 4,
    total: 5,
    answers: subnetting.quiz.slice(0, 5).map((q, i) => ({
      questionId: q.id,
      selectedChoiceId: q.correctChoiceId,
      correct: i !== 2,
    })),
    completedAt: at,
  });
  state.simulatorAttempts.push({
    simulatorId: sim.simulatorId!,
    certId: "ccna",
    topicKey: "ccna:subnetting",
    assignmentId: sim.id,
    score: 9,
    total: 10,
    weakConcepts: [],
    completed: true,
    completedAt: at,
  });
  return state;
}

export function verifyIntegration(): IntegrationIssue[] {
  const issues: IntegrationIssue[] = [];
  const err = (where: string, message: string) => issues.push({ severity: "error", where, message });
  const warn = (where: string, message: string) => issues.push({ severity: "warning", where, message });

  const catalog = buildCourseCatalog();
  for (const e of validateCourseCatalog(catalog).errors) err("catalog", e);
  if (JSON.stringify(catalog) !== JSON.stringify(buildCourseCatalog())) err("catalog", "catalog output is not deterministic");

  for (const cert of CERTIFICATIONS) {
    const manifest = buildCourseManifest(cert);
    const where = `manifest:${cert.id}`;
    for (const e of validateCourseManifest(manifest).errors) err(where, e);
    if (JSON.stringify(manifest) !== JSON.stringify(buildCourseManifest(cert))) err(where, "manifest output is not deterministic");

    const objectiveIds = new Set(manifest.objectives.map((o) => o.id));
    for (const m of manifest.modules) {
      for (const l of m.lessons) {
        for (const p of [l.launchPath, ...l.activities.map((a) => a.launchPath ?? "")]) {
          if (!LAUNCH_PATTERNS.some((re) => re.test(p))) err(`${where}/${l.id}`, `launch path ${p} matches no ReLearn route`);
        }
        if (objectiveIds.size > 0) {
          for (const o of l.objectiveIds) {
            if (!objectiveIds.has(o)) warn(`${where}/${l.id}`, `objective ${o} is not in the published objective catalog`);
          }
        }
      }
    }
    if (manifest.course.studyable && manifest.course.counts.lessons === 0) err(where, "studyable course has no lessons");
  }

  // Learner record round trip on the CCNA pilot.
  const state = sampleCcnaProgressState();
  const record = buildLearnerRecord(state, { exportedAt: "2026-10-01T12:00:00.000Z", provenance: "demo" });
  for (const e of validateLearnerRecord(record).errors) err("learner-record", e);
  if (record.trust !== "learner-controlled") err("learner-record", "exported records must declare trust \"learner-controlled\"");
  if (validateLearnerRecord({ ...record, trust: "verified" }).ok) err("contract", "validator accepted a non-v1 trust level");
  const { trust: _omitted, ...legacy } = record;
  void _omitted;
  if (!validateLearnerRecord(legacy).ok) err("contract", "validator rejected a record without the optional trust field");
  const empty = buildLearnerRecord(emptyProgressState(), { exportedAt: "x" });
  if (empty.courses.length !== 0) err("learner-record", "empty progress must export no course records");

  const ccnaManifest = buildCourseManifest(getCertification("ccna")!);
  const resolved = resolveProgressAgainstManifest(ccnaManifest, record);
  if (!resolved) err("learner-record", "CCNA progress did not resolve against the CCNA manifest");
  else {
    if (resolved.unknownRefs.length) err("learner-record", `unknown refs: ${resolved.unknownRefs.join(", ")}`);
    if (resolved.completedLessonCount !== 2) err("learner-record", `expected 2 completed lessons, got ${resolved.completedLessonCount}`);
    const course = record.courses.find((c) => c.courseId === "ccna")!;
    if (!course.assessments.some((a) => a.activityId === "ccna:subnetting#quiz" && a.score === 4)) {
      err("learner-record", "quiz attempt did not map to ccna:subnetting#quiz");
    }
    if (!course.assessments.some((a) => a.kind === "simulator")) err("learner-record", "simulator attempt did not map to an assignment activity");
    if (course.completedSteps !== 3) err("learner-record", `expected 3 completed curriculum steps, got ${course.completedSteps}`);
  }

  return issues;
}
