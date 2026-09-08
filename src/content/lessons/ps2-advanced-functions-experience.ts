import type { TopicExperience } from "@/content/types";

/** LES — Advanced functions and comment-based help (PowerShell II Module 1). */
export const PS2_ADVANCED_FUNCTIONS_EXPERIENCE: TopicExperience = {
  anchor: { type: "powershell-automation" },
  screens: [
    {
      id: "hero",
      type: "hero",
      powershellAutomationStage: 1,
      headline: "A script you can hand over is a different object from a script that works.",
      body: "You can already write something that produces the right answer once, on your machine, with the paths you happen to have. This module is about the gap between that and something a colleague can run, discover, and trust without asking you what it does.",
    },
    {
      id: "cmdletbinding",
      type: "teach",
      powershellAutomationStage: 1,
      headline: "[CmdletBinding()] promotes a function to a real command.",
      body: "One attribute above your param block gives you -Verbose, -Debug, -ErrorAction, -ErrorVariable, and -WarningAction for free, plus strict handling of unknown parameters. You did not write that behaviour; you inherited it by declaring your function advanced.",
      terms: [
        {
          id: "advanced-function",
          label: "Advanced function",
          tier: "now",
          shortDefinition:
            "A PowerShell function carrying [CmdletBinding()], which makes it behave like a compiled cmdlet.",
        },
      ],
    },
    {
      id: "naming",
      type: "teach",
      powershellAutomationStage: 1,
      headline: "Verb-Noun is a discovery contract, not decoration.",
      body: "Get-DiskSpaceReport tells a reader it is safe to run. Cleanup-Disks tells them nothing and uses a verb PowerShell does not recognise. Run Get-Verb, pick an approved verb, and make the noun singular and specific. Your future self greps for this name.",
      studyTip: {
        title: "Verb choice is a safety signal",
        body: "Get- means read-only. Set-, New-, and Remove- warn a reader that state changes. Never use Get- on a function that writes.",
      },
    },
    {
      id: "one-thing",
      type: "teach",
      powershellAutomationStage: 1,
      headline: "Emit objects. Print nothing.",
      body: "A reusable function returns objects and lets the caller decide how to display them. Write-Host paints text on a screen and hands the caller nothing they can filter, sort, or export. If you want narration, that is what Write-Verbose is for — and [CmdletBinding()] already gave you the switch to turn it on.",
    },
    {
      id: "help",
      type: "teach",
      powershellAutomationStage: 1,
      headline: "Comment-based help makes your tool self-documenting.",
      body: "A comment block with .SYNOPSIS, .DESCRIPTION, .PARAMETER, .EXAMPLE, and .OUTPUTS above the function means Get-Help YourFunction works exactly like Get-Help on a Microsoft cmdlet. That is the difference between a tool and a file someone found on a share.",
      media: {
        kind: "flow",
        items: [
          { icon: "search", label: ".SYNOPSIS" },
          { icon: "list-checks", label: ".PARAMETER" },
          { icon: "terminal", label: ".EXAMPLE" },
          { icon: "package", label: ".OUTPUTS" },
        ],
      },
    },
    {
      id: "misconception",
      type: "misconception",
      powershellAutomationStage: 1,
      headline: "Adding [CmdletBinding()] does not make -Verbose do anything.",
      body: "It gives you the switch. You still have to call Write-Verbose in the places worth narrating. Plenty of scripts advertise -Verbose and then say nothing when you use it, which is worse than not offering it.",
    },
    {
      id: "check",
      type: "checkpoint",
      powershellAutomationStage: 1,
      headline: "Quick check — advanced functions",
      checkpointQuestionId: "ps2-advanced-functions-q1",
    },
    {
      id: "summary",
      type: "summary",
      powershellAutomationStage: 1,
      headline: "Name it well, declare it advanced, return objects, document it.",
      body: "Four habits turn a working script into a tool: an approved Verb-Noun name, [CmdletBinding()], object output instead of printed text, and comment-based help. Everything else in this course builds on functions shaped this way.",
    },
  ],
};
