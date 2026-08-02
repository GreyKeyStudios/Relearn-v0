# Pathway F — A+ graduation audit (front burner)

**Status:** **Core 1 first-pass complete** · **Core 2 OS first-pass** · **Core 2 Security first-pass** · **SW-TS A9a–A9c live** (3.1–3.3) · full track still `planned`  
**Date:** 2026-08-01  
**Priority:** Highest active product work (ahead of CCNA C1)  
**Core 1:** [`a6-core1-integration-review.md`](a6-core1-integration-review.md)  
**Core 2 OS:** [`a7a-os-batch1-review.md`](a7a-os-batch1-review.md) · [`a7b-os-batch2-review.md`](a7b-os-batch2-review.md) · [`a7c-os-batch3-review.md`](a7c-os-batch3-review.md) · [`a7d-os-batch4-review.md`](a7d-os-batch4-review.md)  
**Core 2 Security:** [`a8a-security-batch1-review.md`](a8a-security-batch1-review.md) · [`a8b-windows-security-review.md`](a8b-windows-security-review.md) · [`a8c-wireless-security-review.md`](a8c-wireless-security-review.md) · [`a8d-malware-review.md`](a8d-malware-review.md) · [`a8e-social-engineering-review.md`](a8e-social-engineering-review.md) · [`a8f-malware-removal-review.md`](a8f-malware-removal-review.md) · [`a8g-hardening-review.md`](a8g-hardening-review.md) · [`a8h-mobile-security-review.md`](a8h-mobile-security-review.md) · [`a8i-data-destruction-review.md`](a8i-data-destruction-review.md) · [`a8j-soho-security-review.md`](a8j-soho-security-review.md) · [`a8k-browser-security-review.md`](a8k-browser-security-review.md) · [`a8l-security-domain-review.md`](a8l-security-domain-review.md)  
**Core 2 SW-TS:** [`a9a-windows-os-troubleshooting-review.md`](a9a-windows-os-troubleshooting-review.md) · [`a9b-mobile-os-troubleshooting-review.md`](a9b-mobile-os-troubleshooting-review.md)  
**Next (when authorized):** AP1202-3.4 — `ap-ts-pc-security` · do not auto-promote full track  

**Architecture:** [`docs/computer-fundamentals-aplus-architecture.md`](../../../docs/computer-fundamentals-aplus-architecture.md)  
**Objectives provenance:** [`docs/a-plus-objectives-source.md`](../../../docs/a-plus-objectives-source.md) (V15 · doc 3.0 · 2026-07-15)

---

## Locked product context

| Decision | Value |
|----------|--------|
| Exam series | 220-1201 + 220-1202 (V15) only |
| Windows teaching | Windows 11 primary (A2) |
| CF vs A+ | Separate tracks; CF recommended, not hard gate (A4) |
| Help-desk residency | F5 only — do not block F3–F4 |
| Maturity ladder | `planned` → `first-pass` → `internal-review` → `learner-qa` → `stable` |
| Pedagogy bar | Same lesson-depth standard as CCNA Domain 1 / DoD — not fact sheets |

**Graduation path for A+:** In Development / first-pass → Readiness (internal-review / learner-qa) → Available (stable) — never auto-promote.

---

## Current state (repo truth)

| Artifact | State |
|----------|--------|
| `src/content/certifications/a-plus.ts` | Core 1 + OS/Security first-pass + SW-TS A9a–A9c (**59** topics) · Ops empty |
| Track status | still `planned` (do not auto-promote) |
| Core 1 domains | **First-pass complete** |
| Core 2 OS | **First-pass** — AP1202-1.1–1.11 + domain review |
| Core 2 Security | **First-pass** — AP1202-2.1–2.11 + domain review |
| Core 2 SW-TS | A9a–A9c live — AP1202-3.1–3.3 (domain not first-pass) |
| Computer Fundamentals | **Full first-pass** — recommended entry |
| Pathway F phase | **next = AP1202-3.4** (`ap-ts-pc-security`) when authorized |
| Verify | `--strict-aplus` green (59 topics); base curriculum verify green |

**Bottom line:** A+ cannot enter Readiness or Available yet. OS and Security are first-pass; SW-TS in progress (3.1–3.2); Ops remain incomplete.

---

## Gap inventory vs architecture

### Blockers to “Available”

1. Empty topic bodies for all Core 1 + Core 2 domains  
2. No LES experiences for any `ap-*` topic  
3. No objective registry file mapped to topics  
4. No Core labs/sims wired (`ap-pc-builder`, SOHO, etc. — catalog in architecture §6–7)  
5. Cross-track CF refreshers for A+ topics not wired  
6. No Michael walkthrough path (nothing studyable)  
7. Maturity still `planned`

### Non-blockers (explicitly later)

| Item | Phase |
|------|--------|
| Help-desk residency | F5 |
| Gold-standard LES on every CF topic | Post–stable polish |
| Professor Mode AI | Phase 5 platform |
| CCNA C1–C6 | Queued; separate workers |

### CF dependency (honest)

CF first-pass is **studyable** and unblocks A+ entry pedagogically. Remaining CF LES coverage and `learner-qa` → `stable` can proceed **in parallel** with A+ F3 but must not stall Core 1 authoring. Prefer: start F3 while CF polish is a separate small job.

---

## Objective coverage target (V15)

### Core 1 (220-1201) — F3

| Domain module (shell id) | Weight | Objective IDs |
|--------------------------|--------|---------------|
| `ap-core1-mobile` | 13% | AP1201-1.1 … 1.3 |
| `ap-core1-networking` | 23% | AP1201-2.1 … 2.8 |
| `ap-core1-hardware` | 25% | AP1201-3.1 … 3.8 |
| `ap-core1-virt-cloud` | 11% | AP1201-4.1 … 4.2 |
| `ap-core1-troubleshoot` | 28% | AP1201-5.1 … 5.6 |

### Core 2 (220-1202) — F4

| Domain module | Weight | Objective IDs |
|---------------|--------|---------------|
| `ap-core2-os` | 28% | AP1202-1.1 … 1.11 |
| `ap-core2-security` | 28% | AP1202-2.1 … 2.11 |
| `ap-core2-sw-troubleshoot` | 23% | AP1202-3.1 … 3.4 |
| `ap-core2-ops` | 21% | AP1202-4.1 … 4.10 |

**Must not omit (V15):** Zero Trust, AI basics (4.10), ReFS/XFS, Windows 11 editions/tools, cloud productivity, modern malware types.

**Illustrative topic IDs** (finalize in `docs/a-plus-learning-path.md` during first F3 batch): see architecture §4.

---

## Recommended implementation batches (A+ front burner)

### Job A0 — Contracts (short, before heavy content)

1. Add `src/content/objectives/a-plus.ts` (or split 1201/1202) with full V15 ID list  
2. Create `docs/a-plus-learning-path.md` — locked topic list + prereqs + CF referrals  
3. Wire verify expectations for empty→partial Core 1  
4. Confirm objectives PDF version still 3.0 (bump provenance if CompTIA republished)

### Job A1 — Core 1 first domain with content (Hardware or Networking)

**Recommendation:** Start with **Hardware** (`ap-core1-hardware`) or **Networking** — highest exam weight after troubleshooting; builds visible study path quickly.

Suggested first topic batch (Hardware path):

1. `ap-cables-connectors` (AP1201-3.2)  
2. `ap-ram` (3.3)  
3. `ap-storage` (3.4)  

Then motherboard/CPU/power, displays, printers.

**Alternate:** Networking first (`ap-ports-protocols` → wireless → SOHO) if job-market SOHO stories are preferred for buddy testing.

### Job A2–A5 — Remaining Core 1 domains

One domain per job (or one domain’s topics in 3–6 topic batches):

- Mobile  
- Networking (if not A1)  
- Virtualization & Cloud  
- Hardware & Network Troubleshooting (last in Core 1 — depends on prior domains)

### Job A6 — Core 1 integration

- Maturity: `planned` → `first-pass` when Core 1 is studyable end-to-end  
- `--strict-aplus` green for Core 1  
- Buddy walkthrough → `internal-review` / `learner-qa`  
- **Do not** mark Available until Core 2 also first-pass (both exams required)

### Job A7 — Core 2 (F4)

Same one-domain / small-batch discipline. Ops must include **AI basics** and professionalism.

### Job A8 — Pathway readiness

- CF refreshers on A+ weak areas  
- Both cores first-pass + walkthrough  
- Recommend Available only after Michael sign-off  

---

## Lesson standard (same as CCNA C0 rubric)

Every substantive A+ topic needs: definition, purpose, context, mechanism, example, interpretation, mistakes, troubleshooting, guided practice, assessment, practical where appropriate, CF/prerequisite connections.

Reject: term → definition → three facts → quiz.

First-pass may use stepped + strong prose where LES gold is deferred — but **must still teach before testing** (architecture §5 / §15).

---

## Parallel queue (do not merge into A+ worker)

| Queue | Doc |
|-------|-----|
| CCNA C1 Network Access | [`../ccna-pedagogy-audits/job-c1-network-access-brief.md`](../ccna-pedagogy-audits/job-c1-network-access-brief.md) |
| CCNA C2–C6 | After C1 |
| Sound Synthesis Phase 3 | After A+ + CCNA post-D1 |
| Lab VM appliance | Infra worker later |

---

## Immediate next action

1. **Authorize AP1202-3.3** — `ap-ts-mobile-security` (troubleshoot common mobile OS and application security issues). See [`a9b-mobile-os-troubleshooting-review.md`](a9b-mobile-os-troubleshooting-review.md).  
2. Do not swallow all of Software Troubleshooting in one pass. Ops stays deferred.  
3. Keep CCNA C1 queued/fenced. Full A+ track remains `planned`.

---

## Review checklist (Michael)

- [ ] Confirm A+ remains front burner over CCNA C1  
- [ ] Pick A1 start domain: **Hardware** or **Networking**  
- [ ] Confirm F5 residency stays deferred  
- [ ] Confirm first-pass CES bar (not full gold LES on day one) is acceptable to reach `first-pass` maturity  
- [ ] Authorize Job A0 implementation
