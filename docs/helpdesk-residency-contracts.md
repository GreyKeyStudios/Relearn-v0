# Help Desk Residency — Contracts (F5 — do not build yet)

**Status:** Spec only — Pathway F Phase **F5**  
**Persona login:** `helpdesk-trainee` (separate from student LMS account)  
**Parent:** [`computer-fundamentals-aplus-architecture.md`](computer-fundamentals-aplus-architecture.md)

Do **not** implement UI, OS simulation, or unlock flows until F5. CF and A+ courses must ship without waiting on this.

## Mastery gate (unlock — not 100% quiz scores)

| Requirement | Bar |
|-------------|-----|
| Required CF lessons (or placement skips) | Complete |
| Required A+ Core 1 + Core 2 lessons | Complete |
| Core objectives | Proficient via mastery engine |
| Required labs | Complete |
| Critical safety concepts | Passed (phishing, ESD, malware handling, privacy) |
| Oral / Professor Mode | ~8/10 on help-desk scenarios |

## Interfaces (future)

```ts
/** Planned — not in types.ts until F5 */
interface ResidencyUnlockSignal {
  learnerId: string;
  cfCompleteOrSkipped: boolean;
  aPlusCore1Proficient: boolean;
  aPlusCore2Proficient: boolean;
  requiredLabIds: string[];
  safetyConceptsPassed: string[];
  oralAssessmentPassed: boolean;
}

interface HelpdeskScenario {
  id: string;
  title: string;
  ticket: { user: string; device: string; description: string; severity: string };
  correctTechnicalPath: string[];
  communicationRubric: string[];
  documentationRubric: string[];
  escalationTriggers: string[];
  safetyConstraints: string[];
}

type HelpdeskPermission =
  | "ticket-queue"
  | "knowledge-base"
  | "remote-support"
  | "asset-inventory"
  | "email-chat"
  | "file-explorer"
  | "command-line"
  | "browser"
  | "system-info"
  | "event-logs"
  | "printer-controls"
  | "user-records-least-privilege";
```

## Simulated desktop surface

Ticket queue · knowledge base · remote support · asset inventory · email/chat · file explorer · command line · browser · system info · event logs · printer/device controls · user records (least privilege).

## Scenario themes (assess tech + order + communication + docs + safety + escalation)

Power-on · no Wi-Fi · app won’t launch · printer offline · storage full · suspicious email · forgotten password · no display · Bluetooth · slow PC · IP works / name fails · hardware not detected · lost download · update broke something · remote resource access.

## Integration points (later)

- LMS progress → `ResidencyUnlockSignal`
- Separate auth/persona for `helpdesk-trainee`
- Score against `HelpdeskScenario` rubrics
- Feed weak concepts back into adaptive review

## Near-term (pre-F5)

Ship ticket-writer / dialogue **content sims** inside CF/A+ without the full OS residency shell.
