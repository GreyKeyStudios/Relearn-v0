# Adversarial Review — PR #34 CCNA v2.0 Batch-1 Production Specs

**Branch:** `cursor/ccna-v20-batch1-production-b8ad`  
**Base:** `dev`  
**Scope:** Eight official v2.0 parent production units (specifications only)  
**Out of scope:** Adding objectives · writing full live lessons · altering the study engine  
**Verdict:** Pass after defect fixes · **leave unmerged**

---

## Method

Reviewed every batch-1 unit against the exact official CCNA 200-301 v2.0 parent wording in `src/content/production/objectives/ccna-200-301-v2.0.ts`, including sub-bullets where present. Challenged verb levels, atomicity, prereqs, shared-core labeling, explanation padding, diagnostics/remediation pairing, quiz answerability from the lesson spec, simulator feasibility in the existing React `onComplete` architecture, first-party sources, and mastery-engine reuse.

---

## Per-unit disposition

| # | Official verb / focus | Disposition | Why |
| --- | --- | --- | --- |
| **2.4** | Troubleshoot L2/L3 connectivity + device operations (show/logs, ping, extended ping, trace route, capture) | **split** | Official parent is one line, but one coherent learner-facing lesson cannot honestly cover connectivity probes, device-operations logs, and multi-evidence correlation. Spec now plans two lessons + short synthesis under one official parent. |
| **1.3** | Troubleshoot IPv4 config/assignment/subnetting (public and private) | **approved** | Scope matches; verb is Troubleshoot; phantom `alo-ccna-subnetting` removed; live-topic recommended edges to `subnetting` / `ipv4-addressing`. |
| **1.4** | Troubleshoot IPv6 config/assignment/prefix sizing (unicast and modified EUI 64) | **revise** | Spec now teaches modified EUI-64 explicitly, but live `ipv6-basics` still omits EUI-64. Elevation must add that foundation before troubleshoot drills go learner-facing. |
| **1.7** | Troubleshoot DHCPv4 client, server, and relay on IOS | **approved** | Client atomic restored; recommended edge to live `dhcp` (already teaches helper/relay); verb Troubleshoot preserved. |
| **2.5** | Configure Rapid PVST+ (+ 2.5.a–d) | **approved** | PortFast separated from guards; BPDU filter excluded; Configure not overclaimed as Verify. |
| **3.2** | Troubleshoot IPv4/IPv6 static routing (+ types) | **approved** | Sub-bullets 3.2.a–d covered; floating-static misconception/remediation aligned; live `static-routes` recommended prereq. |
| **3.3** | Configure single-area OSPFv2 (IPv4) and OSPFv3 (IPv6) (+ 3.3.a–d) | **split** | OSPFv2 + OSPFv3 at full 3.3.a–d depth is too large for one lesson. Spec requires OSPFv3 at equal depth (not mention-only) and plans Lesson A (v2) / Lesson B (v3) + synthesis. |
| **5.2** | Select generative-AI prompt for network ops (four components) | **approved** | Reframed to Cisco network-ops use cases (CRC triage, ACL review); rejects generic LLM-tuning advice; version-specific pathway retained. |

**Counts:** approved 5 · revise 1 · split 2 · defer 0

---

## Severity-ranked findings

### Critical — fixed

| ID | Finding | Fix |
| --- | --- | --- |
| `officialText-2.4` | Parent/atomic text used `traceroute` and drifted from official `trace route`; device-operations emphasis was soft | `officialText` + parent atomic now always pulled from registry via `officialTextFor()`; device-ops teaching atomic added |
| `phantom-alo-ccna-subnetting` | Unit 1.3 required a non-existent atomic id | Removed; replaced with recommended `live-topic` edges to `subnetting` and `ipv4-addressing` |
| `configure-verify-3.3` | Teaching atomic said “Configure/verify,” inventing a Verify performance level | Statements/explanations use **Configure** only; show commands framed as lab checks |

### High — fixed

| ID | Finding | Fix |
| --- | --- | --- |
| `ospfv3-depth` | OSPFv3 risked mention-only coverage vs full 3.3.a–d | Separate OSPFv2 and OSPFv3 teaching atomics each require adjacency (excl. auth), P2P, broadcast DR/BDR, RID |
| `ai-generic-pe` | 5.2 leaned toward generic prompt advice | Lesson/examples/remediation/sim constrained to network-ops tasks and four official components |
| `1.7-missing-client` | Teaching atomics covered server/relay but not client | Added `alo-ccna-v2.0-1.7-client` with ordered edges |
| `2.5-portfast-bundled` | PortFast was bundled under guards (official 2.5.c vs 2.5.d) | Separate PortFast teaching atomic |
| `troubleshoot-sim-clicking` | Sim specs under-specified observable evidence | Interaction summaries now require symptom/evidence panels and cite official success criteria |

### Medium — fixed / documented

| ID | Finding | Fix |
| --- | --- | --- |
| `ipv6-eui64-prereq` | Live `ipv6-basics` does not teach modified EUI-64 | Spec teaches EUI-64; disposition **revise** until live elevation adds foundation |
| `dhcp-prereq` | Could assume DHCP knowledge | Recommended live-topic edge to `dhcp` (DORA/helper already taught) |
| `unit-size-2.4-3.3` | Too large for one learner-facing lesson | Disposition **split** + remaining-work split plans |
| `diagnostics-guessing` | Several diagnostics were list/yes-no only | Reworked with misconception-linked scoring notes (misunderstanding vs guessing) |
| `examples-padding` | Generic three-step example template on every unit | Per-unit worked scenarios for all eight parents |
| `integrity-guards` | Batch integrity did not pin official text | Validator now errors on registry drift, Configure/verify invention, and phantom subnetting prereq |

### Low / info — verified OK

| ID | Finding |
| --- | --- |
| Shared-core labeling | 1.3/1.4/1.7/2.5/3.2/3.3 remain shared-core clusters; 2.4 and 5.2 remain version-specific |
| Version-specific additions | OSPFv3 and AI prompt content stay on `200-301-v2.0/*` exam IDs only |
| Verb distinctness | Troubleshoot / Configure / Select(compare) not collapsed after fixes |
| Mastery evidence | Still aliases `PRODUCTION_MASTERY_REQUIREMENTS` / live SRS — no second scoring system |
| First-party sources | Protocol/product claims cite official exam objective sources; 5.2 notes not to invent Cisco product claims beyond the objective line |
| Quiz answerability | MCQs answerable from lesson explanations/examples without live Path A rewrites |
| Simulator architecture | Specs stay React drill / evidence-panel feasible; no claim of live registry IDs |
| Study engine | Untouched |

---

## Challenge answers (explicit)

### OSPFv3 vs exact v2.0 depth

Official 3.3 is **Configure** single-area OSPFv2 for IPv4 **and** OSPFv3 for IPv6, with 3.3.a–d (adjacency excluding authentication, point-to-point, broadcast DR/BDR, router ID). After fix, OSPFv3 is specified at that full depth. Pedagogy disposition remains **split** so OSPFv3 is not squeezed into an OSPFv2-only lab footnote.

### AI prompts vs generic prompt engineering

5.2 content is constrained to **network operations** selection tasks using the four named components. Generic LLM-tuning answers are explicitly wrong in quiz, diagnostics, remediation, and simulator auto-grade hints.

### Troubleshooting simulations

L2/L3, IPv4/IPv6, DHCP, and static sim specs require visible symptom/evidence panels and grade official-objective reasoning. Trial-and-error device clicking is called out as non-compliant.

### IPv6 and DHCP prerequisites

- **DHCP:** live `dhcp` already teaches client/server/relay foundation → recommended prereq edge; **approved**.  
- **IPv6:** live `ipv6-basics` lacks modified EUI-64 → spec teaches it, but elevation still **revise**.

### Unit size / coherence

**2.4** and **3.3** marked **split**. Others remain one coherent elevation target after fixes.

---

## Verification suite (post-fix) — all passed

| Check | Result |
| --- | --- |
| `npm run curriculum:ccna-v20-batch1-report` | OK |
| `npm run verify:production` | OK (0 errors) |
| `verify:curriculum --strict-ccna --strict-ccna-objectives` | OK |
| `verify:curriculum --strict-pedagogy` | OK |
| `verify:curriculum --strict-experience` | OK |
| `npx tsc --noEmit` | OK |
| `npm run build` | OK |
| Playwright `learner-loop` + `ccna-curriculum-audit` | 23 passed |

**Do not merge** — draft/open for human review of dispositions (especially **split** 2.4/3.3 and **revise** 1.4).
