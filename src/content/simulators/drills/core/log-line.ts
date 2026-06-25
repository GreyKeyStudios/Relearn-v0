import type { ChoiceDrillItem } from "@/components/simulators/SimulatorRegistry";

export const LOG_LINE_POOL: ChoiceDrillItem[] = [
  {
    id: "log-brute",
    prompt: "Which log line most likely indicates a brute-force SSH attack?",
    choices: [
      { id: "a", text: "Failed password for root from 203.0.113.50 port 22 ssh2 (repeated 50 times in 1 min)" },
      { id: "b", text: "Accepted publickey for admin from 192.168.1.10 port 22" },
      { id: "c", text: "session opened for user backup by (uid=0)" },
      { id: "d", text: "systemd: Started Daily apt upgrade" },
    ],
    correctChoiceId: "a",
    weakConcept: "Brute-force detection",
    explanation: "Many failed password attempts from one IP in a short window is classic brute force.",
  },
  {
    id: "log-privesc",
    prompt: "Which entry suggests possible privilege escalation?",
    choices: [
      { id: "a", text: "sudo: user : TTY=pts/0 ; PWD=/tmp ; USER=root ; COMMAND=/bin/bash" },
      { id: "b", text: "cron: (root) CMD (/usr/sbin/logrotate)" },
      { id: "c", text: "kernel: USB disconnect" },
      { id: "d", text: "sshd: Server listening on 0.0.0.0 port 22" },
    ],
    correctChoiceId: "a",
    weakConcept: "Privilege escalation indicators",
    explanation: "Unexpected sudo to root shell from /tmp warrants investigation.",
  },
  {
    id: "log-malware",
    prompt: "Which Windows Event ID pattern suggests malware persistence?",
    choices: [
      { id: "a", text: "Event 4698: Scheduled task created by unknown user at 3 AM" },
      { id: "b", text: "Event 4624: Successful logon (normal user, business hours)" },
      { id: "c", text: "Event 6005: Event log service started" },
      { id: "d", text: "Event 7040: Windows Update service start type changed by SYSTEM" },
    ],
    correctChoiceId: "a",
    weakConcept: "Persistence via scheduled tasks",
  },
  {
    id: "log-scan",
    prompt: "Which firewall log pattern indicates port scanning?",
    choices: [
      { id: "a", text: "DENY tcp 10.0.0.5 → multiple ports on 192.168.1.1 within seconds" },
      { id: "b", text: "ALLOW tcp 192.168.1.10:443 → 203.0.113.1:443 established" },
      { id: "c", text: "ALLOW udp 192.168.1.5:68 → 192.168.1.1:67" },
      { id: "d", text: "DENY icmp unreachable from internal host" },
    ],
    correctChoiceId: "a",
    weakConcept: "Port scan detection",
  },
  {
    id: "log-exfil",
    prompt: "Which web server log suggests data exfiltration?",
    choices: [
      { id: "a", text: "POST /upload.php 200 5GB outbound from compromised account at 2 AM" },
      { id: "b", text: "GET /index.html 200 2KB" },
      { id: "c", text: "GET /favicon.ico 404 0KB" },
      { id: "d", text: "HEAD /health 200 0KB" },
    ],
    correctChoiceId: "a",
    weakConcept: "Data exfiltration indicators",
  },
  {
    id: "log-auth-fail",
    prompt: "Which auth log line needs immediate review?",
    choices: [
      { id: "a", text: "authentication failure; logname= uid=0 euid=0 tty= ruser= rhost=203.0.113.99" },
      { id: "b", text: "session closed for user jsmith" },
      { id: "c", text: "pam_unix(sshd:session): session opened for user jsmith" },
      { id: "d", text: "Accepted password for jsmith from 192.168.1.50" },
    ],
    correctChoiceId: "a",
    weakConcept: "Root authentication failures",
    explanation: "Failed auth for uid=0 (root) from external IP is high priority.",
  },
  {
    id: "log-dos",
    prompt: "Which pattern suggests a SYN flood?",
    choices: [
      { id: "a", text: "Thousands of SYN packets, no corresponding ACKs, from spoofed sources" },
      { id: "b", text: "Steady HTTPS traffic to port 443" },
      { id: "c", text: "Single ICMP echo request" },
      { id: "d", text: "DNS query response NXDOMAIN" },
    ],
    correctChoiceId: "a",
    weakConcept: "SYN flood detection",
  },
  {
    id: "log-lateral",
    prompt: "Which event suggests lateral movement?",
    choices: [
      { id: "a", text: "Successful RDP logon to server B using credentials from compromised server A" },
      { id: "b", text: "User opens email client" },
      { id: "c", text: "Workstation boots normally" },
      { id: "d", text: "Antivirus definition update" },
    ],
    correctChoiceId: "a",
    weakConcept: "Lateral movement indicators",
  },
];
