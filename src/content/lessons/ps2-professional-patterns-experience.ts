import type { TopicExperience } from "@/content/types";

/** LES — Professional automation patterns and capstone framing (PowerShell II Module 6). */
export const PS2_PROFESSIONAL_PATTERNS_EXPERIENCE: TopicExperience = {
  anchor: { type: "powershell-automation" },
  screens: [
    {
      id: "hero",
      type: "hero",
      powershellAutomationStage: 5,
      headline: "The patterns that make automation trustworthy are the same ones every module has been teaching.",
      body: "Validation, dry runs, logging, least privilege, retries, idempotence, configuration outside the code, documentation. None of them are advanced. What makes someone a professional is that they are present by default, not added after the incident.",
    },
    {
      id: "shouldprocess",
      type: "teach",
      powershellAutomationStage: 5,
      headline: "SupportsShouldProcess gives your own tool -WhatIf.",
      body: "Declare [CmdletBinding(SupportsShouldProcess)] and wrap each state change in if ($PSCmdlet.ShouldProcess($target, 'Action')) { }. You now get -WhatIf and -Confirm for free, and a colleague can preview your tool the same way they preview a Microsoft cmdlet. Set ConfirmImpact='High' when the operation deserves a prompt by default.",
      terms: [
        {
          id: "shouldprocess",
          label: "ShouldProcess",
          tier: "now",
          shortDefinition:
            "The gate that makes -WhatIf and -Confirm work inside your own advanced functions.",
        },
      ],
    },
    {
      id: "config",
      type: "teach",
      powershellAutomationStage: 5,
      headline: "Separate configuration from code.",
      body: "Server names, thresholds, output paths, and recipient lists belong in a JSON or PSD1 file the script reads — not in literals you have to edit and re-test. The payoff is that changing which machines you inventory stops being a code change, and the same script runs in test and production with a different config file.",
      media: {
        kind: "flow",
        items: [
          { icon: "settings", label: "config.json" },
          { icon: "terminal", label: "Script" },
          { icon: "file-spreadsheet", label: "Report" },
          { icon: "list-checks", label: "Log" },
        ],
      },
    },
    {
      id: "output",
      type: "teach",
      powershellAutomationStage: 5,
      headline: "Output is an interface. Logging is a separate one.",
      body: "Return objects on the success stream so callers can pipe them. Send narration to Write-Verbose, problems to Write-Warning, and failures to the error stream — never mix them into your data. Write-Host is for a human at a console and nothing else, because it is the one stream nobody can capture or redirect meaningfully.",
      studyTip: {
        title: "One rule settles most of it",
        body: "If a machine might consume it, return it. If only a human will read it, write it to a stream named after what it is.",
      },
    },
    {
      id: "audit",
      type: "teach",
      powershellAutomationStage: 5,
      headline: "A log that answers who, what, when, and what happened.",
      body: "Every run should leave a record with a timestamp, the operator or identity, the scope it targeted, per-item outcomes, and a summary count. That is what turns \"the script ran\" into evidence you can hand to an auditor or paste into a ticket — and it is what lets you prove your automation was not the cause of the outage.",
    },
    {
      id: "misconception",
      type: "misconception",
      powershellAutomationStage: 5,
      headline: "\"I will add error handling and logging once it works.\"",
      body: "You will not, and the version without them is the version that goes on a schedule. Worse, retrofitting changes the structure — a script written without a per-item result object has to be rewritten to produce one. Design the result shape and the failure path first; the happy path is the easy part.",
    },
    {
      id: "check",
      type: "checkpoint",
      powershellAutomationStage: 5,
      headline: "Quick check — professional patterns",
      checkpointQuestionId: "ps2-professional-patterns-q1",
    },
    {
      id: "summary",
      type: "summary",
      powershellAutomationStage: 5,
      headline: "Validate, preview, log, least privilege, retry, configure, document.",
      body: "The capstone asks you to demonstrate these together in one small toolkit. If a reviewer can preview it with -WhatIf, read its help, follow its log, and change its scope without editing code, you have built the thing this course was aiming at.",
    },
  ],
};
