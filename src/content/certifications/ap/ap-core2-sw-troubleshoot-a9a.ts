import type { ExternalResource, Topic } from "../../types";

/**
 * A+ Core 2 Software Troubleshooting — A9a (Michael 2026-08-01).
 * ap-ts-windows-os (AP1202-3.1) only — Windows OS troubleshooting.
 * Stop after verify — no 3.2+ SW-TS, Ops, Core 2 integration, or CCNA C1.
 * Fictional Windows Troubleshooting Desk only — no destructive recovery, bypasses, or real recovery keys.
 */

const WINDOWS_11_PC_RESOURCE: ExternalResource = {
  id: "windows-11-pc",
  name: "Windows 11 PC",
  url: "https://support.microsoft.com/windows",
  cost: "free",
  platform: "windows",
  installNotes:
    "Use a Windows 11 PC for fictional Windows Troubleshooting Desk worksheets only. Do not run destructive disk/boot repairs on production data without backup and authorization. Do not bypass BitLocker, PIN, password, MFA, or managed policy. Do not disable security controls to ‘fix’ tickets. Do not use real recovery keys in lab notes.",
};

/** Shared CompTIA-aligned troubleshooting process (A9 Windows OS). */
const TS_PROCESS = `**Troubleshooting process (every ticket).**
1. **Identify** the problem — symptoms, scope, recent changes, safety/data risk.
2. **Establish a theory** of probable cause — name the likely layer; pick a testable one.
3. **Test the theory** safely — one change at a time; preserve evidence when needed.
4. **Plan** the fix (or escalate) — data protection, downtime, approval.
5. **Implement** the solution or escalate within authorization.
6. **Verify** full functionality — boot, sign-in, apps, devices, network, security, data.
7. **Document** findings, actions, and outcomes (no passwords, recovery keys, or MFA codes).`;

export const apCore2SwTroubleshootBatch1Topics: Topic[] = [
  {
    id: "ap-ts-windows-os",
    name: "Troubleshoot Windows OS Problems",
    prerequisites: [
      "ap-security-domain-review",
      "ap-windows-tools",
      "ap-windows-cli",
      "ap-windows-settings",
      "ap-os-install",
      "ap-windows-security",
      "ap-malware",
      "ap-ts-power-mb-ram-cpu",
      "ap-ts-storage-raid",
    ],
    objectives: ["AP1202-3.1"],
    knowledgeNodeId: "windows-literacy",
    lesson: {
      title: "Diagnose Windows Failures by Layer Before You Reset",
      content: `Windows OS troubleshooting is a structured diagnostic process:

\`identify symptoms → establish scope and recent changes → protect user data → gather evidence → identify the failing layer → apply the least disruptive supported fix → verify full functionality → document and escalate\`

**Symptom and context → evidence → likely layer → safe next action → verification** — not a memorized symptom→fix chart.

${TS_PROCESS}

**Prior:** \`ap-windows-tools\` · \`ap-windows-cli\` · \`ap-windows-settings\` · \`ap-os-install\` · \`ap-windows-security\` · \`ap-malware\` · Core 1 hardware/storage TS. **Later:** mobile OS TS (\`ap-ts-mobile-os\` / 3.2) — do not substitute that here. App-only faults may route toward later 3.x topics once authorized.

**Layers to distinguish:** OS · hardware · driver · application · user profile · storage · update · malware/security incident · network/cloud service · policy-managed behavior.

**Protect data first.** Before reset/reinstall/repartition/destructive repair: backup · encryption/recovery keys · sync state · unsaved work · restore points · recovery media · org policy · legal/IR restrictions · storage-health risk. Least disruptive first unless evidence/policy says otherwise.

---

## Symptom categories

**Boot/startup:** no OS found · boot device unavailable · boot loop · Automatic Repair loop · black/blank screen · blank desktop · slow startup · startup delays · BSOD/stop · recovery screen · Safe Mode required · no login screen · unexpected restart · hang during startup · update/driver prevents boot.

Isolate stage at A+ depth: **firmware/pre-boot → boot loader → kernel/drivers → sign-in/profile → desktop/shell**. Do not run random boot-record repair when firmware does not detect the drive (refer Hardware TS).

**Performance:** slow · high CPU/memory/disk · resource exhaustion · low storage · excessive startups · background activity · thermal throttle possibility · update activity · malware *possibility* · failing storage · insufficient hardware · profile issues. Slow ≠ automatically malware or low RAM.

**Stability:** app crashes · freezes · random restarts · BSOD · service fails · Explorer crashes · repeated errors · driver conflicts · update rollback · intermittent after recent change. Timing/recurrence narrow cause.

**Sign-in/profile:** cannot sign in · forgotten password/PIN · temporary profile · corrupt profile · roaming/cloud profile · locked account · MFA/org sign-in failure · missing desktop/settings · user-specific app fail · credential loops · wrong account. **No password/PIN/account/encryption bypass.** Verify identity; escalate managed-account issues.

**Updates:** fail · retry · stuck · pending restart · low storage · compatibility hold · driver update failure · feature rollback · managed policy · proxy/network · corrupt update components · post-update instability. Rollback/recovery OK when justified — **not** permanent update disable.

**Files/storage:** missing/corrupt files · access denied · read-only · drive full · FS errors · slow disk · bad sectors/failing indicators · volume unavailable · BitLocker recovery · sync conflict · OneDrive issues · data in unexpected profile. Distinguish permissions · encryption · storage health · FS damage · sync · deletion.

**Drivers/devices:** not recognized · Device Manager warning · intermittent · post-update break · wrong/disabled driver · external not mounting · audio/display/camera/NIC fails. Refer Hardware + Windows tools — don’t reteach all device TS.

---

## Evidence sources & hierarchy

Task Manager · Resource/Performance/Reliability Monitor · Event Viewer · Device Manager · Disk Management · Services · msconfig · System Information · Windows Security · Update history · Storage settings · Startup apps · WinRE · CMD/PowerShell (aligned) · stop codes · exact errors · recent-change history · known-good comparison.

**Hierarchy:** exact error > paraphrase · reproducible > one-time · multiple indicators strengthen theory · one Event Viewer line ≠ automatic root cause · high resource use may be symptom or cause · clean malware scan ≠ hardware health · Device Manager warning ≠ always replace hardware.

---

## Tools inside decisions (not a command wall)

**Repair:** \`sfc\` · \`dism\` · \`chkdsk\` · Startup Repair · System Restore · WinRE · Safe Mode · Reset options · uninstall updates · Startup Settings · recovery CMD.

**Boot (advanced/high-risk):** BCD concepts · \`bootrec\` · \`bcdedit\` · Startup Repair · boot order/storage detection · UEFI vs legacy mismatch · recovery partition — correct targeting + recovery plan required.

**Process/service:** \`tasklist\`/\`taskkill\` · Task Manager · Services · \`systeminfo\` · Event Viewer · Reliability · msconfig · Startup apps.

**Storage/files:** \`chkdsk\` · Disk Management · Storage settings · \`sfc\` · Explorer · permissions · SMART/vendor health recognition.

**Update/policy:** Update history · gpresult where relevant · managed indicators · services · network/proxy.

---

## Boot-stage model

1. **Firmware/hardware detection** — drive detected? boot order? UEFI/legacy? Secure Boot? recent HW? external boot media? storage connection? HW diagnostics → Core 1 Hardware TS if below OS.
2. **Boot loader/recovery** — error text · WinRE · Startup Repair · recent update · boot config · BitLocker recovery · recovery media.
3. **Kernel/drivers** — stop code · Safe Mode · recent driver/update · device changes · logs · memory/storage health.
4. **Sign-in/profile** — correct account · identity/network · profile state · lock · temporary profile · credentials · policy.
5. **Desktop/shell** — Explorer · startups · profile · display driver · app conflicts · resources.

## BSOD / stop-error reasoning

Record: stop code · when · recent changes · repeats? · driver/device names · dump recognition · HW symptoms · thermal/power · update/driver history. Categories: driver · memory · storage · firmware · hardware · security software · system-file corruption · update conflict. **One code ≠ one guaranteed cause.**

Safe response: preserve details · remove recent unsupported changes if justified · Safe Mode · reliability/events · HW evidence · roll back driver/update · escalate recurring/business-critical.

## Slow-system workflow

1) System-wide vs app-specific · 2) constant vs intermittent · 3) CPU/mem/disk/GPU/net · 4) active processes · 5) startups · 6) free storage · 7) update activity · 8) thermal/power · 9) storage health · 10) malware only with supporting evidence · 11) verify after each narrow change. Avoid registry “cleaners,” random service disables, untrusted optimizers.

## Profile troubleshooting

One user vs every user · local/MSA/org · temporary vs corrupt · cloud sync · permissions · policy · app-profile. Safe: confirm account · sign out/in · storage/permissions · profile errors · authorized alternate account test · **backup before repair/recreate** · careful app settings · verify sync. Never delete profile before backup/ownership.

## Windows Update troubleshooting

Error code · storage · network/proxy · date/time · restart state · history · managed policy · services · supported troubleshooters/repair · system-file repair · justified rollback · respect holds · escalate widespread/managed. Avoid: indefinite pause · permanent update-service disable · blind update-data deletion · unverified packages.

## Application vs OS

One app? all users? Safe Mode? clean boot (authorized)? other profile? supported? dependencies? security blocking? OS otherwise stable? App-only deep dives belong in later AP1202-3.x when authorized — don’t overexpand here.

## Security escalation (connect Security)

Escalate / stop ordinary TS when: files encrypting · security tools disabled unexpectedly · unknown admin accounts · credential loops across services · multi-system · sensitive exposure · threat returns after cleanup. Don’t use OS repair to erase IR evidence without authorization.

## Recovery options & impact

| Option | Framing |
|--------|---------|
| **Restart** | Clears transient state; may finish updates; can destroy volatile incident evidence |
| **Safe Mode** | Limited drivers/services; isolates conflicts; doesn’t prove exact cause |
| **Clean boot** | Isolates 3rd-party startups/services; document & restore — not permanent disabled state |
| **Startup Repair** | Supported boot repair; not every HW/FS failure |
| **System Restore** | Selected system state; ≠ user-data backup; may remove recent apps/drivers |
| **Uninstall updates** | Reverse recent update; may reintroduce risk — plan reapply |
| **Reset this PC** | Keep/remove files options; removes apps/config; needs auth, backup, encryption prep |
| **Reinstall** | Highest disruption — data, licensing, drivers, apps, accounts, post-verify |

## Verification & documentation

After repair confirm: boots · sign-in · apps · devices · network · updates · security still on · encryption protected · user data present · storage space · no continuing critical errors · symptom doesn’t recur · temporary diagnostic settings restored · user follow-up understood.

Document: symptom · exact error · scope · recent changes · evidence · theories tested · actions · backup steps · recovery · update/driver changes · security concerns · verification · escalation · follow-up · user impact — **no passwords, recovery keys, MFA codes, or unnecessary PII**.

**Lab boundary.** Fictional packets only. No real recovery keys, destructive commands on real data, public targets, malware samples, or bypass procedures.

**What's next.** Mobile OS and application troubleshooting (\`ap-ts-mobile-os\` / AP1202-3.2) when authorized.`,
    },
    lightbulbMoment:
      "Windows repair is layer selection under data protection: prove the boot stage and the strongest evidence before you reset, and never trade security or recovery keys for a faster close.",
    keyFacts: [
      "Identify → theory → test → plan → implement/escalate → verify → document",
      "Protect data before reset, reinstall, chkdsk /r, or boot-config surgery",
      "Boot stages: firmware → loader → kernel/drivers → sign-in/profile → desktop",
      "Slow ≠ malware by default — check disk space, startups, updates, resources first",
      "Temporary profile / wrong account can look like ‘missing files’",
      "One stop code or Event Viewer line is not automatic root cause",
      "Least disruptive recovery first; restore temporary diagnostic settings after",
    ],
    guidedExample: {
      title: "Eight Windows OS tickets",
      steps: [
        "Automatic Repair loop after update → record error; confirm storage detection; WinRE; protect data; least disruptive recovery; verify updates/security after.",
        "BSOD after driver update → stop code + recent driver; Safe Mode; roll back supported; verify device; watch recurrence.",
        "One user temporary profile → other users OK?; backup data; profile/storage evidence; don’t delete early; supported repair/recreate; verify sync.",
        "Slow PC: high disk, nearly full storage, pending feature update → address storage/update evidence before malware assumptions.",
        "PIN stopped working → verify identity; PIN ≠ account password; network/account context; approved recovery; no bypass; escalate managed accounts.",
        "‘Missing files’ after sign-in → check temporary/wrong profile before declaring data loss.",
        "sfc/DISM succeed then corruption returns → consider failing storage/memory/unsafe shutdown/malware/unsupported software; escalate/reimage path.",
        "BitLocker recovery after firmware work → ownership; approved key process; protect key; confirm firmware change; verify encryption; escalate missing keys.",
      ],
    },
    commonMistakes: [
      "Jumping immediately to reset or reinstallation",
      "Assuming every slow system has malware",
      "Treating one Event Viewer entry as proof",
      "Ignoring storage or memory evidence",
      "Deleting user profiles before backup",
      "Running destructive disk/boot repair without data-risk review",
      "Disabling security controls or permanently disabling services after clean boot",
      "Randomly editing boot configuration when the drive isn’t detected",
      "Removing updates without reapplication planning",
      "Bypassing BitLocker or account recovery",
      "Declaring success because the system boots once",
      "Failing to restore temporary diagnostic settings or document exact errors",
    ],
    examTraps: [
      "Best first action with data risk in mind",
      "Strongest evidence for boot-stage isolation",
      "Least disruptive repair vs reset/reimage",
      "Temporary profile vs true data loss",
      "Security escalation vs ordinary OS repair",
      "Verification beyond ‘it boots’",
      "Managed-policy / BitLocker key boundaries",
    ],
    realWorldScenario:
      "A laptop enters Automatic Repair after a feature update. Firmware sees the NVMe. WinRE shows a recent failed update. You image critical user folders to external storage first, uninstall the last quality update from recovery, boot successfully, confirm BitLocker still protects the volume, re-run Windows Update on a stable build, and only then clear the ticket — not ‘Reset this PC’ as step one.",
    whenThisFails: [
      "If firmware does not detect storage, stop OS boot-record repair and escalate to Hardware TS",
      "If ransomware/encryption-in-progress or unknown admin accounts appear, escalate Security — don’t wipe evidence",
      "If BitLocker recovery key is missing, escalate — do not invent bypasses",
    ],
    teacherReflectionPrompt:
      "For Automatic Repair after update vs temporary profile vs full-disk slow PC: name the failing layer, the data-protection step, and the least disruptive next action.",
    quiz: [
      {
        id: "ap-ts-windows-os-q1",
        prompt: "A PC enters Automatic Repair after a Windows update. Firmware detects the system drive. Best first framing?",
        choices: [
          { id: "a", text: "Record the error, protect user data, use the least disruptive supported recovery in WinRE, then verify updates and security afterward" },
          { id: "b", text: "Immediately reinstall Windows without checking data risk" },
          { id: "c", text: "Run random bootrec commands even if the drive is undetected" },
          { id: "d", text: "Disable BitLocker permanently as step one" },
        ],
        correctChoiceId: "a",
        explanation: "Boot/update recovery with data protection.",
        objectiveId: "AP1202-3.1",
        difficulty: "medium",
      },
      {
        id: "ap-ts-windows-os-q2",
        prompt: "A blue screen appears after a vendor graphics driver update. Strongest early path?",
        choices: [
          { id: "a", text: "Record the stop code and recent change; use Safe Mode if needed; roll back/replace the driver through supported methods; verify and watch recurrence" },
          { id: "b", text: "Memorize that every stop code means bad RAM only" },
          { id: "c", text: "Disable Windows Security permanently" },
          { id: "d", text: "Delete the user profile first" },
        ],
        correctChoiceId: "a",
        explanation: "BSOD after driver change.",
        objectiveId: "AP1202-3.1",
        difficulty: "easy",
      },
      {
        id: "ap-ts-windows-os-q3",
        prompt: "Only one user receives a temporary profile; others sign in normally. Best framing?",
        choices: [
          { id: "a", text: "Protect that user’s data, review profile/storage evidence, avoid premature profile deletion, repair/recreate through supported procedures, verify sync" },
          { id: "b", text: "Format the disk immediately" },
          { id: "c", text: "Declare all files permanently lost without checking profile context" },
          { id: "d", text: "Bypass the login PIN" },
        ],
        correctChoiceId: "a",
        explanation: "Profile isolation and data protection.",
        objectiveId: "AP1202-3.1",
        difficulty: "medium",
      },
      {
        id: "ap-ts-windows-os-q4",
        prompt: "Task Manager shows high disk usage, the volume is nearly full, and a feature update is pending. Best reasoning?",
        choices: [
          { id: "a", text: "Address the strongest evidence first (storage/update pressure) — do not assume malware without supporting indicators" },
          { id: "b", text: "Always wipe and reimage as step one" },
          { id: "c", text: "Disable the firewall and Defender" },
          { id: "d", text: "Ignore disk space because updates never need free space" },
        ],
        correctChoiceId: "a",
        explanation: "Slow-system evidence hierarchy.",
        objectiveId: "AP1202-3.1",
        difficulty: "easy",
      },
      {
        id: "ap-ts-windows-os-q5",
        prompt: "A user says their Windows Hello PIN stopped working on an org-managed laptop. Safest framing?",
        choices: [
          { id: "a", text: "Verify identity; distinguish PIN from account password; confirm network/account context; use approved recovery; escalate managed-account issues — no bypass" },
          { id: "b", text: "Teach a BitLocker/PIN bypass" },
          { id: "c", text: "Remove the device from management to ‘fix’ login" },
          { id: "d", text: "Share another user’s PIN" },
        ],
        correctChoiceId: "a",
        explanation: "Sign-in recovery boundaries.",
        objectiveId: "AP1202-3.1",
        difficulty: "medium",
      },
      {
        id: "ap-ts-windows-os-q6",
        prompt: "System file repair succeeds, but corruption returns within days. What should you consider?",
        choices: [
          { id: "a", text: "Failing storage, memory, unsafe shutdowns, malware, unsupported software — escalate hardware or reimage path as needed" },
          { id: "b", text: "That sfc always permanently cures every cause" },
          { id: "c", text: "Disabling updates forever" },
          { id: "d", text: "Deleting Event Viewer to hide recurrence" },
        ],
        correctChoiceId: "a",
        explanation: "Recurring corruption → deeper layers.",
        objectiveId: "AP1202-3.1",
        difficulty: "medium",
      },
    ],
    questionBank: [
      {
        id: "ap-ts-windows-os-b1",
        prompt: "Firmware does not detect the system drive. Best next framing?",
        choices: [
          { id: "a", text: "Stop random OS boot-record repair; treat as hardware/storage detection and escalate to Hardware TS as needed" },
          { id: "b", text: "Run bootrec repeatedly anyway" },
          { id: "c", text: "Reset this PC from a blank USB blindly" },
        ],
        correctChoiceId: "a",
        explanation: "Boot stage 1 vs loader repair.",
        objectiveId: "AP1202-3.1",
        difficulty: "medium",
      },
      {
        id: "ap-ts-windows-os-b2",
        prompt: "Clean boot testing should end with:",
        choices: [
          { id: "a", text: "Documenting results and restoring normal startup/services — not leaving services permanently disabled" },
          { id: "b", text: "Leaving half the services off forever" },
          { id: "c", text: "Disabling Windows Update permanently" },
        ],
        correctChoiceId: "a",
        explanation: "Clean boot is temporary diagnostics.",
        objectiveId: "AP1202-3.1",
        difficulty: "easy",
      },
      {
        id: "ap-ts-windows-os-b3",
        prompt: "System Restore is best described as:",
        choices: [
          { id: "a", text: "Reverting selected system state — it does not replace a user-data backup" },
          { id: "b", text: "A full offline backup of all user files" },
          { id: "c", text: "A BitLocker key escrow" },
        ],
        correctChoiceId: "a",
        explanation: "Recovery option impact.",
        objectiveId: "AP1202-3.1",
        difficulty: "easy",
      },
      {
        id: "ap-ts-windows-os-b4",
        prompt: "Files appear missing after sign-in, but the desktop looks ‘new.’ First investigation?",
        choices: [
          { id: "a", text: "Temporary or wrong profile / account context before declaring data loss" },
          { id: "b", text: "Immediately shred the drive" },
          { id: "c", text: "Disable encryption" },
        ],
        correctChoiceId: "a",
        explanation: "Profile vs data loss.",
        objectiveId: "AP1202-3.1",
        difficulty: "easy",
      },
      {
        id: "ap-ts-windows-os-b5",
        prompt: "BitLocker recovery appears after authorized firmware work. Correct framing?",
        choices: [
          { id: "a", text: "Verify ownership; use the approved recovery-key process; protect the key; verify encryption afterward; escalate if the key is missing" },
          { id: "b", text: "Teach a BitLocker bypass" },
          { id: "c", text: "Post the recovery key in the public ticket" },
        ],
        correctChoiceId: "a",
        explanation: "Encryption recovery safety.",
        objectiveId: "AP1202-3.1",
        difficulty: "medium",
      },
      {
        id: "ap-ts-windows-os-b6",
        prompt: "A single Event Viewer error proves root cause:",
        choices: [
          { id: "a", text: "False — one entry strengthens a theory only with context and corroborating evidence" },
          { id: "b", text: "True — always replace the motherboard" },
          { id: "c", text: "True — always wipe the disk" },
        ],
        correctChoiceId: "a",
        explanation: "Evidence hierarchy.",
        objectiveId: "AP1202-3.1",
        difficulty: "easy",
      },
      {
        id: "ap-ts-windows-os-b7",
        prompt: "Ransomware indicators appear during OS troubleshooting. Best boundary?",
        choices: [
          { id: "a", text: "Stop ordinary repair that erases evidence; isolate/report/escalate per Security procedures" },
          { id: "b", text: "Quick-format to ‘clean’ without authorization" },
          { id: "c", text: "Disable logging and continue" },
        ],
        correctChoiceId: "a",
        explanation: "Security escalation during OS TS.",
        objectiveId: "AP1202-3.1",
        difficulty: "medium",
      },
      {
        id: "ap-ts-windows-os-b8",
        prompt: "After a successful repair, verification should include:",
        choices: [
          { id: "a", text: "Boot, sign-in, apps, devices, network, updates, security still enabled, data present, temporary diagnostic settings restored" },
          { id: "b", text: "Only that the login screen appeared once" },
          { id: "c", text: "Leaving Safe Mode as the permanent mode" },
        ],
        correctChoiceId: "a",
        explanation: "Full verification.",
        objectiveId: "AP1202-3.1",
        difficulty: "easy",
      },
      {
        id: "ap-ts-windows-os-b9",
        prompt: "Windows Update fails with an error code on a managed device. Avoid:",
        choices: [
          { id: "a", text: "Permanently disabling update services or installing unverified packages" },
          { id: "b", text: "Checking storage, network, history, and policy" },
          { id: "c", text: "Escalating widespread managed-device failures" },
        ],
        correctChoiceId: "a",
        explanation: "Update troubleshooting boundaries.",
        objectiveId: "AP1202-3.1",
        difficulty: "easy",
      },
      {
        id: "ap-ts-windows-os-b10",
        prompt: "One application crashes; the OS is otherwise stable and other apps work for all users. Best framing?",
        choices: [
          { id: "a", text: "Treat as likely application-layer — gather app evidence; don’t jump to full OS reinstall as first step" },
          { id: "b", text: "Always reset Windows immediately" },
          { id: "c", text: "Disable Secure Boot for every app crash" },
        ],
        correctChoiceId: "a",
        explanation: "Application vs OS isolation.",
        objectiveId: "AP1202-3.1",
        difficulty: "medium",
      },
    ],
    flashcards: [
      {
        id: "ap-ts-windows-os-f1",
        front: "TS process order?",
        back: "Identify → theory → test → plan → implement/escalate → verify → document",
      },
      {
        id: "ap-ts-windows-os-f2",
        front: "Boot stages?",
        back: "Firmware → loader → kernel/drivers → sign-in/profile → desktop",
      },
      {
        id: "ap-ts-windows-os-f3",
        front: "Before reset/reinstall?",
        back: "Protect data, keys, sync, policy, storage risk",
      },
      {
        id: "ap-ts-windows-os-f4",
        front: "Temporary profile clue?",
        back: "One user; ‘new’ desktop; check before data-loss claim",
      },
      {
        id: "ap-ts-windows-os-f5",
        front: "Drive not in firmware?",
        back: "Hardware/storage path — not random bootrec",
      },
      {
        id: "ap-ts-windows-os-f6",
        front: "Clean boot leftover?",
        back: "Restore services/startup — not permanent disable",
      },
      {
        id: "ap-ts-windows-os-f7",
        front: "Ransomware during OS TS?",
        back: "Escalate Security — don’t wipe evidence casually",
      },
    ],
    assignments: [
      {
        id: "ap-lab-windows-ts-desk",
        title: "Windows Troubleshooting Desk",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `Fictional inert packets only. No real recovery keys, destructive commands on production data, malware samples, public targets, or password/BitLocker/policy bypasses.

For each incident record:
1) Scope
2) Most likely failing layer
3) Data-protection step
4) Best evidence source
5) Initial theory
6) Safe test
7) Least disruptive corrective action
8) Security or authorization boundary
9) Escalation condition
10) Verification
11) Ticket note

Packets:

A) Automatic Repair loop — post feature update; firmware detects NVMe; WinRE available; BitLocker On; last backup yesterday; user Documents not synced.

B) BSOD — VIDEO_TDR after GPU driver update yesterday; boots Safe Mode; Event Viewer shows display driver; other apps OK.

C) Temporary profile — only jsmith; other users OK; C: 8% free; profile folder present; OneDrive shows “Need attention.”

D) Slow workstation — disk 100% in Task Manager; 3 GB free on C:; feature update Pending restart; Reliability shows no critical crashes; Defender last scan clean.

E) PIN failure — org Intune laptop; user identity verified at desk; network online; password works on webmail; Windows Hello PIN errors; no bypass requested.

F) Missing files — desktop empty after reboot; path shows TEMP profile banner; D:\\Users\\jsmith\\Desktop still has files when explored from admin context (authorized).

G) Recurring corruption — sfc/DISM clean twice last week; chkdsk previously reported reallocating sectors; random restarts under load.

H) BitLocker recovery — after authorized BIOS update; ownership confirmed; recovery key in approved escrow; firmware change logged.

I) Security pivot — user opened “invoice” then files rename to .locked; ransom note on desktop; Defender disabled unexpectedly.

Boundaries: least disruptive first; escalate I as Security; never invent BitLocker bypass; restore clean-boot leftovers if you recommend that path; no real destructive lab steps.`,
        estimatedMinutes: 40,
        completionCriteria: [
          "Complete all eleven fields for packets A–I",
          "Identify boot-stage vs profile vs storage vs security layers correctly",
          "Include a data-protection step before disruptive recovery",
          "Escalate ransomware packet; refuse bypasses",
          "Verification includes more than ‘it boots’",
        ],
        relatedTopicIds: [
          "ap-ts-windows-os",
          "ap-windows-tools",
          "ap-windows-cli",
          "ap-os-install",
          "ap-windows-security",
          "ap-malware",
          "ap-ts-storage-raid",
        ],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 60,
    difficulty: "medium",
  },
];
