/** Reusable Packet Tracer guide — linked from any CCNA external lab. */

export interface ExternalToolSection {
  title: string;
  body: string;
  bullets?: string[];
}

export interface ExternalToolGuide {
  id: string;
  name: string;
  downloadUrl: string;
  cost: "free";
  platform: string;
  summary: string;
  sections: ExternalToolSection[];
}

export const PACKET_TRACER_GUIDE: ExternalToolGuide = {
  id: "packet-tracer",
  name: "Cisco Packet Tracer",
  downloadUrl: "https://www.netacad.com/cisco-packet-tracer",
  cost: "free",
  platform: "Windows, macOS, Linux (via Cisco Networking Academy)",
  summary:
    "Cisco's free network simulator — build topologies, configure devices, and test with ping without physical hardware.",
  sections: [
    {
      title: "Download and install",
      body: "Packet Tracer is free through Cisco Networking Academy. You need a free account before you can download.",
      bullets: [
        "Go to netacad.com → Cisco Packet Tracer (or use the download button on this page).",
        "Create a free Networking Academy account if you do not have one.",
        "Download the installer for your OS and run it.",
        "Launch Packet Tracer and sign in with the same Academy account.",
      ],
    },
    {
      title: "First 5 minutes in the app",
      body: "Learn the layout once — every Bridge Packet Tracer lab assumes you know this.",
      bullets: [
        "Bottom shelf: drag a PC and a Switch into the workspace.",
        "Cable tool (lightning bolt): choose Copper Straight-Through, click PC → switch.",
        "Click the PC → Desktop tab → IP Configuration: set 192.168.1.10, mask 255.255.255.0.",
        "Desktop → Command Prompt: ping 127.0.0.1 (tests the PC stack).",
        "File → Save As: save your work as a .pkt file.",
      ],
    },
    {
      title: "What Bridge labs use it for",
      body: "Packet Tracer appears in several CCNA topics — install it once, reuse it throughout the track.",
      bullets: [
        "Subnetting — split a /24, assign IPs, ping between subnets through a router.",
        "VLANs — build multi-VLAN topologies with trunk links.",
        "Static routes and OSPF — configure routers and verify routing tables.",
      ],
    },
    {
      title: "Troubleshooting quick checks",
      body: "When something does not work in a lab, check these before guessing.",
      bullets: [
        "Link lights green? If red, cable type or port may be wrong.",
        "IP and mask on the same subnet? Gateway must be local (usually .1).",
        "Ping 127.0.0.1 first — if that fails, the PC config is broken.",
        "Ping gateway before pinging remote subnets.",
        "Router interfaces up? Click router → CLI → show ip interface brief.",
      ],
    },
  ],
};

const WIRESHARK_GUIDE: ExternalToolGuide = {
  id: "wireshark",
  name: "Wireshark",
  downloadUrl: "https://www.wireshark.org/download.html",
  cost: "free",
  platform: "Windows, macOS, Linux",
  summary: "A packet analyzer used to capture traffic and inspect protocols without changing the network.",
  sections: [
    { title: "Install safely", body: "Download only from wireshark.org. On Windows, allow the bundled Npcap capture driver when prompted.", bullets: ["Close sensitive apps before a practice capture.", "Use your own device and network unless you have explicit authorization.", "Open Wireshark after installation and confirm interfaces appear on the welcome screen."] },
    { title: "First 5 minutes", body: "Start with a short capture so the interface stays manageable.", bullets: ["Double-click the active Wi-Fi or Ethernet interface.", "Open one ordinary web page, then stop the capture with the red square.", "Use the display-filter box with arp, dns, or icmp.", "Click a packet and expand Ethernet II, Internet Protocol, and the next protocol layer."] },
    { title: "When you get stuck", body: "A blank or overwhelming capture usually has a simple cause.", bullets: ["No interfaces: reopen as administrator once and confirm Npcap installed.", "No packets: choose the interface whose activity graph is moving.", "Red filter box: the display-filter syntax is invalid; clear it and try a single protocol name.", "Never capture traffic you do not own or have permission to inspect."] },
  ],
};

const LOCAL_GIT_GUIDE: ExternalToolGuide = {
  id: "local-git",
  name: "Local Git",
  downloadUrl: "https://git-scm.com/downloads",
  cost: "free",
  platform: "Windows, macOS, Linux",
  summary: "The local version-control tool used for repositories, commits, branches, diffs, and recovery practice.",
  sections: [
    { title: "Install and verify", body: "Use the official Git download. The installer defaults are fine for this course.", bullets: ["Windows: install Git for Windows and keep Git Bash enabled.", "macOS: the git command may offer to install Command Line Tools.", "Open a new terminal and run git --version.", "Configure a practice name and email before the first commit with git config --global user.name and user.email."] },
    { title: "First 5 minutes", body: "Git acts on the folder your terminal is currently inside.", bullets: ["Create a disposable practice folder.", "Run git init, then git status.", "Create one text file, run git add on it, and check git status again.", "Do not practice first inside an important existing project."] },
    { title: "When you get stuck", body: "Stop and inspect before trying random recovery commands.", bullets: ["'git is not recognized': close and reopen the terminal; reinstall if git --version still fails.", "Identity error on commit: set user.name and user.email as shown above.", "Unsure what changed: run git status and git diff.", "Avoid reset --hard, clean -f, and force push until a lesson explicitly explains the risk."] },
  ],
};

const GITHUB_GUIDE: ExternalToolGuide = {
  id: "github-free",
  name: "GitHub",
  downloadUrl: "https://github.com/signup",
  cost: "free",
  platform: "Web",
  summary: "A hosted collaboration service for Git repositories, pull requests, issues, and code review.",
  sections: [
    { title: "Create and protect your account", body: "A free account is enough for every course lab.", bullets: ["Use a unique password and enable multi-factor authentication.", "Never paste passwords, access tokens, private keys, or recovery codes into a repository.", "Keep the first practice repository private if you are unsure what files it contains."] },
    { title: "First 5 minutes", body: "Learn the difference between work on your PC and the copy hosted on GitHub.", bullets: ["Create an empty practice repository without adding secrets.", "Copy its HTTPS URL from the Code button.", "A push uploads commits; a pull brings remote commits down; neither replaces careful review.", "Use the repository's Pull requests tab for the course review workflow."] },
    { title: "When you get stuck", body: "Authentication and branch-name errors are common and recoverable.", bullets: ["Read the complete terminal error before retrying.", "Confirm the remote with git remote -v and the current branch with git branch --show-current.", "Use Git Credential Manager or GitHub's documented authentication flow; do not put a token in a command saved to notes.", "If a push is rejected, pull and inspect instead of immediately force-pushing."] },
  ],
};

const POWERSHELL_GUIDE: ExternalToolGuide = {
  id: "windows-powershell",
  name: "Windows PowerShell",
  downloadUrl: "https://learn.microsoft.com/powershell/scripting/install/installing-powershell-on-windows",
  cost: "free",
  platform: "Windows (PowerShell 7 also supports macOS and Linux)",
  summary: "Windows' object-based command shell and scripting environment for inspection, reporting, and administration.",
  sections: [
    { title: "Open the right shell", body: "Windows PowerShell 5.1 is already included with Windows; Windows Terminal is only the window that can host it.", bullets: ["Open Start, type PowerShell, and choose the non-administrator result for early labs.", "The prompt shows your current folder; commands run there unless you change location.", "Run $PSVersionTable.PSVersion to see your version."] },
    { title: "First 5 minutes", body: "Begin with read-only discovery commands.", bullets: ["Run Get-Location, Get-ChildItem, and Get-Date.", "Run Get-Help Get-Process -Examples before using an unfamiliar cmdlet.", "Use Ctrl+C to stop a command that is taking too long.", "Do not paste commands you cannot explain, especially into an administrator window."] },
    { title: "When you get stuck", body: "PowerShell errors usually name the command, parameter, path, or permission that failed.", bullets: ["Command not found: check spelling and run Get-Command *keyword*.", "Access denied: confirm the task is authorized before considering elevation.", "Script execution blocked: use the course's signed/local script guidance; do not disable policy globally as a shortcut.", "Inspect first with Get-Help and -WhatIf when a cmdlet supports it."] },
  ],
};

const FL_STUDIO_GUIDE: ExternalToolGuide = {
  id: "fl-studio-stock",
  name: "FL Studio (stock plugins)",
  downloadUrl: "https://www.image-line.com/fl-studio-download/",
  cost: "free",
  platform: "Windows, macOS (trial is sufficient for the pilot labs)",
  summary: "The practice digital audio workstation used to hear, shape, compare, and render sounds with stock plugins.",
  sections: [
    { title: "Install and hear sound", body: "Install from Image-Line, open FL Studio, and solve audio output before starting a synthesis lab.", bullets: ["Open Options → Audio settings and select a working output device.", "Set the main volume low before testing headphones or speakers.", "Open the Channel Rack and add 3xOSC from the plus button.", "Click the small piano keyboard in the plugin to confirm you hear a note."] },
    { title: "Start from a known sound", body: "Course labs use stock plugins and an initialized patch so preset differences do not hide the lesson.", bullets: ["Use 3xOSC for Module 0 waveform work.", "Open Wave Candy on the mixer when a lesson asks you to see the waveform or spectrum.", "Save each exercise as a new .flp file before experimenting.", "A DAW is the workspace; an oscillator or synth plugin is the sound source inside it."] },
    { title: "When you get stuck", body: "Most first-session failures are routing, level, or plugin-selection problems.", bullets: ["No sound: check the audio device, master volume, mixer mute state, and whether a note is playing.", "Crackles: increase the audio buffer size in Audio settings.", "Cannot find a control: confirm you opened the named stock plugin and return to its default/init state.", "Protect your ears—lower output before resonance sweeps or sudden waveform changes."] },
  ],
};

const VIRTUALBOX_GUIDE: ExternalToolGuide = {
  id: "oracle-virtualbox",
  name: "Oracle VirtualBox",
  downloadUrl: "https://www.virtualbox.org/wiki/Downloads",
  cost: "free",
  platform: "Windows, macOS, Linux hosts",
  summary: "A desktop hypervisor used to create disposable guest computers for safe command and recovery practice.",
  sections: [
    { title: "Before installation", body: "Confirm the host has enough resources and that hardware virtualization is available.", bullets: ["Aim for at least 8 GB RAM and 40 GB free disk space; 16 GB RAM is more comfortable.", "Back up important host work and close other applications.", "Download only from virtualbox.org.", "If virtualization is disabled, follow the computer manufacturer's firmware instructions rather than guessing."] },
    { title: "First 5 minutes", body: "Open VirtualBox Manager before downloading or creating a guest.", bullets: ["Use Help → About to record the installed version.", "The left pane lists virtual machines; an empty list is normal on first launch.", "A guest uses real host RAM and disk while running, so start with conservative settings.", "Snapshots are recovery points, not backups of important host files."] },
    { title: "When you get stuck", body: "Installation and startup errors often come from host security or virtualization conflicts.", bullets: ["Reboot once after installation if drivers or network adapters are unavailable.", "A 64-bit guest option missing usually means hardware virtualization is disabled or owned by another hypervisor.", "Do not disable security features blindly; record the exact error and consult the official manual or your administrator.", "Keep shared folders off until the course explicitly introduces their containment tradeoff."] },
  ],
};

const UBUNTU_GUIDE: ExternalToolGuide = {
  id: "ubuntu-desktop-iso",
  name: "Ubuntu Desktop ISO (LTS)",
  downloadUrl: "https://ubuntu.com/download/desktop",
  cost: "free",
  platform: "Guest operating system image",
  summary: "The long-term-support Linux installer image used to create the course's disposable guest computer.",
  sections: [
    { title: "Download the correct file", body: "Choose the current Ubuntu Desktop LTS ISO from ubuntu.com.", bullets: ["An ISO is a virtual installer disc; do not open it as a normal Windows installer.", "Save it somewhere with enough space and keep the .iso extension.", "Use the published checksum if the download was interrupted or VirtualBox reports a corrupt image."] },
    { title: "Attach it to the guest", body: "Create the VM in VirtualBox, then select the ISO when the wizard asks for installation media.", bullets: ["Choose Linux / Ubuntu 64-bit when asked for the guest type.", "Allocate resources within the limits taught in the requirements lesson.", "Install inside the virtual disk—the host drive is not being replaced.", "Take the course's clean snapshot after updates and the first successful boot."] },
    { title: "When you get stuck", body: "Keep the exact VirtualBox message and identify whether failure happened before boot, during install, or after restart.", bullets: ["No 64-bit option: check hardware virtualization availability.", "Black screen or freeze: reduce graphics features and verify assigned RAM is reasonable.", "Installer repeats after restart: detach the ISO from the virtual optical drive.", "Do not delete the VM until you have checked whether a snapshot or configuration fix can recover it."] },
  ],
};

const POWERSHELL_GALLERY_GUIDE: ExternalToolGuide = {
  id: "powershell-gallery",
  name: "PowerShell Gallery",
  downloadUrl: "https://www.powershellgallery.com",
  cost: "free",
  platform: "Any machine running PowerShell 5.1 or PowerShell 7",
  summary:
    "Microsoft's public repository for PowerShell modules and scripts — the source Find-Module and Install-Module talk to.",
  sections: [
    { title: "Check before you install", body: "The Gallery is public, so anyone can publish. Treat a module like any other third-party code.", bullets: ["Run Find-Module <name> and read Author, Owners, PublishedDate, and DownloadCount before installing.", "Open the module's Gallery page and check the project or source-code link exists and looks maintained.", "Prefer modules published by Microsoft or a vendor you already trust for anything that touches identity or production.", "Never install a module on a work machine because a forum post told you to."] },
    { title: "Install without needing administrator", body: "Scope decides who the module is installed for and whether elevation is required.", bullets: ["Use Install-Module <name> -Scope CurrentUser for course labs — no admin rights needed.", "-Scope AllUsers writes to a shared location and does need elevation.", "Run Get-InstalledModule to see what you already have, and Get-Module -ListAvailable to see everything importable.", "Use Save-Module instead of Install-Module when you want to inspect the files before they are importable."] },
    { title: "When you get stuck", body: "Most Gallery problems are transport, trust prompts, or two versions side by side.", bullets: ["'Unable to resolve package source': the machine cannot reach the Gallery — check proxy or network before reinstalling anything.", "Untrusted-repository prompt: that prompt is the point. Read it, then answer deliberately rather than suppressing it permanently.", "Old TLS on PowerShell 5.1 can block the Gallery; follow Microsoft's documented TLS 1.2 guidance rather than disabling checks.", "Two versions installed: pass -RequiredVersion to Import-Module so a script is not silently upgraded under you."] },
  ],
};

const GRAPH_POWERSHELL_GUIDE: ExternalToolGuide = {
  id: "microsoft-graph-powershell",
  name: "Microsoft Graph PowerShell SDK",
  downloadUrl: "https://learn.microsoft.com/powershell/microsoftgraph/installation",
  cost: "free",
  platform: "Windows, macOS, Linux (PowerShell 7 recommended)",
  summary:
    "The current, supported PowerShell surface for Microsoft 365 and Entra ID data — the replacement for the retired AzureAD and MSOnline modules.",
  sections: [
    { title: "You do not need a tenant for this course", body: "Every graded Graph step in PowerShell II runs against fixture data you generate locally. A live tenant is optional.", bullets: ["The fixture path teaches the same pipeline: convert JSON, inspect with Get-Member, filter, report.", "If you want a live tenant, use a free Microsoft 365 Developer tenant — never a production tenant you do not own.", "Install with Install-Module Microsoft.Graph -Scope CurrentUser when you are ready to connect.", "Do not install this on a work machine without your administrator's agreement."] },
    { title: "Least privilege from the first connect", body: "Connect-MgGraph asks for the permission scopes you name, so name the smallest set that answers your question.", bullets: ["Connect-MgGraph -Scopes 'User.Read.All' is enough to read a user report; do not ask for .ReadWrite to run a Get- command.", "Run Get-MgContext after connecting to confirm which account and scopes you actually hold.", "Disconnect-MgGraph when you finish a session.", "Consent prompts are a control, not an obstacle — read what is being requested."] },
    { title: "When you get stuck", body: "Graph errors usually name the scope, the resource, or the query that was rejected.", bullets: ["'Insufficient privileges': reconnect with the specific scope the cmdlet documents, not a broader one.", "Empty result with no error: you probably selected a property Graph did not return — check with Get-Member.", "Throttling (HTTP 429): back off and retry rather than looping harder.", "Old blog posts reference AzureAD or MSOnline cmdlets. Those modules are retired — use the Microsoft.Graph equivalents."] },
  ],
};

const AZURE_POWERSHELL_GUIDE: ExternalToolGuide = {
  id: "azure-powershell-az",
  name: "Azure PowerShell (Az module)",
  downloadUrl: "https://learn.microsoft.com/powershell/azure/install-azure-powershell",
  cost: "free",
  platform: "Windows, macOS, Linux (PowerShell 7 recommended)",
  summary:
    "The supported PowerShell module for discovering, querying, and automating Azure resources. Replaces the retired AzureRM module.",
  sections: [
    { title: "You do not need a subscription for this course", body: "The graded Azure work in PowerShell II runs against fixture data you generate locally, so nobody has to hand over a card.", bullets: ["The fixture path exercises the same objects, grouping, and reporting you would do live.", "If you want live practice, an Azure free account with read-only Get-Az* commands is enough.", "Install with Install-Module Az -Scope CurrentUser -Repository PSGallery when you are ready.", "Az replaced AzureRM; ignore tutorials that still use AzureRM cmdlets."] },
    { title: "Context is the thing people get wrong", body: "Every Az command runs against the subscription in your current context, which is not always the one you meant.", bullets: ["Connect-AzAccount signs you in; Get-AzContext shows which account, tenant, and subscription you are pointed at.", "Get-AzSubscription lists what you can reach; Set-AzContext -SubscriptionId switches deliberately.", "Print the context at the top of any reporting script so the output says which subscription it describes.", "Reading in the wrong subscription wastes time; writing in the wrong subscription causes incidents."] },
    { title: "When you get stuck", body: "Az failures are usually authentication, context, or permission — in that order.", bullets: ["'Run Connect-AzAccount to login': your token expired or you are in a new session.", "Empty resource list: check Get-AzContext before assuming the resources are gone.", "Authorization failed: your role does not grant the action; ask for the specific read role rather than Owner.", "Stick to Get-Az* while learning. Any New-, Set-, or Remove- command deserves -WhatIf and a change plan first."] },
  ],
};

const GUIDES: Record<string, ExternalToolGuide> = {
  "packet-tracer": PACKET_TRACER_GUIDE,
  wireshark: WIRESHARK_GUIDE,
  "local-git": LOCAL_GIT_GUIDE,
  "github-free": GITHUB_GUIDE,
  "windows-powershell": POWERSHELL_GUIDE,
  "powershell-gallery": POWERSHELL_GALLERY_GUIDE,
  "microsoft-graph-powershell": GRAPH_POWERSHELL_GUIDE,
  "azure-powershell-az": AZURE_POWERSHELL_GUIDE,
  "fl-studio-stock": FL_STUDIO_GUIDE,
  "oracle-virtualbox": VIRTUALBOX_GUIDE,
  "ubuntu-desktop-iso": UBUNTU_GUIDE,
};

export function getExternalToolGuide(toolId: string): ExternalToolGuide | undefined {
  return GUIDES[toolId];
}

export function getExternalToolGuideIds(): string[] {
  return Object.keys(GUIDES);
}
