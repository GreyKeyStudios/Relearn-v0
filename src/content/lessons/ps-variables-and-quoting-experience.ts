import type { TopicExperience } from "@/content/types";

/** LES — Variables and quoting (PowerShell Module 4). */
export const PS_VARIABLES_AND_QUOTING_EXPERIENCE: TopicExperience = {
  anchor: { type: "powershell-shell" },
  screens: [
    {
      id: "hero-vars",
      type: "hero",
      powershellShellStep: 2,
      headline: "Store values in variables.",
      body: "Variables start with $: $path = 'C:\\Logs'. Reuse $path in later commands instead of retyping paths — fewer typos, easier edits.",
    },
    {
      id: "assignment",
      type: "teach",
      powershellShellStep: 2,
      headline: "Assignment and expansion.",
      body: "$files = Get-ChildItem .\\Logs. $files.Count shows how many. Double quotes expand variables: \"Found $($files.Count) files\". Single quotes are literal text.",
      terms: [
        {
          id: "variable",
          label: "Variable",
          tier: "basics",
          shortDefinition:
            "Named storage for objects or values — always prefixed with $ in PowerShell.",
        },
      ],
    },
    {
      id: "quoting",
      type: "misconception",
      powershellShellStep: 2,
      headline: "Quotes matter.",
      body: "'$home' prints literally $home. \"$home\" expands to your profile path. Paths with spaces need quotes: Set-Location 'C:\\Program Files'.",
    },
    {
      id: "vars-check",
      type: "checkpoint",
      powershellShellStep: 2,
      headline: "Quick check — variables",
      checkpointQuestionId: "ps-variables-and-quoting-q1",
    },
    {
      id: "summary",
      type: "summary",
      powershellShellStep: 2,
      headline: "Name it once.",
      body: "Capture pipeline results in variables. Use double quotes when you need expansion, single quotes for fixed strings. Next: control flow in scripts.",
    },
  ],
};
