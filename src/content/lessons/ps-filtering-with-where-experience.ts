import type { TopicExperience } from "@/content/types";

/** LES — Where-Object filtering (PowerShell Module 3). */
export const PS_FILTERING_WITH_WHERE_EXPERIENCE: TopicExperience = {
  anchor: { type: "powershell-shell" },
  screens: [
    {
      id: "hero-filter",
      type: "hero",
      powershellShellStep: 4,
      headline: "Keep only what matches.",
      body: "Where-Object (where) filters pipeline objects. Get-Service | Where-Object Status -eq Running shows only running services — no manual scanning.",
    },
    {
      id: "comparison-operators",
      type: "teach",
      powershellShellStep: 4,
      headline: "Comparison operators.",
      body: "Use -eq, -ne, -gt, -lt, -like, and -match. Example: Get-ChildItem | Where-Object Length -gt 1MB finds large files. -like supports wildcards: *.log.",
      terms: [
        {
          id: "where-object",
          label: "Where-Object",
          tier: "basics",
          shortDefinition:
            "Pipeline filter — passes objects that match a condition to the next cmdlet.",
        },
      ],
    },
    {
      id: "script-block",
      type: "teach",
      powershellShellStep: 4,
      headline: "Script blocks for complex tests.",
      body: "For multiple conditions: Where-Object { $_.Status -eq 'Running' -and $_.StartType -eq 'Automatic' }. $_ means the current pipeline object.",
      media: {
        kind: "flow",
        items: [
          { icon: "server", label: "Get-Service" },
          { icon: "layers", label: "|" },
          { icon: "monitor", label: "Where-Object" },
        ],
      },
    },
    {
      id: "where-check",
      type: "checkpoint",
      powershellShellStep: 4,
      headline: "Quick check — filtering",
      checkpointQuestionId: "ps-filtering-with-where-q1",
    },
    {
      id: "summary",
      type: "summary",
      powershellShellStep: 4,
      headline: "Filter in the pipeline.",
      body: "Get data, then Where-Object to narrow it. Read property names with Get-Member first. Chain filters left to right for readable reports.",
    },
  ],
};
