# Wave 3 — IP Connectivity

**Domain ID:** `ip-connectivity`  
**Wave:** 3  
**Status:** Agent pedagogy draft complete — LES files exist; Topic Complete still NO  
**Gate:** [`docs/definition-of-done.md`](../../docs/definition-of-done.md)

| Topic | BLS | Path OK? | Teach-before-test? | Cognitive OK? | Accuracy OK? | Reference quality? | Fixes for P3-CCNA | Topic Complete? |
|-------|-----|----------|--------------------|--------------|--------------|--------------------|-------------------|-----------------|
| `routing-fundamentals` | draft | OK (LES) | draft | draft | draft | vs switching / IPv4 | LES wired; CEF/EIGRP depth deferred | **NO** |
| `static-routes` | draft | OK (LES) | draft | draft | draft | vs routing-fundamentals | LES wired; Null0 redistribution deferred | **NO** |
| `ospf-basics` | draft | OK (LES) | draft | draft | draft | vs static-routes | LES wired; LSA catalog / multi-area fancy deferred | **NO** |
| `nat` | draft | OK (LES) | draft | draft | draft | vs RFC 1918 | LES wired; four-way matrix / IPsec NAT-T deferred | **NO** |

**Domain production-ready:** NO — 0/4 topics signed off (LES draft ≠ Topic Complete; Michael walkthrough still required)

## 2026-07-13 LES draft

- Created `src/content/lessons/routing-fundamentals-experience.ts` → `ROUTING_FUNDAMENTALS_EXPERIENCE`
- Created `src/content/lessons/static-routes-experience.ts` → `STATIC_ROUTES_EXPERIENCE`
- Created `src/content/lessons/ospf-basics-experience.ts` → `OSPF_BASICS_EXPERIENCE`
- Created `src/content/lessons/nat-experience.ts` → `NAT_EXPERIENCE`
- Wired `experience:` on each IP Connectivity topic in `ccna.ts`; light hub keyFacts/commonMistakes/examTraps/lesson.content aligned to LES scope

## Remaining before Topic Complete

- [ ] Full BLS + quiz/bank/hub alignment pass (Wave 1 style)
- [ ] Michael full flow per topic
- [ ] Sign Topic Complete = YES in this sheet
