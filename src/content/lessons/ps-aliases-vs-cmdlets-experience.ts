import type { TopicExperience } from "@/content/types";

/** LES — Aliases vs cmdlets (PowerShell Module 2). */
export const PS_ALIASES_VS_CMDLETS_EXPERIENCE: TopicExperience = {
  anchor: { type: "powershell-shell" },
  screens: [
    {
      id: "hero-shortcuts",
      type: "hero",
      powershellShellStep: 2,
      headline: "Short names, same cmdlets.",
      body: "ls, dir, and gci all run Get-ChildItem. Aliases save typing in the console — but scripts and docs should use the real Verb-Noun name.",
    },
    {
      id: "get-alias",
      type: "teach",
      powershellShellStep: 2,
      headline: "Resolve aliases with Get-Alias.",
      body: "Get-Alias ls shows Get-ChildItem. Get-Alias -Definition Get-ChildItem lists every shortcut. When a blog post says gci, you know it means Get-ChildItem.",
    },
    {
      id: "why-verb-noun",
      type: "teach",
      powershellShellStep: 2,
      headline: "Scripts use Verb-Noun.",
      body: "Aliases differ between PowerShell versions and profiles. Get-Process is unambiguous everywhere. In scripts and runbooks, prefer cmdlets — aliases for interactive speed only.",
    },
    {
      id: "alias-check",
      type: "checkpoint",
      powershellShellStep: 2,
      headline: "Quick check — aliases",
      checkpointQuestionId: "ps-aliases-vs-cmdlets-q1",
    },
    {
      id: "summary",
      type: "summary",
      powershellShellStep: 2,
      headline: "Type fast, script clear.",
      body: "Use aliases at the prompt if you like. When you save work or share commands, write the full cmdlet name so anyone can read it.",
    },
  ],
};
