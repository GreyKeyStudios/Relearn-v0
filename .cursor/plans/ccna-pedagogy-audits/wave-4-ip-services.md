# Wave 4 — IP Services

**Domain ID:** `ip-services`  
**Wave:** 4  
**Status:** Agent pedagogy draft complete — LES files exist; Topic Complete still NO  
**Gate:** [`docs/definition-of-done.md`](../../docs/definition-of-done.md)

| Topic | BLS | Path OK? | Teach-before-test? | Cognitive OK? | Accuracy OK? | Reference quality? | Fixes for P3-CCNA | Topic Complete? |
|-------|-----|----------|--------------------|--------------|--------------|--------------------|-------------------|-----------------|
| `dhcp` | draft | OK (LES) | draft | draft | draft | vs DNS / IPv4 APIPA | LES wired; snooping deep config / DHCPv6 deferred | **NO** |
| `dns` | draft | OK (LES) | draft | draft | draft | vs DHCP options | LES wired; DNSSEC / split-horizon / dig mastery deferred | **NO** |

**Domain production-ready:** NO — 0/2 topics signed off (LES draft ≠ Topic Complete; Michael walkthrough still required)

## 2026-07-13 LES draft

- Created `src/content/lessons/dhcp-experience.ts` → `DHCP_EXPERIENCE`
- Created `src/content/lessons/dns-experience.ts` → `DNS_EXPERIENCE`
- Wired `experience:` on DHCP and DNS topics in `ccna.ts`; hub lesson.content / examTraps / commonMistakes trimmed to LES scope (snooping depth, DNSSEC, split-horizon deferred)

## Remaining before Topic Complete

- [ ] Full BLS + quiz/bank/hub alignment pass (Wave 1 style)
- [ ] Soften or defer bank items outside LES scope (e.g. deep snooping)
- [ ] Michael full flow per topic
- [ ] Sign Topic Complete = YES in this sheet
