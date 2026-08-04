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
    kind: "official-vendor-docs",
    publisher: "CompTIA",
    version: "V7 / SY0-701",
    url: "https://www.comptia.org/en/certifications/security/",
    retrievedAt: RETRIEVED,
    lastCheckedAt: RETRIEVED,
    confidence: "verified",
    retrievalMethod: "exa",
    notes:
      "First-party product page (NOT a complete objectives PDF). Domain summary weights only: " +
      "General Security Concepts 12%; Threats, Vulnerabilities, and Mitigations 22%; " +
      "Security Architecture 18%; Security Operations 28%; Security Program Management and Oversight 20%. " +
      "Launch 2023-11-07. CompTIA wording: retirement usually three years after launch (estimated 2026) — " +
      "this is an ESTIMATE, not an officially confirmed cutover date. " +
      "Full objective-line PDF not ingested — download official objectives before remapping topic tags.",
    reviewBy: "2026-10-01",
    futureReviewReason:
      "Confirm exact SY0-701 retirement / successor exam code (estimate only today) before Security+ expansion batches.",
  },
  {
    id: "src-network-plus-n10-009",
    title: "CompTIA Network+ (V9) — N10-009 product page",
    kind: "official-vendor-docs",
    publisher: "CompTIA",
    version: "V9 / N10-009",
    url: "https://www.comptia.org/en/certifications/network/",
    retrievedAt: RETRIEVED,
    lastCheckedAt: RETRIEVED,
    confidence: "verified",
    retrievalMethod: "exa",
    notes:
      "First-party product page (NOT a complete objectives PDF). Domain summary weights only: " +
      "Networking Concepts 23%; Network Implementation 20%; Network Operations 19%; " +
      "Network Security 14%; Network Troubleshooting 24%. " +
      "Launch 2024-06-20; N10-008 retired. CompTIA wording also lists retirement usually ~3 years " +
      "(estimated 2027) — estimate only. Full objective-line PDF mapping deferred.",
    reviewBy: "2027-01-01",
    futureReviewReason: "Confirm no V10 announcement; keep curriculum on N10-009 only.",
  },
  {
    id: "src-cysa-plus-cs0-003",
    title: "CompTIA CySA+ (V3) — CS0-003 product page (retiring)",
    kind: "official-vendor-docs",
    publisher: "CompTIA",
    version: "V3 / CS0-003",
    url: "https://www.comptia.org/en/certifications/cybersecurity-analyst/v3/",
    retrievedAt: RETRIEVED,
    lastCheckedAt: RETRIEVED,
    confidence: "verified",
    retrievalMethod: "exa",
    notes:
      "First-party V3 product page (NOT a complete objectives PDF). Domain summary weights: " +
      "Security Operations 33%; Vulnerability Management 30%; Incident Response and Management 20%; " +
      "Reporting and Communication 17%. " +
      "Confirmed retirement: English 2026-12-22; Japanese/Portuguese/Spanish 2027-03-23 " +
      "(adversarial re-check of CompTIA V3 page on 2026-08-04). " +
      "Successor CS0-004 (V4) already launched 2026-06-23 — see src-cysa-plus-cs0-004. " +
      "Do not mix CS0-003 and CS0-004 unmarked.",
    mixedVersionWarning:
      "ReLearn CySA+ blueprint currently targets retiring CS0-003 while CompTIA already ships CS0-004 (V4). " +
      "Keep versions isolated until a dedicated cutover batch.",
    reviewBy: "2026-11-01",
    futureReviewReason:
      "CS0-003 English retirement 2026-12-22 — ingest CS0-004 objectives and cut over before that date.",
  },
  {
    id: "src-cysa-plus-cs0-004",
    title: "CompTIA CySA+ (V4) — CS0-004 product page",
    kind: "official-vendor-docs",
    publisher: "CompTIA",
    version: "V4 / CS0-004",
    url: "https://www.comptia.org/en/certifications/cybersecurity-analyst/v4/",
    retrievedAt: RETRIEVED,
    lastCheckedAt: RETRIEVED,
    confidence: "needs-retrieval",
    retrievalMethod: "exa",
    notes:
      "Successor exam page confirmed via Exa 2026-08-04. Launch 2026-06-23; exam code CS0-004. " +
      "Product-page domain summary exists (e.g. Security Operations 34%) but full objectives PDF " +
      "was not ingested and no V4 ExamBlueprint is registered yet — do not invent objective lines. " +
      "A first-party product page is not a complete objectives document.",
    mixedVersionWarning:
      "Do not attach CS0-004 facts to the CS0-003 blueprint. Create a separate blueprint when PDF mapping lands.",
    reviewBy: "2026-11-01",
    futureReviewReason:
      "Download official CS0-004 objectives PDF and author a version-isolated blueprint before CS0-003 English retirement.",
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
      "Official exam guide PDF (first-party). Domains: Cloud Concepts 24%; Security and Compliance 30%; " +
      "Cloud Technology and Services 34%; Billing, Pricing, and Support 12%. Passing scaled score 700. " +
      "Product page: https://aws.amazon.com/certification/certified-cloud-practitioner/. " +
      "Indonesian language variant end-of-support notice: retired after 2026-07-16 " +
      "(as of 2026-08-04 that window has passed; exam remains offered in other languages).",
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
    kind: "official-vendor-docs",
    publisher: "PeopleCert / AXELOS",
    version: "ITIL 4 Foundation",
    url: "https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-4-foundation-2565",
    retrievedAt: RETRIEVED,
    lastCheckedAt: RETRIEVED,
    confidence: "needs-retrieval",
    retrievalMethod: "exa",
    notes:
      "First-party certification/marketing page — NOT a fully inspected official syllabus. " +
      "Confirmed exam logistics only: closed book, 40 multiple-choice questions, 60 minutes, 65% pass. " +
      "Page lists high-level 'What will you learn' topics (service management concepts, SVS, four dimensions, " +
      "guiding principles, service value chain, practices, etc.) but these are not numbered learning-outcome codes. " +
      "Do not treat third-party syllabus PDFs or reconstructed domain lists as official until the PeopleCert/AXELOS " +
      "syllabus/handbook is fully inspected.",
    reviewBy: "2026-11-01",
    futureReviewReason:
      "Obtain and fully inspect the official ITIL 4 Foundation syllabus/handbook before authoring objective mappings.",
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
    lastCheckedAt: RETRIEVED,
    confidence: "verified",
    retrievalMethod: "exa",
    notes:
      "Complete inspected standard (BCP 5). Full RFC text retrieved via Exa from rfc-editor.org on 2026-08-04 " +
      "(status Best Current Practice; obsoletes 1627/1597). Prefer for private IPv4 addressing facts. " +
      "Cite later RFCs when teaching features they update.",
  },
  {
    id: "src-nist-sp800-53r5",
    title: "NIST SP 800-53 Rev. 5 — Security and Privacy Controls",
    kind: "standards-body",
    publisher: "NIST (U.S. government scientific agency)",
    version: "Rev. 5",
    url: "https://csrc.nist.gov/pubs/sp/800/53/r5/final",
    retrievedAt: RETRIEVED,
    lastCheckedAt: RETRIEVED,
    confidence: "needs-retrieval",
    retrievalMethod: "exa",
    notes:
      "METADATA-ONLY / PARTIAL retrieval — not a complete inspected standard. " +
      "Adversarial Exa re-fetch of the pubs landing page (2026-08-04) returned confusing status copy " +
      "('Withdrawn on December 10, 2020. Superseded by SP 800-53 Rev. 5') and 'Publication: No Download Available'. " +
      "Control-family names appeared in page metadata, but the authoritative PDF was not obtained. " +
      "Do not quote control IDs or claim full SP 800-53 alignment until the official PDF is downloaded and inspected.",
    reviewBy: "2026-09-15",
    futureReviewReason:
      "Download authoritative SP 800-53 Rev. 5 PDF (and any errata) before citing control IDs; keep confidence needs-retrieval until then.",
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
    fact: "CySA+ CS0-003 English retires 2026-12-22; JP/PT/ES retire 2027-03-23",
    sourceIds: ["src-cysa-plus-cs0-003"],
    reviewBy: "2026-11-01",
    severity: "critical",
    notes:
      "Confirmed on CompTIA CySA+ V3 page (Exa 2026-08-04). Prior catalog draft incorrectly said 2027-03-16 for translations.",
  },
  {
    id: "review-cysa-cs0-004-cutover",
    subject: "cysa-plus",
    fact: "CySA+ CS0-004 (V4) launched 2026-06-23; no V4 blueprint or objective lines registered yet",
    sourceIds: ["src-cysa-plus-cs0-004", "src-cysa-plus-cs0-003"],
    reviewBy: "2026-11-01",
    severity: "critical",
    notes:
      "Keep CS0-003 and CS0-004 isolated. Product page ≠ complete objectives PDF.",
  },
  {
    id: "review-security-plus-estimated-retirement",
    subject: "security-plus",
    fact: "Security+ SY0-701 retirement ESTIMATED ~2026 (CompTIA: usually three years after launch) — not an officially confirmed date",
    sourceIds: ["src-security-plus-sy0-701"],
    reviewBy: "2026-10-01",
    severity: "warning",
    notes:
      "CompTIA product page itself labels this as an estimate. Do not rewrite curriculum as if a hard cutover date is confirmed.",
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
