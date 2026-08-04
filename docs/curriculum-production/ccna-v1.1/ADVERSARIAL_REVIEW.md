# Adversarial Review — PR #32 CCNA 200-301 v1.1 Official Ingestion

**Reviewer:** Cursor cloud agent  
**Branch:** `cursor/ccna-v11-objective-ingestion-b8ad`  
**Official PDF re-fetched:** 2026-08-04  
**PDF SHA-256 (fresh download):** `da15a22dda1afb61af1a14a53264eea6b87d81e8a3036dbaa69cb1b6260bebd5`  
**Verdict:** Pass after defect fixes (no lesson/quiz rewrites; progress keys unchanged)

---

## Scope checked

1. Complete official Cisco PDF (4 pages) vs all **111** stored numbered lines and hierarchy  
2. PDF hash + source provenance  
3. All **40** pilot-ID mappings and status classifications  
4. Critical numbering collisions (`CCNA-1.9`, `CCNA-3.5`)  
5. `CCNA-4.3` left `unable to map`  
6. **21/53** uncovered-parent calculation  
7. Live progress keys remain pilot `CCNA-*`

---

## Severity-ranked findings

### Critical — none remaining

| ID | Finding | Resolution |
| --- | --- | --- |
| — | PDF ↔ registry: 111/111 lines, exact text, order, parent/child, IDs, domain names/weights | Confirmed clean |
| — | SHA-256 matches recorded constant + source catalog | Confirmed |
| — | No v2.0 IDs in v1.1 registry/blueprint | Confirmed |
| — | Live `ccna.ts` / pilot catalog / mastery store untouched vs `dev` | Confirmed |

### High — fixed

| ID | Finding | Fix |
| --- | --- | --- |
| `validator-line-count` | Production validator only required `lines.length < 53` (too weak for a claimed complete 111-line ingestion) | Require **exactly 111** lines; add hierarchy + v2.0-leak guards |

### Medium — fixed

| ID | Finding | Fix |
| --- | --- | --- |
| `exact-CCNA-3.1` | Status `exact match` despite wording difference (“routing table components” vs “the components of routing table”) | → `partial match` |
| `exact-CCNA-5.2` | Status `exact match` for ACL abbreviation vs “access control lists” | → `partial match` |
| `status-CCNA-2.6` | Status `narrower` while verb differs (Configure vs Interpret Rapid PVST+) | → `partial match` |
| `status-CCNA-3.5` | Status `narrower` for Describe-adjacency under Configure OSPFv2 parent (numbering collision handling was correct) | → `partial match`; keep non-map to official 3.5 FHRP |

### Low — documentation tightened

| ID | Finding | Fix |
| --- | --- | --- |
| `notes-CCNA-1.7` | Combined map to 1.7+1.9 understated that official 1.7 is private-IPv4-only | Notes clarified |

### Info — verified OK

| ID | Finding |
| --- | --- |
| `collisions` | `CCNA-1.9` → official **1.6** (not 1.9 IPv6 types); `CCNA-3.5` → official **3.4** (not 3.5 FHRP) |
| `unable-CCNA-4.3` | Correctly unmapped; official 4.3 is explain-role DHCP/DNS only |
| `coverage-21/53` | Recomputed: uncovered parents = **21**; covered = **32** |
| `progress-keys` | All live tags remain `CCNA-*` (38 distinct pilots used in content) |
| `status-counts-after-fix` | exact 10 · narrower 19 · partial 9 · combines 1 · unable 1 |

---

## PDF ↔ registry audit summary

| Check | Result |
| --- | --- |
| Fresh PDF page count | 4 |
| SHA-256 | Match |
| Parsed numbered lines (excl. `x.0` domain headers) | 111 |
| Stored lines | 111 |
| Text mismatches | 0 |
| Order divergences | 0 |
| Parent/depth mismatches | 0 |
| Duplicate numbers | 0 |
| Domain weight sums | 20+20+25+10+15+10 = 100 |

---

## Mapping decisions upheld

- **Do not force mappings for completeness** — `CCNA-4.3` remains unable to map  
- Critical collisions documented and correctly avoided  
- Alias layer only; no silent rename of persisted keys  

---

## Verification rerun (post-fix) — all passed

| Check | Result |
| --- | --- |
| `npm run curriculum:ccna-v11-report` | OK (21/53 uncovered) |
| `npm run verify:production` | OK (0 errors) |
| `npm run curriculum:gap-report` | OK |
| `verify:curriculum --strict-ccna --strict-ccna-objectives` | OK |
| `verify:curriculum --strict-pedagogy` | OK |
| `verify:curriculum --strict-experience` | OK |
| `npx tsc --noEmit` | OK |
| `npm run build` | OK |
| `playwright e2e/learner-loop.spec.ts` | 1 passed |
