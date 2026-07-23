# CF Practice PC — Contracts (optional sandbox)

**Status:** Approved direction (2026-07-20) — **not built yet**  
**Updated:** 2026-07-20 — Practice PC = **learner’s VirtualBox guest**, not a ReLearn-hosted VM  
**Parent:** [`computer-fundamentals-aplus-architecture.md`](computer-fundamentals-aplus-architecture.md) · Decision **A11**  
**Runtime owner:** [`vm-lab-learning-architecture.md`](vm-lab-learning-architecture.md)

## Product rule

```text
M1–M2 (Orientation, Files, Hardware literacy)
  → Real Windows 11 host PC (or phone-safe fallback)
  → Never require VirtualBox

M3+ (Windows tools, networking commands, riskier practice)
  → Optional Practice PC = Windows/Linux guest in VirtualBox on the learner’s machine
  → Learner downloads VirtualBox; ReLearn does not host VMs

Bash / Linux CLI / CMD / A+ risk labs
  → Require or strongly recommend VM Lab track (local VirtualBox)
```

**Why:** Computer Fundamentals must build confidence on the learner’s **own** desktop first. VirtualBox comes when commands can change system state — free, cross-platform, and already familiar from other ReLearn external labs.

## Practice PC definition

A disposable **guest OS inside VirtualBox** the learner can snapshot and restore:

| Allowed in VirtualBox guest | Stay on host PC (or sim only) |
|-----------------------------|-------------------------------|
| Install / uninstall practice apps | File Explorer create/find folders |
| Task Manager kill-process drills | System > About (read-only) |
| Network / CMD / Bash experiments | Screenshots, zip, email attach |
| Break/Fix and restore from snapshot | Vocabulary / mental-model lessons |

## Preference order (locked)

1. **Local VirtualBox** — primary — see VM Lab track  
2. **VMware Player/Fusion** — documented alternate if preferred  
3. **F5 ReLearn OS residency** — separate workplace sim later (not a VirtualBox substitute for shell labs)

ReLearn does **not** stream or host cloud desktops for this path.

## Lab authoring rules (until VM Lab ships)

- Default CF labs remain **read-only / reversible** on the host PC  
- State-changing steps must say: **“Optional — use your VirtualBox Practice PC if installed (VM Lab track); skip or watch-along on a shared/managed PC”**  
- Mobile fallback remains required where practical  
- Do **not** rewrite M1–M2 labs to require VirtualBox  

## Integration points (future)

```ts
/** Planned — not in types.ts until VM Lab v1 */
type PracticePcProvider = "virtualbox-local" | "vmware-local" | "relearn-os-later";

interface PracticePcLabMeta {
  labId: string;
  moduleMin: 3; // CF Module 3+
  requiresPracticePc: boolean;
  hypervisor: "virtualbox" | "vmware" | "either";
  realPcSafeAlternative?: string;
  snapshotRestoreHint: string;
}
```

## Relationship to F5 residency and VM Lab

Practice PC ≠ help-desk residency.  
Practice PC / VM Lab = **local VirtualBox guests** for skills practice.  
Residency = ticketed workplace persona after mastery ([`helpdesk-residency-contracts.md`](helpdesk-residency-contracts.md)).

Canonical install + curriculum plan: [`vm-lab-learning-architecture.md`](vm-lab-learning-architecture.md).
