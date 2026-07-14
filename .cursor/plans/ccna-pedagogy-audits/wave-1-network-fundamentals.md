# Wave 1 — Network Fundamentals

**Domain ID:** `network-fundamentals`  
**Wave:** 1  
**Status:** Agent audit complete — awaiting Michael full-flow walkthrough  
**Gate:** [`docs/definition-of-done.md`](../../docs/definition-of-done.md)

| Topic | BLS | Quiz | Bank aligned? | Hub aligned? | Topic Complete? | Michael walkthrough? |
|-------|-----|------|-------------|-------------|-----------------|----------------------|
| `osi-model` | PASS | PASS | PASS (18) | PASS | **NO** | Pending |
| `tcp-ip-model` | PASS | PASS | PASS (11) | PASS | **NO** | Pending |
| `ethernet` | PASS | PASS | PASS (11) | PASS | **NO** | Pending |
| `ipv4-addressing` | PASS | PASS | PASS (6) | PASS | **NO** | Pending |
| `subnetting` | PASS | PASS | PASS (31) | PASS | **NO** | Pending |
| `ip-ranges` | PASS | PASS | PASS (14) | PASS | **NO** | Pending |
| `ipv6-basics` | PASS | PASS | PASS (15) | PASS | **NO** | Pending |
| `wireless-basics` | PASS | PASS | PASS (14) | PASS | **NO** | Pending |

**Domain production-ready:** NO — 0/8 topics signed off (agent hub PASS ≠ Topic Complete; Michael walkthrough still required)

## 2026-07-13 hub polish (pass 3)

- **osi-model:** `realWorldScenario` matches DNS/Application guided path (removed “re-cabling”)
- **ip-ranges:** Trimmed CGN / class-letter residue from reading mode + traps; Class A/B/C scrubbed from bank explanations; `ip-ranges-b19` → `subnetting-b41`
- **ipv6-basics:** Reading mode → LES recall table; dropped EUI-64 / solicited-node hub items
- **wireless-basics:** Reading mode trimmed to SSID/BSSID/channels/CSMA/CA/WPA (no RSSI/site-survey encyclopedia)

## 2026-07-02 alignment sprint (pass 2)

- **ethernet:** Bank 20→11; hub traps/scenario aligned to LES (no VLAN/802.1Q/auto-MDIX)
- **ipv4-addressing:** Bank 20→6; hub guided example + traps aligned; subnetting-only items removed
- **subnetting:** Bank 40→30; removed `/22`–`/23` cross-octet cluster; scenario uses `/24`→`/26`

## 2026-07-02 alignment sprint (pass 1)

- Created [`docs/definition-of-done.md`](../../docs/definition-of-done.md) and [`docs/ccna-deferral-manifest.md`](../../docs/ccna-deferral-manifest.md)
- **OSI:** Removed `osi-b10`, `osi-b20`; fixed flashcards/hub
- **TCP/IP:** Hub + bank aligned
- **ip-ranges / ipv6 / wireless:** Bank + drill trims

## Remaining before Topic Complete

- [ ] Michael full flow per topic (lesson → hub → flashcards → quiz → bank → drills → PT)
- [ ] Professor Mode without hidden knowledge
- [ ] Optional: trim legacy `lesson.content` prose on PASS topics still showing pre-LES dumps in reading mode (tcp/ethernet/ipv4/subnetting)

## Michael integration test checklist (per topic)

- [ ] Full flow completed as first-time learner
- [ ] No "unfair" questions flagged
- [ ] Sign Topic Complete = YES in this sheet
