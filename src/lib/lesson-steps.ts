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

/** Build stepped lesson flow with optional checkpoint question after each chunk. */
export function buildLessonSteps(
  content: string,
  checkpointPool: QuizQuestion[]
): LessonStep[] {
  const chunks = chunkLessonContent(content);

  return chunks.map((chunk, index) => ({
    id: `step-${index}`,
    content: chunk,
    checkpoint: checkpointPool[index] ?? null,
  }));
}

export function lessonProgressStorageKey(certId: string, topicId: string): string {
  return `lesson-step:${certId}:${topicId}`;
}
