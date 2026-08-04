import type {
  AtomicLearningObjective,
  DiagnosticItemSpec,
  ExampleSpec,
  ExplanationBundle,
  FlashcardSpec,
  LessonProductionSpec,
  MasteryRequirementSpec,
  PrereqEdge,
  QuizItemSpec,
} from "../../types";
import { PRODUCTION_MASTERY_REQUIREMENTS } from "../../mastery-compatibility";
import {
  ccnaV20ObjectiveId,
  getCcnaV20OfficialLine,
} from "../../objectives/ccna-200-301-v2.0";

export const BATCH1_SOURCE_IDS = [
  "src-cisco-ccna-200-301-v2.0",
  "src-cisco-ccna-200-301-v1.1",
] as const;

export function officialTextFor(number: string): string {
  const line = getCcnaV20OfficialLine(number);
  if (!line) {
    throw new Error(`Missing official CCNA v2.0 line for ${number}`);
  }
  return line.text;
}

export function masteryEvidence(): MasteryRequirementSpec {
  return {
    ...PRODUCTION_MASTERY_REQUIREMENTS,
    notes:
      PRODUCTION_MASTERY_REQUIREMENTS.notes +
      " Batch-1 specs must not introduce a second mastery/SRS system. " +
      "Live progress keys remain pilot CCNA-* until an explicit remap batch.",
  };
}

export function parentAtomicId(number: string): string {
  return `alo-ccna-v2.0-${number}`;
}

export function teachingAtomic(input: {
  number: string;
  suffix: string;
  statement: string;
  verb: AtomicLearningObjective["verb"];
  difficulty?: AtomicLearningObjective["difficulty"];
  cognitiveLoad?: AtomicLearningObjective["cognitiveLoad"];
  prereqs?: string[];
}): AtomicLearningObjective {
  return {
    id: `alo-ccna-v2.0-${input.number}-${input.suffix}`,
    conceptId: `concept-ccna-v2.0-${input.number}`,
    statement: input.statement,
    verb: input.verb,
    difficulty: input.difficulty ?? "medium",
    cognitiveLoad: input.cognitiveLoad ?? "moderate",
    assumedBackground: "intro-it",
    freshness: "versioned",
    examObjectiveIds: [ccnaV20ObjectiveId(input.number)],
    prerequisiteAtomicIds: input.prereqs ?? [parentAtomicId(input.number)],
    sourceIds: [...BATCH1_SOURCE_IDS],
  };
}

/** Parent atomic statement is always the exact official registry text. */
export function parentAtomic(input: {
  number: string;
  verb: AtomicLearningObjective["verb"];
  prereqs?: string[];
}): AtomicLearningObjective {
  return {
    id: parentAtomicId(input.number),
    conceptId: `concept-ccna-v2.0-${input.number}`,
    statement: officialTextFor(input.number),
    verb: input.verb,
    difficulty: "medium",
    cognitiveLoad: "moderate",
    assumedBackground: "intro-it",
    freshness: "versioned",
    examObjectiveIds: [ccnaV20ObjectiveId(input.number)],
    prerequisiteAtomicIds: input.prereqs ?? [],
    sourceIds: [...BATCH1_SOURCE_IDS],
  };
}

export function atomicEdge(
  id: string,
  fromId: string,
  toId: string,
  rationale: string
): PrereqEdge {
  return {
    id,
    from: { kind: "atomic", id: fromId },
    to: { kind: "atomic", id: toId },
    strength: "required",
    rationale,
  };
}

/** Soft dependency on a live CCNA topic that already teaches foundation skills. */
export function liveTopicEdge(input: {
  id: string;
  topicId: string;
  toAtomicId: string;
  rationale: string;
  strength?: PrereqEdge["strength"];
}): PrereqEdge {
  return {
    id: input.id,
    from: { kind: "live-topic", id: input.topicId, liveTrackId: "ccna" },
    to: { kind: "atomic", id: input.toAtomicId },
    strength: input.strength ?? "recommended",
    rationale: input.rationale,
  };
}

export function lessonSpec(input: {
  number: string;
  title: string;
  liveTopicId?: string;
  atomics: string[];
  explanations: ExplanationBundle;
  quiz: QuizItemSpec[];
  diagnostics: DiagnosticItemSpec[];
  flashcards: FlashcardSpec[];
  misconceptionIds: string[];
  remediationIds: string[];
  simulatorIds: string[];
  examples?: ExampleSpec[];
  cognitiveLoad?: LessonProductionSpec["cognitiveLoad"];
  minutes?: number;
}): LessonProductionSpec {
  return {
    id: `les-ccna-v2.0-${input.number}`,
    liveTrackId: "ccna",
    liveTopicId: input.liveTopicId,
    title: input.title,
    atomicObjectiveIds: input.atomics,
    explanations: input.explanations,
    examples: input.examples ?? [
      {
        id: `ex-ccna-v2.0-${input.number}-primary`,
        title: `${input.title} — worked scenario`,
        layer: "practical",
        steps: [
          "Restate the symptom using the official verb (troubleshoot/configure/select).",
          "Gather only evidence named by the official objective.",
          "Choose the next action that matches the official scope — do not invent exam topics.",
        ],
        sourceIds: [...BATCH1_SOURCE_IDS],
      },
    ],
    flashcards: input.flashcards,
    quiz: input.quiz,
    diagnostics: input.diagnostics,
    misconceptionIds: input.misconceptionIds,
    remediationIds: input.remediationIds,
    simulatorIds: input.simulatorIds,
    sourceIds: [...BATCH1_SOURCE_IDS],
    difficulty: "medium",
    cognitiveLoad: input.cognitiveLoad ?? "moderate",
    assumedBackground: "intro-it",
    freshness: "versioned",
    estimatedStudyMinutes: input.minutes ?? 35,
  };
}

export function mcq(input: {
  id: string;
  prompt: string;
  choices: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation: string;
  examNumber: string;
  atomicIds: string[];
  misconceptionIds?: string[];
}): QuizItemSpec {
  const choices = input.choices.map((text, i) => ({
    id: `${input.id}-c${i}`,
    text,
  }));
  return {
    id: input.id,
    prompt: input.prompt,
    choices,
    correctChoiceId: choices[input.correctIndex].id,
    explanation: input.explanation,
    difficulty: "medium",
    atomicObjectiveIds: input.atomicIds,
    examObjectiveId: ccnaV20ObjectiveId(input.examNumber),
    misconceptionIds: input.misconceptionIds,
  };
}
