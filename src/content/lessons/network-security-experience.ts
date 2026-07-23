import type { TopicExperience } from "@/content/types";

/** LES experience — Network Security (Wave 5 / Domain 5 Security Fundamentals). */
export const NETWORK_SECURITY_EXPERIENCE: TopicExperience = {
  anchor: { type: "tcp-ip-stack" },
  screens: [
    {
      id: "intro-why",
      type: "hero",
      tcpLayer: 1,
      headline: "Protect the network on purpose.",
      body: "Security is not one product. It is goals (what to protect), layered controls (how), and awareness of common threats — so one failure does not open everything.",
      media: {
        kind: "icons",
        items: [
          { icon: "shield", label: "Controls" },
          { icon: "lock", label: "CIA goals" },
        ],
      },
      terms: [
        {
          id: "cia",
          label: "CIA triad",
          tier: "basics",
          shortDefinition:
            "Three classic security goals — the next screen spells each one out.",
        },
      ],
    },
    {
      id: "cia-triad",
      type: "teach",
      tcpLayer: 1,
      headline: "CIA triad.",
      body: "Confidentiality keeps data secret. Integrity keeps data unaltered. Availability keeps systems usable when needed. Exam questions often swap these words — nail each one.",
      terms: [
        {
          id: "confidentiality",
          label: "Confidentiality",
          tier: "basics",
          shortDefinition: "Only authorized parties can read the data (secrets stay secret).",
        },
        {
          id: "integrity",
          label: "Integrity",
          tier: "basics",
          shortDefinition: "Data and systems are not improperly changed or corrupted.",
        },
        {
          id: "availability",
          label: "Availability",
          tier: "basics",
          shortDefinition: "Authorized users can reach services when they need them.",
        },
      ],
    },
    {
      id: "cia-check",
      type: "checkpoint",
      tcpLayer: 1,
      headline: "Quick check — CIA",
      checkpointQuestionId: "network-security-q1",
    },
    {
      id: "defense-in-depth",
      type: "teach",
      tcpLayer: 1,
      headline: "Defense in depth.",
      body: "Stack multiple controls — physical, network, host, application — so a single firewall miss or weak password does not equal total compromise. Overlap is intentional.",
      terms: [
        {
          id: "defense-in-depth",
          label: "Defense in depth",
          tier: "basics",
          shortDefinition:
            "Multiple overlapping security layers so one failure does not doom the system.",
        },
      ],
    },
    {
      id: "did-check",
      type: "checkpoint",
      tcpLayer: 1,
      headline: "Quick check — defense in depth",
      checkpointQuestionId: "network-security-q4",
    },
    {
      id: "threats-high",
      type: "teach",
      tcpLayer: 1,
      headline: "Threats at a high level.",
      body: "Phishing tricks people into giving credentials. Unauthorized access is someone on the network who should not be. Know these by idea — deep attack catalogs wait.",
      terms: [
        {
          id: "phishing",
          label: "Phishing",
          tier: "basics",
          shortDefinition:
            "Social engineering via deceptive messages that steal credentials or access.",
        },
        {
          id: "unauthorized-access",
          label: "Unauthorized access",
          tier: "basics",
          shortDefinition:
            "A user or device using resources without permission — physical or logical.",
        },
      ],
    },
    {
      id: "firewalls-stateful",
      type: "teach",
      tcpLayer: 2,
      headline: "Firewalls track sessions.",
      body: "A stateful firewall remembers connection state so return traffic for allowed sessions can pass. That is richer than a simple per-packet ACL alone.",
      terms: [
        {
          id: "firewall",
          label: "Firewall",
          tier: "basics",
          shortDefinition:
            "Device or software that permits/denies traffic based on policy between zones.",
        },
        {
          id: "stateful",
          label: "Stateful inspection",
          tier: "basics",
          shortDefinition:
            "Firewall tracks session state so related return traffic can be allowed intelligently.",
        },
      ],
    },
    {
      id: "port-security",
      type: "teach",
      tcpLayer: 1,
      headline: "Port security limits MACs.",
      body: "On a switch access port, port security caps how many MAC addresses may use the port. Sticky learning can remember the office laptop’s MAC without typing it by hand.",
      terms: [
        {
          id: "port-security",
          label: "Port security",
          tier: "basics",
          shortDefinition:
            "Switch feature that limits which MAC addresses may use an access port.",
        },
        {
          id: "mac",
          label: "MAC",
          tier: "basics",
          shortDefinition:
            "Media Access Control address — Layer 2 hardware identity on the wire.",
          example: "00:1A:2B:3C:4D:5E",
        },
        {
          id: "sticky-mac",
          label: "Sticky MAC",
          tier: "basics",
          shortDefinition:
            "Dynamically learned MAC that port security can save into the running config.",
        },
      ],
    },
    {
      id: "port-sec-check",
      type: "checkpoint",
      tcpLayer: 1,
      headline: "Quick check — port security",
      checkpointQuestionId: "network-security-q3",
    },
    {
      id: "violation-shutdown",
      type: "teach",
      tcpLayer: 1,
      headline: "Violation: shutdown (light).",
      body: "A common violation mode is shutdown: the port err-disables when an unauthorized MAC appears. Ops then clear/restore the port after investigating — know the idea, not every mode table.",
      laterLearn: ["Full protect / restrict / shutdown comparison drills"],
    },
    {
      id: "dot1x",
      type: "teach",
      tcpLayer: 1,
      headline: "802.1X — who are you?",
      body: "802.1X is port-based network access control. The switch waits for authentication before fully opening the port onto the LAN — identity first, then access.",
      terms: [
        {
          id: "8021x",
          label: "802.1X",
          tier: "basics",
          shortDefinition:
            "Port-based NAC — authenticate a user/device before granting LAN access.",
        },
      ],
      studyTip: {
        title: "Exam tip",
        body: "802.1X ≠ 802.1Q (VLAN tagging).",
      },
    },
    {
      id: "dot1x-check",
      type: "checkpoint",
      tcpLayer: 1,
      headline: "Quick check — 802.1X",
      checkpointQuestionId: "network-security-q2",
    },
    {
      id: "vpn-ipsec",
      type: "teach",
      tcpLayer: 2,
      headline: "VPN / IPsec purpose.",
      body: "VPNs protect traffic over untrusted paths. IPsec provides encrypted, authenticated tunnels for site-to-site or remote access — privacy and integrity on the wire.",
      terms: [
        {
          id: "vpn",
          label: "VPN",
          tier: "basics",
          shortDefinition:
            "Virtual Private Network — private connectivity over a shared/untrusted network.",
        },
        {
          id: "ipsec",
          label: "IPsec",
          tier: "basics",
          shortDefinition:
            "Suite for encrypting and authenticating IP traffic (often used for VPNs).",
        },
      ],
    },
    {
      id: "wpa-light",
      type: "teach",
      tcpLayer: 1,
      headline: "Wireless crypto — WPA2/WPA3.",
      body: "Wired port security is not Wi-Fi encryption. WPA2 and WPA3 protect wireless airtime traffic; WPA3 strengthens the handshake versus older WPA2-PSK weaknesses.",
      terms: [
        {
          id: "wpa3",
          label: "WPA3",
          tier: "basics",
          shortDefinition:
            "Modern Wi-Fi security with stronger handshake/encryption than WPA2.",
        },
      ],
    },
    {
      id: "wpa-check",
      type: "checkpoint",
      tcpLayer: 1,
      headline: "Quick check — WPA3",
      checkpointQuestionId: "network-security-q5",
    },
    {
      id: "syslog-severity",
      type: "teach",
      tcpLayer: 4,
      headline: "Syslog: 0 is most severe.",
      body: "Syslog severity 0 means emergency — the most critical level. You do not need the full 0–7 laundry list for CCNA basics; remember that lower numbers are worse.",
      terms: [
        {
          id: "syslog",
          label: "Syslog",
          tier: "basics",
          shortDefinition:
            "Logging protocol/messages for device events — severity 0 is emergency.",
        },
      ],
      laterLearn: ["Full severity 0–7 mnemonic lists"],
    },
    {
      id: "not-one-box",
      type: "misconception",
      tcpLayer: 1,
      headline: "One firewall is not enough.",
      body: "A “strong perimeter only” mindset fails defense in depth. Port security, 802.1X, ACLs, patching, and user awareness each catch failures others miss.",
    },
    {
      id: "defer-depth",
      type: "teach",
      tcpLayer: 1,
      headline: "What we defer.",
      body: "Deep DAI and DHCP snooping configs, IPS signature catalogs, and full syslog severity tables wait. Today: CIA, defense in depth, threats, stateful firewalls, port security, 802.1X, VPN/IPsec light.",
      laterLearn: [
        "DHCP snooping trusted/untrusted deep config",
        "DAI binding-table labs",
        "IPS signature detail",
      ],
      terms: [
        {
          id: "dhcp-snooping",
          label: "DHCP snooping",
          tier: "later",
          shortDefinition:
            "Filters rogue DHCP offers on switches — concept later; config deferred.",
          laterItems: ["Trusted vs untrusted ports", "Binding table"],
        },
        {
          id: "dai",
          label: "DAI",
          tier: "later",
          shortDefinition:
            "Dynamic ARP Inspection — validates ARP against bindings; deep config deferred.",
          laterItems: ["Depends on DHCP snooping bindings"],
        },
      ],
    },
    {
      id: "summary",
      type: "summary",
      tcpLayer: 1,
      headline: "Network security covered.",
      body: "You can explain CIA, defense in depth, high-level threats, stateful firewalls, port security (sticky/MAC limit, shutdown light), 802.1X, VPN/IPsec purpose, WPA2/WPA3 light, and syslog 0 = emergency.",
    },
  ],
};
