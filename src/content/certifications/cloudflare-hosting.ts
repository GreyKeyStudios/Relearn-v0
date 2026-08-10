import type { Certification, ExternalResource, QuizQuestion, Topic } from "../types";

type Check = {
  prompt: string;
  correct: string;
  distractors: [string, string, string];
  explanation: string;
};

interface TopicSeed {
  id: string;
  name: string;
  objectivePrefix: string;
  minutes: number;
  content: string;
  lightbulb: string;
  facts: [string, string, string, string, string];
  example: [string, string, string, string, string];
  mistakes: [string, string, string];
  traps: [string, string, string];
  scenario: string;
  checks: [Check, Check, Check, Check, Check, Check, Check, Check];
  resource: ExternalResource;
  labTitle: string;
  labMinutes: number;
  labInstructions: string;
  criteria: [string, string, string];
  prerequisite?: string;
  extraResource?: ExternalResource;
  extraAssignment?: {
    id: string;
    title: string;
    resourceId: string;
    instructions: string;
    criteria: [string, string];
  };
}

function choices(check: Check) {
  return [
    { id: "a", text: check.correct },
    { id: "b", text: check.distractors[0] },
    { id: "c", text: check.distractors[1] },
    { id: "d", text: check.distractors[2] },
  ];
}

function question(topicId: string, check: Check, index: number, bank = false): QuizQuestion {
  return {
    id: `${topicId}-${bank ? "b" : "q"}${index + 1}`,
    prompt: check.prompt,
    choices: choices(check),
    correctChoiceId: "a",
    explanation: check.explanation,
    difficulty: index < 2 ? "easy" : index < 6 ? "medium" : "hard",
  };
}

function makeTopic(seed: TopicSeed): Topic {
  const labId = `${seed.id}-lab`;
  return {
    id: seed.id,
    name: seed.name,
    objectives: [
      `${seed.objectivePrefix}-O1`,
      `${seed.objectivePrefix}-O2`,
      `${seed.objectivePrefix}-O3`,
    ],
    prerequisites: seed.prerequisite ? [seed.prerequisite] : undefined,
    estimatedStudyMinutes: seed.minutes,
    difficulty: seed.minutes >= 60 ? "medium" : "easy",
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    lesson: { title: seed.name, content: seed.content },
    lightbulbMoment: seed.lightbulb,
    keyFacts: [...seed.facts],
    guidedExample: { title: `${seed.name}: guided decision`, steps: [...seed.example] },
    commonMistakes: [...seed.mistakes],
    realWorldTraps: [...seed.traps],
    realWorldScenario: seed.scenario,
    quiz: seed.checks.slice(0, 5).map((check, index) => question(seed.id, check, index)),
    questionBank: seed.checks.map((check, index) => question(seed.id, check, index, true)),
    flashcards: seed.facts.map((fact, index) => ({
      id: `${seed.id}-f${index + 1}`,
      front: index === 0 ? `Core idea: ${seed.name}` : `Remember ${index + 1}`,
      back: fact,
    })),
    externalResources: [seed.resource, ...(seed.extraResource ? [seed.extraResource] : [])],
    assignments: [
      ...(seed.extraAssignment ? [{
        id: seed.extraAssignment.id,
        title: seed.extraAssignment.title,
        type: "external-lab" as const,
        externalResourceId: seed.extraAssignment.resourceId,
        estimatedMinutes: 20,
        order: 1,
        relatedTopicIds: [seed.id],
        instructions: seed.extraAssignment.instructions,
        completionCriteria: [...seed.extraAssignment.criteria],
      }] : []),
      {
        id: labId,
        title: seed.labTitle,
        type: "external-lab",
        externalResourceId: seed.resource.id,
        estimatedMinutes: seed.labMinutes,
        order: seed.extraAssignment ? 2 : 1,
        relatedTopicIds: [seed.id],
        instructions: seed.labInstructions,
        completionCriteria: [...seed.criteria],
      },
    ],
  };
}

const GIT_COURSE: ExternalResource = {
  id: "relearn-git-deployment-path",
  name: "ReLearn Git/GitHub deployment prerequisites",
  url: "/cert/git-github/lesson/git-repos-and-commits",
  cost: "free",
  platform: "web",
  installNotes: "New to Git? Complete Repos and Commits, Clone/Push/Pull, Pull Requests, Secrets, and Undo Safely. Then return to this Cloudflare deployment lesson.",
};

const seeds: TopicSeed[] = [
  {
    id: "cfh-request-path", name: "How a Website Reaches a Visitor", objectivePrefix: "CFH-M01", minutes: 45,
    content: `A hosted website is a chain, not a magic upload button. A visitor enters a domain name. DNS answers where that name should go. Cloudflare can receive the HTTP request at its edge, apply security and caching, then serve static assets or contact an origin server. The browser finally renders the response.

Learn the ownership boundaries before clicking dashboards: the registrar sells and renews the domain; authoritative nameservers publish its DNS answers; Cloudflare may provide DNS, proxying, certificates, caching, security, and application hosting; an origin is the server used when Cloudflare does not already have the response.

Use one question whenever a site fails: how far did the request get? Check registration and nameservers, then DNS, then TLS, then Cloudflare configuration, then the deployment or origin, then the browser. This ordered model replaces random setting changes.

You can complete this module without buying a domain. Draw the path using a fictional site and use browser developer tools or public DNS lookup tools read-only. Never paste account tokens, registrar recovery codes, or private keys into a worksheet or support chat.`,
    lightbulb: "A website outage becomes manageable when you trace one request through registrar → DNS → edge → host → browser.",
    facts: ["A registrar manages domain registration; it is not automatically the website host", "Authoritative DNS publishes records for a domain", "Cloudflare's edge can proxy, secure, cache, or serve a request", "An origin is the upstream server Cloudflare contacts when needed", "Troubleshoot in request order instead of changing unrelated settings"],
    example: ["Visitor requests www.example.com", "The resolver asks authoritative DNS for the name", "The answer directs traffic to Cloudflare or directly to a host", "Cloudflare applies configured edge behavior and serves or forwards the request", "The browser receives an HTTP response and renders the page"],
    mistakes: ["Calling the registrar, DNS provider, and host the same thing", "Changing several layers before identifying which one failed", "Assuming a browser error always means the website files are broken"],
    traps: ["A paid domain can exist with no website behind it", "A healthy origin can be unreachable because DNS points elsewhere", "A cached response can hide a recent origin change"],
    scenario: "A client says their domain was renewed but the site is blank. You verify registration, trace DNS, test HTTPS, and inspect the deployment separately instead of rebuilding the site.",
    checks: [
      { prompt: "Who normally manages a domain's registration and renewal?", correct: "The domain registrar", distractors: ["The visitor's browser", "The HTML file", "The TLS cipher"], explanation: "The registrar records and renews ownership; hosting and DNS may be separate." },
      { prompt: "What does authoritative DNS provide?", correct: "The published records for names in the domain", distractors: ["The website's CSS", "The user's password", "The Git commit history"], explanation: "Authoritative nameservers answer with the domain's configured DNS records." },
      { prompt: "What is an origin in a proxied website architecture?", correct: "The upstream server Cloudflare may contact", distractors: ["A browser bookmark", "A domain renewal invoice", "A local Git branch"], explanation: "The origin holds or generates content that the edge can request." },
      { prompt: "What is the best first troubleshooting habit?", correct: "Trace how far one request gets", distractors: ["Purge everything immediately", "Change nameservers and TLS together", "Delete and recreate the project"], explanation: "Layer-by-layer evidence prevents unrelated and risky changes." },
      { prompt: "Can a registered domain exist without a working website?", correct: "Yes; registration does not create hosting", distractors: ["No; registration uploads HTML", "Only if HTTPS is disabled", "Only on private networks"], explanation: "Registration, DNS, and hosting are distinct services." },
      { prompt: "A DNS answer is correct but HTTPS fails. Which layer is next?", correct: "TLS and certificate configuration", distractors: ["Domain spelling lessons", "Git commit messages", "Image compression"], explanation: "The request reached the right name; now inspect the secure connection." },
      { prompt: "Why can an old page remain after an origin update?", correct: "A browser or edge cache may still hold it", distractors: ["DNS rewrites HTML", "Registrars store every page", "TLS prevents updates"], explanation: "Caching is another state layer and must be inspected deliberately." },
      { prompt: "Which secret belongs in a troubleshooting worksheet?", correct: "None—record identifiers and sanitized symptoms only", distractors: ["API token", "Registrar recovery code", "Private key"], explanation: "Operational notes must never collect credentials or private keys." },
    ],
    resource: { id: "cloudflare-learning-path", name: "Cloudflare fundamentals documentation", url: "https://developers.cloudflare.com/fundamentals/", cost: "free", platform: "web", installNotes: "No Cloudflare account or purchase is required for this read-only request-path lab." },
    labTitle: "Trace a website request", labMinutes: 25,
    labInstructions: `### Try It\n1. Choose a public website you do not control.\n2. Draw registrar → authoritative DNS → Cloudflare/edge → host/origin → browser.\n3. Use a read-only DNS lookup and browser Network panel to collect one record, status code, and response header.\n4. Label facts separately from assumptions.\n\n### Break It\n5. Pretend the browser reports a certificate error; mark which layers are already proven and which are not.\n\n### Fix It\n6. Write the next three read-only checks in order. Do not change the public site.`,
    criteria: ["Request path includes all five ownership layers", "Evidence is separated from assumptions", "Recovery checks follow request order"],
  },
  {
    id: "cfh-domains-dns", name: "Domains, Nameservers, and DNS Records", objectivePrefix: "CFH-M02", minutes: 60, prerequisite: "cfh-request-path",
    content: `DNS maps names to services. A and AAAA records point names to IPv4 and IPv6 addresses. CNAME records alias one name to another. MX records route mail, while TXT records commonly prove ownership or publish email and security policy. CAA can restrict which certificate authorities may issue certificates for the domain.

Cloudflare's orange-cloud proxy status changes the traffic path for supported records: visitors receive Cloudflare addresses and HTTP traffic passes through Cloudflare. DNS-only records reveal the configured destination and do not receive the same proxy features. Proxy status is a routing and protection decision—not a decoration.

Nameserver changes delegate authoritative control for the whole zone. Inventory existing records first, especially MX and TXT records used by email. TTL affects how long resolvers may reuse an answer; it does not guarantee a universal countdown. During a change, query the authoritative answer and more than one resolver before declaring propagation broken.

Use placeholder domains in practice unless you own the zone. Never change a production nameserver, mail record, or DNSSEC setting without an inventory, rollback record, and authorization.`,
    lightbulb: "DNS records answer different questions; proxy status decides whether web traffic stops at Cloudflare first.",
    facts: ["A and AAAA map names to IPv4 and IPv6 addresses", "CNAME aliases one hostname to another", "MX and TXT records often protect email and ownership workflows", "Proxied and DNS-only records create different traffic paths", "Nameserver migration requires an inventory and rollback plan"],
    example: ["Inventory the current zone and export or record every entry", "Identify web, mail, verification, and service records", "Choose proxy status only for supported web hostnames", "Change delegation during an approved window", "Verify authoritative DNS, public resolvers, web, and mail separately"],
    mistakes: ["Deleting unfamiliar TXT or MX records during migration", "Using CNAME at arbitrary locations without checking provider support", "Treating TTL as an exact worldwide timer"],
    traps: ["A website may work while mail is broken", "DNS-only can expose an origin address", "A stale recursive answer can differ from the authoritative answer"],
    scenario: "A small business wants Cloudflare for its website but uses a separate mail provider. You preserve MX/TXT records, proxy only web names, and verify mail after delegation.",
    checks: [
      { prompt: "Which record maps a name to an IPv4 address?", correct: "A", distractors: ["AAAA", "MX", "TXT"], explanation: "An A record carries an IPv4 address." },
      { prompt: "Which record normally routes email?", correct: "MX", distractors: ["A", "CAA", "PTR"], explanation: "MX records name the mail exchangers for a domain." },
      { prompt: "What does proxied status usually mean for supported web traffic?", correct: "Traffic reaches Cloudflare before the origin", distractors: ["Email is automatically hosted", "The registrar changes", "Git commits are cached"], explanation: "The proxy places Cloudflare's edge in the HTTP path." },
      { prompt: "What should happen before changing nameservers?", correct: "Inventory records and prepare rollback", distractors: ["Delete all TXT records", "Disable mail", "Purge browser history"], explanation: "Delegation affects the whole zone, so preserve services and recovery data." },
      { prompt: "Does TTL guarantee every resolver updates at the same second?", correct: "No; it is a cache lifetime input, not a universal timer", distractors: ["Yes, to the millisecond", "Only for MX", "Only when proxied"], explanation: "Caches and query timing vary; compare authoritative and recursive answers." },
      { prompt: "Which record aliases one hostname to another?", correct: "CNAME", distractors: ["MX", "TXT", "CAA"], explanation: "A CNAME points a name at another canonical hostname." },
      { prompt: "Why preserve TXT records during migration?", correct: "They may verify services or publish email/security policy", distractors: ["They contain site images", "They choose browser fonts", "They replace nameservers"], explanation: "Unfamiliar TXT values may be critical to third-party services." },
      { prompt: "The authoritative answer is new but one resolver is old. What is likely?", correct: "That resolver still has a cached answer", distractors: ["The HTML is invalid", "The domain was never registered", "TLS changed the record"], explanation: "Recursive resolvers can retain prior answers until their caches expire." },
    ],
    resource: { id: "cloudflare-dns-docs", name: "Cloudflare DNS documentation", url: "https://developers.cloudflare.com/dns/", cost: "free", platform: "web", installNotes: "Use a practice zone or a written simulation. Do not modify production DNS or email records without authorization." },
    labTitle: "Plan a safe DNS migration", labMinutes: 40,
    labInstructions: `### Try It\n1. Build a fictional zone inventory for apex, www, mail, and one verification TXT record.\n2. Label record type, target, purpose, TTL, and intended proxy status.\n3. Write pre-change and post-change checks for web and mail.\n\n### Break It\n4. Remove the MX and TXT rows from a copy of the plan. Predict the user-visible damage.\n\n### Fix It\n5. Restore the records from the inventory and write a nameserver rollback step.`,
    criteria: ["Zone inventory distinguishes web and mail records", "Proxy choices include reasons", "Migration includes verification and rollback"],
  },
  {
    id: "cfh-git-deploy", name: "Deploy a Static Site from Git", objectivePrefix: "CFH-M03", minutes: 60, prerequisite: "cfh-domains-dns",
    content: `A deployment turns a known Git commit into a hosted version of the website. Cloudflare can connect a Git provider for automatic preview and production builds, or deploy static assets through its developer tooling. The exact product screens evolve, but the durable workflow is commit → build → immutable deployment → verify → promote or roll back.

Before connecting a repository, know the framework, install command, build command, output directory, runtime version, and environment variables. A plain HTML site may need no build step. A framework site usually produces a directory such as dist or another framework-specific output. Never guess the output directory: run the build locally and inspect what it creates.

Use preview deployments for branches and pull requests. Verify links, assets, forms, console errors, and responsive layout before production. A successful build does not prove the site works; it only proves the build process exited successfully.

This module deliberately cross-references ReLearn's Git/GitHub course. If repos, commits, pushes, branches, pull requests, .gitignore, or safe undo are unfamiliar, complete those lessons and then return here. Cloudflare owns deployment behavior; Git/GitHub owns version-control fluency.`,
    lightbulb: "A deployment is a specific commit plus a repeatable build—not whatever files happen to be on your laptop.",
    facts: ["Production should identify the exact deployed commit", "Build command and output directory are separate settings", "Preview deployments make branch changes testable before production", "A green build still requires browser verification", "Secrets belong in platform secret/environment controls, never the repository"],
    example: ["Confirm the repository and default production branch", "Run the documented build locally", "Configure build command and output directory", "Push a feature branch and inspect its preview", "Merge only after preview checks; record the production deployment"],
    mistakes: ["Choosing an output directory by guesswork", "Testing only the home page after a green build", "Committing API keys because the host needs them"],
    traps: ["A wrong base directory can build the wrong project", "Case-sensitive asset paths may work locally and fail remotely", "A preview can pass while production uses different environment values"],
    scenario: "A portfolio site builds successfully but every image is missing. You inspect the deployed commit, output folder, asset paths, and browser network errors before changing DNS.",
    checks: [
      { prompt: "What should a production deployment identify?", correct: "The exact Git commit it was built from", distractors: ["Only the developer's laptop name", "A DNS TTL", "The registrar invoice"], explanation: "Commit identity makes releases reproducible and reversible." },
      { prompt: "What is the output directory?", correct: "The folder containing files produced for hosting", distractors: ["The GitHub password", "The DNS zone", "The browser cache"], explanation: "The host publishes the build output, not necessarily the repository root." },
      { prompt: "Why use a preview deployment?", correct: "Test a branch before changing production", distractors: ["Avoid commits", "Replace DNS", "Store secrets publicly"], explanation: "Previews isolate proposed changes and support review." },
      { prompt: "What does a successful build prove?", correct: "The configured build process completed", distractors: ["Every user flow works", "DNS is correct", "All secrets are safe"], explanation: "Browser and functional checks remain necessary." },
      { prompt: "Where should deployment secrets live?", correct: "In the platform's protected secret/environment controls", distractors: ["Committed .env file", "README screenshot", "Public issue"], explanation: "Repositories and build logs are not secret stores." },
      { prompt: "Images fail only in production. What evidence comes first?", correct: "Browser network errors and deployed asset paths", distractors: ["Nameserver replacement", "Domain transfer", "Delete the repo"], explanation: "The site is reachable; inspect the failing asset layer." },
      { prompt: "What is a safe production change path?", correct: "Branch → preview → review → merge → verify", distractors: ["Edit main blindly", "Delete old deployments", "Change DNS for every release"], explanation: "A reviewable workflow limits impact and preserves recovery." },
      { prompt: "Who owns teaching branch and pull-request fluency?", correct: "The ReLearn Git/GitHub track", distractors: ["DNS alone", "The certificate authority", "The browser cache"], explanation: "Cloudflare applies Git skills; it should link to—not duplicate—the Git course." },
    ],
    resource: { id: "cloudflare-deploy-docs", name: "Cloudflare website deployment documentation", url: "https://developers.cloudflare.com/workers/static-assets/", cost: "free", platform: "web", installNotes: "Cloudflare product paths evolve. Follow the current official static-assets or Pages migration guidance shown in the documentation." },
    extraResource: GIT_COURSE,
    extraAssignment: { id: "cfh-git-readiness", title: "Git/GitHub readiness check", resourceId: GIT_COURSE.id, instructions: `### Check yourself\n1. Can you create a repository, commit, push, and open a pull request?\n2. Can you keep secrets out with .gitignore?\n3. Can you revert or correct a bad deployment commit?\n\nIf any answer is no, open the ReLearn Git/GitHub path. Complete the linked lesson and continue through Clone/Push/Pull, Pull Requests, Secrets, and Undo Safely. Then return to this assignment.`, criteria: ["Can identify the commit and branch being deployed", "Can push safely without committing secrets"] },
    labTitle: "Publish and recover a static site", labMinutes: 60,
    labInstructions: `### Try It\n1. Use a disposable repository containing index.html and one stylesheet.\n2. Commit and push it, then create a Cloudflare deployment using the current official workflow.\n3. Record the commit, deployment URL, build settings, and verification results.\n\n### Break It\n4. On a branch, change the stylesheet path so the preview loses its styles. Inspect the browser Network panel.\n\n### Fix It\n5. Correct the path, push again, verify the preview, then merge. Keep credentials out of Git.`,
    criteria: ["Live site maps to a recorded commit", "Broken preview was diagnosed from evidence", "Corrected production site passes link and asset checks"],
  },
  {
    id: "cfh-tls-https", name: "HTTPS, Certificates, and TLS Modes", objectivePrefix: "CFH-M04", minutes: 55, prerequisite: "cfh-git-deploy",
    content: `HTTPS protects traffic between participants, but a proxied site may have two encrypted connections: visitor to Cloudflare and Cloudflare to the origin. A browser certificate alone does not prove the origin leg is secure.

Use a mode that validates the origin whenever the architecture has one. Avoid weakening encryption merely to clear an error. Diagnose hostname coverage, expiration, origin reachability, certificate trust, and redirect behavior. Redirect loops usually mean two layers disagree about whether the original request was HTTP or HTTPS.

Automatic HTTPS redirects are useful after HTTPS works. HSTS tells browsers to insist on HTTPS for a period and can be difficult to undo for real visitors; enable it only after every required hostname works securely and recovery is understood. Mixed content occurs when an HTTPS page requests an insecure HTTP asset.

For static assets served entirely by Cloudflare, there may be no separate customer origin certificate to manage. Always draw the actual connection legs before choosing settings.`,
    lightbulb: "A proxied HTTPS site can contain two TLS connections; secure and verify each connection that actually exists.",
    facts: ["Visitor-to-edge and edge-to-origin are separate connection legs", "Certificate hostname, trust, and validity all matter", "Redirect loops usually reflect conflicting scheme assumptions", "Mixed content is an HTTPS page loading an HTTP resource", "HSTS should wait until HTTPS and recovery are proven"],
    example: ["Draw every connection leg", "Confirm DNS and origin reachability", "Inspect the presented certificate and hostname", "Verify origin encryption instead of weakening the mode", "Add redirects, then consider HSTS only after full validation"],
    mistakes: ["Selecting a weaker TLS mode to hide an origin problem", "Enabling HSTS before all hostnames are ready", "Assuming a browser padlock validates every backend connection"],
    traps: ["A redirect rule at both origin and edge can loop", "An expired origin certificate may not look like a visitor certificate error", "One HTTP image can trigger mixed-content warnings"],
    scenario: "After proxying a site, visitors see too many redirects. You map edge and origin scheme behavior, correct the disagreement, and verify HTTPS before considering HSTS.",
    checks: [
      { prompt: "How many TLS legs can a proxied origin website have?", correct: "Two: visitor-to-edge and edge-to-origin", distractors: ["Always zero", "Exactly three", "One Git connection only"], explanation: "The edge terminates one connection and may establish another to the origin." },
      { prompt: "What is mixed content?", correct: "An HTTPS page requesting an HTTP resource", distractors: ["Two CSS files", "Two certificates", "A DNS alias"], explanation: "The insecure subresource weakens the secure page experience." },
      { prompt: "What commonly causes a redirect loop?", correct: "Edge and origin disagree about HTTP versus HTTPS", distractors: ["A short Git commit", "An MX record", "Image compression"], explanation: "Competing redirects can send the request in circles." },
      { prompt: "When should HSTS be enabled?", correct: "After HTTPS works everywhere and recovery is understood", distractors: ["Before obtaining a domain", "To fix any 404", "Before testing subdomains"], explanation: "Browsers cache HSTS policy, making mistakes persistent." },
      { prompt: "What should you do instead of weakening TLS to clear an error?", correct: "Diagnose the origin certificate and connection", distractors: ["Publish the private key", "Disable HTTPS forever", "Change the MX record"], explanation: "Preserve encryption and repair the failing trust or reachability condition." },
      { prompt: "Does a browser padlock prove the origin leg is validated?", correct: "Not by itself", distractors: ["Always", "Only for images", "Only for DNS-only records"], explanation: "The browser sees its connection to the edge, not necessarily the edge-to-origin policy." },
      { prompt: "A static site served entirely at the edge may have what difference?", correct: "No separate customer origin TLS leg", distractors: ["No visitor HTTPS", "No DNS", "No deployment"], explanation: "Draw the real architecture; not every site has a distinct upstream origin." },
      { prompt: "What certificate property must match the request?", correct: "The requested hostname", distractors: ["The Git branch color", "The DNS TTL exactly", "The CSS filename"], explanation: "A valid certificate must cover the hostname the client connects to." },
    ],
    resource: { id: "cloudflare-ssl-docs", name: "Cloudflare SSL/TLS documentation", url: "https://developers.cloudflare.com/ssl/", cost: "free", platform: "web", installNotes: "Practice on a disposable hostname. Do not weaken production encryption or enable HSTS without a tested recovery plan." },
    labTitle: "Diagnose an HTTPS failure safely", labMinutes: 40,
    labInstructions: `### Try It\n1. Draw visitor → Cloudflare → origin and label where TLS starts and ends.\n2. Inspect a practice site's certificate hostname, issuer, and validity in the browser.\n3. Record redirect hops and check for mixed-content messages.\n\n### Break It\n4. Use a fictional configuration card where both edge and origin redirect based on conflicting scheme information. Predict the loop.\n\n### Fix It\n5. Choose one coherent redirect owner and keep validated encryption on every required leg.`,
    criteria: ["Both TLS legs are identified when present", "Evidence distinguishes certificate, redirect, and mixed-content failures", "Fix preserves validated encryption"],
  },
  {
    id: "cfh-cache-performance", name: "Caching and Website Performance", objectivePrefix: "CFH-M05", minutes: 55, prerequisite: "cfh-tls-https",
    content: `Caching stores a reusable response closer to the visitor. Browser caches and Cloudflare's edge cache are different layers. A cache hit can reduce origin work and latency; a miss means the edge must obtain or generate a response. Cacheability depends on request method, status, headers, cookies, rules, and product behavior.

Start with origin response headers and observed cache status. Set intentional Cache-Control behavior in the application when possible, then use edge rules for clear exceptions. Do not cache personalized or authenticated responses broadly. Purging is a recovery tool, not the normal deployment strategy.

Performance is more than cache hit rate. Measure real pages: HTML delivery, render-blocking resources, image sizes, fonts, third-party scripts, and Core Web Vitals. Cloudflare cannot make an oversized client application free.

When content looks stale, compare the deployment, origin response, edge response, and browser cache. Purge the narrowest affected URLs after understanding the cause.`,
    lightbulb: "Browser cache, edge cache, and origin are three copies of state—inspect each before purging everything.",
    facts: ["Browser and edge caches are separate", "Cache-Control communicates reuse policy", "Personalized responses require cautious caching", "A purge treats cached state but not the underlying deployment mistake", "Measure rendering and asset weight, not only network latency"],
    example: ["Confirm the deployed version at the origin or static asset source", "Inspect response cache headers and edge status", "Compare an uncached or versioned request", "Purge only affected URLs if policy is correct", "Fix headers or deployment process so the problem does not recur"],
    mistakes: ["Purging the entire zone for every release", "Caching authenticated pages without understanding variation", "Assuming CDN use fixes oversized images and scripts"],
    traps: ["A service worker can keep stale content after an edge purge", "Cookies may change cache eligibility", "Development tools can disable browser cache and change observations"],
    scenario: "A client sees last week's CSS while you see the new version. You identify the deployed asset hash, compare browser and edge caches, and avoid a blind global purge.",
    checks: [
      { prompt: "Are browser and Cloudflare edge caches the same?", correct: "No; they are separate storage layers", distractors: ["Yes, always", "Only for DNS", "Only for HTML"], explanation: "Each layer can hold a different version and policy." },
      { prompt: "What header commonly communicates cache reuse policy?", correct: "Cache-Control", distractors: ["Content-Language only", "Set-Cookie always", "Location only"], explanation: "Cache-Control expresses directives for caches and clients." },
      { prompt: "What response needs special caution?", correct: "Personalized or authenticated content", distractors: ["A public logo", "A versioned stylesheet", "A public font"], explanation: "Shared caching can leak or mix user-specific data if configured incorrectly." },
      { prompt: "What does purging fix?", correct: "Stored cached responses, not the root deployment error", distractors: ["Domain ownership", "Git history", "Certificate issuance"], explanation: "If the source is wrong, the wrong response can be cached again." },
      { prompt: "What should performance review include?", correct: "Rendering, assets, scripts, and real-user experience", distractors: ["Only DNS TTL", "Only cache hit count", "Only registrar choice"], explanation: "Frontend work and third parties can dominate performance." },
      { prompt: "One user alone sees stale content after edge purge. What might remain?", correct: "Their browser or service-worker cache", distractors: ["The registrar", "The MX record", "The Git branch name"], explanation: "Client-side storage can outlive an edge purge." },
      { prompt: "What is a cache hit?", correct: "A reusable response was served without fetching it again from origin", distractors: ["DNS failed", "TLS expired", "Git merged"], explanation: "Hits avoid repeating upstream work for that request." },
      { prompt: "What is the safest purge scope?", correct: "The narrowest affected URLs after diagnosis", distractors: ["Everything by default", "All DNS records", "All Git branches"], explanation: "Targeted recovery reduces collateral performance impact." },
    ],
    resource: { id: "cloudflare-cache-docs", name: "Cloudflare Cache documentation", url: "https://developers.cloudflare.com/cache/", cost: "free", platform: "web", installNotes: "Use response headers and a disposable page. Do not cache private data or purge production broadly without authorization." },
    labTitle: "Explain and fix a stale asset", labMinutes: 40,
    labInstructions: `### Try It\n1. Inspect HTML, CSS, and image response headers on your practice site.\n2. Record browser-cache policy and any Cloudflare cache-status evidence.\n3. Change a versioned asset and deploy it.\n\n### Break It\n4. Reference an old asset URL and observe why it remains reusable.\n\n### Fix It\n5. Correct the reference, verify the deployed commit, and document when a targeted purge would or would not help.`,
    criteria: ["Browser and edge caches are distinguished", "Stale source is identified before purge", "Performance check includes page assets and rendering"],
  },
  {
    id: "cfh-site-security", name: "Website Security at the Edge", objectivePrefix: "CFH-M06", minutes: 60, prerequisite: "cfh-cache-performance",
    content: `Cloudflare provides layers that can reduce unwanted traffic before it reaches an application: DDoS protections, firewall rules and managed rulesets, rate controls, bot signals, and Turnstile challenges. These controls reduce risk; they do not repair insecure application code or replace authentication and authorization.

Begin with visibility. Identify normal paths, methods, countries or networks where relevant, status codes, user agents, and application behavior. Prefer managed protections and narrow custom rules over giant deny lists. Test a rule with logging or a non-blocking action when available, then watch for false positives.

Turnstile helps distinguish legitimate interaction from automated abuse without making the browser alone the authority. The server must validate the token; rendering a widget without server-side validation is incomplete. Rate limits should protect expensive or abusable actions such as login, password reset, search, and form submission.

Never test security by attacking systems you do not own. Use your practice site and harmless requests. Keep emergency bypass, rollback, and account-access procedures documented before enforcing broad rules.`,
    lightbulb: "Edge security filters requests; the application must still validate identity, authorization, input, and Turnstile tokens.",
    facts: ["Edge protection does not replace secure application code", "Observe normal traffic before writing broad rules", "False positives are a security and availability failure", "Turnstile tokens require server-side validation", "Rate limits belong on specific abusable or expensive actions"],
    example: ["Choose one protected endpoint and define normal use", "Inspect existing traffic and failure patterns", "Select a managed or narrowly scoped control", "Test safely and verify allowed and denied behavior", "Monitor false positives and keep a rollback path"],
    mistakes: ["Blocking broad traffic without observing legitimate use", "Adding a Turnstile widget but skipping server validation", "Treating DDoS protection as an application vulnerability scanner"],
    traps: ["A rule can block search engines, APIs, or accessibility tools", "A shared office IP can trigger a naive per-IP limit", "An emergency bypass left enabled becomes permanent exposure"],
    scenario: "A contact form receives automated spam. You add Turnstile with server validation, apply a narrow rate limit, test legitimate submission, and monitor failures instead of blocking whole countries.",
    checks: [
      { prompt: "Does edge protection replace secure application code?", correct: "No; both layers are required", distractors: ["Yes, completely", "Only for static sites", "Only when DNS-only"], explanation: "Authorization, validation, and application flaws remain application responsibilities." },
      { prompt: "What completes Turnstile integration?", correct: "Server-side token validation", distractors: ["Widget color", "DNS purge", "Git tag"], explanation: "The server must verify the submitted token before trusting it." },
      { prompt: "What should precede a broad blocking rule?", correct: "Observe normal traffic and define the intended scope", distractors: ["Delete logs", "Disable rollback", "Publish secrets"], explanation: "Evidence reduces false positives and unintended outages." },
      { prompt: "Where is rate limiting especially useful?", correct: "Login, reset, search, and form endpoints", distractors: ["A static logo only", "Domain renewal", "Git README"], explanation: "Protect actions that are costly or commonly abused." },
      { prompt: "Why are false positives serious?", correct: "They block legitimate users and can create an outage", distractors: ["They improve every metric", "They renew domains", "They encrypt origins"], explanation: "Security controls must preserve intended availability." },
      { prompt: "Where may you safely test defensive rules?", correct: "On systems you own or are authorized to test", distractors: ["Any public site", "A competitor", "Unknown APIs"], explanation: "Authorization defines the testing boundary." },
      { prompt: "What is a useful first custom-rule strategy?", correct: "Narrow scope with observable test behavior", distractors: ["Block all traffic", "Never log", "Remove rollback"], explanation: "Controlled rollout makes mistakes visible and reversible." },
      { prompt: "What does DDoS protection primarily address?", correct: "Traffic intended to exhaust availability", distractors: ["Bad commit messages", "Forgotten CSS", "Domain spelling"], explanation: "It mitigates availability attacks; it is not a general code-quality tool." },
    ],
    resource: { id: "cloudflare-security-docs", name: "Cloudflare application security documentation", url: "https://developers.cloudflare.com/fundamentals/security/", cost: "free", platform: "web", installNotes: "Use only a site you own or have written permission to test. Prefer logging and narrow rules before enforcement." },
    labTitle: "Protect a form without blocking real users", labMinutes: 55,
    labInstructions: `### Try It\n1. Choose a practice form or write a fictional endpoint card.\n2. Define normal submission behavior and abuse signals.\n3. Design Turnstile server validation and a narrow rate rule.\n\n### Break It\n4. Make the limit unrealistically strict and list legitimate users it would block.\n\n### Fix It\n5. Restore a defensible threshold, test allowed and denied paths, and write rollback steps.`,
    criteria: ["Turnstile includes server-side validation", "Rule scope protects a specific endpoint", "False-positive test and rollback are documented"],
  },
  {
    id: "cfh-workers-wrangler", name: "Workers, Wrangler, and Secrets", objectivePrefix: "CFH-M07", minutes: 70, prerequisite: "cfh-site-security",
    content: `A Cloudflare Worker runs application logic on Cloudflare's platform. Use it when a site needs request handling, an API, authentication glue, redirects with logic, server-rendered behavior, or access to platform bindings. Static assets remain the simplest choice when no server logic is required.

Wrangler is the developer tool for creating, running, configuring, deploying, and observing Workers projects. Treat its configuration file as production code: review routes, compatibility settings, bindings, and environment differences in Git. Follow current official examples because configuration formats and platform capabilities evolve.

Local development reduces feedback time, but local success is not production proof. Bindings, secrets, routes, and platform behavior can differ. Use preview or non-production environments, then run a small production verification after deployment.

Secrets must be stored with the platform's secret mechanism, not committed in configuration or .env files. Logs must not print secrets or personal data. Rollback should name the last known-good deployment before you experiment.`,
    lightbulb: "Use static hosting until you need server logic; then make the Worker, bindings, secrets, and deployment version explicit.",
    facts: ["Workers add server-side request logic", "Wrangler manages local development and deployment workflows", "Configuration and bindings belong under review", "Secrets never belong in Git or logs", "Local, preview, and production environments must be verified separately"],
    example: ["Start from a static site and identify one need for server logic", "Create a minimal Worker using current official tooling", "Run locally with non-secret test configuration", "Deploy to a preview or development environment", "Inspect logs, verify the route, then record rollback information"],
    mistakes: ["Adding a Worker when static assets solve the requirement", "Committing secrets in Wrangler configuration", "Assuming local bindings exactly match production"],
    traps: ["A route can send unintended traffic to a Worker", "Logging an entire request can expose credentials", "Environment-specific bindings can point at production data"],
    scenario: "A static site needs a small feedback API. You implement one Worker route, validate input, store secrets correctly, deploy to preview, inspect sanitized logs, and retain the prior deployment.",
    checks: [
      { prompt: "When should a static site add a Worker?", correct: "When it needs server-side request logic", distractors: ["For every image", "To register a domain", "To create Git commits"], explanation: "Keep architecture simple until dynamic behavior is required." },
      { prompt: "What is Wrangler used for?", correct: "Developing, configuring, deploying, and observing Workers", distractors: ["Buying domains only", "Editing DNS packets", "Replacing Git"], explanation: "Wrangler is Cloudflare's developer workflow tool." },
      { prompt: "Where should a Worker secret be stored?", correct: "In the platform's protected secret mechanism", distractors: ["Public wrangler config", "Git README", "Console log"], explanation: "Secrets must remain outside version control and normal logs." },
      { prompt: "Does local success prove production behavior?", correct: "No; production bindings, routes, and environment still need verification", distractors: ["Yes, always", "Only DNS matters", "Only the registrar matters"], explanation: "Environment differences are a common deployment failure." },
      { prompt: "Why review Worker routes carefully?", correct: "They decide which requests execute the Worker", distractors: ["They renew TLS", "They rename branches", "They resize images locally"], explanation: "An overly broad route can affect unrelated production traffic." },
      { prompt: "What should logs avoid?", correct: "Secrets, tokens, and unnecessary personal data", distractors: ["Status codes", "Sanitized request IDs", "Timing"], explanation: "Observability must not create a data leak." },
      { prompt: "What belongs in deployment recovery notes?", correct: "The last known-good deployment and rollback method", distractors: ["A private key", "A user's password", "Nothing"], explanation: "Recovery should be prepared before a risky change." },
      { prompt: "Why keep configuration in Git?", correct: "Changes can be reviewed, explained, and recovered", distractors: ["It makes secrets public safely", "It replaces testing", "It controls the registrar"], explanation: "Non-secret configuration benefits from version history and review." },
    ],
    resource: { id: "cloudflare-workers-docs", name: "Cloudflare Workers and Wrangler documentation", url: "https://developers.cloudflare.com/workers/", cost: "free", platform: "any", installNotes: "Use current official Wrangler instructions. Never paste API tokens into commands, screenshots, Git, or course submissions." },
    labTitle: "Deploy a minimal Worker safely", labMinutes: 70,
    labInstructions: `### Try It\n1. Create a disposable Worker with current official tooling.\n2. Return a small JSON health response from one route.\n3. Run locally, deploy to a non-critical environment, and record the deployment version.\n\n### Break It\n4. Configure a fictional route that is too broad. Predict which site paths it would capture.\n\n### Fix It\n5. Narrow the route, verify logs contain no secrets, and document rollback to the prior deployment.`,
    criteria: ["Worker responds on the intended route", "Secrets and logs follow safe handling", "Deployment version and rollback are recorded"],
  },
  {
    id: "cfh-data-storage", name: "Choose Website Data Storage", objectivePrefix: "CFH-M08", minutes: 60, prerequisite: "cfh-workers-wrangler",
    content: `Choose storage from the access pattern, not the product logo. KV fits globally read-heavy key/value data such as configuration or content lookups where immediate global consistency is not the requirement. D1 provides relational SQLite-style data and SQL queries. R2 stores objects such as uploads, images, documents, backups, and build artifacts.

Bindings connect a Worker to a resource. Give development and production separate resources when mistakes would matter. Validate input, authorize access, and limit stored personal data. A binding is capability: code with the binding can access the resource according to its permissions.

Do not use KV as a substitute for strongly coordinated transactions, D1 as an unplanned dumping ground, or R2 as a public bucket by accident. Define keys, schema, object paths, retention, backup/export, and deletion behavior before collecting real data.

This course teaches enough data for ordinary small websites. Queues, Durable Objects, Hyperdrive, analytics systems, and AI stores belong in later specialized tracks when the application genuinely needs them.`,
    lightbulb: "KV stores keyed values, D1 stores related rows, and R2 stores objects—start with how the application reads and changes data.",
    facts: ["KV suits read-heavy key/value access", "D1 provides relational SQL data", "R2 stores files and other objects", "Bindings grant application access to platform resources", "Development and production data should be separated deliberately"],
    example: ["List what the application stores and how it reads it", "Choose key/value, relational rows, or objects", "Define development and production resources", "Bind the resource with least necessary access", "Test create, read, update, delete, export, and failure behavior"],
    mistakes: ["Choosing storage before defining access patterns", "Pointing local experiments at production data", "Collecting personal data without retention and deletion plans"],
    traps: ["Public object URLs can expose uploads", "A schema change can break an older Worker deployment", "Eventual consistency assumptions can break coordination logic"],
    scenario: "A community site needs configuration flags, member records, and uploaded avatars. You choose KV, D1, and R2 respectively, separate environments, and document access and deletion.",
    checks: [
      { prompt: "Which service fits relational rows and SQL queries?", correct: "D1", distractors: ["KV", "R2", "DNS"], explanation: "D1 is Cloudflare's relational SQLite-based database product." },
      { prompt: "Which service fits uploaded files?", correct: "R2", distractors: ["KV only", "D1 only", "CAA"], explanation: "R2 is object storage for file-like blobs and artifacts." },
      { prompt: "Which service fits read-heavy keyed configuration?", correct: "KV", distractors: ["MX", "R2 only", "TLS"], explanation: "KV is designed around key/value reads across locations." },
      { prompt: "What is a binding?", correct: "A configured capability connecting code to a resource", distractors: ["A domain renewal", "A Git merge", "A browser cookie banner"], explanation: "Bindings expose platform services to Worker code." },
      { prompt: "Why separate development and production resources?", correct: "Experiments should not damage or expose production data", distractors: ["To avoid Git", "To disable backups", "To change nameservers"], explanation: "Environment isolation reduces operational blast radius." },
      { prompt: "What should precede collecting personal data?", correct: "A purpose, access, retention, and deletion plan", distractors: ["A public bucket", "A longer key", "A DNS purge"], explanation: "Data lifecycle and privacy are design requirements." },
      { prompt: "What risk comes with a public object URL?", correct: "Unintended exposure of uploaded content", distractors: ["Git history disappears", "DNS becomes private", "TLS renews early"], explanation: "Object access policy must match intended audiences." },
      { prompt: "Should every website add advanced state products?", correct: "No; add them only for a demonstrated access pattern", distractors: ["Yes, all at once", "Only to improve CSS", "Only before DNS"], explanation: "Complexity should follow requirements, not precede them." },
    ],
    resource: { id: "cloudflare-storage-docs", name: "Cloudflare storage documentation", url: "https://developers.cloudflare.com/products/storage/", cost: "free", platform: "web", installNotes: "Use disposable development resources and synthetic data. Check current limits and pricing before creating resources." },
    labTitle: "Design storage for a small website", labMinutes: 50,
    labInstructions: `### Try It\n1. Use a fictional community site with feature settings, member records, and avatar uploads.\n2. Map each data shape to KV, D1, R2, or no storage.\n3. Define development and production separation, access, retention, and deletion.\n\n### Break It\n4. Point a fictional local Worker at production and make an incompatible schema change. Describe the impact.\n\n### Fix It\n5. Restore environment separation and write a safe migration plus rollback sequence.`,
    criteria: ["Storage choices follow access patterns", "Development and production are isolated", "Privacy, migration, and rollback are addressed"],
  },
  {
    id: "cfh-origins-tunnels", name: "Origins, Firewalls, and Cloudflare Tunnel", objectivePrefix: "CFH-M09", minutes: 60, prerequisite: "cfh-data-storage",
    content: `Not every website is hosted entirely on Cloudflare. An origin might be a VPS, shared host, home lab, container platform, or existing application server. Cloudflare DNS and proxying can sit in front of it, but the origin still needs patching, backups, application security, capacity planning, and monitoring.

Restrict origin exposure carefully. Confirm the required ports, hostnames, health checks, and legitimate traffic before changing a firewall. Avoid publishing an origin address unnecessarily, but do not create a lockout by applying rules without a tested management path.

Cloudflare Tunnel creates outbound connections from a connector near the service to Cloudflare, avoiding a directly opened inbound port. It is valuable for private applications and some origin patterns. Tunnel is not magic hosting: the service, connector, authentication policy, updates, logs, and availability remain your responsibility.

Use Access for private administrative tools when appropriate. A public marketing website, a private admin dashboard, and an SSH endpoint have different exposure and authentication requirements. Diagram them separately.`,
    lightbulb: "A Tunnel changes how Cloudflare reaches a service; it does not operate, patch, back up, or authorize the service for you.",
    facts: ["An external origin remains an operational responsibility", "Firewall changes require a verified management and rollback path", "Tunnel uses outbound connector connections", "Access can protect private applications with identity policy", "Public sites and private admin services need different designs"],
    example: ["Inventory public and private hostnames", "Identify the service, port, owner, and authentication for each", "Choose direct proxied origin or Tunnel based on requirements", "Test connector and policy failure behavior", "Monitor, patch, back up, and document recovery"],
    mistakes: ["Treating Tunnel as a replacement for service authentication", "Blocking origin management access before testing an alternative", "Putting public and administrative services under one broad policy"],
    traps: ["A connector outage can make a healthy service unreachable", "An origin IP leaked elsewhere can bypass intended edge controls", "A private hostname without Access policy may still be publicly reachable"],
    scenario: "A team hosts a public site and an internal admin panel on one server. You keep the public path proxied, publish the admin app through Tunnel with Access, and preserve a tested recovery path.",
    checks: [
      { prompt: "Does Cloudflare proxying remove origin maintenance duties?", correct: "No; the origin still needs operations and security", distractors: ["Yes, entirely", "Only on weekends", "Only for DNS"], explanation: "Cloudflare can front the service, but it does not administer the server." },
      { prompt: "How does Cloudflare Tunnel connect?", correct: "A connector makes outbound connections to Cloudflare", distractors: ["Visitors SSH directly", "DNS opens a port", "Git creates a firewall"], explanation: "The outbound connector avoids a directly exposed inbound listener." },
      { prompt: "What can protect a private admin application?", correct: "Cloudflare Access with an identity policy", distractors: ["A public CNAME alone", "A cache purge", "A Git tag"], explanation: "Access evaluates identity policy before private app access." },
      { prompt: "What must precede restrictive firewall changes?", correct: "A tested management path and rollback", distractors: ["Deleting logs", "Disabling backups", "Changing the registrar"], explanation: "Avoid locking operators out of the system they need to recover." },
      { prompt: "Is Tunnel itself website hosting?", correct: "No; it transports traffic to a service you still operate", distractors: ["Yes, it writes the app", "Yes, it renews domains", "Yes, it creates backups"], explanation: "The underlying application and connector remain yours." },
      { prompt: "What can happen if an origin IP leaks?", correct: "Traffic may bypass intended edge controls", distractors: ["Git commits vanish", "MX records encrypt", "The domain renews"], explanation: "Direct reachability can undermine proxy-only assumptions." },
      { prompt: "Should public and private services share one broad access policy?", correct: "No; model their audiences and controls separately", distractors: ["Always", "Only with long TTL", "Only with R2"], explanation: "Their authentication and availability requirements differ." },
      { prompt: "A healthy service behind Tunnel is unreachable. What else can fail?", correct: "The connector, route, DNS, or Access policy", distractors: ["Only HTML", "Only the registrar", "Only Git"], explanation: "Trace the complete Tunnel request path and its policy layers." },
    ],
    resource: { id: "cloudflare-tunnel-docs", name: "Cloudflare Tunnel documentation", url: "https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/", cost: "free", platform: "any", installNotes: "Use a disposable local service. Do not expose private services or modify production firewalls without authorization and rollback." },
    labTitle: "Design public and private origin paths", labMinutes: 50,
    labInstructions: `### Try It\n1. Diagram a public site and private admin panel on one fictional origin.\n2. Assign DNS, proxy/Tunnel path, port, authentication, owner, monitoring, and backup.\n3. Write connector and origin health checks.\n\n### Break It\n4. Remove the connector or apply an Access policy that excludes the administrator. Predict the symptoms.\n\n### Fix It\n5. Use the documented recovery path, restore least-privilege access, and verify public and private services separately.`,
    criteria: ["Public and private traffic paths are distinct", "Tunnel and Access responsibilities are correctly described", "Lockout and connector recovery are tested on paper"],
  },
  {
    id: "cfh-operations-capstone", name: "Operate, Troubleshoot, and Recover a Website", objectivePrefix: "CFH-M10", minutes: 90, prerequisite: "cfh-origins-tunnels",
    content: `Operating a website means proving it works after every change and recovering without guessing. Record domain ownership and renewal, DNS intent, deployed commit, build settings, environment names, TLS design, cache policy, security rules, data resources, alerts, and rollback procedures in a concise runbook. Never put secrets in the runbook.

Classify symptoms before acting. NXDOMAIN and wrong answers start at registration or DNS. Certificate and handshake errors start at TLS. Redirect loops involve edge/origin/application routing. 404 means the request reached a responder that could not find the resource. 5xx errors point to execution, upstream, or platform failure. A stale page is a deployment/cache/browser-state investigation.

Use logs and analytics with privacy discipline. Record timestamps, request IDs when available, deployment versions, affected hostnames, scope, and exact errors. Change one variable at a time, verify both recovery and security, then document the result.

The capstone proves job readiness: deploy a small Git-backed site, connect a practice hostname, validate HTTPS, explain caching and security, add one justified dynamic or data feature, introduce a controlled preview failure, recover, and hand another person a usable runbook.`,
    lightbulb: "A production-ready website is not merely live—it is observable, explainable, recoverable, and safe to change.",
    facts: ["Every production change needs verification and rollback", "Error class narrows the responsible layer", "Deployment versions and timestamps make logs useful", "Runbooks contain procedures and identifiers, never secrets", "The capstone requires deployment, security, failure recovery, and handoff"],
    example: ["State the symptom, scope, hostname, time, and last change", "Trace registration, DNS, TLS, edge, deployment/origin, and browser", "Collect the smallest useful logs and identifiers", "Apply one reversible correction", "Verify function and protection, then update the runbook"],
    mistakes: ["Changing DNS, TLS, cache, and code simultaneously", "Calling a site fixed after only the home page loads", "Writing tokens or passwords into the runbook"],
    traps: ["A rollback can restore code while leaving a bad DNS change", "A 200 response can still contain the wrong application", "Monitoring from one location can miss regional or resolver-specific failures"],
    scenario: "A production deploy returns 404 on nested routes while the home page works. You identify the deployed commit, inspect routing and asset configuration, test preview, apply one fix, verify security, and update the runbook.",
    checks: [
      { prompt: "What should a website runbook exclude?", correct: "Passwords, private keys, and API tokens", distractors: ["Hostnames", "Rollback steps", "Deployment IDs"], explanation: "Runbooks are operational documents, not secret stores." },
      { prompt: "What does NXDOMAIN primarily suggest?", correct: "The requested DNS name does not exist in the answer path", distractors: ["CSS is stale", "The Worker threw", "The form is rate-limited"], explanation: "Start with registration, delegation, spelling, and DNS records." },
      { prompt: "What does a 404 prove?", correct: "A responder was reached but did not find that resource", distractors: ["DNS definitely failed", "The domain expired", "TLS never connected"], explanation: "The request reached HTTP handling; investigate route and deployed files." },
      { prompt: "Why change one variable at a time?", correct: "You can connect evidence to the correction and reverse it", distractors: ["It avoids logs", "It hides mistakes", "It changes TTL"], explanation: "Controlled changes preserve causality and recovery." },
      { prompt: "What completes incident recovery?", correct: "Verify service and security, then document", distractors: ["Stop when the home page loads", "Delete history", "Disable monitoring"], explanation: "Recovery includes protection and an auditable handoff." },
      { prompt: "A stale page may involve which layers?", correct: "Deployment, edge cache, browser cache, or service worker", distractors: ["Only registrar", "Only MX", "Only TLS"], explanation: "Compare each state-holding layer." },
      { prompt: "What makes logs actionable?", correct: "Time, scope, request or deployment identifiers, and exact errors", distractors: ["Screenshots of secrets", "Vague notes", "No timezone"], explanation: "Specific context lets another operator reproduce the investigation." },
      { prompt: "What proves this course's job-skill outcome?", correct: "A deployed, secured, observed site plus controlled failure recovery and runbook", distractors: ["Reading every product page", "Memorizing plan names", "Buying a domain only"], explanation: "The capstone demonstrates independent end-to-end operation." },
    ],
    resource: { id: "cloudflare-observability-docs", name: "Cloudflare Workers observability documentation", url: "https://developers.cloudflare.com/workers/observability/", cost: "free", platform: "web", installNotes: "Use sanitized logs and a practice site. Check current account limits before enabling paid or high-volume features." },
    labTitle: "Cloudflare website hosting capstone", labMinutes: 120,
    labInstructions: `### Build\n1. Deploy a small Git-backed website from a feature branch and preview.\n2. Connect a practice hostname or document the exact DNS plan if you do not own a domain.\n3. Verify HTTPS, cache behavior, responsive pages, links, and one narrow security control.\n4. Add one justified feature: a minimal Worker route, D1 record, KV value, or R2 object.\n\n### Break It\n5. Introduce a broken asset path or route only in preview. Capture the status code and evidence.\n\n### Fix It\n6. Correct the change through Git, verify preview, promote safely, and prove the production version.\n\n### Handoff\n7. Write a one-page runbook: architecture, deploy, verify, logs, rollback, ownership, renewal, and cost checks. Include no secrets.`,
    criteria: ["Site is deployed from a known commit with HTTPS and verification evidence", "Controlled preview failure is diagnosed and recovered through Git", "Runbook enables another beginner to deploy, verify, and roll back safely"],
  },
];

export const cloudflareHosting: Certification = {
  id: "cloudflare-hosting",
  name: "Cloudflare Website Hosting",
  shortName: "Cloudflare",
  vendor: "ReLearn · Cloudflare grounded",
  overview: "A hands-on website-hosting skill track—not a Cloudflare certification. Start with how domains and DNS reach a site, deploy from Git, configure HTTPS, caching, and edge security, add small Workers and storage features when justified, connect existing origins safely, and finish by breaking and recovering a real preview deployment. ReLearn's Git/GitHub lessons provide the version-control prerequisites without duplicating them here.",
  examSummary: {
    questionCount: 0,
    durationMinutes: 0,
    passingScore: "Deploy, secure, troubleshoot, recover, and document the capstone website",
    format: "Hands-on website labs · Break/Fix exercises · production runbook capstone",
  },
  domains: seeds.map((seed, index) => ({
    id: `cloudflare-hosting-m${String(index + 1).padStart(2, "0")}`,
    name: `Module ${index + 1} — ${seed.name}`,
    topics: [makeTopic(seed)],
  })),
};
