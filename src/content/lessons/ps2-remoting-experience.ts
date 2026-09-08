import type { TopicExperience } from "@/content/types";

/** LES — PowerShell remoting concepts (PowerShell II Module 4). */
export const PS2_REMOTING_EXPERIENCE: TopicExperience = {
  anchor: { type: "powershell-automation" },
  screens: [
    {
      id: "hero",
      type: "hero",
      powershellAutomationStage: 3,
      headline: "Remoting moves the command to the machine, not the machine to you.",
      body: "Instead of an RDP session per host, you send code to run where the data is and get objects back. This lesson teaches the model honestly — ReLearn cannot hand you a fleet of servers, so the graded lab has you predict and explain behaviour rather than watch faked success output.",
    },
    {
      id: "winrm",
      type: "teach",
      powershellAutomationStage: 3,
      headline: "WinRM is the transport; PSRP is the protocol on top.",
      body: "Windows Remote Management listens on 5985 for HTTP and 5986 for HTTPS. Even on 5985, the payload is encrypted at the protocol layer for domain-authenticated sessions — but the channel is not TLS, which is why hardened environments require HTTPS listeners. Enable-PSRemoting configures the service, the listener, and the firewall rule; it is an administrative change on a server, not something to run casually.",
      terms: [
        {
          id: "winrm",
          label: "WinRM",
          tier: "now",
          shortDefinition:
            "The Windows service that accepts remote PowerShell connections, on TCP 5985 (HTTP) or 5986 (HTTPS).",
        },
      ],
    },
    {
      id: "two-verbs",
      type: "teach",
      powershellAutomationStage: 3,
      headline: "Enter-PSSession is interactive. Invoke-Command is automation.",
      body: "Enter-PSSession puts your prompt on one remote host so you can poke around — useful for diagnosis, useless in a script. Invoke-Command sends a scriptblock to one or many hosts, runs them in parallel, and returns objects tagged with PSComputerName. Automation almost always wants the second one.",
      media: {
        kind: "flow",
        items: [
          { icon: "terminal", label: "Enter-PSSession" },
          { icon: "network", label: "Invoke-Command" },
          { icon: "server", label: "Fan-out" },
          { icon: "package", label: "Objects back" },
        ],
      },
    },
    {
      id: "serialization",
      type: "teach",
      powershellAutomationStage: 3,
      headline: "What comes back is a deserialised copy, not a live object.",
      body: "Objects cross the wire as XML and arrive as Deserialized.* types with properties intact but methods gone. So $svc = Invoke-Command { Get-Service BITS } then $svc.Stop() fails locally. The fix is to do the work remotely inside the scriptblock and return only the data you need.",
      studyTip: {
        title: "This explains most remoting confusion",
        body: "\"Properties survive, methods do not.\" Say it once and half the strange remoting errors you will meet stop being strange.",
      },
    },
    {
      id: "scope",
      type: "teach",
      powershellAutomationStage: 3,
      headline: "The scriptblock cannot see your local variables — unless you pass them.",
      body: "A remote scriptblock runs in a fresh session with no memory of your console. Use $using:MyVar to capture a local value, or -ArgumentList with a param block. Reusable sessions from New-PSSession keep state and connection cost down when you call the same hosts repeatedly, and Remove-PSSession cleans up.",
    },
    {
      id: "misconception",
      type: "misconception",
      powershellAutomationStage: 3,
      headline: "\"Remoting on port 5985 is plaintext, so it is insecure.\"",
      body: "The message payload is encrypted for authenticated sessions, so credentials are not on the wire in the clear. The real security concerns are different: default credential delegation limits (the second-hop problem), TrustedHosts wildcards in workgroups, and the fact that a remoting endpoint is a full administrative entry point. Say which concern you mean.",
    },
    {
      id: "check",
      type: "checkpoint",
      powershellAutomationStage: 3,
      headline: "Quick check — remoting",
      checkpointQuestionId: "ps2-remoting-q1",
    },
    {
      id: "summary",
      type: "summary",
      powershellAutomationStage: 3,
      headline: "Send the scriptblock, return the data, remember it is a copy.",
      body: "Interactive diagnosis uses Enter-PSSession; automation uses Invoke-Command with $using: and reusable sessions. Objects arrive without methods, and every remoting endpoint you enable is an administrative door you now own.",
    },
  ],
};
