import type { TopicExperience } from "@/content/types";

/** LES — Errors in depth (PowerShell II Module 2). */
export const PS2_ERROR_HANDLING_DEPTH_EXPERIENCE: TopicExperience = {
  anchor: { type: "powershell-automation" },
  screens: [
    {
      id: "hero",
      type: "hero",
      powershellAutomationStage: 3,
      headline: "Unattended automation is judged on how it fails.",
      body: "While you are watching, a red error is obvious. At 3 a.m. on a schedule, the only thing that exists is what your script recorded. Error handling is not defensive decoration — it is the difference between a two-minute fix and a morning of guessing.",
    },
    {
      id: "two-kinds",
      type: "teach",
      powershellAutomationStage: 3,
      headline: "Two kinds of error, one recurring surprise.",
      body: "A terminating error stops the pipeline and can be caught. A non-terminating error reports itself and lets the next command run — and try/catch will not see it. Most cmdlet failures are non-terminating, which is why so many catch blocks never fire.",
      terms: [
        {
          id: "non-terminating",
          label: "Non-terminating error",
          tier: "now",
          shortDefinition:
            "An error a cmdlet reports without stopping execution. Promote it with -ErrorAction Stop before you can catch it.",
        },
      ],
    },
    {
      id: "erroraction",
      type: "teach",
      powershellAutomationStage: 3,
      headline: "-ErrorAction is a decision, not a habit.",
      body: "Stop promotes to terminating so you can catch it. Continue reports and carries on. SilentlyContinue hides it entirely. Ignore does not even record it. $ErrorActionPreference sets the default for a whole scope — powerful and easy to forget you set.",
      studyTip: {
        title: "SilentlyContinue is a claim",
        body: "Using it says: I know this can fail, and the failure genuinely does not matter. If you cannot say that sentence out loud, use Stop.",
      },
    },
    {
      id: "catch-well",
      type: "teach",
      powershellAutomationStage: 3,
      headline: "Catch specifically, report usefully, clean up always.",
      body: "$_ inside catch is the ErrorRecord: $_.Exception.Message for the text, $_.Exception.GetType().FullName for the type, $_.ScriptStackTrace for where. You can catch a specific type before a general one. finally runs whether or not anything failed — that is where cleanup belongs.",
      media: {
        kind: "flow",
        items: [
          { icon: "shield", label: "try" },
          { icon: "bug", label: "catch typed" },
          { icon: "bug", label: "catch general" },
          { icon: "list-checks", label: "finally" },
        ],
      },
    },
    {
      id: "throw",
      type: "teach",
      powershellAutomationStage: 3,
      headline: "Sometimes the right answer is to fail on purpose.",
      body: "throw raises a terminating error with your message. Use it when a precondition is not met and continuing would produce a wrong answer — an empty input file, a subscription you are not in, a required column missing. A loud stop beats a confident wrong report.",
    },
    {
      id: "misconception",
      type: "misconception",
      powershellAutomationStage: 3,
      headline: "An empty catch block is worse than no catch block.",
      body: "catch { } converts a visible failure into a silent success. The script exits zero, the scheduler records a green run, and the report is missing or wrong. If you catch it, you owe the next person a message.",
    },
    {
      id: "check",
      type: "checkpoint",
      powershellAutomationStage: 3,
      headline: "Quick check — error handling",
      checkpointQuestionId: "ps2-error-handling-depth-q1",
    },
    {
      id: "summary",
      type: "summary",
      powershellAutomationStage: 3,
      headline: "Promote, catch, report, clean up — and decide each time.",
      body: "-ErrorAction Stop makes a failure catchable. A typed catch tells you what went wrong. finally guarantees cleanup. throw stops a run that would otherwise lie. The one thing you never do is swallow an error without a word.",
    },
  ],
};
