# Adversarial Review — PR #31 Curriculum Production Architecture

**Branch:** `cursor/curriculum-production-architecture-b6be`  
**Base:** `dev`  
**Review date:** 2026-08-04  
**Scope:** Correctness, maintainability, source integrity of the production layer. No lesson mass-production. PR not marked ready-for-review by this pass (merge to `dev` is a separate explicit step after green verification).

---

## Severity-ranked findings

### Fixed defects (this pass)

| Sev | ID | Finding | Fix |
|-----|----|---------|-----|
| **P0** | CYSA-DATE | CySA+ JP/PT/ES retirement recorded as **2027-03-16**; CompTIA V3 page says **March 23, 2027**. | Corrected to **2027-03-23** in source notes + future-review flag. English **2026-12-22** confirmed. |
| **P0** | CYSA-V4 | Catalog tracked only CS0-003 while CompTIA already ships **CS0-004 (V4)** (launch 2026-06-23). Silent version risk. | Added `src-cysa-plus-cs0-004` (`needs-retrieval`), `mixedVersionWarning` on CS0-003 source/blueprint, critical future-review flag. **No** V4 objectives invented. |
| **P1** | ITIL-DOMAINS | ITIL blueprint invented 7 domain titles from “commonly published syllabus structure” without a fully inspected official syllabus. | Cleared `domains[]`; confidence remains `needs-retrieval`; notes state product page ≠ syllabus. |
| **P1** | PRODUCT≠PDF | Security+/Network+/CySA+/ITIL product pages were typed `official-exam-objectives`. | Reclassified to `official-vendor-docs`; notes state weights-only / not complete objectives. |
| **P1** | EMPTY-OBJ-FP | Validators/gap report could look “complete” when `objectives: []` (false negative for mapping gaps). | Added `domain-weights-only` + `blueprint-structure-incomplete` warnings; gap-report notes. |
| **P1** | RFC1918 | Marked `needs-retrieval` despite being a fetchable complete standard. | Adversarial re-fetch confirmed full BCP 5 text; upgraded to **verified** / complete inspected standard. |
| **P1** | NIST-HONESTY | NIST SP 800-53 needed stronger honesty about partial retrieval. | Kept `needs-retrieval`; notes now say metadata-only, “No Download Available”, do not quote control IDs. |
| **P2** | SRS-DRIFT | Production SRS ladder was a hard-coded copy of a private live constant (drift possible). | Exported live `SRS_INTERVALS`; production re-exports and compares against it. Thresholds still from `mastery-thresholds.ts`. Behavior unchanged. |
| **P2** | DATE-SEMANTICS | `retrievedAt` / `lastCheckedAt` / `reviewBy` lacked documented UTC calendar semantics and format checks. | Documented UTC date-of-record in types + agent guide; validators reject non-`YYYY-MM-DD`. |
| **P2** | SEC+-ESTIMATE | Estimated Security+ retirement needed sharper estimate-vs-confirmed language. | Notes/future-review fact now explicitly say ESTIMATE / not confirmed cutover. |
| **P3** | CCNA-GUIDE | Agent research guide still said Cisco topics were unrecorded. | Updated to reflect recorded v1.1 source + pilot `mixedVersionWarning`. |

### Verified design decisions (no change needed)

| Topic | Verdict |
|-------|---------|
| Study-loop / mastery / SRS / progress store | Production layer is parallel only (`src/content/production`, `src/lib/production`, scripts). No Path A runtime imports. Thresholds 70/80/90 and ladder 1,3,7,14,30 re-exported from live modules. |
| Duplication vs live curriculum | Intentional parallel authoring/QC layer with adapters; does not replace `Certification`/`Topic`. |
| Prerequisite cycle + broken-ref detection | DFS cycle detection + broken topic/atomic link checks present and wired into `verify:production`. |
| Exam blueprint version isolation | One blueprint per version; CCNA pilot mix and CySA 003/004 mix require `mixedVersionWarning` (enforced as warnings). |
| CCNA transition dates | **Confirmed** from Cisco Learning Network: v1.1 last test **2027-02-02**; v2.0 first test **2027-02-03**. |
| CySA+ English retirement | **Confirmed** **2026-12-22**. |
| Security+ retirement wording | CompTIA page itself says “usually three years… (estimated 2026)” — estimate handling is correct when labeled. |
| Empty objective arrays | Now explicitly warned; A+ keeps real lines; CCNA keeps pilot lines under warning. |
| Cert first-party pointing | A+/Sec+/Net+/CySA+/Linux+/AWS/Azure/ITIL/CCNA records point at vendor first-party URLs (product pages or official PDFs/study guides). |
| Academic completeness distinction | RFC 1918 = complete inspected; NIST SP 800-53 = metadata-only/partial. |

### Remaining research blockers

1. **CS0-004 objectives PDF** — ingest and author a separate blueprint before CS0-003 English retirement.
2. **Official ITIL 4 Foundation syllabus/handbook** — required before any domain/objective structure.
3. **NIST SP 800-53 Rev. 5 authoritative PDF** — pubs landing page insufficient.
4. **Security+ / Network+ / CySA+ / Linux+ / AWS / Azure / CCNA official objective-line PDFs** — map into registries without inventing IDs.
5. **CCNA pilot → v1.1 reconciliation** — remap `src/content/objectives/ccna.ts` in a dedicated batch; plan v2.0 cutover separately.
6. **SY0-701 exact retirement / successor code** — still only CompTIA’s estimate.

### Intentionally deferred to later objective-PDF ingestion batches

- Populating `objectives[]` for Security+, Network+, CySA+ (003/004), Linux+, AWS CLF-C02 task statements, Azure skill bullets, ITIL LOs.
- Authoring a `blueprint-cysa-plus-cs0-004` once the V4 PDF is inspected.
- Lesson/LES/CES expansion, misconception catalog growth, simulator specs beyond seeds.
- Closing Diaspora Atlas PR #2 (requires access outside this repo token).

---

## Challenge results (requested)

| Challenge | Result |
|-----------|--------|
| CCNA transition dates + provenance | **Pass** — first-party Cisco Learning Network page confirms 2027-02-02 / 2027-02-03. |
| CySA+ retirement date | **Partial fail → fixed** — English OK; translation date was wrong; V4 existence under-documented. |
| Estimated Security+ retirement | **Pass with labeling** — estimate only; language sharpened. |
| ITIL without fully inspected syllabus | **Fail → fixed** — removed reconstructed domains; kept logistics-only honesty. |
| RFC 1918 / NIST “needs full re-fetch” | **Split** — RFC 1918 upgraded after full fetch; NIST correctly remains needs-retrieval with stronger partial-retrieval notes. |

---

## Commands expected green after this pass

```bash
npm run verify:production
npm run curriculum:gap-report
npm run verify:curriculum -- --strict-ccna --strict-ccna-objectives
npx tsc --noEmit
npm run build
npm run lint   # may still fail on pre-existing unrelated UI files
```
