# Reference Experiences

**Purpose:** Canonical examples of Bridge-quality **learning experiences**. New and revised topics ask:

> **Does this feel as good as the reference experience?**

Do not reinvent the interaction pattern per topic — match the bar, then specialize the anchor and content.

---

## Active references

| ID | Topic | Cert | Status | Why this reference |
|----|-------|------|--------|-------------------|
| `ccna:osi-model` | OSI Model | CCNA | **Approved** | Pinned OSI stack + 49 cards; novice entry; Permission To Defer |
| `ccna:tcp-ip-model` | TCP/IP Model | CCNA | **Approved** | 4-layer anchor; 25 cards incl. OSI compare |
| `ccna:ethernet` | Ethernet | CCNA | **Ready for walkthrough** | L2 focus; frames, switches, device drill (18 cards) |

## Pattern for future topics

1. Declare the learner's **anchor** (see [`learning-experience-standard.md`](learning-experience-standard.md))
2. Storyboard `experience.screens[]` with LXA — not prose in `lesson.content`
3. Use `ExperiencePlayer` with persistent anchor + swipe cards
4. Include `memory` screens where mnemonics exist
5. Attach terminology to visuals (`media` on teach/flow screens)

Legacy `lesson.steps[]` remains supported for topics not yet migrated to LES.

---

## Reference experience checklist (`ccna:osi-model`)

- [x] **LES-0:** Anchor (OSI stack) pinned on every card; highlight moves
- [x] **LES-1:** Stack never unmounts during lesson
- [x] **LES-2:** Progressive highlight across layer blocks
- [x] **LES-3:** One idea per card; short headlines
- [x] **LES-4:** PDU terms on flow diagram with icons
- [x] **LES-6:** APSTNDP and PDNTSPA on dedicated memory cards
- [x] **LES-8:** Layer checkpoints after teach blocks
- [x] **BLS-1:** Encapsulation and PDU checkpoints after those teach cards
- [x] **BLS-10:** Opens with why OSI matters
- [ ] **Oral mastery:** Owner passes ~8/10 oral-style check without cramming (see BLS Oral Mastery Gate)

---

## Reference experience checklist (`ccna:tcp-ip-model`)

- [x] **LES-0:** Anchor (4-layer TCP/IP stack) pinned; highlight moves per layer block
- [x] **LES-1:** Stack never unmounts during lesson
- [x] **LES-2:** Progressive highlight across Application → Network Access
- [x] **LES-3:** One idea per card; 23 screens (~half OSI depth)
- [x] **LES-6:** ATIN memory card (top to bottom)
- [x] **LES-8:** Layer checkpoints after teach blocks (`tcp-q1`–`tcp-q5`)
- [x] **LES-11:** ARP deferred to Ethernet; frame/MAC terms with popovers
- [x] **BLS-10:** Opens with why TCP/IP matters (Internet's practical model)
- [ ] **Michael walkthrough:** Lesson + 10-q quiz + `tcpip-layer-map` drill — sign off in reflection

---

## Reference experience checklist (`ccna:ethernet`)

- [x] **LES-0:** OSI stack pinned with Layer 2 highlight progression
- [x] **LES-8:** Checkpoints after teach blocks (`ethernet-q1`–`ethernet-q5`)
- [x] **LES-11:** ARP taught (TCP/IP deferral payoff); frame/MAC terms
- [x] **BLS-10:** Opens with why Ethernet matters after models
- [ ] **Michael walkthrough:** Lesson + 8-q quiz + device + cable drills

---

## Planned references (post-pilot)

| ID | Topic | Anchor |
|----|-------|--------|
| `ccna:subnetting` | Subnetting | Network diagram |
| `ccna:vlans` | VLANs | Switch with colored ports |
