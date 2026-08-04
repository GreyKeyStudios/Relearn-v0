/**
 * Exam blueprint registry — maps certification tracks to official (or
 * explicitly flagged pilot) objective versions.
 *
 * CCNA uses the ingested official 200-301 v1.1 PDF lines. Live Path A content
 * still tags pilot `CCNA-*` IDs; coverage is computed through the alias mapping
 * layer (see mappings/ccna-pilot-to-v1.1.ts). Do not mix v2.0.
 */

import { APLUS_OBJECTIVES } from "@/content/objectives/a-plus";
import { aPlus } from "@/content/certifications/a-plus";
import type { Certification } from "@/content/types";
import type { ExamBlueprint, ExamBlueprintDomain } from "../types";
import {
  CCNA_V11_PDF_SHA256,
  CCNA_V11_PDF_URL,
  CCNA_V11_RETRIEVED_AT,
  listCcnaV11OfficialLines,
  listCcnaV11ParentObjectives,
} from "../objectives/ccna-200-301-v1.1";
import { liveTopicsCoveringOfficialId } from "../mappings/ccna-pilot-to-v1.1";

const RETRIEVED = "2026-08-04";

function topicCoverageForObjectives(
  cert: Certification,
  objectiveIds: string[]
): Map<string, string[]> {
  const map = new Map<string, string[]>();
  for (const id of objectiveIds) map.set(id, []);
  for (const domain of cert.domains) {
    for (const topic of domain.topics) {
      for (const obj of topic.objectives ?? []) {
        const list = map.get(obj);
        if (list) list.push(topic.id);
        else map.set(obj, [topic.id]);
      }
    }
  }
  return map;
}

function domainOnly(
  id: string,
  name: string,
  weightPercent?: number
): ExamBlueprintDomain {
  return { id, name, weightPercent, objectives: [] };
}

function buildCcnaBlueprint(): ExamBlueprint {
  const parents = listCcnaV11ParentObjectives();
  const byDomain = new Map<string, ExamBlueprintDomain>();
  const domainMeta: Record<
    string,
    { slug: string; name: string; weight: number }
  > = {
    "1.0": {
      slug: "network-fundamentals",
      name: "Network Fundamentals",
      weight: 20,
    },
    "2.0": { slug: "network-access", name: "Network Access", weight: 20 },
    "3.0": { slug: "ip-connectivity", name: "IP Connectivity", weight: 25 },
    "4.0": { slug: "ip-services", name: "IP Services", weight: 10 },
    "5.0": {
      slug: "security-fundamentals",
      name: "Security Fundamentals",
      weight: 15,
    },
    "6.0": {
      slug: "automation",
      name: "Automation and Programmability",
      weight: 10,
    },
  };

  for (const obj of parents) {
    const meta = domainMeta[obj.domainNumber];
    const domainId = meta?.slug ?? obj.domainNumber;
    let domain = byDomain.get(domainId);
    if (!domain) {
      domain = {
        id: domainId,
        name: meta?.name ?? obj.domainName,
        weightPercent: meta?.weight ?? obj.domainWeightPercent,
        objectives: [],
      };
      byDomain.set(domainId, domain);
    }
    domain.objectives.push({
      id: obj.id,
      text: obj.text,
      // Coverage via pilot-alias mapping — live tags are still CCNA-* pilot IDs.
      coveredByTopicIds: liveTopicsCoveringOfficialId(obj.id),
      freshness: "versioned",
    });
  }

  const lineCount = listCcnaV11OfficialLines().length;
  return {
    id: "blueprint-ccna-200-301-v1.1",
    trackId: "ccna",
    vendor: "Cisco",
    examName: "CCNA",
    examCodes: ["200-301"],
    objectivesVersion: "v1.1",
    retrievedAt: CCNA_V11_RETRIEVED_AT,
    lastCheckedAt: RETRIEVED,
    sourceIds: ["src-cisco-ccna-200-301-v1.1", "src-ccna-objectives-pilot"],
    domains: [...byDomain.values()],
    confidence: "verified",
    mixedVersionWarning:
      "Blueprint rows use official 200-301 v1.1 IDs (`200-301-v1.1/<number>`). " +
      "Live Path A topics/quizzes still tag pilot `CCNA-*` IDs; progress keys must keep using pilot IDs. " +
      "Coverage is computed through the alias mapping in mappings/ccna-pilot-to-v1.1.ts. " +
      "Do not mix v2.0 objectives into this blueprint.",
    notes:
      `Official PDF ingested (${lineCount} numbered lines including sub-bullets). ` +
      `PDF: ${CCNA_V11_PDF_URL}. SHA-256: ${CCNA_V11_PDF_SHA256}. ` +
      "v1.1 last test date 2027-02-02; v2.0 begins 2027-02-03 (future-review only — not in this blueprint).",
  };
}

function buildAplusBlueprint(): ExamBlueprint {
  const coverage = topicCoverageForObjectives(
    aPlus,
    APLUS_OBJECTIVES.map((o) => o.id)
  );
  const core1: ExamBlueprintDomain = {
    id: "220-1201",
    name: "Core 1 (220-1201)",
    objectives: [],
  };
  const core2: ExamBlueprintDomain = {
    id: "220-1202",
    name: "Core 2 (220-1202)",
    objectives: [],
  };
  for (const obj of APLUS_OBJECTIVES) {
    const entry = {
      id: obj.id,
      text: obj.text,
      coveredByTopicIds: coverage.get(obj.id) ?? [],
      freshness: "versioned" as const,
    };
    if (obj.id.startsWith("AP1201-")) core1.objectives.push(entry);
    else if (obj.id.startsWith("AP1202-")) core2.objectives.push(entry);
  }
  return {
    id: "blueprint-aplus-v15",
    trackId: "a-plus",
    vendor: "CompTIA",
    examName: "CompTIA A+",
    examCodes: ["220-1201", "220-1202"],
    objectivesVersion: "3.0 / V15",
    retrievedAt: "2026-07-15",
    lastCheckedAt: RETRIEVED,
    sourceIds: ["src-aplus-objectives-v15", "src-cf-aplus-architecture"],
    domains: [core1, core2],
    confidence: "verified",
    notes:
      "Exa live check 2026-08-04 confirms V15 still current on CompTIA product page. " +
      "Do not teach retired 220-1101/220-1102. See docs/a-plus-objectives-source.md.",
  };
}

/** Domain-weight blueprints — no invented objective line items. */
function buildSecurityPlusBlueprint(): ExamBlueprint {
  return {
    id: "blueprint-security-plus-sy0-701",
    trackId: "security-plus",
    vendor: "CompTIA",
    examName: "CompTIA Security+",
    examCodes: ["SY0-701"],
    objectivesVersion: "V7",
    retrievedAt: RETRIEVED,
    lastCheckedAt: RETRIEVED,
    sourceIds: ["src-security-plus-sy0-701"],
    domains: [
      domainOnly("1.0", "General Security Concepts", 12),
      domainOnly("2.0", "Threats, Vulnerabilities, and Mitigations", 22),
      domainOnly("3.0", "Security Architecture", 18),
      domainOnly("4.0", "Security Operations", 28),
      domainOnly("5.0", "Security Program Management and Oversight", 20),
    ],
    confidence: "needs-retrieval",
    notes:
      "Domain weights from CompTIA Security+ product page (Exa 2026-08-04). " +
      "objectives[] empty on purpose — product-page weights are NOT a complete objective mapping. " +
      "SY0-701 retirement ~2026 is CompTIA's ESTIMATE only.",
  };
}

function buildNetworkPlusBlueprint(): ExamBlueprint {
  return {
    id: "blueprint-network-plus-n10-009",
    trackId: "network-plus",
    vendor: "CompTIA",
    examName: "CompTIA Network+",
    examCodes: ["N10-009"],
    objectivesVersion: "V9",
    retrievedAt: RETRIEVED,
    lastCheckedAt: RETRIEVED,
    sourceIds: ["src-network-plus-n10-009"],
    domains: [
      domainOnly("1.0", "Networking Concepts", 23),
      domainOnly("2.0", "Network Implementation", 20),
      domainOnly("3.0", "Network Operations", 19),
      domainOnly("4.0", "Network Security", 14),
      domainOnly("5.0", "Network Troubleshooting", 24),
    ],
    confidence: "needs-retrieval",
    notes:
      "Domain weights from CompTIA Network+ product page (Exa 2026-08-04). N10-008 is retired. " +
      "objectives[] empty on purpose — domain weights are not a complete objective mapping.",
  };
}

function buildCysaPlusBlueprint(): ExamBlueprint {
  return {
    id: "blueprint-cysa-plus-cs0-003",
    trackId: "cysa-plus",
    vendor: "CompTIA",
    examName: "CompTIA CySA+",
    examCodes: ["CS0-003"],
    objectivesVersion: "V3 / CS0-003 (retiring)",
    retrievedAt: RETRIEVED,
    lastCheckedAt: RETRIEVED,
    sourceIds: ["src-cysa-plus-cs0-003"],
    domains: [
      domainOnly("1.0", "Security Operations", 33),
      domainOnly("2.0", "Vulnerability Management", 30),
      domainOnly("3.0", "Incident Response and Management", 20),
      domainOnly("4.0", "Reporting and Communication", 17),
    ],
    confidence: "needs-retrieval",
    mixedVersionWarning:
      "This blueprint is CS0-003 only. CompTIA CS0-004 (V4) launched 2026-06-23 and is intentionally " +
      "NOT registered here — create a separate blueprint after official V4 objectives PDF ingestion.",
    notes:
      "Domain weights from CompTIA CySA+ V3 product page (Exa 2026-08-04) — not a full objectives PDF. " +
      "English retires 2026-12-22; JP/PT/ES retire 2027-03-23. objectives[] intentionally empty until PDF mapping.",
  };
}

function buildLinuxPlusBlueprint(): ExamBlueprint {
  return {
    id: "blueprint-linux-plus-xk0-005",
    trackId: "linux-plus",
    vendor: "CompTIA",
    examName: "CompTIA Linux+",
    examCodes: ["XK0-005"],
    objectivesVersion: "1.0",
    retrievedAt: RETRIEVED,
    lastCheckedAt: RETRIEVED,
    sourceIds: ["src-linux-plus-xk0-005"],
    domains: [
      domainOnly("1.0", "System Management", 32),
      domainOnly("2.0", "Security", 21),
      domainOnly("3.0", "Scripting, Containers, and Automation", 19),
      domainOnly("4.0", "Troubleshooting", 28),
    ],
    confidence: "needs-retrieval",
    notes: "Domain weights from official XK0-005 objectives PDF (Exa 2026-08-04).",
  };
}

function buildAwsCpBlueprint(): ExamBlueprint {
  return {
    id: "blueprint-aws-clf-c02",
    trackId: "aws-cloud-practitioner",
    vendor: "Amazon Web Services",
    examName: "AWS Certified Cloud Practitioner",
    examCodes: ["CLF-C02"],
    objectivesVersion: "CLF-C02",
    retrievedAt: RETRIEVED,
    lastCheckedAt: RETRIEVED,
    sourceIds: ["src-aws-clf-c02"],
    domains: [
      domainOnly("1", "Cloud Concepts", 24),
      domainOnly("2", "Security and Compliance", 30),
      domainOnly("3", "Cloud Technology and Services", 34),
      domainOnly("4", "Billing, Pricing, and Support", 12),
    ],
    confidence: "needs-retrieval",
    notes:
      "Domain weights from AWS CLF-C02 exam guide PDF (Exa 2026-08-04). Task statements not yet mapped.",
  };
}

function buildAzureFundamentalsBlueprint(): ExamBlueprint {
  return {
    id: "blueprint-azure-az-900",
    trackId: "azure-fundamentals",
    vendor: "Microsoft",
    examName: "Microsoft Azure Fundamentals",
    examCodes: ["AZ-900"],
    objectivesVersion: "skills measured as of 2026-07-20",
    retrievedAt: RETRIEVED,
    lastCheckedAt: RETRIEVED,
    sourceIds: ["src-azure-az-900"],
    domains: [
      domainOnly("1", "Describe cloud concepts"),
      domainOnly("2", "Describe Azure architecture and services"),
      domainOnly("3", "Describe Azure management and governance"),
    ],
    confidence: "needs-retrieval",
    notes:
      "Skill group ranges from Microsoft Learn study guide (Exa 2026-08-04): " +
      "cloud concepts 25–30%; architecture and services 35–40%; management and governance 30–35%. " +
      "WeightPercent left unset because Microsoft publishes ranges, not single percentages.",
  };
}

function buildItilBlueprint(): ExamBlueprint {
  return {
    id: "blueprint-itil4-foundation",
    trackId: "itil-foundation",
    vendor: "PeopleCert / AXELOS",
    examName: "ITIL 4 Foundation",
    examCodes: ["ITIL4-Foundation"],
    objectivesVersion: "ITIL 4 Foundation (syllabus not fully inspected)",
    retrievedAt: RETRIEVED,
    lastCheckedAt: RETRIEVED,
    sourceIds: ["src-itil4-foundation-peoplecert"],
    // Intentionally empty: PeopleCert product page is not a fully inspected official syllabus.
    // Do not reconstruct numbered domains from third-party study guides.
    domains: [],
    confidence: "needs-retrieval",
    notes:
      "Exam logistics confirmed from PeopleCert page (Exa 2026-08-04): 40 questions, 60 minutes, " +
      "closed book, 65% pass. Official syllabus/handbook learning-outcome structure was NOT fully inspected — " +
      "domains[] and objectives[] left empty until that document is retrieved. " +
      "A first-party product page is not equivalent to a complete objectives/syllabus document.",
  };
}

/** Blueprints with first-party provenance (domain and/or objective level). */
export const EXAM_BLUEPRINTS: ExamBlueprint[] = [
  buildCcnaBlueprint(),
  buildAplusBlueprint(),
  buildSecurityPlusBlueprint(),
  buildNetworkPlusBlueprint(),
  buildCysaPlusBlueprint(),
  buildLinuxPlusBlueprint(),
  buildAwsCpBlueprint(),
  buildAzureFundamentalsBlueprint(),
  buildItilBlueprint(),
];

const byTrack = new Map(EXAM_BLUEPRINTS.map((b) => [b.trackId, b]));

export function getExamBlueprint(trackId: string): ExamBlueprint | undefined {
  return byTrack.get(trackId);
}

export function listExamBlueprints(): ExamBlueprint[] {
  return EXAM_BLUEPRINTS;
}

/**
 * Certification tracks that still lack objective-line mapping
 * (domain blueprint may exist with empty objectives[]).
 */
export const CERT_TRACKS_NEEDING_OBJECTIVE_LINES = [
  // CCNA official v1.1 lines are ingested; live content still uses pilot aliases.
  "security-plus",
  "network-plus",
  "cysa-plus",
  "aws-cloud-practitioner",
  "azure-fundamentals",
  "linux-plus",
  "itil-foundation",
] as const;

/** Tracks whose live tags still need an explicit content remap onto official IDs. */
export const CERT_TRACKS_NEEDING_LIVE_OBJECTIVE_REMAP = ["ccna"] as const;

/** @deprecated use CERT_TRACKS_NEEDING_OBJECTIVE_LINES */
export const CERT_TRACKS_NEEDING_BLUEPRINT = CERT_TRACKS_NEEDING_OBJECTIVE_LINES;
