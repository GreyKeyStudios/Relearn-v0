import { ccna } from "../src/content/certifications/ccna";
import { CCNA_OBJECTIVES } from "../src/content/objectives/ccna";
import {
  CERT_ANCHOR_TOPICS,
  getContentExpansionLevel,
} from "../src/lib/content-expansion";

interface Row {
  topic: string;
  domain: string;
  level: string;
  anchor: boolean;
  quiz: number;
  bank: number;
  flashcards: number;
  lessonWords: number;
  guided: boolean;
  scenario: boolean;
  difficulty: string | null;
  minutes: number | null;
}

const rows: Row[] = [];
for (const d of ccna.domains) {
  for (const t of d.topics) {
    rows.push({
      topic: t.id,
      domain: d.id,
      level: getContentExpansionLevel(t),
      anchor: CERT_ANCHOR_TOPICS.ccna.has(t.id),
      quiz: t.quiz.length,
      bank: t.questionBank?.length ?? 0,
      flashcards: t.flashcards.length,
      lessonWords: t.lesson.content.split(/\s+/).filter(Boolean).length,
      guided: !!t.guidedExample?.steps?.length,
      scenario: !!t.realWorldScenario,
      difficulty: t.difficulty ?? null,
      minutes: t.estimatedStudyMinutes ?? null,
    });
  }
}

const full = rows.filter((r) => r.level === "full").length;
const standard = rows.filter((r) => r.level === "standard").length;
const minimal = rows.filter((r) => r.level === "minimal").length;

console.log("=== CCNA content audit ===\n");
console.log(`Topics: ${rows.length} | full: ${full} | standard: ${standard} | minimal: ${minimal}`);
console.log(`Anchors at full: ${rows.filter((r) => r.anchor && r.level === "full").length}/5`);
console.log(`Bank < 8: ${rows.filter((r) => r.bank < 8).length}`);
console.log(`Bank < 15: ${rows.filter((r) => r.bank < 15).length}`);
console.log(`Lesson < 500 words: ${rows.filter((r) => r.lessonWords < 500).length}`);
console.log(`Lesson < 300 words: ${rows.filter((r) => r.lessonWords < 300).length}`);

console.log("\n--- Per topic ---");
for (const r of rows) {
  const flags: string[] = [];
  if (r.anchor) flags.push("ANCHOR");
  if (r.bank < 8) flags.push("bank<8");
  if (r.lessonWords < 500) flags.push(`words=${r.lessonWords}`);
  console.log(
    `${r.level.padEnd(8)} ${r.topic.padEnd(24)} q:${String(r.quiz).padStart(2)} b:${String(r.bank).padStart(3)} f:${String(r.flashcards).padStart(2)} ${flags.join(" ")}`,
  );
}

console.log("\n--- Priority deepen (non-anchor, standard, bank<15 or words<500) ---");
for (const r of rows.filter(
  (x) =>
    !x.anchor &&
    x.level === "standard" &&
    (x.bank < 15 || x.lessonWords < 500),
)) {
  console.log(`  ${r.topic} — bank:${r.bank} words:${r.lessonWords}`);
}

console.log("\n--- Anchor bank sizes (target 50+ long-term) ---");
for (const r of rows.filter((x) => x.anchor)) {
  console.log(`  ${r.topic}: bank=${r.bank} words=${r.lessonWords}`);
}

const objCounts = new Map<string, number>();
for (const o of CCNA_OBJECTIVES) objCounts.set(o.id, 0);
let totalQ = 0;
for (const d of ccna.domains) {
  for (const t of d.topics) {
    for (const q of [...t.quiz, ...(t.questionBank ?? [])]) {
      totalQ++;
      if (q.objectiveId) {
        objCounts.set(q.objectiveId, (objCounts.get(q.objectiveId) ?? 0) + 1);
      }
    }
  }
}
const zeroObj = CCNA_OBJECTIVES.filter((o) => (objCounts.get(o.id) ?? 0) === 0);
const lowObj = CCNA_OBJECTIVES.filter((o) => {
  const c = objCounts.get(o.id) ?? 0;
  return c > 0 && c < 3;
});
console.log(`\n--- Objective coverage (${CCNA_OBJECTIVES.length} objectives, ${totalQ} questions) ---`);
console.log(`Zero questions: ${zeroObj.length}`);
for (const o of zeroObj) console.log(`  ${o.id}: ${o.text}`);
console.log(`1-2 questions: ${lowObj.length}`);
for (const o of lowObj) console.log(`  ${o.id} (${objCounts.get(o.id)}): ${o.text.slice(0, 55)}`);
