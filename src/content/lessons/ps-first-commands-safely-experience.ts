import type { TopicExperience } from "@/content/types";

/** LES — First commands safely (PowerShell Module 1). */
export const PS_FIRST_COMMANDS_SAFELY_EXPERIENCE: TopicExperience = {
  anchor: { type: "powershell-shell" },
  screens: [
    {
      id: "hero-safe",
      type: "hero",
      powershellShellStep: 1,
      headline: "Read before you run.",
      body: "PowerShell can change systems. Your safety stack: Get-Help before unknown cmdlets, -WhatIf on destructive commands, and start with read-only Get-* cmdlets.",
    },
    {
      id: "get-help",
      type: "teach",
      powershellShellStep: 2,
      headline: "Get-Help is your manual.",
      body: "Get-Help Get-Process shows syntax and examples. Shorthand: Get-Process -? works too. When a cmdlet name is unfamiliar, help comes before execution.",
      studyTip: {
        title: "Help shortcuts",
        body: "Get-Help <cmdlet> · Get-Help <cmdlet> -Examples · <cmdlet> -?",
      },
    },
    {
      id: "read-only-first",
      type: "teach",
      powershellShellStep: 3,
      headline: "Start with Get-* cmdlets.",
      body: "Get-Location shows your current folder. Get-ChildItem lists files (like dir). Get-Process lists programs. These only read — they do not change anything.",
      media: {
        kind: "flow",
        items: [
          { icon: "folder", label: "Get-Location" },
          { icon: "folder", label: "Get-ChildItem" },
          { icon: "monitor", label: "Get-Process" },
        ],
      },
    },
    {
      id: "what-if",
      type: "teach",
      powershellShellStep: 2,
      headline: "-WhatIf shows the plan.",
      body: "Destructive cmdlets often support -WhatIf — they print what would happen without doing it. Use it before Remove-Item or Stop-Service on production systems.",
      terms: [
        {
          id: "whatif",
          label: "-WhatIf",
          tier: "basics",
          shortDefinition:
            "Switch that previews an action without executing it — dry run for safety.",
        },
      ],
    },
    {
      id: "windows-terminal",
      type: "teach",
      powershellShellStep: 1,
      headline: "Where to open PowerShell.",
      body: "Windows: search PowerShell or open Windows Terminal and choose PowerShell. You will run Module 1 labs there — same window every time builds muscle memory.",
    },
    {
      id: "safe-check",
      type: "checkpoint",
      powershellShellStep: 2,
      headline: "Quick check — safety first",
      checkpointQuestionId: "ps-first-commands-safely-q1",
    },
    {
      id: "summary-lab",
      type: "summary",
      powershellShellStep: 1,
      headline: "Ready for your first lab.",
      body: "Open PowerShell and complete the First Commands lab — Get-Location, Get-ChildItem, Get-Help, and a short pipeline. Read output before typing the next line.",
    },
  ],
};
