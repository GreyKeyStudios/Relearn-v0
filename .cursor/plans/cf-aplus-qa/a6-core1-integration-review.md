# A6 — Core 1 integration audit & first-pass readiness review

**Date:** 2026-08-01  
**Status:** Complete — **stop before Core 2**  
**Core 1 maturity:** **First-pass complete** (recommended)  
**Full A+ track:** remains **`planned`** (`src/lib/track-status.ts`)  
**CCNA C1:** remains queued / fenced

---

## Verification

| Command | Result |
|---------|--------|
| `npx tsc --noEmit` | Pass |
| `npm run verify:curriculum -- --strict-aplus` | Pass — **32** topics, no CES warnings; objective tags OK |
| `npm run verify:curriculum` | Pass |

No Core 2 content authored. No CCNA edits. No gold LES conversion. No full-track promotion.

---

## 1) Objective coverage matrix (AP1201)

All **27** Core 1 objectives map to a primary topic + domain-review support. Assessment = quiz on primary + items on domain review. Practical = worksheet / external-lab (or simulator for cables).

| Objective | Primary topic | Supporting | Assess | Practical | Status |
|-----------|---------------|------------|--------|-----------|--------|
| AP1201-1.1 | `ap-mobile-hardware` | `ap-mobile-domain-review` | Yes | `ap-lab-mobile-hw-inventory` | Covered |
| AP1201-1.2 | `ap-mobile-accessories` | `ap-mobile-domain-review` | Yes | `ap-lab-accessory-tickets` | Covered |
| AP1201-1.3 | `ap-mobile-connectivity` | `ap-mobile-domain-review` | Yes | `ap-lab-mobile-connectivity-sheet` | Covered |
| AP1201-2.1 | `ap-ports-protocols` | `ap-networking-domain-review` | Yes | `ap-lab-ports-mapping` | Covered |
| AP1201-2.2 | `ap-wireless-tech` | `ap-networking-domain-review` | Yes | `ap-lab-wireless-worksheet` | Covered |
| AP1201-2.3 | `ap-network-services` | `ap-networking-domain-review` | Yes | `ap-lab-service-isolation-tickets` | Covered |
| AP1201-2.4 | `ap-network-config` | `ap-networking-domain-review` | Yes | `ap-lab-config-compare` | Covered |
| AP1201-2.5 | `ap-network-devices` | `ap-networking-domain-review` | Yes | `ap-lab-device-roles` | Covered |
| AP1201-2.6 | `ap-soho-networks` | `ap-networking-domain-review` | Yes | `ap-lab-soho-harden` | Covered |
| AP1201-2.7 | `ap-network-types` | `ap-networking-domain-review` | Yes | `ap-lab-network-type-classify` | Covered |
| AP1201-2.8 | `ap-network-tools` | `ap-networking-domain-review` | Yes | `ap-lab-tool-tickets` | Covered |
| AP1201-3.1 | `ap-displays` | `ap-hardware-domain-review` | Yes | `ap-lab-display-chain` | Covered |
| AP1201-3.2 | `ap-cables-connectors` | `ap-hardware-domain-review` | Yes | `ap-lab-cable-id` (sim) + swap | Covered |
| AP1201-3.3 | `ap-ram` | `ap-hardware-domain-review` | Yes | `ap-lab-ram-inventory` | Covered |
| AP1201-3.4 | `ap-storage` | `ap-hardware-domain-review` | Yes | `ap-lab-storage-inventory` | Covered |
| AP1201-3.5 | `ap-mb-cpu-cards` | `ap-hardware-domain-review` | Yes | `ap-lab-mb-cpu-compat` | Covered |
| AP1201-3.6 | `ap-power-supplies` | `ap-hardware-domain-review` | Yes | `ap-lab-psu-plan` | Covered |
| AP1201-3.7 | `ap-printers-setup` | `ap-hardware-domain-review` | Yes | `ap-lab-printer-deploy-plan` | Covered |
| AP1201-3.8 | `ap-printer-maintenance` | `ap-hardware-domain-review` | Yes | `ap-lab-printer-ticket-tree` | Covered |
| AP1201-4.1 | `ap-cloud-concepts` | `ap-virt-cloud-domain-review` | Yes | `ap-lab-cloud-responsibility` | Covered |
| AP1201-4.2 | `ap-virtualization` | `ap-virt-cloud-domain-review` | Yes | `ap-lab-virt-plan-or-vm-lab` | Covered |
| AP1201-5.1 | `ap-ts-power-mb-ram-cpu` | `ap-troubleshoot-domain-review` | Yes | `ap-lab-ts-power-decision-tree` | Covered |
| AP1201-5.2 | `ap-ts-storage-raid` | `ap-troubleshoot-domain-review` | Yes | `ap-lab-ts-storage-incidents` | Covered |
| AP1201-5.3 | `ap-ts-display` | `ap-troubleshoot-domain-review` | Yes | `ap-lab-ts-display-chain` | Covered |
| AP1201-5.4 | `ap-ts-mobile` | `ap-troubleshoot-domain-review` | Yes | `ap-lab-ts-mobile-worksheet` | Covered |
| AP1201-5.5 | `ap-ts-network` | `ap-troubleshoot-domain-review` | Yes | `ap-lab-ts-network-tickets` | Covered |
| AP1201-5.6 | `ap-ts-printer` | `ap-troubleshoot-domain-review` | Yes | `ap-lab-ts-printer-incidents` | Covered |

**Relocations / deferrals:** None silent. Exam-weight depth remains first-pass CES (not gold LES). No Core 2 objectives assessed.

**Over-test / under-teach:** Domain reviews re-assess taught objectives only (no new material). Ports taught as service-job-first; TS teaches layers/evidence not symptom→part tables.

---

## 2) Learner-sequence findings

**Locked path** (`docs/a-plus-learning-path.md`):

```text
Hardware → Mobile → Networking → Virt/Cloud → Troubleshooting → (Core 2 later)
```

**Defect found:** `a-plus.ts` previously listed domains in CompTIA exam order (Mobile → Networking → Hardware…), so `getNextTopicInPath` and the cert UI contradicted prerequisites and the learning path.

**Fix:** Reordered Core 1 domains in `a-plus.ts` to match the locked path. UX walk confirms Hardware first; “Today’s focus” = Cables & Connectors.

**Other sequence notes:**

| Finding | Severity | Action |
|---------|----------|--------|
| Virt/Cloud prereq was `ap-mobile-domain-review` (skipped Networking) | Integration defect | Fixed → `ap-networking-domain-review` |
| Looking-ahead / whenThisFails copy referenced wrong next domain | Soft defect | Fixed in Hardware/Mobile/Networking/TS/Virt |
| Topic IDs unchanged | — | No migration needed beyond domain array order |
| Circular prerequisites | None | — |
| Hard gates | Soft (metadata + coaching only) | Acceptable for first-pass |

---

## 3) Teach-before-test findings

- Every live topic has quiz (5+) + `questionBank` (8+) + flashcards (5+) with `objectiveId` tags; `--strict-aplus` green.
- Domain reviews do not introduce new subsystems; they mix prior scenarios.
- Troubleshooting assessments emphasize next check / safety / evidence limits.
- No Core 2 material in Core 1 banks.

**Spot flags (non-blocking polish):**

- Some bank items are shorter than guided quizzes (3 choices) — acceptable first-pass density.
- No automated teach-before-test static analyzer beyond CES + objective tags; Michael walkthrough still recommended for ambiguous stems.

---

## 4) Assessment findings

| Layer | Present | Notes |
|-------|---------|-------|
| Per-topic quiz | Yes (32) | Tagged |
| Question banks | Yes (32) | Tagged |
| Domain reviews | 5 | Hardware, Mobile, Networking, Virt/Cloud, Troubleshooting |
| Core 1 comprehensive exam | **Absent** | Propose architecture below — not auto-built |

**Proposed Core 1 comprehensive assessment (future, not built):**

```text
id: ap-core1-comprehensive
prerequisites: ap-troubleshoot-domain-review
structure:
  - 20–30 applied MC / scenario items spanning 1.x–5.x
  - 4–6 performance-style worksheets (ticket notes)
  - scoring by domain → weak-area route via existing remediation maps
  - exclude Core 2 OS/security/ops content
  - report: exam-readiness signals ≠ job-readiness residency (F5)
delivery: reuse quiz + external-lab assignment types; no platform change
```

---

## 5) Weak-area routing matrix

| Objective | Remediation topic | Valid |
|-----------|-------------------|-------|
| AP1201-1.1 | `ap-mobile-hardware` | Yes |
| AP1201-1.2 | `ap-mobile-accessories` | Yes |
| AP1201-1.3 | `ap-mobile-connectivity` | Yes |
| AP1201-2.1 | `ap-ports-protocols` | Yes |
| AP1201-2.2 | `ap-wireless-tech` | Yes |
| AP1201-2.3 | `ap-network-services` | Yes |
| AP1201-2.4 | `ap-network-config` | Yes |
| AP1201-2.5 | `ap-network-devices` | Yes |
| AP1201-2.6 | `ap-soho-networks` | Yes |
| AP1201-2.7 | `ap-network-types` | Yes |
| AP1201-2.8 | `ap-network-tools` | Yes |
| AP1201-3.1 | `ap-displays` | Yes |
| AP1201-3.2 | `ap-cables-connectors` | Yes |
| AP1201-3.3 | `ap-ram` | Yes |
| AP1201-3.4 | `ap-storage` | Yes |
| AP1201-3.5 | `ap-mb-cpu-cards` | Yes |
| AP1201-3.6 | `ap-power-supplies` | Yes |
| AP1201-3.7 | `ap-printers-setup` | Yes |
| AP1201-3.8 | `ap-printer-maintenance` | Yes |
| AP1201-4.1 | `ap-cloud-concepts` | Yes |
| AP1201-4.2 | `ap-virtualization` | Yes |
| AP1201-5.1 | `ap-ts-power-mb-ram-cpu` | Yes |
| AP1201-5.2 | `ap-ts-storage-raid` | Yes |
| AP1201-5.3 | `ap-ts-display` | Yes |
| AP1201-5.4 | `ap-ts-mobile` | Yes |
| AP1201-5.5 | `ap-ts-network` | Yes |
| AP1201-5.6 | `ap-ts-printer` | Yes |

Wired in `src/lib/quiz-remediation.ts` via the five domain maps. Routes land on precise lessons, not domain shells. Cross-domain TS topics also declare foundation prereqs (hardware/network/mobile/printers).

---

## 6) Cross-domain dependency findings

| Handoff | Status |
|---------|--------|
| Hardware → Mobile / Networking / TS | Prereqs + path order OK after fix |
| Mobile → Mobile TS | `ap-ts-mobile` prereqs include `ap-mobile-domain-review` |
| Networking → Network TS | `ap-ts-network` prereqs include `ap-networking-domain-review` |
| Displays → Display TS | Declared |
| Printers → Printer TS | Declared |
| Virt → VM Lab referral | Present (`/cert/vm-lab`) |
| Networking → Virt/Cloud | Fixed prereq |
| Knowledge DNA (`knowledgeNodeId`) | Sparse (ports, DNS, DHCP, routing, cloud) — polish backlog |

---

## 7) Practical-activity inventory

Every Core 1 topic has ≥1 assignment. Classification:

| Area | Type | ID / notes |
|------|------|------------|
| Hardware ID / cables | In-app drill + worksheet | `cable-type-drill` + `ap-lab-cable-swap` |
| Storage / RAM / MB-CPU / PSU / display | Worksheet | inventory / compat / chain labs |
| Printers setup + maintenance | Worksheet | deploy plan + ticket tree |
| Ports / services / wireless / types / config / devices / SOHO / tools | Worksheet / read-only | authorized local checks |
| Mobile HW / accessories / connectivity | Worksheet | no disassembly |
| Cloud responsibility | Worksheet | |
| Virtualization | Worksheet + VM Lab referral | |
| All TS topics + domain reviews | Scenario worksheets | weak-area loops |
| Domain reviews | Domain review + weak-area lab | 5 domains |

**Quiz-only risk:** Low — every topic has a practical assignment. Credibility is worksheet/scenario-heavy rather than live appliance-heavy (acceptable first-pass; no new lab platform in A6).

---

## 8) Safety consistency findings

Principles checked across Hardware / Mobile / Networking / Virt / TS:

| Principle | Consistency |
|-----------|-------------|
| Never open PSU | Explicit in power + TS |
| Swollen battery stop | Mobile + mobile TS |
| Protect data before repair | Storage TS + print/network notes |
| No early destructive disk actions | Storage TS |
| Document before router reset | Network TS / SOHO |
| Factory reset late/authorized | Mobile TS |
| Hot fuser / HV caution | Printers + printer TS |
| No public scanning | Networking + network TS |
| Passive/authorized wireless | Wireless + TS |
| VM containment | Virt + VM Lab notes |
| Escalation boundaries | Present across domains |

No contradictory “open the PSU / charge the swollen battery / scan the public internet” guidance found.

---

## 9) UX / navigation findings

Walked `/cert/a-plus` (desktop browser automation):

- Domain order now Hardware → Mobile → Networking → Virt/Cloud → Troubleshooting → empty Core 2 shells.
- Start session / next lesson = first Hardware topic.
- Lesson `/cert/a-plus/lesson/ap-cables-connectors` loads with Continue / Back.
- Catalog: A+ remains under **Coming soon** because track status is `planned` (intentional — Core 2 empty). Deep link + TrackCard still open the cert when topics exist.

| Finding | Severity | Action |
|---------|----------|--------|
| Domain order mismatch | Launch-blocking for coherent path | **Fixed** |
| Catalog tagline “not studyable yet” while Core 1 is studyable | Messaging polish | Documented — keep track `planned` until Core 2; do not bump track maturity in A6 |
| Empty Core 2 domains visible | Expected | OK |
| React hydration warning in `AppShell` on lesson load | Platform polish | Not A+-specific; backlog |
| Prerequisites not hard locks | Soft | Document for Michael walkthrough |

---

## 10) Targeted fixes made

| File | Change |
|------|--------|
| `src/content/certifications/a-plus.ts` | Reorder Core 1 domains to locked path; overview = Core 1 first-pass / track planned |
| `src/content/certifications/ap/ap-core1-virt-cloud-a4.ts` | Prereq → `ap-networking-domain-review`; looking-ahead copy |
| `src/content/certifications/ap/ap-core1-hardware-a1c.ts` | Looking-ahead + whenThisFails → Mobile next |
| `src/content/certifications/ap/ap-core1-mobile-a3.ts` | Looking-ahead + whenThisFails → Networking next |
| `src/content/certifications/ap/ap-core1-networking-a2c.ts` | Looking-ahead + whenThisFails → Virt/Cloud / TS |
| `src/content/certifications/ap/ap-core1-troubleshoot-a5c.ts` | Looking-ahead → Core 2 OS when authorized |
| `docs/a-plus-learning-path.md` | A6 / Core 1 first-pass complete markers |
| `.cursor/plans/cf-aplus-qa/aplus-graduation-audit.md` | Tracker update |
| `.cursor/plans/cf-aplus-qa/a6-core1-integration-review.md` | This report |

Topic IDs unchanged. No broad lesson rewrites.

---

## 11) Remaining launch blockers

**For Core 1 first-pass complete:** none remaining after the domain-order + Virt prereq fixes.

**For full A+ Readiness / Available:**

1. Core 2 not implemented (all four domains empty)
2. Track status intentionally `planned`
3. Michael learner walkthrough still required before Readiness

---

## 12) Non-blocking polish backlog

- Sparse Knowledge DNA `knowledgeNodeId` coverage on A+ topics
- Optional `ap-core1-comprehensive` assessment (architecture above)
- Catalog messaging nuance while track is `planned` but Core 1 is studyable
- AppShell hydration warning (platform)
- Gold LES conversion (explicitly deferred)
- Deeper CF referral UX automation beyond prose IDs
- More in-app simulators beyond cable drill

---

## 13) Core 1 maturity recommendation

**Mark Core 1 (all five domains) as first-pass complete.**

| Domain | Marker |
|--------|--------|
| Hardware | First-pass |
| Mobile Devices | First-pass |
| Networking | First-pass |
| Virtualization & Cloud | First-pass |
| Hardware & Network Troubleshooting | First-pass |

**Do not** promote full `a-plus` track to `first-pass` / Readiness / Available while Core 2 is empty.

---

## 14) First Core 2 job recommendation

Per locked learning path F4:

```text
Job A7a — Core 2 Operating Systems (batch 1)
1) ap-os-types          (AP1202-1.x types / purposes)
2) ap-os-install
3) ap-windows-editions  (Windows 11 primary)
Stop after batch verify — then continue OS tools/CLI/settings in A7b
```

Rationale: OS is the highest-weight Core 2 domain, gates Security and Software Troubleshooting, and matches `docs/a-plus-learning-path.md`. Do not start Security or Ops first.

---

## Explicit deferrals (unchanged)

| Item | Status |
|------|--------|
| Core 2 implementation | Next authorized job |
| Full-track maturity promotion | Still planned |
| Gold LES | Deferred |
| CCNA C1 | Queued / fenced |
| Sound Synthesis Phase 3 | Queued |
| F5 help-desk residency | Deferred |
| Core 1 comprehensive exam bank | Proposed only |

---

## Learner-walkthrough items (Michael)

1. Catalog → `/cert/a-plus` — confirm Hardware-first domain list.
2. Complete one topic per domain + each domain review weak-area link.
3. Spot-check Virt prereq messaging (Networking before cloud).
4. Safety spots: PSU no-open, swollen battery, no public scan, hot fuser.
5. Confirm empty Core 2 domains do not block Core 1 progress UI.
6. Optional: `/cert/vm-lab` from virtualization topic.

---

## Stop

A6 complete. Core 1 **first-pass complete**. Full A+ remains **Planned**. Recommended next job: **Core 2 Operating Systems** (`ap-os-types` → …). No Core 2 / CCNA C1 / Available promotion started.
