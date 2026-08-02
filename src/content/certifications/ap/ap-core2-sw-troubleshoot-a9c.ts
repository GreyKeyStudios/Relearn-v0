import type { ExternalResource, Topic } from "../../types";

/**
 * A+ Core 2 Software Troubleshooting — A9c.
 * ap-ts-mobile-security (AP1202-3.3) only.
 * Defensive, fictional work only. Stop before 3.4, Ops, integration, or CCNA C1.
 */

const WINDOWS_11_PC_RESOURCE: ExternalResource = {
  id: "windows-11-pc",
  name: "Windows 11 PC",
  url: "https://support.microsoft.com/windows",
  cost: "free",
  platform: "windows",
  installNotes:
    "Use only for fictional Mobile Security Desk worksheets. Never enter real credentials or codes, track a person, bypass locks or management, remove suspected surveillance software impulsively, or analyze live malware.",
};

export const apCore2SwTroubleshootBatch3Topics: Topic[] = [
  {
    id: "ap-ts-mobile-security",
    name: "Troubleshoot Mobile Security Issues",
    prerequisites: [
      "ap-ts-mobile-os",
      "ap-mobile-security",
      "ap-malware",
      "ap-social-engineering",
      "ap-malware-removal",
      "ap-wireless-security",
      "ap-cloud-productivity",
    ],
    objectives: ["AP1202-3.3"],
    knowledgeNodeId: "authentication",
    lesson: {
      title: "Contain Mobile Security Incidents Without Destroying Evidence",
      content: `Mobile security troubleshooting is a defensive response process:

\`recognize suspicious behavior → establish ownership and management context → protect accounts and data → gather evidence → isolate the likely security layer → contain or escalate → remediate through approved methods → verify trust and functionality → document\`

Do not jump from a suspicious symptom to uninstall or factory reset. A hot battery, high data use, crash, or sign-out can be an ordinary application, storage, network, or OS fault. Treat the **combination, scope, timeline, and evidence** as the signal.

**Troubleshooting discipline:** identify → theory → test → plan → implement/escalate → verify → document. Protect people, accounts, data, and evidence before disruptive work.

**Separate the layers:** malicious or unwanted app · compromised account · SIM/carrier compromise · excessive permission · unauthorized profile/VPN/certificate · rooted/jailbroken state · hostile network · lost/stolen device · legitimate MDM policy · ordinary malfunction.

---

## Establish context and collect safe evidence

Confirm ownership, personal versus managed state, data sensitivity, exact symptom, timeline, recent installs, application source, permissions, accessibility/device-admin access, profiles, VPN, certificates, account sign-in and MFA history, battery/data use, store history, update state, network, carrier notices, and security alerts.

Do not ask for passwords, one-time codes, recovery keys, or unnecessary private content. Do not forward sensitive screenshots through unapproved channels, delete suspicious artifacts before evidence needs are known, attach the device to unknown analysis equipment, or install random “cleaner” apps.

**Scope before verdict:** one app or many? one account or the device? one network or every network? only a work profile? one user or several? after an update? Does another known-clean device show the same account activity?

## Suspicious applications and permissions

Signals include an unknown or counterfeit app, unknown-source install, ads/redirects, unexpected messages, persistent reinstallation, disabled protections, unknown VPN/profile, unexplained camera/microphone indicators, or a privilege request unrelated to purpose. Accessibility, device administrator, notification access, screen overlay, VPN, location, contacts, messages, files, camera, and microphone deserve special scrutiny—but legitimate accessibility and managed apps can require powerful access.

Approved response: verify identity/source → determine whether managed/required → preserve evidence → contain if needed → remove privileged access through supported steps → uninstall through supported methods → update OS/apps → run platform/org-approved checks → review accounts/sessions → verify it does not return → reset or replace only when trust cannot otherwise be restored.

Do not disable assistive technology without understanding user impact. Do not perform malware reverse engineering, platform bypass, rooting, or jailbreaking.

## Account compromise and SIM swap

Account indicators: unexpected MFA prompts, unknown sign-ins or trusted devices, changed password/recovery data, messages/posts/purchases without user action, altered cloud files, repeated sign-outs, or sessions that remain active.

Use a **known-clean device** and trusted channel. Change affected credentials, revoke sessions where authorized, inspect recovery methods and MFA, preserve useful alerts, notify affected services, and escalate privileged, financial, identity, or sensitive-data exposure. Device and account compromise can occur separately or together.

SIM-swap indicators: sudden cellular loss, SIM/eSIM or port-out notice, calls/texts and SMS MFA stop, carrier settings change, new device activation, followed by account changes. Contact the carrier using a trusted channel, protect linked accounts, review MFA/recovery, and escalate fraud. Never teach cloning, interception, or carrier bypass.

## Profiles, management, certificates, and networks

An unknown MDM/work profile, VPN, root certificate, supervision state, remotely installed app, or redirected traffic may be malicious, left by a prior owner, carrier-provided, or legitimate school/employer management. Verify ownership and authority before removal; a locked setting can be correct policy.

Repeated certificate warnings, look-alike Wi-Fi, unexpected captive portals, redirects, unknown VPN, or failures limited to one network require the learner to stop credential entry, verify date/time and network identity, compare a trusted network, inspect profiles/VPN state, and escalate suspected rogue-network or certificate incidents. Never blindly accept a certificate.

## Rooted/jailbroken and lost devices

Compliance failure, banking-app refusal, broken updates, modified boot state, unknown privileged apps, or unavailable security settings may indicate a rooted/jailbroken state. Document it, do not enter organizational credentials or bypass compliance, and return to a supported state or replace through approved procedures.

For a missing device: report promptly → confirm ownership → approved locate/lost mode/lock → suspend access and revoke sessions → protect MFA and accounts → wipe selectively or fully only according to ownership, evidence, and policy → document exposure → re-enroll replacement. A queued wipe may not execute while offline and does not replace session revocation. Never track a person without authorization.

## Contain, escalate, or continue normal troubleshooting

Continue ordinary troubleshooting when evidence supports storage pressure, aging battery, permission misconfiguration, known outage, unsupported app, or normal OS/network failure.

Contain when suspicious activity is active or sensitive access is at risk: stop using the affected app, disconnect Wi-Fi/cellular or use airplane mode when appropriate, isolate from sensitive networks, and remove organizational access through approved controls. Powering off is not universally correct; evidence and policy matter.

Escalate promptly for managed-device compromise, regulated data, several affected devices, SIM swap, privileged account abuse, unknown MDM/root certificate, theft, persistent malware, financial fraud, rooting/jailbreaking on managed equipment, or legal/privacy/personal-safety risk.

**Stalkerware/personal safety:** use a separate trusted device for help. Do not impulsively remove suspected monitoring software if that could alert an abuser or increase danger. Follow safeguarding, legal, security, or advocacy procedures; do not confront someone through the suspected device.

## Recovery, verification, and documentation

A factory reset is a late trust-restoration option, not proof of safety. Before it: ownership/authorization, evidence, backup integrity, MFA recovery, activation lock, eSIM, managed enrollment, local-only data, and risk of restoring unwanted apps/configuration. After remediation: update, restore only trusted data, re-enroll, reauthenticate securely, and monitor.

Verify the original behavior stopped; unwanted app/profile/VPN/account did not return; permissions are appropriate; OS/apps and security protections are current; sessions/recovery/MFA are trusted; calls, messages, sync, network, and managed access work; affected parties were notified; monitoring/follow-up is assigned.

Document device/ownership/management, symptom/timeline/scope, evidence source, suspected layer, containment, approvals, account actions, remediation, verification, escalation, exposure, and follow-up—without secrets or unnecessary personal data.

**Lab boundary:** fictional packets only; no live malware, real credentials, tracking, lock/MDM bypass, unsupported device modification, or unsafe removal of suspected surveillance software.

**Next when authorized:** PC security troubleshooting (\`ap-ts-pc-security\` / AP1202-3.4).`,
    },
    lightbulbMoment:
      "A mobile security symptom is a triage decision, not a malware verdict: establish context, preserve evidence, protect accounts from a clean device, and choose containment or ordinary troubleshooting based on corroborating signals.",
    keyFacts: [
      "Symptom plus context and evidence identifies the affected security layer",
      "Account compromise and device compromise are distinct but may coexist",
      "Use a known-clean device for credential and session recovery",
      "Verify ownership and management before removing profiles or wiping",
      "A factory reset is late and does not replace account remediation",
      "SIM service loss plus account changes demands trusted-channel escalation",
      "Personal-safety concerns override impulsive stalkerware removal",
    ],
    guidedExample: {
      title: "Triage six suspicious mobile cases",
      steps: [
        "Unknown flashlight app requests Accessibility and sends ads: verify source and management, preserve evidence, contain, revoke privilege and remove by approved method, review accounts, verify no return.",
        "Phone loses cellular service as recovery details change: use a clean device, contact carrier and providers through trusted channels, revoke sessions, repair MFA, escalate fraud.",
        "Certificate warning occurs only on airport Wi-Fi: stop credential entry, verify time/network, compare trusted network, inspect VPN/profile, report suspected rogue network.",
        "Work VPN cannot be disabled: confirm the known MDM profile and policy; do not label legitimate management as malware.",
        "Banking app refuses a rooted managed phone: document, stop organizational credential entry, escalate compliance, restore supported state through approved process.",
        "Possible partner-installed tracking app: move communication to a safe device and follow safety/advocacy procedure before changing the suspected phone.",
      ],
    },
    commonMistakes: [
      "Declaring malware from battery or data use alone",
      "Changing passwords on the suspected device",
      "Deleting an app or profile before evidence and authority are checked",
      "Removing legitimate MDM or accessibility support",
      "Accepting certificate warnings to continue quickly",
      "Factory-resetting before account, MFA, backup, and evidence planning",
      "Assuming remote wipe revokes cloud sessions",
      "Confronting an abuser or removing suspected stalkerware impulsively",
    ],
    examTraps: [
      "Ordinary malfunction versus corroborated security incident",
      "Known-clean device for account recovery",
      "SIM swap response through trusted carrier channel",
      "Legitimate management versus unauthorized profile",
      "Containment versus evidence preservation",
      "Personal-safety escalation before removal",
      "Verification includes accounts, profiles, permissions, and functionality",
    ],
    realWorldScenario:
      "A managed phone loses service, the user receives a port-out email, and their cloud account shows a new trusted device. The technician moves recovery to a clean workstation, calls the carrier through its published number, suspends organizational access, revokes cloud sessions, repairs recovery methods and MFA, preserves the notices, and escalates possible identity fraud. They do not reset the phone and mistake account compromise for a completed device fix.",
    whenThisFails: [
      "If regulated, privileged, financial, or multi-device exposure is possible, contain and escalate to incident response",
      "If ownership or management authority is unclear, do not remove profiles or wipe",
      "If surveillance may create personal danger, use a safe device and specialist support before changing the suspected device",
    ],
    teacherReflectionPrompt:
      "For high battery use, sudden SIM loss, and an unknown MDM profile, explain the evidence that changes each case from ordinary troubleshooting to security containment or escalation.",
    quiz: [
      {
        id: "ap-ts-mobile-security-q1",
        prompt: "A phone has high overnight battery use but no other suspicious evidence. Best first response?",
        choices: [
          { id: "a", text: "Scope battery, signal, background apps, updates, and health before declaring malware" },
          { id: "b", text: "Factory-reset immediately" },
          { id: "c", text: "Publish the user's app list" },
          { id: "d", text: "Disable every security control" },
        ],
        correctChoiceId: "a",
        explanation: "A single nonspecific symptom is not proof of compromise.",
        objectiveId: "AP1202-3.3",
        difficulty: "easy",
      },
      {
        id: "ap-ts-mobile-security-q2",
        prompt: "Cellular service suddenly stops and account recovery details change. Best action?",
        choices: [
          { id: "a", text: "Use a clean device and trusted carrier/provider channels; protect accounts and escalate possible SIM swap" },
          { id: "b", text: "Wait for SMS MFA on the affected number" },
          { id: "c", text: "Clone the SIM" },
          { id: "d", text: "Accept every MFA prompt" },
        ],
        correctChoiceId: "a",
        explanation: "The correlated signals require carrier and account response.",
        objectiveId: "AP1202-3.3",
        difficulty: "medium",
      },
      {
        id: "ap-ts-mobile-security-q3",
        prompt: "A setting is controlled by a familiar employer profile. What should the technician do?",
        choices: [
          { id: "a", text: "Verify policy and management ownership; do not remove the profile as an ordinary fix" },
          { id: "b", text: "Treat all management as malware" },
          { id: "c", text: "Bypass compliance" },
          { id: "d", text: "Wipe without authorization" },
        ],
        correctChoiceId: "a",
        explanation: "Legitimate MDM restrictions may be working as designed.",
        objectiveId: "AP1202-3.3",
        difficulty: "easy",
      },
      {
        id: "ap-ts-mobile-security-q4",
        prompt: "A user fears a partner installed monitoring software. Safest first principle?",
        choices: [
          { id: "a", text: "Use a separate trusted device and follow safety guidance before changing the suspected phone" },
          { id: "b", text: "Confront the person through the phone" },
          { id: "c", text: "Uninstall everything immediately" },
          { id: "d", text: "Post screenshots publicly" },
        ],
        correctChoiceId: "a",
        explanation: "An impulsive change can alert an abuser and increase danger.",
        objectiveId: "AP1202-3.3",
        difficulty: "hard",
      },
      {
        id: "ap-ts-mobile-security-q5",
        prompt: "After removing an unauthorized mobile app, which verification is most complete?",
        choices: [
          { id: "a", text: "Confirm it and its privileges do not return, review accounts/sessions, update protections, and test required functions" },
          { id: "b", text: "Confirm only that the icon disappeared" },
          { id: "c", text: "Assume a reset revoked cloud sessions" },
          { id: "d", text: "Skip documentation" },
        ],
        correctChoiceId: "a",
        explanation: "Trust and functionality both require verification.",
        objectiveId: "AP1202-3.3",
        difficulty: "medium",
      },
    ],
    questionBank: [
      {
        id: "ap-ts-mobile-security-b1",
        prompt: "Repeated certificate warnings appear only on one public network. Best first action?",
        choices: [
          { id: "a", text: "Stop credential entry, verify time/network, compare a trusted network, and inspect VPN/profile state" },
          { id: "b", text: "Accept the certificate permanently" },
          { id: "c", text: "Disable the lock screen" },
        ],
        correctChoiceId: "a",
        explanation: "Isolate the network/certificate layer safely.",
        objectiveId: "AP1202-3.3",
        difficulty: "medium",
      },
      {
        id: "ap-ts-mobile-security-b2",
        prompt: "Which evidence most strongly raises concern about an unknown app?",
        choices: [
          { id: "a", text: "Unknown source plus unrelated Accessibility access and messages sent without user action" },
          { id: "b", text: "A known navigation app uses location during a trip" },
          { id: "c", text: "The screen is bright" },
        ],
        correctChoiceId: "a",
        explanation: "Correlated identity, privilege, and behavior matter.",
        objectiveId: "AP1202-3.3",
        difficulty: "easy",
      },
      {
        id: "ap-ts-mobile-security-b3",
        prompt: "Why use a clean device during suspected account compromise?",
        choices: [
          { id: "a", text: "The suspected device may expose new credentials or recovery actions" },
          { id: "b", text: "It bypasses MFA" },
          { id: "c", text: "It guarantees no service outage" },
        ],
        correctChoiceId: "a",
        explanation: "Recovery should not depend on an untrusted endpoint.",
        objectiveId: "AP1202-3.3",
        difficulty: "easy",
      },
      {
        id: "ap-ts-mobile-security-b4",
        prompt: "A managed phone is rooted and fails compliance. Correct boundary?",
        choices: [
          { id: "a", text: "Document, stop sensitive use, escalate, and restore supported state through approved procedures" },
          { id: "b", text: "Teach a compliance bypass" },
          { id: "c", text: "Hide the state from management" },
        ],
        correctChoiceId: "a",
        explanation: "Do not bypass organizational protections.",
        objectiveId: "AP1202-3.3",
        difficulty: "medium",
      },
      {
        id: "ap-ts-mobile-security-b5",
        prompt: "Why can a remote wipe be insufficient?",
        choices: [
          { id: "a", text: "The device may be offline, sessions may remain, and evidence or personal data may be affected" },
          { id: "b", text: "It always removes carrier records" },
          { id: "c", text: "It proves the device was never compromised" },
        ],
        correctChoiceId: "a",
        explanation: "Wipe is only one incident-response control.",
        objectiveId: "AP1202-3.3",
        difficulty: "medium",
      },
      {
        id: "ap-ts-mobile-security-b6",
        prompt: "Before removing an unknown profile, first confirm:",
        choices: [
          { id: "a", text: "Ownership, management legitimacy, authorization, and evidence needs" },
          { id: "b", text: "Only battery percentage" },
          { id: "c", text: "That the user dislikes its name" },
        ],
        correctChoiceId: "a",
        explanation: "Profiles may be legitimate or evidence-bearing.",
        objectiveId: "AP1202-3.3",
        difficulty: "medium",
      },
      {
        id: "ap-ts-mobile-security-b7",
        prompt: "A reset is being considered after persistent malware. What comes first?",
        choices: [
          { id: "a", text: "Authorization, evidence, trusted backup, MFA/activation/eSIM/MDM planning, and account response" },
          { id: "b", text: "Restore every app automatically" },
          { id: "c", text: "Skip ownership verification" },
        ],
        correctChoiceId: "a",
        explanation: "Reset is a planned late-stage action.",
        objectiveId: "AP1202-3.3",
        difficulty: "hard",
      },
      {
        id: "ap-ts-mobile-security-b8",
        prompt: "Which case most clearly needs immediate escalation?",
        choices: [
          { id: "a", text: "Unknown root certificate on several managed devices handling regulated data" },
          { id: "b", text: "One known game consumes battery while played" },
          { id: "c", text: "A user forgot to enable notifications" },
        ],
        correctChoiceId: "a",
        explanation: "Scope, privilege, management, and sensitive data raise incident severity.",
        objectiveId: "AP1202-3.3",
        difficulty: "hard",
      },
    ],
    flashcards: [
      { id: "ap-ts-mobile-security-f1", front: "Battery drain = malware?", back: "No; correlate context, scope, timeline, and evidence" },
      { id: "ap-ts-mobile-security-f2", front: "Account recovery endpoint?", back: "A known-clean device through trusted channels" },
      { id: "ap-ts-mobile-security-f3", front: "SIM-swap clues?", back: "Service loss plus SIM/port notice and account changes" },
      { id: "ap-ts-mobile-security-f4", front: "Unknown profile first step?", back: "Verify ownership, management, authority, and evidence needs" },
      { id: "ap-ts-mobile-security-f5", front: "Remote wipe limitation?", back: "Offline delivery, sessions, evidence, ownership, and data impact" },
      { id: "ap-ts-mobile-security-f6", front: "Possible stalkerware?", back: "Use a safe device; prioritize personal safety before removal" },
      { id: "ap-ts-mobile-security-f7", front: "Rooted managed device?", back: "Document, stop sensitive use, escalate; never bypass compliance" },
    ],
    assignments: [
      {
        id: "ap-lab-mobile-security-desk",
        title: "Mobile Security Triage Desk",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `Use fictional case packets only. For each case record: symptom and scope; ownership/management; ordinary vs suspicious evidence; likely layer; immediate account/data/evidence protection; contain/continue/escalate decision; least disruptive approved action; verification; privacy-safe ticket note.

Cases: (A) high battery after navigation with no other signal; (B) unknown flashlight app with Accessibility and unexpected messages; (C) sudden cellular loss, port-out alert, and new cloud trusted device; (D) employer VPN profile controls a setting; (E) certificate warnings only on airport Wi-Fi; (F) rooted managed phone fails compliance; (G) lost phone is the only MFA authenticator; (H) user fears partner-installed location monitoring; (I) unknown root certificate appears on three managed devices.

Refuse real credentials/codes, live malware analysis, tracking, lock or MDM bypass, unsupported rooting/jailbreaking, and impulsive surveillance-app removal.`,
        estimatedMinutes: 45,
        completionCriteria: [
          "Classify all nine cases without treating every anomaly as malware",
          "Use a clean-device/trusted-channel response for SIM and account compromise",
          "Preserve legitimate management and evidence boundaries",
          "Prioritize personal safety in the monitoring case",
          "Verify both restored trust and required functionality",
        ],
        relatedTopicIds: ["ap-ts-mobile-security", "ap-ts-mobile-os", "ap-mobile-security", "ap-malware-removal"],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 65,
    difficulty: "medium",
  },
];
