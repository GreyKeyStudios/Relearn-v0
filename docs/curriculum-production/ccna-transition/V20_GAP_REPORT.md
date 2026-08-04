# CCNA v2.0 Content & Simulator Gap Report

Generated: 2026-08-04T05:04:23.137Z

## Content gaps (official v2.0 parents)

| # | Severity | Classification | Live topics | Shared-core | Notes |
| --- | --- | --- | --- | --- | --- |
| 1.1 | medium | requires greater practical depth | ethernet, osi-model, tcp-ip-model | shared-cabling-interfaces | Alias coverage exists; still verify lesson depth against v2.0 verb (troubleshoot/configure/diagnose). |
| 1.2 | high | reduced | — | shared-virtualization | No live topic currently aliases to this v2.0 parent via the dual mapping layer. |
| 1.3 | medium | requires greater practical depth | ethernet, ip-ranges, ipv4-addressing, subnetting | shared-ipv4-addressing | Alias coverage exists; still verify lesson depth against v2.0 verb (troubleshoot/configure/diagnose). |
| 1.4 | medium | requires greater practical depth | ip-ranges, ipv4-addressing, ipv6-basics | shared-ipv6-addressing | Alias coverage exists; still verify lesson depth against v2.0 verb (troubleshoot/configure/diagnose). |
| 1.5 | low | unchanged | ipv6-basics, network-security, wireless-basics | shared-wireless-principles | Alias coverage exists; still verify lesson depth against v2.0 verb (troubleshoot/configure/diagnose). |
| 1.6 | medium | requires greater practical depth | ipv4-addressing | — | Alias coverage exists; still verify lesson depth against v2.0 verb (troubleshoot/configure/diagnose). |
| 1.7 | medium | requires greater practical depth | dhcp | shared-services-security | Alias coverage exists; still verify lesson depth against v2.0 verb (troubleshoot/configure/diagnose). |
| 2.1 | low | moved | switching | shared-switching-access | Alias coverage exists; still verify lesson depth against v2.0 verb (troubleshoot/configure/diagnose). |
| 2.2 | high | moved | — | shared-switching-access | No live topic currently aliases to this v2.0 parent via the dual mapping layer. |
| 2.3 | medium | requires greater practical depth | switching | shared-switching-access | Alias coverage exists; still verify lesson depth against v2.0 verb (troubleshoot/configure/diagnose). |
| 2.4 | critical | newly added | — | — | No live topic currently aliases to this v2.0 parent via the dual mapping layer. |
| 2.5 | medium | requires greater practical depth | trunking, vlans | shared-switching-access | Alias coverage exists; still verify lesson depth against v2.0 verb (troubleshoot/configure/diagnose). |
| 3.1 | medium | expanded | routing-fundamentals | shared-routing | Alias coverage exists; still verify lesson depth against v2.0 verb (troubleshoot/configure/diagnose). |
| 3.2 | medium | requires greater practical depth | static-routes | shared-routing | Alias coverage exists; still verify lesson depth against v2.0 verb (troubleshoot/configure/diagnose). |
| 3.3 | medium | expanded | ospf-basics, static-routes | shared-routing | Alias coverage exists; still verify lesson depth against v2.0 verb (troubleshoot/configure/diagnose). |
| 3.4 | high | requires greater practical depth | — | shared-routing | No live topic currently aliases to this v2.0 parent via the dual mapping layer. |
| 4.1 | high | expanded | — | shared-services-security | No live topic currently aliases to this v2.0 parent via the dual mapping layer. |
| 4.2 | high | expanded | — | — | No live topic currently aliases to this v2.0 parent via the dual mapping layer. |
| 4.3 | medium | expanded | nat | shared-services-security | Alias coverage exists; still verify lesson depth against v2.0 verb (troubleshoot/configure/diagnose). |
| 4.4 | medium | expanded | dhcp | shared-services-security | Alias coverage exists; still verify lesson depth against v2.0 verb (troubleshoot/configure/diagnose). |
| 4.5 | high | expanded | — | shared-services-security | No live topic currently aliases to this v2.0 parent via the dual mapping layer. |
| 4.6 | medium | expanded | acls | shared-services-security | Alias coverage exists; still verify lesson depth against v2.0 verb (troubleshoot/configure/diagnose). |
| 4.7 | medium | expanded | network-security | shared-services-security | Alias coverage exists; still verify lesson depth against v2.0 verb (troubleshoot/configure/diagnose). |
| 5.1 | high | expanded | — | — | No live topic currently aliases to this v2.0 parent via the dual mapping layer. |
| 5.2 | high | expanded | — | — | No live topic currently aliases to this v2.0 parent via the dual mapping layer. |
| 5.3 | low | moved | automation-basics | — | Alias coverage exists; still verify lesson depth against v2.0 verb (troubleshoot/configure/diagnose). |
| 5.4 | low | moved | dns | shared-ops-telemetry | Alias coverage exists; still verify lesson depth against v2.0 verb (troubleshoot/configure/diagnose). |
| 5.5 | high | requires greater practical depth | — | — | No live topic currently aliases to this v2.0 parent via the dual mapping layer. |
| 5.6 | high | requires greater practical depth | — | shared-ops-telemetry | No live topic currently aliases to this v2.0 parent via the dual mapping layer. |

## Simulator gaps

| Need | Priority | Status | Related v2.0 | Existing sims | Notes |
| --- | --- | --- | --- | --- | --- |
| IPv4 addressing/subnetting troubleshoot drill | P0 | partial | 1.3 | subnet-cidr-drill | Existing subnet CIDR drill covers calculation; v2.0 asks troubleshoot configuration/assignment (public/private). |
| IPv6 addressing/prefix troubleshoot drill | P0 | missing | 1.4 | — | No live IPv6 troubleshoot simulator registered. |
| Wired/wireless client connectivity troubleshoot lab | P1 | missing | 1.6 | — | Needs OS-parameter + wireless security parameter scenarios. |
| DHCPv4 client/server/relay troubleshoot | P0 | missing | 1.7 | — | Live dhcp topic exists but no dedicated DHCP troubleshoot simulator. |
| L2/L3 connectivity troubleshoot with show/ping/trace/pcap | P0 | missing | 2.4 | — | Newly added v2.0 parent — high simulator priority. |
| Rapid PVST+ configure operations | P1 | missing | 2.5 | — | v1.1 was interpret; v2.0 is configure — depth gap. |
| IPv4/IPv6 static route troubleshoot | P0 | missing | 3.2 | — | Shift from configure/verify to troubleshoot. |
| OSPFv3 for IPv6 configure lab | P0 | missing | 3.3 | — | v2.0 expands beyond OSPFv2-only. |
| HSRP/VRRP operational status interpretation | P1 | missing | 3.4 | — | No FHRP simulator today. |
| DNS record diagnose drill (A/AAAA/CNAME/MX/NS/PTR) | P1 | missing | 4.4 | — | Expanded DNS depth vs v1.1 role-only wording. |
| L2 security including storm control + RA guard | P1 | missing | 4.7 | — | New sub-features vs v1.1 DHCP snooping/DAI/port security set. |
| Generative/agentic AI prompt selection scenarios | P0 | missing | 5.1, 5.2 | — | Net-new AI objectives — no current ReLearn simulator. |
| Ansible command execution practice | P1 | missing | 5.5 | — | v2.0 asks use/execute, not merely recognize capabilities. |

## Prioritized v2.0 content-production sequence

1. `ccna-v20-p0-addressing-troubleshoot` — **IPv4/IPv6/DHCP troubleshoot elevation** (Upgrade shared addressing lessons + add troubleshoot drills) — objectives 1.3, 1.4, 1.7 · shared-core
2. `ccna-v20-p0-l2l3-troubleshoot` — **New L2/L3 troubleshoot parent + STP configure depth** (Author 2.4 pathway; elevate 2.5 from interpret→configure) — objectives 2.4, 2.5 · shared-core
3. `ccna-v20-p0-routing-expansion` — **Static troubleshoot + OSPFv3 + FHRP status** (Routing shared-core with v2.0-only expansions) — objectives 3.2, 3.3, 3.4 · shared-core
4. `ccna-v20-p0-ai-ops` — **Agentic/generative AI + Ansible execute** (Net-new AI/ops objectives with safe scenario design) — objectives 5.1, 5.2, 5.5
5. `ccna-v20-p1-services-security` — **DNS diagnose, L2 security expands, AAA/NAT wording** (Services/security shared-core plus expanded subfeatures) — objectives 4.1, 4.3, 4.4, 4.6, 4.7 · shared-core
6. `ccna-v20-p1-client-wireless` — **Client connectivity + wireless sub-bullet refresh** (1.5/1.6 depth and OS/wireless security parameters) — objectives 1.5, 1.6 · shared-core
