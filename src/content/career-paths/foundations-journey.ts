/**
 * Continuous mini-curriculum:
 * HTTP/HTTPS → Authentication → Log Analysis → Incident Response → Missing Patch
 */
export interface FoundationsJourneyStep {
  id: string;
  title: string;
  summary: string;
  href: string;
  certId?: string;
  topicId?: string;
}

export const FOUNDATIONS_TO_MISSING_PATCH: FoundationsJourneyStep[] = [
  {
    id: "http",
    title: "Browsers, URLs & the Cloud",
    summary: "How the web request starts — names, browsers, and HTTPS at a literacy level.",
    href: "/cert/computer-fundamentals/lesson/cf-browser-url-cloud",
    certId: "computer-fundamentals",
    topicId: "cf-browser-url-cloud",
  },
  {
    id: "auth",
    title: "Authentication",
    summary: "Proving identity — then red/blue/purple perspectives on weakness and detection.",
    href: "/cert/security-plus/lesson/authentication",
    certId: "security-plus",
    topicId: "authentication",
  },
  {
    id: "logs",
    title: "Log Analysis",
    summary: "Read synthetic signals — what should appear when auth or systems misbehave.",
    href: "/cert/cysa-plus/lesson/log-analysis",
    certId: "cysa-plus",
    topicId: "log-analysis",
  },
  {
    id: "ir",
    title: "Incident Response",
    summary: "Contain, preserve evidence, remediate, and write it down.",
    href: "/cert/security-plus/lesson/incident-response",
    certId: "security-plus",
    topicId: "incident-response",
  },
  {
    id: "missing-patch",
    title: "The Missing Patch",
    summary: "Blue → red → blue walkthrough that uses the skills above on a fictional host.",
    href: "/career/ethical-hacking/scenarios/missing-patch",
  },
];
