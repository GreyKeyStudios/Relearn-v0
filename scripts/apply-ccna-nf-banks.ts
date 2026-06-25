/**
 * One-shot patch: append Network Fundamentals bank questions to ccna.ts
 * Run: npx tsx scripts/apply-ccna-nf-banks.ts
 */
import fs from "node:fs";
import path from "node:path";
import { NETWORK_FUNDAMENTALS_BANK_ADDITIONS } from "./data/ccna-nf-bank-additions";

const CCNA_PATH = path.join(
  process.cwd(),
  "src/content/certifications/ccna.ts",
);

type BankQ = (typeof NETWORK_FUNDAMENTALS_BANK_ADDITIONS)[string][number];

function escapeTs(str: string): string {
  return str.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, " ");
}

function formatQuestion(q: BankQ, indent: string): string {
  const choices = q.choices
    .map(
      (c) =>
        `${indent}  { id: "${c.id}", text: "${escapeTs(c.text)}" }`,
    )
    .join(",\n");
  return `${indent}{
${indent}  id: "${q.id}",
${indent}  prompt: "${escapeTs(q.prompt)}",
${indent}  choices: [
${choices}
${indent}  ],
${indent}  correctChoiceId: "${q.correctChoiceId}",
${indent}  explanation: "${escapeTs(q.explanation)}",
${indent}  objectiveId: "${q.objectiveId}",
${indent}  difficulty: "${q.difficulty}",
${indent}}`;
}

function formatBlock(questions: BankQ[]): string {
  return questions.map((q) => formatQuestion(q, "            ")).join(",\n");
}

function findTopicBlock(content: string, topicId: string): { start: number; end: number } | null {
  const topicPattern = new RegExp(`id: "${topicId}"`, "m");
  const topicMatch = topicPattern.exec(content);
  if (!topicMatch) return null;

  const bankPattern = /questionBank: \[/g;
  bankPattern.lastIndex = topicMatch.index;
  const bankMatch = bankPattern.exec(content);
  if (!bankMatch) return null;

  let depth = 1;
  let i = bankMatch.index + "questionBank: [".length;
  while (i < content.length && depth > 0) {
    if (content[i] === "[") depth++;
    else if (content[i] === "]") depth--;
    i++;
  }
  if (depth !== 0) return null;

  const end = i - 1;
  const start = bankMatch.index + "questionBank: [".length;
  return { start, end };
}

function main() {
  let content = fs.readFileSync(CCNA_PATH, "utf8");
  let appended = 0;

  for (const [topicId, questions] of Object.entries(NETWORK_FUNDAMENTALS_BANK_ADDITIONS)) {
    const block = findTopicBlock(content, topicId);
    if (!block) {
      console.error(`Could not find questionBank for topic: ${topicId}`);
      process.exit(1);
    }

    const inner = content.slice(block.start, block.end).trimEnd();
    const existingIds = new Set(
      [...inner.matchAll(/id: "([^"]+)"/g)].map((m) => m[1]),
    );
    const toAdd = questions.filter((q) => !existingIds.has(q.id));
    if (toAdd.length === 0) {
      console.log(`  ${topicId}: already patched (${questions.length} ids present)`);
      continue;
    }

    const insertion =
      inner.length > 0 ? `,\n${formatBlock(toAdd)}` : formatBlock(toAdd);
    content =
      content.slice(0, block.end) + insertion + content.slice(block.end);
    appended += toAdd.length;
    console.log(`  ${topicId}: +${toAdd.length} questions`);
  }

  if (appended === 0) {
    console.log("No changes needed.");
    return;
  }

  fs.writeFileSync(CCNA_PATH, content, "utf8");
  console.log(`\nWrote ${appended} questions to ccna.ts`);
}

main();
