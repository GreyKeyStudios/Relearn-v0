import type { TopicExperience } from "@/content/types";

/** LES experience — IPv4 subnetting, binary, boundaries, VLSM intro (Wave 1). */
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
      id: "binary-intro",
      type: "teach",
      tcpLayer: 2,
      headline: "Binary — why it matters here.",
      body: "Computers store IPv4 addresses as 32 bits — each bit is a 1 or a 0. Subnet masks mark which bits belong to the network and which belong to the host. You need basic binary to subnet accurately.",
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
      body: "One octet is 8 bits. Eight bits can represent 256 different values (0 through 255). That is why each number in dotted decimal stops at 255 — and why 255 in a mask means all 8 bits in that octet are network bits.",
      media: {
        kind: "flow",
        items: [
          { icon: "layers", label: "8 bits = 1 octet" },
          { icon: "server", label: "256 values" },
          { icon: "server", label: "0 to 255" },
        ],
      },
    },
    {
      id: "binary-mask",
      type: "teach",
      tcpLayer: 2,
      headline: "Ones and zeros in the mask.",
      body: "In a subnet mask, network bits are 1s and host bits are 0s. A /24 locks the first 24 bits as network (255.255.255) and leaves 8 host bits (the last octet of 0s in the mask).",
      studyTip: {
        title: "Memory hook",
        body: "255 in the mask = all 8 bits in that octet are network bits. 0 in the mask = all 8 bits are host bits.",
      },
    },
    {
      id: "network-addr",
      type: "teach",
      tcpLayer: 2,
      headline: "Network address.",
      body: "The network address is the lowest address in a subnet. It has all host bits set to 0. You cannot assign it to a PC — it names the subnet itself. Example: 192.168.10.0 in a /24.",
      terms: [
        {
          id: "network-addr",
          label: "Network address",
          tier: "basics",
          shortDefinition:
            "Lowest address in a subnet — host bits all 0. Identifies the subnet, not a device.",
        },
      ],
    },
    {
      id: "broadcast-addr",
      type: "teach",
      tcpLayer: 2,
      headline: "Broadcast address.",
      body: "The broadcast address is the highest address in a subnet. It has all host bits set to 1. Every device on the subnet receives traffic sent here. You cannot assign it to a host either.",
      terms: [
        {
          id: "broadcast-addr",
          label: "Broadcast address",
          tier: "basics",
          shortDefinition:
            "Highest address in a subnet — host bits all 1. Sends to every host on that subnet.",
        },
      ],
    },
    {
      id: "usable-range",
      type: "teach",
      tcpLayer: 2,
      headline: "First and last usable hosts.",
      body: "Usable host addresses sit between the network and broadcast addresses. In 192.168.10.0/24, the first usable host is .1 and the last is .254. The network (.0) and broadcast (.255) are reserved.",
      media: {
        kind: "flow",
        items: [
          { icon: "server", label: ".0 network" },
          { icon: "monitor", label: ".1 – .254 hosts" },
          { icon: "network", label: ".255 broadcast" },
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
      id: "host-bits",
      type: "teach",
      tcpLayer: 2,
      headline: "Count the host bits.",
      body: "Host bits = 32 minus the prefix length. A /26 has 32 − 26 = 6 host bits. Those 6 bits determine how many addresses fit in the subnet.",
      terms: [
        {
          id: "host-bits",
          label: "Host bits",
          tier: "basics",
          shortDefinition:
            "The bits left for devices after the network portion — 32 minus the prefix (e.g. /26 → 6 host bits).",
        },
      ],
    },
    {
      id: "usable-formula",
      type: "teach",
      tcpLayer: 2,
      headline: "Usable hosts formula.",
      body: "Total addresses in a subnet = 2^host_bits. Usable hosts = 2^host_bits − 2. You subtract 2 because the network and broadcast addresses cannot be assigned to devices.",
      studyTip: {
        title: "Exam tip",
        body: "Read carefully: some questions ask total addresses, others ask usable (assignable) hosts.",
      },
    },
    {
      id: "slash26-example",
      type: "teach",
      tcpLayer: 2,
      headline: "Example: /26 usable hosts.",
      body: "A /26 leaves 6 host bits. Total addresses = 2^6 = 64. Usable hosts = 64 − 2 = 62. That is one of the most common CCNA subnet sizes to recognize.",
    },
    {
      id: "hosts-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — /26 hosts",
      checkpointQuestionId: "subnetting-q1",
    },
    {
      id: "borrow-intro",
      type: "teach",
      tcpLayer: 2,
      headline: "Borrow bits to create subnets.",
      body: "To split one network into smaller subnets, borrow bits from the host portion for the network portion. Each bit you borrow doubles the number of subnets — and shrinks each subnet.",
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
      id: "borrow-four",
      type: "teach",
      tcpLayer: 2,
      headline: "Four subnets from a /24.",
      body: "Need 4 equal subnets from 192.168.10.0/24? Borrow 2 host bits (2^2 = 4). The prefix grows from /24 to /26. Each new subnet is a /26 with 62 usable hosts.",
      media: {
        kind: "flow",
        items: [
          { icon: "layers", label: "/24 → borrow 2 bits" },
          { icon: "layers", label: "4 × /26 subnets" },
          { icon: "monitor", label: "62 hosts each" },
        ],
      },
    },
    {
      id: "block-size",
      type: "teach",
      tcpLayer: 2,
      headline: "Block size in the last octet.",
      body: "For /24-style problems in the fourth octet, block size = 256 minus the mask value in that octet. A /26 mask ends in .192, so block size = 256 − 192 = 64.",
      terms: [
        {
          id: "block",
          label: "Block size",
          tier: "basics",
          shortDefinition:
            "How far apart subnet boundaries sit in an octet — e.g. 64 for /26 means subnets at .0, .64, .128, .192.",
        },
      ],
    },
    {
      id: "boundaries",
      type: "teach",
      tcpLayer: 2,
      headline: "Subnet boundaries.",
      body: "With block size 64, subnet network addresses in the last octet land on .0, .64, .128, and .192. Boundaries must align on these increments — you cannot start a /26 subnet at .50.",
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
      id: "worked-subnet1",
      type: "teach",
      tcpLayer: 2,
      headline: "First subnet: 192.168.10.0/26.",
      body: "Network: 192.168.10.0. Usable hosts: .1 through .62. Broadcast: 192.168.10.63. The next subnet starts at .64 — the boundary where the block size increments.",
    },
    {
      id: "worked-all",
      type: "teach",
      tcpLayer: 2,
      headline: "All four /26 subnets.",
      body: "Subnet 1: .0–.63 (usable .1–.62). Subnet 2: .64–.127. Subnet 3: .128–.191. Subnet 4: .192–.255. Each block is 64 addresses with 62 usable hosts.",
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
      body: "A /28 has 4 host bits → 2^4 = 16 total addresses. Usable hosts = 16 − 2 = 14. Exam questions may ask for either — read whether they want total or assignable.",
    },
    {
      id: "total-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — /28 total",
      checkpointQuestionId: "subnetting-q4",
    },
    {
      id: "vlsm-what",
      type: "teach",
      tcpLayer: 2,
      headline: "What is VLSM?",
      body: "VLSM (Variable Length Subnet Mask) means using different prefix lengths in the same network design. A LAN might get a /24 while a point-to-point link gets a /30 — only two usable addresses needed.",
      terms: [
        {
          id: "vlsm",
          label: "VLSM",
          tier: "basics",
          shortDefinition:
            "Variable Length Subnet Mask — different prefix lengths (/24, /30, etc.) in one address plan.",
        },
      ],
    },
    {
      id: "vlsm-why",
      type: "teach",
      tcpLayer: 2,
      headline: "Why use VLSM?",
      body: "VLSM reduces wasted addresses. A WAN link between two routers only needs 2 usable hosts — a /30 (or /31 on modern gear) fits. Giving it a /24 would waste hundreds of addresses.",
      laterLearn: ["/31 point-to-point links", "Largest-first allocation rule"],
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
      headline: "Subnetting exam strategy.",
      body: "Write the block size, list boundaries, then find network, first host, last host, and broadcast. Double-check that .0 and the top address are excluded when the question asks for assignable hosts.",
      studyTip: {
        title: "Practice drill",
        body: "Use the subnet CIDR simulator assignment after this lesson to build speed on block sizes and boundaries.",
      },
    },
    {
      id: "summary",
      type: "summary",
      tcpLayer: 2,
      headline: "Subnetting fundamentals covered.",
      body: "You can now explain network vs broadcast addresses, the usable hosts formula, borrowing bits, block size, and VLSM. Next: IP ranges — special and reserved IPv4 addresses.",
    },
  ],
};
