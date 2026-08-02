import type { ExternalResource, Topic } from "../../types";

/**
 * A+ Core 2 Operating Systems — A7c (Michael 2026-08-01).
 * Windows client networking (1.7) → macOS tools (1.8) → Linux client (1.9).
 * Stop after batch — no apps/cloud, OS domain review, Security, or CCNA C1.
 */

const WINDOWS_11_PC_RESOURCE: ExternalResource = {
  id: "windows-11-pc",
  name: "Windows 11 PC",
  url: "https://support.microsoft.com/windows",
  cost: "free",
  platform: "windows",
  installNotes:
    "Use a Windows 11 PC you may inspect for read-only client-network inventories. Do not classify untrusted networks as Private to force sharing. Do not expose credentials or connect to unauthorized systems. Respect MDM/domain policy.",
};

const VM_LAB_RESOURCE: ExternalResource = {
  id: "relearn-vm-lab",
  name: "ReLearn VM Lab Foundations",
  url: "https://www.virtualbox.org/",
  cost: "free",
  platform: "any",
  installNotes:
    "In ReLearn open /cert/vm-lab for Linux guest practice (Bash module). Use NAT/host-only; avoid unnecessary bridged networking. Prefer read-only commands in first-pass labs.",
};

export const apCore2OsBatch3Topics: Topic[] = [
  {
    id: "ap-windows-networking",
    name: "Windows Client Networking",
    prerequisites: ["ap-windows-settings", "ap-networking-domain-review"],
    objectives: ["AP1202-1.7"],
    lesson: {
      title: "Configure and Troubleshoot Networking on the Windows Client",
      content: `Core 1 taught **networks**. This topic teaches how **Windows** exposes adapters, profiles, sharing, VPN/proxy, and client troubleshooting — without replaying the full ports/SOHO curriculum.

**Reuse (do not reteach from zero):** \`ap-network-config\`, \`ap-network-tools\`, \`ap-ts-network\`, plus \`ap-windows-settings\` / \`ap-windows-cli\` for where toggles and commands live. CF: \`cf-home-network-devices\` optional literacy.

**Windows surfaces.**
Settings → Network & internet · Network Connections (ncpa.cpl) · adapter IPv4/IPv6 properties · Advanced sharing · Windows Defender Firewall · Device Manager (adapter state) · Credential Manager (saved network/share creds) · CLI (\`ipconfig\`, \`ping\`, \`nslookup\`, \`net use\`, …) · PowerShell network cmdlets when useful (\`Get-NetIPConfiguration\`, \`Test-NetConnection\`).

**Client configuration.**
DHCP vs static · IPv4/IPv6 · DNS client · default gateway · metered connections · Wi-Fi management / forget network · VPN client · proxy. Policy/MDM may lock these — grayed controls mean escalate, don’t bypass.

**Profiles.**
**Public** vs **Private** (and domain/org-managed profiles): discovery, sharing, and firewall posture change with profile. Never mark an untrusted café/airport network **Private** just to enable sharing.

**Sharing & access (intro).**
Network discovery · file/printer sharing · UNC paths (\`\\\\server\\share\`) · mapped drives · workgroup vs domain/org context · share permissions vs NTFS permissions (intro — full ACLs later in Security) · credential prompts vs stored credentials. Reachability ≠ authorization.

**Remote Desktop reminder.**
Client capability ≠ host capability (edition/policy). See \`ap-windows-editions\`.

**Troubleshooting ladder (Windows client).**
1) Adapter/link · 2) IP config · 3) Profile · 4) Reachability · 5) Name resolution · 6) Sharing/service · 7) Firewall · 8) Credentials/permissions · 9) Org policy · 10) Remote resource.

**What's next.** macOS support tools — same support jobs on a different platform, not “Windows menus with new names.”`,
    },
    lightbulbMoment:
      "On Windows, prove adapter → address → profile → name → share/firewall/credentials before you blame 'the network.'",
    keyFacts: [
      "Windows networking settings live across Settings, adapter properties, firewall, and CLI",
      "Public vs Private profiles change discovery/sharing/firewall behavior",
      "Never force Private on an untrusted public network",
      "UNC and mapped drives still need credentials and permissions",
      "APIPA and DNS failures reuse Core 1 evidence rules",
      "RDP client ≠ RDP host",
      "Policy can lock client network settings — escalate, don’t bypass",
    ],
    guidedExample: {
      title: "Nine Windows client network tickets",
      steps: [
        "APIPA on Ethernet → link/DHCP path (ipconfig /all); not a random proxy wipe.",
        "Wi-Fi up but Public → explain discovery limits; only change profile when trust is real.",
        "Share by IP works, hostname fails → DNS/name resolution (Core 1 + nslookup).",
        "Mapped drive credential loop → Credential Manager / account rights — not nic reset first.",
        "User A can open \\\\fs\\hr, User B cannot → permissions/groups, not ‘broken SMB forever.’",
        "VPN up, internal names fail → VPN DNS/split-tunnel/name suffix — not ISP modem swap.",
        "User can RDP out; target Home PC can’t host → edition/host capability.",
        "Network discovery grayed on corp PC → policy; escalate with evidence.",
        "Browser fails; ping IP works → proxy/DNS/app path from Settings + Core 1 habits.",
      ],
    },
    commonMistakes: [
      "Setting Public Wi-Fi to Private to enable sharing",
      "Treating a successful ping as proof a share is authorized",
      "Clearing all credentials without documenting which mapping broke",
      "Reteaching entire Core 1 SOHO setup instead of Windows client layers",
      "Fighting MDM network locks with Registry hacks",
    ],
    examTraps: [
      "Public vs Private profile effects",
      "APIPA vs valid DHCP on Windows",
      "UNC/mapped drive credential failures",
      "RDP client vs host",
      "Firewall/profile blocking discovery or shares",
    ],
    realWorldScenario:
      "A traveling employee connects hotel Wi-Fi, marks it Private ‘so printers work,’ and exposes discovery on a shared network. You reset the profile to Public, explain the risk, and use VPN to reach office resources instead.",
    whenThisFails: [
      "If profile or sharing controls are policy-locked, escalate — don’t bypass",
      "If credentials are unknown, use authorized reset/recovery — don’t harvest passwords into tickets",
      "If multiple users fail on one share, escalate to file-server/identity owners after proving client basics",
    ],
    teacherReflectionPrompt:
      "List the Windows client ladder from adapter to credentials, and name one tool or command for each of the first five steps.",
    quiz: [
      {
        id: "ap-windows-networking-q1",
        prompt: "A café Wi-Fi network should normally use which Windows network profile?",
        choices: [
          { id: "a", text: "Public — limit discovery/sharing on untrusted networks" },
          { id: "b", text: "Private — always, so sharing works everywhere" },
          { id: "c", text: "Domain — automatically for every coffee shop" },
          { id: "d", text: "Metered only — profiles do not exist" },
        ],
        correctChoiceId: "a",
        explanation: "Untrusted networks stay Public; do not force Private for convenience.",
        objectiveId: "AP1202-1.7",
        difficulty: "easy",
      },
      {
        id: "ap-windows-networking-q2",
        prompt: "ipconfig /all shows 169.254.x.x with no usable gateway. Best framing?",
        choices: [
          { id: "a", text: "APIPA — DHCP/link path failed; prove cable/Wi-Fi/DHCP before static hacks" },
          { id: "b", text: "Proof DNS is perfect" },
          { id: "c", text: "Proof the PC should host RDP" },
          { id: "d", text: "Proof to set the profile to Private immediately" },
        ],
        correctChoiceId: "a",
        explanation: "APIPA is a DHCP/addressing signal from Core 1, visible on the Windows client.",
        objectiveId: "AP1202-1.7",
        difficulty: "medium",
      },
      {
        id: "ap-windows-networking-q3",
        prompt: "A share opens via \\\\192.168.1.50\\data but fails via \\\\fileserver\\data. Best next focus?",
        choices: [
          { id: "a", text: "Name resolution / DNS / hosts path — IP reachability already works" },
          { id: "b", text: "Replace the PSU" },
          { id: "c", text: "Disable the firewall on every guest network as step one" },
          { id: "d", text: "Format the share host" },
        ],
        correctChoiceId: "a",
        explanation: "IP works, name fails → resolution layer.",
        objectiveId: "AP1202-1.7",
        difficulty: "medium",
      },
      {
        id: "ap-windows-networking-q4",
        prompt: "Mapped drive keeps prompting for credentials. Best Windows-oriented checks include:",
        choices: [
          { id: "a", text: "Account rights on the share plus Credential Manager / stored credential conflicts" },
          { id: "b", text: "Only Disk Management initialize" },
          { id: "c", text: "Only changing the desktop wallpaper" },
          { id: "d", text: "Assuming ping failure is required first even when shares already open by IP" },
        ],
        correctChoiceId: "a",
        explanation: "Credential and permission layers sit above basic reachability.",
        objectiveId: "AP1202-1.7",
        difficulty: "medium",
      },
      {
        id: "ap-windows-networking-q5",
        prompt: "A user can run the Remote Desktop client, but their Windows 11 Home PC cannot accept inbound RDP. Why?",
        choices: [
          { id: "a", text: "Client capability ≠ host capability; Home typically cannot host RDP sessions" },
          { id: "b", text: "Home always hosts RDP by default" },
          { id: "c", text: "RDP client use proves hosting works" },
          { id: "d", text: "APIPA enables RDP hosting" },
        ],
        correctChoiceId: "a",
        explanation: "Edition/host distinction from editions topic applies on the client.",
        objectiveId: "AP1202-1.7",
        difficulty: "easy",
      },
    ],
    questionBank: [
      {
        id: "ap-windows-networking-b1",
        prompt: "UNC path example:",
        choices: [
          { id: "a", text: "\\\\server\\share" },
          { id: "b", text: "C:\\Windows\\System32 only" },
          { id: "c", text: "https:// only" },
        ],
        correctChoiceId: "a",
        explanation: "UNC addresses network shares.",
        objectiveId: "AP1202-1.7",
        difficulty: "easy",
      },
      {
        id: "ap-windows-networking-b2",
        prompt: "Metered connection primarily affects:",
        choices: [
          { id: "a", text: "How Windows treats bandwidth-heavy updates/sync on that link" },
          { id: "b", text: "CPU socket type" },
          { id: "c", text: "Whether NTFS exists" },
        ],
        correctChoiceId: "a",
        explanation: "Metered is a client bandwidth policy hint.",
        objectiveId: "AP1202-1.7",
        difficulty: "easy",
      },
      {
        id: "ap-windows-networking-b3",
        prompt: "Forgetting a Wi-Fi network is useful when:",
        choices: [
          { id: "a", text: "Saved profile/credentials or wrong SSID settings need a clean reconnect" },
          { id: "b", text: "You want to format the SSD" },
          { id: "c", text: "You need to disable TPM" },
        ],
        correctChoiceId: "a",
        explanation: "Forget resets the saved wireless profile.",
        objectiveId: "AP1202-1.7",
        difficulty: "easy",
      },
      {
        id: "ap-windows-networking-b4",
        prompt: "Proxy misconfiguration commonly breaks:",
        choices: [
          { id: "a", text: "Browser/app access that depends on the proxy path" },
          { id: "b", text: "SATA power delivery" },
          { id: "c", text: "UEFI Secure Boot keys only" },
        ],
        correctChoiceId: "a",
        explanation: "Proxy is a client path setting.",
        objectiveId: "AP1202-1.7",
        difficulty: "easy",
      },
      {
        id: "ap-windows-networking-b5",
        prompt: "Share access differs per user often because of:",
        choices: [
          { id: "a", text: "Permissions/group membership and credentials — not only ping success" },
          { id: "b", text: "Wallpaper color" },
          { id: "c", text: "Whether winver was run" },
        ],
        correctChoiceId: "a",
        explanation: "Authorization is per identity.",
        objectiveId: "AP1202-1.7",
        difficulty: "medium",
      },
      {
        id: "ap-windows-networking-b6",
        prompt: "Firewall profile awareness means:",
        choices: [
          { id: "a", text: "Rules can differ for Public/Private/Domain profiles" },
          { id: "b", text: "Firewall only exists on Linux" },
          { id: "c", text: "Firewall disables DNS permanently" },
        ],
        correctChoiceId: "a",
        explanation: "Profile-scoped firewall behavior.",
        objectiveId: "AP1202-1.7",
        difficulty: "easy",
      },
      {
        id: "ap-windows-networking-b7",
        prompt: "VPN connects but internal hostnames fail. Suspect:",
        choices: [
          { id: "a", text: "VPN DNS/suffix/split-tunnel name resolution — not only ‘internet down’" },
          { id: "b", text: "Missing HDMI cable" },
          { id: "c", text: "APFS on the Windows volume" },
        ],
        correctChoiceId: "a",
        explanation: "Internal name path over VPN is a classic client issue.",
        objectiveId: "AP1202-1.7",
        difficulty: "medium",
      },
      {
        id: "ap-windows-networking-b8",
        prompt: "Which statement best describes the limits of a successful ping test?",
        choices: [
          { id: "a", text: "It proves basic reachability, not that DNS, authentication, or the application works" },
          { id: "b", text: "It proves every network service is healthy" },
          { id: "c", text: "It proves the remote computer has no firewall" },
        ],
        correctChoiceId: "a",
        explanation: "Reuse Core 1 networking evidence habits.",
        objectiveId: "AP1202-1.7",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-windows-networking-f1",
        front: "Café Wi-Fi profile?",
        back: "Public — don’t force Private for sharing",
      },
      {
        id: "ap-windows-networking-f2",
        front: "169.254.x.x on Windows?",
        back: "APIPA — DHCP/link problem",
      },
      {
        id: "ap-windows-networking-f3",
        front: "IP share works, name fails?",
        back: "DNS/name resolution",
      },
      {
        id: "ap-windows-networking-f4",
        front: "UNC form?",
        back: "\\\\server\\share",
      },
      {
        id: "ap-windows-networking-f5",
        front: "RDP client vs host?",
        back: "Outbound client ≠ inbound host capability",
      },
      {
        id: "ap-windows-networking-f6",
        front: "Grayed discovery on corp PC?",
        back: "Likely policy — escalate",
      },
    ],
    assignments: [
      {
        id: "ap-lab-windows-client-network",
        title: "Windows client network inventory worksheet",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `Part A — Fictional tickets. For each: ladder step · Windows surface/command · evidence · safe action · verification · escalate?
1) APIPA on Ethernet
2) Wi-Fi connected as Public at a café
3) Share by IP OK, hostname fails
4) Mapped drive credential loop
5) One user denied on a share
6) VPN up, internal names fail
7) RDP client OK / Home PC cannot host
8) Network discovery grayed out
9) Proxy breaks browser only

Part B — Read-only on a practice PC (or fictional screenshot): adapter status · ipconfig /all (DHCP/IP/GW/DNS) · current profile · metered? · any VPN/proxy visible · sharing/discovery state if shown · firewall profile if shown. Do not paste passwords or connect to unauthorized systems.`,
        estimatedMinutes: 22,
        completionCriteria: [
          "Complete Part A for all nine tickets",
          "Complete Part B inventory without secrets",
        ],
        relatedTopicIds: ["ap-windows-networking", "ap-windows-settings"],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 50,
    difficulty: "medium",
  },

  {
    id: "ap-macos-tools",
    name: "macOS Tools & Support",
    prerequisites: ["ap-windows-networking", "ap-os-types"],
    objectives: ["AP1202-1.8"],
    lesson: {
      title: "Support macOS With Platform-Native Tools",
      content: `macOS support is **not** “find the Windows menu with a new name.” On A+, you pick Apple-native tools for evidence, respect Gatekeeper/FileVault/MDM/Activation Lock boundaries, and migrate data safely.

**Prior:** \`ap-os-types\` (why macOS/Apple hardware) · Windows tools/settings for *analogous jobs*, not 1:1 maps · CF device literacy as needed.

**Core support surfaces (current names; older labels only for recognition).**
- **Finder** — files, apps, external volumes, Go menu, view options, show hidden items (intro).
- **System Settings** (legacy: System Preferences) — accounts, network, privacy, displays, software update.
- **Spotlight** — find apps/files/settings quickly.
- **Dock / Mission Control** — running apps and desktop/window management.
- **Force Quit** — end hung apps (Apple menu or Option-Command-Esc).
- **Activity Monitor** — CPU/memory/energy/disk/network process view (≈ Task Manager job, different UI).
- **Disk Utility** — volumes, First Aid, APFS containers (careful; not casual erase).
- **Terminal** — command-line when needed; prefer guided safe commands.
- **Keychain Access** — stored passwords/certs (handle secrets carefully).
- **Time Machine** — backup/restore strategy (verify backups; don’t assume success).
- **Migration Assistant** — move user data/settings between Macs.
- **Console** — logs for app/system failures.
- **Screenshot tools** — evidence for tickets.
- **About This Mac / System Information** — model, chip (Intel/Apple silicon), storage, OS version.
- **App Store / Software Update** — apps and OS updates.
- **Recovery / Safe Mode** — repair and minimal-boot paths (model-specific entry; follow Apple docs).

**Apps & files.**
Applications folder · user home · \`.app\` bundles · DMG mount-and-drag installs · PKG installers · removal may leave support files — don’t promise “delete = purge everything.” APFS context · external drive format compatibility (exFAT common for cross-platform; macOS-native formats may be read-only elsewhere).

**Security & accounts.**
Standard vs admin · Apple ID vs local account · **FileVault** · **Gatekeeper** · Privacy permissions (mic, camera, screen recording, Accessibility, Full Disk Access) · MDM restrictions. **Do not** bypass Activation Lock, FileVault, Gatekeeper, or MDM. Admin ≠ authorization.

**What's next.** Linux client tools — shell-first evidence on distributions, via VM Lab when possible.`,
    },
    lightbulbMoment:
      "On macOS, name the native tool for the job — Activity Monitor for hung apps, Privacy for mic denial, Disk Utility for volume health — and never bypass Gatekeeper, FileVault, or Activation Lock.",
    keyFacts: [
      "System Settings is the modern configuration hub (System Preferences is the older name)",
      "Activity Monitor and Force Quit address hung or heavy processes",
      "Gatekeeper and privacy prompts often block apps before ‘the app is broken’",
      "Time Machine is backup — verify restore points; Migration Assistant moves Mac-to-Mac",
      "Deleting an app may not remove all related data",
      "FileVault/Activation Lock/MDM are stop lines — no bypass teaching",
      "APFS and external-drive formats affect cross-platform use",
    ],
    guidedExample: {
      title: "Ten macOS tickets",
      steps: [
        "App won’t open — unidentified developer → Gatekeeper/Privacy path; don’t teach disable-as-default.",
        "App spinning beachball → Force Quit + Activity Monitor; note CPU/memory.",
        "Disk almost full → Storage settings + large folders in Finder; clear safely.",
        "USB drive not writable → format/permissions/compatibility (APFS vs exFAT).",
        "Forgot Wi-Fi password saved locally → Keychain Access carefully; verify ownership.",
        "Time Machine failed overnight → destination availability, exclusions, disk space.",
        "Zoom can’t use mic → Privacy & Security microphone permission.",
        "Slow after login → login items + Activity Monitor + storage pressure.",
        "One app no network; others OK → app permission/proxy/VPN path, not only Wi-Fi off/on.",
        "Managed Mac grayed settings → MDM; escalate — don’t bypass.",
      ],
    },
    commonMistakes: [
      "Disabling Gatekeeper/FileVault as a generic fix",
      "Assuming drag-delete uninstalls every support file",
      "Teaching Activation Lock bypasses",
      "Treating Keychain as a place to paste secrets into tickets",
      "Forcing Windows mental models onto Finder/System Settings",
    ],
    examTraps: [
      "Best macOS tool for a symptom",
      "Gatekeeper vs privacy permission denials",
      "Time Machine vs Migration Assistant",
      "Force Quit / Activity Monitor roles",
      "MDM / Activation Lock / FileVault boundaries",
    ],
    realWorldScenario:
      "A designer’s microphone works in Voice Memos but not in a browser meeting. System Settings → Privacy & Security → Microphone shows the browser denied. Enabling the permission and retesting the call fixes it — a macOS privacy gate, not a new headset.",
    whenThisFails: [
      "If Activation Lock or FileVault recovery is blocked, stop and use Apple/org ownership processes",
      "If MDM locks a setting, escalate to device admins",
      "If Disk Utility erase is requested, require backup/authorization first",
    ],
    teacherReflectionPrompt:
      "Compare how you would gather evidence for a hung app on Windows versus macOS — name tools on each side without forcing identical menus.",
    quiz: [
      {
        id: "ap-macos-tools-q1",
        prompt: "An app is frozen and not responding. Best first macOS actions?",
        choices: [
          { id: "a", text: "Force Quit and/or inspect the process in Activity Monitor" },
          { id: "b", text: "Disable FileVault immediately" },
          { id: "c", text: "Bypass Activation Lock" },
          { id: "d", text: "Format the system volume in Disk Utility as step one" },
        ],
        correctChoiceId: "a",
        explanation: "Force Quit / Activity Monitor are the hung-app tools.",
        objectiveId: "AP1202-1.8",
        difficulty: "easy",
      },
      {
        id: "ap-macos-tools-q2",
        prompt: "A newly downloaded app is blocked from opening. Best framing?",
        choices: [
          { id: "a", text: "Gatekeeper/security controls — follow supported open/override paths; don’t teach bypass as default" },
          { id: "b", text: "Proof the Mac needs Windows Registry edits" },
          { id: "c", text: "Always turn off FileVault first" },
          { id: "d", text: "Delete the Keychain entirely" },
        ],
        correctChoiceId: "a",
        explanation: "Gatekeeper protects against untrusted software.",
        objectiveId: "AP1202-1.8",
        difficulty: "medium",
      },
      {
        id: "ap-macos-tools-q3",
        prompt: "Time Machine is primarily:",
        choices: [
          { id: "a", text: "A backup/restore system — verify backups; it is not Activation Lock bypass" },
          { id: "b", text: "A GPU overclocking utility" },
          { id: "c", text: "Identical to Force Quit" },
          { id: "d", text: "Only a screenshot tool" },
        ],
        correctChoiceId: "a",
        explanation: "Time Machine = backup strategy.",
        objectiveId: "AP1202-1.8",
        difficulty: "easy",
      },
      {
        id: "ap-macos-tools-q4",
        prompt: "Browser cannot use the microphone though Voice Memos can. Best Settings area?",
        choices: [
          { id: "a", text: "Privacy & Security → Microphone permissions for that browser" },
          { id: "b", text: "Disk Utility → Erase Macintosh HD" },
          { id: "c", text: "Migration Assistant → wipe network settings only" },
          { id: "d", text: "Disable Gatekeeper globally as required practice" },
        ],
        correctChoiceId: "a",
        explanation: "Per-app privacy permissions are common macOS blocks.",
        objectiveId: "AP1202-1.8",
        difficulty: "medium",
      },
      {
        id: "ap-macos-tools-q5",
        prompt: "Why is ‘delete the .app’ not always a complete uninstall?",
        choices: [
          { id: "a", text: "Support files, preferences, or related components may remain" },
          { id: "b", text: "macOS forbids deleting any app ever" },
          { id: "c", text: "Deleting an app always removes FileVault" },
          { id: "d", text: "Apps are only installed via diskpart" },
        ],
        correctChoiceId: "a",
        explanation: "Bundle delete ≠ full purge of all related data.",
        objectiveId: "AP1202-1.8",
        difficulty: "easy",
      },
    ],
    questionBank: [
      {
        id: "ap-macos-tools-b1",
        prompt: "Migration Assistant is used to:",
        choices: [
          { id: "a", text: "Transfer user data/settings between Macs (or from a backup)" },
          { id: "b", text: "Bypass MDM" },
          { id: "c", text: "Format Windows GPT disks" },
        ],
        correctChoiceId: "a",
        explanation: "Migration path for Mac data.",
        objectiveId: "AP1202-1.8",
        difficulty: "easy",
      },
      {
        id: "ap-macos-tools-b2",
        prompt: "Keychain Access stores:",
        choices: [
          { id: "a", text: "Passwords and certificates — handle as sensitive" },
          { id: "b", text: "Only desktop wallpapers" },
          { id: "c", text: "RAID arrays exclusively" },
        ],
        correctChoiceId: "a",
        explanation: "Secrets store — no ticket dumps.",
        objectiveId: "AP1202-1.8",
        difficulty: "easy",
      },
      {
        id: "ap-macos-tools-b3",
        prompt: "Disk Utility First Aid is for:",
        choices: [
          { id: "a", text: "Checking/repairing volume structure issues (with data caution)" },
          { id: "b", text: "Disabling Gatekeeper permanently" },
          { id: "c", text: "Hosting RDP on Home Windows" },
        ],
        correctChoiceId: "a",
        explanation: "Volume repair tool.",
        objectiveId: "AP1202-1.8",
        difficulty: "easy",
      },
      {
        id: "ap-macos-tools-b4",
        prompt: "DMG files commonly:",
        choices: [
          { id: "a", text: "Mount as disks for drag-install of applications" },
          { id: "b", text: "Replace APFS forever" },
          { id: "c", text: "Are Windows Registry hives" },
        ],
        correctChoiceId: "a",
        explanation: "Common macOS software distribution container.",
        objectiveId: "AP1202-1.8",
        difficulty: "easy",
      },
      {
        id: "ap-macos-tools-b5",
        prompt: "Console helps you:",
        choices: [
          { id: "a", text: "Inspect logs when apps/system components fail" },
          { id: "b", text: "Overclock GPUs" },
          { id: "c", text: "Bypass Activation Lock" },
        ],
        correctChoiceId: "a",
        explanation: "Logging/diagnostics UI.",
        objectiveId: "AP1202-1.8",
        difficulty: "easy",
      },
      {
        id: "ap-macos-tools-b6",
        prompt: "FileVault provides:",
        choices: [
          { id: "a", text: "Volume encryption — recovery keys/process matter; don’t disable as a casual fix" },
          { id: "b", text: "Free domain join for Windows Home" },
          { id: "c", text: "Automatic APIPA addresses" },
        ],
        correctChoiceId: "a",
        explanation: "Encryption boundary.",
        objectiveId: "AP1202-1.8",
        difficulty: "medium",
      },
      {
        id: "ap-macos-tools-b7",
        prompt: "Spotlight is best for:",
        choices: [
          { id: "a", text: "Quickly finding apps, files, and settings" },
          { id: "b", text: "Initializing unknown disks silently" },
          { id: "c", text: "Removing MDM profiles without approval" },
        ],
        correctChoiceId: "a",
        explanation: "Search launcher.",
        objectiveId: "AP1202-1.8",
        difficulty: "easy",
      },
      {
        id: "ap-macos-tools-b8",
        prompt: "Managed Mac with locked settings:",
        choices: [
          { id: "a", text: "Escalate to org admins — do not bypass MDM" },
          { id: "b", text: "Always wipe FileVault from Recovery as first step" },
          { id: "c", text: "Install Windows Registry tools" },
        ],
        correctChoiceId: "a",
        explanation: "MDM is an authorization boundary.",
        objectiveId: "AP1202-1.8",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-macos-tools-f1",
        front: "Hung Mac app?",
        back: "Force Quit / Activity Monitor",
      },
      {
        id: "ap-macos-tools-f2",
        front: "Blocked unidentified app?",
        back: "Gatekeeper/security — supported path only",
      },
      {
        id: "ap-macos-tools-f3",
        front: "Time Machine?",
        back: "Backup/restore — verify it worked",
      },
      {
        id: "ap-macos-tools-f4",
        front: "Mic denied to one app?",
        back: "Privacy & Security permissions",
      },
      {
        id: "ap-macos-tools-f5",
        front: "Mac-to-Mac move?",
        back: "Migration Assistant",
      },
      {
        id: "ap-macos-tools-f6",
        front: "Activation Lock / FileVault?",
        back: "No bypass — ownership/recovery process",
      },
    ],
    assignments: [
      {
        id: "ap-lab-macos-tool-select",
        title: "macOS support-tool selection worksheet",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `No Mac required. For each fictional ticket record: best tool · evidence · safe action · verification · data-protection concern · escalation boundary.

1) App frozen
2) App blocked by security prompt
3) Low disk space
4) External drive read-only
5) Need saved Wi-Fi password (authorized user)
6) Time Machine backup failed
7) Microphone permission missing for meeting app
8) Slow login
9) One app cannot reach network; others can
10) Settings grayed out on company Mac
11) User needs to migrate to a new Mac
12) Suspected volume errors

Do not document Activation Lock, FileVault, Gatekeeper, or MDM bypasses.`,
        estimatedMinutes: 20,
        completionCriteria: [
          "Complete tool/evidence/action tables for all twelve tickets",
          "Include at least one explicit ‘do not bypass’ note for MDM or FileVault",
        ],
        relatedTopicIds: ["ap-macos-tools", "ap-os-types"],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 45,
    difficulty: "medium",
  },

  {
    id: "ap-linux-client",
    name: "Linux Client Tools & Support",
    prerequisites: ["ap-macos-tools", "ap-os-types", "ap-virtualization"],
    objectives: ["AP1202-1.9"],
    lesson: {
      title: "Support Linux Clients With Safe Shell Evidence",
      content: `Linux client support is **shell + packages + permissions**, not a miniature RHCE course. On A+, you gather evidence with safe commands, respect \`sudo\` and distribution differences, and practice in VM Lab.

**Prior / referrals:** \`ap-os-types\` (Linux family) · \`ap-virtualization\` + **/cert/vm-lab** for guests · Core 1 network tool habits for \`ping\`/\`ip\` evidence limits · CF optional.

**Distributions differ.** Package managers (\`apt\` vs \`dnf\`/\`yum\`), desktop environments, paths, and release models vary. Never assume every distro is Ubuntu.

**Navigation & files.**
\`pwd\` \`ls\` \`cd\` \`cp\` \`mv\` \`rm\` \`mkdir\` \`rmdir\` \`touch\` \`cat\` \`less\` \`head\` \`tail\` \`grep\` \`find\` — confirm path before destructive ops; wildcards and recursive \`rm\` are dangerous.

**Identity & resources.**
\`whoami\` \`id\` \`uname\` \`hostname\` \`ps\` \`top\` \`free\` \`df\` \`du\` — context before changes.

**Permissions.**
\`chmod\` \`chown\` · user/group/other · rwx · least privilege · **\`sudo\` only when required** — not a personality. **Never teach \`chmod 777\` as a routine fix.**

**Packages & services.**
Recognize package managers · install/update concepts · \`systemctl status|start|stop|enable\` (service unit names vary) · prefer package tools over manually deleting installed files.

**Networking.**
\`ip\` (address/link) · \`ping\` · \`ss\` · DNS tools as objective-aligned · NetworkManager/\`nmcli\` intro. Same rule: reachability ≠ app authorization; no public scanning.

**Logs & storage.**
\`journalctl\` · common log locations · mount points · ext-family / XFS recognition · external drives may mount read-only (permissions/fs/ownership).

**Safe habit.**
Read-only first → confirm path/user → elevate only if needed → avoid unknown pasted scripts → record permissions before changes → verify → document.

**What's next (A7d — not this batch).** Application installation concepts and cloud productivity, then OS domain review after 1.10–1.11.`,
    },
    lightbulbMoment:
      "On Linux, prove who you are and where you are (\`whoami\`, \`pwd\`) before you change permissions, packages, or disks — and never use chmod 777 as a habit.",
    keyFacts: [
      "Distros differ — apt is not universal",
      "pwd/ls/whoami establish context before changes",
      "sudo is privilege, not a fix-all",
      "chmod 777 is not a routine solution",
      "systemctl manages services; unit names vary",
      "ip/ss/ping gather network evidence with Core 1 limits",
      "Practice safely in VM Lab guests",
    ],
    guidedExample: {
      title: "Ten Linux client tickets",
      steps: [
        "Cannot open file → ls -l permissions/ownership; chmod/chown only with justification.",
        "df -h shows 100% → find large dirs with du; clean safely.",
        "Service down → systemctl status; start/enable if authorized.",
        "Missing tool → package manager install for that distro.",
        "No address → ip addr / NetworkManager; DHCP vs cable.",
        "DNS fail → resolvers/connectivity; ping IP vs name.",
        "High CPU → top/ps; kill carefully if authorized.",
        "USB read-only → mounts/permissions/fs type — not chmod 777 blindly.",
        "Command failed → confirm pwd; maybe wrong directory.",
        "Update fails → repo/network/auth errors; don’t disable security repos casually.",
      ],
    },
    commonMistakes: [
      "Running sudo on every command by habit",
      "Assuming apt on Fedora/RHEL clones",
      "chmod 777 to ‘make it work’",
      "rm -rf from the wrong directory",
      "Treating file extensions as the only execute bit",
    ],
    examTraps: [
      "Best command for identity vs disk space vs process view",
      "Permission bits vs ownership",
      "Package manager recognition by distro family",
      "systemctl status meaning",
      "Safe vs destructive command choices",
    ],
    realWorldScenario:
      "A help-desk ticket says ‘Linux can’t open the report.’ \`ls -l\` shows the file owned by root with mode 600 while the user is in \`staff\`. Fixing ownership/group per policy restores access — not \`chmod 777\` on the whole tree.",
    whenThisFails: [
      "If sudo is denied, escalate — don’t hunt root passwords",
      "If a disk is failing, prioritize backup/escalation over aggressive fs fixes",
      "If the host is production, prefer VM Lab practice over live experiments",
    ],
    teacherReflectionPrompt:
      "Write a three-command read-only triage for ‘no network’ on a Linux laptop, and name what each command proves.",
    quiz: [
      {
        id: "ap-linux-client-q1",
        prompt: "Best first commands to confirm identity and working directory before file changes?",
        choices: [
          { id: "a", text: "whoami and pwd" },
          { id: "b", text: "rm -rf /" },
          { id: "c", text: "chmod 777 on /etc" },
          { id: "d", text: "dd if=/dev/zero of=/dev/sda" },
        ],
        correctChoiceId: "a",
        explanation: "Context before changes.",
        objectiveId: "AP1202-1.9",
        difficulty: "easy",
      },
      {
        id: "ap-linux-client-q2",
        prompt: "Why is chmod 777 a poor routine fix?",
        choices: [
          { id: "a", text: "It over-exposes files to every user class and hides the real permission design" },
          { id: "b", text: "It is required by every distro update" },
          { id: "c", text: "It only works on Windows" },
          { id: "d", text: "It disables journald permanently" },
        ],
        correctChoiceId: "a",
        explanation: "Least privilege — don’t open world-writable as habit.",
        objectiveId: "AP1202-1.9",
        difficulty: "medium",
      },
      {
        id: "ap-linux-client-q3",
        prompt: "df -h is primarily used to:",
        choices: [
          { id: "a", text: "Show mounted filesystem disk space usage" },
          { id: "b", text: "Change file ownership" },
          { id: "c", text: "Install deb packages only" },
          { id: "d", text: "Bypass sudo" },
        ],
        correctChoiceId: "a",
        explanation: "Disk free space view.",
        objectiveId: "AP1202-1.9",
        difficulty: "easy",
      },
      {
        id: "ap-linux-client-q4",
        prompt: "systemctl status ssh (example) helps you:",
        choices: [
          { id: "a", text: "See whether a service unit is active/failed and recent logs hints" },
          { id: "b", text: "Format ext4 automatically" },
          { id: "c", text: "Replace Activity Monitor on macOS" },
          { id: "d", text: "Grant Apple Activation Lock bypass" },
        ],
        correctChoiceId: "a",
        explanation: "Service status via systemd where used.",
        objectiveId: "AP1202-1.9",
        difficulty: "medium",
      },
      {
        id: "ap-linux-client-q5",
        prompt: "A Debian/Ubuntu-family package install commonly uses:",
        choices: [
          { id: "a", text: "apt (or apt-get) — other families may use dnf/yum" },
          { id: "b", text: "Only dnf on every Linux forever" },
          { id: "c", text: "diskpart" },
          { id: "d", text: "winver" },
        ],
        correctChoiceId: "a",
        explanation: "Package managers are distro-specific.",
        objectiveId: "AP1202-1.9",
        difficulty: "easy",
      },
    ],
    questionBank: [
      {
        id: "ap-linux-client-b1",
        prompt: "ls -l helps reveal:",
        choices: [
          { id: "a", text: "Permissions, ownership, and file metadata" },
          { id: "b", text: "Only GPU temperature" },
          { id: "c", text: "Windows edition SKUs" },
        ],
        correctChoiceId: "a",
        explanation: "Long listing for permissions.",
        objectiveId: "AP1202-1.9",
        difficulty: "easy",
      },
      {
        id: "ap-linux-client-b2",
        prompt: "sudo should be used:",
        choices: [
          { id: "a", text: "Only when a task truly requires elevated privileges" },
          { id: "b", text: "Before every pwd" },
          { id: "c", text: "To ignore organizational policy" },
        ],
        correctChoiceId: "a",
        explanation: "Least privilege.",
        objectiveId: "AP1202-1.9",
        difficulty: "easy",
      },
      {
        id: "ap-linux-client-b3",
        prompt: "ip addr is used to:",
        choices: [
          { id: "a", text: "Inspect interface addresses/link state" },
          { id: "b", text: "Delete user home directories" },
          { id: "c", text: "Enable FileVault" },
        ],
        correctChoiceId: "a",
        explanation: "Modern IP configuration view.",
        objectiveId: "AP1202-1.9",
        difficulty: "easy",
      },
      {
        id: "ap-linux-client-b4",
        prompt: "journalctl commonly inspects:",
        choices: [
          { id: "a", text: "systemd journal logs" },
          { id: "b", text: "Apple Keychain items" },
          { id: "c", text: "Windows winver builds only" },
        ],
        correctChoiceId: "a",
        explanation: "Log inspection on systemd systems.",
        objectiveId: "AP1202-1.9",
        difficulty: "easy",
      },
      {
        id: "ap-linux-client-b5",
        prompt: "grep is used to:",
        choices: [
          { id: "a", text: "Search text patterns in files or command output" },
          { id: "b", text: "Format XFS exclusively" },
          { id: "c", text: "Join Active Directory on Windows Home" },
        ],
        correctChoiceId: "a",
        explanation: "Pattern search tool.",
        objectiveId: "AP1202-1.9",
        difficulty: "easy",
      },
      {
        id: "ap-linux-client-b6",
        prompt: "Executable permission on Linux depends primarily on:",
        choices: [
          { id: "a", text: "Permission bits (and interpreter/headers) — not only a file extension" },
          { id: "b", text: ".exe extension only" },
          { id: "c", text: "Whether the wallpaper is set" },
        ],
        correctChoiceId: "a",
        explanation: "Execute bit matters more than extension.",
        objectiveId: "AP1202-1.9",
        difficulty: "medium",
      },
      {
        id: "ap-linux-client-b7",
        prompt: "Safe first-pass Linux practice location:",
        choices: [
          { id: "a", text: "VM Lab Linux guest with snapshots" },
          { id: "b", text: "Production database host without approval" },
          { id: "c", text: "Random public servers" },
        ],
        correctChoiceId: "a",
        explanation: "Contained practice.",
        objectiveId: "AP1202-1.9",
        difficulty: "easy",
      },
      {
        id: "ap-linux-client-b8",
        prompt: "free -h reports:",
        choices: [
          { id: "a", text: "Memory usage summary" },
          { id: "b", text: "Only DNS cache" },
          { id: "c", text: "Apple silicon fuse status" },
        ],
        correctChoiceId: "a",
        explanation: "RAM view.",
        objectiveId: "AP1202-1.9",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-linux-client-f1",
        front: "Before file changes?",
        back: "whoami + pwd (context)",
      },
      {
        id: "ap-linux-client-f2",
        front: "Disk space command?",
        back: "df -h (and du for dirs)",
      },
      {
        id: "ap-linux-client-f3",
        front: "chmod 777?",
        back: "Not a routine fix — over-exposes",
      },
      {
        id: "ap-linux-client-f4",
        front: "apt vs dnf?",
        back: "Distro package managers differ",
      },
      {
        id: "ap-linux-client-f5",
        front: "Service status?",
        back: "systemctl status <unit>",
      },
      {
        id: "ap-linux-client-f6",
        front: "Practice Linux where?",
        back: "VM Lab guest + snapshots",
      },
    ],
    assignments: [
      {
        id: "ap-lab-linux-client-safe",
        title: "Linux client safe-command lab",
        type: "external-lab",
        externalResourceId: "relearn-vm-lab",
        instructions: `Part A — Preferred: In /cert/vm-lab, use a Linux guest (snapshot first). Run ONLY safe/read-oriented commands and record one-line meaning:
pwd
ls
whoami
id
uname -a
df -h
free -h
ip addr
systemctl status <a safe example service on your guest, e.g. ssh or cron if present — do not stop production services>

Part B — If no VM: complete a fictional output interpretation worksheet for the same commands plus tickets: permission denied, disk full, service failed, missing package (apt vs dnf), no IPv4 address, DNS fail, high CPU process, read-only USB mount, wrong directory, update repo failure.

Forbidden for completion: rm -rf of system paths, chmod 777 recursively, disk wipe commands, public scanning.`,
        estimatedMinutes: 25,
        completionCriteria: [
          "Complete Part A on a VM Lab guest OR Part B fictional interpretations",
          "Include one note rejecting chmod 777 as a routine fix",
        ],
        relatedTopicIds: ["ap-linux-client", "ap-virtualization"],
        order: 1,
      },
    ],
    externalResources: [VM_LAB_RESOURCE, WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 50,
    difficulty: "medium",
  },
];
