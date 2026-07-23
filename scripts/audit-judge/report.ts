import type { LessonFinding, LessonJudgment } from "./types";

const SEVERITY_ORDER = { blocker: 0, high: 1, medium: 2, low: 3 } as const;

export function renderJudgmentMarkdown(
  judgments: LessonJudgment[],
  opts?: { title?: string }
): string {
  const lines: string[] = [];
  lines.push(opts?.title ?? "# CCNA lesson judgment (pilot)");
  lines.push("");
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push(`Lessons: ${judgments.map((j) => j.lessonId).join(", ")}`);
  lines.push("");

  const all = judgments.flatMap((j) =>
    j.findings.map((f) => ({ ...f, lessonTitle: j.lessonTitle }))
  );
  all.sort(
    (a, b) =>
      SEVERITY_ORDER[a.severity] - SEVERITY_ORDER[b.severity] ||
      b.confidence - a.confidence
  );

  lines.push("## Findings by severity");
  lines.push("");
  if (all.length === 0) {
    lines.push("_No findings returned._");
    lines.push("");
  } else {
    for (const f of all) {
      lines.push(
        `### [${f.severity.toUpperCase()}] ${f.lessonTitle} · ${f.checkpoint} · ${f.category}`
      );
      lines.push("");
      lines.push(`- **Observation:** ${f.observation}`);
      lines.push(`- **Learner impact:** ${f.learnerImpact}`);
      lines.push(`- **Recommendation:** ${f.recommendation}`);
      lines.push(`- **Evidence:** ${f.evidence}`);
      lines.push(`- **Confidence:** ${f.confidence}`);
      lines.push("");
    }
  }

  lines.push("## Per-lesson summaries");
  lines.push("");
  for (const j of judgments) {
    lines.push(`### ${j.lessonTitle} (\`${j.lessonId}\`)`);
    lines.push("");
    lines.push(`Model: ${j.model}`);
    lines.push("");
    lines.push(j.lessonSummary || "_No summary._");
    lines.push("");
  }

  // Cross-lesson patterns: repeated categories
  const byCat = new Map<string, number>();
  for (const f of all) {
    byCat.set(f.category, (byCat.get(f.category) ?? 0) + 1);
  }
  const repeated = [...byCat.entries()]
    .filter(([, n]) => n >= 2)
    .sort((a, b) => b[1] - a[1]);

  lines.push("## Cross-lesson patterns");
  lines.push("");
  if (repeated.length === 0) {
    lines.push("No repeated categories across findings.");
  } else {
    for (const [cat, n] of repeated) {
      lines.push(`- **${cat}** appeared in ${n} finding(s)`);
    }
  }
  lines.push("");
  lines.push(
    "Approve or reject recommendations before changing product or curriculum. Judgment is optional and separate from Playwright regression."
  );
  lines.push("");

  return lines.join("\n");
}

export function attachLessonId(
  lessonId: string,
  findings: Omit<LessonFinding, "lessonId">[]
): LessonFinding[] {
  return findings.map((f) => ({ ...f, lessonId }));
}
