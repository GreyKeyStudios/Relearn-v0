/** Learner-facing copy for batch-1 remediation activities used by vertical slices. */

export const CCNA_V20_REMEDIATION_COPY: Record<
  string,
  { title: string; body: string; misconceptionId: string }
> = {
  "rem-v20-ipv4-public-private-triage": {
    title: "Public vs private IPv4 triage",
    misconceptionId: "misc-v20-ipv4-private-always-unusable",
    body: "Private RFC 1918 ranges are valid on internal networks. Given a healthy private LAN, a mis-subnetted private host, and a public WAN with a wrong next-hop — identify addressing/subnetting faults without treating 'private' as broken.",
  },
  "rem-v20-prompt-components": {
    title: "Network-ops prompt component cards",
    misconceptionId: "misc-v20-ai-prompt-no-structure",
    body: "Rewrite a weak Cisco network-ops question (CRC triage or ACL review) into a prompt that states data classification, output format, persona, and instructions. Reject secret leaks and generic LLM-tuning advice.",
  },
};

export function getCcnaV20RemediationCopy(id: string | undefined) {
  if (!id) return undefined;
  return CCNA_V20_REMEDIATION_COPY[id];
}
