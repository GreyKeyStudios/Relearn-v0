# CompTIA A+ — Learning Path (V15)

**Track:** `a-plus`  
**Exams:** 220-1201 (Core 1) · 220-1202 (Core 2)  
**Maturity:** Core 1 + Core 2 objectives and domain integrations = **first-pass complete** · learner QA/polish remains before Ready/Available  
**Parent:** [`computer-fundamentals-aplus-architecture.md`](computer-fundamentals-aplus-architecture.md)  
**Objectives registry:** `src/content/objectives/a-plus.ts`  
**Provenance:** [`a-plus-objectives-source.md`](a-plus-objectives-source.md)

**Locked 2026-08-01 (Michael):** Hardware first (A1). Networking second. F5 residency deferred. First-pass CES must teach before testing; gold LES not required for every topic before Core 1 exists.

**A1b sequence (Michael, 2026-08-01):** After storage → `ap-mb-cpu-cards` → `ap-power-supplies` → `ap-displays` → (A1c) printers. Topic IDs and objective IDs unchanged; learner order updated for coherent build-up.

---

## Domain order (learner path)

```text
Core 1 Hardware
  → Core 1 Mobile
  → Core 1 Networking
  → Core 1 Virtualization & Cloud
  → Core 1 Hardware & Network Troubleshooting
  → Core 2 Operating Systems
  → Core 2 Security
  → Core 2 Software Troubleshooting
  → Core 2 Operational Procedures
```

Hardware leads so A+ builds a distinct parts/cables/install identity before overlapping CF/Network+/CCNA networking material.

---

## Core 1 — Hardware (`ap-core1-hardware`)

| Order | Topic ID | Objectives | Status | CF referrals |
|------:|----------|------------|--------|--------------|
| 1 | `ap-cables-connectors` | AP1201-3.2 | **A1 live** | `cf-ports-and-connectors`, `cf-cables-common-types` |
| 2 | `ap-ram` | AP1201-3.3 | **A1 live** | `cf-cpu-ram-storage`, `cf-inside-the-box` |
| 3 | `ap-storage` | AP1201-3.4 | **A1 live** | `cf-cpu-ram-storage` |
| 4 | `ap-mb-cpu-cards` | AP1201-3.5 | **A1b** | `cf-motherboard-power-cooling`, `cf-esd-and-safe-handling`, `cf-inside-the-box` |
| 5 | `ap-power-supplies` | AP1201-3.6 | **A1b** | `cf-motherboard-power-cooling` |
| 6 | `ap-displays` | AP1201-3.1 | **A1b live** | `cf-peripherals-and-displays` |
| 7 | `ap-printers-setup` | AP1201-3.7 | **A1c live** | `cf-meetings-print-scan` |
| 8 | `ap-printer-maintenance` | AP1201-3.8 | **A1c live** | `cf-meetings-print-scan` |
| 9 | `ap-hardware-domain-review` | AP1201-3.1–3.8 | **A1c live** (integration) | — |

**Domain maturity:** Core 1 Hardware = **first-pass** (content complete for 3.1–3.8 + review). Full `a-plus` track remains **`planned`**.

**Stop gates:** A1–A6 ✓ Core 1 first-pass · **A7a–A7d ✓** (OS first-pass) · **A8a–A8l ✓** (Security first-pass) · **A9a–A9c ✓** (SW-TS 3.1–3.3). Next when authorized: AP1202-3.4 (`ap-ts-pc-security`). Full track remains planned — do not auto-promote.

---

## Core 1 — remaining domains (IDs locked; content later)

### Mobile (`ap-core1-mobile`)

| Order | Topic ID | Objectives | Batch / status |
|------:|----------|------------|----------------|
| 1 | `ap-mobile-hardware` | AP1201-1.1 | **A3 live** |
| 2 | `ap-mobile-accessories` | AP1201-1.2 | **A3 live** |
| 3 | `ap-mobile-connectivity` | AP1201-1.3 | **A3 live** |
| 4 | `ap-mobile-domain-review` | AP1201-1.1–1.3 | **A3 live** (integration) |

**A3 learner order:** hardware → accessories → connectivity → domain review. **Mobile Devices domain = first-pass** after A3; full A+ track remains planned.

### Networking (`ap-core1-networking`) — after Hardware first-pass

| Order | Topic ID | Objectives | Batch / status |
|------:|----------|------------|----------------|
| 1 | `ap-ports-protocols` | AP1201-2.1 | **A2a live** |
| 2 | `ap-network-services` | AP1201-2.3 | **A2a live** |
| 3 | `ap-wireless-tech` | AP1201-2.2 | **A2b live** |
| 4 | `ap-network-types` | AP1201-2.7 | **A2b live** (types + concise internet-link recognition) |
| 5 | `ap-network-config` | AP1201-2.4 | **A2b live** (addressing / config concepts) |
| 6 | `ap-network-devices` | AP1201-2.5 | **A2c live** |
| 7 | `ap-soho-networks` | AP1201-2.6 | **A2c live** |
| 8 | `ap-network-tools` | AP1201-2.8 | **A2c live** |
| 9 | `ap-networking-domain-review` | AP1201-2.1–2.8 | **A2c live** (integration) |

**A2 learner order note:** Ports/TCP-UDP (2.1) → services (2.3) → wireless (2.2) → network types (2.7) → client config (2.4) → devices (2.5) → SOHO (2.6) → tools (2.8) → domain review. **Networking domain = first-pass** after A2c; full A+ track remains planned.

### Virtualization & Cloud (`ap-core1-virt-cloud`)

| Order | Topic ID | Objectives | Batch / status |
|------:|----------|------------|----------------|
| 1 | `ap-cloud-concepts` | AP1201-4.1 | **A4 live** |
| 2 | `ap-virtualization` | AP1201-4.2 | **A4 live** |
| 3 | `ap-virt-cloud-domain-review` | AP1201-4.1–4.2 | **A4 live** (integration) |

**A4 learner order:** cloud concepts → virtualization (VM Lab referral) → domain review. **Virtualization & Cloud domain = first-pass** after A4; full A+ track remains planned. Hands-on VM construction stays in `/cert/vm-lab`.

### Hardware & Network Troubleshooting (`ap-core1-troubleshoot`)

| Order | Topic ID | Objectives | Batch / status |
|------:|----------|------------|----------------|
| 1 | `ap-ts-power-mb-ram-cpu` | AP1201-5.1 | **A5a live** |
| 2 | `ap-ts-storage-raid` | AP1201-5.2 | **A5a live** |
| 3 | `ap-ts-display` | AP1201-5.3 | **A5b live** |
| 4 | `ap-ts-mobile` | AP1201-5.4 | **A5b live** |
| 5 | `ap-ts-network` | AP1201-5.5 | **A5c live** |
| 6 | `ap-ts-printer` | AP1201-5.6 | **A5c live** |
| 7 | `ap-troubleshoot-domain-review` | AP1201-5.1–5.6 | **A5c live** (integration) |

**A5 pedagogy:** identify → theory → test → plan → implement/escalate → verify → document. Batches: A5a power/storage · A5b display/mobile · A5c network/printer/review. **Troubleshooting domain = first-pass** after A5c; **Core 1 first-pass complete** after A6. Full A+ track remains planned.

---

## Core 2 — topic IDs (locked; F4)

### OS (`ap-core2-os`)

| Order | Topic ID | Objectives | Status |
|------:|----------|------------|--------|
| 1 | `ap-os-types` | AP1202-1.1 | **A7a live** |
| 2 | `ap-os-install` | AP1202-1.2 | **A7a live** |
| 3 | `ap-windows-editions` | AP1202-1.3 | **A7a live** |
| 4 | `ap-windows-tools` | AP1202-1.4 | **A7b live** |
| 5 | `ap-windows-cli` | AP1202-1.5 | **A7b live** |
| 6 | `ap-windows-settings` | AP1202-1.6 | **A7b live** |
| 7 | `ap-windows-networking` | AP1202-1.7 | **A7c live** |
| 8 | `ap-macos-tools` | AP1202-1.8 | **A7c live** |
| 9 | `ap-linux-client` | AP1202-1.9 | **A7c live** |
| 10 | `ap-app-install` | AP1202-1.10 | **A7d live** |
| 11 | `ap-cloud-productivity` | AP1202-1.11 | **A7d live** |
| 12 | `ap-os-domain-review` | AP1202-1.1–1.11 | **A7d live** (integration) |

**Domain maturity:** Core 2 Operating Systems = **first-pass** (content complete for 1.1–1.11 + review). Full `a-plus` track remains **`planned`**.

**A7 pedagogy:** support question → choose tool/command/settings → inspect → act safely → verify → document. Full A+ track remains **planned**.

### Security (`ap-core2-security`)

| Order | Topic ID | Objectives | Status |
|------:|----------|------------|--------|
| 1 | `ap-security-measures` | AP1202-2.1 | **A8a live** (Zero Trust basics) |
| 2 | `ap-windows-security` | AP1202-2.2 | **A8b live** |
| 3 | `ap-wireless-security` | AP1202-2.3 | **A8c live** |
| 4 | `ap-malware` | AP1202-2.4 | **A8d live** |
| 5 | `ap-social-engineering` | AP1202-2.5 | **A8e live** |
| 6 | `ap-malware-removal` | AP1202-2.6 | **A8f live** |
| 7 | `ap-hardening` | AP1202-2.7 | **A8g live** |
| 8 | `ap-mobile-security` | AP1202-2.8 | **A8h live** |
| 9 | `ap-data-destruction` | AP1202-2.9 | **A8i live** |
| 10 | `ap-soho-security` | AP1202-2.10 | **A8j live** |
| 11 | `ap-browser-security` | AP1202-2.11 | **A8k live** |
| 12 | `ap-security-domain-review` | AP1202-2.1–2.11 | **A8l live** (integration) |

**A8 pedagogy:** asset and risk → control choice → implementation boundary → evidence → verification → escalation. **Security domain = first-pass** after A8l. Full A+ track remains **planned**.

**Domain maturity:** Core 2 Security = **first-pass** (content complete for 2.1–2.11 + review). Full `a-plus` track remains **`planned`**.

### Software Troubleshooting (`ap-core2-sw-troubleshoot`)

| Order | Topic ID | Objectives | Status |
|------:|----------|------------|--------|
| 1 | `ap-ts-windows-os` | AP1202-3.1 | **A9a live** |
| 2 | `ap-ts-mobile-os` | AP1202-3.2 | **A9b live** |
| 3 | `ap-ts-mobile-security` | AP1202-3.3 | **A9c live** |
| 4 | `ap-ts-pc-security` | AP1202-3.4 | **A9d live** |
| 5 | `ap-software-troubleshoot-domain-review` | AP1202-3.1–3.4 | **A9e live** (integration) |

**A9 pedagogy:** identify → theory → test → plan → implement/escalate → verify → document; protect data before disruptive repair. **Software Troubleshooting = first-pass** after A9e. Full A+ track remains **planned**.

**Next when authorized:** Operational Procedures AP1202-4.1 in a bounded batch.

### Operational Procedures (`ap-core2-ops`)

| Order | Topic ID | Objective | Status |
|---:|---|---|---|
| 1 | `ap-documentation-ticketing` | AP1202-4.1 | **A10a live** |
| 2 | `ap-change-management` | AP1202-4.2 | **A10b live** |
| 3 | `ap-backup-recovery` | AP1202-4.3 | **A10c live** |
| 4 | `ap-safety` | AP1202-4.4 | **A10d live** |
| 5 | `ap-environment` | AP1202-4.5 | **A10e live** |
| 6 | `ap-privacy-licensing` | AP1202-4.6 | **A10f live** |
| 7 | `ap-communication` | AP1202-4.7 | **A10g live** |
| 8 | `ap-scripting-basics` | AP1202-4.8 | **A10h live** |
| 9 | `ap-remote-access` | AP1202-4.9 | **A10i live** |
| 10 | `ap-ai-basics` | AP1202-4.10 | **A10j live** |
| 11 | `ap-ops-domain-review` | AP1202-4.1–4.10 | **A10k live** (integration) |

**Domain maturity:** Operational Procedures = first-pass after A10k verification. Full A+ = **first-pass** after complete objective coverage, remediation routing, strict curriculum verification, and production build; learner QA/polish remains before Ready/Available.

---

## First-pass verification expectations

For every live A+ topic:

| Check | Rule |
|-------|------|
| Objectives | Topic `objectives[]` use registry IDs only |
| Quiz / bank | Every item has `objectiveId` + `difficulty`; ID ∈ topic objectives |
| Teach-before-test | No question tests untaught skills |
| CES | lightbulb, guidedExample, commonMistakes (3+), examTraps (3+), realWorldScenario, keyFacts, quiz (5+), bank (8+), flashcards (5+) |
| Practical | Simulator and/or external-lab where appropriate |
| CF links | Prefer `prerequisites` / referral notes to CF topic IDs — never “remedial” copy |
| Commands | `npx tsc --noEmit` · `npm run verify:curriculum -- --strict-aplus` |

**Maturity:** Keep track `planned` until Core 1 is broadly studyable; then `first-pass`. Michael walkthrough required before Readiness / Available.

---

## Explicit deferrals

| Item | Status |
|------|--------|
| F5 help-desk residency | Deferred |
| Gold LES on every topic before Core 1 complete | Not required |
| CCNA C1 | Queued separately |
| Sound Synthesis Phase 3 | After A+ + CCNA post-D1 |
| Lab VM appliance | Infra worker later |
