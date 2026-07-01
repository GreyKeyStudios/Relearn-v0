import type { QuizQuestion } from "@/content/types";

export interface LessonStep {
  id: string;
  content: string;
  checkpoint: QuizQuestion | null;
}

/** Split lesson prose into bite-sized chunks for progressive disclosure. */
export function chunkLessonContent(content: string, maxChars = 380): string[] {
  const paragraphs = content.split("\n\n").map((p) => p.trim()).filter(Boolean);
  if (paragraphs.length === 0) return [content.trim()];

  const chunks: string[] = [];
  let buffer = "";

  for (const paragraph of paragraphs) {
    const next = buffer ? `${buffer}\n\n${paragraph}` : paragraph;
    if (buffer && next.length > maxChars) {
      chunks.push(buffer);
      buffer = paragraph;
    } else {
      buffer = next;
    }
  }

  if (buffer) chunks.push(buffer);
  return chunks.length > 0 ? chunks : [content.trim()];
}

const MAX_LESSON_CHECKPOINTS = 2;

/**
 * Place a small number of comprehension checks near the end of the lesson.
 * Skips the intro step and uses the last pool entries (quiz authors order easy → hard).
 */
export function assignLessonCheckpoints(
  stepCount: number,
  pool: QuizQuestion[]
): (QuizQuestion | null)[] {
  const checkpoints: (QuizQuestion | null)[] = Array.from(
    { length: stepCount },
    () => null
  );
  if (stepCount <= 1 || pool.length === 0) return checkpoints;

  const count = Math.min(MAX_LESSON_CHECKPOINTS, pool.length, stepCount - 1);
  const questions = pool.slice(-count);
  let firstStep = stepCount - count;
  if (firstStep < 1) firstStep = 1;

  for (let i = 0; i < count; i++) {
    checkpoints[firstStep + i] = questions[i] ?? null;
  }
  return checkpoints;
}

function resolveCheckpoints(
  stepCount: number,
  pool: QuizQuestion[],
  explicitCheckpointIds?: string[]
): (QuizQuestion | null)[] {
  if (explicitCheckpointIds && explicitCheckpointIds.length > 0) {
    return Array.from({ length: stepCount }, (_, index) => {
      const id = explicitCheckpointIds[index];
      if (!id) return null;
      return pool.find((q) => q.id === id) ?? null;
    });
  }
  return assignLessonCheckpoints(stepCount, pool);
}

/** Build stepped lesson flow with optional checkpoint questions on later chunks. */
export function buildLessonSteps(
  content: string,
  checkpointPool: QuizQuestion[],
  explicitCheckpointIds?: string[]
): LessonStep[] {
  const chunks = chunkLessonContent(content);
  const checkpoints = resolveCheckpoints(
    chunks.length,
    checkpointPool,
    explicitCheckpointIds
  );

  return chunks.map((chunk, index) => ({
    id: `step-${index}`,
    content: chunk,
    checkpoint: checkpoints[index] ?? null,
  }));
}

export function lessonProgressStorageKey(certId: string, topicId: string): string {
  return `lesson-step:${certId}:${topicId}`;
}

export function hasSavedLessonProgress(certId: string, topicId: string): boolean {
  if (typeof sessionStorage === "undefined") return false;
  try {
    return sessionStorage.getItem(lessonProgressStorageKey(certId, topicId)) != null;
  } catch {
    return false;
  }
}

export function clearLessonProgress(certId: string, topicId: string): void {
  if (typeof sessionStorage === "undefined") return;
  try {
    sessionStorage.removeItem(lessonProgressStorageKey(certId, topicId));
  } catch {
    /* ignore */
  }
}
