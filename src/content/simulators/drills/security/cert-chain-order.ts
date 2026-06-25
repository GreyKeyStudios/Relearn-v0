import type { OrderDrillItem } from "@/components/simulators/SimulatorRegistry";

export const CERT_CHAIN_POOL: OrderDrillItem[] = [
  {
    id: "chain-validation",
    prompt: "Order certificates from leaf to root for TLS validation (client trust path).",
    items: [
      "Server (leaf) certificate for www.example.com",
      "Intermediate CA certificate",
      "Root CA certificate (trusted anchor)",
    ],
    weakConcept: "Certificate chain order",
    explanation: "Clients validate leaf → intermediate → trusted root during the TLS handshake.",
  },
  {
    id: "chain-handshake",
    prompt: "Order steps in simplified TLS server certificate presentation.",
    items: [
      "Client sends ClientHello",
      "Server sends certificate chain",
      "Client validates chain against trust store",
      "Secure session keys negotiated",
    ],
    weakConcept: "TLS handshake certificate flow",
    explanation: "Server presents its chain after ClientHello; client validates before key exchange.",
  },
  {
    id: "chain-pki",
    prompt: "Order PKI hierarchy from most specific to most general.",
    items: ["End-entity certificate", "Issuing intermediate CA", "Root CA"],
    weakConcept: "PKI hierarchy",
    explanation: "End entities are signed by intermediates; roots are self-signed trust anchors.",
  },
  {
    id: "chain-revoke",
    prompt: "Order certificate lifecycle events for a compromised web server cert.",
    items: [
      "Revoke compromised certificate via CA",
      "Publish CRL/OCSP update",
      "Issue and deploy replacement certificate",
      "Remove old cert from server configuration",
    ],
    weakConcept: "Certificate revocation process",
    explanation: "Revocation stops trust immediately; replacement and config cleanup follow.",
  },
  {
    id: "chain-cross-sign",
    prompt: "Order validation when intermediate is cross-signed by multiple roots (simplified path).",
    items: [
      "Validate leaf against primary intermediate",
      "Validate intermediate against cross-signed path",
      "Reach trusted root in client store",
    ],
    weakConcept: "Cross-signed intermediates",
    explanation: "Cross-signing provides alternate paths to trusted roots for compatibility.",
  },
  {
    id: "chain-csr",
    prompt: "Order steps to obtain a new public TLS certificate.",
    items: [
      "Generate key pair and CSR",
      "Submit CSR to public CA",
      "Complete domain validation (DV/OV/EV)",
      "Install issued certificate on server",
    ],
    weakConcept: "Certificate issuance workflow",
    explanation: "CSR contains public key; CA validates ownership before issuing the signed cert.",
  },
  {
    id: "chain-mismatch",
    prompt: "Order troubleshooting when browser reports 'certificate chain incomplete'.",
    items: [
      "Verify server sends full chain including intermediates",
      "Confirm intermediate matches issuing CA",
      "Check client trust store includes root or cross-sign",
    ],
    weakConcept: "Incomplete chain troubleshooting",
    explanation: "Missing intermediate certs in server config is the most common cause.",
  },
  {
    id: "chain-pinning",
    prompt: "Order concepts from specific to general in public key trust.",
    items: ["Leaf public key", "Intermediate CA public key", "Root CA public key"],
    weakConcept: "Public key hierarchy",
    explanation: "Each level signs the next; leaf keys are unique per server or service.",
  },
];
