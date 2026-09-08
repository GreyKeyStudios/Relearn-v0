import type { TopicExperience } from "@/content/types";

/** LES — Windows administration at scale (PowerShell II Module 4). */
export const PS2_WINDOWS_ADMIN_AT_SCALE_EXPERIENCE: TopicExperience = {
  anchor: { type: "powershell-automation" },
  screens: [
    {
      id: "hero",
      type: "hero",
      powershellAutomationStage: 3,
      headline: "One machine is a command. Two hundred is a decision about blast radius.",
      body: "The cmdlets barely change when you go from one host to a fleet. What changes is that a mistake now happens two hundred times before you can read the first error. This topic is about the safeguards that make bulk work survivable.",
    },
    {
      id: "inventory",
      type: "teach",
      powershellAutomationStage: 3,
      headline: "Inventory is the read-only half you should master first.",
      body: "Get-ComputerInfo, Get-CimInstance Win32_LogicalDisk, Get-Service, Get-Process, Get-LocalUser, and Get-WinEvent answer almost every support question without changing a thing. Learn to shape their output into one flat [PSCustomObject] per machine and you have a report format that scales.",
      media: {
        kind: "icons",
        items: [
          { icon: "monitor", label: "ComputerInfo" },
          { icon: "hard-drive", label: "LogicalDisk" },
          { icon: "settings", label: "Service" },
          { icon: "file-spreadsheet", label: "WinEvent" },
        ],
      },
    },
    {
      id: "cim",
      type: "teach",
      powershellAutomationStage: 3,
      headline: "Get-CimInstance replaced Get-WmiObject.",
      body: "CIM is the modern implementation: it uses WinRM instead of DCOM, works with -CimSession for remote reuse, and is the one you should write in new scripts. WMI cmdlets still exist and appear in old scripts you will inherit, so recognise them — then port them.",
      terms: [
        {
          id: "cim",
          label: "CIM",
          tier: "now",
          shortDefinition:
            "Common Information Model — the standard Windows exposes system data through; queried with Get-CimInstance.",
        },
      ],
    },
    {
      id: "eventlog",
      type: "teach",
      powershellAutomationStage: 3,
      headline: "Filter event logs at the source, not in the pipeline.",
      body: "Get-WinEvent -FilterHashtable @{ LogName='System'; StartTime=(Get-Date).AddDays(-1); Level=2 } asks the log service for exactly what you want. Piping the whole log into Where-Object reads millions of records into your session first and is the classic reason an inventory script takes forty minutes.",
      studyTip: {
        title: "Server-side filtering is the scale lesson",
        body: "The same principle appears again in Graph (-Filter) and Azure (-ResourceGroupName). Ask the source to narrow; never drag everything home.",
      },
    },
    {
      id: "safeguards",
      type: "flow",
      powershellAutomationStage: 3,
      headline: "Four safeguards before any bulk change.",
      body: "Report first so you know the true target list. Dry-run with -WhatIf and read the output. Pilot on one machine you can fix by hand. Then run the batch with logging and a stop condition, so a bad result halts the loop instead of completing it.",
      media: {
        kind: "flow",
        items: [
          { icon: "file-spreadsheet", label: "Report" },
          { icon: "search", label: "-WhatIf" },
          { icon: "activity", label: "Pilot one" },
          { icon: "shield", label: "Batch + log" },
        ],
      },
    },
    {
      id: "misconception",
      type: "misconception",
      powershellAutomationStage: 3,
      headline: "\"It worked on my machine, so the loop is safe.\"",
      body: "Your machine has your permissions, your disk layout, and your services running. At scale you meet the host that is asleep, the one where the service is already stopped, and the one where you are not an admin. A bulk script needs a per-item try/catch and a result object, or you will not know which of the two hundred failed.",
    },
    {
      id: "check",
      type: "checkpoint",
      powershellAutomationStage: 3,
      headline: "Quick check — admin at scale",
      checkpointQuestionId: "ps2-windows-admin-at-scale-q1",
    },
    {
      id: "summary",
      type: "summary",
      powershellAutomationStage: 3,
      headline: "Read, filter at the source, dry-run, pilot, then batch with a record.",
      body: "Bulk administration is inventory plus discipline. If your script cannot tell you afterwards which items succeeded and which failed, it is not ready for two hundred machines.",
    },
  ],
};
