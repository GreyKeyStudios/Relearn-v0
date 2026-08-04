# Prioritized CCNA v2.0 Content-Production Sequence

Do **not** mass-produce lessons in the architecture PR. Use this sequence for later content tickets.

Machine-readable copy: `transition-manifest.json` → `productionSequence`  
Human gap detail: [`V20_GAP_REPORT.md`](./V20_GAP_REPORT.md)

## Batches

| Order | Batch ID | Focus | v2.0 parents | Shared-core? | Status |
| ---: | --- | --- | --- | --- | --- |
| 1 | `ccna-v20-p0-addressing-troubleshoot` | Elevate IPv4/IPv6/DHCP to troubleshoot depth | 1.3, 1.4, 1.7 | yes | Batch-1 specs landed |
| 2 | `ccna-v20-p0-l2l3-troubleshoot` | New 2.4 parent + STP configure depth | 2.4, 2.5 | yes | Batch-1 specs landed |
| 3 | `ccna-v20-p0-routing-expansion` | Static troubleshoot, OSPFv3, FHRP status | 3.2, 3.3, 3.4 | yes | 3.2/3.3 in batch-1; 3.4 deferred |
| 4 | `ccna-v20-p0-ai-ops` | Agentic/generative AI + Ansible execute | 5.1, 5.2, 5.5 | no | 5.2 in batch-1; 5.1/5.5 deferred |
| 5 | `ccna-v20-p1-services-security` | DNS diagnose, L2 security expands, AAA/NAT | 4.1, 4.3, 4.4, 4.6, 4.7 | yes | pending |
| 6 | `ccna-v20-p1-client-wireless` | Client connectivity + wireless sub-bullets | 1.5, 1.6 | yes | pending |

## Simulator priorities (P0 first)

1. IPv4 troubleshoot (beyond CIDR drill)
2. IPv6 troubleshoot
3. DHCPv4 client/server/relay troubleshoot
4. L2/L3 show/ping/trace/pcap troubleshoot (new parent)
5. Static route troubleshoot
6. OSPFv3 configure
7. Generative/agentic AI prompt scenarios

## Definition of done for a production batch

Follow [`docs/definition-of-done.md`](../../definition-of-done.md). Additionally for dual-version work:

- Version-specific objective IDs only (no mixed lists)
- Shared lesson bodies keep separate association lists
- Pilot progress keys remain valid
- Gap report regenerated after content lands
