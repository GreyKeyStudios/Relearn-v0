import type { CareerPathDefinition } from "@/content/career-paths/types";

export const ETHICAL_HACKING_CAREER_PATH: CareerPathDefinition = {
  id: "ethical-hacking",
  shortName: "Ethical Hacking",
  name: "Ethical Hacking & Offensive Security",
  tagline:
    "Learn the tech → spot the weakness → practice red, blue, and purple in safe labs",
  overview:
    "A planned ReLearn career path that composes existing networking, Linux, Windows, security, and detection tracks, then adds ethical-hacking core skills and multi-role simulations. Not a live certification pack yet — foundations and demo scenario only.",
  status: "planned",
  featuredKnowledgeNodeId: "cross-site-scripting",
  featuredPerspectiveId: "demo-authentication",
  scenarioIds: ["missing-patch"],
  phases: [
    {
      id: "eh-phase-1",
      title: "Phase 1 — Foundations",
      summary:
        "Networking, Linux, Windows literacy, web/SQL/Python gaps, authentication, and security fundamentals — mostly reuse existing tracks.",
      trackIds: [
        "computer-fundamentals",
        "ccna",
        "network-plus",
        "linux-plus",
        "powershell",
        "git-github",
        "security-plus",
        "cysa-plus",
        "sql",
        "python",
        "bash",
        "rest-apis",
        "vm-lab",
      ],
      knowledgeNodeIds: [
        "computer-fundamentals",
        "networking-fundamentals",
        "tcp-ip",
        "linux-fundamentals",
        "powershell-basics",
        "authentication",
        "authorization",
        "cryptography-fundamentals",
        "sql-fundamentals",
        "python-fundamentals",
        "http-https",
      ],
      status: "planned",
    },
    {
      id: "eh-phase-2",
      title: "Phase 2 — Ethical Hacking Core",
      summary:
        "Rules of engagement, scope, lab safety, recon/enumeration concepts, vulnerability assessment, exploitation concepts, privilege escalation concepts, evidence, reporting, remediation validation.",
      trackIds: ["ethical-hacking"],
      knowledgeNodeIds: [
        "recon-concepts",
        "vulnerability-management",
        "exploitation-concepts",
        "privilege-escalation-concepts",
        "web-injection-concepts",
      ],
      status: "planned",
    },
    {
      id: "eh-phase-3",
      title: "Phase 3 — Red Team",
      summary:
        "Achieve a scoped objective, avoid unnecessary disruption, document evidence, recognize defensive telemetry, respect RoE.",
      trackIds: ["ethical-hacking"],
      knowledgeNodeIds: [
        "auth-weakness-concepts",
        "lateral-movement-concepts",
        "persistence-concepts",
      ],
      status: "planned",
    },
    {
      id: "eh-phase-4",
      title: "Phase 4 — Blue Team",
      summary:
        "Detect, investigate, contain, remove simulated persistence, recover services, validate remediation, write the incident report.",
      trackIds: ["cysa-plus", "security-plus"],
      knowledgeNodeIds: [
        "logging-monitoring",
        "siem-fundamentals",
        "incident-response",
        "auth-detection-concepts",
      ],
      status: "planned",
    },
    {
      id: "eh-phase-5",
      title: "Phase 5 — Purple Team",
      summary:
        "Replay the attack path, map attacker actions to controls, explain missed detections, improve rules, retest.",
      trackIds: ["ethical-hacking", "cysa-plus"],
      knowledgeNodeIds: ["hardening-basics", "network-segmentation-basics"],
      status: "planned",
    },
    {
      id: "eh-phase-6",
      title: "Phase 6 — Career Simulator",
      summary:
        "Time-based incidents, conflicting alerts, limited resources, business tradeoffs, scope restrictions, evidence preservation, professional reporting.",
      trackIds: ["ethical-hacking"],
      knowledgeNodeIds: [],
      status: "planned",
    },
  ],
};

export function getCareerPath(id: string): CareerPathDefinition | undefined {
  if (id === ETHICAL_HACKING_CAREER_PATH.id) return ETHICAL_HACKING_CAREER_PATH;
  return undefined;
}

export function getAllCareerPaths(): CareerPathDefinition[] {
  return [ETHICAL_HACKING_CAREER_PATH];
}
