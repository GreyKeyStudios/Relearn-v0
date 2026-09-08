import type { TopicExperience } from "@/content/types";

/** LES — Debugging and logging (PowerShell II Module 2). */
export const PS2_DEBUGGING_AND_LOGGING_EXPERIENCE: TopicExperience = {
  anchor: { type: "powershell-automation" },
  screens: [
    {
      id: "hero",
      type: "hero",
      powershellAutomationStage: 4,
      headline: "Debugging is a method, not a talent.",
      body: "You will inherit scripts you did not write, with no comments and no logs, that used to work. The people who fix those quickly are not smarter — they have a repeatable way of narrowing the failure instead of rereading the file hoping to spot it.",
    },
    {
      id: "streams",
      type: "teach",
      powershellAutomationStage: 4,
      headline: "PowerShell has six output streams. Use the right one.",
      body: "Success output is data the caller can use. Write-Verbose narrates for a human who asked for detail. Write-Debug is for the author. Write-Warning flags something suspicious that did not stop the run. Write-Error records a failure. Write-Host paints text and gives the caller nothing.",
      terms: [
        {
          id: "stream",
          label: "Stream",
          tier: "now",
          shortDefinition:
            "A separate channel of output. Keeping data on the success stream and narration on verbose is what lets callers pipe your function.",
        },
      ],
    },
    {
      id: "verbose",
      type: "teach",
      powershellAutomationStage: 4,
      headline: "Verbose is narration you can switch on later.",
      body: "Write-Verbose costs nothing when nobody passes -Verbose, so be generous: say which file you are about to read, how many rows you got, which branch you took. That is exactly the information you wish a broken script had told you.",
    },
    {
      id: "method",
      type: "flow",
      powershellAutomationStage: 4,
      headline: "The narrowing method.",
      body: "Reproduce it, read the actual error, check the inputs, halve the script, inspect the object, then fix one thing. Guessing skips straight to the fix and usually changes something that was already working.",
      media: {
        kind: "flow",
        items: [
          { icon: "activity", label: "Reproduce" },
          { icon: "search", label: "Read error" },
          { icon: "filter", label: "Check input" },
          { icon: "bug", label: "Isolate" },
          { icon: "list-checks", label: "Fix one thing" },
        ],
      },
    },
    {
      id: "breakpoints",
      type: "teach",
      powershellAutomationStage: 4,
      headline: "Breakpoints beat scattering print statements.",
      body: "Set-PSBreakpoint -Script x.ps1 -Line 42 pauses there. -Variable rows -Mode Write pauses whenever that variable changes, which finds the moment a value goes wrong. At the prompt you inspect real state, then continue. Remove them with Get-PSBreakpoint | Remove-PSBreakpoint.",
    },
    {
      id: "logging",
      type: "teach",
      powershellAutomationStage: 4,
      headline: "A log is written for the person reading it at 3 a.m.",
      body: "Every line wants a timestamp, a severity, and enough context to act: which item, which path, which count. Structured lines you can Import-Csv later beat prose. Start-Transcript captures a whole session, but it is a record of what happened, not a substitute for deliberate log lines.",
    },
    {
      id: "misconception",
      type: "misconception",
      powershellAutomationStage: 4,
      headline: "'It worked yesterday' is data, not an explanation.",
      body: "Something changed: the input file, a permission, a token, a module version, the machine it ran on. Compare the current inputs against the last good run before you touch the code. Most inherited breakages are environment, not logic.",
    },
    {
      id: "check",
      type: "checkpoint",
      powershellAutomationStage: 4,
      headline: "Quick check — debugging",
      checkpointQuestionId: "ps2-debugging-and-logging-q1",
    },
    {
      id: "summary",
      type: "summary",
      powershellAutomationStage: 4,
      headline: "Narrate while it works so you can diagnose when it stops.",
      body: "Verbose for humans, debug for authors, warnings for suspicion, errors for failure, and data on the success stream. Add a timestamped log and a breakpoint habit, and inherited scripts stop being frightening.",
    },
  ],
};
