/**
 * Source catalog for curriculum production.
 * Only include records we can honestly document — never invent citations.
 *
 * Certification sources: first-party vendor pages/PDFs retrieved via Exa (2026-08-04).
 * Academic sources: standards bodies (IETF), government agencies (NIST), etc.
 */

import type { FutureReviewFlag, SourceRecord } from "../types";

const RETRIEVED = "2026-08-04";

export const PRODUCTION_SOURCES: SourceRecord[] = [
  // ── First-party certification sources (Exa live retrieval) ─────────────
  {
    id: "src-cisco-ccna-200-301-v1.1",
    title: "Cisco 200-301 CCNA v1.1 Exam Topics",
    kind: "official-exam-objectives",
    publisher: "Cisco",
    version: "v1.1",
    url: "https://learningnetwork.cisco.com/s/ccna-exam-topics",
    retrievedAt: RETRIEVED,
    lastCheckedAt: RETRIEVED,
    confidence: "verified",
    retrievalMethod: "exa",
    notes:
      "Official Cisco Learning Network exam topics for Implementing and Administering Cisco Solutions (200-301 CCNA) v1.1. " +
      "Domain weights observed: Network Fundamentals 20%, Network Access 20%, IP Connectivity 25%, IP Services 10%, " +
      "Security Fundamentals 15%, Automation and Programmability 10%. " +
      "Official PDF linked from page: https://learningcontent.cisco.com/documents/marketing/exam-topics/200-301-CCNA-v1.1.pdf. " +
      "Product page: https://www.cisco.com/site/us/en/learn/training-certifications/exams/ccna.html.",
    reviewBy: "2027-01-15",
    futureReviewReason:
      "Cisco page states last date to test v1.1 is 2027-02-02; first date to test v2.0 is 2027-02-03. Reconcile curriculum before that cutover.",
  },
  {
    id: "src-ccna-objectives-pilot",
    title: "CCNA exam objectives — ReLearn pilot catalog",
    kind: "internal-architecture",
    publisher: "ReLearn",
    version: "pilot",
    confidence: "needs-retrieval",
    retrievalMethod: "internal",
    retrievedAt: RETRIEVED,
    mixedVersionWarning:
      "Pilot IDs in src/content/objectives/ccna.ts do NOT match Cisco 200-301 v1.1 numbering one-for-one " +
      "(e.g. official 1.9 is IPv6 address types; pilot CCNA-1.9 is subnet calculations). " +
      "Do not claim official Cisco numbering until a reconciliation batch remaps topic.objectives.",
    notes:
      "Internal mastery tags only. Prefer src-cisco-ccna-200-301-v1.1 for first-party truth.",
    reviewBy: "2026-09-30",
    futureReviewReason:
      "Reconcile pilot objective IDs to Cisco v1.1 (and plan v2.0) without mixing versions unmarked.",
  },
  {
    id: "src-aplus-objectives-v15",
    title: "CompTIA A+ Core 1 & Core 2 Exam Objectives (V15)",
    kind: "official-exam-objectives",
    publisher: "CompTIA",
    version: "V15 / Document 3.0",
    url: "https://www.comptia.org/en/certifications/a/core-1-and-2-v15/",
    retrievedAt: "2026-07-15",
    lastCheckedAt: RETRIEVED,
    confidence: "verified",
    retrievalMethod: "exa",
    notes:
      "Exa live check 2026-08-04 confirms V15, exam codes 220-1201 / 220-1202, launch 2025-03-25, " +
      "no mixing Core versions allowed, retirement usually ~3 years after launch (estimated 2028). " +
      "Domain weights on product page match docs/a-plus-objectives-source.md. " +
      "Re-open official PDFs before any objective renumbering.",
    reviewBy: "2027-03-25",
    futureReviewReason: "Watch for CompTIA V16 announcement / objective document version bump.",
  },
  {
    id: "src-security-plus-sy0-701",
    title: "CompTIA Security+ (V7) — SY0-701 product page",
    kind: "official-exam-objectives",
    publisher: "CompTIA",
    version: "V7 / SY0-701",
    url: "https://www.comptia.org/en/certifications/security/",
    retrievedAt: RETRIEVED,
    lastCheckedAt: RETRIEVED,
    confidence: "verified",
    retrievalMethod: "exa",
    notes:
      "Domain summary weights from CompTIA product page: General Security Concepts 12%; " +
      "Threats, Vulnerabilities, and Mitigations 22%; Security Architecture 18%; " +
      "Security Operations 28%; Security Program Management and Oversight 20%. " +
      "Launch 2023-11-07; retirement usually ~3 years after launch (estimated 2026). " +
      "Full objective-line PDF not ingested into ReLearn registry yet — download official objectives before remapping topic tags.",
    reviewBy: "2026-10-01",
    futureReviewReason:
      "Estimated retirement ~2026 — confirm successor exam code before Security+ content expansion batches.",
  },
  {
    id: "src-network-plus-n10-009",
    title: "CompTIA Network+ (V9) — N10-009 product page",
    kind: "official-exam-objectives",
    publisher: "CompTIA",
    version: "V9 / N10-009",
    url: "https://www.comptia.org/en/certifications/network/",
    retrievedAt: RETRIEVED,
    lastCheckedAt: RETRIEVED,
    confidence: "verified",
    retrievalMethod: "exa",
    notes:
      "Domain summary weights: Networking Concepts 23%; Network Implementation 20%; " +
      "Network Operations 19%; Network Security 14%; Network Troubleshooting 24%. " +
      "Launch 2024-06-20; N10-008 retired. Full objective-line PDF mapping deferred.",
    reviewBy: "2027-01-01",
    futureReviewReason: "Confirm no V10 announcement; keep curriculum on N10-009 only.",
  },
  {
    id: "src-cysa-plus-cs0-003",
    title: "CompTIA CySA+ (V3) — CS0-003 objectives / product page",
    kind: "official-exam-objectives",
    publisher: "CompTIA",
    version: "V3 / CS0-003 / Objectives 3.0",
    url: "https://www.comptia.org/en/certifications/cybersecurity-analyst/v3/",
    retrievedAt: RETRIEVED,
    lastCheckedAt: RETRIEVED,
    confidence: "verified",
    retrievalMethod: "exa",
    notes:
      "Domain weights from objectives PDF / product summary: Security Operations 33%; " +
      "Vulnerability Management 30%; Incident Response and Management 20%; Reporting and Communication 17%. " +
      "English V3 retiring 2026-12-22 (Japanese/Portuguese/Spanish 2027-03-16 per CompTIA V3 page).",
    reviewBy: "2026-11-01",
    futureReviewReason:
      "CS0-003 English retirement 2026-12-22 — map successor blueprint before continuing CySA+ expansion.",
  },
  {
    id: "src-linux-plus-xk0-005",
    title: "CompTIA Linux+ — XK0-005 Exam Objectives",
    kind: "official-exam-objectives",
    publisher: "CompTIA",
    version: "XK0-005 / Objectives 1.0",
    url: "https://comptiacdn.azureedge.net/webcontent/docs/default-source/exam-objectives/comptia-linux-xk0-005-exam-objectives-(1-0).pdf",
    retrievedAt: RETRIEVED,
    lastCheckedAt: RETRIEVED,
    confidence: "verified",
    retrievalMethod: "exa",
    notes:
      "Domain weights: System Management 32%; Security 21%; Scripting, Containers, and Automation 19%; Troubleshooting 28%. " +
      "Passing score 720/900. Full line-item mapping into ReLearn registry deferred.",
    reviewBy: "2026-12-01",
    futureReviewReason: "Confirm exam still current / watch for XK0 successor.",
  },
  {
    id: "src-aws-clf-c02",
    title: "AWS Certified Cloud Practitioner (CLF-C02) Exam Guide",
    kind: "official-exam-objectives",
    publisher: "Amazon Web Services",
    version: "CLF-C02",
    url: "https://d1.awsstatic.com/training-and-certification/docs-cloud-practitioner/AWS-Certified-Cloud-Practitioner_Exam-Guide.pdf",
    retrievedAt: RETRIEVED,
    lastCheckedAt: RETRIEVED,
    confidence: "verified",
    retrievalMethod: "exa",
    notes:
      "Domains: Cloud Concepts 24%; Security and Compliance 30%; Cloud Technology and Services 34%; " +
      "Billing, Pricing, and Support 12%. Passing scaled score 700. " +
      "Product page: https://aws.amazon.com/certification/certified-cloud-practitioner/. " +
      "Indonesian language variant retires after 2026-07-16 (exam still offered in other languages).",
    reviewBy: "2026-12-01",
    futureReviewReason: "Watch for CLF-C03 or exam-guide revision.",
  },
  {
    id: "src-azure-az-900",
    title: "Microsoft Exam AZ-900: Azure Fundamentals study guide",
    kind: "official-exam-objectives",
    publisher: "Microsoft",
    version: "skills measured as of 2026-07-20",
    url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900",
    retrievedAt: RETRIEVED,
    lastCheckedAt: RETRIEVED,
    confidence: "verified",
    retrievalMethod: "exa",
    notes:
      "Skills at a glance (as of 2026-07-20): Describe cloud concepts 25–30%; " +
      "Describe Azure architecture and services 35–40%; Describe Azure management and governance 30–35%. " +
      "Pass score 700. Full skill bullets should be pulled from the live study guide before objective tagging.",
    reviewBy: "2026-10-20",
    futureReviewReason: "Microsoft updates skills-measured dates periodically — re-fetch study guide.",
  },
  {
    id: "src-itil4-foundation-peoplecert",
    title: "ITIL 4 Foundation — PeopleCert certification page",
    kind: "official-exam-objectives",
    publisher: "PeopleCert / AXELOS",
    version: "ITIL 4 Foundation",
    url: "https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-4-foundation-2565",
    retrievedAt: RETRIEVED,
    lastCheckedAt: RETRIEVED,
    confidence: "needs-retrieval",
    retrievalMethod: "exa",
    notes:
      "Official certification page confirms closed-book exam, 40 questions, 65% pass. " +
      "Detailed syllabus learning outcomes should come from the official ITIL 4 Foundation syllabus / handbook — " +
      "do not treat third-party syllabus PDFs as first-party without cross-check.",
    reviewBy: "2026-11-01",
    futureReviewReason: "Obtain/confirm official syllabus document version from PeopleCert/AXELOS.",
  },

  // ── Academic / standards / government sources ──────────────────────────
  {
    id: "src-ietf-rfc791",
    title: "RFC 791 — Internet Protocol (STD 5)",
    kind: "standards-body",
    publisher: "IETF / RFC Editor",
    version: "STD 5 / September 1981",
    url: "https://www.rfc-editor.org/rfc/rfc791",
    retrievedAt: RETRIEVED,
    lastCheckedAt: RETRIEVED,
    confidence: "verified",
    retrievalMethod: "exa",
    notes:
      "Authoritative IPv4 protocol specification. Prefer for timeless IP header/addressing concepts. " +
      "Updated by later RFCs for specific features — cite those when teaching those features.",
  },
  {
    id: "src-ietf-rfc8200",
    title: "RFC 8200 — Internet Protocol, Version 6 (IPv6) Specification (STD 86)",
    kind: "standards-body",
    publisher: "IETF / RFC Editor",
    version: "STD 86 / July 2017",
    url: "https://www.rfc-editor.org/rfc/rfc8200",
    retrievedAt: RETRIEVED,
    lastCheckedAt: RETRIEVED,
    confidence: "verified",
    retrievalMethod: "exa",
    notes: "Obsoletes RFC 2460. Prefer for IPv6 header and extension-header facts.",
  },
  {
    id: "src-ietf-rfc1918",
    title: "RFC 1918 — Address Allocation for Private Internets",
    kind: "standards-body",
    publisher: "IETF / RFC Editor",
    version: "BCP 5 / February 1996",
    url: "https://www.rfc-editor.org/rfc/rfc1918",
    retrievedAt: RETRIEVED,
    confidence: "needs-retrieval",
    retrievalMethod: "exa",
    notes:
      "Canonical private IPv4 ranges. Marked needs-retrieval until a full Exa fetch of this URL is stored in a research batch; " +
      "URL and identity are well-established standards-track references.",
    reviewBy: "2026-09-01",
    futureReviewReason: "Fetch full RFC text on next research pass and confirm no status change.",
  },
  {
    id: "src-nist-sp800-53r5",
    title: "NIST SP 800-53 Rev. 5 — Security and Privacy Controls",
    kind: "standards-body",
    publisher: "NIST (U.S. government scientific agency)",
    version: "Rev. 5",
    url: "https://csrc.nist.gov/pubs/sp/800/53/r5/final",
    retrievedAt: RETRIEVED,
    confidence: "needs-retrieval",
    retrievalMethod: "exa",
    notes:
      "Government standards source for security-control vocabulary. " +
      "Initial Exa fetch hit a redirect from an older detail URL — use the pubs path above and re-fetch full text before quoting controls.",
    reviewBy: "2026-09-15",
    futureReviewReason: "Confirm Rev. 5 / update status and download authoritative PDF before citing control IDs.",
  },

  // ── Internal ReLearn architecture sources ───────────────────────────────
  {
    id: "src-relearn-course-architecture",
    title: "ReLearn Course Architecture",
    kind: "internal-architecture",
    publisher: "ReLearn",
    url: "docs/COURSE_ARCHITECTURE.md",
    version: "1.0",
    confidence: "verified",
    retrievalMethod: "internal",
    notes: "Platform constitution — template taxonomy and engine hierarchy.",
  },
  {
    id: "src-relearn-bls",
    title: "Bridge Learning Standard",
    kind: "internal-architecture",
    publisher: "ReLearn",
    url: "docs/bridge-learning-standard.md",
    confidence: "verified",
    retrievalMethod: "internal",
  },
  {
    id: "src-relearn-les",
    title: "Learning Experience Standard",
    kind: "internal-architecture",
    publisher: "ReLearn",
    url: "docs/learning-experience-standard.md",
    confidence: "verified",
    retrievalMethod: "internal",
  },
  {
    id: "src-relearn-dod",
    title: "Definition of Done — Topic Complete",
    kind: "internal-architecture",
    publisher: "ReLearn",
    url: "docs/definition-of-done.md",
    version: "1.0",
    confidence: "verified",
    retrievalMethod: "internal",
  },
  {
    id: "src-relearn-type-b",
    title: "TYPE_B_MASTER — Skill template",
    kind: "internal-architecture",
    publisher: "ReLearn",
    url: "docs/TYPE_B_MASTER.md",
    confidence: "verified",
    retrievalMethod: "internal",
  },
  {
    id: "src-relearn-type-c",
    title: "TYPE_C_MASTER — Tool template",
    kind: "internal-architecture",
    publisher: "ReLearn",
    url: "docs/TYPE_C_MASTER.md",
    confidence: "verified",
    retrievalMethod: "internal",
  },
  {
    id: "src-cf-aplus-architecture",
    title: "Computer Fundamentals + A+ Architecture",
    kind: "internal-architecture",
    publisher: "ReLearn",
    url: "docs/computer-fundamentals-aplus-architecture.md",
    confidence: "verified",
    retrievalMethod: "internal",
  },
  {
    id: "src-git-architecture",
    title: "Git & GitHub Learning Architecture",
    kind: "internal-architecture",
    publisher: "ReLearn",
    url: "docs/git-github-learning-architecture.md",
    confidence: "verified",
    retrievalMethod: "internal",
  },
];

/** Facts that require scheduled re-verification (version sunsets, estimated retirements). */
export const FUTURE_REVIEW_FLAGS: FutureReviewFlag[] = [
  {
    id: "review-ccna-v2-cutover",
    subject: "ccna",
    fact: "Cisco CCNA 200-301 v1.1 last test date 2027-02-02; v2.0 begins 2027-02-03",
    sourceIds: ["src-cisco-ccna-200-301-v1.1"],
    reviewBy: "2027-01-15",
    severity: "critical",
    notes: "Retrieved from Cisco Learning Network exam topics page via Exa on 2026-08-04.",
  },
  {
    id: "review-ccna-pilot-remap",
    subject: "ccna",
    fact: "ReLearn pilot CCNA objective IDs diverge from official v1.1 numbering",
    sourceIds: ["src-ccna-objectives-pilot", "src-cisco-ccna-200-301-v1.1"],
    reviewBy: "2026-09-30",
    severity: "critical",
    notes: "Do not invent remapped IDs until a dedicated reconciliation batch.",
  },
  {
    id: "review-cysa-cs0-003-retirement",
    subject: "cysa-plus",
    fact: "CySA+ CS0-003 English retires 2026-12-22",
    sourceIds: ["src-cysa-plus-cs0-003"],
    reviewBy: "2026-11-01",
    severity: "critical",
  },
  {
    id: "review-security-plus-estimated-retirement",
    subject: "security-plus",
    fact: "Security+ SY0-701 retirement estimated ~2026 (CompTIA usual ~3 years after launch)",
    sourceIds: ["src-security-plus-sy0-701"],
    reviewBy: "2026-10-01",
    severity: "warning",
    notes: "Estimate from CompTIA product page wording — confirm exact retirement date before rewriting content.",
  },
  {
    id: "review-azure-skills-measured",
    subject: "azure-fundamentals",
    fact: "AZ-900 skills measured dated 2026-07-20 on Microsoft Learn study guide",
    sourceIds: ["src-azure-az-900"],
    reviewBy: "2026-10-20",
    severity: "warning",
  },
  {
    id: "review-aplus-v16-watch",
    subject: "a-plus",
    fact: "A+ V15 estimated retirement ~2028; watch for V16 objective document",
    sourceIds: ["src-aplus-objectives-v15"],
    reviewBy: "2027-03-25",
    severity: "info",
  },
];

const byId = new Map(PRODUCTION_SOURCES.map((s) => [s.id, s]));

export function getProductionSource(id: string): SourceRecord | undefined {
  return byId.get(id);
}

export function listProductionSources(): SourceRecord[] {
  return PRODUCTION_SOURCES;
}

export function listFutureReviewFlags(): FutureReviewFlag[] {
  return FUTURE_REVIEW_FLAGS;
}

export function listSourcesRequiringReview(asOf = RETRIEVED): SourceRecord[] {
  return PRODUCTION_SOURCES.filter(
    (s) => s.reviewBy != null && s.reviewBy <= addMonths(asOf, 6)
  );
}

function addMonths(isoDate: string, months: number): string {
  const d = new Date(isoDate + "T12:00:00Z");
  d.setUTCMonth(d.getUTCMonth() + months);
  return d.toISOString().slice(0, 10);
}
