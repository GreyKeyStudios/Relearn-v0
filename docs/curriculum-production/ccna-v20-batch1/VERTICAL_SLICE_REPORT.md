# CCNA v2.0 Vertical Slices — 1.3 + 5.2

**Branch:** `cursor/ccna-v20-vertical-slices-1-3-5-2-b8ad`  
**Base:** `dev` (includes merged PR #34 batch-1 specs)  
**Mode:** Learner-facing Path A elevations from approved production specs  
**Do not merge until owner walkthrough**

---

## Scope

| Official parent | Topic id | Pathway | Disposition (batch-1 review) |
| --- | --- | --- | --- |
| **1.3** Troubleshoot IPv4… (public and private) | `ipv4-troubleshoot-v20` | v2.0 catalog (shared-core elevation) | approved |
| **5.2** Select generative-AI prompts… | `ai-prompts-netops-v20` | v2.0-only | approved |

**Not implemented:** 2.4, 1.4, 1.7, 2.5, 3.2, 3.3 (listed as unfinished on the v2.0 pathway card).

---

## Deliverables checklist

### Slice 1 — 1.3

| Artifact | Location |
| --- | --- |
| LES lesson | `src/content/lessons/ipv4-troubleshoot-v20-experience.ts` |
| Topic (quiz, bank, flashcards, hub) | `src/content/certifications/ccna/v20-vertical-slices.ts` |
| Worked examples | LES + `guidedExample` + sim scenarios |
| Diagnostic → remediation | Quiz misconception choices → `rem-v20-ipv4-public-private-triage` |
| Simulator | `ipv4-troubleshoot-drill` (evidence panels, ≥2 before diagnose) |
| Objective IDs | `200-301-v2.0/1.3` only |
| Sources | Official v2.0 exam topics (via production source catalog) |
| Mastery | Existing quiz/sim/SRS engine — no new thresholds |

### Slice 2 — 5.2

| Artifact | Location |
| --- | --- |
| LES lesson | `src/content/lessons/ai-prompts-netops-v20-experience.ts` |
| Topic | same module as above |
| Net-ops scenarios | CRC / ACL / change-window / OSPF adjacency prompts |
| Diagnostic → remediation | `rem-v20-prompt-components` |
| Simulator | `ai-prompts-netops-drill` |
| Objective IDs | `200-301-v2.0/5.2` only |
| Constraints | No generic PE, model tuning, creative writing, or broad AI ethics |

---

## Version & progress rules (implemented)

- Catalog filter via `objectivesVersion: "v2.0"` + `resolveEffectiveCcnaPathway`
- Preference stored in `progress.ccnaPathwayPreference` (exam date + override)
- Switching pathways **does not** delete `completedLessons` / `topicMastery` / SRS
- Pilot keys on foundation topics unchanged; no silent v2.0 credit from subnetting/automation-basics
- Unfinished batch-1 parents labeled on the v2.0 pathway card

---

## Playwright

`e2e/ccna-v20-vertical-slices.spec.ts`

- Version-specific visibility
- Lesson → quiz answerability
- Diagnostic → remediation routing
- Simulator completion + failure/misconception states
- Progress persistence across pathway switch
- Exam-date recommendation → v2.0

---

## Verification

See owner walkthrough checklist. Automated suite:

```bash
npm run verify:production
npm run verify:curriculum -- --strict-ccna --strict-ccna-objectives
npm run verify:curriculum -- --strict-pedagogy
npm run verify:curriculum -- --strict-experience
npx tsc --noEmit
npm run build
npx playwright test e2e/learner-loop.spec.ts e2e/ccna-curriculum-audit.spec.ts e2e/ccna-v20-vertical-slices.spec.ts
```
