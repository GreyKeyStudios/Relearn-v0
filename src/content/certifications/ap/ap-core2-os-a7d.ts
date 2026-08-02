import type { ExternalResource, Topic } from "../../types";
import { AP_OS_OBJECTIVE_TOPIC } from "./ap-os-remediation";

/**
 * A+ Core 2 Operating Systems — A7d (Michael 2026-08-01).
 * app install (1.10) → cloud productivity (1.11) → OS domain review (1.1–1.11).
 * Stop after OS first-pass — no Security / SW TS / Ops / CCNA C1.
 */

const WINDOWS_11_PC_RESOURCE: ExternalResource = {
  id: "windows-11-pc",
  name: "Windows 11 PC",
  url: "https://support.microsoft.com/windows",
  cost: "free",
  platform: "windows",
  installNotes:
    "Use a Windows 11 PC for read-only app/settings inventories and fictional deployment worksheets. Do not install pirated software, bypass org software policy, disable security controls to force installs, or use real organizational cloud credentials.",
};

function reviewHint(objectiveId: string): string {
  const topic = AP_OS_OBJECTIVE_TOPIC[objectiveId];
  return topic ? ` If this was unclear, review topic \`${topic}\`.` : "";
}

export const apCore2OsBatch4Topics: Topic[] = [
  {
    id: "ap-app-install",
    name: "Application Installation & Compatibility",
    prerequisites: ["ap-linux-client", "ap-os-types", "ap-windows-editions"],
    objectives: ["AP1202-1.10"],
    lesson: {
      title: "Deploy Applications Through a Compatibility Lifecycle",
      content: `Applications fail for **compatibility, trust, permissions, and policy** — not only “click Next.” On A+, manage the lifecycle: requirements → source → compatibility → install → configure → permissions → updates → troubleshoot → remove → verify.

**Prior:** \`ap-os-types\` / \`ap-windows-editions\` (OS/arch/edition) · settings/tools for associations & startup · CF \`cf-install-uninstall-apps\`.

**Sources & formats.**
Microsoft Store · vendor sites · org software portals · package managers (when aligned) · EXE/MSI · platform bundles (DMG/PKG on macOS; distro packages on Linux) · portable apps · browser/SaaS apps · subscription clients. Prefer **approved** sources; verify publisher/origin; never use cracked/pirated installers.

**Methods.**
Local · network · managed deployment · silent/unattended (recognition) · per-user vs all-users · admin install · app virtualization (recognition). Elevation may be required — and **authorization** may still be denied.

**Compatibility checks.**
OS/version/edition · CPU architecture (x64/ARM/32-bit) · RAM/storage · runtimes/frameworks · drivers · browser · network/proxy · licensing/accounts · peripherals · version conflicts.

**Configuration.**
Defaults · file associations · startup · notifications · data locations · update channel · sync · plug-ins/extensions · app proxy settings · profiles · enterprise policy locks.

**Updates & repair.**
Security vs feature updates · auto vs managed · rollback awareness · repair/reinstall · cache/profile corruption · dependency breakage after updates.

**Removal.**
Supported uninstall · leftover user data · shared components · extensions/services/startup · license deactivation. Deleting the install folder is **not** always a proper uninstall.

**Trust boundaries.**
Approved source · verify publisher · no piracy · don’t disable AV/firewall/SmartScreen just to force install · don’t bypass org software policy · confirm licensing · document changes.

**Troubleshoot layers.**
Unsupported OS/arch · resources · missing dependency · permissions · security control · corrupt installer · network/proxy · license/account · version conflict · profile · org policy · app defect.

**What's next.** Cloud productivity apps — identity, sync, sharing, and local clients.`,
    },
    lightbulbMoment:
      "App deployment is a compatibility and trust project — prove OS/arch/source/license before you click Install, and uninstall with the supported path.",
    keyFacts: [
      "Lifecycle: requirements → source → compatibility → install → configure → update → remove → verify",
      "Store/portal/vendor sources beat random downloads",
      "Architecture and edition mismatches are common install blockers",
      "Per-user vs all-users installs change who sees the app",
      "Deleting a folder is not always a clean uninstall",
      "Never disable security or bypass org software policy to force installs",
      "Updates can break apps — plan repair/rollback",
    ],
    guidedExample: {
      title: "Ten application tickets",
      steps: [
        "Installer: unsupported OS → check vendor matrix; upgrade/migrate OS or choose supported app.",
        "32-bit LOB fails on ARM → prove emulation/vendor support or different hardware/OS.",
        "Installs for admin only → per-user vs all-users / permissions.",
        "Blocked by policy → escalate software approval; don’t sideload cracks.",
        "App opens; cloud feature fails → network/proxy/account (not always reinstall).",
        "Update causes crashes → repair, rollback channel, or known-issue advisory.",
        "PDF opens in wrong app → default apps / file association.",
        "Uninstalled but data remains → expected leftover profiles; clean per policy.",
        "Browser odd behavior after ‘helper’ → remove extension.",
        "Elevation prompt; user not authorized → stop; request admin/deploy path.",
      ],
    },
    commonMistakes: [
      "Downloading cracked installers",
      "Turning off SmartScreen/AV to force a shady setup",
      "Ignoring ARM/x64 compatibility",
      "Assuming delete-folder = uninstall",
      "Fighting software policy with local admin rights",
    ],
    examTraps: [
      "Best next check when installer refuses OS/arch",
      "Trusted source vs random download",
      "Per-user vs machine install symptoms",
      "File association vs reinstall",
      "Policy/security blocks vs corrupt MSI",
    ],
    realWorldScenario:
      "A user downloads a ‘free Office’ EXE from a search ad. SmartScreen warns; the hash doesn’t match the vendor. You stop the install, remove the file, and redirect them to the org portal — licensing and malware risk avoided in one refusal.",
    whenThisFails: [
      "If software is unapproved, escalate procurement — don’t pirate",
      "If elevation is required without authorization, stop",
      "If security tools block a known-good package, escalate security/deploy owners with evidence",
    ],
    teacherReflectionPrompt:
      "List five compatibility facts you would collect before installing a specialty LOB app on a new Windows 11 ARM laptop.",
    quiz: [
      {
        id: "ap-app-install-q1",
        prompt: "An installer reports the OS is unsupported. Best first action?",
        choices: [
          { id: "a", text: "Verify the vendor OS/version matrix and plan a supported path — don’t force with security disabled" },
          { id: "b", text: "Disable SmartScreen and antivirus and retry indefinitely" },
          { id: "c", text: "Download a cracked ‘patched’ installer" },
          { id: "d", text: "Delete System32 to free space" },
        ],
        correctChoiceId: "a",
        explanation: "Compatibility evidence before risky workarounds.",
        objectiveId: "AP1202-1.10",
        difficulty: "easy",
      },
      {
        id: "ap-app-install-q2",
        prompt: "A 32-bit specialty app fails on an ARM Windows device. Best framing?",
        choices: [
          { id: "a", text: "Architecture compatibility — prove emulation/vendor support or change platform" },
          { id: "b", text: "Always works if you rename the EXE" },
          { id: "c", text: "Proof to format the EFI partition" },
          { id: "d", text: "Only a wallpaper problem" },
        ],
        correctChoiceId: "a",
        explanation: "CPU architecture matters for apps.",
        objectiveId: "AP1202-1.10",
        difficulty: "medium",
      },
      {
        id: "ap-app-install-q3",
        prompt: "Why is deleting the application folder often incomplete uninstall?",
        choices: [
          { id: "a", text: "Services, shortcuts, registry/app data, or shared components may remain" },
          { id: "b", text: "Windows forbids uninstall forever" },
          { id: "c", text: "It always removes BitLocker" },
          { id: "d", text: "It converts the PC to Linux" },
        ],
        correctChoiceId: "a",
        explanation: "Use supported uninstall paths.",
        objectiveId: "AP1202-1.10",
        difficulty: "easy",
      },
      {
        id: "ap-app-install-q4",
        prompt: "Organization software policy blocks an install. Correct response?",
        choices: [
          { id: "a", text: "Escalate for approved deployment — do not bypass with pirate or unmanaged sideload" },
          { id: "b", text: "Disable all security and install anyway" },
          { id: "c", text: "Use any random EXE from a forum" },
          { id: "d", text: "chmod 777 the installer on Windows" },
        ],
        correctChoiceId: "a",
        explanation: "Policy is an authorization boundary.",
        objectiveId: "AP1202-1.10",
        difficulty: "easy",
      },
      {
        id: "ap-app-install-q5",
        prompt: "PDFs open in the wrong app after a new install. Best first fix path?",
        choices: [
          { id: "a", text: "Default apps / file association settings" },
          { id: "b", text: "diskpart clean all" },
          { id: "c", text: "Disable the firewall permanently" },
          { id: "d", text: "Bypass MFA" },
        ],
        correctChoiceId: "a",
        explanation: "Associations are configuration, not always reinstall.",
        objectiveId: "AP1202-1.10",
        difficulty: "medium",
      },
    ],
    questionBank: [
      {
        id: "ap-app-install-b1",
        prompt: "MSI packages are commonly associated with:",
        choices: [
          { id: "a", text: "Windows Installer–based deployments" },
          { id: "b", text: "Only macOS DMG mounts" },
          { id: "c", text: "APFS containers exclusively" },
        ],
        correctChoiceId: "a",
        explanation: "MSI = Windows Installer family.",
        objectiveId: "AP1202-1.10",
        difficulty: "easy",
      },
      {
        id: "ap-app-install-b2",
        prompt: "Per-user install symptom:",
        choices: [
          { id: "a", text: "App available to the installing user but not other local profiles" },
          { id: "b", text: "Always installs on every PC in the company automatically" },
          { id: "c", text: "Removes Secure Boot" },
        ],
        correctChoiceId: "a",
        explanation: "Scope of install matters.",
        objectiveId: "AP1202-1.10",
        difficulty: "medium",
      },
      {
        id: "ap-app-install-b3",
        prompt: "Missing runtime/framework often presents as:",
        choices: [
          { id: "a", text: "Install or launch failure citing a prerequisite component" },
          { id: "b", text: "A new CPU socket" },
          { id: "c", text: "Automatic domain join" },
        ],
        correctChoiceId: "a",
        explanation: "Dependency layer.",
        objectiveId: "AP1202-1.10",
        difficulty: "easy",
      },
      {
        id: "ap-app-install-b4",
        prompt: "Portable applications typically:",
        choices: [
          { id: "a", text: "Run with less traditional install footprint — still need trust/policy checks" },
          { id: "b", text: "Bypass all licensing forever" },
          { id: "c", text: "Are immune to malware" },
        ],
        correctChoiceId: "a",
        explanation: "Portable ≠ untrusted-OK.",
        objectiveId: "AP1202-1.10",
        difficulty: "easy",
      },
      {
        id: "ap-app-install-b5",
        prompt: "Silent/unattended install (recognition) means:",
        choices: [
          { id: "a", text: "Scripted/answered installs for repeatable deployment" },
          { id: "b", text: "Installs that skip licensing legally by default" },
          { id: "c", text: "Only screenshot tools" },
        ],
        correctChoiceId: "a",
        explanation: "Automation recognition depth.",
        objectiveId: "AP1202-1.10",
        difficulty: "easy",
      },
      {
        id: "ap-app-install-b6",
        prompt: "After a bad update, a useful path may include:",
        choices: [
          { id: "a", text: "Repair, supported rollback/previous version, or vendor guidance — with data caution" },
          { id: "b", text: "Deleting the Windows folder" },
          { id: "c", text: "Disabling SmartScreen permanently as policy" },
        ],
        correctChoiceId: "a",
        explanation: "Repair/rollback awareness.",
        objectiveId: "AP1202-1.10",
        difficulty: "medium",
      },
      {
        id: "ap-app-install-b7",
        prompt: "Browser extension unexpected behavior — first remove path?",
        choices: [
          { id: "a", text: "Disable/remove the extension and retest" },
          { id: "b", text: "format C:" },
          { id: "c", text: "Bypass Gatekeeper on a PC" },
        ],
        correctChoiceId: "a",
        explanation: "Isolate the extension.",
        objectiveId: "AP1202-1.10",
        difficulty: "easy",
      },
      {
        id: "ap-app-install-b8",
        prompt: "Before uninstalling a business application, first verify:",
        choices: [
          { id: "a", text: "Authorization, user data/settings, dependencies, license/account state, and recovery or reinstall path" },
          { id: "b", text: "Only that the icon can be deleted" },
          { id: "c", text: "That network routing is redesigned" },
        ],
        correctChoiceId: "a",
        explanation: "Safe removal protects data, dependencies, entitlement, and recovery before changing the application state.",
        objectiveId: "AP1202-1.10",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-app-install-f1",
        front: "App lifecycle starts with?",
        back: "Requirements + trusted source + compatibility",
      },
      {
        id: "ap-app-install-f2",
        front: "ARM + 32-bit LOB?",
        back: "Prove support/emulation — don’t assume",
      },
      {
        id: "ap-app-install-f3",
        front: "Delete folder = uninstall?",
        back: "Not always — use supported removal",
      },
      {
        id: "ap-app-install-f4",
        front: "Policy blocks install?",
        back: "Escalate approval — don’t bypass",
      },
      {
        id: "ap-app-install-f5",
        front: "Wrong app opens files?",
        back: "Default apps / associations",
      },
      {
        id: "ap-app-install-f6",
        front: "Cracked installer?",
        back: "Refuse — malware and licensing risk",
      },
    ],
    assignments: [
      {
        id: "ap-lab-app-deploy-worksheet",
        title: "Application deployment worksheet",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `No paid software or admin installs required. For each fictional app, complete:
Purpose · approved source · OS/arch/edition compatibility · RAM/storage · permissions/elevation · dependencies · licensing/account · install method · validation plan · rollback/uninstall plan · support owner

Apps:
1) Specialty LOB Windows x64 app from vendor portal
2) Microsoft Store utility
3) macOS DMG creative tool (compatibility notes)
4) Linux package via distro repos
5) Browser SaaS app (no local install)
6) Portable diagnostic tool (trust/policy concerns)
7) MSI deployed per-machine for all users

Also triage three failures: unsupported OS · policy block · wrong file association.`,
        estimatedMinutes: 22,
        completionCriteria: [
          "Complete deployment tables for all seven apps",
          "Document safest next action for the three failure cases",
        ],
        relatedTopicIds: ["ap-app-install"],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 45,
    difficulty: "medium",
  },

  {
    id: "ap-cloud-productivity",
    name: "Cloud Productivity & Collaboration",
    prerequisites: ["ap-app-install", "ap-cloud-concepts"],
    objectives: ["AP1202-1.11"],
    lesson: {
      title: "Support Cloud Productivity as Identity, Sync, Sharing, and Clients",
      content: `Cloud productivity is not “email in a browser.” On A+, treat it as an integrated stack: **hosted apps + identity + storage + sync + sharing + permissions + communication + local clients**.

**Prior:** \`ap-app-install\` (clients and trust) · Core 1 \`ap-cloud-concepts\` (SaaS, sync vs backup) · Windows networking for path/proxy symptoms.

**What the suite usually includes.**
Hosted email · calendars · contacts · cloud storage · docs/sheets/slides · collaboration · chat · video meetings · shared workspaces · version history · coauthoring · file sharing · offline access · sync · desktop/browser/mobile clients · account/licensing · org tenancy/workspace (intro).

**Core distinctions (exam + ticket gold).**

1. **Sync ≠ backup.** Sync mirrors/coordinates state — deletions and corruption can sync. Version history may help but is not a guaranteed backup. Backup needs a recovery strategy.
2. **Sharing ≠ ownership.** Access without owning the file is common. Link access ≠ named-user access. Permissions may be view / comment / edit / manage. Removing access does not always remove already-downloaded copies.
3. **Local vs cloud state.** Online-only · cached · synchronized · offline. A broken desktop client does **not** prove cloud data is gone — try browser isolation.

**Identity & access.**
Personal vs org account · multiple signed-in accounts · licensing · session expiry · MFA · shared mailbox/workspace (intro) · guest access · permission inheritance (where relevant) · org policy · device compliance/MDM restrictions.

**Never:** bypass MFA, tenant controls, or org policy. Do not move org data into personal accounts. Do not expose tokens, passwords, or private links.

**Troubleshoot layers.**
Local app · browser · local cache · sync client · network · account · license · permission · org policy · service outage · file conflict · storage quota · device-management restriction.

**Privacy boundaries.**
Verify recipients · least privilege · avoid public links unless authorized · protect confidential data · know retention/recovery limits · follow offline/download policy · escalate compromise or leakage.

**What's next.** OS domain review — integrate AP1202-1.1 through 1.11.`,
    },
    lightbulbMoment:
      "Name the layer first — account, permission, sync, client, network, or service — before you reinstall Office or blame the PC.",
    keyFacts: [
      "Cloud productivity = apps + identity + storage + sync + sharing + clients",
      "Sync mirrors state; backup is a recovery strategy",
      "Sharing grants access; ownership may stay with another user or the org",
      "Browser vs desktop isolates client problems",
      "Wrong org account / wrong license looks like ‘broken email’",
      "Service-wide outage ≠ reimage one PC",
      "Never bypass MFA or move org data to personal accounts",
    ],
    guidedExample: {
      title: "Ten cloud productivity tickets",
      steps: [
        "Email works in browser, not desktop → client/cache/account on desktop; prove browser first.",
        "Shared file read-only → permission/share role, not ‘broken Word’.",
        "Offline edit conflict → sync conflict; keep both copies until owner decides.",
        "Calendar updates on phone only → sync/account on the lagging device.",
        "Meeting camera blocked → OS/app privacy permission, not always hardware.",
        "Cloud drive full → quota/storage layer; free space or escalate license/storage.",
        "Wrong organization account signed in → switch/sign out; verify tenant context.",
        "File deleted → version history / recycle / recovery per policy — not always gone forever.",
        "Desktop sync paused (battery/metered) → client restriction, not service outage.",
        "Entire org fails same SaaS + status red → service/provider path; don’t mass-reimage.",
      ],
    },
    commonMistakes: [
      "Treating sync as a backup",
      "Reinstalling the desktop suite before proving browser access",
      "Assuming share access equals ownership",
      "Moving company files into a personal cloud account ‘to fix it’",
      "Bypassing MFA or asking users for passwords in chat",
    ],
    examTraps: [
      "Sync vs backup",
      "Sharing vs ownership / link vs named user",
      "Browser works → client/cache layer",
      "Org-wide vs single-user isolation",
      "Quota, license, and wrong-account symptoms",
    ],
    realWorldScenario:
      "A manager says ‘OneDrive deleted my folder.’ Sync shows the delete from another device. You check recycle/version history, confirm they still own the library, and restore — then remind the team that sync propagates deletes and is not the backup plan.",
    whenThisFails: [
      "If MFA or tenant policy blocks access, escalate identity/admins — don’t bypass",
      "If org-wide service is down, communicate and wait/status — don’t reimage fleets",
      "If data may have leaked via a public link, escalate security/privacy owners immediately",
    ],
    teacherReflectionPrompt:
      "Write a six-line triage script that forces: account context → browser proof → sync state → permission/ownership → service scope → escalation owner.",
    quiz: [
      {
        id: "ap-cloud-productivity-q1",
        prompt: "Email works in the browser but not the desktop client. Best first framing?",
        choices: [
          { id: "a", text: "Local client/cache/account layer — browser already proved the cloud mailbox path" },
          { id: "b", text: "Immediately rebuild the company datacenter" },
          { id: "c", text: "Disable MFA for everyone" },
          { id: "d", text: "Format the EFI system partition" },
        ],
        correctChoiceId: "a",
        explanation: "Isolate client vs service with browser evidence.",
        objectiveId: "AP1202-1.11",
        difficulty: "easy",
      },
      {
        id: "ap-cloud-productivity-q2",
        prompt: "Sync versus backup — correct statement?",
        choices: [
          { id: "a", text: "Sync coordinates current state and can propagate deletes; backup is a recovery strategy" },
          { id: "b", text: "Sync always equals a complete organizational backup" },
          { id: "c", text: "Backup only exists inside chat apps" },
          { id: "d", text: "Sync disables MFA" },
        ],
        correctChoiceId: "a",
        explanation: "Core distinction from Core 1 cloud + this objective.",
        objectiveId: "AP1202-1.11",
        difficulty: "easy",
      },
      {
        id: "ap-cloud-productivity-q3",
        prompt: "A shared file opens read-only for a collaborator. Best focus?",
        choices: [
          { id: "a", text: "Share/permission role (view vs edit) and ownership — not always reinstall" },
          { id: "b", text: "Replace the GPU" },
          { id: "c", text: "Bypass organizational policy with a personal account" },
          { id: "d", text: "diskpart clean all" },
        ],
        correctChoiceId: "a",
        explanation: "Sharing ≠ ownership; roles matter.",
        objectiveId: "AP1202-1.11",
        difficulty: "medium",
      },
      {
        id: "ap-cloud-productivity-q4",
        prompt: "Every user in the company reports the same SaaS outage and the status page is red. Best next path?",
        choices: [
          { id: "a", text: "Treat as service/provider scope — communicate and wait/status; don’t mass-reimage PCs first" },
          { id: "b", text: "Reinstall Office on every laptop immediately as step one" },
          { id: "c", text: "Move all org mail to personal Gmail accounts" },
          { id: "d", text: "Disable SmartScreen company-wide" },
        ],
        correctChoiceId: "a",
        explanation: "Service-wide isolation from Core 1 cloud habits.",
        objectiveId: "AP1202-1.11",
        difficulty: "easy",
      },
      {
        id: "ap-cloud-productivity-q5",
        prompt: "A user is signed into the wrong organization account. Likely symptom family?",
        choices: [
          { id: "a", text: "Missing mailbox/files/licenses that exist under the correct tenant context" },
          { id: "b", text: "Mandatory ECC RAM failure" },
          { id: "c", text: "APIPA only on printers" },
          { id: "d", text: "Secure Boot removal" },
        ],
        correctChoiceId: "a",
        explanation: "Account/tenant context is a primary layer.",
        objectiveId: "AP1202-1.11",
        difficulty: "medium",
      },
    ],
    questionBank: [
      {
        id: "ap-cloud-productivity-b1",
        prompt: "Removing a user’s share access means:",
        choices: [
          { id: "a", text: "They may lose cloud access — downloaded copies can still exist locally" },
          { id: "b", text: "Every offline copy on Earth is instantly destroyed" },
          { id: "c", text: "MFA is disabled" },
        ],
        correctChoiceId: "a",
        explanation: "Access revocation ≠ remote wipe of every copy.",
        objectiveId: "AP1202-1.11",
        difficulty: "medium",
      },
      {
        id: "ap-cloud-productivity-b2",
        prompt: "Offline edit then sync conflict — safe habit?",
        choices: [
          { id: "a", text: "Preserve both versions until the owner reconciles; don’t silently overwrite" },
          { id: "b", text: "Delete the cloud copy first without evidence" },
          { id: "c", text: "Bypass MFA to force merge" },
        ],
        correctChoiceId: "a",
        explanation: "Conflict handling protects data.",
        objectiveId: "AP1202-1.11",
        difficulty: "medium",
      },
      {
        id: "ap-cloud-productivity-b3",
        prompt: "Cloud drive reports full storage. Layer?",
        choices: [
          { id: "a", text: "Quota/storage — free space, archive, or escalate license/storage" },
          { id: "b", text: "Replace the CMOS battery first" },
          { id: "c", text: "Always a broken HDMI cable" },
        ],
        correctChoiceId: "a",
        explanation: "Quota is its own layer.",
        objectiveId: "AP1202-1.11",
        difficulty: "easy",
      },
      {
        id: "ap-cloud-productivity-b4",
        prompt: "Meeting camera blocked by OS permission — first check?",
        choices: [
          { id: "a", text: "Privacy/camera permission for the meeting app" },
          { id: "b", text: "diskpart clean all" },
          { id: "c", text: "Disable the org tenant" },
        ],
        correctChoiceId: "a",
        explanation: "Client OS permission before hardware swap.",
        objectiveId: "AP1202-1.11",
        difficulty: "easy",
      },
      {
        id: "ap-cloud-productivity-b5",
        prompt: "Desktop sync paused due to battery saver / metered network means:",
        choices: [
          { id: "a", text: "Client restriction — not automatically a provider outage" },
          { id: "b", text: "Proof the SaaS vendor is offline worldwide" },
          { id: "c", text: "License was revoked for all tenants" },
        ],
        correctChoiceId: "a",
        explanation: "Local client policy/power settings.",
        objectiveId: "AP1202-1.11",
        difficulty: "easy",
      },
      {
        id: "ap-cloud-productivity-b6",
        prompt: "Least privilege when sharing a confidential folder:",
        choices: [
          { id: "a", text: "Named users with the minimum role needed; avoid public links unless authorized" },
          { id: "b", text: "Public link with edit for convenience always" },
          { id: "c", text: "Paste the private link into a public forum" },
        ],
        correctChoiceId: "a",
        explanation: "Privacy and data boundaries.",
        objectiveId: "AP1202-1.11",
        difficulty: "easy",
      },
      {
        id: "ap-cloud-productivity-b7",
        prompt: "Moving org files into a personal cloud account to ‘fix sync’ is:",
        choices: [
          { id: "a", text: "A data-protection violation risk — don’t do it" },
          { id: "b", text: "Required CompTIA procedure" },
          { id: "c", text: "How MFA works" },
        ],
        correctChoiceId: "a",
        explanation: "Org vs personal account boundary.",
        objectiveId: "AP1202-1.11",
        difficulty: "easy",
      },
      {
        id: "ap-cloud-productivity-b8",
        prompt: "Which cloud concept is most useful when troubleshooting a collaboration suite?",
        choices: [
          { id: "a", text: "SaaS delivery and the difference between synchronization and backup" },
          { id: "b", text: "Printer fuser temperature" },
          { id: "c", text: "Motherboard form factor" },
        ],
        correctChoiceId: "a",
        explanation: "Build on Virt/Cloud — don’t reinvent cloud basics.",
        objectiveId: "AP1202-1.11",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-cloud-productivity-f1",
        front: "Sync ≠ ?",
        back: "Not a guaranteed backup / recovery strategy",
      },
      {
        id: "ap-cloud-productivity-f2",
        front: "Sharing ≠ ?",
        back: "Not the same as ownership",
      },
      {
        id: "ap-cloud-productivity-f3",
        front: "Browser OK, desktop fails?",
        back: "Client/cache/account layer on desktop",
      },
      {
        id: "ap-cloud-productivity-f4",
        front: "Org-wide SaaS red status?",
        back: "Service scope — don’t mass-reimage first",
      },
      {
        id: "ap-cloud-productivity-f5",
        front: "Wrong tenant signed in?",
        back: "Missing apps/mail/files that exist elsewhere",
      },
      {
        id: "ap-cloud-productivity-f6",
        front: "Public edit link for secrets?",
        back: "Avoid unless authorized — least privilege",
      },
    ],
    assignments: [
      {
        id: "ap-lab-cloud-productivity-worksheet",
        title: "Cloud productivity support worksheet",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `No real organizational credentials. Use fictional users/files only.

For each ticket, document:
Account context (personal vs org / which tenant) · access level (view/comment/edit/own) · local vs cloud state · sync status · user-specific vs service-wide · safe corrective action · privacy/data-protection notes · escalation owner

Tickets:
1) Alex — desktop Outlook fails; webmail works
2) Bri — shared budget sheet is read-only; needs edit
3) Casey — offline edits created “conflicted copy”
4) Dana — calendar stale on laptop; phone current
5) Ellis — Teams camera permission denied
6) Fran — OneDrive/Google Drive quota full
7) Gus — signed into Contoso instead of Fabrikam
8) Harper — deleted folder; needs version/recycle review
9) Ivy — sync paused on metered cellular
10) Org-wide — all users report same SaaS outage + red status

Also write one paragraph on why sync is not backup and why org data must not move to personal accounts.`,
        estimatedMinutes: 24,
        completionCriteria: [
          "Complete triage rows for all ten tickets",
          "Include privacy/escalation notes on at least three tickets",
          "State sync≠backup and org-vs-personal boundary in plain language",
        ],
        relatedTopicIds: ["ap-cloud-productivity", "ap-cloud-concepts"],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 45,
    difficulty: "medium",
  },

  {
    id: "ap-os-domain-review",
    name: "Operating Systems Domain Review",
    prerequisites: ["ap-cloud-productivity"],
    objectives: [
      "AP1202-1.1",
      "AP1202-1.2",
      "AP1202-1.3",
      "AP1202-1.4",
      "AP1202-1.5",
      "AP1202-1.6",
      "AP1202-1.7",
      "AP1202-1.8",
      "AP1202-1.9",
      "AP1202-1.10",
      "AP1202-1.11",
    ],
    lesson: {
      title: "Integrate the Operating Systems Domain",
      content: `This checkpoint integrates Core 2 Operating Systems end-to-end. Practice **support reasoning** — choose the OS/tool/layer, gather evidence, act within authorization, verify, and document. Avoid menu trivia and naked command memorization.

**Path you completed.**
1. **OS types** — families, filesystems, compatibility
2. **Install/upgrade** — media, partitioning, upgrade vs clean, drivers
3. **Windows editions** — Home/Pro/Enterprise features that matter on tickets
4. **Windows tools** — Task Manager, Event Viewer, Disk Management, MMC habits
5. **Windows CLI** — safe evidence commands; authorization before destructive ops
6. **Windows settings** — accounts, apps, privacy, update, policy boundaries
7. **Windows networking** — client profiles, IP/DNS, shares, Core 1 reuse
8. **macOS tools** — native support tools; Gatekeeper/FileVault/MDM boundaries
9. **Linux client** — safe shell evidence; distro package differences; VM Lab
10. **App install** — lifecycle, trust, compatibility, uninstall honesty
11. **Cloud productivity** — identity, sync≠backup, sharing≠ownership, clients

**Missed questions map to:**

${Object.entries(AP_OS_OBJECTIVE_TOPIC)
  .map(([obj, topic]) => `- ${obj} → \`${topic}\``)
  .join("\n")}

**Habits.** Name the platform and layer. Prefer approved sources and least privilege. Prove browser vs desktop for cloud. Don’t equate platforms falsely. Don’t start Core 2 Security content here — that domain is next when authorized.

**Looking ahead.** After this review, Operating Systems is first-pass. Next Core 2 domain when authorized: Security (starting \`ap-security-measures\` / Zero Trust). Full A+ track stays **Planned** until Security, Software Troubleshooting, and Operational Procedures are first-pass.`,
    },
    lightbulbMoment:
      "OS support is layer selection under authorization — OS/edition, tool, CLI, settings, network, app lifecycle, or cloud identity — then evidence before change.",
    keyFacts: [
      "OS domain path: types → install → editions → tools → CLI → settings → Win net → macOS → Linux → apps → cloud → review",
      "Platform differences are real — don’t fake equivalence",
      "Windows client networking reuses Core 1; don’t relearn TCP/IP from zero here",
      "App install is trust + compatibility, not only file extensions",
      "Cloud productivity: sync≠backup; sharing≠ownership; browser isolates clients",
      "Weak-area misses route to precise topic IDs via AP1202-1.x",
      "Security domain is next — not taught in this review",
    ],
    guidedExample: {
      title: "Mixed OS domain triage",
      steps: [
        "Need BitLocker/domain join features → edition selection (1.3).",
        "Upgrade vs clean install decision with data risk → install planning (1.2).",
        "Slow PC; find CPU hog → Task Manager / Resource Monitor (1.4).",
        "Need IP/DNS evidence safely → ipconfig / Get-NetIPConfiguration (1.5) with authorization.",
        "Default apps / privacy camera → Settings layer (1.6).",
        "APIPA on Wi-Fi café → Windows networking + Core 1 (1.7).",
        "Mac app won’t open from unidentified developer → Gatekeeper path (1.8).",
        "Linux: whoami/pwd before risky apt (1.9).",
        "Installer refuses ARM → app compatibility (1.10).",
        "Desktop mail fails; webmail OK → cloud client layer (1.11).",
        "User wants cracked Office → refuse; policy/licensing (1.10 + boundaries).",
        "Org-wide SaaS red → service scope, not reimage (1.11).",
      ],
    },
    commonMistakes: [
      "Treating macOS/Linux problems with Windows-only menu paths",
      "Running destructive CLI without authorization",
      "Calling sync a backup or share access ownership",
      "Bypassing software policy or SmartScreen to force installs",
      "Starting Security/malware deep dives inside the OS review",
    ],
    examTraps: [
      "Edition feature gates (BitLocker, domain join)",
      "Best tool for the evidence needed",
      "Safe next CLI vs destructive ops",
      "Policy/settings boundaries vs local admin myths",
      "App architecture / trusted source",
      "Cloud layer isolation (browser, account, service)",
    ],
    realWorldScenario:
      "Morning: ARM laptop rejects a 32-bit LOB MSI. Midday: Outlook desktop fails while OWA works. Afternoon: a café laptop shows APIPA. Three OS-domain layers — app compatibility, cloud client, Windows networking — keep you from ‘reinstall Windows’ three times.",
    whenThisFails: [
      "If misses cluster on one objective, remediate that topic before claiming OS first-pass personally",
      "If you want malware/ACL deep dives, wait for Core 2 Security — don’t invent them here",
      "If elevation or software policy blocks you, escalate — don’t bypass",
    ],
    teacherReflectionPrompt:
      "Without notes, list the eleven OS topic IDs in path order and name one evidence-first habit for Windows, one for macOS/Linux, and one for cloud productivity.",
    quiz: [
      {
        id: "ap-os-domain-review-q1",
        prompt: "A specialty app needs NTFS features and Windows domain join. Which decision area matters first?",
        choices: [
          { id: "a", text: "OS family/filesystem suitability and Windows edition feature gates" },
          { id: "b", text: "Only wallpaper color" },
          { id: "c", text: "Bypass MFA" },
          { id: "d", text: "Delete System32" },
        ],
        correctChoiceId: "a",
        explanation: "Types + editions drive compatibility." + reviewHint("AP1202-1.1"),
        objectiveId: "AP1202-1.1",
        difficulty: "medium",
      },
      {
        id: "ap-os-domain-review-q2",
        prompt: "User needs a new OS with data risk. Best planning frame?",
        choices: [
          { id: "a", text: "Upgrade vs clean install, backup/verify plan, drivers, and authorization" },
          { id: "b", text: "Always wipe without asking" },
          { id: "c", text: "Install from a cracked ISO" },
          { id: "d", text: "Skip partitioning forever" },
        ],
        correctChoiceId: "a",
        explanation: "Install/upgrade scenarios." + reviewHint("AP1202-1.2"),
        objectiveId: "AP1202-1.2",
        difficulty: "easy",
      },
      {
        id: "ap-os-domain-review-q3",
        prompt: "Home edition lacks a required business feature present in Pro/Enterprise. Focus?",
        choices: [
          { id: "a", text: "Windows edition selection / feature matrix" },
          { id: "b", text: "Replace the GPU first" },
          { id: "c", text: "chmod 777 on Windows" },
          { id: "d", text: "Public WEP" },
        ],
        correctChoiceId: "a",
        explanation: "Edition features matter on tickets." + reviewHint("AP1202-1.3"),
        objectiveId: "AP1202-1.3",
        difficulty: "easy",
      },
      {
        id: "ap-os-domain-review-q4",
        prompt: "PC is slow; you need live process/resource evidence. Prefer?",
        choices: [
          { id: "a", text: "Task Manager / Resource Monitor style tools" },
          { id: "b", text: "diskpart clean all immediately" },
          { id: "c", text: "Disable Secure Boot as step one" },
          { id: "d", text: "Bridge an untrusted VM to production" },
        ],
        correctChoiceId: "a",
        explanation: "Choose the administrative tool for the evidence." + reviewHint("AP1202-1.4"),
        objectiveId: "AP1202-1.4",
        difficulty: "easy",
      },
      {
        id: "ap-os-domain-review-q5",
        prompt: "Safe CLI habit when gathering IP configuration?",
        choices: [
          { id: "a", text: "Use read-only evidence commands first; get authorization before destructive ops" },
          { id: "b", text: "format C: to refresh DNS" },
          { id: "c", text: "Always run diskpart clean all" },
          { id: "d", text: "Disable SmartScreen via CLI for fun" },
        ],
        correctChoiceId: "a",
        explanation: "CLI is powerful — authorization bounds it." + reviewHint("AP1202-1.5"),
        objectiveId: "AP1202-1.5",
        difficulty: "easy",
      },
      {
        id: "ap-os-domain-review-q6",
        prompt: "PDFs open in the wrong app after a new install. Best Settings path framing?",
        choices: [
          { id: "a", text: "Default apps / file associations — configuration before reinstall" },
          { id: "b", text: "Bypass organizational software policy" },
          { id: "c", text: "Remove BitLocker keys casually" },
          { id: "d", text: "Turn the café network profile to Domain" },
        ],
        correctChoiceId: "a",
        explanation: "Windows settings layer." + reviewHint("AP1202-1.6"),
        objectiveId: "AP1202-1.6",
        difficulty: "medium",
      },
      {
        id: "ap-os-domain-review-q7",
        prompt: "Laptop on café Wi-Fi shows an APIPA address. Windows networking focus?",
        choices: [
          { id: "a", text: "Local client IP/DHCP/DNS path — reuse Core 1 networking reasoning" },
          { id: "b", text: "Rewrite OSPF on the café router as a help-desk tech" },
          { id: "c", text: "Force Public→Private without risk review" },
          { id: "d", text: "Install cracked VPN" },
        ],
        correctChoiceId: "a",
        explanation: "Client networking + Core 1 reuse." + reviewHint("AP1202-1.7"),
        objectiveId: "AP1202-1.7",
        difficulty: "medium",
      },
      {
        id: "ap-os-domain-review-q8",
        prompt: "On macOS, an app from an unidentified developer is blocked. Best framing?",
        choices: [
          { id: "a", text: "Gatekeeper/trust path — don’t teach Activation Lock or MDM bypass" },
          { id: "b", text: "Always disable FileVault secretly" },
          { id: "c", text: "Use Windows Task Manager on the Mac" },
          { id: "d", text: "format the APFS volume immediately" },
        ],
        correctChoiceId: "a",
        explanation: "Native macOS tools and trust boundaries." + reviewHint("AP1202-1.8"),
        objectiveId: "AP1202-1.8",
        difficulty: "medium",
      },
      {
        id: "ap-os-domain-review-q9",
        prompt: "Before risky package changes on a Linux client, safest first habit?",
        choices: [
          { id: "a", text: "Confirm identity/cwd (whoami/pwd) and use distro-appropriate package tools" },
          { id: "b", text: "chmod 777 / as routine" },
          { id: "c", text: "Assume apt works identically on every distro always" },
          { id: "d", text: "Disable the firewall permanently" },
        ],
        correctChoiceId: "a",
        explanation: "Safe Linux client evidence." + reviewHint("AP1202-1.9"),
        objectiveId: "AP1202-1.9",
        difficulty: "easy",
      },
      {
        id: "ap-os-domain-review-q10",
        prompt: "Installer reports unsupported OS/architecture. Best next action?",
        choices: [
          { id: "a", text: "Verify vendor compatibility matrix and plan a supported path — don’t disable security to force it" },
          { id: "b", text: "Download a cracked patched installer" },
          { id: "c", text: "Turn off SmartScreen/AV as policy" },
          { id: "d", text: "Delete the Windows folder" },
        ],
        correctChoiceId: "a",
        explanation: "App lifecycle compatibility + trust." + reviewHint("AP1202-1.10"),
        objectiveId: "AP1202-1.10",
        difficulty: "easy",
      },
      {
        id: "ap-os-domain-review-q11",
        prompt: "Desktop productivity app fails; the same account works in the browser. Focus?",
        choices: [
          { id: "a", text: "Local client/cache/account layer — cloud data may still be intact" },
          { id: "b", text: "Mass-reimage the company because SaaS must be dead" },
          { id: "c", text: "Move org files to a personal cloud account" },
          { id: "d", text: "Bypass MFA" },
        ],
        correctChoiceId: "a",
        explanation: "Cloud productivity client isolation." + reviewHint("AP1202-1.11"),
        objectiveId: "AP1202-1.11",
        difficulty: "easy",
      },
      {
        id: "ap-os-domain-review-q12",
        prompt: "Sync versus backup in cloud productivity:",
        choices: [
          { id: "a", text: "Sync coordinates current state and can propagate deletes; backup is a recovery strategy" },
          { id: "b", text: "They are always identical" },
          { id: "c", text: "Backup only applies to printer toner" },
          { id: "d", text: "Sync removes the need for licensing" },
        ],
        correctChoiceId: "a",
        explanation: "Core cloud productivity distinction." + reviewHint("AP1202-1.11"),
        objectiveId: "AP1202-1.11",
        difficulty: "easy",
      },
    ],
    questionBank: [
      {
        id: "ap-os-domain-review-b1",
        prompt: "False equivalence mistake:",
        choices: [
          { id: "a", text: "Assuming every Windows tool name exists unchanged on macOS/Linux" },
          { id: "b", text: "Using platform-native tools" },
          { id: "c", text: "Documenting which OS you support" },
        ],
        correctChoiceId: "a",
        explanation: "Platform accuracy." + reviewHint("AP1202-1.1"),
        objectiveId: "AP1202-1.1",
        difficulty: "easy",
      },
      {
        id: "ap-os-domain-review-b2",
        prompt: "Windows networking in Core 2 should:",
        choices: [
          { id: "a", text: "Build on Core 1 — client profiles, IP/DNS, shares — not duplicate the whole networking domain" },
          { id: "b", text: "Replace CCNA entirely" },
          { id: "c", text: "Ignore DHCP forever" },
        ],
        correctChoiceId: "a",
        explanation: "Ladder reuse." + reviewHint("AP1202-1.7"),
        objectiveId: "AP1202-1.7",
        difficulty: "easy",
      },
      {
        id: "ap-os-domain-review-b3",
        prompt: "Deleting an application folder is incomplete uninstall when:",
        choices: [
          { id: "a", text: "Services, shortcuts, app data, or shared components remain" },
          { id: "b", text: "Windows forbids any uninstall" },
          { id: "c", text: "It always removes BitLocker" },
        ],
        correctChoiceId: "a",
        explanation: "App removal honesty." + reviewHint("AP1202-1.10"),
        objectiveId: "AP1202-1.10",
        difficulty: "easy",
      },
      {
        id: "ap-os-domain-review-b4",
        prompt: "Sharing ≠ ownership means:",
        choices: [
          { id: "a", text: "A user can have access without owning the file; roles and link types differ" },
          { id: "b", text: "Every share makes you the legal owner automatically" },
          { id: "c", text: "Ownership is irrelevant to permissions" },
        ],
        correctChoiceId: "a",
        explanation: "Cloud productivity distinction." + reviewHint("AP1202-1.11"),
        objectiveId: "AP1202-1.11",
        difficulty: "medium",
      },
      {
        id: "ap-os-domain-review-b5",
        prompt: "Policy locks a Windows setting the user wants changed. Correct response?",
        choices: [
          { id: "a", text: "Recognize enterprise policy boundary and escalate — don’t fight with unsafe bypass" },
          { id: "b", text: "Disable all security controls immediately" },
          { id: "c", text: "Install a pirate policy editor from a forum" },
        ],
        correctChoiceId: "a",
        explanation: "Settings/policy boundary." + reviewHint("AP1202-1.6"),
        objectiveId: "AP1202-1.6",
        difficulty: "medium",
      },
      {
        id: "ap-os-domain-review-b6",
        prompt: "Linux package management reminder:",
        choices: [
          { id: "a", text: "Commands/tools vary by distro family — verify the environment" },
          { id: "b", text: "apt is universal on every Unix including macOS GUI" },
          { id: "c", text: "chmod 777 fixes licensing" },
        ],
        correctChoiceId: "a",
        explanation: "Linux client accuracy." + reviewHint("AP1202-1.9"),
        objectiveId: "AP1202-1.9",
        difficulty: "easy",
      },
      {
        id: "ap-os-domain-review-b7",
        prompt: "What is the safest way to practice unfamiliar Linux administration commands?",
        choices: [
          { id: "a", text: "Use an isolated virtual machine with a restorable snapshot" },
          { id: "b", text: "Run them first on an unsaved production server" },
          { id: "c", text: "Practice on a printer control panel" },
        ],
        correctChoiceId: "a",
        explanation: "VM Lab referral must resolve." + reviewHint("AP1202-1.9"),
        objectiveId: "AP1202-1.9",
        difficulty: "easy",
      },
      {
        id: "ap-os-domain-review-b8",
        prompt: "After this domain review, Core 2 Security should be:",
        choices: [
          { id: "a", text: "The next domain when authorized — not started inside OS review content" },
          { id: "b", text: "Already completed inside this topic" },
          { id: "c", text: "Replaced by CCNA C1 immediately" },
        ],
        correctChoiceId: "a",
        explanation: "Stop-gate clarity." + reviewHint("AP1202-1.1"),
        objectiveId: "AP1202-1.1",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-os-domain-review-f1",
        front: "OS domain path?",
        back: "Types → install → editions → tools → CLI → settings → Win net → macOS → Linux → apps → cloud → review",
      },
      {
        id: "ap-os-domain-review-f2",
        front: "Missed AP1202-1.10?",
        back: "Remediate ap-app-install",
      },
      {
        id: "ap-os-domain-review-f3",
        front: "Missed AP1202-1.11?",
        back: "Remediate ap-cloud-productivity",
      },
      {
        id: "ap-os-domain-review-f4",
        front: "Sync ≠ backup?",
        back: "Sync can propagate deletes; backup = recovery strategy",
      },
      {
        id: "ap-os-domain-review-f5",
        front: "Win client networking?",
        back: "Builds on Core 1 — don’t duplicate the whole domain",
      },
      {
        id: "ap-os-domain-review-f6",
        front: "After OS first-pass?",
        back: "Security domain next when authorized; track stays Planned",
      },
    ],
    assignments: [
      {
        id: "ap-lab-os-weak-area",
        title: "OS domain weak-area routing plan",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `Take the Operating Systems Domain Review quiz. For every miss:
1) Note the AP1202-1.x objectiveId.
2) Open the mapped topic from the lesson list (or remediation map).
3) Re-do that topic’s worksheet or guided scenarios.
4) Retake items for that objective.

Write a short plan for your two weakest objectives. Do not start Core 2 Security topics yet.

Also confirm (checkbox notes):
- CF install/uninstall refresher id if apps were weak
- VM Lab referral if Linux practice was weak
- Core 1 networking referral if Windows client net was weak`,
        estimatedMinutes: 25,
        completionCriteria: [
          "List each missed objectiveId with its topic id",
          "Complete one remediation activity per miss",
          "Record a retake score or self-check result",
        ],
        relatedTopicIds: [
          "ap-os-types",
          "ap-os-install",
          "ap-windows-editions",
          "ap-windows-tools",
          "ap-windows-cli",
          "ap-windows-settings",
          "ap-windows-networking",
          "ap-macos-tools",
          "ap-linux-client",
          "ap-app-install",
          "ap-cloud-productivity",
          "ap-os-domain-review",
        ],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 40,
    difficulty: "medium",
  },
];
