# ReLearn Lab VM — Product Plan

**Status:** Phase A scaffold (UI + metadata + docs only)  
**Parent:** [`COURSE_ARCHITECTURE.md`](COURSE_ARCHITECTURE.md) · [`ethical-hacking-architecture.md`](ethical-hacking-architecture.md) · [`vm-lab-learning-architecture.md`](vm-lab-learning-architecture.md)

---

## Purpose

One reusable, downloadable lab **appliance** that supports versioned **scenario packs** and **role-based logins**. Learners import the appliance once, then install scenario packs instead of rebuilding environments for every course.

This is **not** a substitute for teaching environment construction. Learners still complete a build-it-yourself VM foundations course first.

---

## Three lab delivery modes

| Mode | When | Example |
|------|------|---------|
| **Build-it-yourself** | Setup *is* the learning objective | Install VirtualBox, create guests, NAT/host-only, snapshots |
| **ReLearn Lab VM** | Reusable appliance for scenario courses | Import OVA once; run many packs |
| **Scenario packs** | Versioned content installed into the appliance | Missing Patch, DNS Incident, … |
| **Web walkthrough** | No hypervisor available | In-app Missing Patch demo (available now) |
| **External lab** | Existing third-party tools | Packet Tracer, etc. (already in curriculum) |

---

## Product principles

* Teach environment construction before abstracting it away.
* Setup should not repeatedly block later learning.
* Use one appliance when practical.
* Use multiple role and scenario logins.
* Isolate system-changing scenarios beyond ordinary Linux user permissions.
* Make every environment resettable.
* Keep offensive activity harmless and contained (see EH safe-simulation boundary).
* Keep web-only alternatives for users unable to run virtualization.

---

## Learner flow (target)

1. Complete manual VM foundations course.  
2. Download and import the ReLearn Lab VM once.  
3. Verify appliance version compatibility.  
4. Select a ReLearn scenario.  
5. Install or activate its scenario pack.  
6. View assigned scenario and role login.  
7. Complete role-based phases.  
8. Export a completion result or evidence package.  
9. Submit or validate the result in ReLearn.  
10. Reset the scenario and begin another lab.

**Phase A** represents this flow in the UI only. No appliance binary, installer, or verification pipeline ships in this pass.

---

## Planned technical architecture (unimplemented)

Clearly **not built yet**:

* Linux base image  
* VirtualBox OVA distribution  
* Reproducible Packer build  
* Optional Vagrant workflow  
* Scenario-pack format / manifest  
* Scenario and role account provisioning  
* Container or namespace isolation  
* Local-only networking  
* Scenario reset and restore  
* Environment health check  
* Evidence and result export  
* Version compatibility checks  
* Signed manifests and checksums  

---

## Proposed implementation phases

### Phase A — Product scaffold (current)

* Lab VM overview page (`/labs/relearn-vm`)  
* Metadata model (`LabDeliveryMode`, requirements, role logins)  
* Scenario and career-path links  
* Planned scenario catalog  
* Documentation  

### Phase B — Appliance proof of concept

* Build Linux base appliance  
* Scenario manager + health check + reset command  
* Export VirtualBox OVA  
* Document import process  

### Phase C — Missing Patch pack

* Role accounts, fictional assets, synthetic logs  
* Safe predefined red-team actions  
* Patch/remediation workflow, evidence export, local scoring artifact  

### Phase D — Scenario-pack framework

* Pack manifest, version validation, install/uninstall  
* Isolate services, reset individual scenarios  
* Pack authoring documentation  

### Phase E — ReLearn integration

* Validate completion artifact, record result, connect to mastery  
* Unlock follow-up content, debrief + Knowledge DNA updates  

---

## Worker-ready backlog (future Codex / infra worker)

1. Research and select the Linux base distribution.  
2. Define Packer build architecture.  
3. Create a reproducible base appliance.  
4. Configure safe default VirtualBox networking.  
5. Disable unnecessary host integration.  
6. Build the scenario manager CLI.  
7. Design the scenario-pack manifest.  
8. Implement scenario user and role provisioning.  
9. Add container or namespace isolation.  
10. Implement health checks.  
11. Implement scenario reset.  
12. Build Missing Patch as the first pack.  
13. Export and verify an OVA.  
14. Generate checksums and release metadata.  
15. Document installation, recovery, and removal.  
16. Perform containment and escape-risk review.  
17. Test on Windows hosts using VirtualBox.  
18. Add a web-only fallback for unsupported systems.  

---

## Code ownership

| Area | Path |
|------|------|
| Plan | `docs/relearn-lab-vm-plan.md` |
| Metadata | `src/content/labs/` |
| UI | `src/components/labs/`, `src/app/labs/relearn-vm/` |

Do **not** add functional download buttons, OVA binaries, Packer templates, or live provisioning in Phase A.
