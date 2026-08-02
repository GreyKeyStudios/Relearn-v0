import type { ExternalResource, Topic } from "../../types";

/**
 * A+ Core 2 Operating Systems — A7b (Michael 2026-08-01).
 * tools (1.4) → CLI (1.5) → settings (1.6).
 * Stop after batch — no macOS/Linux tools, apps/cloud, Security, or CCNA C1.
 */

const WINDOWS_11_PC_RESOURCE: ExternalResource = {
  id: "windows-11-pc",
  name: "Windows 11 PC",
  url: "https://support.microsoft.com/windows",
  cost: "free",
  platform: "windows",
  installNotes:
    "Use a Windows 11 PC you may inspect for read-only tool/CLI/settings inventories. Prefer observation over changes. Do not edit the Registry, initialize disks, disable security, or override organizational policy on managed devices.",
};

export const apCore2OsBatch2Topics: Topic[] = [
  {
    id: "ap-windows-tools",
    name: "Windows Administrative Tools",
    prerequisites: ["ap-windows-editions"],
    objectives: ["AP1202-1.4"],
    lesson: {
      title: "Choose Windows Tools by the Question You Need Answered",
      content: `Windows tools are **evidence instruments**. On A+, you pick the console that answers the ticket question, read safely, change only with a plan, then verify — not hunt icons by memorization.

**Prior topics:** \`ap-windows-editions\` (what SKU/capabilities exist) · \`ap-os-install\` (how the OS got there) · CF \`cf-task-manager-restart-backup\` for Task Manager literacy.

**Tool → question map (core set).**
- **Task Manager** — What is using CPU/RAM/disk/GPU *right now*? Which apps/startup items? End a hung process?
- **Resource Monitor** — Deeper per-process disk/network/handle evidence when Task Manager is too coarse.
- **Performance Monitor** — Counters/trends over time (not just a snapshot).
- **Event Viewer** — What did Windows/apps *log* (errors, warnings, audits)?
- **Reliability Monitor** — Stability timeline after updates/installs (companion to events, not a replacement).
- **Device Manager** — Device status, drivers, hardware IDs, disable/enable devices.
- **Disk Management** — Disk online/offline, partitions, volumes, letters, initialize/format (high risk).
- **Services** — Which background services run, start type, dependencies.
- **Task Scheduler** — Time/trigger-based automation (not the same as Services).
- **System Configuration (msconfig)** — Boot/startup troubleshooting options (use carefully).
- **System Information (msinfo32)** — Inventory snapshot (hardware, components, software environment).
- **Computer Management** — MMC hub (local users/groups, Event Viewer, Disk Management, Services, etc.).
- **Local Users and Groups** — Local accounts/groups (Pro+; not always present/editable on Home / managed devices).
- **Group Policy** concepts — Local vs org-managed policy; do not fight MDM/domain policy.
- **Registry Editor** — Low-level config store; last resort with backup/recovery plan — prefer Settings/policy/app UI.
- **Certificates** / **Component Services** — Recognize when cert or COM/+ config is the layer; escalate deep changes.
- **Windows Memory Diagnostic** — Memory test path for instability suspicion.
- **System Restore** — Rollback selected system files/settings to a restore point — **not** a full user-data backup.
- **Windows Recovery Environment (WinRE)** — Repair/recover when the OS won’t boot normally.
- **Windows Tools / Administrative Tools** + **MMC** — Collections/host for snap-ins.

**Key distinctions.**
Task Manager = now; Resource Monitor = deeper now; PerfMon = trends. Event Viewer = logs; Reliability = timeline of crashes/updates. Device Manager = devices/drivers; Disk Management = disks/volumes. Services = always-on components; Task Scheduler = triggered jobs. System Information = inventory; System Configuration = boot/startup tweaks. System Restore ≠ backup image.

**Safe-use rules.**
Observe → record original state → least privilege → change only what the evidence justifies → verify → document. Do **not** disable random services for “speed,” edit Registry without a recovery path, initialize/format disks casually, yank drivers without a plan, or override org policy.

**What's next.** Command-line tools — focused diagnostics when a console isn’t enough or you need scriptable checks.`,
    },
    lightbulbMoment:
      "Pick the tool for the question — Task Manager for 'now,' Event Viewer for 'what logged,' Disk Management for volumes — then observe before you change.",
    keyFacts: [
      "Task Manager = live resource/process view; Resource Monitor goes deeper",
      "Event Viewer = logs; Reliability Monitor = stability timeline",
      "Device Manager = drivers/devices; Disk Management = disks/volumes",
      "Services ≠ Task Scheduler",
      "System Restore is not a full backup",
      "Registry edits need justification and recovery — prefer supported UI/policy",
      "Record original state; verify after changes; respect org policy",
    ],
    guidedExample: {
      title: "Nine tool-selection tickets",
      steps: [
        "App crashes repeatedly → Reliability timeline + Event Viewer Application log → then Task Manager for hung leftovers.",
        "Yellow bang on a device → Device Manager status/driver details before Disk Management.",
        "Disk shows in BIOS but no usable volume → Disk Management (online/initialize/partition) with backup/authorization.",
        "Slow startup → Task Manager Startup + Services start types + recent Reliability changes.",
        "Service won’t start → Services dependencies + Event Viewer System log.",
        "Scheduled job missed → Task Scheduler history/triggers (not Services).",
        "Unstable after update → Reliability Monitor + Event Viewer; consider restore point only with data awareness.",
        "Who has local admin? → Local Users and Groups / Computer Management (edition/policy permitting).",
        "Intermittent spikes → Resource Monitor / PerfMon trends, not only a single Task Manager glance.",
      ],
    },
    commonMistakes: [
      "Disabling unfamiliar services to 'speed up' Windows",
      "Editing the Registry as step one",
      "Using Disk Management when the issue is a driver (Device Manager)",
      "Treating System Restore as a substitute for user-data backup",
      "Fighting Group Policy / MDM with local hacks",
    ],
    examTraps: [
      "Best first tool for a symptom",
      "Task Manager vs Resource Monitor vs PerfMon",
      "Event Viewer vs Reliability Monitor",
      "Device Manager vs Disk Management",
      "System Restore vs full backup / WinRE roles",
    ],
    realWorldScenario:
      "Finance says Excel 'just closes.' Task Manager shows nothing useful after the fact. Reliability Monitor shows crashes starting after yesterday’s Office update; Event Viewer names a faulting module. You roll forward with repair/update guidance — not a Registry clean-up ritual.",
    whenThisFails: [
      "If Disk Management would destroy data, stop for backup/authorization",
      "If Registry change is proposed without a restore plan, refuse and escalate",
      "If settings/tools are grayed out by policy, escalate to device admins — don’t bypass",
    ],
    teacherReflectionPrompt:
      "For 'startup is slow' versus 'disk has no drive letter,' name the best first tool and one piece of evidence you want from each.",
    quiz: [
      {
        id: "ap-windows-tools-q1",
        prompt: "A device shows a warning icon and a specialty scanner stopped working. Best first tool?",
        choices: [
          { id: "a", text: "Device Manager — inspect device status and driver state" },
          { id: "b", text: "Disk Management — delete the scanner’s partition" },
          { id: "c", text: "Registry Editor — delete HKLM blindly" },
          { id: "d", text: "Task Scheduler — create a reboot loop" },
        ],
        correctChoiceId: "a",
        explanation: "Device warnings are a Device Manager problem first.",
        objectiveId: "AP1202-1.4",
        difficulty: "easy",
      },
      {
        id: "ap-windows-tools-q2",
        prompt: "You need deeper live disk/network activity per process after Task Manager shows high disk use. Best next tool?",
        choices: [
          { id: "a", text: "Resource Monitor" },
          { id: "b", text: "Paint" },
          { id: "c", text: "Disk Management format wizard as step one" },
          { id: "d", text: "Local Users and Groups only" },
        ],
        correctChoiceId: "a",
        explanation: "Resource Monitor deepens live resource evidence.",
        objectiveId: "AP1202-1.4",
        difficulty: "medium",
      },
      {
        id: "ap-windows-tools-q3",
        prompt: "System Restore is best described as:",
        choices: [
          { id: "a", text: "Rolling back selected system files/settings to a restore point — not a full user-data backup" },
          { id: "b", text: "A complete image backup of every user file always" },
          { id: "c", text: "A Disk Management format shortcut" },
          { id: "d", text: "Identical to Event Viewer" },
        ],
        correctChoiceId: "a",
        explanation: "Restore ≠ backup of user data.",
        objectiveId: "AP1202-1.4",
        difficulty: "easy",
      },
      {
        id: "ap-windows-tools-q4",
        prompt: "A nightly report never appears. The job is time-triggered. Best tool?",
        choices: [
          { id: "a", text: "Task Scheduler — inspect triggers, history, and last run result" },
          { id: "b", text: "Device Manager — disable the GPU" },
          { id: "c", text: "System Information — only the BIOS date" },
          { id: "d", text: "Windows Memory Diagnostic as the only step" },
        ],
        correctChoiceId: "a",
        explanation: "Scheduled work belongs in Task Scheduler, not Services alone.",
        objectiveId: "AP1202-1.4",
        difficulty: "medium",
      },
      {
        id: "ap-windows-tools-q5",
        prompt: "Safest first habit before changing Services or Registry?",
        choices: [
          { id: "a", text: "Observe evidence and record the original state; change only with a justified plan and recovery path" },
          { id: "b", text: "Disable every Automatic service" },
          { id: "c", text: "Delete unknown Registry keys quickly" },
          { id: "d", text: "Initialize all disks" },
        ],
        correctChoiceId: "a",
        explanation: "Observe → record → plan → change → verify.",
        objectiveId: "AP1202-1.4",
        difficulty: "easy",
      },
    ],
    questionBank: [
      {
        id: "ap-windows-tools-b1",
        prompt: "Event Viewer primarily provides:",
        choices: [
          { id: "a", text: "Logged system/application/security events" },
          { id: "b", text: "Live GPU frame times only" },
          { id: "c", text: "Partition formatting wizards" },
        ],
        correctChoiceId: "a",
        explanation: "Logs live in Event Viewer.",
        objectiveId: "AP1202-1.4",
        difficulty: "easy",
      },
      {
        id: "ap-windows-tools-b2",
        prompt: "Reliability Monitor helps answer:",
        choices: [
          { id: "a", text: "When stability changed relative to installs/updates/crashes" },
          { id: "b", text: "Only current CPU percentage" },
          { id: "c", text: "Which Ethernet standard is Cat6" },
        ],
        correctChoiceId: "a",
        explanation: "Reliability is a timeline tool.",
        objectiveId: "AP1202-1.4",
        difficulty: "easy",
      },
      {
        id: "ap-windows-tools-b3",
        prompt: "Disk Management is the right class of tool when:",
        choices: [
          { id: "a", text: "You must inspect/online disks, volumes, and letters (with authorization)" },
          { id: "b", text: "You only need to end one hung Notepad process" },
          { id: "c", text: "You want wallpaper settings" },
        ],
        correctChoiceId: "a",
        explanation: "Disks/volumes ≠ processes.",
        objectiveId: "AP1202-1.4",
        difficulty: "easy",
      },
      {
        id: "ap-windows-tools-b4",
        prompt: "msinfo32 (System Information) is best for:",
        choices: [
          { id: "a", text: "A read-only inventory of system/hardware/software environment" },
          { id: "b", text: "Formatting C:" },
          { id: "c", text: "Bypassing Group Policy" },
        ],
        correctChoiceId: "a",
        explanation: "Inventory snapshot tool.",
        objectiveId: "AP1202-1.4",
        difficulty: "easy",
      },
      {
        id: "ap-windows-tools-b5",
        prompt: "Local policy edits on a domain/MDM device:",
        choices: [
          { id: "a", text: "May be overwritten or blocked — escalate rather than fight management" },
          { id: "b", text: "Always override corporate policy" },
          { id: "c", text: "Are required before every ping" },
        ],
        correctChoiceId: "a",
        explanation: "Org policy wins; don’t bypass.",
        objectiveId: "AP1202-1.4",
        difficulty: "medium",
      },
      {
        id: "ap-windows-tools-b6",
        prompt: "WinRE is used when:",
        choices: [
          { id: "a", text: "The OS needs recovery/repair paths outside a normal desktop session" },
          { id: "b", text: "You only want to change mouse speed" },
          { id: "c", text: "You need a Bluetooth pair dialog" },
        ],
        correctChoiceId: "a",
        explanation: "Recovery Environment for boot/repair scenarios.",
        objectiveId: "AP1202-1.4",
        difficulty: "easy",
      },
      {
        id: "ap-windows-tools-b7",
        prompt: "Performance Monitor differs from Task Manager because it:",
        choices: [
          { id: "a", text: "Can track counters/trends over time, not only a live snapshot" },
          { id: "b", text: "Only lists printers" },
          { id: "c", text: "Formats GPT disks automatically" },
        ],
        correctChoiceId: "a",
        explanation: "PerfMon = trends/counters.",
        objectiveId: "AP1202-1.4",
        difficulty: "medium",
      },
      {
        id: "ap-windows-tools-b8",
        prompt: "Registry Editor risk posture:",
        choices: [
          { id: "a", text: "Last-resort with plan/backup — prefer Settings, apps, or policy" },
          { id: "b", text: "First tool for every ticket" },
          { id: "c", text: "Safer than Task Manager always" },
        ],
        correctChoiceId: "a",
        explanation: "Registry is powerful and dangerous.",
        objectiveId: "AP1202-1.4",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-windows-tools-f1",
        front: "Yellow bang on device?",
        back: "Device Manager first",
      },
      {
        id: "ap-windows-tools-f2",
        front: "Task Manager vs Resource Monitor?",
        back: "Snapshot vs deeper live resource detail",
      },
      {
        id: "ap-windows-tools-f3",
        front: "Event Viewer vs Reliability?",
        back: "Logs vs stability timeline",
      },
      {
        id: "ap-windows-tools-f4",
        front: "Services vs Task Scheduler?",
        back: "Background services vs triggered tasks",
      },
      {
        id: "ap-windows-tools-f5",
        front: "System Restore = backup?",
        back: "No — not a full user-data backup",
      },
      {
        id: "ap-windows-tools-f6",
        front: "Before Registry change?",
        back: "Justify, record state, have recovery path",
      },
    ],
    assignments: [
      {
        id: "ap-lab-windows-tools-investigate",
        title: "Windows tools investigation (read-only)",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `Read-only / fictional evidence preferred. For each ticket, record: best first tool · evidence to inspect · safe next action · verification · escalation boundary.

Tickets:
1) App repeatedly crashes after yesterday’s update
2) USB NIC has a warning icon
3) Second disk online but no drive letter
4) Startup feels slow; many Startup apps
5) Print spooler service won’t stay running
6) Nightly export task didn’t run
7) Intermittent CPU spikes
8) Manager asks who is in local Administrators

Optional on a practice PC (observe only): open Task Manager, note top CPU process; open System Information and note OS name; do not edit Registry, Services, or disks.`,
        estimatedMinutes: 22,
        completionCriteria: [
          "Complete tool/evidence/action tables for all eight tickets",
          "Include one observation-only note from Task Manager or System Information (or mark N/A if no PC)",
        ],
        relatedTopicIds: ["ap-windows-tools"],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 50,
    difficulty: "medium",
  },

  {
    id: "ap-windows-cli",
    name: "Windows Command-Line Tools",
    prerequisites: ["ap-windows-tools"],
    objectives: ["AP1202-1.5"],
    lesson: {
      title: "Use Windows Commands for Focused Diagnostics",
      content: `The command line answers **precise questions** quickly. On A+, you choose a command for its purpose, prefer read-only inspection, interpret output, and elevate only when required — not paste dangerous one-liners from memory.

**Prior topics:** \`ap-windows-tools\` for GUI counterparts · Core 1 \`ap-network-tools\` for network command evidence (reuse, don’t relearn ports) · \`ap-windows-editions\` for privilege/edition context.

**Navigation & files (patterns, not a wall).**
\`dir\` / \`cd\` / \`md\`|\`mkdir\` / \`rd\`|\`rmdir\` / \`copy\` / \`xcopy\` / \`robocopy\` / \`move\` / \`del\` / \`type\` / \`cls\` / \`help\` — move, list, and copy with path awareness. **\`robocopy /MIR\` can delete** extras on the destination — treat as destructive. Wildcards with \`del\`/\`rd\` need confirmation of the working directory.

**Identity & inventory.**
\`hostname\` · \`whoami\` (user/privilege context) · \`systeminfo\` · \`winver\` (version dialog) · launch \`msinfo32\` when a GUI inventory helps.

**Process control.**
\`tasklist\` → find PID · \`taskkill\` ends processes (can lose work; need justification). \`shutdown\` restarts/powers down — warn users and save work.

**Repair / integrity (elevated, planned).**
\`sfc\` (system file checker) · \`dism\` (image servicing; often pairs with sfc workflows) · \`chkdsk\` (volume health; may need schedule/reboot; can be long). Don’t run repair tools as superstition — tie them to symptoms and backups when disk risk exists.

**Policy results.**
\`gpupdate\` refreshes policy · \`gpresult\` shows applied Resultant Set of Policy — useful when “setting won’t stick” on managed PCs.

**Disk commands (high risk).**
\`diskpart\` · \`format\` · \`label\` · \`vol\` · \`mountvol\` · \`fsutil\` (when required). **Inspect first** (\`list disk\` / \`vol\`). Never \`clean\`/\`format\` without authorization, backup, and confirmed disk number.

**Networking (reuse Core 1).**
\`ipconfig\` / \`ipconfig /all\` · \`ping\` · \`tracert\` · \`pathping\` · \`nslookup\` · \`netstat\` · \`arp\` · \`route\` · \`net\` / \`net use\` — same evidence limits as \`ap-network-tools\` (ping ≠ whole app works; no public scanning). Prefer fictional/local names in labs.

**Command habit.**
1. State the question.  
2. Pick the least-destructive command.  
3. Confirm path/disk/target.  
4. Note privilege need.  
5. Interpret output (what it proves / doesn’t).  
6. Document.  
7. Escalate destructive or unclear ownership cases.

**What's next.** Windows Settings and Control Panel — user-facing configuration when a GUI setting is the right lever.`,
    },
    lightbulbMoment:
      "CLI skill is choosing the smallest safe command that answers the question — then reading the output before you change anything.",
    keyFacts: [
      "whoami/hostname/systeminfo establish context before changes",
      "tasklist → taskkill only with a justified target PID",
      "sfc/dism/chkdsk are planned repair tools, not first superstition",
      "gpresult explains applied policy when settings won’t stick",
      "diskpart/format are destructive — confirm disk identity",
      "robocopy /MIR can delete destination files",
      "Network commands reuse Core 1 evidence rules",
    ],
    guidedExample: {
      title: "Eight CLI interpretation tickets",
      steps: [
        "whoami shows not elevated → explain why diskpart failed; re-run elevated only if authorized.",
        "systeminfo OS name/architecture mismatch with vendor app → compatibility, not a random sfc.",
        "sfc finds integrity violations → plan DISM/sfc workflow; don’t ignore backup on failing disks.",
        "chkdsk reports dirty volume → schedule repair with user warning about reboot/time.",
        "tasklist finds hung app PID → taskkill that PID after save warning.",
        "gpresult shows policy disabling a setting → escalate; don’t fight with Registry.",
        "ipconfig /all shows APIPA → reuse network troubleshooting (DHCP), not format C:.",
        "nslookup fails while ping by IP works → DNS path (Core 1 referral).",
      ],
    },
    commonMistakes: [
      "Running diskpart clean on the wrong disk number",
      "Using robocopy /MIR without understanding mirror deletes",
      "taskkill on critical system processes casually",
      "Assuming ping success means the business app works",
      "Ignoring that gpresult points to org policy ownership",
    ],
    examTraps: [
      "Best command for identity vs inventory vs repair",
      "Destructive vs read-only commands",
      "gpupdate vs gpresult roles",
      "diskpart confirmation habits",
      "Network command evidence limits (Core 1)",
    ],
    realWorldScenario:
      "A tech pastes a blog’s diskpart script and cleans Disk 0 instead of the USB. The lesson is procedural: \`list disk\`, match size, get authorization, then act — CLI speed never excuses wrong-target destruction.",
    whenThisFails: [
      "If disk identity is ambiguous, stop and map sizes/serials in Disk Management / list disk",
      "If elevation is denied by policy, escalate — don’t bypass UAC creatively",
      "If repair tools keep failing on a dying disk, prioritize data recovery escalation",
    ],
    teacherReflectionPrompt:
      "List three read-only commands you would run before any diskpart or format action, and what each proves.",
    quiz: [
      {
        id: "ap-windows-cli-q1",
        prompt: "Best first command to confirm the signed-in identity and elevation context?",
        choices: [
          { id: "a", text: "whoami" },
          { id: "b", text: "format C:" },
          { id: "c", text: "diskpart clean" },
          { id: "d", text: "del /s /q C:\\Windows" },
        ],
        correctChoiceId: "a",
        explanation: "whoami establishes user/privilege context safely.",
        objectiveId: "AP1202-1.5",
        difficulty: "easy",
      },
      {
        id: "ap-windows-cli-q2",
        prompt: "A setting keeps reverting on a domain PC. Which command helps show applied Group Policy results?",
        choices: [
          { id: "a", text: "gpresult" },
          { id: "b", text: "cls" },
          { id: "c", text: "mkdir policy" },
          { id: "d", text: "robocopy /MIR C:\\ D:\\" },
        ],
        correctChoiceId: "a",
        explanation: "gpresult reports resultant policy; gpupdate refreshes.",
        objectiveId: "AP1202-1.5",
        difficulty: "medium",
      },
      {
        id: "ap-windows-cli-q3",
        prompt: "Why is robocopy /MIR considered high risk?",
        choices: [
          { id: "a", text: "It can delete files on the destination that aren’t in the source (mirror)" },
          { id: "b", text: "It only prints the hostname" },
          { id: "c", text: "It cannot copy any files" },
          { id: "d", text: "It disables TPM automatically" },
        ],
        correctChoiceId: "a",
        explanation: "Mirror mode removes extras on the target.",
        objectiveId: "AP1202-1.5",
        difficulty: "medium",
      },
      {
        id: "ap-windows-cli-q4",
        prompt: "Before diskpart destructive actions, you should:",
        choices: [
          { id: "a", text: "Confirm authorization, backups, and the exact disk number/size" },
          { id: "b", text: "Run clean on every disk to be thorough" },
          { id: "c", text: "Disable Event Viewer first" },
          { id: "d", text: "Skip list disk because numbers never change" },
        ],
        correctChoiceId: "a",
        explanation: "Wrong-disk destruction is a top CLI failure mode.",
        objectiveId: "AP1202-1.5",
        difficulty: "easy",
      },
      {
        id: "ap-windows-cli-q5",
        prompt: "ping succeeds to a public IP but the website name fails. Best CLI focus next?",
        choices: [
          { id: "a", text: "nslookup / DNS investigation (reuse Core 1 network reasoning)" },
          { id: "b", text: "format the EFI partition" },
          { id: "c", text: "taskkill csrss.exe" },
          { id: "d", text: "diskpart clean all" },
        ],
        correctChoiceId: "a",
        explanation: "Name failure with IP success points at DNS/name resolution.",
        objectiveId: "AP1202-1.5",
        difficulty: "medium",
      },
    ],
    questionBank: [
      {
        id: "ap-windows-cli-b1",
        prompt: "systeminfo is primarily used to:",
        choices: [
          { id: "a", text: "Inventory OS/hardware details from the command line" },
          { id: "b", text: "Format removable media" },
          { id: "c", text: "Delete user profiles" },
        ],
        correctChoiceId: "a",
        explanation: "Inventory command.",
        objectiveId: "AP1202-1.5",
        difficulty: "easy",
      },
      {
        id: "ap-windows-cli-b2",
        prompt: "tasklist helps you:",
        choices: [
          { id: "a", text: "Identify running processes and PIDs before taskkill" },
          { id: "b", text: "Create GPT partitions" },
          { id: "c", text: "Refresh Group Policy only" },
        ],
        correctChoiceId: "a",
        explanation: "List before kill.",
        objectiveId: "AP1202-1.5",
        difficulty: "easy",
      },
      {
        id: "ap-windows-cli-b3",
        prompt: "sfc is associated with:",
        choices: [
          { id: "a", text: "Checking/repairing protected system files" },
          { id: "b", text: "Mapping network drives only" },
          { id: "c", text: "Changing wallpapers" },
        ],
        correctChoiceId: "a",
        explanation: "System File Checker.",
        objectiveId: "AP1202-1.5",
        difficulty: "easy",
      },
      {
        id: "ap-windows-cli-b4",
        prompt: "gpupdate is used to:",
        choices: [
          { id: "a", text: "Refresh Group Policy on the computer/user" },
          { id: "b", text: "List disks in diskpart" },
          { id: "c", text: "Show ARP cache only" },
        ],
        correctChoiceId: "a",
        explanation: "Update/refresh policy.",
        objectiveId: "AP1202-1.5",
        difficulty: "easy",
      },
      {
        id: "ap-windows-cli-b5",
        prompt: "chkdsk risk/operational note:",
        choices: [
          { id: "a", text: "May require scheduling/reboot and time — warn the user; protect data on failing disks" },
          { id: "b", text: "Always finishes in one second with zero risk" },
          { id: "c", text: "Deletes Group Policy permanently" },
        ],
        correctChoiceId: "a",
        explanation: "Plan chkdsk; don’t surprise users.",
        objectiveId: "AP1202-1.5",
        difficulty: "medium",
      },
      {
        id: "ap-windows-cli-b6",
        prompt: "net use commonly relates to:",
        choices: [
          { id: "a", text: "Connecting or viewing network resource mappings" },
          { id: "b", text: "Secure Boot keys" },
          { id: "c", text: "TPM manufacturer IDs only" },
        ],
        correctChoiceId: "a",
        explanation: "Network resource connections.",
        objectiveId: "AP1202-1.5",
        difficulty: "easy",
      },
      {
        id: "ap-windows-cli-b7",
        prompt: "Safe lab practice for networking commands:",
        choices: [
          { id: "a", text: "Use local/fictional targets; no unauthorized public scanning" },
          { id: "b", text: "Port-scan the internet for practice" },
          { id: "c", text: "Always ping broadcast storms first" },
        ],
        correctChoiceId: "a",
        explanation: "Same authorization rules as Core 1.",
        objectiveId: "AP1202-1.5",
        difficulty: "easy",
      },
      {
        id: "ap-windows-cli-b8",
        prompt: "dism in repair workflows often:",
        choices: [
          { id: "a", text: "Services the Windows image — commonly paired with sfc plans when component store issues exist" },
          { id: "b", text: "Only changes mouse acceleration" },
          { id: "c", text: "Replaces nslookup" },
        ],
        correctChoiceId: "a",
        explanation: "DISM image servicing alongside sfc scenarios.",
        objectiveId: "AP1202-1.5",
        difficulty: "medium",
      },
    ],
    flashcards: [
      {
        id: "ap-windows-cli-f1",
        front: "whoami proves?",
        back: "Current user / privilege context",
      },
      {
        id: "ap-windows-cli-f2",
        front: "gpresult vs gpupdate?",
        back: "Show applied policy vs refresh policy",
      },
      {
        id: "ap-windows-cli-f3",
        front: "robocopy /MIR risk?",
        back: "Can delete extras on destination",
      },
      {
        id: "ap-windows-cli-f4",
        front: "Before diskpart clean?",
        back: "Auth + backup + confirm disk number/size",
      },
      {
        id: "ap-windows-cli-f5",
        front: "tasklist then?",
        back: "Identify PID before taskkill",
      },
      {
        id: "ap-windows-cli-f6",
        front: "IP works, name fails?",
        back: "DNS/nslookup path (Core 1)",
      },
    ],
    assignments: [
      {
        id: "ap-lab-windows-cli-readonly",
        title: "Read-only Windows CLI worksheet",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `Part A — On a practice Windows PC you may use (or fill from fictional sample output), run ONLY read-only commands and record one line of meaning for each:
whoami
hostname
systeminfo (note OS name + architecture only)
tasklist (note one user app PID)
ipconfig /all (note DHCP/IP/GW/DNS — no secrets)
nslookup example.test (or a fictional/local name your lab allows)
dir (current folder listing)

Part B — Interpretation (no commands required): given fictional snippets, identify architecture/version, privilege context, failed sfc message, chkdsk dirty state, PID to kill carefully, gpresult policy block, robocopy /MIR risk, APIPA vs valid DHCP.

Do NOT run diskpart, format, del with wildcards, robocopy /MIR, or shutdown for this lab.`,
        estimatedMinutes: 20,
        completionCriteria: [
          "Complete Part A read-only outputs (or N/A with fictional substitutes)",
          "Complete Part B interpretation answers for all snippets",
        ],
        relatedTopicIds: ["ap-windows-cli", "ap-windows-tools"],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 50,
    difficulty: "medium",
  },

  {
    id: "ap-windows-settings",
    name: "Windows Settings & Configuration",
    prerequisites: ["ap-windows-cli"],
    objectives: ["AP1202-1.6"],
    lesson: {
      title: "Configure Windows Through Settings With Policy Awareness",
      content: `Windows Settings (and remaining Control Panel applets) are **supported user-facing levers**. On A+, you locate the right area for the outcome, check permissions/policy, change the minimum justified setting, verify, and document — without disabling security or fighting management.

**Prior topics:** \`ap-windows-tools\` / \`ap-windows-cli\` when a console or command is better · \`ap-windows-editions\` for feature availability · CF \`cf-settings-updates-accounts\`.

**Settings categories (Windows 11 primary).**
System · Bluetooth & devices · Network & internet · Personalization · Apps · Accounts · Time & language · Gaming (when required) · Accessibility · Privacy & security · Windows Update.

**Still-common Control Panel / legacy surfaces.**
Programs and Features · Network and Sharing Center · User Accounts · Power Options · Devices and Printers · Sound · File Explorer Options · Internet Options (when still required) · Credential Manager · Mail profiles (when required) · Date and Time · Region · Windows Defender Firewall · BitLocker UI (edition-supported) · System properties / Advanced system settings.

**Outcome → area examples.**
Default apps → Apps / Default apps. Notifications → System. Sleep timers → Power & battery / Power Options. Bluetooth pair/remove → Bluetooth & devices. Microphone blocked → Privacy. Wrong proxy/VPN → Network & internet. Update paused → Windows Update. Startup apps → Apps / Startup (or Task Manager Startup). Time zone → Time & language. Network profile (public/private) → Network properties. Accessibility needs → Accessibility.

**Settings vs other surfaces.**
Use **Settings/Control Panel** for user configuration. Use **Device Manager** for driver device state. Use **Services** for service start failures. Use **Group Policy / MDM** when controls are managed. Use **CLI** for scripted inventory/repair. Use **app settings** when the toggle lives inside the application. Not every edition, account type, or managed device exposes every control.

**Managed-device boundaries.**
Grayed-out or missing settings may be intentional policy. Admin rights ≠ authorization to bypass security, firewall, updates, antivirus, encryption, or MDM. Escalate blocked-by-policy tickets to device owners with evidence (\`gpresult\` from CLI topic helps).

**Safe change habit.**
1. Confirm the user outcome.  
2. Locate Settings vs better tool.  
3. Check permission/policy.  
4. Record original value.  
5. Apply least change.  
6. Verify the user outcome.  
7. Document.  
8. Never “fix” by disabling firewall/updates/AV/BitLocker without authorized change control.

**What's next (later batches).** Windows client networking depth, then macOS/Linux tools and app/cloud productivity — not in A7b.`,
    },
    lightbulbMoment:
      "Settings tickets are outcome tickets — find the category that owns the behavior, check policy, change the least, then verify with the user.",
    keyFacts: [
      "Windows 11 Settings categories cover most user configuration outcomes",
      "Control Panel applets still appear for some legacy tasks",
      "Default apps, startup, privacy, power, and update issues are Settings-first",
      "Grayed-out controls often mean policy — escalate, don’t bypass",
      "Admin capability ≠ authorization to weaken security",
      "Device Manager/Services/GPO/CLI may be better than Settings for some faults",
      "Verify the user-facing result after every change",
    ],
    guidedExample: {
      title: "Twelve settings tickets",
      steps: [
        "Wrong default browser → Settings > Apps > Default apps.",
        "Missing toast from an app → System > Notifications (+ app permission).",
        "Laptop sleeps too fast on AC → Power & battery / Power Options.",
        "Stale Bluetooth headset → remove device, re-pair under Bluetooth & devices.",
        "Mic denied in Teams → Privacy > Microphone (+ app settings).",
        "Bad proxy breaks SaaS → Network & internet > Proxy; verify after clear.",
        "Updates paused too long → Windows Update; explain risk of long pauses.",
        "Needs magnifier/narrator → Accessibility features.",
        "App launches at logon unwanted → Startup apps (Settings or Task Manager).",
        "Wrong time zone after travel → Time & language.",
        "Home network treated as public → network profile classification.",
        "Setting missing/grayed on corp laptop → policy; gather gpresult evidence and escalate.",
      ],
    },
    commonMistakes: [
      "Disabling firewall or Defender to 'make an app work'",
      "Assuming every Home setting exists on managed Enterprise images",
      "Changing proxy/VPN without recording the original values",
      "Using Settings when Device Manager is the right layer",
      "Bypassing MDM/GPO because a local admin account exists",
    ],
    examTraps: [
      "Best Settings category for an outcome",
      "Settings vs Device Manager vs Services vs policy",
      "Managed-device grayed-out controls",
      "Privacy permissions vs app bugs",
      "Windows Update pause / recovery awareness",
    ],
    realWorldScenario:
      "A user can’t join meetings with mic. Teams looks fine. Privacy > Microphone was Off for desktop apps after a provisioning image. Enabling the privacy toggle and retesting in-call audio fixes it — a Settings/privacy layer, not a hardware RMA.",
    whenThisFails: [
      "If the control is policy-locked, stop local workarounds and escalate with evidence",
      "If a request would disable security controls, refuse without change control",
      "If BitLocker/encryption UI is involved, follow authorized key escrow procedures",
    ],
    teacherReflectionPrompt:
      "For a grayed-out Windows Update setting on a work laptop, explain what you check next and what you will not do.",
    quiz: [
      {
        id: "ap-windows-settings-q1",
        prompt: "A user wants Edge replaced as the default browser for HTTPS links. Best first place?",
        choices: [
          { id: "a", text: "Settings > Apps > Default apps" },
          { id: "b", text: "Disk Management" },
          { id: "c", text: "diskpart clean" },
          { id: "d", text: "Disable the firewall permanently" },
        ],
        correctChoiceId: "a",
        explanation: "Default app associations live under Apps / Default apps.",
        objectiveId: "AP1202-1.6",
        difficulty: "easy",
      },
      {
        id: "ap-windows-settings-q2",
        prompt: "Microphone works in Sound settings but Teams cannot hear the user. Best Settings focus?",
        choices: [
          { id: "a", text: "Privacy & security > Microphone (app permission) plus app-level mic selection" },
          { id: "b", text: "Initialize a new GPT disk" },
          { id: "c", text: "Remove BitLocker as step one" },
          { id: "d", text: "Disable Windows Update forever" },
        ],
        correctChoiceId: "a",
        explanation: "Privacy permissions often block app access even when the device works.",
        objectiveId: "AP1202-1.6",
        difficulty: "medium",
      },
      {
        id: "ap-windows-settings-q3",
        prompt: "A corporate laptop setting is visible but grayed out. Best interpretation?",
        choices: [
          { id: "a", text: "Likely managed by policy/MDM — escalate with evidence rather than bypass" },
          { id: "b", text: "Proof the display cable is bad" },
          { id: "c", text: "You must disable Secure Boot immediately" },
          { id: "d", text: "Home edition always grays everything" },
        ],
        correctChoiceId: "a",
        explanation: "Managed devices intentionally lock controls.",
        objectiveId: "AP1202-1.6",
        difficulty: "easy",
      },
      {
        id: "ap-windows-settings-q4",
        prompt: "An unwanted app starts at every sign-in. Best first Settings/tool path?",
        choices: [
          { id: "a", text: "Startup apps in Settings (or Task Manager Startup apps)" },
          { id: "b", text: "format D:" },
          { id: "c", text: "Create a mirror robocopy of C:\\Windows" },
          { id: "d", text: "Turn off the TPM" },
        ],
        correctChoiceId: "a",
        explanation: "Startup app control is the least-destructive first path.",
        objectiveId: "AP1202-1.6",
        difficulty: "easy",
      },
      {
        id: "ap-windows-settings-q5",
        prompt: "When should you choose Device Manager instead of Settings?",
        choices: [
          { id: "a", text: "When the issue is device/driver status (warning icon, code, disable/enable driver stack)" },
          { id: "b", text: "When the user only wants a new wallpaper" },
          { id: "c", text: "When changing time zone" },
          { id: "d", text: "When enabling Narrator" },
        ],
        correctChoiceId: "a",
        explanation: "Driver/device state ≠ personalization settings.",
        objectiveId: "AP1202-1.6",
        difficulty: "medium",
      },
    ],
    questionBank: [
      {
        id: "ap-windows-settings-b1",
        prompt: "Power & sleep configuration is primarily under:",
        choices: [
          { id: "a", text: "System power settings / Power Options" },
          { id: "b", text: "diskpart only" },
          { id: "c", text: "nslookup" },
        ],
        correctChoiceId: "a",
        explanation: "Power timers are Settings/Power Options.",
        objectiveId: "AP1202-1.6",
        difficulty: "easy",
      },
      {
        id: "ap-windows-settings-b2",
        prompt: "Credential Manager is used for:",
        choices: [
          { id: "a", text: "Stored credentials/passwords for sign-in resources (handle carefully)" },
          { id: "b", text: "Formatting GPT disks" },
          { id: "c", text: "Changing CPU sockets" },
        ],
        correctChoiceId: "a",
        explanation: "Credential storage UI — treat secrets carefully.",
        objectiveId: "AP1202-1.6",
        difficulty: "easy",
      },
      {
        id: "ap-windows-settings-b3",
        prompt: "Network profile Public vs Private affects:",
        choices: [
          { id: "a", text: "Discovery/firewall posture expectations for that connection" },
          { id: "b", text: "Whether NTFS exists" },
          { id: "c", text: "TPM presence" },
        ],
        correctChoiceId: "a",
        explanation: "Profile classification changes network trust posture.",
        objectiveId: "AP1202-1.6",
        difficulty: "medium",
      },
      {
        id: "ap-windows-settings-b4",
        prompt: "Programs and Features is still useful to:",
        choices: [
          { id: "a", text: "Uninstall or change traditional desktop programs" },
          { id: "b", text: "Replace Device Manager entirely" },
          { id: "c", text: "Bypass BitLocker recovery" },
        ],
        correctChoiceId: "a",
        explanation: "Legacy uninstall/change surface.",
        objectiveId: "AP1202-1.6",
        difficulty: "easy",
      },
      {
        id: "ap-windows-settings-b5",
        prompt: "Windows Update long pause as a 'fix' is risky because:",
        choices: [
          { id: "a", text: "Devices miss security/quality updates — pause only with policy-aware justification" },
          { id: "b", text: "It upgrades RAM automatically" },
          { id: "c", text: "It deletes Event Viewer" },
        ],
        correctChoiceId: "a",
        explanation: "Update hygiene matters.",
        objectiveId: "AP1202-1.6",
        difficulty: "easy",
      },
      {
        id: "ap-windows-settings-b6",
        prompt: "BitLocker settings UI availability depends on:",
        choices: [
          { id: "a", text: "Edition support, hardware, and organizational policy — not guaranteed on every PC" },
          { id: "b", text: "Whether the mouse is wireless" },
          { id: "c", text: "Using ChromeOS Flex only" },
        ],
        correctChoiceId: "a",
        explanation: "Edition + policy gate encryption UI.",
        objectiveId: "AP1202-1.6",
        difficulty: "medium",
      },
      {
        id: "ap-windows-settings-b7",
        prompt: "Safe settings lab rule:",
        choices: [
          { id: "a", text: "Do not disable firewall, updates, AV, or encryption for practice" },
          { id: "b", text: "Always turn off Defender first" },
          { id: "c", text: "Clear all credentials without notes" },
        ],
        correctChoiceId: "a",
        explanation: "Preserve security controls in labs.",
        objectiveId: "AP1202-1.6",
        difficulty: "easy",
      },
      {
        id: "ap-windows-settings-b8",
        prompt: "Accessibility features belong primarily under:",
        choices: [
          { id: "a", text: "Settings > Accessibility" },
          { id: "b", text: "diskpart" },
          { id: "c", text: "arp -a only" },
        ],
        correctChoiceId: "a",
        explanation: "Accessibility category owns those tools.",
        objectiveId: "AP1202-1.6",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-windows-settings-f1",
        front: "Default browser where?",
        back: "Settings > Apps > Default apps",
      },
      {
        id: "ap-windows-settings-f2",
        front: "Mic denied to one app?",
        back: "Privacy > Microphone (+ app settings)",
      },
      {
        id: "ap-windows-settings-f3",
        front: "Grayed-out corp setting?",
        back: "Likely policy — escalate, don’t bypass",
      },
      {
        id: "ap-windows-settings-f4",
        front: "Startup app annoyance?",
        back: "Settings Startup apps / Task Manager Startup",
      },
      {
        id: "ap-windows-settings-f5",
        front: "Settings vs Device Manager?",
        back: "User config vs device/driver status",
      },
      {
        id: "ap-windows-settings-f6",
        front: "Lab security rule?",
        back: "Don’t disable firewall/updates/AV/encryption",
      },
    ],
    assignments: [
      {
        id: "ap-lab-windows-settings-inventory",
        title: "Windows settings inventory & support worksheet",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `Part A — Fictional tickets. For each: Settings/Control Panel area · permissions/policy risk · safe change · verification · escalate?
1) Default browser
2) Missing notifications
3) Sleep too aggressive
4) Re-pair Bluetooth mouse
5) Microphone privacy off
6) Wrong proxy
7) Windows Update paused
8) Enable an accessibility feature
9) Disable a startup app
10) Wrong time zone
11) Network marked Public at home incorrectly
12) Setting blocked by organization

Part B — Practice PC inventory (read-only / minimal change): locate and record current state for display resolution, power timeout, default browser, Windows Update status, and whether one privacy permission is on/off. Recommend at most one justified non-security change; do not disable firewall, updates, AV, or encryption.`,
        estimatedMinutes: 22,
        completionCriteria: [
          "Complete Part A for all twelve tickets",
          "Complete Part B inventory with verification notes (or N/A if no PC)",
        ],
        relatedTopicIds: ["ap-windows-settings", "ap-windows-tools"],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 45,
    difficulty: "medium",
  },
];
