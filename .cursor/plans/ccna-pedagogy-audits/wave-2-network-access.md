# Wave 2 — Network Access

**Domain ID:** `network-access`  
**Wave:** 2  
**Status:** Agent pedagogy draft complete — LES files exist; Topic Complete still NO  
**Gate:** [`docs/definition-of-done.md`](../../docs/definition-of-done.md)

| Topic | BLS | Path OK? | Teach-before-test? | Cognitive OK? | Accuracy OK? | Reference quality? | Fixes for P3-CCNA | Topic Complete? |
|-------|-----|----------|--------------------|--------------|--------------|--------------------|-------------------|-----------------|
| `switching` | draft | OK (LES) | draft | draft | draft | vs Ethernet | LES wired; hub traps trimmed (no port-sec/CAM overflow) | **NO** |
| `vlans` | draft | OK (LES) | draft | draft | draft | vs switching | LES wired; trunk/native deferred to trunking | **NO** |
| `trunking` | draft | OK (LES) | draft | draft | draft | vs VLANs | LES wired; EtherChannel deferred | **NO** |
| `stp` | draft | OK (LES) | draft | draft | draft | vs switching | LES wired; EtherChannel/MST deferred | **NO** |

**Domain production-ready:** NO — 0/4 topics signed off (LES draft ≠ Topic Complete; Michael walkthrough still required)

## 2026-07-13 LES draft

- Created `src/content/lessons/switching-experience.ts` → `SWITCHING_EXPERIENCE`
- Created `src/content/lessons/vlans-experience.ts` → `VLANS_EXPERIENCE`
- Created `src/content/lessons/trunking-experience.ts` → `TRUNKING_EXPERIENCE`
- Created `src/content/lessons/stp-experience.ts` → `STP_EXPERIENCE`
- Wired `experience:` on each Network Access topic in `ccna.ts`; light hub keyFacts/commonMistakes/examTraps align to LES scope

## Remaining before Topic Complete

- [ ] Full BLS + quiz/bank/hub alignment pass (Wave 1 style)
- [ ] Michael full flow per topic
- [ ] Sign Topic Complete = YES in this sheet
