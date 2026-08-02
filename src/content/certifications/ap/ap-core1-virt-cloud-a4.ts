import type { ExternalResource, Topic } from "../../types";
import { AP_VIRT_CLOUD_OBJECTIVE_TOPIC } from "./ap-virt-cloud-remediation";

/**
 * A+ Core 1 Virtualization & Cloud — A4 (Michael 2026-08-01).
 * cloud (4.1) → virtualization (4.2) → domain review.
 * Refer to VM Lab for hands-on — do not duplicate the full vm-lab course.
 * Stop before Domain 5 troubleshooting / Core 2 / CCNA C1.
 */

const WINDOWS_11_PC_RESOURCE: ExternalResource = {
  id: "windows-11-pc",
  name: "Windows 11 PC",
  url: "https://support.microsoft.com/windows",
  cost: "free",
  platform: "windows",
  installNotes:
    "Use a Windows 11 PC for read-only checks and planning worksheets. Cloud labs need no paid cloud account. Virtualization hands-on belongs in ReLearn VM Lab (/cert/vm-lab), not as forced host risk.",
};

const VM_LAB_RESOURCE: ExternalResource = {
  id: "relearn-vm-lab",
  name: "ReLearn VM Lab Foundations",
  url: "https://www.virtualbox.org/",
  cost: "free",
  platform: "any",
  installNotes:
    "In ReLearn open /cert/vm-lab. Start with host vs guest, install readiness, and snapshots. Use NAT/host-only for containment; avoid unnecessary bridged networking. A+ summarizes technician concepts — the VM Lab owns construction practice.",
};

function reviewHint(objectiveId: string): string {
  const topic = AP_VIRT_CLOUD_OBJECTIVE_TOPIC[objectiveId];
  return topic
    ? ` If this was unclear, review topic \`${topic}\`.`
    : "";
}

export const apCore1VirtCloudBatch1Topics: Topic[] = [
  {
    id: "ap-cloud-concepts",
    name: "Cloud Computing Concepts",
    prerequisites: ["ap-networking-domain-review"],
    objectives: ["AP1201-4.1"],
    knowledgeNodeId: "cloud-fundamentals",
    lesson: {
      title: "Summarize Cloud-Computing Concepts for Support",
      content: `Cloud computing delivers IT resources over a network with **shared responsibility**. On A+, you classify service and deployment models, recognize characteristics, and decide whether a ticket is local, account, sync, permission, quota, or provider-side — not recite acronyms.

**CF refresher:** \`cf-browser-url-cloud\` — browsers reach hosted apps; this topic adds responsibility boundaries for technicians.

**Service models (who manages what).**
- **IaaS (Infrastructure as a Service)** — provider supplies virtualized compute/storage/network building blocks. Customer typically manages OS, middleware, apps, and much of the configuration. Example: a virtual server you patch yourself.
- **PaaS (Platform as a Service)** — provider manages runtime/platform; customer deploys code/config. Example: a managed app platform where you don’t run the OS day-to-day.
- **SaaS (Software as a Service)** — provider delivers the finished application. Customer mainly manages users, data, and settings. Example: hosted email or office suites.

Do not flatten these to “IaaS = servers, SaaS = apps” without the responsibility split — that split drives escalation.

**Deployment models (ownership and access).**
- **Public cloud** — provider-owned infrastructure offered to many customers (multitenant). Public ≠ “your data is public.”
- **Private cloud** — dedicated to one organization (on-prem or hosted); more control, more ops burden.
- **Hybrid cloud** — mix of public and private/on-prem with integration.
- **Community cloud** (when required) — shared by a community with common concerns (e.g., regulated sector collaboration).

**Characteristics (what “cloud-like” means).**
Shared/pooled resources, **on-demand** access, **elasticity** (grow/shrink with load), **scalability**, rapid provisioning, **measured service** (usage metering), designs aiming at **high availability** and geographic distribution, and **multitenancy**. HA reduces risk of downtime — it does **not** guarantee zero outages.

**Common services (technician view).**
Cloud storage and file sync, productivity suites, hosted email, collaboration platforms, cloud backup, virtual desktops (VDI), hosted applications, identity/access for cloud apps, cloud-managed devices, and cloud print/management where you meet them.  
**Sync ≠ backup:** sync keeps copies current; backup is a recoverable point-in-time strategy.

**Responsibility questions on every ticket.**
1. Local client, network, account/auth, service config, or provider outage?
2. Who controls that layer — user, org admin, or provider?
3. Evidence: status page, other users affected?, browser vs app, quota errors, SSO failures?
4. First safe check: another network, another account, known-good device, admin portal vs provider status.
5. Escalate to: help desk admin, identity team, or vendor — not “reboot the internet.”

**What's next.** Client-side virtualization — hosts, guests, hypervisors, and safe lab containment (with VM Lab referral).`,
    },
    lightbulbMoment:
      "Cloud tickets are boundary tickets — name who owns the broken layer before you blame 'the cloud.'",
    keyFacts: [
      "IaaS/PaaS/SaaS differ by how much the customer still manages",
      "Public cloud is multitenant provider infrastructure — not 'public data'",
      "Elasticity and measured service are characteristics — HA is a design goal, not a promise of zero outages",
      "Sync keeps data current; backup preserves recoverability",
      "Isolate: local vs network vs account vs service vs provider",
      "Escalate to the owner of the layer you proved",
    ],
    guidedExample: {
      title: "Six cloud support tickets",
      steps: [
        "One user cannot open SaaS CRM; peers OK → account/permission/browser/client — not a global outage.",
        "One laptop won’t sync cloud drive; web UI shows files → local sync client/path/quota on that device.",
        "Everyone’s hosted email fails; provider status red → provider-side; communicate and wait/escalate vendor.",
        "User denied on a Share link → sharing permissions / identity group — admin action.",
        "VDI session laggy only on Wi-Fi café → local network/client path before blaming the entire desktop farm.",
        "Local Excel works; cloud co-authoring fails → service/auth/network to SaaS, not the Office install alone.",
      ],
    },
    commonMistakes: [
      "Saying 'the cloud is down' when one account lacks a license",
      "Treating file sync as a backup strategy",
      "Assuming public cloud means data is world-readable",
      "Skipping the provider status page during a company-wide SaaS failure",
      "Trying to 'fix IaaS' by reinstalling a SaaS desktop shortcut",
    ],
    examTraps: [
      "IaaS vs PaaS vs SaaS responsibility split",
      "Public vs private vs hybrid (and community) deployment",
      "Elasticity / measured service / multitenancy recognition",
      "Sync vs backup",
      "Single-user vs all-users failure isolation",
    ],
    realWorldScenario:
      "Finance says 'SharePoint is broken.' Only one user fails; the tenant status is green. Their MFA device was replaced and SSO tokens are stale. Resetting the sign-in on that account restores access — a SaaS permission/auth boundary, not a provider outage and not a PC hardware ticket.",
    whenThisFails: [
      "If all users fail and the status page is red, stop reimaging PCs — communicate and escalate the vendor path",
      "If policy forbids admin portal access, gather user evidence and ticket the cloud admin owners",
      "If data residency or compliance questions arise, escalate — do not invent architecture advice beyond A+ scope",
    ],
    teacherReflectionPrompt:
      "For a SaaS outage affecting everyone versus a sync failure on one laptop, explain the responsibility boundary and first evidence you want in each case.",
    quiz: [
      {
        id: "ap-cloud-concepts-q1",
        prompt: "In SaaS, the customer’s primary ongoing responsibilities usually include:",
        choices: [
          { id: "a", text: "Users, data, and application settings — not running the provider’s OS" },
          { id: "b", text: "Patching the provider’s physical hypervisors" },
          { id: "c", text: "Replacing data-center PDUs" },
          { id: "d", text: "Crimping the provider’s backbone fiber" },
        ],
        correctChoiceId: "a",
        explanation:
          "SaaS shifts infrastructure and app runtime to the provider; customers still own identity/data/settings.",
        objectiveId: "AP1201-4.1",
        difficulty: "easy",
      },
      {
        id: "ap-cloud-concepts-q2",
        prompt: "Public cloud primarily describes:",
        choices: [
          { id: "a", text: "Provider-owned infrastructure shared by many customers (multitenant)" },
          { id: "b", text: "That all customer files are published to the open internet" },
          { id: "c", text: "A type of lithium battery" },
          { id: "d", text: "A punch-down block category" },
        ],
        correctChoiceId: "a",
        explanation: "Public ≠ publicly readable data.",
        objectiveId: "AP1201-4.1",
        difficulty: "easy",
      },
      {
        id: "ap-cloud-concepts-q3",
        prompt: "Elasticity in cloud services means:",
        choices: [
          { id: "a", text: "Resources can grow or shrink with demand" },
          { id: "b", text: "The service can never fail" },
          { id: "c", text: "Only one user may ever connect" },
          { id: "d", text: "Backups are identical to sync" },
        ],
        correctChoiceId: "a",
        explanation: "Elasticity is flexible capacity — not a zero-outage guarantee.",
        objectiveId: "AP1201-4.1",
        difficulty: "easy",
      },
      {
        id: "ap-cloud-concepts-q4",
        prompt: "One user cannot open a SaaS app; coworkers succeed and the status page is green. Best first framing?",
        choices: [
          { id: "a", text: "Account, permission, license, or client-side issue for that user" },
          { id: "b", text: "Immediate provider data-center rebuild" },
          { id: "c", text: "Replace all company RAM" },
          { id: "d", text: "Disable DNS globally" },
        ],
        correctChoiceId: "a",
        explanation: "Single-user failures rarely mean a global provider outage.",
        objectiveId: "AP1201-4.1",
        difficulty: "medium",
      },
      {
        id: "ap-cloud-concepts-q5",
        prompt: "Cloud file sync versus cloud backup — correct distinction?",
        choices: [
          { id: "a", text: "Sync keeps copies current across devices; backup is a recoverable point-in-time strategy" },
          { id: "b", text: "They are always the same operation" },
          { id: "c", text: "Backup only works on NFC" },
          { id: "d", text: "Sync patches Type 1 hypervisors" },
        ],
        correctChoiceId: "a",
        explanation: "Do not treat sync as a complete backup plan.",
        objectiveId: "AP1201-4.1",
        difficulty: "medium",
      },
    ],
    questionBank: [
      {
        id: "ap-cloud-concepts-b1",
        prompt: "IaaS typically leaves the customer managing:",
        choices: [
          { id: "a", text: "The guest OS, apps, and much of the configuration on provisioned infrastructure" },
          { id: "b", text: "Only the provider’s global BGP backbone" },
          { id: "c", text: "Nothing — customers never configure anything" },
        ],
        correctChoiceId: "a",
        explanation: "IaaS provides infrastructure building blocks; OS/apps often remain yours.",
        objectiveId: "AP1201-4.1",
        difficulty: "medium",
      },
      {
        id: "ap-cloud-concepts-b2",
        prompt: "Hybrid cloud means:",
        choices: [
          { id: "a", text: "A mix of public cloud and private/on-prem resources used together" },
          { id: "b", text: "Only community cloud for printers" },
          { id: "c", text: "A swollen battery mode" },
        ],
        correctChoiceId: "a",
        explanation: "Hybrid combines environments with integration.",
        objectiveId: "AP1201-4.1",
        difficulty: "easy",
      },
      {
        id: "ap-cloud-concepts-b3",
        prompt: "Measured service refers to:",
        choices: [
          { id: "a", text: "Metering usage so consumption can be tracked/billed" },
          { id: "b", text: "Measuring toner density" },
          { id: "c", text: "Measuring hinge torque only" },
        ],
        correctChoiceId: "a",
        explanation: "Cloud characteristics include metered consumption.",
        objectiveId: "AP1201-4.1",
        difficulty: "easy",
      },
      {
        id: "ap-cloud-concepts-b4",
        prompt: "High availability designs:",
        choices: [
          { id: "a", text: "Reduce downtime risk but do not guarantee zero outages" },
          { id: "b", text: "Make status pages unnecessary forever" },
          { id: "c", text: "Eliminate the need for accounts" },
        ],
        correctChoiceId: "a",
        explanation: "HA is a goal/architecture, not perfection.",
        objectiveId: "AP1201-4.1",
        difficulty: "easy",
      },
      {
        id: "ap-cloud-concepts-b5",
        prompt: "Virtual desktop (VDI) in the cloud is best framed as:",
        choices: [
          { id: "a", text: "A hosted desktop experience — performance can still depend on client network/path" },
          { id: "b", text: "A replacement for all lithium batteries" },
          { id: "c", text: "Identical to a punch-down tool" },
        ],
        correctChoiceId: "a",
        explanation: "VDI is a common cloud/desktop service with client-path dependencies.",
        objectiveId: "AP1201-4.1",
        difficulty: "easy",
      },
      {
        id: "ap-cloud-concepts-b6",
        prompt: "Everyone loses the same SaaS app; provider status is degraded. Escalate primarily to:",
        choices: [
          { id: "a", text: "Vendor/provider path (and internal comms) — not mass PC reimaging first" },
          { id: "b", text: "Replace every laptop digitizer" },
          { id: "c", text: "Disable all DHCP scopes as step one" },
        ],
        correctChoiceId: "a",
        explanation: "All-users + red status → provider boundary.",
        objectiveId: "AP1201-4.1",
        difficulty: "medium",
      },
      {
        id: "ap-cloud-concepts-b7",
        prompt: "Private cloud emphasizes:",
        choices: [
          { id: "a", text: "Resources dedicated to one organization with more control/ops responsibility" },
          { id: "b", text: "Public posting of all HR files" },
          { id: "c", text: "Only Bluetooth PAN printers" },
        ],
        correctChoiceId: "a",
        explanation: "Private = dedicated control plane/resources for one org.",
        objectiveId: "AP1201-4.1",
        difficulty: "easy",
      },
      {
        id: "ap-cloud-concepts-b8",
        prompt: "A hosted application works in the browser but not its desktop client. What should the technician compare first?",
        choices: [
          { id: "a", text: "Client version, account/token, network/proxy, and service scope versus the working browser path" },
          { id: "b", text: "Power-supply wattage only" },
          { id: "c", text: "Printer maintenance interval" },
        ],
        correctChoiceId: "a",
        explanation: "The working browser path narrows the issue to client-specific identity, configuration, or connectivity layers.",
        objectiveId: "AP1201-4.1",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-cloud-concepts-f1",
        front: "SaaS customer mainly manages?",
        back: "Users, data, and settings — not the provider OS",
      },
      {
        id: "ap-cloud-concepts-f2",
        front: "Public cloud means?",
        back: "Provider multitenant infrastructure — not 'public data'",
      },
      {
        id: "ap-cloud-concepts-f3",
        front: "Elasticity?",
        back: "Capacity grows/shrinks with demand",
      },
      {
        id: "ap-cloud-concepts-f4",
        front: "Sync vs backup?",
        back: "Sync = keep current · backup = recoverable copy",
      },
      {
        id: "ap-cloud-concepts-f5",
        front: "One user SaaS fail, peers OK?",
        back: "Account/permission/client — not global outage first",
      },
      {
        id: "ap-cloud-concepts-f6",
        front: "All users + red status page?",
        back: "Provider boundary — communicate/escalate vendor",
      },
    ],
    assignments: [
      {
        id: "ap-lab-cloud-responsibility",
        title: "Cloud service & responsibility worksheet",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `No paid cloud account required. For each fictional service, fill:
Service model (IaaS/PaaS/SaaS) · Deployment model (public/private/hybrid/community as fits) · Provider responsibility · Customer responsibility · Common failure layers · Escalation owner

Services:
1) Hosted company email (Microsoft 365-style SaaS)
2) Team file sync drive
3) Cloud backup appliance targeting object storage
4) Developer platform where team deploys code without managing VMs (PaaS-like)
5) Org-owned private cloud hosting internal VMs (IaaS-like)
6) Hybrid: on-prem file server syncing selected libraries to public cloud storage

Then classify two tickets: (A) one user missing a Share permission (B) nationwide SaaS outage.`,
        estimatedMinutes: 18,
        completionCriteria: [
          "Complete the six-service responsibility table",
          "Classify tickets A and B with first evidence + escalation owner",
        ],
        relatedTopicIds: ["ap-cloud-concepts"],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 40,
    difficulty: "medium",
  },

  {
    id: "ap-virtualization",
    name: "Client-Side Virtualization",
    prerequisites: ["ap-cloud-concepts"],
    objectives: ["AP1201-4.2"],
    lesson: {
      title: "Summarize Client-Side Virtualization for Technicians",
      content: `Virtualization runs **guest** operating systems on a **host** through a **hypervisor**, presenting virtual CPU, memory, disks, and NICs. On A+, you plan resources, pick safe network modes, use snapshots wisely, and contain risk — then practice construction in **ReLearn VM Lab** (\`/cert/vm-lab\`), not by duplicating that whole course here.

**CF / VM Lab refreshers:** host vs guest literacy lives in VM Lab Module 1 (\`vm-host-vs-guest\`, \`vm-why-disposable\`); snapshots in \`vm-snapshots\`. This topic is the A+ technician framing.

**Core pieces.**
- **Host** — physical (or primary) machine running the hypervisor.
- **Guest / VM** — virtual machine with its own OS and apps.
- **Hypervisor** — software that creates/runs VMs.
  - **Type 1** — runs on bare metal (common in servers/datacenters).
  - **Type 2** — runs as an application on a host OS (common for client labs: VirtualBox, VMware Workstation Player, Hyper-V client scenarios).
- **Virtual hardware** — vCPU, RAM allocation, virtual disks, virtual NICs.
- **Virtual appliances / templates / clones** — prebuilt or copied VM starting points.
- **Virtual desktops** — VDI-style desktops (ties to cloud topic when hosted).
- **Containers (concise)** — package apps with dependencies sharing a host kernel; lighter than full VMs — different isolation model; know the contrast, not orchestration exams.
- **Sandbox / test / legacy / consolidation** — safe practice, software testing, old apps, fewer physical servers.

**Resource reasoning.**
Allocate CPU, RAM, storage, and network with the **host’s remaining capacity** in mind. Over-allocating RAM to many guests starves the host. Vendor minimums are not always practical. Virtual disks and **snapshot chains** grow — monitor free space.

**Networking modes (intro + containment).**
- **NAT** — guest reaches outbound via host translation; good default for many labs; less exposure of the guest on the LAN.
- **Bridged** — guest appears as another LAN device; useful when LAN identity is required; **higher exposure** — avoid when unnecessary.
- **Host-only** — guest talks to host (and other host-only guests), not the wider LAN/internet.
- **Internal/isolated** — guests talk among themselves per hypervisor features; strong containment.

Match the mode to the lab risk. VM Lab preference: keep risky work isolated; do not bridge by default.

**Snapshots / checkpoints.**
- Capture VM state before a controlled change; restore to undo.
- **Not a full backup strategy** of business data.
- Long snapshot chains consume disk and can complicate performance.
- After restore, **validate** the guest actually works — do not assume success.

**Security & containment (align with VM Lab).**
Fictional data only in risky labs; disable unneeded shared folders; understand clipboard/drag-drop host integration risks; disposable snapshots; reset after labs; protect the host; enable CPU virtualization (VT-x/AMD-V) in firmware when guests won’t start or crawl.

**Symptom → layer.**
| Symptom | First layers |
|---------|----------------|
| VM won’t start | Firmware virt disabled, host RAM, hypervisor config |
| No guest network | vNIC mode, host Wi-Fi/Ethernet, guest IP stack |
| No internet, LAN OK | NAT/gateway path vs bridged DHCP |
| Slow guest | Host resource contention, virt extensions, disk full |
| Snapshot restore “done” but broken | Validate apps/network; storage errors |
| Shared folder missing | Guest additions/tools + share config |
| Disk full errors | Virtual disk size + snapshot chain growth |

**Hands-on path.** Complete VM Lab readiness (install → Linux guest → snapshots) **or** finish the planning worksheet below if you cannot run a hypervisor yet.

**What's next.** Virtualization & Cloud domain review — mixed responsibility and containment scenarios.`,
    },
    lightbulbMoment:
      "A VM is only as safe as its network mode and snapshot habit — contain first, then experiment.",
    keyFacts: [
      "Host runs the hypervisor; guest is the VM OS",
      "Type 1 = bare metal · Type 2 = on a host OS (typical client labs)",
      "Preserve host capacity — over-allocation hurts everyone",
      "NAT/host-only/internal for containment; bridged only when needed",
      "Snapshots undo lab changes — they are not a complete backup plan",
      "Missing VT-x/AMD-V often blocks or cripples guests",
    ],
    guidedExample: {
      title: "Choose virt settings for use cases",
      steps: [
        "Practice breaking a Linux firewall in a lab → Type 2 hypervisor, modest RAM, NAT or host-only, snapshot before change.",
        "Test a vendor virtual appliance → import appliance/template; don’t bridge until you trust it.",
        "Legacy Windows app for one user → local VM or VDI; size disk/RAM to app needs; snapshot before install.",
        "Dev wants internet packages but isolation → NAT, not bridged.",
        "Guest needs to be reachable like a LAN PC for a controlled test → bridged with explicit approval.",
        "After a bad apt install → restore snapshot; verify network and app; don’t keep infinite snapshot trees.",
      ],
    },
    commonMistakes: [
      "Bridging every lab VM to the office LAN by default",
      "Treating snapshots as the only backup of production data",
      "Giving a guest 32 GB RAM on a 16 GB host",
      "Ignoring disabled CPU virtualization in firmware",
      "Leaving host folder shares wide open into untrusted guests",
    ],
    examTraps: [
      "Type 1 vs Type 2 hypervisor",
      "NAT vs bridged vs host-only implications",
      "Snapshot vs backup",
      "Resource over-allocation symptoms",
      "VT-x/AMD-V requirement recognition",
    ],
    realWorldScenario:
      "A trainee’s Ubuntu guest 'has no internet.' The vNIC was set to host-only after a containment lesson. Switching that lab to NAT (still not bridged) restores outbound updates without putting the guest on the corporate LAN — network mode matched the need.",
    whenThisFails: [
      "If the host cannot enable virtualization (policy/firmware lock), use the planning worksheet and escalate hardware/admin rights",
      "If a bridged guest is required on a managed LAN, get authorization first",
      "If snapshot restore fails with disk errors, stop stacking snapshots and free host storage",
    ],
    teacherReflectionPrompt:
      "Compare NAT and bridged networking for a risky malware-analysis practice VM, and explain when a snapshot is the right tool versus a real backup.",
    quiz: [
      {
        id: "ap-virtualization-q1",
        prompt: "A Type 2 hypervisor typically:",
        choices: [
          { id: "a", text: "Runs as software on a host operating system" },
          { id: "b", text: "Is identical to a swollen battery" },
          { id: "c", text: "Always replaces the need for virtual disks" },
          { id: "d", text: "Is only a SaaS email tenant" },
        ],
        correctChoiceId: "a",
        explanation: "Type 2 sits on a host OS — common for client labs.",
        objectiveId: "AP1201-4.2",
        difficulty: "easy",
      },
      {
        id: "ap-virtualization-q2",
        prompt: "Best default network mode for an untrusted lab guest that still needs outbound downloads?",
        choices: [
          { id: "a", text: "NAT (or similarly contained outbound) rather than unrestricted bridged LAN presence" },
          { id: "b", text: "Always bridged to the corporate LAN" },
          { id: "c", text: "No vNIC and hope for Bluetooth" },
          { id: "d", text: "Public cloud WEP" },
        ],
        correctChoiceId: "a",
        explanation: "Containment prefers NAT/host-only over casual bridging.",
        objectiveId: "AP1201-4.2",
        difficulty: "medium",
      },
      {
        id: "ap-virtualization-q3",
        prompt: "Snapshots are valuable because they:",
        choices: [
          { id: "a", text: "Let you restore a VM to a known state before/after controlled changes" },
          { id: "b", text: "Replace all organizational backup policies forever" },
          { id: "c", text: "Increase physical RAM in the host automatically" },
          { id: "d", text: "Disable the need for VT-x" },
        ],
        correctChoiceId: "a",
        explanation: "Snapshots undo VM state — they are not a full backup program.",
        objectiveId: "AP1201-4.2",
        difficulty: "easy",
      },
      {
        id: "ap-virtualization-q4",
        prompt: "VM fails to start; host Task Manager shows almost no free RAM. Likely?",
        choices: [
          { id: "a", text: "Insufficient host memory / over-allocation" },
          { id: "b", text: "Missing toner" },
          { id: "c", text: "DNS root deletion" },
          { id: "d", text: "Passive stylus failure" },
        ],
        correctChoiceId: "a",
        explanation: "Guests need real host resources.",
        objectiveId: "AP1201-4.2",
        difficulty: "easy",
      },
      {
        id: "ap-virtualization-q5",
        prompt: "Guest runs extremely slowly; firmware virtualization (VT-x/AMD-V) is disabled. First action?",
        choices: [
          { id: "a", text: "Enable CPU virtualization support in firmware if authorized" },
          { id: "b", text: "Bridge the VM to every VLAN" },
          { id: "c", text: "Delete all snapshots as the only step always" },
          { id: "d", text: "Convert the host into SaaS" },
        ],
        correctChoiceId: "a",
        explanation: "Hardware virt extensions are commonly required for usable guests.",
        objectiveId: "AP1201-4.2",
        difficulty: "medium",
      },
    ],
    questionBank: [
      {
        id: "ap-virtualization-b1",
        prompt: "Host-only networking generally:",
        choices: [
          { id: "a", text: "Connects guest to host (and peer host-only VMs), not the wider LAN/internet" },
          { id: "b", text: "Publishes the guest to the public internet automatically" },
          { id: "c", text: "Removes virtual disks" },
        ],
        correctChoiceId: "a",
        explanation: "Host-only is a containment-friendly mode.",
        objectiveId: "AP1201-4.2",
        difficulty: "easy",
      },
      {
        id: "ap-virtualization-b2",
        prompt: "Long snapshot chains often cause:",
        choices: [
          { id: "a", text: "Growing storage use and possible performance pain" },
          { id: "b", text: "Free infinite host RAM" },
          { id: "c", text: "Automatic SaaS licenses" },
        ],
        correctChoiceId: "a",
        explanation: "Monitor snapshot storage growth.",
        objectiveId: "AP1201-4.2",
        difficulty: "medium",
      },
      {
        id: "ap-virtualization-b3",
        prompt: "Guest additions / integration tools commonly help with:",
        choices: [
          { id: "a", text: "Display, mouse, and shared-folder/clipboard integration features" },
          { id: "b", text: "Replacing the need for a hypervisor" },
          { id: "c", text: "Puncturing lithium batteries safely" },
        ],
        correctChoiceId: "a",
        explanation: "Missing tools explain many 'shared folder unavailable' tickets.",
        objectiveId: "AP1201-4.2",
        difficulty: "easy",
      },
      {
        id: "ap-virtualization-b4",
        prompt: "Server consolidation uses virtualization to:",
        choices: [
          { id: "a", text: "Run more workloads on fewer physical machines" },
          { id: "b", text: "Eliminate all networking" },
          { id: "c", text: "Make backups unnecessary" },
        ],
        correctChoiceId: "a",
        explanation: "Consolidation is a classic virt benefit.",
        objectiveId: "AP1201-4.2",
        difficulty: "easy",
      },
      {
        id: "ap-virtualization-b5",
        prompt: "Containers vs VMs (intro):",
        choices: [
          { id: "a", text: "Containers typically share a host kernel; VMs virtualize fuller hardware/OS stacks" },
          { id: "b", text: "Containers always need Type 1 hypervisors exclusively" },
          { id: "c", text: "VMs cannot have virtual disks" },
        ],
        correctChoiceId: "a",
        explanation: "Concise contrast only — not a Kubernetes course.",
        objectiveId: "AP1201-4.2",
        difficulty: "medium",
      },
      {
        id: "ap-virtualization-b6",
        prompt: "After restoring a snapshot you should:",
        choices: [
          { id: "a", text: "Validate the guest actually works (network/apps) — don’t assume" },
          { id: "b", text: "Immediately bridge it to production" },
          { id: "c", text: "Delete the host OS" },
        ],
        correctChoiceId: "a",
        explanation: "Restore + validate.",
        objectiveId: "AP1201-4.2",
        difficulty: "easy",
      },
      {
        id: "ap-virtualization-b7",
        prompt: "Shared folders into an untrusted guest are risky because:",
        choices: [
          { id: "a", text: "They can expose host files to the guest environment" },
          { id: "b", text: "They increase toner yield" },
          { id: "c", text: "They disable measured service in SaaS" },
        ],
        correctChoiceId: "a",
        explanation: "Containment includes limiting host integration.",
        objectiveId: "AP1201-4.2",
        difficulty: "easy",
      },
      {
        id: "ap-virtualization-b8",
        prompt: "Hands-on construction for ReLearn virt labs belongs in:",
        choices: [
          { id: "a", text: "VM Lab (/cert/vm-lab) — A+ summarizes and refers" },
          { id: "b", text: "A duplicate eight-module course inside every A+ quiz" },
          { id: "c", text: "Printer maintenance only" },
        ],
        correctChoiceId: "a",
        explanation: "Do not duplicate the full VM Lab inside A+.",
        objectiveId: "AP1201-4.2",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-virtualization-f1",
        front: "Type 1 vs Type 2?",
        back: "Type 1 bare metal · Type 2 on a host OS",
      },
      {
        id: "ap-virtualization-f2",
        front: "NAT vs bridged?",
        back: "NAT = outbound via host · bridged = LAN peer (more exposure)",
      },
      {
        id: "ap-virtualization-f3",
        front: "Snapshot vs backup?",
        back: "Snapshot = VM state undo · backup = recoverable data strategy",
      },
      {
        id: "ap-virtualization-f4",
        front: "VM won’t start, host RAM maxed?",
        back: "Resource/over-allocation on the host",
      },
      {
        id: "ap-virtualization-f5",
        front: "VT-x/AMD-V?",
        back: "CPU virtualization extensions — enable in firmware when allowed",
      },
      {
        id: "ap-virtualization-f6",
        front: "Risky lab network default?",
        back: "Prefer NAT/host-only/internal — bridge only with intent",
      },
    ],
    assignments: [
      {
        id: "ap-lab-virt-plan-or-vm-lab",
        title: "VM Lab referral or virtualization plan",
        type: "external-lab",
        externalResourceId: "relearn-vm-lab",
        instructions: `Option A (preferred if you can run VirtualBox/Hyper-V): In ReLearn open /cert/vm-lab. Complete or review:
- vm-host-vs-guest (host vs guest)
- vm-install-virtualbox or readiness checklist (virt extensions)
- vm-snapshots (break/restore habit)
Write five lines: network mode you used, why not bridged, snapshot name, what you validated after restore, host RAM left free.

Option B (no hypervisor yet): Planning worksheet for a fictional help-desk practice VM:
1) Type 1 or 2? 2) CPU/RAM/disk ask vs 16 GB host 3) Network mode + containment reason 4) When to snapshot 5) Why snapshots ≠ backup 6) Shared-folder decision 7) First checks if guest has no internet.

Do not practice malware on a bridged office LAN. Use fictional data only.`,
        estimatedMinutes: 25,
        completionCriteria: [
          "Complete Option A notes OR Option B seven-part plan",
          "Include containment network-mode rationale and snapshot ≠ backup",
        ],
        relatedTopicIds: ["ap-virtualization", "ap-cloud-concepts"],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE, VM_LAB_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 45,
    difficulty: "medium",
  },

  {
    id: "ap-virt-cloud-domain-review",
    name: "Virtualization & Cloud Domain Review",
    prerequisites: ["ap-virtualization"],
    objectives: ["AP1201-4.1", "AP1201-4.2"],
    lesson: {
      title: "Integrate Virtualization & Cloud",
      content: `This checkpoint ties cloud responsibility and client-side virtualization together. Practice **boundary and containment reasoning** — not acronym flashcards.

**Path you completed.**
1. **Cloud concepts** — IaaS/PaaS/SaaS, deployment models, characteristics, sync vs backup, support isolation.
2. **Virtualization** — host/guest/hypervisor, resources, NAT/bridged/host-only, snapshots ≠ backups, VM Lab referral.

**Missed questions map to:**

${Object.entries(AP_VIRT_CLOUD_OBJECTIVE_TOPIC)
  .map(([obj, topic]) => `- ${obj} → \`${topic}\``)
  .join("\n")}

**Habits.** Name who owns the cloud layer. Prefer contained VM networks. Snapshot before lab changes; back up real data properly. Hands-on construction stays in \`/cert/vm-lab\`.

**Looking ahead.** Next: Core 1 Hardware & Network Troubleshooting reuses isolation habits on physical and network faults. Full A+ track stays planned until Core 2.`,
    },
    lightbulbMoment:
      "Cloud asks who owns the layer; virtualization asks how exposed the guest is — answer both before you reset or escalate.",
    keyFacts: [
      "SaaS customers manage users/data/settings; IaaS customers still manage much of the OS/apps",
      "Public cloud ≠ public data; HA ≠ zero outages",
      "Sync ≠ backup; snapshot ≠ backup",
      "Type 2 hypervisors run on a host OS — typical client labs",
      "NAT/host-only for containment; bridged only with intent",
      "Single-user SaaS failure ≠ provider outage",
    ],
    guidedExample: {
      title: "Mixed triage",
      steps: [
        "All users SaaS down + red status → provider (4.1).",
        "One user missing Share access → identity/permission (4.1).",
        "Lab VM bridged by accident on corporate Wi-Fi → switch to NAT/host-only (4.2).",
        "Guest won’t start, host RAM full → resources (4.2).",
        "Trainee thinks snapshot replaced company backup → correct the model (4.1+4.2).",
      ],
    },
    commonMistakes: [
      "Reimaging PCs during a tenant-wide SaaS outage",
      "Bridging every practice VM",
      "Calling sync a backup",
      "Ignoring VT-x when guests crawl",
      "Duplicating the entire VM Lab inside A+ study notes instead of using /cert/vm-lab",
    ],
    examTraps: [
      "Service vs deployment model classification",
      "Responsibility boundaries",
      "Hypervisor types",
      "Network mode containment",
      "Snapshot vs backup vs sync",
    ],
    realWorldScenario:
      "Morning: SaaS CRM fails for one user (license). Afternoon: a bridged lab VM trips NAC. Two domains of thought — cloud ownership and virt containment — keep you from 'fixing Windows' twice.",
    whenThisFails: [
      "If 4.1 misses dominate, redo the responsibility worksheet before Domain 5",
      "If 4.2 misses dominate, complete VM Lab Module 1 + snapshots or the planning Option B",
    ],
    teacherReflectionPrompt:
      "Without notes, define IaaS vs SaaS by responsibility, and NAT vs bridged by exposure, each in one sentence.",
    quiz: [
      {
        id: "ap-virt-cloud-domain-review-q1",
        prompt: "Customer patches a guest OS on a rented VM. Closest service model?",
        choices: [
          { id: "a", text: "IaaS" },
          { id: "b", text: "SaaS email only" },
          { id: "c", text: "A digitizer" },
          { id: "d", text: "A punch-down block" },
        ],
        correctChoiceId: "a",
        explanation: "OS management on provisioned infra → IaaS-like." + reviewHint("AP1201-4.1"),
        objectiveId: "AP1201-4.1",
        difficulty: "easy",
      },
      {
        id: "ap-virt-cloud-domain-review-q2",
        prompt: "Public cloud means:",
        choices: [
          { id: "a", text: "Provider multitenant infrastructure — not that data is world-readable" },
          { id: "b", text: "All files are posted publicly" },
          { id: "c", text: "Private cloud only" },
          { id: "d", text: "Host-only networking" },
        ],
        correctChoiceId: "a",
        explanation: "Deployment model clarity." + reviewHint("AP1201-4.1"),
        objectiveId: "AP1201-4.1",
        difficulty: "easy",
      },
      {
        id: "ap-virt-cloud-domain-review-q3",
        prompt: "One user cannot open SaaS; peers OK; status green. Focus?",
        choices: [
          { id: "a", text: "Account, license, permission, or client path" },
          { id: "b", text: "Immediate datacenter rebuild" },
          { id: "c", text: "Replace all host RAM first" },
          { id: "d", text: "Bridge every VM" },
        ],
        correctChoiceId: "a",
        explanation: "Single-user isolation." + reviewHint("AP1201-4.1"),
        objectiveId: "AP1201-4.1",
        difficulty: "medium",
      },
      {
        id: "ap-virt-cloud-domain-review-q4",
        prompt: "Sync vs backup:",
        choices: [
          { id: "a", text: "Sync keeps current; backup is recoverable point-in-time" },
          { id: "b", text: "They are identical always" },
          { id: "c", text: "Backup only works on Type 2 hypervisors" },
          { id: "d", text: "Sync enables VT-x" },
        ],
        correctChoiceId: "a",
        explanation: "Cloud data concepts." + reviewHint("AP1201-4.1"),
        objectiveId: "AP1201-4.1",
        difficulty: "easy",
      },
      {
        id: "ap-virt-cloud-domain-review-q5",
        prompt: "Type 2 hypervisor runs:",
        choices: [
          { id: "a", text: "As software on a host OS" },
          { id: "b", text: "Only as SaaS CRM" },
          { id: "c", text: "Without any host" },
          { id: "d", text: "Inside a toner cartridge" },
        ],
        correctChoiceId: "a",
        explanation: "Hypervisor types." + reviewHint("AP1201-4.2"),
        objectiveId: "AP1201-4.2",
        difficulty: "easy",
      },
      {
        id: "ap-virt-cloud-domain-review-q6",
        prompt: "Untrusted lab guest needing outbound updates — prefer:",
        choices: [
          { id: "a", text: "NAT (or host-only if no internet needed) over casual bridged LAN" },
          { id: "b", text: "Always bridged to production" },
          { id: "c", text: "No disks" },
          { id: "d", text: "Public WEP" },
        ],
        correctChoiceId: "a",
        explanation: "Containment." + reviewHint("AP1201-4.2"),
        objectiveId: "AP1201-4.2",
        difficulty: "medium",
      },
      {
        id: "ap-virt-cloud-domain-review-q7",
        prompt: "Snapshots are not:",
        choices: [
          { id: "a", text: "A complete substitute for organizational backups" },
          { id: "b", text: "Useful before controlled VM changes" },
          { id: "c", text: "Restorable to a prior VM state" },
          { id: "d", text: "Something that can consume disk" },
        ],
        correctChoiceId: "a",
        explanation: "Snapshot ≠ backup." + reviewHint("AP1201-4.2"),
        objectiveId: "AP1201-4.2",
        difficulty: "easy",
      },
      {
        id: "ap-virt-cloud-domain-review-q8",
        prompt: "VM won’t start; host has almost no free RAM:",
        choices: [
          { id: "a", text: "Host resource / over-allocation problem" },
          { id: "b", text: "SaaS license only" },
          { id: "c", text: "Passive stylus" },
          { id: "d", text: "Community cloud membership" },
        ],
        correctChoiceId: "a",
        explanation: "Resource planning." + reviewHint("AP1201-4.2"),
        objectiveId: "AP1201-4.2",
        difficulty: "easy",
      },
      {
        id: "ap-virt-cloud-domain-review-q9",
        prompt: "Elasticity means:",
        choices: [
          { id: "a", text: "Capacity can grow/shrink with demand" },
          { id: "b", text: "Zero outages forever" },
          { id: "c", text: "Bridged networking only" },
          { id: "d", text: "Type 1 is forbidden" },
        ],
        correctChoiceId: "a",
        explanation: "Cloud characteristic." + reviewHint("AP1201-4.1"),
        objectiveId: "AP1201-4.1",
        difficulty: "easy",
      },
      {
        id: "ap-virt-cloud-domain-review-q10",
        prompt: "Which lab activity best demonstrates safe virtual-machine recovery?",
        choices: [
          { id: "a", text: "Create a VM snapshot, make a controlled change, then restore the snapshot" },
          { id: "b", text: "Delete the host operating system" },
          { id: "c", text: "Replace a printer fuser" },
          { id: "d", text: "Disable virtualization support in firmware" },
        ],
        correctChoiceId: "a",
        explanation: "Referral, not duplication." + reviewHint("AP1201-4.2"),
        objectiveId: "AP1201-4.2",
        difficulty: "easy",
      },
      {
        id: "ap-virt-cloud-domain-review-q11",
        prompt: "Hybrid cloud is:",
        choices: [
          { id: "a", text: "Combining public cloud with private/on-prem resources" },
          { id: "b", text: "Only host-only NICs" },
          { id: "c", text: "A swollen battery state" },
          { id: "d", text: "SaaS without accounts" },
        ],
        correctChoiceId: "a",
        explanation: "Deployment models." + reviewHint("AP1201-4.1"),
        objectiveId: "AP1201-4.1",
        difficulty: "easy",
      },
      {
        id: "ap-virt-cloud-domain-review-q12",
        prompt: "Shared folders into an untrusted guest risk:",
        choices: [
          { id: "a", text: "Exposing host files to the guest" },
          { id: "b", text: "Increasing measured SaaS billing accuracy only" },
          { id: "c", text: "Enabling community cloud automatically" },
          { id: "d", text: "Replacing Type 1 hypervisors" },
        ],
        correctChoiceId: "a",
        explanation: "Containment / integration risk." + reviewHint("AP1201-4.2"),
        objectiveId: "AP1201-4.2",
        difficulty: "medium",
      },
    ],
    questionBank: [
      {
        id: "ap-virt-cloud-domain-review-b1",
        prompt: "PaaS emphasizes:",
        choices: [
          { id: "a", text: "Provider-managed platform; customer focuses on deployed apps/config" },
          { id: "b", text: "Customer racking physical servers only" },
          { id: "c", text: "Toner management" },
        ],
        correctChoiceId: "a",
        explanation: "Service models." + reviewHint("AP1201-4.1"),
        objectiveId: "AP1201-4.1",
        difficulty: "medium",
      },
      {
        id: "ap-virt-cloud-domain-review-b2",
        prompt: "Measured service means:",
        choices: [
          { id: "a", text: "Usage is metered/tracked" },
          { id: "b", text: "Hinges are torqued" },
          { id: "c", text: "Snapshots replace billing" },
        ],
        correctChoiceId: "a",
        explanation: "Cloud characteristics." + reviewHint("AP1201-4.1"),
        objectiveId: "AP1201-4.1",
        difficulty: "easy",
      },
      {
        id: "ap-virt-cloud-domain-review-b3",
        prompt: "Host-only networking:",
        choices: [
          { id: "a", text: "Limits guest to host/peer host-only segment — not wider LAN/internet" },
          { id: "b", text: "Forces public cloud tenancy" },
          { id: "c", text: "Deletes virtual disks" },
        ],
        correctChoiceId: "a",
        explanation: "Network modes." + reviewHint("AP1201-4.2"),
        objectiveId: "AP1201-4.2",
        difficulty: "easy",
      },
      {
        id: "ap-virt-cloud-domain-review-b4",
        prompt: "VT-x/AMD-V disabled often causes:",
        choices: [
          { id: "a", text: "Guests that fail to start or run poorly" },
          { id: "b", text: "Automatic SaaS outages" },
          { id: "c", text: "Community cloud enrollment" },
        ],
        correctChoiceId: "a",
        explanation: "Firmware virt extensions." + reviewHint("AP1201-4.2"),
        objectiveId: "AP1201-4.2",
        difficulty: "easy",
      },
      {
        id: "ap-virt-cloud-domain-review-b5",
        prompt: "All-users SaaS failure + red status page →",
        choices: [
          { id: "a", text: "Provider escalation/comms — not mass reimaging first" },
          { id: "b", text: "Replace digitizers fleet-wide" },
          { id: "c", text: "Disable host-only mode globally" },
        ],
        correctChoiceId: "a",
        explanation: "Responsibility boundary." + reviewHint("AP1201-4.1"),
        objectiveId: "AP1201-4.1",
        difficulty: "easy",
      },
      {
        id: "ap-virt-cloud-domain-review-b6",
        prompt: "Containers vs VMs (intro):",
        choices: [
          { id: "a", text: "Containers typically share a host kernel; VMs virtualize fuller stacks" },
          { id: "b", text: "VMs cannot have vNICs" },
          { id: "c", text: "Containers are lithium cells" },
        ],
        correctChoiceId: "a",
        explanation: "Concise contrast." + reviewHint("AP1201-4.2"),
        objectiveId: "AP1201-4.2",
        difficulty: "medium",
      },
      {
        id: "ap-virt-cloud-domain-review-b7",
        prompt: "After snapshot restore:",
        choices: [
          { id: "a", text: "Validate guest function — don’t assume success" },
          { id: "b", text: "Always bridge to production" },
          { id: "c", text: "Delete the host OS" },
        ],
        correctChoiceId: "a",
        explanation: "Restore + validate." + reviewHint("AP1201-4.2"),
        objectiveId: "AP1201-4.2",
        difficulty: "easy",
      },
      {
        id: "ap-virt-cloud-domain-review-b8",
        prompt: "HA designs:",
        choices: [
          { id: "a", text: "Reduce downtime risk but do not guarantee zero outages" },
          { id: "b", text: "Eliminate status pages forever" },
          { id: "c", text: "Replace hypervisors with styluses" },
        ],
        correctChoiceId: "a",
        explanation: "Cloud characteristic honesty." + reviewHint("AP1201-4.1"),
        objectiveId: "AP1201-4.1",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-virt-cloud-domain-review-f1",
        front: "Virt/Cloud path?",
        back: "Cloud concepts → Virtualization → Review",
      },
      {
        id: "ap-virt-cloud-domain-review-f2",
        front: "Missed 4.1 / 4.2?",
        back: "ap-cloud-concepts / ap-virtualization",
      },
      {
        id: "ap-virt-cloud-domain-review-f3",
        front: "SaaS vs IaaS responsibility?",
        back: "SaaS: users/data/settings · IaaS: more OS/app ownership",
      },
      {
        id: "ap-virt-cloud-domain-review-f4",
        front: "NAT vs bridged?",
        back: "NAT contained outbound · bridged = LAN peer exposure",
      },
      {
        id: "ap-virt-cloud-domain-review-f5",
        front: "Snapshot ≠ ?",
        back: "Not a complete org backup strategy",
      },
      {
        id: "ap-virt-cloud-domain-review-f6",
        front: "Hands-on VMs?",
        back: "/cert/vm-lab — A+ refers, doesn’t duplicate",
      },
    ],
    assignments: [
      {
        id: "ap-lab-virt-cloud-weak-area",
        title: "Virt/Cloud weak-area routing plan",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `Take the Virtualization & Cloud Domain Review quiz. For every miss:
1) Note AP1201-4.1 or 4.2.
2) Open the mapped topic.
3) Re-do that topic’s worksheet or VM Lab referral notes.
4) Retake items for that objective.

Write a three-line plan for your weakest objective.`,
        estimatedMinutes: 20,
        completionCriteria: [
          "List each missed objectiveId with its topic id",
          "Complete one remediation activity per miss",
          "Record a retake score or self-check result",
        ],
        relatedTopicIds: [
          "ap-cloud-concepts",
          "ap-virtualization",
          "ap-virt-cloud-domain-review",
        ],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE, VM_LAB_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 35,
    difficulty: "medium",
  },
];
