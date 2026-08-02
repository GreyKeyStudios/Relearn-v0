import type { PerspectiveSet } from "@/content/perspectives/types";

/**
 * Demo perspective set for Authentication.
 * Conceptual / lab-safe only — no operational attack instructions.
 */
export const DEMO_AUTHENTICATION_PERSPECTIVES: PerspectiveSet = {
  id: "demo-authentication",
  title: "Authentication",
  topicRef: { certId: "security-plus", topicId: "authentication" },
  knowledgeNodeId: "authentication",
  blocks: [
    {
      mode: "neutral",
      title: "How authentication works",
      body: "Authentication answers a single question: is this entity who it claims to be? Systems typically combine something you know (a password), something you have (a token or phone), and/or something you are (biometrics). After a successful check, the system issues a session or token so the user is not re-challenged on every request.",
      bullets: [
        "Identity claim → verifier checks credentials or factors",
        "Success issues a session/token with a lifetime",
        "MFA raises the cost of a single stolen password",
      ],
    },
    {
      mode: "red",
      title: "Categories of authentication weakness (conceptual)",
      body: "In authorized labs, red-team thinking starts from categories of weakness — not from a payload. Common conceptual classes include reusable passwords, missing MFA on sensitive accounts, predictable reset flows, and session tokens that never expire. The goal in training is to recognize the class of weakness and document evidence, never to attack systems outside scope.",
      bullets: [
        "Identify whether the weakness is credential, factor, or session related",
        "Stay inside the written rules of engagement",
        "Prefer proof tokens and screenshots over disruptive actions",
      ],
    },
    {
      mode: "blue",
      title: "Prevention, logging, detection, remediation",
      body: "Blue-team practice hardens authentication before an incident: enforce MFA, rotate credentials after suspected exposure, and alert on impossible travel or repeated failures. Logs should show who authenticated, from where, and whether MFA succeeded. Remediation closes the specific weakness and verifies the control still works.",
      bullets: [
        "Prevent: MFA, strong reset flows, short-lived sessions",
        "Detect: failed logons, MFA fatigue patterns, new device enrollments",
        "Remediate: reset, revoke sessions, confirm with a test login",
      ],
    },
    {
      mode: "purple",
      title: "Connect simulated attacker behavior to defensive telemetry",
      body: "Purple-team practice pairs a scoped simulated attempt with the exact alerts and log fields defenders should have seen. If the simulation succeeded silently, the gap is usually missing telemetry, a tuned-out rule, or a control that was never enabled — not “try a louder exploit.”",
      bullets: [
        "Map each simulated step to a log source or alert",
        "Document failed detections without blaming individuals",
        "Retest after enabling or tuning the control",
      ],
    },
  ],
};

export function getPerspectiveSet(id: string): PerspectiveSet | undefined {
  if (id === DEMO_AUTHENTICATION_PERSPECTIVES.id) {
    return DEMO_AUTHENTICATION_PERSPECTIVES;
  }
  return undefined;
}
