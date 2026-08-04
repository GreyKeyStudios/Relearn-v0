/**
 * Curriculum gap report — every live and planned ReLearn track.
 */

import { CERTIFICATIONS } from "@/content/registry";
import type { Certification, Topic } from "@/content/types";
import { getContentExpansionLevel } from "@/lib/content-expansion";
import { isSkillsTrack } from "@/lib/track-kind";
import { PLANNED_TRACKS } from "@/lib/planned-tracks";
import {
  CERT_TRACKS_NEEDING_OBJECTIVE_LINES,
  getExamBlueprint,
} from "@/content/production/exam-blueprints";
import { defaultFreshnessForTrack } from "@/content/production/freshness";
import { FUTURE_ACADEMIC_SUBJECT_STUBS } from "@/content/production/hierarchy";
import type { FreshnessClass, TrackGapSummary } from "@/content/production/types";

function countInvalidCorrect(topic: Topic): number {
  let n = 0;
  for (const q of [...topic.quiz, ...(topic.questionBank ?? [])]) {
    if (!q.choices.some((c) => c.id === q.correctChoiceId)) n += 1;
  }
  return n;
}

function duplicateQuestionIds(cert: Certification): number {
  const seen = new Set<string>();
  let dupes = 0;
  for (const domain of cert.domains) {
    for (const topic of domain.topics) {
      for (const q of [...topic.quiz, ...(topic.questionBank ?? [])]) {
        if (seen.has(q.id)) dupes += 1;
        else seen.add(q.id);
      }
    }
  }
  return dupes;
}

function brokenPrereqs(cert: Certification): number {
  const ids = new Set(cert.domains.flatMap((d) => d.topics.map((t) => t.id)));
  let n = 0;
  for (const domain of cert.domains) {
    for (const topic of domain.topics) {
      for (const pre of topic.prerequisites ?? []) {
        if (!ids.has(pre)) n += 1;
      }
    }
  }
  return n;
}

export function buildTrackGapSummary(cert: Certification): TrackGapSummary {
  const kind = isSkillsTrack(cert) ? "skills" : "certification";
  const topics = cert.domains.flatMap((d) => d.topics);
  const blueprint = getExamBlueprint(cert.id);

  let topicsWithObjectives = 0;
  let topicsWithPrerequisites = 0;
  let topicsWithExperience = 0;
  let topicsFullCes = 0;
  let topicsStandardCes = 0;
  let topicsMinimalCes = 0;
  let quizQuestionCount = 0;
  let bankQuestionCount = 0;
  let flashcardCount = 0;
  let questionsMissingObjectiveId = 0;
  let questionsMissingDifficulty = 0;
  let questionsMissingExplanation = 0;
  let invalidCorrectChoiceCount = 0;
  const freshnessCoverage: Partial<Record<FreshnessClass, number>> = {};
  const defaultFreshness = defaultFreshnessForTrack(kind);
  freshnessCoverage[defaultFreshness] = topics.length;

  for (const topic of topics) {
    if ((topic.objectives?.length ?? 0) > 0) topicsWithObjectives += 1;
    if ((topic.prerequisites?.length ?? 0) > 0) topicsWithPrerequisites += 1;
    if (topic.lesson.experience?.screens?.length) topicsWithExperience += 1;

    const level = getContentExpansionLevel(topic);
    if (level === "full") topicsFullCes += 1;
    else if (level === "standard") topicsStandardCes += 1;
    else topicsMinimalCes += 1;

    quizQuestionCount += topic.quiz.length;
    bankQuestionCount += topic.questionBank?.length ?? 0;
    flashcardCount += topic.flashcards.length;
    invalidCorrectChoiceCount += countInvalidCorrect(topic);

    for (const q of [...topic.quiz, ...(topic.questionBank ?? [])]) {
      if (!q.objectiveId) questionsMissingObjectiveId += 1;
      if (!q.difficulty) questionsMissingDifficulty += 1;
      if (!q.explanation || q.explanation.trim().length < 8) {
        questionsMissingExplanation += 1;
      }
    }
  }

  const uncoveredBlueprintObjectives =
    blueprint?.domains.flatMap((d) =>
      d.objectives
        .filter((o) => o.coveredByTopicIds.length === 0)
        .map((o) => o.id)
    ) ?? [];

  const notes: string[] = [];
  if (!blueprint && kind === "certification") {
    notes.push("No production exam blueprint registered for this certification track.");
  }
  if (blueprint?.confidence === "needs-retrieval") {
    notes.push(
      "Blueprint exists but needs first-party retrieval before official-alignment claims."
    );
  }
  if (topicsMinimalCes > topics.length / 2) {
    notes.push("Majority of topics are still CES minimal — prioritize expansion batches.");
  }
  if (topicsWithExperience === 0) {
    notes.push("No LES experiences authored yet for this track.");
  }

  return {
    trackId: cert.id,
    trackName: cert.name,
    kind,
    topicCount: topics.length,
    domainCount: cert.domains.length,
    topicsWithObjectives,
    topicsWithPrerequisites,
    topicsWithExperience,
    topicsFullCes,
    topicsStandardCes,
    topicsMinimalCes,
    quizQuestionCount,
    bankQuestionCount,
    flashcardCount,
    questionsMissingObjectiveId,
    questionsMissingDifficulty,
    questionsMissingExplanation,
    invalidCorrectChoiceCount,
    duplicateQuestionIdCount: duplicateQuestionIds(cert),
    brokenPrerequisiteCount: brokenPrereqs(cert),
    missingSourceBlueprint: !blueprint && kind === "certification",
    uncoveredBlueprintObjectives,
    freshnessCoverage,
    notes,
  };
}

export function buildPlannedTrackGapSummaries(): TrackGapSummary[] {
  return PLANNED_TRACKS.map((track) => ({
    trackId: track.id,
    trackName: track.name,
    kind: "planned" as const,
    topicCount: 0,
    domainCount: 0,
    topicsWithObjectives: 0,
    topicsWithPrerequisites: 0,
    topicsWithExperience: 0,
    topicsFullCes: 0,
    topicsStandardCes: 0,
    topicsMinimalCes: 0,
    quizQuestionCount: 0,
    bankQuestionCount: 0,
    flashcardCount: 0,
    questionsMissingObjectiveId: 0,
    questionsMissingDifficulty: 0,
    questionsMissingExplanation: 0,
    invalidCorrectChoiceCount: 0,
    duplicateQuestionIdCount: 0,
    brokenPrerequisiteCount: 0,
    missingSourceBlueprint: true,
    uncoveredBlueprintObjectives: [],
    freshnessCoverage: {},
    notes: [
      `Planned ${track.template} track — ${track.tagline}`,
      "Complete subject onboarding before content production.",
    ],
  }));
}

export function buildFutureSubjectGapSummaries(): TrackGapSummary[] {
  return FUTURE_ACADEMIC_SUBJECT_STUBS.map((subject) => ({
    trackId: subject.id,
    trackName: subject.name,
    kind: "planned" as const,
    topicCount: 0,
    domainCount: 0,
    topicsWithObjectives: 0,
    topicsWithPrerequisites: 0,
    topicsWithExperience: 0,
    topicsFullCes: 0,
    topicsStandardCes: 0,
    topicsMinimalCes: 0,
    quizQuestionCount: 0,
    bankQuestionCount: 0,
    flashcardCount: 0,
    questionsMissingObjectiveId: 0,
    questionsMissingDifficulty: 0,
    questionsMissingExplanation: 0,
    invalidCorrectChoiceCount: 0,
    duplicateQuestionIdCount: 0,
    brokenPrerequisiteCount: 0,
    missingSourceBlueprint: true,
    uncoveredBlueprintObjectives: [],
    freshnessCoverage: {},
    notes: [
      `Future ${subject.family} subject stub — no curriculum authored.`,
      "Prefer textbooks, university resources, standards, and peer-reviewed sources.",
    ],
  }));
}

export function buildFullGapReport(): {
  generatedAt: string;
  liveTracks: TrackGapSummary[];
  plannedTracks: TrackGapSummary[];
  futureSubjects: TrackGapSummary[];
  certsNeedingBlueprint: string[];
  certsNeedingObjectiveLines: string[];
  totals: {
    liveTracks: number;
    liveTopics: number;
    fullCesTopics: number;
    uncoveredObjectives: number;
  };
} {
  const liveTracks = CERTIFICATIONS.map(buildTrackGapSummary);
  const plannedTracks = buildPlannedTrackGapSummaries();
  const futureSubjects = buildFutureSubjectGapSummaries();

  return {
    generatedAt: new Date().toISOString(),
    liveTracks,
    plannedTracks,
    futureSubjects,
    certsNeedingBlueprint: liveTracks
      .filter((t) => t.kind === "certification" && t.missingSourceBlueprint)
      .map((t) => t.trackId),
    certsNeedingObjectiveLines: [...CERT_TRACKS_NEEDING_OBJECTIVE_LINES],
    totals: {
      liveTracks: liveTracks.length,
      liveTopics: liveTracks.reduce((s, t) => s + t.topicCount, 0),
      fullCesTopics: liveTracks.reduce((s, t) => s + t.topicsFullCes, 0),
      uncoveredObjectives: liveTracks.reduce(
        (s, t) => s + t.uncoveredBlueprintObjectives.length,
        0
      ),
    },
  };
}

export function formatGapReportMarkdown(
  report: ReturnType<typeof buildFullGapReport>
): string {
  const lines: string[] = [];
  lines.push("# ReLearn Curriculum Gap Report");
  lines.push("");
  lines.push(`Generated: ${report.generatedAt}`);
  lines.push("");
  lines.push("## Totals");
  lines.push("");
  lines.push(`- Live tracks: ${report.totals.liveTracks}`);
  lines.push(`- Live topics: ${report.totals.liveTopics}`);
  lines.push(`- Full CES topics: ${report.totals.fullCesTopics}`);
  lines.push(
    `- Uncovered blueprint objectives: ${report.totals.uncoveredObjectives}`
  );
  lines.push(
    `- Certification tracks still needing blueprints: ${report.certsNeedingBlueprint.join(", ") || "(none)"}`
  );
  lines.push(
    `- Certification tracks needing official objective-line mapping: ${report.certsNeedingObjectiveLines.join(", ") || "(none)"}`
  );
  lines.push("");
  lines.push("## Live tracks");
  lines.push("");

  for (const t of report.liveTracks) {
    lines.push(`### ${t.trackName} (\`${t.trackId}\`) — ${t.kind}`);
    lines.push("");
    lines.push(
      `| Topics | Domains | Full CES | Standard | Minimal | LES | Objectives tagged |`
    );
    lines.push(`| ---: | ---: | ---: | ---: | ---: | ---: | ---: |`);
    lines.push(
      `| ${t.topicCount} | ${t.domainCount} | ${t.topicsFullCes} | ${t.topicsStandardCes} | ${t.topicsMinimalCes} | ${t.topicsWithExperience} | ${t.topicsWithObjectives} |`
    );
    lines.push("");
    lines.push(
      `- Quiz / bank / flashcards: ${t.quizQuestionCount} / ${t.bankQuestionCount} / ${t.flashcardCount}`
    );
    lines.push(
      `- Questions missing objectiveId / difficulty / explanation: ${t.questionsMissingObjectiveId} / ${t.questionsMissingDifficulty} / ${t.questionsMissingExplanation}`
    );
    lines.push(
      `- Invalid correctChoiceId: ${t.invalidCorrectChoiceCount}; duplicate question ids: ${t.duplicateQuestionIdCount}; broken prereqs: ${t.brokenPrerequisiteCount}`
    );
    lines.push(
      `- Missing exam blueprint: ${t.missingSourceBlueprint ? "yes" : "no"}`
    );
    if (t.uncoveredBlueprintObjectives.length > 0) {
      const sample = t.uncoveredBlueprintObjectives.slice(0, 12).join(", ");
      const more =
        t.uncoveredBlueprintObjectives.length > 12
          ? ` (+${t.uncoveredBlueprintObjectives.length - 12} more)`
          : "";
      lines.push(`- Uncovered objectives (sample): ${sample}${more}`);
    }
    for (const note of t.notes) {
      lines.push(`- Note: ${note}`);
    }
    lines.push("");
  }

  lines.push("## Planned tracks");
  lines.push("");
  for (const t of report.plannedTracks) {
    lines.push(`- **${t.trackName}** (\`${t.trackId}\`): ${t.notes.join(" ")}`);
  }
  lines.push("");
  lines.push("## Future academic subject stubs");
  lines.push("");
  for (const t of report.futureSubjects) {
    lines.push(`- **${t.trackName}** (\`${t.trackId}\`): ${t.notes[0]}`);
  }
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push(
    "This report does not mass-produce lessons. Use docs/curriculum-production/ for authoring templates and batch sequencing."
  );
  lines.push("");
  return lines.join("\n");
}
