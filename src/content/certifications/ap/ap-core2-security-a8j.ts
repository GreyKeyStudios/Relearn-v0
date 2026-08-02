import type { ExternalResource, Topic } from "../../types";

/**
 * A+ Core 2 Security — A8j (Michael 2026-08-01).
 * ap-soho-security (AP1202-2.10) only — SOHO wired and wireless security settings.
 * Stop after verify — no 2.11+ Security, SW-TS, Ops, or CCNA C1.
 * Fictional configuration review only — no real router access, scanning, or public exposure testing.
 */

const WINDOWS_11_PC_RESOURCE: ExternalResource = {
  id: "windows-11-pc",
  name: "Windows 11 PC",
  url: "https://support.microsoft.com/windows",
  cost: "free",
  platform: "windows",
  installNotes:
    "Use a Windows 11 PC for fictional SOHO security configuration worksheets only. Do not access or change a real router without authorization. Do not scan networks, guess passwords, capture wireless traffic, stand up rogue APs, test public exposure, disable firewalls to ‘fix’ connectivity, or bypass ISP/vendor management controls.",
};

export const apCore2SecurityBatch10Topics: Topic[] = [
  {
    id: "ap-soho-security",
    name: "SOHO Wired & Wireless Security Settings",
    prerequisites: [
      "ap-data-destruction",
      "ap-wireless-security",
      "ap-soho-networks",
      "ap-security-measures",
      "ap-hardening",
      "ap-mobile-security",
    ],
    objectives: ["AP1202-2.10"],
    knowledgeNodeId: "hardening-basics",
    lesson: {
      title: "Secure the SOHO Network Without Weakening It for Convenience",
      content: `SOHO security is a controlled configuration process:

\`inventory → secure administration → safe wired/wireless settings → segment users/devices → reduce exposure → verify connectivity and protection → document → review periodically\`

**Environment + business need → risk → configuration choice → compatibility impact → verification** — not a one-line router-setting cheat sheet.

**Prior:** \`ap-soho-networks\` (roles/topology) · \`ap-wireless-security\` (WPA2/WPA3/auth theory) · \`ap-security-measures\` · \`ap-hardening\` · \`ap-mobile-security\` · \`ap-data-destruction\` (NAS/printer sanitize on exit). **Later:** browser security (\`ap-browser-security\` / 2.11) — do not substitute that here.

**Lab boundary.** Fictional worksheets only. No real router changes required, no scanning, no password guessing, no public exposure testing, no control-weakening “lab hacks.”

---

## Inventory first

Identify before changing settings: ISP link · modem/gateway/router/AP roles · ISP-managed vs customer-managed gear · wired/wireless clients · guests · IoT · printers · NAS · cameras · smart-home · WFH systems · gaming/media · remote-access needs · business-critical services · unsupported/legacy devices.

A home that holds work devices, cameras, payment tools, or customer data needs stronger controls than a casual personal LAN.

## Administrative security

Change default admin username (where supported) and password · strong unique passphrase · **not** the Wi-Fi passphrase · restrict management access · disable internet management unless required and safely configured · HTTPS management where supported · disable insecure admin protocols · review local vs cloud-managed admin · protect vendor cloud account + MFA · restrict which local devices may administer · log out · protect config backups · document ownership/recovery securely.

**Defaults:** manufacturer credentials are often public. Unchanged Wi-Fi password and unchanged router-admin password are **separate** risks. ISP equipment may include provider-managed accounts you cannot modify — do not bypass ISP/vendor controls.

## Firmware & support lifecycle

Check version · apply approved updates · auto-update where appropriate · confirm source · backup config · plan downtime · confirm hardware still supported · replace unsupported gear · skim release notes · verify settings after update.

**Safety:** don’t interrupt updates · don’t install unofficial firmware for ordinary support · don’t assume third-party firmware is safer · confirm model/revision · protect power/network during update · failed firmware can brick the router.

---

## Wireless settings (apply \`ap-wireless-security\`)

Prefer strongest mode authorized devices support: **WPA3** / **WPA2** · Personal vs Enterprise where supported · AES/CCMP · avoid WEP and legacy WPA · avoid TKIP when stronger options exist · strong unique passphrase · rotate after disclosure or when shared access ends · separate SSIDs when useful.

**Legacy trap:** one WEP-only device must not force the primary network insecure. Prefer replace/update · isolated network only if risk accepted/approved · restrict access · document. Mixed/transition modes are not risk-free.

**SSID:** identifier, not a password · hidden SSID ≠ strong security · avoid personal/business/address info in the name · clear guest vs internal naming · verify expected SSID before join.

**Passphrases:** long · unique · hard to guess · not address/phone/business/pet/family · different from admin credential · change after disclosure · approved distribution. Shared PSK = easy deploy, weak accountability, hard offboarding, broad impact when rotated.

**WPS:** convenience with PIN risk — disable when not required; check if resets/firmware re-enable it; use ordinary secure provisioning. No attack steps.

## Guest & IoT segmentation

**Guest:** separate SSID + distinct passphrase · client isolation where appropriate · block internal devices/admin · bandwidth/time limits if useful · disable when unused · verify guests cannot reach printers/NAS/IoT · don’t reuse primary password. A second SSID on the same unrestricted LAN is **not** meaningful isolation.

**IoT/untrusted:** isolate lower-trust devices · restrict reach to PCs/storage · limit internet if function allows · change defaults · update firmware · remove unsupported devices · protect companion/cloud accounts · inventory · disable unnecessary remote access · review cameras/mics/data collection. Isolation fails if defaults remain, cloud accounts are weak, router isolation is misconfigured, or management stays exposed.

## Wired & physical security

Physical access to router/switch/cabling · secure placement · locked cabinet where appropriate · unused wall/switch ports · device admin credentials · managed-switch controls at recognition depth · inventory · unknown-device detection · limit share access · printer/NAS security · avoid public exposed jacks. Wired ≠ automatically trusted.

**Unknown wired device:** identify · check inventory · preserve logs · remove/isolate only when authorized · change credentials if compromise suspected · escalate unusual activity.

## DHCP, DNS, UPnP

**DHCP:** scope · reservations · static where justified · conflict avoidance · review unknown clients · smaller pool ≠ standalone security · MAC reservation ≠ strong auth.

**DNS:** router/ISP/approved third-party · detect unauthorized changes · family/content filters only if authorized · client DNS overrides · encrypted DNS awareness (intro) · verify expected resolution. Indicators: unexpected router DNS · multi-device redirects · odd search across clients → secure admin, restore approved DNS, update firmware, review clients, escalate.

**UPnP:** auto mappings for convenience · may increase exposure · disable when unused · games/media may depend on it · prefer narrow approved port maps · verify authorized functions still work. Not always malicious or always safe.

## Port forwarding, DMZ, firewall

**Port forwarding:** exposes an internal service — needs justified need · patched + strong auth · narrowest protocol/port/source/dest · remove obsolete · prefer approved VPN/managed remote access · review auto maps · document ownership. Avoid broad ranges · public admin · RDP exposure without strong controls · firewall off.

**SOHO “DMZ” host:** often receives most unsolicited inbound traffic · **not** an enterprise DMZ · high exposure · not a routine game/connectivity fix. Prefer narrow approved rules; don’t put a normal workstation in DMZ without risk review/authorization.

**Router firewall:** keep enabled · intro stateful concepts · inbound blocking · outbound controls where supported · rule review · logging · narrow exceptions · default-deny where aligned. Defense in depth: router boundary **and** host firewalls — one doesn’t replace the other.

## Remote admin & VPN

Disable internet management unless required · vendor-supported secure methods · MFA · restrict sources · avoid HTTP/Telnet · VPN-based admin where supported · monitor logs · port change is obscurity only · remove obsolete remote access. No bypass instructions.

**VPN (SOHO depth):** remote-access · site-to-site recognition · client vs server · org-approved · strong auth · updates · limited users · logging. VPN ≠ infected endpoint safe · ≠ all tracking gone · ≠ HTTPS replacement · ≠ fix for a badly configured router.

## NAS, printers, cameras, smart home

Change defaults · individual accounts · restrict shares · updates · disable guest · encryption where supported · limit remote · review cloud sharing · backup · protect admin · remove old users · sanitize before disposal (\`ap-data-destruction\`).

Cameras/smart devices: unique creds · MFA on cloud · firmware · disable unnecessary public access · review sharing · restrict/segment · protect recordings · vendor support lifecycle · remove prior-owner accounts after move/resale. No unauthorized surveillance guidance.

## Logs, backup, reset, compromise

Review: client list · DHCP leases · login history · firewall events · wireless auth failures · forwarding · firmware status · unknown devices · restarts · DNS changes · remote-admin state. Consumer logs may be limited — document and escalate, don’t play advanced forensics.

**Backup:** save config where supported · protect backups (sensitive) · record ISP/SSID/segmentation intent · store recovery securely · plan before factory reset · re-verify security after restore/reset.

**Factory reset may:** restore defaults · re-enable WPS/remote admin · remove segmentation · break ISP · require re-enrollment. Not first step when safer evidence can be gathered.

**Compromise signs:** unknown admin password · DNS changed · unknown forwarding · remote admin on unexpectedly · new SSID · unknown clients · firmware oddities · multi-device redirects · unexpected cloud management · settings drift after reset.

**Safe response outline:** isolate if needed → trusted wired/clean device → verify ownership → evidence/config backup if policy allows → approved reset if integrity uncertain → update firmware → new unique credentials → reconfigure securely → reconnect deliberately → review accounts/endpoints → verify DNS/forwarding/remote/wireless → document/monitor. Escalate ISP-managed, business-critical, repeated, or sensitive-data cases. No offensive investigation.

## Compatibility without weakening

Secure changes may affect legacy Wi-Fi, printers, IoT, games, voice/video, remote work, streaming, smart-home, ISP services. Do **not** immediately weaken security.

1. Confirm required function  
2. Identify failure layer  
3. Check supported secure alternatives  
4. Narrowest approved exception  
5. Isolate legacy devices if needed  
6. Document risk  
7. Verify security **and** function

**What's next.** Browser security settings (\`ap-browser-security\` / AP1202-2.11) when authorized.`,
    },
    lightbulbMoment:
      "SOHO hardening is inventory and admin hygiene first: unique admin credentials, modern wireless without sacrificing the whole LAN for one legacy device, real guest/IoT isolation, no convenience DMZ or casual remote admin — then verify and document.",
    keyFacts: [
      "Router-admin password ≠ Wi-Fi passphrase — change both defaults",
      "Hidden SSID and MAC filtering are not strong authentication",
      "Disable WPS when not required",
      "Guest/IoT SSIDs need real isolation — same LAN ≠ segmentation",
      "SOHO DMZ host greatly increases exposure — not a generic fix",
      "Keep the router firewall on; host firewalls still matter",
      "Unexpected DNS changes across devices may indicate router compromise",
    ],
    guidedExample: {
      title: "Seven SOHO security tickets",
      steps: [
        "Default router admin still set → verify ownership; unique admin passphrase; review remote admin; update firmware; hunt unknown settings; document securely.",
        "One WEP-only device → replace/update preferred; isolated network only if accepted risk; never weaken the primary LAN casually.",
        "Visitors need Internet only → guest SSID + separate password + isolation; verify guests cannot reach office PCs/NAS.",
        "Console ‘needs DMZ’ → find required ports/UPnP policy; narrow rule if authorized; avoid DMZ; remove temps after verify.",
        "Camera with defaults + open cloud → change creds; MFA; firmware; review sharing; segment; verify ownership of recordings.",
        "Every device redirects oddly → check router DNS/admin integrity from trusted path; update/reset securely if compromised; change creds; review endpoints.",
        "RDP forwarded to home PC → remove direct exposure; approved VPN/managed remote access + MFA; patch; verify firewall/logs.",
      ],
    },
    commonMistakes: [
      "Leaving default administrator credentials",
      "Reusing the Wi-Fi password for router administration",
      "Enabling remote administration without need",
      "Keeping unsupported firmware",
      "Using WEP/legacy WPA or treating hidden SSID as strong security",
      "Leaving WPS enabled; assuming guest SSID is isolated without testing",
      "Treating MAC filtering as strong authentication",
      "Broad port forwards, DMZ as a generic fix, or disabling the firewall",
      "Ignoring unknown wired/wireless clients",
      "Factory-resetting without a reconfiguration plan",
      "Weakening the entire network for one legacy device",
      "Bypassing ISP or organization controls",
    ],
    examTraps: [
      "Safest first change on a default-credential router",
      "Narrowest approved exception for games/apps (not DMZ)",
      "Most dangerous exposure (internet admin, DMZ workstation, broad forwards)",
      "Correct guest/IoT segmentation vs second unrestricted SSID",
      "Legacy WEP device decision without weakening primary LAN",
      "DNS hijack multi-device symptoms → router integrity first",
      "WFH RDP forward → VPN/managed access instead",
    ],
    realWorldScenario:
      "A retail shop shares one SSID for POS tablets, guest Wi-Fi, and cameras. You inventory devices, move guests to an isolated SSID, park cameras on an IoT VLAN/SSID with no POS reach, replace WPA2-TKIP mixed mode with WPA2/WPA3 AES, disable WPS and internet admin, leave UPnP off after confirming the receipt printer still works on a narrow map, and verify from a guest phone that the register and camera admin pages are unreachable.",
    whenThisFails: [
      "If gear is ISP-managed and you lack authority, escalate to the provider — don’t bypass controls",
      "If business-critical or payment systems are involved, tighten change control and escalate unusual findings",
      "If router integrity is uncertain (DNS/forwarding/admin changed), stop casual tweaks and follow compromise response",
    ],
    teacherReflectionPrompt:
      "For default-admin SOHO vs WEP legacy device vs game-console DMZ request: name the first safe change, one dangerous convenience setting to refuse, and how you’d verify isolation or exposure.",
    quiz: [
      {
        id: "ap-soho-security-q1",
        prompt: "A small office still uses the manufacturer’s default router administrator password. Safest first framing?",
        choices: [
          { id: "a", text: "Verify ownership, set a strong unique admin passphrase (different from Wi-Fi), review remote management, update firmware, check for unknown settings" },
          { id: "b", text: "Leave defaults and hide the SSID instead" },
          { id: "c", text: "Put the office PC in the DMZ for easier admin" },
          { id: "d", text: "Disable the firewall so management is simpler" },
        ],
        correctChoiceId: "a",
        explanation: "Administrative hygiene first.",
        objectiveId: "AP1202-2.10",
        difficulty: "easy",
      },
      {
        id: "ap-soho-security-q2",
        prompt: "One legacy device requires WEP. Best approach for the primary network?",
        choices: [
          { id: "a", text: "Prefer replace/update; if unavoidable, isolate on an approved separate network with compensating controls — do not weaken the primary LAN" },
          { id: "b", text: "Enable WEP for the whole office so everything matches" },
          { id: "c", text: "Turn on WPS PIN as a substitute for encryption" },
          { id: "d", text: "Hide the SSID and keep WEP on the primary SSID" },
        ],
        correctChoiceId: "a",
        explanation: "Legacy isolation vs primary weakening.",
        objectiveId: "AP1202-2.10",
        difficulty: "medium",
      },
      {
        id: "ap-soho-security-q3",
        prompt: "Visitors need Internet but must not reach office PCs or NAS. What matters most?",
        choices: [
          { id: "a", text: "Separate guest SSID with a distinct passphrase and verified isolation from internal resources (client isolation where appropriate)" },
          { id: "b", text: "A second SSID that uses the same unrestricted LAN and primary password" },
          { id: "c", text: "MAC filtering alone with open wireless" },
          { id: "d", text: "Enabling internet remote administration for guests" },
        ],
        correctChoiceId: "a",
        explanation: "Guest isolation must be real.",
        objectiveId: "AP1202-2.10",
        difficulty: "easy",
      },
      {
        id: "ap-soho-security-q4",
        prompt: "A user asks to place a game console in the SOHO router’s DMZ to fix connectivity. Best response?",
        choices: [
          { id: "a", text: "Avoid DMZ; identify needed ports/services; use UPnP policy or a narrow authorized forward; verify and remove temporary rules" },
          { id: "b", text: "Always use DMZ for any gaming issue" },
          { id: "c", text: "Disable the router firewall permanently" },
          { id: "d", text: "Forward all TCP/UDP ports 1–65535" },
        ],
        correctChoiceId: "a",
        explanation: "DMZ is high exposure; prefer narrow rules.",
        objectiveId: "AP1202-2.10",
        difficulty: "medium",
      },
      {
        id: "ap-soho-security-q5",
        prompt: "Every device on a home network redirects to unexpected sites. First integrity check?",
        choices: [
          { id: "a", text: "Check router DNS and administration integrity from a trusted path; restore approved DNS; update/reset securely if compromise is suspected; review endpoints" },
          { id: "b", text: "Disable HTTPS on all browsers" },
          { id: "c", text: "Enable WEP to ‘reset’ DNS" },
          { id: "d", text: "Place the DNS server PC in the DMZ" },
        ],
        correctChoiceId: "a",
        explanation: "Multi-device redirects often point at router DNS/admin compromise.",
        objectiveId: "AP1202-2.10",
        difficulty: "medium",
      },
      {
        id: "ap-soho-security-q6",
        prompt: "A remote worker forwards Remote Desktop directly from the Internet to a home workstation. Recommended framing?",
        choices: [
          { id: "a", text: "Remove direct exposure; use an approved VPN or managed remote-access solution with MFA; patch; restrict accounts; verify firewall/logs" },
          { id: "b", text: "Keep RDP open and disable the router firewall" },
          { id: "c", text: "Put the workstation in the DMZ and leave defaults" },
          { id: "d", text: "Share the router admin password with the worker instead" },
        ],
        correctChoiceId: "a",
        explanation: "Prefer VPN/managed access over direct RDP exposure.",
        objectiveId: "AP1202-2.10",
        difficulty: "easy",
      },
    ],
    questionBank: [
      {
        id: "ap-soho-security-b1",
        prompt: "Hidden SSID as the primary wireless control is:",
        choices: [
          { id: "a", text: "Not a meaningful replacement for authentication and encryption" },
          { id: "b", text: "Stronger than WPA3" },
          { id: "c", text: "Required before guest isolation works" },
        ],
        correctChoiceId: "a",
        explanation: "SSID hiding limits.",
        objectiveId: "AP1202-2.10",
        difficulty: "easy",
      },
      {
        id: "ap-soho-security-b2",
        prompt: "WPS on a SOHO router when unused should generally be:",
        choices: [
          { id: "a", text: "Disabled; confirm it does not re-enable after reset/firmware update" },
          { id: "b", text: "Left on as a substitute for a passphrase" },
          { id: "c", text: "Used to publish the admin password" },
        ],
        correctChoiceId: "a",
        explanation: "WPS risk management.",
        objectiveId: "AP1202-2.10",
        difficulty: "easy",
      },
      {
        id: "ap-soho-security-b3",
        prompt: "A guest SSID that maps to the same unrestricted LAN as trusted devices:",
        choices: [
          { id: "a", text: "May not provide meaningful separation — verify isolation" },
          { id: "b", text: "Always equals enterprise microsegmentation" },
          { id: "c", text: "Automatically disables UPnP" },
        ],
        correctChoiceId: "a",
        explanation: "Isolation must be enforced.",
        objectiveId: "AP1202-2.10",
        difficulty: "medium",
      },
      {
        id: "ap-soho-security-b4",
        prompt: "UPnP is best framed as:",
        choices: [
          { id: "a", text: "Convenience that can create exposure — disable when not required; prefer narrow approved mappings" },
          { id: "b", text: "Always malicious and never used by any app" },
          { id: "c", text: "A replacement for WPA3" },
        ],
        correctChoiceId: "a",
        explanation: "UPnP tradeoff.",
        objectiveId: "AP1202-2.10",
        difficulty: "easy",
      },
      {
        id: "ap-soho-security-b5",
        prompt: "Router firewall vs host firewall:",
        choices: [
          { id: "a", text: "Both matter — boundary and endpoint defenses; one does not make the other unnecessary" },
          { id: "b", text: "Router firewall means host firewalls can be disabled forever" },
          { id: "c", text: "Host firewalls replace wireless encryption" },
        ],
        correctChoiceId: "a",
        explanation: "Defense in depth.",
        objectiveId: "AP1202-2.10",
        difficulty: "easy",
      },
      {
        id: "ap-soho-security-b6",
        prompt: "MAC address DHCP reservations are primarily:",
        choices: [
          { id: "a", text: "Organizational aids — not strong authentication by themselves" },
          { id: "b", text: "Equivalent to WPA3-Enterprise" },
          { id: "c", text: "Proof that a device cannot be spoofed" },
        ],
        correctChoiceId: "a",
        explanation: "MAC reservation limits.",
        objectiveId: "AP1202-2.10",
        difficulty: "medium",
      },
      {
        id: "ap-soho-security-b7",
        prompt: "Internet-facing router remote administration when not required should be:",
        choices: [
          { id: "a", text: "Disabled; use secure local or approved VPN-based admin with MFA when needed" },
          { id: "b", text: "Left on HTTP for convenience" },
          { id: "c", text: "Shared on the guest SSID" },
        ],
        correctChoiceId: "a",
        explanation: "Remote admin exposure.",
        objectiveId: "AP1202-2.10",
        difficulty: "easy",
      },
      {
        id: "ap-soho-security-b8",
        prompt: "A smart camera still uses default credentials with open cloud sharing. Priority actions include:",
        choices: [
          { id: "a", text: "Change credentials, MFA on cloud, update firmware, review sharing, segment, verify account ownership" },
          { id: "b", text: "Place the camera in the DMZ" },
          { id: "c", text: "Disable the router firewall so the app works" },
        ],
        correctChoiceId: "a",
        explanation: "Camera hardening.",
        objectiveId: "AP1202-2.10",
        difficulty: "medium",
      },
      {
        id: "ap-soho-security-b9",
        prompt: "After a factory reset of a SOHO router, you should expect that:",
        choices: [
          { id: "a", text: "Default credentials and convenience features (e.g., WPS/remote admin) may return — reconfigure and re-verify security settings" },
          { id: "b", text: "All prior hardening remains permanently" },
          { id: "c", text: "WPA3 is forced and WPS stays off forever without checking" },
        ],
        correctChoiceId: "a",
        explanation: "Reset consequences.",
        objectiveId: "AP1202-2.10",
        difficulty: "medium",
      },
      {
        id: "ap-soho-security-b10",
        prompt: "An unknown device appears on the wired switch. Best first framing?",
        choices: [
          { id: "a", text: "Identify against inventory, preserve relevant logs, isolate/remove only when authorized, escalate unusual activity" },
          { id: "b", text: "Immediately smash the switch" },
          { id: "c", text: "Disable encryption on all SSIDs to observe it" },
        ],
        correctChoiceId: "a",
        explanation: "Unknown wired device response.",
        objectiveId: "AP1202-2.10",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-soho-security-f1",
        front: "Admin password = Wi-Fi password?",
        back: "No — separate unique credentials",
      },
      {
        id: "ap-soho-security-f2",
        front: "Hidden SSID = secure?",
        back: "No — not strong auth/encryption",
      },
      {
        id: "ap-soho-security-f3",
        front: "WPS when unused?",
        back: "Disable; check after reset/update",
      },
      {
        id: "ap-soho-security-f4",
        front: "Guest SSID without isolation?",
        back: "May still reach internal LAN",
      },
      {
        id: "ap-soho-security-f5",
        front: "SOHO DMZ host?",
        back: "High exposure — not a generic fix",
      },
      {
        id: "ap-soho-security-f6",
        front: "Multi-device odd redirects?",
        back: "Check router DNS/admin integrity",
      },
      {
        id: "ap-soho-security-f7",
        front: "Direct RDP from Internet?",
        back: "Prefer VPN/managed access + MFA",
      },
    ],
    assignments: [
      {
        id: "ap-lab-soho-config-review",
        title: "SOHO network security configuration review",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `Fictional environments only. Do not access a real router, scan networks, guess passwords, capture traffic, create rogue APs, or test public exposure. Do not weaken real controls for a lab.

For each environment record:
1) Primary assets
2) Security risks
3) Highest-priority correction
4) Wireless changes
5) Wired/physical changes
6) Segmentation plan
7) Exposure to remove
8) Compatibility impact
9) Approval/ownership boundary
10) Verification method
11) Documentation/follow-up

Environments (fictional evidence packs):

A) Family home — ISP gateway combo, default admin still set, WPA2-Personal mixed TKIP, WPS on, one SSID for phones + IoT plugs + guest cousins, UPnP on, no config backup, router under TV stand near front door.

B) Remote-worker home office — customer-managed router, WPA3 on primary, RDP port forward to workstation WAN→3389, remote admin HTTPS from Internet enabled, MFA off on vendor cloud, work laptop + personal NAS on same LAN, no guest SSID.

C) Small retail office — POS tablets + guest Wi-Fi + cameras on one SSID, WPA2 AES, guest password = admin password, camera cloud account defaults, unused wall jack in public waiting area, firmware 3 years old / EOS, DMZ host set to a spare PC “for printing.”

D) IoT-heavy smart home — IoT SSID exists but isolation off (same subnet as PCs), several cameras with public share links, unsupported hub no longer patched, DNS set to unfamiliar third-party address nobody remembers changing, unknown wired device on a switch port.

Boundaries: never recommend DMZ for ordinary apps; never bypass ISP management; prefer isolation over weakening primary wireless; escalate suspected compromise (Environment D DNS) rather than offensive investigation.`,
        estimatedMinutes: 35,
        completionCriteria: [
          "Complete all eleven fields for environments A–D",
          "Refuse DMZ/broad forward as a generic fix where evidence tempts it",
          "Call out guest/IoT isolation failures and default-admin risks",
          "Flag ownership/ISP boundaries and compromise-response for unexpected DNS",
          "No real-world router changes or offensive steps",
        ],
        relatedTopicIds: [
          "ap-soho-security",
          "ap-wireless-security",
          "ap-soho-networks",
          "ap-hardening",
          "ap-mobile-security",
        ],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 55,
    difficulty: "medium",
  },
];
