import type { Certification } from "../types";
import { cfPilotOrientationTopics, cfPilotFilesTopics } from "./cf/cf-m1-pilot";
import { cfOrientationExtraTopics } from "./cf/cf-m1-orientation-extra";
import { cfHardwareDomain } from "./cf/cf-m2-hardware";
import { cfOsToolsDomain } from "./cf/cf-m3-os-tools";
import { cfNetworkDomain } from "./cf/cf-m4-network";
import { cfSecurityDomain } from "./cf/cf-m5-security";
import { cfTroubleshootDomain } from "./cf/cf-m6-troubleshoot";
import { cfProductivityDomain } from "./cf/cf-m7-productivity";
import { cfProDomain } from "./cf/cf-m8-pro";

/**
 * Computer Fundamentals — ReLearn standalone digital literacy track (Pathway F).
 * Thin assembler: every module's content lives in `./cf/*`; this file only
 * wires modules together in learning order. See docs/COURSE_ARCHITECTURE.md.
 */
export const computerFundamentals: Certification = {
  id: "computer-fundamentals",
  name: "Computer Fundamentals",
  shortName: "Computer Basics",
  vendor: "ReLearn",
  overview:
    "A standalone digital literacy and confidence curriculum — not a vendor exam. This full track takes you from what a computer actually is, through hardware, Windows tools, the internet, security and safety, troubleshooting, everyday productivity, and professional readiness. Built for adults who are comfortable on a phone but uncertain on a desktop or laptop — every term is defined before it is used, and nothing here assumes classroom computer-lab experience you may not have had. Windows 11 is the primary platform taught throughout, with Windows 10 differences called out only where they matter.",
  examSummary: {
    questionCount: 0,
    durationMinutes: 0,
    passingScore: "Complete modules + required labs",
    format: "Hands-on literacy",
  },
  domains: [
    {
      id: "cf-orientation",
      name: "Module 1 — Orientation & Confidence",
      topics: [
        ...cfPilotOrientationTopics,
        ...cfOrientationExtraTopics.filter((t) => t.id !== "cf-windows-and-dialogs"),
      ],
    },
    {
      id: "cf-files",
      name: "Module 1b — Desktop & Files",
      topics: [
        cfPilotFilesTopics[0], // cf-desktop-taskbar-start
        ...cfOrientationExtraTopics.filter((t) => t.id === "cf-windows-and-dialogs"),
        ...cfPilotFilesTopics.slice(1), // cf-file-explorer-basics, cf-files-copy-move-delete, cf-extensions-and-associations
      ],
    },
    cfHardwareDomain,
    cfOsToolsDomain,
    cfNetworkDomain,
    cfSecurityDomain,
    cfTroubleshootDomain,
    cfProductivityDomain,
    cfProDomain,
  ],
};
