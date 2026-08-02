import type { ExternalResource, Topic } from "../../types";

/**
 * A+ Core 2 Operating Systems — A7a (Michael 2026-08-01).
 * types (1.1) → install (1.2) → Windows editions (1.3).
 * Stop after batch — no Windows tools/CLI/settings, macOS/Linux tools, Security, or CCNA C1.
 */

const WINDOWS_11_PC_RESOURCE: ExternalResource = {
  id: "windows-11-pc",
  name: "Windows 11 PC",
  url: "https://support.microsoft.com/windows",
  cost: "free",
  platform: "windows",
  installNotes:
    "Use a Windows 11 PC you may inspect for read-only inventories and planning worksheets. Do not change organizational management, security, or licensing. Avoid managed school/work accounts for destructive practice.",
};

const VM_LAB_RESOURCE: ExternalResource = {
  id: "relearn-vm-lab",
  name: "ReLearn VM Lab Foundations",
  url: "https://www.virtualbox.org/",
  cost: "free",
  platform: "any",
  installNotes:
    "In ReLearn open /cert/vm-lab for safe guest installs and snapshots. Use NAT/host-only; avoid unnecessary bridged networking. A+ teaches planning and selection — VM Lab owns hands-on construction practice.",
};

export const apCore2OsBatch1Topics: Topic[] = [
  {
    id: "ap-os-types",
    name: "Operating System Types & Compatibility",
    prerequisites: ["ap-troubleshoot-domain-review"],
    objectives: ["AP1202-1.1"],
    lesson: {
      title: "Choose OS Families by Requirement and Compatibility",
      content: `Operating systems are **platform decisions**, not fashion. On A+, you match a requirement to an OS family, then verify architecture, drivers, apps, peripherals, lifecycle, and support — before anyone buys or installs.

**CF refresher:** \`cf-operating-systems\`, \`cf-device-types\` — what an OS is and how device classes differ. This topic adds technician selection and compatibility depth for V15.

**Desktop / workstation families.**
- **Windows** — dominant business/home PC platform; broad driver and LOB app ecosystems; editions and management features matter later.
- **macOS** — Apple hardware ecosystem; strong creative toolchains; not a general “install macOS on any PC” option in supported support work.
- **Linux** — many distributions; strong for servers, development, and some desktops; driver/app support varies by distro and hardware.
- **ChromeOS** — web/cloud-first devices; **ChromeOS Flex** can run on more PC hardware but is **not** identical support to Chromebook OEM images — verify vendor guidance.

**Mobile families.**
- **Android** — wide OEM hardware; Google/OEM update policies vary.
- **iOS / iPadOS** — Apple mobile/tablet platforms; accessories and managed apps often assume Apple ecosystem constraints.

**Other contexts (introductory).**
Server OS images (Windows Server, Linux server distros), embedded/appliance firmware/OS, hypervisor hosts and **guest** OS choices, and network-device OS/firmware — recognize the class; deep admin is out of scope here.

**Architecture and compatibility.**
- **32-bit vs 64-bit** — address space and OS/app packaging; modern Windows client installs are 64-bit focused; 32-bit apps may still run on 64-bit Windows via compatibility layers, but **unsupported** 16/32-bit-only stacks can fail.
- **x86 / x64 / ARM** — CPU instruction sets. An ARM Windows/macOS/Chrome device may need ARM-native or emulated apps; do not assume every x64 binary “just works.”
- Check **RAM, storage, CPU generation, firmware (UEFI), TPM/Secure Boot where required**, GPU, and **driver availability** for critical devices (NIC, storage, specialty printers, capture cards).
- **Application and peripheral compatibility** — vendor support matrices beat forum hope.
- **Upgrade eligibility** and **vendor support lifecycle / end-of-support (EOS)** — running unsupported OS versions is a security and insurance risk, not just a “works for me” preference.
- **Licensing** (intro) — you need a lawful right to install/use; do not invent activation advice.

**File-system recognition (OS context — not full disk admin yet).**
Match common FS to OS/use: **NTFS** (Windows system/data), **FAT32** (broad compatibility, size limits), **exFAT** (large removable media), **ReFS** (Windows resiliency scenarios — not every edition/use), **ext** family and **XFS** (common Linux), **APFS** (Apple). Choice follows OS, media role, and interoperability needs.

**Selection habit.**
1. Name the user/business requirement.
2. Name candidate OS family.
3. Verify hardware architecture + minimums.
4. Verify apps, drivers, peripherals.
5. Check lifecycle, management, and licensing constraints.
6. Document what must still be proved before purchase/install.

**What's next.** Installation and upgrade methods — how to deploy the OS you chose without destroying data.`,
    },
    lightbulbMoment:
      "OS choice is a compatibility project — prove apps, drivers, architecture, and support life before you promise a platform.",
    keyFacts: [
      "Windows, macOS, Linux, and ChromeOS serve different hardware and app ecosystems",
      "Android vs iOS/iPadOS differ in OEM update and accessory assumptions",
      "x64 vs ARM and 32/64-bit packaging affect whether apps and drivers run",
      "ChromeOS Flex ≠ Chromebook OEM support model",
      "macOS is not a supported general install on arbitrary PCs",
      "NTFS/FAT32/exFAT/ReFS/ext/XFS/APFS map to OS and media roles",
      "End-of-support OS versions create security and support risk",
    ],
    guidedExample: {
      title: "Seven OS selection tickets",
      steps: [
        "Legacy label printer only has a Windows x64 driver → Windows workstation path; verify driver still published for the target Windows version.",
        "Video editor needs Final Cut Pro → macOS on supported Apple hardware — not a random PC image.",
        "Student needs cheap web apps + classroom filtering → Chromebook/ChromeOS class device; confirm management features.",
        "Developer wants reproducible Linux toolchain → Linux desktop or Linux VM guest; check GPU/USB device needs.",
        "Sales phones need managed MDM with App Store apps → iOS/iPadOS or Android per org policy — not a desktop OS swap.",
        "ARM laptop; critical LOB app is x64-only with no ARM build → prove emulation support or choose different hardware/OS.",
        "Kiosk appliance ships locked embedded OS → treat as appliance; do not force a desktop Windows install without vendor path.",
      ],
    },
    commonMistakes: [
      "Promising macOS on a random Dell because 'it is Unix-like'",
      "Treating ChromeOS Flex as identical to a Chromebook warranty/support path",
      "Assuming 64-bit Windows magically runs every old 32-bit specialty app",
      "Ignoring end-of-support dates when 'it still boots'",
      "Picking Linux without checking the scanner/printer driver story",
    ],
    examTraps: [
      "OS family vs device class (desktop vs mobile vs appliance)",
      "x64 vs ARM application compatibility",
      "File system recognition by role (NTFS vs exFAT vs APFS vs ext)",
      "Lifecycle / EOS risk",
      "What must be verified before recommending an OS",
    ],
    realWorldScenario:
      "A clinic wants 'the cheapest laptops' for a specialty imaging app. The vendor only certifies Windows 11 x64 with a specific GPU driver. Chromebooks fail the matrix. You document Windows 11 Pro candidates that meet CPU/RAM/TPM and the vendor GPU list — selection followed the app matrix, not the sticker price alone.",
    whenThisFails: [
      "If a required peripheral has no driver for the chosen OS version, stop and escalate procurement — do not invent unsigned driver advice",
      "If licensing ownership is unclear, escalate — do not bypass activation",
      "If the device is organization-managed, follow MDM/imaging policy before any OS change",
    ],
    teacherReflectionPrompt:
      "Given an ARM Windows laptop and an x64-only LOB app, list three verification questions before you recommend buy, replace, or virtualize.",
    quiz: [
      {
        id: "ap-os-types-q1",
        prompt: "A creative studio requires Final Cut Pro on supported hardware. Best OS family recommendation?",
        choices: [
          { id: "a", text: "macOS on Apple-supported hardware" },
          { id: "b", text: "Install macOS on any bargain Windows PC as standard practice" },
          { id: "c", text: "ChromeOS Flex because browsers can edit video" },
          { id: "d", text: "iPadOS on a desktop tower" },
        ],
        correctChoiceId: "a",
        explanation:
          "Final Cut Pro is an Apple ecosystem app; supported deployments use Apple hardware/macOS — not arbitrary PC installs.",
        objectiveId: "AP1202-1.1",
        difficulty: "easy",
      },
      {
        id: "ap-os-types-q2",
        prompt: "An ARM-based laptop must run a critical LOB app that only publishes an x64 build. Best first action?",
        choices: [
          { id: "a", text: "Verify whether the OS provides supported emulation/compatibility and whether the vendor certifies that path" },
          { id: "b", text: "Assume every x64 binary runs perfectly on ARM with no checks" },
          { id: "c", text: "Delete Secure Boot and hope" },
          { id: "d", text: "Install macOS on the ARM Windows PC as the fix" },
        ],
        correctChoiceId: "a",
        explanation: "Architecture mismatches need proof of support — not assumptions.",
        objectiveId: "AP1202-1.1",
        difficulty: "medium",
      },
      {
        id: "ap-os-types-q3",
        prompt: "Which statement about ChromeOS Flex is accurate for support planning?",
        choices: [
          { id: "a", text: "Hardware support and warranty/support expectations can differ from OEM Chromebooks — verify guidance" },
          { id: "b", text: "Flex is identical to every Chromebook image and warranty" },
          { id: "c", text: "Flex is a type of NTFS partition" },
          { id: "d", text: "Flex removes the need for any drivers forever" },
        ],
        correctChoiceId: "a",
        explanation: "Do not treat Flex and OEM ChromeOS devices as identical support models.",
        objectiveId: "AP1202-1.1",
        difficulty: "medium",
      },
      {
        id: "ap-os-types-q4",
        prompt: "A USB drive must move 8 GB video files between Windows and macOS. Which file system is commonly chosen for large removable media interoperability?",
        choices: [
          { id: "a", text: "exFAT" },
          { id: "b", text: "APFS only (no Windows interoperability by default)" },
          { id: "c", text: "ReFS on a thumb drive as the default consumer choice" },
          { id: "d", text: "XFS as the universal phone SD card format" },
        ],
        correctChoiceId: "a",
        explanation: "exFAT is commonly used for large removable media across platforms; APFS/ReFS/XFS are not the usual USB interchange default.",
        objectiveId: "AP1202-1.1",
        difficulty: "medium",
      },
      {
        id: "ap-os-types-q5",
        prompt: "Why does end-of-support (EOS) matter when an old OS 'still boots'?",
        choices: [
          { id: "a", text: "Missing security updates and vendor support increase risk even if the machine runs" },
          { id: "b", text: "EOS only changes the desktop wallpaper" },
          { id: "c", text: "EOS means the CPU becomes ARM automatically" },
          { id: "d", text: "EOS guarantees the file system converts to FAT32" },
        ],
        correctChoiceId: "a",
        explanation: "Lifecycle risk is a support and security issue, not a boot cosmetic.",
        objectiveId: "AP1202-1.1",
        difficulty: "easy",
      },
    ],
    questionBank: [
      {
        id: "ap-os-types-b1",
        prompt: "NTFS is most associated with:",
        choices: [
          { id: "a", text: "Windows system and data volumes" },
          { id: "b", text: "Default Apple boot volumes exclusively" },
          { id: "c", text: "Only Android system partitions" },
        ],
        correctChoiceId: "a",
        explanation: "NTFS is the common Windows volume file system.",
        objectiveId: "AP1202-1.1",
        difficulty: "easy",
      },
      {
        id: "ap-os-types-b2",
        prompt: "ext-family file systems are commonly found on:",
        choices: [
          { id: "a", text: "Linux systems" },
          { id: "b", text: "Only Windows recovery FAT sticks" },
          { id: "c", text: "Only iPadOS internal volumes" },
        ],
        correctChoiceId: "a",
        explanation: "ext* is a classic Linux filesystem family.",
        objectiveId: "AP1202-1.1",
        difficulty: "easy",
      },
      {
        id: "ap-os-types-b3",
        prompt: "APFS is primarily associated with:",
        choices: [
          { id: "a", text: "Apple platforms (macOS / modern Apple storage)" },
          { id: "b", text: "Windows Server ReFS replacements on every PC" },
          { id: "c", text: "ChromeOS Flex USB sticks only" },
        ],
        correctChoiceId: "a",
        explanation: "APFS is Apple’s modern filesystem.",
        objectiveId: "AP1202-1.1",
        difficulty: "easy",
      },
      {
        id: "ap-os-types-b4",
        prompt: "A specialty scanner has drivers only for Windows. Best OS recommendation for that workstation?",
        choices: [
          { id: "a", text: "A supported Windows version that matches the vendor driver matrix" },
          { id: "b", text: "Any Linux distro because scanners are universal" },
          { id: "c", text: "iOS on a phone docked as a desktop" },
        ],
        correctChoiceId: "a",
        explanation: "Driver availability can force the OS family.",
        objectiveId: "AP1202-1.1",
        difficulty: "easy",
      },
      {
        id: "ap-os-types-b5",
        prompt: "64-bit OS with a 32-bit application:",
        choices: [
          { id: "a", text: "May run via compatibility support — but vendor support and edge cases still need verification" },
          { id: "b", text: "Always fails immediately" },
          { id: "c", text: "Converts the CPU to ARM" },
        ],
        correctChoiceId: "a",
        explanation: "Compatibility layers help but do not erase support checks.",
        objectiveId: "AP1202-1.1",
        difficulty: "medium",
      },
      {
        id: "ap-os-types-b6",
        prompt: "Server OS knowledge at A+ depth means:",
        choices: [
          { id: "a", text: "Recognize server OS contexts and when to escalate — not full enterprise admin" },
          { id: "b", text: "You must design Active Directory forests on day one" },
          { id: "c", text: "Server OS is identical to ChromeOS Flex" },
        ],
        correctChoiceId: "a",
        explanation: "Keep server topics introductory.",
        objectiveId: "AP1202-1.1",
        difficulty: "easy",
      },
      {
        id: "ap-os-types-b7",
        prompt: "FAT32 limitation that often matters:",
        choices: [
          { id: "a", text: "Individual file size limits that can block large media files" },
          { id: "b", text: "It only works on ARM phones" },
          { id: "c", text: "It is identical to APFS" },
        ],
        correctChoiceId: "a",
        explanation: "FAT32’s file-size ceiling is a classic gotcha.",
        objectiveId: "AP1202-1.1",
        difficulty: "medium",
      },
      {
        id: "ap-os-types-b8",
        prompt: "Which factor should drive operating-system selection for a workstation?",
        choices: [
          { id: "a", text: "Required applications, hardware support, management/security needs, user workflow, and lifecycle" },
          { id: "b", text: "The newest name regardless of compatibility" },
          { id: "c", text: "Printer paper size alone" },
        ],
        correctChoiceId: "a",
        explanation: "OS selection is a compatibility, support, security, management, and user-requirements decision.",
        objectiveId: "AP1202-1.1",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-os-types-f1",
        front: "OS selection starts with?",
        back: "Requirement → family → prove apps/drivers/architecture/lifecycle",
      },
      {
        id: "ap-os-types-f2",
        front: "macOS on random PCs?",
        back: "Not a supported general deployment path",
      },
      {
        id: "ap-os-types-f3",
        front: "ChromeOS Flex vs Chromebook?",
        back: "Support/hardware models can differ — verify",
      },
      {
        id: "ap-os-types-f4",
        front: "x64 app on ARM device?",
        back: "Prove emulation/vendor support — don’t assume",
      },
      {
        id: "ap-os-types-f5",
        front: "exFAT common use?",
        back: "Large removable media across platforms",
      },
      {
        id: "ap-os-types-f6",
        front: "EOS OS still boots — OK?",
        back: "Security/support risk remains — plan upgrades",
      },
    ],
    assignments: [
      {
        id: "ap-lab-os-compat-worksheet",
        title: "Operating-system compatibility worksheet",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `No installation required. For each fictional device, complete:
Hardware summary · CPU architecture · RAM/storage · Required apps · Required peripherals · Driver support notes · Upgrade path · Support lifecycle risk · Recommended OS family · What to verify next · Escalation/procurement questions

Devices:
1) Older workstation with a legacy USB label printer (Windows-only driver, last updated for Win10/11 x64)
2) Creative editor needing Final Cut Pro
3) Low-cost web-focused student laptop candidate (Chromebook vs cheap Windows)
4) Managed mobile workforce needing MDM + corporate apps
5) Developer workstation wanting Linux toolchain + occasional Windows LOB VM
6) ARM Windows laptop + x64-only specialty app
7) Locked medical kiosk appliance (embedded OS)

Optional read-only: on your practice PC, note OS name and architecture from Settings > System > About (no secrets, no product keys).`,
        estimatedMinutes: 22,
        completionCriteria: [
          "Complete the compatibility table for all seven scenarios",
          "List one verification and one escalation question for the ARM + x64 app case",
        ],
        relatedTopicIds: ["ap-os-types"],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 45,
    difficulty: "medium",
  },

  {
    id: "ap-os-install",
    name: "OS Installation & Upgrades",
    prerequisites: ["ap-os-types"],
    objectives: ["AP1202-1.2"],
    lesson: {
      title: "Plan Installations and Upgrades Without Losing Data",
      content: `Installation is a **controlled change**, not a reboot with an ISO. On A+, you prepare, protect data, choose the right method, boot carefully, configure storage intentionally, validate, and document — including a rollback story.

**CF / prior A+:** \`cf-install-uninstall-apps\` and \`cf-settings-updates-accounts\` for safe change habits; Core 1 Virt/Cloud + VM Lab for guest installs; \`ap-os-types\` for compatibility before you image anything.

**Installation types (pick for the scenario).**
- **Clean install** — wipe/replace the OS volume; strongest “known-good baseline,” highest data-migration work.
- **In-place upgrade** — install newer OS over existing; may preserve apps/settings when supported; still requires backup.
- **Repair install** — repair an existing OS when allowed by media/version.
- **Image-based / clone deployment** — org standard image; follow imaging policy.
- **Recovery partition / factory recovery** — OEM restore; can erase user data — warn and back up.
- **Network install / PXE** (intro) — boot from network when infrastructure allows.
- **Unattended install** — answer files / automation for repeatable builds.
- **Remote install** (intro) — authorized remote tools; still need backup and ownership clarity.
- **VM guest install** — safest practice sandbox; prefer snapshots.
- **Multiboot / dual-boot** — multiple OS on one machine; partition and bootloader risk is high — plan carefully.
- **Upgrade vs migration** — upgrade keeps the device; migration moves users/data/apps to another system/OS.

**Media.**
Bootable USB (most common), ISO images, recovery media, optical when still relevant, network boot, vendor recovery tools. Verify media integrity and that you booted the **intended** stick.

**Preparation checklist.**
Authorization/scope · hardware compatibility · firmware (UEFI vs legacy) · boot order · disk capacity · drivers · app compatibility · licensing/activation path · **backup verified** · BitLocker/FileVault/other recovery keys per authorized procedure · accounts · network for updates · rollback plan.

**Storage context (careful).**
Partitioning and formatting choose the OS volume. Recognize **GPT vs MBR**, **UEFI vs legacy BIOS** boot modes, system/recovery/data partitions, and file-system choice from \`ap-os-types\`. **Confirm the correct disk** before delete/format — wrong-disk wipes are career-limiting. Never treat “Delete all” as casual.

**Repeatable sequence.**
1. Confirm authorization and scope.  
2. Back up and verify restore/sample files.  
3. Confirm compatibility and licensing.  
4. Prepare verified media.  
5. Record existing config (hostname, joins, apps).  
6. Boot intended method.  
7. Select install/upgrade type.  
8. Configure storage carefully.  
9. Complete OOBE/initial setup.  
10. Updates and drivers.  
11. Restore apps/data as planned.  
12. Validate function.  
13. Document.  
14. Handle recovery media per policy.

**Upgrade reasoning.**
Supported paths beat “force it.” In-place saves time but can carry corruption; clean install is cleaner but costlier. Rollback windows, edition limits, activation, and org policy matter. **Backups remain mandatory** even when the wizard promises to keep files.

**What's next.** Windows editions — which Windows 11 SKU matches the business requirement after you can install Windows at all.`,
    },
    lightbulbMoment:
      "Every install is a data-protection project first — method, media, and disk selection come after the backup is real.",
    keyFacts: [
      "Clean vs in-place vs image vs recovery solve different problems",
      "Verify backups and encryption recovery before destructive steps",
      "Confirm the target disk before partitioning or formatting",
      "UEFI/GPT and legacy/MBR pairing must match the install plan",
      "Supported upgrade paths beat unsupported force-upgrades",
      "VM Lab is the safe place to practice guest installs",
      "Validate and document — don’t assume success after first login",
    ],
    guidedExample: {
      title: "Seven installation plans",
      steps: [
        "Failed OS disk, data on separate volume → replace disk, clean install, restore from backup; confirm which disk is blank.",
        "Win10→Win11 eligible PC → check TPM/UEFI/Secure Boot/CPU list; backup; prefer supported in-place or org image.",
        "Unsupported OS with needed apps → migration to new supported OS; clean install or new device — not an unsupported hack.",
        "Learn Linux safely → VM guest in /cert/vm-lab with snapshot before experiments.",
        "Dual-boot request → warn bootloader/partition risk; require backups; escalate if policy forbids.",
        "OEM ‘reset PC’ / factory image → warn data loss; capture user files first.",
        "Org laptop reimage → use approved image/tooling; do not remove MDM/security controls.",
      ],
    },
    commonMistakes: [
      "Formatting the wrong disk because sizes looked similar",
      "Skipping backup because ‘upgrade keeps everything’",
      "Ignoring BitLocker recovery key capture before wipe",
      "Using random USB media without verifying the ISO/source",
      "Bypassing licensing/activation or org management agents",
    ],
    examTraps: [
      "Clean vs in-place vs repair vs image selection",
      "UEFI/GPT vs legacy/MBR context",
      "Backup and recovery-key prerequisites",
      "Dual-boot risks",
      "When to escalate encryption/ownership/compliance issues",
    ],
    realWorldScenario:
      "A user says ‘just reinstall Windows’ on a BitLocker laptop. You verify identity, capture/confirm recovery key access with the authorized process, image user data to backup, then clean-install with the correct disk selected. Skipping the key step would have bricked access to the old volume forever.",
    whenThisFails: [
      "If backup verification fails, stop — do not wipe",
      "If disk identity is ambiguous, stop and map serials/sizes in Disk Management / installer carefully",
      "If the device is org-managed or compliance-scoped, escalate to imaging/MDM owners",
    ],
    teacherReflectionPrompt:
      "Write the minimum backup + recovery-key + disk-confirmation steps you would refuse to skip before a clean install on an encrypted laptop.",
    quiz: [
      {
        id: "ap-os-install-q1",
        prompt: "Before a clean install on a laptop that may be encrypted, the most important preparation is:",
        choices: [
          { id: "a", text: "Verified backup plus authorized access to encryption recovery information" },
          { id: "b", text: "Disabling the screen saver theme" },
          { id: "c", text: "Deleting all recovery partitions first without a plan" },
          { id: "d", text: "Turning off the firewall permanently" },
        ],
        correctChoiceId: "a",
        explanation: "Data and recovery access come before wipe/install.",
        objectiveId: "AP1202-1.2",
        difficulty: "easy",
      },
      {
        id: "ap-os-install-q2",
        prompt: "When is a clean installation often preferred over an in-place upgrade?",
        choices: [
          { id: "a", text: "When you need a known-good baseline or the existing OS is badly corrupted" },
          { id: "b", text: "When you want to skip all backups" },
          { id: "c", text: "When licensing should be bypassed" },
          { id: "d", text: "When dual-boot is forbidden and you still want three OSes" },
        ],
        correctChoiceId: "a",
        explanation: "Clean install trades migration effort for a cleaner baseline.",
        objectiveId: "AP1202-1.2",
        difficulty: "medium",
      },
      {
        id: "ap-os-install-q3",
        prompt: "UEFI firmware with a GPT disk is most associated with:",
        choices: [
          { id: "a", text: "Modern boot configuration pairing used by current Windows installs" },
          { id: "b", text: "Only optical media installs from 1998" },
          { id: "c", text: "A requirement to disable all updates forever" },
          { id: "d", text: "Proof that backups are unnecessary" },
        ],
        correctChoiceId: "a",
        explanation: "UEFI+GPT is the common modern pairing; match plan to firmware/disk style.",
        objectiveId: "AP1202-1.2",
        difficulty: "medium",
      },
      {
        id: "ap-os-install-q4",
        prompt: "Safest place for a learner to practice a Linux OS install?",
        choices: [
          { id: "a", text: "A VM guest via ReLearn VM Lab (/cert/vm-lab) with snapshots" },
          { id: "b", text: "The organization’s production file server without approval" },
          { id: "c", text: "Dual-boot on a BitLocker laptop with no backup" },
          { id: "d", text: "Random public lab PCs with no authorization" },
        ],
        correctChoiceId: "a",
        explanation: "Contained VMs are the approved practice path.",
        objectiveId: "AP1202-1.2",
        difficulty: "easy",
      },
      {
        id: "ap-os-install-q5",
        prompt: "An upgrade wizard claims files will be kept. Backup is still required because:",
        choices: [
          { id: "a", text: "Upgrades can fail, abort, or leave the system unbootable — backups are the rollback" },
          { id: "b", text: "Backups are only for printers" },
          { id: "c", text: "Windows deletes backups automatically if present" },
          { id: "d", text: "ISOs refuse to mount when a backup exists" },
        ],
        correctChoiceId: "a",
        explanation: "Never trust a wizard promise as the only recovery plan.",
        objectiveId: "AP1202-1.2",
        difficulty: "easy",
      },
    ],
    questionBank: [
      {
        id: "ap-os-install-b1",
        prompt: "Factory recovery / reset commonly risks:",
        choices: [
          { id: "a", text: "Erasing user data if not backed up first" },
          { id: "b", text: "Automatically upgrading RAM" },
          { id: "c", text: "Converting ARM to x64" },
        ],
        correctChoiceId: "a",
        explanation: "OEM recovery can wipe personal files.",
        objectiveId: "AP1202-1.2",
        difficulty: "easy",
      },
      {
        id: "ap-os-install-b2",
        prompt: "Unattended installation is useful when:",
        choices: [
          { id: "a", text: "You need repeatable, scripted answers for many identical builds" },
          { id: "b", text: "You want to skip licensing forever" },
          { id: "c", text: "You refuse to verify disks" },
        ],
        correctChoiceId: "a",
        explanation: "Automation reduces manual OOBE clicks — not safety checks.",
        objectiveId: "AP1202-1.2",
        difficulty: "medium",
      },
      {
        id: "ap-os-install-b3",
        prompt: "Dual-boot planning must emphasize:",
        choices: [
          { id: "a", text: "Partition layout, bootloader risk, backups, and policy approval" },
          { id: "b", text: "Ignoring bootloaders" },
          { id: "c", text: "Formatting every disk blindly" },
        ],
        correctChoiceId: "a",
        explanation: "Multiboot is high-risk without planning.",
        objectiveId: "AP1202-1.2",
        difficulty: "medium",
      },
      {
        id: "ap-os-install-b4",
        prompt: "Migration differs from in-place upgrade because:",
        choices: [
          { id: "a", text: "Migration moves users/data/apps to another system or OS instance" },
          { id: "b", text: "Migration never needs backups" },
          { id: "c", text: "Migration only changes wallpapers" },
        ],
        correctChoiceId: "a",
        explanation: "Migration relocates the workload; upgrade replaces OS on the device.",
        objectiveId: "AP1202-1.2",
        difficulty: "easy",
      },
      {
        id: "ap-os-install-b5",
        prompt: "During disk selection in the installer you should:",
        choices: [
          { id: "a", text: "Match size, order, and identifiers carefully — never guess" },
          { id: "b", text: "Always pick Disk 0 without looking" },
          { id: "c", text: "Delete all disks to be safe" },
        ],
        correctChoiceId: "a",
        explanation: "Wrong-disk selection destroys data.",
        objectiveId: "AP1202-1.2",
        difficulty: "easy",
      },
      {
        id: "ap-os-install-b6",
        prompt: "After OS install, validation should include:",
        choices: [
          { id: "a", text: "Updates/drivers, network, apps, and restored data spot-checks" },
          { id: "b", text: "Only changing the hostname wallpaper" },
          { id: "c", text: "Disabling all security immediately" },
        ],
        correctChoiceId: "a",
        explanation: "Documented validation closes the change.",
        objectiveId: "AP1202-1.2",
        difficulty: "easy",
      },
      {
        id: "ap-os-install-b7",
        prompt: "Unsupported upgrade path means:",
        choices: [
          { id: "a", text: "Vendor does not support that jump — plan clean install/migration instead of forcing it" },
          { id: "b", text: "You should disable Secure Boot and proceed silently" },
          { id: "c", text: "Activation becomes optional" },
        ],
        correctChoiceId: "a",
        explanation: "Unsupported paths are a planning signal, not a dare.",
        objectiveId: "AP1202-1.2",
        difficulty: "medium",
      },
      {
        id: "ap-os-install-b8",
        prompt: "Org-owned PC reimage boundary:",
        choices: [
          { id: "a", text: "Use approved imaging/MDM processes — do not strip management/security controls" },
          { id: "b", text: "Always local USB pirate images" },
          { id: "c", text: "Remove BitLocker recovery from escrow first" },
        ],
        correctChoiceId: "a",
        explanation: "Managed devices follow org process.",
        objectiveId: "AP1202-1.2",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-os-install-f1",
        front: "Before clean install?",
        back: "Verified backup + recovery keys + correct disk",
      },
      {
        id: "ap-os-install-f2",
        front: "Clean vs in-place?",
        back: "Clean = fresh baseline · in-place may keep apps/settings",
      },
      {
        id: "ap-os-install-f3",
        front: "UEFI commonly pairs with?",
        back: "GPT (modern Windows installs)",
      },
      {
        id: "ap-os-install-f4",
        front: "Practice Linux install where?",
        back: "VM Lab guest + snapshots",
      },
      {
        id: "ap-os-install-f5",
        front: "Upgrade keeps files — skip backup?",
        back: "No — upgrades can fail; backup is rollback",
      },
      {
        id: "ap-os-install-f6",
        front: "Factory reset risk?",
        back: "Can erase user data — back up first",
      },
    ],
    assignments: [
      {
        id: "ap-lab-os-install-plan",
        title: "Installation & upgrade planning lab",
        type: "external-lab",
        externalResourceId: "relearn-vm-lab",
        instructions: `Part A — Planning worksheets (required). For each scenario, record: authorization · backup plan · recovery-key needs · install type · media · firmware/boot notes · storage approach · validation · escalation.
1) Replace failed OS SSD (data on second disk)
2) Supported Windows 10 → Windows 11 in-place candidate
3) Migrate off unsupported OS
4) Dual-boot request on a personal PC
5) OEM factory recovery for a home laptop
6) Org-owned reimage

Part B — Hands-on option (preferred): In /cert/vm-lab, create or use a Linux guest install path with a snapshot before changes. If virtualization is unavailable, expand Part A with a full step-by-step clean-install runbook for a fictional PC (no destructive host actions).

Do not bypass licensing. Do not wipe real disks without explicit ownership and backups.`,
        estimatedMinutes: 28,
        completionCriteria: [
          "Complete planning tables for all six scenarios",
          "Either finish a VM Lab guest install/snapshot note OR a full fictional clean-install runbook",
        ],
        relatedTopicIds: ["ap-os-install", "ap-os-types"],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE, VM_LAB_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 50,
    difficulty: "medium",
  },

  {
    id: "ap-windows-editions",
    name: "Windows 11 Editions & Use Cases",
    prerequisites: ["ap-os-install"],
    objectives: ["AP1202-1.3"],
    lesson: {
      title: "Match Windows 11 Editions to Requirements",
      content: `Windows editions are **capability packages**, not wallpaper themes. On A+, you map a user or organization requirement to a Windows 11 edition, then verify hardware eligibility, licensing path, and whether features are merely *available* versus *enabled by policy*.

**Teaching context:** Windows **11** is primary (per locked A+ architecture). Windows 10 appears only as labeled legacy/comparison when needed — not as the default model.

**Prior topics:** \`ap-os-types\` (why Windows) · \`ap-os-install\` (how to deploy) · CF \`cf-settings-updates-accounts\` for Settings literacy.

**Common Windows 11 editions (feature reasoning).**
- **Home** — personal/consumer; lacks traditional domain join and many business management features.
- **Pro** — small business and many workstations; **domain join**, BitLocker (capability), Remote Desktop *host* (capability), Group Policy / management hooks vs Home.
- **Pro for Workstations** — when objective-required: higher-end workstation hardware scenarios (recognize the SKU class; don’t invent exotic limits).
- **Enterprise** — organization-managed fleets; advanced management/security/deployment features typically via volume licensing — not assumed as a normal retail cart item.
- **Education** — education-licensed environments with school-oriented management paths.
- **S mode** (when required) — locked to Microsoft Store apps / specific security posture; switching out of S mode is a deliberate, often one-way decision — follow Microsoft guidance, don’t invent bypasses.

**Feature ≠ enabled.**
BitLocker availability ≠ BitLocker turned on. Remote Desktop **client** capability ≠ **host** (incoming) capability. Hyper-V needs edition **and** hardware virtualization support **and** enablement. Domain features need network/identity infrastructure, not just the SKU name.

**Windows 11 hardware / support concepts (A+ depth).**
Supported CPU lists, RAM/storage minimums, **UEFI**, **Secure Boot**, **TPM** requirements, graphics/display basics, and account/internet expectations where Microsoft documents them. Use official compatibility checks. **Do not teach unofficial requirement bypasses** as supported deployment.

**Identify what is installed (safe, non-secret).**
- Settings → System → About  
- \`winver\`  
- System Information  
- PowerShell / CLI inventory where appropriate  

Distinguish **edition** vs **version/feature update** vs **build** vs **architecture** vs **activation state** (activated/not — never collect or paste product keys into tickets/notes).

**Selection habit.**
1. Name required capability (domain, BitLocker policy, RDP host, Hyper-V, education management…).  
2. Name minimum edition that includes it.  
3. Verify hardware eligibility for Windows 11.  
4. Verify licensing/procurement path.  
5. Verify org policy (MDM/Autopilot/image).  
6. Escalate when Enterprise/Education licensing or identity design is unclear.

**What's next (later batches — not A7a).** Windows tools, CLI, settings, and networking features build on knowing *which* edition you are configuring.`,
    },
    lightbulbMoment:
      "Pick the Windows edition for the capability you must deliver — then prove hardware, licensing, and that the feature is actually enabled.",
    keyFacts: [
      "Windows 11 Home lacks traditional domain join and many business features",
      "Pro adds common business capabilities (domain, BitLocker capability, RDP host capability)",
      "Enterprise/Education features often depend on org licensing — not casual retail assumptions",
      "S mode restricts app sources; leaving S mode is deliberate",
      "TPM, UEFI, Secure Boot, and CPU support matter for Windows 11 eligibility",
      "Edition ≠ version ≠ build ≠ architecture ≠ activation",
      "Available feature ≠ configured/enabled feature",
    ],
    guidedExample: {
      title: "Six edition choices",
      steps: [
        "Home user, browsing + Office web → Windows 11 Home on eligible hardware is enough.",
        "5-person office needing domain join later → Pro (or org-standard image), not Home.",
        "Corp laptop with Autopilot/MDM and compliance baselines → Enterprise (or education SKU) per licensing — escalate procurement.",
        "Engineer needs Hyper-V labs on a workstation → Pro/Enterprise class + CPU virt support + enablement — not Home S mode.",
        "School lab with education licensing → Education SKU path; follow school IT imaging.",
        "Remote employee must host RDP into their PC per policy → edition that supports RDP host + policy allows it; client-only is not enough.",
      ],
    },
    commonMistakes: [
      "Promising domain join on Windows Home",
      "Assuming BitLocker is on because Pro is installed",
      "Treating Remote Desktop client use as proof the PC can host RDP",
      "Teaching TPM/Secure Boot bypasses as supported installs",
      "Collecting or pasting product keys into tickets",
    ],
    examTraps: [
      "Home vs Pro domain / management differences",
      "BitLocker availability vs enabled state",
      "RDP host vs client",
      "Windows 11 TPM/UEFI/Secure Boot requirements",
      "Edition vs version/build identification",
    ],
    realWorldScenario:
      "A manager buys Home PCs ‘to save money’ for staff who must join the company domain. Domain join fails. You document the requirement (domain + BitLocker policy), recommend Pro (or the org’s standard Enterprise image), and escalate licensing — the failure was edition selection, not a broken NIC.",
    whenThisFails: [
      "If hardware fails Windows 11 eligibility, plan replacement or supported alternatives — don’t push unofficial bypasses",
      "If Enterprise licensing is unclear, escalate procurement/identity — don’t pirate features",
      "If S mode blocks a required Win32 app, follow official switch-out guidance with user consent/policy",
    ],
    teacherReflectionPrompt:
      "A user needs domain join, BitLocker per policy, and occasional Hyper-V. Which edition class do you start from, and what three proofs do you collect before purchasing?",
    quiz: [
      {
        id: "ap-windows-editions-q1",
        prompt: "A PC must join a traditional on-premises Active Directory domain. Which edition class is appropriate?",
        choices: [
          { id: "a", text: "Windows 11 Pro (or higher business/education SKU) — not Home" },
          { id: "b", text: "Windows 11 Home with a special domain checkbox" },
          { id: "c", text: "ChromeOS Flex renamed to Windows" },
          { id: "d", text: "Any edition in S mode only" },
        ],
        correctChoiceId: "a",
        explanation: "Home does not support traditional domain join.",
        objectiveId: "AP1202-1.3",
        difficulty: "easy",
      },
      {
        id: "ap-windows-editions-q2",
        prompt: "Windows 11 Pro is installed, but BitLocker is off. Correct interpretation?",
        choices: [
          { id: "a", text: "The edition can support BitLocker, but capability ≠ enabled — configure/policy still required" },
          { id: "b", text: "Pro never includes BitLocker" },
          { id: "c", text: "BitLocker is only on Home" },
          { id: "d", text: "Activation state always enables BitLocker" },
        ],
        correctChoiceId: "a",
        explanation: "Availability and enablement are different questions.",
        objectiveId: "AP1202-1.3",
        difficulty: "medium",
      },
      {
        id: "ap-windows-editions-q3",
        prompt: "A technician runs winver. This primarily helps identify:",
        choices: [
          { id: "a", text: "Windows version/build information for the installed OS" },
          { id: "b", text: "The TPM manufacturer part number only" },
          { id: "c", text: "The domain admin password" },
          { id: "d", text: "Whether Ethernet is Cat6" },
        ],
        correctChoiceId: "a",
        explanation: "winver shows version/build dialog details.",
        objectiveId: "AP1202-1.3",
        difficulty: "easy",
      },
      {
        id: "ap-windows-editions-q4",
        prompt: "Why are unofficial Windows 11 requirement bypasses not taught as supported methods?",
        choices: [
          { id: "a", text: "They are unsupported paths that can break updates, security expectations, and supportability" },
          { id: "b", text: "They are required by CompTIA for every install" },
          { id: "c", text: "They increase RAM automatically" },
          { id: "d", text: "They convert Home to Enterprise legally for free" },
        ],
        correctChoiceId: "a",
        explanation: "Supported deployment follows vendor requirements.",
        objectiveId: "AP1202-1.3",
        difficulty: "medium",
      },
      {
        id: "ap-windows-editions-q5",
        prompt: "A user can use the Remote Desktop client to connect outbound to a server. Does that prove their Home PC can host incoming RDP?",
        choices: [
          { id: "a", text: "No — RDP client use ≠ RDP host capability (edition/feature dependent)" },
          { id: "b", text: "Yes — client and host are always identical" },
          { id: "c", text: "Yes — Home always hosts RDP" },
          { id: "d", text: "Only if the wallpaper is blue" },
        ],
        correctChoiceId: "a",
        explanation: "Hosting RDP is a different capability from running the client.",
        objectiveId: "AP1202-1.3",
        difficulty: "medium",
      },
    ],
    questionBank: [
      {
        id: "ap-windows-editions-b1",
        prompt: "Windows 11 S mode primarily:",
        choices: [
          { id: "a", text: "Restricts apps to a more locked-down model (e.g., Store-centric) until switched out" },
          { id: "b", text: "Adds Enterprise volume licensing automatically" },
          { id: "c", text: "Disables UEFI forever" },
        ],
        correctChoiceId: "a",
        explanation: "S mode is a restricted execution model.",
        objectiveId: "AP1202-1.3",
        difficulty: "medium",
      },
      {
        id: "ap-windows-editions-b2",
        prompt: "Enterprise edition features typically require:",
        choices: [
          { id: "a", text: "Appropriate organizational licensing and deployment — not assumed via home retail alone" },
          { id: "b", text: "Only a wallpaper change on Home" },
          { id: "c", text: "Disabling Secure Boot as a prerequisite" },
        ],
        correctChoiceId: "a",
        explanation: "Enterprise capability is a licensing/ops path.",
        objectiveId: "AP1202-1.3",
        difficulty: "easy",
      },
      {
        id: "ap-windows-editions-b3",
        prompt: "TPM requirement for Windows 11 is best framed as:",
        choices: [
          { id: "a", text: "A hardware security prerequisite for supported installs — verify presence/enablement" },
          { id: "b", text: "Optional sticker art" },
          { id: "c", text: "A type of HDMI cable" },
        ],
        correctChoiceId: "a",
        explanation: "TPM is part of the supported Windows 11 baseline.",
        objectiveId: "AP1202-1.3",
        difficulty: "easy",
      },
      {
        id: "ap-windows-editions-b4",
        prompt: "Edition vs architecture:",
        choices: [
          { id: "a", text: "Edition is the SKU/capability set; architecture is x64/ARM (etc.) of the OS build" },
          { id: "b", text: "They are identical terms" },
          { id: "c", text: "Architecture only means Home vs Pro" },
        ],
        correctChoiceId: "a",
        explanation: "Keep SKU and CPU architecture concepts separate.",
        objectiveId: "AP1202-1.3",
        difficulty: "easy",
      },
      {
        id: "ap-windows-editions-b5",
        prompt: "Hyper-V on a workstation needs:",
        choices: [
          { id: "a", text: "A supporting edition plus hardware virtualization support and enablement" },
          { id: "b", text: "Only Windows Home S mode" },
          { id: "c", text: "A broken TPM" },
        ],
        correctChoiceId: "a",
        explanation: "Edition alone is not enough without hardware/feature enablement.",
        objectiveId: "AP1202-1.3",
        difficulty: "medium",
      },
      {
        id: "ap-windows-editions-b6",
        prompt: "Safe inventory practice excludes:",
        choices: [
          { id: "a", text: "Copying product keys into public notes or tickets" },
          { id: "b", text: "Recording edition name from Settings > About" },
          { id: "c", text: "Noting winver build for support" },
        ],
        correctChoiceId: "a",
        explanation: "Never exfiltrate product keys.",
        objectiveId: "AP1202-1.3",
        difficulty: "easy",
      },
      {
        id: "ap-windows-editions-b7",
        prompt: "Education edition is aimed at:",
        choices: [
          { id: "a", text: "Licensed education environments with school-oriented management paths" },
          { id: "b", text: "Only gaming handhelds" },
          { id: "c", text: "Replacing all Linux servers" },
        ],
        correctChoiceId: "a",
        explanation: "Education SKUs follow education licensing/ops.",
        objectiveId: "AP1202-1.3",
        difficulty: "easy",
      },
      {
        id: "ap-windows-editions-b8",
        prompt: "Pro for Workstations (when tested) is best remembered as:",
        choices: [
          { id: "a", text: "A workstation-oriented Windows SKU class for higher-end hardware scenarios" },
          { id: "b", text: "A mobile-only Android edition" },
          { id: "c", text: "A type of exFAT driver" },
        ],
        correctChoiceId: "a",
        explanation: "Recognize the workstation SKU class at A+ depth.",
        objectiveId: "AP1202-1.3",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-windows-editions-f1",
        front: "Home + domain join?",
        back: "No traditional AD domain join — need Pro+",
      },
      {
        id: "ap-windows-editions-f2",
        front: "BitLocker on Pro but off?",
        back: "Capability ≠ enabled — configure/policy",
      },
      {
        id: "ap-windows-editions-f3",
        front: "winver shows?",
        back: "Version/build information",
      },
      {
        id: "ap-windows-editions-f4",
        front: "RDP client vs host?",
        back: "Outbound client ≠ inbound host capability",
      },
      {
        id: "ap-windows-editions-f5",
        front: "Windows 11 hardware trio?",
        back: "Supported CPU · UEFI/Secure Boot · TPM (among others)",
      },
      {
        id: "ap-windows-editions-f6",
        front: "Product keys in tickets?",
        back: "Never — record edition/version only",
      },
    ],
    assignments: [
      {
        id: "ap-lab-windows-edition-inventory",
        title: "Windows edition & compatibility inventory",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `Part A — Fictional orgs (required). For each, pick edition class and list required capability · hardware checks · licensing/approval · what to verify · escalation:
1) Home user
2) Small professional office (domain later)
3) Managed corporate laptop (compliance baselines)
4) Engineering workstation needing Hyper-V
5) School lab
6) Remote employee who must host RDP per policy

Part B — Read-only on a practice Windows 11 PC you may inspect (or fictional About screenshot):
Record edition · version/build (winver) · architecture · TPM/Secure Boot indicators if shown · activation state at a non-sensitive level (Activated / not) · whether BitLocker appears available/on (do not collect keys) · upgrade recommendation or escalation note.

Do not paste product keys. Do not bypass Windows 11 requirements.`,
        estimatedMinutes: 22,
        completionCriteria: [
          "Complete edition recommendations for all six scenarios",
          "Complete Part B inventory without secrets/product keys",
        ],
        relatedTopicIds: ["ap-windows-editions", "ap-os-install"],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 45,
    difficulty: "medium",
  },
];
