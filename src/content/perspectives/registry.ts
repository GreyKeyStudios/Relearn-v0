import type { PerspectiveSet } from "@/content/perspectives/types";
import { DEMO_AUTHENTICATION_PERSPECTIVES } from "@/content/perspectives/demo-authentication";
import {
  CRYPTO_PERSPECTIVES,
  HTTP_PERSPECTIVES,
  INCIDENT_RESPONSE_PERSPECTIVES,
  LOGGING_PERSPECTIVES,
} from "@/content/perspectives/more-foundations";

/**
 * DNS — technology → misconfiguration risk → red/blue/purple (conceptual).
 */
export const DNS_PERSPECTIVES: PerspectiveSet = {
  id: "dns-perspectives",
  title: "DNS",
  topicRef: { certId: "ccna", topicId: "dns" },
  knowledgeNodeId: "dns",
  blocks: [
    {
      mode: "neutral",
      title: "How DNS normally works",
      body: "DNS maps human-readable names to addresses. Resolvers ask authoritative servers (or caches) for records such as A/AAAA. When DNS is healthy, users reach the intended host; when it fails, apps often look “down” even though the network path is fine.",
      bullets: [
        "Client → resolver → authoritative (or cache hit)",
        "Wrong answer or NXDOMAIN breaks the user journey at the name layer",
        "TTL and caching explain why fixes can appear delayed",
      ],
    },
    {
      mode: "red",
      title: "Misconfiguration and abuse categories (conceptual)",
      body: "In authorized labs, red-team thinking about DNS starts with categories: stale records pointing at the wrong host, overly trusting resolvers, and missing monitoring when name data changes. Training stays on scoped lab zones and synthetic clues — never querying or altering public production DNS outside written authorization.",
      bullets: [
        "Ask which record or trust relationship would change the answer",
        "Prefer lab playbooks and fake zones over live internet probing",
        "Document the category of weakness, not a public exploit recipe",
      ],
    },
    {
      mode: "blue",
      title: "Prevention, detection, remediation",
      body: "Defenders keep inventories of critical names, alert on unexpected record changes, and verify that resolvers only use approved forwarders. Remediation restores the correct record, flushes relevant caches when needed, and confirms users resolve to the intended address.",
      bullets: [
        "Prevent: change control on zones; least privilege on DNS admin",
        "Detect: zone/change alerts; sudden NXDOMAIN spikes for key names",
        "Remediate: correct record → verify with dig/nslookup → note TTL wait",
      ],
    },
    {
      mode: "purple",
      title: "Map simulated DNS issues to telemetry",
      body: "Purple practice pairs a scoped lab DNS fault with the logs and tickets defenders should see: resolver errors, help-desk “can’t reach the app” reports, and monitoring on the critical name. If users felt pain but no alert fired, the gap is usually visibility — not a louder attack.",
      bullets: [
        "Tie each simulated fault to a log field or alert",
        "Note which user symptoms appear before DNS is suspected",
        "Retest after enabling monitoring on the critical name",
      ],
    },
  ],
};

/**
 * Linux permissions — technology → misconfiguration risk → red/blue/purple.
 */
export const PERMISSIONS_PERSPECTIVES: PerspectiveSet = {
  id: "permissions-perspectives",
  title: "Users, Groups, and Permissions",
  topicRef: { certId: "linux-plus", topicId: "permissions" },
  knowledgeNodeId: "linux-permissions",
  blocks: [
    {
      mode: "neutral",
      title: "How permissions normally work",
      body: "Linux decides file access with owner, group, and other bits (plus ACLs on some systems). Least privilege means a process or user gets only the access required for the job. Correct ownership and modes keep shared directories usable without making everything world-writable.",
      bullets: [
        "Read / write / execute for user, group, other",
        "Ownership ties identity to those bits",
        "Directories need execute to traverse; files need execute to run",
      ],
    },
    {
      mode: "red",
      title: "Privilege and exposure categories (conceptual)",
      body: "In sandboxed labs, red-team framing looks for categories of weakness: world-writable sensitive paths, overly broad group membership, and services running as stronger identities than needed. The training goal is to recognize the class of exposure and collect evidence tokens — never to escalate on a host outside the lab scope.",
      bullets: [
        "Classify: ownership, mode, group, or service identity",
        "Stay inside the disposable guest or scenario pack",
        "Prefer proof notes over changing production-like hosts",
      ],
    },
    {
      mode: "blue",
      title: "Hardening, logging, remediation",
      body: "Blue practice inventories sensitive paths, removes world-write where it does not belong, and reviews group membership. Logs and audit trails should show permission or ownership changes on critical files. Remediation restores least privilege and verifies the service still works for intended users.",
      bullets: [
        "Prevent: default umask, controlled shared dirs, minimal groups",
        "Detect: unexpected mode/owner changes on sensitive paths",
        "Remediate: fix mode/owner → retest the legitimate workflow",
      ],
    },
    {
      mode: "purple",
      title: "Connect lab findings to defensive controls",
      body: "Purple exercises introduce a scoped permissions fault, then ask which control should have caught it: baseline config management, FIM-style alerts, or access reviews. Silent success usually means the control was missing or tuned out — fix the control, then retest the same lab fault.",
      bullets: [
        "Map the fault to a control (baseline, alert, review)",
        "Document who would have noticed in a real shop",
        "Retest after the control is enabled in the lab",
      ],
    },
  ],
};

export interface TopicConnectiveTissue {
  perspectiveSet: PerspectiveSet;
  knowledgeNodeId: string;
  /** Optional next step in a cross-track mini-curriculum */
  journeyNext?: {
    title: string;
    href: string;
    reason: string;
  };
}

const BY_TOPIC_KEY: Record<string, TopicConnectiveTissue> = {
  "computer-fundamentals:cf-browser-url-cloud": {
    perspectiveSet: HTTP_PERSPECTIVES,
    knowledgeNodeId: "http-https",
    journeyNext: {
      title: "Authentication",
      href: "/cert/security-plus/lesson/authentication",
      reason:
        "You know how browsers reach a site — next, how the site proves who you are.",
    },
  },
  "security-plus:cryptography-basics": {
    perspectiveSet: CRYPTO_PERSPECTIVES,
    knowledgeNodeId: "cryptography-fundamentals",
    journeyNext: {
      title: "Authentication",
      href: "/cert/security-plus/lesson/authentication",
      reason:
        "Crypto protects channels and proofs — authentication uses those ideas in login flows.",
    },
  },
  "security-plus:authentication": {
    perspectiveSet: DEMO_AUTHENTICATION_PERSPECTIVES,
    knowledgeNodeId: "authentication",
    journeyNext: {
      title: "Log Analysis",
      href: "/cert/cysa-plus/lesson/log-analysis",
      reason:
        "Failed and successful logins should leave traces — practice reading those signals.",
    },
  },
  "cysa-plus:log-analysis": {
    perspectiveSet: LOGGING_PERSPECTIVES,
    knowledgeNodeId: "logging-monitoring",
    journeyNext: {
      title: "Incident Response",
      href: "/cert/security-plus/lesson/incident-response",
      reason: "Logs feed response — next, contain, remediate, and document.",
    },
  },
  "security-plus:incident-response": {
    perspectiveSet: INCIDENT_RESPONSE_PERSPECTIVES,
    knowledgeNodeId: "incident-response",
    journeyNext: {
      title: "The Missing Patch",
      href: "/career/ethical-hacking/scenarios/missing-patch",
      reason:
        "Apply prioritization, scope, logs, and response in a safe blue → red → blue walkthrough.",
    },
  },
  "cysa-plus:incident-response": {
    perspectiveSet: INCIDENT_RESPONSE_PERSPECTIVES,
    knowledgeNodeId: "incident-response",
    journeyNext: {
      title: "The Missing Patch",
      href: "/career/ethical-hacking/scenarios/missing-patch",
      reason:
        "Apply prioritization, scope, logs, and response in a safe blue → red → blue walkthrough.",
    },
  },
  "ccna:dns": {
    perspectiveSet: DNS_PERSPECTIVES,
    knowledgeNodeId: "dns",
  },
  "network-plus:dns": {
    perspectiveSet: DNS_PERSPECTIVES,
    knowledgeNodeId: "dns",
  },
  "linux-plus:permissions": {
    perspectiveSet: PERMISSIONS_PERSPECTIVES,
    knowledgeNodeId: "linux-permissions",
  },
};

export function getConnectiveTissue(
  certId: string,
  topicId: string
): TopicConnectiveTissue | undefined {
  return BY_TOPIC_KEY[`${certId}:${topicId}`];
}

export function getAllPerspectiveSets(): PerspectiveSet[] {
  return [
    DEMO_AUTHENTICATION_PERSPECTIVES,
    DNS_PERSPECTIVES,
    PERMISSIONS_PERSPECTIVES,
    HTTP_PERSPECTIVES,
    CRYPTO_PERSPECTIVES,
    LOGGING_PERSPECTIVES,
    INCIDENT_RESPONSE_PERSPECTIVES,
  ];
}
