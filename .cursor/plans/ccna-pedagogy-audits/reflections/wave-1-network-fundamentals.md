# Learner reflection — Network Fundamentals (Wave 1)

**Wave:** 1  
**Date:** 2026-06-28  
**Domain ID:** `network-fundamentals`  
**Walkthrough result:** PARTIAL — OSI experience v1 reviewed; Phase 4.9.1 revisions applied

## Questions

### Where did I hesitate?

- **Card 3 (`intro-one-idea`):** Meta card about highlight moving — unclear what glows next without prior OSI knowledge.
- **L2 block:** Jumped to frames, MAC, LAN, switch, NIC, forwarding without defining terms first.
- **L3:** Too thin — IP, routers, ping needed more setup for a novice.
- **L4 hero:** TCP vs UDP compared before explaining what each protocol is.
- **L5:** "Tears down" wording awkward; "dialogue control" unclear; "Session is not TCP" confusing without context.
- **L6:** TLS acronym not expanded; unclear if encryption goes deeper later.
- **L7:** Protocol list assumes familiarity with HTTP/DNS/SMTP.
- **PDU:** Good ladder but "PDU" not spelled out as Protocol Data Unit.

### What surprised me?

- **Pinned stack + glow continuity works.** Never lost place in the model — the B+ anchor design delivers.
- Card rhythm and swipe feel right for mobile — closer to interactive slides than a scroll wall.
- Mnemonic cards (APSTNDP / PDNTSPA) felt like hooks, not footnotes.

### What felt smooth?

- Physical layer block (cable, computer → switch flow, road analogy).
- Encapsulation nested-envelope visual.
- PDU flow diagram after encapsulation taught.
- Layer 2 checkpoint question type and timing (after teach block).

### What did I immediately forget?

- Session vs TCP distinction on first read.
- TLS meaning without acronym expansion.

### What explanation made something click?

- "The stack stays pinned — only the highlight moves" (once preview names Physical as next).
- Permission to defer — "That's enough for today" reduces anxiety about frame anatomy and handshakes.

## Patterns

- **Continuity works; vocabulary pacing does not.** Anchor-first LES is validated; novice entry requires define-before-use + forward deferrals to later topics (`ethernet`, `tcp-ip-model`, `ipv4-addressing`).
- ReLearn CCNA is novice-entry by design (`ccna-learning-path.md` first-30-min path) — gap was content execution, not wrong audience.

## Phase 4.9.1 fixes applied

- Intro previews Physical glow; permission-to-defer card added.
- L2: +4 teach cards (LAN, switch, MAC/NIC, frame) before synthesis.
- L3: +2 teach cards (local vs between networks, IP + ICMP/ping).
- L4: split TCP and UDP into separate teach cards before compare.
- L5: wording rewrites (hero, teach, misconception).
- L6: dedicated TLS card with acronym expansion.
- L7: defer card + spelled-out protocol acronyms.
- PDU headline spells out Protocol Data Unit.
- Platform: `ExperienceTerm` tiers, `TermPopover`, `LaterLearnBlock`.

## Phase 4.9.2 polish (2026-06-28)

- Removed "glow" / next-card preview wording — more professional layer titles
- Tappable term chips for bits, network segment; all tiers open popover
- MAC example `00:1A:2B:3C:4D:5E`, IP example `192.168.1.10` in popovers
- Graded quiz expanded from 6 → 16 questions (all layers + PDU + encapsulation)

## Phase 4.9.3 oral-quiz refinement (2026-06-28)

**Trigger:** ChatGPT oral-style CCNA assessment (~8.2/10) — strong recall, gaps on Transport vs Network, frame⊃packet nesting, down-stack story, cable = L1.

**Content fixes:**
- `intro-why` — troubleshooting map + common language
- `l4-why-transport` — Network where / Transport how (shipping analogy)
- `l1-l2-cable` — bad cable = Layer 1 misconception
- `encapsulation-nested` + `encapsulation-webpage` — nested PDUs + webpage down-stack story
- Graded quiz +3 (`osi-q17`–`osi-q19`)

**Process:** Oral Mastery Gate added to [`docs/bridge-learning-standard.md`](../../../docs/bridge-learning-standard.md) and reflection template.

### Oral mastery re-check (pending)

- [ ] Re-walk ~48 cards + 19-q quiz + drill
- [ ] Oral check Q6–Q8, Q10, grandma bonus — target ~8/10 without cramming

## OSI sign-off

- [x] Michael walkthrough PASS — lesson, 16-question quiz, OSI layer sorter drill (2026-06-28)
- [x] Reference experience approved for Wave 1 comparison baseline

## TCP/IP model walkthrough (pending)

**Topic:** `tcp-ip-model`  
**Date:** _Michael to complete_  
**Status:** Ready for walkthrough — 23-card experience, 10-question quiz, `tcpip-layer-map` drill

### Walkthrough steps

1. Clear progress: `sessionStorage.removeItem('lesson-step:ccna:tcp-ip-model'); location.reload();`
2. **Lesson** — `/cert/ccna/lesson/tcp-ip-model` — swipe all 23 cards; confirm 4-layer anchor highlight moves
3. **Quiz** — 10 questions; handshake (q8) and ports (q9) should feel taught in lesson
4. **Drill** — `tcpip-layer-map` assignment; wrong rows red, correct green; no OSI numbers in labels

### Focus areas

- 4-layer anchor feels like OSI sequel (same rhythm, smaller)
- OSI mapping card clear after OSI lesson
- TCP handshake taught before quiz q8
- ARP deferred to Ethernet — not in drill
- Drill: no OSI numbers in item labels; wrong rows show red

### Sign-off

- [ ] Lesson + quiz + drill PASS
- [ ] Ready for `ethernet` topic

## TCP/IP model walkthrough (2026-06-28)

**Topic:** `tcp-ip-model`  
**Result:** **PASS (aced)** — Michael first walkthrough  
**Status:** Approved — Phase 4.9.4 handshake labels + OSI/TCP/IP compare cards (2026-06-28)

### Notes (optional second pass)

- _Michael: add any further minor tweaks here if needed_

## Ethernet model walkthrough (pending)

**Topic:** `ethernet`  
**Status:** Ready — 18-card experience, 8-question quiz, device layer drill + cable drill

### Walkthrough steps

1. Clear progress: `sessionStorage.removeItem('lesson-step:ccna:ethernet'); location.reload();`
2. **Lesson** — `/cert/ccna/lesson/ethernet` — 18 cards; Layer 2 anchor; ARP taught
3. **Quiz** — 8 questions
4. **Drills** — `ethernet-device-drill` then `ethernet-cable-sim`

### Focus areas

- Frames, MAC, broadcast FF:FF:FF:FF:FF:FF
- Hub vs switch; device layers (hub L1, switch L2, router L3)
- ARP payoff from TCP/IP deferral
- Duplex / FCS taught before quiz q3–q4

### Sign-off

- [ ] Lesson + quiz + drills PASS
- [ ] Ready for `ipv4-addressing`

