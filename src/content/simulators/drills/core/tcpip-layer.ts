import type { OrderDrillItem } from "@/components/simulators/SimulatorRegistry";

export const TCPIP_LAYER_POOL: OrderDrillItem[] = [
  {
    id: "tcpip-layers",
    prompt: "Order the TCP/IP model layers from top to bottom.",
    items: ["Application", "Transport", "Internet", "Network Access"],
    weakConcept: "TCP/IP layer order",
    explanation: "Top to bottom: Application, Transport, Internet, Network Access.",
  },
  {
    id: "tcpip-layers-up",
    prompt: "Order the TCP/IP layers from the wire up (bottom to top).",
    items: ["Network Access", "Internet", "Transport", "Application"],
    weakConcept: "TCP/IP layer order (bottom up)",
    explanation: "From Network Access at the wire up to Application at the top.",
  },
  {
    id: "tcpip-protocols",
    prompt: "Order protocols from Application layer down to Network Access.",
    items: ["DNS / HTTP", "TCP / UDP", "IP / ICMP", "Ethernet / Wi-Fi"],
    weakConcept: "TCP/IP protocol mapping",
    explanation: "HTTP/DNS at Application; TCP/UDP at Transport; IP/ICMP at Internet; Ethernet/Wi-Fi at Network Access.",
  },
  {
    id: "tcpip-osi-collapse",
    prompt: "Which TCP/IP layer absorbs the most OSI layers? Place it first, then the layer below it.",
    items: ["Application", "Transport"],
    weakConcept: "TCP/IP to OSI mapping",
    explanation: "TCP/IP Application maps to OSI Session, Presentation, and Application (layers 5–7).",
  },
  {
    id: "tcpip-transport",
    prompt: "Order transport protocols by connection-oriented first, then connectionless.",
    items: ["TCP (connection-oriented)", "UDP (connectionless)"],
    weakConcept: "Transport layer protocols",
    explanation: "TCP sets up a connection first; UDP sends without a handshake.",
  },
];
