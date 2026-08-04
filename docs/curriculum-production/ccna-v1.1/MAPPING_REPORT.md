# CCNA Pilot → Official 200-301 v1.1 Mapping Report

Generated: 2026-08-04T04:59:56.434Z

## Source provenance

- Exam: **200-301** / objectives version **v1.1**
- Official PDF: https://learningcontent.cisco.com/documents/marketing/exam-topics/200-301-CCNA-v1.1.pdf
- PDF SHA-256: `da15a22dda1afb61af1a14a53264eea6b87d81e8a3036dbaa69cb1b6260bebd5`
- Retrieved (UTC calendar): 2026-08-04
- Extracted text artifact: `docs/curriculum-production/ccna-v1.1/200-301-CCNA-v1.1.extracted.txt`
- Machine-readable manifest: `docs/curriculum-production/ccna-v1.1/pilot-to-v1.1.mapping.json`

## Inventory

- Official numbered lines (parents + sub-bullets): **111**
- Official parent objectives: **53**
- Production atomic records: **111**
- Pilot IDs mapped: **40**

### Mapping status counts

| Status | Count |
| --- | ---: |
| combines multiple official objectives | 1 |
| exact match | 10 |
| narrower than official objective | 19 |
| partial match | 9 |
| unable to map | 1 |

## Human-readable mapping table

| Pilot ID | Pilot text | Status | Official number(s) | Live topics | Quiz/bank tags | Notes |
| --- | --- | --- | --- | --- | ---: | --- |
| `CCNA-1.1` | Explain the role and function of network components | exact match | 1.1 | osi-model, tcp-ip-model | 15 | Wording matches official 1.1 parent line. |
| `CCNA-1.2` | Describe characteristics of network topology architectures | exact match | 1.2 | osi-model | 8 | Wording matches official 1.2 parent line. |
| `CCNA-1.3` | Compare physical interface and cabling types | exact match | 1.3 | osi-model, ethernet | 13 | Wording matches official 1.3 parent line. |
| `CCNA-1.4` | Identify interface and cable issues | narrower than official objective | 1.4 | tcp-ip-model, ethernet | 9 | Pilot omits official parenthetical detail (collisions, errors, mismatch duplex, and/or speed). |
| `CCNA-1.5` | Compare TCP to UDP | exact match | 1.5 | tcp-ip-model, ethernet | 8 | Wording matches official 1.5. |
| `CCNA-1.6` | Configure and verify IPv4 addressing and subnetting | exact match | 1.6 | ethernet, ipv4-addressing | 5 | Wording matches official 1.6. |
| `CCNA-1.7` | Describe IPv4 and IPv6 address types | combines multiple official objectives | 1.7, 1.9 | ipv4-addressing, ip-ranges | 20 | Pilot text 'Describe IPv4 and IPv6 address types' spans official 1.7 and 1.9. Official 1.7 is private-IPv4-addressing only (not a general IPv4 address-types catalog); official 1.9 is IPv6 address types. Combined alias is intentional — not an exact match to either line alone. |
| `CCNA-1.8` | Verify IP parameters for Client OS | narrower than official objective | 1.10 | ipv4-addressing | 3 | Pilot number 1.8 is NOT official 1.8 (IPv6 addressing). Closest official line is 1.10; pilot omits OS list (Windows, Mac OS, Linux). |
| `CCNA-1.9` | Perform subnet calculations | narrower than official objective | 1.6 | subnetting | 15 | CRITICAL numbering mismatch: pilot CCNA-1.9 is subnet calculations; official 1.9 is IPv6 address types. Maps as a narrower slice of official 1.6 (IPv4 addressing and subnetting). |
| `CCNA-1.10` | Configure IPv4 addressing and subnetting | narrower than official objective | 1.6 | subnetting | 23 | Pilot number 1.10 is NOT official 1.10 (client OS IP parameters). Text is a configure-only slice of official 1.6 (omits verify). |
| `CCNA-1.11` | Describe private IPv4 addressing | exact match | 1.7 | ipv4-addressing, ip-ranges | 8 | Text matches official 1.7; pilot numbering does not match official numbering. |
| `CCNA-1.12` | Configure IPv6 addressing | narrower than official objective | 1.8 | ipv6-basics | 12 | Closest official line is 1.8; pilot omits verify and prefix language. |
| `CCNA-1.13` | Describe wireless principles | exact match | 1.11 | ipv6-basics, wireless-basics | 26 | Text matches official 1.11; pilot numbering does not match official numbering. |
| `CCNA-2.1` | Configure and verify VLANs | narrower than official objective | 2.1 | — | 0 | Pilot omits 'normal range spanning multiple switches' and sub-bullets. Unused by live topics today. |
| `CCNA-2.2` | Configure interswitch connectivity | narrower than official objective | 2.2 | — | 0 | Pilot omits verify and trunk/802.1Q/native VLAN detail. Unused by live topics today. |
| `CCNA-2.3` | Configure Layer 2 discovery protocols | narrower than official objective | 2.3 | switching | 6 | Pilot omits verify and explicit CDP/LLDP naming. |
| `CCNA-2.4` | Configure and verify EtherChannel | narrower than official objective | 2.4 | switching | 5 | Pilot omits Layer 2/Layer 3 and LACP specificity. |
| `CCNA-2.5` | Describe STP and RSTP | partial match | 2.5 | vlans | 7 | Pilot 'Describe STP and RSTP' vs official 'Interpret basic operations of Rapid PVST+ Spanning Tree Protocol' — related but different verb/scope. |
| `CCNA-2.6` | Configure root bridge and port roles | partial match | 2.5 | vlans, trunking | 12 | Pilot number 2.6 is NOT official 2.6 (wireless architectures). Root bridge/port roles relate to official 2.5 / 2.5.a, but pilot verb is Configure while official 2.5 is Interpret — partial, not a narrower same-verb slice. |
| `CCNA-2.7` | Compare Cisco Wireless architectures | partial match | 2.6 | trunking | 5 | Pilot 'Compare Cisco Wireless architectures' vs official 2.6 'Describe Cisco Wireless Architectures and AP modes'. |
| `CCNA-2.8` | Describe physical infrastructure connections | narrower than official objective | 2.7 | stp | 6 | Pilot number 2.8 is NOT official 2.8 (device management access). Generic 'physical infrastructure connections' is narrower than official WLAN-component 2.7. |
| `CCNA-2.9` | Describe wireless LAN access | partial match | 2.9 | stp | 5 | Pilot 'Describe wireless LAN access' is vaguer than official GUI client-connectivity interpretation objective 2.9. |
| `CCNA-3.1` | Interpret routing table components | partial match | 3.1 | routing-fundamentals | 6 | Same subject as official 3.1, but wording differs (pilot 'Interpret routing table components' vs official 'Interpret the components of routing table') — not an exact match. |
| `CCNA-3.2` | Determine how a router makes forwarding decisions | narrower than official objective | 3.2 | routing-fundamentals | 5 | Pilot omits official trailing 'by default'. |
| `CCNA-3.3` | Configure and verify IPv4 and IPv6 static routing | exact match | 3.3 | static-routes | 6 | Wording matches official 3.3. |
| `CCNA-3.4` | Configure single-area OSPFv2 | narrower than official objective | 3.4 | static-routes | 5 | Pilot omits verify. |
| `CCNA-3.5` | Describe OSPF neighbor adjacencies | partial match | 3.4 | ospf-basics | 7 | CRITICAL numbering mismatch: pilot CCNA-3.5 is OSPF neighbor adjacencies; official 3.5 is first hop redundancy protocols (FHRP). Relates to official 3.4.a under 3.4, but pilot verb is Describe while parent 3.4 is Configure and verify — partial, not a silent remap to FHRP. |
| `CCNA-3.6` | Configure and verify OSPF neighbor relationships | narrower than official objective | 3.4 | ospf-basics | 6 | No official 3.6. OSPF neighbor relationships are under official 3.4. |
| `CCNA-3.7` | Configure and verify NAT | narrower than official objective | 4.1 | nat | 6 | Domain misnumbering: NAT is official IP Services 4.1 (inside source NAT using static and pools), not IP Connectivity 3.x. |
| `CCNA-3.8` | Configure and verify NTP | narrower than official objective | 4.2 | nat | 5 | Domain misnumbering: NTP is official 4.2; pilot omits client/server mode detail. |
| `CCNA-4.1` | Configure and verify DHCP on a router | partial match | 4.6 | dhcp | 6 | Pilot 'Configure and verify DHCP on a router' is not an official line. Closest official configure objective is 4.6 (DHCP client and relay); 4.3 covers DHCP/DNS roles. |
| `CCNA-4.2` | Describe DNS lookup operation | narrower than official objective | 4.3 | dhcp | 5 | DNS lookup is only part of official 4.3 (role of DHCP and DNS). |
| `CCNA-4.3` | Configure DNS on a Cisco router | unable to map | — | dns | 6 | No official v1.1 line for 'Configure DNS on a Cisco router'. Official 4.3 is explain-role only. Left unmapped rather than inventing alignment. |
| `CCNA-4.4` | Describe SNMP in network operations | partial match | 4.4 | dns | 5 | Describe vs official Explain; same SNMP subject. |
| `CCNA-5.1` | Define key security concepts | narrower than official objective | 5.1 | acls | 7 | Pilot omits official parenthetical (threats, vulnerabilities, exploits, and mitigation techniques). |
| `CCNA-5.2` | Configure and verify ACLs | partial match | 5.6 | acls | 6 | Pilot 'Configure and verify ACLs' abbreviates official 5.6 'Configure and verify access control lists'. Pilot number 5.2 is NOT official 5.2 (security program elements). |
| `CCNA-5.3` | Configure Layer 2 security features | narrower than official objective | 5.7 | network-security | 7 | Pilot number 5.3 is NOT official 5.3 (local passwords). Maps to official 5.7; omits DHCP snooping / DAI / port security list. |
| `CCNA-5.4` | Describe wireless security protocols | narrower than official objective | 5.9 | network-security | 6 | Pilot number 5.4 is NOT official 5.4 (password policy). Maps to official 5.9; omits WPA/WPA2/WPA3 list. |
| `CCNA-6.1` | Explain how automation impacts network management | exact match | 6.1 | automation-basics | 6 | Wording matches official 6.1. |
| `CCNA-6.2` | Compare traditional networks with controller-based networking | exact match | 6.2 | automation-basics | 5 | Wording matches official 6.2. |

## Critical numbering mismatches

- `CCNA-1.9` (subnet calculations) ≠ official **1.9** (IPv6 address types) → maps to **1.6**
- `CCNA-3.5` (OSPF neighbor adjacencies) ≠ official **3.5** (FHRP) → maps to **3.4**
- Several pilot 3.x service topics (NAT/NTP) are official **4.x** IP Services lines

## Rules honored

- No silent rename of live/persisted pilot IDs
- v2.0 not ingested; Feb 2027 cutover remains a future-review flag
- `unable to map` used instead of inventing coverage (`CCNA-4.3`)
