import type { PerspectiveSet } from "@/content/perspectives/types";

export const HTTP_PERSPECTIVES: PerspectiveSet = {
  id: "http-perspectives",
  title: "HTTP and HTTPS",
  topicRef: {
    certId: "computer-fundamentals",
    topicId: "cf-browser-url-cloud",
  },
  knowledgeNodeId: "http-https",
  blocks: [
    {
      mode: "neutral",
      title: "How HTTP/HTTPS normally works",
      body: "Browsers send requests to servers and receive responses — status codes, headers, and a body. HTTPS wraps that exchange in TLS so eavesdroppers on the path cannot trivially read or alter the content. URLs name the resource; cookies and sessions (covered elsewhere) keep users signed in across requests.",
      bullets: [
        "Request → response with status and headers",
        "HTTPS = HTTP protected by TLS",
        "Wrong host or broken TLS looks like “the site is down” to users",
      ],
    },
    {
      mode: "red",
      title: "Weakness categories (conceptual)",
      body: "In scoped labs, red-team framing looks for categories: cleartext sensitive traffic, trusting the wrong host name, and confusing UI that trains users to ignore certificate warnings. Training uses fictional sites and synthetic captures — not attacking public websites.",
      bullets: [
        "Classify: transport, naming, or user-trust issues",
        "Stay on lab hosts and synthetic traffic",
        "Document the category; do not publish exploit recipes for the open internet",
      ],
    },
    {
      mode: "blue",
      title: "Prevention, detection, remediation",
      body: "Defenders prefer HTTPS everywhere it matters, monitor for unexpected cleartext services, and teach users not to click through certificate warnings on real work. Remediation turns on TLS, fixes name mismatches, and verifies with a browser and a simple header check.",
      bullets: [
        "Prevent: TLS on sensitive services; HSTS where appropriate",
        "Detect: cleartext findings on internal scans; cert expiry alerts",
        "Remediate: fix cert/name → retest the URL → update runbooks",
      ],
    },
    {
      mode: "purple",
      title: "Connect lab faults to what users and logs show",
      body: "Purple exercises break a lab site’s TLS or name mapping, then ask which ticket text and which proxy/web logs should have fired. If users complained but no alert existed, add monitoring — then retest the same fault.",
      bullets: [
        "Map each fault to a user symptom and a log line",
        "Note ignored cert warnings as a human-control gap",
        "Retest after TLS or naming is corrected",
      ],
    },
  ],
};

export const CRYPTO_PERSPECTIVES: PerspectiveSet = {
  id: "crypto-perspectives",
  title: "Cryptography Basics",
  topicRef: { certId: "security-plus", topicId: "cryptography-basics" },
  knowledgeNodeId: "cryptography-fundamentals",
  blocks: [
    {
      mode: "neutral",
      title: "What cryptography is for",
      body: "Cryptography supports confidentiality, integrity, and authentication building blocks: encryption, hashing, and digital signatures. Algorithms and key handling matter as much as “turning encryption on.” Weak or misapplied crypto can look secure while failing its job.",
      bullets: [
        "Encrypt for confidentiality; hash for integrity fingerprints",
        "Keys and certificates are part of the system, not decorations",
        "TLS is applied cryptography users meet every day",
      ],
    },
    {
      mode: "red",
      title: "Misuse categories (conceptual)",
      body: "Lab-safe red framing focuses on categories of misuse: home-grown crypto, rolled-own protocols, and treating encoding (Base64) as encryption. The goal is to recognize the category in a design review — not to break real bank systems.",
      bullets: [
        "Ask: is this encryption, hashing, or just encoding?",
        "Prefer design review language over operational cracking guides",
        "Stay inside authorized labs and fictional systems",
      ],
    },
    {
      mode: "blue",
      title: "Controls and verification",
      body: "Blue practice inventories where crypto is required, bans cleartext for sensitive classes of data, and watches for expired certificates. Remediation replaces weak configs with approved patterns and verifies with scanners and a known-good client.",
      bullets: [
        "Prevent: approved libraries and TLS configs",
        "Detect: expired certs; cleartext protocol findings",
        "Remediate: rotate keys/certs → retest clients",
      ],
    },
    {
      mode: "purple",
      title: "Tie a lab crypto fault to evidence",
      body: "Purple runs a scoped misconfiguration (e.g. lab service without TLS), confirms what a scanner or browser shows, then enables the control and retests. The lesson is closing the loop — not collecting real credentials.",
      bullets: [
        "Show before/after evidence from the lab tool",
        "Name the control that should have blocked the fault",
        "Retest after remediation",
      ],
    },
  ],
};

export const LOGGING_PERSPECTIVES: PerspectiveSet = {
  id: "logging-perspectives",
  title: "Log Analysis",
  topicRef: { certId: "cysa-plus", topicId: "log-analysis" },
  knowledgeNodeId: "logging-monitoring",
  blocks: [
    {
      mode: "neutral",
      title: "Why logs exist",
      body: "Logs record what a system believes happened: auth successes/failures, service starts, errors. Analysts use them to reconstruct timelines. Without trustworthy time and retained logs, investigations stall.",
      bullets: [
        "Logs are evidence — protect them",
        "Timestamps and host identity matter",
        "Not every line is an incident; triage is a skill",
      ],
    },
    {
      mode: "red",
      title: "Blind-spot categories (conceptual)",
      body: "In labs, red framing asks which actions would leave little or no telemetry if logging were weak: missing auth logs, no forwarder, or clocks skewing timelines. Training uses synthetic logs — never wiping real production indices.",
      bullets: [
        "Identify which step would be invisible without a log source",
        "Never destroy evidence in real environments",
        "Document the visibility gap as the finding",
      ],
    },
    {
      mode: "blue",
      title: "Collection, triage, retention",
      body: "Blue practice defines required log sources, ships them to a central place when possible, and tunes noisy rules. Remediation after an incident often includes turning on the missing log source and proving it with a test event.",
      bullets: [
        "Prevent gaps: inventory critical log sources",
        "Detect: alert on absence of expected logs as well as bad events",
        "Remediate: enable source → generate test event → confirm receipt",
      ],
    },
    {
      mode: "purple",
      title: "Attack-path vs log-path",
      body: "Purple pairs each simulated step with the log line that should exist. Missing lines become engineering work items. Retest the same simulation after logging improves.",
      bullets: [
        "Build a step → log-field table",
        "Treat missing telemetry as a defect",
        "Retest after the source is enabled",
      ],
    },
  ],
};

export const INCIDENT_RESPONSE_PERSPECTIVES: PerspectiveSet = {
  id: "incident-response-perspectives",
  title: "Incident Response",
  topicRef: { certId: "security-plus", topicId: "incident-response" },
  knowledgeNodeId: "incident-response",
  blocks: [
    {
      mode: "neutral",
      title: "What incident response is for",
      body: "Incident response is the disciplined loop: prepare, detect, contain, eradicate, recover, and learn. It protects people and systems while preserving evidence. Panic wiping is not a strategy.",
      bullets: [
        "Containment limits blast radius",
        "Evidence enables later lessons and legal needs",
        "Recovery without verification invites repeats",
      ],
    },
    {
      mode: "red",
      title: "Pressure points (conceptual)",
      body: "Lab red framing considers how noisy or quiet simulated actions appear to responders — not how to evade real defenders on the internet. The educational goal is helping blue teams see gaps.",
      bullets: [
        "Ask which IR step would struggle without telemetry",
        "Stay in scope; no real destructive payloads",
        "Prefer purple collaboration over “gotcha” culture",
      ],
    },
    {
      mode: "blue",
      title: "Playbooks and professionalism",
      body: "Blue IR uses playbooks, clear roles, and careful notes. Contain first when needed, then eradicate and recover. Write the report so the next shift understands decisions.",
      bullets: [
        "Follow scope and escalation paths",
        "Preserve evidence before broad rebuilds when policy requires",
        "Verify fixes with a defined test",
      ],
    },
    {
      mode: "purple",
      title: "Replay and improve",
      body: "Purple replays the lab incident timeline, marks missed detections, and updates playbooks or alerts. The win is a better next response — measured by a retest.",
      bullets: [
        "Replay steps against the playbook",
        "Convert misses into concrete control changes",
        "Retest the same scenario pack or walkthrough path",
      ],
    },
  ],
};
