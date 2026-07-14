# CCNA sign-off scoreboard

**Last mechanical audit:** 2026-07-14 (`test:e2e:audit` — 21 pass / 0 warn / 0 fail)  
**Evidence batch:** 2026-07-14 (`audit:evidence -- --all`)  
**Policy:** [`docs/CURRICULUM_REVIEW_BOARD.md`](../../../../docs/CURRICULUM_REVIEW_BOARD.md)  
**Walkthrough note:** 2026-07-14 — Michael lost in Network Access + early IP Connectivity (definition dumps). Ledger: `theme__domain2-3-pedagogy-rewrite`.

Factual status only. Soft heuristic scores and AI “quality %” do **not** belong here.  
Topic Complete remains authoritative on wave sheets; this board tracks pipeline readiness.

| Topic | Domain | Mechanical | Evidence | Findings triaged | Ship-before blockers open | Human walkthrough | Topic Complete |
|-------|--------|------------|----------|------------------|---------------------------|-------------------|----------------|
| `osi-model` · OSI Model | network-fundamentals | pass | yes | yes | 0 | pending | NO |
| `tcp-ip-model` · TCP/IP Model | network-fundamentals | pass | yes | none | 0 | pending | NO |
| `ethernet` · Ethernet | network-fundamentals | pass | yes | none | 0 | pending | NO |
| `ipv4-addressing` · IPv4 Addressing | network-fundamentals | pass | yes | none | 0 | pending | NO |
| `subnetting` · Subnetting | network-fundamentals | pass | yes | yes | 0 | pending | NO |
| `ip-ranges` · IP Ranges | network-fundamentals | pass | yes | none | 0 | pending | NO |
| `ipv6-basics` · IPv6 Basics | network-fundamentals | pass | yes | none | 0 | pending | NO |
| `wireless-basics` · Wireless Basics | network-fundamentals | pass | yes | none | 0 | pending | NO |
| `switching` · Switching | network-access | pass | yes | yes | 1 | fail — rewrite required | NO |
| `vlans` · VLANs | network-access | pass | yes | yes | 1 | fail — rewrite required | NO |
| `trunking` · Trunking | network-access | pass | yes | yes | 1 | fail — rewrite required | NO |
| `stp` · STP | network-access | pass | yes | yes | 1 | fail — rewrite required | NO |
| `routing-fundamentals` · Routing Fundamentals | ip-connectivity | pass | yes | yes | 1 | fail — rewrite required | NO |
| `static-routes` · Static Routes | ip-connectivity | pass | yes | yes | 1 | fail — rewrite required | NO |
| `ospf-basics` · OSPF Basics | ip-connectivity | pass | yes | yes | 0 | pending (Wave 3) | NO |
| `nat` · NAT | ip-connectivity | pass | yes | yes | 0 | pending (Wave 3) | NO |
| `dhcp` · DHCP | ip-services | pass | yes | none | 0 | pending | NO |
| `dns` · DNS | ip-services | pass | yes | none | 0 | pending | NO |
| `acls` · ACLs | security-fundamentals | pass | yes | none | 0 | pending | NO |
| `network-security` · Network Security | security-fundamentals | pass | yes | none | 0 | pending | NO |
| `automation-basics` · Automation Basics | automation | pass | yes | none | 0 | pending | NO |

**Ship-before blockers open:** Domain 2–3 teach-path rewrite (`theme__domain2-3-pedagogy-rewrite`). Count clears when Wave PRs land and Michael re-walks pass.  
**Human walkthrough = fail — rewrite required:** owner walkthrough rejected current LES teach path; not a pacing-only judgment.
