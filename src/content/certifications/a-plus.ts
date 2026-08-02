import type { Certification } from "../types";
import { apCore1HardwareBatch1Topics } from "./ap/ap-core1-hardware";
import { apCore1HardwareBatch2Topics } from "./ap/ap-core1-hardware-a1b";
import { apCore1HardwareBatch3Topics } from "./ap/ap-core1-hardware-a1c";
import { apCore1NetworkingBatch1Topics } from "./ap/ap-core1-networking-a2a";
import { apCore1NetworkingBatch2Topics } from "./ap/ap-core1-networking-a2b";
import { apCore1NetworkingBatch3Topics } from "./ap/ap-core1-networking-a2c";
import { apCore1MobileBatch1Topics } from "./ap/ap-core1-mobile-a3";
import { apCore1VirtCloudBatch1Topics } from "./ap/ap-core1-virt-cloud-a4";
import { apCore1TroubleshootBatch1Topics } from "./ap/ap-core1-troubleshoot-a5a";
import { apCore1TroubleshootBatch2Topics } from "./ap/ap-core1-troubleshoot-a5b";
import { apCore1TroubleshootBatch3Topics } from "./ap/ap-core1-troubleshoot-a5c";
import { apCore2OsBatch1Topics } from "./ap/ap-core2-os-a7a";
import { apCore2OsBatch2Topics } from "./ap/ap-core2-os-a7b";
import { apCore2OsBatch3Topics } from "./ap/ap-core2-os-a7c";
import { apCore2OsBatch4Topics } from "./ap/ap-core2-os-a7d";
import { apCore2SecurityBatch1Topics } from "./ap/ap-core2-security-a8a";
import { apCore2SecurityBatch2Topics } from "./ap/ap-core2-security-a8b";
import { apCore2SecurityBatch3Topics } from "./ap/ap-core2-security-a8c";
import { apCore2SecurityBatch4Topics } from "./ap/ap-core2-security-a8d";
import { apCore2SecurityBatch5Topics } from "./ap/ap-core2-security-a8e";
import { apCore2SecurityBatch6Topics } from "./ap/ap-core2-security-a8f";
import { apCore2SecurityBatch7Topics } from "./ap/ap-core2-security-a8g";
import { apCore2SecurityBatch8Topics } from "./ap/ap-core2-security-a8h";
import { apCore2SecurityBatch9Topics } from "./ap/ap-core2-security-a8i";
import { apCore2SecurityBatch10Topics } from "./ap/ap-core2-security-a8j";
import { apCore2SecurityBatch11Topics } from "./ap/ap-core2-security-a8k";
import { apCore2SecurityBatch12Topics } from "./ap/ap-core2-security-a8l";
import { apCore2SwTroubleshootBatch1Topics } from "./ap/ap-core2-sw-troubleshoot-a9a";
import { apCore2SwTroubleshootBatch2Topics } from "./ap/ap-core2-sw-troubleshoot-a9b";
import { apCore2SwTroubleshootBatch3Topics } from "./ap/ap-core2-sw-troubleshoot-a9c";
import { apCore2SwTroubleshootBatch4Topics } from "./ap/ap-core2-sw-troubleshoot-a9d";
import { apCore2SwTroubleshootIntegrationTopics } from "./ap/ap-core2-sw-troubleshoot-a9e";
import { apCore2OpsBatch1Topics } from "./ap/ap-core2-ops-a10a";
import { apCore2OpsBatch2Topics } from "./ap/ap-core2-ops-a10b";
import { apCore2OpsBatch3Topics } from "./ap/ap-core2-ops-a10c";
import { apCore2OpsBatch4Topics } from "./ap/ap-core2-ops-a10d";
import { apCore2OpsBatch5Topics } from "./ap/ap-core2-ops-a10e";
import { apCore2OpsBatch6Topics } from "./ap/ap-core2-ops-a10f";
import { apCore2OpsBatch7Topics } from "./ap/ap-core2-ops-a10g";
import { apCore2OpsBatch8Topics } from "./ap/ap-core2-ops-a10h";
import { apCore2OpsBatch9Topics } from "./ap/ap-core2-ops-a10i";
import { apCore2OpsBatch10Topics } from "./ap/ap-core2-ops-a10j";
import { apCore2OpsIntegrationTopics } from "./ap/ap-core2-ops-a10k";

/**
 * CompTIA A+ (220-1201 / 220-1202 V15) — Pathway F.
 * Core 1 and Core 2 domains are first-pass; full-track learner QA and polish remain.
 * Domain order matches docs/a-plus-learning-path.md.
 * Objectives: src/content/objectives/a-plus.ts
 * Provenance: docs/a-plus-objectives-source.md
 */
export const aPlus: Certification = {
  id: "a-plus",
  name: "CompTIA A+",
  shortName: "A+",
  vendor: "CompTIA",
  overview:
    "CompTIA A+ (V15) validates entry-level IT support skills across hardware, networking, operating systems, security, software troubleshooting, and operational procedures. Pass Core 1 (220-1201) and Core 2 (220-1202). All Core 1 and Core 2 objectives and domain reviews are first-pass; learner QA and polish remain before any Ready or Available claim. Strongly recommended: Computer Fundamentals first if desktops still feel unfamiliar. ReLearn is not affiliated with or endorsed by CompTIA.",
  examSummary: {
    questionCount: 90,
    durationMinutes: 90,
    passingScore: "Core 1: 675/900 · Core 2: 700/900",
    format: "Multiple choice and performance-based (both exams required)",
  },
  domains: [
    {
      id: "ap-core1-hardware",
      name: "Core 1 — Hardware",
      topics: [
        ...apCore1HardwareBatch1Topics,
        ...apCore1HardwareBatch2Topics,
        ...apCore1HardwareBatch3Topics,
      ],
    },
    {
      id: "ap-core1-mobile",
      name: "Core 1 — Mobile Devices",
      topics: [...apCore1MobileBatch1Topics],
    },
    {
      id: "ap-core1-networking",
      name: "Core 1 — Networking",
      topics: [
        ...apCore1NetworkingBatch1Topics,
        ...apCore1NetworkingBatch2Topics,
        ...apCore1NetworkingBatch3Topics,
      ],
    },
    {
      id: "ap-core1-virt-cloud",
      name: "Core 1 — Virtualization & Cloud",
      topics: [...apCore1VirtCloudBatch1Topics],
    },
    {
      id: "ap-core1-troubleshoot",
      name: "Core 1 — Hardware & Network Troubleshooting",
      topics: [
        ...apCore1TroubleshootBatch1Topics,
        ...apCore1TroubleshootBatch2Topics,
        ...apCore1TroubleshootBatch3Topics,
      ],
    },
    {
      id: "ap-core2-os",
      name: "Core 2 — Operating Systems",
      topics: [
        ...apCore2OsBatch1Topics,
        ...apCore2OsBatch2Topics,
        ...apCore2OsBatch3Topics,
        ...apCore2OsBatch4Topics,
      ],
    },
    {
      id: "ap-core2-security",
      name: "Core 2 — Security",
      topics: [
        ...apCore2SecurityBatch1Topics,
        ...apCore2SecurityBatch2Topics,
        ...apCore2SecurityBatch3Topics,
        ...apCore2SecurityBatch4Topics,
        ...apCore2SecurityBatch5Topics,
        ...apCore2SecurityBatch6Topics,
        ...apCore2SecurityBatch7Topics,
        ...apCore2SecurityBatch8Topics,
        ...apCore2SecurityBatch9Topics,
        ...apCore2SecurityBatch10Topics,
        ...apCore2SecurityBatch11Topics,
        ...apCore2SecurityBatch12Topics,
      ],
    },
    {
      id: "ap-core2-sw-troubleshoot",
      name: "Core 2 — Software Troubleshooting",
      topics: [
        ...apCore2SwTroubleshootBatch1Topics,
        ...apCore2SwTroubleshootBatch2Topics,
        ...apCore2SwTroubleshootBatch3Topics,
        ...apCore2SwTroubleshootBatch4Topics,
        ...apCore2SwTroubleshootIntegrationTopics,
      ],
    },
    {
      id: "ap-core2-ops",
      name: "Core 2 — Operational Procedures",
      topics: [
        ...apCore2OpsBatch1Topics,
        ...apCore2OpsBatch2Topics,
        ...apCore2OpsBatch3Topics,
        ...apCore2OpsBatch4Topics,
        ...apCore2OpsBatch5Topics,
        ...apCore2OpsBatch6Topics,
        ...apCore2OpsBatch7Topics,
        ...apCore2OpsBatch8Topics,
        ...apCore2OpsBatch9Topics,
        ...apCore2OpsBatch10Topics,
        ...apCore2OpsIntegrationTopics,
      ],
    },
  ],
};
