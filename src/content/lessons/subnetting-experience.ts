import type { TopicExperience } from "@/content/types";

/** LES experience — block-first subnetting, borrowing, binary why, VLSM (Wave 1). */
export const SUBNETTING_EXPERIENCE: TopicExperience = {
  anchor: { type: "tcp-ip-stack" },
  screens: [
    {
      id: "intro-why",
      type: "hero",
      tcpLayer: 2,
      headline: "Why subnet a network?",
      body: "One large IP network can waste addresses and create one big broadcast domain. Subnetting splits it into smaller pieces so each department or site gets its own range with the right size.",
      terms: [
        {
          id: "subnet",
          label: "Subnet",
          tier: "basics",
          shortDefinition:
            "A smaller subdivision of an IP network — devices in the same subnet share a network portion.",
        },
      ],
    },
    {
      id: "intro-bridge",
      type: "teach",
      tcpLayer: 2,
      headline: "Subnetting builds on IPv4.",
      body: "In IPv4 addressing you learned network vs host portions, /24 masks, and why 255.255.255.0 looks that way. Subnetting uses those ideas to divide one block into many smaller subnets.",
      terms: [
        {
          id: "mask",
          label: "Subnet mask",
          tier: "basics",
          shortDefinition:
            "Shows where the network portion ends and the host portion begins — e.g. /24 or 255.255.255.0.",
        },
        {
          id: "cidr",
          label: "CIDR",
          tier: "basics",
          shortDefinition:
            "Classless Inter-Domain Routing — prefix notation like /24 instead of old classful-only sizing.",
        },
      ],
    },
    {
      id: "block-halving",
      type: "teach",
      tcpLayer: 2,
      headline: "One idea to start.",
      body: "/24 means 256 addresses in the changing octet. Every time the slash number goes up by 1, the subnet size gets cut in half. Memorize that pattern before anything else.",
      studyTip: {
        title: "Halving rule",
        body: "/24=256 · /25=128 · /26=64 · /27=32 · /28=16 · /29=8 · /30=4. Each +1 on the slash halves the block.",
      },
    },
    {
      id: "block-table",
      type: "teach",
      tcpLayer: 2,
      headline: "Block-size cheat table.",
      body: "Look up the prefix, get the block size. Usable hosts = total addresses − 2 (network and broadcast reserved). Skip /31 and /32 until later.",
      studyTip: {
        title: "Memorize this",
        body: "/24→256 (254 usable) · /25→128 (126) · /26→64 (62) · /27→32 (30) · /28→16 (14) · /29→8 (6) · /30→4 (2).",
      },
    },
    {
      id: "block-first-rule",
      type: "hero",
      tcpLayer: 2,
      headline: "Find the block first.",
      body: "Do not jump to network or broadcast first. Do not start with binary. Find which block the IP lives in — then network, broadcast, and usable hosts fall out automatically.",
    },
    {
      id: "cheat-order",
      type: "teach",
      tcpLayer: 2,
      headline: "Subnetting order — every time.",
      body: "1) Prefix → block size from table · 2) Count by block size in the changing octet · 3) Which block contains the IP? · 4) Network = start of block · 5) Broadcast = one before next block · 6) First host = network + 1 · 7) Last host = broadcast − 1.",
      studyTip: {
        title: "Killer question",
        body: "Which block does this IP live in? — not “what’s the broadcast?” first.",
      },
    },
    {
      id: "network-addr",
      type: "teach",
      tcpLayer: 2,
      headline: "Network address.",
      body: "The network address is the lowest address in a subnet — the start of the block. You cannot assign it to a PC. Example: in 192.168.1.64/26, the network is 192.168.1.64.",
      terms: [
        {
          id: "network-addr",
          label: "Network address",
          tier: "basics",
          shortDefinition:
            "Start of the block — lowest address in the subnet. Identifies the subnet, not a device.",
        },
      ],
    },
    {
      id: "broadcast-addr",
      type: "teach",
      tcpLayer: 2,
      headline: "Broadcast address.",
      body: "The broadcast address is the highest address in the block — one below where the next subnet would start. Traffic sent to it reaches every device on that subnet. You cannot assign it to a PC.",
      terms: [
        {
          id: "broadcast-addr",
          label: "Broadcast address",
          tier: "basics",
          shortDefinition:
            "End of the block — one address below the next boundary. Means “everyone on this LAN.”",
        },
      ],
    },
    {
      id: "usable-range",
      type: "teach",
      tcpLayer: 2,
      headline: "First and last usable hosts.",
      body: "Usable hosts sit between network and broadcast. In 192.168.1.64/26: network .64, first host .65, last host .126, broadcast .127. Network and broadcast are reserved.",
      media: {
        kind: "flow",
        items: [
          { icon: "server", label: ".64 network" },
          { icon: "monitor", label: ".65 – .126 hosts" },
          { icon: "network", label: ".127 broadcast" },
        ],
      },
    },
    {
      id: "network-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — network address",
      checkpointQuestionId: "subnetting-q5",
    },
    {
      id: "which-block-worked",
      type: "teach",
      tcpLayer: 2,
      headline: "Worked example: 192.168.1.90/26.",
      body: "/26 → block size 64. Blocks: 0–63, 64–127, 128–191, 192–255. Ninety is in 64–127. Network 192.168.1.64 · first host .65 · last host .126 · broadcast .127.",
      media: {
        kind: "flow",
        items: [
          { icon: "layers", label: "/26 = 64" },
          { icon: "server", label: "90 in 64–127" },
          { icon: "monitor", label: "net .64 bcast .127" },
        ],
      },
    },
    {
      id: "worked-45-27",
      type: "teach",
      tcpLayer: 2,
      headline: "Worked example: 192.168.1.45/27.",
      body: "/27 → block size 32. Near 45: blocks 32–63 and 64–95. Forty-five is in 32–63. Network 192.168.1.32 · broadcast 192.168.1.63 · hosts .33–.62.",
    },
    {
      id: "worked-200-28",
      type: "teach",
      tcpLayer: 2,
      headline: "Worked example: 192.168.1.200/28.",
      body: "/28 → block size 16. Two hundred is near 192 — check 192–207 and 208–223. Two hundred is in 192–207. Network 192.168.1.192 · broadcast 192.168.1.207 · hosts .193–.206.",
      studyTip: {
        title: "Do not mix problems",
        body: "/28 blocks are chunks of 16 — not a whole /24. Lock in the prefix before you look at the IP.",
      },
    },
    {
      id: "hosts-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — /26 hosts",
      checkpointQuestionId: "subnetting-q1",
    },
    {
      id: "borrow-without-binary",
      type: "teach",
      tcpLayer: 2,
      headline: "Borrowing without binary first.",
      body: "Need 2 subnets from a /24? → /25 (blocks of 128). Need 4? → /26 (blocks of 64). Need 8? → /27. Need 16? → /28. Four subnets from 192.168.1.0/24: 192.168.1.0/26, .64/26, .128/26, .192/26.",
      studyTip: {
        title: "Subnet count",
        body: "2 subnets=/25 · 4=/26 · 8=/27 · 16=/28. More subnets = smaller blocks = higher slash number.",
      },
    },
    {
      id: "borrow-intro",
      type: "teach",
      tcpLayer: 2,
      headline: "Why borrowing works.",
      body: "To split one network into smaller subnets, bits move from the host portion to the network portion. Each bit borrowed doubles subnet count and halves block size.",
      terms: [
        {
          id: "borrow",
          label: "Borrowing bits",
          tier: "basics",
          shortDefinition:
            "Take host bits and use them as network bits to create additional subnets from one block.",
        },
      ],
    },
    {
      id: "borrow-prefix-grow",
      type: "teach",
      tcpLayer: 2,
      headline: "Why /24 becomes /26.",
      body: "A /24 has 24 network bits. Borrow 2 bits for four subnets → 24 + 2 = 26. The prefix grows because the network portion got longer.",
      media: {
        kind: "flow",
        items: [
          { icon: "layers", label: "/24 = 24 net bits" },
          { icon: "layers", label: "Borrow 2" },
          { icon: "layers", label: "/26 = 26 net bits" },
        ],
      },
    },
    {
      id: "boundaries",
      type: "teach",
      tcpLayer: 2,
      headline: "Subnet boundaries.",
      body: "Block size 64 → chunks start at .0, .64, .128, .192. Only those can be network addresses. .50 is a host inside 0–63, not a subnet start.",
      studyTip: {
        title: "One /26 chunk",
        body: ".0 network · .1–.62 usable · .63 broadcast · .64 = next subnet. Broadcast is always one below the next boundary.",
      },
      media: {
        kind: "icons",
        items: [
          { icon: "server", label: ".0" },
          { icon: "server", label: ".64" },
          { icon: "server", label: ".128" },
          { icon: "server", label: ".192" },
        ],
      },
    },
    {
      id: "anchor-jumps",
      type: "teach",
      tcpLayer: 2,
      headline: "Anchor jumps — skip long counting.",
      body: "For /28 (block 16), do not count 0, 16, 32… to 240 every time. Jump to anchors 0, 64, 128, 192 — then count by 16 only inside the group your IP falls in.",
      studyTip: {
        title: "/28 anchor groups",
        body: "0–63 → 0 group · 64–127 → 64 group · 128–191 → 128 group · 192–255 → 192 group. Then +16 inside that group only.",
      },
    },
    {
      id: "nearest-multiple",
      type: "teach",
      tcpLayer: 2,
      headline: "Nearest lower multiple.",
      body: "What block start is directly below the IP? For 200/28: nearest lower multiple of 16 is 192; next is 208; broadcast 207. For 130/29 (block 8): nearest lower multiple of 8 is 128; broadcast 135.",
      studyTip: {
        title: "Quick examples",
        body: "45/27 → nearest 32 · 90/26 → nearest 64 · 200/28 → nearest 192 · 130/29 → nearest 128.",
      },
    },
    {
      id: "block-range-drill",
      type: "teach",
      tcpLayer: 2,
      headline: "Drill: block range only.",
      body: "Before full answers, train IP → block range. 73/28 → 64–79 · 155/28 → 144–159 · 201/28 → 192–207 · 37/29 → 32–39 · 222/27 → 192–223. Network and broadcast follow once the range is locked.",
    },
    {
      id: "broadcast-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — broadcast",
      checkpointQuestionId: "subnetting-q2",
    },
    {
      id: "total-vs-usable",
      type: "misconception",
      tcpLayer: 2,
      headline: "Total vs usable addresses.",
      body: "A /28 has block size 16 → 14 usable hosts. Exam questions may ask for total or assignable — read carefully.",
    },
    {
      id: "total-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — /28 total",
      checkpointQuestionId: "subnetting-q4",
    },
    {
      id: "binary-intro",
      type: "teach",
      tcpLayer: 2,
      headline: "Binary explains why (optional depth).",
      body: "You can pass CCNA-style subnet questions with the block-size table alone. Binary shows why the table works — how masks mark network vs host bits and why 2^host_bits equals block size.",
      terms: [
        {
          id: "bit",
          label: "Bit",
          tier: "basics",
          shortDefinition:
            "The smallest unit of data — either 1 or 0. Thirty-two bits make one IPv4 address.",
        },
      ],
    },
    {
      id: "binary-octet",
      type: "teach",
      tcpLayer: 2,
      headline: "Why octets go 0–255.",
      body: "One octet is 8 bits — 256 values (0 through 255). That is why 255 in a mask means all 8 bits in that octet are network bits.",
    },
    {
      id: "host-bits",
      type: "teach",
      tcpLayer: 2,
      headline: "Host bits = why 2^n works.",
      body: "Host bits = 32 − prefix. A /26 has 6 host bits → 2^6 = 64 = block size from the table. The ^ means “to the power of” — 2^6 is 64, not 12.",
      terms: [
        {
          id: "host-bits",
          label: "Host bits",
          tier: "basics",
          shortDefinition:
            "Bits left for devices — 32 minus prefix. Block size = 2^host_bits.",
        },
      ],
    },
    {
      id: "binary-mask",
      type: "teach",
      tcpLayer: 2,
      headline: "Ones and zeros in the mask.",
      body: "Network bits are 1s, host bits are 0s. A /26 mask ends in .192 in the last octet — two more network bits borrowed from the /24 host portion.",
    },
    {
      id: "block-size",
      type: "teach",
      tcpLayer: 2,
      headline: "Shortcut: 256 − mask octet.",
      body: "If you know the mask: /26 ends in .192 → 256 − 192 = 64. Same as the table. Use table or subtraction — whichever sticks.",
      terms: [
        {
          id: "block",
          label: "Block size",
          tier: "basics",
          shortDefinition:
            "Addresses per subnet in the changing octet — from the table or 2^host_bits.",
        },
      ],
    },
    {
      id: "vlsm-what",
      type: "teach",
      tcpLayer: 2,
      headline: "What is VLSM?",
      body: "Different subnet sizes inside one parent block. Biggest need first. No overlap. Next subnet starts at the next free boundary.",
      terms: [
        {
          id: "vlsm",
          label: "VLSM",
          tier: "basics",
          shortDefinition:
            "Variable Length Subnet Mask — mix /24, /26, /30 inside one allocation.",
        },
      ],
    },
    {
      id: "vlsm-not-same",
      type: "misconception",
      tcpLayer: 2,
      headline: "VLSM is not one address, many masks.",
      body: "Wrong: same network address, different prefix. Right: chop a parent block into slices — each with its own network address and prefix.",
    },
    {
      id: "vlsm-example",
      type: "teach",
      tcpLayer: 2,
      headline: "VLSM walkthrough.",
      body: "Parent 192.168.0.0/22 (192.168.0.0–192.168.3.255). Sales 200 hosts → /24 → 192.168.0.0/24. IT 50 hosts → /26 → 192.168.1.0/26 (.0–.63). WAN 2 hosts → /30 → 192.168.1.64/30 (.64–.67). Each slice: own network, own prefix, next free boundary.",
      media: {
        kind: "flow",
        items: [
          { icon: "layers", label: "/22 parent" },
          { icon: "monitor", label: "/24 Sales" },
          { icon: "server", label: "/26 IT" },
          { icon: "router", label: "/30 WAN" },
        ],
      },
    },
    {
      id: "vlsm-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — VLSM",
      checkpointQuestionId: "subnetting-q3",
    },
    {
      id: "exam-strategy",
      type: "teach",
      tcpLayer: 2,
      headline: "Exam strategy.",
      body: "Prefix → block size → which block? → network → broadcast → hosts. Write the block range before anything else. Double-check you did not mix two problems (common on /28).",
      studyTip: {
        title: "Practice",
        body: "Subnet CIDR simulator after this lesson. Packet Tracer lab after the getting-started guide.",
      },
    },
    {
      id: "summary",
      type: "summary",
      tcpLayer: 2,
      headline: "Subnetting fundamentals covered.",
      body: "Block size before network/broadcast. Table, which-block, borrowing, anchor jumps, VLSM. Binary explains why — you do not need it for every exam question.",
    },
  ],
};
