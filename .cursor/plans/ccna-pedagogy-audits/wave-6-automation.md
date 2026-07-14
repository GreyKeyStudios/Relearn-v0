# Wave 6 — Automation

**Domain ID:** `automation`  
**Wave:** 6  
**Status:** Agent pedagogy draft complete — LES files exist; Topic Complete still NO  
**Gate:** [`docs/definition-of-done.md`](../../docs/definition-of-done.md)

| Topic | BLS | Path OK? | Teach-before-test? | Cognitive OK? | Accuracy OK? | Reference quality? | Fixes for P3-CCNA | Topic Complete? |
|-------|-----|----------|--------------------|--------------|--------------|--------------------|-------------------|-----------------|
| `automation-basics` | draft | OK (LES) | draft | draft | draft | vs SDN / APIs | LES wired; DNA Center / YANG authoring / Netmiko deferred | **NO** |

**Domain production-ready:** NO — 0/1 topics signed off (LES draft ≠ Topic Complete; Michael walkthrough still required)

## 2026-07-13 LES draft

- Created `src/content/lessons/automation-basics-experience.ts` → `AUTOMATION_BASICS_EXPERIENCE`
- Wired `experience:` on automation-basics in `ccna.ts`; hub lesson.content / examTraps / commonMistakes trimmed to LES scope (DNA Center product depth, YANG model authoring, Python Netmiko scripting deferred)

## Remaining before Topic Complete

- [ ] Full BLS + quiz/bank/hub alignment pass (Wave 1 style)
- [ ] Soften or defer bank items outside LES scope (e.g. RESTCONF-only traps if overreaching)
- [ ] Michael full flow per topic
- [ ] Sign Topic Complete = YES in this sheet
