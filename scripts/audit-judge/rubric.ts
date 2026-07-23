import { LEARNER_PERSONA, type CheckpointId } from "./types";

export { LEARNER_PERSONA };

export function checkpointJudgeSystemPrompt(): string {
  return `You are grading a CCNA mobile lesson screenshot for ReLearn.
Persona: ${LEARNER_PERSONA}

Evaluate ONLY what is in the screenshot + provided text context.
Return STRICT JSON matching the schema. No markdown fences.

Focus on practical learner experience:
- What does the learner believe they are supposed to do?
- Is that obvious without scrolling or guessing?
- What concept is this screen trying to teach?
- Does explanation connect to likely misconceptions?
- Is the screen asking the learner to hold too much in working memory?
- Does feedback explain WHY, or only right/wrong?
- What is the single highest-value change?

Categories: bug | flow | clarity | clutter | pedagogy | feedback | prerequisite | pacing
Severity: blocker | high | medium | low
Confidence: 0 to 1

Prefer actionable findings over praise. Skip cosmetic nits (button color, minor spacing) unless they harm learning.
If nothing important is wrong, return an empty findings array (still fill lesson fields when asked).`;
}

export function checkpointUserPrompt(ctx: {
  topicTitle: string;
  checkpoint: CheckpointId | string;
  stepNumber: number;
  totalWalkSteps: number;
  previousAction: string;
  visibleText: string;
  buttons: string[];
  url: string;
}): string {
  return `Lesson: ${ctx.topicTitle}
Checkpoint: ${ctx.checkpoint}
Walk step: ${ctx.stepNumber} / ${ctx.totalWalkSteps}
URL: ${ctx.url}
Previous learner action: ${ctx.previousAction}
Visible buttons/links: ${ctx.buttons.join(" | ") || "(none)"}

Visible text:
${ctx.visibleText}

Return JSON:
{
  "findings": [
    {
      "checkpoint": "${ctx.checkpoint}",
      "severity": "medium",
      "category": "clarity",
      "observation": "...",
      "learnerImpact": "...",
      "recommendation": "...",
      "evidence": "what in the screenshot/text supports this",
      "confidence": 0.7
    }
  ]
}`;
}

export function lessonOverallSystemPrompt(): string {
  return `You are writing an experience-level review of an entire CCNA mobile lesson for ReLearn.
Persona: ${LEARNER_PERSONA}

You receive structured checkpoint notes and a few key screenshots.
Write like a careful product reviewer of learning UX — review the LESSON, not every frame.
Return STRICT JSON only.

Include:
- lessonSummary: 4–8 sentences covering start, middle fatigue, feedback quality, quiz alignment, what next
- findings: cross-cutting issues (category/severity as before). Use checkpoint "lesson-overall" for each.

Classify pacing, pedagogy, prerequisite gaps, and feedback quality when relevant.`;
}

export function lessonOverallUserPrompt(ctx: {
  topicTitle: string;
  totalWalkSteps: number;
  checkpointSummaries: string;
}): string {
  return `Lesson: ${ctx.topicTitle}
Total walk advances: ${ctx.totalWalkSteps}

Checkpoint dossier:
${ctx.checkpointSummaries}

Return JSON:
{
  "lessonSummary": "...",
  "findings": [
    {
      "checkpoint": "lesson-overall",
      "severity": "high",
      "category": "pacing",
      "observation": "...",
      "learnerImpact": "...",
      "recommendation": "...",
      "evidence": "...",
      "confidence": 0.75
    }
  ]
}`;
}
