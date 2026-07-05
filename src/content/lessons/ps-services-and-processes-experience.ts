import type { TopicExperience } from "@/content/types";

/** LES — Services and processes (PowerShell Module 4). */
export const PS_SERVICES_AND_PROCESSES_EXPERIENCE: TopicExperience = {
  anchor: { type: "powershell-shell" },
  screens: [
    {
      id: "hero-services",
      type: "hero",
      powershellShellStep: 3,
      headline: "Classic admin tasks.",
      body: "Get-Service lists Windows services. Get-Process lists running programs. Start, stop, and restart with Verb-Noun cmdlets — always check status after.",
    },
    {
      id: "get-service",
      type: "teach",
      powershellShellStep: 3,
      headline: "Service status at a glance.",
      body: "Get-Service | Where-Object Status -eq Stopped finds stopped services. Restart-Service -Name Spooler -WhatIf previews a restart before you run it for real.",
    },
    {
      id: "get-process",
      type: "teach",
      powershellShellStep: 3,
      headline: "Processes and CPU.",
      body: "Get-Process | Sort-Object CPU -Descending | Select-Object -First 5 shows heavy hitters. Stop-Process -Id 1234 -WhatIf before killing — wrong PID hurts.",
      studyTip: {
        title: "Safety switches",
        body: "-WhatIf · -Confirm · read-only Get-* first",
      },
    },
    {
      id: "service-check",
      type: "checkpoint",
      powershellShellStep: 3,
      headline: "Quick check — services",
      checkpointQuestionId: "ps-services-and-processes-q1",
    },
    {
      id: "summary",
      type: "summary",
      powershellShellStep: 3,
      headline: "Read, then act.",
      body: "Get status, filter with Where-Object, act with Start/Stop/Restart. -WhatIf on anything that changes production systems.",
    },
  ],
};
