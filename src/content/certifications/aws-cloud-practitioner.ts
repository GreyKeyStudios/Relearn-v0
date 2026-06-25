import type { Certification } from "../types";

export const awsCloudPractitioner: Certification = {
  id: "aws-cloud-practitioner",
  name: "AWS Certified Cloud Practitioner",
  shortName: "AWS CP",
  vendor: "Amazon",
  overview:
    "The AWS Certified Cloud Practitioner (CLF-C02) validates foundational knowledge of AWS Cloud concepts, core services, security, architecture, pricing, and support. It is ideal for individuals in technical, managerial, sales, or financial roles who work with AWS.",
  examSummary: {
    questionCount: 65,
    durationMinutes: 90,
    passingScore: "700/1000",
    format: "Multiple choice and multiple response",
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
            title: "Introduction to Cloud Computing",
            content: `Cloud computing is the on-demand delivery of IT resources over the internet with pay-as-you-go pricing. Instead of buying and maintaining physical data centers and servers, you access technology services such as computing power, storage, and databases from a cloud provider like AWS.

The six advantages of cloud computing include trading capital expense for variable expense, benefiting from massive economies of scale, stopping guessing capacity, increasing speed and agility, spending less on running and maintaining data centers, and going global in minutes.

Cloud deployment models include public cloud (services offered over the internet to anyone), private cloud (dedicated infrastructure for a single organization), and hybrid cloud (combination of public and private). Multi-cloud refers to using more than one cloud provider.

Service models define who manages what. Infrastructure as a Service (IaaS) provides virtualized compute, storage, and networking—you manage the OS and applications. Platform as a Service (PaaS) adds managed runtime and middleware—you focus on code. Software as a Service (SaaS) delivers complete applications managed by the provider, such as email or CRM tools.

Reliability in the cloud is achieved through redundancy across Availability Zones and Regions, not through a single oversized server. Fault tolerance means a component failure does not take down the entire system. Scalability adds capacity; elasticity adds and removes capacity automatically.

For the CLF-C02 exam, map common services to models: EC2 is IaaS, Lambda is serverless (PaaS-like), and services like Amazon WorkMail are SaaS. Understanding who manages each layer helps you choose services and explain the shared responsibility model.

Migration strategies include rehost (lift-and-shift), replatform (lift-tinker-and-shift), refactor/re-architect, repurchase (move to SaaS), retire, and retain. Each trades speed, cost, and optimization differently.`,
          },
          keyFacts: [
            "Cloud computing delivers IT resources on-demand over the internet with pay-as-you-go pricing",
            "IaaS provides infrastructure; PaaS adds managed platforms; SaaS delivers complete applications",
            "Public cloud serves multiple customers; private cloud is dedicated to one organization",
            "Elasticity lets you scale resources up or down based on demand",
            "High availability means systems remain operational with minimal downtime",
            "Agility in the cloud means deploying resources in minutes instead of weeks",
          ],
          commonMistakes: [
            "Confusing elasticity (automatic scaling) with scalability (ability to grow)",
            "Mixing up IaaS, PaaS, and SaaS by who manages the OS or application",
            "Treating hybrid cloud and multi-cloud as identical deployment models",
            "Assuming pay-as-you-go eliminates all capacity planning forever",
            "Forgetting that private cloud can be on-premises or hosted by a provider",
          ],
          examTraps: [
            "Email or CRM tools labeled as SaaS when EC2 is offered as IaaS distractor",
            "Hybrid vs multi-cloud scenario questions with overlapping answer choices",
            "Migration strategy names—rehost vs replatform vs refactor",
            "Fault tolerance vs high availability vs disaster recovery distinctions",
            "Capital expense to variable expense benefit phrased as eliminating all costs",
          ],
          quiz: [
            {
              id: "cloud-concepts-q1",
              prompt: "Which cloud service model gives you the most control over the operating system and applications?",
              choices: [
                { id: "a", text: "SaaS" },
                { id: "b", text: "PaaS" },
                { id: "c", text: "IaaS" },
                { id: "d", text: "FaaS" },
              ],
              correctChoiceId: "c",
              explanation:
                "IaaS provides virtualized infrastructure where you manage the OS, middleware, and applications. The provider manages physical hardware and virtualization.",
            },
            {
              id: "cloud-concepts-q2",
              prompt: "What is a primary benefit of pay-as-you-go pricing in the cloud?",
              choices: [
                { id: "a", text: "Large upfront capital investment" },
                { id: "b", text: "Trading fixed costs for variable costs" },
                { id: "c", text: "Unlimited free resources" },
                { id: "d", text: "No need for capacity planning" },
              ],
              correctChoiceId: "b",
              explanation:
                "Pay-as-you-go converts capital expense into variable operating expense—you pay only for what you use instead of provisioning for peak capacity upfront.",
            },
            {
              id: "cloud-concepts-q3",
              prompt: "Which deployment model uses both on-premises infrastructure and public cloud services?",
              choices: [
                { id: "a", text: "Public cloud" },
                { id: "b", text: "Private cloud" },
                { id: "c", text: "Hybrid cloud" },
                { id: "d", text: "Community cloud" },
              ],
              correctChoiceId: "c",
              explanation:
                "Hybrid cloud combines on-premises (private) resources with public cloud services, allowing data and applications to move between environments.",
            },
            {
              id: "cloud-concepts-q4",
              prompt: "Which statement best describes elasticity in cloud computing?",
              choices: [
                { id: "a", text: "Resources are permanently fixed at purchase time" },
                { id: "b", text: "Ability to acquire and release resources based on demand" },
                { id: "c", text: "Data is encrypted at rest automatically" },
                { id: "d", text: "Applications run only in one geographic region" },
              ],
              correctChoiceId: "b",
              explanation:
                "Elasticity is the ability to dynamically scale resources up or down to match current demand, paying only for what you need.",
            },
            {
              id: "cloud-concepts-q5",
              prompt: "An email service like Gmail is an example of which cloud model?",
              choices: [
                { id: "a", text: "IaaS" },
                { id: "b", text: "PaaS" },
                { id: "c", text: "SaaS" },
                { id: "d", text: "DaaS" },
              ],
              correctChoiceId: "c",
              explanation:
                "SaaS delivers fully managed applications over the internet. Users access the software without managing infrastructure, platforms, or updates.",
            },
          ],
          flashcards: [
            {
              id: "cloud-concepts-f1",
              front: "What are the three cloud service models?",
              back: "IaaS (Infrastructure), PaaS (Platform), SaaS (Software)",
            },
            {
              id: "cloud-concepts-f2",
              front: "What is elasticity?",
              back: "The ability to scale resources up or down automatically based on demand",
            },
            {
              id: "cloud-concepts-f3",
              front: "Hybrid cloud definition?",
              back: "Combines on-premises private infrastructure with public cloud services",
            },
            {
              id: "cloud-concepts-f4",
              front: "Six advantages of cloud computing?",
              back: "Variable expense, economies of scale, stop guessing capacity, speed/agility, reduced data center ops, go global in minutes",
            },
            {
              id: "cloud-concepts-f5",
              front: "Multi-cloud vs hybrid?",
              back: "Multi-cloud uses multiple providers; hybrid combines on-premises with public cloud",
            },
            {
              id: "cloud-concepts-f6",
              front: "Scalability vs elasticity?",
              back: "Scalability adds capacity; elasticity automatically adds/removes capacity on demand",
            },
          ],
          objectives: ["CLF-C02-1.1","CLF-C02-1.2","CLF-C02-1.3"],
          practiceType: ["reading","quiz","flashcard","simulator"],
          assignments: [
            {
              id: "aws-service-drill-1",
              title: "AWS Service Picker Drill",
              type: "simulator",
              instructions: `Match real-world scenarios to the correct AWS service. Complete at least 8 of 10 items with 80% accuracy. Focus on distinguishing compute, storage, database, and networking services.`,
              estimatedMinutes: 15,
              simulatorId: "aws-service-picker",
              completionCriteria: ["Score at least 80% on the drill","Review any missed service mappings"],
              relatedTopicIds: ["cloud-concepts","ec2","s3","rds","lambda"],
              order: 1,
            },
          ],
          questionBank: [
            {
              id: "cloud-concepts-b1",
              prompt: "Which migration strategy moves an application with minimal changes?",
              choices: [
                { id: "a", text: "Refactor" },
                { id: "b", text: "Rehost (lift-and-shift)" },
                { id: "c", text: "Repurchase" },
                { id: "d", text: "Retire" },
              ],
              correctChoiceId: "b",
              explanation: "Rehost moves workloads to the cloud with minimal modification—fastest migration path.",
            },
            {
              id: "cloud-concepts-b2",
              prompt: "Which is an example of Platform as a Service?",
              choices: [
                { id: "a", text: "Amazon EC2" },
                { id: "b", text: "AWS Elastic Beanstalk" },
                { id: "c", text: "Amazon S3" },
                { id: "d", text: "Amazon WorkSpaces" },
              ],
              correctChoiceId: "b",
              explanation: "Elastic Beanstalk is a PaaS that manages runtime and deployment while you provide code.",
            },
            {
              id: "cloud-concepts-b3",
              prompt: "Fault tolerance means:",
              choices: [
                { id: "a", text: "Systems continue operating when components fail" },
                { id: "b", text: "Zero cost for all resources" },
                { id: "c", text: "Single point of failure is required" },
                { id: "d", text: "Data never leaves one AZ" },
              ],
              correctChoiceId: "a",
              explanation: "Fault tolerance designs systems so failures of individual components do not cause total outage.",
            },
            {
              id: "cloud-concepts-b4",
              prompt: "Which deployment model is dedicated to a single organization?",
              choices: [
                { id: "a", text: "Public cloud" },
                { id: "b", text: "Private cloud" },
                { id: "c", text: "Community cloud" },
                { id: "d", text: "Edge cloud only" },
              ],
              correctChoiceId: "b",
              explanation: "Private cloud infrastructure is dedicated to one organization, on-premises or hosted.",
            },
            {
              id: "cloud-concepts-b5",
              prompt: "Going global in minutes primarily reflects which cloud benefit?",
              choices: [
                { id: "a", text: "Agility and global infrastructure" },
                { id: "b", text: "Elimination of all compliance rules" },
                { id: "c", text: "Permanent free tier" },
                { id: "d", text: "No need for monitoring" },
              ],
              correctChoiceId: "a",
              explanation: "Global Regions let you deploy closer to users worldwide within minutes.",
            },
            {
              id: "cloud-concepts-b6",
              prompt: "AWS Lambda best fits which service model description?",
              choices: [
                { id: "a", text: "Customer manages hypervisor" },
                { id: "b", text: "Customer manages servers 24/7" },
                { id: "c", text: "Customer uploads code; AWS manages runtime and scaling" },
                { id: "d", text: "Fully managed email application" },
              ],
              correctChoiceId: "c",
              explanation: "Lambda is serverless—AWS manages infrastructure while you provide function code.",
            },
            {
              id: "cloud-concepts-b7",
              prompt: "Which strategy replaces an on-premises app with a SaaS product?",
              choices: [
                { id: "a", text: "Rehost" },
                { id: "b", text: "Repurchase" },
                { id: "c", text: "Replatform" },
                { id: "d", text: "Retain" },
              ],
              correctChoiceId: "b",
              explanation: "Repurchase moves to a SaaS solution such as moving from on-premises CRM to Salesforce.",
            },
            {
              id: "cloud-concepts-b8",
              prompt: "High availability aims to:",
              choices: [
                { id: "a", text: "Minimize downtime and maintain operations" },
                { id: "b", text: "Maximize storage cost" },
                { id: "c", text: "Use only one AZ" },
                { id: "d", text: "Disable backups" },
              ],
              correctChoiceId: "a",
              explanation: "High availability keeps systems operational with minimal interruption through redundancy.",
            },
          ],
        },
        {
          id: "aws-global-infrastructure",
          name: "AWS Global Infrastructure",
          lesson: {
            title: "AWS Regions, Availability Zones, and Edge Locations",
            content: `AWS operates a global infrastructure designed for high availability, fault tolerance, and low latency. Understanding Regions, Availability Zones, and edge locations is essential for the Cloud Practitioner exam.

A Region is a geographic area containing at least three isolated Availability Zones (AZs). Each Region is independent—data does not automatically replicate across Regions unless you configure it. Choose Regions based on latency to users, compliance requirements, service availability, and pricing.

An Availability Zone is one or more discrete data centers with redundant power, networking, and connectivity. AZs within a Region are connected by low-latency links but are physically separated to protect against failures. Deploying across multiple AZs improves availability.

Edge locations are part of Amazon CloudFront's content delivery network (CDN). They cache content closer to users worldwide, reducing latency for static and dynamic content delivery.

Local Zones place compute, storage, and select services near large population centers for ultra-low latency. AWS Wavelength extends AWS infrastructure to 5G networks at the edge of telecom providers' networks.

When architecting for resilience, spread workloads across multiple AZs within a Region. For disaster recovery across geographic boundaries, replicate to a second Region.

AWS currently operates Regions worldwide, each with multiple Availability Zones. When you launch most resources, you choose a Region. Some services like IAM are global; most are Regional.

Edge locations number in the hundreds and support CloudFront, Lambda@Edge, and Route 53. They are not full Regions—you cannot launch a standard EC2 instance in an edge location alone.

For disaster recovery, common patterns include backup and restore, pilot light, warm standby, and multi-site active/active. Each increases cost and decreases recovery time.

Local Zones extend AWS to metro areas for single-digit millisecond latency to end users. Wavelength embeds AWS compute at 5G network edges for mobile and IoT latency-sensitive apps.`,
          },
          keyFacts: [
            "A Region is a geographic area with multiple isolated Availability Zones",
            "An Availability Zone consists of one or more data centers with independent power and networking",
            "Edge locations cache content globally via CloudFront for lower latency",
            "Regions are chosen based on latency, compliance, pricing, and service availability",
            "Data does not automatically replicate across Regions",
            "Deploying across multiple AZs protects against single data center failures",
          ],
          commonMistakes: [
            "Confusing Regions with Availability Zones or Edge Locations",
            "Assuming all AWS services are available in every Region",
            "Thinking Edge Locations are the same as full AWS Regions",
            "Believing a single AZ design provides high availability",
            "Mixing up Local Zones and Wavelength with standard Regions",
          ],
          examTraps: [
            "Low-latency content delivery scenarios pointing to CloudFront edge vs Region",
            "Disaster recovery questions asking which infrastructure spans multiple AZs",
            "Data residency questions requiring specific Region selection",
            "Edge Location count vs Region count comparison tricks",
            "Local Zone placement for latency-sensitive apps near metro areas",
          ],
          quiz: [
            {
              id: "aws-global-infrastructure-q1",
              prompt: "What is the relationship between an AWS Region and Availability Zones?",
              choices: [
                { id: "a", text: "A Region contains multiple isolated AZs" },
                { id: "b", text: "An AZ contains multiple Regions" },
                { id: "c", text: "Regions and AZs are the same thing" },
                { id: "d", text: "AZs span multiple continents" },
              ],
              correctChoiceId: "a",
              explanation:
                "Each AWS Region contains at least three Availability Zones—physically separate data centers with independent infrastructure within a geographic area.",
            },
            {
              id: "aws-global-infrastructure-q2",
              prompt: "What is the primary purpose of AWS edge locations?",
              choices: [
                { id: "a", text: "Run primary database servers" },
                { id: "b", text: "Cache content closer to users for lower latency" },
                { id: "c", text: "Store encrypted backups only" },
                { id: "d", text: "Host EC2 instances for production workloads" },
              ],
              correctChoiceId: "b",
              explanation:
                "Edge locations are used by CloudFront and other services to cache content near end users, reducing latency and improving performance.",
            },
            {
              id: "aws-global-infrastructure-q3",
              prompt: "Why deploy an application across multiple Availability Zones?",
              choices: [
                { id: "a", text: "To reduce costs by sharing hardware" },
                { id: "b", text: "To improve fault tolerance and availability" },
                { id: "c", text: "To eliminate the need for backups" },
                { id: "d", text: "To comply with single-AZ requirements" },
              ],
              correctChoiceId: "b",
              explanation:
                "Multiple AZs protect against single data center failures. If one AZ goes down, resources in other AZs can continue serving traffic.",
            },
            {
              id: "aws-global-infrastructure-q4",
              prompt: "When selecting an AWS Region, which factor is LEAST relevant?",
              choices: [
                { id: "a", text: "Proximity to end users" },
                { id: "b", text: "Data sovereignty and compliance requirements" },
                { id: "c", text: "The color of the AWS console theme" },
                { id: "d", text: "Service availability in that Region" },
              ],
              correctChoiceId: "c",
              explanation:
                "Region selection depends on latency, compliance, pricing, and service availability—not cosmetic console preferences.",
            },
            {
              id: "aws-global-infrastructure-q5",
              prompt: "Does data automatically replicate across AWS Regions?",
              choices: [
                { id: "a", text: "Yes, all data replicates globally by default" },
                { id: "b", text: "No, you must explicitly configure cross-Region replication" },
                { id: "c", text: "Only S3 data replicates automatically" },
                { id: "d", text: "Only within the same Availability Zone" },
              ],
              correctChoiceId: "b",
              explanation:
                "Regions are independent. Cross-Region replication requires explicit configuration—for example, S3 Cross-Region Replication or RDS read replicas in another Region.",
            },
          ],
          flashcards: [
            {
              id: "aws-global-infrastructure-f1",
              front: "What is an AWS Availability Zone?",
              back: "One or more isolated data centers within a Region with independent power and networking",
            },
            {
              id: "aws-global-infrastructure-f2",
              front: "Purpose of edge locations?",
              back: "Cache content near users via CloudFront CDN for reduced latency",
            },
            {
              id: "aws-global-infrastructure-f3",
              front: "Minimum AZs per AWS Region?",
              back: "At least three Availability Zones",
            },
            {
              id: "aws-global-infrastructure-f4",
              front: "Can you launch EC2 in an edge location?",
              back: "No—edge locations cache content; EC2 runs in Regions/AZs",
            },
            {
              id: "aws-global-infrastructure-f5",
              front: "Minimum AZs per Region?",
              back: "At least three isolated Availability Zones",
            },
            {
              id: "aws-global-infrastructure-f6",
              front: "What is a Local Zone?",
              back: "Extension of a Region near a metro area for ultra-low latency",
            },
          ],
          objectives: ["CLF-C02-2.1","CLF-C02-2.2","CLF-C02-2.3"],
          practiceType: ["reading","quiz","flashcard"],
          questionBank: [
            {
              id: "aws-global-infrastructure-b1",
              prompt: "Which service is global rather than Regional?",
              choices: [
                { id: "a", text: "Amazon EC2" },
                { id: "b", text: "AWS IAM" },
                { id: "c", text: "Amazon RDS" },
                { id: "d", text: "Amazon EBS" },
              ],
              correctChoiceId: "b",
              explanation: "IAM is a global service—users and policies apply account-wide.",
            },
            {
              id: "aws-global-infrastructure-b2",
              prompt: "CloudFront primarily uses:",
              choices: [
                { id: "a", text: "Edge locations" },
                { id: "b", text: "Only the us-east-1 Region" },
                { id: "c", text: "Private subnets" },
                { id: "d", text: "NAT Gateways" },
              ],
              correctChoiceId: "a",
              explanation: "CloudFront delivers content through a global network of edge locations.",
            },
            {
              id: "aws-global-infrastructure-b3",
              prompt: "Pilot light DR strategy means:",
              choices: [
                { id: "a", text: "Full duplicate environment always running" },
                { id: "b", text: "Minimal core running in DR Region, scaled up during failover" },
                { id: "c", text: "No backups" },
                { id: "d", text: "Single AZ only" },
              ],
              correctChoiceId: "b",
              explanation: "Pilot light keeps a small footprint in DR ready to scale during disaster.",
            },
            {
              id: "aws-global-infrastructure-b4",
              prompt: "Why use multiple AZs?",
              choices: [
                { id: "a", text: "Reduce latency to Antarctica only" },
                { id: "b", text: "Protect against single data center failure" },
                { id: "c", text: "Eliminate all costs" },
                { id: "d", text: "Share one power supply" },
              ],
              correctChoiceId: "b",
              explanation: "AZs are isolated—failure in one AZ should not affect others in the Region.",
            },
            {
              id: "aws-global-infrastructure-b5",
              prompt: "AWS Wavelength is designed for:",
              choices: [
                { id: "a", text: "5G edge applications with ultra-low latency" },
                { id: "b", text: "Long-term tape archival" },
                { id: "c", text: "IAM federation" },
                { id: "d", text: "Billing consolidation" },
              ],
              correctChoiceId: "a",
              explanation: "Wavelength brings AWS compute to telecom 5G networks for edge workloads.",
            },
            {
              id: "aws-global-infrastructure-b6",
              prompt: "Cross-Region replication requires:",
              choices: [
                { id: "a", text: "Automatic default for all services" },
                { id: "b", text: "Explicit configuration by the customer" },
                { id: "c", text: "Root user access only" },
                { id: "d", text: "Edge location selection" },
              ],
              correctChoiceId: "b",
              explanation: "Data does not replicate across Regions unless you configure services like S3 CRR.",
            },
            {
              id: "aws-global-infrastructure-b7",
              prompt: "An Availability Zone consists of:",
              choices: [
                { id: "a", text: "One or more discrete data centers with independent infrastructure" },
                { id: "b", text: "All Regions in Europe" },
                { id: "c", text: "CloudFront caches only" },
                { id: "d", text: "IAM policy collections" },
              ],
              correctChoiceId: "a",
              explanation: "Each AZ has independent power, networking, and connectivity within a Region.",
            },
            {
              id: "aws-global-infrastructure-b8",
              prompt: "For Region selection, compliance often requires:",
              choices: [
                { id: "a", text: "Data residency in specific geographic boundaries" },
                { id: "b", text: "Using only edge locations" },
                { id: "c", text: "Disabling encryption" },
                { id: "d", text: "Single-AZ deployment" },
              ],
              correctChoiceId: "a",
              explanation: "Regulations may require data to remain within specific countries or Regions.",
            },
          ],
        },
      ],
    },
    {
      id: "compute",
      name: "Compute",
      topics: [
        {
          id: "ec2",
          name: "Amazon EC2",
          lesson: {
            title: "Amazon Elastic Compute Cloud (EC2)",
            content: `Amazon EC2 provides resizable compute capacity in the cloud. You launch virtual servers called instances, choosing from instance types optimized for compute, memory, storage, or general-purpose workloads.

Instance types follow a naming pattern: family (e.g., t3, m6i, c7g) plus size (nano through metal). Burstable instances like t3 accumulate CPU credits for variable workloads. Compute-optimized (C family) suit batch processing; memory-optimized (R, X) suit databases and analytics.

Amazon Machine Images (AMIs) are templates containing the OS and optional software. You can use AWS-provided AMIs, marketplace AMIs, or create your own. Elastic Block Store (EBS) volumes provide persistent block storage attached to instances.

Security groups act as virtual firewalls controlling inbound and outbound traffic at the instance level. Key pairs enable SSH (Linux) or RDP (Windows) access. IAM roles grant instances permissions without embedding credentials.

Pricing options include On-Demand (pay per second), Reserved Instances (1- or 3-year commitment for discount), Savings Plans (flexible compute commitment), and Spot Instances (unused capacity at up to 90% discount, can be interrupted). Auto Scaling automatically adjusts instance count based on demand.

Instance purchasing options trade flexibility for cost. On-Demand has no commitment. Reserved Instances and Savings Plans offer discounts for 1- or 3-year commitments. Dedicated Hosts provide physical server isolation for licensing compliance.

Placement groups influence performance: cluster for low latency HPC, spread for critical isolation, partition for large distributed workloads.

Elastic IP addresses are static public IPv4 addresses. You are charged for Elastic IPs not associated with running instances in some cases.

User data scripts run at launch for bootstrapping. Systems Manager Session Manager provides secure shell access without opening SSH ports publicly.`,
          },
          keyFacts: [
            "EC2 provides resizable virtual servers (instances) in the cloud",
            "AMIs are templates used to launch EC2 instances",
            "Security groups are stateful virtual firewalls at the instance level",
            "EBS provides persistent block storage for EC2 instances",
            "Spot Instances offer the largest discount but can be interrupted with 2-minute notice",
            "Auto Scaling adjusts instance count based on demand or schedules",
          ],
          commonMistakes: [
            "Confusing EC2 instance families (compute-optimized vs memory-optimized)",
            "Assuming stopped instances incur no charges when EBS volumes remain attached",
            "Mixing up On-Demand, Reserved, Spot, and Savings Plans pricing models",
            "Believing EC2 is serverless like Lambda",
            "Forgetting that security groups are stateful firewalls at the instance level",
          ],
          examTraps: [
            "Spot Instance interruption scenarios vs On-Demand reliability",
            "Burstable T-series CPU credits vs always-on compute needs",
            "AMI vs snapshot vs EBS volume relationship questions",
            "Auto Scaling group triggers confused with load balancer health checks",
            "Dedicated Host vs Dedicated Instance vs Reserved Instance distinctions",
          ],
          quiz: [
            {
              id: "ec2-q1",
              prompt: "What is an Amazon Machine Image (AMI)?",
              choices: [
                { id: "a", text: "A template containing OS and software to launch instances" },
                { id: "b", text: "A type of load balancer" },
                { id: "c", text: "An encrypted S3 bucket" },
                { id: "d", text: "A monitoring dashboard" },
              ],
              correctChoiceId: "a",
              explanation:
                "An AMI is a template that defines the OS, application server, and applications used to launch EC2 instances.",
            },
            {
              id: "ec2-q2",
              prompt: "Which EC2 pricing model offers the highest discount but can be terminated by AWS?",
              choices: [
                { id: "a", text: "On-Demand" },
                { id: "b", text: "Reserved Instances" },
                { id: "c", text: "Spot Instances" },
                { id: "d", text: "Dedicated Hosts" },
              ],
              correctChoiceId: "c",
              explanation:
                "Spot Instances use spare EC2 capacity at steep discounts but AWS can reclaim them with a two-minute interruption notice.",
            },
            {
              id: "ec2-q3",
              prompt: "What controls inbound and outbound traffic to an EC2 instance?",
              choices: [
                { id: "a", text: "Route tables" },
                { id: "b", text: "Security groups" },
                { id: "c", text: "IAM policies" },
                { id: "d", text: "S3 bucket policies" },
              ],
              correctChoiceId: "b",
              explanation:
                "Security groups act as virtual firewalls at the instance level, controlling allowed inbound and outbound traffic.",
            },
            {
              id: "ec2-q4",
              prompt: "Which storage provides persistent block storage for EC2?",
              choices: [
                { id: "a", text: "Amazon S3" },
                { id: "b", text: "Amazon EBS" },
                { id: "c", text: "Amazon Glacier" },
                { id: "d", text: "Instance store only" },
              ],
              correctChoiceId: "b",
              explanation:
                "Amazon EBS provides persistent block-level storage volumes that attach to EC2 instances and survive instance stops.",
            },
            {
              id: "ec2-q5",
              prompt: "Why attach an IAM role to an EC2 instance?",
              choices: [
                { id: "a", text: "To encrypt the root volume" },
                { id: "b", text: "To grant permissions without storing credentials on the instance" },
                { id: "c", text: "To assign a public IP address" },
                { id: "d", text: "To enable Auto Scaling" },
              ],
              correctChoiceId: "b",
              explanation:
                "IAM roles provide temporary credentials so applications on EC2 can access AWS services without embedding access keys.",
            },
          ],
          flashcards: [
            {
              id: "ec2-f1",
              front: "What is an EC2 instance?",
              back: "A virtual server in the AWS cloud with configurable CPU, memory, and storage",
            },
            {
              id: "ec2-f2",
              front: "Spot Instance trade-off?",
              back: "Up to 90% discount but AWS can reclaim capacity with 2-minute notice",
            },
            {
              id: "ec2-f3",
              front: "What is an AMI?",
              back: "Amazon Machine Image—a template to launch EC2 instances",
            },
            {
              id: "ec2-f4",
              front: "On-Demand vs Reserved?",
              back: "On-Demand: no commitment. Reserved/Savings Plans: 1-3 year discount",
            },
            {
              id: "ec2-f5",
              front: "What is a placement group?",
              back: "Logical grouping influencing instance placement for latency or isolation",
            },
            {
              id: "ec2-f6",
              front: "Systems Manager Session Manager?",
              back: "Secure shell access to EC2 without opening inbound SSH ports",
            },
          ],
          objectives: ["CLF-C02-3.1","CLF-C02-3.2"],
          practiceType: ["reading","quiz","flashcard","external-lab"],
          externalResources: [
            {
              id: "aws-free-tier",
              name: "AWS Free Tier",
              url: "https://aws.amazon.com/free/",
              cost: "free",
              platform: "web",
              installNotes: "Create an AWS account. Free tier includes limited EC2 hours monthly for 12 months for new accounts.",
            },
          ],
          assignments: [
            {
              id: "ec2-free-tier-lab-1",
              title: "Lab 1: Launch and Connect to an EC2 Instance",
              type: "external-lab",
              instructions: `1. Sign in to the AWS Management Console using your free tier account.
2. Navigate to EC2 and launch a t2.micro or t3.micro Amazon Linux instance in a default VPC public subnet.
3. Create or select a key pair for SSH access.
4. Configure a security group allowing SSH (port 22) from your IP only.
5. Connect via SSH or EC2 Instance Connect and run \`uname -a\`.
6. Stop the instance when finished to avoid unnecessary charges.`,
              estimatedMinutes: 45,
              externalResourceId: "aws-free-tier",
              completionCriteria: ["Successfully launched an EC2 instance","Connected via SSH or Instance Connect","Verified OS with a command","Stopped or terminated the instance when done"],
              relatedTopicIds: ["ec2","vpc","iam"],
              order: 1,
            },
          ],
          questionBank: [
            {
              id: "ec2-b1",
              prompt: "Which instance family is compute-optimized?",
              choices: [
                { id: "a", text: "R family" },
                { id: "b", text: "C family" },
                { id: "c", text: "T family burstable only" },
                { id: "d", text: "Glacier" },
              ],
              correctChoiceId: "b",
              explanation: "C (Compute) instances suit CPU-intensive workloads like batch processing.",
            },
            {
              id: "ec2-b2",
              prompt: "Dedicated Hosts are used when:",
              choices: [
                { id: "a", text: "You need per-socket software licensing control" },
                { id: "b", text: "You want the lowest possible Spot price" },
                { id: "c", text: "You need object storage" },
                { id: "d", text: "You want serverless compute" },
              ],
              correctChoiceId: "a",
              explanation: "Dedicated Hosts provide physical servers for bring-your-own-license scenarios.",
            },
            {
              id: "ec2-b3",
              prompt: "EBS volume persists when an instance is:",
              choices: [
                { id: "a", text: "Stopped and started (not terminated)" },
                { id: "b", text: "Never—it is ephemeral always" },
                { id: "c", text: "Only during Spot interruption" },
                { id: "d", text: "Deleted from IAM" },
              ],
              correctChoiceId: "a",
              explanation: "EBS root/data volumes persist through stop/start; delete on termination is configurable.",
            },
            {
              id: "ec2-b4",
              prompt: "Auto Scaling primarily helps with:",
              choices: [
                { id: "a", text: "Matching capacity to demand automatically" },
                { id: "b", text: "Encrypting S3 buckets" },
                { id: "c", text: "IAM password rotation" },
                { id: "d", text: "DNS registration" },
              ],
              correctChoiceId: "a",
              explanation: "Auto Scaling adds or removes EC2 instances based on demand or schedules.",
            },
            {
              id: "ec2-b5",
              prompt: "Burstable T instances accumulate:",
              choices: [
                { id: "a", text: "CPU credits for baseline bursting" },
                { id: "b", text: "S3 storage credits" },
                { id: "c", text: "IAM tokens" },
                { id: "d", text: "CloudFront points" },
              ],
              correctChoiceId: "a",
              explanation: "T instances earn CPU credits when idle and spend them when bursting above baseline.",
            },
            {
              id: "ec2-b6",
              prompt: "Key pairs are used for:",
              choices: [
                { id: "a", text: "SSH/RDP authentication to instances" },
                { id: "b", text: "S3 versioning" },
                { id: "c", text: "RDS Multi-AZ" },
                { id: "d", text: "Route 53 health checks" },
              ],
              correctChoiceId: "a",
              explanation: "Key pairs enable secure login to Linux (SSH) or Windows (RDP/get password) instances.",
            },
            {
              id: "ec2-b7",
              prompt: "Savings Plans differ from Reserved Instances by:",
              choices: [
                { id: "a", text: "Offering flexible compute commitment across instance families" },
                { id: "b", text: "Being always free" },
                { id: "c", text: "Replacing IAM" },
                { id: "d", text: "Only working with Lambda" },
              ],
              correctChoiceId: "a",
              explanation: "Savings Plans apply discounts across compute usage with flexible instance choice.",
            },
            {
              id: "ec2-b8",
              prompt: "Instance store volumes are:",
              choices: [
                { id: "a", text: "Ephemeral block storage tied to the host" },
                { id: "b", text: "The same as S3 Standard" },
                { id: "c", text: "Global IAM policies" },
                { id: "d", text: "Always encrypted by customer only" },
              ],
              correctChoiceId: "a",
              explanation: "Instance store is high-performance ephemeral storage lost if instance fails or stops (depending on type).",
            },
          ],
        },
        {
          id: "lambda",
          name: "AWS Lambda",
          lesson: {
            title: "Serverless Computing with AWS Lambda",
            content: `AWS Lambda is a serverless compute service that runs code in response to events without provisioning or managing servers. You upload your code as a Lambda function, and AWS handles scaling, patching, and infrastructure.

Lambda is event-driven. Triggers include API Gateway HTTP requests, S3 object uploads, DynamoDB streams, SNS notifications, EventBridge schedules, and many other AWS services. Functions run in isolated execution environments and scale automatically from zero to thousands of concurrent executions.

You pay only for compute time consumed—charged per millisecond—and the number of requests. There is no charge when your code is not running. The free tier includes 1 million requests and 400,000 GB-seconds per month.

Functions have configurable memory (128 MB to 10 GB), which also proportionally affects CPU. Maximum execution timeout is 15 minutes. Deployment packages can be uploaded as .zip files or container images.

Lambda fits event processing, data transformation, real-time file processing, and backend APIs behind API Gateway. For long-running workloads or always-on services, EC2 or containers may be more appropriate.

Environment variables store configuration. Lambda layers share common code and dependencies across functions. VPC configuration allows access to private resources like RDS databases.

Concurrency limits control how many simultaneous executions a function can have. Reserved concurrency guarantees capacity for a function; it also caps maximum concurrency.

Dead-letter queues (DLQ) capture failed asynchronous invocations for later analysis. Lambda integrates with SQS and SNS for DLQs.

Cold starts occur when Lambda provisions a new execution environment. Provisioned concurrency reduces cold starts for latency-sensitive apps.

Common exam scenarios: S3 upload triggers Lambda to resize images; API Gateway triggers Lambda for REST APIs; EventBridge schedules periodic jobs; DynamoDB streams trigger change processing.`,
          },
          keyFacts: [
            "Lambda runs code without provisioning servers—you pay only for execution time",
            "Lambda scales automatically from zero to thousands of concurrent executions",
            "Maximum function timeout is 15 minutes",
            "Lambda is event-driven—triggered by S3, API Gateway, DynamoDB, and more",
            "Memory ranges from 128 MB to 10 GB and affects CPU proportionally",
            "Lambda layers let you share code and dependencies across functions",
          ],
          commonMistakes: [
            "Assuming Lambda runs continuously like an EC2 instance",
            "Confusing Lambda timeout limits with API Gateway timeout limits",
            "Believing Lambda can only be triggered by API Gateway",
            "Mixing up Lambda layers with Lambda functions",
            "Forgetting that Lambda is charged per invocation and duration",
          ],
          examTraps: [
            "Event-driven architecture scenarios where Lambda is correct over EC2",
            "Cold start vs provisioned concurrency performance questions",
            "Lambda execution role vs resource-based policy permission scenarios",
            "Maximum timeout and memory configuration limit questions",
            "Serverless vs container vs EC2 cost comparison scenarios",
          ],
          quiz: [
            {
              id: "lambda-q1",
              prompt: "What is the primary billing model for AWS Lambda?",
              choices: [
                { id: "a", text: "Hourly charge for running servers" },
                { id: "b", text: "Pay per request and compute duration" },
                { id: "c", text: "Annual subscription fee" },
                { id: "d", text: "Per GB of S3 storage used" },
              ],
              correctChoiceId: "b",
              explanation:
                "Lambda charges based on the number of requests and the duration your code runs, measured in GB-seconds. No charge when idle.",
            },
            {
              id: "lambda-q2",
              prompt: "What is the maximum execution timeout for a Lambda function?",
              choices: [
                { id: "a", text: "5 minutes" },
                { id: "b", text: "15 minutes" },
                { id: "c", text: "1 hour" },
                { id: "d", text: "Unlimited" },
              ],
              correctChoiceId: "b",
              explanation:
                "Lambda functions can run for a maximum of 15 minutes per invocation. Longer workloads require other compute services.",
            },
            {
              id: "lambda-q3",
              prompt: "Which service commonly triggers Lambda for REST API backends?",
              choices: [
                { id: "a", text: "Amazon S3" },
                { id: "b", text: "Amazon API Gateway" },
                { id: "c", text: "Amazon RDS" },
                { id: "d", text: "AWS CloudTrail" },
              ],
              correctChoiceId: "b",
              explanation:
                "API Gateway integrates with Lambda to create serverless HTTP APIs—each request can invoke a Lambda function.",
            },
            {
              id: "lambda-q4",
              prompt: "What does 'serverless' mean in the context of Lambda?",
              choices: [
                { id: "a", text: "No servers exist anywhere in the cloud" },
                { id: "b", text: "You don't manage server provisioning or scaling" },
                { id: "c", text: "The service is always free" },
                { id: "d", text: "Code runs only on edge devices" },
              ],
              correctChoiceId: "b",
              explanation:
                "Serverless means AWS manages infrastructure—you focus on code while AWS handles provisioning, scaling, and maintenance.",
            },
            {
              id: "lambda-q5",
              prompt: "Why configure a Lambda function inside a VPC?",
              choices: [
                { id: "a", text: "To reduce function cost to zero" },
                { id: "b", text: "To access private resources like RDS in a VPC" },
                { id: "c", text: "To increase the 15-minute timeout" },
                { id: "d", text: "To disable all logging" },
              ],
              correctChoiceId: "b",
              explanation:
                "VPC configuration allows Lambda to reach private resources such as RDS databases or ElastiCache clusters inside your VPC.",
            },
          ],
          flashcards: [
            {
              id: "lambda-f1",
              front: "Lambda billing model?",
              back: "Pay per request plus compute time (GB-seconds); no charge when idle",
            },
            {
              id: "lambda-f2",
              front: "Maximum Lambda timeout?",
              back: "15 minutes per invocation",
            },
            {
              id: "lambda-f3",
              front: "What is serverless compute?",
              back: "Run code without managing servers—AWS handles provisioning and scaling",
            },
            {
              id: "lambda-f4",
              front: "What is a cold start?",
              back: "Latency when Lambda initializes a new execution environment",
            },
            {
              id: "lambda-f5",
              front: "Lambda DLQ purpose?",
              back: "Captures failed async invocations for troubleshooting",
            },
            {
              id: "lambda-f6",
              front: "Provisioned concurrency?",
              back: "Pre-warmed execution environments to reduce cold starts",
            },
          ],
          objectives: ["CLF-C02-3.3","CLF-C02-3.4"],
          practiceType: ["reading","quiz","flashcard"],
          questionBank: [
            {
              id: "lambda-b1",
              prompt: "Lambda charges when:",
              choices: [
                { id: "a", text: "Code executes (requests + duration)" },
                { id: "b", text: "Always, even when idle 24/7 at full price" },
                { id: "c", text: "Only for S3 storage" },
                { id: "d", text: "Never—always free unlimited" },
              ],
              correctChoiceId: "a",
              explanation: "You pay per request and GB-second of execution; idle functions incur no compute charge.",
            },
            {
              id: "lambda-b2",
              prompt: "S3 event notifications commonly trigger:",
              choices: [
                { id: "a", text: "Lambda for object processing" },
                { id: "b", text: "IAM policy deletion" },
                { id: "c", text: "Region creation" },
                { id: "d", text: "Reserved Instance purchase" },
              ],
              correctChoiceId: "a",
              explanation: "Upload events can invoke Lambda for thumbnails, virus scans, or metadata extraction.",
            },
            {
              id: "lambda-b3",
              prompt: "Lambda layers are used to:",
              choices: [
                { id: "a", text: "Share libraries and dependencies across functions" },
                { id: "b", text: "Replace VPC requirements" },
                { id: "c", text: "Increase timeout beyond 15 minutes" },
                { id: "d", text: "Disable logging" },
              ],
              correctChoiceId: "a",
              explanation: "Layers package common code so multiple functions reuse dependencies.",
            },
            {
              id: "lambda-b4",
              prompt: "Increasing Lambda memory also:",
              choices: [
                { id: "a", text: "Proportionally increases CPU power" },
                { id: "b", text: "Disables VPC access" },
                { id: "c", text: "Removes the 15-minute limit" },
                { id: "d", text: "Forces On-Demand EC2 billing" },
              ],
              correctChoiceId: "a",
              explanation: "Memory and CPU are linked—more memory allocates more CPU proportionally.",
            },
            {
              id: "lambda-b5",
              prompt: "EventBridge can trigger Lambda on:",
              choices: [
                { id: "a", text: "Schedules and event patterns" },
                { id: "b", text: "Only manual console clicks" },
                { id: "c", text: "Physical data center access" },
                { id: "d", text: "Glacier retrieval only" },
              ],
              correctChoiceId: "a",
              explanation: "EventBridge rules route events and cron schedules to Lambda targets.",
            },
            {
              id: "lambda-b6",
              prompt: "Lambda in a VPC requires:",
              choices: [
                { id: "a", text: "VPC subnets and security groups configuration" },
                { id: "b", text: "Public S3 ACLs" },
                { id: "c", text: "Root user credentials" },
                { id: "d", text: "Dedicated Host purchase" },
              ],
              correctChoiceId: "a",
              explanation: "VPC-enabled Lambda needs subnets and security groups to reach private resources.",
            },
            {
              id: "lambda-b7",
              prompt: "Compared to EC2 always-on servers, Lambda suits:",
              choices: [
                { id: "a", text: "Sporadic, event-driven workloads" },
                { id: "b", text: "24/7 high constant CPU with no variation" },
                { id: "c", text: "Operating system kernel development" },
                { id: "d", text: "Bare-metal licensing only" },
              ],
              correctChoiceId: "a",
              explanation: "Lambda excels at intermittent, event-driven tasks with automatic scaling.",
            },
            {
              id: "lambda-b8",
              prompt: "Deployment package size limits mean:",
              choices: [
                { id: "a", text: "Functions must fit within documented zip/container limits" },
                { id: "b", text: "Unlimited code size always" },
                { id: "c", text: "Only Java is supported" },
                { id: "d", text: "No container support" },
              ],
              correctChoiceId: "a",
              explanation: "Lambda supports zip and container images within documented size constraints.",
            },
          ],
        },
      ],
    },
    {
      id: "storage-databases",
      name: "Storage & Databases",
      topics: [
        {
          id: "s3",
          name: "Amazon S3",
          lesson: {
            title: "Amazon Simple Storage Service (S3)",
            content: `Amazon S3 is object storage built to store and retrieve any amount of data from anywhere. Objects are stored in buckets—globally unique names across all AWS accounts. Each object has a key (name), data, and metadata.

S3 provides 99.999999999% (11 nines) durability by automatically storing copies across multiple facilities within a Region. Availability varies by storage class.

Storage classes optimize cost for access patterns. S3 Standard is for frequently accessed data. S3 Intelligent-Tiering automatically moves objects between access tiers. S3 Standard-IA and One Zone-IA suit infrequently accessed data. S3 Glacier Instant Retrieval, Glacier Flexible Retrieval, and Glacier Deep Archive serve archival needs with retrieval times from milliseconds to hours.

Versioning keeps multiple variants of an object, protecting against accidental deletion. MFA Delete adds an extra layer for permanent deletions. Bucket policies and ACLs control access. S3 Block Public Access prevents accidental public exposure.

S3 integrates with CloudFront for content delivery, Lambda for event-driven processing on uploads, and lifecycle policies to automatically transition or expire objects. Encryption options include SSE-S3, SSE-KMS, and SSE-C.

S3 access points simplify permissions for shared buckets with different policies. S3 Object Lambda lets you transform objects on retrieval without modifying stored data.

Cross-Region Replication (CRR) copies objects to a bucket in another Region for DR or latency. Same-Region Replication (SRR) copies within the same Region for compliance aggregation.

S3 Transfer Acceleration uses edge locations for faster uploads over long distances. S3 Select retrieves subsets of object data using SQL expressions.

Strong read-after-write consistency applies to all S3 operations. Encryption at rest uses SSE-S3 (AWS-managed keys), SSE-KMS (KMS keys), or SSE-C (customer-provided keys).`,
          },
          keyFacts: [
            "S3 is object storage—data stored as objects in buckets with unique keys",
            "S3 provides 11 nines (99.999999999%) durability within a Region",
            "Bucket names must be globally unique across all AWS accounts",
            "Storage classes balance cost vs. access frequency (Standard, IA, Glacier)",
            "Versioning protects against accidental overwrites and deletions",
            "S3 Block Public Access helps prevent unintended public data exposure",
          ],
          commonMistakes: [
            "Confusing S3 storage classes (Standard, IA, Glacier, Intelligent-Tiering)",
            "Assuming S3 bucket names are globally unique only within a Region",
            "Mixing up S3 versioning with S3 lifecycle policies",
            "Believing S3 is a block storage service like EBS",
            "Forgetting that S3 is object storage, not file or block storage",
          ],
          examTraps: [
            "Minimum storage duration charges for IA and Glacier classes",
            "Cross-Region replication vs same-Region versioning scenarios",
            "S3 bucket policy vs IAM policy for access control questions",
            "Archive retrieval time tiers (Expedited, Standard, Bulk) for Glacier",
            "Static website hosting vs CloudFront origin configuration",
          ],
          quiz: [
            {
              id: "s3-q1",
              prompt: "What type of storage is Amazon S3?",
              choices: [
                { id: "a", text: "Block storage" },
                { id: "b", text: "Object storage" },
                { id: "c", text: "File storage" },
                { id: "d", text: "Tape archive only" },
              ],
              correctChoiceId: "b",
              explanation:
                "S3 is object storage where files are stored as objects with keys in buckets, unlike block storage (EBS) or file storage (EFS).",
            },
            {
              id: "s3-q2",
              prompt: "Which S3 storage class is best for long-term archival with lowest cost?",
              choices: [
                { id: "a", text: "S3 Standard" },
                { id: "b", text: "S3 Intelligent-Tiering" },
                { id: "c", text: "S3 Glacier Deep Archive" },
                { id: "d", text: "S3 Express One Zone" },
              ],
              correctChoiceId: "c",
              explanation:
                "Glacier Deep Archive offers the lowest storage cost for rarely accessed archival data, with retrieval times of 12-48 hours.",
            },
            {
              id: "s3-q3",
              prompt: "What does S3 versioning provide?",
              choices: [
                { id: "a", text: "Automatic cross-Region replication" },
                { id: "b", text: "Multiple versions of an object for recovery" },
                { id: "c", text: "Unlimited free storage" },
                { id: "d", text: "Public access to all objects" },
              ],
              correctChoiceId: "b",
              explanation:
                "Versioning keeps multiple versions of objects, allowing recovery from accidental deletes or overwrites.",
            },
            {
              id: "s3-q4",
              prompt: "S3 bucket names must be:",
              choices: [
                { id: "a", text: "Unique within your AWS account only" },
                { id: "b", text: "Globally unique across all AWS accounts" },
                { id: "c", text: "Identical to your account ID" },
                { id: "d", text: "At least 64 characters long" },
              ],
              correctChoiceId: "b",
              explanation:
                "S3 bucket names are globally unique across all AWS accounts and Regions (within the same partition).",
            },
            {
              id: "s3-q5",
              prompt: "What is the purpose of S3 Block Public Access?",
              choices: [
                { id: "a", text: "Encrypt all objects automatically" },
                { id: "b", text: "Prevent buckets and objects from being made public" },
                { id: "c", text: "Block all internet traffic to S3" },
                { id: "d", text: "Disable versioning" },
              ],
              correctChoiceId: "b",
              explanation:
                "S3 Block Public Access settings override policies and ACLs that could grant public access, reducing accidental exposure risk.",
            },
          ],
          flashcards: [
            {
              id: "s3-f1",
              front: "S3 storage type?",
              back: "Object storage—objects in buckets identified by keys",
            },
            {
              id: "s3-f2",
              front: "S3 durability?",
              back: "99.999999999% (11 nines) within a Region",
            },
            {
              id: "s3-f3",
              front: "Lowest-cost archival S3 class?",
              back: "S3 Glacier Deep Archive",
            },
            {
              id: "s3-f4",
              front: "S3 Standard-IA vs One Zone-IA?",
              back: "Standard-IA: multi-AZ; One Zone-IA: single AZ, lower cost, less resilience",
            },
            {
              id: "s3-f5",
              front: "What is S3 CRR?",
              back: "Cross-Region Replication—copies objects to another Region",
            },
            {
              id: "s3-f6",
              front: "SSE-KMS vs SSE-S3?",
              back: "SSE-KMS uses KMS keys with audit trail; SSE-S3 uses AWS-managed keys",
            },
          ],
          objectives: ["CLF-C02-3.5","CLF-C02-3.6"],
          practiceType: ["reading","quiz","flashcard","external-lab"],
          externalResources: [
            {
              id: "aws-free-tier",
              name: "AWS Free Tier",
              url: "https://aws.amazon.com/free/",
              cost: "free",
              platform: "web",
              installNotes: "S3 offers always-free storage limits within the AWS Free Tier for new accounts.",
            },
          ],
          assignments: [
            {
              id: "s3-free-tier-lab-1",
              title: "Lab 2: Create an S3 Bucket and Upload Objects",
              type: "external-lab",
              instructions: `1. Open the S3 console in your AWS free tier account.
2. Create a globally unique bucket with Block Public Access enabled.
3. Enable default encryption (SSE-S3 or SSE-KMS).
4. Upload at least two files and organize them with a prefix (folder).
5. Verify object properties and encryption settings.
6. Optionally enable versioning and upload a new version of one file.`,
              estimatedMinutes: 30,
              externalResourceId: "aws-free-tier",
              completionCriteria: ["Created a private S3 bucket","Uploaded multiple objects","Confirmed encryption is enabled","Verified Block Public Access remains on"],
              relatedTopicIds: ["s3","shared-responsibility-model"],
              order: 1,
            },
          ],
          questionBank: [
            {
              id: "s3-b1",
              prompt: "S3 Intelligent-Tiering automatically:",
              choices: [
                { id: "a", text: "Moves objects between access tiers based on usage" },
                { id: "b", text: "Deletes all objects after 1 day" },
                { id: "c", text: "Makes buckets public" },
                { id: "d", text: "Replaces IAM" },
              ],
              correctChoiceId: "a",
              explanation: "Intelligent-Tiering moves objects between frequent and infrequent access tiers automatically.",
            },
            {
              id: "s3-b2",
              prompt: "Lifecycle policies can:",
              choices: [
                { id: "a", text: "Transition objects to cheaper classes or expire them" },
                { id: "b", text: "Launch EC2 instances" },
                { id: "c", text: "Create IAM users" },
                { id: "d", text: "Replace Route 53" },
              ],
              correctChoiceId: "a",
              explanation: "Lifecycle rules automate transition to Glacier or deletion after defined periods.",
            },
            {
              id: "s3-b3",
              prompt: "Presigned URLs allow:",
              choices: [
                { id: "a", text: "Time-limited access to private objects" },
                { id: "b", text: "Permanent public access always" },
                { id: "c", text: "Cross-account root login" },
                { id: "d", text: "Unlimited free egress worldwide" },
              ],
              correctChoiceId: "a",
              explanation: "Presigned URLs grant temporary access to objects without making buckets public.",
            },
            {
              id: "s3-b4",
              prompt: "MFA Delete requires:",
              choices: [
                { id: "a", text: "MFA to permanently delete versioned objects" },
                { id: "b", text: "No authentication" },
                { id: "c", text: "Glacier-only storage" },
                { id: "d", text: "Edge location deployment" },
              ],
              correctChoiceId: "a",
              explanation: "MFA Delete adds multi-factor authentication for version permanent deletion.",
            },
            {
              id: "s3-b5",
              prompt: "S3 is accessed over:",
              choices: [
                { id: "a", text: "HTTP/HTTPS REST API" },
                { id: "b", text: "SSH only" },
                { id: "c", text: "RDP" },
                { id: "d", text: "Direct EBS attach" },
              ],
              correctChoiceId: "a",
              explanation: "S3 is object storage accessed via REST API over HTTP/HTTPS.",
            },
            {
              id: "s3-b6",
              prompt: "Transfer Acceleration helps with:",
              choices: [
                { id: "a", text: "Faster uploads using CloudFront edge network" },
                { id: "b", text: "IAM role assumption" },
                { id: "c", text: "RDS failover" },
                { id: "d", text: "Lambda cold starts" },
              ],
              correctChoiceId: "a",
              explanation: "Transfer Acceleration routes uploads through edge locations to the target bucket.",
            },
            {
              id: "s3-b7",
              prompt: "Bucket policies are:",
              choices: [
                { id: "a", text: "Resource-based JSON policies attached to buckets" },
                { id: "b", text: "Security groups for EC2" },
                { id: "c", text: "Route table entries" },
                { id: "d", text: "Physical data center rules" },
              ],
              correctChoiceId: "a",
              explanation: "Bucket policies define who can access S3 resources—resource-based IAM policies.",
            },
            {
              id: "s3-b8",
              prompt: "Glacier Flexible Retrieval retrieval times are:",
              choices: [
                { id: "a", text: "Minutes to hours depending on tier" },
                { id: "b", text: "Always instant only" },
                { id: "c", text: "Never available" },
                { id: "d", text: "Exactly 1 millisecond always" },
              ],
              correctChoiceId: "a",
              explanation: "Glacier Flexible Retrieval offers expedited, standard, and bulk options with varying times.",
            },
          ],
        },
        {
          id: "rds",
          name: "Amazon RDS",
          lesson: {
            title: "Amazon Relational Database Service (RDS)",
            content: `Amazon RDS makes it easier to set up, operate, and scale relational databases in the cloud. AWS handles provisioning, patching, backups, and replication while you focus on your data and queries.

RDS supports multiple database engines: Amazon Aurora (MySQL and PostgreSQL compatible), MySQL, PostgreSQL, MariaDB, Oracle, and SQL Server. Aurora offers up to 5x throughput of standard MySQL and 3x PostgreSQL with storage that auto-scales up to 128 TB.

Automated backups capture daily snapshots and transaction logs, enabling point-in-time recovery within the retention period (up to 35 days). Manual snapshots persist until deleted. Multi-AZ deployments maintain a synchronous standby in another AZ for high availability and automatic failover.

Read replicas serve read-heavy workloads and can be promoted to standalone databases. They use asynchronous replication. RDS runs inside your VPC with security groups controlling access.

You choose instance class and storage type (General Purpose SSD, Provisioned IOPS). Reserved Instances reduce cost for predictable workloads. RDS Proxy improves connection pooling for serverless applications like Lambda.

RDS Proxy sits between applications and RDS/Aurora to pool database connections—especially valuable for Lambda with many concurrent functions.

Parameter groups store engine configuration. Option groups add features like Oracle Enterprise Manager for certain engines.

Aurora Serverless v2 auto-scales capacity based on demand. Aurora Global Database spans Regions for low-latency global reads and disaster recovery.

Maintenance windows schedule patching. During Multi-AZ failover, DNS endpoint remains the same—applications reconnect automatically.

Encryption at rest uses KMS. In-transit encryption uses SSL/TLS for connections.`,
          },
          keyFacts: [
            "RDS is a managed relational database supporting MySQL, PostgreSQL, Aurora, and more",
            "Multi-AZ provides synchronous standby for automatic failover",
            "Read replicas use asynchronous replication for read scaling",
            "Automated backups enable point-in-time recovery up to 35 days",
            "Amazon Aurora offers high performance with auto-scaling storage",
            "RDS instances run in a VPC and are protected by security groups",
          ],
          commonMistakes: [
            "Confusing RDS with DynamoDB (relational vs NoSQL)",
            "Assuming RDS Multi-AZ and Read Replicas serve the same purpose",
            "Mixing up automated backups with manual snapshots retention",
            "Believing RDS supports only MySQL",
            "Forgetting that RDS manages OS patching but not application code",
          ],
          examTraps: [
            "Multi-AZ failover vs Read Replica scaling read traffic scenarios",
            "Aurora serverless vs provisioned capacity cost questions",
            "RDS encryption at rest vs in transit responsibility",
            "Backup retention period vs snapshot manual deletion",
            "Database engine selection for structured relational data",
          ],
          quiz: [
            {
              id: "rds-q1",
              prompt: "What is the primary purpose of RDS Multi-AZ deployment?",
              choices: [
                { id: "a", text: "Read scaling for analytics queries" },
                { id: "b", text: "High availability with automatic failover" },
                { id: "c", text: "Reducing storage costs" },
                { id: "d", text: "Cross-Region disaster recovery only" },
              ],
              correctChoiceId: "b",
              explanation:
                "Multi-AZ maintains a synchronous standby in another AZ. If the primary fails, RDS automatically fails over to the standby.",
            },
            {
              id: "rds-q2",
              prompt: "Which RDS feature scales read-heavy workloads?",
              choices: [
                { id: "a", text: "Multi-AZ" },
                { id: "b", text: "Read replicas" },
                { id: "c", text: "Automated backups" },
                { id: "d", text: "Parameter groups" },
              ],
              correctChoiceId: "b",
              explanation:
                "Read replicas handle read traffic using asynchronous replication, offloading queries from the primary database.",
            },
            {
              id: "rds-q3",
              prompt: "Which database engine is AWS's cloud-native high-performance option?",
              choices: [
                { id: "a", text: "Oracle" },
                { id: "b", text: "Amazon Aurora" },
                { id: "c", text: "SQL Server Express" },
                { id: "d", text: "DynamoDB" },
              ],
              correctChoiceId: "b",
              explanation:
                "Amazon Aurora is AWS's cloud-native relational database with MySQL/PostgreSQL compatibility and auto-scaling storage.",
            },
            {
              id: "rds-q4",
              prompt: "What does RDS automated backup enable?",
              choices: [
                { id: "a", text: "Unlimited free storage" },
                { id: "b", text: "Point-in-time recovery within the retention period" },
                { id: "c", text: "Automatic cross-Region replication" },
                { id: "d", text: "Public internet access to the database" },
              ],
              correctChoiceId: "b",
              explanation:
                "Automated backups store daily snapshots and transaction logs, allowing restore to any point within the backup retention window.",
            },
            {
              id: "rds-q5",
              prompt: "Where do RDS database instances typically run?",
              choices: [
                { id: "a", text: "On public S3 buckets" },
                { id: "b", text: "Inside a VPC with security group protection" },
                { id: "c", text: "On CloudFront edge locations" },
                { id: "d", text: "Outside any network boundary" },
              ],
              correctChoiceId: "b",
              explanation:
                "RDS instances are deployed in a VPC subnet and protected by security groups that control inbound database connections.",
            },
          ],
          flashcards: [
            {
              id: "rds-f1",
              front: "RDS Multi-AZ purpose?",
              back: "High availability with synchronous standby and automatic failover",
            },
            {
              id: "rds-f2",
              front: "Read replicas use which replication?",
              back: "Asynchronous replication for read scaling",
            },
            {
              id: "rds-f3",
              front: "AWS high-performance relational engine?",
              back: "Amazon Aurora (MySQL/PostgreSQL compatible)",
            },
            {
              id: "rds-f4",
              front: "RDS Proxy benefit?",
              back: "Connection pooling for apps with many connections like Lambda",
            },
            {
              id: "rds-f5",
              front: "Manual snapshot vs automated backup?",
              back: "Manual snapshots persist until deleted; automated backups use retention window",
            },
            {
              id: "rds-f6",
              front: "Aurora storage?",
              back: "Auto-scales up to 128 TB across 6 copies in 3 AZs",
            },
          ],
          objectives: ["CLF-C02-3.7","CLF-C02-3.8"],
          practiceType: ["reading","quiz","flashcard"],
          questionBank: [
            {
              id: "rds-b1",
              prompt: "Read replicas are primarily for:",
              choices: [
                { id: "a", text: "Scaling read traffic" },
                { id: "b", text: "Automatic write failover synchronously" },
                { id: "c", text: "Replacing IAM" },
                { id: "d", text: "S3 lifecycle" },
              ],
              correctChoiceId: "a",
              explanation: "Read replicas offload read queries using asynchronous replication.",
            },
            {
              id: "rds-b2",
              prompt: "Maximum automated backup retention is:",
              choices: [
                { id: "a", text: "35 days" },
                { id: "b", text: "1 day only" },
                { id: "c", text: "Unlimited always" },
                { id: "d", text: "7 hours" },
              ],
              correctChoiceId: "a",
              explanation: "Automated backups can be retained from 1 to 35 days.",
            },
            {
              id: "rds-b3",
              prompt: "RDS is considered:",
              choices: [
                { id: "a", text: "A managed PaaS database service" },
                { id: "b", text: "Pure IaaS with no patching" },
                { id: "c", text: "Object storage" },
                { id: "d", text: "CDN service" },
              ],
              correctChoiceId: "a",
              explanation: "RDS is managed—AWS handles patching, backups, and infrastructure.",
            },
            {
              id: "rds-b4",
              prompt: "Multi-AZ uses replication that is:",
              choices: [
                { id: "a", text: "Synchronous to standby in another AZ" },
                { id: "b", text: "Asynchronous for reads only" },
                { id: "c", text: "Manual only" },
                { id: "d", text: "Cross-Region by default always" },
              ],
              correctChoiceId: "a",
              explanation: "Multi-AZ synchronous replication keeps standby current for fast failover.",
            },
            {
              id: "rds-b5",
              prompt: "Which is NOT an RDS engine?",
              choices: [
                { id: "a", text: "Amazon DynamoDB" },
                { id: "b", text: "PostgreSQL" },
                { id: "c", text: "MySQL" },
                { id: "d", text: "MariaDB" },
              ],
              correctChoiceId: "a",
              explanation: "DynamoDB is NoSQL—not an RDS relational engine.",
            },
            {
              id: "rds-b6",
              prompt: "RDS instances should be placed in:",
              choices: [
                { id: "a", text: "Private subnets with security group restrictions" },
                { id: "b", text: "Public S3 buckets" },
                { id: "c", text: "CloudFront edge only" },
                { id: "d", text: "IAM global namespace" },
              ],
              correctChoiceId: "a",
              explanation: "Best practice places databases in private subnets accessible only via allowed SG rules.",
            },
            {
              id: "rds-b7",
              prompt: "Aurora differs from standard RDS by:",
              choices: [
                { id: "a", text: "Cloud-native storage and higher performance scaling" },
                { id: "b", text: "Being object storage" },
                { id: "c", text: "Not supporting SQL" },
                { id: "d", text: "Replacing VPC" },
              ],
              correctChoiceId: "a",
              explanation: "Aurora provides distributed storage and high performance with MySQL/PostgreSQL compatibility.",
            },
            {
              id: "rds-b8",
              prompt: "Point-in-time recovery uses:",
              choices: [
                { id: "a", text: "Automated backups and transaction logs" },
                { id: "b", text: "CloudFront cache" },
                { id: "c", text: "Spot Instances" },
                { id: "d", text: "Edge locations" },
              ],
              correctChoiceId: "a",
              explanation: "Automated backups plus logs enable restore to any second within retention.",
            },
          ],
        },
      ],
    },
    {
      id: "networking-security",
      name: "Networking & Security",
      topics: [
        {
          id: "vpc",
          name: "Amazon VPC",
          lesson: {
            title: "Amazon Virtual Private Cloud (VPC)",
            content: `Amazon VPC lets you provision a logically isolated section of the AWS Cloud where you launch AWS resources in a virtual network you define. You have complete control over IP ranges, subnets, route tables, and gateways.

A VPC spans all Availability Zones in a Region. Subnets are subdivisions within a VPC tied to a single AZ. Public subnets have a route to an Internet Gateway; private subnets do not. Resources in private subnets access the internet via NAT Gateway or NAT Instance.

An Internet Gateway enables communication between your VPC and the internet. A NAT Gateway allows instances in private subnets to initiate outbound internet connections while blocking inbound connections from the internet.

Security groups are stateful firewalls at the instance level. Network ACLs (NACLs) are stateless firewalls at the subnet level. Route tables control traffic routing between subnets and gateways.

VPC peering connects two VPCs privately. AWS PrivateLink enables private connectivity to services without traversing the public internet. Default VPCs are created automatically in each Region with a /16 CIDR block.

CIDR blocks define IP address ranges for VPCs and subnets. AWS recommends planning non-overlapping ranges for VPC peering and hybrid connectivity.

VPC endpoints allow private connectivity to AWS services without internet gateway—Interface endpoints (PrivateLink) and Gateway endpoints (S3, DynamoDB).

AWS Site-to-Site VPN and Direct Connect link on-premises networks to VPCs. Transit Gateway connects many VPCs and on-premises networks hub-and-spoke.

Flow logs capture IP traffic metadata for troubleshooting and security analysis. They can publish to CloudWatch Logs or S3.`,
          },
          keyFacts: [
            "A VPC is a logically isolated virtual network in AWS",
            "Subnets exist within one Availability Zone; public subnets route to an Internet Gateway",
            "NAT Gateway lets private subnet instances reach the internet outbound only",
            "Security groups are stateful; NACLs are stateless subnet-level filters",
            "Internet Gateway connects a VPC to the internet",
            "Each Region has a default VPC unless you delete it",
          ],
          guidedExample: {
            title: "Design a Three-Tier VPC with Public and Private Subnets",
            steps: [
              "Create a VPC with CIDR 10.0.0.0/16 spanning three Availability Zones in us-east-1.",
              "Add public subnets (10.0.1.0/24, 10.0.2.0/24, 10.0.3.0/24) with routes to an Internet Gateway.",
              "Add private subnets (10.0.11.0/24, 10.0.12.0/24, 10.0.13.0/24) without direct IGW routes.",
              "Deploy a NAT Gateway in each public subnet for private subnet outbound internet access.",
              "Place web servers in public subnets and application/database tiers in private subnets.",
              "Attach security groups (stateful, instance level) and verify NACLs (stateless, subnet level) allow required traffic only.",
            ],
          },
          commonMistakes: [
            "Placing databases in public subnets with direct internet routes",
            "Confusing security groups (stateful) with NACLs (stateless)",
            "Assuming NAT Gateway provides inbound internet access to private subnets",
            "Creating subnets that span multiple Availability Zones",
            "Forgetting to attach an Internet Gateway before routing public subnet traffic",
          ],
          examTraps: [
            "NAT Gateway vs NAT Instance vs Internet Gateway use case scenarios",
            "Public subnet defined by route table, not by having EC2 instances",
            "Security group return traffic automatically allowed vs NACL requiring explicit rules",
            "VPC peering CIDR overlap restrictions",
            "Gateway endpoints (S3/DynamoDB) vs Interface endpoints (PrivateLink) distinctions",
          ],
          realWorldScenario: "Your startup launches a web application on AWS. The architect assigns you a /16 VPC and requires web servers reachable from the internet, application servers isolated from direct inbound traffic, and RDS databases in private subnets with patch downloads via NAT. You create public and private subnets across three AZs, attach an IGW to public route tables, deploy NAT Gateways for outbound-only private access, and document security group rules before the deployment team provisions EC2 and RDS.",
          estimatedStudyMinutes: 35,
          difficulty: "medium",
          prerequisites: ["aws-global-infrastructure", "ec2"],
          quiz: [
            {
              id: "vpc-q1",
              prompt: "What enables instances in a private subnet to download patches from the internet?",
              choices: [
                { id: "a", text: "Internet Gateway attached to the private subnet" },
                { id: "b", text: "NAT Gateway in a public subnet" },
                { id: "c", text: "S3 bucket policy" },
                { id: "d", text: "CloudFront distribution" },
              ],
              correctChoiceId: "b",
              explanation:
                "NAT Gateway in a public subnet allows private subnet instances to initiate outbound connections while blocking unsolicited inbound traffic.",
            },
            {
              id: "vpc-q2",
              prompt: "How is a public subnet defined in a VPC?",
              choices: [
                { id: "a", text: "Any subnet with EC2 instances" },
                { id: "b", text: "Subnet with a route to an Internet Gateway" },
                { id: "c", text: "Subnet without security groups" },
                { id: "d", text: "Subnet in the default VPC only" },
              ],
              correctChoiceId: "b",
              explanation:
                "A public subnet has a route table entry directing 0.0.0.0/0 traffic to an Internet Gateway, enabling direct internet access.",
            },
            {
              id: "vpc-q3",
              prompt: "What is the difference between security groups and NACLs?",
              choices: [
                { id: "a", text: "Security groups are stateless; NACLs are stateful" },
                { id: "b", text: "Security groups are stateful at instance level; NACLs are stateless at subnet level" },
                { id: "c", text: "They are identical" },
                { id: "d", text: "NACLs only apply to S3" },
              ],
              correctChoiceId: "b",
              explanation:
                "Security groups are stateful firewalls for instances (return traffic automatically allowed). NACLs are stateless filters at the subnet boundary.",
            },
            {
              id: "vpc-q4",
              prompt: "What does an Internet Gateway provide?",
              choices: [
                { id: "a", text: "Encrypted VPN to on-premises" },
                { id: "b", text: "Connectivity between VPC and the internet" },
                { id: "c", text: "DNS resolution only" },
                { id: "d", text: "Load balancing across AZs" },
              ],
              correctChoiceId: "b",
              explanation:
                "An Internet Gateway is a horizontally scaled VPC component enabling bidirectional internet communication for public subnets.",
            },
            {
              id: "vpc-q5",
              prompt: "Subnets in a VPC are associated with:",
              choices: [
                { id: "a", text: "Multiple Regions" },
                { id: "b", text: "A single Availability Zone" },
                { id: "c", text: "Edge locations only" },
                { id: "d", text: "Global accelerator endpoints" },
              ],
              correctChoiceId: "b",
              explanation:
                "Each subnet resides entirely within one Availability Zone. High availability requires subnets in multiple AZs.",
            },
          ],
          flashcards: [
            {
              id: "vpc-f1",
              front: "Public vs private subnet?",
              back: "Public has route to Internet Gateway; private uses NAT for outbound-only internet",
            },
            {
              id: "vpc-f2",
              front: "Security group vs NACL?",
              back: "SG: stateful, instance level. NACL: stateless, subnet level",
            },
            {
              id: "vpc-f3",
              front: "What is a VPC?",
              back: "Logically isolated virtual network where you launch AWS resources",
            },
            {
              id: "vpc-f4",
              front: "VPC endpoint types?",
              back: "Gateway (S3, DynamoDB) and Interface (most other AWS services via PrivateLink)",
            },
            {
              id: "vpc-f5",
              front: "What is a route table?",
              back: "Rules determining where subnet traffic is directed",
            },
            {
              id: "vpc-f6",
              front: "Transit Gateway purpose?",
              back: "Hub connecting many VPCs and on-premises networks",
            },
          ],
          objectives: ["CLF-C02-4.1","CLF-C02-4.2"],
          practiceType: ["reading","quiz","flashcard"],
          questionBank: [
            {
              id: "vpc-b1",
              prompt: "A VPC spans:",
              choices: [
                { id: "a", text: "All AZs in one Region" },
                { id: "b", text: "All Regions globally" },
                { id: "c", text: "One AZ only always" },
                { id: "d", text: "Edge locations only" },
              ],
              correctChoiceId: "a",
              explanation: "A VPC is Regional—subnets map to individual AZs within that Region.",
            },
            {
              id: "vpc-b2",
              prompt: "Interface VPC endpoints use:",
              choices: [
                { id: "a", text: "AWS PrivateLink with ENIs in subnets" },
                { id: "b", text: "Public internet only" },
                { id: "c", text: "S3 lifecycle rules" },
                { id: "d", text: "IAM MFA only" },
              ],
              correctChoiceId: "a",
              explanation: "Interface endpoints create elastic network interfaces for private service access.",
            },
            {
              id: "vpc-b3",
              prompt: "Default VPC is created:",
              choices: [
                { id: "a", text: "Automatically in each Region unless deleted" },
                { id: "b", text: "Never—must always create manually" },
                { id: "c", text: "Only in us-west-1" },
                { id: "d", text: "Only for Enterprise Support" },
              ],
              correctChoiceId: "a",
              explanation: "AWS creates a default VPC in each Region with public subnets and IGW.",
            },
            {
              id: "vpc-b4",
              prompt: "NACL rules are evaluated:",
              choices: [
                { id: "a", text: "In order by rule number (stateless)" },
                { id: "b", text: "Randomly" },
                { id: "c", text: "Only for outbound S3" },
                { id: "d", text: "By root user password" },
              ],
              correctChoiceId: "a",
              explanation: "NACLs evaluate rules in order; they are stateless—return traffic needs explicit allow.",
            },
            {
              id: "vpc-b5",
              prompt: "VPC peering allows:",
              choices: [
                { id: "a", text: "Private routing between two VPCs" },
                { id: "b", text: "Public internet bypass only" },
                { id: "c", text: "IAM user creation" },
                { id: "d", text: "Glacier retrieval" },
              ],
              correctChoiceId: "a",
              explanation: "Peering connects VPCs privately using private IP addresses.",
            },
            {
              id: "vpc-b6",
              prompt: "Direct Connect provides:",
              choices: [
                { id: "a", text: "Dedicated private network connection to AWS" },
                { id: "b", text: "Free unlimited EC2" },
                { id: "c", text: "S3 object versioning" },
                { id: "d", text: "Lambda layers" },
              ],
              correctChoiceId: "a",
              explanation: "Direct Connect establishes dedicated network links from on-premises to AWS.",
            },
            {
              id: "vpc-b7",
              prompt: "Bastion host pattern places jump box in:",
              choices: [
                { id: "a", text: "Public subnet for controlled SSH access to private instances" },
                { id: "b", text: "Glacier vault" },
                { id: "c", text: "IAM group" },
                { id: "d", text: "CloudFront origin only" },
              ],
              correctChoiceId: "a",
              explanation: "Bastion hosts in public subnets allow SSH to private resources with restricted SG rules.",
            },
            {
              id: "vpc-b8",
              prompt: "Flow logs capture:",
              choices: [
                { id: "a", text: "IP traffic metadata for VPC/subnet/ENI" },
                { id: "b", text: "Database query text always" },
                { id: "c", text: "IAM policy JSON" },
                { id: "d", text: "S3 object contents" },
              ],
              correctChoiceId: "a",
              explanation: "VPC Flow Logs record accepted/rejected IP traffic information.",
            },
          ],
        },
        {
          id: "iam",
          name: "AWS IAM",
          lesson: {
            title: "AWS Identity and Access Management (IAM)",
            content: `AWS IAM controls who can access AWS resources and what actions they can perform. It is a global service—users, groups, roles, and policies are not tied to a specific Region.

IAM users represent people or applications with long-term credentials. IAM groups collect users for easier policy management. IAM roles provide temporary credentials and are assumed by users, applications, or AWS services—preferred over embedding access keys.

Policies are JSON documents defining permissions. Identity-based policies attach to users, groups, or roles. Resource-based policies attach to resources like S3 buckets. The principle of least privilege means granting only permissions required for a task.

Multi-factor authentication (MFA) adds a second factor beyond passwords. IAM Access Analyzer identifies resources shared externally. AWS Organizations uses service control policies (SCPs) to set permission guardrails across accounts.

The root user has unrestricted account access and should not be used for daily tasks. Create IAM users or use federation (SAML, OIDC) for workforce access. IAM credentials report and access advisor help audit permissions.

IAM Identity Center (formerly AWS SSO) provides centralized workforce access to multiple AWS accounts and applications with SAML/OIDC federation.

Permission boundaries set maximum permissions an IAM entity can receive—even if policies grant more.

IAM Roles for Service Accounts attach roles to workloads without embedding keys.

AWS STS (Security Token Service) issues temporary credentials when assuming roles. Federation users receive temporary credentials after authenticating with corporate identity.

Service control policies (SCPs) in Organizations restrict what member accounts can do—they do not grant permissions by themselves.`,
          },
          keyFacts: [
            "IAM is global—users, groups, roles, and policies are not Region-specific",
            "Roles provide temporary credentials; prefer roles over long-term access keys",
            "Policies are JSON documents that define allow/deny permissions",
            "Root user has full account access—avoid for daily operations",
            "MFA adds an extra authentication factor for enhanced security",
            "Least privilege means granting only the minimum permissions needed",
          ],
          guidedExample: {
            title: "Grant a Developer Least-Privilege S3 Access via IAM Role",
            steps: [
              "Identify the requirement: developers need read/write to s3://project-data/* only, no delete or bucket admin.",
              "Create an IAM policy with Allow s3:GetObject and s3:PutObject on arn:aws:s3:::project-data/* and explicit Deny on s3:DeleteObject.",
              "Create an IAM group 'Developers' and attach the policy to the group instead of individual users.",
              "Add developer IAM users to the group—never share access keys between people.",
              "Enable MFA on all IAM users with console access.",
              "Verify with IAM Access Analyzer that no unintended public or cross-account access exists.",
            ],
          },
          commonMistakes: [
            "Using the root user for daily development tasks",
            "Embedding long-term access keys in application source code",
            "Granting AdministratorAccess when a scoped custom policy suffices",
            "Confusing IAM users with IAM roles for EC2 and Lambda workloads",
            "Assuming IAM policies are Region-specific like EC2 instances",
          ],
          examTraps: [
            "IAM role for EC2/Lambda vs IAM user with access keys scenarios",
            "Resource-based S3 bucket policy vs identity-based IAM policy",
            "SCP in Organizations vs IAM policy permission boundaries",
            "Root user cannot be restricted by IAM policies trick question",
            "STS temporary credentials from AssumeRole vs permanent access keys",
          ],
          realWorldScenario: "A fintech company onboarded five contractors who need to upload reports to a single S3 prefix. Instead of sharing root credentials, you create an IAM group with a least-privilege policy scoped to s3://reports/incoming/*, require MFA for console login, assign an EC2 instance role (not user keys) for the automated upload service, and run IAM Access Analyzer weekly to catch any bucket policies that accidentally grant public access.",
          estimatedStudyMinutes: 30,
          difficulty: "medium",
          prerequisites: ["shared-responsibility-model"],
          quiz: [
            {
              id: "iam-q1",
              prompt: "Which IAM entity should applications use to access AWS services?",
              choices: [
                { id: "a", text: "Root user access keys" },
                { id: "b", text: "IAM roles with temporary credentials" },
                { id: "c", text: "Public S3 URLs" },
                { id: "d", text: "Unauthenticated API calls" },
              ],
              correctChoiceId: "b",
              explanation:
                "IAM roles provide temporary security credentials via STS. Applications should assume roles rather than using long-term access keys.",
            },
            {
              id: "iam-q2",
              prompt: "What is the principle of least privilege?",
              choices: [
                { id: "a", text: "Grant administrators all permissions" },
                { id: "b", text: "Grant only permissions required to perform a task" },
                { id: "c", text: "Share root credentials with the team" },
                { id: "d", text: "Disable MFA for convenience" },
              ],
              correctChoiceId: "b",
              explanation:
                "Least privilege limits permissions to the minimum needed, reducing blast radius if credentials are compromised.",
            },
            {
              id: "iam-q3",
              prompt: "IAM is scoped at which level?",
              choices: [
                { id: "a", text: "Per Availability Zone" },
                { id: "b", text: "Per Region" },
                { id: "c", text: "Global (account-wide)" },
                { id: "d", text: "Per VPC only" },
              ],
              correctChoiceId: "c",
              explanation:
                "IAM is a global service. Users, groups, roles, and policies apply across all Regions in an AWS account.",
            },
            {
              id: "iam-q4",
              prompt: "What format are IAM permissions defined in?",
              choices: [
                { id: "a", text: "XML configuration files" },
                { id: "b", text: "JSON policy documents" },
                { id: "c", text: "Plain text passwords" },
                { id: "d", text: "Binary certificates only" },
              ],
              correctChoiceId: "b",
              explanation:
                "IAM policies are JSON documents specifying Effect (Allow/Deny), Action, Resource, and optional Condition elements.",
            },
            {
              id: "iam-q5",
              prompt: "Why should you avoid using the root user for daily tasks?",
              choices: [
                { id: "a", text: "Root user cannot access S3" },
                { id: "b", text: "Root user has unrestricted access and cannot be limited by IAM policies" },
                { id: "c", text: "Root user is Region-specific" },
                { id: "d", text: "Root user credentials expire hourly" },
              ],
              correctChoiceId: "b",
              explanation:
                "The root user has full account access and cannot be restricted by IAM policies. Use IAM users or roles with limited permissions instead.",
            },
          ],
          flashcards: [
            {
              id: "iam-f1",
              front: "IAM scope?",
              back: "Global service—applies account-wide, not per Region",
            },
            {
              id: "iam-f2",
              front: "Roles vs users for applications?",
              back: "Use roles with temporary credentials; avoid long-term access keys",
            },
            {
              id: "iam-f3",
              front: "Least privilege?",
              back: "Grant only the minimum permissions needed to perform a task",
            },
            {
              id: "iam-f4",
              front: "What does STS provide?",
              back: "Temporary security credentials when assuming roles",
            },
            {
              id: "iam-f5",
              front: "Identity-based vs resource-based policies?",
              back: "Identity: attached to users/groups/roles. Resource: attached to S3 bucket etc.",
            },
            {
              id: "iam-f6",
              front: "What are SCPs?",
              back: "Organization guardrails limiting max permissions in member accounts",
            },
          ],
          objectives: ["CLF-C02-5.1","CLF-C02-5.2","CLF-C02-5.3"],
          practiceType: ["reading","quiz","flashcard","simulator"],
          questionBank: [
            {
              id: "iam-b1",
              prompt: "IAM Access Analyzer helps:",
              choices: [
                { id: "a", text: "Identify resources shared externally" },
                { id: "b", text: "Launch EC2 Spot Instances" },
                { id: "c", text: "Create S3 buckets" },
                { id: "d", text: "Replace CloudWatch" },
              ],
              correctChoiceId: "a",
              explanation: "Access Analyzer flags unintended external access to resources.",
            },
            {
              id: "iam-b2",
              prompt: "Federation allows:",
              choices: [
                { id: "a", text: "Corporate identity users to access AWS with temporary credentials" },
                { id: "b", text: "Anonymous public admin access" },
                { id: "c", text: "Sharing root passwords" },
                { id: "d", text: "Disabling MFA always" },
              ],
              correctChoiceId: "a",
              explanation: "SAML/OIDC federation maps corporate identities to AWS roles with STS credentials.",
            },
            {
              id: "iam-b3",
              prompt: "An IAM policy Deny statement:",
              choices: [
                { id: "a", text: "Overrides Allow in all cases" },
                { id: "b", text: "Is ignored always" },
                { id: "c", text: "Only applies to S3 Glacier" },
                { id: "d", text: "Requires root user" },
              ],
              correctChoiceId: "a",
              explanation: "Explicit Deny always wins over Allow in AWS authorization evaluation.",
            },
            {
              id: "iam-b4",
              prompt: "IAM groups can:",
              choices: [
                { id: "a", text: "Attach policies applied to all member users" },
                { id: "b", text: "Assume roles by EC2 automatically" },
                { id: "c", text: "Replace VPC route tables" },
                { id: "d", text: "Store S3 objects" },
              ],
              correctChoiceId: "a",
              explanation: "Groups simplify permission management by applying policies to multiple users.",
            },
            {
              id: "iam-b5",
              prompt: "MFA should be enabled on:",
              choices: [
                { id: "a", text: "Privileged users including root" },
                { id: "b", text: "No accounts ever" },
                { id: "c", text: "S3 buckets only" },
                { id: "d", text: "CloudFront distributions only" },
              ],
              correctChoiceId: "a",
              explanation: "MFA adds a second factor—critical for root and privileged IAM users.",
            },
            {
              id: "iam-b6",
              prompt: "Instance profile is:",
              choices: [
                { id: "a", text: "Container for IAM role credentials on EC2" },
                { id: "b", text: "S3 storage class" },
                { id: "c", text: "RDS snapshot" },
                { id: "d", text: "Route 53 record" },
              ],
              correctChoiceId: "a",
              explanation: "Instance profiles deliver role credentials to EC2 instances automatically.",
            },
            {
              id: "iam-b7",
              prompt: "Cross-account access commonly uses:",
              choices: [
                { id: "a", text: "IAM roles trusted by another account" },
                { id: "b", text: "Sharing root access keys" },
                { id: "c", text: "Public NACL 0.0.0.0/0" },
                { id: "d", text: "Disabling CloudTrail" },
              ],
              correctChoiceId: "a",
              explanation: "Roles with cross-account trust policies enable secure cross-account access.",
            },
            {
              id: "iam-b8",
              prompt: "Credential report shows:",
              choices: [
                { id: "a", text: "Status of passwords, access keys, and MFA for users" },
                { id: "b", text: "EC2 CPU graphs" },
                { id: "c", text: "S3 object sizes" },
                { id: "d", text: "Lambda cold starts" },
              ],
              correctChoiceId: "a",
              explanation: "IAM credential reports audit user credential hygiene across the account.",
            },
          ],
        },
        {
          id: "shared-responsibility-model",
          name: "Shared Responsibility Model",
          lesson: {
            title: "The AWS Shared Responsibility Model",
            content: `Security and compliance in AWS is a shared responsibility between AWS and the customer. AWS is responsible for security OF the cloud—the underlying infrastructure, hardware, software, networking, and facilities that run AWS services.

Customers are responsible for security IN the cloud—what they put in the cloud. This includes data classification and protection, identity and access management, operating system and network configuration, client-side encryption, and patching applications.

The division shifts based on the service model. For IaaS (EC2), you manage the guest OS, patching, firewalls, and data. For PaaS (RDS), AWS manages the OS and platform; you manage data and access. For SaaS (WorkSpaces), AWS manages more layers; you manage data and user access.

AWS handles physical security, hypervisor patching, and global infrastructure resilience. You handle IAM policies, security group rules, encryption choices, and ensuring applications are securely coded.

Understanding this model is critical for the Cloud Practitioner exam. When asked who is responsible for a task, consider whether it involves the underlying cloud infrastructure (AWS) or your data and configuration (customer).

Shared controls apply to both parties—patching infrastructure components AWS manages vs. guest OS customer manages on EC2. Customer-specific controls are entirely the customer's responsibility, such as data classification.

Compliance: AWS maintains certifications (SOC, ISO, PCI) for infrastructure; customers must configure services compliantly and protect data.

Examples for exam: AWS manages physical security and hypervisor; customer manages security groups and data encryption choices. AWS manages RDS patching; customer manages database user permissions.

AWS Artifact provides on-demand access to AWS compliance reports. Customers still must implement their side of controls.`,
          },
          keyFacts: [
            "AWS secures the cloud (infrastructure); customers secure their data and configurations in the cloud",
            "For EC2, customers patch the guest OS; for RDS, AWS patches the database engine",
            "Customers manage IAM, security groups, encryption settings, and data classification",
            "AWS manages physical data center security and hypervisor maintenance",
            "Responsibility shifts based on service model—IaaS vs PaaS vs SaaS",
            "Both parties share responsibility for network security and configuration",
          ],
          commonMistakes: [
            "Assuming AWS manages everything in all service models",
            "Confusing customer responsibility for IaaS vs SaaS vs PaaS",
            "Believing AWS patches customer application code on EC2",
            "Mixing up security OF the cloud vs security IN the cloud",
            "Forgetting customer owns data classification and IAM configuration",
          ],
          examTraps: [
            "Who patches the OS on EC2 vs who patches RDS engine",
            "Customer responsibility for encryption key management with KMS",
            "Physical security of data centers always AWS responsibility",
            "Lambda shared responsibility vs EC2 shared responsibility differences",
            "Compliance certification scope—AWS attests infrastructure, customer attests usage",
          ],
          quiz: [
            {
              id: "shared-responsibility-model-q1",
              prompt: "Who is responsible for patching the guest operating system on EC2?",
              choices: [
                { id: "a", text: "AWS only" },
                { id: "b", text: "The customer" },
                { id: "c", text: "Neither—OS patching is not required" },
                { id: "d", text: "Third-party auditors only" },
              ],
              correctChoiceId: "b",
              explanation:
                "On EC2 (IaaS), the customer manages and patches the guest operating system. AWS manages the underlying infrastructure.",
            },
            {
              id: "shared-responsibility-model-q2",
              prompt: "Which is AWS's responsibility in the shared model?",
              choices: [
                { id: "a", text: "Customer data encryption choices" },
                { id: "b", text: "Physical security of data centers" },
                { id: "c", text: "IAM user password policies" },
                { id: "d", text: "Application code security" },
              ],
              correctChoiceId: "b",
              explanation:
                "AWS is responsible for security OF the cloud, including physical data center security, hardware, and hypervisor maintenance.",
            },
            {
              id: "shared-responsibility-model-q3",
              prompt: "For Amazon RDS, who patches the database engine?",
              choices: [
                { id: "a", text: "The customer exclusively" },
                { id: "b", text: "AWS manages engine patching; customer manages data access" },
                { id: "c", text: "No patching is ever needed" },
                { id: "d", text: "Only during business hours by the customer" },
              ],
              correctChoiceId: "b",
              explanation:
                "RDS is a managed service—AWS patches the database engine. Customers manage data, schemas, and access controls.",
            },
            {
              id: "shared-responsibility-model-q4",
              prompt: "Who configures security groups for EC2 instances?",
              choices: [
                { id: "a", text: "AWS automatically configures all rules" },
                { id: "b", text: "The customer" },
                { id: "c", text: "AWS Support on request only" },
                { id: "d", text: "Internet Service Providers" },
              ],
              correctChoiceId: "b",
              explanation:
                "Customers configure security groups, NACLs, and network settings—part of security IN the cloud.",
            },
            {
              id: "shared-responsibility-model-q5",
              prompt: "How does responsibility change moving from IaaS to SaaS?",
              choices: [
                { id: "a", text: "Customer takes on more infrastructure tasks" },
                { id: "b", text: "AWS manages more layers; customer focuses on data and access" },
                { id: "c", text: "All responsibility shifts to AWS" },
                { id: "d", text: "Responsibility stays identical" },
              ],
              correctChoiceId: "b",
              explanation:
                "As you move up the stack (IaaS → PaaS → SaaS), AWS manages more of the stack while customers focus on data, identity, and application configuration.",
            },
          ],
          flashcards: [
            {
              id: "shared-responsibility-model-f1",
              front: "AWS responsibility?",
              back: "Security OF the cloud—hardware, facilities, hypervisor, global infrastructure",
            },
            {
              id: "shared-responsibility-model-f2",
              front: "Customer responsibility?",
              back: "Security IN the cloud—data, IAM, OS patching (EC2), security groups",
            },
            {
              id: "shared-responsibility-model-f3",
              front: "Who patches RDS database engine?",
              back: "AWS (managed service); customer manages data and access",
            },
            {
              id: "shared-responsibility-model-f4",
              front: "Who encrypts data in S3 at rest?",
              back: "Customer chooses/configures encryption; AWS provides options and infrastructure",
            },
            {
              id: "shared-responsibility-model-f5",
              front: "AWS Artifact provides?",
              back: "On-demand AWS compliance documentation and reports",
            },
            {
              id: "shared-responsibility-model-f6",
              front: "Lambda patching responsibility?",
              back: "AWS manages runtime/infrastructure; customer manages function code and IAM",
            },
          ],
          objectives: ["CLF-C02-5.4","CLF-C02-5.5"],
          practiceType: ["reading","quiz","flashcard"],
          questionBank: [
            {
              id: "shared-responsibility-model-b1",
              prompt: "Customer configures network ACLs—this is:",
              choices: [
                { id: "a", text: "Security IN the cloud" },
                { id: "b", text: "Security OF the cloud" },
                { id: "c", text: "AWS-only task" },
                { id: "d", text: "Not required" },
              ],
              correctChoiceId: "a",
              explanation: "Network configuration within VPC is customer responsibility.",
            },
            {
              id: "shared-responsibility-model-b2",
              prompt: "Hypervisor patching is:",
              choices: [
                { id: "a", text: "AWS responsibility" },
                { id: "b", text: "Customer responsibility on EC2" },
                { id: "c", text: "Never patched" },
                { id: "d", text: "Handled by S3" },
              ],
              correctChoiceId: "a",
              explanation: "AWS patches and maintains the virtualization layer beneath EC2.",
            },
            {
              id: "shared-responsibility-model-b3",
              prompt: "For SaaS like Amazon Chime, customer primarily manages:",
              choices: [
                { id: "a", text: "User access and data shared in the service" },
                { id: "b", text: "Physical data center hardware" },
                { id: "c", text: "Hypervisor firmware" },
                { id: "d", text: "Global fiber cables" },
              ],
              correctChoiceId: "a",
              explanation: "Higher in the stack, customers focus on data and who can access the application.",
            },
            {
              id: "shared-responsibility-model-b4",
              prompt: "Client-side encryption is:",
              choices: [
                { id: "a", text: "Customer responsibility before data reaches AWS" },
                { id: "b", text: "AWS-only automatic always" },
                { id: "c", text: "Provided by CloudFront only" },
                { id: "d", text: "Not supported" },
              ],
              correctChoiceId: "a",
              explanation: "Customers encrypt data on their side before upload if using client-side encryption.",
            },
            {
              id: "shared-responsibility-model-b5",
              prompt: "AWS manages which aspect of Lambda?",
              choices: [
                { id: "a", text: "Underlying infrastructure and runtime patching" },
                { id: "b", text: "Business logic inside your function code" },
                { id: "c", text: "Your IAM policy design" },
                { id: "d", text: "Data classification labels" },
              ],
              correctChoiceId: "a",
              explanation: "AWS operates the Lambda service; customers write code and configure permissions.",
            },
            {
              id: "shared-responsibility-model-b6",
              prompt: "Compliance of stored data content is generally:",
              choices: [
                { id: "a", text: "Customer responsibility" },
                { id: "b", text: "AWS chooses all data classifications" },
                { id: "c", text: "Automatic with no customer action" },
                { id: "d", text: "Only root user task" },
              ],
              correctChoiceId: "a",
              explanation: "Customers classify and protect their data according to regulatory requirements.",
            },
            {
              id: "shared-responsibility-model-b7",
              prompt: "Shared controls include:",
              choices: [
                { id: "a", text: "Patching and configuration management split by layer" },
                { id: "b", text: "Customer owns all physical security" },
                { id: "c", text: "AWS owns all IAM decisions" },
                { id: "d", text: "Neither party patches anything" },
              ],
              correctChoiceId: "a",
              explanation: "Some controls like patching apply differently depending on service layer.",
            },
            {
              id: "shared-responsibility-model-b8",
              prompt: "Security groups on RDS are configured by:",
              choices: [
                { id: "a", text: "The customer" },
                { id: "b", text: "AWS automatically with no changes allowed" },
                { id: "c", text: "Internet providers" },
                { id: "d", text: "Glacier service" },
              ],
              correctChoiceId: "a",
              explanation: "Customers define security group rules controlling database network access.",
            },
          ],
        },
      ],
    },
    {
      id: "monitoring-architecture",
      name: "Monitoring & Architecture",
      topics: [
        {
          id: "cloudwatch",
          name: "Amazon CloudWatch",
          lesson: {
            title: "Monitoring with Amazon CloudWatch",
            content: `Amazon CloudWatch is AWS's monitoring and observability service. It collects operational data as metrics, logs, and events, providing a unified view of AWS resources and applications.

Metrics are time-ordered data points—CPU utilization, network traffic, disk I/O. Default metrics are free for many AWS services. Custom metrics let you publish application-specific data. Standard resolution is 1 minute; high-resolution metrics can be 1 second.

CloudWatch Alarms watch metrics and trigger actions when thresholds are breached—such as notifying via SNS, auto-scaling EC2, or stopping instances. Alarms can be in OK, ALARM, or INSUFFICIENT_DATA states.

CloudWatch Logs centralizes log files from EC2, Lambda, CloudTrail, and other sources. Log groups organize streams; metric filters extract numeric data from logs. CloudWatch Logs Insights queries log data interactively.

CloudWatch Dashboards visualize metrics and alarms in a single pane. CloudWatch Events (integrated with EventBridge) responds to system events on a schedule or in real time. The CloudWatch Agent collects custom OS-level metrics and logs from EC2 instances.

CloudWatch Synthetics runs canaries—scheduled scripts monitoring endpoints and APIs. Anomaly detection uses ML to detect unusual metric patterns.

Contributor Insights analyzes log data to find top contributors to latency or errors—useful for troubleshooting.

Integration: Auto Scaling uses CloudWatch alarms; SNS sends notifications; EventBridge routes events to Lambda.

CloudWatch vs CloudTrail: CloudWatch monitors performance and logs; CloudTrail records AWS API activity for auditing.

Default EC2 metrics (CPU, network, disk) do not include memory or disk space unless CloudWatch Agent is installed.`,
          },
          keyFacts: [
            "CloudWatch collects metrics, logs, and events for monitoring AWS resources",
            "Alarms trigger actions when metrics cross defined thresholds",
            "CloudWatch Logs centralizes logs from EC2, Lambda, and other services",
            "Custom metrics let you publish application-specific monitoring data",
            "Dashboards provide visual summaries of metrics and alarms",
            "CloudWatch Agent collects OS-level metrics and logs from EC2 instances",
          ],
          commonMistakes: [
            "Confusing CloudWatch with CloudTrail (metrics vs API audit logs)",
            "Assuming CloudWatch Logs and CloudWatch Metrics are the same service feature",
            "Mixing up CloudWatch Alarms with SNS notifications purpose",
            "Believing CloudWatch is only for EC2 monitoring",
            "Forgetting default vs custom metric distinction and retention periods",
          ],
          examTraps: [
            "CloudTrail for who did what vs CloudWatch for performance metrics",
            "CloudWatch Events/EventBridge scheduling vs CloudWatch Alarms",
            "Log retention costs and default metric granularity questions",
            "Dashboard vs alarm vs SNS action chain scenarios",
            "X-Ray distributed tracing vs CloudWatch Logs application logging",
          ],
          quiz: [
            {
              id: "cloudwatch-q1",
              prompt: "What does a CloudWatch Alarm do when a metric exceeds a threshold?",
              choices: [
                { id: "a", text: "Deletes the resource automatically" },
                { id: "b", text: "Triggers configured actions like SNS notifications or Auto Scaling" },
                { id: "c", text: "Encrypts all data at rest" },
                { id: "d", text: "Creates a new VPC" },
              ],
              correctChoiceId: "b",
              explanation:
                "Alarms monitor metrics and execute actions—SNS notifications, Auto Scaling changes, EC2 actions—when thresholds are breached.",
            },
            {
              id: "cloudwatch-q2",
              prompt: "Which CloudWatch feature centralizes log files from multiple sources?",
              choices: [
                { id: "a", text: "CloudWatch Metrics" },
                { id: "b", text: "CloudWatch Logs" },
                { id: "c", text: "CloudWatch Dashboards" },
                { id: "d", text: "AWS Config" },
              ],
              correctChoiceId: "b",
              explanation:
                "CloudWatch Logs ingests, stores, and queries log data from EC2 instances, Lambda, CloudTrail, and custom applications.",
            },
            {
              id: "cloudwatch-q3",
              prompt: "What are CloudWatch metrics?",
              choices: [
                { id: "a", text: "Encrypted backup snapshots" },
                { id: "b", text: "Time-ordered data points measuring resource performance" },
                { id: "c", text: "IAM policy documents" },
                { id: "d", text: "S3 lifecycle rules" },
              ],
              correctChoiceId: "b",
              explanation:
                "Metrics are numeric data points over time—such as CPU utilization or request count—used to monitor resource health and performance.",
            },
            {
              id: "cloudwatch-q4",
              prompt: "How can you monitor custom application data in CloudWatch?",
              choices: [
                { id: "a", text: "Publish custom metrics via API" },
                { id: "b", text: "Custom metrics are not supported" },
                { id: "c", text: "Only AWS can publish metrics" },
                { id: "d", text: "Via S3 bucket policies only" },
              ],
              correctChoiceId: "a",
              explanation:
                "You can publish custom metrics using the PutMetricData API or CloudWatch Agent to track application-specific measurements.",
            },
            {
              id: "cloudwatch-q5",
              prompt: "What is the default resolution for standard CloudWatch metrics?",
              choices: [
                { id: "a", text: "1 second" },
                { id: "b", text: "1 minute" },
                { id: "c", text: "5 minutes" },
                { id: "d", text: "1 hour" },
              ],
              correctChoiceId: "b",
              explanation:
                "Standard resolution metrics are stored at 1-minute intervals. High-resolution metrics can be as granular as 1 second.",
            },
          ],
          flashcards: [
            {
              id: "cloudwatch-f1",
              front: "CloudWatch purpose?",
              back: "Monitoring and observability—metrics, logs, alarms, and dashboards",
            },
            {
              id: "cloudwatch-f2",
              front: "CloudWatch Alarm actions?",
              back: "SNS notifications, Auto Scaling changes, EC2 stop/terminate/reboot",
            },
            {
              id: "cloudwatch-f3",
              front: "Standard metric resolution?",
              back: "1 minute (high-resolution available at 1 second)",
            },
            {
              id: "cloudwatch-f4",
              front: "CloudWatch vs CloudTrail?",
              back: "CloudWatch: metrics/logs/alarms. CloudTrail: API audit trail",
            },
            {
              id: "cloudwatch-f5",
              front: "What is a canary?",
              back: "Synthetics script that periodically checks endpoints and alerts on failure",
            },
            {
              id: "cloudwatch-f6",
              front: "Default EC2 memory metrics?",
              back: "Not included—install CloudWatch Agent for OS-level memory/disk metrics",
            },
          ],
          objectives: ["CLF-C02-6.1","CLF-C02-6.2"],
          practiceType: ["reading","quiz","flashcard"],
          questionBank: [
            {
              id: "cloudwatch-b1",
              prompt: "CloudWatch Logs Insights allows:",
              choices: [
                { id: "a", text: "Interactive query and analysis of log data" },
                { id: "b", text: "EC2 instance launch" },
                { id: "c", text: "IAM user deletion" },
                { id: "d", text: "S3 bucket naming" },
              ],
              correctChoiceId: "a",
              explanation: "Logs Insights runs queries against log groups to analyze patterns and errors.",
            },
            {
              id: "cloudwatch-b2",
              prompt: "Alarm states include:",
              choices: [
                { id: "a", text: "OK, ALARM, INSUFFICIENT_DATA" },
                { id: "b", text: "RUNNING, STOPPED only" },
                { id: "c", text: "PUBLIC, PRIVATE" },
                { id: "d", text: "ACTIVE, RETIRED" },
              ],
              correctChoiceId: "a",
              explanation: "Alarms transition between OK, ALARM, and INSUFFICIENT_DATA based on metrics.",
            },
            {
              id: "cloudwatch-b3",
              prompt: "Metric filters can:",
              choices: [
                { id: "a", text: "Extract numeric metrics from log patterns" },
                { id: "b", text: "Replace VPC routing" },
                { id: "c", text: "Delete all logs automatically" },
                { id: "d", text: "Disable MFA" },
              ],
              correctChoiceId: "a",
              explanation: "Metric filters turn log text matches into CloudWatch metrics for alarming.",
            },
            {
              id: "cloudwatch-b4",
              prompt: "CloudTrail is best for:",
              choices: [
                { id: "a", text: "Auditing who made which AWS API calls" },
                { id: "b", text: "CPU utilization graphs only" },
                { id: "c", text: "S3 storage class selection" },
                { id: "d", text: "Lambda memory sizing" },
              ],
              correctChoiceId: "a",
              explanation: "CloudTrail logs API activity; CloudWatch monitors operational metrics.",
            },
            {
              id: "cloudwatch-b5",
              prompt: "Dashboards can display:",
              choices: [
                { id: "a", text: "Metrics and alarms in one view" },
                { id: "b", text: "Only billing invoices" },
                { id: "c", text: "IAM root passwords" },
                { id: "d", text: "Physical rack layouts" },
              ],
              correctChoiceId: "a",
              explanation: "Dashboards visualize metrics and alarm status for operational visibility.",
            },
            {
              id: "cloudwatch-b6",
              prompt: "High-resolution metrics can granularity down to:",
              choices: [
                { id: "a", text: "1 second" },
                { id: "b", text: "1 day" },
                { id: "c", text: "1 month" },
                { id: "d", text: "Not supported" },
              ],
              correctChoiceId: "a",
              explanation: "High-resolution custom metrics support 1-second granularity.",
            },
            {
              id: "cloudwatch-b7",
              prompt: "Auto Scaling can be triggered by:",
              choices: [
                { id: "a", text: "CloudWatch alarms on metrics like CPU" },
                { id: "b", text: "S3 bucket names only" },
                { id: "c", text: "IAM group membership" },
                { id: "d", text: "Edge location count" },
              ],
              correctChoiceId: "a",
              explanation: "Scaling policies respond to CloudWatch metrics and alarms.",
            },
            {
              id: "cloudwatch-b8",
              prompt: "CloudWatch Agent collects:",
              choices: [
                { id: "a", text: "Custom OS metrics and logs from EC2/on-premises" },
                { id: "b", text: "Only S3 object counts" },
                { id: "c", text: "Root user sessions only" },
                { id: "d", text: "Glacier retrieval schedules" },
              ],
              correctChoiceId: "a",
              explanation: "The unified CloudWatch Agent publishes system-level metrics and logs.",
            },
          ],
        },
        {
          id: "well-architected-framework",
          name: "Well-Architected Framework",
          lesson: {
            title: "AWS Well-Architected Framework",
            content: `The AWS Well-Architected Framework provides architectural best practices across six pillars to help you build secure, high-performing, resilient, and efficient workloads.

Operational Excellence focuses on running and monitoring systems to deliver business value and continually improve processes. Automate changes, respond to events, and learn from failures.

Security protects information and systems. Implement strong identity controls, traceability, security at all layers, automate security best practices, protect data in transit and at rest, and prepare for security events.

Reliability ensures workloads perform correctly and consistently. Recover from failures, meet demand, mitigate disruptions, and use distributed system design with automatic recovery.

Performance Efficiency uses computing resources efficiently and adapts to changing technologies. Right-size resources, monitor performance, and make informed trade-offs.

Cost Optimization avoids unnecessary costs. Adopt a consumption model, measure efficiency, eliminate unneeded resources, and use appropriate pricing models like Reserved Instances.

Sustainability minimizes environmental impacts. Understand impact, establish sustainability goals, maximize utilization, and adopt efficient services and Region selection.

The AWS Well-Architected Tool is a free console service that guides workload reviews against the six pillars with actionable recommendations.

Operational Excellence: Infrastructure as code (CloudFormation, Terraform), runbooks, and blameless post-mortems.

Security: Apply defense in depth, automate compliance checks with Config and Security Hub, protect data everywhere.

Reliability: Test recovery procedures, use quotas and limits monitoring, plan for change.

Performance Efficiency: Use serverless and managed services where appropriate; experiment with proof-of-concepts.

Cost Optimization: Use Cost Explorer, Budgets, and right-sizing recommendations.

Sustainability: Right-size to reduce waste; use Graviton processors where applicable for energy efficiency.`,
          },
          keyFacts: [
            "Six pillars: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability",
            "Security pillar emphasizes least privilege, encryption, and automated security practices",
            "Reliability includes multi-AZ design and automatic failure recovery",
            "Cost Optimization recommends right-sizing and matching pricing models to usage",
            "Performance Efficiency focuses on selecting the right resource types and sizes",
            "Well-Architected Tool provides free architectural reviews against best practices",
          ],
          guidedExample: {
            title: "Map Architecture Decisions to Well-Architected Pillars",
            steps: [
              "List the six pillars: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability.",
              "Review a sample workload: single-AZ EC2, no backups, open security group, oversized instances.",
              "Map single-AZ design to Reliability risk—add Multi-AZ and automated recovery.",
              "Map open security group to Security pillar—apply least privilege and encryption.",
              "Map oversized instances to Cost Optimization and Performance Efficiency—right-size and use appropriate pricing models.",
              "Run the AWS Well-Architected Tool review and document high-risk findings with remediation steps.",
            ],
          },
          commonMistakes: [
            "Memorizing only five pillars and forgetting Sustainability",
            "Confusing Reliability with Performance Efficiency",
            "Assuming Cost Optimization means always choosing the cheapest service",
            "Mixing up Operational Excellence with Reliability practices",
            "Believing Well-Architected reviews are paid consulting engagements only",
          ],
          examTraps: [
            "Multi-AZ deployment mapped to Reliability, not Cost Optimization",
            "Encryption and least privilege mapped to Security pillar scenarios",
            "Right-sizing and Reserved Instances mapped to Cost Optimization",
            "Automation and runbooks mapped to Operational Excellence",
            "Graviton processors and utilization mapped to Sustainability pillar",
          ],
          realWorldScenario: "Before a major product launch, your team runs a Well-Architected review on the payment processing workload. You discover single-AZ RDS, no CloudWatch alarms, and m5.4xlarge instances running at 10% CPU. You document Reliability fixes (Multi-AZ, backups), Security improvements (encryption, IAM roles), and Cost Optimization actions (right-size to m5.large, purchase Savings Plans), then track remediation in the Well-Architected Tool.",
          estimatedStudyMinutes: 25,
          difficulty: "easy",
          prerequisites: ["cloud-concepts", "ec2", "vpc"],
          quiz: [
            {
              id: "well-architected-framework-q1",
              prompt: "How many pillars are in the AWS Well-Architected Framework?",
              choices: [
                { id: "a", text: "4" },
                { id: "b", text: "5" },
                { id: "c", text: "6" },
                { id: "d", text: "8" },
              ],
              correctChoiceId: "c",
              explanation:
                "The six pillars are Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability.",
            },
            {
              id: "well-architected-framework-q2",
              prompt: "Which pillar focuses on avoiding unnecessary spending?",
              choices: [
                { id: "a", text: "Security" },
                { id: "b", text: "Cost Optimization" },
                { id: "c", text: "Reliability" },
                { id: "d", text: "Sustainability" },
              ],
              correctChoiceId: "b",
              explanation:
                "Cost Optimization pillar practices include right-sizing, using appropriate pricing models, and eliminating unused resources.",
            },
            {
              id: "well-architected-framework-q3",
              prompt: "Multi-AZ deployments primarily support which pillar?",
              choices: [
                { id: "a", text: "Cost Optimization" },
                { id: "b", text: "Reliability" },
                { id: "c", text: "Sustainability" },
                { id: "d", text: "Performance Efficiency only" },
              ],
              correctChoiceId: "b",
              explanation:
                "Reliability pillar best practices include designing for failure, using multiple AZs, and enabling automatic recovery from disruptions.",
            },
            {
              id: "well-architected-framework-q4",
              prompt: "Least privilege and encryption align with which pillar?",
              choices: [
                { id: "a", text: "Operational Excellence" },
                { id: "b", text: "Security" },
                { id: "c", text: "Performance Efficiency" },
                { id: "d", text: "Cost Optimization" },
              ],
              correctChoiceId: "b",
              explanation:
                "The Security pillar covers identity management, encryption, and protecting data in transit and at rest.",
            },
            {
              id: "well-architected-framework-q5",
              prompt: "Right-sizing EC2 instances is a practice of which pillar?",
              choices: [
                { id: "a", text: "Performance Efficiency and Cost Optimization" },
                { id: "b", text: "Security only" },
                { id: "c", text: "Sustainability only" },
                { id: "d", text: "Operational Excellence only" },
              ],
              correctChoiceId: "a",
              explanation:
                "Right-sizing matches resources to workload needs—improving performance efficiency while avoiding over-provisioning costs.",
            },
          ],
          flashcards: [
            {
              id: "well-architected-framework-f1",
              front: "Six Well-Architected pillars?",
              back: "Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability",
            },
            {
              id: "well-architected-framework-f2",
              front: "Which pillar covers multi-AZ and failover?",
              back: "Reliability",
            },
            {
              id: "well-architected-framework-f3",
              front: "Which pillar covers right-sizing and Reserved Instances?",
              back: "Cost Optimization",
            },
            {
              id: "well-architected-framework-f4",
              front: "Well-Architected Tool cost?",
              back: "Free console tool for architectural reviews",
            },
            {
              id: "well-architected-framework-f5",
              front: "Sustainability pillar focus?",
              back: "Minimize environmental impact—utilization, efficient services, Region selection",
            },
            {
              id: "well-architected-framework-f6",
              front: "Defense in depth aligns with?",
              back: "Security pillar—multiple layers of controls",
            },
          ],
          objectives: ["CLF-C02-6.3","CLF-C02-6.4"],
          practiceType: ["reading","quiz","flashcard","case-study"],
          assignments: [
            {
              id: "waf-case-study-1",
              title: "Case Study: Well-Architected Review of a Web App",
              type: "case-study",
              instructions: `Scenario: A startup runs a single-AZ EC2 instance with a public RDS endpoint, no backups, and open security group (0.0.0.0/0 on all ports).

1. Identify one issue per Well-Architected pillar (Security, Reliability, Cost, etc.).
2. Propose one specific AWS improvement for each issue (e.g., Multi-AZ, security group restriction, AWS Backup).
3. Write 2–3 sentences explaining which pillar each fix addresses.
4. Mark complete when you have documented all six pillar improvements.`,
              estimatedMinutes: 25,
              completionCriteria: ["Identified issues across at least 4 pillars","Proposed specific AWS fixes for each","Linked each fix to the correct pillar"],
              relatedTopicIds: ["well-architected-framework","ec2","rds","vpc","shared-responsibility-model"],
              order: 1,
            },
          ],
          questionBank: [
            {
              id: "well-architected-framework-b1",
              prompt: "Infrastructure as code supports which pillar?",
              choices: [
                { id: "a", text: "Operational Excellence" },
                { id: "b", text: "Sustainability only" },
                { id: "c", text: "None" },
                { id: "d", text: "Glacier archival only" },
              ],
              correctChoiceId: "a",
              explanation: "Automating deployments with IaC improves operational processes and repeatability.",
            },
            {
              id: "well-architected-framework-b2",
              prompt: "Using managed services like RDS aligns with:",
              choices: [
                { id: "a", text: "Performance Efficiency and Operational Excellence" },
                { id: "b", text: "Eliminating all security" },
                { id: "c", text: "Avoiding monitoring" },
                { id: "d", text: "Single-AZ only design" },
              ],
              correctChoiceId: "a",
              explanation: "Managed services reduce undifferentiated heavy lifting and improve efficiency.",
            },
            {
              id: "well-architected-framework-b3",
              prompt: "Blameless post-mortems belong to:",
              choices: [
                { id: "a", text: "Operational Excellence" },
                { id: "b", text: "Cost Optimization only" },
                { id: "c", text: "S3 storage classes" },
                { id: "d", text: "IAM SCPs" },
              ],
              correctChoiceId: "a",
              explanation: "Learning from failures without blame improves operations continuously.",
            },
            {
              id: "well-architected-framework-b4",
              prompt: "Graviton instances relate to:",
              choices: [
                { id: "a", text: "Performance Efficiency and Sustainability" },
                { id: "b", text: "Disabling encryption" },
                { id: "c", text: "Root user access" },
                { id: "d", text: "Public S3 buckets" },
              ],
              correctChoiceId: "a",
              explanation: "Graviton ARM processors offer price-performance and energy efficiency benefits.",
            },
            {
              id: "well-architected-framework-b5",
              prompt: "Testing failover procedures supports:",
              choices: [
                { id: "a", text: "Reliability" },
                { id: "b", text: "Eliminating backups" },
                { id: "c", text: "Single point of failure" },
                { id: "d", text: "Ignoring limits" },
              ],
              correctChoiceId: "a",
              explanation: "Reliability requires validating recovery and failover before real incidents.",
            },
            {
              id: "well-architected-framework-b6",
              prompt: "Cost Explorer helps with:",
              choices: [
                { id: "a", text: "Visualizing and analyzing AWS spending" },
                { id: "b", text: "IAM federation setup" },
                { id: "c", text: "VPC peering" },
                { id: "d", text: "Lambda layer creation" },
              ],
              correctChoiceId: "a",
              explanation: "Cost Explorer provides charts and filters to understand cost drivers.",
            },
            {
              id: "well-architected-framework-b7",
              prompt: "Automated security checks via Config/Security Hub map to:",
              choices: [
                { id: "a", text: "Security pillar" },
                { id: "b", text: "Sustainability only" },
                { id: "c", text: "No pillar" },
                { id: "d", text: "Support plans" },
              ],
              correctChoiceId: "a",
              explanation: "Automating security best practices is a core Security pillar design principle.",
            },
            {
              id: "well-architected-framework-b8",
              prompt: "Designing for failure and recovery is:",
              choices: [
                { id: "a", text: "Reliability best practice" },
                { id: "b", text: "Anti-pattern always" },
                { id: "c", text: "Only for on-premises" },
                { id: "d", text: "Root user requirement" },
              ],
              correctChoiceId: "a",
              explanation: "Reliable systems assume components fail and automate recovery.",
            },
          ],
        },
      ],
    },
    {
      id: "billing-support",
      name: "Billing & Support",
      topics: [
        {
          id: "pricing",
          name: "AWS Pricing",
          lesson: {
            title: "AWS Pricing Models and Cost Management",
            content: `AWS pricing follows a pay-as-you-go model with no upfront contracts or termination fees for most services. You pay only for what you use, and costs vary by service, Region, and usage pattern.

Compute pricing examples: EC2 On-Demand charges per second; Reserved Instances and Savings Plans offer discounts for commitment; Spot Instances provide the lowest compute prices. Lambda charges per request and duration. S3 charges for storage, requests, and data transfer.

Data transfer pricing matters: data transfer IN to AWS is generally free; data transfer OUT to the internet is charged. Transfer between services within the same AZ is often free; cross-AZ and cross-Region transfers incur fees.

Cost management tools include AWS Cost Explorer for visualizing spending trends, AWS Budgets for alerts when costs exceed thresholds, and AWS Cost and Usage Reports for detailed billing data. Tags help allocate costs to departments or projects.

The AWS Free Tier provides limited free usage for 12 months after account creation and always-free services. Consolidated billing through AWS Organizations combines usage for volume discounts across linked accounts.

AWS Pricing Calculator estimates costs before deployment. Cost Explorer analyzes historical spending. AWS Budgets sets alerts and optional actions.

Compute pricing factors: instance type, Region, OS, tenancy, and purchasing option (On-Demand, Reserved, Spot).

Storage pricing factors: class, Region, requests, retrieval fees (Glacier), and data transfer.

Data transfer OUT to internet is charged; IN is generally free. Transfer between services in same Region may be free or low cost; cross-Region transfer is charged.

AWS Organizations consolidated billing aggregates usage for volume discounts across linked accounts. SCPs apply guardrails—not pricing directly.`,
          },
          keyFacts: [
            "AWS uses pay-as-you-go pricing with no long-term contracts for most services",
            "Data transfer IN to AWS is generally free; OUT to the internet is charged",
            "Reserved Instances and Savings Plans reduce cost for predictable workloads",
            "AWS Cost Explorer visualizes historical and forecasted spending",
            "AWS Budgets sends alerts when costs or usage exceed defined limits",
            "Consolidated billing in Organizations combines usage for volume discounts",
          ],
          commonMistakes: [
            "Confusing AWS Budgets with AWS Cost Explorer functionality",
            "Assuming Reserved Instances and Savings Plans are identical",
            "Mixing up data transfer IN (free) vs OUT (charged) pricing",
            "Believing the AWS Free Tier applies to all services without limits",
            "Forgetting that stopped EC2 instances still incur EBS storage costs",
          ],
          examTraps: [
            "Cost allocation tags vs consolidated billing organization questions",
            "Savings Plans flexibility vs Reserved Instance instance-family lock",
            "Data transfer between AZs vs within same AZ cost differences",
            "TCO calculator vs Cost Explorer use case scenarios",
            "Free tier 12-month vs always-free service distinctions",
          ],
          quiz: [
            {
              id: "pricing-q1",
              prompt: "Which pricing model offers the most flexibility with no upfront commitment?",
              choices: [
                { id: "a", text: "Reserved Instances" },
                { id: "b", text: "Savings Plans" },
                { id: "c", text: "On-Demand" },
                { id: "d", text: "Dedicated Hosts 3-year term" },
              ],
              correctChoiceId: "c",
              explanation:
                "On-Demand instances have no upfront payment or long-term commitment—you pay per second with full flexibility to scale.",
            },
            {
              id: "pricing-q2",
              prompt: "Which tool helps visualize AWS spending trends over time?",
              choices: [
                { id: "a", text: "AWS CloudTrail" },
                { id: "b", text: "AWS Cost Explorer" },
                { id: "c", text: "AWS IAM" },
                { id: "d", text: "Amazon Route 53" },
              ],
              correctChoiceId: "b",
              explanation:
                "AWS Cost Explorer provides charts and forecasts of your AWS costs and usage over time.",
            },
            {
              id: "pricing-q3",
              prompt: "How is data transfer INTO AWS from the internet typically charged?",
              choices: [
                { id: "a", text: "Charged per GB at premium rates" },
                { id: "b", text: "Generally free" },
                { id: "c", text: "Charged only on weekends" },
                { id: "d", text: "Requires Reserved Instance purchase" },
              ],
              correctChoiceId: "b",
              explanation:
                "Data transfer into AWS from the internet is generally free. Outbound data transfer to the internet is charged.",
            },
            {
              id: "pricing-q4",
              prompt: "What does AWS Budgets provide?",
              choices: [
                { id: "a", text: "Automatic resource termination" },
                { id: "b", text: "Alerts when costs or usage exceed defined thresholds" },
                { id: "c", text: "Free unlimited EC2 instances" },
                { id: "d", text: "IAM policy templates" },
              ],
              correctChoiceId: "b",
              explanation:
                "AWS Budgets lets you set custom cost and usage budgets and receive alerts when actual or forecasted spending exceeds limits.",
            },
            {
              id: "pricing-q5",
              prompt: "What is consolidated billing in AWS Organizations?",
              choices: [
                { id: "a", text: "Merging all Regions into one" },
                { id: "b", text: "Single bill combining usage across linked accounts for volume discounts" },
                { id: "c", text: "Free tier for all accounts forever" },
                { id: "d", text: "Sharing root user credentials" },
              ],
              correctChoiceId: "b",
              explanation:
                "Consolidated billing combines charges across member accounts into one bill and aggregates usage for volume pricing benefits.",
            },
          ],
          flashcards: [
            {
              id: "pricing-f1",
              front: "Most flexible EC2 pricing?",
              back: "On-Demand—no upfront commitment, pay per second",
            },
            {
              id: "pricing-f2",
              front: "Data transfer IN to AWS?",
              back: "Generally free; OUT to internet is charged",
            },
            {
              id: "pricing-f3",
              front: "Tool for cost alerts?",
              back: "AWS Budgets",
            },
            {
              id: "pricing-f4",
              front: "Pricing Calculator vs Cost Explorer?",
              back: "Calculator: estimate future. Cost Explorer: analyze past/current spend",
            },
            {
              id: "pricing-f5",
              front: "Spot Instance pricing?",
              back: "Up to 90% off On-Demand; price varies with supply/demand",
            },
            {
              id: "pricing-f6",
              front: "Data transfer IN from internet?",
              back: "Generally free; outbound to internet is charged",
            },
          ],
          objectives: ["CLF-C02-7.1","CLF-C02-7.2"],
          practiceType: ["reading","quiz","flashcard"],
          questionBank: [
            {
              id: "pricing-b1",
              prompt: "Reserved Instances provide:",
              choices: [
                { id: "a", text: "Discount for 1- or 3-year commitment" },
                { id: "b", text: "Always interruptible capacity" },
                { id: "c", text: "Free unlimited usage" },
                { id: "d", text: "IAM MFA tokens" },
              ],
              correctChoiceId: "a",
              explanation: "RIs trade commitment for lower hourly rates versus On-Demand.",
            },
            {
              id: "pricing-b2",
              prompt: "Cost allocation tags help:",
              choices: [
                { id: "a", text: "Attribute spending to departments or projects" },
                { id: "b", text: "Encrypt S3 automatically" },
                { id: "c", text: "Replace VPC" },
                { id: "d", text: "Disable CloudTrail" },
              ],
              correctChoiceId: "a",
              explanation: "Tags enable cost reports filtered by team, environment, or application.",
            },
            {
              id: "pricing-b3",
              prompt: "Which transfer is typically charged?",
              choices: [
                { id: "a", text: "Data OUT from AWS to the internet" },
                { id: "b", text: "Data IN from internet to AWS" },
                { id: "c", text: "Both always free unlimited" },
                { id: "d", text: "Neither ever charged" },
              ],
              correctChoiceId: "a",
              explanation: "Outbound internet data transfer incurs charges; inbound is generally free.",
            },
            {
              id: "pricing-b4",
              prompt: "AWS Free Tier includes:",
              choices: [
                { id: "a", text: "Limited free usage for new accounts on select services" },
                { id: "b", text: "Unlimited EC2 forever" },
                { id: "c", text: "All Enterprise Support features" },
                { id: "d", text: "Free cross-Region replication always" },
              ],
              correctChoiceId: "a",
              explanation: "Free tier offers limited monthly usage—some 12-month, some always free within limits.",
            },
            {
              id: "pricing-b5",
              prompt: "Spot Instances pricing varies based on:",
              choices: [
                { id: "a", text: "Supply and demand for spare capacity" },
                { id: "b", text: "Fixed government rate" },
                { id: "c", text: "IAM policy count" },
                { id: "d", text: "Number of Regions only" },
              ],
              correctChoiceId: "a",
              explanation: "Spot prices fluctuate with available unused EC2 capacity in an AZ.",
            },
            {
              id: "pricing-b6",
              prompt: "Consolidated billing in Organizations:",
              choices: [
                { id: "a", text: "Combines bills and aggregates volume discount eligibility" },
                { id: "b", text: "Merges all VPCs into one" },
                { id: "c", text: "Eliminates all data transfer fees" },
                { id: "d", text: "Shares root credentials" },
              ],
              correctChoiceId: "a",
              explanation: "Member account usage rolls up for tiered pricing benefits on one payer bill.",
            },
            {
              id: "pricing-b7",
              prompt: "Right-sizing recommendations appear in:",
              choices: [
                { id: "a", text: "Cost Explorer / Compute Optimizer" },
                { id: "b", text: "S3 Block Public Access" },
                { id: "c", text: "IAM password policy" },
                { id: "d", text: "Route 53" },
              ],
              correctChoiceId: "a",
              explanation: "Cost tools suggest smaller or better-fit instances based on utilization.",
            },
            {
              id: "pricing-b8",
              prompt: "Glacier storage classes trade:",
              choices: [
                { id: "a", text: "Retrieval time for lower storage cost" },
                { id: "b", text: "Higher cost for faster deletion" },
                { id: "c", text: "IAM roles for buckets" },
                { id: "d", text: "VPC peering speed" },
              ],
              correctChoiceId: "a",
              explanation: "Archive classes cost less per GB but charge retrieval fees and take longer to access.",
            },
          ],
        },
        {
          id: "support-plans",
          name: "AWS Support Plans",
          lesson: {
            title: "AWS Support Plans and Resources",
            content: `AWS offers multiple support plans to match different needs, from basic free support to enterprise-grade assistance with dedicated Technical Account Managers.

Basic Support is included for all AWS accounts at no additional cost. It provides 24/7 access to customer service, documentation, whitepapers, and support forums. No technical support cases with AWS engineers are included.

Developer Support adds email access to Cloud Support Associates during business hours, general architectural guidance, and one primary contact. Suitable for experimenting or testing workloads.

Business Support provides 24/7 phone, chat, and email access to Cloud Support Engineers, unlimited cases, and access to AWS Trusted Advisor checks. Response times vary by severity—critical issues get faster response.

Enterprise On-Ramp and Enterprise Support add proactive guidance, Technical Account Managers (TAMs), and fastest response times. Enterprise includes a designated TAM and Infrastructure Event Management for launches.

AWS Trusted Advisor inspects your environment and recommends improvements across cost, performance, security, fault tolerance, and service limits. Full checks require Business support or higher. AWS Personal Health Dashboard shows service events affecting your resources.

AWS re:Post is a community Q&A forum for technical questions—complements official support channels.

AWS Support API programmatically manages support cases for Enterprise customers.

Severity levels for technical cases: General guidance, System impaired, Production system impaired, Production system down, Business-critical down. Higher plans get faster response times.

AWS Professional Services and Partner Network offer implementation help beyond standard support plans.

Service Health Dashboard shows public AWS service status; Personal Health Dashboard shows account-specific impact.`,
          },
          keyFacts: [
            "Basic Support is free and includes documentation and forums—no technical support cases",
            "Business Support provides 24/7 access to Cloud Support Engineers",
            "Enterprise Support includes a dedicated Technical Account Manager (TAM)",
            "Trusted Advisor provides automated best-practice recommendations",
            "Full Trusted Advisor checks require Business support or higher",
            "Personal Health Dashboard alerts you to AWS events affecting your account",
          ],
          commonMistakes: [
            "Conflicting Business vs Enterprise support response time SLAs",
            "Assuming Basic support includes technical support cases",
            "Mixing up AWS Support with AWS Professional Services",
            "Believing all support plans include 24/7 phone access",
            "Forgetting Developer plan is for experimentation, not production SLAs",
          ],
          examTraps: [
            "Production workload requiring 15-minute response → Enterprise",
            "TAM (Technical Account Manager) availability only on Enterprise",
            "Trusted Advisor full checks vs core checks by support tier",
            "AWS Support API access limited to Business and Enterprise",
            "Basic plan self-service only vs Developer email support distinction",
          ],
          quiz: [
            {
              id: "support-plans-q1",
              prompt: "Which support plan is included free with every AWS account?",
              choices: [
                { id: "a", text: "Enterprise Support" },
                { id: "b", text: "Business Support" },
                { id: "c", text: "Basic Support" },
                { id: "d", text: "Developer Support" },
              ],
              correctChoiceId: "c",
              explanation:
                "Basic Support is automatically included at no charge, providing account and billing support plus access to documentation and forums.",
            },
            {
              id: "support-plans-q2",
              prompt: "Which support plan includes a Technical Account Manager (TAM)?",
              choices: [
                { id: "a", text: "Basic Support" },
                { id: "b", text: "Developer Support" },
                { id: "c", text: "Business Support" },
                { id: "d", text: "Enterprise Support" },
              ],
              correctChoiceId: "d",
              explanation:
                "Enterprise Support includes a designated Technical Account Manager who provides proactive guidance and coordinates support.",
            },
            {
              id: "support-plans-q3",
              prompt: "What does AWS Trusted Advisor do?",
              choices: [
                { id: "a", text: "Deploys EC2 instances automatically" },
                { id: "b", text: "Inspects your account and recommends best practices" },
                { id: "c", text: "Manages IAM users" },
                { id: "d", text: "Provides free Reserved Instances" },
              ],
              correctChoiceId: "b",
              explanation:
                "Trusted Advisor analyzes your AWS environment and provides recommendations for cost, security, performance, fault tolerance, and limits.",
            },
            {
              id: "support-plans-q4",
              prompt: "Which plan provides 24/7 phone, chat, and email support from Cloud Support Engineers?",
              choices: [
                { id: "a", text: "Basic Support" },
                { id: "b", text: "Developer Support" },
                { id: "c", text: "Business Support" },
                { id: "d", text: "No plan offers this" },
              ],
              correctChoiceId: "c",
              explanation:
                "Business Support (and Enterprise tiers) provide 24/7 access to Cloud Support Engineers via phone, chat, and email.",
            },
            {
              id: "support-plans-q5",
              prompt: "What is the AWS Personal Health Dashboard?",
              choices: [
                { id: "a", text: "Employee wellness portal" },
                { id: "b", text: "Alerts about AWS events affecting your resources" },
                { id: "c", text: "EC2 performance monitor" },
                { id: "d", text: "Billing invoice viewer only" },
              ],
              correctChoiceId: "b",
              explanation:
                "Personal Health Dashboard provides alerts and remediation guidance when AWS experiences events that may impact your resources.",
            },
          ],
          flashcards: [
            {
              id: "support-plans-f1",
              front: "Free AWS support plan?",
              back: "Basic Support—docs, forums, billing help; no technical cases",
            },
            {
              id: "support-plans-f2",
              front: "Which plan includes a TAM?",
              back: "Enterprise Support",
            },
            {
              id: "support-plans-f3",
              front: "What is Trusted Advisor?",
              back: "Automated best-practice checks for cost, security, performance, and limits",
            },
            {
              id: "support-plans-f4",
              front: "re:Post vs Support case?",
              back: "re:Post: community forum. Support case: official AWS engineer assistance (paid plans)",
            },
            {
              id: "support-plans-f5",
              front: "Service Health Dashboard?",
              back: "Public status of AWS services globally",
            },
            {
              id: "support-plans-f6",
              front: "Developer Support contact method?",
              back: "Email to Cloud Support Associates during business hours",
            },
          ],
          objectives: ["CLF-C02-7.3","CLF-C02-7.4"],
          practiceType: ["reading","quiz","flashcard"],
          questionBank: [
            {
              id: "support-plans-b1",
              prompt: "Basic Support includes:",
              choices: [
                { id: "a", text: "Customer Service & Communities access, no technical cases" },
                { id: "b", text: "24/7 TAM access" },
                { id: "c", text: "Unlimited phone support" },
                { id: "d", text: "Free Enterprise features" },
              ],
              correctChoiceId: "a",
              explanation: "Basic is free with billing/account help and documentation—no engineer technical cases.",
            },
            {
              id: "support-plans-b2",
              prompt: "Business Support adds:",
              choices: [
                { id: "a", text: "24/7 Cloud Support Engineers and full Trusted Advisor" },
                { id: "b", text: "Nothing beyond Basic" },
                { id: "c", text: "Physical data center tours" },
                { id: "d", text: "Root user MFA bypass" },
              ],
              correctChoiceId: "a",
              explanation: "Business tier unlocks 24/7 technical support and all Trusted Advisor checks.",
            },
            {
              id: "support-plans-b3",
              prompt: "Infrastructure Event Management (IEM) is available with:",
              choices: [
                { id: "a", text: "Enterprise Support for launch events" },
                { id: "b", text: "Basic Support only" },
                { id: "c", text: "S3 Glacier" },
                { id: "d", text: "Free tier automatically" },
              ],
              correctChoiceId: "a",
              explanation: "Enterprise includes IEM support for major production launches and events.",
            },
            {
              id: "support-plans-b4",
              prompt: "Trusted Advisor free checks on Basic include:",
              choices: [
                { id: "a", text: "Limited checks—not full set" },
                { id: "b", text: "All checks unlimited" },
                { id: "c", text: "No checks ever" },
                { id: "d", text: "Only billing checks" },
              ],
              correctChoiceId: "a",
              explanation: "Basic gets a subset; Business and above get full Trusted Advisor checks.",
            },
            {
              id: "support-plans-b5",
              prompt: "Personal Health Dashboard differs from Service Health by:",
              choices: [
                { id: "a", text: "Showing events affecting YOUR account/resources" },
                { id: "b", text: "Being a paid-only feature always" },
                { id: "c", text: "Replacing CloudWatch" },
                { id: "d", text: "Managing IAM users" },
              ],
              correctChoiceId: "a",
              explanation: "Personal Health Dashboard alerts you to AWS events impacting your specific resources.",
            },
            {
              id: "support-plans-b6",
              prompt: "Developer Support is suited for:",
              choices: [
                { id: "a", text: "Test/dev workloads with business-hours email support" },
                { id: "b", text: "Mission-critical 24/7 production with TAM" },
                { id: "c", text: "No AWS usage" },
                { id: "d", text: "Only Enterprise accounts" },
              ],
              correctChoiceId: "a",
              explanation: "Developer fits experimentation with email support during business hours.",
            },
            {
              id: "support-plans-b7",
              prompt: "AWS Documentation and whitepapers are available:",
              choices: [
                { id: "a", text: "To all customers including Basic Support" },
                { id: "b", text: "Enterprise only" },
                { id: "c", text: "With extra per-page fee" },
                { id: "d", text: "Never publicly" },
              ],
              correctChoiceId: "a",
              explanation: "Documentation, whitepapers, and forums are free resources for all AWS users.",
            },
            {
              id: "support-plans-b8",
              prompt: "Technical Account Manager (TAM) provides:",
              choices: [
                { id: "a", text: "Proactive guidance and coordination for Enterprise customers" },
                { id: "b", text: "Free EC2 instances" },
                { id: "c", text: "Automatic root access" },
                { id: "d", text: "S3 public access" },
              ],
              correctChoiceId: "a",
              explanation: "TAMs are proactive technical advisors included with Enterprise Support.",
            },
          ],
        },
      ],
    },
  ],
};
