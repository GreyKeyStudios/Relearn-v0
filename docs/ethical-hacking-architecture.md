# Ethical Hacking & Offensive Security — Architecture

**Status:** Foundations scaffold (planned career path — not a studyable certification pack yet)  
**Owner:** Platform / planning  
**Parent:** [`COURSE_ARCHITECTURE.md`](COURSE_ARCHITECTURE.md) · product vision (ReLearn)

---

## 1. Product vision

ReLearn prepares learners for a future **Ethical Hacking / Offensive Security** career path that follows:

1. Learn how a technology normally works.
2. Learn how misconfiguration or insecure design creates a vulnerability.
3. Examine the issue from the **red-team** perspective (conceptual, lab-safe).
4. Examine the same issue from the **blue-team** perspective.
5. Practice detection, containment, remediation, and reporting.
6. Enter a **safe scenario** where the learner alternates attacker and defender roles inside fictional sandboxes.

This path should eventually support practical foundations such as **eJPT-style** learning, then more advanced penetration-testing material — without claiming official endorsement until objectives are verified.

---

## 2. Safe simulation boundary (non-negotiable)

All offensive-security simulations in ReLearn must use **harmless, contained abstractions**.

### Approved

- Fictional hosts, orgs, and networks
- Fake credentials and dummy files
- Payload **tokens** (labels), not executable malware
- Simulated command output and synthetic logs/alerts
- Intentionally vulnerable **training** services (local disposable labs / app sandboxes)
- Attack-path diagrams and CTF-style in-app objectives
- Harmless “encrypted” file state changes **inside the app**

### Forbidden

- Real ransomware, credential-stealing malware, destructive payloads
- Persistence / stealth tooling designed for real systems
- Automated exploitation of public or unauthorized targets
- Instructions that bypass authorization outside a scoped lab
- Worm behavior, real-data exfiltration, or evasion tooling for deployment outside the lab

Content and platform agents must refuse to implement forbidden items even if a lesson outline asks for them. Prefer conceptual categories, multiple-choice “safe action” menus, and synthetic evidence.

Code and data for this boundary live under:

- `src/content/scenarios/` — scenario definitions
- `src/content/knowledge/` — knowledge graph (prerequisites / red-blue links)
- `src/content/perspectives/` — Neutral / Red / Blue / Purple lesson blocks
- `src/content/career-paths/` — career path compositions
- `src/content/labs/` + [`relearn-lab-vm-plan.md`](relearn-lab-vm-plan.md) — shared Lab VM appliance scaffold (Phase A UI/metadata only)

---

## 3. Prerequisite curriculum audit

| Prerequisite | Status | Where today | Action |
|--------------|--------|-------------|--------|
| Computer fundamentals | **Exists** | Computer Fundamentals (CF) | Reuse — required for absolute beginners |
| Networking fundamentals / TCP/IP | **Exists** | CCNA, Network+ | Reuse — Phase 1 required |
| Ports and protocols | **Exists** | CCNA, Network+ | Reuse |
| DNS / DHCP | **Exists** | CCNA, Network+ | Reuse |
| Routing and switching | **Exists** | CCNA, Network+ | Reuse |
| Subnetting | **Exists** | CCNA, Network+ | Reuse |
| HTTP / HTTPS | **Partial** | CF browser; CCNA/N+ services | Expand via future web track |
| Linux fundamentals | **Exists** | Linux+ | Reuse — Phase 1 required |
| Windows fundamentals | **Partial** | CF + PowerShell | Expand; AD still missing |
| File systems / users / permissions | **Exists** | Linux+, CF | Reuse |
| Processes and services | **Exists** | Linux+, PowerShell | Reuse |
| Command-line / Bash | **Partial** | Linux+ shell; Bash planned | Wait for Bash Type B |
| PowerShell | **Exists** | PowerShell track | Reuse |
| Python fundamentals | **Missing** | Planned Type B | Sequence after Git |
| Git and GitHub | **Exists** | git-github | Reuse |
| HTML / JavaScript / browser / cookies / sessions | **Missing** | — | Future web foundations |
| APIs | **Missing** | REST planned | Planned skill track |
| SQL / relational DBs | **Missing** | SQL planned | Planned skill track |
| Authentication / authorization | **Exists** | Security+ | Reuse + perspectives |
| Cryptography fundamentals | **Exists** | Security+ | Reuse |
| Logging / monitoring / SIEM | **Exists** | CySA+, Linux+ logs | Reuse |
| Vulnerability management | **Exists** | Security+, CySA+ | Reuse |
| Incident response | **Exists** | Security+, CySA+ | Reuse |
| Cloud fundamentals | **Exists** | AWS CP, Azure | Recommended |
| Active Directory fundamentals | **Missing** | — | Planned gap |

**Reuse rule:** Do not duplicate CCNA/Sec+/Linux+ lessons inside an EH cert pack. Career path nodes **reference** existing `certId` + `topicId` via the knowledge graph.

---

## 4. Dependency / Knowledge DNA system

Topics keep same-cert `prerequisites?: string[]`. Cross-track and red/blue links live in a parallel **KnowledgeNode** graph:

- Required / recommended prerequisites
- Related concepts
- Red-team / blue-team / remediation connections
- Certification mappings (`confidence: conceptual | verified`)
- Lab IDs (locked until prerequisites complete)
- Optional `topicRef` into live curriculum — completion uses **existing mastery**, not a second progression store

UI: **Knowledge DNA** (`KnowledgeDna`) — reusable outside cybersecurity.

---

## 5. Ethical Hacking career path phases

| Phase | Focus | Status |
|-------|-------|--------|
| 1 Foundations | Networking, Linux, Windows, web, SQL, Python, auth, security basics | Planned — mostly reuse |
| 2 Ethical Hacking Core | RoE, scope, lab safety, recon/enum concepts, vuln assessment, exploitation **concepts**, privilege escalation **concepts**, evidence, reporting, remediation validation | Planned — not authored |
| 3 Red Team | Scoped objectives, evidence, defensive telemetry awareness | Placeholder |
| 4 Blue Team | Detect, investigate, contain, remediate, report | Placeholder |
| 5 Purple Team | Attack-path replay, map controls, improve detections, retest | Placeholder |
| 6 Career Simulator | Time pressure, conflicting alerts, tradeoffs, professionalism | Placeholder |

Catalog: Coming soon row in `PLANNED_TRACKS` → `/career/ethical-hacking`.  
**No empty `CERTIFICATIONS` shell** until Phase 2 content exists.

---

## 6. Perspective toggle

Modes: **Neutral** · **Red Team** · **Blue Team** · **Purple Team**.

Same concept, different educational blocks (not a color theme). Content is conceptual and lab-safe. Demo: authentication perspectives under `src/content/perspectives/`.

---

## 7. Scenario model

Separate from Case Study decision trees. A `SecurityScenario` has roles, RoE, prohibited actions, multi-phase timelines, synthetic evidence/logs, scoring, and debrief.

Demo data: **The Missing Patch** (`src/content/scenarios/missing-patch.ts`) — walkthrough UI only; no exploit engine.

### Scoring categories

Technical understanding · Objective completion · Scope compliance · Evidence collection · Detection · Containment · Remediation · Recovery · Reporting · Professionalism

Learners can fail despite a technical “win” if they violate scope, destroy evidence, skip documentation, or choose unsafe actions.

---

## 8. Certification mappings

Mappings are modular (`certFamily` + optional `examVersion` + `objectiveIds` + `confidence`). Default **conceptual** for eJPT / PNPT-style / OSCP-style labels until verified against published objectives.

---

## 9. Implementation sequence (foundations → content)

1. ~~Types, knowledge graph, scenario model, verify hooks, Knowledge DNA, perspective toggle, EH career page, Missing Patch demo~~ (this milestone)
2. ~~Phase 1 connective tissue on auth / DNS / permissions + wire into lessons~~ 
3. ~~VM Lab Foundations first-pass (Modules 1–2 + Linux guest topic)~~
4. Graduate remaining VM Lab modules (Bash in guest, Windows/CMD, snapshots depth, share, capstone)
5. Ship planned SQL / Python / REST / Bash / web foundations as Type B/C tracks
6. Author Phase 2 EH Core lessons (concepts only; safe labs)
7. Build scenario engine extensions + ReLearn Lab VM appliance (see relearn-lab-vm-plan.md)
8. Register a studyable EH content pack only when Phase 2 has real lessons

---

## 10. How to add future cybersecurity content safely

1. Prefer linking an existing topic via `topicRef` over rewriting lessons.
2. Add KnowledgeNode edges for red/blue/remediation — do not fork duplicate lessons.
3. Perspective copy must stay conceptual; no operational exploit steps.
4. Scenarios: predefined safe action menus + synthetic logs only.
5. Run `npm run verify:curriculum` (knowledge graph + scenario validators).
6. Do not edit owned cert files (`security-plus.ts`, etc.) from platform scaffolding work — use `src/content/knowledge|perspectives|scenarios|career-paths/`.
