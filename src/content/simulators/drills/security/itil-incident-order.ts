import type { OrderDrillItem } from "@/components/simulators/SimulatorRegistry";

export const ITIL_INCIDENT_POOL: OrderDrillItem[] = [
  {
    id: "itil-incident-flow",
    prompt: "Order ITIL 4 incident management activities from detection to closure.",
    items: [
      "Log and categorize incident",
      "Prioritize and diagnose",
      "Resolve and restore service",
      "Close incident and review",
    ],
    weakConcept: "Incident management workflow",
    explanation: "Incidents are logged, prioritized, resolved to restore service, then formally closed.",
  },
  {
    id: "itil-vs-problem",
    prompt: "Order handling when recurring incidents suggest an underlying defect.",
    items: [
      "Link related incidents",
      "Open problem record for root cause analysis",
      "Identify workaround for users",
      "Implement permanent fix via change",
    ],
    weakConcept: "Incident to problem escalation",
    explanation: "Problems address root cause; incidents restore service quickly with workarounds.",
  },
  {
    id: "itil-change-types",
    prompt: "Order change types from least to most formal governance (typical ITIL practice).",
    items: ["Standard change", "Normal change", "Emergency change"],
    weakConcept: "Change type governance",
    explanation: "Standard changes are pre-approved; normal require CAB; emergency are expedited for urgency.",
  },
  {
    id: "itil-priority",
    prompt: "Factors for incident priority — order the assessment flow.",
    items: [
      "Assess impact on users and business",
      "Assess urgency / time sensitivity",
      "Assign priority matrix result",
      "Allocate response resources",
    ],
    weakConcept: "Impact and urgency matrix",
    explanation: "Priority derives from impact × urgency, then drives resource allocation.",
  },
  {
    id: "itil-service-request",
    prompt: "Classify and order: user requests new laptop vs production database down.",
    items: [
      "Database down — incident (service disruption)",
      "New laptop — service request (standard fulfillment)",
    ],
    weakConcept: "Incident vs service request",
    explanation: "Incidents are unplanned disruptions; service requests are routine requests.",
  },
  {
    id: "itil-major-incident",
    prompt: "Order major incident management steps.",
    items: [
      "Declare major incident and assemble team",
      "Communicate status to stakeholders",
      "Coordinate technical recovery",
      "Conduct post-incident review",
    ],
    weakConcept: "Major incident procedure",
    explanation: "Major incidents require dedicated coordination, communication, and post-review.",
  },
  {
    id: "itil-change-approval",
    prompt: "Order normal change workflow before deployment.",
    items: [
      "Submit change request with risk assessment",
      "CAB review and approval",
      "Schedule and implement change",
      "Review change outcome (PIR if needed)",
    ],
    weakConcept: "Normal change workflow",
    explanation: "CAB approval precedes implementation; post-implementation review validates success.",
  },
  {
    id: "itil-problem-rca",
    prompt: "Order problem management root cause activities.",
    items: [
      "Identify and log problem",
      "Investigate root cause",
      "Propose and test solution",
      "Close problem after verification",
    ],
    weakConcept: "Problem management lifecycle",
    explanation: "Problems persist until root cause is addressed and verified, unlike incident closure.",
  },
  {
    id: "itil-classify",
    prompt: "Match ITIL practice to scenario — order these classifications (incident → problem → change).",
    items: [
      "Email server unavailable — incident",
      "Repeated email crashes from same bug — problem",
      "Deploy patch fixing email bug — change",
    ],
    weakConcept: "Practice interaction",
    explanation: "Incidents restore service; problems find cause; changes implement fixes.",
  },
];
