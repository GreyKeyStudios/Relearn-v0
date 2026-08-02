# A2a — Core 1 Networking Batch 1 — review report

**Date:** 2026-08-01  
**Status:** Complete — **stop before A2b**  
**Full A+ track:** remains **`planned`**  
**Hardware domain:** first-pass (unchanged)

---

## Verification

| Check | Result |
|-------|--------|
| `npx tsc --noEmit` | Pass |
| `npm run verify:curriculum -- --strict-aplus` | Pass (**11** A+ topics) |
| `npm run verify:curriculum` | Pass |

No CCNA lesson bodies edited. No broad platform refactor.

---

## Topics added

| Topic ID | Objective | Focus |
|----------|-----------|--------|
| `ap-ports-protocols` | AP1201-2.1 | Protocol meaning, TCP vs UDP tradeoffs, ports as endpoints, relationship model, safe local checks |
| `ap-network-services` | AP1201-2.3 | Host services by **job first**, then default ports; ticket → service isolation |

Pedagogy pattern used:  
`user action → service → protocol → transport → port → symptom → technician check`  
(not port flashcards first).

---

## Files added / modified

| File | Change |
|------|--------|
| `src/content/certifications/ap/ap-core1-networking-a2a.ts` | **Added** — A2a topics |
| `src/content/certifications/ap/ap-networking-remediation.ts` | **Added** — 2.1/2.3 weak-area map |
| `src/content/certifications/a-plus.ts` | Wire Networking domain batch 1 |
| `src/lib/quiz-remediation.ts` | Networking map in reviewTopicId |
| `src/content/knowledge/nodes.ts` | A+ mappings on `ports-protocols` + `dns` |
| `docs/a-plus-learning-path.md` | A2a status + A2b/A2c sequencing note |

---

## Objective coverage (Networking)

| ID | Topic | Status |
|----|-------|--------|
| AP1201-2.1 | `ap-ports-protocols` | **Live (A2a)** |
| AP1201-2.2 | `ap-wireless-tech` | Deferred → A2b |
| AP1201-2.3 | `ap-network-services` | **Live (A2a)** |
| AP1201-2.4 | `ap-network-config` | Deferred → A2b |
| AP1201-2.5 | `ap-network-devices` | Deferred → A2c |
| AP1201-2.6 | `ap-soho-networks` | Deferred → A2c |
| AP1201-2.7 | `ap-network-types` | Deferred → A2b |
| AP1201-2.8 | `ap-network-tools` | Deferred → A2c |

### Services taught (2.3)

HTTP/HTTPS, FTP (+ secure alternatives guidance), SSH, Telnet (legacy insecure), SMTP, POP3, IMAP, DNS, DHCP, RDP, SMB, LDAP/LDAPS, SNMP, NTP, Syslog, common DB listeners (recognition).

---

## Explicit deferrals

| Item | Notes |
|------|--------|
| Wireless (2.2), network types (2.7), config concepts (2.4) | **A2b** |
| Devices, SOHO, tools, domain review | **A2c** |
| Deep packet analysis / CCNA depth | Out of scope |
| Public network scanning | Forbidden in labs |
| Gold LES | Not required |
| Full track maturity bump | Still planned |

---

## Walkthrough items (Michael)

1. TCP vs UDP tradeoff language (not “UDP is bad”) — `ap-ports-protocols`  
2. Works-by-IP / fails-by-name DNS story  
3. Service-isolation tickets (six fictional cases) — `ap-network-services`  
4. Telnet/FTP framed as legacy, not modern defaults  

---

## Recommended A2b sequence (exact)

Implement **one topic at a time**, then verify:

1. **`ap-wireless-tech`** — AP1201-2.2  
2. **`ap-network-types`** — AP1201-2.7 (internet connection + network types)  
3. **`ap-network-config`** — AP1201-2.4 (addressing, VLANs/VPN/basics as objective requires — A+ depth only)

Stop after those three for an A2b review before A2c (devices → SOHO → tools → `ap-networking-domain-review`).

---

## Stop

Do not begin wireless, SOHO, tools, Mobile, Virt/Cloud, Core 1 TS, Core 2, or CCNA C1 until authorized.
