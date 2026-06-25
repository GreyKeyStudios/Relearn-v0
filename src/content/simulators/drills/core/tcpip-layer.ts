import type { OrderDrillItem } from "@/components/simulators/SimulatorRegistry";

export const TCPIP_LAYER_POOL: OrderDrillItem[] = [
  {
    id: "tcpip-layers",
    prompt: "Order the TCP/IP model layers from top to bottom.",
    items: [
      "Application",
      "Transport",
      "Internet",
      "Network Access",
    ],
    weakConcept: "TCP/IP layer order",
    explanation: "The TCP/IP model has 4 layers vs OSI's 7.",
  },
  {
    id: "tcpip-protocols",
    prompt: "Map protocols to layers — order from Application down to Network Access.",
    items: ["DNS / HTTP", "TCP / UDP", "IP / ICMP", "Ethernet / Wi-Fi"],
    weakConcept: "TCP/IP protocol mapping",
  },
  {
    id: "tcpip-osi-map",
    prompt: "Order TCP/IP layers that correspond to OSI L7–L4 (top to bottom).",
    items: ["Application (OSI 5–7)", "Transport (OSI 4)"],
    weakConcept: "TCP/IP to OSI mapping",
    explanation: "TCP/IP Application maps to OSI Session, Presentation, and Application.",
  },
  {
    id: "tcpip-internet",
    prompt: "Which layer handles logical addressing? Place the matching layer name first, then the layer below it.",
    items: ["Internet", "Network Access"],
    weakConcept: "Internet layer role",
    explanation: "The Internet layer (IP) handles logical addressing and routing.",
  },
  {
    id: "tcpip-transport",
    prompt: "Order transport protocols by connection-oriented first, then connectionless.",
    items: ["TCP (connection-oriented)", "UDP (connectionless)"],
    weakConcept: "Transport layer protocols",
  },
];
