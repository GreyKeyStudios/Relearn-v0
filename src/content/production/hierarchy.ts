/**
 * Subject → Domain → Competency → Skill → Concept → AtomicLearningObjective
 *
 * Seed hierarchy maps live ReLearn tracks into the production model.
 * Full atomic graphs are filled by future research batches — this file
 * establishes the structure and adapters only.
 */

import { CERTIFICATIONS } from "@/content/registry";
import { PLANNED_TRACKS } from "@/lib/planned-tracks";
import { isSkillsTrack } from "@/lib/track-kind";
import type {
  AtomicLearningObjective,
  CompetencyDefinition,
  ConceptDefinition,
  CourseTemplate,
  DomainDefinition,
  SkillDefinition,
  SubjectDefinition,
  SubjectFamily,
} from "./types";

function templateForLiveTrack(trackId: string, skills: boolean): CourseTemplate {
  if (trackId === "git-github" || trackId === "powershell") return "B";
  if (trackId === "vm-lab" || trackId === "sound-synthesis") return "C";
  if (skills) return "B";
  return "A";
}

function familyForLiveTrack(skills: boolean): SubjectFamily {
  return skills ? "skill" : "certification";
}

/** Production subject entries for every live track. */
export function buildLiveSubjects(): SubjectDefinition[] {
  return CERTIFICATIONS.map((cert) => {
    const skills = isSkillsTrack(cert);
    return {
      id: `subject-${cert.id}`,
      name: cert.name,
      family: familyForLiveTrack(skills),
      template: templateForLiveTrack(cert.id, skills),
      liveTrackId: cert.id,
      overview: cert.overview,
      sourceIds: skills
        ? ["src-relearn-course-architecture"]
        : cert.id === "a-plus"
          ? ["src-aplus-objectives-v15", "src-cf-aplus-architecture"]
          : cert.id === "ccna"
            ? ["src-cisco-ccna-200-301-v1.1", "src-ccna-objectives-pilot"]
            : cert.id === "security-plus"
              ? ["src-security-plus-sy0-701"]
              : cert.id === "network-plus"
                ? ["src-network-plus-n10-009"]
                : cert.id === "cysa-plus"
                  ? ["src-cysa-plus-cs0-003"]
                  : cert.id === "linux-plus"
                    ? ["src-linux-plus-xk0-005"]
                    : cert.id === "aws-cloud-practitioner"
                      ? ["src-aws-clf-c02"]
                      : cert.id === "azure-fundamentals"
                        ? ["src-azure-az-900"]
                        : cert.id === "itil-foundation"
                          ? ["src-itil4-foundation-peoplecert"]
                          : ["src-relearn-course-architecture"],
      assumedBackground: skills ? "intro-it" : "general-literacy",
    };
  });
}

/** Planned / future subjects (no live content yet). */
export function buildPlannedSubjects(): SubjectDefinition[] {
  return PLANNED_TRACKS.map((track) => ({
    id: `subject-planned-${track.id}`,
    name: track.name,
    family:
      track.template === "A"
        ? "certification"
        : track.template === "B"
          ? "skill"
          : track.template === "C"
            ? "tool"
            : "other",
    template: track.template,
    overview: track.tagline,
    sourceIds: ["src-relearn-course-architecture"],
    assumedBackground: "intro-it",
  }));
}

/** Future academic subject placeholders — structure only, no invented curriculum. */
export const FUTURE_ACADEMIC_SUBJECT_STUBS: SubjectDefinition[] = [
  {
    id: "subject-future-mathematics",
    name: "Mathematics (future)",
    family: "mathematics",
    template: "D",
    overview:
      "Placeholder subject family for algebra, calculus, and quantitative reasoning. " +
      "Do not author lessons until onboarding completes and sources are recorded.",
    sourceIds: [],
    assumedBackground: "secondary-math",
  },
  {
    id: "subject-future-science",
    name: "Science (future)",
    family: "science",
    template: "D",
    overview: "Placeholder for physics, chemistry, biology tracks.",
    sourceIds: [],
    assumedBackground: "secondary-math",
  },
  {
    id: "subject-future-language",
    name: "Language (future)",
    family: "language",
    template: "D",
    overview: "Placeholder for natural-language learning tracks.",
    sourceIds: [],
    assumedBackground: "general-literacy",
  },
  {
    id: "subject-future-history",
    name: "History (future)",
    family: "history",
    template: "D",
    overview: "Placeholder for history tracks with cited primary/secondary sources.",
    sourceIds: [],
    assumedBackground: "general-literacy",
  },
  {
    id: "subject-future-philosophy",
    name: "Philosophy (future)",
    family: "philosophy",
    template: "D",
    overview: "Placeholder for philosophy tracks with peer-reviewed / textbook sources.",
    sourceIds: [],
    assumedBackground: "general-literacy",
  },
  {
    id: "subject-future-music-theory",
    name: "Music Theory (future)",
    family: "music",
    template: "D",
    overview:
      "Distinct from Sound Synthesis (Type C tool track). Theory curriculum TBD.",
    sourceIds: [],
    assumedBackground: "none",
  },
];

export function listAllSubjects(): SubjectDefinition[] {
  return [
    ...buildLiveSubjects(),
    ...buildPlannedSubjects(),
    ...FUTURE_ACADEMIC_SUBJECT_STUBS,
  ];
}

/**
 * Derive a lightweight domain → competency → skill → concept → atomic
 * skeleton from a live track. Atomic IDs are provisional mirrors of topics
 * until research agents expand them.
 */
export function deriveHierarchyFromLiveTrack(trackId: string): {
  domains: DomainDefinition[];
  competencies: CompetencyDefinition[];
  skills: SkillDefinition[];
  concepts: ConceptDefinition[];
  atomics: AtomicLearningObjective[];
} {
  const cert = CERTIFICATIONS.find((c) => c.id === trackId);
  if (!cert) {
    return {
      domains: [],
      competencies: [],
      skills: [],
      concepts: [],
      atomics: [],
    };
  }

  const subjectId = `subject-${cert.id}`;
  const domains: DomainDefinition[] = [];
  const competencies: CompetencyDefinition[] = [];
  const skills: SkillDefinition[] = [];
  const concepts: ConceptDefinition[] = [];
  const atomics: AtomicLearningObjective[] = [];

  cert.domains.forEach((domain, dIndex) => {
    const domainId = `domain-${cert.id}-${domain.id}`;
    domains.push({
      id: domainId,
      subjectId,
      name: domain.name,
      liveDomainId: domain.id,
      order: dIndex,
    });

    const competencyId = `comp-${cert.id}-${domain.id}`;
    const skillIds: string[] = [];

    for (const topic of domain.topics) {
      const skillId = `skill-${cert.id}-${topic.id}`;
      const conceptId = `concept-${cert.id}-${topic.id}`;
      const atomicId = `alo-${cert.id}-${topic.id}`;
      skillIds.push(skillId);

      skills.push({
        id: skillId,
        competencyId,
        name: topic.name,
        description: topic.lightbulbMoment ?? topic.keyFacts[0] ?? topic.name,
        conceptIds: [conceptId],
        difficulty: topic.difficulty ?? "medium",
        cognitiveLoad: topic.difficulty === "hard" ? "high" : "moderate",
      });

      concepts.push({
        id: conceptId,
        skillId,
        name: topic.name,
        summary: topic.lightbulbMoment ?? topic.lesson.title,
        freshness:
          isSkillsTrack(cert) ? "slow-changing" : "versioned",
        explanationLayers: {
          practical: topic.realWorldScenario,
          technical: topic.lesson.content.slice(0, 400) || undefined,
        },
        atomicObjectiveIds: [atomicId],
        misconceptionIds: [],
        sourceIds: [],
      });

      atomics.push({
        id: atomicId,
        conceptId,
        statement: `Demonstrate understanding of ${topic.name}`,
        verb: "explain",
        difficulty: topic.difficulty ?? "medium",
        cognitiveLoad: topic.difficulty === "hard" ? "high" : "moderate",
        assumedBackground: "intro-it",
        freshness: isSkillsTrack(cert) ? "slow-changing" : "versioned",
        examObjectiveIds: topic.objectives,
        prerequisiteAtomicIds: (topic.prerequisites ?? []).map(
          (p) => `alo-${cert.id}-${p}`
        ),
        sourceIds: [],
      });
    }

    competencies.push({
      id: competencyId,
      domainId,
      name: `${domain.name} competency`,
      description: `Competency covering ${domain.name} topics in ${cert.shortName}`,
      skillIds,
    });
  });

  return { domains, competencies, skills, concepts, atomics };
}
