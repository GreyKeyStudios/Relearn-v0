# CCNA Learning Path

**Owner:** P4.8-Path (path designer)  
**Cert:** CCNA 200-301 (21 topics, 6 domains)  
**Pilot:** Phase 4.8 pedagogy sprint

---

## First 30 minutes (novice path)

Critical first impression — optimize for confidence, not coverage.

| Order | Topic | Minutes (est.) | Why here |
|-------|-------|----------------|----------|
| 1 | Onboarding wizard | 3 | Study plan, active cert |
| 2 | `osi-model` | 15–20 | Mental model for everything else; reference lesson |
| 3 | `tcp-ip-model` | 10–15 | Maps OSI to real-world stack |
| 4 | `ethernet` | 10–15 | First concrete L2 technology |

Do **not** front-load subnetting, OSPF, or ACLs in the first session.

---

## Domain waves

| Wave | Domain ID | Topics | Count |
|------|-------------|--------|-------|
| 1 | `network-fundamentals` | osi-model, tcp-ip-model, ethernet, ipv4-addressing, subnetting, ip-ranges, ipv6-basics, wireless-basics | 8 |
| 2 | `network-access` | switching, vlans, trunking, stp | 4 |
| 3 | `ip-connectivity` | routing-fundamentals, static-routes, ospf-basics, nat | 4 |
| 4 | `ip-services` | dhcp, dns | 2 |
| 5 | `security-fundamentals` | acls, network-security | 2 |
| 6 | `automation` | automation-basics | 1 |

---

## Canonical topic order (within cert)

Array order in `ccna.ts` should match this unless pedagogy review documents an exception.

### Wave 1 — Network Fundamentals

| # | Topic ID | Prerequisites (proposed) | Rationale |
|---|----------|--------------------------|-----------|
| 1 | `osi-model` | — | Foundation mental model |
| 2 | `tcp-ip-model` | `osi-model` | Maps 7 layers → 4 layers |
| 3 | `ethernet` | `osi-model` | L2 example after models |
| 4 | `ipv4-addressing` | `osi-model` | L3 addressing concepts |
| 5 | `subnetting` | `ipv4-addressing` | **Already set** |
| 6 | `ip-ranges` | `ipv4-addressing`, `subnetting` | Builds on masks |
| 7 | `ipv6-basics` | `ipv4-addressing` | Parallel addressing model |
| 8 | `wireless-basics` | `ethernet` | L2 wireless extension |

### Wave 2 — Network Access

| # | Topic ID | Prerequisites (proposed) | Rationale |
|---|----------|--------------------------|-----------|
| 1 | `switching` | `ethernet` | Switch = L2 device |
| 2 | `vlans` | `switching` | **Already set** |
| 3 | `trunking` | `vlans` | 802.1Q on VLAN trunks |
| 4 | `stp` | `switching`, `vlans` | Loop prevention on L2 |

### Wave 3 — IP Connectivity

| # | Topic ID | Prerequisites (proposed) | Rationale |
|---|----------|--------------------------|-----------|
| 1 | `routing-fundamentals` | `ipv4-addressing`, `subnetting` | Routes between networks |
| 2 | `static-routes` | `routing-fundamentals` | Simplest routing config |
| 3 | `ospf-basics` | `routing-fundamentals`, `static-routes` | **Already set** |
| 4 | `nat` | `routing-fundamentals`, `ipv4-addressing` | L3 address translation |

### Wave 4 — IP Services

| # | Topic ID | Prerequisites (proposed) | Rationale |
|---|----------|--------------------------|-----------|
| 1 | `dhcp` | `ipv4-addressing`, `ethernet` | Address assignment |
| 2 | `dns` | `ipv4-addressing`, `tcp-ip-model` | Name resolution |

### Wave 5 — Security Fundamentals

| # | Topic ID | Prerequisites (proposed) | Rationale |
|---|----------|--------------------------|-----------|
| 1 | `acls` | `routing-fundamentals`, `ipv4-addressing` | **Partially set** |
| 2 | `network-security` | `acls`, `osi-model` | Security concepts + controls |

### Wave 6 — Automation

| # | Topic ID | Prerequisites (proposed) | Rationale |
|---|----------|--------------------------|-----------|
| 1 | `automation-basics` | `osi-model`, `tcp-ip-model` | APIs and network programmability context |

---

## Prerequisite graph (summary)

```text
osi-model
  ├── tcp-ip-model
  ├── ethernet ── wireless-basics
  │                └── switching ── vlans ── trunking
  │                                    └── stp
  └── ipv4-addressing ── subnetting ── ip-ranges
                     ├── ipv6-basics
                     └── routing-fundamentals ── static-routes ── ospf-basics
                                               └── nat
                                               └── acls ── network-security
dhcp ← ipv4 + ethernet
dns ← ipv4 + tcp-ip
automation-basics ← osi + tcp-ip
```

**Platform note:** Prerequisites are display-only today. Phase 4.8 may add soft warnings or hard blocks in `getNextCurriculumStep` — decision by M0 after Wave 1.

---

## Exam weight hints (prioritization)

High study time: `subnetting`, `vlan`/`trunking`, `ospf-basics`, `acls`, `ipv4-addressing`  
Foundation (must be solid first): `osi-model`, `tcp-ip-model`, `ethernet`, `routing-fundamentals`

---

## Bridge backlog (post–Wave 1)

- **Subnetting mastery split:** track **Understanding** vs **Speed** separately (concept vs timed drill reps). Speed Mode = timed subnet simulator after familiar tier.
- **Subnetting polish:** animated “Story of a /24” pie lesson (Phase 3).
- **IP ranges Professor QA (passed ~92–94%):** mnemonic `10=ALL · 172=16–31 · 192=168` added to lesson; watch 172.40 public trap and router-vs-switch for NAT wording.
- **IPv6 Professor QA (passed ~90–92%):** `/64` prefix visual, leading-zero examples strip, IPv4↔IPv6 role compare table; compression drill assignment for extra reps.
- **Wireless Professor QA (passed ~88–90%):** BSSID vs SSID, WEP-why, roaming, open Wi-Fi, shared-air vs dedicated wire, troubleshoot L1–2 first; channel dial visual.
- **Post-lesson Curriculum Confidence survey (Phase 5):** stars + “which questions felt unfair?” checklist after Professor Mode sessions.

---

*Update this doc when P4.8-Path completes each wave audit.*
