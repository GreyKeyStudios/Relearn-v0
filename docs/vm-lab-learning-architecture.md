# VM Lab Foundations — Learning Architecture

**Status:** First-pass Modules 1–8 scaffolded in \`src/content/certifications/vm-lab.ts\`  
**Updated:** 2026-08-01 — registered live track (\`first-pass\`); ReLearn still does **not** host VMs  
**Tier:** ReLearn Tier 3 — Applied Technology (Professional Foundations)  
**Track type:** Skills track — **hybrid Type B + Type C**  
**Track ID:** `vm-lab`  
**Vendor (Path A):** `ReLearn`  
**Related:** [`TYPE_B_MASTER.md`](TYPE_B_MASTER.md) · [`TYPE_C_MASTER.md`](TYPE_C_MASTER.md) · [`cf-practice-pc-contracts.md`](cf-practice-pc-contracts.md) · [`COURSE_ARCHITECTURE.md`](COURSE_ARCHITECTURE.md)

---

## Why this track exists

Computer Fundamentals must stay on a **real Windows PC**.  
Bash, Linux CLI, CMD drills, package installs, broken configs, and later A+ risk labs need a **disposable machine the learner controls**.

```text
CF (literacy on your PC)
  └─ optional Practice PC for M3+ risk labs  ──┐
                                               ├─→  VM Lab Foundations (this track)
Bash / Linux shell / CMD / PowerShell deep labs ┘         │
A+ virtualization + risky labs ──────────────────┘         │
                                                           ▼
                                              Learner installs VirtualBox
                                              + ReLearn-guided guest VMs
```

**VM Lab is both:**

1. A **skills course** — install VirtualBox, import/create a guest, snapshots, shared folders, basic networking  
2. A **platform prerequisite** — the safe place other tracks point to for Break/Fix and command practice  

Do **not** bury this inside Linux+ (Type A concepts) or Bash (Type B commands). Those tracks *consume* the lab; this track *owns* the lab workflow.

### Shared folders policy

| Context | Shared folders |
|---------|----------------|
| **Learning VM** (this course) | May enable briefly to teach host ↔ guest transfer, then **disable** |
| **Official ReLearn Lab VM** (future appliance) | Host shares **normally disabled** for containment |

Writable host shares let a compromised/misconfigured guest touch real host files — Module 7 and the capstone teach that distinction.

---

## Runtime decision (locked)

**ReLearn does not host or stream VMs.**

| Priority | Runtime | Role |
|----------|---------|------|
| **1** | **Oracle VirtualBox** — learner download (Windows / Mac / Linux hosts) | **Primary path** |
| **2** | VMware Workstation Player / Fusion | Optional alternate — same labs, different screenshots |
| **3** | In-app ReLearn OS / F5 residency | Separate product surface later — not a substitute for this track |

Guest OS images (Windows eval / Linux ISO or OVA) are **downloaded by the learner** (or provided as a documented OVA link ReLearn maintains as a file download — still not a hosted runtime).

**Why VirtualBox first:** Free for learners, cross-platform, already used in Linux+/Security+ external labs in this repo, no Player-vs-Fusion split for Windows vs Mac hosts.

---

## Template choice

| Aspect | Choice | Why |
|--------|--------|-----|
| Primary template | **Type C (Tool)** | Install → configure → use VirtualBox as the tool |
| Secondary loop | **Type B Break/Fix** | Snapshot → break → restore |
| Not Type A | — | A+ still owns exam virtualization *concepts* |

---

## Success definition

A learner finishes VM Lab Foundations when they can:

1. Explain why practice happens in a disposable guest (safety + reset)  
2. **Download and install VirtualBox** (+ Extension Pack when needed) with clear safety boundaries  
3. Create or import a **Linux guest** and a **Windows guest** (or one primary + second later)  
4. Run basic **CMD** (Windows guest) and **Bash** (Linux guest) and read the output  
5. Take a **snapshot**, make a change, **restore** — without panic  
6. Use shared folders or a simple copy path for lab files  
7. Know when to use **host Windows** (CF literacy) vs **guest VM** (state-changing commands)  
8. Capstone: break something minor in the guest → restore snapshot → short note  

Success **is** “I can run labs in VirtualBox on my machine without risking my host.”  
Success is **not** “ReLearn spun up a cloud desktop for me.”

---

## Curriculum map (first pass)

| Module | ID | Outcomes |
|--------|-----|----------|
| **1** Why a practice machine | `vm-why-sandbox` | Host vs guest; what “reset” means; CF vs VM Lab split |
| **2** Install VirtualBox | `vm-install-virtualbox` | Download VirtualBox; Extension Pack notes; system requirements; Windows/Mac/Linux host notes; common install failures |
| **3** First Linux guest | `vm-linux-guest` | ISO/OVA → install or import → first boot → snapshot “clean” |
| **4** Bash in the guest | `vm-bash-basics` | `pwd`, `ls`, `cd`, `cat`, `man` inside Linux VM |
| **5** Windows guest + CMD | `vm-windows-guest-cmd` | Optional second guest or dual-use lab; `cd`, `dir`, `ipconfig`, `ping` |
| **6** Snapshots & recovery | `vm-snapshots` | Snapshot → break → restore; when not to snapshot |
| **7** Shared folders & files | `vm-files-share` | Host ↔ guest file move; Guest Additions; don’t store permanent work only in guest |
| **8** Capstone | `vm-capstone` | Assigned break/fix + short ticket-style note |

**Topic count target:** ~16–24 topics.  
**Estimated first-pass study hours:** 10–14 (install + images take wall-clock time).

### Explicit non-goals (v1)

- ReLearn-hosted / browser-streamed VMs  
- Full Linux+ or full Bash Type B curriculum  
- Nested virtualization deep dives  
- Requiring paid hypervisor licenses  
- Making CF Module 1 require VirtualBox  

---

## Relationship to other tracks

| Track | Relationship |
|-------|----------------|
| **Computer Fundamentals** | M1–M2 on host only. M3+ may say “optional — use your VirtualBox Practice PC if installed” |
| **Bash** | Prerequisite: VM Lab through Linux guest + Bash basics. Bash owns command depth; VM Lab owns the machine |
| **Linux+** | Concepts in Linux+; CLI labs assume VM Lab Linux guest (already references VirtualBox externally) |
| **PowerShell** | Safe Get-* may stay on host; destructive labs offer VirtualBox Windows guest |
| **CompTIA A+** | Exam virt concepts in A+; hands-on “use a hypervisor” aligns with this track’s install modules |
| **F5 Help Desk residency** | Separate in-app sim later — not a replacement for VirtualBox skill |

---

## Subject onboarding checklist

| # | Question | Answer |
|---|---|---|
| 1 | Why teach this? | Safe local labs + real IT skill (everyone in help desk meets VMs) |
| 2 | Who is it for? | Post-CF learners entering shells / Linux / A+ labs |
| 3 | Prerequisites | CF Orientation + Files recommended; **capable host PC** (RAM/disk checklist in Module 2) |
| 4 | Success measured | VirtualBox installed; Linux guest; snapshot/restore; CMD + Bash basics; capstone |
| 5 | Activity types | LES/prose, external-lab (VirtualBox on host), Break/Fix, quiz, flashcards |
| 6 | Lab types | **Local VirtualBox guests** — Windows + Linux |
| 7 | Different from certs | Tool + skill — not vendor exam |
| 8 | Engine mapping | Reuse mastery/SRS; external-lab assignments with host/guest checklists |
| 9 | Tier | Tier 3 |
| 10 | Gate | Architecture approved; **official download URLs + recommended guest images** chosen before Module 2 content |
| 11 | Track type | `skills` |
| 12 | Content location | Path A: `src/content/certifications/vm-lab.ts` (+ `src/content/certifications/vm/`) |
| 13 | Route prefix | `/cert/vm-lab/` |
| 14 | Phase | Pathway **V** — after CF first-pass usable |
| 15 | Delight | “I broke the guest on purpose and undid it in ten seconds” |

---

## Agent roster (when implementation opens)

| Agent | Owns |
|-------|------|
| **V0** | This architecture, BRIDGE_MASTER, download/image contracts, planned-track entry |
| **VPath** | Learning path, CF/Bash/Linux+ prerequisite links |
| **VContent** | `vm-lab.ts` modules — install guides, guest setup, CMD/Bash intro |
| **VAssets** | Documented OVA/ISO sources, checksum notes, version pins (no cloud host) |
| **VVerify** | Build + `--strict-vm-lab` when content exists |
| **Integrator** | registry, catalog maturity |

**VRuntime** is **not** a cloud VM host. Optional later: deep-link helpers or “verify VirtualBox installed” checklists only.

---

## Phasing

| Phase | Scope | Exit |
|-------|-------|------|
| **V0** | Architecture + planned catalog (this doc) | Coming soon card live |
| **V1** | Modules 1–2 — why sandbox + **install VirtualBox** | **Done (first-pass)** — `/cert/vm-lab` |
| **V2** | Module 3 — Linux guest + clean snapshot | **Done (first-pass)** — \`vm-linux-guest-create\` |
| **V3** | Modules 4–8 — Bash, Windows/CMD, snapshots, share, capstone | **Done (first-pass)** — deepen LES/polish next |
| **V4** | Deep links from CF M3+, A+, PowerShell; VMware appendix | Stable |

**Do not** block CF completion on VirtualBox. Link forward: “Install VM Lab when you are ready for shells.”

---

## Open decisions (Michael)

1. **Exact VirtualBox version pin** + Extension Pack guidance (VAssets)  
2. **Canonical Linux distro** for v1 guest (e.g. Ubuntu LTS) and whether Windows guest is required in v1 or Module 5  
3. Minimum **host RAM/disk** checklist (recommend 16 GB RAM / 40+ GB free as soft gate)  
4. Whether ReLearn hosts an **OVA file download** (static file) vs “download ISO from upstream only”  
5. How loud to mention VMware as an alternate (appendix vs Module 2 footnote)

No cloud VM provider decision is required — hosting is out of scope.
