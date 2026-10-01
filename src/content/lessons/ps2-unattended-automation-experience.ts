import type { TopicExperience } from "@/content/types";

/** LES — Scheduled and unattended automation (PowerShell II Module 6). */
export const PS2_UNATTENDED_AUTOMATION_EXPERIENCE: TopicExperience = {
  anchor: { type: "powershell-automation" },
  screens: [
    {
      id: "hero",
      type: "hero",
      powershellAutomationStage: 5,
      headline: "Unattended means nobody is there to read the error.",
      body: "A script you run by hand can afford to be chatty and a bit fragile — you are watching. The same script on a schedule at 3 a.m. has no console, no prompt, and no you. Everything it needs must be in the script, and everything it learns must go somewhere durable.",
    },
    {
      id: "no-interaction",
      type: "teach",
      powershellAutomationStage: 5,
      headline: "Any prompt is a hang, not an error.",
      body: "Get-Credential, Read-Host, a mandatory parameter you forgot to pass, or a -Confirm on a change cmdlet will all sit there forever under a scheduler. Non-interactive scripts take every input as a parameter or from configuration, source secrets from a vault or a platform identity, and never assume a human is available.",
      media: {
        kind: "icons",
        items: [
          { icon: "clock", label: "Schedule" },
          { icon: "key", label: "Identity" },
          { icon: "file-spreadsheet", label: "Log" },
          { icon: "shield", label: "Exit code" },
        ],
      },
    },
    {
      id: "scheduling",
      type: "teach",
      powershellAutomationStage: 5,
      headline: "Register-ScheduledTask is the local answer.",
      body: "New-ScheduledTaskAction runs powershell.exe with -NoProfile -NonInteractive -File; New-ScheduledTaskTrigger sets when; Register-ScheduledTask ties them together. -NoProfile matters: your profile does not load, so anything your script relied on from your console session will be missing. Test with the exact command line the task uses, not from your prompt.",
      studyTip: {
        title: "The classic scheduled-task bug",
        body: "It works interactively and fails on schedule because of profile, working directory, or relative paths. Use absolute paths and pass a -Path parameter.",
      },
    },
    {
      id: "identity",
      type: "teach",
      powershellAutomationStage: 5,
      headline: "Non-interactive identity: service principal or managed identity.",
      body: "A service principal is an application identity in Entra with its own credential or certificate — you store and rotate that secret. A managed identity is a service principal whose credential Azure holds and rotates for you, available only to the Azure resource it is attached to. When the workload runs in Azure, managed identity is the better answer because there is no secret for you to leak.",
      terms: [
        {
          id: "managed-identity",
          label: "Managed identity",
          tier: "now",
          shortDefinition:
            "An Azure-managed application identity with no secret you have to store or rotate yourself.",
        },
      ],
    },
    {
      id: "idempotence",
      type: "teach",
      powershellAutomationStage: 5,
      headline: "Idempotence and retries are what make a rerun safe.",
      body: "Idempotent means running it twice leaves the same result as running it once — check before you create, target by identity rather than position, and make \"already correct\" a success. Pair that with a bounded retry and backoff for transient network failures, and a non-zero exit code plus a log line for the failures that are real.",
    },
    {
      id: "misconception",
      type: "misconception",
      powershellAutomationStage: 5,
      headline: "\"The task ran, so the job succeeded.\"",
      body: "Task Scheduler reports 0x0 when powershell.exe exits cleanly — which it does even if your script caught an error and gave up. Unattended automation needs to set its own exit code with exit 1 on failure, and write a log with a timestamp, an outcome, and a count. Otherwise a silently broken report looks identical to a working one for months.",
    },
    {
      id: "check",
      type: "checkpoint",
      powershellAutomationStage: 5,
      headline: "Quick check — unattended automation",
      checkpointQuestionId: "ps2-unattended-automation-q1",
    },
    {
      id: "summary",
      type: "summary",
      powershellAutomationStage: 5,
      headline: "No prompts, absolute paths, an identity, a log, and an honest exit code.",
      body: "Scheduling is the easy part. What makes automation trustworthy overnight is that it cannot block, it can be rerun safely, and it tells you the truth about whether it worked.",
    },
  ],
};
