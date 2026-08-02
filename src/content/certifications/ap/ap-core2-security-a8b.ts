import type { ExternalResource, Topic } from "../../types";

/**
 * A+ Core 2 Security — A8b (Michael 2026-08-01).
 * ap-windows-security (AP1202-2.2) only.
 * Stop after verify — no 2.3+ Security, SW-TS, Ops, or CCNA C1.
 */

const WINDOWS_11_PC_RESOURCE: ExternalResource = {
  id: "windows-11-pc",
  name: "Windows 11 PC",
  url: "https://support.microsoft.com/windows",
  cost: "free",
  platform: "windows",
  installNotes:
    "Use a Windows 11 PC for read-only Windows Security / firewall / update inventories and fictional posture worksheets. Do not disable Defender, firewall, UAC, BitLocker, SmartScreen, updates, or organizational policy. Do not expose BitLocker recovery keys in tickets or notes. Do not bypass managed settings.",
};

export const apCore2SecurityBatch2Topics: Topic[] = [
  {
    id: "ap-windows-security",
    name: "Windows Security Settings & Controls",
    prerequisites: [
      "ap-security-measures",
      "ap-windows-settings",
      "ap-windows-tools",
      "ap-windows-editions",
    ],
    objectives: ["AP1202-2.2"],
    knowledgeNodeId: "hardening-basics",
    lesson: {
      title: "Configure Windows Security from Symptom, Evidence, and Authorization",
      content: `Windows security settings are **enforcement points** for the model in \`ap-security-measures\`. On A+, start from a security need or support symptom, identify the control, inspect state, act safely (or escalate), verify, and document — not from a menu-path glossary.

**Prior:** Zero Trust / least privilege / defense in depth (\`ap-security-measures\`) · Windows settings/tools/editions · Windows networking profiles · CLI for evidence when authorized. **Later:** wireless auth (\`ap-wireless-security\`), malware tooling, hardening baselines — do not substitute those here.

---

## Architecture (how Windows pieces fit)

Layer identity → authentication → authorization → device protection → data protection → application control → network protection → updates → recovery → monitoring → org policy. Windows Security app surfaces status; GPO/MDM/identity policy may own the real decision (control plane). Local UI is often the **enforcement view**, not free rein to weaken controls.

Reuse: defense in depth · least privilege · need to know · Zero Trust verify/assume-breach · continuous evaluation (risk can re-prompt MFA or block noncompliant devices). Do not re-teach 2.1 in full.

---

## Windows Security application

Main areas (what they report / represent):

- **Virus & threat protection** — Defender real-time, scans, quarantine, history, exclusions (authorized)
- **Account protection** — Windows Hello / sign-in health
- **Firewall & network protection** — profile-aware host firewall
- **App & browser control** — SmartScreen, reputation, PUA, related controls
- **Device security** — Secure Boot / TPM / core isolation / memory integrity (as available)
- **Device performance & health** — storage/health signals that affect update/security posture
- **Family options** — only when objective-relevant (consumer parental controls recognition)
- **Protection history** — evidence of detections/actions
- **Security providers** — which AV/firewall stack is active

Not every toggle is changeable by a standard tech — managed devices may gray out settings **by design**.

---

## Microsoft Defender Antivirus

Real-time protection · signature/intelligence updates · quick/full/custom scans · Microsoft Defender Offline · quarantine · exclusions · protection history · cloud-delivered protection (where aligned) · tamper protection (where aligned).

**Exclusion boundaries.** Exclusions reduce protection. Never add them just because an app is inconvenient. Confirm publisher, origin, business need, and authorization. Prefer vendor-supported fixes. Document approved exclusions; remove temporary ones; escalate suspicious detections instead of suppressing them. **Do not disable antivirus as a lab or default fix.**

---

## Windows Firewall

Domain / Private / Public profiles · inbound vs outbound · app/service allowances · rules (intro) · profile awareness. Disabling the whole firewall is a poor troubleshooting default. Network profile selection changes expected behavior. Org policy may push central rules.

**Ticket ladder:** (1) correct profile (2) required service + direction (3) existing rule (4) org policy (5) narrow approved exception vs disable (6) verify.

Examples: app works Private not Public · remote service needs approved inbound · user wants firewall off · managed local changes blocked · rule on wrong profile.

---

## User Account Control (UAC)

Standard vs administrator context · elevation prompts · consent vs credential prompts (intro) · secure desktop concept · UAC ≠ complete malware boundary · repeated prompts may mean bad design **or** suspicious behavior · disabling UAC is not a generic fix. Connect to least privilege.

Scenarios: installer elevation · user unauthorized · app needs admin every launch · managed block · unexpected prompt → verify identity/source/need/authorization before proceeding.

---

## Accounts and sign-in

Local · Microsoft account · org-managed · standard vs administrator · guest risks · lockout · password policy · PIN / Windows Hello · biometrics · security keys (where aligned) · MFA · sign-in options · automatic lock · Dynamic Lock (where required) · Credential Manager · shared/temporary account risks.

**Windows Hello:** PIN may be device-bound · biometrics are factors, not secret passwords · depends on hardware/edition/policy · reset/recovery needs identity verification · convenience ≠ skip recovery planning. No account bypass, cracking, or stripping org controls.

---

## BitLocker / device encryption

Full-volume encryption = data-at-rest protection · TPM relationship (intro) · recovery keys · device encryption vs fuller BitLocker management (where applicable) · edition/hardware dependencies · startup/recovery prompts · suspend vs decrypt (recognition) · encryption ≠ access control or backup.

**Recovery-key safety.** Never put keys in tickets/public notes. Use approved escrow only. Verify ownership/authorization. Don’t clear/bypass casually. Firmware/hardware changes may trigger recovery. Back up before risky storage/firmware work. Escalate missing keys. **No bypass instructions.**

---

## Secure Boot, TPM, device security

UEFI Secure Boot · TPM · hardware-backed security · core isolation / memory integrity (where required) · security processor info · firmware/hardware requirements. Unsupported changes may affect boot or BitLocker recovery. Evidence-first; escalate when managed or keys missing.

Examples: Win11 compatibility fail · recovery after firmware · Secure Boot off · feature unavailable on hardware · MDM blocks local change.

---

## Application and browser protection

SmartScreen · reputation-based protection · PUA blocking · exploit protection (recognition) · app isolation (where required) · browser warnings · download reputation · application control concepts · Store/approved sources.

A warning is **evidence to investigate**, not an obstacle to click through. Signed ≠ automatically safe. Approved publisher/source still matter. No evasion instructions.

---

## Updates as a security control

Security / quality / feature / driver updates · restarts · history · pause · managed policy · failed-update intro triage · rollback/recovery awareness. Indefinite disable increases risk. Refer \`ap-windows-settings\` / tools.

Distinguish: one failed update · disk space · network/proxy · policy schedule · pending restart · compatibility hold · service-wide issue · bad driver update. Never “permanently disable updates.”

---

## File and folder security (2.2 boundary)

NTFS permissions · share permissions · ownership · inheritance · effective access (intro) · encryption vs permissions · hidden ≠ secure · least privilege · Access Denied may be intended.

Network reachability ≠ file access. Share **and** NTFS can both bind network access. Admin rights ≠ business authorization. Taking ownership changes security state — not a casual fix. Deeper ACL drills wait if mapped later; don’t invent wireless/malware topics here.

---

## Recovery and protection

System Restore · WinRE · restore points · Reset · backup · file recovery · ransomware protection / Controlled folder access (where aligned) · cloud recovery only in objective scope.

Restore ≠ backup · sync ≠ backup · recovery can break apps/data · destructive recovery needs authorization + verified backup.

---

## Organizational management boundaries

GPO · MDM · domain/identity policy · endpoint platforms · enterprise licensing · compliance / device-health requirements. Grayed-out security toggle often means **control working as designed**. Do not teach policy bypass.

---

## Guided scenarios (habit)

1. **SmartScreen blocks unsigned download** — verify source/need/alternatives; no auto-bypass; escalate/document.
2. **Disable firewall please** — profile → service/direction → rule → policy → narrow exception → verify; keep firewall on.
3. **BitLocker recovery after firmware** — ownership → approved key process → no key exposure → confirm change → re-verify security → secure docs.
4. **Defender quarantines file** — preserve evidence → verify source → don’t auto-restore → escalate if suspicious → confirm protection still on.
5. **Cannot disable control** — identify policy owner → business justification → escalate; local bypass inappropriate.
6. **Unexpected UAC** — verify app identity/source/expected behavior/authorization/suspicion.

**What's next.** Wireless security protocols and authentication methods (\`ap-wireless-security\` / AP1202-2.3) when authorized.`,
    },
    lightbulbMoment:
      "Windows security tickets are evidence-first: identify the control, inspect profile/policy/state, apply the narrowest authorized fix, and never disable Defender, firewall, UAC, encryption, or updates as a default.",
    keyFacts: [
      "Windows Security app reports status; MDM/GPO may own the decision",
      "Defender exclusions reduce protection — authorize and document, don’t suppress detections casually",
      "Firewall: fix profile/rule first; don’t disable the whole firewall",
      "UAC supports least privilege — disabling it is not a generic fix",
      "BitLocker recovery keys never belong in public tickets",
      "SmartScreen warnings are evidence, not speed bumps",
      "Grayed-out security settings often mean policy is working",
    ],
    guidedExample: {
      title: "Six Windows security tickets",
      steps: [
        "Unsigned EXE + SmartScreen → verify publisher/source/portal alternative; escalate; no blind Run anyway.",
        "LOB app fails on Public Wi-Fi only → check profile and rule scope before any firewall off request.",
        "Recovery key prompt after BIOS update → prove device ownership; approved escrow; never paste key into chat.",
        "Quarantined download → leave quarantined; investigate; restore only if authorized clean; confirm real-time still On.",
        "User cannot turn off real-time protection → Intune/GPO ownership; request exception through security, don’t fight the toggle.",
        "Unexpected elevation prompt for ‘invoice.pdf.exe’ → stop; treat as suspicious; don’t enter admin creds.",
      ],
    },
    commonMistakes: [
      "Disabling firewall or antivirus to make software work",
      "Adding broad Defender exclusions without authorization",
      "Granting admin rights for convenience",
      "Exposing BitLocker recovery keys in tickets",
      "Bypassing SmartScreen without validating source",
      "Treating policy-enforced settings as defects to hack around",
      "Assuming encryption replaces backup or access control",
    ],
    examTraps: [
      "Safest first action vs broad disable",
      "Firewall wrong profile vs missing rule",
      "Quarantine: investigate vs restore immediately",
      "BitLocker recovery authorization and key handling",
      "UAC prompt: verify source before elevation",
      "Access Denied as intended protection vs misconfiguration",
    ],
    realWorldScenario:
      "A finance user pastes a BitLocker key into a shared Teams channel ‘so IT can help faster.’ You rotate/invalidate exposure per policy, recover through approved escrow, confirm the device returns to a protected state, and coach that recovery secrets are never ticket text.",
    whenThisFails: [
      "If a setting is policy-locked, escalate to the policy owner with business justification — don’t bypass",
      "If malware is suspected after a quarantine, follow incident path — don’t restore and hope",
      "If recovery keys are missing, stop destructive disk work and escalate",
    ],
    teacherReflectionPrompt:
      "Without notes: for a Public-profile firewall failure, list evidence checks in order, the narrowest safe fix, and what you refuse to do.",
    quiz: [
      {
        id: "ap-windows-security-q1",
        prompt: "A business app fails only on café Wi-Fi (Public profile) but works on the office LAN (Domain/Private). Best first focus?",
        choices: [
          { id: "a", text: "Confirm network profile and whether the firewall rule/app allowance applies to Public — don’t disable the firewall" },
          { id: "b", text: "Turn off Windows Firewall entirely as step one" },
          { id: "c", text: "Disable BitLocker to improve throughput" },
          { id: "d", text: "Remove Secure Boot permanently" },
        ],
        correctChoiceId: "a",
        explanation: "Profile-aware firewall reasoning before broad disable.",
        objectiveId: "AP1202-2.2",
        difficulty: "medium",
      },
      {
        id: "ap-windows-security-q2",
        prompt: "SmartScreen warns on an unsigned download the user ‘really needs.’ Safest first path?",
        choices: [
          { id: "a", text: "Verify source, publisher, business need, and approved alternatives — do not auto-bypass" },
          { id: "b", text: "Always click Run anyway without checks" },
          { id: "c", text: "Disable Defender and SmartScreen permanently" },
          { id: "d", text: "Add *.* as a Defender exclusion" },
        ],
        correctChoiceId: "a",
        explanation: "Warnings are evidence; investigate before exception.",
        objectiveId: "AP1202-2.2",
        difficulty: "easy",
      },
      {
        id: "ap-windows-security-q3",
        prompt: "Device asks for a BitLocker recovery key after a firmware change. Correct handling?",
        choices: [
          { id: "a", text: "Verify ownership, use approved key recovery, never expose the key in chat/tickets, then re-verify protection" },
          { id: "b", text: "Post the key in a public channel for speed" },
          { id: "c", text: "Format the drive immediately without backup or authorization" },
          { id: "d", text: "Disable TPM forever as the fix" },
        ],
        correctChoiceId: "a",
        explanation: "Recovery-key safety and authorization.",
        objectiveId: "AP1202-2.2",
        difficulty: "easy",
      },
      {
        id: "ap-windows-security-q4",
        prompt: "Defender quarantines a just-downloaded file. Best next framing?",
        choices: [
          { id: "a", text: "Preserve evidence, verify source, avoid automatic restore, escalate if suspicious, confirm protection still active" },
          { id: "b", text: "Restore immediately and disable real-time protection" },
          { id: "c", text: "Turn off tamper protection and ignore history" },
          { id: "d", text: "Share the sample widely without policy" },
        ],
        correctChoiceId: "a",
        explanation: "Quarantine decisions protect the asset.",
        objectiveId: "AP1202-2.2",
        difficulty: "medium",
      },
      {
        id: "ap-windows-security-q5",
        prompt: "A standard user sees an unexpected UAC prompt for invoice.pdf.exe. Best action?",
        choices: [
          { id: "a", text: "Do not elevate — verify application identity/source; treat as potentially suspicious" },
          { id: "b", text: "Enter Domain Admin credentials immediately" },
          { id: "c", text: "Disable UAC so prompts stop" },
          { id: "d", text: "Add the file to exclusions without review" },
        ],
        correctChoiceId: "a",
        explanation: "UAC + least privilege + source verification.",
        objectiveId: "AP1202-2.2",
        difficulty: "easy",
      },
      {
        id: "ap-windows-security-q6",
        prompt: "Real-time protection toggle is grayed out on a corporate laptop. Best interpretation?",
        choices: [
          { id: "a", text: "Likely policy/MDM enforcement working as designed — escalate for exception, don’t bypass" },
          { id: "b", text: "Proof Windows is broken; disable Secure Boot" },
          { id: "c", text: "Must remove BitLocker next" },
          { id: "d", text: "Create a shared local Administrator account" },
        ],
        correctChoiceId: "a",
        explanation: "Managed boundary ≠ malfunction.",
        objectiveId: "AP1202-2.2",
        difficulty: "easy",
      },
    ],
    questionBank: [
      {
        id: "ap-windows-security-b1",
        prompt: "Defender exclusion request for convenience only:",
        choices: [
          { id: "a", text: "Refuse casual exclusions — require need, publisher/origin, authorization, documentation" },
          { id: "b", text: "Exclude the entire C:\\Users tree by default" },
          { id: "c", text: "Disable antivirus instead" },
        ],
        correctChoiceId: "a",
        explanation: "Exclusion boundaries.",
        objectiveId: "AP1202-2.2",
        difficulty: "easy",
      },
      {
        id: "ap-windows-security-b2",
        prompt: "Windows Hello PIN is best described as:",
        choices: [
          { id: "a", text: "Often device-bound convenience authentication — still needs recovery/identity planning" },
          { id: "b", text: "A worldwide password identical on every PC" },
          { id: "c", text: "Proof biometrics are secret encryption keys" },
        ],
        correctChoiceId: "a",
        explanation: "Hello distinctions.",
        objectiveId: "AP1202-2.2",
        difficulty: "medium",
      },
      {
        id: "ap-windows-security-b3",
        prompt: "NTFS Access Denied for a network share user may mean:",
        choices: [
          { id: "a", text: "Intended least-privilege protection — check share and NTFS effective access before taking ownership" },
          { id: "b", text: "Hidden attribute failed" },
          { id: "c", text: "Firewall must be disabled" },
        ],
        correctChoiceId: "a",
        explanation: "Permissions vs reachability; ownership is not casual.",
        objectiveId: "AP1202-2.2",
        difficulty: "medium",
      },
      {
        id: "ap-windows-security-b4",
        prompt: "Encryption versus backup:",
        choices: [
          { id: "a", text: "BitLocker protects data at rest; it does not replace a recovery/backup strategy" },
          { id: "b", text: "Encryption is identical to OneDrive sync backup always" },
          { id: "c", text: "Secure Boot backs up user files nightly" },
        ],
        correctChoiceId: "a",
        explanation: "Data protection vs recovery.",
        objectiveId: "AP1202-2.2",
        difficulty: "easy",
      },
      {
        id: "ap-windows-security-b5",
        prompt: "Pending restart after security updates — best framing?",
        choices: [
          { id: "a", text: "Security control incomplete until restart policy is honored — schedule/authorize, don’t permanently pause updates" },
          { id: "b", text: "Disable Windows Update forever" },
          { id: "c", text: "Turn off the firewall instead" },
        ],
        correctChoiceId: "a",
        explanation: "Updates as security control.",
        objectiveId: "AP1202-2.2",
        difficulty: "easy",
      },
      {
        id: "ap-windows-security-b6",
        prompt: "Secure Boot disabled on a managed Windows 11 device — concern?",
        choices: [
          { id: "a", text: "Weakens boot-chain trust and may affect compliance/encryption recovery scenarios — investigate/escalate" },
          { id: "b", text: "Required for all printers" },
          { id: "c", text: "Automatically creates backups" },
        ],
        correctChoiceId: "a",
        explanation: "Device security recognition.",
        objectiveId: "AP1202-2.2",
        difficulty: "medium",
      },
      {
        id: "ap-windows-security-b7",
        prompt: "Guest account enabled for ‘shared kiosk convenience’ risk:",
        choices: [
          { id: "a", text: "Weak accountability and access control — prefer individual/standard accounts with lock screen" },
          { id: "b", text: "Guest equals BitLocker" },
          { id: "c", text: "Guest replaces MFA" },
        ],
        correctChoiceId: "a",
        explanation: "Account security.",
        objectiveId: "AP1202-2.2",
        difficulty: "easy",
      },
      {
        id: "ap-windows-security-b8",
        prompt: "Controlled folder access / ransomware protection concepts primarily:",
        choices: [
          { id: "a", text: "Limit untrusted apps from changing protected folders — tune with authorization if legit apps break" },
          { id: "b", text: "Delete all restore points automatically" },
          { id: "c", text: "Disable Defender signatures" },
        ],
        correctChoiceId: "a",
        explanation: "Recovery/protection controls.",
        objectiveId: "AP1202-2.2",
        difficulty: "medium",
      },
      {
        id: "ap-windows-security-b9",
        prompt: "Which security principle should guide Windows account and permission configuration?",
        choices: [
          { id: "a", text: "Grant only the access required for the user's role" },
          { id: "b", text: "Give every user local administrator rights" },
          { id: "c", text: "Disable auditing to reduce system load" },
        ],
        correctChoiceId: "a",
        explanation: "Reference 2.1; don’t duplicate the whole domain.",
        objectiveId: "AP1202-2.2",
        difficulty: "easy",
      },
      {
        id: "ap-windows-security-b10",
        prompt: "Taking ownership of a folder to ‘fix Access Denied’ without authorization:",
        choices: [
          { id: "a", text: "Changes security state — escalate/approve; not a casual default" },
          { id: "b", text: "Always required and risk-free" },
          { id: "c", text: "Identical to hiding the folder attribute" },
        ],
        correctChoiceId: "a",
        explanation: "Ownership boundary.",
        objectiveId: "AP1202-2.2",
        difficulty: "medium",
      },
    ],
    flashcards: [
      {
        id: "ap-windows-security-f1",
        front: "Firewall fail first checks?",
        back: "Profile → service/direction → existing rule → policy → narrow exception",
      },
      {
        id: "ap-windows-security-f2",
        front: "Defender exclusion?",
        back: "Reduces protection — authorize, document, prefer vendor fix",
      },
      {
        id: "ap-windows-security-f3",
        front: "BitLocker key in ticket?",
        back: "Never — use approved escrow only",
      },
      {
        id: "ap-windows-security-f4",
        front: "Grayed security toggle?",
        back: "Often MDM/GPO working — escalate, don’t bypass",
      },
      {
        id: "ap-windows-security-f5",
        front: "SmartScreen warning?",
        back: "Evidence to investigate — not auto-bypass",
      },
      {
        id: "ap-windows-security-f6",
        front: "UAC unexpected prompt?",
        back: "Verify app/source — don’t elevate blindly",
      },
      {
        id: "ap-windows-security-f7",
        front: "Encryption ≠ ?",
        back: "Not a substitute for backup or access control",
      },
    ],
    assignments: [
      {
        id: "ap-lab-windows-security-posture",
        title: "Windows security posture review",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `Fictional evidence only. Do not weaken real controls.

For workstation "WS-OPS-07", record each control as Present / Missing / Misconfigured / Policy-managed / Unknown, then Risk · Safe next action · Verification · Escalation owner.

Evidence pack:
1) Windows Security summary: "Actions recommended" (1)
2) Virus & threat: Real-time On; Tamper protection On; last quick scan 12 days ago; 1 quarantine item "setup-invoice.exe"
3) Firewall: Domain On, Private On, Public Off
4) Updates: 2 security updates pending; restart required; pause used 5 of 7 days historically
5) Account: CORP\\lee daily account is local Administrators
6) UAC: Notify always (OK) but user requests "turn off UAC"
7) BitLocker: On; recovery key escrow = Unknown
8) Device security: Secure Boot On; TPM 2.0 present; Memory integrity Off (compatibility note)
9) App/browser: SmartScreen On; user clicked through one warning yesterday (unsigned tool)
10) Management: Intune Compliant = No (firewall Public off + admin rights)
11) Recovery: System Restore On; no verified backup of user profile this month; Controlled folder access Off

Also write short triage notes for scenarios 1–3 from the lesson (SmartScreen, firewall disable request, BitLocker recovery) without exposing any recovery key text.

Boundaries: do not recommend disabling Defender, firewall, UAC, BitLocker, SmartScreen, or updates.`,
        estimatedMinutes: 30,
        completionCriteria: [
          "Posture table completed for all eleven evidence items",
          "Three scenario triage notes with safe next action + escalation",
          "No control-weakening recommendations",
        ],
        relatedTopicIds: ["ap-windows-security", "ap-security-measures"],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 55,
    difficulty: "medium",
  },
];
