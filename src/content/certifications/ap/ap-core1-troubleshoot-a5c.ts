import type { ExternalResource, Topic } from "../../types";
import { AP_TROUBLESHOOT_OBJECTIVE_TOPIC } from "./ap-troubleshoot-remediation";

/**
 * A+ Core 1 Hardware & Network Troubleshooting — A5c (Michael 2026-08-01).
 * network (5.5) → printer (5.6) → domain review (5.1–5.6).
 * Stop after Troubleshooting first-pass — Core 1 integration audit next (not Core 2).
 */

const WINDOWS_11_PC_RESOURCE: ExternalResource = {
  id: "windows-11-pc",
  name: "Windows 11 PC",
  url: "https://support.microsoft.com/windows",
  cost: "free",
  platform: "windows",
  installNotes:
    "Fictional tickets and read-only local checks only. No public scanning, unauthorized wireless activity, router resets without documentation, or bypassing security controls. Allow printer fusers to cool; no interlock bypass.",
};

const TS_PROCESS = `**Troubleshooting process (use every ticket).**
1. **Identify** the problem — symptoms, scope, recent changes, safety hazards.
2. **Establish a theory** of probable cause — list layers; pick the most likely *testable* one.
3. **Test the theory** safely — one change at a time; known-good swaps when authorized.
4. **Plan** the fix (or escalate) — parts, data risk, downtime, approval.
5. **Implement** the solution or escalate within authorization.
6. **Verify** full functionality — not only the first symptom gone.
7. **Document** findings, actions, and outcomes.

Reward yourself for the correct **next diagnostic step**, not lucky component guesses.`;

function reviewHint(objectiveId: string): string {
  const topic = AP_TROUBLESHOOT_OBJECTIVE_TOPIC[objectiveId];
  return topic
    ? ` If this was unclear, review topic \`${topic}\`.`
    : "";
}

export const apCore1TroubleshootBatch3Topics: Topic[] = [
  {
    id: "ap-ts-network",
    name: "Troubleshoot Networks",
    prerequisites: ["ap-ts-mobile", "ap-networking-domain-review"],
    objectives: ["AP1201-5.5"],
    knowledgeNodeId: "dhcp",
    lesson: {
      title: "Isolate Network Failures by Scope and Layer",
      content: `Network outages are **scope problems** before they are parts problems. Reuse Networking first-pass (\`ap-network-config\`, \`ap-network-tools\`, \`ap-wireless-tech\`, \`ap-soho-networks\`) — do not relearn ports from scratch here.

${TS_PROCESS}

**CF refreshers:** \`cf-connection-troubleshooting-basics\`, \`cf-ip-and-dns-beginner\`.

**Layers (top → bottom or bottom → top — be consistent).**
1. User / application  
2. Local device configuration  
3. Physical connection  
4. Wireless connection  
5. Address assignment  
6. Local network  
7. Gateway / routing  
8. DNS / network services  
9. ISP / upstream  
10. Security policy / firewall  
11. Remote service  

**Scope-first questions.** One device or many? Wired, wireless, or both? Valid address? Reach self / gateway / internet / named service? Local OK? IP OK but names fail? What changed? One app only? Known outage? Managed device?

**Safe diagnostic sequence.**
1. Confirm symptoms and scope  
2. Physical / wireless status (link light, SSID, airplane mode)  
3. IP configuration (\`ipconfig /all\`)  
4. Gateway reachability (\`ping\` gateway)  
5. Name resolution (\`nslookup\`)  
6. Intended service (\`Test-NetConnection\` to *authorized* target)  
7. Compare known-working peer  
8. Upstream / ISP / status page  
9. Smallest justified fix  
10. Verify + document original settings  

**Ping is not proof** that HTTPS, mail, or a VPN works.

**Symptom → early theories.**
| Pattern | Lean toward |
|---------|-------------|
| One PC APIPA; peers OK | That client’s link/DHCP path — not ISP first |
| IP works; names fail | DNS |
| LAN shares OK; no internet | Gateway/ISP/WAN |
| Strong Wi-Fi, slow apps | Congestion/upstream/app — not only “bad NIC” |
| One remote app fails; browsing OK | Port/VPN/firewall/app/service |
| Many devices lose internet | Shared path: AP/router/ISP |
| PoE AP dark | Power path (injector/switch/cable) |
| Captive portal | Auth page before “internet” |

**Evidence / tools (authorized).** Link lights, cable tester, Wi-Fi status, \`ipconfig /all\`, \`Get-NetIPConfiguration\`, \`ping\`, \`tracert\`/\`pathping\`, \`nslookup\`, \`Test-NetConnection\`, \`netstat\`, \`arp\`, fictional AP/router/DHCP/DNS screenshots, ISP outage notes.

**Mistakes to refuse.** Reboot everything before evidence; hide DHCP failure with random static IPs; roulette DNS; undocumented router reset; signal bars = internet; ping fail = host dead forever; blame ISP before scope; ignore VPN/proxy/portal; change five layers at once; skip documenting originals.

**Safety / ethics.** Local, fictional, read-only, or authorized only. No public scans, deauth, or control bypass.

**What's next.** Printer troubleshooting — queue vs mechanism.`,
    },
    lightbulbMoment:
      "Ask how many devices fail before you change an IP — scope picks the layer faster than a cable swap.",
    keyFacts: [
      "Scope first: one vs many, wired vs wireless, LAN vs internet, IP vs name",
      "APIPA on one host → that client’s DHCP/link path before ISP truck rolls",
      "IP OK + names fail → DNS; LAN OK + no internet → gateway/ISP",
      "Ping ≠ application health; bars ≠ upstream",
      "Document settings before changing DHCP/DNS/static/router config",
      "No public scanning or unauthorized wireless testing",
    ],
    guidedExample: {
      title: "Five network tickets (compressed)",
      steps: [
        "APIPA alone → check link/SSID, then DHCP; compare peer lease; avoid random static.",
        "Browse fails; ping 8.8.8.8 works → nslookup / DNS fields.",
        "All lose internet; \\\\fileserver still works → gateway/WAN/ISP, not every NIC.",
        "Wi-Fi full bars, slow Zoom → congestion/band/upstream; try Ethernet compare.",
        "Web OK; remote RDP fails → Test-NetConnection authorized host:port; VPN/firewall/service.",
      ],
    },
    commonMistakes: [
      "Assigning a static IP to mask a DHCP outage without documenting conflict risk",
      "Resetting the SOHO router before noting WAN/LAN settings",
      "Blaming ISP when only one laptop is on the wrong guest SSID",
      "Treating ping success as proof Outlook works",
      "Scanning the public internet ‘for practice’",
    ],
    examTraps: [
      "Best next check given scope",
      "APIPA / gateway / DNS isolation",
      "One vs many devices",
      "What ping does and does not prove",
      "Authorization / least-invasive tool choice",
    ],
    realWorldScenario:
      "Floor 2 ‘internet is down.’ PCs still open the intranet share. The modem/ONT lost sync after a storm. Scope (many devices, LAN OK) pointed at WAN/ISP in minutes — no mass NIC reinstalls.",
    whenThisFails: [
      "If many clients show APIPA, escalate DHCP infrastructure — don’t statically address the floor ad hoc",
      "If policy locks IP settings, gather ipconfig evidence and escalate",
      "If VPN is required for the app, verify VPN before redesigning DNS",
    ],
    teacherReflectionPrompt:
      "Write the scope questions you ask in the first two minutes of a ‘no internet’ ticket, and map two answers to different layers.",
    quiz: [
      {
        id: "ap-ts-network-q1",
        prompt: "One PC shows 169.254.x.x; peers have DHCP leases. Best early focus?",
        choices: [
          { id: "a", text: "That client’s link/SSID/DHCP path — not a building-wide ISP outage first" },
          { id: "b", text: "Replace every switch uplink immediately" },
          { id: "c", text: "Format the SSD" },
          { id: "d", text: "Disable DNS worldwide" },
        ],
        correctChoiceId: "a",
        explanation: "Single-host APIPA is a local DHCP/link scope clue.",
        objectiveId: "AP1201-5.5",
        difficulty: "easy",
      },
      {
        id: "ap-ts-network-q2",
        prompt: "Ping to a public IP works; websites by name fail. Best next check?",
        choices: [
          { id: "a", text: "DNS configuration / nslookup" },
          { id: "b", text: "Replace the PSU" },
          { id: "c", text: "Punch-down every jack" },
          { id: "d", text: "Factory-reset the phone" },
        ],
        correctChoiceId: "a",
        explanation: "Names need DNS when IP reachability already works.",
        objectiveId: "AP1201-5.5",
        difficulty: "easy",
      },
      {
        id: "ap-ts-network-q3",
        prompt: "All devices lose internet; LAN file shares still work. Likely shared layer?",
        choices: [
          { id: "a", text: "Gateway / WAN / ISP path" },
          { id: "b", text: "Every workstation digitizer" },
          { id: "c", text: "CMOS batteries fleet-wide" },
          { id: "d", text: "Toner density" },
        ],
        correctChoiceId: "a",
        explanation: "LAN OK + internet fail points upstream of the LAN.",
        objectiveId: "AP1201-5.5",
        difficulty: "medium",
      },
      {
        id: "ap-ts-network-q4",
        prompt: "Successful ping to a server proves:",
        choices: [
          { id: "a", text: "Basic reachability — not that the application/port is healthy" },
          { id: "b", text: "HTTPS certificates are valid" },
          { id: "c", text: "DHCP scopes are perfect forever" },
          { id: "d", text: "The printer fuser is warm" },
        ],
        correctChoiceId: "a",
        explanation: "Ping is limited evidence.",
        objectiveId: "AP1201-5.5",
        difficulty: "easy",
      },
      {
        id: "ap-ts-network-q5",
        prompt: "Before changing a user’s DNS servers you should:",
        choices: [
          { id: "a", text: "Document the original settings" },
          { id: "b", text: "Scan the public internet" },
          { id: "c", text: "Disable the firewall on all routers" },
          { id: "d", text: "Assign APIPA manually" },
        ],
        correctChoiceId: "a",
        explanation: "Document before change — supports rollback and tickets.",
        objectiveId: "AP1201-5.5",
        difficulty: "easy",
      },
    ],
    questionBank: [
      {
        id: "ap-ts-network-b1",
        prompt: "Connected to Wi-Fi but no internet — early checks include:",
        choices: [
          { id: "a", text: "Gateway, DNS, captive portal, and upstream — not only signal bars" },
          { id: "b", text: "Only the CPU cooler" },
          { id: "c", text: "Only RAID stripe size" },
        ],
        correctChoiceId: "a",
        explanation: "Association ≠ application path.",
        objectiveId: "AP1201-5.5",
        difficulty: "easy",
      },
      {
        id: "ap-ts-network-b2",
        prompt: "Duplicate static IP typically causes:",
        choices: [
          { id: "a", text: "Conflicts / intermittent or failed connectivity" },
          { id: "b", text: "Faster dual-channel RAM" },
          { id: "c", text: "Automatic WPA3 Enterprise" },
        ],
        correctChoiceId: "a",
        explanation: "Address conflicts break predictability.",
        objectiveId: "AP1201-5.5",
        difficulty: "easy",
      },
      {
        id: "ap-ts-network-b3",
        prompt: "PoE access point has no lights; other Ethernet PCs work. Suspect:",
        choices: [
          { id: "a", text: "PoE power path (injector/port/cable) to the AP" },
          { id: "b", text: "DNS root melt exclusively" },
          { id: "c", text: "Missing toner" },
        ],
        correctChoiceId: "a",
        explanation: "Device power vs general LAN failure.",
        objectiveId: "AP1201-5.5",
        difficulty: "medium",
      },
      {
        id: "ap-ts-network-b4",
        prompt: "VPN required app fails; general browsing works. Consider:",
        choices: [
          { id: "a", text: "VPN state, auth, and path to the private service" },
          { id: "b", text: "Replacing the monitor first" },
          { id: "c", text: "Disabling all DHCP forever" },
        ],
        correctChoiceId: "a",
        explanation: "App-specific remote path.",
        objectiveId: "AP1201-5.5",
        difficulty: "medium",
      },
      {
        id: "ap-ts-network-b5",
        prompt: "Cable tester fails on one drop; other jacks fine. Framing?",
        choices: [
          { id: "a", text: "Physical cabling path for that drop — not ISP modem swap first" },
          { id: "b", text: "Replace all DNS servers" },
          { id: "c", text: "Factory-reset every laptop" },
        ],
        correctChoiceId: "a",
        explanation: "Scope + physical evidence.",
        objectiveId: "AP1201-5.5",
        difficulty: "easy",
      },
      {
        id: "ap-ts-network-b6",
        prompt: "Public network scanning for practice is:",
        choices: [
          { id: "a", text: "Out of scope / unauthorized" },
          { id: "b", text: "Required for every 5.5 lab" },
          { id: "c", text: "How you fix APIPA" },
        ],
        correctChoiceId: "a",
        explanation: "Stay local/fictional/authorized.",
        objectiveId: "AP1201-5.5",
        difficulty: "easy",
      },
      {
        id: "ap-ts-network-b7",
        prompt: "Verify after fixing DNS typo:",
        choices: [
          { id: "a", text: "Names resolve and the user’s apps work — not only ping gateway" },
          { id: "b", text: "Fans spin" },
          { id: "c", text: "CMOS voltage only" },
        ],
        correctChoiceId: "a",
        explanation: "Verify full functionality.",
        objectiveId: "AP1201-5.5",
        difficulty: "easy",
      },
      {
        id: "ap-ts-network-b8",
        prompt: "A client has a link but cannot reach a service by name. Which evidence sequence is most useful?",
        choices: [
          { id: "a", text: "Inspect addressing/gateway/DNS, test local gateway, compare IP versus hostname, then trace or query as needed" },
          { id: "b", text: "Replace printer toner" },
          { id: "c", text: "Assume the cable is good because link is lit" },
        ],
        correctChoiceId: "a",
        explanation: "Layered addressing, gateway, reachability, and name-resolution evidence isolates the failure efficiently.",
        objectiveId: "AP1201-5.5",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-ts-network-f1",
        front: "Scope first?",
        back: "One vs many · wired/wireless · LAN vs internet · IP vs name",
      },
      {
        id: "ap-ts-network-f2",
        front: "APIPA alone?",
        back: "Client DHCP/link path — compare a peer",
      },
      {
        id: "ap-ts-network-f3",
        front: "IP OK, names fail?",
        back: "DNS next",
      },
      {
        id: "ap-ts-network-f4",
        front: "LAN OK, no internet?",
        back: "Gateway / WAN / ISP",
      },
      {
        id: "ap-ts-network-f5",
        front: "Ping proves?",
        back: "Reachability — not full app health",
      },
      {
        id: "ap-ts-network-f6",
        front: "Before changing IP/DNS?",
        back: "Document original settings",
      },
    ],
    assignments: [
      {
        id: "ap-lab-ts-network-tickets",
        title: "Network troubleshooting ticket set",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `For each ticket: scope · likely layer · first tool/check · expected evidence · next action · verify · escalation owner · one-line ticket note.

T1: One PC APIPA; peers OK.
T2: Ping 1.1.1.1 OK; https by name fails.
T3: Whole office: no internet; \\\\files01 works.
T4: Strong 2.4 GHz bars; cloud apps crawl; Ethernet peer is fine.
T5: Browser OK; authorized internal HTTPS app times out; VPN off.

Optional read-only: run ipconfig /all and label DHCP/IP/GW/DNS. No public scans. No undocumented router resets.`,
        estimatedMinutes: 20,
        completionCriteria: [
          "Complete T1–T5 with escalation owner + ticket note",
          "Include scope classification on each",
        ],
        relatedTopicIds: [
          "ap-ts-network",
          "ap-network-config",
          "ap-network-tools",
          "ap-networking-domain-review",
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
    id: "ap-ts-printer",
    name: "Troubleshoot Printers",
    prerequisites: ["ap-ts-network", "ap-printers-setup", "ap-printer-maintenance"],
    objectives: ["AP1201-5.6"],
    lesson: {
      title: "Isolate Print Path Failures from Mechanism Failures",
      content: `A bad page and a job that never reaches the printer are different classes. Reuse \`ap-printers-setup\` and \`ap-printer-maintenance\` (laser stages, queues, consumables) — diagnose; don’t re-teach every technology from zero.

${TS_PROCESS}

**CF refresher:** \`cf-meetings-print-scan\`.

**Print path.**
\`\`\`
Application → OS print system → selected printer → queue/spooler
→ driver/rendering → network or cable → printer controller
→ paper & imaging mechanism → finished output
\`\`\`

**Layers.** Application · OS · queue/spooler · driver · connection · printer config · consumables · paper handling · imaging process · mechanical · maintenance/environment.

**Laser stages (evidence before slogans).** Processing → charging → exposing → developing → transferring → fusing → cleaning.  
Examples after alternatives considered: toner rubs off → fusing/media; repeating marks → rotating component pattern; blank → data path/toner/transfer/seal; faded → toner/density/transfer/environment.

**Connectivity & queue.** Wrong printer; paused/offline; one corrupt job blocking queue; spooler; driver mismatch; DHCP IP change; hostname/DNS; USB/cable; wireless printer on wrong SSID; auth/permissions; device powered off.

**Symptom classes.** Offline/can’t connect; stuck jobs; garbled (often driver/app); blank/faded/streaks/lines/smudge/unfused; color missing; jams/multi-feed/crease/wrong size; slow; memory errors; finishing; calibration; thermal/impact quirks; MFD scan path separate from print.

**Safety.** Cool fuser before touching. Disconnect power for approved inspection. No high-voltage probing. Toner: avoid inhalation; don’t force spill cleanup with vacuum not rated for toner. No interlock bypass. Model-specific kits. Escalate beyond authorization. Document page counts, codes, consumables, damage.

**Mistakes.** Opening the printer before checking queue/selection; replacing fuser for a wrong driver; ignoring media type for unfused toner; hard-resetting a network printer without noting IP; assuming every streak is “dirty drum” without evidence.

**Verify.** Test page from printer panel if available; Windows test page; user’s app; correct tray/duplex; no residual queue errors.

**Document.** Queue name, IP/hostname, driver package, error codes, consumable levels, steps tried.

**What's next.** Troubleshooting domain review — mixed 5.1–5.6 scenarios.`,
    },
    lightbulbMoment:
      "If the job never leaves the PC, stop opening the printer — prove queue, driver, and connection first.",
    keyFacts: [
      "Job-never-arrives vs bad-page are different failure classes",
      "Queue/spooler/driver/connection before mechanism teardown",
      "Unfused toner → fusing/media after other causes considered",
      "Repeating defects suggest rotating components — measure interval, don’t guess one universal part",
      "Cool the fuser; never bypass interlocks",
      "Network printer ‘offline’ needs power/link/IP/queue scope — not only toner",
    ],
    guidedExample: {
      title: "Five printer tickets",
      steps: [
        "Jobs stuck; panel Ready → wrong printer? paused? cancel bad job; restart spooler if authorized; ping printer IP.",
        "Toner wipes off → media type/fuser temp path; cool before service; don’t assume empty cartridge first.",
        "Network printer offline today → power/link; ping old IP; DHCP change; queue port; compare another PC.",
        "Repeating marks every ~9 cm → note interval; consult model defect charts; don’t random-replace all rollers.",
        "Only CAD app garbles; Notepad test OK → app/driver rendering, not the fuser.",
      ],
    },
    commonMistakes: [
      "Replacing hardware for a paused queue",
      "Touching a hot fuser",
      "Formatting unrelated to print path",
      "Ignoring wrong paper size causing ‘ghost’ jams",
      "Updating drivers without noting the previous package",
    ],
    examTraps: [
      "Queue vs mechanism isolation",
      "Fusing symptom after evidence",
      "Network printer offline layers",
      "Single-app garbled output",
      "Safety / cool-down / interlocks",
    ],
    realWorldScenario:
      "Payroll says the laser is ‘broken.’ Fifty jobs sit on one PC; the printer web UI prints a config page. Clearing a stuck job and correcting a wrong IP port restores printing — the fuser never needed a wrench.",
    whenThisFails: [
      "If error codes demand a maintenance kit under warranty, escalate with meter reads",
      "If toner contamination is heavy, follow hazmat/cleanup policy — don’t improvise with a home vacuum",
      "If only one secure print queue fails, check auth/permissions before hardware",
    ],
    teacherReflectionPrompt:
      "Contrast the first three checks for ‘jobs stuck in queue’ versus ‘toner rubs off the page,’ including one safety note for the second.",
    quiz: [
      {
        id: "ap-ts-printer-q1",
        prompt: "Printer panel Ready; all jobs stuck on one PC. Best early focus?",
        choices: [
          { id: "a", text: "Selection, queue/spooler, driver, and connection — before opening the printer" },
          { id: "b", text: "Immediate fuser replacement while hot" },
          { id: "c", text: "Replace the CMOS battery" },
          { id: "d", text: "Disable DNS" },
        ],
        correctChoiceId: "a",
        explanation: "Job-never-arrives failures start on the host path.",
        objectiveId: "AP1201-5.6",
        difficulty: "easy",
      },
      {
        id: "ap-ts-printer-q2",
        prompt: "Toner rubs off the finished page. Strong mechanism theory after media check?",
        choices: [
          { id: "a", text: "Fusing / temperature / media compatibility path" },
          { id: "b", text: "APIPA on the printer" },
          { id: "c", text: "Bluetooth pairing" },
          { id: "d", text: "VT-x disabled" },
        ],
        correctChoiceId: "a",
        explanation: "Unfused toner points at the fusing stage and media.",
        objectiveId: "AP1201-5.6",
        difficulty: "medium",
      },
      {
        id: "ap-ts-printer-q3",
        prompt: "Network printer worked yesterday; now Offline for everyone. Scope suggests checking:",
        choices: [
          { id: "a", text: "Printer power/link, address/hostname, and shared path — not one PC’s Word settings first" },
          { id: "b", text: "Only one user’s mouse DPI" },
          { id: "c", text: "Only laptop digitizers" },
          { id: "d", text: "Only SaaS CRM" },
        ],
        correctChoiceId: "a",
        explanation: "Many users offline → shared printer/network layer.",
        objectiveId: "AP1201-5.6",
        difficulty: "medium",
      },
      {
        id: "ap-ts-printer-q4",
        prompt: "Notepad test page is perfect; only one app prints garbage. Likely layer?",
        choices: [
          { id: "a", text: "Application or app-specific rendering/driver behavior" },
          { id: "b", text: "Dead fuser always" },
          { id: "c", text: "Missing RAID member" },
          { id: "d", text: "Swollen CMOS battery" },
        ],
        correctChoiceId: "a",
        explanation: "Single-app symptoms isolate above the mechanism.",
        objectiveId: "AP1201-5.6",
        difficulty: "easy",
      },
      {
        id: "ap-ts-printer-q5",
        prompt: "Before inspecting inside a laser after a jam you should:",
        choices: [
          { id: "a", text: "Allow hot fuser components to cool; disconnect power for approved work; no interlock bypass" },
          { id: "b", text: "Reach past interlocks while powered for speed" },
          { id: "c", text: "Vacuum toner with a household vacuum always" },
          { id: "d", text: "Skip documentation of error codes" },
        ],
        correctChoiceId: "a",
        explanation: "Printer safety rules are non-negotiable.",
        objectiveId: "AP1201-5.6",
        difficulty: "easy",
      },
    ],
    questionBank: [
      {
        id: "ap-ts-printer-b1",
        prompt: "Repeating marks at a fixed interval suggest:",
        choices: [
          { id: "a", text: "A rotating component — note the interval and consult model guidance" },
          { id: "b", text: "DNS failure only" },
          { id: "c", text: "Airplane mode" },
        ],
        correctChoiceId: "a",
        explanation: "Pattern evidence before parts roulette.",
        objectiveId: "AP1201-5.6",
        difficulty: "medium",
      },
      {
        id: "ap-ts-printer-b2",
        prompt: "Blank pages with packing seal still on a new toner often mean:",
        choices: [
          { id: "a", text: "Consumable not ready — remove seal before condemning the engine" },
          { id: "b", text: "The ONT failed" },
          { id: "c", text: "VT-x is off" },
        ],
        correctChoiceId: "a",
        explanation: "Simple consumable setup beats board RMA.",
        objectiveId: "AP1201-5.6",
        difficulty: "easy",
      },
      {
        id: "ap-ts-printer-b3",
        prompt: "Wireless printer on guest SSID while PCs are on staff SSID can cause:",
        choices: [
          { id: "a", text: "Isolation / wrong-network connectivity failures" },
          { id: "b", text: "Automatic fuser upgrades" },
          { id: "c", text: "CMOS clears" },
        ],
        correctChoiceId: "a",
        explanation: "Network segmentation affects print reachability.",
        objectiveId: "AP1201-5.6",
        difficulty: "easy",
      },
      {
        id: "ap-ts-printer-b4",
        prompt: "Garbled output after a driver swap — useful rollback is:",
        choices: [
          { id: "a", text: "Restore the known-good driver package and retest" },
          { id: "b", text: "Replace the motherboard first" },
          { id: "c", text: "Disable all gateways" },
        ],
        correctChoiceId: "a",
        explanation: "Driver mismatch is a classic garbled-output layer.",
        objectiveId: "AP1201-5.6",
        difficulty: "easy",
      },
      {
        id: "ap-ts-printer-b5",
        prompt: "MFD scan-to-email fails but printing works. Framing?",
        choices: [
          { id: "a", text: "Scan/SMTP/path config — separate from the print engine" },
          { id: "b", text: "Replace the fuser immediately" },
          { id: "c", text: "APIPA on the toner" },
        ],
        correctChoiceId: "a",
        explanation: "MFD functions are separate paths.",
        objectiveId: "AP1201-5.6",
        difficulty: "medium",
      },
      {
        id: "ap-ts-printer-b6",
        prompt: "Verify after clearing a jam and cooling the fuser:",
        choices: [
          { id: "a", text: "Print a test page and the user’s document successfully" },
          { id: "b", text: "Only that fans on the PC spin" },
          { id: "c", text: "Only that Wi-Fi bars are full" },
        ],
        correctChoiceId: "a",
        explanation: "Verify print functionality end-to-end.",
        objectiveId: "AP1201-5.6",
        difficulty: "easy",
      },
      {
        id: "ap-ts-printer-b7",
        prompt: "Documentation for printer tickets should include:",
        choices: [
          { id: "a", text: "Error codes, meter/page counts when relevant, consumables, and steps tried" },
          { id: "b", text: "Only the user’s password" },
          { id: "c", text: "A meme and no findings" },
        ],
        correctChoiceId: "a",
        explanation: "Meters and codes matter for kits and warranty.",
        objectiveId: "AP1201-5.6",
        difficulty: "easy",
      },
      {
        id: "ap-ts-printer-b8",
        prompt: "A network printer is reachable but every job remains queued. Best first focus?",
        choices: [
          { id: "a", text: "Queue status, paused/offline state, correct port/driver, spooler, and a controlled test job" },
          { id: "b", text: "Cloud deployment model only" },
          { id: "c", text: "Replace all printer hardware" },
        ],
        correctChoiceId: "a",
        explanation: "Reachability narrows the fault toward the queue, spooler, port, driver, or printer job state.",
        objectiveId: "AP1201-5.6",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-ts-printer-f1",
        front: "Jobs stuck, panel Ready?",
        back: "Queue/spooler/driver/connection before teardown",
      },
      {
        id: "ap-ts-printer-f2",
        front: "Toner rubs off?",
        back: "Fusing/media — cool fuser before service",
      },
      {
        id: "ap-ts-printer-f3",
        front: "Repeating marks?",
        back: "Rotating component — note interval",
      },
      {
        id: "ap-ts-printer-f4",
        front: "One app garbles?",
        back: "App/driver rendering — not automatic fuser fail",
      },
      {
        id: "ap-ts-printer-f5",
        front: "Network printer offline for all?",
        back: "Power/link/IP/hostname/shared path",
      },
      {
        id: "ap-ts-printer-f6",
        front: "Printer safety?",
        back: "Cool fuser · no interlock bypass · toner caution",
      },
    ],
    assignments: [
      {
        id: "ap-lab-ts-printer-incidents",
        title: "Layered printer incident worksheet",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `For each fictional ticket: failure class (never-arrives vs bad-page) · print-path layer · first safe check · evidence · next step · verify · maintenance/escalate · ticket note.

1) Fifty jobs queued; printer Ready light on; config page prints from panel.
2) Toner wipes off with a finger; plain paper; device just serviced.
3) Entire floor: network printer Offline since DHCP change weekend.
4) Repeating smudge every few inches; interval consistent.
5) Only the design app prints mojibake; Windows test page OK.

No physical printer required. Do not bypass interlocks or service hot fusers.`,
        estimatedMinutes: 18,
        completionCriteria: [
          "Complete five incidents with failure class + escalate decision",
          "Include safety note on the unfused-toner case",
        ],
        relatedTopicIds: [
          "ap-ts-printer",
          "ap-printers-setup",
          "ap-printer-maintenance",
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
    id: "ap-troubleshoot-domain-review",
    name: "Hardware & Network Troubleshooting Domain Review",
    prerequisites: ["ap-ts-printer"],
    objectives: [
      "AP1201-5.1",
      "AP1201-5.2",
      "AP1201-5.3",
      "AP1201-5.4",
      "AP1201-5.5",
      "AP1201-5.6",
    ],
    lesson: {
      title: "Integrate Core 1 Troubleshooting",
      content: `This checkpoint practices **evidence-first diagnosis** across the whole Troubleshooting domain. You are not learning new subsystems — you are choosing the right next check.

${TS_PROCESS}

**Path completed.**
1. Power / MB / RAM / CPU (5.1)  
2. Storage & RAID (5.2)  
3. Displays (5.3)  
4. Mobile devices (5.4)  
5. Networks (5.5)  
6. Printers (5.6)  

**Missed questions map to:**

${Object.entries(AP_TROUBLESHOOT_OBJECTIVE_TOPIC)
  .map(([obj, topic]) => `- ${obj} → \`${topic}\``)
  .join("\n")}

**Cross-domain habits.** Similar symptoms cross layers (no boot ≠ only storage; black screen ≠ only panel; slow PC ≠ only disk). Safety stops (smoke, swollen battery, hot fuser) override curiosity. Protect data before destructive disk/print actions. Document originals. Verify full function.

**Looking ahead.** Core 1 is first-pass complete after integration. Next when authorized: **Core 2 Operating Systems** (\`ap-os-types\` onward) — not automatic Available promotion. Full A+ remains planned until Core 2 is implemented.`,
    },
    lightbulbMoment:
      "The winning move is the next safe test that shrinks the layer list — not the cleverest part guess.",
    keyFacts: [
      "Always: identify → theory → test → plan → implement/escalate → verify → document",
      "Smoke/swollen battery/hot fuser = stop conditions",
      "Scope (one vs many) picks network and printer shared-path theories",
      "Firmware-visible disk ≠ Explorer-visible volume",
      "External display OK isolates internal laptop panel path",
      "BT paired ≠ call-audio profile; ping ≠ app health; queue stuck ≠ dead fuser",
    ],
    guidedExample: {
      title: "Mixed afternoon triage",
      steps: [
        "No power after storm → outlet/cable/PSU before motherboard (5.1).",
        "Clicking HDD, no backup → limit runtime, escalate recovery (5.2).",
        "Laptop black, HDMI OK → internal panel/cable (5.3).",
        "Swollen phone → stop charge (5.4).",
        "Floor loses internet, shares OK → WAN/ISP (5.5).",
        "Jobs stuck, panel Ready → queue/driver (5.6).",
      ],
    },
    commonMistakes: [
      "Replacing multiple parts at once",
      "Factory-resetting phones for permission issues",
      "Formatting disks that only needed a drive letter",
      "Opening printers for host-queue failures",
      "Skipping documentation of original IP/DNS/queue settings",
    ],
    examTraps: [
      "Best next check / safest action",
      "Safety stops and data protection",
      "Scope isolation (one vs many)",
      "Evidence interpretation across domains",
      "Escalation and verification",
    ],
    realWorldScenario:
      "One ticket board mixes a no-POST RAM upgrade, an APIPA laptop, and a ‘broken’ laser with a Ready light. Three domains, one habit: prove the layer, change one thing, verify, write the note.",
    whenThisFails: [
      "If one objective cluster is weak, loop that topic’s worksheet before starting Core 2",
      "If safety items are missed, re-read 5.1/5.4/5.6 stop conditions before any hands-on",
    ],
    teacherReflectionPrompt:
      "Without notes, state the seven-step process and one best-next-check example from three different 5.x topics.",
    quiz: [
      {
        id: "ap-troubleshoot-domain-review-q1",
        prompt: "Fans spin after a RAM upgrade but POST never completes. Best next step?",
        choices: [
          { id: "a", text: "Test a known-good module / compatibility — one change at a time" },
          { id: "b", text: "Replace PSU and motherboard together immediately" },
          { id: "c", text: "Format all disks" },
          { id: "d", text: "Factory-reset a phone" },
        ],
        correctChoiceId: "a",
        explanation: "Power/RAM isolation." + reviewHint("AP1201-5.1"),
        objectiveId: "AP1201-5.1",
        difficulty: "easy",
      },
      {
        id: "ap-troubleshoot-domain-review-q2",
        prompt: "Burning smell from a tower. Immediate action?",
        choices: [
          { id: "a", text: "Power off, disconnect, escalate — do not open the PSU" },
          { id: "b", text: "Keep troubleshooting while it smokes" },
          { id: "c", text: "Add more RAM" },
          { id: "d", text: "Clear the print queue" },
        ],
        correctChoiceId: "a",
        explanation: "Safety stop." + reviewHint("AP1201-5.1"),
        objectiveId: "AP1201-5.1",
        difficulty: "easy",
      },
      {
        id: "ap-troubleshoot-domain-review-q3",
        prompt: "SSD listed in firmware but missing in Explorer. Best evidence next?",
        choices: [
          { id: "a", text: "Disk Management / Get-Disk for init/partition/letter" },
          { id: "b", text: "Immediate low-level format" },
          { id: "c", text: "Replace the monitor" },
          { id: "d", text: "Disable Wi-Fi" },
        ],
        correctChoiceId: "a",
        explanation: "Storage visibility layers." + reviewHint("AP1201-5.2"),
        objectiveId: "AP1201-5.2",
        difficulty: "easy",
      },
      {
        id: "ap-troubleshoot-domain-review-q4",
        prompt: "RAID degraded — critical caution?",
        choices: [
          { id: "a", text: "Identify the failed member — wrong drive pull can destroy the array; RAID ≠ backup" },
          { id: "b", text: "Pull random drives until green" },
          { id: "c", text: "Format all members now" },
          { id: "d", text: "Ignore and replace the GPU" },
        ],
        correctChoiceId: "a",
        explanation: "RAID data protection." + reviewHint("AP1201-5.2"),
        objectiveId: "AP1201-5.2",
        difficulty: "medium",
      },
      {
        id: "ap-troubleshoot-domain-review-q5",
        prompt: "Laptop panel black; external monitor fine. Framing?",
        choices: [
          { id: "a", text: "Internal panel/cable/backlight path — not automatic total GPU death" },
          { id: "b", text: "ISP outage only" },
          { id: "c", text: "Toner empty" },
          { id: "d", text: "APIPA required" },
        ],
        correctChoiceId: "a",
        explanation: "Display chain isolation." + reviewHint("AP1201-5.3"),
        objectiveId: "AP1201-5.3",
        difficulty: "easy",
      },
      {
        id: "ap-troubleshoot-domain-review-q6",
        prompt: "Dim panel but flashlight shows faint image. Suspect?",
        choices: [
          { id: "a", text: "Backlight / brightness path" },
          { id: "b", text: "DNS only" },
          { id: "c", text: "RAID stripe" },
          { id: "d", text: "SMTP" },
        ],
        correctChoiceId: "a",
        explanation: "Backlight clue." + reviewHint("AP1201-5.3"),
        objectiveId: "AP1201-5.3",
        difficulty: "medium",
      },
      {
        id: "ap-troubleshoot-domain-review-q7",
        prompt: "Swollen phone battery — action?",
        choices: [
          { id: "a", text: "Stop charge/use; escalate; never puncture or heat" },
          { id: "b", text: "Press flat and keep charging" },
          { id: "c", text: "Microwave briefly" },
          { id: "d", text: "Factory reset as step one" },
        ],
        correctChoiceId: "a",
        explanation: "Mobile battery safety." + reviewHint("AP1201-5.4"),
        objectiveId: "AP1201-5.4",
        difficulty: "easy",
      },
      {
        id: "ap-troubleshoot-domain-review-q8",
        prompt: "BT headset music OK; calls on phone speaker. Framing?",
        choices: [
          { id: "a", text: "Pairing ≠ call-audio profile/capability" },
          { id: "b", text: "Dead SSD" },
          { id: "c", text: "Missing fuser" },
          { id: "d", text: "CMOS clear" },
        ],
        correctChoiceId: "a",
        explanation: "Bluetooth stages." + reviewHint("AP1201-5.4"),
        objectiveId: "AP1201-5.4",
        difficulty: "medium",
      },
      {
        id: "ap-troubleshoot-domain-review-q9",
        prompt: "One PC APIPA; peers OK. Scope says?",
        choices: [
          { id: "a", text: "That client’s DHCP/link path before ISP blame" },
          { id: "b", text: "Replace every uplink" },
          { id: "c", text: "Replace all printers" },
          { id: "d", text: "Disable all DNS" },
        ],
        correctChoiceId: "a",
        explanation: "Network scope." + reviewHint("AP1201-5.5"),
        objectiveId: "AP1201-5.5",
        difficulty: "easy",
      },
      {
        id: "ap-troubleshoot-domain-review-q10",
        prompt: "IP ping works; names fail. Next?",
        choices: [
          { id: "a", text: "DNS / nslookup" },
          { id: "b", text: "New fuser" },
          { id: "c", text: "New digitizer" },
          { id: "d", text: "Open the PSU" },
        ],
        correctChoiceId: "a",
        explanation: "DNS isolation." + reviewHint("AP1201-5.5"),
        objectiveId: "AP1201-5.5",
        difficulty: "easy",
      },
      {
        id: "ap-troubleshoot-domain-review-q11",
        prompt: "Jobs stuck; printer Ready. Early focus?",
        choices: [
          { id: "a", text: "Queue/spooler/driver/connection before mechanism teardown" },
          { id: "b", text: "Hot fuser replacement immediately" },
          { id: "c", text: "RAID rebuild" },
          { id: "d", text: "VT-x enable only" },
        ],
        correctChoiceId: "a",
        explanation: "Print path." + reviewHint("AP1201-5.6"),
        objectiveId: "AP1201-5.6",
        difficulty: "easy",
      },
      {
        id: "ap-troubleshoot-domain-review-q12",
        prompt: "Toner rubs off the page. After media check, suspect?",
        choices: [
          { id: "a", text: "Fusing path — cool before service" },
          { id: "b", text: "APIPA" },
          { id: "c", text: "Guest Wi-Fi only" },
          { id: "d", text: "Screenshot vs photo clue for GPUs only" },
        ],
        correctChoiceId: "a",
        explanation: "Fusing symptom." + reviewHint("AP1201-5.6"),
        objectiveId: "AP1201-5.6",
        difficulty: "medium",
      },
    ],
    questionBank: [
      {
        id: "ap-troubleshoot-domain-review-b1",
        prompt: "Lost UEFI settings every cold boot often points to:",
        choices: [
          { id: "a", text: "CMOS/RTC battery or clock power path" },
          { id: "b", text: "Empty toner only" },
          { id: "c", text: "Captive portal" },
        ],
        correctChoiceId: "a",
        explanation: "5.1 firmware power." + reviewHint("AP1201-5.1"),
        objectiveId: "AP1201-5.1",
        difficulty: "easy",
      },
      {
        id: "ap-troubleshoot-domain-review-b2",
        prompt: "Clicking HDD + no backup:",
        choices: [
          { id: "a", text: "Limit runtime; discuss recovery escalation" },
          { id: "b", text: "Run endless formats" },
          { id: "c", text: "Ignore SMART forever" },
        ],
        correctChoiceId: "a",
        explanation: "5.2 data protection." + reviewHint("AP1201-5.2"),
        objectiveId: "AP1201-5.2",
        difficulty: "easy",
      },
      {
        id: "ap-troubleshoot-domain-review-b3",
        prompt: "No signal; PC POST OK. First chain checks:",
        choices: [
          { id: "a", text: "Input, cable, port, known-good swap" },
          { id: "b", text: "Replace CPU first" },
          { id: "c", text: "Factory-reset phone" },
        ],
        correctChoiceId: "a",
        explanation: "5.3 display chain." + reviewHint("AP1201-5.3"),
        objectiveId: "AP1201-5.3",
        difficulty: "easy",
      },
      {
        id: "ap-troubleshoot-domain-review-b4",
        prompt: "Hotspot associates; no internet:",
        choices: [
          { id: "a", text: "Phone cellular data/plan/APN upstream" },
          { id: "b", text: "Fuser temperature" },
          { id: "c", text: "SODIMM generation" },
        ],
        correctChoiceId: "a",
        explanation: "5.4 mobile tether." + reviewHint("AP1201-5.4"),
        objectiveId: "AP1201-5.4",
        difficulty: "easy",
      },
      {
        id: "ap-troubleshoot-domain-review-b5",
        prompt: "LAN shares OK; no internet for all:",
        choices: [
          { id: "a", text: "Gateway/WAN/ISP shared path" },
          { id: "b", text: "Every workstation panel" },
          { id: "c", text: "All CMOS batteries" },
        ],
        correctChoiceId: "a",
        explanation: "5.5 network scope." + reviewHint("AP1201-5.5"),
        objectiveId: "AP1201-5.5",
        difficulty: "easy",
      },
      {
        id: "ap-troubleshoot-domain-review-b6",
        prompt: "Ping success means:",
        choices: [
          { id: "a", text: "Reachability — not full application proof" },
          { id: "b", text: "Certificates are valid" },
          { id: "c", text: "Print spooler is healthy" },
        ],
        correctChoiceId: "a",
        explanation: "5.5 evidence limits." + reviewHint("AP1201-5.5"),
        objectiveId: "AP1201-5.5",
        difficulty: "easy",
      },
      {
        id: "ap-troubleshoot-domain-review-b7",
        prompt: "Single app garbled print; test page OK:",
        choices: [
          { id: "a", text: "Application/driver rendering layer" },
          { id: "b", text: "Dead fuser always" },
          { id: "c", text: "ISP outage" },
        ],
        correctChoiceId: "a",
        explanation: "5.6 print path." + reviewHint("AP1201-5.6"),
        objectiveId: "AP1201-5.6",
        difficulty: "easy",
      },
      {
        id: "ap-troubleshoot-domain-review-b8",
        prompt: "Before inside laser service:",
        choices: [
          { id: "a", text: "Cool fuser; disconnect power; no interlock bypass" },
          { id: "b", text: "Service while powered for speed" },
          { id: "c", text: "Skip error codes" },
        ],
        correctChoiceId: "a",
        explanation: "5.6 safety." + reviewHint("AP1201-5.6"),
        objectiveId: "AP1201-5.6",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-troubleshoot-domain-review-f1",
        front: "TS process?",
        back: "Identify → theory → test → plan → implement/escalate → verify → document",
      },
      {
        id: "ap-troubleshoot-domain-review-f2",
        front: "Missed 5.x?",
        back: "Return to mapped ap-ts-* topic",
      },
      {
        id: "ap-troubleshoot-domain-review-f3",
        front: "Safety trio?",
        back: "Smoke/PSU · swollen battery · hot fuser",
      },
      {
        id: "ap-troubleshoot-domain-review-f4",
        front: "Scope wins?",
        back: "One vs many picks shared network/printer paths",
      },
      {
        id: "ap-troubleshoot-domain-review-f5",
        front: "Ping / bars / paired?",
        back: "Not full proof of app, internet, or BT profiles",
      },
      {
        id: "ap-troubleshoot-domain-review-f6",
        front: "After Core 1 TS first-pass?",
        back: "Core 1 integration audit — track stays Planned",
      },
    ],
    assignments: [
      {
        id: "ap-lab-ts-domain-weak-area",
        title: "Troubleshooting weak-area routing plan",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `Take the Troubleshooting Domain Review quiz. For every miss:
1) Note AP1201-5.x
2) Open the mapped topic
3) Re-do that topic’s worksheet or guided scenario
4) Retake items for that objective

Write a three-line plan for your weakest objective. No destructive disk/print actions; honor all safety stops.`,
        estimatedMinutes: 25,
        completionCriteria: [
          "List each missed objectiveId with its topic id",
          "Complete one remediation activity per miss",
          "Record a retake score or self-check result",
        ],
        relatedTopicIds: [
          "ap-ts-power-mb-ram-cpu",
          "ap-ts-storage-raid",
          "ap-ts-display",
          "ap-ts-mobile",
          "ap-ts-network",
          "ap-ts-printer",
          "ap-troubleshoot-domain-review",
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
