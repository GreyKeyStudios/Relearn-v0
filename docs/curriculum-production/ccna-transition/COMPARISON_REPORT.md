# CCNA 200-301 Dual-Version Transition Report

Generated: 2026-08-04T04:47:30.867Z

## Version windows (configurable)

- **v1.1** active through **2027-02-02** (inclusive)
- **v2.0** begins **2027-02-03** (inclusive)
- Config module: `src/content/production/ccna-transition/dates.ts`

## Provenance

| Version | PDF | SHA-256 | Parents |
| --- | --- | --- | ---: |
| v1.1 | https://learningcontent.cisco.com/documents/marketing/exam-topics/200-301-CCNA-v1.1.pdf | `da15a22dda1afb61af1a14a53264eea6b87d81e8a3036dbaa69cb1b6260bebd5` | 53 |
| v2.0 | https://learningcontent.cisco.com/documents/marketing/exam-topics/200-301_CCNA_v2.0_Exam_Topics_PDF.pdf | `5f0bf00d2d459c1f2b52c54c9680fd7c5bb261b6842641a1f445fb0a0ca9923e` | 29 |

## Classification counts

| Side | Classification | Count |
| --- | --- | ---: |
| v1.1 | expanded | 10 |
| v1.1 | moved | 8 |
| v1.1 | reduced | 2 |
| v1.1 | removed | 14 |
| v1.1 | requires greater practical depth | 12 |
| v1.1 | unable to determine | 6 |
| v1.1 | unchanged | 1 |
| v2.0 | expanded | 11 |
| v2.0 | moved | 4 |
| v2.0 | newly added | 1 |
| v2.0 | reduced | 1 |
| v2.0 | requires greater practical depth | 11 |
| v2.0 | unchanged | 1 |

## Comparison edges (v1.1 → v2.0)

| v1.1 | v2.0 | Relationship | Confidence | Notes |
| --- | --- | --- | --- | --- |
| 1.4 | 1.1 | requires greater practical depth | high | Identify cable/interface issues → Diagnose with broader fault list (distance, signal levels, pin out, cable types). |
| 1.3 | 1.1 | moved | medium | Cabling-type compare knowledge is absorbed into the broader diagnose-cable objective; not a one-for-one wording match. |
| 1.6 | 1.3 | requires greater practical depth | high | Configure and verify IPv4 addressing/subnetting → Troubleshoot IPv4 (public and private). |
| 1.7 | 1.3 | moved | high | Standalone private IPv4 describe line folded into v2.0 1.3 public/private troubleshooting. |
| 1.8 | 1.4 | requires greater practical depth | high | Configure/verify IPv6 addressing/prefix → Troubleshoot IPv6 configuration/assignment/prefix sizing. |
| 1.9 | 1.4 | reduced | medium | IPv6 address-types catalog shrinks; v2.0 1.4 names unicast + modified EUI-64 only (not anycast/multicast catalog). |
| 1.10 | 1.6 | requires greater practical depth | high | Verify client OS IP parameters → Troubleshoot wired/wireless client connectivity including wireless security parameters. |
| 1.11 | 1.5 | unchanged | high | Parent wording identical ('Describe wireless principles'). Sub-bullets differ (SSID/encryption vs interference/security protocols) — track separately in content work. |
| 1.12 | 1.2 | reduced | medium | Virtualization fundamentals → hypervisors/VMs/containers; VRFs called out in v1.1 are not present in v2.0 1.2. |
| 2.1 | 2.2 | moved | medium | VLAN configure/verify relocates into edge-host switch-port attributes (VLAN/PoE/port-channel/LACP). |
| 2.2 | 2.1 | expanded | medium | Interswitch connectivity expands into switch-to-switch/switch-to-router infrastructure connectivity with SVI/LACP/trunk detail. |
| 2.3 | 2.3 | requires greater practical depth | high | Configure/verify CDP/LLDP → Validate network documentation accuracy using CDP/LLDP. |
| 2.4 | 2.1 | moved | high | EtherChannel/LACP becomes v2.0 2.1.c under infrastructure connectivity. |
| 2.5 | 2.5 | requires greater practical depth | high | Interpret Rapid PVST+ → Configure Rapid PVST+ operations. BPDU filter present in v1.1 2.5.d is absent from v2.0 2.5.d. |
| 3.1 | 3.1 | expanded | high | Interpret routing-table components → Interpret routing table to identify next hop (components listed inline). |
| 3.3 | 3.2 | requires greater practical depth | high | Configure/verify static routing → Troubleshoot static routing (same route-type sub-bullets). |
| 3.4 | 3.3 | expanded | high | OSPFv2-only → OSPFv2 for IPv4 and OSPFv3 for IPv6; adjacency note excludes authentication. |
| 3.5 | 3.4 | requires greater practical depth | high | Describe FHRP concepts → Interpret operational status of HSRP and VRRP. |
| 4.1 | 4.3 | expanded | high | Inside source NAT static/pools → NAT/PAT on IOS XE routers. |
| 4.3 | 1.7 | moved | medium | DHCP portion of v1.1 4.3 role objective moves toward v2.0 1.7 DHCPv4 troubleshoot (DNS portion maps separately to 4.4). |
| 4.3 | 4.4 | expanded | medium | DNS portion of v1.1 4.3 expands into diagnose DNS records (A/AAAA/CNAME/MX/NS/PTR). |
| 4.4 | 5.4 | moved | high | SNMP moves into AI/ops domain; wording Describe/Explain → Describe the function. |
| 4.5 | 5.6 | requires greater practical depth | high | Describe syslog features → Interpret syslog message content, severity levels, and facilities. |
| 4.6 | 1.7 | requires greater practical depth | high | Configure/verify DHCP client/relay → Troubleshoot DHCPv4 client/server/relay on IOS. |
| 4.9 | 4.2 | expanded | medium | TFTP/FTP capabilities → secure file transfer with SFTP/SCP for config/software files. |
| 5.3 | 4.1 | expanded | medium | Local password device access → local usernames and AAA client (TACACS+/RADIUS). |
| 5.5 | 4.5 | expanded | high | IPsec VPN describe gains protocols and transport modes detail. |
| 5.6 | 4.6 | expanded | high | ACLs → IPv4 ACLs explicitly standard/extended/numbered/named. |
| 5.7 | 4.7 | expanded | high | L2 security expands with storm control and RA guard; DHCP snooping/DAI/port security retained. |
| 5.8 | 4.1 | requires greater practical depth | medium | Compare AAA concepts → configure as AAA client for management. |
| 5.9 | 1.5 | moved | medium | Wireless security protocols relocate under wireless principles sub-bullet 1.5.c. |
| 6.2 | 5.3 | moved | medium | Traditional vs controller-based networking is one facet of broader network management approaches. |
| 6.4 | 5.1 | expanded | medium | AI/ML in network ops expands toward agentic AI role (also see 5.2 prompts). |
| 6.4 | 5.2 | expanded | medium | Generative AI portion expands into explicit prompt-selection objective. |
| 6.6 | 5.5 | requires greater practical depth | medium | Recognize Ansible/Terraform capabilities → Use Ansible to execute commands; Terraform not named in v2.0 5.5. |

## Full transition manifest (parents)

| Side | # | Classification | Counterparts | Shared-core? | Notes |
| --- | --- | --- | --- | --- | --- |
| v1.1 | 1.1 | removed | — | no | No v2.0 parent asks to explain network-component roles/functions. |
| v1.1 | 1.2 | removed | — | no | Topology architecture characteristics are not a v2.0 parent line. |
| v1.1 | 1.3 | moved | 1.1 | yes | 1.1: Cabling-type compare knowledge is absorbed into the broader diagnose-cable objective; not a one-for-one wording match. |
| v1.1 | 1.4 | requires greater practical depth | 1.1 | yes | 1.1: Identify cable/interface issues → Diagnose with broader fault list (distance, signal levels, pin out, cable types). |
| v1.1 | 1.5 | removed | — | no | TCP vs UDP compare is not listed in v2.0 parents. |
| v1.1 | 1.6 | requires greater practical depth | 1.3 | yes | 1.3: Configure and verify IPv4 addressing/subnetting → Troubleshoot IPv4 (public and private). |
| v1.1 | 1.7 | moved | 1.3 | yes | 1.3: Standalone private IPv4 describe line folded into v2.0 1.3 public/private troubleshooting. |
| v1.1 | 1.8 | requires greater practical depth | 1.4 | yes | 1.4: Configure/verify IPv6 addressing/prefix → Troubleshoot IPv6 configuration/assignment/prefix sizing. |
| v1.1 | 1.9 | reduced | 1.4 | yes | 1.4: IPv6 address-types catalog shrinks; v2.0 1.4 names unicast + modified EUI-64 only (not anycast/multicast catalog). |
| v1.1 | 1.10 | requires greater practical depth | 1.6 | yes | 1.6: Verify client OS IP parameters → Troubleshoot wired/wireless client connectivity including wireless security parameters. |
| v1.1 | 1.11 | unchanged | 1.5 | yes | 1.5: Parent wording identical ('Describe wireless principles'). Sub-bullets differ (SSID/encryption vs interference/security protocols) — track separately in content work. |
| v1.1 | 1.12 | reduced | 1.2 | yes | 1.2: Virtualization fundamentals → hypervisors/VMs/containers; VRFs called out in v1.1 are not present in v2.0 1.2. |
| v1.1 | 1.13 | removed | — | no | Switching concepts (MAC learning/flooding/table) are not a v2.0 parent line. |
| v1.1 | 2.1 | moved | 2.2 | yes | 2.2: VLAN configure/verify relocates into edge-host switch-port attributes (VLAN/PoE/port-channel/LACP). |
| v1.1 | 2.2 | expanded | 2.1 | yes | 2.1: Interswitch connectivity expands into switch-to-switch/switch-to-router infrastructure connectivity with SVI/LACP/trunk detail. |
| v1.1 | 2.3 | requires greater practical depth | 2.3 | yes | 2.3: Configure/verify CDP/LLDP → Validate network documentation accuracy using CDP/LLDP. |
| v1.1 | 2.4 | moved | 2.1 | yes | 2.1: EtherChannel/LACP becomes v2.0 2.1.c under infrastructure connectivity. |
| v1.1 | 2.5 | requires greater practical depth | 2.5 | yes | 2.5: Interpret Rapid PVST+ → Configure Rapid PVST+ operations. BPDU filter present in v1.1 2.5.d is absent from v2.0 2.5.d. |
| v1.1 | 2.6 | unable to determine | — | no | Wireless architectures/AP modes loosely resemble v2.0 2.2.b edge-host AP attributes, but that is not trustworthy equivalence — left undetermined rather than inventing a map. |
| v1.1 | 2.7 | removed | — | no | WLAN physical infrastructure connections (AP/WLC/LAG) have no clear v2.0 parent. |
| v1.1 | 2.8 | unable to determine | — | no | Device management access (Telnet/SSH/HTTP/HTTPS/console/TACACS+/RADIUS/cloud) overlaps partially with v2.0 4.1 AAA/local usernames but is not equivalent; left undetermined. |
| v1.1 | 2.9 | removed | — | no | Wireless LAN GUI client-connectivity interpretation is not listed in v2.0. |
| v1.1 | 3.1 | expanded | 3.1 | yes | 3.1: Interpret routing-table components → Interpret routing table to identify next hop (components listed inline). |
| v1.1 | 3.2 | unable to determine | — | no | Default forwarding decision factors (longest prefix/AD/metric) may be implied by v2.0 3.1 but are not stated as a separate objective. |
| v1.1 | 3.3 | requires greater practical depth | 3.2 | yes | 3.2: Configure/verify static routing → Troubleshoot static routing (same route-type sub-bullets). |
| v1.1 | 3.4 | expanded | 3.3 | yes | 3.3: OSPFv2-only → OSPFv2 for IPv4 and OSPFv3 for IPv6; adjacency note excludes authentication. |
| v1.1 | 3.5 | requires greater practical depth | 3.4 | yes | 3.4: Describe FHRP concepts → Interpret operational status of HSRP and VRRP. |
| v1.1 | 4.1 | expanded | 4.3 | yes | 4.3: Inside source NAT static/pools → NAT/PAT on IOS XE routers. |
| v1.1 | 4.2 | removed | — | no | NTP client/server configure/verify is absent from v2.0 parents. |
| v1.1 | 4.3 | moved | 1.7, 4.4 | yes | 1.7: DHCP portion of v1.1 4.3 role objective moves toward v2.0 1.7 DHCPv4 troubleshoot (DNS portion maps separately to 4.4). 4.4: DNS portion of v1.1 4.3 expands into diagnose DNS records (A/AAAA/CNAME/MX/NS/PTR). |
| v1.1 | 4.4 | moved | 5.4 | yes | 5.4: SNMP moves into AI/ops domain; wording Describe/Explain → Describe the function. |
| v1.1 | 4.5 | requires greater practical depth | 5.6 | yes | 5.6: Describe syslog features → Interpret syslog message content, severity levels, and facilities. |
| v1.1 | 4.6 | requires greater practical depth | 1.7 | yes | 1.7: Configure/verify DHCP client/relay → Troubleshoot DHCPv4 client/server/relay on IOS. |
| v1.1 | 4.7 | removed | — | no | QoS PHB forwarding behavior is absent from v2.0 parents. |
| v1.1 | 4.8 | unable to determine | — | no | SSH remote-access configure may relate to management/file-transfer objectives but has no explicit v2.0 parent. |
| v1.1 | 4.9 | expanded | 4.2 | no | 4.2: TFTP/FTP capabilities → secure file transfer with SFTP/SCP for config/software files. |
| v1.1 | 5.1 | removed | — | no | Key security concepts (threats/vulnerabilities/exploits/mitigation) are not a v2.0 parent. |
| v1.1 | 5.2 | removed | — | no | Security program elements (awareness/training/physical) are not a v2.0 parent. |
| v1.1 | 5.3 | expanded | 4.1 | yes | 4.1: Local password device access → local usernames and AAA client (TACACS+/RADIUS). |
| v1.1 | 5.4 | removed | — | no | Password policy elements are not a v2.0 parent. |
| v1.1 | 5.5 | expanded | 4.5 | yes | 4.5: IPsec VPN describe gains protocols and transport modes detail. |
| v1.1 | 5.6 | expanded | 4.6 | yes | 4.6: ACLs → IPv4 ACLs explicitly standard/extended/numbered/named. |
| v1.1 | 5.7 | expanded | 4.7 | yes | 4.7: L2 security expands with storm control and RA guard; DHCP snooping/DAI/port security retained. |
| v1.1 | 5.8 | requires greater practical depth | 4.1 | yes | 4.1: Compare AAA concepts → configure as AAA client for management. |
| v1.1 | 5.9 | moved | 1.5 | yes | 1.5: Wireless security protocols relocate under wireless principles sub-bullet 1.5.c. |
| v1.1 | 5.10 | removed | — | no | WLAN GUI WPA2 PSK configure/verify is not a v2.0 parent. |
| v1.1 | 6.1 | unable to determine | — | no | Automation impact on network management may relate to v2.0 5.3 approaches but is not a clear counterpart. |
| v1.1 | 6.2 | moved | 5.3 | no | 5.3: Traditional vs controller-based networking is one facet of broader network management approaches. |
| v1.1 | 6.3 | unable to determine | — | no | SDN overlay/underlay/fabric + plane separation/APIs has no explicit v2.0 parent (controller-based appears only inside 5.3 list). |
| v1.1 | 6.4 | expanded | 5.1, 5.2 | no | 5.1: AI/ML in network ops expands toward agentic AI role (also see 5.2 prompts). 5.2: Generative AI portion expands into explicit prompt-selection objective. |
| v1.1 | 6.5 | removed | — | no | REST-based API characteristics are not a v2.0 parent. |
| v1.1 | 6.6 | requires greater practical depth | 5.5 | no | 5.5: Recognize Ansible/Terraform capabilities → Use Ansible to execute commands; Terraform not named in v2.0 5.5. |
| v1.1 | 6.7 | removed | — | no | JSON-encoded data components are not a v2.0 parent. |
| v2.0 | 1.1 | requires greater practical depth | 1.4, 1.3 | yes | 1.4: Identify cable/interface issues → Diagnose with broader fault list (distance, signal levels, pin out, cable types). 1.3: Cabling-type compare knowledge is absorbed into the broader diagnose-cable objective; not a one-for-one wording match. |
| v2.0 | 1.2 | reduced | 1.12 | yes | 1.12: Virtualization fundamentals → hypervisors/VMs/containers; VRFs called out in v1.1 are not present in v2.0 1.2. |
| v2.0 | 1.3 | requires greater practical depth | 1.6, 1.7 | yes | 1.6: Configure and verify IPv4 addressing/subnetting → Troubleshoot IPv4 (public and private). 1.7: Standalone private IPv4 describe line folded into v2.0 1.3 public/private troubleshooting. |
| v2.0 | 1.4 | requires greater practical depth | 1.8, 1.9 | yes | 1.8: Configure/verify IPv6 addressing/prefix → Troubleshoot IPv6 configuration/assignment/prefix sizing. 1.9: IPv6 address-types catalog shrinks; v2.0 1.4 names unicast + modified EUI-64 only (not anycast/multicast catalog). |
| v2.0 | 1.5 | unchanged | 1.11, 5.9 | yes | 1.11: Parent wording identical ('Describe wireless principles'). Sub-bullets differ (SSID/encryption vs interference/security protocols) — track separately in content work. 5.9: Wireless security protocols relocate under wireless principles sub-bullet 1.5.c. |
| v2.0 | 1.6 | requires greater practical depth | 1.10 | yes | 1.10: Verify client OS IP parameters → Troubleshoot wired/wireless client connectivity including wireless security parameters. |
| v2.0 | 1.7 | requires greater practical depth | 4.3, 4.6 | yes | 4.3: DHCP portion of v1.1 4.3 role objective moves toward v2.0 1.7 DHCPv4 troubleshoot (DNS portion maps separately to 4.4). 4.6: Configure/verify DHCP client/relay → Troubleshoot DHCPv4 client/server/relay on IOS. |
| v2.0 | 2.1 | moved | 2.2, 2.4 | yes | 2.2: Interswitch connectivity expands into switch-to-switch/switch-to-router infrastructure connectivity with SVI/LACP/trunk detail. 2.4: EtherChannel/LACP becomes v2.0 2.1.c under infrastructure connectivity. |
| v2.0 | 2.2 | moved | 2.1 | yes | 2.1: VLAN configure/verify relocates into edge-host switch-port attributes (VLAN/PoE/port-channel/LACP). |
| v2.0 | 2.3 | requires greater practical depth | 2.3 | yes | 2.3: Configure/verify CDP/LLDP → Validate network documentation accuracy using CDP/LLDP. |
| v2.0 | 2.4 | newly added | — | no | Explicit L2/L3 troubleshooting with show/ping/traceroute/packet capture is new as a parent line. |
| v2.0 | 2.5 | requires greater practical depth | 2.5 | yes | 2.5: Interpret Rapid PVST+ → Configure Rapid PVST+ operations. BPDU filter present in v1.1 2.5.d is absent from v2.0 2.5.d. |
| v2.0 | 3.1 | expanded | 3.1 | yes | 3.1: Interpret routing-table components → Interpret routing table to identify next hop (components listed inline). |
| v2.0 | 3.2 | requires greater practical depth | 3.3 | yes | 3.3: Configure/verify static routing → Troubleshoot static routing (same route-type sub-bullets). |
| v2.0 | 3.3 | expanded | 3.4 | yes | 3.4: OSPFv2-only → OSPFv2 for IPv4 and OSPFv3 for IPv6; adjacency note excludes authentication. |
| v2.0 | 3.4 | requires greater practical depth | 3.5 | yes | 3.5: Describe FHRP concepts → Interpret operational status of HSRP and VRRP. |
| v2.0 | 4.1 | expanded | 5.3, 5.8 | yes | 5.3: Local password device access → local usernames and AAA client (TACACS+/RADIUS). 5.8: Compare AAA concepts → configure as AAA client for management. |
| v2.0 | 4.2 | expanded | 4.9 | no | 4.9: TFTP/FTP capabilities → secure file transfer with SFTP/SCP for config/software files. |
| v2.0 | 4.3 | expanded | 4.1 | yes | 4.1: Inside source NAT static/pools → NAT/PAT on IOS XE routers. |
| v2.0 | 4.4 | expanded | 4.3 | yes | 4.3: DNS portion of v1.1 4.3 expands into diagnose DNS records (A/AAAA/CNAME/MX/NS/PTR). |
| v2.0 | 4.5 | expanded | 5.5 | yes | 5.5: IPsec VPN describe gains protocols and transport modes detail. |
| v2.0 | 4.6 | expanded | 5.6 | yes | 5.6: ACLs → IPv4 ACLs explicitly standard/extended/numbered/named. |
| v2.0 | 4.7 | expanded | 5.7 | yes | 5.7: L2 security expands with storm control and RA guard; DHCP snooping/DAI/port security retained. |
| v2.0 | 5.1 | expanded | 6.4 | no | 6.4: AI/ML in network ops expands toward agentic AI role (also see 5.2 prompts). |
| v2.0 | 5.2 | expanded | 6.4 | no | 6.4: Generative AI portion expands into explicit prompt-selection objective. |
| v2.0 | 5.3 | moved | 6.2 | no | 6.2: Traditional vs controller-based networking is one facet of broader network management approaches. |
| v2.0 | 5.4 | moved | 4.4 | yes | 4.4: SNMP moves into AI/ops domain; wording Describe/Explain → Describe the function. |
| v2.0 | 5.5 | requires greater practical depth | 6.6 | no | 6.6: Recognize Ansible/Terraform capabilities → Use Ansible to execute commands; Terraform not named in v2.0 5.5. |
| v2.0 | 5.6 | requires greater practical depth | 4.5 | yes | 4.5: Describe syslog features → Interpret syslog message content, severity levels, and facilities. |

## Shared-core clusters

- **shared-cabling-interfaces** (P0): Cabling, interfaces, and link faults — v1.1 [1.3, 1.4] ↔ v2.0 [1.1]
- **shared-ipv4-addressing** (P0): IPv4 addressing, private space, and subnetting — v1.1 [1.6, 1.7] ↔ v2.0 [1.3]
- **shared-ipv6-addressing** (P0): IPv6 addressing and prefix basics — v1.1 [1.8, 1.9] ↔ v2.0 [1.4]
- **shared-wireless-principles** (P1): Wireless principles — v1.1 [1.11, 5.9] ↔ v2.0 [1.5]
- **shared-virtualization** (P1): Virtualization / hypervisors / containers — v1.1 [1.12] ↔ v2.0 [1.2]
- **shared-switching-access** (P0): Switching, VLANs, trunks, EtherChannel, STP — v1.1 [2.1, 2.2, 2.3, 2.4, 2.5] ↔ v2.0 [2.1, 2.2, 2.3, 2.5]
- **shared-routing** (P0): Routing tables, static routes, OSPF, FHRP — v1.1 [3.1, 3.3, 3.4, 3.5] ↔ v2.0 [3.1, 3.2, 3.3, 3.4]
- **shared-services-security** (P0): NAT, DHCP, DNS, ACLs, L2 security, VPN, AAA — v1.1 [4.1, 4.3, 4.6, 5.3, 5.5, 5.6, 5.7, 5.8] ↔ v2.0 [1.7, 4.1, 4.3, 4.4, 4.5, 4.6, 4.7]
- **shared-ops-telemetry** (P1): SNMP and syslog operations — v1.1 [4.4, 4.5] ↔ v2.0 [5.4, 5.6]

## Rules honored

- v1.1 pathway retained; v2.0 is additive
- Objective IDs never mixed across versions
- No invented equivalences — `unable to determine` / `removed` / `newly added` used when edges are not trustworthy
- Shared lessons may serve both versions; associations stay version-specific
- Pilot IDs remain operational aliases for progress
