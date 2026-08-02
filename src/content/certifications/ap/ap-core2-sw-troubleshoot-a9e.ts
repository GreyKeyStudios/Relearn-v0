import type { Topic } from "../../types";

const item = (id: string, objectiveId: string, prompt: string, correct: string, wrong1: string, wrong2: string, difficulty: "easy" | "medium" | "hard" = "medium") => ({
  id, prompt,
  choices: [{ id: "a", text: correct }, { id: "b", text: wrong1 }, { id: "c", text: wrong2 }],
  correctChoiceId: "a", explanation: correct, objectiveId, difficulty,
});

export const apCore2SwTroubleshootIntegrationTopics: Topic[] = [{
  id: "ap-software-troubleshoot-domain-review",
  name: "Software Troubleshooting Domain Review",
  prerequisites: ["ap-ts-windows-os", "ap-ts-mobile-os", "ap-ts-mobile-security", "ap-ts-pc-security"],
  objectives: ["AP1202-3.1", "AP1202-3.2", "AP1202-3.3", "AP1202-3.4"],
  knowledgeNodeId: "troubleshooting-process",
  lesson: {
    title: "Integrate Software Troubleshooting Across OS, Mobile, and Security",
    content: `This integration review tests one reusable decision model across Windows, mobile applications, mobile security, and PC security:

\`identify symptom and scope → protect safety, data, identity, and evidence → name a testable layer → test one theory safely → plan the least disruptive authorized action or escalation → implement → verify full function and trust → document\`

## The cross-domain decision grid

| Signal | Likely route | First protection | Proof |
|---|---|---|---|
| Windows boot, service, profile, update, or performance failure | AP1202-3.1 | data, recovery, change context | boot + original workload + controls |
| Mobile app, sync, permission, storage, battery, connectivity, or policy failure | AP1202-3.2 | backup, MFA, ownership/MDM | app function + sync/notify/network |
| Suspicious mobile app, account/SIM, profile, certificate, loss, or surveillance concern | AP1202-3.3 | personal safety, clean-device account action, evidence | trust + accounts/profiles + function |
| PC browser hijack, malware, ransomware, remote access, account, or disabled controls | AP1202-3.4 | isolation, accounts, evidence, backups | endpoint/account/control/data trust |

**Do not confuse symptom with cause.** A slow system can be resource pressure, update activity, hardware, policy, or malware. A failed sign-in can be account, network, time, token, MFA, policy, or compromise. A disabled setting can be legitimate management. Use scope and corroborating evidence.

## High-impact actions require gates

Before clear-data, reinstall, reset, reimage, restore, profile removal, credential change, isolation, or wipe, consider: ownership and authorization · backup and local-only data · MFA/recovery · encryption/keys · evidence · management policy · service impact · trusted restore source · personal safety · communication/escalation.

Least disruptive does not mean weakest. During ransomware, active compromise, sensitive exposure, SIM swap, unknown privileged management, or personal-safety risk, rapid containment and escalation may be safer than continued local testing.

## Integrated cases

**Windows update then boot loop:** preserve data/recovery context, test power/startup/recovery and recent change, use supported repair, reset/reimage late, verify boot, applications, updates, security, and data.

**Mobile mail works in browser only:** isolate app account/token/cache/permission/network/managed profile before reinstall; protect MFA and local data; verify sync and notifications, not merely launch.

**Phone loses service plus recovery changes:** treat as possible SIM/account compromise; use clean device and trusted carrier/provider channels; revoke sessions and repair MFA; do not wait on affected SMS.

**PC encrypts a mapped share:** isolate through approved controls, escalate, protect backups/shares, preserve evidence; do not pay or attach backup media; restore from trusted baseline/data and verify wider scope.

**Possible partner monitoring:** move help to a trusted device and follow personal-safety procedure before altering the suspected phone.

## Verification and documentation

Verify the original symptom, adjacent functions, data integrity, account/session state, network/sync, security protections, management enrollment, updates, recurrence, and user outcome. For security cases, function without trust is failure; for ordinary faults, a clean scan without restored function is also failure.

Document symptom, scope, device/user/management context, timeline, theory, evidence, test, authorization, action, data/account impact, exact verification, escalation, and follow-up. Never store passwords, codes, keys, or unnecessary private content.

**Domain gate:** AP1202-3.1–3.4 are first-pass only after all four lessons and this integration review pass TypeScript and curriculum verification. Operational Procedures remains separate and the full A+ track remains Planned.`,
  },
  lightbulbMoment: "Across software troubleshooting, the durable skill is choosing the failing layer and the protection boundary before acting; verification must prove function, and security cases must also prove restored trust.",
  keyFacts: ["Scope before cause", "Protect data, identity, safety, and evidence before high-impact work", "One theory and one controlled test at a time", "Managed restriction may be intentional", "Security incidents can require containment before further testing", "Known-clean devices protect account recovery", "Verify full function and, where relevant, trust"],
  guidedExample: {
    title: "Route four tickets without using one universal fix",
    steps: [
      "Windows boot loop after update: route to 3.1; preserve recovery/data; test recent-change and supported recovery layers.",
      "Mobile app cannot sync but browser works: route to 3.2; test account/token/network/profile; avoid immediate reinstall.",
      "Mobile service loss plus new trusted account device: route to 3.3; clean-device carrier/account containment and escalation.",
      "Files encrypt across a mapped share: route to 3.4; approved isolation, incident escalation, and backup/share protection.",
      "For each, define verification beyond disappearance of the first symptom and write a privacy-safe ticket note.",
    ],
  },
  commonMistakes: ["Applying restart/reinstall/reset to every symptom", "Testing without scoping one user/app/device/network", "Ignoring backup and MFA before destructive action", "Removing legitimate management", "Changing credentials on a suspected device", "Continuing local testing during active spread", "Calling one clean scan proof of trust", "Documenting secrets or vague 'fixed' outcomes"],
  examTraps: ["Best first protection before action", "Ordinary fault versus security evidence", "Least disruptive safe test", "When containment outranks continued testing", "Managed-policy boundary", "Account versus endpoint compromise", "Verification beyond launch or reboot"],
  realWorldScenario: "A technician receives four simultaneous reports: a Windows boot loop after patching, one mobile mail app failing while webmail works, a phone with sudden carrier loss and new account recovery details, and a PC encrypting a shared drive. They route each to its correct layer and urgency, protect data/accounts/backups, contain the active security cases, use narrow supported tests for ordinary faults, and verify function and trust separately rather than prescribing four factory resets.",
  whenThisFails: ["If scope or authorization is unclear, preserve state and escalate", "If compromise is active or spreading, contain and invoke incident response", "If a destructive fix threatens data, identity recovery, evidence, or safety, stop until the required gate is satisfied"],
  teacherReflectionPrompt: "For a Windows boot loop, mobile sync failure, SIM-swap indicators, and ransomware, name route, first protection, safe action, escalation condition, and proof of completion.",
  quiz: [
    item("ap-sw-review-q1", "AP1202-3.1", "Windows boot loop follows an update. Best first approach?", "Protect recovery/data context, scope the recent change, and use supported startup diagnosis before reset", "Factory-reset immediately", "Disable all security"),
    item("ap-sw-review-q2", "AP1202-3.2", "Mobile mail works in browser but not app. Best route?", "Test app account/token, network, permission, storage, and managed profile before reinstall", "Declare server outage", "Remove MDM"),
    item("ap-sw-review-q3", "AP1202-3.3", "Service loss accompanies new account recovery details. Best response?", "Use a clean device and trusted carrier/provider channels; protect accounts and escalate SIM-swap concern", "Wait for SMS MFA", "Reset without account action", "hard"),
    item("ap-sw-review-q4", "AP1202-3.4", "Files encrypt across a mapped share. Best immediate priority?", "Approved isolation and incident escalation while protecting shares and backups", "Attach backups", "Keep testing locally"),
    item("ap-sw-review-q5", "AP1202-3.4", "What completes a security repair?", "Function plus verified endpoint, account, controls, data, and monitoring trust", "A reboot", "One closed alert", "hard"),
  ],
  questionBank: [
    item("ap-sw-review-b1", "AP1202-3.1", "Why test one theory at a time?", "It preserves causal evidence and limits collateral change", "It guarantees hardware is good", "It removes documentation"),
    item("ap-sw-review-b2", "AP1202-3.2", "Before clearing mobile app data?", "Understand local data, account, sync, MFA, and management impact", "Assume cache and data are identical", "Disable backups"),
    item("ap-sw-review-b3", "AP1202-3.3", "Unknown profile first step?", "Verify ownership, management legitimacy, authority, and evidence needs", "Remove immediately", "Bypass it"),
    item("ap-sw-review-b4", "AP1202-3.3", "Possible stalkerware first principle?", "Use a separate trusted device and prioritize personal safety before changes", "Confront through the phone", "Publish evidence"),
    item("ap-sw-review-b5", "AP1202-3.4", "One clean scan proves what?", "Only that this check found nothing; comprehensive trust still needs verification", "The account is safe", "Persistence is impossible"),
    item("ap-sw-review-b6", "AP1202-3.4", "Integrity cannot be established. Best approved recovery?", "Reimage or replace from a trusted baseline with protected data/account planning", "Stack random cleaners", "Disable updates"),
    item("ap-sw-review-b7", "AP1202-3.2", "Managed setting is unavailable. Best interpretation?", "It may be intended policy; verify before changing management", "It is always malware", "Root the device"),
    item("ap-sw-review-b8", "AP1202-3.1", "Best ticket closure language?", "Record symptom, cause/test/action, exact verification, impact, and follow-up without secrets", "Fixed", "Include passwords", "easy"),
  ],
  flashcards: [
    { id: "ap-sw-review-f1", front: "Universal troubleshooting loop?", back: "Identify, theory, test, plan, implement/escalate, verify, document" },
    { id: "ap-sw-review-f2", front: "High-impact action gate?", back: "Authorization, data, identity, evidence, policy, safety, restore source" },
    { id: "ap-sw-review-f3", front: "Active spread?", back: "Approved isolation and escalation before routine cleanup" },
    { id: "ap-sw-review-f4", front: "Clean device use?", back: "Account recovery when endpoint/device trust is uncertain" },
    { id: "ap-sw-review-f5", front: "Security completion?", back: "Restored trust plus required function" },
    { id: "ap-sw-review-f6", front: "Managed restriction?", back: "Verify policy; do not bypass or remove reflexively" },
  ],
  practiceType: ["reading", "quiz", "flashcard"],
  estimatedStudyMinutes: 55,
  difficulty: "medium",
}];
