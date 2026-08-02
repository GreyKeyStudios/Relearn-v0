import type { Certification, ExternalResource, Topic } from "../types";

const VIRTUALBOX_RESOURCE: ExternalResource = {
  id: "oracle-virtualbox",
  name: "Oracle VirtualBox",
  url: "https://www.virtualbox.org/wiki/Downloads",
  cost: "free",
  platform: "any",
  installNotes:
    "Download the package for your host OS. Extension Pack is optional for USB 2/3 and RDP features — install only from the official VirtualBox site. ReLearn does not host VMs.",
};

const UBUNTU_ISO_RESOURCE: ExternalResource = {
  id: "ubuntu-desktop-iso",
  name: "Ubuntu Desktop ISO (LTS)",
  url: "https://ubuntu.com/download/desktop",
  cost: "free",
  platform: "any",
  installNotes:
    "Download an LTS Desktop ISO for your first Linux guest. Prefer official Ubuntu images. Keep the ISO on the host; do not store permanent coursework only inside the guest.",
};

function quiz(
  prefix: string,
  items: { prompt: string; correct: string; wrong: string[]; explanation: string }[]
): Topic["quiz"] {
  return items.map((item, i) => {
    const choices = [
      { id: "a", text: item.correct },
      ...item.wrong.map((text, wi) => ({
        id: String.fromCharCode(98 + wi),
        text,
      })),
    ];
    return {
      id: `${prefix}-q${i + 1}`,
      prompt: item.prompt,
      choices,
      correctChoiceId: "a",
      explanation: item.explanation,
      difficulty: "easy" as const,
    };
  });
}

function cards(
  prefix: string,
  pairs: [string, string][]
): Topic["flashcards"] {
  return pairs.map(([front, back], i) => ({
    id: `${prefix}-f${i + 1}`,
    front,
    back,
  }));
}

/**
 * VM Lab Foundations — Type C (+ Break/Fix) skills track.
 * Phase V1: Modules 1–2. Module 3 started so Bash/Linux labs have a clear gate.
 * ReLearn does not host or stream VMs — learners install VirtualBox locally.
 */
export const vmLab: Certification = {
  id: "vm-lab",
  name: "VM Lab Foundations",
  shortName: "VM Lab",
  vendor: "ReLearn",
  overview:
    "Install VirtualBox on your PC, create disposable Linux (and later Windows) guests, and practice snapshot → break → restore. This track owns the practice machine so Bash, Linux+, and later scenario labs stay off your host. ReLearn does not host cloud desktops.",
  examSummary: {
    questionCount: 0,
    durationMinutes: 0,
    passingScore: "VirtualBox running · Linux guest · snapshot restore",
    format: "Hands-on external labs on your host PC",
  },
  domains: [
    {
      id: "vm-why-sandbox",
      name: "Module 1 — Why a Practice Machine",
      topics: [
        {
          id: "vm-host-vs-guest",
          name: "Host vs Guest",
          objectives: ["VM-M01-O1", "VM-M01-O2"],
          estimatedStudyMinutes: 20,
          difficulty: "easy",
          prerequisites: [],
          lightbulbMoment:
            "Your real Windows PC stays for literacy; risky commands belong in a disposable guest you can reset.",
          lesson: {
            title: "Host vs Guest",
            content: `Computer Fundamentals stays on your **host** — the Windows (or Mac/Linux) machine you use every day. That is where files, browsers, and help-desk habits live.

A **guest** is an operating system running inside a hypervisor (for ReLearn: VirtualBox). The guest thinks it is a full computer. You can install packages, break networking, and practice shells without risking the host’s documents and accounts.

**Reset** means returning the guest to a known good snapshot. That is the safety net that makes bold practice possible.

Use the host for CF literacy and everyday work. Use the guest when a lab says “change system state,” “install packages,” or “break and fix.”`,
          },
          keyFacts: [
            "Host = your everyday PC; guest = OS inside VirtualBox",
            "Disposable guests make Break/Fix safe",
            "Reset usually means restore a snapshot",
            "CF literacy stays on the host; shell risk labs prefer the guest",
          ],
          guidedExample: {
            title: "Sort the task",
            steps: [
              "Task A: Rename folders in File Explorer for a help-desk note → host.",
              "Task B: Run apt install and break a config file → Linux guest.",
              "Task C: Practice ipconfig after changing a lab NIC → Windows guest (later module).",
              "Write one sentence: when would you refuse to practice on the host?",
            ],
          },
          commonMistakes: [
            "Treating the guest as the only place any learning can happen",
            "Skipping snapshots and treating the guest like a permanent workstation",
            "Running a guest command on the host because both windows show a terminal",
          ],
          realWorldTraps: [
            "Practicing destructive commands on a shared office PC with no VM",
            "Assuming a VM automatically protects the host while writable shared folders or devices are attached",
            "Saving the only copy of important work inside a disposable guest",
          ],
          practiceType: ["reading", "quiz", "flashcard"],
          quiz: quiz("vm-host", [
            {
              prompt: "Where should Computer Fundamentals file literacy happen?",
              correct: "On the host PC",
              wrong: [
                "Only inside a Linux guest",
                "Only on a cloud desktop ReLearn hosts",
                "Only after Nested Virtualization is enabled",
              ],
              explanation:
                "CF stays on the real PC. Guests are for disposable, state-changing practice.",
            },
            {
              prompt: "What does “reset” usually mean in VM Lab?",
              correct: "Restore a snapshot to a known good guest state",
              wrong: [
                "Reinstall Windows on the host",
                "Delete VirtualBox permanently",
                "Factory-reset the physical router",
              ],
              explanation: "Snapshots let you undo guest experiments without touching the host.",
            },
          ]),
          flashcards: cards("vm-host", [
            ["Host", "Your everyday physical (or primary) machine"],
            ["Guest", "OS running inside the hypervisor"],
            ["Snapshot", "Saved guest state you can restore"],
          ]),
          whenThisFails: [
            "If VirtualBox will not run, stay on host-only lessons and fix hardware/virtualization requirements before Module 2.",
          ],
        },
        {
          id: "vm-why-disposable",
          name: "Why Disposable Labs",
          objectives: ["VM-M01-O3", "VM-M01-O4"],
          estimatedStudyMinutes: 15,
          difficulty: "easy",
          prerequisites: ["vm-host-vs-guest"],
          lightbulbMoment:
            "Fear drops when undo is cheap — snapshots turn “I might break it” into “I can try.”",
          lesson: {
            title: "Why Disposable Labs",
            content: `Shells, package installs, and security scenario packs need a place that can get messy. A disposable guest gives you:

1. **Permission to break things** — the cost of a mistake is minutes, not a wiped host.  
2. **Repeatable starts** — every learner can begin from the same clean snapshot.  
3. **Containment** — later ReLearn Lab VM scenario packs assume isolation from your home LAN and personal files.

This track teaches you to *build* that safety. Later courses (Bash, Linux+ labs, Ethical Hacking scenario packs) **consume** it. They should not re-teach VirtualBox install every time.`,
          },
          keyFacts: [
            "Disposable guests make Break/Fix emotionally safe",
            "Clean snapshots create a shared starting line",
            "Other tracks consume VM Lab; they do not replace it",
            "ReLearn does not stream a cloud desktop as a substitute",
          ],
          guidedExample: {
            title: "Fear audit",
            steps: [
              "Name one command you would not run on your only laptop.",
              "Ask: would you try it if Restore Snapshot took ten seconds?",
              "Write: “I will practice X only after a clean snapshot named Y.”",
            ],
          },
          commonMistakes: [
            "Calling a VM disposable without first proving that a clean snapshot can restore",
            "Keeping personal documents or credentials in a guest intended for break/fix work",
            "Assuming isolation means the guest cannot reach the home network or internet",
          ],
          realWorldTraps: [
            "A bridged guest can appear directly on the local network and is less isolated than a default NAT guest",
            "Snapshot chains consume host disk even when the guest seems unchanged",
            "Malware or unsafe files can still reach the host through shares, clipboard, USB, or copied files",
          ],
          practiceType: ["reading", "quiz", "flashcard"],
          quiz: quiz("vm-why", [
            {
              prompt: "Why do other tracks point at VM Lab instead of reinstalling VirtualBox each time?",
              correct: "VM Lab owns the practice machine; other tracks consume it",
              wrong: [
                "VirtualBox can only be installed once per planet",
                "ReLearn hosts everyone’s VMs in the cloud",
                "Linux+ forbids hypervisors",
              ],
              explanation:
                "Separation of concerns: this track owns install/guests/snapshots; Bash and Linux+ teach depth on top.",
            },
          ]),
          flashcards: cards("vm-why", [
            ["Consume vs own", "Bash consumes the guest; VM Lab owns the workflow"],
            ["Clean snapshot", "Known-good restore point before experiments"],
          ]),
        },
      ],
    },
    {
      id: "vm-install-virtualbox",
      name: "Module 2 — Install VirtualBox",
      topics: [
        {
          id: "vm-requirements-checklist",
          name: "Host Requirements Checklist",
          objectives: ["VM-M02-O1"],
          estimatedStudyMinutes: 15,
          difficulty: "easy",
          prerequisites: ["vm-why-disposable"],
          lightbulbMoment:
            "Soft gates beat surprise failures — check RAM and disk before the ISO download.",
          lesson: {
            title: "Host Requirements Checklist",
            content: `Before downloading VirtualBox, sanity-check the host:

- **RAM:** 16 GB recommended when running a desktop guest; 8 GB may work with a light Linux guest and closed host apps.  
- **Disk:** 40+ GB free for VirtualBox, ISOs, and virtual disks.  
- **CPU virtualization:** Enable VT-x/AMD-V in firmware if guests run extremely slowly or refuse to start.  
- **Admin rights:** You need permission to install software on the host.

If you cannot meet the soft gate yet, keep studying Module 1 concepts and use web walkthroughs for scenario learning until hardware catches up.`,
          },
          keyFacts: [
            "16 GB RAM / 40+ GB free disk are soft recommendations",
            "Firmware virtualization helps guest performance",
            "No admin rights = pause install until you have them",
          ],
          commonMistakes: [
            "Checking total disk size instead of currently available free space",
            "Assigning nearly all host RAM or CPU to the guest and starving the host",
            "Assuming virtualization is unavailable before checking firmware and host-hypervisor settings",
          ],
          realWorldTraps: [
            "Corporate security policy may block hypervisor installation even when the hardware is capable",
            "An ISO and expanding virtual disk can consume much more space than the initial download suggests",
            "Other hypervisors or security features may affect VirtualBox performance and should not be disabled blindly",
          ],
          practiceType: ["reading", "quiz", "flashcard"],
          quiz: quiz("vm-req", [
            {
              prompt: "You have 4 GB RAM and 8 GB free disk. What should you do?",
              correct: "Pause the install; free resources or upgrade before a desktop guest",
              wrong: [
                "Install nested hypervisors to create RAM",
                "Skip snapshots forever",
                "Force ReLearn to host a cloud VM",
              ],
              explanation: "Under-resourced hosts frustrate learners; soft gates prevent that.",
            },
          ]),
          flashcards: cards("vm-req", [
            ["Soft RAM gate", "About 16 GB recommended for comfortable desktop guests"],
            ["VT-x / AMD-V", "CPU virtualization features in firmware"],
          ]),
        },
        {
          id: "vm-install-virtualbox",
          name: "Install VirtualBox",
          objectives: ["VM-M02-O2", "VM-M02-O3"],
          estimatedStudyMinutes: 45,
          difficulty: "medium",
          prerequisites: ["vm-requirements-checklist"],
          lightbulbMoment:
            "Official download sites only — fake “VirtualBox crack” pages are malware magnets.",
          lesson: {
            title: "Install VirtualBox",
            content: `1. Open the official VirtualBox downloads page **ON THE HOST** browser (linked in Resources).  
2. Choose the package for **your host OS** (Windows, macOS, or Linux) — this is host software, not a guest download.  
3. Run the installer **ON THE HOST** with admin rights. Accept the network/USB driver prompts if you want those features.  
4. Launch VirtualBox once **ON THE HOST** — an empty manager window means success.  
5. Optional: Extension Pack from the **same official site** only (USB 2/3, VRDP). Match the Extension Pack major version to VirtualBox.

**Common failures**

- Corporate policy blocks drivers — talk to IT or use a personal lab PC.  
- Hyper-V / other hypervisors conflict on some Windows hosts — note the error text; disable conflicting features only if you understand the tradeoff.  
- macOS Apple Silicon needs the appropriate VirtualBox build for ARM hosts.

ReLearn never asks you to disable antivirus blindly or download VirtualBox from random mirrors.`,
          },
          keyFacts: [
            "Install only from virtualbox.org (or your OS package docs that point there)",
            "Empty VirtualBox Manager = install succeeded",
            "Extension Pack versions must match VirtualBox",
            "Driver prompts during install are normal for host integration",
          ],
          guidedExample: {
            title: "Install checklist",
            steps: [
              "Confirm host OS and download the matching package.",
              "Install, then open VirtualBox Manager.",
              "Screenshot or note: version string from Help → About.",
              "Decide whether you need Extension Pack this week (can wait).",
            ],
          },
          commonMistakes: [
            "Downloading the guest ISO when the current step requires the VirtualBox host application",
            "Installing an Extension Pack version that does not match the VirtualBox version",
            "Disabling security software or Windows features without recording the error and understanding the tradeoff",
          ],
          realWorldTraps: [
            "Third-party download pages may bundle unwanted or malicious software",
            "Host network access can briefly change while VirtualBox network drivers are installed",
            "An Intel/AMD build and an ARM build are not interchangeable on every host",
          ],
          externalResources: [VIRTUALBOX_RESOURCE],
          practiceType: ["reading", "quiz", "flashcard", "external-lab"],
          assignments: [
            {
              id: "vm-lab-install-vbox",
              title: "Install VirtualBox on your host",
              type: "external-lab",
              instructions:
                "Download VirtualBox from the official site for your host OS, install it, and open VirtualBox Manager. Write down the version from Help → About. Do not download installers from third-party “mirror” sites.",
              estimatedMinutes: 30,
              externalResourceId: "oracle-virtualbox",
              completionCriteria: [
                "VirtualBox Manager opens",
                "Version string recorded",
                "Installer came from the official VirtualBox downloads page",
              ],
              relatedTopicIds: ["vm-install-virtualbox"],
              order: 1,
            },
          ],
          quiz: quiz("vm-install", [
            {
              prompt: "Where should you download VirtualBox?",
              correct: "The official VirtualBox downloads page",
              wrong: [
                "A random SEO blog with a “cracked” installer",
                "An email attachment from an unknown sender",
                "Any GitHub fork titled FreeVBoxPro",
              ],
              explanation: "Supply-chain safety matters; official bits only.",
            },
          ]),
          flashcards: cards("vm-install", [
            ["Success signal", "VirtualBox Manager opens with no guest yet"],
            ["Extension Pack", "Optional official add-on; match versions"],
          ]),
          whenThisFails: [
            "If install aborts on drivers, capture the error, check admin rights, and retry after a reboot.",
            "If another hypervisor blocks starts, research coexistence for your OS before disabling anything critical.",
          ],
        },
      ],
    },
    {
      id: "vm-linux-guest",
      name: "Module 3 — First Linux Guest",
      topics: [
        {
          id: "vm-linux-guest-create",
          name: "Create or Import a Linux Guest",
          objectives: ["VM-M03-O1", "VM-M03-O2"],
          estimatedStudyMinutes: 60,
          difficulty: "medium",
          prerequisites: ["vm-install-virtualbox"],
          lightbulbMoment:
            "A clean snapshot right after first boot is the most valuable click in this course.",
          lesson: {
            title: "Create or Import a Linux Guest",
            content: `With VirtualBox installed:

1. Download an **Ubuntu Desktop LTS ISO** (official).  
2. New → create a VM → attach the ISO → allocate RAM/disk within your soft gates.  
3. Finish the Ubuntu installer; create a lab user you will remember.  
4. Eject/remove the ISO from the virtual optical drive after install.  
5. Take a snapshot named **clean-first-boot** before any experiments.

NAT networking is fine for first boot and package updates. Host-only or internal networks appear in later networking labs — do not expose the guest to untrusted networks as a jump box.

This topic unlocks “I have a Linux machine I can break.” Module 4 will practice Bash inside it.`,
          },
          keyFacts: [
            "Official Ubuntu LTS ISO for v1 Linux guest",
            "Snapshot immediately after a successful first boot",
            "NAT is enough for early updates and practice",
            "Remove the install ISO after the OS is installed",
          ],
          commonMistakes: [
            "Booting back into the installer because the ISO remained first in the boot order",
            "Allocating too much RAM or disk and making the host unusable",
            "Skipping the clean-first-boot snapshot and experimenting immediately",
          ],
          realWorldTraps: [
            "Downloading an ISO from an unofficial mirror can introduce tampered installation media",
            "Forgetting the lab password can block administrative commands even though the VM still boots",
            "Changing from NAT to bridged networking without a reason exposes the guest more directly to the local network",
          ],
          externalResources: [VIRTUALBOX_RESOURCE, UBUNTU_ISO_RESOURCE],
          practiceType: ["reading", "quiz", "flashcard", "external-lab"],
          assignments: [
            {
              id: "vm-lab-linux-guest",
              title: "Linux guest + clean snapshot",
              type: "external-lab",
              instructions:
                "Create a Linux guest from an official Ubuntu LTS ISO (or import a documented OVA if provided later). Complete first boot, then take a VirtualBox snapshot named clean-first-boot. Do not skip the snapshot.",
              estimatedMinutes: 60,
              externalResourceId: "ubuntu-desktop-iso",
              completionCriteria: [
                "Linux guest boots to a desktop or login",
                "Snapshot clean-first-boot exists",
                "ISO detached or not booting as install media anymore",
              ],
              relatedTopicIds: ["vm-linux-guest-create"],
              order: 1,
            },
          ],
          quiz: quiz("vm-linux", [
            {
              prompt: "When should you take the first clean snapshot?",
              correct: "Right after a successful first boot, before experiments",
              wrong: [
                "Only after deleting the VM",
                "Before VirtualBox is installed",
                "Never — snapshots are discouraged",
              ],
              explanation: "Clean snapshots are the undo button for everything that follows.",
            },
          ]),
          flashcards: cards("vm-linux", [
            ["clean-first-boot", "Recommended name for the first good snapshot"],
            ["NAT", "Simple networking for early guest internet access"],
          ]),
          whenThisFails: [
            "Black screen after install: confirm EFI/BIOS setting and allocated video memory; restore or recreate from ISO.",
            "No snapshot option: ensure the VM is powered off or use VirtualBox’s snapshot UI for running VMs carefully.",
          ],
        },
      ],
    },
    {
      id: "vm-bash-basics",
      name: "Module 4 — Bash in the Guest",
      topics: [
        {
          id: "vm-bash-first-commands",
          name: "Bash First Commands in the Guest",
          objectives: ["VM-M04-O1", "VM-M04-O2"],
          estimatedStudyMinutes: 30,
          difficulty: "easy",
          prerequisites: ["vm-linux-guest-create"],
          lightbulbMoment:
            "Same five commands — pwd, ls, cd, cat, man — unlock almost every later Linux lab.",
          lesson: {
            title: "Bash First Commands in the Guest",
            content: `Open a terminal **inside the Linux guest** (not on the host).

Practice — type these **IN THE LINUX GUEST terminal** (not in PowerShell/CMD on the host, not in the VirtualBox Manager):

- \`pwd\` — where am I?  
- \`ls\` / \`ls -la\` — what is here?  
- \`cd\` — move; \`cd ~\` returns home  
- \`cat filename\` — read a small text file  
- \`man ls\` — read the manual (q to quit)

**ON THE HOST** you only use VirtualBox Manager to start the guest and manage snapshots — not to run \`pwd\`/\`ls\`.

This module is **orientation**, not the full Bash Type B track. Depth, scripting, and Break/Fix command drills belong in the future Bash course — which will assume this guest exists.

Take a snapshot **ON THE HOST** (VirtualBox) before experiments if you already used the guest for other work and \`clean-first-boot\` is stale.`,
          },
          keyFacts: [
            "Run Bash inside the guest terminal",
            "pwd / ls / cd / cat / man are the starter kit",
            "Full Bash Type B track comes later; VM Lab owns the machine",
          ],
          guidedExample: {
            title: "Five-command loop",
            steps: [
              "Open Terminal in the guest.",
              "Run pwd, then ls -la.",
              "cd to /tmp, pwd again, then cd ~.",
              "Create a tiny file with a text editor or echo, then cat it.",
              "Open man ls, skim SYNOPSIS, press q.",
            ],
          },
          commonMistakes: [
            "Typing Linux commands in the Windows host terminal instead of the guest terminal",
            "Using cat on a large or binary file and flooding the terminal",
            "Thinking cd changes a file rather than changing the shell's current directory",
          ],
          realWorldTraps: [
            "Commands copied from the web may contain destructive flags; read them before pressing Enter",
            "Linux paths and command names are case-sensitive even when the Windows host is forgiving",
            "A command prompt showing a different user or directory can change which files and permissions are affected",
          ],
          practiceType: ["reading", "quiz", "flashcard", "external-lab"],
          assignments: [
            {
              id: "vm-lab-bash-basics",
              title: "Five commands in the Linux guest",
              type: "external-lab",
              instructions:
                "IN THE LINUX GUEST terminal (not on the host): run pwd, ls -la, cd between two directories, cat a small file you create, and open man ls (quit with q). Write the five commands and one sentence on what each showed you. ON THE HOST: only use VirtualBox to start the guest if needed.",
              estimatedMinutes: 20,
              externalResourceId: "oracle-virtualbox",
              completionCriteria: [
                "All five commands run inside the guest",
                "Notes list each command and a one-line observation",
              ],
              relatedTopicIds: ["vm-bash-first-commands"],
              order: 1,
            },
          ],
          externalResources: [VIRTUALBOX_RESOURCE],
          quiz: quiz("vm-bash", [
            {
              prompt: "Where should you practice these Bash commands for VM Lab?",
              correct: "In a terminal inside the Linux guest",
              wrong: [
                "Only in PowerShell on the host",
                "Only in ReLearn’s cloud shell (ReLearn does not host one)",
                "Only after deleting VirtualBox",
              ],
              explanation: "The point is guest practice on a disposable machine.",
            },
          ]),
          flashcards: cards("vm-bash", [
            ["pwd", "Print working directory"],
            ["man", "Manual pages for a command"],
          ]),
        },
      ],
    },
    {
      id: "vm-windows-guest-cmd",
      name: "Module 5 — Windows Guest + CMD",
      topics: [
        {
          id: "vm-windows-guest-optional",
          name: "Windows Guest (Optional) + CMD Basics",
          objectives: ["VM-M05-O1", "VM-M05-O2"],
          estimatedStudyMinutes: 45,
          difficulty: "medium",
          prerequisites: ["vm-install-virtualbox"],
          lightbulbMoment:
            "If RAM is tight, keep Linux as primary and treat Windows guest as optional — do not thrash the host.",
          lesson: {
            title: "Windows Guest (Optional) + CMD Basics",
            content: `A second guest (Windows evaluation/ISO) is useful for CMD and later Windows-oriented labs. It is **optional in v1** if your host is low on RAM.

If you create one:

1. Use legitimate evaluation or licensed media — never pirated ISOs.  
2. Allocate modest RAM; close host apps.  
3. Snapshot after first login.  
4. Open **cmd.exe INSIDE THE WINDOWS GUEST** (not PowerShell on the host unless you are only studying the PowerShell track) and practice: \`cd\`, \`dir\`, \`ipconfig\`, \`ping 127.0.0.1\`.

**Linux vs Windows in this track**

- Linux guest → Bash in the guest terminal (\`pwd\`, \`ls\`, …).  
- Windows guest → CMD in the guest (\`dir\`, \`ipconfig\`, …).  
- Host → VirtualBox Manager + permanent notes; do not mix these up.

PowerShell deep work stays on the PowerShell track (often on the host for safe Get-* ). Destructive Windows labs should prefer this guest when you have one.`,
          },
          keyFacts: [
            "Windows guest is optional if RAM is limited",
            "Use legitimate evaluation/licensed media only",
            "CMD starters: cd, dir, ipconfig, ping loopback",
            "Snapshot after first successful login",
          ],
          commonMistakes: [
            "Treating the optional Windows guest as required when the host lacks safe resource headroom",
            "Running CMD exercises in host PowerShell and thinking the guest was tested",
            "Using unlicensed or unofficial Windows installation media",
          ],
          realWorldTraps: [
            "A Windows evaluation can expire, so do not make it the only location for important work",
            "Background updates can make a new Windows guest temporarily slow and consume significant disk space",
            "Running Linux and Windows guests together may exhaust host RAM even when each guest works alone",
          ],
          practiceType: ["reading", "quiz", "flashcard", "external-lab"],
          assignments: [
            {
              id: "vm-lab-windows-cmd",
              title: "Optional Windows guest CMD loop",
              type: "external-lab",
              instructions:
                "If host resources allow, create or start a Windows guest, snapshot after login, and run cd, dir, ipconfig, and ping 127.0.0.1 in cmd.exe. If you skip the Windows guest, write why (RAM/disk) and confirm Linux guest still has clean-first-boot.",
              estimatedMinutes: 45,
              externalResourceId: "oracle-virtualbox",
              completionCriteria: [
                "Either CMD loop completed in a Windows guest, or a written skip rationale plus Linux snapshot confirmed",
              ],
              relatedTopicIds: ["vm-windows-guest-optional"],
              order: 1,
            },
          ],
          externalResources: [VIRTUALBOX_RESOURCE],
          quiz: quiz("vm-win", [
            {
              prompt: "Your host has 8 GB RAM and a heavy Linux guest already. What is wisest?",
              correct: "Keep Linux primary; defer Windows guest until you have headroom",
              wrong: [
                "Run three desktop guests at once to learn faster",
                "Disable the host OS to free RAM",
                "Pirate a slim Windows ISO from a random forum",
              ],
              explanation: "Optional means optional — protect the host experience.",
            },
          ]),
          flashcards: cards("vm-win", [
            ["ipconfig", "Show Windows IP configuration in CMD"],
            ["dir", "List directory contents in CMD"],
          ]),
        },
      ],
    },
    {
      id: "vm-snapshots",
      name: "Module 6 — Snapshots & Recovery",
      topics: [
        {
          id: "vm-snapshot-break-restore",
          name: "Snapshot → Break → Restore",
          objectives: ["VM-M06-O1", "VM-M06-O2", "VM-M06-O3"],
          estimatedStudyMinutes: 35,
          difficulty: "medium",
          prerequisites: ["vm-linux-guest-create"],
          lightbulbMoment:
            "The emotional skill is restoring without panic — the technical click is secondary.",
          lesson: {
            title: "Snapshot → Break → Restore",
            content: `1. Confirm a known-good snapshot exists **ON THE HOST** in VirtualBox Manager (e.g. \`clean-first-boot\`).  
2. Optionally take \`before-break\` right now (**ON THE HOST**).  
3. **IN THE LINUX GUEST:** make a **minor** break — create a junk file on the desktop, or rename a practice folder — nothing that touches the host.  
4. **ON THE HOST:** shut down or use VirtualBox’s restore flow to return to the clean snapshot.  
5. **IN THE GUEST:** confirm the junk change is gone.

**When not to snapshot:** mid-transaction database workloads you care about, or enormous chains of tiny snapshots that eat disk. Prefer a few clear named restore points.

Never “fix” a broken guest by experimenting on the host OS.`,
          },
          keyFacts: [
            "Break only inside the guest",
            "Named snapshots beat anonymous ones",
            "Restore proves undo works — that is the lesson",
            "Snapshot sprawl can fill disks; prune deliberately",
          ],
          guidedExample: {
            title: "Ten-second undo",
            steps: [
              "Snapshot or select clean-first-boot.",
              "Create ~/Desktop/break-me.txt in the guest.",
              "Restore the snapshot.",
              "Confirm break-me.txt is gone.",
              "Smile once — that feeling is the product.",
            ],
          },
          commonMistakes: [
            "Restoring the wrong snapshot because names and dates were not checked",
            "Making the test change on the host instead of inside the guest",
            "Assuming restore succeeded without verifying that the intentional change disappeared",
          ],
          realWorldTraps: [
            "Restoring a snapshot discards later guest changes unless they were saved elsewhere",
            "Long snapshot chains can consume host disk and make recovery harder to reason about",
            "Saving a snapshot is not the same as a separate backup if the host disk fails",
          ],
          practiceType: ["reading", "quiz", "flashcard", "external-lab"],
          assignments: [
            {
              id: "vm-lab-snapshot-restore",
              title: "Break and restore the Linux guest",
              type: "external-lab",
              instructions:
                "IN THE LINUX GUEST: create a harmless visible change (file or folder). ON THE HOST (VirtualBox): restore clean-first-boot (or before-break). IN THE GUEST: confirm the change is gone. Write three bullets: what you broke, which snapshot you restored, how you verified.",
              estimatedMinutes: 25,
              externalResourceId: "oracle-virtualbox",
              completionCriteria: [
                "Visible guest change made",
                "Snapshot restored",
                "Verification notes written",
              ],
              relatedTopicIds: ["vm-snapshot-break-restore"],
              order: 1,
            },
          ],
          externalResources: [VIRTUALBOX_RESOURCE],
          quiz: quiz("vm-snap", [
            {
              prompt: "After a successful restore, what should be true?",
              correct: "The guest matches the snapshot’s saved state again",
              wrong: [
                "The host Windows install is rolled back",
                "All ISOs on the host are deleted",
                "VirtualBox is uninstalled",
              ],
              explanation: "Snapshots restore guest state, not the host OS.",
            },
          ]),
          flashcards: cards("vm-snap", [
            ["Restore", "Return the guest to a saved snapshot"],
            ["before-break", "Optional snapshot taken right before an experiment"],
          ]),
        },
      ],
    },
    {
      id: "vm-files-share",
      name: "Module 7 — Shared Folders & Files",
      topics: [
        {
          id: "vm-shared-folders",
          name: "Shared Folders and Lab Files",
          objectives: ["VM-M07-O1", "VM-M07-O2"],
          estimatedStudyMinutes: 30,
          difficulty: "medium",
          prerequisites: ["vm-linux-guest-create"],
          lightbulbMoment:
            "Learn shares on a practice VM — then turn them off. Official ReLearn Lab VMs keep host shares disabled for containment.",
          lesson: {
            title: "Shared Folders and Lab Files",
            content: `## Two different environments

| | **Learning VM** (this course) | **Official ReLearn Lab VM** (future appliance) |
|--|--|--|
| Shared folders | OK to enable briefly so you understand host ↔ guest file move | **Normally disabled** for containment |
| Goal | Learn the mechanic | Run scenario packs without touching host files |

## Why shares are risky

A guest with a **writable** host shared folder can create, change, or delete files on your real PC if the guest is compromised or you run a careless command. That breaks the “disposable guest” promise.

**Risk summary:** misconfigured or hostile software inside the guest + writable host share = real host files at risk.

## How to practice safely (Learning VM)

1. Create a dedicated host folder such as \`Documents/ReLearn-lab-scratch\` — nothing important inside.  
2. In VirtualBox (**on the host**): Machine → Settings → Shared Folders → add that folder (read-only is safer for a first try).  
3. Inside the **Linux guest** terminal, mount or browse the share (Guest Additions often required).  
4. Copy one tiny text file across and open it in the guest.  
5. **Remove or disable the share** when the demo is done (capstone requires this).

Permanent coursework stays on the **host** (or git). Guests hold scratch only.

If Guest Additions fail, copy-paste a short paragraph instead — still complete the mental model, and note that you skipped the share UI.`,
          },
          keyFacts: [
            "Learning VM: shares OK briefly for teaching",
            "Official ReLearn Lab VM: host shares normally disabled",
            "Writable host shares can put real host files at risk",
            "Disable or remove the share after you demonstrate it",
            "Host holds permanent work; guest holds scratch",
          ],
          commonMistakes: [
            "Sharing the entire Documents folder instead of a dedicated empty scratch folder",
            "Leaving a writable shared folder enabled after the transfer exercise",
            "Assuming a missing share means the file vanished when Guest Additions or mounting is the actual problem",
          ],
          realWorldTraps: [
            "A compromised guest with write access can alter or delete real host files in the shared folder",
            "Shared clipboard, drag-and-drop, and USB passthrough are additional host-guest bridges that need the same caution",
            "Snapshot restore does not necessarily undo changes already written through to a host shared folder",
          ],
          practiceType: ["reading", "quiz", "flashcard", "external-lab"],
          assignments: [
            {
              id: "vm-lab-share-file",
              title: "Controlled transfer — then disable the share",
              type: "external-lab",
              instructions:
                "ON THE HOST: create a scratch folder with one tiny text file (no secrets). Enable a VirtualBox shared folder to that path (read-only preferred). IN THE LINUX GUEST: open or copy the file. ON THE HOST again: remove or disable the shared folder. Write: (1) how you moved the file, (2) that the share is now disabled, (3) why official Lab VMs keep shares off.",
              estimatedMinutes: 30,
              externalResourceId: "oracle-virtualbox",
              completionCriteria: [
                "File visible in the guest (or documented copy-paste fallback)",
                "Shared folder removed or disabled afterward",
                "Note explains Learning VM vs official Lab VM share policy",
              ],
              relatedTopicIds: ["vm-shared-folders"],
              order: 1,
            },
          ],
          externalResources: [VIRTUALBOX_RESOURCE],
          quiz: quiz("vm-share", [
            {
              prompt: "Where should long-term course notes live?",
              correct: "On the host (or a remote repo), not only inside a disposable guest",
              wrong: [
                "Only in guest RAM",
                "Only on a public paste site with secrets",
                "Only inside snapshot metadata",
              ],
              explanation: "Restores wipe guest scratch; host keeps lasting work.",
            },
            {
              prompt: "For the future official ReLearn Lab VM appliance, host shared folders should normally be…",
              correct: "Disabled for containment",
              wrong: [
                "Writable to the entire user profile",
                "Required for every scenario pack",
                "Pointed at your password manager vault",
              ],
              explanation:
                "Learning VMs may demo shares; official appliances keep host shares off so a guest cannot touch host files.",
            },
          ]),
          flashcards: cards("vm-share", [
            ["Learning VM shares", "OK briefly to learn host ↔ guest file move"],
            ["Official Lab VM shares", "Normally disabled for containment"],
            ["Writable share risk", "Guest can affect real host files"],
          ]),
        },
      ],
    },
    {
      id: "vm-capstone",
      name: "Module 8 — Capstone",
      topics: [
        {
          id: "vm-capstone-break-fix-note",
          name: "Capstone: Break, Restore & Readiness Record",
          objectives: ["VM-M08-O1", "VM-M08-O2", "VM-M08-O3", "VM-M08-O4"],
          estimatedStudyMinutes: 50,
          difficulty: "medium",
          prerequisites: [
            "vm-bash-first-commands",
            "vm-snapshot-break-restore",
            "vm-shared-folders",
          ],
          lightbulbMoment:
            "Ready means: break → restore → transfer → share off → checklist complete — and you can explain host vs guest vs future appliance.",
          lesson: {
            title: "Capstone: Break, Restore & Readiness Record",
            content: `Prove the whole safety loop, then fill the **VM Readiness Record** on this page (saved on this device).

## Practical loop

1. **ON THE HOST (VirtualBox Manager):** confirm snapshot \`clean-first-boot\` (or equivalent) exists. Note the guest network mode (usually **NAT**).  
2. **IN THE LINUX GUEST terminal:** make a minor intentional break (e.g. create \`~/break-me.txt\`). Show it with \`ls\` or \`cat\`.  
3. **ON THE HOST:** restore the snapshot.  
4. **IN THE GUEST:** verify the break is gone.  
5. If not already done in Module 7: demonstrate a controlled file transfer, then **remove or disable** any shared folder.  
6. Complete every checkbox in the **VM Readiness Record** below.

## Host vs guest vs future appliance

- **Host** — your everyday PC; VirtualBox Manager; permanent notes.  
- **Guest** — disposable OS where shells and breaks happen.  
- **Future ReLearn Lab VM** — a prebuilt appliance for scenario packs; host shares normally **off**; not released yet.

You are ready for Bash / Linux+ labs that assume a disposable machine — and for later appliance-backed scenarios once that product ships.`,
          },
          keyFacts: [
            "Capstone = break + restore + share disabled + readiness record",
            "Commands in the guest terminal; VirtualBox UI on the host",
            "Official Lab VM appliances keep host shares disabled",
            "Readiness record is local today; later it can unlock scenario labs",
          ],
          realWorldScenario:
            "A teammate asks how you recovered a broken lab VM and whether host files were exposed. Your readiness record and ticket note should answer both.",
          commonMistakes: [
            "Checking readiness boxes from memory without performing and verifying the complete loop",
            "Recording the guest state but omitting the snapshot name or network mode needed to reproduce it",
            "Leaving a shared folder enabled after declaring the disposable lab ready",
          ],
          realWorldTraps: [
            "A readiness record saved only in browser storage can be lost when site data is cleared",
            "A successful harmless file restore does not prove every future operating-system failure is recoverable",
            "Future security labs may require stricter isolation than the general-purpose NAT configuration used here",
          ],
          practiceType: ["reading", "quiz", "flashcard", "external-lab"],
          assignments: [
            {
              id: "vm-lab-capstone",
              title: "Capstone + VM Readiness Record",
              type: "external-lab",
              instructions:
                "ON THE HOST: note network mode (e.g. NAT) and restore point name. IN THE LINUX GUEST: create a harmless break; show it with a command. ON THE HOST: restore. IN THE GUEST: verify. Ensure any shared folder is removed/disabled. Complete every item on the VM Readiness Record checklist on this lesson page.",
              estimatedMinutes: 40,
              externalResourceId: "oracle-virtualbox",
              completionCriteria: [
                "Break performed in guest only and restored",
                "Shared folder removed or disabled (or never left enabled)",
                "VM Readiness Record fully checked on this device",
              ],
              relatedTopicIds: ["vm-capstone-break-fix-note"],
              order: 1,
            },
          ],
          externalResources: [VIRTUALBOX_RESOURCE],
          quiz: quiz("vm-cap", [
            {
              prompt: "What completes the VM Lab Foundations success definition?",
              correct:
                "Disposable guest practice with snapshot restore, share hygiene, and a completed readiness record",
              wrong: [
                "ReLearn hosting a cloud desktop for you",
                "Finishing Linux+ exam objectives only",
                "Deleting VirtualBox after one install",
              ],
              explanation:
                "Architecture success = VirtualBox skill + reset confidence + containment habits, not a hosted VM.",
            },
            {
              prompt: "After demonstrating a shared folder on a learning VM, what should you do?",
              correct: "Remove or disable the share before calling the lab done",
              wrong: [
                "Leave it writable to the whole Documents folder forever",
                "Point it at your password vault",
                "Enable it on every future official Lab VM by default",
              ],
              explanation:
                "Learning demos shares; containment means turning them off afterward.",
            },
          ]),
          flashcards: cards("vm-cap", [
            ["Capstone proof", "Break → restore → share off → readiness record"],
            ["Host vs guest vs appliance", "Everyday PC · disposable OS · future sealed Lab VM"],
          ]),
        },
      ],
    },
  ],
};
