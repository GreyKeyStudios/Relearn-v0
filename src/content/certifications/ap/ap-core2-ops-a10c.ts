import type { Topic } from "../../types";

const item = (id: string, prompt: string, correct: string, wrong1: string, wrong2: string, difficulty: "easy" | "medium" | "hard" = "medium") => ({
  id, prompt,
  choices: [{ id: "a", text: correct }, { id: "b", text: wrong1 }, { id: "c", text: wrong2 }],
  correctChoiceId: "a", explanation: correct, objectiveId: "AP1202-4.3", difficulty,
});

export const apCore2OpsBatch3Topics: Topic[] = [{
  id: "ap-backup-recovery",
  name: "Workstation Backup & Recovery",
  prerequisites: ["ap-change-management", "ap-storage", "ap-cloud-productivity", "ap-data-destruction"],
  objectives: ["AP1202-4.3"],
  knowledgeNodeId: "storage",
  lesson: {
    title: "Design Backups Around Recoverable Work, Not Successful Copy Jobs",
    content: `A workstation backup is useful only when the right data can be restored within the required time and loss tolerance:

\`identify data and recovery requirements → choose copies, media, location, schedule, retention, and security → run and monitor backups → test restores → respond to failure → restore safely → verify data and business function → document\`

## Requirements first

Inventory local-only files, user profiles, application data, system configuration, encryption/recovery material, databases, virtual machines, email archives, browser data, and cloud-synchronized content. Identify ownership, sensitivity, retention, legal hold, licensing, dependencies, and which data can be rebuilt.

**Recovery point objective (RPO)** expresses the tolerable amount of data loss measured in time. **Recovery time objective (RTO)** expresses the target time to restore service. A four-hour RPO might require backups or replication at least every four hours; a four-hour RTO requires the restore process, people, media, access, and dependencies to finish within the target.

Synchronization is not automatically backup: deletion, corruption, ransomware, or unwanted changes can synchronize. Snapshots and restore points are useful recovery layers but may share the same device or administrative control and are not complete independent backups by themselves.

## Backup methods

**Full:** copies the selected dataset; simplest independent restore, but consumes the most time/storage.

**Incremental:** copies changes since the most recent backup of any type. It is efficient to run; restore commonly needs the last full plus the complete incremental chain.

**Differential:** copies changes since the last full. It grows until the next full; restore commonly needs the last full plus the latest differential.

**Image/bare-metal backup:** captures the system state needed to restore an entire machine where supported. **File-level backup:** restores selected files/folders. **Application-aware backup:** coordinates with applications so active data is captured consistently. **System restore/recovery partition:** useful for certain OS repairs, not a substitute for protected user-data backup.

Choose based on RPO/RTO, dataset size/change rate, bandwidth, restore complexity, retention, cost, platform support, and risk—not on one method being universally “best.”

## Copies, locations, and media

The 3-2-1 idea recommends three copies, on two media or failure domains, with one offsite. Modern plans may add an offline or immutable copy and verified recovery. The principle is separation from the same theft, fire, hardware fault, credential compromise, administrator error, or ransomware event.

Possible targets include external storage, network storage, managed backup service, cloud object storage, tape, or another approved system. A USB drive left connected beside the workstation is vulnerable to the same theft, surge, and malware. Cloud backup still requires access control, encryption, retention, versioning, region/provider risk, bandwidth, and tested export/restore.

## Scheduling, retention, and rotation

Schedules may be continuous, event-driven, daily, weekly, or otherwise policy-based. Retention defines how long recovery points remain; rotation controls media or backup sets. Grandfather-father-son is one example using longer-term monthly, weekly, and daily sets. Retain only as required: too little loses recovery options; too much increases cost, privacy exposure, discovery obligations, and stale sensitive data.

Confirm time, power, network, sleep behavior, free capacity, exclusions, open-file/application support, and user habits. Laptops that are always asleep or off-network may silently miss schedules.

## Security and integrity

Encrypt backups in transit and at rest as policy requires; protect encryption and recovery keys separately. Apply least privilege and separate backup administration from ordinary workstation credentials where possible. Use MFA, protected retention/immutability, monitoring, and deletion controls. Inventory physical media and preserve chain of custody.

Backups can contain malware, secrets, deleted sensitive content, and old vulnerable configurations. Scan or validate through approved processes, restrict access, and choose a recovery point before known compromise. Do not expose real data in training or use consumer accounts for organizational backups without approval.

## Monitor and test

A “success” status proves only what the job measured. Review job completion, warnings, skipped files, capacity, media health, retention, encryption, offsite/offline copy, alert delivery, and trend. Investigate repeated failures rather than clearing alerts.

Test restores regularly at file, application, and system level as required. Use an isolated or safe target, confirm the correct recovery point, validate permissions/ownership, open or checksum representative data, start required applications, measure restore time, and document gaps. Never overwrite the only good production copy merely to test.

## Restore safely

1. Confirm authorization, identity, asset, scope, desired recovery point, and business priority.
2. Preserve current state/evidence where corruption or compromise is possible.
3. Stop or coordinate writes to avoid conflicts.
4. Select a known-good recovery point and verify media/catalog/key access.
5. Restore to an alternate location first when uncertainty or overwrite risk exists.
6. Restore required system, application, configuration, and data in dependency order.
7. Reconcile changes after the selected recovery point.
8. Patch and secure recovered systems; rotate compromised credentials as directed.
9. Verify integrity, permissions, applications, sync, backups, and user workflow.
10. Document data-loss window, source, actions, exceptions, and follow-up.

Do not restore suspected malicious executables, scripts, macros, extensions, or configuration blindly. In ransomware or security incidents, coordinate recovery with incident response so restoration does not reintroduce compromise or destroy evidence.

## Common failures

Job never ran · target full/offline · expired credential/token · laptop asleep · changed path/username · excluded folder · open or locked file · corrupt chain/catalog · missing encryption key · damaged media · bandwidth limit · retention deleted needed point · backup shared the same compromise · sync propagated deletion · restore is incompatible with new hardware/application version.

Respond by protecting remaining copies, recording exact errors/timestamps, isolating cause, avoiding repeated writes to failing media, escalating security or hardware risk, correcting configuration through change control, rerunning appropriately, and testing recovery. Do not claim protection was continuous during a failed interval.

## Verification and documentation

Verify restored item count or representative integrity, timestamps/version where meaningful, ownership/permissions, application consistency, boot and device support for images, user access, synchronization direction, security controls, new backup schedule, RPO/RTO result, and absence of unexpected overwrite.

Document protected scope, exclusions, schedule/method, locations, retention, encryption/key ownership, alerting, last success, last tested restore, recovery result, data-loss window, deviations, media disposition, and responsible owner—never the keys or passwords themselves.

**Practice boundary:** use fictional plans and inert sample files only; never overwrite real data or attach backup media to a suspected compromised system. **Next when authorized:** AP1202-4.4 safety procedures.`,
  },
  lightbulbMoment: "Backup success is an input; restore success is the outcome. A copied file is not protected until the organization can locate, decrypt, restore, validate, and use it within the required loss and time limits.",
  keyFacts: [
    "RPO is tolerable data loss; RTO is target recovery time",
    "Incremental restore needs the full plus the incremental chain",
    "Differential restore commonly needs the full plus latest differential",
    "Sync, snapshots, restore points, and recovery partitions are not complete independent backup strategies",
    "Separate copies from common physical, credential, and ransomware failures",
    "Protect backup encryption keys and administrative access",
    "Test restores and verify business function—not just job status",
  ],
  guidedExample: {
    title: "Recover a designer workstation without overwriting good data",
    steps: [
      "Inventory 600 GB of projects, 40 GB local application catalog, cloud-synced drafts, licenses, and encrypted profile; set 4-hour RPO and 8-hour RTO.",
      "Use daily incrementals plus weekly full, protected offsite versioned copy, separate backup credentials/MFA, and retention matching project policy.",
      "Monitor skipped/open catalog files and laptop connectivity; run quarterly isolated file/application restore tests and annual image recovery exercise.",
      "After accidental deletion, pause sync, verify identity and recovery point, restore to an alternate folder, compare versions and permissions, then reconcile newer work.",
      "Open projects in the application, verify linked assets and licenses, resume sync in the correct direction, confirm the next backup, and record actual RPO/RTO.",
    ],
  },
  commonMistakes: [
    "Calling synchronization a complete backup",
    "Keeping the only backup attached beside the workstation",
    "Choosing a method without RPO/RTO or restore complexity",
    "Ignoring warnings and skipped files in successful jobs",
    "Encrypting backups but losing or co-locating the only key",
    "Testing restore by overwriting the only production copy",
    "Restoring from after known compromise or reintroducing malicious content",
    "Verifying file presence but not permissions, applications, and user workflow",
  ],
  examTraps: [
    "RPO versus RTO",
    "Full versus incremental versus differential restore sets",
    "Sync/snapshot/restore point versus independent backup",
    "3-2-1 and offline/immutable separation",
    "Backup job success versus tested recoverability",
    "Restore to alternate location before overwrite",
    "Security-incident coordination and known-good recovery point",
  ],
  realWorldScenario: "Ransomware encrypts a workstation and its continuously connected USB backup. The organization isolates the endpoint, preserves incident evidence, uses separate backup credentials to locate a protected offsite recovery point from before compromise, reimages from an approved baseline, restores documents without old executables, rotates affected access, validates applications and data, and confirms a new protected backup. The connected USB copy was a copy, but not an independent failure domain.",
  whenThisFails: [
    "If the backup chain, catalog, media, or key is unavailable, protect all remaining copies and escalate before repeated writes or destructive attempts",
    "If compromise may be present, coordinate with incident response and select a known-good recovery point before restoring",
    "If the requested restore could overwrite newer data, restore to an alternate location and obtain an explicit reconciliation decision",
  ],
  teacherReflectionPrompt: "Design and recover a traveling workstation with a 4-hour RPO and 8-hour RTO; explain method, copies, security, monitoring, restore test, overwrite protection, and proof of usable recovery.",
  quiz: [
    item("ap-backup-q1", "What does a four-hour RPO describe?", "The maximum targeted time window of data that may be lost", "The time to replace hardware", "The age of the technician", "easy"),
    item("ap-backup-q2", "Which set normally restores an incremental strategy?", "The latest full plus every subsequent incremental in the chain", "Only the newest incremental", "Any one differential"),
    item("ap-backup-q3", "Why is a synced folder not automatically a backup?", "Deletion, corruption, ransomware, or unwanted changes may synchronize without an independent retained version", "Sync never copies files", "Sync always uses tape"),
    item("ap-backup-q4", "Safest first restore when overwrite risk exists?", "Restore the selected point to an alternate location and validate before reconciliation", "Overwrite production immediately", "Delete all other versions"),
    item("ap-backup-q5", "What best demonstrates backup success?", "A monitored job plus a tested, timely restore with intact data, permissions, applications, and workflow", "A green icon alone", "Owning an external drive", "hard"),
  ],
  questionBank: [
    item("ap-backup-b1", "RTO measures:", "The target time to restore the required service or function", "How much data loss is acceptable", "Media retention age", "easy"),
    item("ap-backup-b2", "Differential restore commonly requires:", "The latest full and latest differential", "Every incremental ever created", "No full backup"),
    item("ap-backup-b3", "Why keep an offline or immutable copy?", "To reduce shared exposure to ransomware, credential compromise, and accidental deletion", "To eliminate restore testing", "To avoid encryption"),
    item("ap-backup-b4", "A backup reports success but skipped an open database. Correct conclusion?", "Protection is incomplete; investigate application-aware capture and test recovery", "All data is protected", "Delete the warning"),
    item("ap-backup-b5", "Backup encryption requires special planning for:", "Key ownership, storage, recovery, rotation, and separation", "Screen brightness", "Printer toner"),
    item("ap-backup-b6", "A laptop misses nightly backups because it sleeps off-network. Best response?", "Adjust approved scheduling/connectivity/power design, alerting, and confirm a successful tested backup", "Mark failures successful", "Disable all sleep permanently without approval"),
    item("ap-backup-b7", "Before restoring after malware, select:", "A recovery point believed clean and coordinate endpoint/account remediation", "The newest infected image", "Random downloaded software", "hard"),
    item("ap-backup-b8", "Retention should balance:", "Recovery/legal needs, cost, privacy exposure, and secure disposition", "Keeping everything forever", "Deleting every prior version"),
  ],
  flashcards: [
    { id: "ap-backup-f1", front: "RPO?", back: "Target maximum data-loss window" },
    { id: "ap-backup-f2", front: "RTO?", back: "Target time to restore required function" },
    { id: "ap-backup-f3", front: "Incremental restore?", back: "Last full plus every later incremental" },
    { id: "ap-backup-f4", front: "Differential restore?", back: "Last full plus latest differential" },
    { id: "ap-backup-f5", front: "3-2-1 purpose?", back: "Separate copies across media/failure domains and offsite risk" },
    { id: "ap-backup-f6", front: "Backup proof?", back: "A tested restore that meets integrity, function, RPO, and RTO needs" },
  ],
  practiceType: ["reading", "quiz", "flashcard"],
  estimatedStudyMinutes: 60,
  difficulty: "medium",
}];
