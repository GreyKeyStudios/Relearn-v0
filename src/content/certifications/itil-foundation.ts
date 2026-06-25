import type { Certification } from "../types";

export const itilFoundation: Certification = {
  id: "itil-foundation",
  name: "ITIL 4 Foundation",
  shortName: "ITIL",
  vendor: "AXELOS",
  overview:
    "ITIL 4 Foundation introduces the modern service management framework used by organizations worldwide. It covers key concepts, the service value system, guiding principles, the service value chain, and essential management practices for delivering and improving IT services.",
  examSummary: {
    questionCount: 40,
    durationMinutes: 60,
    passingScore: "26/40 (65%)",
    format: "Multiple choice",
  },
  domains: [
    {
      id: "itil-core-concepts",
      name: "ITIL Core Concepts",
      topics: [
        {
          id: "service-management",
          name: "Service Management",
          lesson: {
            title: "Understanding Service Management",
            content: `Service management is a set of specialized organizational capabilities for enabling value to customers in the form of services. In ITIL 4, a service is a means of enabling value co-creation by facilitating outcomes that customers want to achieve without the customer bearing specific costs and risks.

Every service has two components: utility and warranty. Utility defines what the service does — the functionality offered to meet a need. Warranty defines how the service performs — availability, capacity, security, and continuity that give customers confidence the utility will be available when needed. Together, utility and warranty determine whether a service is fit for purpose and fit for use.

Organizations deliver services through service offerings, which describe one or more services based on one or more products. Service relationships form when a service provider and service consumer agree to work together. Value is co-created through these relationships — neither party creates value alone. The service provider contributes resources and capabilities; the consumer defines requirements and uses the service to achieve outcomes.

Understanding service management means recognizing that IT is not just about technology delivery. It is about aligning services with business needs, managing risk, and continuously improving how value flows to stakeholders.

Service relationships involve multiple roles. A service provider delivers services; a service consumer receives them; a user is the person who uses the service directly. Other stakeholders include sponsors who authorize budget and regulators who impose requirements. Each role influences how value is defined and measured.

On the ITIL 4 Foundation exam, expect scenario questions that ask you to distinguish outputs from outcomes, utility from warranty, and provider roles from consumer roles. When a customer says a payroll service is "too slow," they may be criticizing warranty (performance) even when utility (payroll processing) is correct. Strong service management aligns both dimensions with business needs.

Organizations also manage services through the service relationship model: service offerings, service provision, service consumption, and service relationship management. These concepts connect directly to the Service Value System and value chain activities covered later in the curriculum.`,
          },
          keyFacts: [
            "A service enables value co-creation by helping customers achieve outcomes",
            "Utility is fit for purpose (what the service does); warranty is fit for use (how well it performs)",
            "Service offerings describe services based on products and resources",
            "Value is co-created between service providers and consumers, not delivered unilaterally",
            "Service management capabilities include people, processes, technology, and partners",
            "Outcomes are results enabled by one or more outputs of a service",
          ],
          commonMistakes: [
            "Confusing utility (fit for purpose) with warranty (fit for use)",
            "Treating value as delivered solely by the provider, not co-created",
            "Mixing up outputs (deliverables) with outcomes (business results)",
            "Assuming a service consumer and user are always the same role",
            "Forgetting service offerings describe services based on products",
          ],
          examTraps: [
            "Slow payroll processing criticizing warranty when utility is correct",
            "Provider vs consumer vs sponsor vs user role identification scenarios",
            "Outcome enabled by outputs vs output itself as the final result",
            "Service relationship co-creation vs one-way delivery wording",
            "Fit for purpose vs fit for use matching utility vs warranty",
          ],
          quiz: [
            {
              id: "service-management-q1",
              prompt: "In ITIL 4, what does 'utility' refer to in a service?",
              choices: [
                { id: "a", text: "How reliably the service is available" },
                { id: "b", text: "What the service does — its functionality" },
                { id: "c", text: "The cost of delivering the service" },
                { id: "d", text: "The contract between provider and consumer" },
              ],
              correctChoiceId: "b",
              explanation:
                "Utility defines what the service does — the functionality offered. It answers whether the service is fit for purpose.",
            },
            {
              id: "service-management-q2",
              prompt: "Which statement best describes value co-creation in ITIL 4?",
              choices: [
                { id: "a", text: "The service provider alone creates value for the customer" },
                { id: "b", text: "The customer alone defines all service value" },
                { id: "c", text: "Provider and consumer both contribute to creating value" },
                { id: "d", text: "Value is measured only by financial savings" },
              ],
              correctChoiceId: "c",
              explanation:
                "Value is co-created through service relationships where both the provider and consumer contribute resources and capabilities.",
            },
            {
              id: "service-management-q3",
              prompt: "Warranty in a service primarily addresses:",
              choices: [
                { id: "a", text: "The features and functions the service provides" },
                { id: "b", text: "How the service performs — availability, capacity, and security" },
                { id: "c", text: "The legal terms of the service agreement" },
                { id: "d", text: "The number of users who can access the service" },
              ],
              correctChoiceId: "b",
              explanation:
                "Warranty defines how the service performs, covering aspects like availability, capacity, security, and continuity — fit for use.",
            },
            {
              id: "service-management-q4",
              prompt: "An outcome in ITIL 4 is best defined as:",
              choices: [
                { id: "a", text: "A tangible deliverable produced by a service activity" },
                { id: "b", text: "A result enabled by one or more outputs of a service" },
                { id: "c", text: "The total cost of operating a service" },
                { id: "d", text: "A documented service level target" },
              ],
              correctChoiceId: "b",
              explanation:
                "Outcomes are results that customers achieve, enabled by service outputs. Outputs are deliverables; outcomes are the business results they enable.",
            },
            {
              id: "service-management-q5",
              prompt: "Which combination correctly describes fit for purpose and fit for use?",
              choices: [
                { id: "a", text: "Fit for purpose = warranty; fit for use = utility" },
                { id: "b", text: "Fit for purpose = utility; fit for use = warranty" },
                { id: "c", text: "Both terms refer to financial value" },
                { id: "d", text: "Both terms refer to service availability only" },
              ],
              correctChoiceId: "b",
              explanation:
                "Fit for purpose relates to utility (does it do what is needed?). Fit for use relates to warranty (does it perform adequately?).",
            },
          ],
          flashcards: [
            {
              id: "service-management-f1",
              front: "What is the difference between utility and warranty?",
              back: "Utility = what the service does (fit for purpose). Warranty = how it performs — availability, capacity, security (fit for use).",
            },
            {
              id: "service-management-f2",
              front: "What is value co-creation?",
              back: "Value is created jointly by the service provider and consumer through service relationships, not by either party alone.",
            },
            {
              id: "service-management-f3",
              front: "What is an outcome vs. an output?",
              back: "An output is a tangible deliverable. An outcome is a result enabled by one or more outputs.",
            },
            {
              id: "service-management-f4",
              front: "Name three service relationship roles.",
              back: "Service provider, service consumer, and user (plus sponsor and other stakeholders).",
            },
            {
              id: "service-management-f5",
              front: "What is a service offering?",
              back: "A description of one or more services based on products and resources available to the consumer.",
            },
          ],
          objectives: ["ITIL4-1.1", "ITIL4-1.2"],
          practiceType: ["reading", "quiz", "flashcard", "case-study"],
          questionBank: [
            {
              id: "service-management-qb1",
              prompt: "Which role authorizes budget for a new service?",
              choices: [
                { id: "a", text: "User" },
                { id: "b", text: "Sponsor" },
                { id: "c", text: "Service consumer" },
                { id: "d", text: "Regulator" },
              ],
              correctChoiceId: "b",
              explanation: "Sponsors authorize budget and charter for services and service management initiatives.",
            },
            {
              id: "service-management-qb2",
              prompt: "A deliverable produced by a service activity is called:",
              choices: [
                { id: "a", text: "An outcome" },
                { id: "b", text: "An output" },
                { id: "c", text: "A warranty" },
                { id: "d", text: "A utility" },
              ],
              correctChoiceId: "b",
              explanation: "Outputs are tangible deliverables; outcomes are results enabled by outputs.",
            },
            {
              id: "service-management-qb3",
              prompt: "Fit for use primarily relates to:",
              choices: [
                { id: "a", text: "Utility" },
                { id: "b", text: "Warranty" },
                { id: "c", text: "Governance" },
                { id: "d", text: "Demand" },
              ],
              correctChoiceId: "b",
              explanation: "Fit for use = warranty (how well the service performs). Fit for purpose = utility.",
            },
            {
              id: "service-management-qb4",
              prompt: "Service offerings are based on:",
              choices: [
                { id: "a", text: "Only financial contracts" },
                { id: "b", text: "Products and resources" },
                { id: "c", text: "Regulatory fines" },
                { id: "d", text: "Incident models" },
              ],
              correctChoiceId: "b",
              explanation: "Offerings describe services built from products and organizational resources.",
            },
            {
              id: "service-management-qb5",
              prompt: "Value co-creation means:",
              choices: [
                { id: "a", text: "Only IT creates value" },
                { id: "b", text: "Only customers define services" },
                { id: "c", text: "Value is fixed at contract signing" },
                { id: "d", text: "Provider and consumer both contribute" },
              ],
              correctChoiceId: "d",
              explanation: "Both parties contribute to creating value in a service relationship.",
            },
            {
              id: "service-management-qb6",
              prompt: "Which is an example of warranty?",
              choices: [
                { id: "a", text: "Payroll calculation feature" },
                { id: "b", text: "99.9% availability guarantee" },
                { id: "c", text: "User training manual" },
                { id: "d", text: "Project charter" },
              ],
              correctChoiceId: "b",
              explanation: "Warranty covers performance aspects like availability, capacity, and security.",
            },
          ],
        },
        {
          id: "service-value-system",
          name: "Service Value System",
          lesson: {
            title: "The ITIL Service Value System",
            content: `The ITIL Service Value System (SVS) describes how all components and activities of an organization work together to enable value creation through IT-enabled services. It provides a flexible operating model that supports different organizational structures and approaches.

The SVS has five core components. Guiding principles offer recommendations that guide organizations in all circumstances. Governance defines how the organization is directed and controlled. The service value chain is the set of interconnected activities that create value. Practices are sets of organizational resources designed for performing work or accomplishing objectives. Continual improvement ensures the organization constantly improves products, services, and practices.

The SVS also considers four dimensions that must be balanced for effective service management: organizations and people, information and technology, partners and suppliers, and value streams and processes. Neglecting any dimension creates weaknesses that undermine value creation.

External factors — opportunities and demand from the market, plus internal and external stakeholders — feed into the SVS. The system transforms demand into value through the service value chain and practices, governed by guiding principles and governance structures. The SVS applies to the entire organization, not just the IT department, making ITIL 4 relevant beyond traditional IT service management.

Demand for services enters the SVS from external opportunities and internal improvement initiatives. The SVS converts that demand into value through practices applied across value chain activities, always balanced across the four dimensions. If partners and suppliers are weak, even excellent internal processes fail to deliver reliable services.

Governance operates at two levels in ITIL 4. Direct governance sets direction through policies and portfolio decisions. Indirect governance monitors and evaluates performance through metrics and audits. Both ensure that service management activities align with organizational strategy.

Exam questions often test whether you can list SVS components versus four dimensions versus value chain activities. Remember: components describe the operating model (principles, governance, chain, practices, improvement). Dimensions describe what must be balanced (people, technology, partners, processes/streams).`,
          },
          keyFacts: [
            "The SVS describes how all organizational components work together to enable value",
            "Five SVS components: guiding principles, governance, service value chain, practices, continual improvement",
            "Four dimensions: organizations and people, information and technology, partners and suppliers, value streams and processes",
            "The SVS applies to the whole organization, not only IT",
            "External factors like opportunity and demand trigger value creation through the SVS",
            "Governance ensures organizational direction and control align with strategy",
          ],
          guidedExample: {
            title: "Map Organizational Inputs Through the SVS to Value Output",
            steps: [
              "Identify external input: increased demand for remote work collaboration tools.",
              "Apply guiding principles—focus on value, start where you are, progress iteratively.",
              "Governance sets portfolio priority and approves budget for the new service.",
              "Service value chain: Engage users, Design & Transition the service, Obtain/Build components, Deliver & Support operation.",
              "Relevant practices: service desk, incident management, service level management, relationship management.",
              "Continual improvement captures feedback and refines the service through the improvement register.",
            ],
          },
          commonMistakes: [
            "Confusing SVS five components with four dimensions of service management",
            "Listing value chain activities as SVS components",
            "Assuming SVS applies only to the IT department",
            "Mixing up governance with guiding principles roles",
            "Forgetting external opportunities and demand trigger the SVS",
          ],
          examTraps: [
            "Five SVS components vs four dimensions vs six value chain activities",
            "Partners and suppliers as a dimension, not an SVS component",
            "Governance direct (policies) vs indirect (monitoring) levels",
            "SVS converts demand into value through coordinated components",
            "Whole-organization scope vs IT-only legacy ITIL v3 thinking",
          ],
          realWorldScenario: "A regional hospital sees rising demand for telehealth appointments. Leadership applies the SVS: governance approves the initiative, guiding principles emphasize collaboration and iterative delivery, the value chain activities move from engaging clinicians through designing the platform to delivering daily support, and continual improvement tracks patient satisfaction scores to refine scheduling and uptime targets each quarter.",
          estimatedStudyMinutes: 30,
          difficulty: "medium",
          prerequisites: ["service-management", "guiding-principles"],
          quiz: [
            {
              id: "service-value-system-q1",
              prompt: "How many core components make up the ITIL Service Value System?",
              choices: [
                { id: "a", text: "3" },
                { id: "b", text: "4" },
                { id: "c", text: "5" },
                { id: "d", text: "7" },
              ],
              correctChoiceId: "c",
              explanation:
                "The SVS has five components: guiding principles, governance, service value chain, practices, and continual improvement.",
            },
            {
              id: "service-value-system-q2",
              prompt: "Which of the following is one of the four dimensions of service management?",
              choices: [
                { id: "a", text: "Incident and problem management" },
                { id: "b", text: "Partners and suppliers" },
                { id: "c", text: "Change enablement" },
                { id: "d", text: "Service level agreements" },
              ],
              correctChoiceId: "b",
              explanation:
                "The four dimensions are organizations and people, information and technology, partners and suppliers, and value streams and processes.",
            },
            {
              id: "service-value-system-q3",
              prompt: "What role does governance play in the SVS?",
              choices: [
                { id: "a", text: "It defines how the organization is directed and controlled" },
                { id: "b", text: "It replaces the need for service level agreements" },
                { id: "c", text: "It handles day-to-day incident resolution" },
                { id: "d", text: "It automates all service delivery tasks" },
              ],
              correctChoiceId: "a",
              explanation:
                "Governance in the SVS defines how the organization is directed and controlled to align with strategy and manage risk.",
            },
            {
              id: "service-value-system-q4",
              prompt: "The SVS applies to:",
              choices: [
                { id: "a", text: "Only the IT department" },
                { id: "b", text: "Only service desk teams" },
                { id: "c", text: "The entire organization" },
                { id: "d", text: "Only external service providers" },
              ],
              correctChoiceId: "c",
              explanation:
                "ITIL 4 positions the SVS as an operating model for the entire organization, not just IT functions.",
            },
            {
              id: "service-value-system-q5",
              prompt: "Which SVS component ensures ongoing enhancement of products and services?",
              choices: [
                { id: "a", text: "Guiding principles" },
                { id: "b", text: "Continual improvement" },
                { id: "c", text: "The service value chain" },
                { id: "d", text: "Governance" },
              ],
              correctChoiceId: "b",
              explanation:
                "Continual improvement is a core SVS component that ensures the organization constantly improves products, services, and practices.",
            },
          ],
          flashcards: [
            {
              id: "service-value-system-f1",
              front: "What are the five SVS components?",
              back: "Guiding principles, governance, service value chain, practices, continual improvement",
            },
            {
              id: "service-value-system-f2",
              front: "What are the four dimensions of service management?",
              back: "Organizations and people, information and technology, partners and suppliers, value streams and processes",
            },
            {
              id: "service-value-system-f3",
              front: "What does the SVS describe?",
              back: "How all components and activities of an organization work together to enable value creation through IT-enabled services.",
            },
            {
              id: "service-value-system-f4",
              front: "Name the five SVS components again.",
              back: "Guiding principles, governance, service value chain, practices, continual improvement.",
            },
            {
              id: "service-value-system-f5",
              front: "What triggers value creation in the SVS?",
              back: "Opportunity and demand from internal and external sources.",
            },
          ],
          objectives: ["ITIL4-3.1", "ITIL4-3.2"],
          practiceType: ["reading", "quiz", "flashcard", "case-study"],
          questionBank: [
            {
              id: "service-value-system-qb1",
              prompt: "Which is NOT an SVS component?",
              choices: [
                { id: "a", text: "Guiding principles" },
                { id: "b", text: "Four dimensions" },
                { id: "c", text: "Service value chain" },
                { id: "d", text: "Continual improvement" },
              ],
              correctChoiceId: "b",
              explanation: "The four dimensions are part of the SVS context but are not one of the five named components.",
            },
            {
              id: "service-value-system-qb2",
              prompt: "The 'organizations and people' dimension includes:",
              choices: [
                { id: "a", text: "Only server hardware" },
                { id: "b", text: "Culture, roles, and staffing" },
                { id: "c", text: "DNS configuration" },
                { id: "d", text: "Cable standards" },
              ],
              correctChoiceId: "b",
              explanation: "This dimension covers organizational structure, culture, roles, and workforce capability.",
            },
            {
              id: "service-value-system-qb3",
              prompt: "Opportunity and demand enter the SVS from:",
              choices: [
                { id: "a", text: "Only the service desk" },
                { id: "b", text: "External and internal sources" },
                { id: "c", text: "Only regulators" },
                { id: "d", text: "Only suppliers" },
              ],
              correctChoiceId: "b",
              explanation: "Market opportunities and internal demand trigger value creation through the SVS.",
            },
            {
              id: "service-value-system-qb4",
              prompt: "Practices in the SVS are:",
              choices: [
                { id: "a", text: "Rigid mandatory processes" },
                { id: "b", text: "Organizational resources for performing work" },
                { id: "c", text: "Hardware components" },
                { id: "d", text: "SLA penalty clauses" },
              ],
              correctChoiceId: "b",
              explanation: "Practices are flexible sets of resources for accomplishing objectives.",
            },
            {
              id: "service-value-system-qb5",
              prompt: "Governance ensures alignment with:",
              choices: [
                { id: "a", text: "Only ticket closure times" },
                { id: "b", text: "Organizational strategy and risk management" },
                { id: "c", text: "Cable labeling standards" },
                { id: "d", text: "Personal preferences" },
              ],
              correctChoiceId: "b",
              explanation: "Governance directs and controls the organization toward strategic objectives.",
            },
            {
              id: "service-value-system-qb6",
              prompt: "Value streams and processes is a:",
              choices: [
                { id: "a", text: "SVS component" },
                { id: "b", text: "Four dimension of service management" },
                { id: "c", text: "Change type" },
                { id: "d", text: "SLA metric" },
              ],
              correctChoiceId: "b",
              explanation: "It is one of the four dimensions balancing service management.",
            },
            {
              id: "service-value-system-qb7",
              prompt: "Which is NOT a component of the Service Value System?",
              choices: [
                { id: "a", text: "Guiding principles" },
                { id: "b", text: "Four dimensions of service management" },
                { id: "c", text: "Service value chain" },
                { id: "d", text: "Continual improvement" },
              ],
              correctChoiceId: "b",
              explanation: "The four dimensions are balanced alongside the SVS, but they are not one of the five SVS components.",
            },
            {
              id: "service-value-system-qb8",
              prompt: "The SVS applies to:",
              choices: [
                { id: "a", text: "The entire organization" },
                { id: "b", text: "The IT department only" },
                { id: "c", text: "External suppliers only" },
                { id: "d", text: "Senior management only" },
              ],
              correctChoiceId: "a",
              explanation: "ITIL 4 positions the SVS as an operating model for the whole organization, not just IT.",
            },
          ],
          assignments: [
            {
              id: "itil-svs-scenario-1",
              title: "Map the Service Value System",
              type: "case-study",
              instructions: `Scenario: A retail company wants faster online checkout and fewer outages.

1. Identify which SVS component covers guiding behavior during the initiative (guiding principles).
2. List which four dimensions must be balanced (people, technology, partners, processes/streams).
3. Name two SVS components beyond the value chain (e.g., governance, practices, continual improvement).
4. Explain how opportunity/demand enters the SVS in this scenario.
5. Write one sentence on how value is co-created with customers.

Use your lesson notes — no external tools required.`,
              estimatedMinutes: 25,
              completionCriteria: [
                "Identified guiding principles as behavioral guidance",
                "Listed all four dimensions correctly",
                "Named two additional SVS components",
                "Explained demand/opportunity trigger",
                "Described value co-creation in the scenario",
              ],
              relatedTopicIds: ["service-value-system", "service-management"],
              order: 1,
            },
          ],
        },
        {
          id: "guiding-principles",
          name: "Guiding Principles",
          lesson: {
            title: "The Seven ITIL Guiding Principles",
            content: `ITIL 4 defines seven guiding principles that offer recommendations to guide organizations in all circumstances, regardless of changes in goals, strategies, type of work, or management structure. These principles help organizations adopt and adapt service management practices effectively.

Focus on value reminds every activity to deliver value to stakeholders. Start where you are means assessing current state and building on existing capabilities rather than starting from scratch. Progress iteratively with feedback breaks work into manageable sections and incorporates feedback before expanding scope.

Collaborate and promote visibility ensures stakeholders across the organization share information and work together. Think and work holistically considers the whole system — the four dimensions and SVS components — not just individual parts. Keep it simple and practical eliminates unnecessary steps and uses the minimum number of steps to achieve objectives.

Optimize and automate means optimizing human work first, then automating where it adds value. Automation without optimization can amplify inefficiency. These principles are universal — they apply whether you are implementing a new practice, improving an existing process, or responding to organizational change. They should be considered together, as they reinforce each other.

Each guiding principle supports practical decisions. "Focus on value" means stopping work that does not contribute to outcomes stakeholders care about. "Progress iteratively with feedback" prevents large failed initiatives by delivering small increments and adjusting based on results.

"Collaborate and promote visibility" reduces silos — incident resolution improves when development, operations, and the service desk share information. "Keep it simple and practical" resists over-engineering service management frameworks that users will not follow.

On the exam, you may need to select which principle applies to a scenario. A team skipping assessment of current tools and buying new software violates "Start where you are." Automating a broken manual process without redesign violates "Optimize and automate" because optimization must come first.`,
          },
          keyFacts: [
            "ITIL 4 has seven guiding principles applicable in all circumstances",
            "Focus on value ensures every activity contributes to stakeholder value",
            "Start where you are means leveraging existing assets and capabilities",
            "Progress iteratively with feedback breaks work into small, reviewable increments",
            "Think and work holistically considers the entire system, not isolated parts",
            "Optimize and automate: improve human processes first, then automate where beneficial",
          ],
          guidedExample: {
            title: "Apply Guiding Principles to a Legacy Service Upgrade",
            steps: [
              "Focus on value: identify what patients gain from faster appointment booking, not just new software.",
              "Start where you are: assess existing scheduling tools before replacing everything.",
              "Progress iteratively with feedback: pilot with one clinic before enterprise rollout.",
              "Collaborate and promote visibility: involve clinicians, IT, and vendor partners in design reviews.",
              "Think and work holistically: consider people, processes, technology, and partners together.",
              "Keep it simple and practical: automate the highest-impact workflow first, not every edge case.",
            ],
          },
          commonMistakes: [
            "Memorizing seven principles but unable to match them to scenarios",
            "Confusing 'optimize and automate' with automating before simplifying",
            "Mixing up 'start where you are' with never making changes",
            "Assuming guiding principles are optional suggestions, not core SVS component",
            "Forgetting 'focus on value' applies to every decision and activity",
          ],
          examTraps: [
            "Scenario describing pilot rollout maps to progress iteratively with feedback",
            "Removing unnecessary steps before automation maps to optimize and automate",
            "Cross-team workshops map to collaborate and promote visibility",
            "Considering all four dimensions maps to think and work holistically",
            "Minimum viable product approach maps to keep it simple and practical",
          ],
          realWorldScenario: "Your IT team plans to replace a 10-year-old ticket system. Instead of a big-bang migration, leadership applies guiding principles: assess current workflows (start where you are), run a two-week pilot with the service desk (progress iteratively), strip unused custom fields before automating routing (optimize and automate), and measure value through reduced resolution time rather than features shipped.",
          estimatedStudyMinutes: 25,
          difficulty: "easy",
          prerequisites: ["service-management"],
          quiz: [
            {
              id: "guiding-principles-q1",
              prompt: "How many guiding principles does ITIL 4 define?",
              choices: [
                { id: "a", text: "5" },
                { id: "b", text: "6" },
                { id: "c", text: "7" },
                { id: "d", text: "9" },
              ],
              correctChoiceId: "c",
              explanation: "ITIL 4 defines seven guiding principles that apply universally across all service management activities.",
            },
            {
              id: "guiding-principles-q2",
              prompt: "Which guiding principle recommends building on existing capabilities rather than starting over?",
              choices: [
                { id: "a", text: "Focus on value" },
                { id: "b", text: "Start where you are" },
                { id: "c", text: "Keep it simple and practical" },
                { id: "d", text: "Collaborate and promote visibility" },
              ],
              correctChoiceId: "b",
              explanation:
                "Start where you are means assessing and leveraging what already exists rather than discarding current state and beginning from scratch.",
            },
            {
              id: "guiding-principles-q3",
              prompt: "The principle 'Optimize and automate' suggests that automation should:",
              choices: [
                { id: "a", text: "Replace all human work immediately" },
                { id: "b", text: "Follow optimization of human work where it adds value" },
                { id: "c", text: "Be avoided in favor of manual processes" },
                { id: "d", text: "Only apply to financial processes" },
              ],
              correctChoiceId: "b",
              explanation:
                "Optimize and automate means improving human work first, then automating where it delivers value — not automating inefficient processes.",
            },
            {
              id: "guiding-principles-q4",
              prompt: "Which principle encourages breaking work into manageable sections with regular feedback?",
              choices: [
                { id: "a", text: "Think and work holistically" },
                { id: "b", text: "Progress iteratively with feedback" },
                { id: "c", text: "Focus on value" },
                { id: "d", text: "Collaborate and promote visibility" },
              ],
              correctChoiceId: "b",
              explanation:
                "Progress iteratively with feedback breaks work into smaller sections, executes them, and uses feedback to improve before continuing.",
            },
            {
              id: "guiding-principles-q5",
              prompt: "'Think and work holistically' primarily reminds organizations to:",
              choices: [
                { id: "a", text: "Focus only on the service desk function" },
                { id: "b", text: "Consider the whole system including all four dimensions" },
                { id: "c", text: "Eliminate all manual processes" },
                { id: "d", text: "Ignore external partners and suppliers" },
              ],
              correctChoiceId: "b",
              explanation:
                "This principle ensures no part of the system is optimized in isolation — all four dimensions and SVS components must be considered together.",
            },
          ],
          flashcards: [
            {
              id: "guiding-principles-f1",
              front: "Name all seven ITIL 4 guiding principles.",
              back: "Focus on value, Start where you are, Progress iteratively with feedback, Collaborate and promote visibility, Think and work holistically, Keep it simple and practical, Optimize and automate",
            },
            {
              id: "guiding-principles-f2",
              front: "What does 'Start where you are' mean?",
              back: "Assess and leverage existing capabilities and assets rather than starting from scratch or replacing everything.",
            },
            {
              id: "guiding-principles-f3",
              front: "What is the correct order for 'Optimize and automate'?",
              back: "Optimize human work first, then automate where it adds value — never automate before optimizing.",
            },
            {
              id: "guiding-principles-f4",
              front: "List all seven guiding principles.",
              back: "Focus on value; Start where you are; Progress iteratively with feedback; Collaborate and promote visibility; Think and work holistically; Keep it simple and practical; Optimize and automate.",
            },
            {
              id: "guiding-principles-f5",
              front: "Which principle warns against automating broken processes?",
              back: "Optimize and automate — optimize human work before automating.",
            },
          ],
          objectives: ["ITIL4-2.1"],
          practiceType: ["reading", "quiz", "flashcard"],
          questionBank: [
            {
              id: "guiding-principles-qb1",
              prompt: "Automating before optimizing work violates:",
              choices: [
                { id: "a", text: "Focus on value" },
                { id: "b", text: "Optimize and automate" },
                { id: "c", text: "Start where you are" },
                { id: "d", text: "Collaborate and promote visibility" },
              ],
              correctChoiceId: "b",
              explanation: "Optimize human work first, then automate where it adds value.",
            },
            {
              id: "guiding-principles-qb2",
              prompt: "Assessing current capabilities before buying new tools reflects:",
              choices: [
                { id: "a", text: "Keep it simple and practical" },
                { id: "b", text: "Start where you are" },
                { id: "c", text: "Think and work holistically" },
                { id: "d", text: "Focus on value" },
              ],
              correctChoiceId: "b",
              explanation: "Start where you are means build on existing assets and capabilities.",
            },
            {
              id: "guiding-principles-qb3",
              prompt: "Breaking a large rollout into pilots uses:",
              choices: [
                { id: "a", text: "Focus on value" },
                { id: "b", text: "Progress iteratively with feedback" },
                { id: "c", text: "Optimize and automate" },
                { id: "d", text: "Collaborate and promote visibility" },
              ],
              correctChoiceId: "b",
              explanation: "Iterative delivery with feedback reduces risk and improves outcomes.",
            },
            {
              id: "guiding-principles-qb4",
              prompt: "Sharing dashboards across teams supports:",
              choices: [
                { id: "a", text: "Keep it simple and practical" },
                { id: "b", text: "Collaborate and promote visibility" },
                { id: "c", text: "Start where you are" },
                { id: "d", text: "Focus on value" },
              ],
              correctChoiceId: "b",
              explanation: "Visibility enables collaboration and informed decisions.",
            },
            {
              id: "guiding-principles-qb5",
              prompt: "Considering partners, people, and technology together reflects:",
              choices: [
                { id: "a", text: "Keep it simple and practical" },
                { id: "b", text: "Think and work holistically" },
                { id: "c", text: "Optimize and automate" },
                { id: "d", text: "Progress iteratively with feedback" },
              ],
              correctChoiceId: "b",
              explanation: "Holistic thinking considers the whole system, not isolated parts.",
            },
            {
              id: "guiding-principles-qb6",
              prompt: "Removing unused approval steps applies:",
              choices: [
                { id: "a", text: "Focus on value" },
                { id: "b", text: "Keep it simple and practical" },
                { id: "c", text: "Collaborate and promote visibility" },
                { id: "d", text: "Start where you are" },
              ],
              correctChoiceId: "b",
              explanation: "Simplicity reduces waste and improves adoption.",
            },
            {
              id: "guiding-principles-qb7",
              prompt: "Which guiding principle recommends assessing the current state before major change?",
              choices: [
                { id: "a", text: "Start where you are" },
                { id: "b", text: "Keep it simple and practical" },
                { id: "c", text: "Optimize and automate" },
                { id: "d", text: "Think and work holistically" },
              ],
              correctChoiceId: "a",
              explanation: "Start where you are means leverage existing assets, processes, and data rather than starting from scratch.",
            },
            {
              id: "guiding-principles-qb8",
              prompt: "How many guiding principles are in ITIL 4?",
              choices: [
                { id: "a", text: "5" },
                { id: "b", text: "7" },
                { id: "c", text: "9" },
                { id: "d", text: "12" },
              ],
              correctChoiceId: "b",
              explanation: "ITIL 4 defines seven guiding principles that apply in all circumstances.",
            },
          ],
        },
      ],
    },
    {
      id: "value-creation",
      name: "Value Creation",
      topics: [
        {
          id: "service-value-chain",
          name: "Service Value Chain",
          lesson: {
            title: "The ITIL Service Value Chain",
            content: `The service value chain is the central element of the ITIL Service Value System. It is an operating model for service providers that outlines six key activities required to respond to demand and facilitate value creation through products and services.

The six activities are Plan, Improve, Engage, Design and Transition, Obtain/Build, and Deliver and Support. Plan ensures a shared understanding of vision, current status, and direction across the organization. Improve ensures continual improvement of products, services, and practices across all value chain activities.

Engage provides a good understanding of stakeholder needs, transparency, and continual engagement. Design and Transition ensures products and services continually meet stakeholder expectations for quality, cost, and time to market. Obtain/Build ensures service components are available when and where needed. Deliver and Support ensures services are delivered and supported according to agreed specifications.

These activities are not a linear sequence — they are interconnected and can be combined in different sequences called value streams depending on the scenario. For example, resolving an incident might primarily use Deliver and Support and Engage, while launching a new service uses Plan, Engage, Design and Transition, Obtain/Build, and Deliver and Support. Value streams are specific combinations of activities tailored to particular situations.

Each activity produces outputs consumed by other activities. For example, Engage captures requirements that Design and Transition converts into service designs. Obtain/Build creates or acquires components that Deliver and Support operates. Improve and Plan span all activities — improvement is never limited to a single phase.

Consider a value stream for restoring a critical application after an outage: Engage communicates with users, Deliver and Support performs technical restoration, Improve captures lessons, and Plan may adjust continuity strategy. No value stream uses all six activities equally every time.

Exam tip: memorize the six activity names and one primary purpose each. Do not confuse value chain activities with ITIL practices (incident management is a practice, not a chain activity) or with SVS components.`,
          },
          keyFacts: [
            "The service value chain has six activities: Plan, Improve, Engage, Design and Transition, Obtain/Build, Deliver and Support",
            "Activities are interconnected, not a fixed linear sequence",
            "Value streams are specific combinations of value chain activities for a scenario",
            "Plan ensures shared vision and direction across the organization",
            "Deliver and Support ensures services meet agreed specifications",
            "Improve activity applies across all other value chain activities",
          ],
          commonMistakes: [
            "Confusing value chain activities with SVS components",
            "Assuming value chain activities must always run in fixed linear order",
            "Mixing up Engage with Deliver and Support activities",
            "Believing Plan activity only happens once at project start",
            "Forgetting Improve activity feeds back into all other activities",
          ],
          examTraps: [
            "Six activities: Plan, Improve, Engage, Design & Transition, Obtain/Build, Deliver & Support",
            "Engage activity for stakeholder communication vs Deliver & Support for operation",
            "Value chain as flexible model, not rigid waterfall process",
            "Obtain/Build for acquiring components vs Design & Transition for production readiness",
            "Improve activity linking to continual improvement practice",
          ],
          quiz: [
            {
              id: "service-value-chain-q1",
              prompt: "How many activities are in the ITIL service value chain?",
              choices: [
                { id: "a", text: "4" },
                { id: "b", text: "5" },
                { id: "c", text: "6" },
                { id: "d", text: "7" },
              ],
              correctChoiceId: "c",
              explanation:
                "The service value chain contains six activities: Plan, Improve, Engage, Design and Transition, Obtain/Build, and Deliver and Support.",
            },
            {
              id: "service-value-chain-q2",
              prompt: "Which value chain activity ensures service components are available when needed?",
              choices: [
                { id: "a", text: "Engage" },
                { id: "b", text: "Obtain/Build" },
                { id: "c", text: "Plan" },
                { id: "d", text: "Improve" },
              ],
              correctChoiceId: "b",
              explanation:
                "Obtain/Build ensures service components are available when and where needed, whether built internally or obtained from suppliers.",
            },
            {
              id: "service-value-chain-q3",
              prompt: "What is a value stream in ITIL 4?",
              choices: [
                { id: "a", text: "A financial report on service costs" },
                { id: "b", text: "A specific combination of value chain activities for a scenario" },
                { id: "c", text: "The order in which incidents are resolved" },
                { id: "d", text: "A type of service level agreement" },
              ],
              correctChoiceId: "b",
              explanation:
                "Value streams are specific combinations of service value chain activities tailored to particular situations, such as incident resolution or new service development.",
            },
            {
              id: "service-value-chain-q4",
              prompt: "The Engage activity primarily focuses on:",
              choices: [
                { id: "a", text: "Building new service components" },
                { id: "b", text: "Understanding stakeholder needs and maintaining transparency" },
                { id: "c", text: "Documenting known errors" },
                { id: "d", text: "Scheduling maintenance windows" },
              ],
              correctChoiceId: "b",
              explanation:
                "Engage provides understanding of stakeholder needs, ensures transparency, and maintains continual stakeholder engagement.",
            },
            {
              id: "service-value-chain-q5",
              prompt: "Design and Transition ensures that products and services:",
              choices: [
                { id: "a", text: "Are always free for consumers" },
                { id: "b", text: "Continually meet stakeholder expectations for quality, cost, and time to market" },
                { id: "c", text: "Never require changes after launch" },
                { id: "d", text: "Are delivered only by external suppliers" },
              ],
              correctChoiceId: "b",
              explanation:
                "Design and Transition ensures products and services meet stakeholder expectations for quality, cost, and time to market throughout their lifecycle.",
            },
          ],
          flashcards: [
            {
              id: "service-value-chain-f1",
              front: "What are the six service value chain activities?",
              back: "Plan, Improve, Engage, Design and Transition, Obtain/Build, Deliver and Support",
            },
            {
              id: "service-value-chain-f2",
              front: "What is a value stream?",
              back: "A specific combination of service value chain activities used to respond to a particular scenario or demand.",
            },
            {
              id: "service-value-chain-f3",
              front: "Is the service value chain a linear process?",
              back: "No — activities are interconnected and combined differently depending on the value stream and scenario.",
            },
            {
              id: "service-value-chain-f4",
              front: "Which activity obtains/builds components?",
              back: "Obtain/Build — ensures components are available when and where needed.",
            },
            {
              id: "service-value-chain-f5",
              front: "Which activity operates live services?",
              back: "Deliver and Support — services delivered and supported to agreed specifications.",
            },
          ],
          objectives: ["ITIL4-4.1", "ITIL4-4.2"],
          practiceType: ["reading", "quiz", "flashcard", "case-study"],
          questionBank: [
            {
              id: "service-value-chain-qb1",
              prompt: "The Plan activity ensures:",
              choices: [
                { id: "a", text: "Ticket closure" },
                { id: "b", text: "Shared vision and direction" },
                { id: "c", text: "Hardware disposal" },
                { id: "d", text: "Password resets" },
              ],
              correctChoiceId: "b",
              explanation: "Plan aligns the organization on vision, status, and improvement direction.",
            },
            {
              id: "service-value-chain-qb2",
              prompt: "Deliver and Support focuses on:",
              choices: [
                { id: "a", text: "Negotiating SLAs only" },
                { id: "b", text: "Operating services to specifications" },
                { id: "c", text: "Hiring staff only" },
                { id: "d", text: "Marketing campaigns" },
              ],
              correctChoiceId: "b",
              explanation: "This activity delivers and supports services according to agreed specifications.",
            },
            {
              id: "service-value-chain-qb3",
              prompt: "Improve applies to:",
              choices: [
                { id: "a", text: "Only incident management" },
                { id: "b", text: "All value chain activities" },
                { id: "c", text: "Only Plan" },
                { id: "d", text: "Only Engage" },
              ],
              correctChoiceId: "b",
              explanation: "Improve ensures continual improvement across all chain activities.",
            },
            {
              id: "service-value-chain-qb4",
              prompt: "Design and Transition covers:",
              choices: [
                { id: "a", text: "Only billing" },
                { id: "b", text: "Service design through deployment readiness" },
                { id: "c", text: "Only user surveys" },
                { id: "d", text: "Regulatory audits only" },
              ],
              correctChoiceId: "b",
              explanation: "It ensures services meet quality, cost, and time-to-market expectations.",
            },
            {
              id: "service-value-chain-qb5",
              prompt: "A new product launch value stream likely includes:",
              choices: [
                { id: "a", text: "Only Deliver and Support" },
                { id: "b", text: "Plan, Engage, Design/Transition, Obtain/Build, Deliver/Support" },
                { id: "c", text: "Only Improve" },
                { id: "d", text: "Only Engage" },
              ],
              correctChoiceId: "b",
              explanation: "New services use multiple activities combined into a value stream.",
            },
            {
              id: "service-value-chain-qb6",
              prompt: "Value chain activities are:",
              choices: [
                { id: "a", text: "Always linear in fixed order" },
                { id: "b", text: "Interconnected, not strictly sequential" },
                { id: "c", text: "Identical to ITIL practices" },
                { id: "d", text: "Only for IT departments" },
              ],
              correctChoiceId: "b",
              explanation: "Activities combine differently per value stream scenario.",
            },
          ],
          assignments: [
            {
              id: "itil-value-stream-1",
              title: "Design a Value Stream",
              type: "case-study",
              instructions: `Scenario: Your organization will launch a new mobile app service.

1. List all six service value chain activities from memory.
2. Select at least four activities that apply to this launch and explain why each is needed.
3. Define a value stream name (e.g., "New mobile app launch").
4. Identify one output from Design and Transition and one from Deliver and Support.
5. Note where the Improve activity would feed lessons back into the stream.

Document answers in your study notes.`,
              estimatedMinutes: 30,
              completionCriteria: [
                "Listed six value chain activities",
                "Mapped at least four activities to the scenario",
                "Named a value stream",
                "Identified outputs from two different activities",
                "Explained how Improve closes the loop",
              ],
              relatedTopicIds: ["service-value-chain"],
              order: 1,
            },
          ],
        },
        {
          id: "continual-improvement",
          name: "Continual Improvement",
          lesson: {
            title: "Continual Improvement in ITIL 4",
            content: `Continual improvement is a recurring organizational activity performed at all levels to ensure performance continually meets stakeholder expectations. In ITIL 4, it is both a component of the Service Value System and a practice with its own model and methods.

The ITIL continual improvement model provides a structured approach with seven steps. Step 1: What is the vision? Define the vision and strategic objectives. Step 2: Where are we now? Perform a baseline assessment of the current state. Step 3: Where do we want to be? Define measurable targets based on the vision.

Step 4: How do we get there? Create a plan with specific actions and priorities. Step 5: Take action. Execute the plan and implement improvements. Step 6: Did we get there? Measure and evaluate results against targets. Step 7: How do we keep the momentum going? Embed improvements and identify the next opportunity, returning to step 1 or 2 as needed.

The model is iterative — organizations cycle through steps continuously rather than completing them once. Improvement opportunities can come from anywhere: incident trends, customer feedback, audit findings, or strategic initiatives. The continual improvement register tracks all identified improvement opportunities, their status, and outcomes, ensuring nothing is lost and progress is visible.

Improvement methods include assessments, benchmarking, maturity models, and customer feedback analysis. The practice links to the Improve value chain activity and the continual improvement SVS component — three related but distinct references that exams love to test.

Prioritization matters because organizations cannot execute every improvement at once. Impact, urgency, resource availability, and alignment with vision guide what enters the improvement register first. Small quick wins can build momentum while larger structural improvements proceed in parallel.

Step 6 ("Did we get there?") requires measurable criteria defined in Step 3. Without baseline data from Step 2, you cannot prove improvement. This mirrors scientific thinking: hypothesis, measure, act, verify, adjust.`,
          },
          keyFacts: [
            "Continual improvement is a core SVS component and a dedicated ITIL practice",
            "The continual improvement model has seven steps from vision to maintaining momentum",
            "The model is iterative — organizations cycle through steps continuously",
            "Step 2 assesses current state; Step 3 defines measurable targets",
            "The continual improvement register tracks all improvement opportunities",
            "Improvement applies at all organizational levels, not just IT operations",
          ],
          commonMistakes: [
            "Confusing continual improvement with reactive incident firefighting",
            "Mixing up the improvement register with the incident log",
            "Assuming improvement requires large transformational projects only",
            "Forgetting the improvement model includes 'what is the vision' step",
            "Believing KPIs alone drive improvement without stakeholder feedback",
          ],
          examTraps: [
            "Seven-step improvement model sequence questions",
            "Improvement register tracks opportunities vs change schedule for authorized changes",
            "Baseline current state before measuring improvement impact",
            "Small incremental improvements vs large initiatives both valid",
            "Link improvement to SVS Improve activity and guiding principles",
          ],
          quiz: [
            {
              id: "continual-improvement-q1",
              prompt: "How many steps are in the ITIL continual improvement model?",
              choices: [
                { id: "a", text: "5" },
                { id: "b", text: "6" },
                { id: "c", text: "7" },
                { id: "d", text: "9" },
              ],
              correctChoiceId: "c",
              explanation:
                "The ITIL continual improvement model has seven steps, from defining vision through taking action, measuring results, and maintaining momentum.",
            },
            {
              id: "continual-improvement-q2",
              prompt: "What is the purpose of Step 2 ('Where are we now?') in the improvement model?",
              choices: [
                { id: "a", text: "Define the organization's vision" },
                { id: "b", text: "Perform a baseline assessment of the current state" },
                { id: "c", text: "Execute the improvement plan" },
                { id: "d", text: "Close the improvement register" },
              ],
              correctChoiceId: "b",
              explanation:
                "Step 2 performs a baseline assessment to understand the current state before defining where the organization wants to be.",
            },
            {
              id: "continual-improvement-q3",
              prompt: "The continual improvement register is used to:",
              choices: [
                { id: "a", text: "Track all identified improvement opportunities and their status" },
                { id: "b", text: "Record all service incidents" },
                { id: "c", text: "Store user passwords securely" },
                { id: "d", text: "Define service level targets" },
              ],
              correctChoiceId: "a",
              explanation:
                "The continual improvement register tracks improvement opportunities, their status, priorities, and outcomes across the organization.",
            },
            {
              id: "continual-improvement-q4",
              prompt: "After completing Step 7 of the improvement model, an organization should:",
              choices: [
                { id: "a", text: "Stop all improvement activities permanently" },
                { id: "b", text: "Return to earlier steps and identify the next improvement opportunity" },
                { id: "c", text: "Outsource all future improvements" },
                { id: "d", text: "Eliminate the improvement register" },
              ],
              correctChoiceId: "b",
              explanation:
                "Step 7 maintains momentum by embedding improvements and returning to step 1 or 2 to identify the next opportunity — the model is iterative.",
            },
            {
              id: "continual-improvement-q5",
              prompt: "Continual improvement in ITIL 4 applies to:",
              choices: [
                { id: "a", text: "Only the service desk team" },
                { id: "b", text: "Only after major incidents occur" },
                { id: "c", text: "All organizational levels and all SVS components" },
                { id: "d", text: "Only financial processes" },
              ],
              correctChoiceId: "c",
              explanation:
                "Continual improvement is performed at all organizational levels and applies across all components of the Service Value System.",
            },
          ],
          flashcards: [
            {
              id: "continual-improvement-f1",
              front: "What are the seven steps of the continual improvement model?",
              back: "1) Vision, 2) Where are we now?, 3) Where do we want to be?, 4) How do we get there?, 5) Take action, 6) Did we get there?, 7) Keep the momentum",
            },
            {
              id: "continual-improvement-f2",
              front: "What is the continual improvement register?",
              back: "A record of all identified improvement opportunities, their status, priorities, and outcomes.",
            },
            {
              id: "continual-improvement-f3",
              front: "Is the improvement model a one-time process?",
              back: "No — it is iterative. Organizations cycle through the steps continuously, returning to earlier steps after Step 7.",
            },
            {
              id: "continual-improvement-f4",
              front: "What happens in Step 4?",
              back: "How do we get there? — create a plan with actions and priorities.",
            },
            {
              id: "continual-improvement-f5",
              front: "What happens in Step 6?",
              back: "Did we get there? — measure and evaluate results against targets.",
            },
          ],
          objectives: ["ITIL4-3.3", "ITIL4-5.1"],
          practiceType: ["reading", "quiz", "flashcard", "simulator", "case-study"],
          questionBank: [
            {
              id: "continual-improvement-qb1",
              prompt: "Step 3 of the improvement model asks:",
              choices: [
                { id: "a", text: "What is the vision?" },
                { id: "b", text: "Where do we want to be?" },
                { id: "c", text: "Take action" },
                { id: "d", text: "Keep momentum" },
              ],
              correctChoiceId: "b",
              explanation: "Step 3 defines measurable targets aligned with the vision.",
            },
            {
              id: "continual-improvement-qb2",
              prompt: "Step 5 is:",
              choices: [
                { id: "a", text: "Where are we now?" },
                { id: "b", text: "Take action" },
                { id: "c", text: "Define vision" },
                { id: "d", text: "Close the register" },
              ],
              correctChoiceId: "b",
              explanation: "Step 5 executes the improvement plan.",
            },
            {
              id: "continual-improvement-qb3",
              prompt: "Without Step 2 baseline, Step 6 cannot:",
              choices: [
                { id: "a", text: "Start vision work" },
                { id: "b", text: "Prove improvement occurred" },
                { id: "c", text: "Create SLAs" },
                { id: "d", text: "Handle incidents" },
              ],
              correctChoiceId: "b",
              explanation: "You need a baseline to measure whether targets were met.",
            },
            {
              id: "continual-improvement-qb4",
              prompt: "The improvement register tracks:",
              choices: [
                { id: "a", text: "Only closed incidents" },
                { id: "b", text: "Opportunities, status, and outcomes" },
                { id: "c", text: "Employee passwords" },
                { id: "d", text: "Cable inventory" },
              ],
              correctChoiceId: "b",
              explanation: "It ensures improvement work is visible and prioritized.",
            },
            {
              id: "continual-improvement-qb5",
              prompt: "Continual improvement is both:",
              choices: [
                { id: "a", text: "Only a metric" },
                { id: "b", text: "An SVS component and a practice" },
                { id: "c", text: "Only a change type" },
                { id: "d", text: "Only a job title" },
              ],
              correctChoiceId: "b",
              explanation: "It appears in the SVS and as a general management practice.",
            },
            {
              id: "continual-improvement-qb6",
              prompt: "After Step 7, organizations should:",
              choices: [
                { id: "a", text: "Stop improving permanently" },
                { id: "b", text: "Identify the next improvement cycle" },
                { id: "c", text: "Delete all metrics" },
                { id: "d", text: "Skip governance" },
              ],
              correctChoiceId: "b",
              explanation: "The model loops — momentum means starting the next improvement.",
            },
          ],
          assignments: [
            {
              id: "itil-improvement-register-1",
              title: "Build an Improvement Register Entry",
              type: "case-study",
              instructions: `Scenario: Mean time to restore service (MTRS) for Priority 2 incidents rose 30% last quarter.

Walk through the seven-step continual improvement model:
1. Vision — state a one-sentence improvement vision tied to stakeholder value.
2. Where are we now? — write the baseline metric (30% MTRS increase).
3. Where do we want to be? — define a measurable target.
4. How do we get there? — list three specific actions.
5. Take action — pick which action you would pilot first and why.
6. Did we get there? — describe what metric you would review.
7. Keep momentum — identify the next improvement after MTRS stabilizes.

Optional: complete the Risk Prioritization simulator if you want extra drill on ranking improvements.`,
              estimatedMinutes: 35,
              completionCriteria: [
                "Completed all seven improvement model steps",
                "Baseline and target metrics are measurable",
                "Listed three concrete actions",
                "Identified pilot action with rationale",
                "Defined follow-up improvement for Step 7",
              ],
              relatedTopicIds: ["continual-improvement", "incident-management"],
              order: 1,
            },
          ],
        },
      ],
    },
    {
      id: "service-management-practices",
      name: "Service Management Practices",
      topics: [
        {
          id: "incident-management",
          name: "Incident Management",
          lesson: {
            title: "Incident Management Practice",
            content: `Incident management is an ITIL 4 practice that minimizes the negative impact of incidents by restoring normal service operation as quickly as possible. An incident is an unplanned interruption to a service or reduction in the quality of a service. The goal is not root cause elimination — that belongs to problem management — but rapid restoration.

The incident management workflow typically includes identification, logging, categorization, prioritization, diagnosis, resolution, and closure. Incidents are prioritized based on impact (effect on the business) and urgency (how quickly resolution is needed). A high-impact, high-urgency incident receives the highest priority.

The service desk often serves as the primary contact point for incident reporting and communication. Incident models define standardized steps for handling common incident types, improving efficiency and consistency. Major incidents require special handling with dedicated resources and communication plans to manage significant business disruption.

Effective incident management relies on clear escalation paths, knowledge articles for known resolutions, and integration with other practices like problem management and change enablement. Metrics such as mean time to restore service (MTRS) and first-contact resolution rate help measure practice effectiveness.

Incident status tracks progress from detection through closure. Common statuses include New, Assigned, In Progress, Pending (awaiting user or vendor), Resolved, and Closed. A workaround restores service temporarily; a permanent fix may require a change request linked to problem management.

Major incident management adds coordination roles: incident commander, communications lead, and technical teams. Regular stakeholder updates reduce duplicate tickets and protect reputation during outages.

Swarming is a collaborative approach where multiple specialists work an incident together instead of sequential tiered escalation. It aligns with ITIL guiding principles of collaborate and promote visibility while reducing mean time to restore service.`,
          },
          keyFacts: [
            "An incident is an unplanned interruption or quality reduction of a service",
            "Primary goal: restore normal service operation as quickly as possible",
            "Incidents are prioritized by impact (business effect) and urgency (time sensitivity)",
            "Incident models provide standardized steps for common incident types",
            "Major incidents require dedicated handling and communication plans",
            "Root cause analysis belongs to problem management, not incident management",
          ],
          guidedExample: {
            title: "Restore Email Service After an Outage",
            steps: [
              "Detect and log the incident: users report email unavailable, service desk creates INC0001234.",
              "Categorize and prioritize based on impact (many users) and urgency (business hours critical work).",
              "Diagnose: exchange team finds failed database connection, not a user password issue.",
              "Escalate to specialist team and apply workaround if available while fixing root cause separately.",
              "Resolve and restore service: restart database cluster, confirm email flow, communicate to users.",
              "Close incident with resolution notes; problem management investigates root cause if recurring.",
            ],
          },
          commonMistakes: [
            "Confusing incident management (restore service) with problem management (root cause)",
            "Assuming every incident requires immediate problem record creation",
            "Mixing up incident priority with change priority scales",
            "Believing incident management eliminates all recurring issues permanently",
            "Forgetting to communicate status to users during major incidents",
          ],
          examTraps: [
            "Incident goal is restore service ASAP vs problem goal is prevent recurrence",
            "Workaround restores service without fixing underlying cause",
            "Major incident management involves coordinated communication and roles",
            "Incident model defines standard steps for similar incident types",
            "Closed incident vs open problem for same underlying defect scenario",
          ],
          realWorldScenario: "At 9 AM Monday, payroll staff cannot access the HR portal. The service desk logs a high-priority incident, the network team identifies a misconfigured firewall rule changed over the weekend, applies a rollback to restore access within 30 minutes, sends status updates to affected managers, and closes the incident—while problem management opens a separate record to review why the change bypassed testing.",
          estimatedStudyMinutes: 25,
          difficulty: "medium",
          prerequisites: ["service-management", "service-desk"],
          quiz: [
            {
              id: "incident-management-q1",
              prompt: "What is the primary goal of incident management?",
              choices: [
                { id: "a", text: "Identify and eliminate root causes of failures" },
                { id: "b", text: "Restore normal service operation as quickly as possible" },
                { id: "c", text: "Approve all changes to production systems" },
                { id: "d", text: "Negotiate service level agreements" },
              ],
              correctChoiceId: "b",
              explanation:
                "Incident management focuses on rapid restoration of service. Root cause elimination is handled by problem management.",
            },
            {
              id: "incident-management-q2",
              prompt: "An incident is best defined as:",
              choices: [
                { id: "a", text: "A planned change to a service" },
                { id: "b", text: "An unplanned interruption or reduction in service quality" },
                { id: "c", text: "A documented root cause of a recurring failure" },
                { id: "d", text: "A request for a new service feature" },
              ],
              correctChoiceId: "b",
              explanation:
                "An incident is an unplanned interruption to a service or a reduction in the quality of a service.",
            },
            {
              id: "incident-management-q3",
              prompt: "Incident priority is determined by:",
              choices: [
                { id: "a", text: "The seniority of the person reporting it" },
                { id: "b", text: "Impact and urgency" },
                { id: "c", text: "The day of the week it occurs" },
                { id: "d", text: "The number of previous incidents" },
              ],
              correctChoiceId: "b",
              explanation:
                "Priority is calculated from impact (effect on business) and urgency (how quickly resolution is needed).",
            },
            {
              id: "incident-management-q4",
              prompt: "What is an incident model?",
              choices: [
                { id: "a", text: "A financial model for service pricing" },
                { id: "b", text: "Standardized steps for handling common incident types" },
                { id: "c", text: "A diagram of the OSI model" },
                { id: "d", text: "A template for service level agreements" },
              ],
              correctChoiceId: "b",
              explanation:
                "Incident models define standardized procedures for handling frequently occurring incident types efficiently and consistently.",
            },
            {
              id: "incident-management-q5",
              prompt: "Which practice is responsible for identifying root causes of recurring incidents?",
              choices: [
                { id: "a", text: "Incident management" },
                { id: "b", text: "Problem management" },
                { id: "c", text: "Change enablement" },
                { id: "d", text: "Service level management" },
              ],
              correctChoiceId: "b",
              explanation:
                "Problem management investigates root causes and manages known errors. Incident management focuses on restoration, not root cause analysis.",
            },
          ],
          flashcards: [
            {
              id: "incident-management-f1",
              front: "What is an incident?",
              back: "An unplanned interruption to a service or reduction in the quality of a service.",
            },
            {
              id: "incident-management-f2",
              front: "How is incident priority determined?",
              back: "By impact (effect on business) and urgency (how quickly resolution is needed).",
            },
            {
              id: "incident-management-f3",
              front: "What is the difference between incident and problem management?",
              back: "Incident management restores service quickly. Problem management identifies and eliminates root causes.",
            },
            {
              id: "incident-management-f4",
              front: "What is a major incident?",
              back: "An incident with significant business impact requiring coordinated response and communication.",
            },
            {
              id: "incident-management-f5",
              front: "What is MTRS?",
              back: "Mean time to restore service — how quickly normal service operation is restored.",
            },
          ],
          objectives: ["ITIL4-6.2"],
          practiceType: ["reading", "quiz", "flashcard", "simulator"],
          questionBank: [
            {
              id: "incident-management-qb1",
              prompt: "A workaround is:",
              choices: [
                { id: "a", text: "A permanent fix" },
                { id: "b", text: "A temporary way to restore service" },
                { id: "c", text: "A type of SLA" },
                { id: "d", text: "A standard change" },
              ],
              correctChoiceId: "b",
              explanation: "Workarounds restore service while problem/change work continues.",
            },
            {
              id: "incident-management-qb2",
              prompt: "Major incidents require:",
              choices: [
                { id: "a", text: "No escalation" },
                { id: "b", text: "Dedicated coordination and communication" },
                { id: "c", text: "Automatic problem closure" },
                { id: "d", text: "Skipping documentation" },
              ],
              correctChoiceId: "b",
              explanation: "Major incidents need special management and stakeholder updates.",
            },
            {
              id: "incident-management-qb3",
              prompt: "Incident models help by:",
              choices: [
                { id: "a", text: "Eliminating all incidents" },
                { id: "b", text: "Standardizing response to common incidents" },
                { id: "c", text: "Replacing the service desk" },
                { id: "d", text: "Defining SLAs only" },
              ],
              correctChoiceId: "b",
              explanation: "Models improve speed and consistency for frequent incident types.",
            },
            {
              id: "incident-management-qb4",
              prompt: "MTRS measures:",
              choices: [
                { id: "a", text: "Monthly ticket revenue" },
                { id: "b", text: "Mean time to restore service" },
                { id: "c", text: "Maximum transfer rate speed" },
                { id: "d", text: "Managed token refresh service" },
              ],
              correctChoiceId: "b",
              explanation: "MTRS tracks how quickly normal service is restored.",
            },
            {
              id: "incident-management-qb5",
              prompt: "Incident prioritization uses:",
              choices: [
                { id: "a", text: "Random assignment" },
                { id: "b", text: "Impact and urgency" },
                { id: "c", text: "Reporter job title only" },
                { id: "d", text: "Day of week" },
              ],
              correctChoiceId: "b",
              explanation: "Priority = f(impact, urgency) in standard matrices.",
            },
            {
              id: "incident-management-qb6",
              prompt: "Root cause elimination belongs to:",
              choices: [
                { id: "a", text: "Incident management" },
                { id: "b", text: "Problem management" },
                { id: "c", text: "Service level management" },
                { id: "d", text: "Service catalog" },
              ],
              correctChoiceId: "b",
              explanation: "Incidents focus on restoration; problems focus on causes.",
            },
            {
              id: "incident-management-qb7",
              prompt: "What is the primary purpose of incident management?",
              choices: [
                { id: "a", text: "Restore normal service operation as quickly as possible" },
                { id: "b", text: "Identify and eliminate root causes of all failures" },
                { id: "c", text: "Authorize all infrastructure changes" },
                { id: "d", text: "Negotiate SLAs with customers" },
              ],
              correctChoiceId: "a",
              explanation: "Incident management focuses on restoring service; problem management addresses root cause.",
            },
            {
              id: "incident-management-qb8",
              prompt: "A temporary fix that restores service but not the underlying cause is called a:",
              choices: [
                { id: "a", text: "Workaround" },
                { id: "b", text: "Standard change" },
                { id: "c", text: "Service offering" },
                { id: "d", text: "Underpinning contract" },
              ],
              correctChoiceId: "a",
              explanation: "A workaround reduces or eliminates incident impact while a permanent fix may require problem and change management.",
            },
          ],
          assignments: [
            {
              id: "itil-incident-simulator-1",
              title: "ITIL Incident & Change Ordering Drill",
              type: "simulator",
              instructions: `Complete the in-app ITIL incident and change ordering simulator.

Focus on:
- Incident vs problem vs change workflows
- Standard vs normal vs emergency change sequences
- Correct ordering of response steps under pressure

Aim for at least 80% on your session. Review any missed weak concepts before marking this assignment complete.`,
              estimatedMinutes: 20,
              simulatorId: "itil-incident-order",
              completionCriteria: [
                "Completed the itil-incident-order simulator session",
                "Scored at least 80% OR reviewed all missed concepts",
                "Can explain difference between incident and problem goals",
              ],
              relatedTopicIds: ["incident-management", "change-enablement", "problem-management"],
              order: 1,
            },
          ],
        },
        {
          id: "problem-management",
          name: "Problem Management",
          lesson: {
            title: "Problem Management Practice",
            content: `Problem management is the practice of reducing the likelihood and impact of incidents by identifying and addressing their root causes. A problem is a cause, or potential cause, of one or more incidents. Problems can be reactive (identified after incidents occur) or proactive (identified before incidents happen through trend analysis).

The practice manages the lifecycle of problems from identification through investigation, diagnosis, and resolution. When a root cause is identified but a permanent fix is not yet available, the problem becomes a known error — a problem that has been analyzed and documented with a workaround. Known errors are recorded in the known error database for reference by incident management.

Problem management uses techniques like the '5 Whys' and Ishikawa (fishbone) diagrams to investigate causes. It works closely with incident management (which provides incident data), change enablement (which implements fixes), and knowledge management (which stores solutions). Error control focuses on managing known errors, while problem control focuses on identifying and understanding problems.

Proactive problem management analyzes incident trends and infrastructure monitoring data to identify potential problems before they cause major incidents. This shift-left approach reduces incident volume and improves service stability over time.

Problem identification sources include recurring incident patterns, vendor alerts, and capacity trends. A single severe incident may trigger reactive problem investigation even if it has not repeated. Problem prioritization considers incident frequency, impact, and cost of investigation.

The known error database links to knowledge management and the service desk. When agents handle incidents, they should check for documented workarounds before reinventing solutions. This reduces resolution time and user frustration.

Distinguish problem control (finding and understanding problems) from error control (managing known errors until permanent resolution). Exams frequently test this split and ask which practice owns root cause elimination versus fast restoration.`,
          },
          keyFacts: [
            "A problem is a cause or potential cause of one or more incidents",
            "Problem management can be reactive (after incidents) or proactive (before incidents)",
            "A known error is a problem with a documented root cause and workaround",
            "Known errors are stored in the known error database",
            "Problem control identifies problems; error control manages known errors",
            "Permanent fixes are implemented through change enablement",
          ],
          commonMistakes: [
            "Confusing problem management with incident management",
            "Assuming every incident requires a problem record",
            "Mixing up known error database with incident ticket queue",
            "Believing problem management focuses on restoring service quickly",
            "Forgetting root cause analysis is central to problem management",
          ],
          examTraps: [
            "Incident restores service; problem investigates root cause",
            "Known error = problem with documented root cause and workaround",
            "Reactive vs proactive problem identification scenarios",
            "Multiple incidents linked to single problem record",
            "Workaround documented in known error vs permanent fix via change",
          ],
          quiz: [
            {
              id: "problem-management-q1",
              prompt: "What is a problem in ITIL 4?",
              choices: [
                { id: "a", text: "An unplanned service interruption" },
                { id: "b", text: "A cause or potential cause of one or more incidents" },
                { id: "c", text: "A request for a new service" },
                { id: "d", text: "An approved change to production" },
              ],
              correctChoiceId: "b",
              explanation:
                "A problem is defined as a cause, or potential cause, of one or more incidents — distinct from the incident itself.",
            },
            {
              id: "problem-management-q2",
              prompt: "What is a known error?",
              choices: [
                { id: "a", text: "An incident that has been closed" },
                { id: "b", text: "A problem with a documented root cause and workaround" },
                { id: "c", text: "A change that failed in production" },
                { id: "d", text: "An SLA that was not met" },
              ],
              correctChoiceId: "b",
              explanation:
                "A known error is a problem that has been analyzed, has a documented root cause, and has a workaround available until a permanent fix is implemented.",
            },
            {
              id: "problem-management-q3",
              prompt: "Proactive problem management aims to:",
              choices: [
                { id: "a", text: "Restore service after an outage" },
                { id: "b", text: "Identify potential problems before they cause incidents" },
                { id: "c", text: "Approve emergency changes" },
                { id: "d", text: "Handle service desk phone calls" },
              ],
              correctChoiceId: "b",
              explanation:
                "Proactive problem management analyzes trends and monitoring data to identify potential problems before they result in incidents.",
            },
            {
              id: "problem-management-q4",
              prompt: "Where are known errors typically documented?",
              choices: [
                { id: "a", text: "The known error database" },
                { id: "b", text: "The service catalog only" },
                { id: "c", text: "The change schedule" },
                { id: "d", text: "The service desk phone system" },
              ],
              correctChoiceId: "a",
              explanation:
                "Known errors are recorded in the known error database, making workarounds available to incident management and support teams.",
            },
            {
              id: "problem-management-q5",
              prompt: "Permanent fixes for problems are implemented through:",
              choices: [
                { id: "a", text: "Incident management" },
                { id: "b", text: "Change enablement" },
                { id: "c", text: "Service level management" },
                { id: "d", text: "The service desk alone" },
              ],
              correctChoiceId: "b",
              explanation:
                "Once a permanent solution is identified, change enablement manages the controlled implementation of the fix in production.",
            },
          ],
          flashcards: [
            {
              id: "problem-management-f1",
              front: "What is the difference between an incident and a problem?",
              back: "An incident is an unplanned service interruption. A problem is the cause or potential cause of incidents.",
            },
            {
              id: "problem-management-f2",
              front: "What is a known error?",
              back: "A problem with a documented root cause and a workaround, stored in the known error database.",
            },
            {
              id: "problem-management-f3",
              front: "What is proactive vs. reactive problem management?",
              back: "Reactive: investigates after incidents occur. Proactive: identifies potential problems before they cause incidents.",
            },
            {
              id: "problem-management-f4",
              front: "What is problem control vs error control?",
              back: "Problem control identifies/analyzes problems; error control manages known errors and workarounds.",
            },
            {
              id: "problem-management-f5",
              front: "Name two problem investigation techniques.",
              back: "5 Whys and Ishikawa (fishbone) diagrams.",
            },
          ],
          objectives: ["ITIL4-6.3"],
          practiceType: ["reading", "quiz", "flashcard", "case-study"],
          questionBank: [
            {
              id: "problem-management-qb1",
              prompt: "Reactive problem management starts from:",
              choices: [
                { id: "a", text: "Future capacity plans only" },
                { id: "b", text: "Incidents that have occurred" },
                { id: "c", text: "Marketing surveys" },
                { id: "d", text: "SLA celebrations" },
              ],
              correctChoiceId: "b",
              explanation: "Reactive work investigates causes after incidents.",
            },
            {
              id: "problem-management-qb2",
              prompt: "Error control manages:",
              choices: [
                { id: "a", text: "New hire onboarding" },
                { id: "b", text: "Known errors and workarounds" },
                { id: "c", text: "Standard changes only" },
                { id: "d", text: "User entertainment" },
              ],
              correctChoiceId: "b",
              explanation: "Error control focuses on known errors until permanent fixes.",
            },
            {
              id: "problem-management-qb3",
              prompt: "The 5 Whys is used for:",
              choices: [
                { id: "a", text: "Subnetting" },
                { id: "b", text: "Root cause analysis" },
                { id: "c", text: "SLA billing" },
                { id: "d", text: "Password generation" },
              ],
              correctChoiceId: "b",
              explanation: "It is a problem investigation technique.",
            },
            {
              id: "problem-management-qb4",
              prompt: "A permanent fix is deployed via:",
              choices: [
                { id: "a", text: "Incident logging only" },
                { id: "b", text: "Change enablement" },
                { id: "c", text: "Service desk greetings" },
                { id: "d", text: "SLA deletion" },
              ],
              correctChoiceId: "b",
              explanation: "Changes implement fixes in controlled ways.",
            },
            {
              id: "problem-management-qb5",
              prompt: "Proactive problem management analyzes:",
              choices: [
                { id: "a", text: "Only closed changes" },
                { id: "b", text: "Trends before major incidents" },
                { id: "c", text: "Holiday schedules" },
                { id: "d", text: "Office layouts" },
              ],
              correctChoiceId: "b",
              explanation: "Proactive work reduces future incident volume.",
            },
            {
              id: "problem-management-qb6",
              prompt: "A known error has:",
              choices: [
                { id: "a", text: "No analysis performed" },
                { id: "b", text: "Documented root cause and workaround" },
                { id: "c", text: "Only an incident number" },
                { id: "d", text: "Automatic SLA breach" },
              ],
              correctChoiceId: "b",
              explanation: "Known errors are analyzed problems with workarounds recorded.",
            },
          ],
        },
        {
          id: "change-enablement",
          name: "Change Enablement",
          lesson: {
            title: "Change Enablement Practice",
            content: `Change enablement is the practice that maximizes the number of successful service and product changes by ensuring risks are properly assessed, authorizing changes to proceed, and managing the change schedule. A change is the addition, modification, or removal of anything that could have a direct or indirect effect on services.

Changes are categorized by risk and impact. Standard changes are low-risk, pre-authorized, and follow a documented procedure — no individual approval needed each time. Normal changes require assessment and authorization by a change authority before implementation. Emergency changes are implemented as quickly as possible to resolve a major incident, with retrospective documentation and review.

The change enablement practice works with other practices to evaluate proposed changes. Change advisory boards (CABs) or change managers assess normal changes for risk, impact, and resource requirements. The change schedule (or forward schedule of changes) helps coordinate changes to avoid conflicts and manage risk during implementation windows.

Effective change enablement balances agility with control. Too much bureaucracy slows delivery; too little control increases failure rates. ITIL 4 emphasizes enabling change rather than merely controlling it, using automation and standard change models to streamline low-risk changes while maintaining appropriate governance for high-risk ones.

Change authority varies by change type and risk. Standard changes use pre-approval; normal changes may require a change manager or CAB; emergency changes may be authorized by an emergency change authority with post-implementation review.

Change models document roles, steps, and inputs for repeatable change types — similar to incident models. Automation can implement standard changes with minimal manual touch while preserving audit trails.

Failed changes feed problem management and continual improvement. Blaming individuals without process review violates ITIL's holistic thinking. Assess what in the change enablement practice allowed the failure: insufficient testing, poor scheduling, or missing stakeholder engagement.`,
          },
          keyFacts: [
            "A change is any addition, modification, or removal affecting services",
            "Standard changes are pre-authorized and follow documented procedures",
            "Normal changes require assessment and authorization before implementation",
            "Emergency changes address major incidents with retrospective review",
            "The change schedule coordinates changes to avoid conflicts",
            "Change enablement balances speed of delivery with appropriate risk control",
          ],
          commonMistakes: [
            "Confusing standard changes with normal or emergency changes",
            "Assuming all changes require CAB approval regardless of type",
            "Mixing up change enablement with release management scope",
            "Believing emergency changes skip all assessment and documentation",
            "Forgetting standard changes are pre-authorized with documented procedure",
          ],
          examTraps: [
            "Standard change pre-approved vs normal change needs assessment",
            "Emergency change fast-tracked but still documented and reviewed afterward",
            "Change advisory board (CAB) role for normal changes",
            "Low-risk repetitive change classified as standard change",
            "Change schedule vs release plan scope differences",
          ],
          quiz: [
            {
              id: "change-enablement-q1",
              prompt: "Which type of change is pre-authorized and follows a documented procedure?",
              choices: [
                { id: "a", text: "Normal change" },
                { id: "b", text: "Emergency change" },
                { id: "c", text: "Standard change" },
                { id: "d", text: "Retrospective change" },
              ],
              correctChoiceId: "c",
              explanation:
                "Standard changes are low-risk, pre-authorized, and follow an established procedure without requiring individual approval each time.",
            },
            {
              id: "change-enablement-q2",
              prompt: "An emergency change is typically used when:",
              choices: [
                { id: "a", text: "Planning a routine software update" },
                { id: "b", text: "Resolving a major incident as quickly as possible" },
                { id: "c", text: "Documenting a known error" },
                { id: "d", text: "Creating a new service catalog entry" },
              ],
              correctChoiceId: "b",
              explanation:
                "Emergency changes are implemented rapidly to resolve major incidents, with documentation and review performed retrospectively.",
            },
            {
              id: "change-enablement-q3",
              prompt: "What is the purpose of the change schedule?",
              choices: [
                { id: "a", text: "Track all closed incidents" },
                { id: "b", text: "Coordinate planned changes and avoid conflicts" },
                { id: "c", text: "Define service level targets" },
                { id: "d", text: "Store user credentials" },
              ],
              correctChoiceId: "b",
              explanation:
                "The change schedule (forward schedule of changes) coordinates planned changes to prevent conflicts and manage implementation risk.",
            },
            {
              id: "change-enablement-q4",
              prompt: "Normal changes require:",
              choices: [
                { id: "a", text: "No assessment or approval" },
                { id: "b", text: "Assessment and authorization before implementation" },
                { id: "c", text: "Only retrospective documentation" },
                { id: "d", text: "Approval from the service consumer only" },
              ],
              correctChoiceId: "b",
              explanation:
                "Normal changes must be assessed for risk and impact and authorized by a change authority before they can be implemented.",
            },
            {
              id: "change-enablement-q5",
              prompt: "In ITIL 4, 'change enablement' emphasizes:",
              choices: [
                { id: "a", text: "Blocking all changes to maintain stability" },
                { id: "b", text: "Maximizing successful changes while managing risk appropriately" },
                { id: "c", text: "Eliminating the need for change documentation" },
                { id: "d", text: "Removing all approval processes" },
              ],
              correctChoiceId: "b",
              explanation:
                "Change enablement focuses on enabling successful changes by balancing agility with appropriate risk assessment and authorization.",
            },
          ],
          flashcards: [
            {
              id: "change-enablement-f1",
              front: "What are the three change types in ITIL 4?",
              back: "Standard (pre-authorized), Normal (requires assessment/authorization), Emergency (rapid implementation for major incidents)",
            },
            {
              id: "change-enablement-f2",
              front: "What is a standard change?",
              back: "A low-risk, pre-authorized change that follows a documented procedure — no individual approval needed each time.",
            },
            {
              id: "change-enablement-f3",
              front: "What is the change schedule used for?",
              back: "Coordinating planned changes to avoid conflicts and manage risk during implementation windows.",
            },
            {
              id: "change-enablement-f4",
              front: "What is a change model?",
              back: "Documented steps, roles, and inputs for a repeatable type of change.",
            },
            {
              id: "change-enablement-f5",
              front: "Who authorizes emergency changes?",
              back: "An emergency change authority — with retrospective review after implementation.",
            },
          ],
          objectives: ["ITIL4-6.4"],
          practiceType: ["reading", "quiz", "flashcard", "case-study"],
          questionBank: [
            {
              id: "change-enablement-qb1",
              prompt: "A low-risk password reset procedure is often a:",
              choices: [
                { id: "a", text: "Emergency change" },
                { id: "b", text: "Standard change" },
                { id: "c", text: "Unauthorized change" },
                { id: "d", text: "Major incident" },
              ],
              correctChoiceId: "b",
              explanation: "Pre-authorized procedures define standard changes.",
            },
            {
              id: "change-enablement-qb2",
              prompt: "Emergency changes require:",
              choices: [
                { id: "a", text: "No records" },
                { id: "b", text: "Retrospective review and documentation" },
                { id: "c", text: "CAB approval weeks in advance" },
                { id: "d", text: "Skipping incident link" },
              ],
              correctChoiceId: "b",
              explanation: "Speed first, then review what happened and why.",
            },
            {
              id: "change-enablement-qb3",
              prompt: "The forward schedule of changes helps:",
              choices: [
                { id: "a", text: "Increase random failures" },
                { id: "b", text: "Avoid conflicting changes" },
                { id: "c", text: "Replace incident management" },
                { id: "d", text: "Eliminate testing" },
              ],
              correctChoiceId: "b",
              explanation: "Scheduling coordinates change windows and dependencies.",
            },
            {
              id: "change-enablement-qb4",
              prompt: "A normal change needs:",
              choices: [
                { id: "a", text: "No evaluation" },
                { id: "b", text: "Assessment and authorization" },
                { id: "c", text: "Only verbal approval" },
                { id: "d", text: "Automatic deployment" },
              ],
              correctChoiceId: "b",
              explanation: "Normal changes go through formal evaluation.",
            },
            {
              id: "change-enablement-qb5",
              prompt: "Change enablement maximizes:",
              choices: [
                { id: "a", text: "Failed deployments" },
                { id: "b", text: "Successful changes while managing risk" },
                { id: "c", text: "Undocumented work" },
                { id: "d", text: "Shadow IT only" },
              ],
              correctChoiceId: "b",
              explanation: "The practice enables change safely, not blocks all change.",
            },
            {
              id: "change-enablement-qb6",
              prompt: "A CAB typically assesses:",
              choices: [
                { id: "a", text: "User lunch orders" },
                { id: "b", text: "Risk and impact of normal changes" },
                { id: "c", text: "Personal emails" },
                { id: "d", text: "Marketing colors" },
              ],
              correctChoiceId: "b",
              explanation: "Change advisory boards review significant normal changes.",
            },
          ],
        },
        {
          id: "service-desk",
          name: "Service Desk",
          lesson: {
            title: "The Service Desk Practice",
            content: `The service desk is the practice that captures demand for incident resolution and service requests. It provides a single point of contact (SPOC) between the service provider and users for all service interactions. An effective service desk improves user satisfaction and service quality through consistent, accessible support.

Service desk structures vary by organization. Local service desks are decentralized close to users. Centralized service desks consolidate support for efficiency. Virtual service desks use technology to connect staff regardless of location. Follow-the-sun models hand off support across time zones for 24/7 coverage.

The service desk handles incidents (restoring service) and service requests (routine requests like password resets or software access). It performs initial categorization, prioritization, and routing. First-contact resolution — solving issues on the initial contact — is a key efficiency metric. When resolution requires specialist knowledge, the service desk escalates to appropriate teams.

Communication is a core service desk responsibility. Users need timely updates on incident status, especially during outages. The service desk also gathers user feedback and identifies trends that feed problem management and continual improvement. Self-service portals and chatbots increasingly supplement traditional phone and email channels while the service desk remains the coordination hub.

Service request management often integrates with the service desk through a service catalog and fulfillment workflows. Requests may be pre-approved and automated (password reset) or require approval chains (new software access).

Metrics beyond first-contact resolution include customer satisfaction (CSAT), average speed to answer, and backlog age. Balancing speed with quality prevents agents from closing tickets prematurely.

Omnichannel support (phone, chat, portal, email) must provide consistent records. Users expect not to repeat information when switching channels. Integration with configuration management and knowledge bases improves accuracy of routing and resolution.`,
          },
          keyFacts: [
            "The service desk is the single point of contact between users and the service provider",
            "It handles both incidents and service requests",
            "Structures include local, centralized, virtual, and follow-the-sun models",
            "First-contact resolution is a key efficiency metric",
            "The service desk performs initial categorization, prioritization, and escalation",
            "Communication and status updates are core service desk responsibilities",
          ],
          commonMistakes: [
            "Treating service desk as identical to technical support tier 3 only",
            "Confusing service desk with incident management practice entirely",
            "Assuming service desk only handles phone calls, not chat or portal",
            "Mixing up service desk as a function vs service desk as a practice",
            "Believing service desk resolves all issues without escalation",
          ],
          examTraps: [
            "Service desk as single point of contact for users",
            "Service desk supports incident, request, and communication channels",
            "Service desk function vs incident management practice relationship",
            "Self-service portal reducing routine service desk load scenarios",
            "Service desk metrics: first contact resolution vs average handling time",
          ],
          quiz: [
            {
              id: "service-desk-q1",
              prompt: "What is the primary role of the service desk?",
              choices: [
                { id: "a", text: "Developing new software applications" },
                { id: "b", text: "Providing a single point of contact for incidents and service requests" },
                { id: "c", text: "Approving all organizational changes" },
                { id: "d", text: "Managing supplier contracts" },
              ],
              correctChoiceId: "b",
              explanation:
                "The service desk serves as the single point of contact (SPOC) between the service provider and users for incidents and service requests.",
            },
            {
              id: "service-desk-q2",
              prompt: "A follow-the-sun service desk model provides:",
              choices: [
                { id: "a", text: "Support only during business hours in one location" },
                { id: "b", text: "24/7 coverage by handing off support across time zones" },
                { id: "c", text: "Support exclusively through self-service portals" },
                { id: "d", text: "On-site support at every user location" },
              ],
              correctChoiceId: "b",
              explanation:
                "Follow-the-sun models distribute support across global teams in different time zones to provide continuous 24/7 coverage.",
            },
            {
              id: "service-desk-q3",
              prompt: "First-contact resolution measures:",
              choices: [
                { id: "a", text: "The percentage of issues resolved on the initial contact without escalation" },
                { id: "b", text: "The number of changes approved per month" },
                { id: "c", text: "The total cost of service delivery" },
                { id: "d", text: "The number of problems identified proactively" },
              ],
              correctChoiceId: "a",
              explanation:
                "First-contact resolution (FCR) measures how often the service desk resolves issues on the first interaction without needing escalation.",
            },
            {
              id: "service-desk-q4",
              prompt: "Which interaction type is a routine request like a password reset?",
              choices: [
                { id: "a", text: "An incident" },
                { id: "b", text: "A service request" },
                { id: "c", text: "A problem" },
                { id: "d", text: "A known error" },
              ],
              correctChoiceId: "b",
              explanation:
                "Service requests are routine, pre-defined requests for something the user is authorized to receive, such as password resets or access requests.",
            },
            {
              id: "service-desk-q5",
              prompt: "When the service desk cannot resolve an issue, it should:",
              choices: [
                { id: "a", text: "Close the ticket as unresolved" },
                { id: "b", text: "Escalate to the appropriate specialist team" },
                { id: "c", text: "Convert the incident to a change request automatically" },
                { id: "d", text: "Wait for the user to call back" },
              ],
              correctChoiceId: "b",
              explanation:
                "The service desk escalates incidents and requests to specialist teams when first-contact resolution is not possible.",
            },
          ],
          flashcards: [
            {
              id: "service-desk-f1",
              front: "What is the service desk's role as SPOC?",
              back: "Single point of contact between the service provider and users for all incidents and service requests.",
            },
            {
              id: "service-desk-f2",
              front: "What is first-contact resolution (FCR)?",
              back: "Resolving an issue on the initial contact without escalation to another team.",
            },
            {
              id: "service-desk-f3",
              front: "Name four service desk structure models.",
              back: "Local, centralized, virtual, and follow-the-sun",
            },
            {
              id: "service-desk-f4",
              front: "Incident vs service request?",
              back: "Incident = unplanned interruption; service request = routine authorized request.",
            },
            {
              id: "service-desk-f5",
              front: "What is swarming?",
              back: "Multiple specialists collaborate on an incident simultaneously instead of tiered handoffs.",
            },
          ],
          objectives: ["ITIL4-6.5"],
          practiceType: ["reading", "quiz", "flashcard"],
          questionBank: [
            {
              id: "service-desk-qb1",
              prompt: "SPOC stands for:",
              choices: [
                { id: "a", text: "System point of control" },
                { id: "b", text: "Single point of contact" },
                { id: "c", text: "Service provider of cloud" },
                { id: "d", text: "Standard problem of change" },
              ],
              correctChoiceId: "b",
              explanation: "The service desk is the primary user contact channel.",
            },
            {
              id: "service-desk-qb2",
              prompt: "Escalation happens when:",
              choices: [
                { id: "a", text: "Every ticket opens" },
                { id: "b", text: "Specialist knowledge is required" },
                { id: "c", text: "Users say thank you" },
                { id: "d", text: "SLAs are exceeded intentionally" },
              ],
              correctChoiceId: "b",
              explanation: "Escalation routes work to teams who can resolve it.",
            },
            {
              id: "service-desk-qb3",
              prompt: "A virtual service desk uses:",
              choices: [
                { id: "a", text: "Only paper forms" },
                { id: "b", text: "Technology to connect staff remotely" },
                { id: "c", text: "No ticketing system" },
                { id: "d", text: "Only in-person visits" },
              ],
              correctChoiceId: "b",
              explanation: "Virtual models decouple location from support delivery.",
            },
            {
              id: "service-desk-qb4",
              prompt: "Self-service portals can:",
              choices: [
                { id: "a", text: "Replace all governance" },
                { id: "b", text: "Deflect routine requests from live agents" },
                { id: "c", text: "Eliminate incidents forever" },
                { id: "d", text: "Remove SLAs" },
              ],
              correctChoiceId: "b",
              explanation: "Portals automate routine requests and improve efficiency.",
            },
            {
              id: "service-desk-qb5",
              prompt: "Service requests differ from incidents because they:",
              choices: [
                { id: "a", text: "Always indicate outages" },
                { id: "b", text: "Are routine authorized requests" },
                { id: "c", text: "Require root cause analysis" },
                { id: "d", text: "Bypass all logging" },
              ],
              correctChoiceId: "b",
              explanation: "Requests are normal pre-defined needs, not unplanned breaks.",
            },
            {
              id: "service-desk-qb6",
              prompt: "Status communication during outages is:",
              choices: [
                { id: "a", text: "Optional and discouraged" },
                { id: "b", text: "A core service desk responsibility" },
                { id: "c", text: "Only for executives" },
                { id: "d", text: "Handled only by suppliers" },
              ],
              correctChoiceId: "b",
              explanation: "Users need timely updates during major incidents.",
            },
          ],
        },
        {
          id: "service-level-management",
          name: "Service Level Management",
          lesson: {
            title: "Service Level Management Practice",
            content: `Service level management sets clear business-based targets for service performance and ensures services are delivered and managed to meet those targets. It establishes a shared understanding of service expectations between the service provider and service consumer through service level agreements (SLAs).

An SLA is a documented agreement between a service provider and customer that defines services, performance targets, and responsibilities. SLAs should be based on business requirements, not technical metrics alone. Operational level agreements (OLAs) are internal agreements between teams within the service provider that support SLA delivery. Underpinning contracts (UCs) are agreements with external suppliers whose services support the SLA.

The service level management practice monitors and reports on service performance against targets. When performance deviates from agreed levels, it triggers review and improvement actions. Service level requirements (SLRs) capture customer requirements before SLAs are drafted, ensuring agreements reflect actual business needs.

Effective SLM requires realistic, measurable targets that both parties agree to. Overly ambitious SLAs create failure; overly lenient ones provide no value. Regular service reviews with customers ensure SLAs remain aligned with changing business priorities and that both parties understand current performance and improvement plans.

SLA structures may be single-level (one agreement per customer) or multi-level (corporate SLA with underlying customer-specific schedules). Targets must be achievable — negotiating SLAs without operational input leads to chronic breach and mistrust.

Service reviews are formal meetings to examine performance trends, major incidents, improvement plans, and changing business requirements. They connect SLM to continual improvement and relationship management.

Avoid confusing SLAs with OLAs and UCs on exams. If the agreement is between IT networking and IT applications teams, it is an OLA. If it is with a cloud provider supporting your infrastructure, it is an underpinning contract.`,
          },
          keyFacts: [
            "SLAs are documented agreements defining service performance targets",
            "OLAs are internal agreements between provider teams supporting SLA delivery",
            "Underpinning contracts (UCs) are agreements with external suppliers",
            "Service level requirements (SLRs) capture customer needs before SLAs are created",
            "SLM monitors performance and triggers action when targets are missed",
            "SLAs should be based on business requirements, not just technical metrics",
          ],
          commonMistakes: [
            "Confusing SLAs with OLAs and underpinning contracts",
            "Mixing up service level targets with service level agreements",
            "Assuming one SLA covers all services in an organization",
            "Believing SLM only measures availability, not quality or capacity",
            "Forgetting SLAs are agreed between provider and consumer",
          ],
          examTraps: [
            "SLA between provider and consumer vs OLA between internal teams",
            "Underpinning contract with external supplier supporting SLA",
            "Warranty aspects (availability, capacity) measured in SLAs",
            "Service level target vs service level requirement terminology",
            "Review and revise SLAs when service scope changes",
          ],
          quiz: [
            {
              id: "service-level-management-q1",
              prompt: "What is a Service Level Agreement (SLA)?",
              choices: [
                { id: "a", text: "An internal agreement between IT teams" },
                { id: "b", text: "A documented agreement between provider and customer defining service targets" },
                { id: "c", text: "A contract with an external hardware supplier" },
                { id: "d", text: "A record of all service incidents" },
              ],
              correctChoiceId: "b",
              explanation:
                "An SLA is a documented agreement between a service provider and customer that defines services, performance targets, and responsibilities.",
            },
            {
              id: "service-level-management-q2",
              prompt: "An Operational Level Agreement (OLA) is:",
              choices: [
                { id: "a", text: "An agreement between the provider and the external customer" },
                { id: "b", text: "An internal agreement between teams within the service provider" },
                { id: "c", text: "A contract with an external supplier" },
                { id: "d", text: "A type of emergency change" },
              ],
              correctChoiceId: "b",
              explanation:
                "OLAs are internal agreements between teams within the service provider organization that support the delivery of SLAs.",
            },
            {
              id: "service-level-management-q3",
              prompt: "An underpinning contract (UC) is an agreement with:",
              choices: [
                { id: "a", text: "Internal IT teams" },
                { id: "b", text: "End users of the service" },
                { id: "c", text: "External suppliers supporting service delivery" },
                { id: "d", text: "Regulatory authorities" },
              ],
              correctChoiceId: "c",
              explanation:
                "Underpinning contracts are agreements with external suppliers whose services support the service provider's ability to meet SLA targets.",
            },
            {
              id: "service-level-management-q4",
              prompt: "Service Level Requirements (SLRs) are captured:",
              choices: [
                { id: "a", text: "After an SLA has been in place for one year" },
                { id: "b", text: "Before SLAs are drafted, based on customer business needs" },
                { id: "c", text: "Only when an SLA is breached" },
                { id: "d", text: "By the service desk during incident resolution" },
              ],
              correctChoiceId: "b",
              explanation:
                "SLRs capture customer requirements and business needs before SLAs are created, ensuring agreements reflect actual expectations.",
            },
            {
              id: "service-level-management-q5",
              prompt: "When service performance falls below SLA targets, service level management should:",
              choices: [
                { id: "a", text: "Ignore the deviation if it happens rarely" },
                { id: "b", text: "Trigger review and improvement actions" },
                { id: "c", text: "Automatically increase the SLA targets" },
                { id: "d", text: "Close all open incidents" },
              ],
              correctChoiceId: "b",
              explanation:
                "SLM monitors performance against targets and initiates review and improvement when agreed levels are not met.",
            },
          ],
          flashcards: [
            {
              id: "service-level-management-f1",
              front: "What is the difference between SLA, OLA, and UC?",
              back: "SLA = provider-to-customer agreement. OLA = internal team agreement. UC = agreement with external supplier.",
            },
            {
              id: "service-level-management-f2",
              front: "What are Service Level Requirements (SLRs)?",
              back: "Documented customer requirements and business needs captured before SLAs are drafted.",
            },
            {
              id: "service-level-management-f3",
              front: "What is the purpose of service level management?",
              back: "Set business-based performance targets and ensure services are delivered and managed to meet those targets.",
            },
            {
              id: "service-level-management-f4",
              front: "When are service reviews held?",
              back: "Regularly, to assess SLA performance, trends, incidents, and changing requirements.",
            },
            {
              id: "service-level-management-f5",
              front: "Why capture SLRs first?",
              back: "So SLAs reflect actual business requirements, not arbitrary technical metrics.",
            },
          ],
          objectives: ["ITIL4-6.6"],
          practiceType: ["reading", "quiz", "flashcard", "case-study"],
          questionBank: [
            {
              id: "service-level-management-qb1",
              prompt: "SLRs are captured before:",
              choices: [
                { id: "a", text: "Closing all incidents" },
                { id: "b", text: "Drafting SLAs" },
                { id: "c", text: "Retiring services" },
                { id: "d", text: "Emergency changes only" },
              ],
              correctChoiceId: "b",
              explanation: "Requirements drive realistic SLA targets.",
            },
            {
              id: "service-level-management-qb2",
              prompt: "OLAs support:",
              choices: [
                { id: "a", text: "External customer contracts directly" },
                { id: "b", text: "Internal delivery of SLA commitments" },
                { id: "c", text: "Personal agreements" },
                { id: "d", text: "Regulatory law only" },
              ],
              correctChoiceId: "b",
              explanation: "OLAs align internal teams to meet external SLAs.",
            },
            {
              id: "service-level-management-qb3",
              prompt: "UCs are agreements with:",
              choices: [
                { id: "a", text: "End users" },
                { id: "b", text: "External suppliers" },
                { id: "c", text: "Service desk agents only" },
                { id: "d", text: "Random internet sites" },
              ],
              correctChoiceId: "b",
              explanation: "Underpinning contracts cover third-party dependencies.",
            },
            {
              id: "service-level-management-qb4",
              prompt: "Unrealistic SLAs cause:",
              choices: [
                { id: "a", text: "Automatic improvement" },
                { id: "b", text: "Chronic breach and loss of trust" },
                { id: "c", text: "Fewer incidents" },
                { id: "d", text: "Elimination of OLAs" },
              ],
              correctChoiceId: "b",
              explanation: "Targets must be achievable and meaningful.",
            },
            {
              id: "service-level-management-qb5",
              prompt: "Service reviews examine:",
              choices: [
                { id: "a", text: "Only hardware colors" },
                { id: "b", text: "Performance trends and improvement plans" },
                { id: "c", text: "Employee birthdays" },
                { id: "d", text: "Unused metrics deletion only" },
              ],
              correctChoiceId: "b",
              explanation: "Reviews keep agreements aligned with business needs.",
            },
            {
              id: "service-level-management-qb6",
              prompt: "SLM triggers action when:",
              choices: [
                { id: "a", text: "Tickets are opened" },
                { id: "b", text: "Performance deviates from targets" },
                { id: "c", text: "Users login" },
                { id: "d", text: "Changes are standard" },
              ],
              correctChoiceId: "b",
              explanation: "Monitoring drives improvement when targets are missed.",
            },
          ],
        },
        {
          id: "itil-practices",
          name: "ITIL Practices",
          lesson: {
            title: "ITIL 4 Management Practices Overview",
            content: `ITIL 4 defines 34 management practices — sets of organizational resources designed for performing work or accomplishing an objective. Practices are more flexible than the rigid 'processes' of ITIL v3, allowing organizations to adapt them to their context while still following proven guidance.

Practices are organized into three categories. General management practices (14) apply across the organization, such as continual improvement, information security management, and relationship management. Service management practices (17) are specific to creating, delivering, and supporting services, including incident management, service level management, and service desk. Technical management practices (3) focus on technical capabilities: deployment management, infrastructure and platform management, and software development and management.

Each practice includes guidance on purpose, key activities, inputs and outputs, and how it integrates with other practices and value chain activities. Organizations should not attempt to implement all 34 practices at once. Instead, they should prioritize based on their context, pain points, and strategic objectives — following the guiding principle to start where you are.

Practices work together as an integrated system. For example, incident management relies on the service desk for intake, problem management for root cause analysis, change enablement for fixes, and knowledge management for documented solutions. Understanding practice interactions is essential for effective service management.

Foundation exam candidates focus on purpose and key terms of selected practices rather than all 34 in equal depth. High-yield practices include incident, problem, change enablement, service desk, service level management, and continual improvement — all covered in this certification path.

General management practices such as information security management, risk management, and knowledge management support service management practices. Technical management practices connect delivery to DevOps and infrastructure teams.

Practice success depends on integrating people, processes, technology, partners, and information — the four dimensions again. A perfectly documented incident process fails if the service desk lacks training or tools.`,
          },
          keyFacts: [
            "ITIL 4 defines 34 management practices across three categories",
            "General management practices: 14 (e.g., continual improvement, information security)",
            "Service management practices: 17 (e.g., incident, problem, change enablement)",
            "Technical management practices: 3 (deployment, infrastructure, software development)",
            "Practices are flexible and adaptable, unlike rigid ITIL v3 processes",
            "Organizations should prioritize practices based on context, not implement all 34 at once",
          ],
          commonMistakes: [
            "Confusing 34 management practices with SVS five components",
            "Assuming all practices are equally relevant to every organization",
            "Mixing up general management, service management, and technical management practice categories",
            "Believing ITIL prescribes mandatory processes for every practice",
            "Forgetting practices are flexible sets of resources, not rigid procedures",
          ],
          examTraps: [
            "Three practice categories: general, service, and technical management",
            "34 practices in ITIL 4 vs 26 processes in ITIL v3 comparison distractors",
            "Practice as organized resources vs process as sequential steps",
            "Incident, problem, change as service management practices",
            "Information security and relationship management as general management practices",
          ],
          quiz: [
            {
              id: "itil-practices-q1",
              prompt: "How many management practices does ITIL 4 define?",
              choices: [
                { id: "a", text: "17" },
                { id: "b", text: "26" },
                { id: "c", text: "34" },
                { id: "d", text: "42" },
              ],
              correctChoiceId: "c",
              explanation: "ITIL 4 defines 34 management practices organized into three categories.",
            },
            {
              id: "itil-practices-q2",
              prompt: "Which category includes incident management and service desk?",
              choices: [
                { id: "a", text: "General management practices" },
                { id: "b", text: "Service management practices" },
                { id: "c", text: "Technical management practices" },
                { id: "d", text: "Strategic management practices" },
              ],
              correctChoiceId: "b",
              explanation:
                "Service management practices (17 total) cover creating, delivering, and supporting services, including incident management and service desk.",
            },
            {
              id: "itil-practices-q3",
              prompt: "How many technical management practices does ITIL 4 include?",
              choices: [
                { id: "a", text: "3" },
                { id: "b", text: "7" },
                { id: "c", text: "14" },
                { id: "d", text: "17" },
              ],
              correctChoiceId: "a",
              explanation:
                "There are 3 technical management practices: deployment management, infrastructure and platform management, and software development and management.",
            },
            {
              id: "itil-practices-q4",
              prompt: "How do ITIL 4 practices differ from ITIL v3 processes?",
              choices: [
                { id: "a", text: "Practices are more rigid and prescriptive" },
                { id: "b", text: "Practices are flexible sets of resources adaptable to organizational context" },
                { id: "c", text: "Practices replace the need for any documentation" },
                { id: "d", text: "Practices apply only to IT departments" },
              ],
              correctChoiceId: "b",
              explanation:
                "ITIL 4 practices are flexible organizational resources that can be adapted to context, unlike the more rigid process definitions in ITIL v3.",
            },
            {
              id: "itil-practices-q5",
              prompt: "Which guiding principle supports prioritizing a subset of practices rather than implementing all 34?",
              choices: [
                { id: "a", text: "Optimize and automate" },
                { id: "b", text: "Start where you are" },
                { id: "c", text: "Collaborate and promote visibility" },
                { id: "d", text: "Think and work holistically" },
              ],
              correctChoiceId: "b",
              explanation:
                "Start where you are encourages organizations to assess current capabilities and prioritize practices based on context and pain points rather than implementing everything at once.",
            },
          ],
          flashcards: [
            {
              id: "itil-practices-f1",
              front: "How many ITIL 4 practices and what are the three categories?",
              back: "34 practices: 14 general management, 17 service management, 3 technical management",
            },
            {
              id: "itil-practices-f2",
              front: "Name the three technical management practices.",
              back: "Deployment management, infrastructure and platform management, software development and management",
            },
            {
              id: "itil-practices-f3",
              front: "How do ITIL 4 practices differ from ITIL v3 processes?",
              back: "Practices are flexible organizational resources adaptable to context; v3 processes were more rigid and prescriptive.",
            },
            {
              id: "itil-practices-f4",
              front: "Give two general management practice examples.",
              back: "Continual improvement, information security management, risk management (any valid examples).",
            },
            {
              id: "itil-practices-f5",
              front: "How many practices in each category?",
              back: "14 general, 17 service management, 3 technical — 34 total.",
            },
          ],
          objectives: ["ITIL4-6.1"],
          practiceType: ["reading", "quiz", "flashcard"],
          questionBank: [
            {
              id: "itil-practices-qb1",
              prompt: "General management practices count:",
              choices: [
                { id: "a", text: "3" },
                { id: "b", text: "14" },
                { id: "c", text: "17" },
                { id: "d", text: "34" },
              ],
              correctChoiceId: "b",
              explanation: "There are 14 general management practices in ITIL 4.",
            },
            {
              id: "itil-practices-qb2",
              prompt: "Service management practices count:",
              choices: [
                { id: "a", text: "3" },
                { id: "b", text: "14" },
                { id: "c", text: "17" },
                { id: "d", text: "34" },
              ],
              correctChoiceId: "c",
              explanation: "There are 17 service management practices.",
            },
            {
              id: "itil-practices-qb3",
              prompt: "Continual improvement is a:",
              choices: [
                { id: "a", text: "Technical management practice only" },
                { id: "b", text: "General management practice" },
                { id: "c", text: "Value chain activity only" },
                { id: "d", text: "Change type" },
              ],
              correctChoiceId: "b",
              explanation: "It is listed among general management practices.",
            },
            {
              id: "itil-practices-qb4",
              prompt: "Deployment management is:",
              choices: [
                { id: "a", text: "A general management practice" },
                { id: "b", text: "A technical management practice" },
                { id: "c", text: "An SLA type" },
                { id: "d", text: "A dimension" },
              ],
              correctChoiceId: "b",
              explanation: "It is one of three technical management practices.",
            },
            {
              id: "itil-practices-qb5",
              prompt: "Practices integrate through:",
              choices: [
                { id: "a", text: "Isolation from each other" },
                { id: "b", text: "Shared inputs/outputs across the value chain" },
                { id: "c", text: "Replacing governance" },
                { id: "d", text: "Eliminating the service desk" },
              ],
              correctChoiceId: "b",
              explanation: "Practices work together in value streams.",
            },
            {
              id: "itil-practices-qb6",
              prompt: "Implementing all 34 practices at once violates:",
              choices: [
                { id: "a", text: "Focus on value" },
                { id: "b", text: "Start where you are" },
                { id: "c", text: "Think holistically only" },
                { id: "d", text: "Engage activity" },
              ],
              correctChoiceId: "b",
              explanation: "Prioritize practices based on organizational context and pain points.",
            },
          ],
        },
      ],
    },
  ],
};
