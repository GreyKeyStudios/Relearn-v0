# A9c — Mobile Security Troubleshooting Review

**Status:** Complete — stop before AP1202-3.4 and Operational Procedures  
**Topic:** `ap-ts-mobile-security`  
**Objective:** AP1202-3.3  
**Track maturity:** Planned

## Scope delivered

- Defensive symptom triage across app, account, SIM/carrier, permissions, profiles/MDM, certificates/networks, rooted/jailbroken state, and lost/stolen devices
- Evidence, ownership, privacy, containment, escalation, remediation, verification, and documentation boundaries
- Known-clean-device account response and personal-safety-first stalkerware guidance
- Fictional Mobile Security Triage Desk only; no live malware, tracking, bypass, or unsupported modification

## Verification

| Check | Result |
|---|---|
| `npx tsc --noEmit` | Pass |
| `npm run verify:curriculum -- --strict-aplus` | Pass — 59 topics, no CES warnings |
| `npm run verify:curriculum` | Pass |

## Gate

Software Troubleshooting remains incomplete. Full A+ remains Planned. CCNA C1 and gold LES remain fenced.

**Next when authorized:** `ap-ts-pc-security` — AP1202-3.4.
