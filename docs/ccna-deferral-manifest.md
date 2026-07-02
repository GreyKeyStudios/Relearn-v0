# CCNA Deferral & Relocation Manifest

**Purpose:** Track every assessment item removed from one topic and staged in another. No silent deletions — exam coverage moves with the lesson that teaches it.

**Rule:** See [`definition-of-done.md`](definition-of-done.md) § Relocation rule.

---

## How to read this table

| Column | Meaning |
|--------|---------|
| **Concept** | What is being deferred or relocated |
| **From topic** | Topic where it was incorrectly tested or prematurely introduced |
| **To topic** | Topic that teaches it (or planned gap) |
| **Wave** | CCNA learning-path wave |
| **Question IDs** | Quiz/bank/flashcard IDs affected |
| **Status** | `relocated` · `staged` · `gap` (destination topic not ready) · `taught` (now in LES) |

---

## Wave 1 — `tcp-ip-model` relocations (2026-07 audit)

| Concept | From | To | Wave | Question IDs | Status |
|---------|------|-----|------|--------------|--------|
| ARP, IP-to-MAC lookup | `tcp-ip-model` | `ethernet` | 1 | (removed from tcp hub/keyFacts; was in old bank) | taught in ethernet LES |
| Ethernet frame anatomy | `tcp-ip-model` | `ethernet` | 1 | — | taught in ethernet LES |
| FTP ports 20/21 | `tcp-ip-model` | `dhcp` or future ip-services | 4 | `tcp-b*` (removed) | gap — stage in dhcp/dns bank |
| DHCP ports 67/68, DORA | `tcp-ip-model` | `dhcp` | 4 | removed from tcp bank | staged when dhcp audited |
| SNMP UDP 161 | `tcp-ip-model` | `network-security` / `automation-basics` | 5–6 | removed from tcp bank | gap — add port drill |
| TFTP UDP 69 | `tcp-ip-model` | `dhcp` or future ip-services | 4 | removed from tcp bank | gap |
| NTP UDP 123 | `tcp-ip-model` | `dhcp` or future ip-services | 4 | removed from tcp bank | gap |
| TCP window size | `tcp-ip-model` | deferred (optional CCNA depth) | — | removed from tcp bank | gap — teach or defer in LES |
| TCP RST flag | `tcp-ip-model` | deferred (optional CCNA depth) | — | removed from tcp bank | gap |
| PPP on WAN serial | `tcp-ip-model` | future WAN topic | — | flashcard note only (`tcp-f4c`) | gap — no WAN topic yet |

### TCP/IP bank after relocation (11 items — lesson-aligned)

Retained IDs: `tcp-b1`, `tcp-b2`, `tcp-b4`, `tcp-b5`, `tcp-b6`, `tcp-b7`, `tcp-b8`, `tcp-b9`, `tcp-b11`, `tcp-b13`, `tcp-b16`.

### OSI → ethernet relocations (2026-07-02)

| Concept | From | To | Question IDs | Status |
|---------|------|-----|--------------|--------|
| CRC / FCS layer | `osi-model` | `ethernet` | removed `osi-b10`, `osi-b20` → added `ethernet-b21`, `ethernet-b22` | relocated |

### ip-ranges bank trim (20 → 15)

Removed: `ip-ranges-b11` (CGN), `b12` (Class E), `b13` (0.0.0.0/0), `b14` (limited broadcast), `b16` (misleading public trap). Staged for later: b11/b13 → `nat`/`routing-fundamentals`; b14 → `dhcp`.

### ipv6-basics bank trim (20 → 15)

Removed: `b5` (header size), `b9` (EUI-64), `b13` (solicited-node), `b18` (ff02::1), `b20` (6to4). Simulator: replaced `ipv6-4`, `ipv6-9` drill items.

### ethernet bank trim (20 → 11)

Removed: `b2` (min payload), `b3`/`b13` (Auto-MDIX), `b4` (EtherType), `b7` (100m limit), `b8`/`b14` (64-byte frame), `b15` (multicast MAC), `b17` (10GBASE-SR), `b19` (preamble/SFD), `b20` (late collisions/duplex mismatch). Hub: removed VLAN/802.1Q/auto-MDIX from traps.

### ipv4-addressing bank trim (20 → 6)

Removed: `b1`–`b3`, `b5`, `b7`–`b8`, `b11`, `b13`–`b20` (subnetting, classful, NAT, binary AND, limited broadcast — deferred or belong in `subnetting`/`nat`). Relocated concepts staged in `subnetting` bank. Hub: guided example no longer tests network/broadcast before subnetting lesson.

### subnetting bank trim (40 → 30)

Removed: `b5`, `b17`–`b20`, `b22`–`b24`, `b32`, `b34`–`b35` (cross-octet `/22`–`/23` and parent `/16` scale — deferred in LES). Hub: real-world scenario uses `/24` → four `/26` blocks.

### wireless-basics bank trim (20 → 14)

Removed: `b6` (RSSI), `b9` (cell overlap), `b13` (IBSS), `b14` (802.11g rate), `b18`–`b20` (legacy rates, channel bonding, ESS). Flashcard `f4c` → CSMA/CA. Simulator: replaced `wifi-6`, `wifi-9`.

---

## Wave 1 — cross-topic deferrals (from LES `laterLearn`)

| Concept | Introduced in | Taught in | Status |
|---------|---------------|-----------|--------|
| CRC / FCS | `osi-model` (mention) | `ethernet` | verify ethernet bank does not test before teach |
| 802.1Q VLAN tags | `ethernet` LES defer | `trunking` | Wave 2 |
| /22–/23 cross-octet, /31–/32 | `subnetting` LES defer | advanced subnetting (TBD) | gap |
| WLC vs autonomous AP detail | `wireless-basics` LES defer | `network-access` follow-on | Wave 2 partial |
| EUI-64 from MAC | `ipv6-basics` LES defer | optional depth | gap |

---

## Gaps to close before CCNA exam-ready

These CCNA-relevant items have **no dedicated topic yet**. Stage questions in the nearest wave topic or add topics:

1. **FTP / TFTP / NTP ports** — add to `dhcp` + `dns` banks or expand ip-services domain
2. **PPP WAN** — add WAN topic or fold into routing wave
3. **SNMP port drills** — add to `network-security` or `automation-basics`
4. **TCP window / flags deep dive** — optional LES card in `tcp-ip-model` or routing topic

---

## Changelog

| Date | Change |
|------|--------|
| 2026-07-02 | Pass 2: ethernet 20→11, ipv4 20→6, subnetting 40→30 bank trims |
| 2026-07-02 | Pass 1: DoD + manifest; OSI/TCP/IP/ip-ranges/ipv6/wireless alignment |
