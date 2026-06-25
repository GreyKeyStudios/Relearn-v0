import type { ChoiceDrillItem } from "@/components/simulators/SimulatorRegistry";

export const AUTH_FLOW_POOL: ChoiceDrillItem[] = [
  {
    id: "auth-mfa",
    prompt:
      "User enters password, then approves a push notification on a registered phone. Which authentication factor model?",
    choices: [
      { id: "a", text: "Password (something you know) + push approval (something you have)" },
      { id: "b", text: "Single-factor — password is sufficient" },
      { id: "c", text: "Three-factor — password, phone, and biometrics required" },
      { id: "d", text: "Something you are only" },
    ],
    correctChoiceId: "a",
    weakConcept: "MFA factor types",
    explanation: "Password plus device-based approval is two-factor authentication (2FA/MFA).",
  },
  {
    id: "auth-sso",
    prompt:
      "Employee logs into corporate IdP once, then accesses SaaS apps without re-entering credentials. Primary pattern?",
    choices: [
      { id: "a", text: "Single Sign-On (SSO) via federation (e.g., SAML/OIDC)" },
      { id: "b", text: "Shared password stored in browser" },
      { id: "c", text: "Certificate pinning only" },
      { id: "d", text: "Role-based access without authentication" },
    ],
    correctChoiceId: "a",
    weakConcept: "SSO and federation",
    explanation: "SSO uses trust between IdP and service providers so users authenticate once.",
  },
  {
    id: "auth-oauth",
    prompt:
      "Mobile app requests access to your Google calendar without seeing your Google password. Protocol pattern?",
    choices: [
      { id: "a", text: "OAuth 2.0 authorization delegation" },
      { id: "b", text: "LDAP bind with user password" },
      { id: "c", text: "Kerberos ticket forwarding to third party" },
      { id: "d", text: "Basic HTTP authentication" },
    ],
    correctChoiceId: "a",
    weakConcept: "OAuth delegation",
    explanation: "OAuth allows scoped access tokens without sharing primary credentials.",
  },
  {
    id: "auth-saml",
    prompt:
      "Enterprise uses Okta as IdP; Salesforce trusts SAML assertions for user identity. This is an example of?",
    choices: [
      { id: "a", text: "Federated identity with SAML" },
      { id: "b", text: "Local authentication only" },
      { id: "c", text: "Password spraying defense" },
      { id: "d", text: "MAC-based network access control" },
    ],
    correctChoiceId: "a",
    weakConcept: "SAML federation",
    explanation: "SAML assertions from a trusted IdP enable cross-domain federated login.",
  },
  {
    id: "auth-totp",
    prompt:
      "User opens authenticator app showing a 6-digit code that changes every 30 seconds. Factor type?",
    choices: [
      { id: "a", text: "TOTP — time-based one-time password (something you have)" },
      { id: "b", text: "Biometric — something you are" },
      { id: "c", text: "Security question — something you know only" },
      { id: "d", text: "Smart card certificate only" },
    ],
    correctChoiceId: "a",
    weakConcept: "TOTP authenticator apps",
    explanation: "TOTP apps generate time-limited codes from a shared secret on the device.",
  },
  {
    id: "auth-kerberos",
    prompt:
      "Windows domain user receives a TGT after password verification, then requests service tickets. Protocol?",
    choices: [
      { id: "a", text: "Kerberos" },
      { id: "b", text: "RADIUS only" },
      { id: "c", text: "OAuth 2.0" },
      { id: "d", text: "TACACS+" },
    ],
    correctChoiceId: "a",
    weakConcept: "Kerberos ticket flow",
    explanation: "Kerberos uses TGTs and service tickets for mutual authentication in AD environments.",
  },
  {
    id: "auth-biometric",
    prompt:
      "Laptop unlock uses fingerprint after user enters PIN. Combined model?",
    choices: [
      { id: "a", text: "Something you know (PIN) + something you are (fingerprint)" },
      { id: "b", text: "Single-factor biometric only" },
      { id: "c", text: "Something you have only" },
      { id: "d", text: "Three-factor with password, PIN, and fingerprint required separately" },
    ],
    correctChoiceId: "a",
    weakConcept: "Biometric + PIN",
    explanation: "PIN plus fingerprint satisfies multi-factor using different factor categories.",
  },
  {
    id: "auth-federation",
    prompt:
      "Partner organization users access your app using their corporate credentials via trust relationship. Term?",
    choices: [
      { id: "a", text: "Federated identity / cross-domain trust" },
      { id: "b", text: "Local account provisioning only" },
      { id: "c", text: "Anonymous access" },
      { id: "d", text: "MAC filtering" },
    ],
    correctChoiceId: "a",
    weakConcept: "Cross-org federation",
    explanation: "Federation allows authentication across organizational boundaries without duplicate accounts.",
  },
  {
    id: "auth-radius",
    prompt:
      "802.1X wireless login: supplicant talks to RADIUS server for credential validation. Primary use?",
    choices: [
      { id: "a", text: "Centralized network access authentication (NAC)" },
      { id: "b", text: "Email encryption" },
      { id: "c", text: "DNSSEC validation" },
      { id: "d", text: "File integrity monitoring" },
    ],
    correctChoiceId: "a",
    weakConcept: "RADIUS for network access",
    explanation: "RADIUS authenticates users/devices before granting network access via 802.1X.",
  },
  {
    id: "auth-passwordless",
    prompt:
      "User clicks magic link sent to email; no password entered. Classification?",
    choices: [
      { id: "a", text: "Passwordless — possession of email account (something you have)" },
      { id: "b", text: "Two-factor — always requires password plus link" },
      { id: "c", text: "Biometric authentication" },
      { id: "d", text: "Kerberos delegation" },
    ],
    correctChoiceId: "a",
    weakConcept: "Passwordless authentication",
    explanation: "Magic links rely on control of the registered email channel as the primary factor.",
  },
];
