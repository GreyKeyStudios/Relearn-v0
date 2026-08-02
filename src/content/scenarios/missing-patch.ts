import type { SecurityScenario } from "@/content/scenarios/types";
import { defaultScoringModel } from "@/lib/scenario-scoring";

/**
 * The Missing Patch — harmless multi-role demo scenario.
 * All hosts, credentials, alerts, and “proof of access” tokens are fictional.
 * No real exploit code or executable payloads.
 */
export const MISSING_PATCH_SCENARIO: SecurityScenario = {
  id: "missing-patch",
  title: "The Missing Patch",
  description:
    "A fictional company delayed patching an internal training server. Practice blue → red → blue decision-making with synthetic evidence only.",
  difficulty: "beginner",
  prerequisites: [
    "vulnerability-management",
    "logging-monitoring",
    "incident-response",
  ],
  certificationMappings: [
    { certFamily: "security-plus", confidence: "conceptual" },
    { certFamily: "cysa-plus", confidence: "conceptual" },
    { certFamily: "ejpt", confidence: "conceptual" },
  ],
  fictionalOrganization: "Northwind Training Labs (fictional)",
  environmentDescription:
    "Small corporate LAN with a jump host, a SIEM appliance, and one outdated internal training web server (trn-web-01). No internet-facing production systems are in scope.",
  labEnvironment: {
    deliveryMode: "web-walkthrough",
    availability: "available",
    walkthroughHref: "/career/ethical-hacking/scenarios/missing-patch",
    documentationUrl: "/labs/relearn-vm",
    requiredApplianceVersion: "0.1",
    scenarioPackId: "missing-patch",
    scenarioPackVersion: "0.1.0",
    supportedProviders: ["virtualbox"],
    roleLogins: [
      {
        id: "blue-analyst",
        title: "Blue Analyst",
        role: "blue",
        description: "Prioritize patches, enable monitoring, investigate, remediate.",
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
    prerequisites: [
      "vulnerability-management",
      "logging-monitoring",
      "incident-response",
    ],
  },
  rulesOfEngagement: [
    "Only systems listed in the asset inventory are in scope",
    "Use predefined safe actions — no custom exploit code",
    "Preserve synthetic logs and evidence tokens",
    "Stop and report if you are unsure whether an action is allowed",
  ],
  prohibitedActions: [
    "Targeting systems outside the asset list",
    "Deleting or wiping SIEM logs",
    "Deploying real malware or ransomware simulations that encrypt learner files outside the app",
    "Using credentials against production-like hosts marked out of scope",
  ],
  evidence: [
    {
      id: "ev-asset-list",
      title: "Asset inventory export",
      kind: "asset",
      summary:
        "trn-web-01 — Ubuntu 20.04 training wiki — last patched 14 months ago — owner: L&D",
    },
    {
      id: "ev-vuln-scan",
      title: "Vulnerability scan excerpt (synthetic)",
      kind: "artifact",
      summary:
        "trn-web-01 reports a critical missing OS security update (LAB-TOKEN-CVE-FAKE-2024-001).",
    },
    {
      id: "ev-alert-auth",
      title: "SIEM alert: unusual local auth on trn-web-01",
      kind: "alert",
      summary:
        "Burst of failed then successful local logins from jump-host lab account (simulated).",
    },
    {
      id: "ev-auth-log",
      title: "auth.log excerpt (synthetic)",
      kind: "log",
      summary:
        "Accepted password for labuser from 10.10.20.5 — session opens wiki admin panel (fake).",
    },
    {
      id: "ev-proof-token",
      title: "Proof-of-access token",
      kind: "artifact",
      summary: "FLAG{TRAINING-ONLY-MISSING-PATCH} found on fictional desktop path.",
    },
  ],
  phases: [
    {
      id: "phase-blue-prioritize",
      role: "blue",
      title: "Blue Team — Prioritize the backlog",
      briefing:
        "You are on the Northwind blue team. Review the asset list, identify the outdated system, prioritize remediation, and choose basic monitoring coverage before any red-team exercise begins.",
      objectives: [
        {
          id: "obj-identify-outdated",
          title: "Identify the outdated host",
          description: "Select trn-web-01 from the inventory as the overdue patch target.",
          required: true,
        },
        {
          id: "obj-prioritize-patch",
          title: "Prioritize remediation",
          description: "Mark the missing OS update as priority over cosmetic tickets.",
          required: true,
        },
        {
          id: "obj-enable-monitoring",
          title: "Enable basic monitoring",
          description: "Turn on auth failure alerts for trn-web-01 in the fictional SIEM.",
          required: true,
        },
      ],
      availableActions: [
        {
          id: "act-review-assets",
          label: "Review asset inventory",
          outcome: "You note trn-web-01 is 14 months behind on patches.",
          advancesObjectiveIds: ["obj-identify-outdated"],
          collectsEvidenceIds: ["ev-asset-list"],
        },
        {
          id: "act-prioritize-critical",
          label: "Prioritize critical missing patch on trn-web-01",
          outcome: "Change ticket raised: patch trn-web-01 this week.",
          advancesObjectiveIds: ["obj-prioritize-patch"],
          collectsEvidenceIds: ["ev-vuln-scan"],
        },
        {
          id: "act-enable-auth-alerts",
          label: "Enable auth-failure alerts for trn-web-01",
          outcome: "SIEM rule LAB-AUTH-FAIL enabled (synthetic).",
          advancesObjectiveIds: ["obj-enable-monitoring"],
        },
        {
          id: "act-ignore-training-box",
          label: "Ignore training boxes — only watch production ERP",
          outcome: "You leave trn-web-01 unmonitored. This weakens detection later.",
          violatesScope: false,
        },
        {
          id: "act-scan-internet-random",
          label: "Scan random internet hosts for the same CVE",
          outcome: "Blocked — out of scope. Rules of engagement violated.",
          violatesScope: true,
        },
      ],
      evidenceIds: ["ev-asset-list", "ev-vuln-scan"],
      completionHint: "Identify trn-web-01, prioritize the patch, and enable auth alerts.",
    },
    {
      id: "phase-red-simulate",
      role: "red",
      title: "Red Team — Scoped simulation",
      briefing:
        "Authorized red-team window. Using only the clues and safe actions provided, identify the weak system, select a simulated access path, and collect a fake proof-of-access token. Do not leave the asset list.",
      objectives: [
        {
          id: "obj-find-weak-host",
          title: "Identify the weak system from clues",
          description: "Confirm trn-web-01 from scan and inventory clues.",
          required: true,
        },
        {
          id: "obj-fake-access",
          title: "Achieve fake proof-of-access",
          description: "Collect the training FLAG token via a predefined safe action.",
          required: true,
        },
        {
          id: "obj-stay-in-scope",
          title: "Remain in scope",
          description: "Do not select out-of-scope actions.",
          required: true,
        },
      ],
      availableActions: [
        {
          id: "act-read-clues",
          label: "Review vuln scan + asset clues",
          outcome: "Clues point to trn-web-01 as the outdated training wiki.",
          advancesObjectiveIds: ["obj-find-weak-host", "obj-stay-in-scope"],
          collectsEvidenceIds: ["ev-vuln-scan", "ev-asset-list"],
        },
        {
          id: "act-simulated-access",
          label: "Use lab playbook: simulated local auth on trn-web-01",
          outcome:
            "Simulation grants a fictional session and drops FLAG{TRAINING-ONLY-MISSING-PATCH}.",
          advancesObjectiveIds: ["obj-fake-access", "obj-stay-in-scope"],
          collectsEvidenceIds: ["ev-proof-token", "ev-auth-log"],
        },
        {
          id: "act-attack-ceo-laptop",
          label: "Target the CEO laptop (not on asset list)",
          outcome: "Disallowed — out of scope.",
          violatesScope: true,
        },
        {
          id: "act-wipe-siem",
          label: "Delete SIEM indices to hide activity",
          outcome: "Disallowed — destroys evidence and violates professionalism.",
          destroysEvidence: true,
          violatesScope: true,
        },
      ],
      evidenceIds: ["ev-proof-token", "ev-auth-log"],
      completionHint: "Stay on trn-web-01 and collect the training FLAG via the lab playbook.",
    },
    {
      id: "phase-blue-respond",
      role: "blue",
      title: "Blue Team — Investigate and remediate",
      briefing:
        "Alerts fired. Review synthetic alerts and logs, isolate the fictional host, apply the simulated patch, reset lab credentials, verify the weakness is closed, and write a short incident report.",
      objectives: [
        {
          id: "obj-find-initial-access",
          title: "Determine initial access point",
          description: "Attribute activity to trn-web-01 local auth from the jump host.",
          required: true,
        },
        {
          id: "obj-isolate-host",
          title: "Isolate the fictional host",
          description: "Place trn-web-01 in a simulated quarantine VLAN.",
          required: true,
        },
        {
          id: "obj-apply-patch",
          title: "Apply the simulated patch",
          description: "Mark LAB-TOKEN-CVE-FAKE-2024-001 as patched in the lab console.",
          required: true,
        },
        {
          id: "obj-reset-creds",
          title: "Reset fictional credentials",
          description: "Rotate labuser password and revoke sessions (simulated).",
          required: true,
        },
        {
          id: "obj-verify-fix",
          title: "Verify the weakness is fixed",
          description: "Re-scan shows the fake CVE cleared.",
          required: true,
        },
        {
          id: "obj-write-report",
          title: "Produce a short incident report",
          description: "Submit the in-app report form.",
          required: true,
        },
      ],
      availableActions: [
        {
          id: "act-review-alert-log",
          label: "Review SIEM alert + auth.log",
          outcome: "Initial access traced to simulated local auth on trn-web-01.",
          advancesObjectiveIds: ["obj-find-initial-access"],
          collectsEvidenceIds: ["ev-alert-auth", "ev-auth-log"],
        },
        {
          id: "act-isolate-host",
          label: "Isolate trn-web-01 (quarantine VLAN)",
          outcome: "Host isolated in the lab network diagram.",
          advancesObjectiveIds: ["obj-isolate-host"],
        },
        {
          id: "act-apply-patch",
          label: "Apply simulated OS patch",
          outcome: "Patch token applied — CVE lab finding clears on next scan.",
          advancesObjectiveIds: ["obj-apply-patch"],
        },
        {
          id: "act-reset-creds",
          label: "Reset labuser + revoke sessions",
          outcome: "Fictional credentials rotated.",
          advancesObjectiveIds: ["obj-reset-creds"],
        },
        {
          id: "act-verify-rescan",
          label: "Re-scan to verify fix",
          outcome: "Synthetic scanner reports LAB-TOKEN-CVE-FAKE-2024-001 remediated.",
          advancesObjectiveIds: ["obj-verify-fix"],
        },
        {
          id: "act-submit-report",
          label: "Submit incident report",
          outcome: "Report saved: timeline, impact, remediation, and follow-ups.",
          advancesObjectiveIds: ["obj-write-report"],
        },
        {
          id: "act-wipe-logs-cover",
          label: "Wipe auth logs to “clean up”",
          outcome: "Disallowed — destroys evidence.",
          destroysEvidence: true,
          violatesScope: true,
        },
      ],
      evidenceIds: ["ev-alert-auth", "ev-auth-log"],
      completionHint: "Investigate, isolate, patch, reset, verify, and submit the report.",
    },
  ],
  scoringModel: defaultScoringModel(),
  debrief: {
    summary:
      "Delayed patching on a forgotten training host created a scoped path to a fake proof-of-access token. Detection depended on auth monitoring you chose in phase 1. Remediation required isolation, patching, credential reset, verification, and a written report.",
    attackPathReplay: [
      "Asset aged out of patch cycle (trn-web-01)",
      "Synthetic vuln finding published to backlog",
      "Simulated local auth from jump host",
      "Training FLAG collected",
      "SIEM auth alert + log correlation",
      "Isolate → patch → reset → verify → report",
    ],
    defensiveControls: [
      "Asset inventory freshness",
      "Vulnerability prioritization",
      "Auth failure alerting",
      "Network quarantine",
      "Patch verification scan",
      "Credential hygiene after suspected access",
    ],
    lessonsLearned: [
      "Training systems still need patch SLAs",
      "Monitoring choices made before an exercise change detection quality",
      "Technical access without documentation still fails the exercise",
      "Destroying evidence is an automatic professional failure",
    ],
  },
};

export function getScenario(id: string): SecurityScenario | undefined {
  if (id === MISSING_PATCH_SCENARIO.id) return MISSING_PATCH_SCENARIO;
  return undefined;
}

export function getAllScenarios(): SecurityScenario[] {
  return [MISSING_PATCH_SCENARIO];
}
