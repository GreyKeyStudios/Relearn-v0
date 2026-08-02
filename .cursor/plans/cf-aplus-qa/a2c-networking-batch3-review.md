# A2c — Core 1 Networking Batch 3 + Domain Integration — review report

**Date:** 2026-08-01  
**Status:** Complete — **stop before next Core 1 domain**  
**Networking domain maturity:** **First-pass** (recommended)  
**Full A+ track:** remains **`planned`**  
**CCNA C1:** remains queued / fenced

---

## Verification

| Stage | `tsc --noEmit` | `--strict-aplus` | Base `verify:curriculum` |
|-------|----------------|------------------|--------------------------|
| After `ap-network-devices` | Pass | Pass (15 topics) | Pass |
| After `ap-soho-networks` | Pass | Pass (16 topics) | Pass |
| After `ap-network-tools` | Pass | Pass (17 topics) | Pass |
| After domain review + integration | Pass | Pass (**18** topics) | Pass |

No schema, objective, or prerequisite conflicts. No CCNA content edited. No unrelated A+ domains started. No broad platform refactor.

---

## Topics added (A2c order)

| Topic ID | Objective(s) | Focus |
|----------|--------------|--------|
| `ap-network-devices` | AP1201-2.5 | Device jobs, combined SOHO gateway vs discrete roles, topology + failure isolation |
| `ap-soho-networks` | AP1201-2.6 | Harden sequence, wireless/guest/IoT, DHCP, UPnP/forwards, backup/docs |
| `ap-network-tools` | AP1201-2.8 | Physical + CLI tool selection, interpretation, authorization |
| `ap-networking-domain-review` | AP1201-2.1–2.8 | Mixed applied assessment + weak-area routing |

**Full Networking path (locked):**  
ports → services → wireless → types → config → devices → SOHO → tools → domain review

---

## Files added / modified

| File | Change |
|------|--------|
| `src/content/certifications/ap/ap-core1-networking-a2c.ts` | **Added** — A2c topics + domain review |
| `src/content/certifications/ap/ap-networking-remediation.ts` | Map 2.5 / 2.6 / 2.8 (complete 2.1–2.8) |
| `src/content/certifications/a-plus.ts` | Wire batch 3; overview notes Hardware + Networking first-pass |
| `src/content/knowledge/nodes.ts` | A+ mapping on `routing-switching` |
| `docs/a-plus-learning-path.md` | A2c live + Networking first-pass note |
| `.cursor/plans/cf-aplus-qa/aplus-graduation-audit.md` | Tracker update |
| `.cursor/plans/cf-aplus-qa/a2c-networking-batch3-review.md` | This report |

---

## Objective coverage (Networking — complete)

| ID | Topic | Status |
|----|-------|--------|
| AP1201-2.1 | `ap-ports-protocols` | Live |
| AP1201-2.2 | `ap-wireless-tech` | Live |
| AP1201-2.3 | `ap-network-services` | Live |
| AP1201-2.4 | `ap-network-config` | Live |
| AP1201-2.5 | `ap-network-devices` | **Live (A2c)** |
| AP1201-2.6 | `ap-soho-networks` | **Live (A2c)** |
| AP1201-2.7 | `ap-network-types` | Live |
| AP1201-2.8 | `ap-network-tools` | **Live (A2c)** |
| AP1201-2.1–2.8 | `ap-networking-domain-review` | **Live (A2c)** |

Weak-area map covers every Networking objective → valid topic ID. Domain review quiz/bank tags span 2.1–2.8 with remediation hints.

---

## Integration checks

| Check | Result |
|-------|--------|
| Prerequisites follow locked path | Yes |
| CF referrals resolve | Yes (`cf-home-network-devices`, `cf-ethernet-vs-wifi`, `cf-ip-and-dns-beginner`, `cf-connection-troubleshooting-basics`, etc.) |
| Objectives 2.1–2.8 covered | Yes — none silently omitted |
| Assessed material taught first | Yes |
| A+ depth (not CCNA clone) | Yes — intro VLAN/IDS/controller only |
| Wireless / scanning safety intact | Yes |
| Labs fictional / read-only / authorized | Yes |
| Stable topic IDs unchanged | Yes |
| Weak-area routing valid | Yes |

---

## Explicit deferrals / handoffs

| Item | Notes |
|------|--------|
| Gold LES | Not required for first-pass |
| Domain 5 Hardware & Network Troubleshooting | Separate domain — reuse habits later |
| Deep switch/VLAN/firewall engineering | CCNA / later — A+ intro only |
| Real router access requirement | Not required; fictional SOHO worksheet |
| Public scanning / offensive wireless | Forbidden |
| Mobile / Virt-Cloud / Core 2 | Not started |
| Full-track maturity promotion | Still **planned** |
| CCNA C1 | Queued / fenced |

**Intentional overlap:** Internet connection-type *recognition* lives in `ap-network-types` (2.7); SOHO *install/config* in `ap-soho-networks` (2.6). Consumer gateway multi-role taught in devices + applied in SOHO.

---

## Domain maturity recommendation

**Core 1 Networking → First-pass** — authorized.

Do **not** promote the complete A+ certification. Hardware + Networking first-pass ≠ track Available.

---

## Learner-walkthrough items (Michael)

1. Topology placement lab (`ap-network-devices`) — ONT → router → switch → PoE AP.
2. Ridge Dental SOHO harden worksheet — defaults, UPnP/3389 forward, guest/IoT.
3. Tool ticket set — cable vs APIPA vs DNS vs first-hop tracert; live `ipconfig /all`.
4. Domain review quiz — confirm misses route to correct `ap-*` topics.
5. Spot-check: guest reaching NAS → SOHO isolation; bars but no web → not modem-first.
6. Confirm no lab asks for public scans or real port-forward exposure drills.

---

## Recommended next Core 1 domain

**Mobile Devices (`ap-core1-mobile`)** — locked IDs already in learning path.

Proposed batch sequence:

```text
A3a: ap-mobile-hardware      (AP1201-1.1)
  → ap-mobile-accessories   (AP1201-1.2)
A3b: ap-mobile-connectivity (AP1201-1.3)
  → ap-mobile-domain-review (1.1–1.3 integration)   # if following Hardware/Networking pattern
```

Alternate after Mobile: **Virtualization & Cloud** (`ap-cloud-concepts` → `ap-virtualization`), then **Hardware & Network Troubleshooting**.

Do not start until Michael authorizes.

---

## Stop

A2c complete. Networking domain documented as **first-pass**. Full A+ track remains **Planned**. No Mobile / Virt / Troubleshooting / Core 2 / CCNA C1 / gold LES work started.
