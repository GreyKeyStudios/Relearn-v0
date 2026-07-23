import type { LessonFinding } from "../types";

export type CheckpointJudgeInput = {
  lessonId: string;
  lessonTitle: string;
  systemPrompt: string;
  userPrompt: string;
  screenshotPath: string;
};

export type CheckpointJudgeResult = {
  findings: Omit<LessonFinding, "lessonId">[];
};

export type LessonJudgeInput = {
  lessonId: string;
  lessonTitle: string;
  systemPrompt: string;
  userPrompt: string;
  screenshotPaths: string[];
};

export type LessonJudgeResult = {
  lessonSummary: string;
  findings: Omit<LessonFinding, "lessonId">[];
};

export interface JudgeProvider {
  readonly name: string;
  readonly model: string;
  judgeCheckpoint(input: CheckpointJudgeInput): Promise<CheckpointJudgeResult>;
  judgeLesson(input: LessonJudgeInput): Promise<LessonJudgeResult>;
}
