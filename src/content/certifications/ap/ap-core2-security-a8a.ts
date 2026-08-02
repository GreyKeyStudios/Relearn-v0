import type { ExternalResource, Topic } from "../../types";

/**
 * A+ Core 2 Security — A8a (Michael 2026-08-01).
 * ap-security-measures (AP1202-2.1) only — including Zero Trust basics.
 * Stop after verify — no 2.2+ Security, SW-TS, Ops, or CCNA C1.
 */

const WINDOWS_11_PC_RESOURCE: ExternalResource = {
  id: "windows-11-pc",
  name: "Windows 11 PC",
  url: "https://support.microsoft.com/windows",
  cost: "free",
  platform: "windows",
  installNotes:
    "Use a Windows 11 PC for read-only security baseline inventories and fictional worksheets. Do not disable MFA, encryption, firewall, endpoint protection, logging, or organizational policy. Do not bypass physical-access controls or create shared accounts to ‘fix’ access.",
};

export const apCore2SecurityBatch1Topics: Topic[] = [
  {
    id: "ap-security-measures",
    name: "Security Measures & Zero Trust Basics",
    prerequisites: ["ap-os-domain-review", "ap-cloud-concepts"],
    objectives: ["AP1202-2.1"],
    knowledgeNodeId: "authentication",
    lesson: {
      title: "Choose Security Measures from Asset, Risk, and Authorization",
      content: `Security measures are **risk decisions**, not a glossary to memorize. On A+, start with what you protect, what can go wrong, which control reduces that risk, where you are authorized to act, what evidence proves the control works, and when to escalate.

**Prior:** OS domain first-pass (accounts, settings, apps, cloud identity) · Core 1 cloud ownership habits · CF safe-change literacy. **Later Security topics** deepen Windows settings, wireless, malware, social engineering, hardening, mobile, disposal, SOHO, and browsers — this topic builds the model those lessons reuse.

---

## What you protect

Assets include people-facing systems and data: identities, endpoints, network paths, applications, files, physical spaces, and recovery capability. A lost laptop threatens data *and* session tokens. A shared admin password threatens accountability. An unlocked server room threatens integrity of many systems at once.

**Risk framing:** asset → threat/failure mode → impact → control choice → residual risk → verify.

---

## Control categories

Controls are often grouped by *how they are implemented*:

| Category | Meaning | Examples |
|----------|---------|----------|
| **Technical** | Systems enforce the control | MFA, host firewall, encryption, logging, EDR |
| **Administrative / managerial** | Policy, process, governance | AUP, password policy, access-approval process |
| **Operational** | Day-to-day procedures people run | Patch cadence, privilege reviews, visitor escort |
| **Physical** | Buildings, hardware, spaces | Locks, badges, cameras, cable locks, server-room doors |

One control can sit in more than one category depending on context (a written badge procedure is administrative; the badge reader is technical/physical).

## Control functions

Functions answer *what job the control does*:

| Function | Job | Example |
|----------|-----|---------|
| **Preventive** | Stop the bad event | Lock, least privilege, allowlisting |
| **Detective** | Reveal that something happened | Logs, cameras, alerts |
| **Corrective** | Restore / contain after impact | Backups, account disable, wipe |
| **Deterrent** | Discourage attempt | Visible cameras, warning banners |
| **Compensating** | Reduce risk when preferred control is weak/unavailable | Extra monitoring when legacy OS cannot patch |
| **Directive** | Instruct required behavior | Policy: “lock screen when leaving desk” |

A policy may be **administrative + directive**. A lock may be **physical + preventive**. Logging may be **technical + detective**. Backups often support **corrective** recovery.

---

## Defense in depth

No single control is enough. Layer across **identity, endpoint, network, application, data, and physical access**. When one layer fails, another should still reduce impact. Duplicating the *same* weak control twice (two weak passwords, two open doors with the same badge bug) is not depth — shared failures defeat the stack.

## Least privilege, need to know, separation of duties

- **Least privilege** — only the access needed for the task; limit by role, resource, and time; don’t use admin accounts for email/browsing; elevate with justification, logging, and review; remove unused access.
- **Need to know** — general employment authorization ≠ access to *this* file/system for *this* task.
- **Separation of duties** — sensitive workflows may split request / approve / perform / audit across roles. Not every tiny ticket needs three people — apply where fraud or high impact warrants it.
- **Job rotation / mandatory vacations** (where used) — fraud-detection and resilience measures, not mere scheduling trivia.

## Account lifecycle (intro)

Security measures attach to: provisioning → role changes → privilege review → temporary access → disable → deprovision. Shared accounts destroy accountability. Temporary contractor access needs scope, expiry, and removal. Deep identity platforms wait for later topics; the habit starts here.

---

## Zero Trust (architecture, not a product)

**Core principle:** Do not grant continuing trust solely because a user, device, or connection is already “inside” a network.

### Verify explicitly
Access decisions weigh evidence: identity, authentication strength, device condition, location, resource sensitivity, behavior, session risk, and org policy.

### Least-privilege access
Access should be limited, contextual, time-bounded where appropriate, reviewed, and revocable.

### Assume breach
Design as if credentials may leak, devices may become unsafe, and internal traffic is not automatically trustworthy. Logging, segmentation, and recovery matter.

### Control plane vs data plane (A+ depth)
- **Control plane** — defines and evaluates policy (policy engine/administrator concepts, identity provider signals, device-health, threat intel, access policy).
- **Data plane** — the user’s actual permitted path to apps/systems/data after a decision.

### Policy decision vs enforcement
Deciding whether access should be allowed is not the same as **enforcing** that decision at the access point (agent, gateway, IdP step-up, network control).

### Continuous evaluation
A successful login is not unlimited trust for the whole session. Reconsider when device health, location, behavior, risk, privileges, or session limits change.

### Reject these myths
Zero Trust does **not** mean “trust nobody under any circumstances,” “employees are presumed malicious,” “one firewall/product,” “networks disappear,” “office = trusted,” or “MFA alone = Zero Trust.”

---

## Physical measures (select by risk)

Locks · badge readers · biometrics (not secret/infallible) · guards · cameras · lighting · fences · bollards · mantraps/vestibules · equipment/cable locks · server-room controls · asset tags · alarms · visitor logs · restricted areas · privacy screens · secure disposal containers.

Match control to goal: building entry, device theft, server-room protection, recording access, shoulder-surfing resistance, visitor control.

## Logical / endpoint foundations (layered set)

Authentication · MFA · authorization · password policy · account lockout · screen lock · encryption · host firewall · endpoint protection · patching · secure configuration · app allowlisting/control · DLP concepts · logging/monitoring · segmentation concepts · backups · security awareness · acceptable-use policy.

These belong in a layered set; dedicated later topics configure Windows, wireless, malware, hardening, mobile, disposal, SOHO, and browsers in depth — do not disable them as a “fix.”

---

## Technician scenarios

**New hire** — role access, standard vs admin account, device security, MFA enrollment, physical badge needs, approvals/docs.  
**Contractor** — limited scope, expiry, managed device, restricted resources, logging, removal at end.  
**Lost laptop** — revoke sessions/accounts as authorized, device-management actions, encryption status, incident escalate, document evidence.  
**Shared workstation** — individual accounts, lock screen, least privilege, privacy, logging, physical placement.  
**“Make me permanent admin”** — justification, separate admin account, time-bound elevation, approval, audit trail, alternatives.

## Operational reasoning

Distinguish: missing control · misconfigured control · control working as designed · policy-imposed control · inconvenience ≠ defect · escalate-to-security cases.  
Examples: cannot install software (least privilege) · setting grayed out (device policy) · MFA after risk change · temp access expired · noncompliant device blocked. **Do not auto-bypass.**

## Authorization boundaries

Admin capability ≠ authorization. Never disable MFA/encryption/firewall/EDR/logging/policy as a generic fix. No shared accounts for convenience. No permanent admin for convenience. No physical bypass. Protect recovery keys and evidence. Escalate compromise, policy conflict, or data exposure. Document approved changes. Verify the asset is still protected.

**What's next.** Windows OS security settings scenarios (\`ap-windows-security\` / AP1202-2.2) when authorized — configure, don’t invent bypasses.`,
    },
    lightbulbMoment:
      "Security is asset-and-risk first: pick a control that fits category and function, stack layers, verify explicitly under Zero Trust, and never confuse admin ability with authorization.",
    keyFacts: [
      "Category (how implemented) ≠ function (what job it does)",
      "Defense in depth layers identity, endpoint, network, app, data, and physical",
      "Least privilege + need to know + separation of duties reduce abuse and error",
      "Zero Trust: verify explicitly, least privilege, assume breach — not a single product",
      "Control plane decides/evaluates policy; data plane carries permitted access",
      "Continuous evaluation — login is not unlimited session trust",
      "Inconvenience from a working control is not a defect to bypass",
    ],
    guidedExample: {
      title: "Security-control selection exercise",
      steps: [
        "Device theft risk (laptop in lobby) → asset: endpoint+data; control: cable lock + disk encryption + screen lock; physical+technical; preventive; add detective inventory/asset tag; verify encryption on; escalate if keys unknown.",
        "Unauthorized server-room entry → physical locks/badge/vestibule + visitor log; cameras detective; verify access list; facilities/security approval.",
        "Compromised password → reset/disable + MFA + lockout policy; detective logs; assume breach for sessions; escalate if lateral movement suspected.",
        "Excessive privileges → least privilege / remove admin from daily account; compensating monitoring if temporary; verify group membership; manager approval.",
        "Suspicious internal connection → don’t auto-trust ‘inside’; segment/block + investigate logs; Zero Trust assume-breach; escalate security.",
        "Contractor access → time-bound account, limited resources, MFA, logging; deprovision on end date; verify disable.",
        "Sensitive screen visibility → privacy screen + desk placement + lock policy; physical+directive; verify user habit.",
        "Missing security logs → enable/forward logging (detective); compensating until fixed; escalate if retention policy blocked.",
        "Unpatched workstation → patch management + compensating network restriction if delayed; verify update state; change window approval if required.",
      ],
    },
    commonMistakes: [
      "Treating Zero Trust as one firewall or ‘MFA checkbox done’",
      "Granting permanent admin to avoid UAC friction",
      "Disabling security controls to make software install",
      "Assuming office network = trusted forever",
      "Confusing control category with control function on exam scenarios",
    ],
    examTraps: [
      "Best first control vs compensating control when preferred control is weak",
      "Category vs function for the same example (policy, lock, logging, backup)",
      "Zero Trust continuous evaluation after login",
      "Policy decision vs enforcement point",
      "Inconvenience from least privilege is not automatic misconfiguration",
    ],
    realWorldScenario:
      "A contractor finishes a three-week project but still has VPN and badge access. Nobody ‘broke in’ — the lifecycle control failed. You disable the account, confirm MFA/tokens revoked, collect the badge, and document the deprovision — assume-breach hygiene without drama.",
    whenThisFails: [
      "If the user needs a policy exception, escalate for approval — don’t silently bypass",
      "If compromise is suspected, prioritize contain/revoke and security escalation over ‘reinstall Office’",
      "If you lack authorization for a security change, stop and ticket the right owner",
    ],
    teacherReflectionPrompt:
      "For a lost encrypted laptop with MFA, list asset, top risk, three layered controls (different categories if possible), one Zero Trust continuous-evaluation check, and the escalation owner.",
    quiz: [
      {
        id: "ap-security-measures-q1",
        prompt: "A written acceptable-use policy that tells staff to lock screens is best described as:",
        choices: [
          { id: "a", text: "Primarily administrative/directive — it instructs required behavior; technical locks may enforce it" },
          { id: "b", text: "Only a physical bollard" },
          { id: "c", text: "Proof that Zero Trust is a single firewall product" },
          { id: "d", text: "A reason to disable MFA" },
        ],
        correctChoiceId: "a",
        explanation: "Category and function differ; policy directs, endpoints may enforce.",
        objectiveId: "AP1202-2.1",
        difficulty: "medium",
      },
      {
        id: "ap-security-measures-q2",
        prompt: "Zero Trust core idea for A+ support work:",
        choices: [
          { id: "a", text: "Do not grant continuing trust solely because a user/device/connection is already inside a network" },
          { id: "b", text: "Anyone in the office is automatically trusted forever" },
          { id: "c", text: "MFA alone equals a complete Zero Trust architecture" },
          { id: "d", text: "Networks are unnecessary once you buy one product" },
        ],
        correctChoiceId: "a",
        explanation: "Architecture/decision model — not ‘trust nobody’ absolutism or product marketing.",
        objectiveId: "AP1202-2.1",
        difficulty: "easy",
      },
      {
        id: "ap-security-measures-q3",
        prompt: "A user cannot install software on a managed PC. Least-privilege framing?",
        choices: [
          { id: "a", text: "Control may be working as designed — escalate for approved software/deploy path, don’t disable protections" },
          { id: "b", text: "Always turn off endpoint protection and UAC as step one" },
          { id: "c", text: "Create a shared Administrator password on a sticky note" },
          { id: "d", text: "Bypass the badge reader to the server room instead" },
        ],
        correctChoiceId: "a",
        explanation: "Inconvenience ≠ defect; authorization bounds the fix.",
        objectiveId: "AP1202-2.1",
        difficulty: "easy",
      },
      {
        id: "ap-security-measures-q4",
        prompt: "Control plane versus data plane in Zero Trust (A+ depth):",
        choices: [
          { id: "a", text: "Control plane evaluates/defines access policy; data plane carries the permitted access to resources" },
          { id: "b", text: "They are identical terms for Wi-Fi channel bonding" },
          { id: "c", text: "Data plane writes HR policy; control plane prints badges only" },
          { id: "d", text: "Both mean ‘disable logging’" },
        ],
        correctChoiceId: "a",
        explanation: "Conceptual split — not advanced network automation.",
        objectiveId: "AP1202-2.1",
        difficulty: "medium",
      },
      {
        id: "ap-security-measures-q5",
        prompt: "Best layered response for a lost laptop that had disk encryption and corporate MFA:",
        choices: [
          { id: "a", text: "Revoke sessions/account access as authorized, check encryption/MDM actions, escalate incident, document — don’t assume ‘encrypted = ignore’" },
          { id: "b", text: "Do nothing because encryption makes loss irrelevant" },
          { id: "c", text: "Publish the BitLocker recovery key in a public chat" },
          { id: "d", text: "Disable org MFA so the user can sign in on a café PC" },
        ],
        correctChoiceId: "a",
        explanation: "Defense in depth + assume breach + authorization.",
        objectiveId: "AP1202-2.1",
        difficulty: "medium",
      },
      {
        id: "ap-security-measures-q6",
        prompt: "Need-to-know differs from least privilege mainly by emphasizing:",
        choices: [
          { id: "a", text: "Access to a particular resource for a particular task — not merely having a general job title" },
          { id: "b", text: "That every employee gets Domain Admin" },
          { id: "c", text: "That cameras replace authentication" },
          { id: "d", text: "That Zero Trust forbids all networks" },
        ],
        correctChoiceId: "a",
        explanation: "Authorization to work ≠ entitlement to every file.",
        objectiveId: "AP1202-2.1",
        difficulty: "medium",
      },
    ],
    questionBank: [
      {
        id: "ap-security-measures-b1",
        prompt: "Cameras that record a hallway primarily provide which function?",
        choices: [
          { id: "a", text: "Detective (and may also deter)" },
          { id: "b", text: "Only encryption of disks" },
          { id: "c", text: "Automatic permanent Domain Admin" },
        ],
        correctChoiceId: "a",
        explanation: "Physical/technical detective control; deterrence is secondary.",
        objectiveId: "AP1202-2.1",
        difficulty: "easy",
      },
      {
        id: "ap-security-measures-b2",
        prompt: "Separation of duties example:",
        choices: [
          { id: "a", text: "One person requests access; another approves; another audits — for sensitive changes" },
          { id: "b", text: "Three people must approve every wallpaper change" },
          { id: "c", text: "One shared root password for the whole help desk" },
        ],
        correctChoiceId: "a",
        explanation: "Split high-impact steps; not every tiny task.",
        objectiveId: "AP1202-2.1",
        difficulty: "easy",
      },
      {
        id: "ap-security-measures-b3",
        prompt: "Continuous evaluation means:",
        choices: [
          { id: "a", text: "Access may be reconsidered when risk signals change after login" },
          { id: "b", text: "One password grants unlimited trust forever" },
          { id: "c", text: "Physical locks are obsolete" },
        ],
        correctChoiceId: "a",
        explanation: "Zero Trust session risk is not a one-time checkbox.",
        objectiveId: "AP1202-2.1",
        difficulty: "easy",
      },
      {
        id: "ap-security-measures-b4",
        prompt: "Compensating control example when a legacy PC cannot receive a critical patch yet:",
        choices: [
          { id: "a", text: "Extra monitoring/segmentation/restricted access until patching is possible" },
          { id: "b", text: "Disable logging so nobody notices" },
          { id: "c", text: "Remove encryption permanently" },
        ],
        correctChoiceId: "a",
        explanation: "Compensate without pretending the gap is gone.",
        objectiveId: "AP1202-2.1",
        difficulty: "medium",
      },
      {
        id: "ap-security-measures-b5",
        prompt: "Privacy screen on a finance desk mainly addresses:",
        choices: [
          { id: "a", text: "Shoulder surfing / visual exposure of sensitive data" },
          { id: "b", text: "Wi-Fi channel width" },
          { id: "c", text: "CMOS battery voltage" },
        ],
        correctChoiceId: "a",
        explanation: "Physical control selected by environment risk.",
        objectiveId: "AP1202-2.1",
        difficulty: "easy",
      },
      {
        id: "ap-security-measures-b6",
        prompt: "Policy decision vs enforcement:",
        choices: [
          { id: "a", text: "Decision evaluates whether access should be allowed; enforcement applies that result at the access point" },
          { id: "b", text: "Enforcement writes the HR handbook; decision plugs in the monitor" },
          { id: "c", text: "They only apply to printer toner" },
        ],
        correctChoiceId: "a",
        explanation: "Zero Trust control concepts at A+ depth.",
        objectiveId: "AP1202-2.1",
        difficulty: "medium",
      },
      {
        id: "ap-security-measures-b7",
        prompt: "Job rotation / mandatory vacations (where used) are best framed as:",
        choices: [
          { id: "a", text: "Fraud-detection and resilience measures — not mere vacation trivia" },
          { id: "b", text: "Proof that least privilege is unnecessary" },
          { id: "c", text: "A reason to share admin passwords" },
        ],
        correctChoiceId: "a",
        explanation: "Administrative/operational control purpose.",
        objectiveId: "AP1202-2.1",
        difficulty: "easy",
      },
      {
        id: "ap-security-measures-b8",
        prompt: "Assume-breach thinking implies technicians should value:",
        choices: [
          { id: "a", text: "Logging, segmentation, rapid revoke/recovery — internal traffic isn’t automatically safe" },
          { id: "b", text: "Trusting all LAN hosts after one badge swipe" },
          { id: "c", text: "Turning off EDR to improve FPS in games" },
        ],
        correctChoiceId: "a",
        explanation: "Zero Trust assume-breach pillar.",
        objectiveId: "AP1202-2.1",
        difficulty: "easy",
      },
      {
        id: "ap-security-measures-b9",
        prompt: "Best response when MFA prompts after unusual location/device risk signals:",
        choices: [
          { id: "a", text: "Treat as continuous evaluation working — verify identity; don’t teach MFA bypass" },
          { id: "b", text: "Disable MFA tenant-wide" },
          { id: "c", text: "Share the user’s authenticator seed in email" },
        ],
        correctChoiceId: "a",
        explanation: "Working control vs defect.",
        objectiveId: "AP1202-2.1",
        difficulty: "medium",
      },
      {
        id: "ap-security-measures-b10",
        prompt: "Defense in depth fails when:",
        choices: [
          { id: "a", text: "Layers share the same weakness so one compromise defeats ‘duplicates’" },
          { id: "b", text: "You combine physical and technical controls intentionally" },
          { id: "c", text: "You verify encryption and MFA together" },
        ],
        correctChoiceId: "a",
        explanation: "Independent layers matter.",
        objectiveId: "AP1202-2.1",
        difficulty: "medium",
      },
    ],
    flashcards: [
      {
        id: "ap-security-measures-f1",
        front: "Category vs function?",
        back: "Category = how implemented · Function = what job it does",
      },
      {
        id: "ap-security-measures-f2",
        front: "Zero Trust core?",
        back: "No continuing trust just because you’re ‘inside’ the network",
      },
      {
        id: "ap-security-measures-f3",
        front: "ZT pillars (A+)?",
        back: "Verify explicitly · least privilege · assume breach",
      },
      {
        id: "ap-security-measures-f4",
        front: "Control vs data plane?",
        back: "Control evaluates policy · data plane carries permitted access",
      },
      {
        id: "ap-security-measures-f5",
        front: "Least privilege vs need to know?",
        back: "LP limits access scope · NTK limits access to specific resources/tasks",
      },
      {
        id: "ap-security-measures-f6",
        front: "Working control annoyance?",
        back: "Not a defect — escalate for approved exception, don’t bypass",
      },
      {
        id: "ap-security-measures-f7",
        front: "Logging function?",
        back: "Typically detective (supports investigation)",
      },
    ],
    assignments: [
      {
        id: "ap-lab-security-baseline-review",
        title: "Workstation security baseline review",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `Fictional evidence only — do not weaken real security controls.

For the fictional workstation "WS-FIN-14", mark each control Present / Missing / Misconfigured / Unknown / Policy-controlled, then recommend: immediate safe correction · admin approval · security escalation · verification · ticket notes.

Evidence pack:
1) Account type: FINANCE\\jdoe is local Administrators (daily use)
2) Screen lock: never configured; idle timeout = 0
3) BitLocker: On (TPM+PIN) — recovery key escrow: Unknown
4) Windows Update: last successful = 90 days ago
5) Endpoint protection: installed; real-time protection Off
6) Host firewall: Domain On; Public Off
7) MFA: enrolled for cloud mail; VPN MFA: Unknown
8) Device management: Entra/Intune Compliant = No (reason: missing disk encryption report mismatch — investigate, don’t disable)
9) Backup: OneDrive Known Folder Move On; system image: None
10) Physical: open lobby desk; no cable lock; privacy screen absent; visitor area nearby
11) Logging: local Security log retained 1 day; no forwarder

Also complete the guided selection table (asset, threat, control, category, function, extra layer, verify, escalate) for three of: device theft · compromised password · contractor expiry · missing logs · unpatched PC.

Boundaries: do not recommend disabling MFA, encryption, firewall, EDR, or logging as a fix.`,
        estimatedMinutes: 28,
        completionCriteria: [
          "Baseline table completed for all eleven evidence items with status + recommendation",
          "Three control-selection scenarios completed with category and function",
          "No bypass/disable-security recommendations",
        ],
        relatedTopicIds: ["ap-security-measures"],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 55,
    difficulty: "medium",
  },
];
