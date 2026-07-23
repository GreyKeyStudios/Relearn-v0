import type { TopicExperience } from "@/content/types";

/** LES — Why use a shell (PowerShell Module 1). */
export const PS_WHY_THE_SHELL_EXPERIENCE: TopicExperience = {
  anchor: { type: "powershell-shell" },
  screens: [
    {
      id: "hero-gui-limit",
      type: "hero",
      powershellShellStep: 1,
      headline: "GUIs do not scale for IT work.",
      body: "Clicking through settings works once. Updating fifty servers, listing every user, or finding a log line across files — that needs a shell you can script and repeat.",
    },
    {
      id: "what-is-shell",
      type: "teach",
      powershellShellStep: 1,
      headline: "A shell is a text command interface.",
      body: "You type commands; the computer runs them and prints results. Same action every time — no hunting through menus. PowerShell is Microsoft's shell for Windows and works cross-platform today.",
      terms: [
        {
          id: "shell",
          label: "Shell",
          tier: "basics",
          shortDefinition:
            "A program that reads text commands and runs them — PowerShell, bash, and zsh are shells.",
        },
      ],
    },
    {
      id: "why-powershell",
      type: "teach",
      powershellShellStep: 2,
      headline: "Why PowerShell on Windows?",
      body: "It is built in on Windows. IT admins use it for users, files, services, and network checks. It speaks .NET objects — not just plain text — which makes filtering and automation easier than old cmd.exe.",
      terms: [
        {
          id: "powershell",
          label: "PowerShell",
          tier: "basics",
          shortDefinition:
            "Microsoft's command-line shell and scripting language — Verb-Noun cmdlets and object pipelines.",
        },
      ],
    },
    {
      id: "repeatable",
      type: "memory",
      powershellShellStep: 4,
      headline: "Type once, run forever.",
      body: "A command you run today can become a script tomorrow. That is the job skill — repeatable admin work without clicking the same dialog fifty times.",
    },
    {
      id: "not-coding-yet",
      type: "misconception",
      powershellShellStep: 1,
      headline: "You do not need to be a programmer first.",
      body: "Module 1 is read commands, run commands, read output. Scripting comes later. If you can follow a recipe, you can use PowerShell.",
    },
    {
      id: "why-check",
      type: "checkpoint",
      powershellShellStep: 2,
      headline: "Quick check — why a shell?",
      checkpointQuestionId: "ps-why-the-shell-q1",
    },
    {
      id: "summary",
      type: "summary",
      powershellShellStep: 1,
      headline: "Shell before scripts.",
      body: "PowerShell lets you inspect and change systems from the keyboard — faster and more repeatable than GUI alone. Next: how commands are named and chained.",
    },
  ],
};
