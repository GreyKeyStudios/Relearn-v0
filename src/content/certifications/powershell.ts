import type { Certification } from "../types";
import { PS_WHY_THE_SHELL_EXPERIENCE } from "@/content/lessons/ps-why-the-shell-experience";
import { PS_CMDLETS_PIPELINE_EXPERIENCE } from "@/content/lessons/ps-cmdlets-pipeline-experience";
import { PS_FIRST_COMMANDS_SAFELY_EXPERIENCE } from "@/content/lessons/ps-first-commands-safely-experience";

/** PowerShell Foundations — ReLearn skills track (Path A cert shell). */
export const powershell: Certification = {
  id: "powershell",
  name: "PowerShell Foundations",
  shortName: "PowerShell",
  vendor: "ReLearn",
  overview:
    "A hands-on job skill curriculum — not a vendor exam. Learn why IT work needs a shell, how PowerShell cmdlets and pipelines work, and how to run your first commands safely. Module 2 onward adds scripting and real admin tasks.",
  examSummary: {
    questionCount: 0,
    durationMinutes: 0,
    passingScore: "Complete module labs + capstone",
    format: "Hands-on labs and command practice",
  },
  domains: [
    {
      id: "powershell-foundations",
      name: "Module 1 — Shell Basics",
      topics: [
        {
          id: "ps-why-the-shell",
          name: "Why the Shell",
          lesson: {
            title: "Why Use a Shell",
            content: `GUIs are fine for one-off tasks. IT work at scale — listing users, checking services, searching logs — needs commands you can repeat and script.

PowerShell is Microsoft's shell for Windows (and cross-platform today). It uses Verb-Noun cmdlets and passes objects through pipelines — not just plain text.

This module starts conceptual. Module 2 adds real scripting patterns.`,
            experience: PS_WHY_THE_SHELL_EXPERIENCE,
          },
          keyFacts: [
            "A shell runs text commands — repeatable, scriptable admin work",
            "PowerShell is built into Windows and uses Verb-Noun cmdlets",
            "GUIs do not scale for bulk or automated tasks",
            "You do not need to be a programmer to start with read-only commands",
          ],
          quiz: [
            {
              id: "ps-why-the-shell-q1",
              prompt: "Why do IT admins use shells instead of only GUIs?",
              choices: [
                { id: "a", text: "GUIs are illegal on servers" },
                { id: "b", text: "Commands can be repeated and automated at scale" },
                { id: "c", text: "PowerShell replaces the need for backups" },
                { id: "d", text: "Shells only work without a mouse" },
              ],
              correctChoiceId: "b",
              explanation:
                "Shell commands are repeatable and scriptable — essential for managing many systems or the same task many times.",
              difficulty: "easy",
            },
          ],
          flashcards: [
            {
              id: "ps-why-the-shell-f1",
              front: "What is a shell?",
              back: "A program that reads text commands and runs them — PowerShell on Windows",
            },
            {
              id: "ps-why-the-shell-f2",
              front: "GUI vs shell for IT?",
              back: "GUI for one-offs · shell for repeat work and automation",
            },
          ],
          practiceType: ["reading", "quiz", "flashcard"],
          estimatedStudyMinutes: 15,
          difficulty: "easy",
        },
        {
          id: "ps-cmdlets-pipeline",
          name: "Cmdlets & Pipeline",
          prerequisites: ["ps-why-the-shell"],
          lesson: {
            title: "Cmdlets and the Pipeline",
            content: `PowerShell commands are cmdlets: Verb-Noun pairs like Get-Process or Set-Location. The verb tells you the action; the noun tells you the target.

The pipeline (|) chains cmdlets. Output from the left becomes input to the right. PowerShell passes objects — structured data — not just lines of text.

Example: Get-Process | Where-Object CPU -gt 100 filters processes by CPU time.`,
            experience: PS_CMDLETS_PIPELINE_EXPERIENCE,
          },
          keyFacts: [
            "Cmdlets use Verb-Noun names: Get-, Set-, New-, Remove-",
            "The pipeline | chains cmdlets left to right",
            "PowerShell passes objects through the pipeline",
            "Where-Object filters · Select-Object shapes output",
          ],
          quiz: [
            {
              id: "ps-cmdlets-pipeline-q1",
              prompt: "Which cmdlet name follows the Verb-Noun pattern?",
              choices: [
                { id: "a", text: "list-files" },
                { id: "b", text: "Get-ChildItem" },
                { id: "c", text: "dir.exe" },
                { id: "d", text: "processlist" },
              ],
              correctChoiceId: "b",
              explanation: "PowerShell cmdlets are Verb-Noun — Get-ChildItem lists items in a container.",
              difficulty: "easy",
            },
          ],
          flashcards: [
            {
              id: "ps-cmdlets-pipeline-f1",
              front: "Cmdlet naming pattern?",
              back: "Verb-Noun — e.g. Get-Process, Stop-Service, New-Item",
            },
            {
              id: "ps-cmdlets-pipeline-f2",
              front: "What does | do?",
              back: "Pipeline — sends output of the left cmdlet to the right cmdlet",
            },
          ],
          practiceType: ["reading", "quiz", "flashcard"],
          estimatedStudyMinutes: 15,
          difficulty: "easy",
        },
        {
          id: "ps-first-commands-safely",
          name: "First Commands Safely",
          prerequisites: ["ps-cmdlets-pipeline"],
          lesson: {
            title: "First Commands Safely",
            content: `Before running anything unfamiliar: Get-Help <cmdlet> or <cmdlet> -?. Start with read-only Get-* cmdlets — Get-Location, Get-ChildItem, Get-Process.

For destructive actions, use -WhatIf to preview without executing. Open Windows Terminal or PowerShell and complete the First Commands lab on this topic.`,
            experience: PS_FIRST_COMMANDS_SAFELY_EXPERIENCE,
          },
          keyFacts: [
            "Get-Help and -? show syntax and examples",
            "Get-* cmdlets are read-only — safe first steps",
            "-WhatIf previews destructive commands without running them",
            "Windows Terminal or PowerShell — same window every time",
          ],
          quiz: [
            {
              id: "ps-first-commands-safely-q1",
              prompt: "You need to learn an unfamiliar cmdlet. What do you run first?",
              choices: [
                { id: "a", text: "Remove-Item -Recurse" },
                { id: "b", text: "Get-Help <cmdlet>" },
                { id: "c", text: "Restart-Computer -Force" },
                { id: "d", text: "Close the terminal" },
              ],
              correctChoiceId: "b",
              explanation: "Get-Help shows syntax and examples before you run a cmdlet you do not know.",
              difficulty: "easy",
            },
          ],
          flashcards: [
            {
              id: "ps-first-commands-safely-f1",
              front: "Unfamiliar cmdlet — first step?",
              back: "Get-Help <cmdlet> or <cmdlet> -?",
            },
            {
              id: "ps-first-commands-safely-f2",
              front: "What does -WhatIf do?",
              back: "Shows what would happen without executing — dry run",
            },
          ],
          externalResources: [
            {
              id: "windows-powershell",
              name: "Windows PowerShell",
              url: "https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows",
              cost: "free",
              platform: "any",
              installNotes:
                "PowerShell 5.1 ships with Windows. Windows Terminal is recommended. See Microsoft docs for PowerShell 7+ install on other OSes.",
            },
          ],
          assignments: [
            {
              id: "ps-lab-first-commands",
              title: "First PowerShell Commands",
              type: "external-lab",
              instructions: `Open Windows Terminal or PowerShell on your PC.

1. Run Get-Location — note your current folder path.
2. Run Get-ChildItem — list files in that folder (alias: dir or ls).
3. Run Get-Help Get-Process -Examples — read one example, then run Get-Process | Select-Object -First 3.
4. Run Get-Help Get-ChildItem -Parameter WhatIf (read only — no need to delete anything).

Write down one thing each command printed. If a command errors, run Get-Help on that cmdlet before retrying.`,
              estimatedMinutes: 20,
              externalResourceId: "windows-powershell",
              completionCriteria: [
                "Opened PowerShell or Windows Terminal",
                "Ran Get-Location and Get-ChildItem successfully",
                "Used Get-Help on at least one cmdlet",
                "Ran a pipeline (command | command) at least once",
              ],
              relatedTopicIds: [
                "ps-why-the-shell",
                "ps-cmdlets-pipeline",
                "ps-first-commands-safely",
              ],
              order: 1,
            },
          ],
          practiceType: ["reading", "quiz", "flashcard", "external-lab"],
          estimatedStudyMinutes: 25,
          difficulty: "easy",
        },
      ],
    },
  ],
};
