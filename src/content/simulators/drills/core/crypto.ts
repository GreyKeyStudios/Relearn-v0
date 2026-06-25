import type { ChoiceDrillItem } from "@/components/simulators/SimulatorRegistry";

export const CRYPTO_POOL: ChoiceDrillItem[] = [
  {
    id: "crypto-sym",
    prompt: "AES-256 is an example of which type of encryption?",
    choices: [
      { id: "a", text: "Symmetric encryption" },
      { id: "b", text: "Asymmetric encryption" },
      { id: "c", text: "Hashing" },
      { id: "d", text: "Digital certificate" },
    ],
    correctChoiceId: "a",
    weakConcept: "Symmetric vs asymmetric",
  },
  {
    id: "crypto-rsa",
    prompt: "RSA is primarily used for:",
    choices: [
      { id: "a", text: "Key exchange and digital signatures (asymmetric)" },
      { id: "b", text: "Bulk data encryption at wire speed" },
      { id: "c", text: "One-way password storage without salt" },
      { id: "d", text: "Layer 2 frame forwarding" },
    ],
    correctChoiceId: "a",
    weakConcept: "RSA use cases",
  },
  {
    id: "crypto-hash",
    prompt: "SHA-256 produces a fixed-length digest and is:",
    choices: [
      { id: "a", text: "One-way (hashing) — not reversible" },
      { id: "b", text: "Reversible with the private key" },
      { id: "c", text: "Used for session key exchange only" },
      { id: "d", text: "A symmetric block cipher" },
    ],
    correctChoiceId: "a",
    weakConcept: "Hashing properties",
  },
  {
    id: "crypto-tls",
    prompt: "In TLS, which typically encrypts the bulk data after the handshake?",
    choices: [
      { id: "a", text: "Symmetric session key (e.g., AES)" },
      { id: "b", text: "Server's RSA public key for all traffic" },
      { id: "c", text: "MD5 hash of the password" },
      { id: "d", text: "Base64 encoding" },
    ],
    correctChoiceId: "a",
    weakConcept: "TLS hybrid encryption",
    explanation: "Asymmetric crypto establishes keys; symmetric crypto encrypts bulk data efficiently.",
  },
  {
    id: "crypto-pki",
    prompt: "A digital certificate binds a public key to:",
    choices: [
      { id: "a", text: "An identity, signed by a Certificate Authority" },
      { id: "b", text: "A private key stored in plaintext" },
      { id: "c", text: "A MAC address" },
      { id: "d", text: "A subnet mask" },
    ],
    correctChoiceId: "a",
    weakConcept: "PKI and certificates",
  },
  {
    id: "crypto-salt",
    prompt: "Salting passwords before hashing prevents:",
    choices: [
      { id: "a", text: "Rainbow table attacks" },
      { id: "b", text: "All brute-force attacks entirely" },
      { id: "c", text: "TLS downgrade attacks" },
      { id: "d", text: "DNS cache poisoning" },
    ],
    correctChoiceId: "a",
    weakConcept: "Password salting",
  },
  {
    id: "crypto-hmac",
    prompt: "HMAC provides:",
    choices: [
      { id: "a", text: "Message authentication using a hash + secret key" },
      { id: "b", text: "Lossless compression" },
      { id: "c", text: "Public key distribution" },
      { id: "d", text: "IP address assignment" },
    ],
    correctChoiceId: "a",
    weakConcept: "HMAC purpose",
  },
  {
    id: "crypto-ec",
    prompt: "Elliptic Curve Cryptography (ECC) compared to RSA:",
    choices: [
      { id: "a", text: "Smaller keys for equivalent security" },
      { id: "b", text: "Always faster for bulk encryption than AES" },
      { id: "c", text: "Is a hashing algorithm" },
      { id: "d", text: "Does not support digital signatures" },
    ],
    correctChoiceId: "a",
    weakConcept: "ECC characteristics",
  },
];
