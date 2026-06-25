import type { Certification } from "../types";

export const azureFundamentals: Certification = {
  id: "azure-fundamentals",
  name: "Microsoft Azure Fundamentals",
  shortName: "Azure",
  vendor: "Microsoft",
  overview:
    "The AZ-900 Azure Fundamentals certification validates foundational knowledge of cloud concepts, core Azure services, pricing, governance, and security. It is ideal for candidates new to cloud computing or Azure who want to demonstrate baseline understanding before role-based certifications.",
  examSummary: {
    questionCount: 45,
    durationMinutes: 45,
    passingScore: "700/1000",
    format: "Multiple choice, multiple response, drag-and-drop, scenario-based",
  },
  domains: [
    {
      id: "cloud-concepts",
      name: "Cloud Concepts",
      topics: [
        {
          id: "cloud-concepts",
          name: "Cloud Concepts",
          lesson: {
            title: "Understanding Cloud Computing Models",
            content: `Cloud computing delivers computing services—servers, storage, databases, networking, software, and analytics—over the Internet ("the cloud") with pay-as-you-go pricing. Instead of buying and maintaining physical data centers, organizations rent resources from cloud providers like Microsoft Azure.

The three primary service models define who manages what. Infrastructure as a Service (IaaS) provides virtualized compute, storage, and networking—you manage the OS and applications. Platform as a Service (PaaS) adds managed runtime environments so you focus on code and data. Software as a Service (SaaS) delivers complete applications over the Internet, such as Microsoft 365.

Deployment models include public cloud (shared provider infrastructure), private cloud (dedicated to one organization), and hybrid cloud (connecting on-premises and cloud resources). Benefits include elasticity (scale up or down on demand), high availability through geographic redundancy, and shifting capital expense (CapEx) to operational expense (OpEx).

Cloud computing also enables consumption-based billing—you pay only for what you use, measured in seconds, hours, or transactions. Understanding these fundamentals helps you choose the right services and explain Azure value to stakeholders.

Additional AZ-900 concepts include the consumption-based economic model and the shared responsibility model preview. With consumption-based pricing, you pay for compute by the second, storage by the gigabyte per month, and bandwidth by outbound traffic—there are no upfront hardware costs. Reserved instances and Azure Hybrid Benefit can reduce costs when you commit to longer terms or bring existing licenses.

High availability, scalability, and elasticity are distinct but related. High availability keeps services running through redundancy. Scalability is the ability to handle increased load. Elasticity is automatic scaling—Azure services like Virtual Machine Scale Sets and App Service auto-scale rules adjust capacity based on metrics.

Fault tolerance and disaster recovery rely on geographic distribution. Azure SLA commitments vary by service tier and redundancy configuration. Understanding these cloud fundamentals prepares you to compare Azure offerings and explain business value on the AZ-900 exam.`,
          },
          keyFacts: [
            "IaaS provides virtualized infrastructure; you manage OS and applications",
            "PaaS provides managed platforms for developing and deploying applications",
            "SaaS delivers fully managed applications accessed over the Internet",
            "Public, private, and hybrid are the three main deployment models",
            "Cloud shifts CapEx (upfront hardware) to OpEx (ongoing usage costs)",
            "Elasticity lets you scale resources up or down based on demand",
          ],
          commonMistakes: [
            "Confusing CapEx to OpEx shift with eliminating all IT spending",
            "Mixing up IaaS, PaaS, and SaaS management responsibilities",
            "Treating hybrid cloud and multi-cloud as the same concept",
            "Assuming elasticity and scalability are interchangeable terms",
            "Forgetting Azure Hybrid Benefit applies to existing licenses",
          ],
          examTraps: [
            "Microsoft 365 as SaaS vs Azure VMs as IaaS classification",
            "Hybrid cloud connecting on-premises with Azure vs multi-cloud using AWS and Azure",
            "Consumption-based billing measured in seconds vs upfront hardware purchase",
            "Fault tolerance vs high availability scenario wording",
            "Community cloud as a distractor in deployment model questions",
          ],
          quiz: [
            {
              id: "cloud-concepts-q1",
              prompt: "Which cloud service model provides virtual machines where you manage the operating system?",
              choices: [
                { id: "a", text: "SaaS" },
                { id: "b", text: "PaaS" },
                { id: "c", text: "IaaS" },
                { id: "d", text: "FaaS" },
              ],
              correctChoiceId: "c",
              explanation:
                "IaaS (Infrastructure as a Service) provides virtualized compute, storage, and networking while the customer manages the OS, middleware, and applications.",
            },
            {
              id: "cloud-concepts-q2",
              prompt: "Microsoft 365 is an example of which cloud service model?",
              choices: [
                { id: "a", text: "IaaS" },
                { id: "b", text: "PaaS" },
                { id: "c", text: "SaaS" },
                { id: "d", text: "DaaS" },
              ],
              correctChoiceId: "c",
              explanation:
                "SaaS delivers complete applications over the Internet. Users access Microsoft 365 without managing underlying infrastructure or platforms.",
            },
            {
              id: "cloud-concepts-q3",
              prompt: "What is a key financial benefit of cloud computing?",
              choices: [
                { id: "a", text: "Eliminates all IT costs" },
                { id: "b", text: "Converts capital expenditure to operational expenditure" },
                { id: "c", text: "Requires large upfront hardware purchases" },
                { id: "d", text: "Locks you into long-term contracts only" },
              ],
              correctChoiceId: "b",
              explanation:
                "Cloud computing shifts spending from CapEx (buying servers upfront) to OpEx (paying for consumption), improving cash flow flexibility.",
            },
            {
              id: "cloud-concepts-q4",
              prompt: "Which deployment model combines on-premises infrastructure with public cloud services?",
              choices: [
                { id: "a", text: "Public cloud" },
                { id: "b", text: "Private cloud" },
                { id: "c", text: "Hybrid cloud" },
                { id: "d", text: "Community cloud" },
              ],
              correctChoiceId: "c",
              explanation:
                "Hybrid cloud connects an organization's on-premises data center with public cloud resources, enabling workload portability and gradual migration.",
            },
            {
              id: "cloud-concepts-q5",
              prompt: "What does elasticity in cloud computing mean?",
              choices: [
                { id: "a", text: "Resources are permanently fixed at purchase time" },
                { id: "b", text: "Ability to scale resources up or down based on demand" },
                { id: "c", text: "Data is stored only on local hard drives" },
                { id: "d", text: "Applications run without any network connection" },
              ],
              correctChoiceId: "b",
              explanation:
                "Elasticity allows organizations to automatically or manually scale compute, storage, and other resources to match current workload demands.",
            },
          ],
          flashcards: [
            {
              id: "cloud-concepts-f1",
              front: "What are the three cloud service models?",
              back: "IaaS, PaaS, and SaaS",
            },
            {
              id: "cloud-concepts-f2",
              front: "CapEx vs OpEx in cloud?",
              back: "Cloud shifts capital expenditure (upfront hardware) to operational expenditure (pay-as-you-go usage)",
            },
            {
              id: "cloud-concepts-f3",
              front: "What is hybrid cloud?",
              back: "A mix of on-premises infrastructure and public cloud services connected together",
            },
            {
              id: "cloud-concepts-f4",
              front: "What is fault tolerance?",
              back: "Ability to continue operating when components fail through redundancy",
            },
            {
              id: "cloud-concepts-f5",
              front: "Consumption-based model?",
              back: "Pay only for resources used—measured by time, storage, or transactions",
            },
            {
              id: "cloud-concepts-f6",
              front: "Community cloud?",
              back: "Shared infrastructure for organizations with common concerns (e.g., government agencies)",
            },
          ],
          objectives: [
            "AZ-900-1.1",
            "AZ-900-1.2",
            "AZ-900-1.3",
            "AZ-900-1.4",
          ],
          practiceType: ["reading", "quiz", "flashcard", "external-lab"],
          questionBank: [
            {
              id: "cloud-concepts-bq1",
              prompt: "Which benefit allows automatic addition of resources during traffic spikes?",
              choices: [
                { id: "a", text: "Fault tolerance" },
                { id: "b", text: "Elasticity" },
                { id: "c", text: "Data residency" },
                { id: "d", text: "CapEx reduction only" }
              ],
              correctChoiceId: "b",
              explanation:
                "Elasticity automatically scales resources up or down based on demand.",
            },
            {
              id: "cloud-concepts-bq2",
              prompt: "Azure Virtual Machines are an example of which service model?",
              choices: [
                { id: "a", text: "SaaS" },
                { id: "b", text: "PaaS" },
                { id: "c", text: "IaaS" },
                { id: "d", text: "FaaS only" }
              ],
              correctChoiceId: "c",
              explanation:
                "VMs provide infrastructure—you manage the OS and applications (IaaS).",
            },
            {
              id: "cloud-concepts-bq3",
              prompt: "Which deployment model uses only an organization's own datacenter?",
              choices: [
                { id: "a", text: "Public cloud" },
                { id: "b", text: "Private cloud" },
                { id: "c", text: "Hybrid cloud" },
                { id: "d", text: "Multi-cloud" }
              ],
              correctChoiceId: "b",
              explanation:
                "Private cloud is dedicated infrastructure for a single organization.",
            },
            {
              id: "cloud-concepts-bq4",
              prompt: "What does high availability primarily address?",
              choices: [
                { id: "a", text: "Minimizing downtime through redundancy" },
                { id: "b", text: "Reducing software licensing" },
                { id: "c", text: "Eliminating all security risks" },
                { id: "d", text: "Fixed capacity planning only" }
              ],
              correctChoiceId: "a",
              explanation:
                "High availability uses redundancy to keep services accessible during failures.",
            },
            {
              id: "cloud-concepts-bq5",
              prompt: "Which is a consideration (not just a benefit) of cloud adoption?",
              choices: [
                { id: "a", text: "Unlimited free resources" },
                { id: "b", text: "Potential egress/data transfer costs" },
                { id: "c", text: "No need for security planning" },
                { id: "d", text: "Guaranteed zero downtime" }
              ],
              correctChoiceId: "b",
              explanation:
                "Egress charges and ongoing OpEx require planning—cloud is not cost-free.",
            },
            {
              id: "cloud-concepts-bq6",
              prompt: "Azure App Service is best classified as:",
              choices: [
                { id: "a", text: "IaaS" },
                { id: "b", text: "PaaS" },
                { id: "c", text: "SaaS" },
                { id: "d", text: "On-premises only" }
              ],
              correctChoiceId: "b",
              explanation:
                "App Service is a managed platform for hosting web apps without managing underlying servers.",
            },
            {
              id: "cloud-concepts-bq7",
              prompt: "Multi-cloud means:",
              choices: [
                { id: "a", text: "Using multiple public cloud providers" },
                { id: "b", text: "Using only Azure" },
                { id: "c", text: "No cloud usage" },
                { id: "d", text: "Private cloud only" }
              ],
              correctChoiceId: "a",
              explanation:
                "Multi-cloud uses services from more than one cloud provider (e.g., Azure and AWS).",
            },
            {
              id: "cloud-concepts-bq8",
              prompt: "Capital expenditure (CapEx) in traditional IT means:",
              choices: [
                { id: "a", text: "Pay-as-you-go monthly bills" },
                { id: "b", text: "Upfront investment in physical hardware" },
                { id: "c", text: "Free cloud credits only" },
                { id: "d", text: "Subscription to SaaS apps only" }
              ],
              correctChoiceId: "b",
              explanation:
                "CapEx is upfront hardware/datacenter investment; cloud shifts much of this to OpEx.",
            }
          ],
          externalResources: [
            {
              id: "azure-free-account",
              name: "Azure free account",
              url: "https://azure.microsoft.com/free/",
              cost: "free",
              platform: "web",
              installNotes: "Sign up with Microsoft account; includes $200 credit for 30 days plus 12 months of popular free services.",
            },
            {
              id: "microsoft-learn-sandbox",
              name: "Microsoft Learn sandbox",
              url: "https://learn.microsoft.com/training/",
              cost: "free",
              platform: "web",
              installNotes: "Free temporary Azure environment for hands-on modules—no credit card required for many labs.",
            }
          ],
          assignments: [
            {
              id: "azure-sandbox-lab-1",
              title: "Lab 1: Explore Azure in Microsoft Learn Sandbox",
              type: "external-lab",
              instructions: `Complete a Microsoft Learn AZ-900 module that includes a sandbox environment.

1. Go to Microsoft Learn and search for "AZ-900" modules with sandbox activations.
2. Start a module such as "Describe cloud computing" or "Core Azure services."
3. Activate the sandbox when prompted (temporary Azure subscription).
4. Follow the module steps to create at least one resource in the portal.
5. Review the sandbox time limit and clean up is automatic when it expires.

This lab introduces the Azure portal without requiring your own subscription.`,
              estimatedMinutes: 30,
              externalResourceId: "microsoft-learn-sandbox",
              completionCriteria: [
                "Completed a Learn module with sandbox activation",
                "Created or viewed at least one Azure resource in the portal",
                "Noted how sandbox differs from a full subscription",
              ],
              relatedTopicIds: ["cloud-concepts"],
              order: 1,
            }
          ],
        },
      ],
    },
    {
      id: "azure-architecture",
      name: "Azure Architecture and Services",
      topics: [
        {
          id: "azure-regions",
          name: "Azure Regions",
          lesson: {
            title: "Azure Regions, Availability Zones, and Region Pairs",
            content: `An Azure region is a geographic area containing at least one datacenter. Microsoft operates regions worldwide so customers can deploy resources close to users for lower latency and to meet data residency requirements. Each region is independent and self-contained.

Availability Zones are physically separate datacenters within a region, each with independent power, cooling, and networking. Deploying across zones protects applications from datacenter-level failures. Not every region supports Availability Zones—check Azure documentation for current support.

Region pairs are two regions within the same geography linked for disaster recovery. Microsoft prioritizes updates so only one region in a pair receives changes at a time, reducing widespread outage risk. If a region faces a major event, paired regions help with recovery and data replication.

Some services are global (Azure DNS, Azure CDN), while most are regional (virtual machines, storage accounts). Sovereign regions like Azure Government and Azure China operate under specific compliance and legal frameworks. Choosing the right region affects latency, compliance, service availability, and pricing.

Geographies group regions for data residency and disaster recovery boundaries. A geography (such as United States or Europe) contains multiple regions. Microsoft guarantees that data stored in a geography stays within that geography for compliance purposes unless you explicitly replicate elsewhere.

Edge locations and Azure Front Door extend reach beyond regions. Content Delivery Network (CDN) endpoints cache content closer to users globally. When designing for AZ-900, remember: region = deployment location, geography = compliance boundary, Availability Zone = fault domain within a region.

The Azure global infrastructure map shows 60+ regions worldwide. Not all services are available in all regions—always verify service availability before architecting. Some specialized regions require approval (e.g., Azure Government).`,
          },
          keyFacts: [
            "An Azure region is a geographic area with one or more datacenters",
            "Availability Zones are fault-isolated datacenters within a region",
            "Region pairs support disaster recovery and coordinated platform updates",
            "Most Azure resources are deployed regionally, not globally",
            "Sovereign clouds (Government, China) meet specific regulatory requirements",
            "Select regions based on latency, compliance, and service availability",
          ],
          commonMistakes: [
            "Confusing Regions with Availability Zones and Region pairs",
            "Assuming all Azure services exist in every Region",
            "Mixing up sovereign clouds (Azure Government) with public Regions",
            "Believing Availability Zones and Regions are the same thing",
            "Forgetting Region pairs support disaster recovery and data replication",
          ],
          examTraps: [
            "Data residency requiring specific sovereign or geographic Region",
            "Low-latency scenarios needing Region proximity to users",
            "Availability Zone count varies by Region trick questions",
            "Region pair disaster recovery vs same-Region redundancy",
            "Edge Zone vs Availability Zone placement scenarios",
          ],
          quiz: [
            {
              id: "azure-regions-q1",
              prompt: "What is an Azure Availability Zone?",
              choices: [
                { id: "a", text: "A billing unit for Azure subscriptions" },
                { id: "b", text: "Physically separate datacenters within an Azure region" },
                { id: "c", text: "A global content delivery network endpoint" },
                { id: "d", text: "A type of virtual network subnet" },
              ],
              correctChoiceId: "b",
              explanation:
                "Availability Zones are independent datacenters within a region with separate power, cooling, and networking for high availability.",
            },
            {
              id: "azure-regions-q2",
              prompt: "Why does Azure use region pairs?",
              choices: [
                { id: "a", text: "To charge double for redundant resources" },
                { id: "b", text: "For disaster recovery and coordinated platform updates" },
                { id: "c", text: "To limit services to a single geography" },
                { id: "d", text: "To replace the need for backups" },
              ],
              correctChoiceId: "b",
              explanation:
                "Region pairs provide geographic disaster recovery options and ensure platform updates roll out to only one region at a time in the pair.",
            },
            {
              id: "azure-regions-q3",
              prompt: "Which factor is LEAST relevant when choosing an Azure region?",
              choices: [
                { id: "a", text: "Data residency and compliance requirements" },
                { id: "b", text: "Proximity to end users for latency" },
                { id: "c", text: "The color scheme of the Azure portal" },
                { id: "d", text: "Whether required services are available in that region" },
              ],
              correctChoiceId: "c",
              explanation:
                "Region selection depends on compliance, latency, service availability, and pricing—not portal appearance.",
            },
            {
              id: "azure-regions-q4",
              prompt: "How are most Azure compute and storage resources deployed?",
              choices: [
                { id: "a", text: "Globally across all regions automatically" },
                { id: "b", text: "Regionally in a specific Azure region" },
                { id: "c", text: "Only on the customer's local laptop" },
                { id: "d", text: "Exclusively in the East US region" },
              ],
              correctChoiceId: "b",
              explanation:
                "Most Azure resources like VMs and storage accounts are regional—you choose which region hosts them.",
            },
            {
              id: "azure-regions-q5",
              prompt: "What is a sovereign cloud region?",
              choices: [
                { id: "a", text: "A region with no security controls" },
                { id: "b", text: "A region designed for specific government or regulatory requirements" },
                { id: "c", text: "A free tier region for all customers" },
                { id: "d", text: "A deprecated region being shut down" },
              ],
              correctChoiceId: "b",
              explanation:
                "Sovereign clouds like Azure Government meet specific legal, regulatory, and compliance requirements for government and regulated industries.",
            },
          ],
          flashcards: [
            {
              id: "azure-regions-f1",
              front: "What is an Azure region?",
              back: "A geographic area containing one or more datacenters where you deploy Azure resources",
            },
            {
              id: "azure-regions-f2",
              front: "Purpose of Availability Zones?",
              back: "Physically isolated datacenters within a region for fault tolerance and high availability",
            },
            {
              id: "azure-regions-f3",
              front: "What are region pairs used for?",
              back: "Disaster recovery and ensuring platform updates affect only one region at a time",
            },
            {
              id: "azure-regions-f4",
              front: "What is a geography in Azure?",
              back: "A regional grouping of Azure regions used for compliance and DR boundaries",
            },
            {
              id: "azure-regions-f5",
              front: "Are all services available in every region?",
              back: "No—verify service availability in your target region before deployment",
            },
          ],
          objectives: [
            "AZ-900-2.1",
            "AZ-900-2.2",
          ],
          practiceType: ["reading", "quiz", "flashcard"],
          questionBank: [
            {
              id: "azure-regions-bq1",
              prompt: "How many Availability Zones minimum for zone-redundant deployment?",
              choices: [
                { id: "a", text: "1" },
                { id: "b", text: "2" },
                { id: "c", text: "3" },
                { id: "d", text: "10" }
              ],
              correctChoiceId: "c",
              explanation:
                "Azure regions with Availability Zones typically have three separate zones.",
            },
            {
              id: "azure-regions-bq2",
              prompt: "Azure CDN endpoints are deployed:",
              choices: [
                { id: "a", text: "At edge locations globally" },
                { id: "b", text: "Only in one region" },
                { id: "c", text: "On-premises only" },
                { id: "d", text: "Without caching" }
              ],
              correctChoiceId: "a",
              explanation:
                "CDN uses edge locations worldwide to cache content near users.",
            },
            {
              id: "azure-regions-bq3",
              prompt: "Region pairs within a geography help with:",
              choices: [
                { id: "a", text: "Automatic free backups to another continent" },
                { id: "b", text: "Coordinated DR and update sequencing" },
                { id: "c", text: "Eliminating latency" },
                { id: "d", text: "Removing compliance requirements" }
              ],
              correctChoiceId: "b",
              explanation:
                "Region pairs support DR replication and staggered platform updates.",
            },
            {
              id: "azure-regions-bq4",
              prompt: "Azure Government is an example of:",
              choices: [
                { id: "a", text: "A sovereign/specialized cloud" },
                { id: "b", text: "A free tier only" },
                { id: "c", text: "A deprecated service" },
                { id: "d", text: "A VM size" }
              ],
              correctChoiceId: "a",
              explanation:
                "Azure Government meets US government security and compliance requirements.",
            },
            {
              id: "azure-regions-bq5",
              prompt: "Metadata for a resource group is stored:",
              choices: [
                { id: "a", text: "In the resource group's selected region" },
                { id: "b", text: "Only on local disk" },
                { id: "c", text: "In every region globally" },
                { id: "d", text: "Nowhere" }
              ],
              correctChoiceId: "a",
              explanation:
                "The resource group's region stores metadata even if resources span regions.",
            },
            {
              id: "azure-regions-bq6",
              prompt: "Choosing a region close to users primarily reduces:",
              choices: [
                { id: "a", text: "Network latency" },
                { id: "b", text: "All Azure costs to zero" },
                { id: "c", text: "Need for authentication" },
                { id: "d", text: "Storage redundancy" }
              ],
              correctChoiceId: "a",
              explanation:
                "Geographic proximity reduces latency for end users.",
            }
          ],
        },
        {
          id: "resource-groups",
          name: "Resource Groups",
          lesson: {
            title: "Azure Resource Groups and Resource Organization",
            content: `A resource group is a logical container that holds related Azure resources for an application or solution. Every Azure resource must belong to exactly one resource group. Resource groups simplify management by letting you deploy, monitor, update, and delete resources as a unit.

Resource groups are tied to a region, but resources inside them can span regions. For example, a resource group created in West Europe can contain a VM in West Europe and a storage account in North Europe. The resource group's region determines where metadata is stored.

Tags are name-value pairs you apply to resources and resource groups for organization, cost tracking, and automation. Common tags include Environment (Production, Dev), Department, or CostCenter. Azure Policy and cost management tools use tags for governance.

Deleting a resource group deletes all resources within it—use caution in production. Best practice groups resources that share the same lifecycle: if you delete a dev environment, delete its entire resource group. The Azure portal, CLI, PowerShell, and ARM/Bicep templates all work with resource groups as the fundamental organizational unit.

ARM (Azure Resource Manager) is the deployment and management service behind resource groups. All resources are deployed through ARM templates, Bicep, Terraform, or portal—all ultimately create ARM resources with unique resource IDs.

Moving resources between resource groups or subscriptions is supported for many resource types but may require downtime or reconfiguration. Locks can prevent accidental deletion—CanNotDelete and ReadOnly lock types protect production resources.

Role assignments can be scoped to resource groups, applying permissions to all resources within. This simplifies access management compared to assigning roles on each individual resource.`,
          },
          keyFacts: [
            "Every Azure resource must belong to exactly one resource group",
            "Resource groups are logical containers for related resources",
            "A resource group's region stores metadata, not necessarily all resource data",
            "Deleting a resource group deletes all contained resources",
            "Tags are key-value pairs for organizing and tracking costs",
            "Group resources that share the same lifecycle together",
          ],
          commonMistakes: [
            "Assuming resource groups define network boundaries or security perimeters",
            "Believing a resource can belong to multiple resource groups simultaneously",
            "Confusing resource groups with subscriptions or management groups",
            "Thinking deleting a resource group always deletes all contained resources immediately without confirmation",
            "Mixing up resource group location with resource location requirements",
          ],
          examTraps: [
            "Resource group as logical container vs subscription billing boundary",
            "Moving resources between resource groups vs between subscriptions",
            "Resource group deletion cascading to all contained resources",
            "Tags applied at resource group level vs resource level inheritance",
            "Default resource group naming vs organizational naming conventions",
          ],
          quiz: [
            {
              id: "resource-groups-q1",
              prompt: "How many resource groups can a single Azure resource belong to?",
              choices: [
                { id: "a", text: "Zero" },
                { id: "b", text: "Exactly one" },
                { id: "c", text: "Up to three" },
                { id: "d", text: "Unlimited" },
              ],
              correctChoiceId: "b",
              explanation:
                "Every Azure resource must belong to exactly one resource group—it cannot exist without one or span multiple groups.",
            },
            {
              id: "resource-groups-q2",
              prompt: "What happens when you delete a resource group?",
              choices: [
                { id: "a", text: "Only the group container is removed; resources remain" },
                { id: "b", text: "All resources within the group are deleted" },
                { id: "c", text: "Resources are moved to the Default resource group" },
                { id: "d", text: "Nothing until you manually delete each resource" },
              ],
              correctChoiceId: "b",
              explanation:
                "Deleting a resource group permanently deletes all resources contained within it.",
            },
            {
              id: "resource-groups-q3",
              prompt: "What are Azure resource tags used for?",
              choices: [
                { id: "a", text: "Encrypting data at rest" },
                { id: "b", text: "Organizing resources and tracking costs" },
                { id: "c", text: "Assigning IP addresses to VMs" },
                { id: "d", text: "Creating virtual network subnets" },
              ],
              correctChoiceId: "b",
              explanation:
                "Tags are name-value pairs applied to resources for organization, cost allocation, automation, and governance.",
            },
            {
              id: "resource-groups-q4",
              prompt: "Can resources in one resource group be in different Azure regions?",
              choices: [
                { id: "a", text: "No, all resources must be in the resource group's region" },
                { id: "b", text: "Yes, resources can span multiple regions within one group" },
                { id: "c", text: "Only storage accounts can be in different regions" },
                { id: "d", text: "Only with a special enterprise license" },
              ],
              correctChoiceId: "b",
              explanation:
                "A resource group's region stores metadata, but resources inside it can be deployed to different Azure regions.",
            },
            {
              id: "resource-groups-q5",
              prompt: "What is a best practice for organizing resource groups?",
              choices: [
                { id: "a", text: "Put all company resources in one group" },
                { id: "b", text: "Group resources that share the same lifecycle" },
                { id: "c", text: "Create a new group for every single resource" },
                { id: "d", text: "Never use resource groups" },
              ],
              correctChoiceId: "b",
              explanation:
                "Group resources that are deployed, managed, and decommissioned together—such as all resources for one application environment.",
            },
          ],
          flashcards: [
            {
              id: "resource-groups-f1",
              front: "How many resource groups per Azure resource?",
              back: "Exactly one—every resource must belong to a resource group",
            },
            {
              id: "resource-groups-f2",
              front: "Effect of deleting a resource group?",
              back: "All resources inside the group are permanently deleted",
            },
            {
              id: "resource-groups-f3",
              front: "What are Azure tags?",
              back: "Name-value pairs for organizing resources and tracking costs",
            },
            {
              id: "resource-groups-f4",
              front: "What is ARM?",
              back: "Azure Resource Manager—the deployment and management layer for all Azure resources",
            },
            {
              id: "resource-groups-f5",
              front: "CanNotDelete lock does what?",
              back: "Prevents deletion of a resource or resource group without removing the lock first",
            },
          ],
          objectives: [
            "AZ-900-2.3",
            "AZ-900-3.1",
          ],
          practiceType: ["reading", "quiz", "flashcard"],
          questionBank: [
            {
              id: "resource-groups-bq1",
              prompt: "Can a resource belong to two resource groups?",
              choices: [
                { id: "a", text: "Yes, always" },
                { id: "b", text: "No—exactly one resource group" },
                { id: "c", text: "Only for storage" },
                { id: "d", text: "Only in dev" }
              ],
              correctChoiceId: "b",
              explanation:
                "Every Azure resource must belong to exactly one resource group.",
            },
            {
              id: "resource-groups-bq2",
              prompt: "Tags on resources are:",
              choices: [
                { id: "a", text: "Name-value pairs for organization and billing" },
                { id: "b", text: "Encryption keys" },
                { id: "c", text: "Network ACLs" },
                { id: "d", text: "VM passwords" }
              ],
              correctChoiceId: "a",
              explanation:
                "Tags help organize, track costs, and automate governance.",
            },
            {
              id: "resource-groups-bq3",
              prompt: "Deleting a resource group:",
              choices: [
                { id: "a", text: "Deletes all contained resources" },
                { id: "b", text: "Moves resources to DefaultRG" },
                { id: "c", text: "Has no effect on resources" },
                { id: "d", text: "Requires Azure support ticket" }
              ],
              correctChoiceId: "a",
              explanation:
                "Deleting a resource group deletes all resources within it.",
            },
            {
              id: "resource-groups-bq4",
              prompt: "ARM templates are written in:",
              choices: [
                { id: "a", text: "JSON (or Bicep which compiles to JSON)" },
                { id: "b", text: "Binary only" },
                { id: "c", text: "Python exclusively" },
                { id: "d", text: "Cannot be used for deployment" }
              ],
              correctChoiceId: "a",
              explanation:
                "ARM uses JSON; Bicep is a domain-specific language that transpiles to ARM JSON.",
            },
            {
              id: "resource-groups-bq5",
              prompt: "ReadOnly lock on a resource:",
              choices: [
                { id: "a", text: "Allows read but blocks modification or deletion" },
                { id: "b", text: "Allows full admin access" },
                { id: "c", text: "Encrypts the resource" },
                { id: "d", text: "Moves it to another region" }
              ],
              correctChoiceId: "a",
              explanation:
                "ReadOnly locks prevent changes while allowing read access.",
            },
            {
              id: "resource-groups-bq6",
              prompt: "Resources in one resource group can span:",
              choices: [
                { id: "a", text: "Multiple Azure regions" },
                { id: "b", text: "Multiple subscriptions only" },
                { id: "c", text: "Only one VM" },
                { id: "d", text: "On-premises only" }
              ],
              correctChoiceId: "a",
              explanation:
                "Resource groups can contain resources deployed in different regions.",
            }
          ],
        },
        {
          id: "virtual-machines",
          name: "Virtual Machines",
          lesson: {
            title: "Azure Virtual Machines Overview",
            content: `Azure Virtual Machines (VMs) provide on-demand, scalable compute infrastructure in the cloud. VMs are an IaaS offering—you manage the operating system, applications, and patches while Azure manages the underlying physical hardware and virtualization layer.

You choose VM sizes (series) based on workload needs: general purpose (B, D series), compute optimized (F series), memory optimized (E series), or GPU-enabled (N series). Each size defines vCPUs, memory, and local storage. VMs are billed per second while running; deallocating a VM stops compute charges but storage costs continue.

VM images include Windows Server, Linux distributions (Ubuntu, RHEL), and marketplace images with pre-installed software. You can also create custom images from configured VMs. Availability Sets spread VMs across fault and update domains within a datacenter. Availability Zones provide datacenter-level redundancy.

VM extensions add capabilities like monitoring agents, antivirus, or custom scripts. Azure Backup and Azure Site Recovery protect VM data and enable disaster recovery. VMs connect to virtual networks for secure communication and can have public or private IP addresses depending on architecture requirements.

Azure VM sizes follow naming conventions: family letter (D=general, E=memory, F=compute, etc.) + number of vCPUs + features. Choosing the right size balances cost and performance. Burstable B-series VMs accumulate credits for occasional CPU spikes.

Availability Sets spread VMs across fault domains and update domains within a datacenter—different from Availability Zones which span datacenters. Virtual Machine Scale Sets automate scaling of identical VMs behind a load balancer.

Azure Spot VMs use spare capacity at deep discounts but can be evicted with short notice. Reserved VM instances save up to 72% for 1- or 3-year commitments. Hybrid Benefit applies existing Windows Server or SQL Server licenses to reduce costs.`,
          },
          keyFacts: [
            "Azure VMs are IaaS—you manage the OS and applications",
            "VM sizes (series) determine vCPU, memory, and performance characteristics",
            "Deallocating a VM stops compute billing but storage charges continue",
            "Availability Sets protect against datacenter rack and update failures",
            "Availability Zones provide datacenter-level high availability",
            "VMs connect to Azure Virtual Networks for networking",
          ],
          guidedExample: {
            title: "Deploy a Linux VM with Managed Disk and NSG Rules",
            steps: [
              "Create a resource group in East US for the web server project.",
              "Deploy an Ubuntu VM with Standard_B2s size and a managed OS disk.",
              "Attach the VM to a VNet subnet and assign a public IP with DNS name label.",
              "Configure an NSG allowing inbound TCP 22 from your IP and TCP 80 from Internet.",
              "Enable Azure Monitor VM insights and set an alert for CPU above 80%.",
              "Verify SSH access and document the deallocate vs stop billing behavior.",
            ],
          },
          commonMistakes: [
            "Confusing VM deallocate (stops compute billing) with stop (may still bill)",
            "Mixing up managed disks with unmanaged storage accounts for VMs",
            "Assuming all VM sizes are available in every Azure Region",
            "Believing availability sets and availability zones serve identical purposes",
            "Forgetting NSG rules are required even when a public IP is assigned",
          ],
          examTraps: [
            "Availability Set (same datacenter fault/update domains) vs Availability Zone (separate datacenters)",
            "Spot VM eviction policy vs regular pay-as-you-go reliability",
            "Scale Set automatic scaling vs single VM vertical resize",
            "Managed disk snapshot vs VM capture (generalized image) backup scenarios",
            "B-series burstable vs D-series general purpose workload matching",
          ],
          realWorldScenario: "Your team needs a staging web server for two weeks. You deploy a B2s Linux VM with a managed disk, restrict SSH to the office IP via NSG, enable automatic shutdown schedules to deallocate nights and weekends, and set a Budget alert at the subscription level. When testing completes, you snapshot the disk, deallocate the VM, and document that storage charges continue until the disk is deleted.",
          estimatedStudyMinutes: 30,
          difficulty: "medium",
          prerequisites: ["azure-regions", "resource-groups", "azure-networking"],
          quiz: [
            {
              id: "virtual-machines-q1",
              prompt: "Azure Virtual Machines are an example of which cloud service model?",
              choices: [
                { id: "a", text: "SaaS" },
                { id: "b", text: "PaaS" },
                { id: "c", text: "IaaS" },
                { id: "d", text: "MaaS" },
              ],
              correctChoiceId: "c",
              explanation:
                "VMs are Infrastructure as a Service—you get virtualized compute and manage the OS, middleware, and applications.",
            },
            {
              id: "virtual-machines-q2",
              prompt: "What happens to compute charges when you deallocate an Azure VM?",
              choices: [
                { id: "a", text: "Compute charges continue at full price" },
                { id: "b", text: "Compute charges stop; storage charges may continue" },
                { id: "c", text: "All charges stop including storage" },
                { id: "d", text: "You are charged double for reallocation" },
              ],
              correctChoiceId: "b",
              explanation:
                "Deallocating stops compute billing, but attached disks and other storage resources continue to incur charges.",
            },
            {
              id: "virtual-machines-q3",
              prompt: "What is the purpose of an Availability Set?",
              choices: [
                { id: "a", text: "Group VMs for bulk discount pricing" },
                { id: "b", text: "Distribute VMs across fault and update domains" },
                { id: "c", text: "Encrypt all VM disk data automatically" },
                { id: "d", text: "Replace the need for a virtual network" },
              ],
              correctChoiceId: "b",
              explanation:
                "Availability Sets spread VMs across fault domains (separate hardware racks) and update domains (coordinated maintenance) within a datacenter.",
            },
            {
              id: "virtual-machines-q4",
              prompt: "Which VM series is typically chosen for memory-intensive workloads?",
              choices: [
                { id: "a", text: "B series (burstable)" },
                { id: "b", text: "E series (memory optimized)" },
                { id: "c", text: "N series (GPU)" },
                { id: "d", text: "A series (entry-level, retired)" },
              ],
              correctChoiceId: "b",
              explanation:
                "E-series VMs are memory optimized for large in-memory databases, analytics, and other memory-intensive applications.",
            },
            {
              id: "virtual-machines-q5",
              prompt: "How do Azure VMs typically connect to other resources securely?",
              choices: [
                { id: "a", text: "Through Azure Virtual Networks" },
                { id: "b", text: "Only via public Internet with no encryption" },
                { id: "c", text: "Physical cables to the customer's office" },
                { id: "d", text: "Bluetooth connections" },
              ],
              correctChoiceId: "a",
              explanation:
                "VMs are deployed into Azure Virtual Networks (VNets) which provide isolated, secure network connectivity.",
            },
          ],
          flashcards: [
            {
              id: "virtual-machines-f1",
              front: "What service model are Azure VMs?",
              back: "IaaS—Infrastructure as a Service",
            },
            {
              id: "virtual-machines-f2",
              front: "Deallocate vs stop a VM for billing?",
              back: "Deallocating stops compute charges; stopped (not deallocated) VMs may still incur compute costs",
            },
            {
              id: "virtual-machines-f3",
              front: "Availability Set vs Availability Zone?",
              back: "Sets protect within a datacenter; Zones protect across separate datacenters in a region",
            },
            {
              id: "virtual-machines-f4",
              front: "Availability Set vs Zone?",
              back: "Sets = fault/update domains in one datacenter; Zones = separate datacenters in a region",
            },
            {
              id: "virtual-machines-f5",
              front: "What are Spot VMs?",
              back: "Discounted VMs using spare capacity—can be evicted when Azure needs capacity back",
            },
            {
              id: "virtual-machines-f6",
              front: "VM Scale Sets provide?",
              back: "Automated scaling and management of a group of identical VMs",
            },
          ],
          objectives: [
            "AZ-900-2.4",
            "AZ-900-2.5",
          ],
          practiceType: ["reading", "quiz", "flashcard", "external-lab"],
          questionBank: [
            {
              id: "virtual-machines-bq1",
              prompt: "Which Azure compute option is IaaS?",
              choices: [
                { id: "a", text: "Azure Functions" },
                { id: "b", text: "Virtual Machines" },
                { id: "c", text: "Logic Apps" },
                { id: "d", text: "Azure CDN" }
              ],
              correctChoiceId: "b",
              explanation:
                "VMs are IaaS—you manage OS, patches, and applications.",
            },
            {
              id: "virtual-machines-bq2",
              prompt: "An Availability Set protects against:",
              choices: [
                { id: "a", text: "Datacenter-level failures only" },
                { id: "b", text: "Rack and update domain failures within a datacenter" },
                { id: "c", text: "Internet outages globally" },
                { id: "d", text: "User error in code only" }
              ],
              correctChoiceId: "b",
              explanation:
                "Availability Sets distribute VMs across fault and update domains in one datacenter.",
            },
            {
              id: "virtual-machines-bq3",
              prompt: "Azure Disk Storage attached to VMs includes:",
              choices: [
                { id: "a", text: "OS disk, temp disk, and optional data disks" },
                { id: "b", text: "Only USB drives" },
                { id: "c", text: "No persistent storage" },
                { id: "d", text: "CDN endpoints only" }
              ],
              correctChoiceId: "a",
              explanation:
                "VMs have OS disks, temporary local storage, and attachable managed data disks.",
            },
            {
              id: "virtual-machines-bq4",
              prompt: "Containers on Azure can run on:",
              choices: [
                { id: "a", text: "Azure Kubernetes Service (AKS) and Container Instances" },
                { id: "b", text: "Only on-premises" },
                { id: "c", text: "Blob storage directly" },
                { id: "d", text: "DNS zones only" }
              ],
              correctChoiceId: "a",
              explanation:
                "AKS and ACI are primary Azure container platforms.",
            },
            {
              id: "virtual-machines-bq5",
              prompt: "Reserved Instances reduce cost by:",
              choices: [
                { id: "a", text: "Committing to 1 or 3 year terms" },
                { id: "b", text: "Using more bandwidth" },
                { id: "c", text: "Disabling monitoring" },
                { id: "d", text: "Removing backups" }
              ],
              correctChoiceId: "a",
              explanation:
                "RI commitments provide significant discounts vs pay-as-you-go.",
            },
            {
              id: "virtual-machines-bq6",
              prompt: "Azure Hybrid Benefit applies to:",
              choices: [
                { id: "a", text: "Existing Windows Server/SQL Server licenses" },
                { id: "b", text: "Only Linux VMs" },
                { id: "c", text: "Storage accounts only" },
                { id: "d", text: "DNS records" }
              ],
              correctChoiceId: "a",
              explanation:
                "Hybrid Benefit lets you use on-premises licenses in Azure to save on VM costs.",
            },
            {
              id: "virtual-machines-bq7",
              prompt: "Which action stops compute billing for an Azure VM?",
              choices: [
                { id: "a", text: "Stop (power off) from guest OS only" },
                { id: "b", text: "Deallocate from Azure portal or CLI" },
                { id: "c", text: "Delete the VNet" },
                { id: "d", text: "Remove the public IP only" },
              ],
              correctChoiceId: "b",
              explanation:
                "Deallocating releases compute resources and stops compute charges; stopped-but-not-deallocated VMs may still incur compute costs.",
            },
            {
              id: "virtual-machines-bq8",
              prompt: "Availability Zones provide:",
              choices: [
                { id: "a", text: "Fault isolation across physically separate datacenters within a Region" },
                { id: "b", text: "Global load balancing across Regions" },
                { id: "c", text: "Free unlimited VM backups" },
                { id: "d", text: "Automatic OS patching without configuration" },
              ],
              correctChoiceId: "a",
              explanation:
                "Availability Zones are physically separate datacenters within an Azure Region for higher resilience.",
            }
          ],
          externalResources: [
            {
              id: "azure-free-account",
              name: "Azure free account",
              url: "https://azure.microsoft.com/free/",
              cost: "free",
              platform: "web",
              installNotes: "Required for VM lab if not using Learn sandbox.",
            }
          ],
          assignments: [
            {
              id: "azure-vm-lab-1",
              title: "Lab 2: Create and Connect to an Azure VM",
              type: "external-lab",
              instructions: `Use the Azure portal (free account or Learn sandbox) to deploy a virtual machine.

1. Sign in to portal.azure.com.
2. Create a resource → Virtual machine → Quick create or full wizard.
3. Choose Linux (Ubuntu) or Windows; select an appropriate size (B-series for free tier).
4. Configure authentication: SSH public key (Linux) or password (Windows).
5. Review pricing estimate and create the VM.
6. Connect via SSH (Linux) or RDP (Windows) once deployment completes.
7. Verify the VM is running, then deallocate or delete to avoid charges.

Document the resource group, region, and VM size you selected.`,
              estimatedMinutes: 45,
              externalResourceId: "azure-free-account",
              completionCriteria: [
                "VM deployed successfully in a named resource group",
                "Connected to the VM via SSH or RDP",
                "Identified VM size family and region used",
                "Deallocated or deleted VM after lab",
              ],
              relatedTopicIds: ["virtual-machines"],
              order: 1,
            }
          ],
        },
        {
          id: "storage-accounts",
          name: "Storage Accounts",
          lesson: {
            title: "Azure Storage Accounts and Services",
            content: `An Azure storage account provides a unique namespace for Azure Storage data accessible from anywhere over HTTP or HTTPS. All blobs, files, queues, and tables in a storage account share the account's endpoint and access keys or Azure AD credentials.

Azure Blob Storage stores unstructured data like images, videos, backups, and logs. Access tiers include Hot (frequent access), Cool (infrequent, lower storage cost), and Archive (rarely accessed, lowest cost, higher retrieval time). Azure Files provides fully managed file shares accessible via SMB and NFS protocols.

Azure Queue Storage stores messages for asynchronous communication between application components. Azure Table Storage (now part of Cosmos DB Table API) stores NoSQL key-value data. Redundancy options include LRS (single datacenter), ZRS (across zones), GRS (geo-redundant), and GZRS (geo-zone-redundant).

Storage accounts have performance tiers: Standard (HDD-based) and Premium (SSD-based, low latency). Security features include encryption at rest by default, shared access signatures (SAS) for delegated access, and private endpoints for VNet integration. Choose redundancy and tier based on durability needs and access patterns.

Storage account names must be globally unique, 3-24 characters, lowercase letters and numbers only. Performance tiers: Standard (HDD-based) vs Premium (SSD-based). Access tiers for blob: Hot (frequent access), Cool (infrequent, lower storage cost), Archive (rare access, highest retrieval latency).

Redundancy options progress from LRS (single datacenter) to ZRS (zone-redundant) to GRS (geo-redundant) to GZRS (geo-zone-redundant). For AZ-900, know that GRS replicates to a secondary region automatically.

Azure Files provides SMB/NFS file shares in the cloud. Azure Queue Storage decouples application components. Table Storage (now part of Cosmos DB Table API) stores NoSQL key-value data. Disk Storage is optimized for VM attachments.`,
          },
          keyFacts: [
            "A storage account is a unique namespace for blobs, files, queues, and tables",
            "Blob access tiers: Hot, Cool, and Archive for cost optimization",
            "Azure Files provides managed SMB/NFS file shares in the cloud",
            "Redundancy options: LRS, ZRS, GRS, GZRS for durability",
            "Data is encrypted at rest by default in Azure Storage",
            "Premium storage uses SSDs; Standard uses HDDs",
          ],
          commonMistakes: [
            "Confusing blob, file, queue, and table storage types within a storage account",
            "Mixing up Hot, Cool, and Archive access tiers",
            "Assuming storage account names are only unique within a subscription",
            "Believing Azure Files and Blob storage serve identical use cases",
            "Forgetting replication options (LRS, ZRS, GRS, RA-GRS) affect durability and cost",
          ],
          examTraps: [
            "Archive tier minimum storage duration and retrieval latency",
            "GRS vs RA-GRS read access during regional outage scenarios",
            "Storage account name global uniqueness requirement",
            "Blob storage for unstructured data vs Azure Files for SMB shares",
            "Premium block blob vs standard performance tier selection",
          ],
          quiz: [
            {
              id: "storage-accounts-q1",
              prompt: "Which Azure Storage service is best for storing large unstructured files like images and videos?",
              choices: [
                { id: "a", text: "Azure Queue Storage" },
                { id: "b", text: "Azure Blob Storage" },
                { id: "c", text: "Azure Table Storage" },
                { id: "d", text: "Azure Virtual Network" },
              ],
              correctChoiceId: "b",
              explanation:
                "Blob Storage is designed for unstructured object data like images, videos, documents, and backups.",
            },
            {
              id: "storage-accounts-q2",
              prompt: "Which blob access tier has the lowest storage cost but highest retrieval latency?",
              choices: [
                { id: "a", text: "Hot" },
                { id: "b", text: "Cool" },
                { id: "c", text: "Archive" },
                { id: "d", text: "Premium" },
              ],
              correctChoiceId: "c",
              explanation:
                "Archive tier offers the lowest storage cost for rarely accessed data but requires rehydration before access, increasing latency.",
            },
            {
              id: "storage-accounts-q3",
              prompt: "What does GRS (Geo-Redundant Storage) provide?",
              choices: [
                { id: "a", text: "Storage in a single datacenter only" },
                { id: "b", text: "Copies data to a secondary region for disaster recovery" },
                { id: "c", text: "Unlimited free storage" },
                { id: "d", text: "Automatic VM backup only" },
              ],
              correctChoiceId: "b",
              explanation:
                "GRS replicates data to a secondary geographic region, protecting against regional disasters.",
            },
            {
              id: "storage-accounts-q4",
              prompt: "Which service provides managed cloud file shares using SMB protocol?",
              choices: [
                { id: "a", text: "Azure Blob Storage" },
                { id: "b", text: "Azure Files" },
                { id: "c", text: "Azure Queue Storage" },
                { id: "d", text: "Azure DNS" },
              ],
              correctChoiceId: "b",
              explanation:
                "Azure Files offers fully managed file shares accessible via SMB and NFS, ideal for lift-and-shift file share workloads.",
            },
            {
              id: "storage-accounts-q5",
              prompt: "Is Azure Storage data encrypted at rest by default?",
              choices: [
                { id: "a", text: "No, encryption must always be manually enabled" },
                { id: "b", text: "Yes, all data is encrypted at rest by default" },
                { id: "c", text: "Only for Premium tier accounts" },
                { id: "d", text: "Only if you purchase a separate license" },
              ],
              correctChoiceId: "b",
              explanation:
                "Azure Storage encrypts all data at rest by default using Microsoft-managed keys (or customer-managed keys if configured).",
            },
          ],
          flashcards: [
            {
              id: "storage-accounts-f1",
              front: "Blob storage access tiers?",
              back: "Hot (frequent access), Cool (infrequent), Archive (rarely accessed, lowest cost)",
            },
            {
              id: "storage-accounts-f2",
              front: "What is GRS?",
              back: "Geo-Redundant Storage—replicates data to a secondary Azure region",
            },
            {
              id: "storage-accounts-f3",
              front: "Azure Files use case?",
              back: "Managed cloud file shares accessible via SMB/NFS protocols",
            },
            {
              id: "storage-accounts-f4",
              front: "Blob access tiers?",
              back: "Hot (frequent), Cool (infrequent), Archive (rare access, low storage cost)",
            },
            {
              id: "storage-accounts-f5",
              front: "GRS redundancy?",
              back: "Geo-Redundant Storage—replicates data to a secondary Azure region",
            },
            {
              id: "storage-accounts-f6",
              front: "Storage account name rules?",
              back: "Globally unique, 3-24 chars, lowercase letters and numbers only",
            },
          ],
          objectives: [
            "AZ-900-2.6",
            "AZ-900-2.7",
          ],
          practiceType: ["reading", "quiz", "flashcard", "external-lab"],
          questionBank: [
            {
              id: "storage-accounts-bq1",
              prompt: "Which redundancy keeps 3 copies in one region across zones?",
              choices: [
                { id: "a", text: "LRS" },
                { id: "b", text: "ZRS" },
                { id: "c", text: "RA-GRS" },
                { id: "d", text: "LRS only" }
              ],
              correctChoiceId: "b",
              explanation:
                "ZRS (Zone-Redundant Storage) replicates across Availability Zones in the primary region.",
            },
            {
              id: "storage-accounts-bq2",
              prompt: "Azure Files provides:",
              choices: [
                { id: "a", text: "Managed file shares accessible via SMB/NFS" },
                { id: "b", text: "VM compute only" },
                { id: "c", text: "DNS hosting" },
                { id: "d", text: "Firewall rules only" }
              ],
              correctChoiceId: "a",
              explanation:
                "Azure Files offers cloud-native shared file storage.",
            },
            {
              id: "storage-accounts-bq3",
              prompt: "Cool access tier is best for:",
              choices: [
                { id: "a", text: "Data accessed frequently" },
                { id: "b", text: "Infrequently accessed data with lower storage cost" },
                { id: "c", text: "Real-time streaming only" },
                { id: "d", text: "VM boot disks" }
              ],
              correctChoiceId: "b",
              explanation:
                "Cool tier reduces storage cost for data accessed less often than Hot tier.",
            },
            {
              id: "storage-accounts-bq4",
              prompt: "Maximum storage account name length?",
              choices: [
                { id: "a", text: "24 characters" },
                { id: "b", text: "128 characters" },
                { id: "c", text: "3 characters only" },
                { id: "d", text: "Unlimited" }
              ],
              correctChoiceId: "a",
              explanation:
                "Storage account names must be 3-24 characters, lowercase alphanumeric.",
            },
            {
              id: "storage-accounts-bq5",
              prompt: "Page blobs were primarily used for:",
              choices: [
                { id: "a", text: "VM disks (legacy; managed disks preferred now)" },
                { id: "b", text: "DNS records" },
                { id: "c", text: "Email routing" },
                { id: "d", text: "Load balancing only" }
              ],
              correctChoiceId: "a",
              explanation:
                "Page blobs backed unmanaged VM disks; managed disks are now standard.",
            },
            {
              id: "storage-accounts-bq6",
              prompt: "Queue storage is used to:",
              choices: [
                { id: "a", text: "Decouple application components with message queues" },
                { id: "b", text: "Host websites" },
                { id: "c", text: "Replace Active Directory" },
                { id: "d", text: "Configure VPNs" }
              ],
              correctChoiceId: "a",
              explanation:
                "Queue Storage stores messages for asynchronous communication between services.",
            }
          ],
          externalResources: [
            {
              id: "azure-free-account",
              name: "Azure free account",
              url: "https://azure.microsoft.com/free/",
              cost: "free",
              platform: "web",
            }
          ],
          assignments: [
            {
              id: "azure-storage-lab-1",
              title: "Lab 2: Create a Storage Account and Upload a Blob",
              type: "external-lab",
              instructions: `Practice core Azure storage skills in the portal.

1. In the Azure portal, create a Storage account (StorageV2, Standard, LRS is fine for lab).
2. Note the globally unique name requirement and selected region.
3. Navigate to Containers under Blob service and create a container (private access).
4. Upload a small file (any text or image) as a block blob.
5. Copy the blob URL and verify access settings.
6. Optional: create a file share under Azure Files and upload a test file.
7. Delete the resource group when finished to avoid ongoing costs.

This lab reinforces blob storage—the most common AZ-900 storage exam topic.`,
              estimatedMinutes: 35,
              externalResourceId: "azure-free-account",
              completionCriteria: [
                "Storage account created with valid unique name",
                "Blob container created and file uploaded",
                "Identified redundancy tier (LRS/GRS) selected",
                "Resource group cleaned up after completion",
              ],
              relatedTopicIds: ["storage-accounts"],
              order: 1,
            }
          ],
        },
        {
          id: "azure-networking",
          name: "Azure Networking",
          lesson: {
            title: "Azure Core Networking Services",
            content: `Azure Virtual Network (VNet) is the fundamental building block for private networks in Azure. VNets let Azure resources communicate securely with each other, the Internet, and on-premises networks. Each VNet has an address space defined by CIDR notation (e.g., 10.0.0.0/16).

Subnets divide VNet address space into segments. Resources like VMs are placed in subnets. Network Security Groups (NSGs) filter inbound and outbound traffic using rules based on source, destination, port, and protocol. NSGs can attach to subnets or individual network interfaces.

Azure Load Balancer distributes incoming traffic across healthy backend VMs at Layer 4 (TCP/UDP). Azure Application Gateway provides Layer 7 load balancing with URL-based routing, SSL termination, and Web Application Firewall (WAF). VPN Gateway and ExpressRoute connect on-premises networks to Azure VNets.

Azure DNS hosts DNS domains and records. Azure CDN caches content at edge locations worldwide for faster delivery. Public IP addresses expose resources to the Internet; private IPs enable communication within a VNet. Peering connects VNets for low-latency, private communication.

Network Security Groups (NSGs) contain allow/deny rules evaluated by priority (lower number = higher priority). Rules filter traffic by source/destination IP, port, and protocol. NSGs attach to subnets or individual NICs.

Azure Load Balancer distributes traffic at Layer 4 (TCP/UDP). Application Gateway provides Layer 7 routing, SSL termination, and WAF. Azure VPN Gateway connects on-premises networks to Azure via site-to-site or point-to-site VPN. ExpressRoute provides private dedicated connectivity without traversing the public Internet.

Private endpoints allow PaaS services (Storage, SQL) to be accessed via private IP addresses within your VNet, keeping traffic off the public Internet. Service endpoints are an alternative that routes service traffic through the VNet backbone.`,
          },
          keyFacts: [
            "Azure Virtual Network (VNet) is the foundation for private networking in Azure",
            "Subnets segment a VNet's address space for organizing resources",
            "Network Security Groups (NSGs) filter traffic with allow/deny rules",
            "Load Balancer operates at Layer 4; Application Gateway at Layer 7",
            "VPN Gateway and ExpressRoute connect on-premises to Azure",
            "VNet peering enables private communication between virtual networks",
          ],
          commonMistakes: [
            "Confusing NSG (stateful) with Azure Firewall scope and capabilities",
            "Mixing up VNet peering with VPN Gateway connectivity",
            "Assuming all VNet resources can communicate without explicit configuration",
            "Believing public IP is required for all Azure resources",
            "Forgetting subnets are subdivisions within a VNet, not separate networks",
          ],
          examTraps: [
            "NSG applied at subnet vs NIC level rule precedence",
            "VNet peering vs VPN Gateway for hybrid connectivity scenarios",
            "Private endpoint vs service endpoint for PaaS access",
            "Application Gateway vs Azure Load Balancer Layer 4 vs Layer 7",
            "Default allow within VNet vs explicit deny NSG rules",
          ],
          quiz: [
            {
              id: "azure-networking-q1",
              prompt: "What is the primary purpose of an Azure Virtual Network?",
              choices: [
                { id: "a", text: "Store unstructured blob data" },
                { id: "b", text: "Provide an isolated private network for Azure resources" },
                { id: "c", text: "Manage user identities" },
                { id: "d", text: "Monitor application performance" },
              ],
              correctChoiceId: "b",
              explanation:
                "VNets provide isolated, private network environments where Azure resources communicate securely.",
            },
            {
              id: "azure-networking-q2",
              prompt: "What does a Network Security Group (NSG) do?",
              choices: [
                { id: "a", text: "Assigns role-based access permissions" },
                { id: "b", text: "Filters network traffic with security rules" },
                { id: "c", text: "Creates virtual machine images" },
                { id: "d", text: "Manages DNS records" },
              ],
              correctChoiceId: "b",
              explanation:
                "NSGs contain security rules that allow or deny inbound and outbound traffic based on IP, port, and protocol.",
            },
            {
              id: "azure-networking-q3",
              prompt: "Which service provides Layer 7 load balancing with URL-based routing?",
              choices: [
                { id: "a", text: "Azure Load Balancer" },
                { id: "b", text: "Azure Application Gateway" },
                { id: "c", text: "Azure VPN Gateway" },
                { id: "d", text: "Network Security Group" },
              ],
              correctChoiceId: "b",
              explanation:
                "Application Gateway is a Layer 7 load balancer supporting URL-based routing, SSL termination, and WAF.",
            },
            {
              id: "azure-networking-q4",
              prompt: "How can you connect an on-premises network to Azure?",
              choices: [
                { id: "a", text: "VPN Gateway or ExpressRoute" },
                { id: "b", text: "Only by mailing hard drives" },
                { id: "c", text: "Azure Blob Storage only" },
                { id: "d", text: "Microsoft Entra ID" },
              ],
              correctChoiceId: "a",
              explanation:
                "VPN Gateway creates encrypted tunnels over the Internet; ExpressRoute provides a private dedicated connection.",
            },
            {
              id: "azure-networking-q5",
              prompt: "What is VNet peering?",
              choices: [
                { id: "a", text: "Connecting two virtual networks for private communication" },
                { id: "b", text: "Deleting unused subnets" },
                { id: "c", text: "Assigning public IPs to all VMs" },
                { id: "d", text: "Encrypting storage account data" },
              ],
              correctChoiceId: "a",
              explanation:
                "VNet peering connects two Azure virtual networks so resources can communicate privately using Azure backbone.",
            },
          ],
          flashcards: [
            {
              id: "azure-networking-f1",
              front: "What is an Azure VNet?",
              back: "A private network in Azure for secure resource communication",
            },
            {
              id: "azure-networking-f2",
              front: "NSG purpose?",
              back: "Filter inbound/outbound network traffic with allow/deny rules",
            },
            {
              id: "azure-networking-f3",
              front: "VPN Gateway vs ExpressRoute?",
              back: "VPN uses encrypted Internet tunnel; ExpressRoute is a private dedicated connection",
            },
            {
              id: "azure-networking-f4",
              front: "NSG rule priority?",
              back: "Lower number = higher priority; first matching rule wins",
            },
            {
              id: "azure-networking-f5",
              front: "ExpressRoute vs VPN?",
              back: "ExpressRoute = private dedicated link; VPN = encrypted tunnel over Internet",
            },
            {
              id: "azure-networking-f6",
              front: "Private endpoint purpose?",
              back: "Access PaaS services via private IP inside your VNet",
            },
          ],
          objectives: [
            "AZ-900-2.8",
            "AZ-900-2.9",
          ],
          practiceType: ["reading", "quiz", "flashcard"],
          questionBank: [
            {
              id: "azure-networking-bq1",
              prompt: "Default VNet address space is customizable—typical private range:",
              choices: [
                { id: "a", text: "10.0.0.0/16 or similar RFC 1918 space" },
                { id: "b", text: "8.8.8.0/24 only" },
                { id: "c", text: "Public IP ranges only" },
                { id: "d", text: "Cannot be changed" }
              ],
              correctChoiceId: "a",
              explanation:
                "VNets use private RFC 1918 address spaces you define.",
            },
            {
              id: "azure-networking-bq2",
              prompt: "Application Gateway operates at OSI:",
              choices: [
                { id: "a", text: "Layer 7 (HTTP/HTTPS)" },
                { id: "b", text: "Layer 1 only" },
                { id: "c", text: "Layer 2 switching only" },
                { id: "d", text: "Physical layer exclusively" }
              ],
              correctChoiceId: "a",
              explanation:
                "Application Gateway is a Layer 7 load balancer with WAF capabilities.",
            },
            {
              id: "azure-networking-bq3",
              prompt: "NSG deny rule with priority 100 and allow 200—traffic matching both:",
              choices: [
                { id: "a", text: "Denied (100 wins)" },
                { id: "b", text: "Allowed (200 wins)" },
                { id: "c", text: "Random" },
                { id: "d", text: "Forwarded to on-premises" }
              ],
              correctChoiceId: "a",
              explanation:
                "Lower priority number takes precedence.",
            },
            {
              id: "azure-networking-bq4",
              prompt: "Point-to-site VPN connects:",
              choices: [
                { id: "a", text: "Individual client devices to Azure VNet" },
                { id: "b", text: "Two Azure regions only" },
                { id: "c", text: "Blob storage to CDN" },
                { id: "d", text: "DNS to DHCP" }
              ],
              correctChoiceId: "a",
              explanation:
                "P2S VPN lets individual users connect securely to Azure.",
            },
            {
              id: "azure-networking-bq5",
              prompt: "Azure DNS lets you:",
              choices: [
                { id: "a", text: "Host DNS domains and manage records" },
                { id: "b", text: "Replace all NSGs" },
                { id: "c", text: "Create VMs automatically" },
                { id: "d", text: "Disable encryption" }
              ],
              correctChoiceId: "a",
              explanation:
                "Azure DNS hosts your domain's DNS zones and records.",
            },
            {
              id: "azure-networking-bq6",
              prompt: "Subnet within a VNet:",
              choices: [
                { id: "a", text: "Segments the VNet address space for resource placement" },
                { id: "b", text: "Replaces resource groups" },
                { id: "c", text: "Is a billing unit only" },
                { id: "d", text: "Cannot have NSGs" }
              ],
              correctChoiceId: "a",
              explanation:
                "Subnets divide VNet address space; resources deploy into subnets.",
            }
          ],
        },
      ],
    },
    {
      id: "identity-security",
      name: "Identity and Security",
      topics: [
        {
          id: "microsoft-entra-id",
          name: "Microsoft Entra ID",
          lesson: {
            title: "Microsoft Entra ID (Azure AD) Fundamentals",
            content: `Microsoft Entra ID (formerly Azure Active Directory) is Microsoft's cloud-based identity and access management service. It helps employees sign in and access resources—Microsoft 365, the Azure portal, SaaS applications, and custom apps. Entra ID is the identity provider for Azure and integrates with on-premises Active Directory via Entra Connect.

Users, groups, and applications are core objects. Users represent people or service principals. Groups simplify access management by assigning permissions to many users at once. Enterprise applications enable single sign-on (SSO) to thousands of pre-integrated SaaS apps. Multi-factor authentication (MFA) adds a second verification step beyond passwords.

Entra ID comes in Free, P1, and P2 editions. P1 adds features like hybrid identity and self-service password reset. P2 adds Identity Protection and Privileged Identity Management (PIM). Conditional Access policies enforce requirements like MFA based on user, location, device, or risk level.

Entra ID is different from Active Directory Domain Services (AD DS). Entra ID is cloud identity; AD DS is traditional on-premises directory for Windows domains. Many organizations use both, synchronized through Entra Connect.

Microsoft Entra ID (formerly Azure Active Directory) is Azure's cloud-based identity and access management service. It is NOT the same as Active Directory Domain Services (AD DS)—Entra ID is identity in the cloud; AD DS is traditional domain controllers often run on VMs.

Entra ID tiers: Free (included with Azure subscriptions), P1 (conditional access, hybrid identity), P2 (Identity Protection, Privileged Identity Management). Multi-factor authentication (MFA) adds a second verification factor beyond passwords.

Single sign-on (SSO) lets users access multiple applications with one login. Entra ID integrates with thousands of SaaS apps via gallery templates. Conditional Access policies enforce requirements like MFA based on user, location, device, and risk signals.`,
          },
          keyFacts: [
            "Microsoft Entra ID is cloud-based identity and access management",
            "Provides SSO to Azure, Microsoft 365, and thousands of SaaS apps",
            "Multi-factor authentication (MFA) adds a second verification factor",
            "Conditional Access enforces policies based on user, device, location, and risk",
            "Entra ID differs from on-premises Active Directory Domain Services",
            "Entra Connect synchronizes on-premises AD with Entra ID",
          ],
          commonMistakes: [
            "Confusing Entra ID (Azure AD) with Azure RBAC for resource access",
            "Mixing up authentication (Entra ID) with authorization (RBAC)",
            "Assuming Entra ID is the same as Active Directory Domain Services on-premises",
            "Believing every Azure resource is automatically protected by Entra ID roles",
            "Forgetting multi-factor authentication is configured in Entra ID, not RBAC",
          ],
          examTraps: [
            "Global Administrator (Entra ID role) vs Owner (Azure RBAC role)",
            "Single sign-on via Entra ID vs direct subscription access",
            "Service principal vs managed identity authentication scenarios",
            "Conditional Access policies vs Azure Policy compliance rules",
            "Entra ID Free vs Premium P1/P2 feature availability",
          ],
          quiz: [
            {
              id: "microsoft-entra-id-q1",
              prompt: "What is Microsoft Entra ID primarily used for?",
              choices: [
                { id: "a", text: "Storing blob files in the cloud" },
                { id: "b", text: "Identity and access management" },
                { id: "c", text: "Virtual machine compute" },
                { id: "d", text: "Network load balancing" },
              ],
              correctChoiceId: "b",
              explanation:
                "Entra ID is Microsoft's cloud identity service for authentication, authorization, and access management.",
            },
            {
              id: "microsoft-entra-id-q2",
              prompt: "What does multi-factor authentication (MFA) add?",
              choices: [
                { id: "a", text: "A second verification step beyond the password" },
                { id: "b", text: "Unlimited storage for user profiles" },
                { id: "c", text: "Automatic VM provisioning" },
                { id: "d", text: "DNS record management" },
              ],
              correctChoiceId: "a",
              explanation:
                "MFA requires two or more verification factors—something you know (password), have (phone), or are (biometric).",
            },
            {
              id: "microsoft-entra-id-q3",
              prompt: "What do Conditional Access policies control?",
              choices: [
                { id: "a", text: "Storage account redundancy levels" },
                { id: "b", text: "Access based on conditions like user, device, location, and risk" },
                { id: "c", text: "VM size selection" },
                { id: "d", text: "Azure region deployment" },
              ],
              correctChoiceId: "b",
              explanation:
                "Conditional Access evaluates signals (user, location, device compliance, risk) and enforces policies like requiring MFA.",
            },
            {
              id: "microsoft-entra-id-q4",
              prompt: "How does Entra ID differ from on-premises Active Directory Domain Services?",
              choices: [
                { id: "a", text: "They are identical products" },
                { id: "b", text: "Entra ID is cloud identity; AD DS is on-premises Windows domain directory" },
                { id: "c", text: "AD DS is only for Linux systems" },
                { id: "d", text: "Entra ID cannot manage user accounts" },
              ],
              correctChoiceId: "b",
              explanation:
                "Entra ID is a cloud identity platform; AD DS is traditional on-premises directory services for Windows domains.",
            },
            {
              id: "microsoft-entra-id-q5",
              prompt: "What tool synchronizes on-premises Active Directory with Entra ID?",
              choices: [
                { id: "a", text: "Azure Monitor" },
                { id: "b", text: "Microsoft Entra Connect" },
                { id: "c", text: "Azure Blob Storage" },
                { id: "d", text: "Network Security Group" },
              ],
              correctChoiceId: "b",
              explanation:
                "Entra Connect synchronizes on-premises AD user and group objects to Microsoft Entra ID for hybrid identity.",
            },
          ],
          flashcards: [
            {
              id: "microsoft-entra-id-f1",
              front: "What is Microsoft Entra ID?",
              back: "Cloud-based identity and access management service (formerly Azure AD)",
            },
            {
              id: "microsoft-entra-id-f2",
              front: "What is Conditional Access?",
              back: "Policies that control resource access based on user, device, location, and risk signals",
            },
            {
              id: "microsoft-entra-id-f3",
              front: "Entra ID vs on-premises AD DS?",
              back: "Entra ID is cloud identity; AD DS is on-premises Windows domain directory",
            },
            {
              id: "microsoft-entra-id-f4",
              front: "Entra ID vs AD DS?",
              back: "Entra ID = cloud identity service; AD DS = traditional domain controllers (often on VMs)",
            },
            {
              id: "microsoft-entra-id-f5",
              front: "What is Conditional Access?",
              back: "Policies that require conditions (MFA, compliant device) before granting access",
            },
            {
              id: "microsoft-entra-id-f6",
              front: "SSO benefit?",
              back: "One login grants access to multiple connected applications",
            },
          ],
          objectives: [
            "AZ-900-3.2",
            "AZ-900-3.3",
          ],
          practiceType: ["reading", "quiz", "flashcard"],
          questionBank: [
            {
              id: "microsoft-entra-id-bq1",
              prompt: "Microsoft Entra ID is primarily:",
              choices: [
                { id: "a", text: "Cloud identity and access management" },
                { id: "b", text: "A storage service" },
                { id: "c", text: "A VM backup tool" },
                { id: "d", text: "A CDN" }
              ],
              correctChoiceId: "a",
              explanation:
                "Entra ID manages users, groups, and authentication in Azure and Microsoft 365.",
            },
            {
              id: "microsoft-entra-id-bq2",
              prompt: "MFA requires:",
              choices: [
                { id: "a", text: "Two or more verification factors" },
                { id: "b", text: "Only a username" },
                { id: "c", text: "No password" },
                { id: "d", text: "Physical datacenter access" }
              ],
              correctChoiceId: "a",
              explanation:
                "MFA combines something you know, have, or are.",
            },
            {
              id: "microsoft-entra-id-bq3",
              prompt: "Entra ID tenant represents:",
              choices: [
                { id: "a", text: "A dedicated instance of Entra ID for an organization" },
                { id: "b", text: "A VM size" },
                { id: "c", text: "A storage container" },
                { id: "d", text: "A DNS zone only" }
              ],
              correctChoiceId: "a",
              explanation:
                "Each organization has an Entra ID tenant for its users and apps.",
            },
            {
              id: "microsoft-entra-id-bq4",
              prompt: "Hybrid identity syncs:",
              choices: [
                { id: "a", text: "On-premises AD with Entra ID" },
                { id: "b", text: "Two storage accounts" },
                { id: "c", text: "VMs to blob storage" },
                { id: "d", text: "Regions to zones" }
              ],
              correctChoiceId: "a",
              explanation:
                "Azure AD Connect syncs on-premises identities to Entra ID.",
            },
            {
              id: "microsoft-entra-id-bq5",
              prompt: "Guest users in Entra ID are:",
              choices: [
                { id: "a", text: "External users invited to access resources" },
                { id: "b", text: "Service accounts only" },
                { id: "c", text: "Deprecated accounts" },
                { id: "d", text: "Admin-only accounts" }
              ],
              correctChoiceId: "a",
              explanation:
                "B2B collaboration allows inviting external users as guests.",
            },
            {
              id: "microsoft-entra-id-bq6",
              prompt: "Passwordless authentication options include:",
              choices: [
                { id: "a", text: "Windows Hello, FIDO2 keys, Microsoft Authenticator" },
                { id: "b", text: "Plain text email only" },
                { id: "c", text: "Shared passwords" },
                { id: "d", text: "No authentication" }
              ],
              correctChoiceId: "a",
              explanation:
                "Passwordless methods improve security and user experience.",
            },
            {
              id: "microsoft-entra-id-bq7",
              prompt: "Entra ID P2 includes:",
              choices: [
                { id: "a", text: "Identity Protection and PIM" },
                { id: "b", text: "Only free features" },
                { id: "c", text: "VM licensing only" },
                { id: "d", text: "Storage redundancy" }
              ],
              correctChoiceId: "a",
              explanation:
                "P2 adds advanced security: risk detection and just-in-time admin access.",
            },
            {
              id: "microsoft-entra-id-bq8",
              prompt: "Primary authentication protocol for modern apps:",
              choices: [
                { id: "a", text: "OAuth 2.0 / OpenID Connect" },
                { id: "b", text: "FTP" },
                { id: "c", text: "SMTP only" },
                { id: "d", text: "Telnet" }
              ],
              correctChoiceId: "a",
              explanation:
                "Modern apps use OAuth/OIDC for secure delegated authorization.",
            }
          ],
        },
        {
          id: "role-based-access-control",
          name: "Role-Based Access Control",
          lesson: {
            title: "Azure RBAC and Access Management",
            content: `Azure Role-Based Access Control (RBAC) manages who can access Azure resources, what they can do, and which resources they can access. Instead of giving everyone broad access, you assign roles at the right scope following least-privilege principles.

RBAC has three core elements: security principal (user, group, service principal, or managed identity), role definition (collection of permissions), and scope (management group, subscription, resource group, or resource). An assignment combines all three—a principal gets a role at a scope.

Built-in roles cover common needs. Owner has full access including permission to assign roles. Contributor can create and manage resources but not assign roles. Reader can only view resources. Many service-specific roles exist, like Virtual Machine Contributor or Storage Blob Data Reader.

Custom roles let you define precise permission sets when built-in roles are too broad. Use Azure Policy alongside RBAC—RBAC controls who has access; Policy controls what resources can be created and how they must be configured. Privileged Identity Management (PIM) in Entra ID P2 provides just-in-time elevated access for sensitive roles.

Built-in roles include Owner (full access + grant access), Contributor (manage resources but not access), Reader (view only), and User Access Administrator (manage user access). Custom roles define granular permissions when built-in roles don't fit.

Deny assignments block access even if Allow role assignments exist—Deny takes precedence. Azure AD roles (e.g., Global Administrator) manage Entra ID itself; Azure RBAC roles manage Azure resources—they are separate systems.

Scope hierarchy: Management Group → Subscription → Resource Group → Resource. Permissions inherit downward. Principle of least privilege means granting the minimum role needed at the narrowest appropriate scope.`,
          },
          keyFacts: [
            "RBAC controls who can access Azure resources and what actions they can perform",
            "Three elements: security principal, role definition, and scope",
            "Owner, Contributor, and Reader are fundamental built-in roles",
            "Scope can be management group, subscription, resource group, or resource",
            "Least privilege means granting only the minimum permissions needed",
            "Azure Policy governs resource configuration; RBAC governs access",
          ],
          guidedExample: {
            title: "Assign Reader Role at Resource Group Scope",
            steps: [
              "Identify the requirement: audit team needs view-only access to production resource group 'rg-prod-app'.",
              "Confirm the security principal—an Entra ID group named 'Audit-Team'—not individual user accounts.",
              "Select the built-in Reader role (view resources, no modifications, no role assignments).",
              "Set scope to the resource group 'rg-prod-app', not the entire subscription.",
              "Verify the assignment in Access control (IAM) blade and test with a member account.",
              "Document that Owner would be excessive and Contributor cannot assign roles.",
            ],
          },
          commonMistakes: [
            "Assigning Owner role when Reader or Contributor suffices",
            "Confusing Azure AD roles with Azure RBAC roles",
            "Granting subscription-wide access when resource group scope is sufficient",
            "Assuming Deny assignments are the same as Not Actions in role definitions",
            "Mixing up User Access Administrator with Owner role capabilities",
          ],
          examTraps: [
            "Owner vs Contributor vs Reader permission comparison scenarios",
            "Scope inheritance from management group down to resource",
            "Deny assignment overrides Allow role assignment trick questions",
            "Custom role creation when built-in roles are too broad",
            "Managed identity as security principal for automation scenarios",
          ],
          realWorldScenario: "A contractor needs to troubleshoot a failing App Service but must not change production configurations or assign access to others. You grant the built-in Website Contributor role scoped only to the specific App Service resource, set a calendar reminder to remove the assignment after 30 days, and enable PIM just-in-time elevation for your permanent admins who occasionally need Owner access.",
          estimatedStudyMinutes: 25,
          difficulty: "medium",
          prerequisites: ["microsoft-entra-id", "resource-groups"],
          quiz: [
            {
              id: "role-based-access-control-q1",
              prompt: "What are the three core elements of an Azure RBAC assignment?",
              choices: [
                { id: "a", text: "VM, disk, and network" },
                { id: "b", text: "Security principal, role definition, and scope" },
                { id: "c", text: "Region, zone, and datacenter" },
                { id: "d", text: "Hot, Cool, and Archive" },
              ],
              correctChoiceId: "b",
              explanation:
                "RBAC assignments combine a security principal (who), role definition (what permissions), and scope (where).",
            },
            {
              id: "role-based-access-control-q2",
              prompt: "Which built-in role can create resources but NOT assign roles to others?",
              choices: [
                { id: "a", text: "Owner" },
                { id: "b", text: "Contributor" },
                { id: "c", text: "Reader" },
                { id: "d", text: "User Access Administrator" },
              ],
              correctChoiceId: "b",
              explanation:
                "Contributor can manage resources but cannot grant access. Owner and User Access Administrator can assign roles.",
            },
            {
              id: "role-based-access-control-q3",
              prompt: "What does the Reader role allow?",
              choices: [
                { id: "a", text: "Full access including deleting resources" },
                { id: "b", text: "View resources without making changes" },
                { id: "c", text: "Assign roles to other users" },
                { id: "d", text: "Create new subscriptions" },
              ],
              correctChoiceId: "b",
              explanation:
                "Reader provides read-only access—users can view resources but cannot modify or delete them.",
            },
            {
              id: "role-based-access-control-q4",
              prompt: "What is the principle of least privilege?",
              choices: [
                { id: "a", text: "Give everyone Owner access for convenience" },
                { id: "b", text: "Grant only the minimum permissions needed to perform a task" },
                { id: "c", text: "Disable all security controls" },
                { id: "d", text: "Use one shared account for all administrators" },
              ],
              correctChoiceId: "b",
              explanation:
                "Least privilege limits access rights to the minimum necessary, reducing security risk from compromised accounts.",
            },
            {
              id: "role-based-access-control-q5",
              prompt: "At which scopes can RBAC roles be assigned?",
              choices: [
                { id: "a", text: "Only at the subscription level" },
                { id: "b", text: "Management group, subscription, resource group, or individual resource" },
                { id: "c", text: "Only on virtual machines" },
                { id: "d", text: "Globally across all cloud providers" },
              ],
              correctChoiceId: "b",
              explanation:
                "RBAC supports hierarchical scopes: management groups, subscriptions, resource groups, and individual resources.",
            },
          ],
          flashcards: [
            {
              id: "role-based-access-control-f1",
              front: "RBAC three elements?",
              back: "Security principal, role definition, scope",
            },
            {
              id: "role-based-access-control-f2",
              front: "Contributor vs Owner?",
              back: "Contributor manages resources but can't assign roles; Owner has full access including role assignment",
            },
            {
              id: "role-based-access-control-f3",
              front: "What is least privilege?",
              back: "Grant only the minimum permissions needed to perform a task",
            },
            {
              id: "role-based-access-control-f4",
              front: "Contributor vs Owner?",
              back: "Contributor manages resources; Owner also manages access assignments",
            },
            {
              id: "role-based-access-control-f5",
              front: "Deny vs Allow?",
              back: "Explicit Deny overrides Allow in RBAC evaluation",
            },
            {
              id: "role-based-access-control-f6",
              front: "RBAC scope hierarchy?",
              back: "Management group → Subscription → Resource group → Resource",
            },
          ],
          objectives: [
            "AZ-900-3.4",
            "AZ-900-3.5",
          ],
          practiceType: ["reading", "quiz", "flashcard", "simulator"],
          questionBank: [
            {
              id: "role-based-access-control-bq1",
              prompt: "Reader role allows:",
              choices: [
                { id: "a", text: "View resources without making changes" },
                { id: "b", text: "Full admin including delete" },
                { id: "c", text: "Grant Owner to others" },
                { id: "d", text: "Modify NSG rules only" }
              ],
              correctChoiceId: "a",
              explanation:
                "Reader provides read-only access to Azure resources.",
            },
            {
              id: "role-based-access-control-bq2",
              prompt: "Custom RBAC roles are defined in:",
              choices: [
                { id: "a", text: "JSON with actions and assignable scopes" },
                { id: "b", text: "Blob containers only" },
                { id: "c", text: "Cannot be created" },
                { id: "d", text: "DNS TXT records" }
              ],
              correctChoiceId: "a",
              explanation:
                "Custom roles specify permitted Actions and NotActions in JSON.",
            },
            {
              id: "role-based-access-control-bq3",
              prompt: "User Access Administrator can:",
              choices: [
                { id: "a", text: "Manage role assignments without full Owner" },
                { id: "b", text: "Only read logs" },
                { id: "c", text: "Create subscriptions" },
                { id: "d", text: "Disable MFA globally" }
              ],
              correctChoiceId: "a",
              explanation:
                "This role lets you grant others access without Contributor/Owner on resources.",
            },
            {
              id: "role-based-access-control-bq4",
              prompt: "Azure AD Global Administrator manages:",
              choices: [
                { id: "a", text: "Entra ID tenant settings and users" },
                { id: "b", text: "All Azure VMs automatically" },
                { id: "c", text: "Only blob storage" },
                { id: "d", text: "Physical datacenter hardware" }
              ],
              correctChoiceId: "a",
              explanation:
                "Global Admin is an Entra ID role, not an Azure resource RBAC role.",
            },
            {
              id: "role-based-access-control-bq5",
              prompt: "Least privilege means:",
              choices: [
                { id: "a", text: "Grant minimum permissions needed for the job" },
                { id: "b", text: "Give everyone Owner" },
                { id: "c", text: "Remove all authentication" },
                { id: "d", text: "Use shared admin accounts" }
              ],
              correctChoiceId: "a",
              explanation:
                "Least privilege reduces risk by limiting access scope and permissions.",
            },
            {
              id: "role-based-access-control-bq6",
              prompt: "RBAC assignment requires:",
              choices: [
                { id: "a", text: "Security principal, role definition, and scope" },
                { id: "b", text: "Only a password" },
                { id: "c", text: "Storage account key" },
                { id: "d", text: "VM serial number" }
              ],
              correctChoiceId: "a",
              explanation:
                "Assignments combine who (principal), what (role), and where (scope).",
            },
            {
              id: "role-based-access-control-bq7",
              prompt: "Management groups are used to:",
              choices: [
                { id: "a", text: "Organize subscriptions and apply governance at scale" },
                { id: "b", text: "Replace VMs" },
                { id: "c", text: "Host websites" },
                { id: "d", text: "Store blobs only" }
              ],
              correctChoiceId: "a",
              explanation:
                "Management groups hierarchy helps govern multiple subscriptions.",
            },
            {
              id: "role-based-access-control-bq8",
              prompt: "Which role can delete a resource group?",
              choices: [
                { id: "a", text: "Owner or Contributor at appropriate scope" },
                { id: "b", text: "Reader" },
                { id: "c", text: "No role can delete" },
                { id: "d", text: "Guest user by default" }
              ],
              correctChoiceId: "a",
              explanation:
                "Contributor and Owner roles include delete permissions on resources.",
            }
          ],
          assignments: [
            {
              id: "azure-rbac-sim-1",
              title: "Drill: Azure RBAC Role Matcher",
              type: "simulator",
              instructions: `Complete the in-app Azure RBAC drill to practice matching roles, scopes, and permissions.

Work through scenarios that test Owner vs Contributor vs Reader, scope levels, and Deny precedence. Aim for at least 80% correct. Review any missed concepts in the weak areas summary.`,
              estimatedMinutes: 15,
              simulatorId: "azure-rbac-drill",
              completionCriteria: [
                "Completed the azure-rbac-drill simulator session",
                "Scored at least 4 out of 5 items correct",
                "Reviewed weak concepts if any were flagged",
              ],
              relatedTopicIds: ["role-based-access-control"],
              order: 1,
            }
          ],
        },
      ],
    },
    {
      id: "management-governance",
      name: "Management and Governance",
      topics: [
        {
          id: "azure-monitor",
          name: "Azure Monitor",
          lesson: {
            title: "Azure Monitor and Observability",
            content: `Azure Monitor collects, analyzes, and acts on telemetry from Azure and on-premises environments. It provides full-stack observability across applications, infrastructure, and networks. Data sources include metrics (numerical time-series), logs (structured and unstructured text), and distributed traces.

Metrics are lightweight numeric values like CPU percentage, disk IOPS, or request count. Azure resources emit platform metrics automatically. Log Analytics workspaces store log data queried with Kusto Query Language (KQL). Application Insights monitors live web applications for performance, failures, and usage.

Alerts proactively notify you when conditions are met—a metric threshold, log query result, or activity log event. Action groups define who gets notified (email, SMS, webhook, Logic App). Dashboards and Workbooks visualize monitoring data. Azure Monitor integrates with Sentinel for security information and event management (SIEM).

The Azure Advisor provides personalized recommendations for cost, security, reliability, performance, and operational excellence. Service Health alerts you to Azure platform issues affecting your resources. Together, these tools help maintain healthy, performant, and cost-effective Azure environments.

Azure Monitor collects metrics (numerical performance data) and logs (textual event records) from resources platform-wide. Log Analytics workspaces store and query log data using Kusto Query Language (KQL).

Application Insights is an APM (Application Performance Monitoring) extension of Azure Monitor for web apps—it tracks requests, dependencies, exceptions, and user flows. Alerts can trigger on metric thresholds or log query results, notifying via email, SMS, or webhooks.

Azure Service Health notifies you of Azure platform incidents, planned maintenance, and health advisories affecting your resources. Activity Log records control-plane operations (who created/deleted resources)—distinct from diagnostic logs inside resources.`,
          },
          keyFacts: [
            "Azure Monitor collects metrics, logs, and traces from Azure and hybrid environments",
            "Metrics are numeric time-series data; logs are queryable event records",
            "Log Analytics uses Kusto Query Language (KQL) for log queries",
            "Application Insights monitors web application performance and failures",
            "Alerts notify you when defined conditions are met",
            "Azure Advisor provides cost, security, and reliability recommendations",
          ],
          commonMistakes: [
            "Confusing Azure Monitor with Azure Service Health and Azure Advisor",
            "Mixing up metrics (numerical time-series) with logs (text/event data)",
            "Assuming Azure Monitor only tracks virtual machines",
            "Believing Application Insights is completely separate from Azure Monitor",
            "Forgetting alert rules can trigger Action Groups for notifications",
          ],
          examTraps: [
            "Log Analytics workspace vs metrics namespace data sources",
            "Application Insights for app performance vs VM insights for infrastructure",
            "Activity Log for control-plane operations vs diagnostic logs for resources",
            "Azure Service Health for platform outages vs Monitor for your resources",
            "Alert severity and action group notification channel scenarios",
          ],
          quiz: [
            {
              id: "azure-monitor-q1",
              prompt: "What types of telemetry does Azure Monitor collect?",
              choices: [
                { id: "a", text: "Only billing invoices" },
                { id: "b", text: "Metrics, logs, and distributed traces" },
                { id: "c", text: "Only physical server temperatures" },
                { id: "d", text: "User password hashes" },
              ],
              correctChoiceId: "b",
              explanation:
                "Azure Monitor gathers metrics (numeric data), logs (text records), and traces for comprehensive observability.",
            },
            {
              id: "azure-monitor-q2",
              prompt: "Which language is used to query logs in Log Analytics?",
              choices: [
                { id: "a", text: "SQL only" },
                { id: "b", text: "Kusto Query Language (KQL)" },
                { id: "c", text: "Python exclusively" },
                { id: "d", text: "HTML" },
              ],
              correctChoiceId: "b",
              explanation:
                "KQL (Kusto Query Language) is the query language for Log Analytics workspaces in Azure Monitor.",
            },
            {
              id: "azure-monitor-q3",
              prompt: "What is Application Insights used for?",
              choices: [
                { id: "a", text: "Managing DNS records" },
                { id: "b", text: "Monitoring live web application performance and usage" },
                { id: "c", text: "Creating virtual networks" },
                { id: "d", text: "Assigning RBAC roles" },
              ],
              correctChoiceId: "b",
              explanation:
                "Application Insights is an APM (Application Performance Management) tool for monitoring web apps, APIs, and services.",
            },
            {
              id: "azure-monitor-q4",
              prompt: "What triggers an Azure Monitor alert?",
              choices: [
                { id: "a", text: "Only manual button clicks" },
                { id: "b", text: "Defined conditions like metric thresholds or log query results" },
                { id: "c", text: "Every resource creation automatically" },
                { id: "d", text: "Only during Azure maintenance windows" },
              ],
              correctChoiceId: "b",
              explanation:
                "Alerts fire when conditions you define are met—metric thresholds, log searches, activity log events, etc.",
            },
            {
              id: "azure-monitor-q5",
              prompt: "What does Azure Advisor provide?",
              choices: [
                { id: "a", text: "Free virtual machines" },
                { id: "b", text: "Personalized best-practice recommendations" },
                { id: "c", text: "Unlimited storage" },
                { id: "d", text: "Legal contract review" },
              ],
              correctChoiceId: "b",
              explanation:
                "Azure Advisor analyzes your resources and recommends improvements for cost, security, reliability, and performance.",
            },
          ],
          flashcards: [
            {
              id: "azure-monitor-f1",
              front: "Azure Monitor data types?",
              back: "Metrics (numeric), logs (text events), and distributed traces",
            },
            {
              id: "azure-monitor-f2",
              front: "What is KQL?",
              back: "Kusto Query Language—used to query Log Analytics data",
            },
            {
              id: "azure-monitor-f3",
              front: "What is Application Insights?",
              back: "APM tool for monitoring live web application performance, failures, and usage",
            },
            {
              id: "azure-monitor-f4",
              front: "Metrics vs Logs?",
              back: "Metrics = numerical time-series; Logs = textual event records queried with KQL",
            },
            {
              id: "azure-monitor-f5",
              front: "Application Insights tracks?",
              back: "Web app performance: requests, failures, dependencies, user sessions",
            },
            {
              id: "azure-monitor-f6",
              front: "Activity Log records?",
              back: "Control-plane operations: create, update, delete resource actions",
            },
          ],
          objectives: [
            "AZ-900-4.1",
            "AZ-900-4.2",
          ],
          practiceType: ["reading", "quiz", "flashcard"],
          questionBank: [
            {
              id: "azure-monitor-bq1",
              prompt: "Log Analytics queries use:",
              choices: [
                { id: "a", text: "Kusto Query Language (KQL)" },
                { id: "b", text: "SQL only" },
                { id: "c", text: "HTML" },
                { id: "d", text: "No query language" }
              ],
              correctChoiceId: "a",
              explanation:
                "KQL is the query language for Log Analytics workspaces.",
            },
            {
              id: "azure-monitor-bq2",
              prompt: "Azure Service Health provides:",
              choices: [
                { id: "a", text: "Platform incidents and planned maintenance alerts" },
                { id: "b", text: "VM disk encryption" },
                { id: "c", text: "User password resets" },
                { id: "d", text: "DNS registration" }
              ],
              correctChoiceId: "a",
              explanation:
                "Service Health informs you about Azure-wide events affecting your services.",
            },
            {
              id: "azure-monitor-bq3",
              prompt: "Diagnostic settings on a resource:",
              choices: [
                { id: "a", text: "Route platform and guest logs/metrics to destinations" },
                { id: "b", text: "Delete the resource" },
                { id: "c", text: "Replace RBAC" },
                { id: "d", text: "Disable networking" }
              ],
              correctChoiceId: "a",
              explanation:
                "Diagnostic settings send resource logs to Log Analytics, Storage, etc.",
            },
            {
              id: "azure-monitor-bq4",
              prompt: "Alert rules can trigger on:",
              choices: [
                { id: "a", text: "Metric thresholds or log query results" },
                { id: "b", text: "Only manual clicks" },
                { id: "c", text: "Physical power outages only" },
                { id: "d", text: "License expiration only" }
              ],
              correctChoiceId: "a",
              explanation:
                "Alerts automate notification when conditions are met.",
            },
            {
              id: "azure-monitor-bq5",
              prompt: "Application Insights is best for:",
              choices: [
                { id: "a", text: "Monitoring web application performance and usage" },
                { id: "b", text: "Blob lifecycle only" },
                { id: "c", text: "Domain registration" },
                { id: "d", text: "Creating VMs only" }
              ],
              correctChoiceId: "a",
              explanation:
                "App Insights provides APM for applications.",
            },
            {
              id: "azure-monitor-bq6",
              prompt: "Azure Monitor dashboards:",
              choices: [
                { id: "a", text: "Visualize metrics and logs in customizable views" },
                { id: "b", text: "Replace the portal entirely" },
                { id: "c", text: "Are not supported" },
                { id: "d", text: "Only show billing" }
              ],
              correctChoiceId: "a",
              explanation:
                "Dashboards combine charts and queries for operational visibility.",
            }
          ],
        },
        {
          id: "subscriptions",
          name: "Subscriptions",
          lesson: {
            title: "Azure Subscriptions and Management Hierarchy",
            content: `An Azure subscription is a logical unit of Azure account that links to an Azure account and billing. Every Azure resource belongs to exactly one subscription. Subscriptions serve as a boundary for billing, access control, and resource limits (quotas).

The Azure management hierarchy flows from Management Groups at the top, then Subscriptions, Resource Groups, and finally Resources. Management groups organize multiple subscriptions for enterprise-scale governance—applying policies and RBAC across many subscriptions at once.

You might use separate subscriptions for production vs. development, different departments, or regulatory isolation. Each subscription has its own billing report and spending limits. Azure Free Account includes limited free services for 12 months plus always-free services.

Subscription limits include maximum resources per region and per subscription. Request quota increases through Azure support. Subscription filters in the portal help navigate large environments. Transferring subscriptions between Azure AD tenants is possible but requires planning for identity and access impacts.

An Azure subscription is a logical unit of billing and access control. Each subscription has trust relationship with an Entra ID tenant. Accounts (Microsoft accounts or work/school accounts) authenticate; subscriptions contain resource groups and resources.

Multiple subscriptions isolate environments (dev/test/prod) or departments for billing and policy boundaries. Subscription limits (quotas) cap resources per region—request increases via support if needed.

Azure Landing Zones and Enterprise Scale architecture recommend multiple subscriptions under management groups for governance at scale. Free Account subscription converts to Pay-As-You-Go after credits expire—monitor spending with budgets and alerts.`,
          },
          keyFacts: [
            "A subscription is a billing and access boundary for Azure resources",
            "Every Azure resource belongs to exactly one subscription",
            "Management groups organize subscriptions for enterprise governance",
            "Hierarchy: Management Groups → Subscriptions → Resource Groups → Resources",
            "Separate subscriptions can isolate production, dev, or departmental workloads",
            "Subscriptions have resource quotas that can be increased via support requests",
          ],
          commonMistakes: [
            "Confusing subscriptions with resource groups and management groups",
            "Assuming one subscription equals one Azure AD tenant",
            "Mixing up subscription billing boundary with RBAC scope hierarchy",
            "Believing resources cannot move between subscriptions",
            "Forgetting management groups organize subscriptions, not individual resources",
          ],
          examTraps: [
            "Subscription as billing and access boundary vs resource group as logical container",
            "Management group hierarchy above subscriptions for policy inheritance",
            "Multiple subscriptions under one tenant for departmental billing",
            "Subscription spending limit vs Azure Budget alerts",
            "Transferring subscription ownership vs moving resources",
          ],
          quiz: [
            {
              id: "subscriptions-q1",
              prompt: "What is an Azure subscription primarily used for?",
              choices: [
                { id: "a", text: "Storing DNS records only" },
                { id: "b", text: "Billing boundary and access scope for Azure resources" },
                { id: "c", text: "Running Linux kernel updates" },
                { id: "d", text: "Replacing resource groups" },
              ],
              correctChoiceId: "b",
              explanation:
                "Subscriptions link to billing accounts and define the scope for RBAC, policies, and resource quotas.",
            },
            {
              id: "subscriptions-q2",
              prompt: "What is the correct Azure management hierarchy (top to bottom)?",
              choices: [
                { id: "a", text: "Resources → Subscriptions → Management Groups" },
                { id: "b", text: "Management Groups → Subscriptions → Resource Groups → Resources" },
                { id: "c", text: "Resource Groups → Management Groups → Subscriptions" },
                { id: "d", text: "Subscriptions → Resources only" },
              ],
              correctChoiceId: "b",
              explanation:
                "The hierarchy flows: Management Groups (optional top level) → Subscriptions → Resource Groups → Resources.",
            },
            {
              id: "subscriptions-q3",
              prompt: "Why might an organization use multiple subscriptions?",
              choices: [
                { id: "a", text: "Azure requires exactly 100 subscriptions" },
                { id: "b", text: "To separate environments, departments, or billing" },
                { id: "c", text: "To avoid using resource groups" },
                { id: "d", text: "Subscriptions are free unlimited storage" },
              ],
              correctChoiceId: "b",
              explanation:
                "Multiple subscriptions isolate production/dev environments, departmental billing, or regulatory boundaries.",
            },
            {
              id: "subscriptions-q4",
              prompt: "What are management groups used for?",
              choices: [
                { id: "a", text: "Managing individual VM CPU settings" },
                { id: "b", text: "Organizing subscriptions and applying governance at scale" },
                { id: "c", text: "Creating blob storage containers" },
                { id: "d", text: "Configuring NSG rules" },
              ],
              correctChoiceId: "b",
              explanation:
                "Management groups organize subscriptions hierarchically, enabling policy and RBAC assignment across many subscriptions.",
            },
            {
              id: "subscriptions-q5",
              prompt: "How many subscriptions can an Azure resource belong to?",
              choices: [
                { id: "a", text: "Zero" },
                { id: "b", text: "Exactly one" },
                { id: "c", text: "Up to five" },
                { id: "d", text: "Unlimited" },
              ],
              correctChoiceId: "b",
              explanation:
                "Every Azure resource belongs to exactly one subscription—it cannot span multiple subscriptions.",
            },
          ],
          flashcards: [
            {
              id: "subscriptions-f1",
              front: "Azure management hierarchy?",
              back: "Management Groups → Subscriptions → Resource Groups → Resources",
            },
            {
              id: "subscriptions-f2",
              front: "What is a subscription?",
              back: "Billing and access boundary—every resource belongs to exactly one subscription",
            },
            {
              id: "subscriptions-f3",
              front: "Why use multiple subscriptions?",
              back: "Isolate environments (prod/dev), departments, or billing boundaries",
            },
            {
              id: "subscriptions-f4",
              front: "Subscription purpose?",
              back: "Billing boundary and access scope for Azure resources",
            },
            {
              id: "subscriptions-f5",
              front: "Multiple subscriptions used for?",
              back: "Environment isolation, departmental billing, quota separation",
            },
          ],
          objectives: [
            "AZ-900-3.6",
            "AZ-900-3.7",
          ],
          practiceType: ["reading", "quiz", "flashcard"],
          questionBank: [
            {
              id: "subscriptions-bq1",
              prompt: "Each Azure subscription is associated with:",
              choices: [
                { id: "a", text: "One Entra ID tenant" },
                { id: "b", text: "Multiple unrelated tenants" },
                { id: "c", text: "No identity system" },
                { id: "d", text: "Only on-premises AD" }
              ],
              correctChoiceId: "a",
              explanation:
                "Subscriptions trust a single Entra ID tenant for authentication.",
            },
            {
              id: "subscriptions-bq2",
              prompt: "Subscription quotas are:",
              choices: [
                { id: "a", text: "Soft limits on resource counts per region" },
                { id: "b", text: "Unlimited always" },
                { id: "c", text: "Only for free accounts" },
                { id: "d", text: "Related to DNS only" }
              ],
              correctChoiceId: "a",
              explanation:
                "Quotas limit resources like vCPU counts; increases can be requested.",
            },
            {
              id: "subscriptions-bq3",
              prompt: "Billing at subscription level means:",
              choices: [
                { id: "a", text: "All resource costs roll up to the subscription invoice" },
                { id: "b", text: "Resources are free" },
                { id: "c", text: "No cost tracking" },
                { id: "d", text: "Only storage is billed" }
              ],
              correctChoiceId: "a",
              explanation:
                "The subscription is the primary billing unit for Azure usage.",
            },
            {
              id: "subscriptions-bq4",
              prompt: "Transferring a subscription between tenants:",
              choices: [
                { id: "a", text: "Is possible with planning (affects RBAC and identities)" },
                { id: "b", text: "Is impossible" },
                { id: "c", text: "Deletes all data automatically" },
                { id: "d", text: "Requires no authentication" }
              ],
              correctChoiceId: "a",
              explanation:
                "Subscription transfer between tenants requires careful identity and access planning.",
            },
            {
              id: "subscriptions-bq5",
              prompt: "Dev/Test subscriptions often:",
              choices: [
                { id: "a", text: "Isolate non-production workloads and costs" },
                { id: "b", text: "Replace production entirely" },
                { id: "c", text: "Have no resource groups" },
                { id: "d", text: "Disable monitoring" }
              ],
              correctChoiceId: "a",
              explanation:
                "Separate subscriptions isolate dev/test from production billing and policies.",
            },
            {
              id: "subscriptions-bq6",
              prompt: "Account Administrator on subscription can:",
              choices: [
                { id: "a", text: "Manage billing and subscription ownership" },
                { id: "b", text: "Only read metrics" },
                { id: "c", text: "Create Entra ID tenants freely" },
                { id: "d", text: "Disable all security" }
              ],
              correctChoiceId: "a",
              explanation:
                "Account Admin manages billing relationship with Microsoft.",
            }
          ],
        },
        {
          id: "pricing",
          name: "Pricing",
          lesson: {
            title: "Azure Pricing and Cost Management",
            content: `Azure uses a consumption-based pricing model—you pay for what you use, measured in seconds, hours, transactions, or gigabytes. There are no upfront costs for most services. The Azure Pricing Calculator estimates costs before deployment; the Cost Management portal tracks actual spending.

Common cost factors include compute (VM size and runtime hours), storage (capacity, redundancy tier, transactions), networking (data transfer out, load balancers), and service-specific meters. Data transfer into Azure is generally free; egress (outbound) data incurs charges.

Cost optimization strategies include right-sizing VMs, using reserved instances or savings plans for predictable workloads (up to 72% savings), choosing appropriate storage tiers, shutting down dev/test resources when unused, and using Azure Hybrid Benefit for existing Windows Server and SQL licenses.

The Azure free account provides limited free services. Budgets and alerts in Cost Management notify you when spending exceeds thresholds. Tags enable cost allocation by department or project. Total Cost of Ownership (TCO) Calculator compares on-premises costs to Azure for migration planning.

Azure Pricing Calculator (azure.microsoft.com/pricing/calculator) estimates monthly costs before deployment. Total Cost of Ownership (TCO) Calculator compares on-premises vs Azure costs over time.

Cost Management + Billing provides budgets, cost analysis, and alerts when spending exceeds thresholds. Tags enable chargeback/showback by department or project.

Reserved capacity, Azure Hybrid Benefit, and spot VMs are top cost optimization strategies. Free services include certain amounts of bandwidth, transactions, and compute hours monthly. Always review the pricing page for your region—prices vary geographically.`,
          },
          keyFacts: [
            "Azure uses pay-as-you-go consumption-based pricing",
            "Azure Pricing Calculator estimates costs before deployment",
            "Reserved instances and savings plans reduce costs for predictable workloads",
            "Inbound data transfer is generally free; outbound egress is charged",
            "Azure Hybrid Benefit applies existing Windows/SQL licenses for savings",
            "Cost Management budgets and alerts help control spending",
          ],
          commonMistakes: [
            "Confusing Azure Pricing Calculator with Cost Management actual spend tracking",
            "Assuming Reserved VM Instances and Azure Hybrid Benefit stack without conditions",
            "Mixing up pay-as-you-go with spot VM pricing and eviction policies",
            "Believing all Azure services have identical billing granularity",
            "Forgetting deallocated VMs stop compute charges but not disk/storage charges",
          ],
          examTraps: [
            "TCO Calculator for migration analysis vs Pricing Calculator for estimates",
            "Reserved Instance term and payment options cost comparison",
            "Spot VM eviction vs low-priority batch workload scenarios",
            "Azure Hybrid Benefit for Windows/SQL license cost reduction",
            "Free account credit vs always-free service tier distinctions",
          ],
          quiz: [
            {
              id: "pricing-q1",
              prompt: "Which tool helps estimate Azure costs before deploying resources?",
              choices: [
                { id: "a", text: "Azure Pricing Calculator" },
                { id: "b", text: "Network Security Group" },
                { id: "c", text: "Azure DNS" },
                { id: "d", text: "Entra Connect" },
              ],
              correctChoiceId: "a",
              explanation:
                "The Azure Pricing Calculator lets you estimate monthly costs based on selected services, regions, and usage patterns.",
            },
            {
              id: "pricing-q2",
              prompt: "How can you reduce costs for predictable, long-running workloads?",
              choices: [
                { id: "a", text: "Use only the largest VM sizes" },
                { id: "b", text: "Purchase reserved instances or savings plans" },
                { id: "c", text: "Disable all monitoring" },
                { id: "d", text: "Store all data in Archive tier for active databases" },
              ],
              correctChoiceId: "b",
              explanation:
                "Reserved instances and savings plans offer significant discounts (up to ~72%) for committed 1- or 3-year usage.",
            },
            {
              id: "pricing-q3",
              prompt: "Which data transfer direction typically incurs charges in Azure?",
              choices: [
                { id: "a", text: "Inbound (into Azure)" },
                { id: "b", text: "Outbound egress (out of Azure)" },
                { id: "c", text: "Neither direction ever has charges" },
                { id: "d", text: "Only between two VMs in the same VNet" },
              ],
              correctChoiceId: "b",
              explanation:
                "Inbound data transfer is generally free. Outbound (egress) data transfer to the Internet or other regions is charged.",
            },
            {
              id: "pricing-q4",
              prompt: "What is Azure Hybrid Benefit?",
              choices: [
                { id: "a", text: "A free tier for all Azure services" },
                { id: "b", text: "Using existing Windows Server/SQL licenses to reduce Azure VM costs" },
                { id: "c", text: "A hybrid cloud networking protocol" },
                { id: "d", text: "A type of storage redundancy" },
              ],
              correctChoiceId: "b",
              explanation:
                "Azure Hybrid Benefit lets you apply existing on-premises Windows Server and SQL Server licenses to Azure VMs for cost savings.",
            },
            {
              id: "pricing-q5",
              prompt: "What helps track and control actual Azure spending?",
              choices: [
                { id: "a", text: "Azure Cost Management with budgets and alerts" },
                { id: "b", text: "Deleting all resource groups weekly" },
                { id: "c", text: "Disabling encryption" },
                { id: "d", text: "Using only one VM size" },
              ],
              correctChoiceId: "a",
              explanation:
                "Cost Management provides spending analysis, budgets, alerts, and recommendations to control and optimize Azure costs.",
            },
          ],
          flashcards: [
            {
              id: "pricing-f1",
              front: "Azure pricing model?",
              back: "Pay-as-you-go consumption-based—you pay for what you use",
            },
            {
              id: "pricing-f2",
              front: "How to save on predictable workloads?",
              back: "Reserved instances or savings plans (1- or 3-year commitments)",
            },
            {
              id: "pricing-f3",
              front: "What is Azure Hybrid Benefit?",
              back: "Apply existing Windows Server/SQL licenses to reduce Azure VM licensing costs",
            },
            {
              id: "pricing-f4",
              front: "Azure Pricing Calculator?",
              back: "Web tool to estimate monthly Azure service costs before deployment",
            },
            {
              id: "pricing-f5",
              front: "TCO Calculator purpose?",
              back: "Compare on-premises infrastructure costs vs moving to Azure",
            },
            {
              id: "pricing-f6",
              front: "Cost Management budgets?",
              back: "Set spending thresholds with alerts when exceeded",
            },
          ],
          objectives: [
            "AZ-900-3.8",
            "AZ-900-3.9",
          ],
          practiceType: ["reading", "quiz", "flashcard"],
          questionBank: [
            {
              id: "pricing-bq1",
              prompt: "Reserved VM instances require:",
              choices: [
                { id: "a", text: "1 or 3 year commitment for discount" },
                { id: "b", text: "Hourly billing only" },
                { id: "c", text: "No VM usage" },
                { id: "d", text: "Archive storage tier" }
              ],
              correctChoiceId: "a",
              explanation:
                "RIs provide discounts for upfront term commitments.",
            },
            {
              id: "pricing-bq2",
              prompt: "Egress charges apply to:",
              choices: [
                { id: "a", text: "Data leaving Azure to the Internet" },
                { id: "b", text: "All inbound traffic" },
                { id: "c", text: "Internal VNet traffic only" },
                { id: "d", text: "RBAC assignments" }
              ],
              correctChoiceId: "a",
              explanation:
                "Outbound data transfer (egress) to Internet is typically billed.",
            },
            {
              id: "pricing-bq3",
              prompt: "Azure Cost Management helps you:",
              choices: [
                { id: "a", text: "Analyze spending, set budgets, and optimize costs" },
                { id: "b", text: "Create VMs only" },
                { id: "c", text: "Manage DNS records" },
                { id: "d", text: "Disable logging" }
              ],
              correctChoiceId: "a",
              explanation:
                "Cost Management provides visibility and control over Azure spending.",
            },
            {
              id: "pricing-bq4",
              prompt: "Spot VMs offer:",
              choices: [
                { id: "a", text: "Deep discounts with possible eviction" },
                { id: "b", text: "Guaranteed 99.99% SLA" },
                { id: "c", text: "Free unlimited compute" },
                { id: "d", text: "No eviction ever" }
              ],
              correctChoiceId: "a",
              explanation:
                "Spot uses spare capacity cheaply but VMs can be evicted.",
            },
            {
              id: "pricing-bq5",
              prompt: "Tags help with cost management by:",
              choices: [
                { id: "a", text: "Allocating costs to departments/projects in reports" },
                { id: "b", text: "Encrypting storage automatically" },
                { id: "c", text: "Replacing RBAC" },
                { id: "d", text: "Disabling billing" }
              ],
              correctChoiceId: "a",
              explanation:
                "Tags enable filtering and grouping costs in Cost Management reports.",
            },
            {
              id: "pricing-bq6",
              prompt: "Pay-as-you-go pricing means:",
              choices: [
                { id: "a", text: "Pay for consumed resources with no long-term commitment" },
                { id: "b", text: "Fixed monthly fee regardless of usage" },
                { id: "c", text: "Free unlimited resources" },
                { id: "d", text: "On-premises licensing only" }
              ],
              correctChoiceId: "a",
              explanation:
                "PAYG bills per second/minute/GB based on actual consumption.",
            }
          ],
        },
        {
          id: "governance",
          name: "Governance",
          lesson: {
            title: "Azure Governance with Policy and Blueprints",
            content: `Azure governance ensures your organization maintains control over compliance, standards, and cost across subscriptions. Key tools include Azure Policy, resource locks, management groups, and Azure Blueprints (replaced by Template Specs and Deployment Stacks in newer workflows).

Azure Policy enforces organizational standards and evaluates resource compliance at scale. Policy definitions describe rules (e.g., "allowed VM sizes" or "require tags"). Initiatives group multiple policies. Policy effects include Deny (block non-compliant creation), Audit (log non-compliance), and DeployIfNotExists (auto-remediate).

Resource locks prevent accidental deletion or modification. CanNotDelete locks block deletion; ReadOnly locks prevent any changes. Locks apply at subscription, resource group, or resource scope and override RBAC permissions.

Management groups apply policies and RBAC across many subscriptions hierarchically. Tags support cost tracking and policy conditions. Microsoft Defender for Cloud (formerly Security Center) provides security posture management and recommendations. Together, these tools create guardrails so teams innovate within organizational boundaries.

Azure Policy evaluates resources against rules (policy definitions). Non-compliant resources can be denied at creation or flagged for remediation. Initiative definitions bundle multiple policies for common compliance frameworks.

Blueprints (now largely replaced by Deployment Stacks and template specs in modern workflows) orchestrated policy, RBAC, and templates. Resource locks prevent deletion or modification independent of RBAC.

Management groups organize subscriptions and inherit policies downward. Example: require 'Environment' tag on all resources, restrict allowed VM SKUs, or enforce encryption settings. Policy compliance dashboard shows non-compliant resources across the estate.`,
          },
          keyFacts: [
            "Azure Policy enforces organizational standards and compliance rules",
            "Policy effects include Deny, Audit, and DeployIfNotExists (remediation)",
            "Resource locks prevent accidental deletion (CanNotDelete) or changes (ReadOnly)",
            "Management groups apply governance across multiple subscriptions",
            "Initiatives bundle multiple policy definitions together",
            "Defender for Cloud provides security posture management",
          ],
          commonMistakes: [
            "Confusing Azure Policy (enforce rules) with RBAC (grant access)",
            "Mixing up management groups with resource groups",
            "Assuming Azure Blueprints and ARM templates are identical tools",
            "Believing governance only applies at the subscription level",
            "Forgetting policy initiatives bundle multiple policy definitions",
          ],
          examTraps: [
            "Policy effect Deny vs Audit vs DeployIfNotExists scenarios",
            "Management group policy inheritance cascading to subscriptions",
            "RBAC grants access; Policy restricts what can be created or configured",
            "Blueprint combining policy, RBAC, and ARM templates for environment setup",
            "Compliance dashboard showing non-compliant resources from policy evaluation",
          ],
          quiz: [
            {
              id: "governance-q1",
              prompt: "What is the primary purpose of Azure Policy?",
              choices: [
                { id: "a", text: "Monitor VM CPU usage" },
                { id: "b", text: "Enforce organizational standards and evaluate resource compliance" },
                { id: "c", text: "Provide email services" },
                { id: "d", text: "Replace Microsoft Entra ID" },
              ],
              correctChoiceId: "b",
              explanation:
                "Azure Policy defines and enforces rules for resource properties, tags, locations, and configurations across your environment.",
            },
            {
              id: "governance-q2",
              prompt: "What does a CanNotDelete resource lock do?",
              choices: [
                { id: "a", text: "Prevents anyone from viewing the resource" },
                { id: "b", text: "Prevents deletion of the resource or its container" },
                { id: "c", text: "Automatically deletes the resource after 30 days" },
                { id: "d", text: "Encrypts all data on the resource" },
              ],
              correctChoiceId: "b",
              explanation:
                "CanNotDelete locks prevent deletion of a resource. Authorized users can still read and modify it.",
            },
            {
              id: "governance-q3",
              prompt: "Which Azure Policy effect blocks creation of non-compliant resources?",
              choices: [
                { id: "a", text: "Audit" },
                { id: "b", text: "Deny" },
                { id: "c", text: "Append" },
                { id: "d", text: "Disabled" },
              ],
              correctChoiceId: "b",
              explanation:
                "The Deny effect prevents creation or modification of resources that don't match policy rules.",
            },
            {
              id: "governance-q4",
              prompt: "What is a ReadOnly resource lock?",
              choices: [
                { id: "a", text: "Allows full deletion and modification" },
                { id: "b", text: "Prevents any changes or deletion of the resource" },
                { id: "c", text: "Only allows tag changes" },
                { id: "d", text: "Locks the resource to a specific Azure region" },
              ],
              correctChoiceId: "b",
              explanation:
                "ReadOnly locks prevent any modifications or deletion—users with access can only view the resource.",
            },
            {
              id: "governance-q5",
              prompt: "How do management groups support governance?",
              choices: [
                { id: "a", text: "By organizing subscriptions and applying policies/RBAC at scale" },
                { id: "b", text: "By replacing all resource groups" },
                { id: "c", text: "By providing free compute resources" },
                { id: "d", text: "By managing VM operating system patches" },
              ],
              correctChoiceId: "a",
              explanation:
                "Management groups create a hierarchy above subscriptions for applying Azure Policy and RBAC across the enterprise.",
            },
          ],
          flashcards: [
            {
              id: "governance-f1",
              front: "What is Azure Policy?",
              back: "Service that enforces organizational standards and evaluates resource compliance",
            },
            {
              id: "governance-f2",
              front: "CanNotDelete vs ReadOnly lock?",
              back: "CanNotDelete prevents deletion; ReadOnly prevents all changes and deletion",
            },
            {
              id: "governance-f3",
              front: "Azure Policy Deny effect?",
              back: "Blocks creation or modification of non-compliant resources",
            },
            {
              id: "governance-f4",
              front: "Azure Policy effect 'Deny'?",
              back: "Blocks creation of non-compliant resources",
            },
            {
              id: "governance-f5",
              front: "Initiative definition?",
              back: "Grouped set of policy definitions applied together",
            },
            {
              id: "governance-f6",
              front: "Management groups inherit?",
              back: "Policies and RBAC assigned at MG level flow to child subscriptions",
            },
          ],
          objectives: [
            "AZ-900-3.10",
            "AZ-900-3.11",
          ],
          practiceType: ["reading", "quiz", "flashcard"],
          questionBank: [
            {
              id: "governance-bq1",
              prompt: "Azure Policy is used to:",
              choices: [
                { id: "a", text: "Enforce organizational standards and compliance" },
                { id: "b", text: "Host virtual machines" },
                { id: "c", text: "Replace Entra ID" },
                { id: "d", text: "Manage DNS only" }
              ],
              correctChoiceId: "a",
              explanation:
                "Policy ensures resources meet organizational requirements automatically.",
            },
            {
              id: "governance-bq2",
              prompt: "CanNotDelete lock prevents:",
              choices: [
                { id: "a", text: "Deletion of a resource or resource group" },
                { id: "b", text: "All read access" },
                { id: "c", text: "Tagging" },
                { id: "d", text: "Monitoring" }
              ],
              correctChoiceId: "a",
              explanation:
                "CanNotDelete locks block deletion while allowing modifications.",
            },
            {
              id: "governance-bq3",
              prompt: "Policy remediation can:",
              choices: [
                { id: "a", text: "Automatically fix non-compliant resources (when configured)" },
                { id: "b", text: "Never be automated" },
                { id: "c", text: "Delete all subscriptions" },
                { id: "d", text: "Disable MFA" }
              ],
              correctChoiceId: "a",
              explanation:
                "DeployIfNotExists and modify effects can remediate drift.",
            },
            {
              id: "governance-bq4",
              prompt: "Management groups can contain:",
              choices: [
                { id: "a", text: "Other management groups and subscriptions" },
                { id: "b", text: "Only VMs" },
                { id: "c", text: "Only blob containers" },
                { id: "d", text: "Nothing" }
              ],
              correctChoiceId: "a",
              explanation:
                "Management groups form a hierarchy of subscriptions.",
            },
            {
              id: "governance-bq5",
              prompt: "Resource locks override:",
              choices: [
                { id: "a", text: "User permissions—even Owner must remove lock first" },
                { id: "b", text: "Nothing—RBAC always wins" },
                { id: "c", text: "Only Reader role" },
                { id: "d", text: "Azure Policy only" }
              ],
              correctChoiceId: "a",
              explanation:
                "Locks must be removed before protected resources can be deleted.",
            },
            {
              id: "governance-bq6",
              prompt: "Policy assignment scope can be:",
              choices: [
                { id: "a", text: "Management group, subscription, or resource group" },
                { id: "b", text: "Individual user only" },
                { id: "c", text: "Internet only" },
                { id: "d", text: "On-premises hardware" }
              ],
              correctChoiceId: "a",
              explanation:
                "Policies assign at MG, subscription, or RG scope.",
            }
          ],
        },
        {
          id: "compliance-basics",
          name: "Compliance Basics",
          lesson: {
            title: "Azure Compliance, Trust, and Shared Responsibility",
            content: `Microsoft Azure meets a broad set of international and industry-specific compliance standards including ISO 27001, SOC 1/2/3, HIPAA, GDPR, and many more. The Microsoft Trust Center and Service Trust Portal provide compliance documentation, audit reports, and implementation guidance.

The shared responsibility model defines security and compliance duties. Microsoft is responsible for security OF the cloud—physical datacenters, network, and host infrastructure. The customer is responsible for security IN the cloud—data classification, access management, OS patches on IaaS VMs, and application security.

Data residency options let you choose where data is stored geographically. Azure encrypts data at rest and in transit by default. Customer-managed keys via Azure Key Vault give you control over encryption keys. Microsoft Purview helps govern and protect data across hybrid environments.

Privacy principles include data minimization, transparency, and user rights under regulations like GDPR. Compliance Manager tracks your compliance posture against standards. Understanding shared responsibility is essential for the AZ-900 exam and real-world Azure adoption.

Microsoft maintains extensive compliance certifications: ISO 27001, SOC 1/2/3, HIPAA, FedRAMP, GDPR support, and many regional frameworks. The Trust Center (microsoft.com/trust-center) documents these offerings.

Customer responsibilities in the shared model include: classifying data, controlling access, securing endpoints, and managing guest OS on IaaS. Microsoft responsibilities include physical datacenter security, hypervisor, and network infrastructure.

Azure Defender (Microsoft Defender for Cloud) provides security posture management and threat protection recommendations. Encryption at rest uses Microsoft-managed or customer-managed keys (CMK) in Key Vault. Data residency choices depend on region selection and service capabilities.`,
          },
          keyFacts: [
            "Azure complies with standards like ISO 27001, SOC, HIPAA, and GDPR",
            "Shared responsibility: Microsoft secures the cloud; customers secure their data and access",
            "IaaS customers manage OS patches; PaaS/SaaS shift more responsibility to Microsoft",
            "Data is encrypted at rest and in transit by default",
            "Azure Key Vault manages secrets, keys, and certificates",
            "Trust Center and Service Trust Portal provide compliance documentation",
          ],
          guidedExample: {
            title: "Verify GDPR Data Residency with Azure Compliance Offerings",
            steps: [
              "Identify regulatory requirement: EU customer data must remain in EU Regions.",
              "Review Microsoft Trust Center and Service Trust Portal for Azure compliance certifications.",
              "Select EU Regions (e.g., West Europe, North Europe) for data storage and processing.",
              "Enable Azure Policy to deny resource deployment outside approved EU Regions.",
              "Document data processing agreements and customer consent in compliance records.",
              "Use Microsoft Privacy Dashboard and Azure compliance manager to track control status.",
            ],
          },
          commonMistakes: [
            "Assuming all Azure Regions meet all compliance certifications equally",
            "Confusing Azure compliance offerings with automatic customer compliance",
            "Believing shared responsibility means Microsoft handles all regulatory obligations",
            "Mixing up ISO 27001 certification scope with SOC 2 report availability",
            "Forgetting data residency requires explicit Region selection by the customer",
          ],
          examTraps: [
            "Microsoft Trust Center vs Service Trust Portal resource locations",
            "Customer responsibility for data classification under shared responsibility",
            "Azure Government vs public cloud for US government workloads",
            "GDPR data residency requiring EU Region deployment",
            "Compliance Manager tracking vs Azure Policy enforcement distinction",
          ],
          realWorldScenario: "A healthcare SaaS provider stores patient metadata in Azure. Legal requires HIPAA-aligned controls and US data residency. You review Azure compliance documentation, deploy only to US Regions, enable encryption at rest with customer-managed keys, assign RBAC least privilege, and export SOC 2 reports from the Service Trust Portal for the annual audit—while documenting your own HIPAA risk assessment as the customer's responsibility.",
          estimatedStudyMinutes: 20,
          difficulty: "easy",
          prerequisites: ["governance", "role-based-access-control"],
          quiz: [
            {
              id: "compliance-basics-q1",
              prompt: "In the shared responsibility model, who secures physical datacenters?",
              choices: [
                { id: "a", text: "The customer" },
                { id: "b", text: "Microsoft" },
                { id: "c", text: "Third-party auditors only" },
                { id: "d", text: "No one—datacenters are unprotected" },
              ],
              correctChoiceId: "b",
              explanation:
                "Microsoft is responsible for physical datacenter security, network infrastructure, and host-level protection.",
            },
            {
              id: "compliance-basics-q2",
              prompt: "For IaaS virtual machines, who is responsible for OS patching?",
              choices: [
                { id: "a", text: "Microsoft automatically patches all OS versions" },
                { id: "b", text: "The customer" },
                { id: "c", text: "Azure Policy exclusively" },
                { id: "d", text: "No patching is ever required" },
              ],
              correctChoiceId: "b",
              explanation:
                "With IaaS, the customer manages the operating system including patches, antivirus, and application security.",
            },
            {
              id: "compliance-basics-q3",
              prompt: "Where can you find Azure compliance documentation and audit reports?",
              choices: [
                { id: "a", text: "Microsoft Trust Center and Service Trust Portal" },
                { id: "b", text: "Only via phone support" },
                { id: "c", text: "Social media channels" },
                { id: "d", text: "VM extension marketplace" },
              ],
              correctChoiceId: "a",
              explanation:
                "The Trust Center and Service Trust Portal provide compliance offerings, documentation, and audit reports.",
            },
            {
              id: "compliance-basics-q4",
              prompt: "What is Azure Key Vault used for?",
              choices: [
                { id: "a", text: "Managing secrets, encryption keys, and certificates" },
                { id: "b", text: "Load balancing web traffic" },
                { id: "c", text: "Creating virtual networks" },
                { id: "d", text: "Hosting static websites" },
              ],
              correctChoiceId: "a",
              explanation:
                "Key Vault securely stores and manages secrets, encryption keys, and SSL/TLS certificates used by cloud applications.",
            },
            {
              id: "compliance-basics-q5",
              prompt: "Which statement about Azure data encryption is correct?",
              choices: [
                { id: "a", text: "Encryption must be manually enabled for all services" },
                { id: "b", text: "Data is encrypted at rest and in transit by default" },
                { id: "c", text: "Azure does not support encryption" },
                { id: "d", text: "Only Premium subscriptions include encryption" },
              ],
              correctChoiceId: "b",
              explanation:
                "Azure encrypts data at rest and in transit by default across services, with options for customer-managed keys.",
            },
          ],
          flashcards: [
            {
              id: "compliance-basics-f1",
              front: "Shared responsibility model?",
              back: "Microsoft secures the cloud infrastructure; customer secures data, access, and apps in the cloud",
            },
            {
              id: "compliance-basics-f2",
              front: "Who patches OS on IaaS VMs?",
              back: "The customer—Microsoft manages infrastructure below the hypervisor",
            },
            {
              id: "compliance-basics-f3",
              front: "What is Azure Key Vault?",
              back: "Service for securely storing secrets, encryption keys, and certificates",
            },
            {
              id: "compliance-basics-f4",
              front: "Trust Center provides?",
              back: "Microsoft compliance documentation, certifications, and audit reports",
            },
            {
              id: "compliance-basics-f5",
              front: "Defender for Cloud?",
              back: "Security posture management and threat protection recommendations",
            },
            {
              id: "compliance-basics-f6",
              front: "CMK vs Microsoft-managed keys?",
              back: "CMK = customer controls keys in Key Vault; Microsoft-managed = platform handles keys",
            },
          ],
          objectives: [
            "AZ-900-3.12",
            "AZ-900-3.13",
          ],
          practiceType: ["reading", "quiz", "flashcard", "case-study"],
          questionBank: [
            {
              id: "compliance-basics-bq1",
              prompt: "GDPR compliance in Azure involves:",
              choices: [
                { id: "a", text: "Shared responsibility—Microsoft provides tools, customer configures properly" },
                { id: "b", text: "Microsoft handles everything automatically" },
                { id: "c", text: "Azure is exempt from GDPR" },
                { id: "d", text: "Only applies to free tier" }
              ],
              correctChoiceId: "a",
              explanation:
                "Compliance is shared—Microsoft certifies platform; customer must use services correctly.",
            },
            {
              id: "compliance-basics-bq2",
              prompt: "Microsoft manages in IaaS shared model:",
              choices: [
                { id: "a", text: "Physical hardware, network, and hypervisor" },
                { id: "b", text: "Guest OS and application code" },
                { id: "c", text: "All data classification" },
                { id: "d", text: "User training" }
              ],
              correctChoiceId: "a",
              explanation:
                "For IaaS, Microsoft secures infrastructure up to the hypervisor; customer secures OS and apps.",
            },
            {
              id: "compliance-basics-bq3",
              prompt: "Service Trust Portal provides:",
              choices: [
                { id: "a", text: "Audit reports and compliance documents" },
                { id: "b", text: "VM templates only" },
                { id: "c", text: "Free compute" },
                { id: "d", text: "Social media links" }
              ],
              correctChoiceId: "a",
              explanation:
                "STP gives access to third-party audit reports on Azure compliance.",
            },
            {
              id: "compliance-basics-bq4",
              prompt: "Data encryption in transit uses:",
              choices: [
                { id: "a", text: "TLS/HTTPS for most Azure services" },
                { id: "b", text: "No encryption" },
                { id: "c", text: "Plaintext only" },
                { id: "d", text: "FTP exclusively" }
              ],
              correctChoiceId: "a",
              explanation:
                "Azure encrypts data in transit using industry-standard TLS.",
            },
            {
              id: "compliance-basics-bq5",
              prompt: "Customer-managed keys stored in:",
              choices: [
                { id: "a", text: "Azure Key Vault" },
                { id: "b", text: "Public blob container" },
                { id: "c", text: "DNS TXT records" },
                { id: "d", text: "Activity Log" }
              ],
              correctChoiceId: "a",
              explanation:
                "Key Vault securely stores customer-managed encryption keys.",
            },
            {
              id: "compliance-basics-bq6",
              prompt: "Azure Policy helps compliance by:",
              choices: [
                { id: "a", text: "Enforcing required configurations (e.g., encryption enabled)" },
                { id: "b", text: "Eliminating all security tasks" },
                { id: "c", text: "Replacing audits entirely" },
                { id: "d", text: "Disabling logging" }
              ],
              correctChoiceId: "a",
              explanation:
                "Policy automates enforcement of compliance-related settings.",
            },
            {
              id: "compliance-basics-bq7",
              prompt: "Where do you find Azure compliance certification documentation?",
              choices: [
                { id: "a", text: "Microsoft Trust Center and Service Trust Portal" },
                { id: "b", text: "Azure Marketplace only" },
                { id: "c", text: "VM extensions blade" },
                { id: "d", text: "Activity Log" },
              ],
              correctChoiceId: "a",
              explanation:
                "Microsoft publishes compliance certifications and audit reports via Trust Center and Service Trust Portal.",
            },
            {
              id: "compliance-basics-bq8",
              prompt: "Under shared responsibility, who is responsible for data classification?",
              choices: [
                { id: "a", text: "The customer" },
                { id: "b", text: "Microsoft only" },
                { id: "c", text: "Third-party auditors only" },
                { id: "d", text: "Automatic Azure classification" },
              ],
              correctChoiceId: "a",
              explanation:
                "Customers classify their own data and configure appropriate controls; Microsoft secures the underlying cloud infrastructure.",
            }
          ],
          assignments: [
            {
              id: "azure-gdpr-case-1",
              title: "Case Study: GDPR and Shared Responsibility in Azure",
              type: "case-study",
              instructions: `Scenario: A EU healthcare startup stores patient records in Azure:
- App runs on Azure VMs (IaaS) with a public IP and RDP open to 0.0.0.0/0
- Data in Azure SQL Database (PaaS) with Microsoft-managed encryption keys
- Backups retained 7 days; no geo-redundancy configured
- No Azure Policy or Defender for Cloud recommendations reviewed

1. For each item above, label the responsibility: Microsoft, customer, or shared.
2. Identify two GDPR-relevant risks in this design.
3. Propose one Azure service or control for each risk (Key Vault CMK, Policy, Private Link, Defender, etc.).
4. Explain what documentation you would pull from the Service Trust Portal for an auditor.
5. Write one sentence on why compliance is never "automatic" in the cloud.

Document your answers — no Azure subscription required.`,
              estimatedMinutes: 25,
              completionCriteria: [
                "Correctly labeled Microsoft vs customer responsibilities",
                "Identified two GDPR-relevant risks",
                "Proposed specific Azure control for each risk",
                "Named Service Trust Portal documentation for auditors",
                "Explained why cloud compliance requires customer action",
              ],
              relatedTopicIds: ["compliance-basics"],
              order: 1,
            },
          ],
        },
      ],
    },
  ],
};
