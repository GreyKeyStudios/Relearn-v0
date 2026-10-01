/**
 * ReLearn interchange contract — v1.
 *
 * The versioned boundary between the ReLearn learning engine and consumers such
 * as the Bridge Academy institutional site / future school system.
 *
 * Rules for this file:
 * - Dependency-free (no imports). Consumers vendor it verbatim; see
 *   docs/integration/relearn-interchange-v1.md for the sync procedure.
 * - Additive changes only within v1 (new optional fields). Renaming, removing,
 *   or changing the meaning of a field requires `schemaVersion: 2`.
 * - Identifiers are ReLearn's existing persistence keys, so a learner record
 *   always resolves against a manifest without a mapping table.
 * - No learner PII. A learner record is exported by the learner from their own
 *   device; ReLearn has no accounts, sync, or server-side learner storage.
 */

export const RELEARN_INTERCHANGE_VERSION = 1 as const;

export const SCHEMA_IDS = {
  catalog: "relearn.course-catalog",
  manifest: "relearn.course-manifest",
  learnerRecord: "relearn.learner-record",
} as const;

/* ------------------------------------------------------------------ */
/* Identifiers                                                         */
/* ------------------------------------------------------------------ */

/**
 * Identifier conventions (all strings, stable across releases):
 *
 * | Entity       | Format                         | Example                        |
 * |--------------|--------------------------------|--------------------------------|
 * | course       | `{courseId}`                   | `ccna`                         |
 * | module       | `{courseId}:module:{domainId}` | `ccna:module:network-fundamentals` |
 * | lesson       | `{courseId}:{topicId}`         | `ccna:subnetting`              |
 * | activity     | `{lessonId}#{kind}` or `{courseId}:{assignmentId}` | `ccna:subnetting#quiz`, `ccna:subnet-cidr-sim` |
 * | objective    | vendor/standard id             | `CCNA-1.9`                     |
 */
export type CourseId = string;
export type ModuleId = string;
export type LessonId = string;
export type ActivityId = string;
export type ObjectiveId = string;

export function moduleIdFor(courseId: CourseId, domainId: string): ModuleId {
  return `${courseId}:module:${domainId}`;
}

export function lessonIdFor(courseId: CourseId, topicId: string): LessonId {
  return `${courseId}:${topicId}`;
}

export function lessonActivityIdFor(lessonId: LessonId, kind: CoreActivityKind): ActivityId {
  return `${lessonId}#${kind}`;
}

/* ------------------------------------------------------------------ */
/* Course definitions                                                  */
/* ------------------------------------------------------------------ */

/** Generic learning-engine activity kinds (not CCNA-specific). */
export type CoreActivityKind = "lesson" | "quiz" | "question-bank" | "flashcards";
export type AssignmentActivityKind = "simulator" | "external-lab" | "case-study" | "reading";
export type ActivityKind = CoreActivityKind | AssignmentActivityKind;

/** How completion of an activity is evidenced. */
export type EvidenceMode =
  /** Learner marked complete; no grading. */
  | "self-reported"
  /** Auto-graded inside ReLearn (quiz, simulator, case study). */
  | "auto-graded"
  /** Work happens in an external tool; ReLearn records a self-attested checklist. */
  | "external-attested";

/** Honest maturity of a course as published by ReLearn. */
export type CourseMaturity =
  | "planned"
  | "early"
  | "first-pass"
  | "internal-review"
  | "learner-qa"
  | "pilot"
  | "stable";

export type CourseKind = "certification-prep" | "skills-track";

/** ReLearn course template — see docs/COURSE_ARCHITECTURE.md §3. */
export type CourseTemplate = "A" | "B" | "C" | "D";

export interface ActivityDefinition {
  id: ActivityId;
  kind: ActivityKind;
  title: string;
  evidenceMode: EvidenceMode;
  /** Number of graded items when known (quiz questions, bank size). */
  itemCount?: number;
  estimatedMinutes?: number;
  /** Relative path inside the ReLearn app that launches this activity. */
  launchPath?: string;
}

export interface LessonDefinition {
  id: LessonId;
  /** Source topic id inside the course (`subnetting`). */
  sourceId: string;
  title: string;
  order: number;
  /** Relative path inside the ReLearn app, without base path. */
  launchPath: string;
  difficulty?: "easy" | "medium" | "hard";
  estimatedMinutes?: number;
  objectiveIds: ObjectiveId[];
  prerequisiteLessonIds: LessonId[];
  /** Content variant gate, e.g. a CCNA objectives version. Absent = always shown. */
  variant?: string;
  activities: ActivityDefinition[];
}

export interface ModuleDefinition {
  id: ModuleId;
  sourceId: string;
  title: string;
  order: number;
  lessons: LessonDefinition[];
}

export interface ObjectiveDefinition {
  id: ObjectiveId;
  moduleId?: ModuleId;
  text: string;
}

export interface CourseSummary {
  id: CourseId;
  title: string;
  shortName: string;
  provider: string;
  kind: CourseKind;
  template: CourseTemplate;
  maturity: CourseMaturity;
  /** ReLearn's own short status label, e.g. "Flagship pilot". */
  maturityLabel: string;
  /** True when learners can study it today in ReLearn. */
  studyable: boolean;
  description: string;
  launchPath: string;
  counts: { modules: number; lessons: number; activities: number; objectives: number };
}

export interface CourseManifest {
  schema: typeof SCHEMA_IDS.manifest;
  schemaVersion: typeof RELEARN_INTERCHANGE_VERSION;
  engine: EngineInfo;
  course: CourseSummary;
  modules: ModuleDefinition[];
  objectives: ObjectiveDefinition[];
  /** Plain-language caveats the consumer must display alongside the course. */
  notices: string[];
}

export interface CourseCatalog {
  schema: typeof SCHEMA_IDS.catalog;
  schemaVersion: typeof RELEARN_INTERCHANGE_VERSION;
  engine: EngineInfo;
  courses: CourseSummary[];
}

export interface EngineInfo {
  name: "ReLearn";
  /** package.json version of the engine build that produced the document. */
  version: string;
}

/* ------------------------------------------------------------------ */
/* Learner record (progress + evidence)                                 */
/* ------------------------------------------------------------------ */

export type MasteryLevel = "new" | "learning" | "familiar" | "proficient" | "mastered";

export interface LessonProgress {
  lessonId: LessonId;
  completed: boolean;
  /** 0–100 engine mastery score, if the learner has practiced. */
  masteryScore?: number;
  masteryLevel?: MasteryLevel;
  attempts: number;
  lastPracticedAt?: string;
}

export interface AssessmentResult {
  activityId: ActivityId;
  lessonId?: LessonId;
  kind: ActivityKind | "domain-review";
  score: number;
  total: number;
  completedAt: string;
  /** Concepts/objectives the engine flagged as weak in this attempt. */
  weakConcepts: string[];
}

export type EvidenceType =
  | "lesson-completion"
  | "activity-completion"
  | "assessment"
  | "competency-practice";

/**
 * One observed fact about a learner's work. Evidence is append-only from the
 * engine's perspective; the consumer decides how to interpret it.
 */
export interface EvidenceItem {
  id: string;
  type: EvidenceType;
  /** The manifest id (lesson/activity) or competency id this evidence is about. */
  ref: string;
  evidenceMode: EvidenceMode;
  observedAt?: string;
  /** Human-readable, consumer-safe summary. */
  summary: string;
}

export interface CourseProgressRecord {
  courseId: CourseId;
  completedSteps: number;
  totalSteps: number;
  masteryPercent: number;
  lessons: LessonProgress[];
  assessments: AssessmentResult[];
  evidence: EvidenceItem[];
}

export interface LearnerRecord {
  schema: typeof SCHEMA_IDS.learnerRecord;
  schemaVersion: typeof RELEARN_INTERCHANGE_VERSION;
  engine: EngineInfo;
  exportedAt: string;
  /**
   * Where the data came from. "device" = exported by the learner from browser
   * storage; unverified and editable by them. Consumers must not treat it as
   * an institutional transcript.
   */
  provenance: "device" | "demo";
  courses: CourseProgressRecord[];
}

/* ------------------------------------------------------------------ */
/* Runtime validation (hand-written to stay dependency-free)           */
/* ------------------------------------------------------------------ */

export interface ValidationResult {
  ok: boolean;
  errors: string[];
}

type Obj = Record<string, unknown>;

function isObj(v: unknown): v is Obj {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

function req(errors: string[], o: Obj, path: string, key: string, type: "string" | "number" | "boolean"): void {
  if (typeof o[key] !== type) errors.push(`${path}.${key} must be a ${type}`);
}

function arr(errors: string[], o: Obj, path: string, key: string): unknown[] {
  const v = o[key];
  if (!Array.isArray(v)) {
    errors.push(`${path}.${key} must be an array`);
    return [];
  }
  return v;
}

function header(errors: string[], doc: unknown, schema: string): doc is Obj {
  if (!isObj(doc)) {
    errors.push("document must be an object");
    return false;
  }
  if (doc.schema !== schema) errors.push(`schema must be "${schema}"`);
  if (doc.schemaVersion !== RELEARN_INTERCHANGE_VERSION) {
    errors.push(`schemaVersion must be ${RELEARN_INTERCHANGE_VERSION} (got ${String(doc.schemaVersion)})`);
  }
  if (!isObj(doc.engine) || doc.engine.name !== "ReLearn") errors.push("engine.name must be \"ReLearn\"");
  return true;
}

function validateSummary(errors: string[], c: unknown, path: string): void {
  if (!isObj(c)) {
    errors.push(`${path} must be an object`);
    return;
  }
  for (const k of ["id", "title", "shortName", "provider", "kind", "template", "maturity", "maturityLabel", "description", "launchPath"]) {
    req(errors, c, path, k, "string");
  }
  req(errors, c, path, "studyable", "boolean");
  if (!isObj(c.counts)) errors.push(`${path}.counts must be an object`);
}

export function validateCourseCatalog(doc: unknown): ValidationResult {
  const errors: string[] = [];
  if (header(errors, doc, SCHEMA_IDS.catalog)) {
    const ids = new Set<string>();
    arr(errors, doc, "catalog", "courses").forEach((c, i) => {
      validateSummary(errors, c, `courses[${i}]`);
      if (isObj(c) && typeof c.id === "string") {
        if (ids.has(c.id)) errors.push(`duplicate course id ${c.id}`);
        ids.add(c.id);
      }
    });
  }
  return { ok: errors.length === 0, errors };
}

export function validateCourseManifest(doc: unknown): ValidationResult {
  const errors: string[] = [];
  if (!header(errors, doc, SCHEMA_IDS.manifest)) return { ok: false, errors };
  validateSummary(errors, doc.course, "course");
  const courseId = isObj(doc.course) ? doc.course.id : undefined;
  const ids = new Set<string>();
  const lessonIds = new Set<string>();
  const seen = (id: unknown, path: string) => {
    if (typeof id !== "string") return;
    if (ids.has(id)) errors.push(`${path}: duplicate id ${id}`);
    ids.add(id);
  };
  const modules = arr(errors, doc, "manifest", "modules");
  modules.forEach((m, mi) => {
    const mp = `modules[${mi}]`;
    if (!isObj(m)) return void errors.push(`${mp} must be an object`);
    for (const k of ["id", "sourceId", "title"]) req(errors, m, mp, k, "string");
    req(errors, m, mp, "order", "number");
    seen(m.id, mp);
    arr(errors, m, mp, "lessons").forEach((l, li) => {
      const lp = `${mp}.lessons[${li}]`;
      if (!isObj(l)) return void errors.push(`${lp} must be an object`);
      for (const k of ["id", "sourceId", "title", "launchPath"]) req(errors, l, lp, k, "string");
      req(errors, l, lp, "order", "number");
      if (typeof l.id === "string" && typeof courseId === "string" && !l.id.startsWith(`${courseId}:`)) {
        errors.push(`${lp}.id must start with "${courseId}:"`);
      }
      seen(l.id, lp);
      if (typeof l.id === "string") lessonIds.add(l.id);
      arr(errors, l, lp, "objectiveIds");
      arr(errors, l, lp, "prerequisiteLessonIds");
      arr(errors, l, lp, "activities").forEach((a, ai) => {
        const ap = `${lp}.activities[${ai}]`;
        if (!isObj(a)) return void errors.push(`${ap} must be an object`);
        for (const k of ["id", "kind", "title", "evidenceMode"]) req(errors, a, ap, k, "string");
        seen(a.id, ap);
      });
    });
  });
  // Prerequisites must resolve inside the manifest.
  modules.forEach((m, mi) => {
    if (!isObj(m) || !Array.isArray(m.lessons)) return;
    m.lessons.forEach((l, li) => {
      if (!isObj(l) || !Array.isArray(l.prerequisiteLessonIds)) return;
      for (const p of l.prerequisiteLessonIds) {
        if (typeof p !== "string" || !lessonIds.has(p)) {
          errors.push(`modules[${mi}].lessons[${li}] prerequisite ${String(p)} is not a lesson in this manifest`);
        }
      }
    });
  });
  arr(errors, doc, "manifest", "objectives");
  arr(errors, doc, "manifest", "notices");
  return { ok: errors.length === 0, errors };
}

export function validateLearnerRecord(doc: unknown): ValidationResult {
  const errors: string[] = [];
  if (!header(errors, doc, SCHEMA_IDS.learnerRecord)) return { ok: false, errors };
  req(errors, doc, "record", "exportedAt", "string");
  if (doc.provenance !== "device" && doc.provenance !== "demo") errors.push("provenance must be \"device\" or \"demo\"");
  arr(errors, doc, "record", "courses").forEach((c, ci) => {
    const cp = `courses[${ci}]`;
    if (!isObj(c)) return void errors.push(`${cp} must be an object`);
    req(errors, c, cp, "courseId", "string");
    for (const k of ["completedSteps", "totalSteps", "masteryPercent"]) req(errors, c, cp, k, "number");
    arr(errors, c, cp, "lessons").forEach((l, li) => {
      if (!isObj(l)) return void errors.push(`${cp}.lessons[${li}] must be an object`);
      req(errors, l, `${cp}.lessons[${li}]`, "lessonId", "string");
      req(errors, l, `${cp}.lessons[${li}]`, "completed", "boolean");
    });
    arr(errors, c, cp, "assessments").forEach((a, ai) => {
      if (!isObj(a)) return void errors.push(`${cp}.assessments[${ai}] must be an object`);
      for (const k of ["activityId", "kind", "completedAt"]) req(errors, a, `${cp}.assessments[${ai}]`, k, "string");
      for (const k of ["score", "total"]) req(errors, a, `${cp}.assessments[${ai}]`, k, "number");
    });
    arr(errors, c, cp, "evidence").forEach((e, ei) => {
      if (!isObj(e)) return void errors.push(`${cp}.evidence[${ei}] must be an object`);
      for (const k of ["id", "type", "ref", "evidenceMode", "summary"]) req(errors, e, `${cp}.evidence[${ei}]`, k, "string");
    });
  });
  return { ok: errors.length === 0, errors };
}

/**
 * Resolve a learner record against a manifest: which lessons are completed,
 * which record ids are unknown to the manifest (stale or tampered).
 */
export interface ResolvedCourseProgress {
  courseId: CourseId;
  lessonStatus: Record<LessonId, LessonProgress | undefined>;
  completedLessonCount: number;
  lessonCount: number;
  unknownRefs: string[];
}

export function resolveProgressAgainstManifest(
  manifest: CourseManifest,
  record: LearnerRecord
): ResolvedCourseProgress | null {
  const course = record.courses.find((c) => c.courseId === manifest.course.id);
  if (!course) return null;
  const known = new Set<string>();
  const lessonStatus: Record<LessonId, LessonProgress | undefined> = {};
  for (const m of manifest.modules) {
    known.add(m.id);
    for (const l of m.lessons) {
      known.add(l.id);
      lessonStatus[l.id] = undefined;
      for (const a of l.activities) known.add(a.id);
    }
  }
  const unknownRefs = new Set<string>();
  for (const l of course.lessons) {
    if (l.lessonId in lessonStatus) lessonStatus[l.lessonId] = l;
    else unknownRefs.add(l.lessonId);
  }
  for (const a of course.assessments) {
    if (a.kind !== "domain-review" && !known.has(a.activityId)) unknownRefs.add(a.activityId);
  }
  for (const e of course.evidence) {
    if (e.type !== "competency-practice" && !known.has(e.ref)) unknownRefs.add(e.ref);
  }
  const lessonCount = Object.keys(lessonStatus).length;
  const completedLessonCount = Object.values(lessonStatus).filter((l) => l?.completed).length;
  return { courseId: course.courseId, lessonStatus, completedLessonCount, lessonCount, unknownRefs: [...unknownRefs] };
}
