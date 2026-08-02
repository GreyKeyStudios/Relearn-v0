import type { ExternalResource, Topic } from "../../types";

/**
 * A+ Core 1 Hardware & Network Troubleshooting — A5a (Michael 2026-08-01).
 * power/MB/RAM/CPU (5.1) → storage/RAID (5.2).
 * Stop before display / mobile / network / printer / domain review (A5b/A5c).
 */

const WINDOWS_11_PC_RESOURCE: ExternalResource = {
  id: "windows-11-pc",
  name: "Windows 11 PC",
  url: "https://support.microsoft.com/windows",
  cost: "free",
  platform: "windows",
  installNotes:
    "Use worksheets and fictional cases. Do not open PSU enclosures, continue using smoking/sparking systems, or run destructive disk formats as early troubleshooting. Disconnect power on safety stops and escalate.",
};

/** Shared CompTIA-aligned troubleshooting process (all A5 topics). */
const TS_PROCESS = `**Troubleshooting process (use every ticket).**
1. **Identify** the problem — symptoms, scope, recent changes, safety hazards.
2. **Establish a theory** of probable cause — list layers; pick the most likely *testable* one.
3. **Test the theory** safely — one change at a time; known-good swaps when authorized.
4. **Plan** the fix (or escalate) — parts, data risk, downtime, approval.
5. **Implement** the solution or escalate within authorization.
6. **Verify** full functionality — not only the first symptom gone.
7. **Document** findings, actions, and outcomes.

Reward yourself for the correct **next diagnostic step**, not lucky component guesses.`;

export const apCore1TroubleshootBatch1Topics: Topic[] = [
  {
    id: "ap-ts-power-mb-ram-cpu",
    name: "Troubleshoot Power, Motherboard, RAM & CPU",
    prerequisites: ["ap-virt-cloud-domain-review", "ap-hardware-domain-review"],
    objectives: ["AP1201-5.1"],
    lesson: {
      title: "Diagnose Power, Board, Memory, and Processor Failures",
      content: `This topic applies Hardware knowledge (\`ap-power-supplies\`, \`ap-mb-cpu-cards\`, \`ap-ram\`, cooling/firmware habits) to **layered diagnosis**. You do not memorize “symptom = dead part.”

${TS_PROCESS}

**CF refreshers:** \`cf-motherboard-power-cooling\`, \`cf-cpu-ram-storage\`, \`cf-esd-and-safe-handling\`.

**Layers to consider.** External power → cable → outlet/surge strip → AC adapter (laptops) → battery → PSU → motherboard → CPU → cooling → RAM → expansion cards → firmware/POST → peripherals drawing power.

**Safety-first stop conditions (disconnect, do not continue casual troubleshooting).**
Smoke, sparks, burning smell, liquid exposure, swollen battery, damaged power cable, exposed conductors, suspected internal PSU failure. **Never open a PSU enclosure.** Escalate hazardous units.

**Symptom classes → theories (then test).**

**No lights, fans, or response.** Outlet live? Known-good cable? Laptop brick/LED? PSU rear switch? Front-panel power switch wiring? Motherboard short (standoff, loose screw)? Prove external power before condemning the board.

**Fans/lights but no successful POST.** Unseated/incompatible RAM after upgrade; GPU not seated / no display (prove with known-good display path later in 5.3); CPU cooler not allowing power-on on some boards; clear CMOS only when documented; remove nonessential cards; beep codes / diagnostic LEDs are **model-specific** — read the vendor chart, don’t assume universal beeps.

**Intermittent shutdown / unexpected reboot / freeze under load.** Cooling (dust, paste, fan), PSU wattage/connectors after GPU upgrade, thermal throttle, unstable RAM, failing PSU under load, software/driver (note and bifurcate). Loud fan + heat → cooling path before new motherboard.

**Blank screen during startup.** Distinguishes power-on vs display chain — confirm POST codes/fans first; don’t replace PSU for a dead monitor cable (display topic deepens this).

**Incorrect system time / UEFI settings lost.** CMOS battery (CR2032) aging; firmware reset; power loss to clock circuit — not “Windows is broken” as first theory.

**Memory errors / stop errors that smell hardware.** Run vendor memory diagnostics; reseat/test one stick; watch for heat after upgrade.

**Failure after upgrade.** Compatibility list, seating, required CPU power / PCIe power plugs, BIOS/UEFI version support, capacity, install damage. Change **one** variable; keep the old part for rollback.

**Burning smell / swollen caps / smoke.** Safety stop — power off, disconnect, document, escalate. Do not “smell test” inside a live PSU.

**Evidence (fictional or authorized).** POST messages, model-specific beep/LED charts, firmware hardware inventory, Event Viewer hardware errors, temperature readings, memory test results, PSU wattage labels, CPU support lists. Beep codes are **not** universal.

**Document.** What changed recently, what you tested, results, final fix, parts used, remaining risks.

**What's next.** Storage and RAID troubleshooting — missing disks are not always dead disks.`,
    },
    lightbulbMoment:
      "Prove the power path and the last change before you replace the motherboard — one testable theory at a time.",
    keyFacts: [
      "Follow identify → theory → test → plan → implement/escalate → verify → document",
      "Smoke/smell/sparks/swollen battery = stop, disconnect, escalate — never open a PSU",
      "No power: prove outlet/cable/adapter/PSU before the motherboard",
      "Fans but no POST: RAM seating/compat, cards, firmware — model-specific codes only",
      "Shutdown under load: cooling and PSU capacity rival 'bad motherboard' theories",
      "After upgrades: compatibility, seating, power plugs, firmware — one change at a time",
    ],
    guidedExample: {
      title: "Branching case: no POST after RAM upgrade",
      steps: [
        "Identify: Fans spin; no POST beep/video after dual new DIMMs installed yesterday.",
        "Theory A (most likely): incompatible or unseated RAM / wrong slots.",
        "Plan test: Power down, unplug, ground, reseat; try one known-good original stick in the manual’s primary slot.",
        "Result: POST succeeds with original stick → not motherboard-first.",
        "Next: Test new DIMMs one at a time; check support list/speed; update BIOS if required by vendor.",
        "Verify: Boot OS, run memory diagnostic, confirm capacity in firmware.",
        "Document: Incompatible kit or bad stick ID, tests run, final config, advice to user.",
      ],
    },
    commonMistakes: [
      "Replacing motherboard and PSU together 'to be sure'",
      "Ignoring a burning smell to finish a ticket faster",
      "Assuming beep codes mean the same thing on every brand",
      "Skipping outlet/cable checks on 'dead' towers",
      "Blaming CPU for thermal shutdown without checking cooler seating/dust",
    ],
    examTraps: [
      "Best next check vs final failed part",
      "Safety stop conditions",
      "POST vs no-power layering",
      "Upgrade compatibility and seating",
      "CMOS battery vs 'Windows time server' as first hardware theory for lost settings",
    ],
    realWorldScenario:
      "A CAD workstation reboots under render load after a GPU upgrade. Idle is fine. You check the 8-pin CPU and additional PCIe power plugs, confirm PSU wattage headroom, and reseat the cooler — the board wasn’t bad; the power/cooling path after the upgrade was. One theory tested at a time saved a board RMA.",
    whenThisFails: [
      "If smoke or burning odor is present, stop troubleshooting and escalate hazardous equipment handling",
      "If firmware is locked by MDM/password, gather POST LED evidence and escalate",
      "If multiple theories remain after known-good PSU/RAM tests, escalate board/CPU with documentation",
    ],
    teacherReflectionPrompt:
      "For 'fans spin, no POST' after a memory upgrade, write the first three safe tests in order and what each result would imply.",
    quiz: [
      {
        id: "ap-ts-power-mb-ram-cpu-q1",
        prompt: "You smell burning plastic from a tower that just failed. Best immediate action?",
        choices: [
          { id: "a", text: "Power off, disconnect, do not continue casual internal troubleshooting — escalate safely" },
          { id: "b", text: "Open the PSU and probe capacitors while powered" },
          { id: "c", text: "Install more RAM to compensate" },
          { id: "d", text: "Clear CMOS as the only step while it smokes" },
        ],
        correctChoiceId: "a",
        explanation:
          "Smoke/burning smell is a safety stop — never open a live or suspect PSU.",
        objectiveId: "AP1201-5.1",
        difficulty: "easy",
      },
      {
        id: "ap-ts-power-mb-ram-cpu-q2",
        prompt: "No lights or fans. Which is the best first layer to prove?",
        choices: [
          { id: "a", text: "Outlet / cable / external power path before condemning the motherboard" },
          { id: "b", text: "Reinstall the OS immediately" },
          { id: "c", text: "Replace the CPU cooler paste first always" },
          { id: "d", text: "Disable VT-x in firmware first" },
        ],
        correctChoiceId: "a",
        explanation: "No-power tickets start outside the board.",
        objectiveId: "AP1201-5.1",
        difficulty: "easy",
      },
      {
        id: "ap-ts-power-mb-ram-cpu-q3",
        prompt: "Fans spin after a RAM upgrade but POST never completes. Best next diagnostic step?",
        choices: [
          { id: "a", text: "Power down and test with one known-good module in the correct slot / verify compatibility" },
          { id: "b", text: "Replace the PSU and motherboard together immediately" },
          { id: "c", text: "Format all disks" },
          { id: "d", text: "Assume beep code 3 always means the GPU worldwide" },
        ],
        correctChoiceId: "a",
        explanation: "Test the last change (RAM) with a minimal known-good config.",
        objectiveId: "AP1201-5.1",
        difficulty: "medium",
      },
      {
        id: "ap-ts-power-mb-ram-cpu-q4",
        prompt: "System shuts down only under sustained GPU load after an upgrade. Strong early theories include:",
        choices: [
          { id: "a", text: "PSU capacity/connectors and cooling — not only 'bad motherboard'" },
          { id: "b", text: "Missing screen protector" },
          { id: "c", text: "SaaS license expiry exclusively" },
          { id: "d", text: "Host-only networking mode" },
        ],
        correctChoiceId: "a",
        explanation: "Load failures often track power and thermals after upgrades.",
        objectiveId: "AP1201-5.1",
        difficulty: "medium",
      },
      {
        id: "ap-ts-power-mb-ram-cpu-q5",
        prompt: "UEFI settings and clock reset every cold boot. Best hardware theory to test?",
        choices: [
          { id: "a", text: "CMOS/RTC battery or board power to the clock circuit" },
          { id: "b", text: "Replace all DIMMs without testing" },
          { id: "c", text: "Disable the outlet GFCI permanently" },
          { id: "d", text: "Bridge a lab VM" },
        ],
        correctChoiceId: "a",
        explanation: "Lost firmware settings classically implicate CMOS battery/power.",
        objectiveId: "AP1201-5.1",
        difficulty: "easy",
      },
    ],
    questionBank: [
      {
        id: "ap-ts-power-mb-ram-cpu-b1",
        prompt: "Beep codes should be interpreted using:",
        choices: [
          { id: "a", text: "The manufacturer’s chart for that board/system — not a universal legend" },
          { id: "b", text: "The same meaning on every PC ever made" },
          { id: "c", text: "Toner part numbers" },
        ],
        correctChoiceId: "a",
        explanation: "Codes are model-specific.",
        objectiveId: "AP1201-5.1",
        difficulty: "easy",
      },
      {
        id: "ap-ts-power-mb-ram-cpu-b2",
        prompt: "Best practice when testing theories:",
        choices: [
          { id: "a", text: "Change one variable at a time and note the result" },
          { id: "b", text: "Replace five parts at once to save time" },
          { id: "c", text: "Skip documentation" },
        ],
        correctChoiceId: "a",
        explanation: "One testable change preserves evidence.",
        objectiveId: "AP1201-5.1",
        difficulty: "easy",
      },
      {
        id: "ap-ts-power-mb-ram-cpu-b3",
        prompt: "Laptop shows no charge LED; wall outlet powers a lamp. Next power-path check?",
        choices: [
          { id: "a", text: "Known-good AC adapter / DC jack path before motherboard swap" },
          { id: "b", text: "Reinstall Office" },
          { id: "c", text: "Enable UPnP" },
        ],
        correctChoiceId: "a",
        explanation: "External adapter/jack before board condemnation.",
        objectiveId: "AP1201-5.1",
        difficulty: "medium",
      },
      {
        id: "ap-ts-power-mb-ram-cpu-b4",
        prompt: "Loud fan + thermal shutdown during video calls suggests checking:",
        choices: [
          { id: "a", text: "Cooling path (vents, dust, cooler seating) before new CPU first" },
          { id: "b", text: "Only DNS" },
          { id: "c", text: "Only the digitizer" },
        ],
        correctChoiceId: "a",
        explanation: "Thermals are a primary load-failure layer.",
        objectiveId: "AP1201-5.1",
        difficulty: "easy",
      },
      {
        id: "ap-ts-power-mb-ram-cpu-b5",
        prompt: "After a CPU upgrade that won’t POST, documentation should include:",
        choices: [
          { id: "a", text: "Support-list/BIOS requirement checks and tests performed" },
          { id: "b", text: "Only the user’s password" },
          { id: "c", text: "A joke and no findings" },
        ],
        correctChoiceId: "a",
        explanation: "Document compatibility and test results.",
        objectiveId: "AP1201-5.1",
        difficulty: "easy",
      },
      {
        id: "ap-ts-power-mb-ram-cpu-b6",
        prompt: "Opening a desktop PSU to 'check capacitors' is:",
        choices: [
          { id: "a", text: "Unsafe / out of scope — replace the unit; do not open the enclosure" },
          { id: "b", text: "Required for A+ labs" },
          { id: "c", text: "The first step for lost UEFI time" },
        ],
        correctChoiceId: "a",
        explanation: "PSUs remain sealed units.",
        objectiveId: "AP1201-5.1",
        difficulty: "easy",
      },
      {
        id: "ap-ts-power-mb-ram-cpu-b7",
        prompt: "Verify step after fixing no-POST RAM seating:",
        choices: [
          { id: "a", text: "Confirm POST, boot OS, and memory capacity/diagnostics — not only fans spinning" },
          { id: "b", text: "Leave without testing" },
          { id: "c", text: "Format the SSD immediately" },
        ],
        correctChoiceId: "a",
        explanation: "Verify full functionality.",
        objectiveId: "AP1201-5.1",
        difficulty: "easy",
      },
      {
        id: "ap-ts-power-mb-ram-cpu-b8",
        prompt: "A PC has no power after a component upgrade. Best first troubleshooting sequence?",
        choices: [
          { id: "a", text: "Verify source/switch/cables, PSU and board power connections, then isolate the recent component change safely" },
          { id: "b", text: "Reconfigure the wireless router" },
          { id: "c", text: "Open the power supply enclosure" },
        ],
        correctChoiceId: "a",
        explanation: "Power troubleshooting starts at the source and connections, then narrows the recent hardware change without unsafe PSU work.",
        objectiveId: "AP1201-5.1",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-ts-power-mb-ram-cpu-f1",
        front: "Troubleshooting process?",
        back: "Identify → theory → test → plan → implement/escalate → verify → document",
      },
      {
        id: "ap-ts-power-mb-ram-cpu-f2",
        front: "Smoke/burning smell?",
        back: "Stop, disconnect, escalate — never open the PSU",
      },
      {
        id: "ap-ts-power-mb-ram-cpu-f3",
        front: "No power first prove?",
        back: "Outlet/cable/adapter/PSU path before motherboard",
      },
      {
        id: "ap-ts-power-mb-ram-cpu-f4",
        front: "Fans, no POST after RAM change?",
        back: "Minimal known-good memory config + compatibility",
      },
      {
        id: "ap-ts-power-mb-ram-cpu-f5",
        front: "Beep codes?",
        back: "Model-specific vendor charts only",
      },
      {
        id: "ap-ts-power-mb-ram-cpu-f6",
        front: "Lost UEFI settings often?",
        back: "CMOS/RTC battery or clock power path",
      },
    ],
    assignments: [
      {
        id: "ap-lab-ts-power-decision-tree",
        title: "Power/MB/RAM/CPU decision-tree worksheet",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `Fictional cases — for each: symptom · safety stop? · top theory · safest first check · evidence you’d want · next action if check fails · verify · document one line.

Case A — No power: Tower dark; room outlet powers a lamp; rear PSU switch unknown.
Case B — Failure after upgrade: Dual new DDR5 sticks; fans spin; no POST; old sticks still on desk.
Case C — Intermittent shutdown: Reboots after 10 minutes of rendering; dust in front filter; 650 W PSU; new GPU with 2×8-pin.

Do not open PSUs or work on smoking equipment. Worksheet only.`,
        estimatedMinutes: 18,
        completionCriteria: [
          "Complete Cases A–C with theory, first check, verify, document",
          "Mark safety stop clearly where applicable",
        ],
        relatedTopicIds: [
          "ap-ts-power-mb-ram-cpu",
          "ap-power-supplies",
          "ap-ram",
          "ap-mb-cpu-cards",
        ],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 45,
    difficulty: "medium",
  },

  {
    id: "ap-ts-storage-raid",
    name: "Troubleshoot Storage & RAID",
    prerequisites: ["ap-ts-power-mb-ram-cpu"],
    objectives: ["AP1201-5.2"],
    lesson: {
      title: "Diagnose Drives, Visibility Layers, and RAID States",
      content: `Missing or slow storage is a **layer problem**. Reuse \`ap-storage\` (interfaces, RAID-is-not-backup). Do not format early. Do not assume “not in File Explorer” means the disk is dead.

${TS_PROCESS}

**CF refreshers:** \`cf-cpu-ram-storage\`, \`cf-connection-troubleshooting-basics\` (evidence habit).

**Layers (outside → in).**
1. Physical device (HDD/SATA SSD/NVMe/external)
2. Cable, connector, port, power (SATA power, USB, enclosure)
3. Firmware / RAID controller detection
4. OS disk enumeration (Disk Management, Device Manager, \`Get-Disk\`)
5. Partition / file-system state
6. Mount point / drive letter
7. Permission / BitLocker / encryption state
8. Application or user-data path

**Symptoms → theories (then evidence).**

**Drive not detected / missing boot device.** Cable/power vs NVMe slot vs firmware boot order vs failed device. Clicking/grinding HDD → physical failure risk — limit power-on time; escalate recovery if data matters.

**Seen in firmware, not in File Explorer.** Often uninitialized, no partition, no letter, wrong FS — **not** automatic RMA. Read-only inventory first.

**Slow performance / high disk usage.** Free space critically low, failing HDD, thermal throttle on SSD, background sync, RAID rebuild load — prove with Task Manager + SMART-style health examples before replacing NVMe.

**Read/write errors, corruption, SMART warning.** Back up if still readable; replace failing media; don’t ignore SMART.

**Intermittent disappearance.** Loose cable, failing USB port/enclosure, power-saving USB selective suspend, overheating external drive.

**RAID degraded / failed.** RAID ≠ backup. Degraded may still serve data. Identify the **failed member** from controller docs before pulling a drive. Wrong-drive replacement worsens loss. Rebuilds are risky under load — document, authorize, escalate critical arrays.

**External drive works on PC A not B.** Cable/port/driver/policy vs filesystem the second OS can’t mount — compare layers, don’t format A’s data on B.

**Encryption/permission resembling “disk failure.”** BitLocker unlock, ACL denied folders — OS security layer, not SATA death.

**Data-protection rule before repair.**
- Is there a backup?
- Physical failure symptoms (click, smoke, SMART critical)?
- Will continued use worsen damage?
- Encryption involved?
- Authorized to access the data?
- Escalate to professional recovery?

**Never** recommend destructive initialize/format as an early step when data may exist.

**Evidence (safe/read-only examples).** Firmware drive list, Disk Management, Explorer, Device Manager, \`Get-Disk\` / \`Get-PhysicalDisk\`, SMART status samples, fictional RAID controller UI, capacity/partition tables. Know what each view proves.

**Verify.** After fix: visible capacity, boot if applicable, sample read/write, array status healthy/degraded as expected, user data accessible.

**Document.** Serials, bay IDs, RAID level, tests, whether backup existed, escalation if any.

**What's next (A5b).** Display and mobile troubleshooting — blank screens and portable device faults.`,
    },
    lightbulbMoment:
      "File Explorer is the last layer — prove firmware and Disk Management before you declare a drive dead.",
    keyFacts: [
      "Visibility layers: physical → cable/power → firmware → OS → partition/letter → permissions/encryption",
      "Firmware-visible but Explorer-missing often means init/partition/letter — not failed media",
      "RAID is not a backup; degraded ≠ pull random drives",
      "Clicking HDD + critical data → limit runtime and escalate recovery options",
      "No early destructive format when user data may exist",
      "SMART warnings and rebuilds need documentation and caution",
    ],
    guidedExample: {
      title: "SSD in firmware, missing in Explorer",
      steps: [
        "Identify: New SATA SSD installed; BIOS lists it; File Explorer shows only C:.",
        "Theories: uninitialized / no partition / no letter / FS issue — not 'dead SSD' first.",
        "Evidence: Disk Management / Get-Disk shows Unknown/Not Initialized or Healthy without letter.",
        "Plan: If disk is blank/new and authorized, initialize + create volume + assign letter (destructive only if confirmed empty).",
        "If disk shows existing partitions but no letter → assign letter; if BitLocker → unlock path.",
        "Verify: Explorer shows volume; copy a test file; document size and letter.",
        "Do not format if the volume might hold data you haven’t confirmed.",
      ],
    },
    commonMistakes: [
      "Formatting a 'missing' drive that only lacked a drive letter",
      "Pulling the wrong disk from a degraded RAID",
      "Treating RAID as a backup strategy",
      "Ignoring clicking noises and running chkdsk loops for hours",
      "Assuming encryption lockouts are SATA failures",
    ],
    examTraps: [
      "Best next check for firmware-visible disks",
      "RAID degraded handling and wrong-drive risk",
      "RAID ≠ backup",
      "Data-protection before destructive actions",
      "External drive host-specific failures",
    ],
    realWorldScenario:
      "Accounting’s 'dead USB drive' opens on the manager’s PC. On the clerk’s locked-down laptop, Device Manager shows the disk but Explorer doesn’t — Group Policy hides removable drive letters. A policy/letter layer, not a failed stick. Document and escalate desktop engineering instead of formatting the only copy of invoices.",
    whenThisFails: [
      "If the array holds production data and status is critical, stop DIY rebuilds and escalate storage/backup owners",
      "If clicking + no backup, advise professional recovery options before more power cycles",
      "If BitLocker recovery keys are unavailable, escalate identity/security — don’t 'just format'",
    ],
    teacherReflectionPrompt:
      "List the eight storage visibility layers in order, and state the first read-only check when a new SSD appears in firmware but not in Explorer.",
    quiz: [
      {
        id: "ap-ts-storage-raid-q1",
        prompt: "New SSD appears in firmware but not in File Explorer. Best next evidence source?",
        choices: [
          { id: "a", text: "Disk Management / Get-Disk to see init, partitions, and letters" },
          { id: "b", text: "Immediately low-level format in firmware" },
          { id: "c", text: "Replace the motherboard first" },
          { id: "d", text: "Disable the CMOS battery" },
        ],
        correctChoiceId: "a",
        explanation:
          "OS disk views prove partition/letter state before condemning hardware.",
        objectiveId: "AP1201-5.2",
        difficulty: "easy",
      },
      {
        id: "ap-ts-storage-raid-q2",
        prompt: "RAID array shows degraded. Critical caution?",
        choices: [
          { id: "a", text: "Identify the failed member from documentation — pulling the wrong drive can destroy the array" },
          { id: "b", text: "Pull drives at random until the light goes green" },
          { id: "c", text: "Format all members immediately" },
          { id: "d", text: "RAID degraded always means data is already gone forever" },
        ],
        correctChoiceId: "a",
        explanation: "Wrong-drive replacement worsens RAID loss; RAID ≠ backup.",
        objectiveId: "AP1201-5.2",
        difficulty: "medium",
      },
      {
        id: "ap-ts-storage-raid-q3",
        prompt: "HDD clicks repeatedly and user data is not backed up. Best framing?",
        choices: [
          { id: "a", text: "Limit further power-on; discuss backup/recovery escalation — avoid heavy write tests" },
          { id: "b", text: "Run multiple full formats to 'refresh' platters" },
          { id: "c", text: "Ignore and install more RAM" },
          { id: "d", text: "Bridge the drive into a lab VM" },
        ],
        correctChoiceId: "a",
        explanation: "Physical failure + data risk → protect media and escalate options.",
        objectiveId: "AP1201-5.2",
        difficulty: "medium",
      },
      {
        id: "ap-ts-storage-raid-q4",
        prompt: "Why is 'RAID is not a backup' important during troubleshooting?",
        choices: [
          { id: "a", text: "Arrays can still lose data; backups are a separate recovery strategy" },
          { id: "b", text: "RAID always deletes backups" },
          { id: "c", text: "Backups replace SATA cables" },
          { id: "d", text: "RAID means Explorer cannot show letters" },
        ],
        correctChoiceId: "a",
        explanation: "Fault tolerance ≠ a backup plan.",
        objectiveId: "AP1201-5.2",
        difficulty: "easy",
      },
      {
        id: "ap-ts-storage-raid-q5",
        prompt: "Folder access denied on a healthy NTFS volume most nearly suggests:",
        choices: [
          { id: "a", text: "Permission or encryption/account layer — not automatic disk failure" },
          { id: "b", text: "Dead NVMe controller always" },
          { id: "c", text: "Missing PSU 24-pin" },
          { id: "d", text: "Community cloud membership" },
        ],
        correctChoiceId: "a",
        explanation: "Security layers can mimic 'storage failure' symptoms.",
        objectiveId: "AP1201-5.2",
        difficulty: "easy",
      },
    ],
    questionBank: [
      {
        id: "ap-ts-storage-raid-b1",
        prompt: "Intermittent USB disk disconnects — early checks include:",
        choices: [
          { id: "a", text: "Cable/port/enclosure power and USB power-management settings" },
          { id: "b", text: "Only CPU microcode" },
          { id: "c", text: "Only WPA3 Enterprise" },
        ],
        correctChoiceId: "a",
        explanation: "External storage often fails at cable/power layers.",
        objectiveId: "AP1201-5.2",
        difficulty: "easy",
      },
      {
        id: "ap-ts-storage-raid-b2",
        prompt: "SMART warning on a system disk — prudent next theme?",
        choices: [
          { id: "a", text: "Back up promptly and plan replacement — don’t ignore health alerts" },
          { id: "b", text: "Delete the warning by formatting immediately with no backup" },
          { id: "c", text: "Replace the monitor" },
        ],
        correctChoiceId: "a",
        explanation: "Health warnings are actionable evidence.",
        objectiveId: "AP1201-5.2",
        difficulty: "easy",
      },
      {
        id: "ap-ts-storage-raid-b3",
        prompt: "Boot failure after new NVMe install — layered checks include:",
        choices: [
          { id: "a", text: "Firmware boot order/UEFI mode and whether the OS volume is on the new drive" },
          { id: "b", text: "Only the mouse DPI" },
          { id: "c", text: "Only SaaS status pages" },
        ],
        correctChoiceId: "a",
        explanation: "Boot device selection is a firmware/OS layer.",
        objectiveId: "AP1201-5.2",
        difficulty: "medium",
      },
      {
        id: "ap-ts-storage-raid-b4",
        prompt: "Destructive initialize/format as first step when user data may exist is:",
        choices: [
          { id: "a", text: "Incorrect — gather evidence and protect data first" },
          { id: "b", text: "Always required by A+" },
          { id: "c", text: "Identical to assigning a drive letter" },
        ],
        correctChoiceId: "a",
        explanation: "Data protection before destructive actions.",
        objectiveId: "AP1201-5.2",
        difficulty: "easy",
      },
      {
        id: "ap-ts-storage-raid-b5",
        prompt: "Get-Disk / Disk Management primarily help you see:",
        choices: [
          { id: "a", text: "Whether Windows enumerates the disk and its partition/letter state" },
          { id: "b", text: "Toner levels" },
          { id: "c", text: "BGP tables" },
        ],
        correctChoiceId: "a",
        explanation: "OS enumeration evidence.",
        objectiveId: "AP1201-5.2",
        difficulty: "easy",
      },
      {
        id: "ap-ts-storage-raid-b6",
        prompt: "During RAID rebuild, performance often:",
        choices: [
          { id: "a", text: "Drops while the array reconstructs — expect load and monitor status" },
          { id: "b", text: "Guarantees infinite IOPS" },
          { id: "c", text: "Deletes the need for documentation" },
        ],
        correctChoiceId: "a",
        explanation: "Rebuilds are heavy and risky if another disk fails.",
        objectiveId: "AP1201-5.2",
        difficulty: "medium",
      },
      {
        id: "ap-ts-storage-raid-b7",
        prompt: "Verify after assigning a missing drive letter:",
        choices: [
          { id: "a", text: "Explorer shows the volume and a test file opens" },
          { id: "b", text: "Fans spin only" },
          { id: "c", text: "CMOS battery voltage only" },
        ],
        correctChoiceId: "a",
        explanation: "Verify user-visible functionality.",
        objectiveId: "AP1201-5.2",
        difficulty: "easy",
      },
      {
        id: "ap-ts-storage-raid-b8",
        prompt: "A RAID volume is degraded after one drive fails. Best first action?",
        choices: [
          { id: "a", text: "Confirm the array/drive evidence and backup state, then follow the controller-supported replacement/rebuild procedure" },
          { id: "b", text: "Initialize every member disk" },
          { id: "c", text: "Remove several drives to test them" },
        ],
        correctChoiceId: "a",
        explanation: "Protect data and confirm the failed member before a supported rebuild; initialization or multiple removals can destroy the array.",
        objectiveId: "AP1201-5.2",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-ts-storage-raid-f1",
        front: "Firmware yes, Explorer no?",
        back: "Check Disk Management — init/partition/letter before RMA",
      },
      {
        id: "ap-ts-storage-raid-f2",
        front: "RAID ≠ ?",
        back: "Not a backup",
      },
      {
        id: "ap-ts-storage-raid-f3",
        front: "Degraded array caution?",
        back: "Identify the failed member — don’t pull the wrong drive",
      },
      {
        id: "ap-ts-storage-raid-f4",
        front: "Clicking HDD + no backup?",
        back: "Limit runtime; escalate recovery options",
      },
      {
        id: "ap-ts-storage-raid-f5",
        front: "Early format?",
        back: "Avoid when user data may exist — evidence first",
      },
      {
        id: "ap-ts-storage-raid-f6",
        front: "Storage visibility stack?",
        back: "Physical → cable → firmware → OS → FS/letter → ACL/encryption",
      },
    ],
    assignments: [
      {
        id: "ap-lab-ts-storage-incidents",
        title: "Storage inventory & incident worksheet",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `Part A — Read-only on your practice PC (optional): note disk count from Disk Management or Get-Disk (no format/initialize).

Part B — For each fictional incident: first check · evidence source · risk (data/physical) · next safe step · verify · escalate Y/N

1) New SSD: firmware lists it; Explorer does not.
2) C: at 1% free; system very slow; SMART OK.
3) HDD clicking; payroll folder not backed up.
4) RAID 5 degraded; two amber bay LEDs; docs unclear which disk failed.
5) USB drive opens on PC-A; PC-B shows device but no letter (locked-down laptop).

No destructive disk operations. No real RAID experiments on production arrays.`,
        estimatedMinutes: 20,
        completionCriteria: [
          "Complete five incident rows with escalate decisions",
          "Include data-protection note on cases 3 and 4",
        ],
        relatedTopicIds: ["ap-ts-storage-raid", "ap-storage"],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 45,
    difficulty: "medium",
  },
];
