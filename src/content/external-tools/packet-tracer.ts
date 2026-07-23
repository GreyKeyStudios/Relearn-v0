/** Reusable Packet Tracer guide — linked from any CCNA external lab. */

export interface ExternalToolSection {
  title: string;
  body: string;
  bullets?: string[];
}

export interface ExternalToolGuide {
  id: string;
  name: string;
  downloadUrl: string;
  cost: "free";
  platform: string;
  summary: string;
  sections: ExternalToolSection[];
}

export const PACKET_TRACER_GUIDE: ExternalToolGuide = {
  id: "packet-tracer",
  name: "Cisco Packet Tracer",
  downloadUrl: "https://www.netacad.com/cisco-packet-tracer",
  cost: "free",
  platform: "Windows, macOS, Linux (via Cisco Networking Academy)",
  summary:
    "Cisco's free network simulator — build topologies, configure devices, and test with ping without physical hardware.",
  sections: [
    {
      title: "Download and install",
      body: "Packet Tracer is free through Cisco Networking Academy. You need a free account before you can download.",
      bullets: [
        "Go to netacad.com → Cisco Packet Tracer (or use the download button on this page).",
        "Create a free Networking Academy account if you do not have one.",
        "Download the installer for your OS and run it.",
        "Launch Packet Tracer and sign in with the same Academy account.",
      ],
    },
    {
      title: "First 5 minutes in the app",
      body: "Learn the layout once — every Bridge Packet Tracer lab assumes you know this.",
      bullets: [
        "Bottom shelf: drag a PC and a Switch into the workspace.",
        "Cable tool (lightning bolt): choose Copper Straight-Through, click PC → switch.",
        "Click the PC → Desktop tab → IP Configuration: set 192.168.1.10, mask 255.255.255.0.",
        "Desktop → Command Prompt: ping 127.0.0.1 (tests the PC stack).",
        "File → Save As: save your work as a .pkt file.",
      ],
    },
    {
      title: "What Bridge labs use it for",
      body: "Packet Tracer appears in several CCNA topics — install it once, reuse it throughout the track.",
      bullets: [
        "Subnetting — split a /24, assign IPs, ping between subnets through a router.",
        "VLANs — build multi-VLAN topologies with trunk links.",
        "Static routes and OSPF — configure routers and verify routing tables.",
      ],
    },
    {
      title: "Troubleshooting quick checks",
      body: "When something does not work in a lab, check these before guessing.",
      bullets: [
        "Link lights green? If red, cable type or port may be wrong.",
        "IP and mask on the same subnet? Gateway must be local (usually .1).",
        "Ping 127.0.0.1 first — if that fails, the PC config is broken.",
        "Ping gateway before pinging remote subnets.",
        "Router interfaces up? Click router → CLI → show ip interface brief.",
      ],
    },
  ],
};

const GUIDES: Record<string, ExternalToolGuide> = {
  "packet-tracer": PACKET_TRACER_GUIDE,
};

export function getExternalToolGuide(toolId: string): ExternalToolGuide | undefined {
  return GUIDES[toolId];
}

export function getExternalToolGuideIds(): string[] {
  return Object.keys(GUIDES);
}
