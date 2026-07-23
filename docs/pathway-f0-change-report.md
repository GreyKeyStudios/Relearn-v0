# Pathway F — F0 shared engine / schema change report

**Date:** 2026-07-15  
**Branch:** `feature/cf-aplus-f0-schemas`  
**Rule:** Review this list before treating F1 as done; no silent edits to CCNA / Git / PowerShell curriculum bodies.

## Shared schema / engine files touched

| File | Why |
|------|-----|
| [`src/content/types.ts`](../src/content/types.ts) | `computer-stack` anchor; `computerStackLayer`; `realWorldTraps`; `teacherReflectionPrompt`; `whenThisFails`; `CfPlacementResult` / `FoundationReferral` types |
| [`src/lib/track-status.ts`](../src/lib/track-status.ts) | Maturity ladder (`planned` → `gold-standard`); CF=`first-pass`, A+=`planned`; `groupTracksByStatus` adds `planned` |
| [`src/components/lesson/ExperiencePlayer.tsx`](../src/components/lesson/ExperiencePlayer.tsx) | Render `computer-stack` anchor |
| [`src/components/lesson/ComputerStackDiagram.tsx`](../src/components/lesson/ComputerStackDiagram.tsx) | New LES anchor diagram |
| [`src/components/lesson/TopicDeepDive.tsx`](../src/components/lesson/TopicDeepDive.tsx) | Show `realWorldTraps` + `whenThisFails` |
| [`src/lib/content-expansion.ts`](../src/lib/content-expansion.ts) | CES accepts `realWorldTraps` as trap field |
| [`scripts/verify-curriculum.ts`](../scripts/verify-curriculum.ts) | `--strict-cf` / `--strict-aplus` stubs |
| [`src/content/registry.ts`](../src/content/registry.ts) | Register CF + A+ |
| [`src/content/simulators/registry.ts`](../src/content/simulators/registry.ts) | Register `cf-file-folder-manager` |
| [`src/app/certifications/page.tsx`](../src/app/certifications/page.tsx) | Planned certs in Coming soon |
| [`src/app/page.tsx`](../src/app/page.tsx) | Planned certs in library teaser |
| [`src/app/cert/[certId]/page.tsx`](../src/app/cert/[certId]/page.tsx) | CF placement wizard |
| [`BRIDGE_MASTER.md`](../BRIDGE_MASTER.md) | Pathway F + Tier 1 note |

## Content / docs (not shared engine)

- `docs/computer-fundamentals-aplus-architecture.md` (approved decisions)
- `docs/a-plus-objectives-source.md`
- `docs/helpdesk-residency-contracts.md`
- `docs/computer-fundamentals-learning-path.md`
- `src/content/certifications/a-plus.ts` (empty shell)
- `src/content/certifications/computer-fundamentals.ts` (F1 pilot)
- `src/content/lessons/cf-*-experience.ts`
- `src/lib/cf-placement.ts`
- `src/components/cf/CfPlacementWizard.tsx`
- Fundamentals simulator + drill pool

## Explicitly not changed

- `src/content/certifications/ccna.ts`
- `src/content/certifications/powershell.ts`
- `src/content/certifications/git-github.ts`
- Other CompTIA cert bodies

## Verify commands

```bash
npm run build
npx tsc --noEmit
npm run verify:curriculum
npm run verify:curriculum -- --strict-cf
npm run verify:curriculum -- --strict-aplus
```
