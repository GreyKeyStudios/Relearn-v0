import type {
  LabArchitectureNode,
  LabScenarioCatalogEntry,
  RelearnApplianceInfo,
} from "@/content/labs/types";

export const RELEARN_APPLIANCE_INFO: RelearnApplianceInfo = {
  status: "not-released",
  plannedVersion: "0.1",
  primaryFormat: "VirtualBox OVA",
  advancedOption: "Vagrant or reproducible Packer build files",
  osDirection: "Linux-based",
  scenarioPacksStatus: "planned",
  checksumsStatus: "planned",
  notes:
    "No appliance download is available yet. Complete VM Lab Foundations first; use web walkthroughs until the OVA ships.",
};

export const LAB_CONTAINMENT_PRINCIPLES: string[] = [
  "Fictional organizations and hosts",
  "Fake credentials and dummy data",
  "No public-target activity",
  "No real malware",
  "No destructive payloads",
  "No access to the learner’s local network",
  "Disposable and resettable scenarios",
  "Explicit scope and prohibited actions",
  "Synthetic logs and evidence",
  "Activity designed for local training only",
];

export const LAB_SETUP_STEPS: { step: number; title: string; body: string }[] = [
  {
    step: 1,
    title: "Learn VM fundamentals",
    body: "Complete VM Lab Foundations (/cert/vm-lab): VirtualBox, guests, networking, snapshots.",
  },
  {
    step: 2,
    title: "Import the appliance",
    body: "Download and import the ReLearn Lab VM once (planned — not released).",
  },
  {
    step: 3,
    title: "Select a scenario",
    body: "Choose a scenario pack compatible with your appliance version.",
  },
  {
    step: 4,
    title: "Receive a role login",
    body: "Use the assigned scenario and role account for files, tools, and context.",
  },
  {
    step: 5,
    title: "Complete the lab",
    body: "Work through role-based phases inside the contained environment.",
  },
  {
    step: 6,
    title: "Export evidence",
    body: "Export a completion result or evidence package from the appliance.",
  },
  {
    step: 7,
    title: "Review the debrief",
    body: "Validate in ReLearn and review scoring, attack-path replay, and controls.",
  },
  {
    step: 8,
    title: "Reset the environment",
    body: "Reset the scenario pack and start another lab on the same appliance.",
  },
];

export const LAB_ARCHITECTURE_TREE: LabArchitectureNode = {
  id: "relearn-lab-vm",
  label: "ReLearn Lab VM",
  children: [
    { id: "core-manager", label: "Core scenario manager" },
    {
      id: "missing-patch",
      label: "Missing Patch",
      children: [
        { id: "mp-blue", label: "blue-analyst" },
        { id: "mp-red", label: "red-operator" },
        { id: "mp-admin", label: "system-admin" },
      ],
    },
    {
      id: "dns-incident",
      label: "DNS Incident",
      children: [
        { id: "dns-net", label: "network-technician" },
        { id: "dns-ir", label: "incident-analyst" },
      ],
    },
    {
      id: "permissions-lab",
      label: "Permissions Lab",
      children: [
        { id: "perm-junior", label: "junior-admin" },
        { id: "perm-sec", label: "security-analyst" },
      ],
    },
    {
      id: "auth-lab",
      label: "Authentication Lab",
      children: [
        { id: "auth-hd", label: "help-desk" },
        { id: "auth-id", label: "identity-admin" },
        { id: "auth-sec", label: "security-analyst" },
      ],
    },
  ],
};

export const LAB_SCENARIO_CATALOG: LabScenarioCatalogEntry[] = [
  {
    id: "missing-patch",
    title: "The Missing Patch",
    summary:
      "Delayed patching on a fictional training server — blue → red → blue practice with synthetic evidence.",
    availability: "available",
    currentDelivery: "web-walkthrough",
    href: "/career/ethical-hacking/scenarios/missing-patch",
    skills: [
      "Asset review",
      "Patch prioritization",
      "Scope compliance",
      "Synthetic log investigation",
      "Containment",
      "Remediation verification",
      "Incident reporting",
    ],
    vmDelivery: {
      deliveryMode: "relearn-vm",
      availability: "planned",
      requiredApplianceVersion: "0.1",
      scenarioPackId: "missing-patch",
      scenarioPackVersion: "0.1.0",
      supportedProviders: ["virtualbox"],
      prerequisites: [
        "vulnerability-management",
        "logging-monitoring",
        "incident-response",
      ],
      documentationUrl: "/labs/relearn-vm",
      walkthroughHref: "/career/ethical-hacking/scenarios/missing-patch",
      roleLogins: [
        {
          id: "blue-analyst",
          title: "Blue Analyst",
          role: "blue",
          description: "Prioritize patches, enable monitoring, investigate alerts, remediate.",
        },
        {
          id: "red-operator",
          title: "Red Operator",
          role: "red",
          description: "Scoped simulated access using predefined safe actions only.",
        },
        {
          id: "system-admin",
          title: "System Administrator",
          role: "admin",
          description: "Isolate host, apply simulated patch, reset fictional credentials.",
        },
      ],
    },
  },
  {
    id: "dns-incident",
    title: "DNS Incident",
    summary: "Investigate broken name resolution in a fictional office network.",
    availability: "planned",
    currentDelivery: "relearn-vm",
    skills: ["DNS triage", "Log correlation", "Scope discipline"],
    vmDelivery: {
      deliveryMode: "relearn-vm",
      availability: "planned",
      requiredApplianceVersion: "0.1",
      scenarioPackId: "dns-incident",
      roleLogins: [
        {
          id: "network-technician",
          title: "Network Technician",
          role: "ops",
          description: "Check resolvers, caches, and zone clues in the lab.",
        },
        {
          id: "incident-analyst",
          title: "Incident Analyst",
          role: "blue",
          description: "Correlate synthetic DNS logs with user impact reports.",
        },
      ],
    },
  },
  {
    id: "linux-permissions",
    title: "Linux Permissions Investigation",
    summary: "Trace a permissions misconfiguration using role-specific lab accounts.",
    availability: "planned",
    currentDelivery: "relearn-vm",
    skills: ["Permissions", "Least privilege", "Evidence notes"],
    vmDelivery: {
      deliveryMode: "relearn-vm",
      availability: "planned",
      requiredApplianceVersion: "0.1",
      scenarioPackId: "linux-permissions",
      roleLogins: [
        {
          id: "junior-admin",
          title: "Junior Admin",
          role: "ops",
          description: "Inspect ownership and mode clues without escalating outside scope.",
        },
        {
          id: "security-analyst",
          title: "Security Analyst",
          role: "blue",
          description: "Document impact and recommend remediation.",
        },
      ],
    },
  },
  {
    id: "authentication-failure",
    title: "Authentication Failure",
    summary: "Work an auth-related incident with help-desk and identity roles.",
    availability: "planned",
    currentDelivery: "relearn-vm",
    skills: ["Authentication", "MFA concepts", "Session hygiene"],
    vmDelivery: {
      deliveryMode: "relearn-vm",
      availability: "planned",
      requiredApplianceVersion: "0.1",
      scenarioPackId: "authentication-failure",
      roleLogins: [
        {
          id: "help-desk",
          title: "Help Desk",
          role: "ops",
          description: "Handle the user report with safe reset procedures (simulated).",
        },
        {
          id: "identity-admin",
          title: "Identity Admin",
          role: "admin",
          description: "Review fictional directory and MFA enrollment state.",
        },
        {
          id: "security-analyst",
          title: "Security Analyst",
          role: "blue",
          description: "Check synthetic auth logs and close the incident.",
        },
      ],
    },
  },
  {
    id: "log-analysis",
    title: "Log Analysis",
    summary: "Triage synthetic logs and alerts in a contained SIEM-like lab view.",
    availability: "planned",
    currentDelivery: "relearn-vm",
    skills: ["Log triage", "Alert priority", "Reporting"],
    vmDelivery: {
      deliveryMode: "relearn-vm",
      availability: "planned",
      requiredApplianceVersion: "0.1",
      scenarioPackId: "log-analysis",
      roleLogins: [
        {
          id: "soc-analyst",
          title: "SOC Analyst",
          role: "blue",
          description: "Prioritize synthetic alerts and write findings.",
        },
      ],
    },
  },
  {
    id: "vulnerability-management",
    title: "Vulnerability Management",
    summary: "Prioritize fictional scan findings and track remediation status.",
    availability: "planned",
    currentDelivery: "relearn-vm",
    skills: ["Vuln prioritization", "Asset context", "Verification"],
    vmDelivery: {
      deliveryMode: "relearn-vm",
      availability: "planned",
      requiredApplianceVersion: "0.1",
      scenarioPackId: "vulnerability-management",
      roleLogins: [
        {
          id: "vuln-analyst",
          title: "Vuln Analyst",
          role: "blue",
          description: "Rank findings and propose a patch window (lab only).",
        },
      ],
    },
  },
];

export function getLabScenario(id: string): LabScenarioCatalogEntry | undefined {
  return LAB_SCENARIO_CATALOG.find((s) => s.id === id);
}

export function getLabScenarioCatalog(): LabScenarioCatalogEntry[] {
  return LAB_SCENARIO_CATALOG;
}
