import type { ExternalResource, Topic } from "../../types";

/**
 * A+ Core 2 Security — A8i (Michael 2026-08-01).
 * ap-data-destruction (AP1202-2.9) only — data destruction and disposal methods.
 * Stop after verify — no 2.10+ Security, SW-TS, Ops, or CCNA C1.
 * Simulated disposition only — no real wiping, drilling, shredding, burning, or degaussing.
 */

const WINDOWS_11_PC_RESOURCE: ExternalResource = {
  id: "windows-11-pc",
  name: "Windows 11 PC",
  url: "https://support.microsoft.com/windows",
  cost: "free",
  platform: "windows",
  installNotes:
    "Use a Windows 11 PC for fictional media-disposition worksheets only. Do not wipe, format, degauss, drill, shred, burn, or destroy real media for this lab. Do not bypass Activation Lock/MDM/ownership controls. Do not erase devices under legal hold or without authorization.",
};

export const apCore2SecurityBatch9Topics: Topic[] = [
  {
    id: "ap-data-destruction",
    name: "Data Destruction & Disposal Methods",
    prerequisites: [
      "ap-mobile-security",
      "ap-hardening",
      "ap-storage",
      "ap-cloud-productivity",
      "ap-os-install",
    ],
    objectives: ["AP1202-2.9"],
    knowledgeNodeId: "hardening-basics",
    lesson: {
      title: "Dispose of Data by Sensitivity, Media Type, and Authorization",
      content: `Secure disposal is a controlled lifecycle:

\`identify asset/data → ownership/authorization → method for media + goal → approved process → verify → document custody/disposition\`

**Sensitivity + media technology + reuse/disposal goal → approved method → verification → documentation** — not a one-line media→method chart.

**Prior:** \`ap-storage\` · \`ap-hardening\` · \`ap-mobile-security\` · \`ap-cloud-productivity\` · \`ap-os-install\`. **Later:** SOHO network security (\`ap-soho-security\` / 2.10) — do not substitute that here.

**Lab boundary.** All practical work is simulated. No at-home burning, smashing, drilling, shredding e-waste, or degaussing.

---

## Core distinctions

| Action | Assurance framing |
|--------|-------------------|
| **Deletion** | Removes FS reference; data often recoverable — **not** secure disposal |
| **Formatting** | Resets FS structures; quick format usually doesn’t overwrite; full format varies — **not** automatic verified sanitization |
| **Sanitization** | Controlled process to make recovery infeasible at required assurance |
| **Destruction** | Physically renders media unusable/unrecoverable via approved method |
| **Encryption** | Protects when keys secure; not proof prior data destroyed; crypto-erase needs all keys destroyed; ≠ disposal procedure alone |
| **Factory reset** | Toward initial state; depends on design/encryption/storage/accounts — **not** always sufficient |

## Classification & method selection

Depends on: sensitivity · legal/contract · ownership · media · condition · reuse vs dispose · org policy · assurance · chain of custody · environmental/safety.

Contexts (org policy governs labels): public · internal · confidential · PII · financial · health · auth material · proprietary/regulated. Don’t invent a universal taxonomy over policy.

## Authorization first

Verify: asset ID · owner · data owner · user · work order/approval · backup/retention · **legal hold** · investigation/evidence · destination · personal vs org data present.

**Boundaries:** Tech access ≠ erase authority · possession ≠ ownership · former-employee device may hold required records · damaged drive may still be retained · BYOD may need selective removal · legal hold/incident media → no casual wipe.

---

## Media types

**HDD (magnetic):** overwrite/logical wipe where approved · degaussing · physical destruction · deletion insufficient · bad/damaged sectors can block logical sanitization · degaussing often makes drive unusable.

**SSD (flash):** wear leveling / overprovisioning · simple overwrites may miss locations · secure erase/sanitize commands where supported · cryptographic erase if properly implemented · physical destruction when assurance requires · no low-level firmware hacking instruction.

**Removable flash (USB/SD/microSD/embedded):** erase limits · encryption · physical destruction · inventory/custody.

**Optical (CD/DVD/Blu-ray):** approved shredding/physical destruction · surface scratches ≠ secure destruction · disposal safety.

**Mobile/tablets** (link \`ap-mobile-security\`): backup · account/MDM removal · encryption state · factory reset · remote/selective wipe · SIM/eSIM · memory cards · Activation/ownership controls · verify before reassignment. **No ownership bypass.**

**Printers/MFPs:** may hold HDD/flash · cached docs · address books · credentials · scan destinations · network settings → approved sanitization/vendor process before return/resale/disposal.

**Embedded/IoT:** Wi-Fi creds · tokens · accounts · logs · media · configs · companion apps · factory-reset limits · account-side removal.

**Backup media:** external drives · tape · archives · offline copies · retention schedules · destroy only after retention expires — not ordinary cleanup.

---

## Methods (objective set)

- **Logical wiping** — approved overwrite/sanitize tools; whole device; verify; limited on damaged/flash; confirm correct asset; auth + backup first. No real wipe required in lab.
- **Secure erase / sanitize command** — firmware-supported; may fit flash better than file overwrite; vendor/tool support; still verify.
- **Cryptographic erase** — destroy valid keys so ciphertext is inaccessible; needs encryption coverage + **all** key copies (escrow, recovery, snapshots, backups, cloud). Not universally sufficient.
- **Degaussing** — magnetic media only; **not** SSD/optical; proper equipment; may ruin drive; safety/org process.
- **Shredding** — specialized gear; particle size per policy; office shredder ≠ all e-media.
- **Crushing** — damage storage components; controlled facility/PPE as required.
- **Drilling/puncturing** — cautious recognition; few holes may miss surfaces/chips; hazards; not universal preferred without policy.
- **Incineration** — approved specialty facility; not ordinary tech task.
- **Certified destruction vendor** — custody · inventory · certificates · contract fit for media/assurance. Certificate alone ≠ every step proven.

**Paper** (where aligned): cross-cut · secure bins · pulping · approved incineration · labels/shipping docs/notes/printed creds. Dumpster-diving awareness (\`ap-social-engineering\`).

## Cloud & sync

Destroying a local device may leave: cloud files · email · synced folders · backups · version history · shares · collab spaces · mobile backups · tokens · recipient copies.

Disposition may need: local sanitize · cloud retention actions · revoke access · remove links · handle backups · legal/retention review · account disconnects. Don’t promise instant deletion everywhere.

## Reuse vs disposal paths

**Reuse in-org:** backup/transfer · account removal · sanitize/reimage · key rotation · re-enroll · prove prior data inaccessible · asset update.  
**Vendor/lessor return:** contract · sanitize · account/MDM removal · inventory · custody · vendor confirm.  
**Donate/resale:** stronger ownership/license/account/sanitize/activation/asset-tag/personal-data/verification.  
**Final disposal:** approved destruction · e-waste · inventory close · custody · certificate/record.

## Verification & custody

Not done because a tool said OK. Check: logs · correct asset ID · all disks/partitions · approved read-only validation if used · keys unavailable after crypto-erase · destroyed media inspection per policy · media count · accounts/MDM removed · cloud/backup follow-up · tool/operator/date/result/disposition. No forensic recovery labs.

**Chain of custody** when: sensitive · third-party destruction · legal/regulatory · incident evidence · multi-media · off-site · high-value. Record tag/serial/type/owner/class/date/custodian/transfer/method/destination/approval/disposition/cert ref. Ordinary disposal records ≠ full forensics, but accountability overlaps.

## Safety

E-waste · batteries · sharp fragments · dust · fire · toxics · PPE · approved recycling · secure staging. **Never** burn/smash/shred/drill e-media as a home/classroom activity.

**What's next.** SOHO wired/wireless security settings (\`ap-soho-security\` / AP1202-2.10) when authorized.`,
    },
    lightbulbMoment:
      "Disposal is authorization plus media science: deletion and quick format are not sanitization, SSDs are not HDDs, cloud copies survive local wipes, and you verify and document before you close the asset.",
    keyFacts: [
      "Delete/quick format ≠ secure disposal",
      "Sanitization vs physical destruction are different assurance paths",
      "Degaussing is for magnetic media — not SSDs or optical",
      "SSD overwrites may miss flash locations — use supported sanitize/crypto-erase or destroy",
      "Crypto-erase requires destroying all relevant keys and copies",
      "Legal hold and ownership block casual wipes",
      "Local wipe does not finish cloud/backup/share disposition",
    ],
    guidedExample: {
      title: "Seven disposition tickets",
      steps: [
        "Reassign employee laptop → backup/retention OK; remove prior user; sanitize/reimage; keys/MDM; verify old data gone; update asset.",
        "Failed HDD with confidential data → can’t logical-wipe; approved degauss/physical destruction + custody + transport + verify count.",
        "SSD PC leaving org → supported sanitize/crypto-erase if policy allows; all disks/keys; accounts/MDM; verify; destroy if higher assurance required.",
        "Personal phone + work data on exit → selective wipe/sessions; full wipe only with authority (\`ap-mobile-security\`).",
        "Leased MFP return → internal storage/cache/address books/creds; vendor sanitize + custody + contract.",
        "Workstation wiped but OneDrive sync held files → finish cloud retention/access cleanup — local wipe incomplete.",
        "10 drives shipped; certificate lists 9 → stop closure; reconcile; escalate missing asset; preserve records.",
      ],
    },
    commonMistakes: [
      "Treating deletion or quick format as secure erase",
      "Applying HDD overwrite/degauss assumptions to SSDs",
      "Wiping without ownership, backup, or legal-hold check",
      "Forgetting secondary drives, SIMs, cards, or printer storage",
      "Assuming factory reset always removes everything",
      "Ignoring cloud, backup, and shared copies",
      "Closing disposal when asset counts don’t match the certificate",
    ],
    examTraps: [
      "Best authorized method for failed HDD vs healthy SSD",
      "Ineffective method (degauss SSD, quick format confidential)",
      "Missing prerequisite (backup/legal hold)",
      "BYOD selective vs full wipe",
      "Cloud sync after local wipe",
      "Chain-of-custody / count mismatch escalation",
    ],
    realWorldScenario:
      "Finance retires a laptop with an SSD and a forgotten encrypted USB in the bag. You confirm no legal hold, back up required finance files to approved retention, run the supported SSD sanitize path, destroy the USB under custody with the batch, remove the BitLocker recovery from escrow per policy, check OneDrive shares for the user’s libraries, and only then close the asset — two media types, two methods, one incomplete job if either was skipped.",
    whenThisFails: [
      "If legal hold or investigation is active, stop and escalate — do not wipe",
      "If ownership is unclear (BYOD/lease), escalate before full destruction",
      "If destruction certificate counts don’t match inventory, do not close the ticket",
    ],
    teacherReflectionPrompt:
      "For failed HDD confidential vs SSD donation vs BYOD exit phone: name the method class, one ineffective method, and the verification proof you’d record.",
    quiz: [
      {
        id: "ap-data-destruction-q1",
        prompt: "A confidential file is deleted from the Recycle Bin. Secure disposal status?",
        choices: [
          { id: "a", text: "Deletion is generally not sufficient — data may remain recoverable until approved sanitization/destruction" },
          { id: "b", text: "Deletion equals certified physical destruction" },
          { id: "c", text: "Deletion degausses the SSD automatically" },
          { id: "d", text: "Deletion removes all cloud copies worldwide" },
        ],
        correctChoiceId: "a",
        explanation: "Deletion vs sanitization.",
        objectiveId: "AP1202-2.9",
        difficulty: "easy",
      },
      {
        id: "ap-data-destruction-q2",
        prompt: "A failed magnetic HDD holds confidential data and cannot complete a logical wipe. Best framing?",
        choices: [
          { id: "a", text: "Approved physical destruction or degaussing with chain of custody — not quick format" },
          { id: "b", text: "Degaussing is unnecessary because the drive already failed" },
          { id: "c", text: "Ship it in open recycling with no record" },
          { id: "d", text: "Drill one hole at home and declare NIST compliance" },
        ],
        correctChoiceId: "a",
        explanation: "Failed HDD path.",
        objectiveId: "AP1202-2.9",
        difficulty: "medium",
      },
      {
        id: "ap-data-destruction-q3",
        prompt: "Why is degaussing inappropriate for an SSD?",
        choices: [
          { id: "a", text: "Degaussing targets magnetic media — flash SSDs are not meaningfully sanitized that way" },
          { id: "b", text: "SSDs are always empty" },
          { id: "c", text: "Degaussing only works on optical discs" },
          { id: "d", text: "SSDs cannot store confidential data" },
        ],
        correctChoiceId: "a",
        explanation: "Media-specific method limits.",
        objectiveId: "AP1202-2.9",
        difficulty: "easy",
      },
      {
        id: "ap-data-destruction-q4",
        prompt: "Cryptographic erase is best described as:",
        choices: [
          { id: "a", text: "Rendering data inaccessible by destroying valid encryption keys — only if encryption covered the data and all key copies are addressed" },
          { id: "b", text: "Deleting icons from the desktop" },
          { id: "c", text: "Degaussing flash chips" },
          { id: "d", text: "Printing a certificate without wiping" },
        ],
        correctChoiceId: "a",
        explanation: "Crypto-erase nuance.",
        objectiveId: "AP1202-2.9",
        difficulty: "medium",
      },
      {
        id: "ap-data-destruction-q5",
        prompt: "A workstation is sanitized locally but files lived in cloud sync. Disposition complete?",
        choices: [
          { id: "a", text: "No — address cloud/backup/shares/access per retention policy; local wipe alone is incomplete" },
          { id: "b", text: "Yes — cloud always empties when a PC is formatted" },
          { id: "c", text: "Yes — OneDrive is immune to retention rules" },
          { id: "d", text: "Yes — ignore shared links" },
        ],
        correctChoiceId: "a",
        explanation: "Cloud implications.",
        objectiveId: "AP1202-2.9",
        difficulty: "easy",
      },
      {
        id: "ap-data-destruction-q6",
        prompt: "Ten drives sent for destruction; certificate lists nine. Best next action?",
        choices: [
          { id: "a", text: "Stop closure, reconcile inventory, contact vendor, escalate the missing asset, preserve records" },
          { id: "b", text: "Close the ticket because certificates are always perfect" },
          { id: "c", text: "Delete the inventory so numbers match" },
          { id: "d", text: "Assume the missing drive self-destructed" },
        ],
        correctChoiceId: "a",
        explanation: "Chain-of-custody failure.",
        objectiveId: "AP1202-2.9",
        difficulty: "medium",
      },
    ],
    questionBank: [
      {
        id: "ap-data-destruction-b1",
        prompt: "Quick format of a confidential HDD is typically:",
        choices: [
          { id: "a", text: "Insufficient as verified sanitization by itself" },
          { id: "b", text: "Identical to incineration" },
          { id: "c", text: "Required before every degauss" },
        ],
        correctChoiceId: "a",
        explanation: "Formatting limits.",
        objectiveId: "AP1202-2.9",
        difficulty: "easy",
      },
      {
        id: "ap-data-destruction-b2",
        prompt: "SSD wear leveling matters for disposal because:",
        choices: [
          { id: "a", text: "Simple file overwrites may not touch every flash location — use supported sanitize/crypto-erase or destroy" },
          { id: "b", text: "SSDs cannot store files" },
          { id: "c", text: "Wear leveling degausses magnetic platters" },
        ],
        correctChoiceId: "a",
        explanation: "SSD vs HDD.",
        objectiveId: "AP1202-2.9",
        difficulty: "medium",
      },
      {
        id: "ap-data-destruction-b3",
        prompt: "Before wiping a device under legal hold:",
        choices: [
          { id: "a", text: "Stop and escalate — do not casually sanitize" },
          { id: "b", text: "Quick format immediately" },
          { id: "c", text: "Donate it first" },
        ],
        correctChoiceId: "a",
        explanation: "Authorization/retention boundary.",
        objectiveId: "AP1202-2.9",
        difficulty: "easy",
      },
      {
        id: "ap-data-destruction-b4",
        prompt: "Leased multifunction printer return should consider:",
        choices: [
          { id: "a", text: "Internal storage, caches, address books, credentials, and vendor sanitization/custody" },
          { id: "b", text: "Only removing the toner cartridge" },
          { id: "c", text: "Degaussing the glass platen" },
        ],
        correctChoiceId: "a",
        explanation: "MFP storage.",
        objectiveId: "AP1202-2.9",
        difficulty: "easy",
      },
      {
        id: "ap-data-destruction-b5",
        prompt: "Paper with printed passwords should be:",
        choices: [
          { id: "a", text: "Securely shredded/disposed per policy — dumpster diving risk" },
          { id: "b", text: "Left in open recycle bins as a courtesy" },
          { id: "c", text: "Photographed into the ticket" },
        ],
        correctChoiceId: "a",
        explanation: "Paper disposal.",
        objectiveId: "AP1202-2.9",
        difficulty: "easy",
      },
      {
        id: "ap-data-destruction-b6",
        prompt: "BYOD phone exit with work profile — preferred disposition framing:",
        choices: [
          { id: "a", text: "Selective work removal + session revoke; full wipe only with separate authority" },
          { id: "b", text: "Always crush the phone" },
          { id: "c", text: "Always degauss the battery" },
        ],
        correctChoiceId: "a",
        explanation: "Links to mobile security ownership.",
        objectiveId: "AP1202-2.9",
        difficulty: "medium",
      },
      {
        id: "ap-data-destruction-b7",
        prompt: "Incineration of electronic media is typically:",
        choices: [
          { id: "a", text: "An approved specialty-facility process — not an ordinary home/classroom task" },
          { id: "b", text: "Recommended in every ticket for USB sticks" },
          { id: "c", text: "How Quick Format works" },
        ],
        correctChoiceId: "a",
        explanation: "Safety boundary.",
        objectiveId: "AP1202-2.9",
        difficulty: "easy",
      },
      {
        id: "ap-data-destruction-b8",
        prompt: "Reassigning a laptop inside the same org usually requires:",
        choices: [
          { id: "a", text: "Sanitize/reimage, remove prior access, verify old data inaccessible, update asset/MDM records" },
          { id: "b", text: "Only changing the wallpaper" },
          { id: "c", text: "Shipping to an unapproved scrap yard with no record" },
        ],
        correctChoiceId: "a",
        explanation: "Reuse path.",
        objectiveId: "AP1202-2.9",
        difficulty: "easy",
      },
      {
        id: "ap-data-destruction-b9",
        prompt: "Optical backup disc with confidential archives — effective approach:",
        choices: [
          { id: "a", text: "Approved physical destruction/shredding per policy — not relying on light scratches" },
          { id: "b", text: "Degaussing the disc" },
          { id: "c", text: "Quick format in Windows Media Player" },
        ],
        correctChoiceId: "a",
        explanation: "Optical media.",
        objectiveId: "AP1202-2.9",
        difficulty: "easy",
      },
      {
        id: "ap-data-destruction-b10",
        prompt: "Which earlier concepts are essential when choosing a data-destruction method?",
        choices: [
          { id: "a", text: "The storage-media type, sensitivity of the data, and whether the device will be reused" },
          { id: "b", text: "Dynamic routing protocol design" },
          { id: "c", text: "Printer fuser maintenance" },
        ],
        correctChoiceId: "a",
        explanation: "Cross-topic referrals.",
        objectiveId: "AP1202-2.9",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-data-destruction-f1",
        front: "Delete = destroy?",
        back: "No — often recoverable",
      },
      {
        id: "ap-data-destruction-f2",
        front: "Degauss SSD?",
        back: "No — magnetic media method",
      },
      {
        id: "ap-data-destruction-f3",
        front: "Crypto-erase needs?",
        back: "Destroy all relevant keys/copies",
      },
      {
        id: "ap-data-destruction-f4",
        front: "Legal hold?",
        back: "Do not wipe — escalate",
      },
      {
        id: "ap-data-destruction-f5",
        front: "Local wipe + cloud sync?",
        back: "Incomplete until cloud/access handled",
      },
      {
        id: "ap-data-destruction-f6",
        front: "Cert says 9 of 10 drives?",
        back: "Stop · reconcile · escalate missing",
      },
      {
        id: "ap-data-destruction-f7",
        front: "MFP return risk?",
        back: "Internal storage/caches/credentials",
      },
    ],
    assignments: [
      {
        id: "ap-lab-media-disposition",
        title: "Media disposition decision lab",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `Fictional assets only. No real wiping, destruction, drilling, shredding, burning, degaussing, or hazardous activity.

For each packet record:
1) Destruction/sanitization authorized? (Y/N + why)
2) Backup/retention prerequisite
3) Appropriate method
4) Ineffective methods
5) Chain-of-custody required?
6) Safety/environmental concern
7) Verification method
8) Cloud/backup/account follow-up
9) Final disposition record fields
10) Escalation owner

Packets:
A) Reassigned HDD laptop — org-owned, confidential, healthy, BitLocker On, backup OK, no legal hold, reuse in-org, Intune enrolled
B) Failed encrypted HDD — confidential, will not complete wipe, no hold, destroy, custody required
C) SSD desktop leaving org (sale) — confidential, healthy, crypto keys in escrow, cloud sync On, no hold
D) Personal BYOD phone — work profile + personal photos, employee exit, selective authority only
E) Org tablet — damaged screen, encrypted, MDM, memory card present, reassign after repair
F) USB with payroll CSV — confidential, unknown encryption, dispose
G) Optical backup disc set — confidential archives, retention expired yesterday
H) Leased MFP — return to lessor next week, internal HDD suspected, address book populated
I) IoT camera — default reset done once; cloud account still active with recordings
J) Cloud-synced workstation — local sanitize done; OneDrive + shared links remain
K) Box of 10 archived tapes — certificate from vendor lists 9 destroyed

Boundaries: never recommend at-home physical destruction; never wipe legal-hold media; distinguish BYOD selective vs full wipe; flag count mismatches.`,
        estimatedMinutes: 35,
        completionCriteria: [
          "Complete all ten fields for packets A–K",
          "Mark legal-hold/ownership constraints correctly where present",
          "Identify ineffective methods (e.g., degauss SSD, quick format confidential)",
          "Escalate packet K count mismatch",
          "No real-world destructive steps",
        ],
        relatedTopicIds: [
          "ap-data-destruction",
          "ap-mobile-security",
          "ap-storage",
          "ap-cloud-productivity",
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
