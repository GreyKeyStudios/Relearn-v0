import type { TopicExperience } from "@/content/types";

/** LES — Entra ID and Microsoft 365 reporting and change planning (PowerShell II Module 5). */
export const PS2_ENTRA_AND_M365_EXPERIENCE: TopicExperience = {
  anchor: { type: "powershell-automation" },
  screens: [
    {
      id: "hero",
      type: "hero",
      powershellAutomationStage: 4,
      headline: "In a tenant, your script's blast radius is other people's accounts.",
      body: "Local automation that goes wrong costs you an afternoon. Entra automation that goes wrong locks colleagues out of their email. That difference is why this topic spends as much time on classification and change planning as on cmdlets.",
    },
    {
      id: "objects",
      type: "teach",
      powershellAutomationStage: 4,
      headline: "Four object types carry most of the work.",
      body: "Users hold identity and account state. Groups hold membership, and membership often drives licensing and access. Licences (subscribedSkus and each user's assignedLicenses) explain cost and capability. Sign-in and audit data explain what actually happened. Almost every real request is a join across two of these.",
      media: {
        kind: "icons",
        items: [
          { icon: "users", label: "Users" },
          { icon: "layers", label: "Groups" },
          { icon: "package", label: "Licences" },
          { icon: "activity", label: "Audit" },
        ],
      },
    },
    {
      id: "classify",
      type: "teach",
      powershellAutomationStage: 4,
      headline: "Classify every command before you run it.",
      body: "Read-only: Get-MgUser, Get-MgGroupMember, Get-MgSubscribedSku. Administrative change: Update-MgUser, New-MgGroupMember, Set-MgUserLicense. High-risk: bulk Remove-MgUser, removing members from a group that grants access, disabling accounts in a loop. The verb tells you the tier, and the tier tells you what evidence you need first.",
      terms: [
        {
          id: "safety-tier",
          label: "Safety tier",
          tier: "now",
          shortDefinition:
            "Read-only, safe local change, administrative change, or destructive — the classification you assign before running anything.",
        },
      ],
    },
    {
      id: "change-plan",
      type: "flow",
      powershellAutomationStage: 4,
      headline: "A change plan is five answers, written before the run.",
      body: "What exactly changes. Which objects are in scope, proven by a report you generated. How you undo it. How you verify success. Who approved it and when. Write those down and a reviewer can sanity-check your automation without reading your code.",
      media: {
        kind: "flow",
        items: [
          { icon: "file-spreadsheet", label: "Scope report" },
          { icon: "search", label: "Dry run" },
          { icon: "shield", label: "Rollback" },
          { icon: "list-checks", label: "Verify" },
        ],
      },
    },
    {
      id: "accountstate",
      type: "teach",
      powershellAutomationStage: 4,
      headline: "Disabled, unlicensed, and deleted are three different states.",
      body: "accountEnabled = false blocks sign-in but keeps the object and its data. Removing a licence keeps the account but strips the service. Deleting moves the object to a 30-day recycle bin and then it is gone. Leaver processes usually want the first two in a specific order — and getting the order wrong destroys a mailbox someone needed.",
      studyTip: {
        title: "Offboarding order matters",
        body: "Disable sign-in, preserve or delegate the data, then reclaim the licence. Reclaim first and you may lose the mailbox you were told to keep.",
      },
    },
    {
      id: "misconception",
      type: "misconception",
      powershellAutomationStage: 4,
      headline: "\"-WhatIf proves the change is correct.\"",
      body: "-WhatIf proves only which objects would be touched. It cannot tell you the filter that built the list was right. If your query accidentally matched every user whose department is empty, -WhatIf will faithfully report that you are about to disable 400 people. Read the count, and check it against a number you expected.",
    },
    {
      id: "check",
      type: "checkpoint",
      powershellAutomationStage: 4,
      headline: "Quick check — Entra and M365",
      checkpointQuestionId: "ps2-entra-and-m365-q1",
    },
    {
      id: "summary",
      type: "summary",
      powershellAutomationStage: 4,
      headline: "Report, classify, plan, dry-run, then change.",
      body: "Tenant automation is a professional practice before it is a scripting one: know the tier of every command, prove your scope with a report, and never let a loop touch accounts you have not counted.",
    },
  ],
};
