import { soundSynthesis } from "@/content/certifications/sound-synthesis";
import { SYNTH_CHALLENGES } from "@/content/simulators/synthesis/challenges";
import type { Certification } from "@/content/types";
import { isSynthPatch, type SynthChallengeDefinition, type SynthPanelId, type SynthPatch } from "@/lib/relearn-synth";

export interface SynthChallengeIssue { challengeId: string; message: string }

const PANEL_BY_PARAMETER: Record<keyof SynthPatch, SynthPanelId> = {
  waveform: "oscillator", frequency: "oscillator", masterGain: "oscillator",
  cutoff: "filter", resonance: "filter",
  attack: "envelope", decay: "envelope", sustain: "envelope", release: "envelope",
  lfoEnabled: "modulation", lfoTarget: "modulation", lfoRate: "modulation", lfoDepth: "modulation",
};

const BOUNDS: Partial<Record<keyof SynthPatch, [number, number]>> = {
  frequency: [55, 880], masterGain: [0, 0.25], cutoff: [120, 12000], resonance: [0.1, 15],
  attack: [0.005, 2], decay: [0.02, 2], sustain: [0, 1], release: [0.02, 3], lfoRate: [0.1, 20], lfoDepth: [0, 1],
};

export function verifySynthChallenges(challenges: SynthChallengeDefinition[] = SYNTH_CHALLENGES, certification: Certification = soundSynthesis): SynthChallengeIssue[] {
  const issues: SynthChallengeIssue[] = [];
  const ids = new Set<string>();
  const assignmentIds = new Set<string>();
  const courseAssignments = certification.domains.flatMap((domain) => domain.topics.flatMap((topic) =>
    (topic.assignments ?? []).map((assignment) => ({ assignment, topicId: topic.id }))));
  const synthAssignments = courseAssignments.filter(({ assignment }) => assignment.simulatorId === "relearn-synth-subtractive");

  for (const challenge of challenges) {
    const fail = (message: string) => issues.push({ challengeId: challenge.id || "(missing id)", message });
    if (!challenge.id.trim() || ids.has(challenge.id)) fail("Challenge id is missing or duplicated.");
    ids.add(challenge.id);
    if (!challenge.assignmentId.trim() || assignmentIds.has(challenge.assignmentId)) fail("Assignment id is missing or duplicated.");
    assignmentIds.add(challenge.assignmentId);
    if (!isSynthPatch(challenge.starterPatch) || !isSynthPatch(challenge.comparisonPatch)) fail("Starter or comparison patch is unsafe or incomplete.");
    if (challenge.criteria.length === 0) fail("Challenge has no objective criteria.");
    const criterionIds = new Set<string>();
    const parameters = new Set<keyof SynthPatch>();
    for (const criterion of challenge.criteria) {
      if (!criterion.id.trim() || criterionIds.has(criterion.id)) fail(`Criterion id '${criterion.id}' is missing or duplicated.`);
      criterionIds.add(criterion.id);
      if (parameters.has(criterion.parameter)) fail(`Parameter '${criterion.parameter}' is assessed more than once.`);
      parameters.add(criterion.parameter);
      if (!challenge.visiblePanels.includes(PANEL_BY_PARAMETER[criterion.parameter])) fail(`Assessed parameter '${criterion.parameter}' is hidden by lesson focus.`);
      const bounds = BOUNDS[criterion.parameter];
      if (criterion.target.kind !== "equals" && !bounds) fail(`Numeric target is invalid for '${criterion.parameter}'.`);
      if (bounds && criterion.target.kind !== "equals") {
        const low = criterion.target.kind === "range" ? criterion.target.min : criterion.target.value;
        const high = criterion.target.kind === "range" ? criterion.target.max : criterion.target.value;
        if (!Number.isFinite(low) || !Number.isFinite(high) || low > high || low < bounds[0] || high > bounds[1]) fail(`Target for '${criterion.parameter}' is outside the supported control range.`);
      }
      if (criterion.target.kind === "equals") {
        const candidate = { ...challenge.starterPatch, [criterion.parameter]: criterion.target.value };
        if (!isSynthPatch(candidate)) fail(`Equals target for '${criterion.parameter}' is not a supported value.`);
      }
    }
    const linked = courseAssignments.find(({ assignment }) => assignment.id === challenge.assignmentId);
    if (!linked) fail("Challenge assignment does not exist in the Synthesis course.");
    else {
      if (linked.assignment.type !== "simulator" || linked.assignment.simulatorId !== "relearn-synth-subtractive") fail("Linked assignment is not a ReLearn Synth simulator.");
      if (!linked.assignment.relatedTopicIds.includes(linked.topicId)) fail("Linked assignment does not name its containing topic.");
    }
  }
  for (const { assignment } of synthAssignments) {
    if (!assignmentIds.has(assignment.id)) issues.push({ challengeId: assignment.id, message: "Synth simulator assignment has no authored challenge definition." });
  }
  return issues;
}
