# Wave 5 — Security Fundamentals

**Domain ID:** `security-fundamentals`  
**Wave:** 5  
**Status:** Agent pedagogy draft complete — LES files exist; Topic Complete still NO  
**Gate:** [`docs/definition-of-done.md`](../../docs/definition-of-done.md)

| Topic | BLS | Path OK? | Teach-before-test? | Cognitive OK? | Accuracy OK? | Reference quality? | Fixes for P3-CCNA | Topic Complete? |
|-------|-----|----------|--------------------|--------------|--------------|--------------------|-------------------|-----------------|
| `acls` | draft | OK (LES) | draft | draft | draft | vs routing / L3 filter | LES wired; IPv6 / reflexive / time-based deferred | **NO** |
| `network-security` | draft | OK (LES) | draft | draft | draft | vs ACLs / wireless | LES wired; DAI / snooping deep / IPS detail deferred | **NO** |

**Domain production-ready:** NO — 0/2 topics signed off (LES draft ≠ Topic Complete; Michael walkthrough still required)

## 2026-07-13 LES draft

- Created `src/content/lessons/acls-experience.ts` → `ACLS_EXPERIENCE`
- Created `src/content/lessons/network-security-experience.ts` → `NETWORK_SECURITY_EXPERIENCE`
- Wired `experience:` on acls and network-security in `ccna.ts`; hub lesson.content / examTraps / commonMistakes trimmed to LES scope (IPv6 ACL depth, DAI/DHCP snooping config, IPS signatures, full syslog severity lists deferred)

## Remaining before Topic Complete

- [ ] Full BLS + quiz/bank/hub alignment pass (Wave 1 style)
- [ ] Soften or defer bank items outside LES scope (e.g. deep DAI)
- [ ] Michael full flow per topic
- [ ] Sign Topic Complete = YES in this sheet
