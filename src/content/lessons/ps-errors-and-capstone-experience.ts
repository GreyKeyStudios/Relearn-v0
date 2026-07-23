import type { TopicExperience } from "@/content/types";

/** LES — Errors and capstone (PowerShell Module 5). */
export const PS_ERRORS_AND_CAPSTONE_EXPERIENCE: TopicExperience = {
  anchor: { type: "powershell-shell" },
  screens: [
    {
      id: "hero-errors",
      type: "hero",
      powershellShellStep: 1,
      headline: "Red text is information.",
      body: "Errors tell you what failed — cmdlet name, parameter, or permission. Read the message, fix one thing, rerun. $Error[0] holds the latest failure.",
    },
    {
      id: "erroraction",
      type: "teach",
      powershellShellStep: 2,
      headline: "-ErrorAction and Try/Catch.",
      body: "-ErrorAction SilentlyContinue hides noise when you expect misses. try { Stop-Service X } catch { Write-Warning $_.Exception.Message } handles failures in scripts.",
    },
    {
      id: "capstone-preview",
      type: "teach",
      powershellShellStep: 4,
      headline: "Capstone: admin morning.",
      body: "Your capstone lab chains skills: list stopped automatic services, export a CSV report, wrap checks in a function, handle a missing service gracefully.",
    },
    {
      id: "error-check",
      type: "checkpoint",
      powershellShellStep: 2,
      headline: "Quick check — errors",
      checkpointQuestionId: "ps-errors-and-capstone-q1",
    },
    {
      id: "summary",
      type: "summary",
      powershellShellStep: 1,
      headline: "You have the stack.",
      body: "Get-Help, pipelines, objects, filters, export, loops, functions — complete the capstone lab to prove you can run a real admin workflow end to end.",
    },
  ],
};
