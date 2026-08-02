import fs from "node:fs";
import path from "node:path";
import type { Page } from "@playwright/test";
import type { CcnaTopicRef } from "./ccna-catalog";
import type { SoftRubric } from "./lesson-walk";

export type CheckStatus = "pass" | "warn" | "fail";

export interface AuditCheck {
  id: string;
  label: string;
  status: CheckStatus;
  detail?: string;
}

export interface TopicAuditResult {
  topic: CcnaTopicRef;
  checks: AuditCheck[];
  notes: string[];
  soft?: SoftRubric;
  walkSteps?: number;
  walkCompleted?: boolean;
}

export interface CurriculumAuditReport {
  generatedAt: string;
  viewport: string;
  mode: string;
  topicResults: TopicAuditResult[];
}

function statusRank(s: CheckStatus): number {
  if (s === "fail") return 0;
  if (s === "warn") return 1;
  return 2;
}

export function topicGrade(checks: AuditCheck[]): CheckStatus {
  return checks.reduce<CheckStatus>((worst, c) => {
    return statusRank(c.status) < statusRank(worst) ? c.status : worst;
  }, "pass");
}

export async function auditLessonPage(
  page: Page,
  topic: CcnaTopicRef
): Promise<{ checks: AuditCheck[]; notes: string[] }> {
  const checks: AuditCheck[] = [];
  const notes: string[] = [];

  const title = page.getByRole("heading", {
    name: topic.topicName,
    exact: true,
    level: 1,
  });
  const titleVisible = await title.isVisible().catch(() => false);
  checks.push({
    id: "lesson-title",
    label: "Lesson title visible",
    status: titleVisible ? "pass" : "fail",
    detail: titleVisible ? undefined : `Expected h1 "${topic.topicName}"`,
  });

  const back = page.getByRole("link", { name: /Back/i });
  checks.push({
    id: "lesson-back",
    label: "Back navigation present",
    status: (await back.isVisible().catch(() => false)) ? "pass" : "warn",
  });

  const stuckLoading = await page
    .getByText(/Loading your progress/i)
    .isVisible()
    .catch(() => false);
  checks.push({
    id: "lesson-hydrated",
    label: "Lesson finished hydrating",
    status: stuckLoading ? "fail" : "pass",
  });

  const completeBadge = page.getByText(/Complete|Lesson complete/i).first();
  const practicePath = page.getByText(/Practice path/i);
  const hasHub =
    (await completeBadge.isVisible().catch(() => false)) ||
    (await practicePath.isVisible().catch(() => false));
  checks.push({
    id: "lesson-hub",
    label: "Post-lesson hub / practice path visible",
    status: hasHub ? "pass" : "warn",
    detail: hasHub
      ? undefined
      : "Expected completed-lesson hub (seed should unlock practice path)",
  });

  if (topic.quizCount > 0) {
    const quizCta = page.getByRole("link", { name: /topic quiz|Take the topic quiz/i });
    checks.push({
      id: "lesson-quiz-cta",
      label: "Quiz CTA in practice path",
      status: (await quizCta.first().isVisible().catch(() => false)) ? "pass" : "warn",
    });
  }

  if (topic.flashcardCount > 0) {
    const fcCta = page.getByRole("link", { name: /flashcards|Run flashcards/i });
    checks.push({
      id: "lesson-flash-cta",
      label: "Flashcards CTA in practice path",
      status: (await fcCta.first().isVisible().catch(() => false)) ? "pass" : "warn",
    });
  }

  const keyFacts = page.getByText(/Key facts|reinforce before practice/i).first();
  if (await keyFacts.isVisible().catch(() => false)) {
    checks.push({
      id: "lesson-key-facts",
      label: "Key facts section present",
      status: "pass",
    });
  } else {
    checks.push({
      id: "lesson-key-facts",
      label: "Key facts section present",
      status: "warn",
      detail: "Key facts block not found — may be empty content",
    });
    notes.push("No key-facts cue found on lesson hub");
  }

  const whatsNext = page.getByText(/What.?s next|Next topic|Continue to/i).first();
  checks.push({
    id: "lesson-whats-next",
    label: "What's next / continue cue",
    status: (await whatsNext.isVisible().catch(() => false)) ? "pass" : "warn",
  });

  return { checks, notes };
}

export async function auditQuizPage(
  page: Page,
  topic: CcnaTopicRef
): Promise<{ checks: AuditCheck[]; notes: string[] }> {
  const checks: AuditCheck[] = [];
  const notes: string[] = [];

  if (topic.quizCount === 0) {
    checks.push({
      id: "quiz-exists",
      label: "Topic has quiz questions",
      status: "warn",
      detail: "No quiz in curriculum for this topic",
    });
    return { checks, notes };
  }

  const prompt = page.locator("h2, h3").filter({ hasText: /.+/ }).first();
  checks.push({
    id: "quiz-prompt",
    label: "Quiz question prompt visible",
    status: (await prompt.isVisible().catch(() => false)) ? "pass" : "fail",
  });

  const choices = page.locator("button.min-h-12:not(:disabled)");
  const choiceCount = await choices.count();
  checks.push({
    id: "quiz-choices",
    label: "Answer choices present",
    status: choiceCount >= 2 ? "pass" : "fail",
    detail: `Found ${choiceCount} choice buttons`,
  });

  if (choiceCount >= 1) {
    await choices.first().click();
    const checkBtn = page.getByRole("button", { name: /Check Answer/i });
    if (await checkBtn.isVisible().catch(() => false)) {
      await checkBtn.click();
      const explanation = page.getByText(/Explanation/i).first();
      const explained = await explanation.isVisible().catch(() => false);
      checks.push({
        id: "quiz-explanation",
        label: "Explanation after check",
        status: explained ? "pass" : "warn",
        detail: explained ? undefined : "No Explanation label after Check Answer",
      });
      if (!explained) notes.push("Missing post-answer explanation cue");
    } else {
      checks.push({
        id: "quiz-explanation",
        label: "Explanation after check",
        status: "warn",
        detail: "Check Answer control not found",
      });
    }
  }

  return { checks, notes };
}

export async function auditFlashcardsPage(
  page: Page,
  topic: CcnaTopicRef
): Promise<{ checks: AuditCheck[]; notes: string[] }> {
  const checks: AuditCheck[] = [];
  const notes: string[] = [];

  if (topic.flashcardCount === 0) {
    checks.push({
      id: "flash-exists",
      label: "Topic has flashcards",
      status: "warn",
      detail: "No flashcards for this topic",
    });
    return { checks, notes };
  }

  const heading = page.getByRole("heading", { name: /Flashcard/i });
  checks.push({
    id: "flash-heading",
    label: "Flashcards page heading",
    status: (await heading.isVisible().catch(() => false)) ? "pass" : "warn",
  });

  const interaction = page
    .getByText(/Got it|Missed|Tap to flip|Show answer|Flip/i)
    .first();
  checks.push({
    id: "flash-controls",
    label: "Flashcard interaction controls",
    status: (await interaction.isVisible().catch(() => false)) ? "pass" : "warn",
  });

  return { checks, notes };
}

export function renderAuditMarkdown(report: CurriculumAuditReport): string {
  const lines: string[] = [];
  lines.push("# CCNA curriculum UX audit");
  lines.push("");
  lines.push(`Generated: ${report.generatedAt}`);
  lines.push(`Viewport: ${report.viewport}`);
  lines.push(`Mode: ${report.mode}`);
  lines.push(`Topics audited: ${report.topicResults.length}`);
  lines.push("");

  const fails = report.topicResults.filter((t) => topicGrade(t.checks) === "fail");
  const warns = report.topicResults.filter((t) => topicGrade(t.checks) === "warn");
  const passes = report.topicResults.filter((t) => topicGrade(t.checks) === "pass");

  lines.push("## Summary");
  lines.push("");
  lines.push(`- Mechanical Pass: ${passes.length}`);
  lines.push(`- Mechanical Warn: ${warns.length}`);
  lines.push(`- Mechanical Fail: ${fails.length}`);
  lines.push("");
  lines.push(
    "Mechanical checks catch broken flow. Soft scores (1–5) are **heuristics** for clarity / clutter / next-step — a triage list for human review, not a pedagogy grade."
  );
  lines.push("");

  const withSoft = report.topicResults.filter((t) => t.soft);
  if (withSoft.length > 0) {
    const ranked = [...withSoft].sort(
      (a, b) => (a.soft?.overall ?? 5) - (b.soft?.overall ?? 5)
    );
    lines.push("## Look here first (lowest soft scores)");
    lines.push("");
    lines.push("| Topic | Overall | Clarity | Clutter | Next step | Walk |");
    lines.push("|-------|---------|---------|---------|-----------|------|");
    for (const t of ranked) {
      const s = t.soft!;
      const walk = t.walkCompleted
        ? `${t.walkSteps ?? 0} steps`
        : `STALL (${t.walkSteps ?? 0})`;
      lines.push(
        `| ${t.topic.topicName} | ${s.overall} | ${s.clarity} | ${s.clutter} | ${s.nextStep} | ${walk} |`
      );
    }
    lines.push("");
  }

  if (fails.length > 0) {
    lines.push("## Failures to fix first");
    lines.push("");
    for (const t of fails) {
      lines.push(`- **${t.topic.topicName}** (\`${t.topic.topicId}\`)`);
      for (const c of t.checks.filter((x) => x.status === "fail")) {
        lines.push(`  - FAIL ${c.label}${c.detail ? `: ${c.detail}` : ""}`);
      }
    }
    lines.push("");
  }

  let currentDomain = "";
  for (const result of report.topicResults) {
    if (result.topic.domainName !== currentDomain) {
      currentDomain = result.topic.domainName;
      lines.push(`## ${currentDomain}`);
      lines.push("");
    }

    const grade = topicGrade(result.checks);
    const softBit = result.soft ? ` · soft ${result.soft.overall}/5` : "";
    lines.push(`### ${result.topic.topicName} — ${grade.toUpperCase()}${softBit}`);
    lines.push("");
    lines.push(
      `IDs: \`${result.topic.topicId}\` · quiz ${result.topic.quizCount} · cards ${result.topic.flashcardCount} · bank ${result.topic.bankCount} · assignments ${result.topic.assignmentCount}`
    );
    if (result.soft) {
      lines.push("");
      lines.push(
        `Soft rubric: clarity **${result.soft.clarity}** · clutter **${result.soft.clutter}** · next-step **${result.soft.nextStep}** · overall **${result.soft.overall}**`
      );
      lines.push(
        `First-time walk: ${result.walkCompleted ? "completed" : "STALLED"} in ${result.walkSteps ?? 0} advances`
      );
      for (const r of result.soft.reasons) {
        lines.push(`- ${r}`);
      }
    }
    lines.push("");
    for (const c of result.checks) {
      const mark = c.status === "pass" ? "PASS" : c.status === "warn" ? "WARN" : "FAIL";
      lines.push(`- **${mark}** ${c.label}${c.detail ? ` — ${c.detail}` : ""}`);
    }
    if (result.notes.length > 0) {
      lines.push("");
      lines.push("Notes:");
      for (const n of result.notes) lines.push(`- ${n}`);
    }
    lines.push("");
  }

  lines.push("## Rubric used");
  lines.push("");
  lines.push("| Check | Intent |");
  lines.push("|-------|--------|");
  lines.push("| First-time Continue walk | Learner can finish the lesson player |");
  lines.push("| Soft clarity / clutter / next-step | Triage heuristics for human review |");
  lines.push("| Lesson title / back / hydrate | Page identity and escape hatch |");
  lines.push("| Post-lesson hub | Learner can see what to do after reading |");
  lines.push("| Quiz / flash CTAs | Practice path is discoverable |");
  lines.push("| Quiz explanation | Core study loop feedback |");
  lines.push("| Flashcard controls | Recall loop is operable |");
  lines.push("");

  return lines.join("\n");
}

export function writeAuditReport(report: CurriculumAuditReport): string {
  const dir = path.join(process.cwd(), "reports");
  fs.mkdirSync(dir, { recursive: true });
  const out = path.join(dir, "ccna-ux-audit.md");
  fs.writeFileSync(out, renderAuditMarkdown(report), "utf8");
  return out;
}
