import type { TopicExperience } from "@/content/types";

/** LES — When not to panic (Git/GitHub Module 6). */
export const GIT_WHEN_NOT_TO_PANIC_EXPERIENCE: TopicExperience = {
  anchor: { type: "git-workflow" },
  screens: [
    {
      id: "hero-panic",
      type: "hero",
      gitWorkflowStep: 2,
      headline: "Most Git mistakes are recoverable.",
      body: "Wrong branch, accidental add, push too early — pause. Run git status. Read the message. Pick the undo layer that matches your situation.",
    },
    {
      id: "wrong-branch",
      type: "teach",
      gitWorkflowStep: 4,
      headline: "Committed on wrong branch?",
      body: "Note the commit hash from git log. Switch to correct branch. Cherry-pick the commit or merge the branch — history is not lost.",
    },
    {
      id: "early-push",
      type: "teach",
      gitWorkflowStep: 4,
      headline: "Pushed too early?",
      body: "Do not force-push on shared repos. Add a fix commit or revert on a new branch. Teams prefer visible fixes over rewritten history.",
    },
    {
      id: "force-trap",
      type: "misconception",
      gitWorkflowStep: 3,
      headline: "git push --force is not a reset button.",
      body: "Force push rewrites remote history and can break teammates. Beginners should avoid it until mentors approve — revert instead.",
    },
    {
      id: "memory-stop",
      type: "memory",
      gitWorkflowStep: 2,
      headline: "Stop. Status. Diff. Then act.",
      body: "Random commands make panic worse. Your drill: git status, git log --oneline -5, git diff. Understand state before undo.",
    },
    {
      id: "panic-check",
      type: "checkpoint",
      gitWorkflowStep: 2,
      headline: "Quick check — first move when scared",
      checkpointQuestionId: "git-when-not-to-panic-q1",
    },
    {
      id: "summary-panic",
      type: "summary",
      gitWorkflowStep: 4,
      headline: "Calm recovery is a skill.",
      body: "Status first, match undo to layer, avoid force. Complete the Recovery lab — conflicts, bad add, and the stop-and-status drill.",
    },
  ],
};
