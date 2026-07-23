import type { Certification } from "../types";

/**
 * CompTIA A+ (220-1201 / 220-1202 V15) — planned shell.
 * Content domains fill in Pathway F Phases F3–F4.
 * Objectives provenance: docs/a-plus-objectives-source.md
 */
export const aPlus: Certification = {
  id: "a-plus",
  name: "CompTIA A+",
  shortName: "A+",
  vendor: "CompTIA",
  overview:
    "CompTIA A+ (V15) validates entry-level IT support skills across hardware, networking, operating systems, security, and operational procedures. Pass Core 1 (220-1201) and Core 2 (220-1202). Curriculum is planned — not studyable until Core content ships. Strongly recommended: Computer Fundamentals first if desktops still feel unfamiliar.",
  examSummary: {
    questionCount: 90,
    durationMinutes: 90,
    passingScore: "Core 1: 675/900 · Core 2: 700/900",
    format: "Multiple choice and performance-based (both exams required)",
  },
  domains: [
    {
      id: "ap-core1-mobile",
      name: "Core 1 — Mobile Devices",
      topics: [],
    },
    {
      id: "ap-core1-networking",
      name: "Core 1 — Networking",
      topics: [],
    },
    {
      id: "ap-core1-hardware",
      name: "Core 1 — Hardware",
      topics: [],
    },
    {
      id: "ap-core1-virt-cloud",
      name: "Core 1 — Virtualization & Cloud",
      topics: [],
    },
    {
      id: "ap-core1-troubleshoot",
      name: "Core 1 — Hardware & Network Troubleshooting",
      topics: [],
    },
    {
      id: "ap-core2-os",
      name: "Core 2 — Operating Systems",
      topics: [],
    },
    {
      id: "ap-core2-security",
      name: "Core 2 — Security",
      topics: [],
    },
    {
      id: "ap-core2-sw-troubleshoot",
      name: "Core 2 — Software Troubleshooting",
      topics: [],
    },
    {
      id: "ap-core2-ops",
      name: "Core 2 — Operational Procedures",
      topics: [],
    },
  ],
};
