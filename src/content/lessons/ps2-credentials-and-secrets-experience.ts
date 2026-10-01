import type { TopicExperience } from "@/content/types";

/** LES — Credentials and secrets hygiene (PowerShell II Module 3). */
export const PS2_CREDENTIALS_AND_SECRETS_EXPERIENCE: TopicExperience = {
  anchor: { type: "powershell-automation" },
  screens: [
    {
      id: "hero",
      type: "hero",
      powershellAutomationStage: 2,
      headline: "The fastest way to cause a security incident is to automate with a hardcoded password.",
      body: "Every script you write from here on needs an answer to one question: where does the credential come from, and who can read it? Getting that answer wrong once puts a working password into version control, a ticket, or a chat message forever.",
    },
    {
      id: "pscredential",
      type: "teach",
      powershellAutomationStage: 2,
      headline: "PSCredential is the standard shape, not the storage.",
      body: "Get-Credential prompts and hands back a PSCredential object holding a username and a SecureString password. Almost every cmdlet with a -Credential parameter wants that object. It is the interface every tool agrees on — but it says nothing about where the secret lived before the prompt.",
      terms: [
        {
          id: "pscredential",
          label: "PSCredential",
          tier: "now",
          shortDefinition:
            "An object pairing a username with a SecureString password, accepted by the -Credential parameter.",
        },
      ],
    },
    {
      id: "securestring",
      type: "teach",
      powershellAutomationStage: 2,
      headline: "SecureString is not encryption at rest.",
      body: "SecureString keeps a password out of your console history and away from casual memory dumps. On Windows, ConvertFrom-SecureString encrypts with DPAPI tied to your user and machine — so an exported string only decrypts as you, on that box. On Linux and macOS, PowerShell has no DPAPI, so the same export is effectively plain text with extra steps.",
      studyTip: {
        title: "Say the limitation out loud",
        body: "\"SecureString protects the value in memory and, on Windows only, at rest for one user on one machine.\" If you cannot say that, you cannot judge whether a stored credential is safe.",
      },
    },
    {
      id: "options",
      type: "flow",
      powershellAutomationStage: 2,
      headline: "Pick storage by who runs the script and where.",
      body: "Interactive work: prompt. Your own scheduled task: SecretManagement with SecretStore, or a DPAPI-protected file readable only by you. Shared or cloud automation: a managed identity or a vault the platform unlocks, so no secret ever exists in your code.",
      media: {
        kind: "flow",
        items: [
          { icon: "terminal", label: "Prompt" },
          { icon: "key", label: "SecretStore" },
          { icon: "shield", label: "Vault" },
          { icon: "cloud", label: "Managed identity" },
        ],
      },
    },
    {
      id: "least-privilege",
      type: "teach",
      powershellAutomationStage: 2,
      headline: "Least privilege limits the damage of the leak you have not noticed yet.",
      body: "A reporting script needs read scopes, never write. A service account that only inventories servers does not belong in Domain Admins. Ask what the script must do, grant exactly that, and revisit it when the script's job changes — not when the breach report arrives.",
    },
    {
      id: "misconception",
      type: "misconception",
      powershellAutomationStage: 2,
      headline: "\"It is in a variable, so it is not hardcoded.\"",
      body: "$Password = 'Summer2026!' is a hardcoded password that has been moved up three lines. So is a plain-text config file next to the script, and so is a base64 string — base64 is encoding, not encryption. The test is not where the literal sits; it is whether reading the file gives you the secret.",
    },
    {
      id: "check",
      type: "checkpoint",
      powershellAutomationStage: 2,
      headline: "Quick check — credentials",
      checkpointQuestionId: "ps2-credentials-and-secrets-q1",
    },
    {
      id: "summary",
      type: "summary",
      powershellAutomationStage: 2,
      headline: "Credential in, secret out of the code.",
      body: "Accept a PSCredential or a token, source it from a prompt, a vault, or a platform identity, know exactly what SecureString does and does not protect, and grant the smallest scope that lets the script finish.",
    },
  ],
};
