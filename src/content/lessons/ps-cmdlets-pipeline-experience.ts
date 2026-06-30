import type { TopicExperience } from "@/content/types";

/** LES — Cmdlets and pipeline (PowerShell Module 1). */
export const PS_CMDLETS_PIPELINE_EXPERIENCE: TopicExperience = {
  anchor: { type: "powershell-shell" },
  screens: [
    {
      id: "hero-verb-noun",
      type: "hero",
      powershellShellStep: 2,
      headline: "Commands read like English.",
      body: "PowerShell cmdlets use Verb-Noun names: Get-Process, Set-Location, New-Item. The verb says what you do; the noun says what you act on.",
    },
    {
      id: "cmdlet-pattern",
      type: "teach",
      powershellShellStep: 2,
      headline: "Verb-Noun pattern.",
      body: "Get = read something. Set = change something. New = create. Remove = delete. Get-ChildItem lists files in a folder. Get-Process lists running programs.",
      terms: [
        {
          id: "cmdlet",
          label: "Cmdlet",
          tier: "basics",
          shortDefinition:
            "A built-in PowerShell command — always Verb-Noun, e.g. Get-Help or Stop-Service.",
        },
      ],
      studyTip: {
        title: "Common verbs",
        body: "Get · Set · New · Remove · Start · Stop · Test",
      },
    },
    {
      id: "pipeline",
      type: "teach",
      powershellShellStep: 4,
      headline: "The pipeline passes objects.",
      body: "The pipe character | sends output from one cmdlet to the next. Unlike plain text shells, PowerShell passes structured objects — so the next command gets rich data, not just lines of text.",
      terms: [
        {
          id: "pipeline",
          label: "Pipeline",
          tier: "basics",
          shortDefinition:
            "Chain cmdlets with | — output of the left cmdlet becomes input to the right.",
        },
      ],
    },
    {
      id: "pipeline-example",
      type: "teach",
      powershellShellStep: 4,
      headline: "Example pipeline.",
      body: "Get-Process | Where-Object CPU -gt 100 lists processes using more than 100 CPU seconds. Get-ChildItem | Select-Object Name, Length shows only file names and sizes.",
      media: {
        kind: "flow",
        items: [
          { icon: "monitor", label: "Get-Process" },
          { icon: "layers", label: "|" },
          { icon: "server", label: "Where-Object" },
        ],
      },
    },
    {
      id: "objects-not-strings",
      type: "misconception",
      powershellShellStep: 3,
      headline: "Output is not just text.",
      body: "In bash you often parse text with awk and grep. In PowerShell you filter objects with Where-Object and shape them with Select-Object — the structure survives the pipeline.",
    },
    {
      id: "cmdlet-check",
      type: "checkpoint",
      powershellShellStep: 2,
      headline: "Quick check — cmdlet names",
      checkpointQuestionId: "ps-cmdlets-pipeline-q1",
    },
    {
      id: "summary",
      type: "summary",
      powershellShellStep: 4,
      headline: "Verb-Noun, then pipe.",
      body: "Read cmdlet names out loud — they tell you what will happen. Use | to chain steps. Next: run your first commands safely.",
    },
  ],
};
