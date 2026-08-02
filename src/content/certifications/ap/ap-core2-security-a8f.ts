import type { ExternalResource, Topic } from "../../types";

/**
 * A+ Core 2 Security — A8f (Michael 2026-08-01).
 * ap-malware-removal (AP1202-2.6) only — SOHO best-practice procedure.
 * Builds on ap-malware (2.4); does not re-teach categories/social engineering.
 * Stop after verify — no 2.7+ Security, SW-TS, Ops, or CCNA C1.
 */

const WINDOWS_11_PC_RESOURCE: ExternalResource = {
  id: "windows-11-pc",
  name: "Windows 11 PC",
  url: "https://support.microsoft.com/windows",
  cost: "free",
  platform: "windows",
  installNotes:
    "Use a Windows 11 PC for fictional SOHO malware-removal procedure worksheets only. Do not download malware samples, unknown cleaners, or live suspicious files. Do not disable real endpoint protection for practice. Do not change passwords on a suspected infected device. Artifacts are synthetic and inert.",
};

export const apCore2SecurityBatch6Topics: Topic[] = [
  {
    id: "ap-malware-removal",
    name: "SOHO Malware Removal Procedures",
    prerequisites: [
      "ap-social-engineering",
      "ap-malware",
      "ap-windows-security",
      "ap-os-install",
    ],
    objectives: ["AP1202-2.6"],
    knowledgeNodeId: "incident-response",
    lesson: {
      title: "Follow the Ordered SOHO Malware-Removal Procedure",
      content: `This topic is the **formal technician procedure** for a SOHO or individually supported endpoint. It builds on \`ap-malware\` (recognition, triage, categories, ransomware escalation, restoring trust) — do **not** re-learn the whole identification lesson here.

**Case state → correct next procedural step → safety boundary → verification.**

**Out of scope:** enterprise IR forensics, threat hunting, reverse engineering, offensive persistence work, ransomware negotiation, live malware handling, advanced EDR admin.

---

## When SOHO procedure fits — and when it doesn’t

**Appropriate:** single (or small) home/small-office endpoint · technician-authorized cleanup · no active ransomware/multi-host/privileged/sensitive-data crisis requiring IR takeover.

**Stop routine cleanup / escalate or reimage** when: active ransomware · many systems · sensitive/privileged compromise · threat returns · protection can’t be restored · boot/firmware/rootkit suspicion · managed-device IR required · business-critical · legal/compliance · backups may be infected · system can’t be trusted. (\`ap-malware\` escalation habits apply.)

---

## Ordered best-practice procedure (exam sequence)

Preserve this order for A+ scenarios:

### 1. Investigate and verify malware symptoms
Confirm behavior · recent changes · EDR/AV alerts · malware vs hardware/software/browser/account/config · one vs many systems · sensitive data/credential risk · timestamps · research via **trusted** sources only (OS/security vendor docs, org KB, approved IR guidance, known detection databases, app-vendor support). **Do not** copy random removal commands from forums/videos.

### 2. Quarantine / isolate the infected system
Unplug Ethernet · disable Wi-Fi · remove from normal use · block shared storage / removable media · notify appropriate support/security · preserve state when policy requires.

Isolation limits: spread · remote control · further downloads · exfiltration · share damage · account abuse.

**Boundary:** “Power off immediately” is **not** always correct — consider active ransomware, volatile evidence, org policy, IR instruction, physical safety, ongoing destruction. Follow safest approved procedure; don’t improvise forensics.

### 3. Disable System Restore (when the formal procedure requires it)
**Why (exam rationale):** restore points may hold infected/unwanted files; a later restore can reintroduce malware.

**Risks / nuance:** reduces recovery options · not casual · may not fit every modern/enterprise case · follow objective procedure + policy + recovery plan · **not a backup substitute** · **re-enable** after remediation and create a fresh restore point where appropriate. Do not blanket-delete all recovery data without authorization.

### 4. Remediate the infected systems
Update existing anti-malware from a trusted path · full/offline/custom scans as needed · quarantine confirmed threats · supported uninstall of malware/PUA · remove bad extensions · careful browser reset · review startup · vendor-approved removal tools · Safe Mode/WinRE when aligned · temp cleanup where useful · supported system-file repair · restore from **known-clean** backup · **reimage** when integrity fails (\`ap-os-install\` for install planning — don’t re-teach OS install here).

**Never:** reverse-engineer malware · registry-hunt as default primary · unknown “cleaners” · run suspicious files to test · disable protections to “finish cleanup.”

### 5. Schedule scans and run updates
Schedule follow-up scans · apply OS/security updates · update browsers/apps · remove unsupported/unnecessary software · review extensions · confirm security intelligence current · verify update success. Patching closes entry paths; it does **not** erase account compromise or data exposure by itself.

### 6. Enable System Restore and create a restore point (restore protective controls)
Re-enable System Restore / recovery protection where appropriate · create a clean restore point · confirm AV/EDR real-time On · firewall On · defs current · browser protection · updates enabled · least-privilege account · encryption still active · no leftover broad exclusions. Temporary changes: documented, narrow, authorized, reversed.

### 7. Educate the end user
Trusted sources · links/attachments · notification spam · unexpected MFA · piracy/cracks · removable media · updates · report early · password/MFA hygiene · backup awareness. **Nonjudgmental** — reduce recurrence and encourage reporting.

### After the numbered sequence: verify and document
**Verify:** symptoms gone · protection active · scans clean/resolved · updates OK · apps/network/files/accounts OK · no bad startup/extensions · recovery restored · no repeat alerts · short monitoring for recurrence. Usable ≠ trusted.

**Document:** symptoms · scope · detections · isolation · restore-point changes · tools/scans/results · quarantines/removals · updates · credentials/sessions · reimage/restore decision · controls restored · verification · education · escalation owner · follow-up. **Never** ticket passwords, MFA codes, recovery keys, unnecessary PII, or malware samples.

---

## Scan selection

| Scan | Use |
|------|-----|
| Quick | Faster, narrower |
| Full | Broader locations |
| Custom | Targeted paths |
| Offline | Threats that interfere while Windows runs |
| Second-opinion | Only if policy permits; avoid dual real-time AV stacks |

Clean scan ≠ full trust. Interpret results.

## Quarantine vs removal vs restoration
- **Quarantine** — isolates; may allow review; doesn’t fix stolen creds  
- **Removal** — deletes/neutralizes; may leave damage/entry paths  
- **Restoration** — returns clean file/app/config/system from trusted source **after** cause addressed  

Never restore quarantine just because the user insists.

## Reimage threshold & prep
Reimage when: integrity unknown · controls deeply disabled · repeats · boot/firmware suspicion · multi-family mess · sensitive data + policy · cleanup slower/less reliable than rebuild · rootkit/deep persistence.

Prep: authorize · careful user-data backup (no suspicious executables) · licensing · encryption recovery awareness · clean media · patch before normal use · restore only trusted files · apps from approved sources. Link \`ap-os-install\`.

## Credentials
If compromise possible: known-clean device · change passwords · revoke sessions · review MFA/recovery · privileged accounts separately · reuse review · notify identity/security owners. **Not** from the infected endpoint.

## Backup vs sync vs restore point vs image
Know the differences; sync can re-push bad extensions; infected backups must not be restored blindly.

**What's next.** Workstation hardening best practices (\`ap-hardening\` / AP1202-2.7) when authorized.`,
    },
    lightbulbMoment:
      "SOHO malware removal is an ordered procedure: verify, isolate, handle restore points per the formal steps, remediate with trusted tools, update, restore protections, educate — and stop for ransomware, reimage, or escalation when trust cannot be restored.",
    keyFacts: [
      "Exam order: verify → isolate → disable System Restore (when required) → remediate → update/scan → enable Restore + protections → educate",
      "Builds on ap-malware — this topic is procedure, not category trivia",
      "Isolation before remediation; don’t skip it",
      "Disable System Restore carefully; re-enable and create a clean point after",
      "Quarantine ≠ removal ≠ trusted restoration",
      "Usable after cleanup ≠ trusted — verify controls and consider reimage",
      "Never change passwords on the suspected infected PC",
    ],
    guidedExample: {
      title: "Six SOHO procedure tickets",
      steps: [
        "Browser hijacker home PC → verify browser scope → isolate Wi-Fi → follow restore-point step per procedure → scan/remove extensions → update → re-enable protections → educate about free converters → verify sync won’t re-push.",
        "User wants quarantined file restored → research trusted sources; no auto-restore; keep protection on; escalate if business-critical/uncertain.",
        "Threat returns after ‘clean’ → check sync/media/other device; reimage threshold; escalate if needed.",
        "Files encrypt mid-cleanup → abandon routine SOHO steps; isolate; escalate IR; protect evidence; no negotiation.",
        "Free converter + pop-ups → supported uninstall + scan + startup/extensions + update + educate sources.",
        "AV off, repeated detections, integrity doubtful → prefer authorized reimage over endless cleanup.",
      ],
    },
    commonMistakes: [
      "Starting removal before verifying symptoms",
      "Skipping isolation",
      "Random forum cleaners / multiple real-time AVs",
      "Disabling endpoint protection to finish cleanup",
      "Deleting restore points without understanding consequences",
      "Restoring quarantine casually or infected backups",
      "Leaving protections disabled or skipping user education",
    ],
    examTraps: [
      "Best next step in the ordered sequence",
      "Incorrectly skipped isolation or System Restore step",
      "When to re-enable System Restore and create a point",
      "Ransomware: stop SOHO procedure and escalate",
      "Reimage vs continue cleanup",
      "Credential change from clean system only",
    ],
    realWorldScenario:
      "A home-office PC has redirects after a ‘free PDF tool.’ You confirm symptoms and a Defender history hit, unplug Ethernet, follow the formal restore-point handling, run an offline scan, remove the PUA and bad extension, patch Windows and the browser, re-enable protections and a clean restore point, walk through trusted download habits without blame, and document — usable and protected, not just ‘pop-ups gone.’",
    whenThisFails: [
      "If ransomware or multi-system impact appears, stop the SOHO sequence and escalate immediately",
      "If malware returns after a complete pass, escalate toward reimage/account review — don’t loop random tools",
      "If you lack authorization for reimage or account actions, document and escalate",
    ],
    teacherReflectionPrompt:
      "Without notes, list the ordered SOHO removal steps and name one case where you must abandon the sequence for escalation.",
    quiz: [
      {
        id: "ap-malware-removal-q1",
        prompt: "After verifying malware symptoms on a SOHO PC, the best next procedural step is usually:",
        choices: [
          { id: "a", text: "Quarantine/isolate the system before remediation" },
          { id: "b", text: "Educate the user first and leave the PC online" },
          { id: "c", text: "Restore from an unverified backup immediately" },
          { id: "d", text: "Disable the firewall permanently" },
        ],
        correctChoiceId: "a",
        explanation: "Order: verify, then isolate, then continue the formal sequence.",
        objectiveId: "AP1202-2.6",
        difficulty: "easy",
      },
      {
        id: "ap-malware-removal-q2",
        prompt: "Why do formal SOHO malware-removal procedures often disable System Restore before remediation?",
        choices: [
          { id: "a", text: "Infected files may exist in restore points and could be restored later — then re-enable and create a clean point after cleanup" },
          { id: "b", text: "System Restore replaces the need for antivirus forever" },
          { id: "c", text: "Disabling Restore encrypts the disk automatically" },
          { id: "d", text: "It is required before every Windows Update" },
        ],
        correctChoiceId: "a",
        explanation: "Exam rationale plus re-enable after remediation.",
        objectiveId: "AP1202-2.6",
        difficulty: "medium",
      },
      {
        id: "ap-malware-removal-q3",
        prompt: "During SOHO cleanup, files begin encrypting and a ransom note appears. Best action?",
        choices: [
          { id: "a", text: "Stop the normal SOHO procedure, isolate per policy, escalate, protect evidence — do not pay or casually restore" },
          { id: "b", text: "Continue the seven steps and ignore the note" },
          { id: "c", text: "Pay the ransom from personal funds" },
          { id: "d", text: "Disable Defender and download a random decryptor" },
        ],
        correctChoiceId: "a",
        explanation: "Ransomware exits the routine SOHO path.",
        objectiveId: "AP1202-2.6",
        difficulty: "easy",
      },
      {
        id: "ap-malware-removal-q4",
        prompt: "A user insists a quarantined file is required. Correct handling?",
        choices: [
          { id: "a", text: "Do not restore casually — verify publisher/source via trusted research and escalate if uncertain; keep protection on" },
          { id: "b", text: "Restore immediately and add a *.* exclusion" },
          { id: "c", text: "Turn off real-time protection permanently" },
          { id: "d", text: "Email the quarantined file to yourself for testing" },
        ],
        correctChoiceId: "a",
        explanation: "Quarantine vs restoration boundary.",
        objectiveId: "AP1202-2.6",
        difficulty: "medium",
      },
      {
        id: "ap-malware-removal-q5",
        prompt: "After remediation, which step correctly completes the formal sequence before finishing the ticket?",
        choices: [
          { id: "a", text: "Enable System Restore (create a clean point), confirm protective controls, educate the user, verify, and document" },
          { id: "b", text: "Leave antivirus disabled so the system stays ‘fast’" },
          { id: "c", text: "Skip updates forever" },
          { id: "d", text: "Change all passwords on the still-infected PC" },
        ],
        correctChoiceId: "a",
        explanation: "Restore protections + educate + verify.",
        objectiveId: "AP1202-2.6",
        difficulty: "easy",
      },
      {
        id: "ap-malware-removal-q6",
        prompt: "Security tools were deeply disabled and detections keep returning after cleanup. Best recovery framing?",
        choices: [
          { id: "a", text: "Trusted reimage may be safer than continued cleanup — authorize, avoid carrying suspicious executables forward, patch before return" },
          { id: "b", text: "Install three real-time antivirus products at once" },
          { id: "c", text: "Restore every quarantine item" },
          { id: "d", text: "Hide the SSID and declare trust restored" },
        ],
        correctChoiceId: "a",
        explanation: "Reimage threshold.",
        objectiveId: "AP1202-2.6",
        difficulty: "medium",
      },
    ],
    questionBank: [
      {
        id: "ap-malware-removal-b1",
        prompt: "Trusted research during symptom verification includes:",
        choices: [
          { id: "a", text: "OS/security vendor docs and approved knowledge bases — not random forum removal scripts" },
          { id: "b", text: "Any YouTube ‘hack’ video" },
          { id: "c", text: "The ransomware payment site FAQ" },
        ],
        correctChoiceId: "a",
        explanation: "Trusted sources only.",
        objectiveId: "AP1202-2.6",
        difficulty: "easy",
      },
      {
        id: "ap-malware-removal-b2",
        prompt: "Offline scan is especially useful when:",
        choices: [
          { id: "a", text: "Threats may interfere while Windows is fully running" },
          { id: "b", text: "You want to disable the firewall permanently" },
          { id: "c", text: "You need to approve MFA pushes" },
        ],
        correctChoiceId: "a",
        explanation: "Scan selection.",
        objectiveId: "AP1202-2.6",
        difficulty: "easy",
      },
      {
        id: "ap-malware-removal-b3",
        prompt: "Password changes after possible credential theft should be done:",
        choices: [
          { id: "a", text: "From a known-clean system — not the suspected infected endpoint" },
          { id: "b", text: "Only on the infected PC so malware can ‘see’ the new password" },
          { id: "c", text: "By posting them in the ticket" },
        ],
        correctChoiceId: "a",
        explanation: "Credential response.",
        objectiveId: "AP1202-2.6",
        difficulty: "easy",
      },
      {
        id: "ap-malware-removal-b4",
        prompt: "Browser sync after PUA removal matters because:",
        choices: [
          { id: "a", text: "Sync can restore malicious extensions or settings — verify sync sources" },
          { id: "b", text: "Sync replaces antivirus" },
          { id: "c", text: "Sync disables System Restore automatically" },
        ],
        correctChoiceId: "a",
        explanation: "Backup/sync distinction in recovery.",
        objectiveId: "AP1202-2.6",
        difficulty: "medium",
      },
      {
        id: "ap-malware-removal-b5",
        prompt: "Leaving real-time protection off after cleanup is:",
        choices: [
          { id: "a", text: "Incorrect — restore protective controls before closing the ticket" },
          { id: "b", text: "Required by the official procedure" },
          { id: "c", text: "A substitute for user education" },
        ],
        correctChoiceId: "a",
        explanation: "Restore controls step.",
        objectiveId: "AP1202-2.6",
        difficulty: "easy",
      },
      {
        id: "ap-malware-removal-b6",
        prompt: "A clean full scan after remediation means:",
        choices: [
          { id: "a", text: "Useful verification evidence — still verify controls and watch for recurrence; not automatic total trust" },
          { id: "b", text: "Credentials cannot have been stolen" },
          { id: "c", text: "Backups are unnecessary forever" },
        ],
        correctChoiceId: "a",
        explanation: "Usable/clean ≠ fully trusted.",
        objectiveId: "AP1202-2.6",
        difficulty: "easy",
      },
      {
        id: "ap-malware-removal-b7",
        prompt: "Running several real-time antivirus products together typically:",
        choices: [
          { id: "a", text: "Can conflict — prefer approved tools and careful second-opinion scans per policy" },
          { id: "b", text: "Is always required by CompTIA" },
          { id: "c", text: "Replaces isolation" },
        ],
        correctChoiceId: "a",
        explanation: "Tool hygiene.",
        objectiveId: "AP1202-2.6",
        difficulty: "medium",
      },
      {
        id: "ap-malware-removal-b8",
        prompt: "User education after SOHO cleanup should be:",
        choices: [
          { id: "a", text: "Practical and nonjudgmental — trusted sources, reporting, MFA/password hygiene, backups" },
          { id: "b", text: "Public shaming so the lesson sticks" },
          { id: "c", text: "Optional if pop-ups stopped" },
        ],
        correctChoiceId: "a",
        explanation: "Educate step.",
        objectiveId: "AP1202-2.6",
        difficulty: "easy",
      },
      {
        id: "ap-malware-removal-b9",
        prompt: "What must happen before beginning malware-removal procedures?",
        choices: [
          { id: "a", text: "Recognize the symptoms, assess scope and risk, and follow the approved response path" },
          { id: "b", text: "Redesign network routing" },
          { id: "c", text: "Replace the printer fuser" },
        ],
        correctChoiceId: "a",
        explanation: "Scope distinction from 2.4.",
        objectiveId: "AP1202-2.6",
        difficulty: "easy",
      },
      {
        id: "ap-malware-removal-b10",
        prompt: "What belongs in reimage planning for a wiped SOHO PC?",
        choices: [
          { id: "a", text: "A clean installation plan that does not carry suspicious executables forward" },
          { id: "b", text: "Only WEP wireless configuration" },
          { id: "c", text: "Gift-card purchase procedures" },
        ],
        correctChoiceId: "a",
        explanation: "OS install referral.",
        objectiveId: "AP1202-2.6",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-malware-removal-f1",
        front: "SOHO removal order (core)?",
        back: "Verify → isolate → disable System Restore (as required) → remediate → update/scan → enable Restore + protections → educate (+ verify/document)",
      },
      {
        id: "ap-malware-removal-f2",
        front: "Why disable System Restore mid-procedure?",
        back: "Avoid reintroducing malware from old restore points — then re-enable clean",
      },
      {
        id: "ap-malware-removal-f3",
        front: "Skip isolation?",
        back: "No — isolate before remediation",
      },
      {
        id: "ap-malware-removal-f4",
        front: "Ransomware during cleanup?",
        back: "Stop SOHO sequence · escalate · protect evidence",
      },
      {
        id: "ap-malware-removal-f5",
        front: "Quarantine restore on user demand?",
        back: "No — verify source; escalate if unsure",
      },
      {
        id: "ap-malware-removal-f6",
        front: "Cleanup vs reimage?",
        back: "Reimage when integrity/trust can’t be established",
      },
      {
        id: "ap-malware-removal-f7",
        front: "Password after infection?",
        back: "Change from a known-clean system",
      },
    ],
    assignments: [
      {
        id: "ap-lab-soho-malware-removal",
        title: "SOHO malware-removal procedure lab",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `Fictional, inert incident packets only. No malware binaries, code, suspicious live links, exploit instructions, or samples.

For each packet document:
1) Is the SOHO procedure appropriate? (Y/N + why)
2) First procedural step
3) Isolation decision
4) Escalation required?
5) Scan/remediation method
6) Restore-point / recovery handling
7) Credential-response needed?
8) Reimage threshold met?
9) Protective controls to restore
10) Verification checks
11) User education points (no blame)
12) Ticket note (no passwords/OTP/keys/PII)

Packet A — Browser hijacker (home)
Symptoms: redirects, notification spam. Recent: free video converter. Alerts: PUA in Defender history. Browser: 2 unknown extensions; Edge sync On. Backup: OneDrive docs only. Restore points: present. Ownership: personal. Sensitivity: low. Systems: 1.

Packet B — Quarantine dispute (SOHO shop)
Symptoms: LOB updater quarantined. User demands restore. Publisher: unknown; came on USB. Alerts: Trojan:Win32/Wacatac.B!ml (heuristic). Managed: no domain; local admin shared. Sensitivity: customer PII on PC. Systems: 1.

Packet C — Recurring adware
Symptoms: same PUA returns after last week’s cleanup. Evidence: extension reappears after Chrome sync; USB “tools” stick still used. Restore points: were left disabled after prior tech visit. Sensitivity: low. Systems: 1 user, possibly 2 PCs.

Packet D — Ransomware interrupt
Symptoms: during ordinary pop-up cleanup, files start .locked + ransom note. Share: \\\\NAS\\invoices mapped. Alerts: real-time protection was Off. Sensitivity: high. Systems: unknown spread risk.

Packet E — Heavy compromise
Symptoms: repeated detections 10 days; Task Manager shows unknown persistence-like startup; Defender/firewall found Off; offline scan still finds remnants. Backup: old external drive with many EXEs. Sensitivity: tax records. Systems: 1. User wants ‘just clean it again.’

Boundaries: do not recommend paying ransom, dual real-time AV stacks, password changes on the infected PC, or leaving protections disabled.`,
        estimatedMinutes: 32,
        completionCriteria: [
          "Complete all twelve fields for Packets A–E",
          "Mark Packet D as escalate / stop routine SOHO procedure",
          "Identify reimage as appropriate for Packet E (or justify equivalent trust restoration)",
          "Ticket notes contain no secrets",
        ],
        relatedTopicIds: [
          "ap-malware-removal",
          "ap-malware",
          "ap-windows-security",
          "ap-os-install",
        ],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 55,
    difficulty: "medium",
  },
];
