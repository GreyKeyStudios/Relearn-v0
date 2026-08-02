# Computer Fundamentals + CompTIA A+ — Architecture & Implementation Plan

**Status:** Approved (Michael, 2026-07-15) — F0 unblocked  
**Owner:** M0 (Master planning / delegation)  
**Date:** 2026-07-15  
**Parent docs:** [`COURSE_ARCHITECTURE.md`](COURSE_ARCHITECTURE.md) · [`BRIDGE_MASTER.md`](../BRIDGE_MASTER.md) · [`definition-of-done.md`](definition-of-done.md) · [`bridge-learning-standard.md`](bridge-learning-standard.md) · [`learning-experience-standard.md`](learning-experience-standard.md) · [`subject-onboarding-process.md`](subject-onboarding-process.md) · [`a-plus-objectives-source.md`](a-plus-objectives-source.md) · [`helpdesk-residency-contracts.md`](helpdesk-residency-contracts.md)

---

## Executive verdict

Two **separate** tracks:

| Track | Template | Delivery (Path A now) | Role |
|-------|----------|----------------------|------|
| **Computer Fundamentals** | Type A pedagogy + heavy Type C labs | Skills track via Certification schema (`vendor: ReLearn`) — same pattern as PowerShell / Git | Standalone computer confidence & literacy |
| **CompTIA A+** | Type A (concept + exam) | Vendor cert (`vendor: CompTIA`) | Current exam series **220-1201 / 220-1202 (V15)** |

**Repo audit:** There is **no** A+ cert file, no Computer Fundamentals track, and no help-desk workplace simulation. Existing CompTIA tracks (Network+, Security+, Linux+, CySA+) are **not** A+ content. Reusable assets: `cable-type-drill`, `malware-classifier`, `port-protocol-drill`, `itil-incident-order`, PowerShell Windows labs pattern, LES/BLS/DoD pipeline, `track-status.ts` (needs maturity extension).

**Critical design rule:** Computer Fundamentals is **not** “A+ prep with soft branding.” It must graduate learners who never take A+. A+ must still teach and assess every official objective.

---

## Approved product decisions (locked)

| # | Decision | Approved value |
|---|----------|----------------|
| **A1** | Learner level | Phone-comfortable, desktop-uncertain. Adult, respectful language. Never childish or remedial. |
| **A2** | Windows focus | **Windows 11 primary** for teaching and labs. Win10 only in clearly labeled legacy/comparison notes for workplaces that still use it. Do **not** design primary labs around Win10 or imply it is the recommended current platform. |
| **A3** | Exam series | **220-1201 and 220-1202 only** (V15). Official CompTIA objectives are source of truth. Provenance: see [`a-plus-objectives-source.md`](a-plus-objectives-source.md) (document version + retrieval date required). |
| **A4** | CF enrollment | Independently enrollable; strongly recommended for A+; **not a hard gate**. Placement diagnostic supports: start from beginning, skip selected CF modules, begin A+ with foundation refreshers, **automatic referral** to a specific CF lesson when an A+ learner shows a prerequisite gap. |
| **A5** | Help-desk simulation | Full workplace residency in **Pathway F Phase F5**. Contracts defined now ([`helpdesk-residency-contracts.md`](helpdesk-residency-contracts.md)); do **not** build residency in F0–F4 or let it delay CF/A+ courses. |
| **A6** | Track IDs | `computer-fundamentals` · `a-plus` (topic prefixes `cf-` / `ap-`) |
| **A7** | Content location | Path A: `src/content/certifications/{computer-fundamentals,a-plus}.ts` |
| **A8** | Maturity model | `planned` → `first-pass` → `internal-review` → `learner-qa` → `stable` → `gold-standard` (plus legacy flagship/reference/skill/early) |
| **A9** | Career Path packaging | Help Desk path = CF + A+ (+ later PowerShell) — schema later |
| **A10** | Professor Mode | Oral checklist until Phase 5 AI ships |
| **A11** | Practice PC / sandbox | **CF M1–M2:** real Windows host only. **CF M3+ / Bash / Linux CLI:** optional or required **local VirtualBox guest** (learner downloads VirtualBox — ReLearn does **not** host VMs; VMware optional alternate). Track: [`vm-lab-learning-architecture.md`](vm-lab-learning-architecture.md). Policy: [`cf-practice-pc-contracts.md`](cf-practice-pc-contracts.md). |

**Standalone rule:** Computer Fundamentals must stand alone as digital literacy and confidence training. A+ must remain complete certification preparation, not the advanced half of CF.

---

## Subject onboarding checklist (both tracks)

### Computer Fundamentals

| # | Question | Answer |
|---|---|---|
| 1 | Why teach this? | Standalone literacy & confidence; removes shame barrier; feeds help-desk readiness |
| 2 | Who is it for? | Anyone intimidated by desktops; career switchers; A+ aspirants needing foundations |
| 3 | Prerequisites | None |
| 4 | Success measured | Can navigate Windows, manage files, connect safely, troubleshoot calmly, write a clear ticket note — without A+ |
| 5 | Activity types | LES lesson, checkpoints, key facts, guided example, real-world traps, scenario, flashcards, quiz, bank, sims, external labs |
| 6 | Lab types | Browser sims + real-machine Windows labs with mobile fallback |
| 7 | Different from certs | No exam objectives; confidence & mental models; `realWorldTrap` not `examTrap` |
| 8 | Engine mapping | Reuse mastery/SRS/coach/planner; new sims; placement diagnostic |
| 9 | Tier | **Tier 1** — IT Foundations (literacy layer under certs) |
| 10 | Gate | Architecture approved + Module 1 pilot signed off before full CF write |
| 11 | Track type | `skills` (delivered as Certification shell) |
| 12 | Content location | `src/content/certifications/computer-fundamentals.ts` + `src/content/lessons/cf-*-experience.ts` |
| 13 | Route prefix | `/cert/computer-fundamentals/` (Path A) |
| 14 | Phase | New **Pathway F** (see §10) — parallel to CCNA QA, not blocking it |
| 15 | Delight moments | Safe exploration without fear; “I found the file”; restart as tool not superstition; ticket note that makes sense |

### CompTIA A+

| # | Question | Answer |
|---|---|---|
| 1 | Why teach this? | Entry-level IT credential; job-market standard; measurable exam target |
| 2 | Who is it for? | Learners aiming at help desk / IT support; preferably after CF or placement skip |
| 3 | Prerequisites | **Recommended:** Computer Fundamentals (or placement). **Not hard-blocked.** |
| 4 | Success measured | Objective mastery for Core 1 + Core 2; labs; safety concepts; oral/Professor gate; optional residency |
| 5–8 | Same engine as Type A certs | CES + BLS + LES; CCNA is pedagogy reference |
| 9 | Tier | Tier 1 |
| 10 | Gate | Official objectives mapped; CF Module 1 proven; then Core 1 content |
| 11 | Track type | `certification` |
| 12 | Content | `src/content/certifications/a-plus.ts` + `src/content/lessons/ap-*-experience.ts` |
| 13 | Route | `/cert/a-plus/` |
| 14 | Phase | Pathway F Phases 3–5 |
| 15 | Delight | PBQ-style sims; SOHO setup that clicks; malware removal order that feels like a real ticket |

---

## 1. Computer Fundamentals course architecture

### Learning loop

```text
Orient → See (visual anchor) → Do (sim or lab) → Explain → Trap-check → Apply (scenario) → Reflect
```

Understand → Practice → Apply → Perform, without exam language.

### Module map (8 modules)

| Module | ID | Intent | Est. topics | Est. hours (first pass) |
|--------|-----|--------|-------------|-------------------------|
| **M1** Orientation & Confidence | `cf-orientation` | What a computer is; HW vs SW; devices; OS; apps; vocabulary; safe Settings exploration | 6 | 3–4 |
| **M2** Physical Computer Basics | `cf-hardware` | Components, ports, cables, peripherals, ESD awareness | 7 | 4–5 |
| **M3** Operating System Basics (Windows) | `cf-os` | Desktop, File Explorer, install/uninstall, accounts, Task Manager, updates, backup concepts | 8 | 5–6 |
| **M4** Internet & Networking Basics | `cf-network` | LAN vs Internet; modem/router/switch/AP; Wi-Fi vs Ethernet; IP/DNS beginner; browser vs search; cloud | 6 | 4–5 |
| **M5** Security & Safety | `cf-security` | Passwords, MFA, phishing, malware, safe downloads, public Wi-Fi, privacy, “what feels wrong” | 6 | 4–5 |
| **M6** Troubleshooting Mindset | `cf-troubleshoot` | Identify → what changed → reproduce → simple checks → one change → document → escalate | 5 | 3–4 |
| **M7** Everyday Productivity | `cf-productivity` | Email, PDFs, docs/sheets light, meetings, print/scan, zip, password managers, shortcuts, organization | 6 | 4–5 |
| **M8** Professional Readiness (intro) | `cf-pro` | Help desk overview, tickets, notes, clarifying questions, remote etiquette, asset tags, KB, scenarios | 5 | 3–4 |

**Total CF first-pass target:** ~49 topics · ~30–40 study hours  
**Gold standard:** same topics + LES experiences + full banks + all sims/labs + learner QA

### Persistent visual anchors (LES-0)

| Module | Anchor |
|--------|--------|
| M1 | “Computer stack” — User → Apps → OS → Hardware |
| M2 | Labeled PC exploded view + port strip |
| M3 | Windows desktop chrome (Start / taskbar / Explorer) |
| M4 | Home network diagram (devices → router → modem → Internet) |
| M5 | Trust boundary (you / device / network / strangers) |
| M6 | Troubleshooting ladder (simple → complex) |
| M7 | Daily toolkit tray |
| M8 | Ticket card (who / what / when / tried / next) |

### Pedagogical non-negotiables (from CCNA QA)

- Assume no untaught prior knowledge  
- Define vocabulary before use (BLS-12/13)  
- Teach before test (BLS-1)  
- One major mental model per card (BLS-2 / LES-3)  
- Permission to defer (LES-11) — especially “A+ will go deeper” without forcing A+  
- Never punish missing school computer lab experience  

---

## 2. Current A+ exam / objective map

**Source of truth:** CompTIA A+ V15 official objectives (Document Version 3.0), exams **220-1201** and **220-1202**, launched **2025-03-25**. Candidates must pass **both** from the **same** version.

| Exam | Passing | Domains |
|------|---------|---------|
| Core 1 `220-1201` | 675/900 | 1.0–5.0 below |
| Core 2 `220-1202` | 700/900 | 1.0–4.0 below |

**Note:** CompTIA documents the classic 6-step troubleshooting methodology as **competency guidance, not a scored objective** on 220-120x. Teach it in CF M6 and reinforce in A+ troubleshooting domains; do not claim it is a numbered exam objective.

### Core 1 (220-1201)

| Domain | Weight | Objectives (use these IDs in `objectives[]`) |
|--------|--------|-----------------------------------------------|
| **1.0 Mobile Devices** | 13% | **1.1** Monitor/replace mobile hardware · **1.2** Accessories & connectivity · **1.3** Mobile network connectivity & app support |
| **2.0 Networking** | 23% | **2.1** TCP/UDP ports & protocols · **2.2** Wireless technologies · **2.3** Networked host services · **2.4** Network configuration concepts · **2.5** Networking hardware · **2.6** SOHO wired/wireless config · **2.7** Internet connection & network types · **2.8** Networking tools |
| **3.0 Hardware** | 25% | **3.1** Displays · **3.2** Cables & connectors · **3.3** RAM · **3.4** Storage · **3.5** Motherboards/CPUs/add-on cards · **3.6** Power supplies · **3.7** MFDs/printers setup · **3.8** Printer maintenance |
| **4.0 Virtualization & Cloud** | 11% | **4.1** Virtualization concepts · **4.2** Cloud computing concepts |
| **5.0 HW & Network Troubleshooting** | 28% | **5.1** MB/RAM/CPU/power · **5.2** Drive/RAID · **5.3** Video/display · **5.4** Mobile issues · **5.5** Network issues · **5.6** Printer issues |

### Core 2 (220-1202)

| Domain | Weight | Objectives |
|--------|--------|------------|
| **1.0 Operating Systems** | 28% | **1.1** OS types & filesystems · **1.2** Installations/upgrades · **1.3** Windows editions · **1.4** Windows features/tools · **1.5** Windows CLI tools · **1.6** Windows settings · **1.7** Windows client networking · **1.8** macOS features · **1.9** Linux client features · **1.10** Install applications · **1.11** Cloud productivity tools |
| **2.0 Security** | 28% | **2.1** Security measures · **2.2** Windows OS security settings · **2.3** Wireless security protocols · **2.4** Malware types/tools · **2.5** Social engineering & threats · **2.6** SOHO malware removal procedure · **2.7** Workstation hardening · **2.8** Mobile device security · **2.9** Data destruction/disposal · **2.10** SOHO network security · **2.11** Browser security |
| **3.0 Software Troubleshooting** | 23% | **3.1** Windows OS issues · **3.2** Mobile OS/app issues · **3.3** Mobile OS/app security issues · **3.4** PC security issues |
| **4.0 Operational Procedures** | 21% | **4.1** Documentation & support systems · **4.2** Change management · **4.3** Backup & recovery · **4.4** Safety procedures · **4.5** Environmental impacts · **4.6** Privacy, licensing, policy · **4.7** Communication & professionalism · **4.8** Scripting basics · **4.9** Remote access · **4.10** AI basics (privacy, bias, hallucinations, policy) |

**Objective ID convention in content:** `AP1201-2.1`, `AP1202-4.10` (exam + objective).

**V15 content agents must not omit:** Zero Trust (2.1), AI basics (4.10), ReFS/XFS, Windows 11 editions/tools, cloud productivity (1.11), modern malware types (fileless, cryptominer, stalkerware).

---

## 3. Cross-track prerequisite graph

### Legend

- **R** = Required for comfortable A+ entry (placement may waive with diagnostic)  
- **Rec** = Recommended  
- **Deep** = A+ reteaches/deepens; CF alone is not enough  
- **Route-back** = If A+ learner fails objective cluster, coach routes to CF topic  

| CF topic (examples) | → A+ domains / objectives | Type | Route-back trigger |
|---------------------|---------------------------|------|-------------------|
| Hardware vs software; computer stack | All Core 1/2 vocabulary | R | Confusion on basic terms in any domain |
| Files & folders; extensions | 1202-1.x filesystems, backups, malware symptoms | R | Cannot locate downloads / misread extensions |
| Ports & cables (literacy) | 1201-3.2, 5.3, 5.6 | Rec | Cable/port ID failures |
| Internal components overview | 1201-3.3–3.6, 5.1–5.2 | Rec | Parts identification fails |
| Desktop / File Explorer / Task Manager | 1202-1.4, 1.6, 3.1 | R | Cannot navigate Windows tools |
| Install / uninstall apps | 1202-1.10, 3.1–3.2 | Rec | App install scenarios fail |
| Modem vs router vs switch vs AP | 1201-2.5–2.7, 5.5 | R | SOHO topology confusion |
| Wi-Fi vs Internet; IP/DNS beginner | 1201-2.4, 2.6, 5.5 | R | “Works by IP not by name” blank |
| Passwords, MFA, phishing, safe downloads | 1202-2.4–2.5, 2.11, 3.4 | R | Safety critical miss |
| Troubleshooting ladder | 1201-5.x, 1202-3.x (habit, not scored method) | R | Random-change troubleshooting |
| Ticket notes / clarifying questions | 1202-4.1, 4.7 | Rec | Poor documentation in labs |
| ESD / safe handling | 1202-4.4, 1201 hardware labs | Rec | Safety critical miss |
| Cloud storage vs local | 1201-4.2, 1202-1.11 | Rec | Cloud model confusion |
| Printer everyday use | 1201-3.7–3.8, 5.6 | Rec | Printer flow failures |

### Placement outcomes

```text
Diagnostic / onboarding
  ├─ Start CF from the beginning (default for uncertain desktop users)
  ├─ Skip selected CF modules (evidence-based; respectful copy)
  ├─ Enter A+ directly with CF refreshers available (prerequisite-refreshers pattern)
  └─ Automatic referral: when A+ mastery/weakness signals a foundation gap,
       coach routes to a specific CF topicId (never “go do remedial work”)
```

**Never label:** remedial, deficient, beginner failure.

**Cross-track referral (A4):** Extend [`src/lib/prerequisite-refreshers.ts`](../src/lib/prerequisite-refreshers.ts) and/or placement result types so A+ topics can point at `computer-fundamentals:{cf-topic-id}`. Placement diagnostic lives in `src/lib/cf-placement.ts` (F0 types + F1 v0 UI).

### Test-out rules (proposed)

| Skip CF module if learner can… | Evidence |
|--------------------------------|----------|
| M1 | Explain HW vs SW + name OS/apps confidently |
| M2 | Identify 6 ports + 5 components on diagrams |
| M3 | Create/find folder; open Task Manager; install/uninstall safely |
| M4 | Distinguish Wi-Fi vs Internet; modem vs router |
| M5 | Spot phishing; explain MFA purpose |
| M6 | Order troubleshooting steps for a “no Wi-Fi” scenario |
| M7 | Attach screenshot to email; zip a folder |
| M8 | Write a usable ticket note from a vignette |

---

## 4. Module and topic inventory

### Computer Fundamentals topics (planned IDs)

**M1 Orientation**  
`cf-what-is-a-computer` · `cf-hardware-vs-software` · `cf-device-types` · `cf-operating-systems` · `cf-apps-and-accounts` · `cf-safe-settings-exploration`

**M2 Hardware**  
`cf-inside-the-box` · `cf-cpu-ram-storage` · `cf-motherboard-power-cooling` · `cf-ports-and-connectors` · `cf-peripherals-and-displays` · `cf-cables-common-types` · `cf-esd-and-safe-handling`

**M3 OS (Windows)**  
`cf-desktop-taskbar-start` · `cf-windows-and-dialogs` · `cf-file-explorer-basics` · `cf-files-copy-move-delete` · `cf-extensions-and-associations` · `cf-install-uninstall-apps` · `cf-settings-updates-accounts` · `cf-task-manager-restart-backup`

**M4 Network**  
`cf-what-is-a-network` · `cf-home-network-devices` · `cf-ethernet-vs-wifi` · `cf-ip-and-dns-beginner` · `cf-browser-url-cloud` · `cf-connection-troubleshooting-basics`

**M5 Security**  
`cf-passwords-and-mfa` · `cf-phishing-and-social-engineering` · `cf-malware-and-safe-downloads` · `cf-updates-backups-privacy` · `cf-public-wifi-and-warnings` · `cf-when-something-feels-wrong`

**M6 Troubleshooting**  
`cf-identify-and-reproduce` · `cf-simple-checks-first` · `cf-read-error-messages` · `cf-one-change-document` · `cf-escalate-and-communicate`

**M7 Productivity**  
`cf-email-and-attachments` · `cf-pdfs-docs-sheets-light` · `cf-meetings-print-scan` · `cf-zip-and-organization` · `cf-password-managers-bookmarks` · `cf-shortcuts-that-matter`

**M8 Pro readiness**  
`cf-what-is-help-desk` · `cf-ticket-basics` · `cf-writing-useful-notes` · `cf-remote-support-etiquette` · `cf-assets-kb-scenarios`

### A+ topic inventory (domain → topics)

Group **~2–4 objectives per topic** where pedagogy allows; split heavy lists (ports, Windows tools, malware removal steps).

**Core 1 domains as modules:**  
`ap-mobile` · `ap-networking` · `ap-hardware` · `ap-virtualization-cloud` · `ap-hw-net-troubleshoot`

**Core 2 domains as modules:**  
`ap-operating-systems` · `ap-security` · `ap-software-troubleshoot` · `ap-operational-procedures`

**Illustrative Core 1 topics (APath finalizes):**  
Mobile: `ap-mobile-hardware` · `ap-mobile-accessories` · `ap-mobile-connectivity`  
Networking: `ap-ports-protocols` · `ap-wireless-tech` · `ap-network-services` · `ap-network-config` · `ap-network-devices` · `ap-soho-networks` · `ap-network-types` · `ap-network-tools`  
Hardware: `ap-displays` · `ap-cables-connectors` · `ap-ram` · `ap-storage` · `ap-mb-cpu-cards` · `ap-power-supplies` · `ap-printers-setup` · `ap-printer-maintenance`  
Cloud/virt: `ap-virtualization` · `ap-cloud-concepts`  
Troubleshoot: `ap-ts-power-mb-ram-cpu` · `ap-ts-storage-raid` · `ap-ts-display` · `ap-ts-mobile` · `ap-ts-network` · `ap-ts-printer`

**Illustrative Core 2 topics:**  
OS: `ap-os-types` · `ap-os-install` · `ap-windows-editions` · `ap-windows-tools` · `ap-windows-cli` · `ap-windows-settings` · `ap-windows-networking` · `ap-macos-tools` · `ap-linux-client` · `ap-app-install` · `ap-cloud-productivity`  
Security: `ap-security-measures` · `ap-windows-security` · `ap-wireless-security` · `ap-malware` · `ap-social-engineering` · `ap-malware-removal` · `ap-hardening` · `ap-mobile-security` · `ap-data-destruction` · `ap-soho-security` · `ap-browser-security`  
SW TS: `ap-ts-windows-os` · `ap-ts-mobile-os` · `ap-ts-mobile-security` · `ap-ts-pc-security`  
Ops: `ap-documentation-ticketing` · `ap-change-management` · `ap-backup-recovery` · `ap-safety` · `ap-environment` · `ap-privacy-licensing` · `ap-communication` · `ap-scripting-basics` · `ap-remote-access` · `ap-ai-basics`

**First-pass A+ topic count target:** ~55–65 topics (one lesson unit per major objective cluster).

---

## 5. Learning artifact requirements (every topic)

| Artifact | CF | A+ |
|----------|----|----|
| LES experience (or stepped lesson → LES) | Required for gold; first-pass may use stepped + prose | Same — CCNA bar for gold |
| Visual anchor / diagram | Required | Required |
| Inline checkpoints | Max 2; taught-only | Same |
| Key facts | 4–6 | 4–6 |
| Lightbulb moment | Required | Required |
| Guided example | Required | Required |
| Common mistakes | 3–5 | 3–5 |
| Real-world traps / Exam traps | **`realWorldTrap` (or `examTraps` field reused with CF copy)** | `examTraps` |
| Real-world scenario | Required | Required |
| Flashcards | 5–6 | 5–6 |
| Topic quiz | 5; easy→hard | 5 |
| Question bank | 8+ first-pass; 15–40 gold for high-weight | 8+; high-weight 50+ long-term |
| Practical assignment | Sim and/or external-lab | Same |
| Troubleshooting section | In lesson or dedicated “when this fails” block | Required on TS topics |
| What to do when this does not work | Required | Required |
| Teacher-mode / oral reflection prompt | Required (script until Professor AI) | Required |
| Objective mappings | CF internal IDs `CF-M#-O#` | `AP1201-*` / `AP1202-*` |
| estimatedStudyMinutes · difficulty · prerequisites | Required | Required |
| Assessment provenance | Every quiz/bank item records: source topic, objective, concept, where taught, difficulty, expected reasoning, distractor rationale, now vs later | Same |
| Topic DoD checklist | Per [`definition-of-done.md`](definition-of-done.md) | Same + exam realism |

**Schema note (F0):** Prefer adding optional `realWorldTraps?: string[]` OR document that CF uses `examTraps` for workplace traps (PowerShell precedent). Prefer explicit `realWorldTraps` for honesty.

---

## 6. Simulation catalog

### Reuse existing (wire to new topic IDs)

| Simulator | Use in |
|-----------|--------|
| `cable-type-drill` | CF M2, A+ cables |
| `port-protocol-drill` | A+ 2.1 (after CF network basics) |
| `malware-classifier` | CF M5 intro set; A+ 2.4 deeper set |
| `wireless-standard-drill` | A+ 2.2 |
| `itil-incident-order` | CF M8 / A+ 4.1 adjacent (ticket flow) |
| `dns-record-drill` | A+ 2.4 (not CF) |

### New browser sims (priority order)

| ID | Name | Track phase |
|----|------|-------------|
| `cf-desktop-nav` | Desktop navigation | CF Phase 1 |
| `cf-file-folder-manager` | File/folder manager | CF Phase 1–2 |
| `cf-port-matcher` | Port & connector matcher (literacy set) | CF Phase 2 |
| `ap-pc-builder` | PC component builder | A+ Core 1 |
| `cf-cable-id` | Cable ID (literacy; may extend cable-type) | CF |
| `cf-settings-nav` | Windows Settings navigation | CF |
| `cf-task-manager` | Task Manager simulator | CF |
| `ap-process-troubleshoot` | Process/app troubleshooting | A+ |
| `cf-wifi-troubleshoot` | Wi-Fi connection troubleshooting | CF / A+ |
| `cf-browser-safety` | Browser safety challenge | CF |
| `cf-phishing-classifier` | Phishing classifier | CF |
| `cf-ticket-writer` | Ticket-writing exercise | CF M8 |
| `cf-helpdesk-dialogue` | Help-desk conversation scenarios | CF / residency |
| `ap-printer-flow` | Printer troubleshooting flow | A+ |
| `ap-startup-troubleshoot` | Startup troubleshooting | A+ |
| `ap-resource-compare` | Storage/RAM/CPU comparison | A+ |
| `ap-command-recognize` | Command recognition (CMD/PS) | A+ |
| `ap-cli-sandbox` | Basic CMD/PowerShell sandbox (read-only first) | A+ Phase 4+ |
| `ap-troubleshoot-order` | Drag-and-drop troubleshooting order | A+ / CF M6 |
| `ap-malware-removal-order` | SOHO malware removal 10-step order | A+ 2.6 |

All new sims must implement locked `SimulatorResult` and register in simulator registry — **FSim / ALabs only with Integrator**.

---

## 7. Real-machine lab catalog

Every lab includes: **safety boundaries · expected outcome · rollback · common errors · Windows edition alternates · mobile-only fallback**.

| Lab ID | Task | Track |
|--------|------|-------|
| `cf-lab-folders` | Create/organize folders | CF M3 |
| `cf-lab-install-safe-app` | Install/uninstall approved safe app (e.g. Notepad++ or Windows optional feature) | CF M3 |
| `cf-lab-system-info` | Inspect system information | CF M3 |
| `cf-lab-task-manager` | Use Task Manager | CF M3 |
| `cf-lab-storage-check` | Check storage | CF M3 |
| `cf-lab-windows-update` | Check Windows Update (do not force install on shared PCs) | CF M3 |
| `cf-lab-peripheral` | Connect a peripheral (or document if none) | CF M2 |
| `cf-lab-screenshot` | Screenshot + attach to note/email draft | CF M7 |
| `cf-lab-local-user` | Create local user **where safe** (skip on managed/school devices) | CF M3 |
| `cf-lab-network-settings` | Inspect network settings | CF M4 |
| `cf-lab-ipconfig-ping` | `ipconfig` + `ping` | CF M4 / A+ |
| `cf-lab-restore-point` | Create restore point **or** explain why blocked | CF / A+ |
| `cf-lab-zip` | Compress/extract zip | CF M7 |
| `cf-lab-support-incident` | Document simulated support incident | CF M8 |
| `ap-lab-*` | Expand per Core 1/2 objective clusters (SOHO, printer share, BitLocker explain-only on Home, etc.) | A+ |

**Safety default:** Prefer read-only / reversible labs on first pass. Destructive actions (diskpart, format, BIOS changes) are **explain + simulator** until residency or supervised lab.

---

## 8. Help-desk capstone / residency specification

**Name:** ReLearn Help Desk Trainee Residency (future)  
**Login persona:** `helpdesk-trainee` (separate from student LMS account)  
**Unlock:** mastery gate — **not** 100% quiz scores  

### Mastery gate (proposed)

| Requirement | Bar |
|-------------|-----|
| Required CF lessons (or placement skips) | Complete |
| Required A+ Core 1 + Core 2 lessons | Complete |
| Core objectives | Proficient (mastery engine), not necessarily perfect |
| Required labs | Complete |
| Critical safety concepts | Passed (phishing, ESD, malware handling, privacy) |
| Oral / Professor Mode | Pass (~8/10) on help-desk scenarios |

### Simulated desktop surface

Ticket queue · knowledge base · remote support tool · asset inventory · email/chat · file explorer · command line · browser · system information · event/error logs · printer/device controls · user records (least privilege)

### Scenario bank (assess technical + order + communication + docs + safety + escalation)

Power-on failure · no Wi-Fi · app won’t launch · printer offline · storage full · suspicious email · forgotten password · no display · Bluetooth fail · slow PC · IP works / name fails · new hardware not detected · lost download · update broke something · remote resource access fail

### Release recommendation

Ship **scenario scripts + ticket-writer sim** in A+ Phase 4; full OS workplace sim in **Pathway F Phase 5** (post–A+ content first pass).

---

## 9. Agent ownership table

| Agent | Owns | Must not touch |
|-------|------|----------------|
| **F0** | Architecture docs, BRIDGE_MASTER pathway section, `types.ts` optional fields (`realWorldTraps`, maturity), `track-status` maturity tiers, objective registry contracts, verify flags design, placement schema | Cert content bodies |
| **FPath** | `docs/computer-fundamentals-learning-path.md`, CF prerequisite graph, placement question bank design | A+ objectives file; other certs |
| **FContent-1** | CF M1–M3 in `computer-fundamentals.ts` + `cf-*-experience.ts` for those modules | M4–M8; A+; platform |
| **FContent-2** | CF M4–M8 content + experiences | M1–M3; A+ |
| **FSim** | CF simulators, CF practice data, wire CF assignments | A+ exam banks; CCNA |
| **APath** | `docs/a-plus-learning-path.md`, official objective map file, A+ sequence, CF→A+ refresher links | Writing full lessons |
| **ACore1** | `a-plus.ts` Core 1 domains + `ap-*-experience.ts` for Core 1 | Core 2; CF; other certs |
| **ACore2** | Core 2 domains + experiences | Core 1; CF |
| **ALabs** | A+ labs, PBQ-style sims, residency scenario scripts | Changing lesson prose ownership of ACore* |
| **AAudit** | Lesson↔assessment alignment sheets, deferral manifest for A+/CF | Inventing new objectives |
| **AExpert** | Accuracy vs CompTIA objectives, exam realism, acronym coverage | Pedagogy structure without AAudit |
| **Integrator** | `registry.ts`, verify scripts, build, smoke e2e, cross-wiring sims | Authoring curriculum paragraphs |

**Shared engine changes** (ExperiencePlayer anchors, new media kinds, placement UI): require **F0 + Integrator** explicit approval; never silent edits to CCNA/Git/PowerShell.

**Adjusted vs user suggestion:** Split content by module ownership as above; AExpert separate from AAudit (CCNA P4.8-SME / Cognitive pattern).

---

## 10. Phased implementation sequence

### Pathway F (do not conflate with Bridge Phase numbers)

| Phase | Scope | Exit criteria |
|-------|-------|---------------|
| **F0** | Schemas; maturity; empty/planned track shells; placement types; objective provenance; residency contracts (docs only) | Build green; F0 shared-engine change report |
| **F1** | **Real pilot:** Computer Orientation and Files/Folders (not a throwaway sample). Topics: `cf-what-is-a-computer`, `cf-hardware-vs-software`, `cf-desktop-taskbar-start`, `cf-file-explorer-basics`, `cf-files-copy-move-delete`, `cf-extensions-and-associations`. Full lesson→hub→flashcards→quiz→bank→assignments. Sim: `cf-file-folder-manager`. Lab: `cf-lab-folders` (Win11). Placement v0. Buddy QA. | Buddy can complete full pilot flow; CF maturity `first-pass` or `learner-qa` for pilot module |
| **F2** | Complete CF first pass (M2–M8); sims/labs catalog MVP; internal review + learner walkthrough | CF `learner-qa` → `stable` for literacy goals |
| **F3** | A+ Core 1 first pass; objective alignment; Core 1 labs/sims | Core 1 topics first-pass CES; verify flags |
| **F4** | A+ Core 2 first pass; labs; cross-track refreshers; pathway QA | Both exams covered at first-pass |
| **F5** | Full pathway QA; workplace sim pilot; Professor Mode hooks | Residency gate defined; optional gold-standard sprint |

**Rule:** No uncontrolled full-pathway content dump.

---

## 11. Curriculum verification requirements

Extend `npm run verify:curriculum` (F0/Integrator):

| Flag | Behavior |
|------|----------|
| `--strict-cf` | CES presence for CF topics marked ≥ first-pass |
| `--strict-aplus` | CES + objective ID format `AP1201-*` / `AP1202-*` |
| `--strict-aplus-objectives` | Every official objective appears on ≥1 topic |
| `--strict-pedagogy` | Existing BLS checks apply to CF/A+ when flagged |
| `--strict-experience` | LES storyboards when present |
| New | Assessment provenance warnings (missing sourceTopic / distractor notes) — start as warn |

CI: build + `tsc --noEmit` + verify on PRs touching these tracks.

Deferral manifests: `docs/cf-deferral-manifest.md`, `docs/a-plus-deferral-manifest.md`.

---

## 12. Definition of done

### Topic complete

Use [`definition-of-done.md`](definition-of-done.md) Type A checklist. CF substitutions:

- Exam traps → real-world traps  
- External PT labs → Windows real-machine labs / browser sims  
- Professor Mode → oral script acceptable until Phase 5  

### Module / domain complete

All topics Topic Complete + owner walkthrough + verify flags green + deferrals documented.

### Pathway complete (literacy)

CF stable: learner can use a Windows PC confidently for daily life and entry-level support habits **without** A+.

### Pathway complete (cert)

A+ stable: all V15 objectives taught & assessed with alignment; Core 1+2 practice coverage; safety gates; optional residency not required for “exam prep complete.”

---

## 13. Learner QA checklist

Copy per module (Michael + buddy learner):

- [ ] I never felt stupid for not knowing a word — words were defined first  
- [ ] I could complete the lesson on a phone  
- [ ] Checkpoint questions only tested what I just learned  
- [ ] Quiz/bank never ambushed me with future topics  
- [ ] Lab safety boundaries were clear; I knew how to undo  
- [ ] Mobile fallback existed or lab was honestly marked desktop-needed  
- [ ] Visual anchor helped me know where I was  
- [ ] “Why this matters” was clear for life **or** job — not only exam  
- [ ] For A+: distractors felt like real mistakes, not nonsense  
- [ ] Placement language felt respectful  
- [ ] I know what to do when stuck (“what to do when this does not work”)  

Record in `.cursor/plans/cf-aplus-qa/` reflection files (same pattern as CCNA waves).

---

## 14. Risks and unresolved decisions

| Risk | Mitigation |
|------|------------|
| Collapsing CF into A+ prep | Separate files, separate success metrics, dual enrollment |
| Scope explosion (63 official objectives × full LES) | Phased F1→F5; first-pass CES before gold LES |
| Windows edition / managed-device lab failures | Alternates + explain-only paths |
| Maturity UI still shows Early Access only | F0 extends `track-status` before publishing CF |
| Duplicating Network+ networking content | A+ keeps help-desk depth; cross-link later; don’t copy-paste Network+ prose |
| Workplace sim too early | Park in F5 |
| CompTIA objective PDF numbering OCR ambiguity | APath maintains canonical map from official PDFs; AExpert verifies |
| Overwriting other certs | Strict file ownership + PR review |
| Buddy learner blocked by desktop-only labs | Mobile fallbacks mandatory in CF |

**Still open (non-blocking):** Whether CF gets a separate “Foundations” shelf vs cert grid; monetization; macOS/Linux in CF beyond “other devices exist” (default: mention only; depth in A+ 1.8/1.9).

---

## 15. First-pass vs gold-standard scope

| Layer | First-pass | Gold-standard |
|-------|------------|---------------|
| CF topics | All ~49 with CES standard (lesson, keyFacts, quiz, flashcards, mistakes, scenario, traps, guidedExample, scheduling) | Full LES experiences; banks 15+; all sims; all labs; learner QA sign-off |
| A+ topics | All objectives mapped; CES standard; critical sims (ports, malware order, cable, SOHO) | LES on every topic; PBQ sims; deep banks; acronym drills; residency |
| Placement | Questionnaire + recommendations | Adaptive diagnostic + refresher deep-links |
| Workplace sim | Ticket-writer + scenario scripts | Full `helpdesk-trainee` desktop |
| Professor | Oral scripts | Phase 5 AI Professor |
| Maturity badge | `first-pass` / `internal-review` honest | `gold-standard` only after DoD |

**Estimated effort (order-of-magnitude, agent-weeks):**  
F0–F1: 1–2 · F2: 3–5 · F3: 4–6 · F4: 4–6 · F5: 3–5 — **not** a single sprint.

---

## Beginner onboarding design

### Goals

Determine start point without embarrassment; collect intent (confidence / job / A+).

### Sample items (tasks > self-labels)

1. Create and find a folder (sim or lab micro-task)  
2. Wi-Fi vs Internet (one scenario)  
3. Identify 3 common ports (image)  
4. Have you installed software before? (yes/no + optional sim)  
5. Task Manager familiarity (screenshot match)  
6. Ticket familiarity (sample note quality)  
7. Intent: personal confidence / job prep / A+ exam / not sure  

### Outputs

Personalized path card: “Start with Getting Comfortable” / “Skip ahead to Files & Folders” / “Begin A+ with refreshers on…” — never “remedial track.”

---

## Content maturity (UI + registry)

Replace/extend `TrackStatus` in `src/lib/track-status.ts`:

| Status | Learner-facing label | Meaning |
|--------|----------------------|---------|
| `planned` | Coming soon | Shell only |
| `first-pass` | In progress | Studyable but incomplete artifacts |
| `internal-review` | In review | Team QA |
| `learner-qa` | Learner testing | Buddy/Michael walkthrough |
| `stable` | Ready | Production literacy/cert prep |
| `gold-standard` | Flagship quality | DoD + LES + banks aligned |

Do **not** present first-pass as production-ready.

---

## Agent prompts (copy into chats after approval)

### F0 — Schemas & contracts

```text
You are F0 for ReLearn Pathway F (Computer Fundamentals + CompTIA A+).
Read: docs/computer-fundamentals-aplus-architecture.md, docs/COURSE_ARCHITECTURE.md, BRIDGE_MASTER.md, src/content/types.ts, src/lib/track-status.ts.
Implement ONLY approved schema/registry/maturity/docs updates — no curriculum prose.
Do not edit ccna.ts, powershell.ts, git-github.ts, or unrelated certs.
When finished: list files changed, verify commands run, blockers.
```

### FPath

```text
You are FPath. Own CF sequence and prerequisite/placement graph only.
Read architecture doc §1, §3, §4 CF inventory, docs/subject-onboarding-process.md, docs/bridge-learning-standard.md.
Produce docs/computer-fundamentals-learning-path.md with module order, prerequisites, test-out rules, route-back links to A+.
Do not write full lessons or edit a-plus.ts.
```

### FContent-1 / FContent-2

```text
You are FContent-1 (M1–M3) OR FContent-2 (M4–M8).
Read architecture doc, BLS, LES, definition-of-done, PowerShell skills-track patterns.
Write Computer Fundamentals topics in computer-fundamentals.ts (+ experience files).
CF stands alone — not A+ prep. Use real-world traps, not exam traps.
Teach before test. Define vocabulary first. No untaught quiz knowledge.
Do not edit A+ or other certifications.
```

### FSim

```text
You are FSim. Build CF browser simulators per architecture §6 priority, SimulatorResult contract, SimulatorShell.
Register sims; wire assignments only for CF topics you are assigned.
No exploit content; phishing classifier uses synthetic examples only.
```

### APath

```text
You are APath. Maintain canonical CompTIA A+ 220-1201/220-1202 V15 objective map and a-plus learning path.
Source: official CompTIA objectives PDFs (V15). Do not use retired 1101/1102.
Produce docs/a-plus-learning-path.md + objective coverage matrix. Link CF refreshers.
Do not author full lesson bodies.
```

### ACore1 / ACore2

```text
You are ACore1 (220-1201) OR ACore2 (220-1202).
Read architecture §2, CCNA reference pedagogy, definition-of-done.
Author a-plus.ts domains you own + LES experiences.
Map objectives AP1201-* / AP1202-*. Deepen beyond CF; never assume CF taught exam detail.
Assessment provenance required for every quiz/bank item.
Do not edit computer-fundamentals.ts or other certs.
```

### ALabs

```text
You are ALabs. Own A+ labs, PBQ-style sims, residency scenario scripts (§7–§8).
Every real-machine lab needs safety, rollback, edition alternates, mobile fallback.
Do not change lesson ownership of ACore agents except assignment wiring.
```

### AAudit

```text
You are AAudit. Audit teach-before-test alignment for CF/A+ like CCNA wave audits.
Output audit sheets; relocate items via deferral manifests; do not silently delete coverage.
```

### AExpert

```text
You are AExpert. Verify technical accuracy and exam realism against V15 objectives and acronym lists.
Flag outdated 110x content, wrong ports, unsafe advice. Do not rewrite pedagogy structure without AAudit.
```

### Integrator

```text
You are Integrator. registry.ts, verify:curriculum flags, build, tsc, smoke tests for Pathway F.
Fix integration only; bounce content issues to owning agents.
```

---

## Sign-off block

| Item | Owner | Status |
|------|-------|--------|
| Architecture | M0 | **Approved** |
| A1–A5 decisions | Michael | **Approved** (2026-07-15; A2 = Win11 primary / Win10 legacy notes only) |
| Proceed to F0 | Michael | **Unblocked** |
| Proceed to F1 | Michael | After F0 shared-engine change report |

**F1 pilot (locked):** Computer Orientation and Files/Folders — full DoD-style flow for the six pilot topics listed in §10. Device-types / safe-settings fold into LES-11 deferrals where needed.

**Next after F0 report:** FPath + FContent-1 + FSim ship F1 pilot only — do not multiply CF modules until buddy walkthrough.
