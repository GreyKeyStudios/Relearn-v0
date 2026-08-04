# CCNA v2.0 Curriculum-Production Batch 1 Report

Generated: 2026-08-04T05:17:33.293Z
Batch id: `ccna-v20-batch1-p0-depth`

## Scope

- Official version: **200-301 v2.0** only (IDs `200-301-v2.0/<number>`)
- Selected parents: **8** / max 8
- Mode: **complete specifications** (not mass-generated full lessons)
- Preserved: existing v1.1 lessons, pilot progress keys, mastery thresholds, SRS ladder

## Why these objectives (not numeric order)

Selection uses the transition manifest, V20 gap report, and production sequence priorities: newly added, substantially expanded, greater practical/troubleshooting depth, and P0 simulator gaps.

| Rank | # | Pathway | Transition | Gap | Simulator need |
| ---: | --- | --- | --- | --- | --- |
| 1 | 2.4 | version-specific | newly added | critical | sim-gap-l2l3-troubleshoot (P0, missing) |
| 2 | 1.3 | shared-core | requires greater practical depth | medium | sim-gap-ipv4-troubleshoot (P0, partial — elevate beyond CIDR drill) |
| 3 | 1.4 | shared-core | requires greater practical depth | medium | sim-gap-ipv6-troubleshoot (P0, missing) |
| 4 | 1.7 | shared-core | requires greater practical depth | medium | sim-gap-dhcpv4-troubleshoot (P0, missing) |
| 5 | 2.5 | shared-core | requires greater practical depth | medium | sim-gap-stp-configure (P1, missing) |
| 6 | 3.2 | shared-core | requires greater practical depth | medium | sim-gap-static-troubleshoot (P0, missing) |
| 7 | 3.3 | shared-core | expanded | medium | sim-gap-ospfv3 (P0, missing) |
| 8 | 5.2 | version-specific | expanded | high | sim-gap-ai-prompts (P0, missing) |

### Selection reasons

#### 2.4
- Only newly added v2.0 parent in the transition manifest
- Gap report severity critical — no live topic alias coverage
- Production sequence batch ccna-v20-p0-l2l3-troubleshoot lead objective
- Requires new show/ping/traceroute/packet-capture troubleshoot simulator

#### 1.3
- v1.1 configure/verify → v2.0 troubleshoot (public and private)
- Production sequence batch ccna-v20-p0-addressing-troubleshoot
- Existing subnet CIDR drill is calculation-only; needs assignment/troubleshoot depth

#### 1.4
- v1.1 configure/verify → v2.0 troubleshoot (unicast + modified EUI-64)
- No live IPv6 troubleshoot simulator registered
- Paired with 1.3 in addressing elevation batch

#### 1.7
- v1.1 DHCP configure/verify → v2.0 client/server/relay troubleshoot on IOS
- Live dhcp topic exists but lacks dedicated troubleshoot simulator
- Addressing/services P0 sequence item

#### 2.5
- v1.1 Interpret Rapid PVST+ → v2.0 Configure operations
- Paired with newly added 2.4 in L2/L3 production sequence batch
- BPDU filter present in v1.1 2.5.d is absent from v2.0 — content must not invent it

#### 3.2
- v1.1 configure/verify static routing → v2.0 troubleshoot
- P0 simulator gap with no live static-route troubleshoot lab
- Routing expansion sequence lead

#### 3.3
- Substantially expanded: OSPFv2-only → OSPFv2 for IPv4 and OSPFv3 for IPv6
- P0 OSPFv3 configure lab gap
- Neighbor adjacency excludes authentication per official wording — do not invent auth labs

#### 5.2
- Expanded generative-AI emphasis with explicit prompt-component objective
- High content gap — no live topic alias coverage
- P0 AI prompt-selection scenario need; version-specific (not shared-core)
- Selected over 5.1/5.5 to keep batch ≤8 while covering net-new AI practical skill

### Deferred (still important)

- **5.1**: Agentic AI role pairs with 5.2; deferred so batch stays ≤8 while still shipping one AI practical objective.
- **5.5**: Ansible execute is P1 simulator priority; follows AI prompt batch.
- **3.4**: FHRP operational status is high gap but P1 simulator; follows static/OSPF elevation.

## Per-objective deliverables

### 2.4 — Troubleshoot L2/L3 connectivity with show, ping, traceroute, and capture

- Official id: `200-301-v2.0/2.4`
- Pathway: **version-specific**
- Transition: newly added
- Related v1.1 ids: —
- Atomics: `alo-ccna-v2.0-2.4`, `alo-ccna-v2.0-2.4-tools`, `alo-ccna-v2.0-2.4-evidence`
- Prereq edges: 2
- Misconceptions: misc-v20-ping-success-means-l2-healthy
- Remediations: rem-v20-l2l3-evidence-ladder
- Lesson spec: `les-ccna-v2.0-2.4`
- Quiz specs: q-v20-2.4-01, q-v20-2.4-02
- Simulator specs: simspec-ccna-v20-l2l3-troubleshoot
- Sources: src-cisco-ccna-200-301-v2.0
- Mastery evidence: quizPass 70% · SRS advance 80% · min attempts 3 (live engine — no duplicate system)
- Explanation layers: intuitive, practical, technical
- Remaining before learner-facing:
  - Implement simulator (currently spec-only)
  - Author LES/CES live topic elevation without renaming pilot progress keys
  - Michael/owner walkthrough per definition-of-done
  - Keep examObjectiveIds version-namespaced (200-301-v2.0/* only)
  - No v1.1 one-to-one counterpart — do not auto-credit from older topics

### 1.3 — Troubleshoot IPv4 addressing, assignment, and subnetting

- Official id: `200-301-v2.0/1.3`
- Pathway: **shared-core** (`shared-ipv4-addressing`)
- Transition: requires greater practical depth
- Related v1.1 ids: 200-301-v1.1/1.6, 200-301-v1.1/1.7
- Atomics: `alo-ccna-v2.0-1.3`, `alo-ccna-v2.0-1.3-public-private`, `alo-ccna-v2.0-1.3-assignment`
- Prereq edges: 2
- Misconceptions: misc-v20-ipv4-private-always-unusable
- Remediations: rem-v20-ipv4-public-private-triage
- Lesson spec: `les-ccna-v2.0-1.3`
- Quiz specs: q-v20-1.3-01, q-v20-1.3-02
- Simulator specs: simspec-ccna-v20-ipv4-troubleshoot
- Sources: src-cisco-ccna-200-301-v2.0, src-cisco-ccna-200-301-v1.1
- Mastery evidence: quizPass 70% · SRS advance 80% · min attempts 3 (live engine — no duplicate system)
- Explanation layers: intuitive, practical, technical, mathematical
- Remaining before learner-facing:
  - Implement simulator (currently spec-only)
  - Author LES/CES live topic elevation without renaming pilot progress keys
  - Michael/owner walkthrough per definition-of-done
  - Keep examObjectiveIds version-namespaced (200-301-v2.0/* only)
  - Elevate beyond live subnet-cidr-drill calculation coverage
  - Dual-tag associations: v1.1 1.6/1.7 vs v2.0 1.3 separately if sharing lesson body

### 1.4 — Troubleshoot IPv6 addressing, prefix sizing, and EUI-64

- Official id: `200-301-v2.0/1.4`
- Pathway: **shared-core** (`shared-ipv6-addressing`)
- Transition: requires greater practical depth
- Related v1.1 ids: 200-301-v1.1/1.8, 200-301-v1.1/1.9
- Atomics: `alo-ccna-v2.0-1.4`, `alo-ccna-v2.0-1.4-prefix`, `alo-ccna-v2.0-1.4-eui64`
- Prereq edges: 1
- Misconceptions: misc-v20-eui64-always-required
- Remediations: rem-v20-ipv6-prefix-eui64
- Lesson spec: `les-ccna-v2.0-1.4`
- Quiz specs: q-v20-1.4-01, q-v20-1.4-02
- Simulator specs: simspec-ccna-v20-ipv6-troubleshoot
- Sources: src-cisco-ccna-200-301-v2.0, src-cisco-ccna-200-301-v1.1
- Mastery evidence: quizPass 70% · SRS advance 80% · min attempts 3 (live engine — no duplicate system)
- Explanation layers: intuitive, practical, technical
- Remaining before learner-facing:
  - Implement simulator (currently spec-only)
  - Author LES/CES live topic elevation without renaming pilot progress keys
  - Michael/owner walkthrough per definition-of-done
  - Keep examObjectiveIds version-namespaced (200-301-v2.0/* only)
  - No live IPv6 troubleshoot simulator yet — implement simspec-ccna-v20-ipv6-troubleshoot

### 1.7 — Troubleshoot DHCPv4 client, server, and relay on IOS

- Official id: `200-301-v2.0/1.7`
- Pathway: **shared-core** (`shared-services-security`)
- Transition: requires greater practical depth
- Related v1.1 ids: 200-301-v1.1/4.3, 200-301-v1.1/4.6
- Atomics: `alo-ccna-v2.0-1.7`, `alo-ccna-v2.0-1.7-server`, `alo-ccna-v2.0-1.7-relay`
- Prereq edges: 1
- Misconceptions: misc-v20-dhcp-relay-optional-everywhere
- Remediations: rem-v20-dhcp-relay-path
- Lesson spec: `les-ccna-v2.0-1.7`
- Quiz specs: q-v20-1.7-01, q-v20-1.7-02
- Simulator specs: simspec-ccna-v20-dhcpv4-troubleshoot
- Sources: src-cisco-ccna-200-301-v2.0, src-cisco-ccna-200-301-v1.1
- Mastery evidence: quizPass 70% · SRS advance 80% · min attempts 3 (live engine — no duplicate system)
- Explanation layers: intuitive, practical, technical
- Remaining before learner-facing:
  - Implement simulator (currently spec-only)
  - Author LES/CES live topic elevation without renaming pilot progress keys
  - Michael/owner walkthrough per definition-of-done
  - Keep examObjectiveIds version-namespaced (200-301-v2.0/* only)
  - Live dhcp topic is configure-leaning — elevate to troubleshoot depth without remapping progress keys

### 2.5 — Configure Rapid PVST+ operations

- Official id: `200-301-v2.0/2.5`
- Pathway: **shared-core** (`shared-switching-access`)
- Transition: requires greater practical depth
- Related v1.1 ids: 200-301-v1.1/2.5
- Atomics: `alo-ccna-v2.0-2.5`, `alo-ccna-v2.0-2.5-root`, `alo-ccna-v2.0-2.5-guards`
- Prereq edges: 1
- Misconceptions: misc-v20-bpdu-filter-still-required
- Remediations: rem-v20-stp-guard-scope
- Lesson spec: `les-ccna-v2.0-2.5`
- Quiz specs: q-v20-2.5-01, q-v20-2.5-02
- Simulator specs: simspec-ccna-v20-stp-configure
- Sources: src-cisco-ccna-200-301-v2.0, src-cisco-ccna-200-301-v1.1
- Mastery evidence: quizPass 70% · SRS advance 80% · min attempts 3 (live engine — no duplicate system)
- Explanation layers: intuitive, practical, technical
- Remaining before learner-facing:
  - Implement simulator (currently spec-only)
  - Author LES/CES live topic elevation without renaming pilot progress keys
  - Michael/owner walkthrough per definition-of-done
  - Keep examObjectiveIds version-namespaced (200-301-v2.0/* only)
  - Audit any live STP content that still teaches BPDU filter as required for v2.0

### 3.2 — Troubleshoot IPv4/IPv6 static routing

- Official id: `200-301-v2.0/3.2`
- Pathway: **shared-core** (`shared-routing`)
- Transition: requires greater practical depth
- Related v1.1 ids: 200-301-v1.1/3.3
- Atomics: `alo-ccna-v2.0-3.2`, `alo-ccna-v2.0-3.2-types`, `alo-ccna-v2.0-3.2-floating`
- Prereq edges: 1
- Misconceptions: misc-v20-static-float-always-wins
- Remediations: rem-v20-floating-static-ad
- Lesson spec: `les-ccna-v2.0-3.2`
- Quiz specs: q-v20-3.2-01, q-v20-3.2-02
- Simulator specs: simspec-ccna-v20-static-troubleshoot
- Sources: src-cisco-ccna-200-301-v2.0, src-cisco-ccna-200-301-v1.1
- Mastery evidence: quizPass 70% · SRS advance 80% · min attempts 3 (live engine — no duplicate system)
- Explanation layers: intuitive, practical, technical
- Remaining before learner-facing:
  - Implement simulator (currently spec-only)
  - Author LES/CES live topic elevation without renaming pilot progress keys
  - Michael/owner walkthrough per definition-of-done
  - Keep examObjectiveIds version-namespaced (200-301-v2.0/* only)

### 3.3 — Configure single-area OSPFv2 (IPv4) and OSPFv3 (IPv6)

- Official id: `200-301-v2.0/3.3`
- Pathway: **shared-core** (`shared-routing`)
- Transition: expanded
- Related v1.1 ids: 200-301-v1.1/3.4
- Atomics: `alo-ccna-v2.0-3.3`, `alo-ccna-v2.0-3.3-ospfv3`, `alo-ccna-v2.0-3.3-adjacency`
- Prereq edges: 1
- Misconceptions: misc-v20-ospfv3-same-as-v2-commands
- Remediations: rem-v20-ospfv2-vs-v3
- Lesson spec: `les-ccna-v2.0-3.3`
- Quiz specs: q-v20-3.3-01, q-v20-3.3-02
- Simulator specs: simspec-ccna-v20-ospfv3
- Sources: src-cisco-ccna-200-301-v2.0, src-cisco-ccna-200-301-v1.1
- Mastery evidence: quizPass 70% · SRS advance 80% · min attempts 3 (live engine — no duplicate system)
- Explanation layers: intuitive, practical, technical
- Remaining before learner-facing:
  - Implement simulator (currently spec-only)
  - Author LES/CES live topic elevation without renaming pilot progress keys
  - Michael/owner walkthrough per definition-of-done
  - Keep examObjectiveIds version-namespaced (200-301-v2.0/* only)
  - Live ospf-basics is OSPFv2-leaning — add OSPFv3 labs without inventing authentication tasks

### 5.2 — Select generative-AI prompts for network operations

- Official id: `200-301-v2.0/5.2`
- Pathway: **version-specific**
- Transition: expanded
- Related v1.1 ids: 200-301-v1.1/6.4
- Atomics: `alo-ccna-v2.0-5.2`, `alo-ccna-v2.0-5.2-components`, `alo-ccna-v2.0-5.2-safe`
- Prereq edges: 1
- Misconceptions: misc-v20-ai-prompt-no-structure
- Remediations: rem-v20-prompt-components
- Lesson spec: `les-ccna-v2.0-5.2`
- Quiz specs: q-v20-5.2-01, q-v20-5.2-02
- Simulator specs: simspec-ccna-v20-ai-prompts
- Sources: src-cisco-ccna-200-301-v2.0
- Mastery evidence: quizPass 70% · SRS advance 80% · min attempts 3 (live engine — no duplicate system)
- Explanation layers: intuitive, practical, technical
- Remaining before learner-facing:
  - Implement simulator (currently spec-only)
  - Author LES/CES live topic elevation without renaming pilot progress keys
  - Michael/owner walkthrough per definition-of-done
  - Keep examObjectiveIds version-namespaced (200-301-v2.0/* only)
  - No live AI topic yet — create version-specific pathway (do not force into v1.1 automation topic)
  - Safety review for prompt scenarios (no secret leakage in examples)

## Inventory

| Artifact | Count |
| --- | ---: |
| Official parents | 8 |
| Atomic objectives | 24 |
| Prerequisite edges | 10 |
| Misconceptions | 8 |
| Remediations | 8 |
| Simulator specs | 8 |
| Quiz items (specs) | 16 |

## Explicit non-goals

- No rewrite of live `src/content/certifications/ccna.ts` lessons/quizzes
- No pilot progress-key rename
- No second mastery/SRS engine
- No mass-produced full prose lessons beyond lesson specifications
