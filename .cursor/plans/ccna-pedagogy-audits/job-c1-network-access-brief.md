# Job C1 — Worker brief (Network Access only)

**Status:** Queued — do **not** expand into Domains 3–6  
**Parent audit:** [`job-c0-post-domain1-audit.md`](job-c0-post-domain1-audit.md)  
**Baseline:** Domain 1 quality bar (do not rewrite Domain 1)  
**Product priority:** A+ remains front burner; this job runs only as a separate bounded worker  

---

## Locked decisions (2026-08-01)

1. Domain 1 is the quality baseline — no rewrite.  
2. C1–C6 division approved exactly as C0.  
3. EtherChannel, NTP, SNMP, advanced wireless, MST, and other deferred material stay in [`docs/ccna-deferral-manifest.md`](../../../docs/ccna-deferral-manifest.md) — never silent omission.  
4. A+ is highest active product priority.  
5. C1 may proceed only as this tightly bounded job.  
6. Michael walkthrough required before Domain 2 Topic Complete / domain complete.

---

## Scope (hard fence)

**In scope — Domain 2 only:**

| Order | Topic ID | Batch rule |
|-------|----------|------------|
| 1 | `switching` | Alone — verify before next |
| 2 | `vlans` | Alone — verify before next |
| 3 | `trunking` | Alone — verify before next |
| 4 | `stp` | Alone — verify before next |
| 5 | Domain 2 assessment + integration | After all four topics |

**Out of scope:** Domain 1, Domains 3–6, Sound Synthesis, A+, Lab VM, platform refactors, “while we’re here” edits outside D2 files.

**One topic at a time** (safer than pairs). After each topic:

```bash
npx tsc --noEmit
npm run verify:curriculum -- --strict-ccna --strict-ccna-objectives --strict-pedagogy --strict-experience
```

---

## Goal

Transform each Network Access topic from a **thin lesson** into instruction that matches Domain 1 depth:

> explanation → example → guided practice → assessment → practical application  

Do **not** only add quiz volume. Quizzes already exist (~25). Teach routing of skills (MAC table reading, VLAN membership, trunk tags, STP roles) **before** testing them.

---

## Domain 1 depth bar (must approach)

| Metric | D1 average | D2 today (approx.) |
|--------|------------|--------------------|
| LES screens | ~52 | 20–26 |
| LES prose | ~6.5k | ~2.1–3.1k |
| `lightbulbMoment` | required | **missing on all four** |
| `guidedExample` | required | missing on switching, trunking, stp |
| `realWorldScenario` | required | missing on switching, trunking, stp |
| Lab/sim | required where appropriate | missing on switching, trunking, stp |

---

## Per-topic acceptance (C1)

For each topic, before moving on:

- [ ] LES teaches definition, purpose, context, mechanism, example, interpretation  
- [ ] Common mistakes + troubleshooting present (LES and/or hub)  
- [ ] `lightbulbMoment`, `guidedExample`, `realWorldScenario` present  
- [ ] Quiz/bank items only test taught material (or declared prerequisite / deferral)  
- [ ] Useful flashcards reinforce lesson (do not replace it)  
- [ ] Lab/sim assignment linked (switching, trunking, stp currently have none)  
- [ ] `prerequisites` correct per learning path  
- [ ] Knowledge DNA node linked or added  
- [ ] Objective IDs aligned; deferrals documented  
- [ ] Stable topic IDs preserved (`switching`, `vlans`, `trunking`, `stp`)  
- [ ] `tsc` + curriculum verify pass  
- [ ] Wave sheet updated; **Topic Complete = YES only after Michael walkthrough**

---

## Files allowed to touch

| Topic | Primary files |
|-------|----------------|
| switching | `src/content/lessons/switching-experience.ts`, D2 block in `src/content/certifications/ccna.ts` |
| vlans | `src/content/lessons/vlans-experience.ts`, `ccna.ts` |
| trunking | `src/content/lessons/trunking-experience.ts`, `ccna.ts` |
| stp | `src/content/lessons/stp-experience.ts`, `ccna.ts` |
| Shared (as needed) | `docs/ccna-deferral-manifest.md`, Knowledge DNA node for the topic, `wave-2-network-access.md` |

Do **not** edit other cert bodies or Domain 1/3+ LES files “for consistency” in this job.

---

## Deferred (manifest, not invent)

Typical D2 deferrals (confirm/extend in manifest — do not silently drop exam coverage):

- EtherChannel (CCNA-2.4)  
- Deep wireless architectures (CCNA-2.7–2.9) if not owned by `wireless-basics`  
- MST / advanced STP variants beyond CCNA RSTP essentials  

---

## Domain 2 integration pass (batch 5)

Only after topics 1–4:

- Prerequisite navigation switching → vlans → trunking; stp after switching+vlans  
- No duplicate full re-teach of Ethernet/wireless  
- Domain assessment works; weak results route to correct D2 topics  
- Update [`wave-2-network-access.md`](wave-2-network-access.md)  
- Stop. Do **not** start Job C2.

---

## Start command for the worker

When Michael unblocks C1 (A+ still primary):

1. Read this brief + C0 audit § Domain 2 + Domain 1 `osi-model` / `ethernet` as pedagogy reference.  
2. Implement **`switching` only**.  
3. Verify. Report. Await go-ahead for `vlans`.
