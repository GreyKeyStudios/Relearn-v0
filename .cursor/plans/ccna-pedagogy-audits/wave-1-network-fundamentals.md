# Wave 1 — Network Fundamentals

**Domain ID:** `network-fundamentals`  
**Wave:** 1  
**Status:** In progress

| Topic | BLS | Path OK? | Teach-before-test? | Cognitive OK? | Accuracy OK? | Reference quality? | Fixes for P3-CCNA |
|-------|-----|----------|--------------------|--------------|--------------|--------------------|-------------------|
| `osi-model` | PASS | PASS | PASS | PASS | PASS | **Approved** | Shipped — reference experience |
| `tcp-ip-model` | PASS | PASS | PASS | PASS | PASS | **Aced — minor tweaks pending** | Michael pass; optional second pass for notes |
| `ethernet` | PASS | PASS | PASS | PASS | PASS | **Ready for walkthrough** | LES medium shipped (18 cards, 8-q quiz, device + cable drills) |
| `ipv4-addressing` | pending | pending | pending | pending | pending | vs OSI | Add prereq `osi-model` |
| `subnetting` | pending | PASS | pending | pending | pending | vs OSI | prereq set |
| `ip-ranges` | pending | pending | pending | pending | pending | vs OSI | Add prereqs |
| `ipv6-basics` | pending | pending | pending | pending | pending | vs OSI | Add prereq |
| `wireless-basics` | pending | pending | pending | pending | pending | vs OSI | Add prereq `ethernet` |

## Path designer notes

- Order in `ccna.ts` matches canonical path (osi → tcp-ip → ethernet → ipv4 …)
- See [`docs/ccna-learning-path.md`](../../docs/ccna-learning-path.md)

## Lesson designer notes (osi-model)

- **BLS-1 FAIL:** PDU content tested before encapsulation step (fixed in platform + content)
- **BLS-5:** Checkpoints must bind to `osi-q4` (layers) and `osi-q5` (encapsulation) on correct steps via `lessonCheckpoints`

## Cognitive reviewer notes (osi-model)

- **BLS-2 FAIL:** Paragraph 2 listed all 7 layer functions at once — split across steps
- **BLS-2:** Encapsulation + PDUs must be separate step from layer names

## SME notes (osi-model)

- ICMP L3, TLS L6, mnemonic APSTNDP — accurate
- Simulator after lesson — OK (BLS-7)
