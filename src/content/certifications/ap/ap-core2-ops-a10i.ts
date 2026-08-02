import type { Topic } from "../../types";

const item = (id: string, prompt: string, correct: string, wrong1: string, wrong2: string, difficulty: "easy" | "medium" | "hard" = "medium") => ({ id, prompt, choices: [{ id: "a", text: correct }, { id: "b", text: wrong1 }, { id: "c", text: wrong2 }], correctChoiceId: "a", explanation: correct, objectiveId: "AP1202-4.9", difficulty });

export const apCore2OpsBatch9Topics: Topic[] = [{
  id: "ap-remote-access",
  name: "Remote Access Technologies",
  prerequisites: ["ap-scripting-basics", "ap-windows-networking", "ap-security-measures", "ap-communication"],
  objectives: ["AP1202-4.9"],
  knowledgeNodeId: "remote-access",
  lesson: {
    title: "Choose and Operate Remote Access Without Losing the Trust Boundary",
    content: `Remote access extends keyboard, screen, shell, files, applications, or network reach across distance. The safe workflow is:

\`verify request, identity, asset, ownership, and authority → select approved technology and path → establish trusted authentication and encrypted transport → obtain/record consent where required → use least privilege and minimum features → communicate actions → verify repair → end, revoke, and document the session\`

## Technology roles

- **Remote Desktop Protocol (RDP):** graphical Windows session; may create or take over a session depending on edition/configuration. Avoid direct Internet exposure; use approved gateway/VPN/zero-trust access and MFA.
- **Remote assistance / screen sharing:** user-present collaborative support, often with visible consent and shared session; appropriate when the user should observe and approve actions.
- **Virtual Network Computing (VNC):** graphical framebuffer/control family; security varies by product/configuration, so use an approved encrypted design rather than assuming the protocol alone is safe.
- **Secure Shell (SSH):** encrypted command-line, tunneling, and file-transfer foundation; host-key validation and key management matter. Do not blindly accept a changed host key.
- **VPN:** creates an encrypted authenticated path into an approved network or service; it is transport/access, not itself a remote desktop.
- **Remote monitoring and management (RMM):** managed agents for inventory, monitoring, patching, scripts, and attended/unattended support; powerful persistence requires strict ownership, roles, logging, and removal.
- **Third-party remote support:** brokered screen/control/file features; use organization-approved tenants, accounts, policy, and session controls.
- **Console/out-of-band management:** can work below the OS for servers/devices; high privilege requires isolated management networks and specialized authorization.

Web portals, cloud desktops/VDI, application publishing, management consoles, and mobile-device tools may provide narrower access than full desktop control. Choose the minimum capability that fulfills the task.

## Attended versus unattended

**Attended access** involves a present user who sees and often approves the session. Explain who you are, what will be visible, what controls are requested, expected disruption, and how to stop. Do not ask the user to read passwords or MFA codes aloud; allow private entry where supported.

**Unattended access** uses a managed agent or standing authorization for approved operational purposes. It is not implicit permission to browse content or connect whenever convenient. Verify asset ownership, maintenance/support scope, time window, ticket/change, role, notification, and logging requirements.

## Authentication and authorization

Use individual accounts, MFA, least privilege, role-based access, approved device posture, short-lived or scoped credentials, and separate administrative elevation where possible. Shared accounts weaken accountability. Never request user passwords, reuse session codes, hard-code credentials, or leave permanent access after a one-time support need.

Confirm the target using asset identity, hostname, user, location, management record, and session banner. A mistyped hostname can expose the wrong user. Confirm source/support identity too: unsolicited calls and fake support links are common social-engineering paths.

## Secure connection

Use approved encrypted transports, valid certificates/host keys, patched clients/agents/gateways, current cryptography, trusted DNS/network path, and firewall rules limited to intended sources/services. Do not expose RDP, VNC, SSH, or management interfaces directly to the public Internet merely for convenience.

Certificate warnings, changed SSH host keys, unexpected redirects, unknown relay domains, or mismatched session codes require stopping and verifying through a trusted channel. Do not weaken certificate validation or firewall policy.

## Session controls and privacy

Enable only required features: view/control, elevation, clipboard, file transfer, printing, drive mapping, audio, camera/microphone, command shell, reboot/reconnect, or multi-monitor. Each expands data and control exposure.

Announce privacy-sensitive or disruptive actions. Ask before opening user files, email, browser history, camera/mic, or closing applications. Use synthetic/test data. Pause or blank view only under approved policy; never use it to conceal actions from the user. Recording requires policy, notice/consent, retention, and access controls.

Lock the local/remote workstation appropriately during privileged work, prevent shoulder surfing, and use secure technician environments. Do not conduct sensitive support over public shared screens or personal accounts.

## Performance and troubleshooting by layer

When remote access fails, isolate:

1. **Endpoint:** powered/awake, connected, correct OS/edition, agent/service running, updates, storage/resources.
2. **Identity:** correct account, MFA, lockout, role/entitlement, expired code/certificate/key.
3. **Network:** Internet/LAN, DNS, routing, latency/loss, captive portal, VPN, proxy, firewall/NAT, gateway/relay availability.
4. **Trust:** certificate, SSH host key, device compliance, time, approved tenant/domain.
5. **Session:** user approval, existing session limits, display/input/clipboard/file settings, elevation boundary.
6. **Service:** vendor/organization outage, license/capacity, policy/change.

Use status pages and logs, compare another approved endpoint/network/account where safe, and make one controlled change at a time. A successful ping does not prove the application, identity, gateway, or policy path works.

Latency, jitter, packet loss, bandwidth, resolution/color, animation, audio, VPN overhead, and endpoint load affect experience. Reduce approved display/audio features or use a shell instead of a full desktop when appropriate; do not disable encryption to improve speed.

## Elevation, reboot, and continuity

Some tools lose control at secure desktop/UAC prompts or after reboot unless an approved installed agent/elevation method exists. Explain and obtain required approval before elevation. Use separate admin credentials through the approved prompt; do not reveal or save them in the remote tool.

Before reboot, protect unsaved work, confirm user availability and reconnection method, ensure disk encryption/MFA/recovery implications, communicate expected downtime, and verify the agent/service returns. Do not create a persistent backdoor to survive reboot.

## File transfer and commands

Transfer only required, approved files; verify source, destination, classification, malware scanning, hash/signature where used, and cleanup. Avoid personal storage or messaging. Commands/scripts require the same source review, target validation, approval, least privilege, logging, and change/recovery controls as local execution.

## End the session

Verify the original workflow with the user or authorized service owner, adjacent functions, security controls, updates, and persistent agent state. Remove temporary tools/accounts/rules/files, revoke session codes/tokens, disconnect VPN/gateway sessions, close consoles, and confirm the remote-control indicator ends.

Document technology/path, identity and target verification, attended/unattended authority, start/end, features/elevation, actions/results, transferred files, reboot, verification, temporary-access removal, exceptions, and follow-up—without passwords, MFA codes, private content, or unnecessary session recordings.

**Practice boundary:** fictional connection maps only; no real remote sessions, credential entry, public service exposure, firewall weakening, or unattended-agent installation. **Next:** AP1202-4.10 AI basics.`,
  },
  lightbulbMoment: "Remote support is not merely a connection; it is a temporary, observable grant of specific capabilities to a verified technician on a verified asset, followed by proof that the grant ended.",
  keyFacts: ["VPN provides a secure path; it is not a remote desktop", "SSH host keys and TLS certificates establish endpoint trust", "Attended and unattended access have different consent and persistence risks", "Enable only the screen, control, transfer, clipboard, shell, and elevation features required", "Do not expose remote services directly to the Internet for convenience", "Plan reboot/elevation/reconnection without creating persistent bypass", "End by revoking temporary access and verifying the session is closed"],
  guidedExample: {
    title: "Run an attended remote repair with a clean exit",
    steps: [
      "Verify ticket, caller, managed laptop asset, support tenant, and approved one-time session code through the known portal—not an emailed look-alike link.",
      "Explain view/control and privacy, obtain consent, disable unneeded clipboard/file/audio, and ask the user to close personal windows.",
      "Diagnose app failure by endpoint, identity, VPN, gateway, and policy layers; request separate elevation only for the approved repair and let secrets remain private.",
      "Before reboot, save work and confirm reconnect method. Reconnect through the same authorized session path; never create a hidden account or port rule.",
      "Have the user complete the workflow, remove the temporary support package/file, revoke the code, disconnect, verify the indicator is gone, and record sanitized evidence.",
    ],
  },
  commonMistakes: ["Treating VPN as the same thing as remote desktop", "Accepting certificate or SSH host-key changes blindly", "Exposing RDP/VNC/SSH directly to the Internet", "Using shared support accounts or requesting user passwords", "Enabling clipboard, drives, file transfer, recording, or shell without need", "Connecting unattended outside the authorized scope/window", "Rebooting without protecting work and reconnection", "Leaving temporary agents, accounts, rules, files, codes, or sessions active"],
  examTraps: ["Remote desktop/assistance/VNC/SSH/VPN/RMM roles", "Attended consent versus unattended authorization", "Certificate/host-key warning boundary", "Minimum session capabilities", "Endpoint versus identity versus network versus trust versus service failure", "Elevation and reboot continuity", "Session termination and temporary-access removal"],
  realWorldScenario: "A caller claiming to be support asks an employee to install an unknown remote tool and read back a session code. The employee uses the known help-desk channel instead. The technician confirms no ticket or approved tool, tells the user not to proceed, records the message/domain, and escalates phishing. No remote connection is established and no accusation or counter-investigation is attempted.",
  whenThisFails: ["If identity, asset, tenant/domain, certificate/host key, session code, or authorization cannot be verified, do not connect", "If a session exposes unexpected private data or exceeds approved capability, pause control and re-establish scope/consent or escalate", "If temporary access cannot be removed or the session cannot be confirmed closed, isolate as appropriate and escalate the access-control incident"],
  teacherReflectionPrompt: "Choose among VPN, RDP, remote assistance, SSH, VNC, and RMM for three fictional cases; define identity, consent, encryption, feature limits, elevation/reboot, troubleshooting layers, and proof the access ended.",
  quiz: [
    item("ap-remote-q1", "What does a VPN primarily provide?", "An authenticated encrypted network path to approved resources", "A graphical desktop by itself", "Unlimited authorization", "easy"),
    item("ap-remote-q2", "An SSH host key unexpectedly changes. Best action?", "Stop and verify the change through a trusted administrative channel before connecting", "Accept it automatically", "Disable encryption"),
    item("ap-remote-q3", "What distinguishes appropriate unattended access?", "Managed standing authorization, scoped purpose/window, roles, logging, notification, and persistent-agent governance", "The user is absent", "A shared password"),
    item("ap-remote-q4", "Before an attended remote reboot, confirm:", "Unsaved work, user approval/availability, encryption/MFA implications, and authorized reconnection", "A hidden account exists", "The firewall is disabled"),
    item("ap-remote-q5", "What completes a one-time remote session?", "Verify work, remove temporary access/files/features, revoke codes/tokens, disconnect, confirm closure, and document", "Close the technician window only", "Leave the agent for convenience", "hard"),
  ],
  questionBank: [
    item("ap-remote-b1", "RDP is best described as:", "A graphical Windows remote session protocol whose secure exposure and session behavior require design", "A backup method", "A software license"),
    item("ap-remote-b2", "SSH commonly provides:", "Encrypted command-line access and related secure transfer/tunneling capabilities", "Unencrypted screen pixels only", "A fire extinguisher"),
    item("ap-remote-b3", "Why limit clipboard and drive mapping?", "They create additional paths for sensitive data transfer and malware exposure", "They improve certificate trust", "They replace MFA"),
    item("ap-remote-b4", "Ping succeeds but remote support fails. This proves:", "Only limited network reachability; identity, port, gateway, policy, certificate, and service may still fail", "RDP is enabled", "The account is authorized"),
    item("ap-remote-b5", "A certificate warning in a remote portal should trigger:", "Stop and verify URL, time, certificate, network, and approved service through trusted channels", "Blind acceptance", "Permanent warning suppression"),
    item("ap-remote-b6", "Remote file transfer should use:", "Approved minimum files, verified source/destination/classification, scanning, and cleanup", "A personal cloud drive", "Every user folder"),
    item("ap-remote-b7", "A secure remote script still requires:", "Source/target validation, approval, least privilege, logging, recovery, and verification", "No review because transport is encrypted", "Hard-coded admin secrets"),
    item("ap-remote-b8", "Best response to a fake support request?", "Use the known help-desk channel, do not install/connect, preserve indicators, and escalate", "Read back the code", "Attack the caller"),
  ],
  flashcards: [
    { id: "ap-remote-f1", front: "VPN?", back: "Secure network path—not remote desktop itself" },
    { id: "ap-remote-f2", front: "SSH trust signal?", back: "Validate host key; investigate unexpected change" },
    { id: "ap-remote-f3", front: "Attended access?", back: "Present user, visible scope and consent" },
    { id: "ap-remote-f4", front: "Unattended access?", back: "Managed persistent capability under explicit standing authorization" },
    { id: "ap-remote-f5", front: "Minimum features?", back: "Enable only required control, transfer, clipboard, shell, audio, or elevation" },
    { id: "ap-remote-f6", front: "Session complete?", back: "Verified repair plus revoked access and confirmed disconnect" },
  ],
  practiceType: ["reading", "quiz", "flashcard"], estimatedStudyMinutes: 60, difficulty: "medium",
}];
