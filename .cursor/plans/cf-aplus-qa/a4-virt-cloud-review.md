# A4 — Core 1 Virtualization & Cloud — review report

**Date:** 2026-08-01  
**Status:** Complete — **stop before Domain 5 Troubleshooting**  
**Virtualization & Cloud domain maturity:** **First-pass** (recommended)  
**Full A+ track:** remains **`planned`**  
**CCNA C1:** remains queued / fenced

---

## Verification

| Stage | `tsc --noEmit` | `--strict-aplus` | Base `verify:curriculum` |
|-------|----------------|------------------|--------------------------|
| After `ap-cloud-concepts` | Pass | Pass (23 topics) | Pass |
| After `ap-virtualization` | Pass | Pass (24 topics) | Pass |
| After domain review + integration | Pass | Pass (**25** topics) | Pass |

No CCNA edits. No Domain 5 / Core 2 / gold LES work started. No full VM Lab duplication inside A+.

---

## Topics added

| Topic ID | Objective(s) | Focus |
|----------|--------------|--------|
| `ap-cloud-concepts` | AP1201-4.1 | Service/deployment models, characteristics, sync vs backup, responsibility isolation |
| `ap-virtualization` | AP1201-4.2 | Host/guest/hypervisor, resources, network modes, snapshots, VM Lab referral |
| `ap-virt-cloud-domain-review` | AP1201-4.1–4.2 | Mixed applied assessment + weak-area routing |

**Path:** cloud concepts → virtualization → domain review

---

## Files added / modified

| File | Change |
|------|--------|
| `src/content/certifications/ap/ap-core1-virt-cloud-a4.ts` | **Added** — A4 topics + domain review |
| `src/content/certifications/ap/ap-virt-cloud-remediation.ts` | **Added** — 4.1–4.2 weak-area map |
| `src/content/certifications/a-plus.ts` | Wire Virt/Cloud domain; overview update |
| `src/lib/quiz-remediation.ts` | Include `virtCloudTopicForObjective` |
| `src/content/knowledge/nodes.ts` | A+ mapping on `cloud-fundamentals` |
| `docs/a-plus-learning-path.md` | A4 status + first-pass note |
| `.cursor/plans/cf-aplus-qa/aplus-graduation-audit.md` | Tracker update |
| `.cursor/plans/cf-aplus-qa/a4-virt-cloud-review.md` | This report |

---

## Objective coverage

| ID | Topic | Status |
|----|-------|--------|
| AP1201-4.1 | `ap-cloud-concepts` | **Live** |
| AP1201-4.2 | `ap-virtualization` | **Live** |
| AP1201-4.1–4.2 | `ap-virt-cloud-domain-review` | **Live** |

Weak-area routing: both objectives → valid topic IDs.

---

## Integration checks

| Check | Result |
|-------|--------|
| Models taught before assessment | Yes |
| Provider/customer boundaries clear | Yes |
| Sync ≠ backup; snapshot ≠ backup | Yes |
| Host/guest/hypervisor terminology consistent | Yes |
| Network modes align with VM Lab containment | Yes |
| CF + VM Lab referrals | `cf-browser-url-cloud`; `/cert/vm-lab` (host/guest, snapshots) |
| No duplicate full VM course in A+ | Yes — planning worksheet OR VM Lab referral |
| Stable IDs / remediation | Yes |

---

## Explicit deferrals

| Item | Notes |
|------|--------|
| Hardware & Network Troubleshooting (5.1–5.6) | **Next Core 1 domain** when authorized |
| Vendor-specific cloud admin deep-dives | Out of A+ scope |
| Advanced virtual networking / CCNA | Out of scope |
| Container orchestration | Concise contrast only |
| Gold LES | Not required |
| Full-track maturity promotion | Still **planned** |
| CCNA C1 | Queued / fenced |

---

## Domain maturity recommendation

**Core 1 Virtualization & Cloud → First-pass** — authorized for documentation.

Do **not** promote the complete A+ certification.

**Completed first-pass domains:** Hardware · Networking · Mobile · **Virt/Cloud**

---

## Learner-walkthrough items (Michael)

1. Cloud responsibility worksheet — six services + single-user vs all-users tickets.
2. Confirm sync ≠ backup and public ≠ public data messaging.
3. VM Lab referral: `/cert/vm-lab` host-vs-guest + snapshots **or** Option B planning worksheet.
4. Containment: NAT/host-only preferred; bridged only with intent.
5. Domain review — misses route to `ap-cloud-concepts` / `ap-virtualization`.

---

## Recommended next: Core 1 Troubleshooting sequence

**Hardware & Network Troubleshooting (`ap-core1-troubleshoot`)** — locked IDs:

```text
A5a: ap-ts-power-mb-ram-cpu   (AP1201-5.1)
  → ap-ts-storage-raid        (AP1201-5.2)
  → ap-ts-display             (AP1201-5.3)
A5b: ap-ts-mobile             (AP1201-5.4)
  → ap-ts-network             (AP1201-5.5)
  → ap-ts-printer             (AP1201-5.6)
A5c: ap-troubleshoot-domain-review  (5.1–5.6 integration; recommended pattern)
```

Rationale: power/storage/display reuse Hardware first-pass; mobile TS after Mobile domain; network TS after Networking; printers after Hardware printers.

Do not start until Michael authorizes.

---

## Stop

A4 complete. Virtualization & Cloud documented as **first-pass**. Full A+ track remains **Planned**. No Domain 5, Core 2, CCNA C1, or gold LES work started.
