import type { ExternalResource, Topic } from "../../types";

/**
 * A+ Core 1 Networking — A2b (Michael 2026-08-01).
 * wireless (2.2) → network-types (2.7) → network-config (2.4).
 * Stop before devices / SOHO / tools / domain review (A2c).
 */

const WINDOWS_11_PC_RESOURCE: ExternalResource = {
  id: "windows-11-pc",
  name: "Windows 11 PC",
  url: "https://support.microsoft.com/windows",
  cost: "free",
  platform: "windows",
  installNotes:
    "Use a Windows 11 PC you may practice on. Wireless labs are read-only observation or fictional worksheets — no unauthorized wireless testing, packet capture, or deauth attacks.",
};

export const apCore1NetworkingBatch2Topics: Topic[] = [
  {
    id: "ap-wireless-tech",
    name: "Wireless Technologies",
    prerequisites: ["ap-network-services"],
    objectives: ["AP1201-2.2"],
    lesson: {
      title: "Wireless Technologies for Support Technicians",
      content: `Wireless links replace (or complement) cables with radio. On A+, you compare Wi-Fi bands and generations, choose sensible security, recognize Bluetooth/NFC/RFID/cellular roles, and separate “bad signal” from “wrong password” from “client too old for the AP.”

**CF refreshers:** \`cf-ethernet-vs-wifi\`, \`cf-home-network-devices\` — literacy only; this topic adds technician tradeoffs and security modes.

**What it is.** Wi-Fi (WLAN) uses access points (APs) and client adapters on regulated bands. Other radios — Bluetooth, NFC, RFID, cellular — solve shorter-range or wide-area jobs.

**Wi-Fi generations (practical differences).** Marketing names (Wi-Fi 4/5/6/6E/7) map to 802.11 families. Newer generations generally improve efficiency and throughput when **both** client and AP support them. An old laptop on a Wi-Fi 6 AP still negotiates what both ends share.

**Bands — 2.4 / 5 / 6 GHz.**
- **2.4 GHz** — better range and wall penetration; fewer non-overlapping channels; more congestion (microwaves, Bluetooth neighbors).
- **5 GHz** — more channels, typically higher throughput, shorter effective range through obstacles.
- **6 GHz** (Wi-Fi 6E/7 capable gear) — cleaner spectrum where available; requires supporting clients and APs; regulatory rules vary by region.

**Channels and overlap.** In 2.4 GHz, overlapping channels cause interference — prefer well-spaced channels (commonly 1, 6, 11 in many regions). 5/6 GHz offer more channel choices; wide channels boost speed but can increase interference sensitivity.

**SSID.** The network name clients see. Hiding an SSID is not strong security. Guest SSIDs often isolate visitors from LAN resources.

**Encryption and authentication.**
- Prefer **WPA3** when clients support it; **WPA2** remains common.
- **Personal (PSK)** — shared passphrase for homes/small offices.
- **Enterprise** — individual credentials via 802.1X/RADIUS (intro level: per-user auth, not one password on a sticky note).
- Legacy WEP/open “no password” are insecure — know them as wrong defaults, not recommendations.
- Authentication failure (wrong PSK / expired cert) differs from radio failure (weak RSSI, wrong band, interference).

**Other wireless technologies.**
- **Bluetooth** — PAN for headsets, keyboards, nearby peripherals.
- **NFC** — centimeter-scale taps (payments, pairing).
- **RFID** — tags/badges/inventory; reader infrastructure differs from Wi-Fi.
- **Cellular** — WWAN data (LTE/5G); phone hotspots/tethering share that path.
- **Hotspot/tethering** — convenient; watch metered data, battery, and security of the shared SSID.

**Symptoms and first checks.**
- Connected with full bars but slow apps → may be upstream internet or congestion, not “dead Wi-Fi.”
- Can’t see SSID → band mismatch, SSID hidden, AP down, or client radio off.
- Asks for password repeatedly → PSK/enterprise auth, not always signal.
- Works near AP, fails in back office → range/obstacles/channel plan.

**Safety / ethics.** Observe your own or authorized networks. No deauth, no cracking, no captive-portal abuse, no unauthorized surveys of neighbors.

**What's next.** Network types (LAN/WAN/VPN/…) — where wireless WLANs fit in the bigger picture.`,
    },
    lightbulbMoment:
      "Bars measure radio hope — band, channel, security, and client capability decide whether the link is actually usable.",
    keyFacts: [
      "2.4 GHz: longer range, more congestion; 5/6 GHz: more speed/channels, shorter through walls",
      "Client and AP must both support a Wi-Fi generation/band to use it",
      "Prefer WPA3 when possible; WPA2 Personal vs Enterprise (PSK vs 802.1X)",
      "2.4 GHz channel overlap matters — plan non-overlapping channels",
      "Bluetooth/NFC/RFID/cellular solve different ranges and jobs than Wi-Fi",
      "Hotspots are convenient and often metered — treat security seriously",
    ],
    guidedExample: {
      title: "Fictional office wireless choices",
      steps: [
        "Scene: open office, many neighbors on 2.4 GHz, laptops support Wi-Fi 6, some IoT only on 2.4.",
        "Band strategy: primary staff SSID on 5 GHz (or 6 GHz if all staff clients allow); keep a separate 2.4 SSID for IoT only.",
        "Security: WPA3-Transition or WPA2/WPA3 mixed for staff if older devices exist; never open/WEP.",
        "Channels: avoid stacking every AP on the same 2.4 channel; use non-overlapping plan.",
        "Symptom: tablet associates but ERP times out — check whether it is on congested 2.4 guest path vs staff VLAN/SSID.",
      ],
    },
    commonMistakes: [
      "Blaming 'the internet' when the client is on a congested 2.4 GHz SSID three walls away",
      "Using one shared PSK on a whiteboard for a whole company (Enterprise exists for a reason)",
      "Assuming hiding the SSID secures the network",
      "Forcing 6 GHz-only when half the laptops lack 6 GHz radios",
      "Running unauthorized wireless 'tests' against neighbor networks",
    ],
    examTraps: [
      "2.4 vs 5 vs 6 GHz tradeoffs",
      "WPA2/WPA3 Personal vs Enterprise",
      "Channel overlap on 2.4 GHz",
      "Bluetooth/NFC/RFID vs Wi-Fi roles",
      "Hotspot/tethering characteristics",
    ],
    realWorldScenario:
      "A designer says Wi-Fi is 'broken' with full bars. Their laptop is on the IoT 2.4 SSID after a reconnect. Moving them to the 5 GHz staff SSID restores cloud sync — signal strength was never the issue; SSID/band choice was.",
    whenThisFails: [
      "If many clients fail after an AP change, compare security mode (WPA3-only vs mixed) before reimaging laptops",
      "If only one device fails, compare its supported bands/generations with a working peer",
      "If you lack authorization to change AP channels, escalate to the network owner with observed evidence",
    ],
    teacherReflectionPrompt:
      "Explain when you would choose 5 GHz over 2.4 GHz for staff laptops, and how Personal vs Enterprise Wi-Fi auth differs.",
    quiz: [
      {
        id: "ap-wireless-tech-q1",
        prompt: "Compared with 5 GHz, 2.4 GHz Wi-Fi typically offers:",
        choices: [
          { id: "a", text: "Better range through obstacles but more congestion and fewer clean channels" },
          { id: "b", text: "Always higher throughput and zero interference" },
          { id: "c", text: "No SSIDs" },
          { id: "d", text: "Only Bluetooth pairing" },
        ],
        correctChoiceId: "a",
        explanation:
          "2.4 GHz penetrates better but is crowded; 5 GHz trades range for capacity.",
        objectiveId: "AP1201-2.2",
        difficulty: "easy",
      },
      {
        id: "ap-wireless-tech-q2",
        prompt: "WPA3 Enterprise differs from WPA2/WPA3 Personal mainly because:",
        choices: [
          { id: "a", text: "Enterprise uses per-user 802.1X credentials; Personal uses a shared PSK" },
          { id: "b", text: "Enterprise removes all encryption" },
          { id: "c", text: "Personal requires a RADIUS server always" },
          { id: "d", text: "Enterprise only works on Bluetooth" },
        ],
        correctChoiceId: "a",
        explanation:
          "Personal = shared passphrase; Enterprise = individual authentication via 802.1X/RADIUS.",
        objectiveId: "AP1201-2.2",
        difficulty: "medium",
      },
      {
        id: "ap-wireless-tech-q3",
        prompt: "A laptop cannot join a 6 GHz-only SSID. What should you check first?",
        choices: [
          { id: "a", text: "Whether the client radio supports 6 GHz / Wi-Fi 6E" },
          { id: "b", text: "Whether the PSU is modular" },
          { id: "c", text: "Whether toner is low" },
          { id: "d", text: "Whether Cat6a jacket color matches" },
        ],
        correctChoiceId: "a",
        explanation:
          "Band capability must exist on both AP and client.",
        objectiveId: "AP1201-2.2",
        difficulty: "medium",
      },
      {
        id: "ap-wireless-tech-q4",
        prompt: "NFC is best described as:",
        choices: [
          { id: "a", text: "Very short-range tap communication (cm scale)" },
          { id: "b", text: "A WAN replacement for fiber" },
          { id: "c", text: "A Wi-Fi 2.4 GHz channel plan" },
          { id: "d", text: "A type of subnet mask" },
        ],
        correctChoiceId: "a",
        explanation: "NFC is for near-field taps, not building-wide Wi-Fi.",
        objectiveId: "AP1201-2.2",
        difficulty: "easy",
      },
      {
        id: "ap-wireless-tech-q5",
        prompt: "Full Wi-Fi bars but unreachable websites may indicate:",
        choices: [
          { id: "a", text: "Upstream internet, DNS, or captive-portal issues — not necessarily radio failure" },
          { id: "b", text: "That TCP no longer exists" },
          { id: "c", text: "That WPA3 forbids HTTPS" },
          { id: "d", text: "That Bluetooth replaced DNS" },
        ],
        correctChoiceId: "a",
        explanation:
          "Association success ≠ application path success.",
        objectiveId: "AP1201-2.2",
        difficulty: "medium",
      },
    ],
    questionBank: [
      {
        id: "ap-wireless-tech-b1",
        prompt: "Non-overlapping 2.4 GHz channels commonly referenced in many regions include:",
        choices: [
          { id: "a", text: "1, 6, and 11" },
          { id: "b", text: "2, 3, and 4 only" },
          { id: "c", text: "Ports 80, 443, and 22" },
        ],
        correctChoiceId: "a",
        explanation: "Adjacent 2.4 channels overlap; 1/6/11 is a classic spacing pattern.",
        objectiveId: "AP1201-2.2",
        difficulty: "medium",
      },
      {
        id: "ap-wireless-tech-b2",
        prompt: "Bluetooth typically serves:",
        choices: [
          { id: "a", text: "Short-range personal device links (PAN)" },
          { id: "b", text: "Continental WAN backbone" },
          { id: "c", text: "SAN block storage fabrics only" },
        ],
        correctChoiceId: "a",
        explanation: "Bluetooth is a personal-area technology.",
        objectiveId: "AP1201-2.2",
        difficulty: "easy",
      },
      {
        id: "ap-wireless-tech-b3",
        prompt: "RFID is commonly used for:",
        choices: [
          { id: "a", text: "Tags, badges, and inventory tracking" },
          { id: "b", text: "Replacing DHCP on servers" },
          { id: "c", text: "Fusing toner" },
        ],
        correctChoiceId: "a",
        explanation: "RFID systems read tags; they are not Wi-Fi LAN replacements.",
        objectiveId: "AP1201-2.2",
        difficulty: "easy",
      },
      {
        id: "ap-wireless-tech-b4",
        prompt: "A phone hotspot primarily shares:",
        choices: [
          { id: "a", text: "The phone's cellular data path with nearby clients" },
          { id: "b", text: "The building's fiber demarc automatically" },
          { id: "c", text: "Unbounded free international backhaul" },
        ],
        correctChoiceId: "a",
        explanation: "Tethering/hotspot uses the cellular WAN and is often metered.",
        objectiveId: "AP1201-2.2",
        difficulty: "easy",
      },
      {
        id: "ap-wireless-tech-b5",
        prompt: "WEP as a modern Wi-Fi security choice:",
        choices: [
          { id: "a", text: "Insecure legacy — do not recommend" },
          { id: "b", text: "Stronger than WPA3 Enterprise" },
          { id: "c", text: "Required for 6 GHz" },
        ],
        correctChoiceId: "a",
        explanation: "WEP is obsolete; prefer WPA2/WPA3.",
        objectiveId: "AP1201-2.2",
        difficulty: "easy",
      },
      {
        id: "ap-wireless-tech-b6",
        prompt: "SSID is:",
        choices: [
          { id: "a", text: "The wireless network name clients browse/join" },
          { id: "b", text: "The default gateway MAC exclusively" },
          { id: "c", text: "A subnet mask format" },
        ],
        correctChoiceId: "a",
        explanation: "SSID identifies the WLAN name.",
        objectiveId: "AP1201-2.2",
        difficulty: "easy",
      },
      {
        id: "ap-wireless-tech-b7",
        prompt: "Unauthorized deauthentication testing of neighbor Wi-Fi is:",
        choices: [
          { id: "a", text: "Out of scope and unsafe/unethical for this curriculum" },
          { id: "b", text: "Required for A+ labs" },
          { id: "c", text: "The same as reading ipconfig" },
        ],
        correctChoiceId: "a",
        explanation: "No offensive wireless techniques in A+ labs.",
        objectiveId: "AP1201-2.2",
        difficulty: "easy",
      },
      {
        id: "ap-wireless-tech-b8",
        prompt: "Which comparison best isolates a wireless-only client problem?",
        choices: [
          { id: "a", text: "Test the same client/service over approved Ethernet and Wi-Fi, then compare link, addressing, and policy" },
          { id: "b", text: "Replace the printer cartridge" },
          { id: "c", text: "Assume all network services are down" },
        ],
        correctChoiceId: "a",
        explanation: "A controlled wired-versus-wireless comparison narrows radio, authentication, and wireless-policy causes.",
        objectiveId: "AP1201-2.2",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-wireless-tech-f1",
        front: "2.4 vs 5 GHz in one line?",
        back: "2.4: range/congestion · 5: speed/channels, shorter through walls",
      },
      {
        id: "ap-wireless-tech-f2",
        front: "WPA2/WPA3 Personal vs Enterprise?",
        back: "Personal = shared PSK · Enterprise = per-user 802.1X",
      },
      {
        id: "ap-wireless-tech-f3",
        front: "6 GHz join failure first check?",
        back: "Does the client support 6 GHz / Wi-Fi 6E?",
      },
      {
        id: "ap-wireless-tech-f4",
        front: "Bluetooth vs Wi-Fi?",
        back: "Bluetooth = short PAN peripherals · Wi-Fi = LAN access",
      },
      {
        id: "ap-wireless-tech-f5",
        front: "Full bars but no websites?",
        back: "Check DNS/captive portal/upstream — not only radio",
      },
      {
        id: "ap-wireless-tech-f6",
        front: "Hotspot caution?",
        back: "Metered cellular data + weak default SSIDs/passwords",
      },
    ],
    assignments: [
      {
        id: "ap-lab-wireless-worksheet",
        title: "Wireless environment worksheet (safe)",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `Part A — Fictional floor plan (no live attacking):
Staff area needs high throughput; warehouse IoT sensors are 2.4-only; lobby needs guest internet only.
Write: (1) SSID/band plan, (2) security mode for staff vs guest, (3) one channel caution for 2.4, (4) first check if a staff laptop shows bars but cannot reach file shares.

Part B — Read-only on your practice Windows 11 PC (Settings > Network & internet > Wi-Fi > hardware properties / status as available):
Record SSID (if connected), protocol/band if shown, IPv4, and whether the connection is metered. Do not scan neighbors or attempt to join networks you do not own.`,
        estimatedMinutes: 15,
        completionCriteria: [
          "Complete fictional SSID/band/security plan",
          "List one first troubleshooting check for bars-but-no-app",
          "Record read-only details from your own Wi-Fi status (or note if Ethernet-only)",
        ],
        relatedTopicIds: ["ap-wireless-tech"],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 40,
    difficulty: "medium",
  },

  {
    id: "ap-network-types",
    name: "Network Types & Connections",
    prerequisites: ["ap-wireless-tech"],
    objectives: ["AP1201-2.7"],
    lesson: {
      title: "Network Types, Scope, and Internet Links",
      content: `Technicians classify networks by **purpose, ownership, and scale** before ordering gear. This topic covers LAN-to-WAN vocabulary, logical constructs (VLAN/VPN), and a concise map of how sites reach the internet — at A+ depth, not CCNA redesign.

**CF refreshers:** \`cf-what-is-a-network\`, \`cf-home-network-devices\` — expand into support classifications.

**Local and personal.**
- **LAN** — site-local network (office floor, home).
- **WLAN** — LAN over Wi-Fi.
- **PAN** — personal area (Bluetooth headset to phone).
- **MAN** — metro-scale (city/campus interconnect) where the objective requires recognition.

**Wide and specialized.**
- **WAN** — links sites across distance (branch to HQ, home to cloud via ISP).
- **SAN** — storage network optimized for block/file storage traffic (recognize: storage-focused, not your guest Wi-Fi).
- **Internet** — global public internetwork.
- **Intranet** — private IP services for the organization.
- **Extranet** — controlled partner access into organizational resources.

**Logical overlays.**
- **VLAN** (intro) — logical separation of devices on shared switching gear (guest vs staff). Deep trunking/STP stays with networking certs / later troubleshooting — here you only need “logical LAN segments.”
- **VPN** — encrypted tunnel across an untrusted network (remote employee → corp).

**Models.**
- **Client-server** — clients request; servers provide (file, mail, web).
- **Peer-to-peer** — peers share roles (small ad-hoc shares); weaker central control.

**Public vs private.** Public internet paths vs private addressed/internal networks. Guest Wi-Fi is often internet-only by design.

**IoT networks.** Sensors/cameras may sit on isolated SSIDs/VLANs — limit blast radius when compromised.

**Internet connection types (recognition, not ISP engineering).** Cable, DSL, fiber, satellite, cellular, and fixed wireless differ in typical speed, latency, and outage modes (rain fade on satellite, congestion on shared cable segments, etc.). Match the story to the link type without designing last-mile networks.

**Scenario habit.** Ask: Who owns it? How far does it reach? Wired or wireless? Public or private? Overlay (VPN/VLAN)? Then pick the support risks.

**What's next.** Client IP configuration — gateway, DNS, DHCP vs static — so devices can actually use these networks.`,
    },
    lightbulbMoment:
      "Name the network by job and reach — LAN/WLAN for the site, WAN/Internet to leave it, VPN/VLAN when the boundaries are logical.",
    keyFacts: [
      "LAN/WLAN = local site · WAN = across distance · PAN = personal short range",
      "Internet = public · Intranet = internal · Extranet = partner access",
      "VPN tunnels across untrusted networks; VLAN logically segments a LAN",
      "SAN focuses on storage traffic — not a synonym for Wi-Fi",
      "Client-server vs peer-to-peer describes roles, not cable color",
      "Internet links (cable/DSL/fiber/satellite/cellular) differ in latency and failure modes",
    ],
    guidedExample: {
      title: "Classify five organizations",
      steps: [
        "Home office: LAN/WLAN + ISP WAN/Internet; maybe personal hotspot backup (cellular).",
        "Small retail: LAN + guest WLAN (isolated) + card terminals; ISP cable/fiber WAN.",
        "Corporate branch: LAN/VLANs + WAN/VPN to HQ; intranet apps.",
        "Remote employee: home LAN + VPN to corp intranet over Internet.",
        "Partner portal: extranet — suppliers authenticate to limited resources without full intranet rights.",
      ],
    },
    commonMistakes: [
      "Calling every wireless network a WAN",
      "Treating VLAN knowledge as full CCNA switching design at help desk level",
      "Assuming guest Wi-Fi should reach file servers",
      "Confusing SAN with 'the server room Wi-Fi'",
      "Thinking VPN replaces antivirus",
    ],
    examTraps: [
      "LAN vs WAN vs PAN identification",
      "Intranet vs extranet vs internet",
      "VPN purpose",
      "VLAN as logical separation (intro)",
      "Internet connection type characteristics (latency/availability stories)",
    ],
    realWorldScenario:
      "A contractor on guest Wi-Fi cannot reach \\\\files01 but can browse the web. You explain guest WLAN isolation — internet yes, intranet/LAN shares no — and provision VPN or a contractor VLAN per policy instead of 'fixing Wi-Fi.'",
    whenThisFails: [
      "If a remote user needs intranet apps, verify VPN before rebuilding their home router",
      "If SAN alerts appear, escalate to storage admins — do not apply generic Wi-Fi fixes",
      "If partner access is required, use approved extranet patterns — not shared staff passwords",
    ],
    teacherReflectionPrompt:
      "Define LAN, WAN, VPN, intranet, and extranet with one real-world example each.",
    quiz: [
      {
        id: "ap-network-types-q1",
        prompt: "A Bluetooth keyboard talking to a laptop is best classified as:",
        choices: [
          { id: "a", text: "PAN" },
          { id: "b", text: "WAN" },
          { id: "c", text: "SAN" },
          { id: "d", text: "MAN backbone" },
        ],
        correctChoiceId: "a",
        explanation: "Personal-area, short-range device links are PANs.",
        objectiveId: "AP1201-2.7",
        difficulty: "easy",
      },
      {
        id: "ap-network-types-q2",
        prompt: "A VPN primarily provides:",
        choices: [
          { id: "a", text: "An encrypted tunnel across an untrusted network (often the internet)" },
          { id: "b", text: "A replacement for all DNS forever" },
          { id: "c", text: "Toner management" },
          { id: "d", text: "A 2.4 GHz-only radio standard" },
        ],
        correctChoiceId: "a",
        explanation: "VPNs protect traffic across untrusted paths.",
        objectiveId: "AP1201-2.7",
        difficulty: "easy",
      },
      {
        id: "ap-network-types-q3",
        prompt: "An extranet is best described as:",
        choices: [
          { id: "a", text: "Controlled external-partner access to selected organizational resources" },
          { id: "b", text: "The entire public internet with no controls" },
          { id: "c", text: "Only Bluetooth pairing mode" },
          { id: "d", text: "A PSU efficiency rating" },
        ],
        correctChoiceId: "a",
        explanation: "Extranets grant limited partner access; intranets stay internal.",
        objectiveId: "AP1201-2.7",
        difficulty: "medium",
      },
      {
        id: "ap-network-types-q4",
        prompt: "At A+ intro level, a VLAN is used to:",
        choices: [
          { id: "a", text: "Logically separate groups of devices on a LAN infrastructure" },
          { id: "b", text: "Replace the need for IP addresses" },
          { id: "c", text: "Heat the fuser roller" },
          { id: "d", text: "Store ECC RAM settings" },
        ],
        correctChoiceId: "a",
        explanation: "VLANs segment logically; deep switching design is out of scope here.",
        objectiveId: "AP1201-2.7",
        difficulty: "medium",
      },
      {
        id: "ap-network-types-q5",
        prompt: "Satellite internet links are often characterized by:",
        choices: [
          { id: "a", text: "Higher latency than typical fiber; weather can affect some systems" },
          { id: "b", text: "Zero latency always" },
          { id: "c", text: "Being identical to a PAN" },
          { id: "d", text: "Using only port 23 Telnet" },
        ],
        correctChoiceId: "a",
        explanation: "Recognize connection-type tradeoffs without ISP engineering depth.",
        objectiveId: "AP1201-2.7",
        difficulty: "medium",
      },
    ],
    questionBank: [
      {
        id: "ap-network-types-b1",
        prompt: "Office floor Ethernet + Wi-Fi is typically a:",
        choices: [
          { id: "a", text: "LAN / WLAN" },
          { id: "b", text: "SAN only" },
          { id: "c", text: "PAN only" },
        ],
        correctChoiceId: "a",
        explanation: "Site-local networks are LANs; Wi-Fi makes them WLANs.",
        objectiveId: "AP1201-2.7",
        difficulty: "easy",
      },
      {
        id: "ap-network-types-b2",
        prompt: "Connecting two city offices across a carrier link is a:",
        choices: [
          { id: "a", text: "WAN scenario" },
          { id: "b", text: "PAN scenario" },
          { id: "c", text: "Toner scenario" },
        ],
        correctChoiceId: "a",
        explanation: "WANs span geographic distance between sites.",
        objectiveId: "AP1201-2.7",
        difficulty: "easy",
      },
      {
        id: "ap-network-types-b3",
        prompt: "Intranet means:",
        choices: [
          { id: "a", text: "Private organizational network services" },
          { id: "b", text: "Unfiltered public internet for everyone" },
          { id: "c", text: "Only RFID badges" },
        ],
        correctChoiceId: "a",
        explanation: "Intranets host internal apps and resources.",
        objectiveId: "AP1201-2.7",
        difficulty: "easy",
      },
      {
        id: "ap-network-types-b4",
        prompt: "SAN is associated with:",
        choices: [
          { id: "a", text: "Storage networking" },
          { id: "b", text: "Guest coffee Wi-Fi exclusively" },
          { id: "c", text: "Bluetooth keyboards exclusively" },
        ],
        correctChoiceId: "a",
        explanation: "SANs serve storage traffic.",
        objectiveId: "AP1201-2.7",
        difficulty: "easy",
      },
      {
        id: "ap-network-types-b5",
        prompt: "Client-server means:",
        choices: [
          { id: "a", text: "Clients request services; servers provide them" },
          { id: "b", text: "Every device is only a server" },
          { id: "c", text: "No IP addresses are used" },
        ],
        correctChoiceId: "a",
        explanation: "Role split between requesters and providers.",
        objectiveId: "AP1201-2.7",
        difficulty: "easy",
      },
      {
        id: "ap-network-types-b6",
        prompt: "Fiber internet to a small office is an example of:",
        choices: [
          { id: "a", text: "An internet/WAN access link type" },
          { id: "b", text: "A PAN" },
          { id: "c", text: "A laser printer stage" },
        ],
        correctChoiceId: "a",
        explanation: "Fiber is a common high-capacity internet access technology.",
        objectiveId: "AP1201-2.7",
        difficulty: "easy",
      },
      {
        id: "ap-network-types-b7",
        prompt: "Isolating IoT cameras on their own SSID/VLAN mainly improves:",
        choices: [
          { id: "a", text: "Blast-radius / exposure control if devices are compromised" },
          { id: "b", text: "CPU socket compatibility" },
          { id: "c", text: "Toner adhesion" },
        ],
        correctChoiceId: "a",
        explanation: "Segmentation limits lateral movement and noise.",
        objectiveId: "AP1201-2.7",
        difficulty: "medium",
      },
      {
        id: "ap-network-types-b8",
        prompt: "A network limited to one home or small office is commonly classified as a:",
        choices: [
          { id: "a", text: "LAN" },
          { id: "b", text: "WAN spanning many regions" },
          { id: "c", text: "SAN dedicated only to storage traffic" },
        ],
        correctChoiceId: "a",
        explanation: "A local network within a home, office, or site is a LAN.",
        objectiveId: "AP1201-2.7",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-network-types-f1",
        front: "LAN vs WAN?",
        back: "LAN = local site · WAN = across distance/sites",
      },
      {
        id: "ap-network-types-f2",
        front: "Intranet vs extranet?",
        back: "Intranet internal · extranet controlled partner access",
      },
      {
        id: "ap-network-types-f3",
        front: "VPN purpose?",
        back: "Encrypted tunnel across untrusted networks",
      },
      {
        id: "ap-network-types-f4",
        front: "VLAN at A+ intro?",
        back: "Logical LAN segmentation on shared gear",
      },
      {
        id: "ap-network-types-f5",
        front: "PAN example?",
        back: "Bluetooth headset ↔ phone",
      },
      {
        id: "ap-network-types-f6",
        front: "Satellite internet trait?",
        back: "Often higher latency; weather can matter",
      },
    ],
    assignments: [
      {
        id: "ap-lab-network-type-classify",
        title: "Network type classification",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `Classify each scenario (type + ownership/scope + one support risk):

1) Home Wi-Fi for a family laptop.
2) Retail guest SSID that cannot see the POS VLAN.
3) Employee VPN from a hotel.
4) Storage array network used only by hypervisors.
5) Supplier uploads invoices to a partner portal.
6) Branch office linked to HQ over a carrier circuit.
7) Smart watch talking to a phone over Bluetooth.

Write answers as: Classification — Who controls it — Risk/limitation.`,
        estimatedMinutes: 12,
        completionCriteria: [
          "Classify all seven scenarios",
          "Include ownership/scope and one risk each",
        ],
        relatedTopicIds: ["ap-network-types"],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 35,
    difficulty: "medium",
  },

  {
    id: "ap-network-config",
    name: "Client Network Configuration",
    prerequisites: ["ap-network-types"],
    objectives: ["AP1201-2.4"],
    knowledgeNodeId: "dhcp",
    lesson: {
      title: "Client Addressing & Network Settings",
      content: `Before you reconfigure a SOHO router (later), you must read **client** settings: address, mask, gateway, DNS, and whether DHCP or static applied them. This is AP1201-2.4 at help-desk depth — not a subnetting exam track.

**CF refreshers:** \`cf-ip-and-dns-beginner\`, \`cf-connection-troubleshooting-basics\` — reuse; add compare-and-contrast technician habits.

**IPv4 essentials.**
- **IP address** — host identity on the network.
- **Subnet mask** — which addresses are local vs need the gateway.
- **Default gateway** — router hop for off-subnet traffic (internet/other LANs).
- **DNS servers** — who answers name queries.
- **Hostname** — friendly device name (not a substitute for DNS server config).

**DHCP vs static.**
- **DHCP** — automatic lease (address/mask/gateway/DNS options). Default for most clients.
- **Static** — manually set; use for certain printers, infrastructure, or unstable DHCP — document and avoid duplicates.
- Always **screenshot/record settings before changing** them.

**Private vs public.** RFC1918 private ranges (10/8, 172.16/12, 192.168/16) are common on LANs; public addresses route on the internet. Clients usually hold private addresses behind NAT.

**APIPA.** 169.254.x.x means Windows self-assigned when DHCP failed — local link only, no normal gateway/internet.

**MAC vs IP.** MAC is Layer-2 hardware address on a LAN segment; IP is logical Layer-3. Switches care about MAC; routers care about IP.

**IPv6 recognition.** Addresses use hex hextets; clients may be dual-stack. Know how to see whether IPv6 is present in \`ipconfig\`; deep IPv6 design waits for later networking study.

**Other client settings.** Proxy configuration can break apps if wrong. Metered connection flags can pause large updates. Wrong static DNS (typo) yields “IP works, names fail.”

**Interpretation (\`ipconfig\` / \`ipconfig /all\`).**
- DHCP Enabled? Yes/No
- IPv4 Address + Mask
- Default Gateway present?
- DNS Servers listed?
- 169.254? → DHCP problem
- Gateway blank with a “real” IP? → suspicious static/incomplete config

**Compare working vs failing PC.** Same VLAN should show related prefixes and the same gateway/DNS (usually). Differences spotlight the fault.

**What's next (A2c).** Network devices, SOHO setup, tools, and a Networking domain review — not in this batch.`,
    },
    lightbulbMoment:
      "Read the lease before you blame the app — address, gateway, and DNS each fail in different ways.",
    keyFacts: [
      "IP + mask define local vs remote; gateway handles remote; DNS handles names",
      "DHCP automates client config; static must be unique and documented",
      "169.254.x.x (APIPA) signals DHCP failure",
      "Private LAN addresses differ from public internet addresses",
      "MAC ≠ IP — different jobs in the stack",
      "Record settings before you change them",
    ],
    guidedExample: {
      title: "Read ipconfig like a technician",
      steps: [
        "Working PC: 192.168.1.50/24, GW 192.168.1.1, DNS 192.168.1.1, DHCP Yes.",
        "Failing PC A: 169.254.10.20 — no DHCP lease → check cable/SSID, DHCP server, AP isolation.",
        "Failing PC B: 192.168.1.50/24 (same as working!) → duplicate static/conflict.",
        "Failing PC C: 192.168.1.60/24, GW 192.168.1.1, DNS blank/wrong → names fail, ping IP may work.",
        "Failing PC D: 192.168.1.70/24, GW blank → LAN peers might work; internet fails.",
      ],
    },
    commonMistakes: [
      "Setting a static IP without checking for conflicts",
      "Changing DNS before documenting the old values",
      "Assuming APIPA means 'replace the motherboard'",
      "Confusing gateway failure with DNS failure",
      "Editing proxy settings randomly on a working PC",
    ],
    examTraps: [
      "APIPA identification",
      "DHCP vs static symptoms",
      "Gateway vs DNS role split",
      "Private address recognition",
      "MAC vs IP purpose",
    ],
    realWorldScenario:
      "Two accounting PCs: one browses fine; the other only loads sites by IP. ipconfig shows the broken PC has a typo in its static DNS. Correcting DNS to the same servers as the working PC fixes names — no ISP truck roll.",
    whenThisFails: [
      "If many PCs suddenly show APIPA, escalate DHCP infrastructure — do not statically address the whole floor ad hoc",
      "If a static printer works but clients cannot reach it, verify mask/gateway on both sides and for conflicts",
      "If policy forbids local admin changes, gather ipconfig output and escalate",
    ],
    teacherReflectionPrompt:
      "From an ipconfig /all listing, point to DHCP status, IPv4, gateway, DNS, and explain what each being wrong would feel like to a user.",
    quiz: [
      {
        id: "ap-network-config-q1",
        prompt: "A Windows client shows 169.254.25.10. What does that usually indicate?",
        choices: [
          { id: "a", text: "APIPA — DHCP did not provide a lease" },
          { id: "b", text: "A healthy public internet address" },
          { id: "c", text: "Successful WPA3 Enterprise auth only" },
          { id: "d", text: "That DNS is using TCP/443" },
        ],
        correctChoiceId: "a",
        explanation: "APIPA is automatic private addressing when DHCP fails.",
        objectiveId: "AP1201-2.4",
        difficulty: "easy",
      },
      {
        id: "ap-network-config-q2",
        prompt: "Ping by IP works; browsing by name fails. Which setting is the prime suspect?",
        choices: [
          { id: "a", text: "DNS server configuration" },
          { id: "b", text: "Display refresh rate" },
          { id: "c", text: "Toner density" },
          { id: "d", text: "CPU socket type" },
        ],
        correctChoiceId: "a",
        explanation: "Names need DNS; IP success shows basic reachability.",
        objectiveId: "AP1201-2.4",
        difficulty: "easy",
      },
      {
        id: "ap-network-config-q3",
        prompt: "The default gateway is used when:",
        choices: [
          { id: "a", text: "Traffic must leave the local subnet" },
          { id: "b", text: "Two USB devices share a cable" },
          { id: "c", text: "A printer needs toner" },
          { id: "d", text: "Bluetooth pairs a mouse" },
        ],
        correctChoiceId: "a",
        explanation: "Off-subnet packets go to the gateway router.",
        objectiveId: "AP1201-2.4",
        difficulty: "easy",
      },
      {
        id: "ap-network-config-q4",
        prompt: "Two PCs statically set to the same IPv4 address typically cause:",
        choices: [
          { id: "a", text: "Address conflict / intermittent or failed connectivity" },
          { id: "b", text: "Faster dual-channel RAM" },
          { id: "c", text: "Automatic WPA3 Enterprise" },
          { id: "d", text: "A SAN fabric to form" },
        ],
        correctChoiceId: "a",
        explanation: "Duplicate addresses break ARP/connectivity predictability.",
        objectiveId: "AP1201-2.4",
        difficulty: "medium",
      },
      {
        id: "ap-network-config-q5",
        prompt: "A MAC address primarily identifies:",
        choices: [
          { id: "a", text: "A network interface on a local network segment (Layer 2)" },
          { id: "b", text: "The default DNS suffix search list only" },
          { id: "c", text: "The PSU wattage rating" },
          { id: "d", text: "The public ASN of the ISP exclusively" },
        ],
        correctChoiceId: "a",
        explanation: "MAC is the NIC's Layer-2 address; IP is Layer 3.",
        objectiveId: "AP1201-2.4",
        difficulty: "medium",
      },
    ],
    questionBank: [
      {
        id: "ap-network-config-b1",
        prompt: "DHCP's job for clients is to:",
        choices: [
          { id: "a", text: "Automatically assign addressing options (IP/mask/gateway/DNS)" },
          { id: "b", text: "Encrypt Wi-Fi with WEP" },
          { id: "c", text: "Replace the need for NICs" },
        ],
        correctChoiceId: "a",
        explanation: "DHCP leases common IPv4 configuration.",
        objectiveId: "AP1201-2.4",
        difficulty: "easy",
      },
      {
        id: "ap-network-config-b2",
        prompt: "Before changing a static IP you should:",
        choices: [
          { id: "a", text: "Document/screenshot the existing settings" },
          { id: "b", text: "Erase the SSD" },
          { id: "c", text: "Disable all gateways industry-wide" },
        ],
        correctChoiceId: "a",
        explanation: "Always preserve rollback information.",
        objectiveId: "AP1201-2.4",
        difficulty: "easy",
      },
      {
        id: "ap-network-config-b3",
        prompt: "192.168.1.20 is typically a:",
        choices: [
          { id: "a", text: "Private IPv4 address" },
          { id: "b", text: "Public DNS root exclusively" },
          { id: "c", text: "APIPA address" },
        ],
        correctChoiceId: "a",
        explanation: "192.168.0.0/16 is private addressing space.",
        objectiveId: "AP1201-2.4",
        difficulty: "easy",
      },
      {
        id: "ap-network-config-b4",
        prompt: "LAN OK, internet fails, gateway blank on the client:",
        choices: [
          { id: "a", text: "Suspect missing/incorrect default gateway configuration" },
          { id: "b", text: "Replace the CPU cooler first" },
          { id: "c", text: "Disable DNS globally forever" },
        ],
        correctChoiceId: "a",
        explanation: "No gateway → no off-subnet path.",
        objectiveId: "AP1201-2.4",
        difficulty: "medium",
      },
      {
        id: "ap-network-config-b5",
        prompt: "Metered connection setting mainly affects:",
        choices: [
          { id: "a", text: "Whether the OS delays large downloads/updates on that link" },
          { id: "b", text: "The physical RJ45 pinout" },
          { id: "c", text: "Laser fusing temperature" },
        ],
        correctChoiceId: "a",
        explanation: "Metered flags change update/sync behavior.",
        objectiveId: "AP1201-2.4",
        difficulty: "easy",
      },
      {
        id: "ap-network-config-b6",
        prompt: "Wrong proxy settings can cause:",
        choices: [
          { id: "a", text: "Apps/browsers failing while raw ping still works" },
          { id: "b", text: "DIMM keying to change" },
          { id: "c", text: "RAID 1 to become RAID 0 automatically" },
        ],
        correctChoiceId: "a",
        explanation: "Proxies sit on application paths.",
        objectiveId: "AP1201-2.4",
        difficulty: "medium",
      },
      {
        id: "ap-network-config-b7",
        prompt: "ipconfig /all is useful because it shows:",
        choices: [
          { id: "a", text: "DHCP status, addresses, gateway, DNS, and related details" },
          { id: "b", text: "Only the Windows product key" },
          { id: "c", text: "Toner levels" },
        ],
        correctChoiceId: "a",
        explanation: "Primary read-only client network inventory command on Windows.",
        objectiveId: "AP1201-2.4",
        difficulty: "easy",
      },
      {
        id: "ap-network-config-b8",
        prompt: "What is the default gateway used for on a client?",
        choices: [
          { id: "a", text: "Sending traffic to destinations outside the local IP network" },
          { id: "b", text: "Translating every hostname by itself" },
          { id: "c", text: "Providing display resolution" },
        ],
        correctChoiceId: "a",
        explanation: "The default gateway is the next hop for nonlocal IP destinations.",
        objectiveId: "AP1201-2.4",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-network-config-f1",
        front: "Gateway vs DNS?",
        back: "Gateway = off-subnet path · DNS = name resolution",
      },
      {
        id: "ap-network-config-f2",
        front: "APIPA looks like?",
        back: "169.254.x.x — DHCP failed",
      },
      {
        id: "ap-network-config-f3",
        front: "DHCP vs static?",
        back: "DHCP auto-leases · static manual + document + avoid conflicts",
      },
      {
        id: "ap-network-config-f4",
        front: "MAC vs IP?",
        back: "MAC = L2 interface · IP = L3 logical host address",
      },
      {
        id: "ap-network-config-f5",
        front: "IP works, names fail?",
        back: "Check DNS settings first",
      },
      {
        id: "ap-network-config-f6",
        front: "Before editing IP settings?",
        back: "Record/screenshot the current configuration",
      },
    ],
    assignments: [
      {
        id: "ap-lab-config-compare",
        title: "Configuration comparison tickets",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `Working baseline: 10.0.0.20/24, GW 10.0.0.1, DNS 10.0.0.1, DHCP Yes.

For each broken host, name the likely layer (addressing · gateway · DNS · conflict · DHCP/APIPA · application) and next safe check:

B1: 169.254.12.4 — cannot reach anything off-box.
B2: 10.0.0.20/24 (same as baseline), DHCP No — intermittent.
B3: 10.0.0.33/24, GW 10.0.0.1, DNS 1.2.3.4 typo — ping 10.0.0.1 OK; names fail.
B4: 10.0.0.40/24, GW blank — can ping 10.0.0.20; no internet.
B5: Settings match baseline; only one app fails.

Then run \`ipconfig /all\` on your practice PC and label DHCP/IPv4/GW/DNS from the live output (read-only).`,
        estimatedMinutes: 15,
        completionCriteria: [
          "Classify all five broken hosts with next check",
          "Paste or rewrite your live ipconfig /all key fields (IP, mask, GW, DNS, DHCP)",
        ],
        relatedTopicIds: ["ap-network-config", "ap-network-services"],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 40,
    difficulty: "medium",
  },
];
