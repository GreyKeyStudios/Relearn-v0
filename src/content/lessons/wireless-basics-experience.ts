import type { StudyTip, TopicExperience } from "@/content/types";

const WIRELESS_RECALL_TIP: StudyTip = {
  title: "Wireless quick recall",
  body:
    "802.11 = Wi-Fi · 802.3 = Ethernet · SSID = name · 1/6/11 = 2.4 GHz channels · WPA2/WPA3 = encrypt · AP = bridge to wired · CSMA/CA = wireless access",
};

/** LES experience — 802.11 WLAN fundamentals (Wave 1 capstone). */
export const WIRELESS_BASICS_EXPERIENCE: TopicExperience = {
  anchor: { type: "osi-stack" },
  screens: [
    {
      id: "intro-why",
      type: "hero",
      osiLayer: 1,
      headline: "Wi-Fi — LAN without cables.",
      body: "Wireless LANs do the same job as Ethernet: connect devices on a local network. Instead of copper or fiber, data rides radio waves. Same stack you have been building — new medium, new standard.",
    },
    {
      id: "bridge-ethernet",
      type: "teach",
      osiLayer: 2,
      headline: "Ethernet, but over the air.",
      body: "In the Ethernet lesson you learned frames, MAC addresses, and switches on wired 802.3. Wi-Fi is IEEE 802.11 — Layer 2 over radio instead of cable. IP packets still ride inside; only the access method changes.",
      terms: [
        {
          id: "mac",
          label: "MAC address",
          tier: "basics",
          shortDefinition: "Layer 2 address — still used on Wi-Fi; from your Ethernet lesson.",
        },
        {
          id: "frame",
          label: "Frame",
          tier: "basics",
          shortDefinition: "Layer 2 container — Wi-Fi has its own frame format, same role as Ethernet.",
        },
      ],
    },
    {
      id: "not-just-no-cable",
      type: "teach",
      osiLayer: 2,
      headline: "Not just Ethernet without a cable.",
      body: "Wired Ethernet gives each link its own wire — a private hallway between two devices. Wi-Fi puts every client in one room sharing the same air — like a conference where only one person should talk at a time. That shared medium changes everything.",
      media: {
        kind: "icons",
        items: [
          { icon: "cable", label: "Dedicated wire" },
          { icon: "wifi", label: "Shared air" },
        ],
      },
      studyTip: {
        title: "Why this matters",
        body: "Shared air drives contention, interference, channel planning, roaming, and retransmissions — not just “no cable.”",
      },
    },
    {
      id: "standard-80211",
      type: "teach",
      osiLayer: 2,
      headline: "IEEE 802.11.",
      body: "802.11 is the family of standards for wireless LANs — what consumers call Wi-Fi. CCNA expects you to recognize 802.11 vs wired 802.3 Ethernet and vs 802.1X (enterprise port authentication — different number).",
      terms: [
        {
          id: "80211",
          label: "802.11",
          tier: "basics",
          shortDefinition: "IEEE wireless LAN standard — Wi-Fi.",
        },
      ],
    },
    {
      id: "std-check",
      type: "checkpoint",
      osiLayer: 2,
      headline: "Quick check — 802.11",
      checkpointQuestionId: "wireless-basics-q1",
    },
    {
      id: "trap-8023",
      type: "misconception",
      osiLayer: 2,
      headline: "Trap: 802.3 is not Wi-Fi.",
      body: "802.3 = wired Ethernet. 802.11 = wireless. Exam distractors love swapping them. 802.1Q is VLAN tagging; 802.1X is port/network authentication — also not the Wi-Fi standard itself.",
    },
    {
      id: "ap-role",
      type: "teach",
      osiLayer: 2,
      headline: "Access point — the bridge.",
      body: "An access point (AP) connects wireless clients to the wired LAN — it bridges radio to Ethernet. Your phone talks to the AP over Wi-Fi; the AP forwards frames onto the switch. APs are not WAN routers.",
      terms: [
        {
          id: "ap",
          label: "Access point (AP)",
          tier: "basics",
          shortDefinition: "Bridges wireless clients to the wired infrastructure.",
        },
      ],
      media: {
        kind: "flow",
        items: [
          { icon: "wifi", label: "Phone" },
          { icon: "radio", label: "AP" },
          { icon: "switch", label: "Switch" },
        ],
      },
    },
    {
      id: "ap-check",
      type: "checkpoint",
      osiLayer: 2,
      headline: "Quick check — AP role",
      checkpointQuestionId: "wireless-basics-q5",
    },
    {
      id: "ssid",
      type: "teach",
      osiLayer: 2,
      headline: "SSID — the network name.",
      body: "SSID (Service Set Identifier) is the human-readable name you pick from a Wi-Fi list — HomeNetwork, CoffeeShop_Guest, etc. It tells clients which wireless network to join.",
      terms: [
        {
          id: "ssid",
          label: "SSID",
          tier: "basics",
          shortDefinition: "Service Set Identifier — the wireless network name broadcast by an AP.",
        },
      ],
    },
    {
      id: "ssid-check",
      type: "checkpoint",
      osiLayer: 2,
      headline: "Quick check — SSID",
      checkpointQuestionId: "wireless-basics-q2",
    },
    {
      id: "bssid-vs-ssid",
      type: "teach",
      osiLayer: 2,
      headline: "SSID vs BSSID.",
      body: "SSID is the network name — many APs can share one SSID (same Wi-Fi name everywhere). BSSID (Basic Service Set Identifier) is the MAC address of one AP's radio — unique per access point. You pick an SSID; the BSSID tells devices which AP they reached.",
      terms: [
        {
          id: "bssid",
          label: "BSSID",
          tier: "basics",
          shortDefinition:
            "Basic Service Set Identifier — the MAC address of one AP radio; unique per access point.",
        },
      ],
    },
    {
      id: "ssid-not-security",
      type: "misconception",
      osiLayer: 2,
      headline: "SSID is not security.",
      body: "Hiding or renaming an SSID does not encrypt traffic. Security comes from WPA2 or WPA3 — not the network name. A hidden SSID only obscures the label; threat actors can still find and probe it.",
      studyTip: {
        title: "Encryption, not the name",
        body: "WEP and early WPA are obsolete. WPA2 is today's standard; WPA3 is the upgrade path replacing it. Next cards cover how — enterprise 802.1X goes deeper in the security section.",
      },
    },
    {
      id: "bands",
      type: "teach",
      osiLayer: 1,
      headline: "2.4 GHz vs 5 GHz vs 6 GHz.",
      body: "A frequency band is a range of radio spectrum — 2.4 GHz, 5 GHz, and 6 GHz are three different bands. 2.4 travels farther but shares crowded air (microwaves, Bluetooth). 5 and 6 GHz offer more channels and speed at shorter range.",
      terms: [
        {
          id: "band",
          label: "Frequency band",
          tier: "basics",
          shortDefinition:
            "A section of the radio dial — e.g. 2.4 GHz band vs 5 GHz band. Like FM vs AM on a radio.",
        },
      ],
      studyTip: {
        title: "Exam trade-off",
        body: "2.4 = range · 5/6 GHz = speed and capacity. Channel planning on 2.4 GHz comes next — only 1, 6, and 11 avoid overlap.",
      },
    },
    {
      id: "what-is-channel",
      type: "teach",
      osiLayer: 1,
      headline: "What is a Wi-Fi channel?",
      body: "Inside a band, a channel is a 20 MHz-wide slice the AP transmits on — like one lane on a highway. Channel numbers (1, 6, 11) are labels, not MHz values. Too many APs on overlapping lanes cause interference.",
      media: { kind: "wifi-channel-dial", showOverlap: false },
      terms: [
        {
          id: "channel",
          label: "Wi-Fi channel",
          tier: "basics",
          shortDefinition:
            "A numbered slice of the 2.4 or 5 GHz band — usually 20 MHz wide per channel.",
        },
        {
          id: "mhz",
          label: "MHz (megahertz)",
          tier: "basics",
          shortDefinition:
            "Millions of radio cycles per second — 20 MHz means the channel occupies 20 MHz of spectrum width.",
        },
      ],
    },
    {
      id: "channels-1-6-11",
      type: "memory",
      osiLayer: 1,
      headline: "Channels 1, 6, and 11.",
      body: "On 2.4 GHz, channels are numbered 1, 2, 3… but centers sit only 5 MHz apart while each channel is 20 MHz wide — so neighbors overlap. In North America, only 1, 6, and 11 are non-overlapping. Plan APs like subnet blocks.",
      media: { kind: "wifi-channel-dial", showOverlap: true },
      studyTip: {
        title: "Not 1 MHz vs 6 MHz",
        body: "Channel 6 is the sixth slot (~20 MHz wide), not 6 MHz. Slots 1, 6, and 11 are five numbers apart — far enough that the wide bands do not collide. Europe/Japan allow different sets; CCNA usually tests North America.",
      },
    },
    {
      id: "channels-check",
      type: "checkpoint",
      osiLayer: 1,
      headline: "Quick check — 2.4 GHz channels",
      checkpointQuestionId: "wireless-basics-q3",
    },
    {
      id: "interference-why",
      type: "teach",
      osiLayer: 1,
      headline: "Why wireless interferes more.",
      body: "Wired Ethernet has its own cable — noise on your neighbor's link does not affect yours. Wi-Fi shares open air: other APs, microwaves, Bluetooth, thick walls, and distance all weaken or collide with your signal. Basement and garage drops are usually signal, not IP.",
    },
    {
      id: "csma-ca",
      type: "teach",
      osiLayer: 2,
      headline: "CSMA/CA — listen before talk.",
      body: "Because air is shared, wireless is half-duplex — devices cannot transmit and listen at once on the same channel. 802.11 uses CSMA/CA (Collision Avoidance): listen first, back off if busy. Wired Ethernet mostly avoided this with dedicated wires.",
      terms: [
        {
          id: "csmaca",
          label: "CSMA/CA",
          tier: "basics",
          shortDefinition:
            "Carrier Sense Multiple Access with Collision Avoidance — wireless medium access.",
        },
      ],
    },
    {
      id: "security-evolution",
      type: "teach",
      osiLayer: 2,
      headline: "WEP is dead — use WPA2/WPA3.",
      body: "Old chain: WEP (broken) → WPA → WPA2 (AES, today's default). Deploy WPA2 or WPA3 — never WEP. WPA3 is gradually replacing WPA2. Home Wi-Fi uses a passphrase (PSK); enterprise uses 802.1X — security section later.",
      terms: [
        {
          id: "wpa",
          label: "WPA",
          tier: "basics",
          shortDefinition:
            "Wi-Fi Protected Access — replaced WEP; superseded by WPA2. Do not deploy today.",
        },
        {
          id: "wpa2",
          label: "WPA2",
          tier: "basics",
          shortDefinition: "Wi-Fi Protected Access 2 — AES encryption; current standard on most networks.",
        },
        {
          id: "wpa3",
          label: "WPA3",
          tier: "basics",
          shortDefinition:
            "Successor to WPA2 — stronger encryption and SAE handshake; the upgrade path.",
        },
        {
          id: "wep",
          label: "WEP",
          tier: "basics",
          shortDefinition: "Wired Equivalent Privacy — obsolete; easily cracked.",
        },
      ],
    },
    {
      id: "wep-why-broken",
      type: "misconception",
      osiLayer: 2,
      headline: "Why WEP failed.",
      body: "WEP used weak, outdated encryption with short keys that repeat. Attack tools can crack it in minutes — not years. That is why WPA replaced it, then WPA2 and WPA3. CCNA idea: broken encryption, not just “old.”",
    },
    {
      id: "wpa3-detail",
      type: "memory",
      osiLayer: 2,
      headline: "Why WPA3 matters.",
      body: "When you join Wi-Fi, your device and AP exchange a login sequence (handshake). Attackers can record it and guess your password offline. WPA3's SAE makes that guess-work much harder — CCNA answer: stronger encryption and attack resistance.",
      terms: [
        {
          id: "handshake",
          label: "Handshake",
          tier: "basics",
          shortDefinition:
            "The short login exchange when you join Wi-Fi — proves you know the password.",
        },
        {
          id: "sae",
          label: "SAE",
          tier: "basics",
          shortDefinition:
            "Simultaneous Authentication of Equals — WPA3 key exchange; resists offline password guessing.",
        },
      ],
    },
    {
      id: "open-wifi",
      type: "misconception",
      osiLayer: 2,
      headline: "Avoid open Wi-Fi.",
      body: "Open Wi-Fi has no password and no encryption — anyone nearby can join. You share the same local network as strangers; unencrypted traffic can be observed. Use WPA2/WPA3 at home; avoid open networks for banking or work unless you use a VPN.",
    },
    {
      id: "wpa-check",
      type: "checkpoint",
      osiLayer: 2,
      headline: "Quick check — WPA3",
      checkpointQuestionId: "wireless-basics-q4",
    },
    {
      id: "wifi-generations",
      type: "memory",
      osiLayer: 1,
      headline: "Wi-Fi 4, 5, and 6.",
      body: "IEEE writes 802.11 letters; the Wi-Fi Alliance sells friendly marketing names. n = Wi-Fi 4 · ac = Wi-Fi 5 · ax = Wi-Fi 6. n added MIMO (multiple antennas for speed). ax added OFDMA (many devices share one channel efficiently).",
      terms: [
        {
          id: "mimo",
          label: "MIMO",
          tier: "basics",
          shortDefinition:
            "Multiple Input Multiple Output — multiple antennas send/receive for higher throughput (802.11n+).",
        },
        {
          id: "ofdma",
          label: "OFDMA",
          tier: "basics",
          shortDefinition:
            "Orthogonal Frequency Division Multiple Access — Wi-Fi 6 shares channel time across many clients.",
        },
      ],
      studyTip: {
        title: "802.11 → Wi-Fi name",
        body: "802.11n → Wi-Fi 4 · 802.11ac → Wi-Fi 5 · 802.11ax → Wi-Fi 6. Exam may use either name.",
      },
      laterLearn: ["OFDMA scheduling details", "MIMO spatial streams", "Wi-Fi 6E and 6 GHz"],
    },
    {
      id: "roaming",
      type: "teach",
      osiLayer: 2,
      headline: "Roaming between APs.",
      body: "Roaming is when your device moves from one AP's coverage to another while staying connected — same SSID, different BSSID. Your phone picks the stronger AP as you walk. Offices use many APs with one network name so you do not drop calls mid-hallway.",
    },
    {
      id: "troubleshoot-basics",
      type: "memory",
      osiLayer: 2,
      headline: "Troubleshoot Wi-Fi first steps.",
      body: "Slow in one room? Signal first: distance, walls, wrong band (5 GHz does not reach far). Then channel congestion and wrong password. Ethernet works but Wi-Fi fails — check wireless signal and auth at Layer 1–2 before jumping to Layer 3 IP.",
      studyTip: {
        title: "See network, cannot connect?",
        body: "SSID visible means the AP is broadcasting — start with the passphrase, WPA mode, or captive portal, not the routing table.",
      },
    },
    {
      id: "wlc-defer",
      type: "memory",
      osiLayer: 2,
      headline: "Controllers — for later.",
      body: "Large deployments use lightweight APs managed by a wireless LAN controller (WLC). Autonomous APs work alone; lightweight APs get config from the WLC. CCNA basics: know the AP bridges wireless to wired — controller depth comes later.",
      terms: [
        {
          id: "wlc",
          label: "WLC",
          tier: "later",
          shortDefinition:
            "Wireless LAN Controller — central management for multiple lightweight APs.",
        },
        {
          id: "8021x",
          label: "802.1X",
          tier: "later",
          shortDefinition:
            "Port-based network access control — enterprise Wi-Fi auth with RADIUS.",
        },
      ],
    },
    {
      id: "recall-table",
      type: "memory",
      osiLayer: 2,
      headline: "Your recall table.",
      body: "802.11 vs 802.3 · SSID = name · BSSID = AP MAC · 1/6/11 · WPA2/WPA3 · AP bridges to wired · shared air + CSMA/CA.",
      studyTip: WIRELESS_RECALL_TIP,
      media: { kind: "wireless-recall-table" },
    },
    {
      id: "summary",
      type: "summary",
      osiLayer: 2,
      headline: "Wireless basics covered.",
      body: "Wave 1 network fundamentals complete. You know how Wi-Fi fits Layer 1–2 alongside Ethernet. Next domain: Network Access — switching, VLANs, trunking, and STP.",
    },
  ],
};
