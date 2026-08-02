import type { ExternalResource, Topic } from "../../types";

/**
 * A+ Core 2 Security — A8c (Michael 2026-08-01).
 * ap-wireless-security (AP1202-2.3) only.
 * Stop after verify — no 2.4+ Security, SW-TS, Ops, or CCNA C1.
 */

const WINDOWS_11_PC_RESOURCE: ExternalResource = {
  id: "windows-11-pc",
  name: "Windows 11 PC",
  url: "https://support.microsoft.com/windows",
  cost: "free",
  platform: "windows",
  installNotes:
    "Use a Windows 11 PC for read-only Wi-Fi status inventories and fictional wireless-security worksheets. Do not attack networks, capture handshakes, deauth clients, stand up rogue APs, crack passwords, or test unknown public SSIDs. Do not disable firewall/endpoint protection to ‘fix’ Wi-Fi. Do not accept unexpected certificates to force a join.",
};

export const apCore2SecurityBatch3Topics: Topic[] = [
  {
    id: "ap-wireless-security",
    name: "Wireless Security Protocols & Authentication",
    prerequisites: [
      "ap-windows-security",
      "ap-security-measures",
      "ap-wireless-tech",
      "ap-soho-networks",
    ],
    objectives: ["AP1202-2.3"],
    knowledgeNodeId: "authentication",
    lesson: {
      title: "Select Wireless Authentication and Encryption from Risk",
      content: `Wireless security is **environment → auth/encryption choice → safe config → failure layer → verify**. It is not a ranking trivia list of protocol birth years.

**Prior:** \`ap-wireless-tech\` / \`ap-soho-networks\` (radio, SSID, guest/SOHO design) · \`ap-security-measures\` (defense in depth, least privilege) · \`ap-windows-security\` (client firewall profiles, cert warnings). **Later malware topics** are separate — do not substitute them here.

---

## Layered model (don’t collapse them)

Distinguish: radio connection · network discovery · **authentication** · **encryption** · authorization · network access · Internet access · application access.

Seeing an SSID ≠ can authenticate. Authenticating ≠ correct network access. Joining ≠ every app/service works.

---

## Open networks

No network-layer authentication/encryption. Traffic-exposure risk. **Captive portals are not equivalent wireless encryption.** Prefer HTTPS, approved VPN, and trusted apps where policy allows; sensitive work may be inappropriate on untrusted Wi-Fi. Keep firewall/EDR on; avoid auto-join; forget network when done. VPN does **not** make every activity safe.

## WEP / WPA / WPA2 / WPA3

| Mode | Technician framing |
|------|--------------------|
| **WEP** | Legacy/insecure; practical compromise risk; **replace**, don’t “tune” |
| **WPA** | Transitional over WEP; TKIP context; not a modern default |
| **WPA2** | Stronger baseline when configured correctly; AES/CCMP; Personal/Enterprise; still common in mixed environments; needs strong credentials + correct config |
| **WPA3** | Modern improvements; Personal/Enterprise; SAE (intro) improves password-guessing resistance vs older personal modes; compatibility/transition modes matter; **not invulnerable**; doesn’t fix weak admin or untrusted devices |

No attack instructions. No “WEP is fine if the password is long.”

---

## Personal vs Enterprise

**Personal (PSK):** shared passphrase; common in home/small shops; easy deploy; shared-secret risks; hard offboarding; rotate after exposure/staff changes; use strong passphrases.

**Enterprise:** individual identities; central auth; better accountability and user removal; often **802.1X + RADIUS**; certificates/credentials; more infrastructure/support. Enterprise ≠ “only huge corporations.”

## 802.1X / RADIUS (A+ depth)

802.1X = port-based access control. Roles: **supplicant** (client) · **authenticator** (AP/switch) · **authentication server** (often RADIUS). Identity validated before normal access; policy-driven authorization.

**Failure layers:** wrong/expired credentials · cert trust · wrong system time · missing client profile · unsupported EAP method · RADIUS/IdP outage · device compliance · account disabled · AP/controller misconfig. Do not blindly accept cert warnings.

---

## Encryption vs authentication

TKIP (legacy) · AES · CCMP · GCMP (where required). Encryption ≠ authentication. Strong cipher + weak shared password is still risky. Client/AP capability mismatch can prevent join.

## SSID and design security

SSID is an identifier, **not** a password. Hidden SSID ≠ strong security. Default SSIDs may leak vendor info. Use guest / IoT separation · client isolation where supported · protect management interfaces · change admin credentials · firmware updates · disable insecure legacy modes when practical · physical access to gear · config backup. Connect to \`ap-soho-networks\` — don’t re-teach all of SOHO.

## Auth methods (objective set)

PSK · username/password · certificates · MFA in related workflows · captive portal · MAC filtering (weak/supplementary) · WPS · Enterprise identity · device/policy-based access concepts.

**WPS:** convenience with PIN risk — disable when not required; prefer normal secure provisioning. No exploitation steps.

**MAC filtering:** inventory/admin aid; MACs aren’t secret; not strong auth; support overhead; always combine with real auth+encryption.

---

## Rogue / evil twin (defensive awareness)

Rogue AP · evil twin · look-alike SSID · unauthorized hotspot · accidental join · cert warnings · name ambiguity. Verify expected network details.

**Response:** preserve evidence · don’t connect to experiment · verify authorized SSIDs/APs · notify security/network · check managed wireless info · document time/location/SSID/behavior · no public accusation without confirmation. **No operational attack steps.**

## Public Wi-Fi safety

Verify network with staff/approved source · prefer trusted cellular/managed for sensitive work · encrypted services · no auto-connect · Public profile / sharing off · org VPN when required · keep host firewall/EDR · forget network · heed cert/login warnings · don’t send sensitive data if trust unclear.

---

## Troubleshooting model

Isolate: (1) radio/range (2) SSID (3) protocol compatibility (4) auth method (5) credentials (6) cert/time trust (7) cipher mismatch (8) device policy (9) AP policy (10) network authorization (11) DHCP/addressing (12) Internet/service.

| Symptom | Think |
|---------|--------|
| Sees SSID, can’t join | Creds / unsupported mode / cert / account / policy / client profile |
| Joins, no address | DHCP / VLAN-policy / AP-controller / network service |
| Joins, no internal apps | Guest/segment / authz / VPN required / firewall / identity |
| Repeated cert warning | Wrong/rogue net / untrusted cert / clock / bad Enterprise profile — **don’t blindly accept** |

Never disable endpoint security to force a wireless join.

---

## Guided scenarios

1. **SOHO still on WPA + weak PSK** → modern supported mode (WPA2/WPA3), strong creds, change admin password, firmware, guest split, compatibility check, verify.
2. **Corp SSID + cert warning** → clock · expected cert/profile · no bypass · account/device policy · escalate identity/network.
3. **Two café SSIDs look alike** → verify authorized name · no auto-join · Public settings · skip sensitive work if unclear · document if org device involved.
4. **Former employee knew PSK** → rotate passphrase · prefer Enterprise identities · inventory · guest/business split · document.
5. **Legacy device only insecure protocol** → replace/upgrade; if temporary isolated segment approved, compensate — **don’t weaken the main SSID**.
6. **Joined but isolated** → guest/VLAN/compliance/authz/VPN/firewall — not “Wi-Fi broken.”

**What's next.** Malware detection/removal concepts (\`ap-malware\` / AP1202-2.4) when authorized — separate from wireless protocol selection.`,
    },
    lightbulbMoment:
      "Wireless tickets fail by layer — discovery, authentication, encryption, authorization, or addressing — so pick the right protocol and identity model for the risk, and never ‘fix’ trust by accepting surprise certificates or weakening the whole SSID for one old device.",
    keyFacts: [
      "SSID visibility ≠ authentication; join ≠ full network authorization",
      "Open Wi-Fi + captive portal ≠ encrypted wireless",
      "WEP/WPA are legacy; prefer WPA2/WPA3 with correct Personal or Enterprise design",
      "Personal = shared secret risks; Enterprise = individual identity via 802.1X/RADIUS",
      "Encryption ≠ authentication; weak PSK still hurts",
      "Hidden SSID, WPS, and MAC filter are not strong authentication alone",
      "Cert warnings and look-alike SSIDs demand verification — not blind accept",
    ],
    guidedExample: {
      title: "Six wireless-security tickets",
      steps: [
        "Clinic on WPA-TKIP + ‘password123’ → plan WPA2/WPA3 AES, rotate passphrase, guest SSID, firmware, verify joins.",
        "Laptop cert warning on CORP-WIFI → check time + expected profile; escalate; do not click Continue blindly.",
        "Airport ‘Free_Airport_WiFi’ vs ‘Free-Airport-WiFi’ → ask staff/official source; use cellular for sensitive mail.",
        "Contractor left; still knows home-office PSK → rotate immediately; consider Enterprise for staff devices.",
        "Old scanner only speaks WEP → isolate or replace with approval; never turn main SSID back to WEP.",
        "Phone shows Wi-Fi connected but SharePoint fails → guest VLAN/compliance/VPN — not reinstall Office first.",
      ],
    },
    commonMistakes: [
      "Treating hidden SSID as strong security",
      "Keeping WEP for ‘one old printer’ on the main network",
      "Leaving WPS on after setup",
      "Calling MAC filtering real authentication",
      "Accepting unexpected Enterprise certificates",
      "Assuming captive portal encrypts the air",
      "Disabling firewall/AV to join Wi-Fi",
    ],
    examTraps: [
      "Best first upgrade from WEP/WPA",
      "Personal vs Enterprise for offboarding",
      "802.1X role identification (supplicant/authenticator/server)",
      "Cert warning safest response",
      "Join OK / no internal access = segmentation/authz layer",
      "WPS/MAC filter limitations",
    ],
    realWorldScenario:
      "A boutique keeps one WPA2-Personal passphrase on a sticky note. A seasonal hire leaves; POS tablets still connect with the same secret. You rotate the passphrase, move staff devices toward individual Enterprise auth where available, put guests on a separate SSID, and document who approved the change — shared-secret risk fixed without attacking anything.",
    whenThisFails: [
      "If Enterprise auth depends on RADIUS/IdP and many users fail together, escalate network/identity — don’t mass-accept certificates",
      "If a look-alike SSID appears near a site, document and notify security — don’t join to ‘test’",
      "If a legacy device cannot meet modern wireless security, isolate or replace with authorization — don’t weaken the primary SSID",
    ],
    teacherReflectionPrompt:
      "Map one symptom (sees SSID can’t join · joins no DHCP · joins no internal apps · cert warning) to the failure layer and the safest first evidence check.",
    quiz: [
      {
        id: "ap-wireless-security-q1",
        prompt: "A café uses an open SSID plus a captive portal login page. Correct wireless-security framing?",
        choices: [
          { id: "a", text: "Captive portal is not equivalent to wireless encryption — treat the air as untrusted" },
          { id: "b", text: "Captive portal equals WPA3-Enterprise" },
          { id: "c", text: "Open + portal means WEP is unnecessary forever for every network" },
          { id: "d", text: "You should disable the host firewall on public Wi-Fi" },
        ],
        correctChoiceId: "a",
        explanation: "Open networks remain exposed at the wireless layer.",
        objectiveId: "AP1202-2.3",
        difficulty: "easy",
      },
      {
        id: "ap-wireless-security-q2",
        prompt: "Small office still on WPA with a weak shared passphrase. Best first modernization path?",
        choices: [
          { id: "a", text: "Move to supported WPA2/WPA3 with strong credentials, review admin/firmware, consider guest separation — don’t keep WEP/WPA as the plan" },
          { id: "b", text: "Downgrade everyone to WEP for compatibility" },
          { id: "c", text: "Hide the SSID and declare the problem solved" },
          { id: "d", text: "Enable WPS PIN as the primary authentication method" },
        ],
        correctChoiceId: "a",
        explanation: "Risk-based protocol upgrade, not trivia ranking.",
        objectiveId: "AP1202-2.3",
        difficulty: "medium",
      },
      {
        id: "ap-wireless-security-q3",
        prompt: "Former employee knew the shared business Wi-Fi password. Strongest design improvement?",
        choices: [
          { id: "a", text: "Rotate the PSK now; prefer Enterprise individual identities for easier offboarding going forward" },
          { id: "b", text: "Leave the password unchanged because the SSID is hidden" },
          { id: "c", text: "Rely on MAC filtering alone" },
          { id: "d", text: "Disable encryption to simplify joins" },
        ],
        correctChoiceId: "a",
        explanation: "Personal shared-secret risk vs Enterprise accountability.",
        objectiveId: "AP1202-2.3",
        difficulty: "easy",
      },
      {
        id: "ap-wireless-security-q4",
        prompt: "User sees corporate SSID but gets an unexpected certificate warning. Safest response?",
        choices: [
          { id: "a", text: "Verify time/profile/expected certificate; do not blindly accept; escalate identity/network if unclear" },
          { id: "b", text: "Always accept the certificate to restore productivity" },
          { id: "c", text: "Turn off Defender to complete the join" },
          { id: "d", text: "Switch the SSID to WEP temporarily" },
        ],
        correctChoiceId: "a",
        explanation: "Certificate warnings are evidence — including possible wrong/rogue network.",
        objectiveId: "AP1202-2.3",
        difficulty: "easy",
      },
      {
        id: "ap-wireless-security-q5",
        prompt: "In 802.1X wireless, the RADIUS server is typically the:",
        choices: [
          { id: "a", text: "Authentication server validating identity before normal access" },
          { id: "b", text: "Only the Wi-Fi radio antenna" },
          { id: "c", text: "Captive portal HTML file on the laptop" },
          { id: "d", text: "WPS PIN generator" },
        ],
        correctChoiceId: "a",
        explanation: "Supplicant / authenticator / authentication server roles.",
        objectiveId: "AP1202-2.3",
        difficulty: "medium",
      },
      {
        id: "ap-wireless-security-q6",
        prompt: "Device joins Wi-Fi successfully but cannot reach internal file shares. Best layer to investigate first?",
        choices: [
          { id: "a", text: "Authorization/segmentation — guest VLAN, policy, VPN, or firewall — not only radio signal" },
          { id: "b", text: "Always re-enable WEP on the corporate SSID" },
          { id: "c", text: "Disable SmartScreen permanently" },
          { id: "d", text: "Accept all certificates system-wide" },
        ],
        correctChoiceId: "a",
        explanation: "Join ≠ internal authorization.",
        objectiveId: "AP1202-2.3",
        difficulty: "medium",
      },
    ],
    questionBank: [
      {
        id: "ap-wireless-security-b1",
        prompt: "WEP in modern support work:",
        choices: [
          { id: "a", text: "Legacy/insecure — replace rather than tune for secure deployment" },
          { id: "b", text: "Preferred over WPA3 for enterprises" },
          { id: "c", text: "Identical to SAE" },
        ],
        correctChoiceId: "a",
        explanation: "No attack detail needed — replacement mindset.",
        objectiveId: "AP1202-2.3",
        difficulty: "easy",
      },
      {
        id: "ap-wireless-security-b2",
        prompt: "WPA2 Personal versus Enterprise:",
        choices: [
          { id: "a", text: "Personal uses a shared passphrase; Enterprise uses individual identities (often 802.1X/RADIUS)" },
          { id: "b", text: "Enterprise forbids AES" },
          { id: "c", text: "Personal requires a RADIUS farm always" },
        ],
        correctChoiceId: "a",
        explanation: "Core Personal/Enterprise distinction.",
        objectiveId: "AP1202-2.3",
        difficulty: "easy",
      },
      {
        id: "ap-wireless-security-b3",
        prompt: "WPA3 Personal SAE (intro) mainly improves:",
        choices: [
          { id: "a", text: "Resistance to certain password-guessing risks versus older personal modes — still not invulnerable" },
          { id: "b", text: "Automatic WEP compatibility" },
          { id: "c", text: "Removal of all certificates forever" },
        ],
        correctChoiceId: "a",
        explanation: "Modern improvement without overclaiming.",
        objectiveId: "AP1202-2.3",
        difficulty: "medium",
      },
      {
        id: "ap-wireless-security-b4",
        prompt: "Hidden SSID security value:",
        choices: [
          { id: "a", text: "Not strong security — obscurity only; still need real auth/encryption" },
          { id: "b", text: "Equals WPA3-Enterprise" },
          { id: "c", text: "Replaces firmware updates" },
        ],
        correctChoiceId: "a",
        explanation: "Common misconception.",
        objectiveId: "AP1202-2.3",
        difficulty: "easy",
      },
      {
        id: "ap-wireless-security-b5",
        prompt: "WPS should typically be:",
        choices: [
          { id: "a", text: "Disabled when not required due to convenience/PIN risk" },
          { id: "b", text: "The preferred enterprise authentication for all staff" },
          { id: "c", text: "Used instead of rotating exposed PSKs" },
        ],
        correctChoiceId: "a",
        explanation: "WPS limitation — no exploit steps.",
        objectiveId: "AP1202-2.3",
        difficulty: "easy",
      },
      {
        id: "ap-wireless-security-b6",
        prompt: "MAC filtering alone is weak because:",
        choices: [
          { id: "a", text: "MAC addresses are not secret and filtering is not strong authentication" },
          { id: "b", text: "MACs encrypt all traffic automatically" },
          { id: "c", text: "MAC filtering disables DHCP" },
        ],
        correctChoiceId: "a",
        explanation: "Supplementary control only.",
        objectiveId: "AP1202-2.3",
        difficulty: "easy",
      },
      {
        id: "ap-wireless-security-b7",
        prompt: "Look-alike café SSIDs — technician habit?",
        choices: [
          { id: "a", text: "Verify authorized network; don’t auto-join; document suspicious org-device cases — don’t attack or join to experiment" },
          { id: "b", text: "Stand up your own evil twin to test users" },
          { id: "c", text: "Capture handshakes from strangers" },
        ],
        correctChoiceId: "a",
        explanation: "Defensive evil-twin awareness.",
        objectiveId: "AP1202-2.3",
        difficulty: "medium",
      },
      {
        id: "ap-wireless-security-b8",
        prompt: "Legacy device only supports insecure wireless — approved compensating approach?",
        choices: [
          { id: "a", text: "Isolate/replace with authorization — do not weaken the main production SSID" },
          { id: "b", text: "Force the whole company onto WEP" },
          { id: "c", text: "Disable all guest separation" },
        ],
        correctChoiceId: "a",
        explanation: "Compatibility without sacrificing the primary network.",
        objectiveId: "AP1202-2.3",
        difficulty: "medium",
      },
      {
        id: "ap-wireless-security-b9",
        prompt: "AES/CCMP in WPA2 context (recognition):",
        choices: [
          { id: "a", text: "Modern cipher suite associated with properly configured WPA2 — not TKIP-era defaults" },
          { id: "b", text: "Proof the network is open" },
          { id: "c", text: "A captive portal brand name" },
        ],
        correctChoiceId: "a",
        explanation: "Encryption recognition without crypto math.",
        objectiveId: "AP1202-2.3",
        difficulty: "easy",
      },
      {
        id: "ap-wireless-security-b10",
        prompt: "Which earlier networking concepts support secure wireless configuration?",
        choices: [
          { id: "a", text: "Wireless standards, encryption modes, and SOHO router administration" },
          { id: "b", text: "Printer fuser replacement" },
          { id: "c", text: "Motherboard socket selection" },
        ],
        correctChoiceId: "a",
        explanation: "Referral ladder.",
        objectiveId: "AP1202-2.3",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ap-wireless-security-f1",
        front: "See SSID ≠ ?",
        back: "Not the same as authenticated / authorized access",
      },
      {
        id: "ap-wireless-security-f2",
        front: "Captive portal = encrypted Wi-Fi?",
        back: "No — open air remains untrusted",
      },
      {
        id: "ap-wireless-security-f3",
        front: "Personal vs Enterprise?",
        back: "Shared PSK vs individual identity (often 802.1X/RADIUS)",
      },
      {
        id: "ap-wireless-security-f4",
        front: "WEP/WPA modern default?",
        back: "No — replace; prefer WPA2/WPA3 correctly configured",
      },
      {
        id: "ap-wireless-security-f5",
        front: "Cert warning on Wi-Fi?",
        back: "Verify — never blindly accept",
      },
      {
        id: "ap-wireless-security-f6",
        front: "WPS / MAC filter?",
        back: "Not strong authentication alone",
      },
      {
        id: "ap-wireless-security-f7",
        front: "Joined but no internal apps?",
        back: "Guest/segment/authz/VPN/firewall layer",
      },
    ],
    assignments: [
      {
        id: "ap-lab-wireless-security-review",
        title: "Wireless-security configuration review",
        type: "external-lab",
        externalResourceId: "windows-11-pc",
        instructions: `Fictional environments only. No real router changes, password attacks, packet capture, deauth, rogue APs, or public Wi-Fi testing.

For each site, record: Current risk · Correct protocol/authentication choice · Immediate safe correction · Compatibility concern · Verification · Escalation/approval owner.

Site A — "Bloom Clinic" SOHO
- Security: WPA (TKIP), Personal, passphrase "clinic2020"
- SSID: NETGEAR95 (default-ish), WPS: On
- Admin password: still default vendor
- Guest: none · IoT cameras on same SSID · Firmware: 18 months old
- Client isolation: Off

Site B — "Contoso Floor 3"
- Security: WPA2-Enterprise (AES/CCMP), 802.1X/RADIUS
- User report: certificate warning on join; laptop clock 3 days slow
- Device compliance: Unknown
- Guest SSID separate: Yes

Site C — "Harbor Café (org laptop)"
- Two SSIDs: Harbor_Guest and Harbor-Guest
- Open + captive portal on both names (unknown which is official)
- Windows network profile: previously set Private by user
- User wants to open payroll files locally cached

Also triage three failures without offensive steps:
1) Sees SSID, cannot join
2) Joins, APIPA/no DHCP
3) Joins guest, cannot reach file server

Boundaries: do not recommend WEP on production SSIDs, WPS as primary auth, MAC-filter-only security, cert bypass, or disabling endpoint protection.`,
        estimatedMinutes: 28,
        completionCriteria: [
          "Complete review tables for Sites A–C",
          "Document failure-layer notes for the three symptoms",
          "No offensive or control-weakening recommendations",
        ],
        relatedTopicIds: [
          "ap-wireless-security",
          "ap-wireless-tech",
          "ap-soho-networks",
          "ap-security-measures",
        ],
        order: 1,
      },
    ],
    externalResources: [WINDOWS_11_PC_RESOURCE],
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    estimatedStudyMinutes: 50,
    difficulty: "medium",
  },
];
