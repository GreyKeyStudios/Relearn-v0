import type { TopicExperience } from "@/content/types";

/** LES — Commit messages (Git/GitHub Module 5). */
export const GIT_COMMIT_MESSAGES_EXPERIENCE: TopicExperience = {
  anchor: { type: "git-workflow" },
  screens: [
    {
      id: "hero-message",
      type: "hero",
      gitWorkflowStep: 3,
      headline: "Messages explain why, not just what.",
      body: "Fix bug tells nothing. Fix login timeout on slow networks tells future you and reviewers what mattered. Good messages are a professional skill.",
    },
    {
      id: "subject-line",
      type: "teach",
      gitWorkflowStep: 3,
      headline: "Write a clear subject line.",
      body: "First line: imperative mood, ~50 chars, no period. Add body after blank line for context — ticket link, tradeoffs, what you tested.",
      studyTip: {
        title: "Template",
        body: "Verb + what changed + why it matters",
      },
    },
    {
      id: "log-readers",
      type: "teach",
      gitWorkflowStep: 3,
      headline: "Your log is read by others.",
      body: "git log --oneline is how teams scan history. WIP and stuff are useless in six months. Write messages you would thank a teammate for.",
    },
    {
      id: "message-length",
      type: "misconception",
      gitWorkflowStep: 3,
      headline: "Short is not empty.",
      body: "Add module 2 staging lesson is enough for small fixes. Big refactors need a body — but never skip the message entirely.",
    },
    {
      id: "memory-future",
      type: "memory",
      gitWorkflowStep: 3,
      headline: "Future you reads git log.",
      body: "When debugging old code, commit messages are clues. Invest ten seconds now — save ten minutes later.",
    },
    {
      id: "message-check",
      type: "checkpoint",
      gitWorkflowStep: 3,
      headline: "Quick check — good message?",
      checkpointQuestionId: "git-commit-messages-q1",
    },
    {
      id: "summary-message",
      type: "summary",
      gitWorkflowStep: 4,
      headline: "Explain your changes.",
      body: "Clear subject, optional body, imperative voice. Next: .gitignore — keep secrets and junk out of history.",
    },
  ],
};
