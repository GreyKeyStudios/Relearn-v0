# A2b — Core 1 Networking Batch 2 — review report

**Date:** 2026-08-01  
**Status:** Complete — **stop before A2c**  
**Full A+ track:** remains **`planned`**  
**Hardware domain:** first-pass (unchanged)  
**CCNA C1:** remains queued / fenced

---

## Verification

| Check | Result |
|-------|--------|
| `npx tsc --noEmit` | Pass |
| `npm run verify:curriculum -- --strict-aplus` | Pass (**14** A+ topics) |
| `npm run verify:curriculum` | Pass |

No schema, objective, or prerequisite conflicts. No CCNA lesson bodies edited.

---

## Topics added (order taught)

| Topic ID | Objective | Focus |
|----------|-----------|--------|
| `ap-wireless-tech` | AP1201-2.2 | Bands/generations/channels, WPA2/WPA3 PSK vs Enterprise, Bluetooth/NFC/RFID/cellular/hotspot, symptom tradeoffs; safe worksheet |
| `ap-network-types` | AP1201-2.7 | LAN/WLAN/WAN/PAN/MAN/SAN, VPN/VLAN intro, intranet/extranet/internet, P2P vs client-server, IoT isolation; **concise** internet-link recognition (cable/DSL/fiber/satellite/cellular) |
| `ap-network-config` | AP1201-2.4 | Client IPv4/mask/GW/DNS, DHCP vs static, private/public, APIPA, MAC vs IP, IPv6 recognition, proxy/metered; `ipconfig` interpretation + compare tickets |

**Sequence preserved:**  
ports-protocols → network-services → wireless-tech → network-types → network-config

---

## Files added / modified

| File | Change |
|------|--------|
| `src/content/certifications/ap/ap-core1-networking-a2b.ts` | **Added** — A2b topics |
| `src/content/certifications/ap/ap-networking-remediation.ts` | Map 2.2 / 2.4 / 2.7 |
| `src/content/certifications/a-plus.ts` | Wire batch 2 into Networking domain |
| `src/content/knowledge/nodes.ts` | A+ mapping on `dhcp` (config topic `knowledgeNodeId`) |
| `docs/a-plus-learning-path.md` | A2b live status + A2c note |
| `.cursor/plans/cf-aplus-qa/aplus-graduation-audit.md` | Tracker update |
| `.cursor/plans/cf-aplus-qa/a2b-networking-batch2-review.md` | This report |

---

## Objective coverage (Networking)

| ID | Topic | Status |
|----|-------|--------|
| AP1201-2.1 | `ap-ports-protocols` | Live (A2a) |
| AP1201-2.2 | `ap-wireless-tech` | **Live (A2b)** |
| AP1201-2.3 | `ap-network-services` | Live (A2a) |
| AP1201-2.4 | `ap-network-config` | **Live (A2b)** |
| AP1201-2.5 | `ap-network-devices` | Deferred → A2c |
| AP1201-2.6 | `ap-soho-networks` | Deferred → A2c |
| AP1201-2.7 | `ap-network-types` | **Live (A2b)** |
| AP1201-2.8 | `ap-network-tools` | Deferred → A2c |
| AP1201-2.1–2.8 | `ap-networking-domain-review` | Deferred → A2c |

### Assessed material check

- **2.2:** Wi-Fi gens/bands/channels/SSID/security/auth, Bluetooth/NFC/RFID/cellular/hotspot, common symptoms and safe first checks — taught in lesson + guided practice + quiz/bank + worksheet.
- **2.7:** Network types and models + intro VLAN/VPN + intranet/extranet + IoT segmentation + internet connection-type **recognition** (not ISP engineering / not SOHO install) — taught + classification lab.
- **2.4:** Client addressing/config concepts + interpretation + compare exercise — taught + `ipconfig` lab. Does **not** teach SOHO router UI or Domain 5 troubleshooting procedures.

---

## Explicit deferrals

| Item | Notes |
|------|--------|
| Network devices (2.5), SOHO (2.6), tools (2.8), domain review | **A2c** |
| Deep VLAN/STP/enterprise design | CCNA / later — A+ intro only |
| Offensive wireless (deauth, cracking, unauthorized surveys) | Forbidden |
| Packet capture as required lab | Deferred |
| Gold LES | Not required |
| Full track maturity bump | Still `planned` |
| Mobile / Virt-Cloud / Core 2 / Hardware-Network TS | Out of A2b |
| CCNA C1 | Queued / fenced |

### Intentional overlap note

- CF topics remain refreshers (`cf-ethernet-vs-wifi`, `cf-what-is-a-network`, `cf-ip-and-dns-beginner`, etc.).
- Objective **2.7** includes internet connection types; A2b covers them as **recognition** inside `ap-network-types`. Deeper ISP/SOHO install stays for **A2c** (`ap-soho-networks` / devices).
- DNA: `ap-network-config` → `dhcp` node; wireless/types have no dedicated DNA node yet (supported where available).

---

## Learner-walkthrough items (Michael)

1. **Wireless:** Complete fictional SSID/band/security plan; confirm bars ≠ internet; no neighbor scanning.
2. **Network types:** Classify home / retail guest / VPN remote / SAN / extranet / WAN branch / Bluetooth PAN.
3. **Config:** Work the five broken-host tickets (APIPA, conflict, DNS, missing GW, app-only); run live `ipconfig /all` and label fields.
4. Confirm quiz questions do not assume SOHO UI or Domain 5 procedures.
5. Spot-check remediation links from a wrong 2.2 / 2.4 / 2.7 answer → correct topic.

---

## Recommended A2c sequence (exact)

```text
ap-network-devices     (AP1201-2.5)
→ ap-soho-networks     (AP1201-2.6)
→ ap-network-tools     (AP1201-2.8)
→ ap-networking-domain-review  (AP1201-2.1–2.8 integration)
```

**Stop gate:** Do not start A2c until Michael authorizes.

---

## Stop

A2b complete. No A2c content authored. Full A+ track remains **Planned**. CCNA C1 remains queued and fenced.
