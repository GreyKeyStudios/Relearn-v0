/**
 * One-time utility: tag all CCNA quiz + questionBank items with objectiveId + difficulty.
 * Run: npx tsx scripts/tag-ccna-objectives.ts
 */
import * as fs from "fs";
import * as path from "path";
import { ccna } from "../src/content/certifications/ccna";

const filePath = path.join(__dirname, "../src/content/certifications/ccna.ts");
let content = fs.readFileSync(filePath, "utf8");

function difficultyForIndex(i: number, total: number): "easy" | "medium" | "hard" {
  const easyEnd = Math.max(1, Math.floor(total * 0.4));
  const hardStart = Math.floor(total * 0.6);
  if (i < easyEnd) return "easy";
  if (i < hardStart) return "medium";
  return "hard";
}

const tags = new Map<string, { objectiveId: string; difficulty: string }>();

for (const domain of ccna.domains) {
  for (const topic of domain.topics) {
    const objectives = topic.objectives ?? [];
    if (objectives.length === 0) continue;

    const allQuestions = [...topic.quiz, ...(topic.questionBank ?? [])];
    allQuestions.forEach((q, i) => {
      tags.set(q.id, {
        objectiveId: objectives[i % objectives.length],
        difficulty: difficultyForIndex(i, allQuestions.length),
      });
    });
  }
}

let tagged = 0;
for (const [questionId, meta] of tags) {
  const idPattern = `id: "${questionId}"`;
  const idx = content.indexOf(idPattern);
  if (idx === -1) {
    console.warn(`Question not found: ${questionId}`);
    continue;
  }

  const slice = content.slice(idx, idx + 1200);
  if (slice.includes("objectiveId:")) continue;

  const explMatch = slice.match(
    /explanation:\s*("(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*`)/m
  );
  if (!explMatch) {
    console.warn(`No explanation for: ${questionId}`);
    continue;
  }

  const afterExpl = idx + (explMatch.index ?? 0) + explMatch[0].length;
  const tail = content.slice(afterExpl, afterExpl + 20);
  const commaOffset = tail.startsWith(",") ? 1 : 0;
  const insertAt = afterExpl + commaOffset;
  const insertion = `\n              objectiveId: "${meta.objectiveId}",\n              difficulty: "${meta.difficulty}",`;
  content = content.slice(0, insertAt) + insertion + content.slice(insertAt);
  tagged++;
}

fs.writeFileSync(filePath, content);
console.log(`Tagged ${tagged} questions in ccna.ts`);
