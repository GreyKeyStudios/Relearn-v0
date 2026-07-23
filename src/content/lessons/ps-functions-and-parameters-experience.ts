import type { TopicExperience } from "@/content/types";

/** LES — Functions and parameters (PowerShell Module 5). */
export const PS_FUNCTIONS_AND_PARAMETERS_EXPERIENCE: TopicExperience = {
  anchor: { type: "powershell-shell" },
  screens: [
    {
      id: "hero-functions",
      type: "hero",
      powershellShellStep: 2,
      headline: "Name your workflow.",
      body: "A function packages commands you run often. param() makes inputs explicit — like cmdlet parameters, but for your own tools.",
    },
    {
      id: "function-syntax",
      type: "teach",
      powershellShellStep: 2,
      headline: "function keyword.",
      body: "function Get-StoppedServices { Get-Service | Where-Object Status -eq Stopped }. Call it: Get-StoppedServices. Save in a .ps1 file to reuse.",
    },
    {
      id: "param-block",
      type: "teach",
      powershellShellStep: 2,
      headline: "param() for inputs.",
      body: "function Get-LogReport { param([string]$Path) Get-ChildItem $Path -Filter *.log }. Call: Get-LogReport -Path C:\\Logs. Typed parameters catch mistakes early.",
      terms: [
        {
          id: "function",
          label: "Function",
          tier: "basics",
          shortDefinition:
            "A named block of PowerShell commands you can call with arguments — building block of scripts.",
        },
      ],
    },
    {
      id: "function-check",
      type: "checkpoint",
      powershellShellStep: 2,
      headline: "Quick check — functions",
      checkpointQuestionId: "ps-functions-and-parameters-q1",
    },
    {
      id: "summary",
      type: "summary",
      powershellShellStep: 2,
      headline: "Reusable admin tools.",
      body: "Turn repeated pipelines into functions. Add param() when the path, server name, or filter changes each run.",
    },
  ],
};
