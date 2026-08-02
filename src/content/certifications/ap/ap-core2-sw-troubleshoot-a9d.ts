import type { ExternalResource, Topic } from "../../types";

/** A9d: AP1202-3.4 only. Fictional defensive PC Security Desk. */
const WINDOWS_11_PC_RESOURCE: ExternalResource = {
  id: "windows-11-pc",
  name: "Windows 11 PC",
  url: "https://support.microsoft.com/windows",
  cost: "free",
  platform: "windows",
  installNotes: "Use fictional case packets only. Do not execute malware, weaken controls, collect secrets, or perform unauthorized access.",
};

const choice = (id: string, prompt: string, correct: string, wrong1: string, wrong2: string, difficulty: "easy" | "medium" | "hard" = "medium") => ({
  id,
  prompt,
  choices: [{ id: "a", text: correct }, { id: "b", text: wrong1 }, { id: "c", text: wrong2 }],
  correctChoiceId: "a",
  explanation: correct,
  objectiveId: "AP1202-3.4",
  difficulty,
});

export const apCore2SwTroubleshootBatch4Topics: Topic[] = [
  {
    id: "ap-ts-pc-security",
    name: "Troubleshoot PC Security Issues",
    prerequisites: ["ap-ts-mobile-security", "ap-malware", "ap-malware-removal", "ap-windows-security", "ap-hardening", "ap-browser-security", "ap-social-engineering"],
    objectives: ["AP1202-3.4"],
    knowledgeNodeId: "authentication",
    lesson: {
      title: "Triage PC Security Symptoms, Contain Safely, and Restore Trust",
      content: `PC security troubleshooting follows a defensive incident path:

\`recognize symptom → establish user, asset, scope, and sensitivity → protect people/data/evidence → collect trusted evidence → distinguish compromise from fault or policy → contain/escalate → remediate by approved process → verify trust and functionality → document\`

Use identify → theory → test → plan → implement/escalate → verify → document. Never equate one slow PC, pop-up, crash, lockout, or network failure with malware. Correlate timeline, persistence, affected accounts/devices, protection alerts, browser behavior, processes/startup, network connections, policies, updates, and recent changes.

## Recognize and isolate the layer

Common security symptoms include browser redirects, fake alerts, unwanted extensions, disabled antivirus/firewall/update, unknown startup items or services, changed proxy/DNS/hosts settings, new accounts or privileges, encrypted or renamed files, unavailable backups, unexpected MFA/sign-ins, remote-control activity, data-exfiltration alerts, account lockouts, or security tools that cannot update.

Distinguish malware, browser hijack, account compromise, unauthorized remote access, malicious persistence, ransomware, misconfiguration, corrupt profile, failed update, resource pressure, legitimate management, and ordinary hardware/network faults. Check scope: one browser/user/PC/site/network or many? Does a known-clean device show the same account issue? Did policy intentionally set the control?

## Immediate protection and evidence

Confirm authorization and asset ownership. Record exact messages, time, user action, hostname/asset, affected data/accounts, alerts, recent installs, protection status, update state, network context, and safe screenshots/logs. Do not request passwords or codes, browse private content unnecessarily, delete evidence, attach unknown removable media, or upload samples to unapproved services.

If active compromise or spread is plausible, isolate from networks using approved controls, stop sensitive use, protect accounts from a known-clean device, and escalate. Do not automatically power off: volatile evidence, encryption activity, safety, and incident policy matter. Never pay, negotiate, decrypt, or investigate an attacker independently.

## Malware and ransomware response

Follow the approved malware-removal sequence: identify/quarantine symptoms → update approved anti-malware when safe → scan using trusted tools or offline method when directed → quarantine/remove through approved tooling → remediate persistence and vulnerabilities → patch → restore trusted data if necessary → verify protections and behavior → monitor/document.

Ransomware indicators—mass file renaming/encryption, ransom note, inaccessible shares, backup tampering—require immediate isolation and incident escalation. Protect other systems and backups; do not connect backup media, pay, or use random decryptors. Reimage or restore only from known-good baselines/backups under policy.

## Browser, accounts, and remote access

For redirects/pop-ups: compare browsers/profiles, inspect extensions, homepage/search, notifications, proxy/DNS, certificates, downloaded apps, and security alerts. Remove only confirmed unwanted components through supported methods; reset settings after preserving required data and sync implications.

For unexpected MFA, new sign-ins, changed recovery details, messages, or privileges: use a clean device; reset credentials through trusted channels, revoke sessions/tokens, review MFA/recovery and delegated access, and escalate privileged or sensitive compromise. A clean PC does not prove an account is clean, and a password change does not prove the endpoint is trusted.

Unexpected remote-control tools, enabled Remote Desktop, new support agents, scheduled tasks, services, firewall rules, or admin accounts require identity, business-purpose, and authorization checks. Preserve legitimate management tooling. Disable or remove unauthorized access through approved response; review credentials and lateral scope.

## Security controls and boot integrity

If antivirus, firewall, encryption, updates, Secure Boot, or account controls are disabled, determine whether policy, failure, tampering, unsupported software, or firmware state caused it. Do not weaken other controls to make one tool run. A rooted/mobile concept maps here to unsupported boot/firmware modification: document and return to a supported trusted baseline through authorized processes.

## Restore and verify trust

Choose the least disruptive fix that can actually restore trust. When integrity cannot be established, reimage from an approved baseline rather than stacking ad-hoc fixes. Before destructive recovery protect evidence, approved backups, recovery keys, licensing, identity/MFA, user data, and business continuity. Do not restore suspected executables, scripts, macros, extensions, or configuration blindly.

Verification includes: original symptom gone; scans and protection healthy; firewall/update/encryption/boot controls restored; no unwanted users, extensions, startup/persistence, proxy/DNS, remote access, or sessions; accounts and MFA trusted; patches applied; data restored from known-good source; required apps/network work; monitoring and follow-up assigned. A successful reboot alone is insufficient.

Document scope, evidence, containment, approvals, tools/results, account actions, remediation/reimage/restore source, verification, exposure, notifications, and follow-up without secrets or unnecessary personal data.

**Lab boundary:** fictional tickets only—no live malware, exploitation, evasion, credential capture, random decryptors, or control weakening. **Next:** Software Troubleshooting integration review; Operational Procedures remains fenced until that gate passes.`,
    },
    lightbulbMoment: "PC security troubleshooting must restore both function and trust: a machine that boots can still have hostile persistence, compromised accounts, or unsafe recovery data.",
    keyFacts: [
      "Corroborate nonspecific symptoms before declaring compromise",
      "Isolate and escalate active spread or ransomware",
      "Use a known-clean device for account recovery",
      "Preserve evidence and authorization before destructive recovery",
      "Legitimate management tools and policies require context",
      "Reimage from an approved baseline when trust cannot be established",
      "Verify endpoint, accounts, controls, data, and required function",
    ],
    guidedExample: {
      title: "From suspicious symptom to trusted recovery",
      steps: [
        "A user reports pop-ups: scope one browser/profile, inspect extensions/notifications/proxy and installed apps, and compare a clean profile.",
        "An unknown extension plus disabled protection and new sign-ins corroborate compromise; stop sensitive use and isolate through approved controls.",
        "Preserve alerts and timeline; protect the account from a clean device and revoke sessions.",
        "Escalate; approved tooling finds persistence. Because integrity is uncertain, reimage from the managed baseline rather than layering fixes.",
        "Restore known-good documents only, patch, verify controls/accounts/browser/network, monitor, and document exposure and follow-up.",
      ],
    },
    commonMistakes: [
      "Calling every slow PC malware",
      "Changing credentials on the suspected endpoint",
      "Deleting evidence or powering off automatically",
      "Connecting backups to a ransomware-affected PC",
      "Removing legitimate management tooling",
      "Disabling security controls to make software run",
      "Restoring untrusted executables or configuration",
      "Treating reboot or one clean scan as proof of trust",
    ],
    examTraps: [
      "Nonspecific fault versus corroborated compromise",
      "Isolation and escalation before cleanup during active spread",
      "Account response from a clean device",
      "Ransomware backup protection",
      "Approved baseline versus ad-hoc fixes",
      "Legitimate remote management context",
      "Trust verification beyond functionality",
    ],
    realWorldScenario: "Several files gain an unfamiliar extension, a ransom note appears, and a mapped share is changing. The technician disconnects the endpoint through approved isolation, alerts incident response and storage owners, protects offline backups, records scope and time, and does not pay or attach backup media. The PC is later reimaged from an approved baseline, clean data is restored, credentials and sessions are remediated from a trusted device, and both controls and business function are verified.",
    whenThisFails: [
      "If compromise is spreading, sensitive data is exposed, or ransomware is suspected, isolate and escalate immediately",
      "If system integrity cannot be established, use approved reimage/replacement rather than claiming cleanup success",
      "If management purpose or response authority is unclear, preserve state and escalate before removing tools or controls",
    ],
    teacherReflectionPrompt: "Contrast the response to a slow PC, a browser redirect limited to one profile, and mass file encryption across a share; name evidence, containment, and proof of restored trust.",
    quiz: [
      choice("ap-ts-pc-security-q1", "A PC is slow after a large update. Best first framing?", "Scope resources, update state, users, alerts, and recent changes before declaring malware", "Reimage immediately", "Disable antivirus", "easy"),
      choice("ap-ts-pc-security-q2", "Files are rapidly being renamed and a ransom note appears. Best immediate response?", "Use approved network isolation and escalate; protect shares and backups", "Connect every backup drive", "Pay immediately", "medium"),
      choice("ap-ts-pc-security-q3", "Unexpected MFA and sign-ins accompany PC alerts. Where should account recovery occur?", "On a known-clean device through trusted channels, including session and recovery review", "On the suspected PC only", "By disabling MFA", "easy"),
      choice("ap-ts-pc-security-q4", "An unfamiliar remote-support agent is installed. First distinction?", "Verify identity, business purpose, management context, authorization, and related evidence", "Assume every support tool is malware", "Publish its configuration", "medium"),
      choice("ap-ts-pc-security-q5", "What best proves recovery?", "Endpoint persistence and controls, accounts/sessions, trusted data, required function, and monitoring all verify", "The PC rebooted", "One pop-up closed", "hard"),
    ],
    questionBank: [
      choice("ap-ts-pc-security-b1", "Redirects occur in one browser profile only. Narrowest useful test?", "Compare a clean profile/browser and inspect extensions, notifications, proxy, and search settings", "Replace the motherboard", "Disable the firewall"),
      choice("ap-ts-pc-security-b2", "Why not attach backup media during active ransomware?", "It may be encrypted or contaminated, harming recovery", "Backups cannot contain files", "It improves containment"),
      choice("ap-ts-pc-security-b3", "A firewall setting is locked by known company policy. Best action?", "Verify intended policy and escalate exceptions; do not bypass management", "Remove management", "Create a secret admin"),
      choice("ap-ts-pc-security-b4", "One clean scan means:", "Only that one approved check found nothing; correlate evidence and verify trust comprehensively", "The account is definitely safe", "All persistence is impossible"),
      choice("ap-ts-pc-security-b5", "When is reimage preferable?", "When integrity cannot be established and an approved trusted baseline is available", "Whenever one app crashes", "To avoid documenting evidence", "hard"),
      choice("ap-ts-pc-security-b6", "Before destructive recovery, protect:", "Evidence, approved backups, recovery keys, identity/MFA, licensing, and continuity", "Only wallpaper", "Attacker persistence"),
      choice("ap-ts-pc-security-b7", "A password change alone does not prove:", "The endpoint is trusted or other sessions and recovery methods are safe", "The keyboard works", "The user has an account"),
      choice("ap-ts-pc-security-b8", "What should a ticket omit?", "Passwords, one-time codes, recovery keys, and unnecessary private data", "Containment time", "Verification results", "easy"),
    ],
    flashcards: [
      { id: "ap-ts-pc-security-f1", front: "Slow PC = malware?", back: "No—scope, correlate, and test evidence" },
      { id: "ap-ts-pc-security-f2", front: "Ransomware first?", back: "Approved isolation, escalation, protect shares/backups" },
      { id: "ap-ts-pc-security-f3", front: "Account recovery device?", back: "Known-clean endpoint via trusted channel" },
      { id: "ap-ts-pc-security-f4", front: "Integrity uncertain?", back: "Approved reimage or replacement" },
      { id: "ap-ts-pc-security-f5", front: "Recovery proof?", back: "Trust plus function across endpoint, accounts, controls, and data" },
      { id: "ap-ts-pc-security-f6", front: "Unknown admin tool?", back: "Verify purpose, management, authorization, and evidence" },
    ],
    assignments: [{
      id: "ap-lab-pc-security-desk",
      title: "PC Security Response Desk",
      type: "external-lab",
      externalResourceId: "windows-11-pc",
      instructions: `Fictional packets only. For each, record scope, evidence, likely layer, containment/escalation, approved remediation, trust verification, and privacy-safe ticket note: (A) slow after update; (B) one-profile redirects; (C) protection disabled plus unknown startup and sign-ins; (D) mass file encryption reaching a share; (E) unknown remote-support tool on a managed PC; (F) account takeover but clean endpoint scan; (G) failed update and corrupt profile mistaken for malware; (H) restored PC whose browser extension returns through sync. Refuse live malware, payment, random decryptors, credential collection, control weakening, or unauthorized access.`,
      estimatedMinutes: 45,
      completionCriteria: ["Separate ordinary faults from corroborated incidents", "Isolate/escalate ransomware and protect backups", "Use clean-device account response", "Choose reimage when integrity is uncertain", "Verify trust and function"],
      relatedTopicIds: ["ap-ts-pc-security", "ap-malware-removal", "ap-windows-security", "ap-browser-security"],
      order: 1,
    }],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 65,
    difficulty: "medium",
  },
];
