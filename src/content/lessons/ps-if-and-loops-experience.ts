import type { TopicExperience } from "@/content/types";

/** LES — If and loops (PowerShell Module 5). */
export const PS_IF_AND_LOOPS_EXPERIENCE: TopicExperience = {
  anchor: { type: "powershell-shell" },
  screens: [
    {
      id: "hero-decisions",
      type: "hero",
      powershellShellStep: 2,
      headline: "Scripts make decisions.",
      body: "if tests a condition; foreach walks a collection. Combine them so one script handles many servers or files instead of repeating commands.",
    },
    {
      id: "if-else",
      type: "teach",
      powershellShellStep: 2,
      headline: "if / elseif / else.",
      body: "if ($service.Status -eq 'Running') { 'OK' } else { 'Down' }. Comparison operators match Where-Object: -eq, -ne, -gt. Braces define blocks.",
    },
    {
      id: "foreach",
      type: "teach",
      powershellShellStep: 4,
      headline: "foreach and ForEach-Object.",
      body: "foreach ($svc in Get-Service) { $svc.Name } loops in a script. Get-Service | ForEach-Object { $_.Name } loops in a pipeline. Pick the style that reads cleaner.",
      media: {
        kind: "flow",
        items: [
          { icon: "server", label: "Get-Service" },
          { icon: "layers", label: "foreach" },
          { icon: "monitor", label: "action" },
        ],
      },
    },
    {
      id: "loop-check",
      type: "checkpoint",
      powershellShellStep: 2,
      headline: "Quick check — control flow",
      checkpointQuestionId: "ps-if-and-loops-q1",
    },
    {
      id: "summary",
      type: "summary",
      powershellShellStep: 2,
      headline: "Automate repetition.",
      body: "if for branches, foreach for lists. Start with a pipeline that works once, then wrap it in a loop for many targets.",
    },
  ],
};
