import type { ExamObjective } from "@/content/types";

/**
 * CompTIA A+ V15 objective registry (220-1201 / 220-1202).
 * Numbering follows docs/computer-fundamentals-aplus-architecture.md §2
 * and docs/a-plus-objectives-source.md (Document Version 3.0).
 * IDs: AP1201-n.n (Core 1) · AP1202-n.n (Core 2)
 */
export const APLUS_OBJECTIVES: ExamObjective[] = [
  // —— Core 1 220-1201 ——
  // 1.0 Mobile Devices (13%)
  {
    id: "AP1201-1.1",
    domain: "ap-core1-mobile",
    text: "Given a scenario, install or replace mobile-device hardware components",
  },
  {
    id: "AP1201-1.2",
    domain: "ap-core1-mobile",
    text: "Compare and contrast mobile-device accessories and connectivity options",
  },
  {
    id: "AP1201-1.3",
    domain: "ap-core1-mobile",
    text: "Given a scenario, configure mobile network connectivity and application support",
  },

  // 2.0 Networking (23%)
  {
    id: "AP1201-2.1",
    domain: "ap-core1-networking",
    text: "Compare and contrast TCP and UDP ports, protocols, and their purposes",
  },
  {
    id: "AP1201-2.2",
    domain: "ap-core1-networking",
    text: "Compare and contrast wireless networking technologies",
  },
  {
    id: "AP1201-2.3",
    domain: "ap-core1-networking",
    text: "Summarize services provided by networked hosts",
  },
  {
    id: "AP1201-2.4",
    domain: "ap-core1-networking",
    text: "Compare and contrast common network configuration concepts",
  },
  {
    id: "AP1201-2.5",
    domain: "ap-core1-networking",
    text: "Compare and contrast common networking hardware",
  },
  {
    id: "AP1201-2.6",
    domain: "ap-core1-networking",
    text: "Given a scenario, install and configure basic wired/wireless SOHO networks",
  },
  {
    id: "AP1201-2.7",
    domain: "ap-core1-networking",
    text: "Compare and contrast Internet connection types, network types, and their features",
  },
  {
    id: "AP1201-2.8",
    domain: "ap-core1-networking",
    text: "Given a scenario, use networking tools",
  },

  // 3.0 Hardware (25%)
  {
    id: "AP1201-3.1",
    domain: "ap-core1-hardware",
    text: "Explain basic display device types, connectors, and settings",
  },
  {
    id: "AP1201-3.2",
    domain: "ap-core1-hardware",
    text: "Explain basic cable types and their connectors, features, and purposes",
  },
  {
    id: "AP1201-3.3",
    domain: "ap-core1-hardware",
    text: "Given a scenario, install the appropriate RAM",
  },
  {
    id: "AP1201-3.4",
    domain: "ap-core1-hardware",
    text: "Given a scenario, select and install storage devices",
  },
  {
    id: "AP1201-3.5",
    domain: "ap-core1-hardware",
    text: "Given a scenario, install and configure motherboards, CPUs, and add-on cards",
  },
  {
    id: "AP1201-3.6",
    domain: "ap-core1-hardware",
    text: "Given a scenario, install or replace the appropriate power supply",
  },
  {
    id: "AP1201-3.7",
    domain: "ap-core1-hardware",
    text: "Given a scenario, deploy and configure multifunction devices/printers and settings",
  },
  {
    id: "AP1201-3.8",
    domain: "ap-core1-hardware",
    text: "Given a scenario, install and maintain various print technologies",
  },

  // 4.0 Virtualization and Cloud Computing (11%)
  {
    id: "AP1201-4.1",
    domain: "ap-core1-virt-cloud",
    text: "Summarize cloud-computing concepts",
  },
  {
    id: "AP1201-4.2",
    domain: "ap-core1-virt-cloud",
    text: "Summarize aspects of client-side virtualization",
  },

  // 5.0 Hardware and Network Troubleshooting (28%)
  {
    id: "AP1201-5.1",
    domain: "ap-core1-troubleshoot",
    text: "Given a scenario, troubleshoot problems related to motherboards, RAM, CPU, and power",
  },
  {
    id: "AP1201-5.2",
    domain: "ap-core1-troubleshoot",
    text: "Given a scenario, troubleshoot and diagnose problems with storage drives and RAID arrays",
  },
  {
    id: "AP1201-5.3",
    domain: "ap-core1-troubleshoot",
    text: "Given a scenario, troubleshoot video, projector, and display issues",
  },
  {
    id: "AP1201-5.4",
    domain: "ap-core1-troubleshoot",
    text: "Given a scenario, troubleshoot common issues with mobile devices",
  },
  {
    id: "AP1201-5.5",
    domain: "ap-core1-troubleshoot",
    text: "Given a scenario, troubleshoot problems with wired and wireless networks",
  },
  {
    id: "AP1201-5.6",
    domain: "ap-core1-troubleshoot",
    text: "Given a scenario, troubleshoot and resolve printer issues",
  },

  // —— Core 2 220-1202 ——
  // 1.0 Operating Systems (28%)
  {
    id: "AP1202-1.1",
    domain: "ap-core2-os",
    text: "Explain common OS types, filesystems, and their purposes",
  },
  {
    id: "AP1202-1.2",
    domain: "ap-core2-os",
    text: "Given a scenario, perform OS installations and upgrades in a diverse OS environment",
  },
  {
    id: "AP1202-1.3",
    domain: "ap-core2-os",
    text: "Identify basic features of Microsoft Windows editions",
  },
  {
    id: "AP1202-1.4",
    domain: "ap-core2-os",
    text: "Given a scenario, use features and tools of the Microsoft Windows OS",
  },
  {
    id: "AP1202-1.5",
    domain: "ap-core2-os",
    text: "Given a scenario, use the appropriate Microsoft command-line tool",
  },
  {
    id: "AP1202-1.6",
    domain: "ap-core2-os",
    text: "Given a scenario, use the appropriate Windows settings",
  },
  {
    id: "AP1202-1.7",
    domain: "ap-core2-os",
    text: "Given a scenario, configure Microsoft Windows networking features on a client/desktop",
  },
  {
    id: "AP1202-1.8",
    domain: "ap-core2-os",
    text: "Identify common features and tools of the macOS/desktop OS",
  },
  {
    id: "AP1202-1.9",
    domain: "ap-core2-os",
    text: "Identify common features and tools of the Linux client/desktop OS",
  },
  {
    id: "AP1202-1.10",
    domain: "ap-core2-os",
    text: "Given a scenario, apply application installation and configuration concepts",
  },
  {
    id: "AP1202-1.11",
    domain: "ap-core2-os",
    text: "Explain common cloud productivity / collaboration tools and concepts",
  },

  // 2.0 Security (28%)
  {
    id: "AP1202-2.1",
    domain: "ap-core2-security",
    text: "Summarize various security measures and their purposes (including Zero Trust basics)",
  },
  {
    id: "AP1202-2.2",
    domain: "ap-core2-security",
    text: "Given a scenario, manage and configure basic security settings in the Microsoft Windows OS",
  },
  {
    id: "AP1202-2.3",
    domain: "ap-core2-security",
    text: "Compare and contrast wireless security protocols and authentication methods",
  },
  {
    id: "AP1202-2.4",
    domain: "ap-core2-security",
    text: "Given a scenario, detect, remove, and prevent malware using appropriate tools and methods",
  },
  {
    id: "AP1202-2.5",
    domain: "ap-core2-security",
    text: "Explain common social-engineering attacks, threats, and vulnerabilities",
  },
  {
    id: "AP1202-2.6",
    domain: "ap-core2-security",
    text: "Given a scenario, follow SOHO malware removal best-practice procedures",
  },
  {
    id: "AP1202-2.7",
    domain: "ap-core2-security",
    text: "Given a scenario, configure a workstation to meet best practices for security",
  },
  {
    id: "AP1202-2.8",
    domain: "ap-core2-security",
    text: "Explain common methods for securing mobile and embedded devices",
  },
  {
    id: "AP1202-2.9",
    domain: "ap-core2-security",
    text: "Given a scenario, use common data destruction and disposal methods",
  },
  {
    id: "AP1202-2.10",
    domain: "ap-core2-security",
    text: "Given a scenario, configure appropriate security settings on SOHO wireless and wired networks",
  },
  {
    id: "AP1202-2.11",
    domain: "ap-core2-security",
    text: "Given a scenario, configure and apply browser security settings and related features",
  },

  // 3.0 Software Troubleshooting (23%)
  {
    id: "AP1202-3.1",
    domain: "ap-core2-sw-troubleshoot",
    text: "Given a scenario, troubleshoot common Windows OS problems",
  },
  {
    id: "AP1202-3.2",
    domain: "ap-core2-sw-troubleshoot",
    text: "Given a scenario, troubleshoot common mobile OS and application issues",
  },
  {
    id: "AP1202-3.3",
    domain: "ap-core2-sw-troubleshoot",
    text: "Given a scenario, troubleshoot common mobile OS and application security issues",
  },
  {
    id: "AP1202-3.4",
    domain: "ap-core2-sw-troubleshoot",
    text: "Given a scenario, troubleshoot common personal computer (PC) security issues",
  },

  // 4.0 Operational Procedures (21%)
  {
    id: "AP1202-4.1",
    domain: "ap-core2-ops",
    text: "Given a scenario, implement best practices associated with documentation and support systems",
  },
  {
    id: "AP1202-4.2",
    domain: "ap-core2-ops",
    text: "Explain basic change-management best practices",
  },
  {
    id: "AP1202-4.3",
    domain: "ap-core2-ops",
    text: "Given a scenario, implement workstation backup and recovery methods",
  },
  {
    id: "AP1202-4.4",
    domain: "ap-core2-ops",
    text: "Given a scenario, use common safety procedures",
  },
  {
    id: "AP1202-4.5",
    domain: "ap-core2-ops",
    text: "Summarize environmental impacts and local environmental controls",
  },
  {
    id: "AP1202-4.6",
    domain: "ap-core2-ops",
    text: "Explain the importance of prohibited content/activity, privacy, licensing, and policy concepts",
  },
  {
    id: "AP1202-4.7",
    domain: "ap-core2-ops",
    text: "Given a scenario, use proper communication techniques and professionalism",
  },
  {
    id: "AP1202-4.8",
    domain: "ap-core2-ops",
    text: "Identify the basics of scripting",
  },
  {
    id: "AP1202-4.9",
    domain: "ap-core2-ops",
    text: "Given a scenario, use remote access technologies",
  },
  {
    id: "AP1202-4.10",
    domain: "ap-core2-ops",
    text: "Explain basic concepts related to artificial intelligence (AI), including privacy, bias, hallucinations, and policy",
  },
];

const byId = new Map(APLUS_OBJECTIVES.map((o) => [o.id, o]));

export function getAplusObjective(id: string): ExamObjective | undefined {
  return byId.get(id);
}

export function getAplusObjectiveShortLabel(id: string): string {
  const obj = byId.get(id);
  if (!obj) return id.replace(/^AP120[12]-/, "");
  const num = id.replace(/^AP/, "");
  const short = obj.text.length > 42 ? `${obj.text.slice(0, 39)}…` : obj.text;
  return `${num} ${short}`;
}

export function isAplusObjectiveId(id: string): boolean {
  return byId.has(id);
}
