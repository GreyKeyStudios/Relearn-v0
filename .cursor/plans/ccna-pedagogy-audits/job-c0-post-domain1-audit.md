# Job C0 — CCNA post–Domain 1 audit

**Status:** Complete — audit only; **no mass content changes**  
**Date:** 2026-08-01  
**Scope:** All CCNA topics after Domain 1 (`network-fundamentals`)  
**Baseline:** Domain 1 = quality reference (not rewrite target)  
**Gate:** Do **not** start Jobs C1–C5 until Michael reviews this report  

**Related:** [`docs/definition-of-done.md`](../../../docs/definition-of-done.md) · [`docs/ccna-learning-path.md`](../../../docs/ccna-learning-path.md) · [`review-board/ccna-scoreboard.md`](review-board/ccna-scoreboard.md) · [`review-board/decision-log.md`](review-board/decision-log.md) (`theme__domain2-3-pedagogy-rewrite`)

---

## Priority context (accepted)

1. **A+** → Readiness → Available (highest product priority; A+ is still a planned shell)  
2. **CCNA Domains after Domain 1** → real lesson-quality completion (this pipeline)  
3. **Sound Synthesis Phase 3**  
4. Other early-access certs later  
5. ReLearn Lab VM appliance (infra worker)

CCNA work stays: **C0 audit → one domain per job → C6 cross-domain verification.**

---

## Lesson-depth rubric (mandatory for C1–C5)

Every substantive post–Domain 1 topic must teach before it tests. Use Domain 1 hub + LES depth as the bar.

| # | Required element | Pass signal |
|---|------------------|-------------|
| 1 | **Definition** | Clear “what it is” in LES (not only hub prose) |
| 2 | **Purpose** | Why it exists / problem it solves |
| 3 | **Context** | Where it appears in a real network |
| 4 | **Mechanism** | Step-by-step how it works |
| 5 | **Example** | Concrete topology, packet, table, or command |
| 6 | **Interpretation** | How to read output / behavior |
| 7 | **Common mistakes** | Hub `commonMistakes` **and** LES misconceptions |
| 8 | **Troubleshooting** | Symptom → reason → next check |
| 9 | **Guided practice** | Hub `guidedExample` + in-lesson checkpoints |
| 10 | **Independent check** | Topic quiz (≥5) that only tests taught material |
| 11 | **Practical** | Simulator / Packet Tracer / external lab where appropriate |
| 12 | **Connections** | `prerequisites`, later-topic handoffs, Knowledge DNA |

**Hard rejects (never ship as “complete”):**

```text
Term → Definition → Three facts → Quiz
```

**Domain 1 depth bar (measured 2026-08-01):**

| Metric | Domain 1 average |
|--------|------------------|
| LES screens | ~52 |
| LES prose (headline+body) | ~6.5k chars |
| Interactive screens | ~6 |
| Topic quiz items | ~29 |
| Question bank items | ~74 |
| Flashcards | ~7 |
| `guidedExample` | 8/8 |
| `lightbulbMoment` | 8/8 |
| `realWorldScenario` | 8/8 |
| Lab/sim assignment | 8/8 |

Post–D1 topics averaging **~20–35 screens** and **~2.5–3k prose** with missing hub fields are **below bar**, even if a story-style LES draft exists.

---

## Classification key

| Class | Meaning |
|-------|---------|
| Complete instructional lesson | Meets rubric + Domain 1 depth parity; Topic Complete still needs Michael sign-off |
| Mostly complete, needs polish | Real lesson structure; gaps in hub, bank, DNA, or interpretation |
| Thin lesson | LES exists but compressed vs D1; missing hub teaching fields and/or interpretation/TS |
| Reference sheet presented as a lesson | Concept dump / vocabulary tour without guided teaching path |
| Flashcard-like fact collection | Definitions + quiz without mechanism/example path |
| Placeholder / Missing | Empty or stub |

---

## 1. Domain summaries

### Domain 1 — Network Fundamentals (BASELINE — do not rewrite)

| Verdict | Strongest current CCNA teaching. Use as reference only. |
|---------|---------------------------------------------------------|
| Topics | 8 — all LES + full hub triad (lightbulb / guidedExample / scenario) |
| Topic Complete | Still **NO** on scoreboard (Michael walkthrough pending) — but quality bar for later domains |
| DNA gaps | Several topics lack `knowledgeNodeId` / graph `topicRef` (non-blocking for C0; fix opportunistically in C6) |
| Action | **No C-job rewrite.** Only touch if a later domain finds a direct dependency defect. |

### Domain 2 — Network Access → **Job C1**

| Verdict | Human walkthrough already failed (`theme__domain2-3-pedagogy-rewrite`). Story LES drafts exist but remain **thin vs D1** and hub-incomplete. |
|---------|---------------------------------------------------------------------------------------------------------------------------------------------|
| Topics | switching, vlans, trunking, stp — all **Thin lesson** |
| Pattern | LES rewritten toward story/example, but ~half D1 screen/prose depth; most missing lightbulb + guidedExample; switching/trunking/stp missing labs |
| Labs | `vlans` has assignments; switching / trunking / stp have **no** lab/sim assignments |
| Prior work | Wave sheet + PRs #25 draft — **not** Topic Complete |

### Domain 3 — IP Connectivity → **Job C2**

| Verdict | Same rewrite theme as D2 for RF + static; OSPF/NAT still compressed. All **Thin lesson**. |
|---------|------------------------------------------------------------------------------------------|
| Topics | routing-fundamentals, static-routes, ospf-basics, nat |
| Pattern | Missing lightbulb on all four; guidedExample only on ospf; scenario only on ospf |
| Labs | Present on all four (better than D2) |
| DNA | `routing-fundamentals` linked; others mostly not |

### Domain 4 — IP Services → **Job C3**

| Verdict | Screen count closer to D1, prose still ~40% of D1; hub teaching fields largely missing. |
|---------|----------------------------------------------------------------------------------------|
| Topics | dhcp, dns — both **Thin lesson** |
| Pattern | No guidedExample / lightbulb / scenario; prerequisites missing in cert file |
| DNA | Graph topicRefs exist for dhcp/dns |
| Labs | Present |

### Domain 5 — Security Fundamentals → **Job C4**

| Verdict | Better hub than D2/D3 (guidedExample + scenario on both) but still thin LES vs D1; no lightbulb. |
|---------|--------------------------------------------------------------------------------------------------|
| Topics | acls, network-security — **Thin lesson** |
| Known risk | Teach-before-test: CIA triad / security concepts (see decision log) |
| Labs | Present |

### Domain 6 — Automation → **Job C5**

| Verdict | **Reference sheet presented as a lesson** — vocabulary/SDN tour; weakest practical path. |
|---------|------------------------------------------------------------------------------------------|
| Topics | automation-basics |
| Pattern | No guidedExample / lightbulb / scenario / lab / prerequisites / DNA |
| Known risk | SDN / control-plane tested without enough prior instruction |

---

## 2. Topic-by-topic status

### Domain 2 — Network Access

| Topic | Class | LES scr / prose | Hub | Quiz / bank / fc | Lab | Key gaps |
|-------|-------|-----------------|-----|------------------|-----|----------|
| `switching` | Thin lesson | 23 / 2742 | no guided, no lightbulb, no scenario | 25 / 30 / 6 | **None** | Below D1 depth; no practical; weak interpretation/TS; no DNA |
| `vlans` | Thin lesson | 25 / 3078 | guided+scenario; **no lightbulb** | 25 / 40 / 6 | Yes (3) | Depth; interpretation/TS; DNA |
| `trunking` | Thin lesson | 20 / 2142 | no guided, no lightbulb, no scenario | 25 / 30 / 6 | **None** | Most compressed D2 LES; no practical |
| `stp` | Thin lesson | 26 / 2814 | no guided, no lightbulb, no scenario | 25 / 30 / 6 | **None** | No practical; weak interpretation |

### Domain 3 — IP Connectivity

| Topic | Class | LES scr / prose | Hub | Quiz / bank / fc | Lab | Key gaps |
|-------|-------|-----------------|-----|------------------|-----|----------|
| `routing-fundamentals` | Thin lesson | 27 / 2449 | no guided, no lightbulb, no scenario | 25 / 30 / 6 | Yes | Teach reading a routing-table row before quiz; TS/mechanism |
| `static-routes` | Thin lesson | 22 / 2302 | no guided, no lightbulb, no scenario | 25 / 30 / 6 | Yes | Depth; interpretation; DNA |
| `ospf-basics` | Thin lesson | 33 / 2795 | guided+scenario; **no lightbulb** | 25 / 40 / 6 | Yes | Still ~half D1 prose; mechanism/TS |
| `nat` | Thin lesson | 31 / 2550 | no guided, no lightbulb, no scenario | 25 / 30 / 6 | Yes | Missing prereqs field; interpretation/TS |

### Domain 4 — IP Services

| Topic | Class | LES scr / prose | Hub | Quiz / bank / fc | Lab | Key gaps |
|-------|-------|-----------------|-----|------------------|-----|----------|
| `dhcp` | Thin lesson | 38 / 2560 | no guided, no lightbulb, no scenario | 25 / 30 / 6 | Yes | Hub parity with D1; prereqs; interpretation |
| `dns` | Thin lesson | 41 / 2859 | no guided, no lightbulb, no scenario | 25 / 30 / 6 | Yes | Same; ensure LES teaches before DNS quiz items |

### Domain 5 — Security Fundamentals

| Topic | Class | LES scr / prose | Hub | Quiz / bank / fc | Lab | Key gaps |
|-------|-------|-----------------|-----|------------------|-----|----------|
| `acls` | Thin lesson | 28 / 2817 | guided+scenario; **no lightbulb** | 25 / 40 / 6 | Yes | Mechanism steps; TS; DNA |
| `network-security` | Thin lesson | 38 / 2812 | guided+scenario; **no lightbulb** | 25 / 40 / 6 | Yes | Prereqs; CIA teach-before-test; DNA |

### Domain 6 — Automation

| Topic | Class | LES scr / prose | Hub | Quiz / bank / fc | Lab | Key gaps |
|-------|-------|-----------------|-----|------------------|-----|----------|
| `automation-basics` | Reference sheet as lesson | 34 / 2594 | **all hub teaching fields missing** | 25 / 30 / 6 | **None** | Full instructional rewrite; lab/assignment; prereqs; DNA |

### Domain 1 (reference snapshot — not in C1–C5 scope)

| Topic | Class | Notes |
|-------|-------|-------|
| `osi-model` … `wireless-basics` | Complete / mostly complete (baseline) | Full hub triad; deep LES; large banks. DNA incomplete on some topics. |

---

## 3. Missing-content inventory (post–D1)

| Gap type | Topics affected |
|----------|-----------------|
| Missing `lightbulbMoment` | **All 13** post–D1 topics |
| Missing `guidedExample` | switching, trunking, stp, routing-fundamentals, static-routes, nat, dhcp, dns, automation-basics |
| Missing `realWorldScenario` | switching, trunking, stp, routing-fundamentals, static-routes, nat, dhcp, dns, automation-basics |
| No lab/sim assignment | switching, trunking, stp, automation-basics |
| Missing `prerequisites` field | nat, dhcp, dns, network-security, automation-basics (+ some D1 polish) |
| Knowledge DNA absent | Most post–D1 except routing-fundamentals (+ dhcp/dns graph refs) |
| Bank thinner than D1 | Post–D1 banks ~30–40 vs D1 ~55–150 |

---

## 4. Assessment gaps

- Quizzes exist (~25/topic) and generally carry `objectiveId` — **volume is not the problem**.  
- Risk is **teach-before-test**: quiz/bank items that assume CLI reading, ACL logic, SDN planes, or routing-table literacy before LES builds that skill.  
- Question banks are **~⅓–½ of Domain 1 depth** — expand only after LES teaches the skill.  
- Domain-level assessments: confirm per-domain assessment artifacts during each C-job (not verified as production-ready in this audit).  
- Weak-area routing: defer validation to **Job C6**.

---

## 5. Lab and simulator gaps

| Topic | Gap |
|-------|-----|
| `switching` | No assignment — add MAC-table / flood vs forward PT or in-app drill |
| `trunking` | No assignment — add 802.1Q trunk verify lab |
| `stp` | No assignment — add root/port-role observation lab |
| `automation-basics` | No assignment — at minimum checklist / read-only API or config-compare external lab |

Other post–D1 topics already reference Packet Tracer / tools — C-jobs should **connect and align** them to LES scope, not invent parallel labs.

---

## 6. Objective-mapping gaps

Objectives catalog: `src/content/objectives/ccna.ts` (CCNA-1.x … CCNA-6.x).

| Domain | Watch items for C-jobs |
|--------|------------------------|
| D2 | CCNA-2.3 (discovery protocols), 2.4 (EtherChannel), 2.7–2.9 (wireless arch) — often **deferred** in LES; ensure deferral manifest rows, not silent omission |
| D3 | CCNA-3.8 (NTP) — may lack dedicated topic; document deferral or fold intentionally |
| D4 | CCNA-4.3 (DNS on router), 4.4 (SNMP) — coverage vs LES scope |
| D5 | CCNA-5.3 / 5.4 depth vs LES |
| D6 | CCNA-6.1 / 6.2 — ensure LES teaches before quiz |

Each C-job must run: `npm run verify:curriculum -- --strict-ccna --strict-ccna-objectives` and update [`docs/ccna-deferral-manifest.md`](../../../docs/ccna-deferral-manifest.md) for relocations.

---

## 7. Dependency and Knowledge DNA gaps

**Prerequisites (from learning path — verify/repair in cert file):**

```text
ethernet → switching → vlans → trunking
switching + vlans → stp
ipv4 + subnetting → routing-fundamentals → static-routes → ospf-basics
routing-fundamentals + ipv4 → nat
ipv4 + ethernet → dhcp
ipv4 + tcp-ip → dns
routing + ipv4 → acls → network-security
osi + tcp-ip → automation-basics
```

**Knowledge DNA:** Most CCNA topics lack `knowledgeNodeId`. Graph has partial `topicRef`s (osi, tcp-ip, dns, dhcp, subnetting, routing-fundamentals). C-jobs should add nodes when touching a topic; C6 sweeps consistency.

---

## 8. Duplicate-content findings

| Overlap | Guidance |
|---------|----------|
| Switching lesson.content still mentions VLANs/trunks/STP | Keep LES scope tight; defer detail to later topics (already partially done) |
| Wireless in D1 vs CCNA-2.7–2.9 | D1 `wireless-basics` owns intro; D2 wireless objectives → deferral or short bridge — don’t re-teach full Wi-Fi in STP/VLAN jobs |
| DHCP/DNS vs IP ranges / TCP-IP | Cross-links OK; avoid second full DHCP story inside DNS |
| Network-security vs ACLs | ACLs own filter syntax; security owns CIA / port-security / wireless security protocols |

---

## 9. Recommended job order

| Job | Domain | Why this order |
|-----|--------|----------------|
| **C0** | Audit | Done — this document |
| **C1** | D2 Network Access | Human fail already recorded; foundation for L2 path |
| **C2** | D3 IP Connectivity | Depends on solid switching/VLAN mental model |
| **C3** | D4 IP Services | Smaller domain; after routing literacy |
| **C4** | D5 Security | Needs routing + ACL readiness |
| **C5** | D6 Automation | Smallest count but weakest pedagogy; last so vocabulary has network context |
| **C6** | Cross-domain verification | Only after C1–C5 |

**Inside each C-job:** batches of **3–6 related topics max** — for D2 that means preferably **one topic batch at a time** (4 topics) with verify after each topic or after pairs (e.g. switching+vlans, then trunking+stp).

---

## 10. Proposed file changes per domain

### C1 — Network Access

| File | Change |
|------|--------|
| `src/content/lessons/switching-experience.ts` | Expand to D1-depth story: learn→forward→flood; interpret `show mac address-table`; TS |
| `src/content/lessons/vlans-experience.ts` | Same bar; inter-VLAN only as preview |
| `src/content/lessons/trunking-experience.ts` | Expand 802.1Q / native VLAN teaching path |
| `src/content/lessons/stp-experience.ts` | Root election + port roles with worked topology |
| `src/content/certifications/ccna.ts` (D2 topics only) | Add lightbulb, guidedExample, scenario; labs on switching/trunking/stp; align quiz/bank to LES; preserve topic IDs |
| `docs/ccna-deferral-manifest.md` | EtherChannel / deep wireless / MST as needed |
| `.cursor/plans/ccna-pedagogy-audits/wave-2-network-access.md` | Update Topic Complete after Michael re-walk |

### C2 — IP Connectivity

| File | Change |
|------|--------|
| `routing-fundamentals-experience.ts`, `static-routes-experience.ts`, `ospf-basics-experience.ts`, `nat-experience.ts` | Expand mechanism + interpretation (`show ip route`, OSPF neighbor, NAT translations) |
| `ccna.ts` D3 topics | Hub triad; prereqs on nat; DNA nodes |
| Deferral manifest | CEF/EIGRP/multi-area/NTP as needed |
| `wave-3-ip-connectivity.md` | Sign-off tracking |

### C3 — IP Services

| File | Change |
|------|--------|
| `dhcp-experience.ts`, `dns-experience.ts` | Hub parity; mechanism clarity; prereqs |
| `ccna.ts` D4 topics | guidedExample, lightbulb, scenario |
| Deferrals | snooping depth, DNSSEC, SNMP if out of scope |

### C4 — Security

| File | Change |
|------|--------|
| `acls-experience.ts`, `network-security-experience.ts` | Teach-before-test fixes; lightbulb; DNA |
| `ccna.ts` D5 topics | Prereqs on network-security; bank alignment |

### C5 — Automation

| File | Change |
|------|--------|
| `automation-basics-experience.ts` | Full instructional rebuild (not vocabulary sheet) |
| `ccna.ts` D6 topic | Hub triad; prereqs; practical assignment |
| Deferrals | DNA Center / YANG authoring / Netmiko |

### C6 — Integration

| Work | Notes |
|------|-------|
| Cross-domain prereq + terminology pass | |
| Objective coverage + deferrals | |
| Duplicate teaching sweep | |
| `npm run verify:curriculum -- --strict-ccna --strict-ccna-objectives --strict-pedagogy --strict-experience` | |
| `npx tsc --noEmit` | |
| Final readiness recommendation | Early Access vs Readiness vs Available — **never auto-promote** |

---

## Accuracy / batching rule (for implementers)

When a topic needs substantial technical content:

1. Implement **one topic** (or tight pair)  
2. Run curriculum verify + tsc  
3. Then next topic  

Do **not** regenerate an entire domain in one uncontrolled pass.

---

## Explicit non-actions from C0

- No Domain 1 rewrite  
- No Sound Synthesis / A+ / Lab VM work in this job  
- No mass `ccna.ts` edits in C0  
- Do not mark any domain Topic Complete from this audit alone  

---

## Review checklist (Michael) — **LOCKED 2026-08-01**

- [x] Accept Domain 1 as baseline bar (metrics above)  
- [x] Accept C1–C6 division exactly as written  
- [x] EtherChannel / NTP / SNMP / advanced wireless stay in deferral manifest (no silent omission)  
- [x] A+ remains highest active product priority  
- [x] C1 queued as separate bounded job only — see [`job-c1-network-access-brief.md`](job-c1-network-access-brief.md)  
- [x] Michael walkthrough required before any domain Topic Complete  

**Operational order:** A+ graduation work now · C1 brief ready but fenced · one CCNA topic at a time when C1 starts.

---

*Generated from LES + `ccna.ts` hub inspection and prior review-board walkthrough notes (2026-07-14). Metrics snapshot: 2026-08-01.*
