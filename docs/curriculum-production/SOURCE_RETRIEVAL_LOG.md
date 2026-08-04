# Source Retrieval Log

**Method:** Exa (`web_search_exa` + `web_fetch_exa`)  
**Retrieval date:** 2026-08-04 (UTC calendar date-of-record)  
**Adversarial re-check:** 2026-08-04  
**Rule:** Never invent quotations, objective numbers, or citations. Prefer first-party pages for certifications; standards bodies / government agencies / peer-reviewed / university materials for academic content. A first-party product page is **not** automatically a complete objectives document.

---

## Certification — first-party

| Source id | Publisher | Version / code | URL | Kind / confidence | Future review |
|-----------|-----------|----------------|-----|-------------------|---------------|
| `src-cisco-ccna-200-301-v1.1` | Cisco | 200-301 v1.1 | https://learningnetwork.cisco.com/s/ccna-exam-topics | official-exam-objectives / verified | **Critical:** v1.1 last test 2027-02-02; v2.0 starts 2027-02-03 |
| `src-ccna-objectives-pilot` | ReLearn | pilot | internal | internal / needs-retrieval | Remap pilot IDs ≠ official v1.1 numbering by 2026-09-30 |
| `src-aplus-objectives-v15` | CompTIA | V15 / 220-1201+1202 | https://www.comptia.org/en/certifications/a/core-1-and-2-v15/ | official-exam-objectives / verified | Watch V16 (~2027+) |
| `src-security-plus-sy0-701` | CompTIA | V7 / SY0-701 | https://www.comptia.org/en/certifications/security/ | official-vendor-docs / verified (weights only) | **Estimated** retirement ~2026 (not confirmed) |
| `src-network-plus-n10-009` | CompTIA | V9 / N10-009 | https://www.comptia.org/en/certifications/network/ | official-vendor-docs / verified (weights only) | Confirm no V10 |
| `src-cysa-plus-cs0-003` | CompTIA | V3 / CS0-003 | https://www.comptia.org/en/certifications/cybersecurity-analyst/v3/ | official-vendor-docs / verified (weights only) | **Critical:** EN 2026-12-22; JP/PT/ES **2027-03-23** |
| `src-cysa-plus-cs0-004` | CompTIA | V4 / CS0-004 | https://www.comptia.org/en/certifications/cybersecurity-analyst/v4/ | official-vendor-docs / needs-retrieval | Launched 2026-06-23; no V4 blueprint yet |
| `src-linux-plus-xk0-005` | CompTIA | XK0-005 / Obj 1.0 | CompTIA CDN objectives PDF | official-exam-objectives / verified (weights) | Watch XK0 successor |
| `src-aws-clf-c02` | AWS | CLF-C02 | AWS exam guide PDF | official-exam-objectives / verified (weights) | Watch CLF-C03 |
| `src-azure-az-900` | Microsoft | skills as of 2026-07-20 | https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900 | official-exam-objectives / verified (skill groups) | Re-fetch skills-measured |
| `src-itil4-foundation-peoplecert` | PeopleCert | ITIL 4 Foundation | PeopleCert certification page | official-vendor-docs / needs-retrieval | Official syllabus PDF **not** fully inspected |

### Notable first-party facts (flagged)

1. **CCNA v2.0 cutover** — Cisco Learning Network exam topics page (fetched 2026-08-04): last date to test v1.1 is **2027-02-02**; first date to test v2.0 is **2027-02-03**. Confirmed on adversarial re-check.
2. **CCNA pilot mismatch** — Internal `CCNA-*` IDs are not official v1.1 lines (example: official **1.9** = IPv6 address types; pilot **CCNA-1.9** = subnet calculations). Marked `mixedVersionWarning`.
3. **CySA+ CS0-003** — English retirement **2026-12-22**; Japanese/Portuguese/Spanish **2027-03-23** (corrected from an earlier incorrect 2027-03-16 draft).
4. **CySA+ CS0-004** — V4 launched **2026-06-23**. Source recorded; **no V4 blueprint** until objectives PDF ingestion. Do not mix with CS0-003.
5. **Security+ SY0-701** — CompTIA product page states retirement “usually three years after launch (**estimated 2026**)”. Keep as estimate only.
6. **A+ V15** — Still current; Core versions must not be mixed; launch 2025-03-25.
7. **AZ-900** — Study guide skills measured **as of 2026-07-20**.
8. **ITIL 4 Foundation** — Exam logistics confirmed (40q / 65% / closed book). Syllabus learning-outcome structure **not** fully inspected; blueprint `domains[]` left empty.

Domain weights were recorded for CompTIA/AWS/Cisco blueprints where first-party pages publish them. **Objective line-items were not invented** for tracks lacking a registry — those blueprints keep `objectives: []` (or empty `domains[]` for ITIL) until a PDF/line mapping batch.

---

## Academic / standards / government

| Source id | Kind | Publisher | Confidence | Notes |
|-----------|------|-----------|------------|-------|
| `src-ietf-rfc791` | standards-body | IETF | verified | IPv4 STD 5 — timeless protocol facts |
| `src-ietf-rfc8200` | standards-body | IETF | verified | IPv6 STD 86 |
| `src-ietf-rfc1918` | standards-body | IETF | **verified** | Full BCP 5 text retrieved 2026-08-04 — complete inspected standard |
| `src-nist-sp800-53r5` | standards-body | NIST | **needs-retrieval** | Metadata-only / partial — pubs page had no downloadable PDF; do not quote control IDs |

### Academic priority order (for future subjects)

1. Peer-reviewed papers  
2. University course materials / open courseware  
3. Recognized textbooks (edition + year required)  
4. Standards organizations (IETF, IEEE, ISO, NIST, …)  
5. Government scientific agencies  

Do **not** invent textbook editions or DOI citations. Create `SourceRecord` with `confidence: "needs-retrieval"` until the live page/PDF is fetched. Distinguish **complete inspected standard** from **metadata-only / partial retrieval**.

---

## Date semantics

`retrievedAt`, `lastCheckedAt`, and `reviewBy` are **UTC calendar dates** (`YYYY-MM-DD`) — date-of-record, not local wall-clock timestamps. Comparisons in code should use noon UTC (`T12:00:00Z`) when converting to `Date`.

---

## How to re-run retrieval

```text
1. Use Exa web_search_exa for the official vendor / standards page
2. Use Exa web_fetch_exa on the canonical URL
3. Update SourceRecord: retrievedAt, lastCheckedAt, version, notes, reviewBy
4. Update FUTURE_REVIEW_FLAGS when sunsets / estimated retirements appear
5. Run npm run verify:production && npm run curriculum:gap-report
```
