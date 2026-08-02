import type { ExternalResource, Topic } from "../../types";
import { AP_NETWORKING_OBJECTIVE_TOPIC } from "./ap-networking-remediation";

/**
 * A+ Core 1 Networking — A2c (Michael 2026-08-01).
 * devices (2.5) → SOHO (2.6) → tools (2.8) → domain review (2.1–2.8).
 * Stop after Networking first-pass integration — no Mobile / Virt / Core 2 / CCNA C1.
 */

const WINDOWS_11_PC_RESOURCE: ExternalResource = {
  id: "windows-11-pc",
  name: "Windows 11 PC",
  url: "https://support.microsoft.com/windows",
  cost: "free",
  platform: "windows",
  installNotes:
    "Use a Windows 11 PC you may practice on. Networking labs are fictional worksheets or read-only local checks — no unauthorized scanning, port forwarding to the public internet, or bypassing controls.",
};

function reviewHint(objectiveId: string): string {
  const topic = AP_NETWORKING_OBJECTIVE_TOPIC[objectiveId];
  return topic
    ? ` If this was unclear, review topic \`${topic}\`.`
    : "";
}

export const apCore1NetworkingBatch3Topics: Topic[] = [
  {
    id: "ap-network-devices",
    name: "Network Devices",
    prerequisites: ["ap-network-config"],
    objectives: ["AP1201-2.5"],
    knowledgeNodeId: "routing-switching",
    lesson: {
      title: "Network Devices by Job",
      content: `Devices are easier when you ask **what job they do** — forward, terminate the ISP handoff, provide wireless access, enforce policy, or power another device — instead of memorizing a parts catalog.

**CF refreshers:** \`cf-home-network-devices\`, \`cf-what-is-a-network\` — expand consumer labels into technician roles.

**Traffic forwarders.**
- **Router** — forwards between networks (LAN ↔ WAN/other subnets); chooses next hops; often runs NAT on consumer gear.
- **Switch** — forwards frames inside a LAN by MAC; multiport “smart cable hub” for Ethernet.
  - **Unmanaged** — plug-and-play, no VLANs/config UI.
  - **Managed** — admin can configure VLANs, port settings, monitoring (intro depth only — not CCNA switch design).
- **Access point (AP)** — bridges wireless clients onto the wired LAN (Wi-Fi radio + Ethernet uplink).
- **Bridge / repeater / extender** — extend or join segments; extenders can halve effective throughput or create roaming quirks — know the role, not every vendor wizard.

**ISP edge terminators.**
- **Modem / cable modem / DSL modem** — converts the ISP’s access technology to Ethernet (or similar) your router can use.
- **Optical network terminal (ONT)** — fiber handoff device at the premise.
These terminate the **provider** link. They are not “the Wi-Fi” even if an ISP gateway combines boxes.

**Policy and protection.**
- **Firewall** — permits/denies traffic by policy (host or network appliance).
- **IDS/IPS (intro)** — intrusion detection watches for suspicious patterns; prevention can block. At A+ depth: know the idea and that false positives need careful tuning — not signature engineering.

**Infrastructure helpers.**
- **Patch panel** — organized cable termination; moves faults from “mystery wall jack” to labeled ports.
- **NIC** — network interface on a host (wired or wireless adapter).
- **PoE injector / PoE switch** — power + data over Ethernet for APs, cameras, phones. No power at the AP often means PoE budget, bad cable, or non-PoE port — not “Wi-Fi is broken.”
- **NAS** — network-attached storage appliance for shared files/backups (recognize role).
- **Controller / cloud-managed networking** — central brain for many APs/switches (vendor cloud or on-prem controller). You manage the fleet; individual APs may be thin.

**Voice / IoT devices (objective-aligned).** VoIP phones and IoT hubs/cameras are endpoints that often need PoE, DHCP, and sometimes VLAN/SSID isolation — treat them as devices with special power and segmentation needs.

**Critical distinction — consumer “wireless router.”**
A typical home gateway often combines in **one box**:
router + Ethernet switch + wireless AP + firewall + DHCP + NAT + basic DNS forwarding.

In business networks those jobs are frequently **separate devices** (or separate logical roles). Do not assume one plastic box equals the whole design everywhere.

**Symptom → likely device (first instinct, then prove).**
- Wi-Fi down, Ethernet fine → AP / wireless radio / SSID — not necessarily the modem.
- Modem online lights OK, nothing behind it works → router/firewall/LAN side.
- One wall jack dead, others fine → cable/patch panel/switch port/NIC — not the ISP.
- Everyone has APIPA → DHCP service (often on the router) or uplink to it.
- PoE AP dark → power path (injector/switch/cable) before radio config.

**What's next.** SOHO configuration — how you safely set up the small-office all-in-one and its pieces.`,
    },
    lightbulbMoment:
      "Name the job first — ISP edge, LAN forwarder, wireless access, policy, or power — then pick the device.",
    keyFacts: [
      "Router = between networks · Switch = within a LAN · AP = Wi-Fi onto the LAN",
      "Modem/ONT terminates the ISP link — not the same job as a router",
      "Managed switches are configurable; unmanaged are plug-and-play",
      "Consumer wireless routers combine many roles that businesses often separate",
      "PoE injector/switch powers devices like APs and phones over Ethernet",
      "Firewall/IDS/IPS enforce or watch policy — intro recognition, not CCNA design",
    ],
    guidedExample: {
      title: "Place devices on a fictional SOHO topology",
      steps: [
        "ISP fiber drops to an ONT on the wall.",
        "Ethernet from ONT → WAN port of a router (or ISP gateway).",
        "Router LAN ports → small managed switch → PCs and a PoE AP.",
        "Patch panel in the closet labels wall jacks to switch ports.",
        "Guest SSID on the AP; IoT cameras on a separate SSID; NAS on a wired LAN port.",
        "Say aloud each device’s single primary job.",
      ],
    },
    commonMistakes: [
      "Calling the ISP modem 'the router' when the failure is LAN DHCP",
      "Assuming every home gateway is only an AP",
      "Replacing a switch when the wall cable to the patch panel is open",
      "Blaming Wi-Fi when a PoE AP has no power",
      "Expecting unmanaged switches to do VLANs",
    ],
    examTraps: [
      "Router vs switch vs AP vs modem/ONT roles",
      "Managed vs unmanaged switch",
      "PoE injector vs PoE switch",
      "Combined consumer gateway vs discrete enterprise roles",
      "Firewall / IDS / IPS recognition at intro depth",
    ],
    realWorldScenario:
      "Users say 'the internet is down.' Modem/ONT shows sync; PCs get APIPA. The ISP edge is fine — the office router’s DHCP/LAN side failed after a power blip. Swapping the wrong box (modem) would have wasted the truck roll.",
    whenThisFails: [
      "If only wireless fails, prove with a wired laptop before replacing the modem",
      "If one port fails, test known-good cable and another switch port before condemning the NIC",
      "If PoE devices reboot randomly, check PoE budget and cable length/quality",
    ],
    teacherReflectionPrompt:
      "Explain why a consumer 'wireless router' is several devices in one box, and name three jobs that are often separate in a business network.",
    quiz: [
      {
        id: "ap-network-devices-q1",
        prompt: "Which device primarily forwards traffic between different IP networks?",
        choices: [
          { id: "a", text: "Router" },
          { id: "b", text: "Unmanaged switch only" },
          { id: "c", text: "Patch panel" },
          { id: "d", text: "Crimper" },
        ],
        correctChoiceId: "a",
        explanation: "Routers forward between networks; switches forward within a LAN.",
        objectiveId: "AP1201-2.5",
        difficulty: "easy",
      },
      {
        id: "ap-network-devices-q2",
        prompt: "A cable modem’s primary job is to:",
        choices: [
          { id: "a", text: "Terminate the ISP cable-access link for the premise" },
          { id: "b", text: "Replace all switches in a data center" },
          { id: "c", text: "Print multipage invoices" },
          { id: "d", text: "Store ECC RAM settings" },
        ],
        correctChoiceId: "a",
        explanation: "Modems/ONTs sit at the ISP edge; routing/Wi-Fi may be separate.",
        objectiveId: "AP1201-2.5",
        difficulty: "easy",
      },
      {
        id: "ap-network-devices-q3",
        prompt: "Managed vs unmanaged switch — key difference?",
        choices: [
          { id: "a", text: "Managed offers configuration (VLANs/ports/monitoring); unmanaged is plug-and-play" },
          { id: "b", text: "Unmanaged always includes WPA3 Enterprise" },
          { id: "c", text: "Managed switches cannot forward Ethernet" },
          { id: "d", text: "Unmanaged switches are ONTs" },
        ],
        correctChoiceId: "a",
        explanation: "Management features distinguish the two at A+ depth.",
        objectiveId: "AP1201-2.5",
        difficulty: "medium",
      },
      {
        id: "ap-network-devices-q4",
        prompt: "A PoE access point has no lights; wired PCs on the same switch work. First device/path to suspect?",
        choices: [
          { id: "a", text: "PoE power path (injector/PoE port/cable) to the AP" },
          { id: "b", text: "The office laser printer fuser" },
          { id: "c", text: "CPU socket compatibility" },
          { id: "d", text: "DNS root servers exclusively" },
        ],
        correctChoiceId: "a",
        explanation: "Dark PoE endpoints often lack power delivery, not 'the internet.'",
        objectiveId: "AP1201-2.5",
        difficulty: "medium",
      },
      {
        id: "ap-network-devices-q5",
        prompt: "A typical consumer wireless router often combines:",
        choices: [
          { id: "a", text: "Router, switch, AP, firewall, DHCP/NAT (and more) in one appliance" },
          { id: "b", text: "Only a punch-down tool" },
          { id: "c", text: "Only a SAN fabric director" },
          { id: "d", text: "Only a multimeter" },
        ],
        correctChoiceId: "a",
        explanation: "Combined SOHO gateways ≠ always-separate business roles.",
        objectiveId: "AP1201-2.5",
        difficulty: "easy",
      },
    ],
    questionBank: [
      {
        id: "ap-network-devices-b1",
        prompt: "An access point’s job is to:",
        choices: [
          { id: "a", text: "Provide wireless client access onto the LAN" },
          { id: "b", text: "Terminate all ISP fiber worldwide" },
          { id: "c", text: "Replace the need for IP addresses" },
        ],
        correctChoiceId: "a",
        explanation: "APs bridge WLAN clients to wired infrastructure.",
        objectiveId: "AP1201-2.5",
        difficulty: "easy",
      },
      {
        id: "ap-network-devices-b2",
        prompt: "A patch panel is mainly used to:",
        choices: [
          { id: "a", text: "Organize and terminate structured cabling to labeled ports" },
          { id: "b", text: "Encrypt WPA3 handshakes" },
          { id: "c", text: "Assign public ASNs" },
        ],
        correctChoiceId: "a",
        explanation: "Patch panels are cabling organization, not routers.",
        objectiveId: "AP1201-2.5",
        difficulty: "easy",
      },
      {
        id: "ap-network-devices-b3",
        prompt: "NAS typically provides:",
        choices: [
          { id: "a", text: "Shared storage on the network" },
          { id: "b", text: "ISP DOCSIS modulation only" },
          { id: "c", text: "Toner fusion heat" },
        ],
        correctChoiceId: "a",
        explanation: "Network-attached storage serves files/backups.",
        objectiveId: "AP1201-2.5",
        difficulty: "easy",
      },
      {
        id: "ap-network-devices-b4",
        prompt: "Firewall at intro A+ depth:",
        choices: [
          { id: "a", text: "Enforces allow/deny policy on traffic" },
          { id: "b", text: "Is identical to a crimper" },
          { id: "c", text: "Always replaces DHCP" },
        ],
        correctChoiceId: "a",
        explanation: "Firewalls filter by policy; depth stays introductory.",
        objectiveId: "AP1201-2.5",
        difficulty: "easy",
      },
      {
        id: "ap-network-devices-b5",
        prompt: "ONT is associated with:",
        choices: [
          { id: "a", text: "Fiber internet premise handoff" },
          { id: "b", text: "Bluetooth PAN keyboards only" },
          { id: "c", text: "Laser cleaning blades" },
        ],
        correctChoiceId: "a",
        explanation: "Optical network terminals terminate fiber drops.",
        objectiveId: "AP1201-2.5",
        difficulty: "easy",
      },
      {
        id: "ap-network-devices-b6",
        prompt: "Wi-Fi dead; wired Ethernet to the same LAN works. Likely focus:",
        choices: [
          { id: "a", text: "AP / wireless radio / SSID path" },
          { id: "b", text: "Replace the ONT first always" },
          { id: "c", text: "CPU TIM application" },
        ],
        correctChoiceId: "a",
        explanation: "Isolate wireless-specific devices when wired works.",
        objectiveId: "AP1201-2.5",
        difficulty: "medium",
      },
      {
        id: "ap-network-devices-b7",
        prompt: "Cloud-managed networking controllers mainly:",
        choices: [
          { id: "a", text: "Centralize management of many APs/switches" },
          { id: "b", text: "Eliminate the need for Ethernet forever" },
          { id: "c", text: "Print carbon-copy forms" },
        ],
        correctChoiceId: "a",
        explanation: "Controllers/cloud dashboards manage fleets of devices.",
        objectiveId: "AP1201-2.5",
        difficulty: "medium",
      },
      {
        id: "ap-network-devices-b8",
        prompt: "Which network device forwards traffic between different IP networks?",
        choices: [
          { id: "a", text: "Router" },
          { id: "b", text: "Patch panel" },
          { id: "c", text: "Passive USB hub" },
        ],
        correctChoiceId: "a",
        explanation: "Routers select paths and forward packets between IP networks.",
        objectiveId: "AP1201-2.5",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-network-devices-f1",
        front: "Router vs switch?",
        back: "Router between networks · switch within a LAN",
      },
      {
        id: "ap-network-devices-f2",
        front: "Modem/ONT job?",
        back: "Terminate the ISP access link at the premise",
      },
      {
        id: "ap-network-devices-f3",
        front: "AP job?",
        back: "Wireless clients ↔ wired LAN",
      },
      {
        id: "ap-network-devices-f4",
        front: "Consumer wireless router combines?",
        back: "Router+switch+AP+firewall+DHCP/NAT (often)",
      },
      {
        id: "ap-network-devices-f5",
        front: "PoE for?",
        back: "Power APs/phones/cameras over Ethernet",
      },
      {
        id: "ap-network-devices-f6",
        front: "Managed switch adds?",
        back: "Configuration (VLANs/ports/monitoring) vs unmanaged PnP",
      },
    ],
    assignments: [
      {
        id: "ap-lab-device-roles",
        title: "Device placement & failure isolation",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `Part A — Topology: Draw or list placement for ISP ONT → router → switch → PoE AP → PCs/NAS. Label each device’s primary job.

Part B — For each symptom, name the most relevant device/path and first safe check:
1) Wi-Fi works; no internet.
2) Wired OK; wireless dead.
3) One Ethernet wall jack fails; others work.
4) All clients show APIPA.
5) Modem/ONT online; nothing behind the router works.
6) PoE AP has no power LEDs.

Do not access networks you do not own. Fictional answers are enough.`,
        estimatedMinutes: 15,
        completionCriteria: [
          "Labeled topology with device jobs",
          "Six symptom → device → first check lines",
        ],
        relatedTopicIds: ["ap-network-devices", "ap-network-config"],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 40,
    difficulty: "medium",
  },

  {
    id: "ap-soho-networks",
    name: "SOHO Network Setup",
    prerequisites: ["ap-network-devices"],
    objectives: ["AP1201-2.6"],
    lesson: {
      title: "Install and Configure Basic SOHO Networks",
      content: `A SOHO network is a small-office/home-office setup: ISP handoff → router/gateway → LAN/WLAN clients. On A+, you configure it **safely and repeatably** — not by guessing wizard clicks.

**CF refreshers:** \`cf-home-network-devices\`, \`cf-ethernet-vs-wifi\`, \`cf-ip-and-dns-beginner\` — apply them as a technician sequence.

**Physical / logical layout.**
- Confirm **ISP connection** (modem/ONT sync) before blaming Wi-Fi.
- Know **WAN** (toward ISP) vs **LAN** (toward clients) interfaces.
- Place the router/AP where coverage and cable runs make sense; avoid stuffing it in a metal cabinet.
- Document serials, ISP account notes, and current settings **before** changes.

**Repeatable configuration sequence.**
1. Document the existing environment (photos of labels, \`ipconfig\` from a working PC).
2. Connect to the admin UI safely (prefer wired management; use the known local URL/IP — never chase random “support” pop-ups).
3. **Change default admin credentials** immediately.
4. Confirm or update **firmware** from the vendor’s channel.
5. Configure **LAN addressing and DHCP** (scope, lease, optional reservations for printers).
6. Configure **SSID + wireless security** (prefer WPA3 when clients allow; otherwise WPA2/WPA3 mixed thoughtfully).
7. Create **guest / IoT separation** where supported (internet-only guest; IoT isolated from workstations).
8. Verify internet and local connectivity from a test client.
9. **Save / back up** configuration.
10. Document finals **without writing secrets in clear chat tickets** (store passwords in the approved vault).

**Security and policy knobs (A+ depth).**
- Strong admin passwords; never leave vendor defaults.
- Guest networks and IoT isolation reduce blast radius.
- Firewall on by default for WAN; understand what you open.
- **Port forwarding** — only when a business need exists; prefer not exposing admin UIs; document and remove when done.
- **UPnP** — convenient, risky (apps open ports quietly); disable when policy requires.
- Content filtering / parental or business filters where the objective expects recognition.
- **QoS** — prioritize latency-sensitive traffic (voice/video) when supported — intro recognition.
- Network segmentation concepts: guest ≠ staff LAN.

**Static vs DHCP on SOHO.** Most clients use DHCP. Reserve or statically assign carefully for printers/NAS; avoid duplicates (see client-config topic).

**DNS on the router.** Often forwards to ISP or public resolvers; wrong DNS breaks names while IP ping still works.

**Troubleshooting reasoning (which layer?).**
- ISP outage vs modem/ONT vs router vs DHCP vs DNS vs wireless auth vs one bad client vs bad cable/port vs wrong config.
- Prove with: modem status lights → wired test PC → wireless test → compare \`ipconfig\` on working vs failing.

**Ethics / safety.** Do not bypass paid controls, open RDP to the world “just to test,” or publish SOHO admin passwords. Labs here are **fictional worksheets** — real router access is optional and must be authorized.

**What's next.** Network tools — pick the right command or cable tool and interpret evidence.`,
    },
    lightbulbMoment:
      "SOHO success is a sequence — document, harden, address, wireless, segment, verify, back up — not a single wizard checkbox.",
    keyFacts: [
      "Change default admin credentials and keep firmware current",
      "WAN faces ISP; LAN/WLAN face clients — prove ISP before rebuilding Wi-Fi",
      "Prefer WPA3/WPA2; separate guest and IoT when possible",
      "DHCP scopes/reservations need documentation; avoid IP conflicts",
      "Port forwarding and UPnP increase exposure — use deliberately",
      "Backup config and record settings without leaking secrets",
    ],
    guidedExample: {
      title: "Harden a fictional café SOHO",
      steps: [
        "Inventory: ISP cable modem → consumer gateway; staff SSID 'CafeStaff' with default admin/admin still set.",
        "Change admin password; update firmware; disable WPS if present.",
        "Staff SSID → WPA3-Transition; guest SSID internet-only; IoT cameras on isolated SSID.",
        "DHCP 192.168.10.0/24; reserve .20 for receipt printer.",
        "Disable UPnP; no port forwards for admin; back up config; document in vault.",
      ],
    },
    commonMistakes: [
      "Leaving admin/admin or the sticker password forever",
      "Opening port forwards for convenience without expiry",
      "Putting POS and guest phones on the same flat LAN",
      "Changing Wi-Fi password without updating every client and documenting",
      "Factory reset without a backup when a simple DHCP fix would do",
    ],
    examTraps: [
      "Default credential / firmware hygiene",
      "Guest vs IoT isolation purpose",
      "DHCP scope vs reservation vs static",
      "UPnP and port-forward risk recognition",
      "WAN vs LAN symptom isolation",
    ],
    realWorldScenario:
      "A home office 'internet is slow and weird' ticket traces to UPnP-opened ports and an ancient firmware build after a family member installed a game host. Disabling UPnP, removing stale forwards, updating firmware, and separating a guest SSID restores stability — without replacing hardware.",
    whenThisFails: [
      "If the modem/ONT shows no sync, escalate to ISP before redesigning SSIDs",
      "If only one client fails after a password change, update that client — do not reset the router yet",
      "If policy forbids admin UI changes, gather evidence and escalate",
    ],
    teacherReflectionPrompt:
      "List the ten-step SOHO configuration sequence from memory, and explain when you would disable UPnP.",
    quiz: [
      {
        id: "ap-soho-networks-q1",
        prompt: "First hardening step after reaching a new SOHO admin UI is usually:",
        choices: [
          { id: "a", text: "Change default administrative credentials" },
          { id: "b", text: "Enable UPnP and open every port" },
          { id: "c", text: "Disable the firewall permanently" },
          { id: "d", text: "Set WEP as the only security" },
        ],
        correctChoiceId: "a",
        explanation: "Default credentials are a top SOHO risk.",
        objectiveId: "AP1201-2.6",
        difficulty: "easy",
      },
      {
        id: "ap-soho-networks-q2",
        prompt: "A guest SSID’s typical goal is to:",
        choices: [
          { id: "a", text: "Provide internet while isolating guests from the private LAN" },
          { id: "b", text: "Give guests domain admin rights" },
          { id: "c", text: "Replace the ONT" },
          { id: "d", text: "Disable DHCP for staff" },
        ],
        correctChoiceId: "a",
        explanation: "Guest separation limits access to internal resources.",
        objectiveId: "AP1201-2.6",
        difficulty: "easy",
      },
      {
        id: "ap-soho-networks-q3",
        prompt: "UPnP on a SOHO router is risky because:",
        choices: [
          { id: "a", text: "Applications may open inbound ports without clear admin intent" },
          { id: "b", text: "It upgrades firmware automatically to WPA3 only" },
          { id: "c", text: "It converts switches into ONTs" },
          { id: "d", text: "It removes the need for SSIDs" },
        ],
        correctChoiceId: "a",
        explanation: "UPnP convenience can silently expand exposure.",
        objectiveId: "AP1201-2.6",
        difficulty: "medium",
      },
      {
        id: "ap-soho-networks-q4",
        prompt: "Modem shows no ISP sync; Wi-Fi SSID is up. Best first framing?",
        choices: [
          { id: "a", text: "ISP/modem-ONT path — local Wi-Fi alone does not prove internet" },
          { id: "b", text: "Replace all Cat6 patch cords immediately" },
          { id: "c", text: "Disable DNS worldwide" },
          { id: "d", text: "Upgrade the CPU cooler" },
        ],
        correctChoiceId: "a",
        explanation: "Separate ISP edge failure from LAN/WLAN configuration.",
        objectiveId: "AP1201-2.6",
        difficulty: "medium",
      },
      {
        id: "ap-soho-networks-q5",
        prompt: "Before a factory reset of a production SOHO router you should:",
        choices: [
          { id: "a", text: "Back up/export configuration and document critical settings" },
          { id: "b", text: "Post the admin password in a public forum" },
          { id: "c", text: "Enable every port forward first" },
          { id: "d", text: "Delete the ISP account" },
        ],
        correctChoiceId: "a",
        explanation: "Backup and documentation enable recovery.",
        objectiveId: "AP1201-2.6",
        difficulty: "easy",
      },
    ],
    questionBank: [
      {
        id: "ap-soho-networks-b1",
        prompt: "WAN interface faces:",
        choices: [
          { id: "a", text: "The ISP / upstream link" },
          { id: "b", text: "Only Bluetooth headsets" },
          { id: "c", text: "The laser fuser" },
        ],
        correctChoiceId: "a",
        explanation: "WAN toward provider; LAN toward local clients.",
        objectiveId: "AP1201-2.6",
        difficulty: "easy",
      },
      {
        id: "ap-soho-networks-b2",
        prompt: "DHCP reservation is useful for:",
        choices: [
          { id: "a", text: "Giving a printer a stable address via DHCP" },
          { id: "b", text: "Encrypting WPA3 handshakes" },
          { id: "c", text: "Punching down Cat6" },
        ],
        correctChoiceId: "a",
        explanation: "Reservations bind MAC→IP inside the DHCP service.",
        objectiveId: "AP1201-2.6",
        difficulty: "easy",
      },
      {
        id: "ap-soho-networks-b3",
        prompt: "Prefer wireless security:",
        choices: [
          { id: "a", text: "WPA3 when clients support it; otherwise WPA2/WPA3 thoughtfully" },
          { id: "b", text: "Open with no password for staff POS" },
          { id: "c", text: "WEP-only for modern laptops" },
        ],
        correctChoiceId: "a",
        explanation: "Modern SOHO Wi-Fi should not use WEP/open for staff.",
        objectiveId: "AP1201-2.6",
        difficulty: "easy",
      },
      {
        id: "ap-soho-networks-b4",
        prompt: "Port forwarding should be:",
        choices: [
          { id: "a", text: "Intentional, documented, and minimized" },
          { id: "b", text: "Enabled for all ports by default" },
          { id: "c", text: "Used instead of passwords" },
        ],
        correctChoiceId: "a",
        explanation: "Forwards expand attack surface — treat carefully.",
        objectiveId: "AP1201-2.6",
        difficulty: "medium",
      },
      {
        id: "ap-soho-networks-b5",
        prompt: "IoT isolation mainly helps:",
        choices: [
          { id: "a", text: "Limit lateral movement if cameras/hubs are compromised" },
          { id: "b", text: "Increase toner yield" },
          { id: "c", text: "Remove the need for firmware updates" },
        ],
        correctChoiceId: "a",
        explanation: "Segmentation contains fragile devices.",
        objectiveId: "AP1201-2.6",
        difficulty: "easy",
      },
      {
        id: "ap-soho-networks-b6",
        prompt: "QoS on SOHO gear typically:",
        choices: [
          { id: "a", text: "Prioritizes selected traffic (e.g., voice/video) when supported" },
          { id: "b", text: "Deletes the default gateway" },
          { id: "c", text: "Replaces Ethernet switches with Bluetooth" },
        ],
        correctChoiceId: "a",
        explanation: "QoS is traffic prioritization — intro recognition.",
        objectiveId: "AP1201-2.6",
        difficulty: "medium",
      },
      {
        id: "ap-soho-networks-b7",
        prompt: "Safe documentation practice:",
        choices: [
          { id: "a", text: "Record settings in approved systems; do not paste secrets into public tickets" },
          { id: "b", text: "Email WPA keys to everyone in the building BCC" },
          { id: "c", text: "Skip documentation after changes" },
        ],
        correctChoiceId: "a",
        explanation: "Document without leaking credentials.",
        objectiveId: "AP1201-2.6",
        difficulty: "easy",
      },
      {
        id: "ap-soho-networks-b8",
        prompt: "Before hardening a new SOHO router, which first step establishes safe administrative control?",
        choices: [
          { id: "a", text: "Verify ownership, connect through the approved local method, and replace default administrative credentials" },
          { id: "b", text: "Expose administration to the Internet" },
          { id: "c", text: "Disable wireless encryption" },
        ],
        correctChoiceId: "a",
        explanation: "Safe SOHO setup begins with controlled local administration and unique credentials.",
        objectiveId: "AP1201-2.6",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-soho-networks-f1",
        front: "First SOHO harden step?",
        back: "Change default admin credentials",
      },
      {
        id: "ap-soho-networks-f2",
        front: "Guest SSID goal?",
        back: "Internet access without private LAN reach",
      },
      {
        id: "ap-soho-networks-f3",
        front: "UPnP risk?",
        back: "Apps may open inbound ports quietly",
      },
      {
        id: "ap-soho-networks-f4",
        front: "WAN vs LAN?",
        back: "WAN→ISP · LAN→local clients",
      },
      {
        id: "ap-soho-networks-f5",
        front: "Before factory reset?",
        back: "Backup/export config + document critical settings",
      },
      {
        id: "ap-soho-networks-f6",
        front: "Port forwarding rule of thumb?",
        back: "Minimize, document, remove when unused",
      },
    ],
    assignments: [
      {
        id: "ap-lab-soho-harden",
        title: "Fictional SOHO harden & verify",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `Scenario — "Ridge Dental" gateway (fictional settings sheet):
- Admin user/pass: admin / admin
- Firmware: 2 years old
- Staff SSID: RidgeStaff / WPA2 PSK on sticky note "Password1"
- Guest: none
- UPnP: on
- Port forward: TCP 3389 → 192.168.1.50 (unknown purpose)
- DHCP: 192.168.1.100–200; printer at .50 has no reservation (occasional conflict)
- IoT cameras on staff SSID

Tasks:
1) List unsafe defaults.
2) Write corrected settings (security, guest/IoT, UPnP/forwards, DHCP reservation).
3) Write verify steps (internet, LAN ping, guest isolation expectation).
4) Produce a short config record (no real secrets — use placeholders).

No real router login required. Do not practice exposing RDP to the internet.`,
        estimatedMinutes: 18,
        completionCriteria: [
          "Unsafe defaults listed",
          "Corrected plan including guest/IoT and forward/UPnP decisions",
          "Verify steps + config record with placeholders",
        ],
        relatedTopicIds: ["ap-soho-networks", "ap-wireless-tech", "ap-network-config"],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 45,
    difficulty: "medium",
  },

  {
    id: "ap-network-tools",
    name: "Networking Tools",
    prerequisites: ["ap-soho-networks"],
    objectives: ["AP1201-2.8"],
    lesson: {
      title: "Select Tools, Gather Evidence, Interpret Safely",
      content: `Tools answer specific questions. Pick the **least invasive** check that can confirm or eliminate a layer — then interpret what the output actually proves (and what it cannot).

**CF refreshers:** \`cf-connection-troubleshooting-basics\`, \`cf-ip-and-dns-beginner\` — A+ adds tool selection discipline and physical tools.

**Physical tools (jobs).**
- **Cable tester** — continuity / wiring faults on copper runs.
- **Tone generator + probe** — trace which cable/jack is which in a bundle.
- **Loopback plug** — quick NIC/port self-test (where appropriate).
- **Punch-down tool** — terminate conductors on blocks/patch panels (skill + care).
- **Crimper** — attach RJ45 (etc.) connectors to cable.
- **Wi-Fi analyzer** — see SSIDs, channels, signal — on **authorized** networks; not for attacking neighbors.
- **Network tap (concept)** — inserts to observe traffic; authorization required; recognition-level only.
- **Multimeter** — within safe, objective-appropriate electrical checks (e.g., PoE/injector expectations per training — never improvise on mains wiring beyond your authorization).

**Software / CLI tools (Windows-first path).**
- \`ipconfig\` / \`ipconfig /all\` — address, mask, gateway, DNS, DHCP status, APIPA.
- \`ping\` — basic reachability/latency (not “the app works”).
- \`tracert\` / \`pathping\` — path hops / loss hints toward a destination.
- \`nslookup\` — name resolution evidence.
- \`netstat\` — listening vs established connections (local view).
- \`arp\` — IP↔MAC on the local segment.
- \`route\` / routing table view — where the OS thinks packets should go.
- \`hostname\` — device name check.
- \`Test-NetConnection\` — PowerShell reachability/port check to an **authorized** target.
- Linux equivalents (\`ip addr\`, \`ping\`, \`traceroute\`, \`dig\`/\`nslookup\`) only as recognition if you meet them — this track stays Windows-primary.
- Safe local Wi-Fi status (Windows Settings / adapter details) — read-only observation.

**Interpretation examples.**
- 169.254.x.x → DHCP failed (APIPA).
- Missing default gateway → off-subnet/internet path suspect.
- Unexpected DNS → names fail or go somewhere wrong.
- Ping LAN OK, names fail → DNS.
- Ping IP OK, HTTPS fails → app/firewall/proxy — not “no network.”
- \`tracert\` dies at first hop → local gateway/router path.
- \`netstat\` shows listening vs established — useful for “is anything bound?”
- \`arp\` shows a neighbor MAC — Layer-2 adjacency on LAN.
- Cable tester fail → physical path before replacing routers.
- Analyzer shows weak RSSI / crowded channel → wireless RF, not ISP modem.

**What tools cannot prove.**
- \`ping\` success ≠ application OK.
- Open port locally ≠ service is safe or correctly configured.
- Wi-Fi bars ≠ good internet upstream.

**Authorization.** Prefer read-only. Do not scan the public internet, tone across unauthorized closets, or tap production without approval. Escalate when policy requires.

**Habit.** Symptom → question → tool → evidence → next action (or escalate).

**What's next.** Networking domain review — mixed scenarios across 2.1–2.8.`,
    },
    lightbulbMoment:
      "Every tool answers one question — if you cannot name the question, you are not ready to run the tool.",
    keyFacts: [
      "Match tool to question: cable vs address vs DNS vs path vs Wi-Fi RF",
      "ipconfig/ping/tracert/nslookup/netstat/arp/route/Test-NetConnection — know evidence each gives",
      "Physical tools prove wiring/identity/termination — not application health",
      "Least invasive useful check first; many CLI tools are read-only",
      "Authorization gates taps, punching, and any non-owned network testing",
      "Success at one layer never proves the layer above",
    ],
    guidedExample: {
      title: "Ticket → tool chain",
      steps: [
        "Symptom: 'Internet down' on one PC.",
        "Question 1: Do I have a usable address? → ipconfig /all (see APIPA? gateway? DNS?).",
        "If APIPA → check link/DHCP (cable tester if wired link light dead).",
        "If address OK → ping gateway; if fail → gateway/cable/port.",
        "If gateway OK → nslookup; if fail → DNS settings.",
        "If DNS OK → Test-NetConnection to an authorized internal host/port; escalate if path dies beyond gateway.",
      ],
    },
    commonMistakes: [
      "Running port scans on the public internet 'for practice'",
      "Replacing a router because ping to 8.8.8.8 failed when DNS was the only break",
      "Ignoring cable tester results and blaming software",
      "Using a Wi-Fi analyzer on neighbor networks without authorization",
      "Treating tracert as proof of application SLA",
    ],
    examTraps: [
      "Which tool for cable continuity vs name resolution vs path",
      "APIPA / missing gateway / bad DNS interpretation",
      "Tone probe purpose",
      "netstat listening vs established (intro)",
      "Authorization / least-invasive choice",
    ],
    realWorldScenario:
      "A new drop 'doesn't work.' ping fails; ipconfig shows media disconnected. Cable tester fails between patch panel and wall jack. A punch-down re-termination fixes it — no SOHO rebuild required. The tool matched the question: Is the copper path good?",
    whenThisFails: [
      "If results conflict between two PCs, compare side-by-side ipconfig before changing the router",
      "If you lack rights to punch/crimp, gather tester evidence and escalate to cabling",
      "If Wi-Fi analyzer suggests channel changes on a managed AP, propose — do not rogue-reconfigure",
    ],
    teacherReflectionPrompt:
      "For 'can browse by IP but not by name,' name the first tool, expected evidence, and the next check if that evidence confirms DNS failure.",
    quiz: [
      {
        id: "ap-network-tools-q1",
        prompt: "Best first tool to inspect DHCP status, gateway, and DNS on Windows?",
        choices: [
          { id: "a", text: "ipconfig /all" },
          { id: "b", text: "Crimper" },
          { id: "c", text: "Tone generator only" },
          { id: "d", text: "Punch-down tool" },
        ],
        correctChoiceId: "a",
        explanation: "ipconfig /all surfaces addressing and DHCP details.",
        objectiveId: "AP1201-2.8",
        difficulty: "easy",
      },
      {
        id: "ap-network-tools-q2",
        prompt: "Name resolution failures are best investigated first with:",
        choices: [
          { id: "a", text: "nslookup (and DNS fields in ipconfig)" },
          { id: "b", text: "A loopback plug exclusively" },
          { id: "c", text: "A PSU wattage calculator" },
          { id: "d", text: "Toner density charts" },
        ],
        correctChoiceId: "a",
        explanation: "nslookup tests DNS answers directly.",
        objectiveId: "AP1201-2.8",
        difficulty: "easy",
      },
      {
        id: "ap-network-tools-q3",
        prompt: "A tone generator and probe are primarily for:",
        choices: [
          { id: "a", text: "Tracing/identifying cables and jacks in a bundle" },
          { id: "b", text: "Encrypting WPA3 traffic" },
          { id: "c", text: "Assigning public IP addresses" },
          { id: "d", text: "Replacing traceroute entirely" },
        ],
        correctChoiceId: "a",
        explanation: "Tone-and-probe identifies physical cable paths.",
        objectiveId: "AP1201-2.8",
        difficulty: "easy",
      },
      {
        id: "ap-network-tools-q4",
        prompt: "tracert showing failure at the first hop most nearly suggests:",
        choices: [
          { id: "a", text: "A problem at/near the local gateway path" },
          { id: "b", text: "That TCP no longer exists" },
          { id: "c", text: "That the PSU is modular" },
          { id: "d", text: "That Bluetooth replaced Ethernet" },
        ],
        correctChoiceId: "a",
        explanation: "First-hop failure points local before distant ISP cores.",
        objectiveId: "AP1201-2.8",
        difficulty: "medium",
      },
      {
        id: "ap-network-tools-q5",
        prompt: "Scanning random public hosts to 'practice nmap' for this course is:",
        choices: [
          { id: "a", text: "Out of scope / unauthorized — use fictional or owned lab targets only" },
          { id: "b", text: "Required for A+ objective 2.8" },
          { id: "c", text: "The same as running hostname" },
          { id: "d", text: "How you fix APIPA" },
        ],
        correctChoiceId: "a",
        explanation: "Keep tool practice local, fictional, or explicitly authorized.",
        objectiveId: "AP1201-2.8",
        difficulty: "easy",
      },
    ],
    questionBank: [
      {
        id: "ap-network-tools-b1",
        prompt: "Cable tester best answers:",
        choices: [
          { id: "a", text: "Whether a copper run has continuity/wiring faults" },
          { id: "b", text: "Whether WPA3 Enterprise is configured" },
          { id: "c", text: "Whether DNSSEC is enabled globally" },
        ],
        correctChoiceId: "a",
        explanation: "Testers validate physical cabling.",
        objectiveId: "AP1201-2.8",
        difficulty: "easy",
      },
      {
        id: "ap-network-tools-b2",
        prompt: "ping primarily proves:",
        choices: [
          { id: "a", text: "Basic reachability (not full application health)" },
          { id: "b", text: "That HTTPS certificates are valid" },
          { id: "c", text: "That PoE wattage is correct" },
        ],
        correctChoiceId: "a",
        explanation: "Ping is ICMP reachability — limited proof.",
        objectiveId: "AP1201-2.8",
        difficulty: "easy",
      },
      {
        id: "ap-network-tools-b3",
        prompt: "arp is useful to see:",
        choices: [
          { id: "a", text: "IP-to-MAC mappings on the local segment" },
          { id: "b", text: "Toner levels" },
          { id: "c", text: "ISP satellite latency SLAs exclusively" },
        ],
        correctChoiceId: "a",
        explanation: "ARP reveals local Layer-2 adjacencies.",
        objectiveId: "AP1201-2.8",
        difficulty: "medium",
      },
      {
        id: "ap-network-tools-b4",
        prompt: "Test-NetConnection can help:",
        choices: [
          { id: "a", text: "Check reachability/port to an authorized target from PowerShell" },
          { id: "b", text: "Crimp RJ45 connectors" },
          { id: "c", text: "Flash ONT firmware over Bluetooth" },
        ],
        correctChoiceId: "a",
        explanation: "PowerShell connectivity tests — authorized targets only.",
        objectiveId: "AP1201-2.8",
        difficulty: "easy",
      },
      {
        id: "ap-network-tools-b5",
        prompt: "netstat helps distinguish:",
        choices: [
          { id: "a", text: "Listening vs established connections on the host" },
          { id: "b", text: "DDR generation of RAM" },
          { id: "c", text: "Fuser temperature" },
        ],
        correctChoiceId: "a",
        explanation: "netstat shows socket states locally.",
        objectiveId: "AP1201-2.8",
        difficulty: "medium",
      },
      {
        id: "ap-network-tools-b6",
        prompt: "Wi-Fi analyzer evidence might include:",
        choices: [
          { id: "a", text: "Channel congestion or weak signal on authorized networks" },
          { id: "b", text: "CPU socket pin counts" },
          { id: "c", text: "RAID stripe size only" },
        ],
        correctChoiceId: "a",
        explanation: "Analyzers visualize RF/channel conditions — authorized use.",
        objectiveId: "AP1201-2.8",
        difficulty: "easy",
      },
      {
        id: "ap-network-tools-b7",
        prompt: "Loopback plug is typically for:",
        choices: [
          { id: "a", text: "Quick NIC/port self-testing" },
          { id: "b", text: "Punching 110 blocks" },
          { id: "c", text: "Setting WPA3 Enterprise RADIUS" },
        ],
        correctChoiceId: "a",
        explanation: "Loopbacks help validate a port/NIC path.",
        objectiveId: "AP1201-2.8",
        difficulty: "easy",
      },
      {
        id: "ap-network-tools-b8",
        prompt: "Which tool verifies twisted-pair cable continuity and pin mapping?",
        choices: [
          { id: "a", text: "Cable tester" },
          { id: "b", text: "Loopback plug for every cable run" },
          { id: "c", text: "Toner vacuum" },
        ],
        correctChoiceId: "a",
        explanation: "A cable tester checks continuity and wiring faults such as opens, shorts, reversals, and split pairs.",
        objectiveId: "AP1201-2.8",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-network-tools-f1",
        front: "ipconfig /all shows?",
        back: "IP/mask/GW/DNS/DHCP — spot APIPA",
      },
      {
        id: "ap-network-tools-f2",
        front: "nslookup answers?",
        back: "Does DNS resolve this name?",
      },
      {
        id: "ap-network-tools-f3",
        front: "Cable tester vs tone probe?",
        back: "Tester = continuity · tone = identify/trace cable",
      },
      {
        id: "ap-network-tools-f4",
        front: "ping proves?",
        back: "Reachability — not app health",
      },
      {
        id: "ap-network-tools-f5",
        front: "tracert first-hop fail?",
        back: "Local gateway/path issue likely",
      },
      {
        id: "ap-network-tools-f6",
        front: "Tool practice rule?",
        back: "Local/fictional/authorized — no public scanning",
      },
    ],
    assignments: [
      {
        id: "ap-lab-tool-tickets",
        title: "Tool selection ticket set",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `For each fictional ticket: (1) first tool, (2) expected evidence, (3) next check, (4) escalate? Y/N

T1: One wall jack — link light off; other jacks fine.
T2: Client has 169.254.x.x.
T3: Ping 8.8.8.8 works; https://intranet by name fails.
T4: All apps fail; tracert dies at first hop.
T5: New drop — need to find which panel port matches the desk.
T6: Suspect crowded 2.4 GHz on your authorized AP.

Then on your practice PC (read-only): run \`ipconfig /all\`, \`hostname\`, and one \`ping\` to your default gateway (if present). Record outputs. Do not scan public networks.`,
        estimatedMinutes: 18,
        completionCriteria: [
          "Complete T1–T6 tool chains with escalate decisions",
          "Paste/summarize live ipconfig /all + hostname + gateway ping",
        ],
        relatedTopicIds: ["ap-network-tools", "ap-network-config"],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 40,
    difficulty: "medium",
  },

  {
    id: "ap-networking-domain-review",
    name: "Networking Domain Review",
    prerequisites: ["ap-network-tools"],
    objectives: [
      "AP1201-2.1",
      "AP1201-2.2",
      "AP1201-2.3",
      "AP1201-2.4",
      "AP1201-2.5",
      "AP1201-2.6",
      "AP1201-2.7",
      "AP1201-2.8",
    ],
    lesson: {
      title: "Integrate Core 1 Networking",
      content: `This checkpoint ties the Networking path together. You are not learning a new subsystem — you are practicing **applied reasoning** across services, wireless, types, client config, devices, SOHO, and tools.

**Path you completed.**
1. **Ports & protocols** — user action → service → protocol → TCP/UDP → port.
2. **Network services** — job first, then default ports as labels.
3. **Wireless** — bands, security, other radios, symptom tradeoffs.
4. **Network types** — LAN/WAN/VPN/VLAN intro, intranet/extranet, internet-link recognition.
5. **Client config** — IP/mask/GW/DNS, DHCP vs static, APIPA.
6. **Devices** — jobs in the topology; combined SOHO gateway vs discrete roles.
7. **SOHO** — harden sequence, guest/IoT, UPnP/forward caution, verify & backup.
8. **Tools** — question → least-invasive tool → interpret → next action.

**How to use missed questions.** Each review item is tagged with an objective. If you miss it, return to the mapped topic:

${Object.entries(AP_NETWORKING_OBJECTIVE_TOPIC)
  .map(([obj, topic]) => `- ${obj} → \`${topic}\``)
  .join("\n")}

**Technician habits to keep.** Prove layers. Compare a working peer. Prefer read-only checks. Respect wireless and scanning authorization. Document without leaking secrets. Escalate beyond your scope.

**Looking ahead (not this domain).** Next: Virtualization & Cloud, then Hardware & Network Troubleshooting reuses these habits on fault scenarios. Core 2 remains separate. Full A+ track stays planned until Core 2 lands.`,
    },
    lightbulbMoment:
      "Networking mastery is layering — ask which question the symptom poses, then pick the service, device, or tool that answers it.",
    keyFacts: [
      "TCP vs UDP is a delivery tradeoff — ports label endpoints, not morality",
      "Service symptoms isolate DHCP vs DNS vs app before blaming 'the internet'",
      "Wi-Fi bars ≠ upstream health; band/security/client capability matter",
      "APIPA and missing gateway/DNS each fail differently",
      "Name the device job — ISP edge, forwarder, AP, policy, PoE power",
      "SOHO: change defaults, segment guest/IoT, minimize forwards/UPnP, back up",
      "Tools: least invasive evidence first; no public scanning",
    ],
    guidedExample: {
      title: "Mixed ticket triage",
      steps: [
        "Ticket A: HTTPS site fails; ping by IP works → DNS/name path (services + config + nslookup).",
        "Ticket B: Staff on 2.4 IoT SSID slow → wireless band/SSID choice.",
        "Ticket C: Guest can reach file shares → SOHO segmentation failure.",
        "Ticket D: PoE AP dark → device/PoE path before radio config.",
        "Ticket E: One jack dead → cable tester / tone — not ISP modem swap.",
        "Write the first proving check for each.",
      ],
    },
    commonMistakes: [
      "Memorizing ports without the service job",
      "Rebuilding Wi-Fi when the modem has no sync",
      "Leaving SOHO defaults and open forwards",
      "Scanning public networks for practice",
      "Treating the consumer gateway as only an AP",
    ],
    examTraps: [
      "TCP vs UDP tradeoffs and common service roles",
      "Wireless band/security choices",
      "APIPA / gateway / DNS symptom split",
      "Device role identification",
      "SOHO harden + guest isolation",
      "Tool selection and authorization",
    ],
    realWorldScenario:
      "An afternoon brings: APIPA on a new drop, a guest Wi-Fi reaching the NAS, and 'internet down' with full bars. You sequence cable/DHCP proof, SOHO isolation check, then DNS vs upstream — three topics, one habit: name the layer before you replace gear.",
    whenThisFails: [
      "If review scores cluster on one objective, loop that topic's lesson + lab before Virt/Cloud or Troubleshooting domains",
      "If safety/authorization items are missed, re-read wireless and tools boundaries before any live practice",
    ],
    teacherReflectionPrompt:
      "Without notes, list the eight Networking topics in order and one proving check you would run for a vague 'network is broken' ticket in each area.",
    quiz: [
      {
        id: "ap-networking-domain-review-q1",
        prompt: "A technician maps browser → HTTPS → TCP → 443. What principle is demonstrated?",
        choices: [
          { id: "a", text: "User action → service → protocol → transport → port" },
          { id: "b", text: "Ports exist without services" },
          { id: "c", text: "UDP is required for all HTTPS" },
          { id: "d", text: "Toner density maps to TCP" },
        ],
        correctChoiceId: "a",
        explanation:
          "Ports label endpoints after you understand the job." +
          reviewHint("AP1201-2.1"),
        objectiveId: "AP1201-2.1",
        difficulty: "easy",
      },
      {
        id: "ap-networking-domain-review-q2",
        prompt: "Compared with 5 GHz, 2.4 GHz typically offers:",
        choices: [
          { id: "a", text: "Better range through obstacles but more congestion" },
          { id: "b", text: "Only WPA3 Enterprise" },
          { id: "c", text: "Zero channel overlap always" },
          { id: "d", text: "ONT fiber modulation" },
        ],
        correctChoiceId: "a",
        explanation: "Band tradeoffs are a wireless topic." + reviewHint("AP1201-2.2"),
        objectiveId: "AP1201-2.2",
        difficulty: "easy",
      },
      {
        id: "ap-networking-domain-review-q3",
        prompt: "Works by IP, fails by name — isolate which service first?",
        choices: [
          { id: "a", text: "DNS" },
          { id: "b", text: "The laser fuser" },
          { id: "c", text: "CPU microcode only" },
          { id: "d", text: "Punch-down force" },
        ],
        correctChoiceId: "a",
        explanation: "Name failures point at DNS." + reviewHint("AP1201-2.3"),
        objectiveId: "AP1201-2.3",
        difficulty: "easy",
      },
      {
        id: "ap-networking-domain-review-q4",
        prompt: "169.254.10.20 on a Windows client usually means:",
        choices: [
          { id: "a", text: "APIPA — DHCP did not provide a lease" },
          { id: "b", text: "Healthy public addressing" },
          { id: "c", text: "WPA3 success exclusively" },
          { id: "d", text: "A SAN fabric formed" },
        ],
        correctChoiceId: "a",
        explanation: "APIPA is a client-config signal." + reviewHint("AP1201-2.4"),
        objectiveId: "AP1201-2.4",
        difficulty: "easy",
      },
      {
        id: "ap-networking-domain-review-q5",
        prompt: "Device that forwards between different IP networks?",
        choices: [
          { id: "a", text: "Router" },
          { id: "b", text: "Patch panel only" },
          { id: "c", text: "Crimper" },
          { id: "d", text: "Toner cartridge" },
        ],
        correctChoiceId: "a",
        explanation: "Router job vs switch/AP/modem." + reviewHint("AP1201-2.5"),
        objectiveId: "AP1201-2.5",
        difficulty: "easy",
      },
      {
        id: "ap-networking-domain-review-q6",
        prompt: "After reaching a new SOHO admin UI, a priority harden step is:",
        choices: [
          { id: "a", text: "Change default administrative credentials" },
          { id: "b", text: "Enable UPnP and forward all ports" },
          { id: "c", text: "Set WEP for staff POS" },
          { id: "d", text: "Disable DHCP permanently with no plan" },
        ],
        correctChoiceId: "a",
        explanation: "Default credentials are a SOHO risk." + reviewHint("AP1201-2.6"),
        objectiveId: "AP1201-2.6",
        difficulty: "easy",
      },
      {
        id: "ap-networking-domain-review-q7",
        prompt: "A Bluetooth headset to a phone is best classified as a:",
        choices: [
          { id: "a", text: "PAN" },
          { id: "b", text: "WAN backbone" },
          { id: "c", text: "SAN" },
          { id: "d", text: "ONT" },
        ],
        correctChoiceId: "a",
        explanation: "Personal-area short links are PANs." + reviewHint("AP1201-2.7"),
        objectiveId: "AP1201-2.7",
        difficulty: "easy",
      },
      {
        id: "ap-networking-domain-review-q8",
        prompt: "Best first Windows tool for gateway/DNS/DHCP fields?",
        choices: [
          { id: "a", text: "ipconfig /all" },
          { id: "b", text: "Crimper" },
          { id: "c", text: "Tone generator only" },
          { id: "d", text: "Punch-down tool" },
        ],
        correctChoiceId: "a",
        explanation: "ipconfig /all is the addressing inventory." + reviewHint("AP1201-2.8"),
        objectiveId: "AP1201-2.8",
        difficulty: "easy",
      },
      {
        id: "ap-networking-domain-review-q9",
        prompt: "UDP is often preferred over TCP when:",
        choices: [
          { id: "a", text: "Lower overhead matters and the app can tolerate or retry loss" },
          { id: "b", text: "You always need ordered retransmission for every byte" },
          { id: "c", text: "You are terminating fiber ONTs" },
          { id: "d", text: "You are crimping RJ45" },
        ],
        correctChoiceId: "a",
        explanation: "TCP/UDP is a tradeoff." + reviewHint("AP1201-2.1"),
        objectiveId: "AP1201-2.1",
        difficulty: "medium",
      },
      {
        id: "ap-networking-domain-review-q10",
        prompt: "Guest Wi-Fi reaching the NAS usually indicates:",
        choices: [
          { id: "a", text: "Missing guest/LAN isolation on the SOHO/AP design" },
          { id: "b", text: "That DNS root servers melted" },
          { id: "c", text: "That DDR4 became DDR5" },
          { id: "d", text: "That cable testers invent routes" },
        ],
        correctChoiceId: "a",
        explanation: "Segmentation is a SOHO/types habit." + reviewHint("AP1201-2.6"),
        objectiveId: "AP1201-2.6",
        difficulty: "medium",
      },
      {
        id: "ap-networking-domain-review-q11",
        prompt: "VPN primary purpose?",
        choices: [
          { id: "a", text: "Encrypted tunnel across an untrusted network" },
          { id: "b", text: "Replace all copper with Bluetooth" },
          { id: "c", text: "Heat the fuser" },
          { id: "d", text: "Assign APIPA on purpose" },
        ],
        correctChoiceId: "a",
        explanation: "VPN is a network-types concept." + reviewHint("AP1201-2.7"),
        objectiveId: "AP1201-2.7",
        difficulty: "easy",
      },
      {
        id: "ap-networking-domain-review-q12",
        prompt: "Cable tester fails on a new drop; other ports work. Next framing?",
        choices: [
          { id: "a", text: "Physical cabling path — not an ISP modem replacement first" },
          { id: "b", text: "Disable DNS globally" },
          { id: "c", text: "Enable UPnP on all routers" },
          { id: "d", text: "Force WEP on staff SSID" },
        ],
        correctChoiceId: "a",
        explanation: "Match tool evidence to the layer." + reviewHint("AP1201-2.8"),
        objectiveId: "AP1201-2.8",
        difficulty: "medium",
      },
    ],
    questionBank: [
      {
        id: "ap-networking-domain-review-b1",
        prompt: "DHCP’s client job is to:",
        choices: [
          { id: "a", text: "Automatically assign addressing options" },
          { id: "b", text: "Encrypt Wi-Fi with WEP" },
          { id: "c", text: "Replace NICs" },
        ],
        correctChoiceId: "a",
        explanation: "DHCP service + config topics." + reviewHint("AP1201-2.3"),
        objectiveId: "AP1201-2.3",
        difficulty: "easy",
      },
      {
        id: "ap-networking-domain-review-b2",
        prompt: "WPA3 Enterprise vs Personal:",
        choices: [
          { id: "a", text: "Enterprise uses per-user 802.1X; Personal uses shared PSK" },
          { id: "b", text: "Personal requires RADIUS always" },
          { id: "c", text: "Enterprise removes encryption" },
        ],
        correctChoiceId: "a",
        explanation: "Wireless auth modes." + reviewHint("AP1201-2.2"),
        objectiveId: "AP1201-2.2",
        difficulty: "medium",
      },
      {
        id: "ap-networking-domain-review-b3",
        prompt: "Missing default gateway typically breaks:",
        choices: [
          { id: "a", text: "Off-subnet / internet paths" },
          { id: "b", text: "USB keyboard pairing only" },
          { id: "c", text: "DIMM keying" },
        ],
        correctChoiceId: "a",
        explanation: "Client config gateway role." + reviewHint("AP1201-2.4"),
        objectiveId: "AP1201-2.4",
        difficulty: "easy",
      },
      {
        id: "ap-networking-domain-review-b4",
        prompt: "Modem/ONT primary job:",
        choices: [
          { id: "a", text: "Terminate the ISP access link" },
          { id: "b", text: "Punch down Cat6" },
          { id: "c", text: "Store ECC settings" },
        ],
        correctChoiceId: "a",
        explanation: "Device roles at the ISP edge." + reviewHint("AP1201-2.5"),
        objectiveId: "AP1201-2.5",
        difficulty: "easy",
      },
      {
        id: "ap-networking-domain-review-b5",
        prompt: "UPnP risk on SOHO:",
        choices: [
          { id: "a", text: "Apps may open inbound ports without clear intent" },
          { id: "b", text: "It forces WPA3-only" },
          { id: "c", text: "It replaces traceroute" },
        ],
        correctChoiceId: "a",
        explanation: "SOHO exposure control." + reviewHint("AP1201-2.6"),
        objectiveId: "AP1201-2.6",
        difficulty: "medium",
      },
      {
        id: "ap-networking-domain-review-b6",
        prompt: "Intranet means:",
        choices: [
          { id: "a", text: "Private organizational network services" },
          { id: "b", text: "Unfiltered public internet for all" },
          { id: "c", text: "Only RFID badges" },
        ],
        correctChoiceId: "a",
        explanation: "Network types vocabulary." + reviewHint("AP1201-2.7"),
        objectiveId: "AP1201-2.7",
        difficulty: "easy",
      },
      {
        id: "ap-networking-domain-review-b7",
        prompt: "nslookup primarily tests:",
        choices: [
          { id: "a", text: "DNS name resolution" },
          { id: "b", text: "Cable continuity" },
          { id: "c", text: "PoE wattage" },
        ],
        correctChoiceId: "a",
        explanation: "Tool selection for DNS." + reviewHint("AP1201-2.8"),
        objectiveId: "AP1201-2.8",
        difficulty: "easy",
      },
      {
        id: "ap-networking-domain-review-b8",
        prompt: "Public internet scanning for A+ practice is:",
        choices: [
          { id: "a", text: "Out of scope — use fictional/authorized/local only" },
          { id: "b", text: "Required for every lab" },
          { id: "c", text: "How DHCP reservations work" },
        ],
        correctChoiceId: "a",
        explanation: "Authorization boundary across the domain." + reviewHint("AP1201-2.8"),
        objectiveId: "AP1201-2.8",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-networking-domain-review-f1",
        front: "Networking path order?",
        back: "Ports → Services → Wireless → Types → Config → Devices → SOHO → Tools → Review",
      },
      {
        id: "ap-networking-domain-review-f2",
        front: "Missed objective — what next?",
        back: "Return to the mapped topic for that AP1201-2.x ID",
      },
      {
        id: "ap-networking-domain-review-f3",
        front: "APIPA means?",
        back: "169.254.x.x — DHCP failed",
      },
      {
        id: "ap-networking-domain-review-f4",
        front: "Consumer gateway combines?",
        back: "Router+switch+AP+firewall+DHCP/NAT (often)",
      },
      {
        id: "ap-networking-domain-review-f5",
        front: "SOHO first harden?",
        back: "Change default admin credentials",
      },
      {
        id: "ap-networking-domain-review-f6",
        front: "Tool habit?",
        back: "Question → least-invasive tool → interpret → next/escalate",
      },
    ],
    assignments: [
      {
        id: "ap-lab-networking-weak-area",
        title: "Networking weak-area routing plan",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `Take the Networking Domain Review quiz. For every miss:
1) Note the question's objectiveId (AP1201-2.x).
2) Look up the mapped topic from the lesson list.
3) Re-do that topic's guided example or lab.
4) Retake items for that objective (quiz or bank).

Write a three-line plan for your weakest objective. Stay within fictional/authorized practice — no public scanning.`,
        estimatedMinutes: 25,
        completionCriteria: [
          "List each missed objectiveId with its topic id",
          "Complete one remediation activity per miss",
          "Record a retake score or self-check result",
        ],
        relatedTopicIds: [
          "ap-ports-protocols",
          "ap-network-services",
          "ap-wireless-tech",
          "ap-network-types",
          "ap-network-config",
          "ap-network-devices",
          "ap-soho-networks",
          "ap-network-tools",
          "ap-networking-domain-review",
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
