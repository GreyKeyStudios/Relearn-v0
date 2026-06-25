import fs from "fs";
import path from "path";

const ROOT = path.resolve("src/content/certifications");

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function formatStandard({ commonMistakes, examTraps }) {
  const cm = commonMistakes.map((m) => `            "${esc(m)}",`).join("\n");
  const et = examTraps.map((t) => `            "${esc(t)}",`).join("\n");
  return `          commonMistakes: [
${cm}
          ],
          examTraps: [
${et}
          ],`;
}

function formatFull({
  guidedExample,
  commonMistakes,
  examTraps,
  realWorldScenario,
  estimatedStudyMinutes,
  difficulty,
  prerequisites,
}) {
  const steps = guidedExample.steps
    .map((s) => `              "${esc(s)}",`)
    .join("\n");
  const cm = commonMistakes.map((m) => `            "${esc(m)}",`).join("\n");
  const et = examTraps.map((t) => `            "${esc(t)}",`).join("\n");
  const prereq = prerequisites.map((p) => `"${p}"`).join(", ");
  return `          guidedExample: {
            title: "${esc(guidedExample.title)}",
            steps: [
${steps}
            ],
          },
          commonMistakes: [
${cm}
          ],
          examTraps: [
${et}
          ],
          realWorldScenario: "${esc(realWorldScenario)}",
          estimatedStudyMinutes: ${estimatedStudyMinutes},
          difficulty: "${difficulty}",
          prerequisites: [${prereq}],`;
}

function topicPattern(topicId) {
  return topicId.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function topicHasCES(content, topicId) {
  const pattern = new RegExp(
    `\\{\\s*\\n\\s*id: "${topicPattern(topicId)}"[\\s\\S]*?keyFacts: \\[[\\s\\S]*?\\],([\\s\\S]*?)\\n\\s*quiz: \\[`,
  );
  const match = content.match(pattern);
  return match ? match[1].includes("commonMistakes:") : false;
}

function injectCES(content, topicId, cesBlock) {
  if (topicHasCES(content, topicId)) {
    return content;
  }
  const pattern = new RegExp(
    `(\\{\\s*\\n\\s*id: "${topicPattern(topicId)}"[\\s\\S]*?keyFacts: \\[[\\s\\S]*?\\],)\\s*(\\n\\s*quiz: \\[)`,
  );
  if (!pattern.test(content)) {
    console.warn(`WARN: could not find topic ${topicId}`);
    return content;
  }
  return content.replace(pattern, (_, p1, p2) => `${p1}\n${cesBlock}${p2}`);
}

function appendQuestionBank(content, topicId, extraQuestions) {
  const bankPattern = new RegExp(
    `(\\{\\s*\\n\\s*id: "${topicPattern(topicId)}"[\\s\\S]*?questionBank: \\[[\\s\\S]*?)(\\n\\s*\\],\\s*\\n\\s*(?:externalResources|assignments|\\},))`,
  );
  const match = content.match(bankPattern);
  if (!match) return content;
  const existing = match[1];
  const count = (existing.match(/id: "/g) || []).length;
  if (count >= 8) return content;
  const insert = extraQuestions.slice(0, 8 - count)
    .map((q) => {
      const choices = q.choices
        .map((c) => `                { id: "${c.id}", text: "${esc(c.text)}" }`)
        .join(",\n");
      return `            {
              id: "${q.id}",
              prompt: "${esc(q.prompt)}",
              choices: [
${choices},
              ],
              correctChoiceId: "${q.correctChoiceId}",
              explanation: "${esc(q.explanation)}",
            }`;
    })
    .join(",\n");
  return content.replace(bankPattern, (_, p1, p2) => `${p1},\n${insert}${p2}`);
}

// ─── AWS Cloud Practitioner ───
const awsStandard = {
  "cloud-concepts": {
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
  },
  "aws-global-infrastructure": {
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
  },
  ec2: {
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
  },
  lambda: {
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
  },
  s3: {
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
  },
  rds: {
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
  },
  "shared-responsibility-model": {
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
  },
  cloudwatch: {
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
  },
  pricing: {
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
  },
  "support-plans": {
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
  },
};

const awsAnchors = {
  vpc: {
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
    realWorldScenario:
      "Your startup launches a web application on AWS. The architect assigns you a /16 VPC and requires web servers reachable from the internet, application servers isolated from direct inbound traffic, and RDS databases in private subnets with patch downloads via NAT. You create public and private subnets across three AZs, attach an IGW to public route tables, deploy NAT Gateways for outbound-only private access, and document security group rules before the deployment team provisions EC2 and RDS.",
    estimatedStudyMinutes: 35,
    difficulty: "medium",
    prerequisites: ["aws-global-infrastructure", "ec2"],
  },
  iam: {
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
    realWorldScenario:
      "A fintech company onboarded five contractors who need to upload reports to a single S3 prefix. Instead of sharing root credentials, you create an IAM group with a least-privilege policy scoped to s3://reports/incoming/*, require MFA for console login, assign an EC2 instance role (not user keys) for the automated upload service, and run IAM Access Analyzer weekly to catch any bucket policies that accidentally grant public access.",
    estimatedStudyMinutes: 30,
    difficulty: "medium",
    prerequisites: ["shared-responsibility-model"],
  },
  "well-architected-framework": {
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
    realWorldScenario:
      "Before a major product launch, your team runs a Well-Architected review on the payment processing workload. You discover single-AZ RDS, no CloudWatch alarms, and m5.4xlarge instances running at 10% CPU. You document Reliability fixes (Multi-AZ, backups), Security improvements (encryption, IAM roles), and Cost Optimization actions (right-size to m5.large, purchase Savings Plans), then track remediation in the Well-Architected Tool.",
    estimatedStudyMinutes: 25,
    difficulty: "easy",
    prerequisites: ["cloud-concepts", "ec2", "vpc"],
  },
};

// ─── Azure Fundamentals ───
const azureStandard = {
  "cloud-concepts": {
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
  },
  "azure-regions": {
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
  },
  "resource-groups": {
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
  },
  "storage-accounts": {
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
  },
  "azure-networking": {
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
  },
  "microsoft-entra-id": {
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
  },
  "azure-monitor": {
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
  },
  subscriptions: {
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
  },
  pricing: {
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
  },
  governance: {
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
  },
};

const azureAnchors = {
  "virtual-machines": {
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
    realWorldScenario:
      "Your team needs a staging web server for two weeks. You deploy a B2s Linux VM with a managed disk, restrict SSH to the office IP via NSG, enable automatic shutdown schedules to deallocate nights and weekends, and set a Budget alert at the subscription level. When testing completes, you snapshot the disk, deallocate the VM, and document that storage charges continue until the disk is deleted.",
    estimatedStudyMinutes: 30,
    difficulty: "medium",
    prerequisites: ["azure-regions", "resource-groups", "azure-networking"],
    extraBank: [
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
        explanation: "Deallocating releases compute resources and stops compute charges; stopped-but-not-deallocated VMs may still incur compute costs.",
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
        explanation: "Availability Zones are physically separate datacenters within an Azure Region for higher resilience.",
      },
    ],
  },
  "role-based-access-control": {
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
    realWorldScenario:
      "A contractor needs to troubleshoot a failing App Service but must not change production configurations or assign access to others. You grant the built-in Website Contributor role scoped only to the specific App Service resource, set a calendar reminder to remove the assignment after 30 days, and enable PIM just-in-time elevation for your permanent admins who occasionally need Owner access.",
    estimatedStudyMinutes: 25,
    difficulty: "medium",
    prerequisites: ["microsoft-entra-id", "resource-groups"],
  },
  "compliance-basics": {
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
    realWorldScenario:
      "A healthcare SaaS provider stores patient metadata in Azure. Legal requires HIPAA-aligned controls and US data residency. You review Azure compliance documentation, deploy only to US Regions, enable encryption at rest with customer-managed keys, assign RBAC least privilege, and export SOC 2 reports from the Service Trust Portal for the annual audit—while documenting your own HIPAA risk assessment as the customer's responsibility.",
    estimatedStudyMinutes: 20,
    difficulty: "easy",
    prerequisites: ["governance", "role-based-access-control"],
    extraBank: [
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
        explanation: "Microsoft publishes compliance certifications and audit reports via Trust Center and Service Trust Portal.",
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
        explanation: "Customers classify their own data and configure appropriate controls; Microsoft secures the underlying cloud infrastructure.",
      },
    ],
  },
};

// ─── Linux+ ───
const linuxStandard = {
  "linux-filesystem": {
    commonMistakes: [
      "Confusing /bin with /usr/bin or /sbin with /usr/sbin purposes",
      "Believing hard links work across different filesystems like symlinks can",
      "Mixing up /etc/fstab with /etc/mtab for mount configuration",
      "Forgetting symbolic links break when the target is deleted",
      "Assuming /root is the same as the filesystem root /",
    ],
    examTraps: [
      "Which directory holds configuration files—/etc vs /var vs /usr",
      "Hard link survives target deletion vs symlink becomes dangling",
      "Inode exhaustion vs disk space exhaustion symptoms",
      "/proc and /sys as virtual filesystems not stored on disk",
      "Mount point behavior when target directory already contains files",
    ],
  },
  "command-line-basics": {
    commonMistakes: [
      "Confusing absolute paths (starting with /) with relative paths",
      "Mixing up stdout (1), stderr (2), and stdin (0) file descriptors",
      "Assuming rm -rf is recoverable without backups",
      "Forgetting that .. refers to parent directory and . refers to current",
      "Using incorrect case—Linux commands and filenames are case-sensitive",
    ],
    examTraps: [
      "Redirect stderr with 2> vs merge with 2>&1 syntax",
      "Pipe | connects stdout to stdin vs redirect > writes to file",
      "Tab completion and history vs retyping long paths",
      "which vs whereis vs locate command location questions",
      "Exit code 0 means success vs non-zero means failure",
    ],
  },
  "users-and-groups": {
    commonMistakes: [
      "Confusing /etc/passwd (user info) with /etc/shadow (encrypted passwords)",
      "Mixing up primary group vs supplementary groups",
      "Assuming UID 0 is a regular user, not root",
      "Forgetting useradd vs adduser distribution differences",
      "Believing deleting a user always removes their home directory",
    ],
    examTraps: [
      "UID 0 always belongs to root superuser",
      "/etc/group fourth field lists group members vs /etc/passwd GID field",
      "sudo vs su privilege escalation differences",
      "System accounts (nologin shell) vs interactive user accounts",
      "userdel -r removes home directory vs userdel without -r leaves files",
    ],
  },
  processes: {
    commonMistakes: [
      "Confusing foreground vs background job control with systemd services",
      "Mixing up kill signals—SIGTERM (15) vs SIGKILL (9)",
      "Assuming kill -9 is always the first choice for stopping processes",
      "Forgetting zombie processes require parent to reap, not kill -9 on zombie",
      "Believing ps aux and ps -ef show identical output formats",
    ],
    examTraps: [
      "SIGTERM allows graceful shutdown vs SIGKILL immediate termination",
      "Parent PID 1 traditionally systemd absorbing orphaned processes",
      "nice and renice priority values—lower number higher priority on Linux",
      "fg and bg job control vs nohup for terminal disconnect persistence",
      "top vs htop vs ps for real-time monitoring scenarios",
    ],
  },
  storage: {
    commonMistakes: [
      "Confusing fdisk/parted (partitioning) with mkfs (formatting)",
      "Mixing up LVM physical volumes, volume groups, and logical volumes",
      "Assuming mount is permanent without /etc/fstab entry",
      "Forgetting to umount before removing storage hardware",
      "Believing df shows file-level usage while du shows filesystem-level only",
    ],
    examTraps: [
      "df -h filesystem usage vs du -sh directory usage",
      "LVM extend logical volume then resize filesystem two-step process",
      "GPT vs MBR partition table on modern systems",
      "UUID in fstab vs device name /dev/sdb reliability",
      "Swap partition vs swap file configuration scenarios",
    ],
  },
  "networking-commands": {
    commonMistakes: [
      "Confusing ip addr/route (modern) with ifconfig/route (legacy)",
      "Mixing up ss and netstat for socket statistics",
      "Assuming ping failure always means the remote host is down",
      "Forgetting firewalls can block ICMP while TCP services remain reachable",
      "Believing hostname -I and ip addr show different unrelated information",
    ],
    examTraps: [
      "ss -tuln vs netstat -tuln listening port display",
      "traceroute/tracepath path discovery vs ping reachability",
      "DNS resolution failure vs network unreachable error messages",
      "nmcli for NetworkManager vs manual /etc/network/interfaces on older systems",
      "curl vs wget for HTTP testing vs file download scenarios",
    ],
  },
  "shell-scripting-basics": {
    commonMistakes: [
      "Forgetting shebang #!/bin/bash specifies the interpreter",
      "Confusing $1 (first argument) with $0 (script name) and $@ (all args)",
      "Using = for string comparison inside [ ] instead of inside [[ ]]",
      "Assuming scripts run without execute permission (chmod +x)",
      "Mixing up exit 0 (success) with exit 1 (failure) conventions",
    ],
    examTraps: [
      "$? holds exit code of last command",
      "Double brackets [[ ]] vs single brackets [ ] test syntax",
      "for loop over $(seq 1 5) vs {1..5} brace expansion",
      "Command substitution $(command) vs backticks",
      "set -e exits on error vs continuing after failed command",
    ],
  },
  logs: {
    commonMistakes: [
      "Confusing /var/log/messages with distribution-specific journal locations",
      "Mixing up syslog priorities (emerg through debug) numeric values",
      "Assuming logrotate configuration is in /etc/logrotate.d only",
      "Forgetting journalctl requires systemd-based distributions",
      "Believing deleted log files free disk space while a process still holds the file open",
    ],
    examTraps: [
      "journalctl -u servicename vs tail /var/log/syslog on Debian/Ubuntu",
      "logrotate size vs daily vs weekly rotation triggers",
      "rsyslog facility and priority filtering rules",
      "lsof showing deleted but open log files consuming disk space",
      "dmesg kernel ring buffer vs application logs in /var/log",
    ],
  },
  "security-basics": {
    commonMistakes: [
      "Confusing SELinux enforcing vs permissive vs disabled modes",
      "Mixing up AppArmor with SELinux as different MAC frameworks",
      "Assuming firewalld and ufw cannot coexist without conflicts",
      "Forgetting SSH key-based auth is preferred over password authentication",
      "Believing root login via SSH should remain enabled for convenience",
    ],
    examTraps: [
      "PermitRootLogin no in sshd_config security hardening",
      "fail2ban vs firewalld vs iptables/nftables scope differences",
      "SELinux context ls -Z vs standard permissions ls -l",
      "Public key in authorized_keys vs private key on client",
      "chage -l password aging policy inspection",
    ],
  },
  troubleshooting: {
    commonMistakes: [
      "Jumping to complex fixes before checking logs and recent changes",
      "Confusing hardware failure symptoms with configuration errors",
      "Assuming reboot always fixes root cause without investigation",
      "Mixing up systematic approach (identify, isolate, resolve) with random guessing",
      "Forgetting to verify fix and document the incident",
    ],
    examTraps: [
      "First step is gather information—check logs, timeline, recent changes",
      "Boot into single-user/rescue mode for filesystem or password recovery",
      "Network unreachable vs name resolution failure diagnostic order",
      "Performance issue: check CPU, memory, disk I/O, and network in sequence",
      "Rollback recent change vs patch forward decision scenarios",
    ],
  },
};

const linuxAnchors = {
  permissions: {
    guidedExample: {
      title: "Set Secure Permissions on a Shared Project Directory",
      steps: [
        "Create directory /srv/project with group 'devteam' as group owner using chgrp.",
        "Set permissions to 2770 (rwxrws---) enabling SetGID so new files inherit devteam group.",
        "Add developers alice and bob to group devteam with usermod -aG devteam.",
        "Verify with ls -ld /srv/project that drwxrws--- appears and group is devteam.",
        "Use getfacl /srv/project if alice needs read-only access without group membership.",
        "Confirm others have no access and the sticky bit is not needed unless world-writable.",
      ],
    },
    commonMistakes: [
      "Setting chmod 777 as a quick fix instead of proper group ownership",
      "Confusing SetUID (4), SetGID (2), and sticky bit (1) octal prefixes",
      "Forgetting directories need execute permission to enter and list contents",
      "Applying chown before verifying the target user and group exist",
      "Mixing up symbolic chmod (u+x) with octal chmod (755) syntax errors",
    ],
    examTraps: [
      "SetUID on /usr/bin/passwd allows users to change passwords securely",
      "Sticky bit on /tmp prevents users deleting others' files",
      "umask 022 yields 644 files and 755 directories from defaults",
      "ACL setfacl -m u:name:rw grants user-specific access beyond owner/group/other",
      "rwx for owner=7, r-x for group=5, r-x for others=5 equals 755",
    ],
    realWorldScenario:
      "Three developers share /opt/webapp configs on a staging server. The manager wants consistent group ownership without world-readable secrets. You create a 'webdev' group, set the directory to 2770 with SetGID, add the developers to the group, and use ACLs to grant the auditor read-only access without write permission—then verify with ls -la and getfacl before handing off to the deployment pipeline.",
    estimatedStudyMinutes: 35,
    difficulty: "hard",
    prerequisites: ["linux-filesystem", "users-and-groups"],
    extraBank: [
      {
        id: "permissions-bank-q8",
        prompt: "What permission does the sticky bit provide on a directory?",
        choices: [
          { id: "a", text: "Only the file owner can delete their own files in a world-writable directory" },
          { id: "b", text: "Executables run as root" },
          { id: "c", text: "New files inherit the directory group" },
          { id: "d", text: "Directory becomes read-only" },
        ],
        correctChoiceId: "a",
        explanation: "The sticky bit (e.g., on /tmp) prevents users from deleting files owned by other users in a shared directory.",
      },
    ],
  },
  "package-management": {
    guidedExample: {
      title: "Install and Verify nginx on a RHEL System with dnf",
      steps: [
        "Update package metadata with sudo dnf check-update or dnf makecache.",
        "Search available packages: dnf search nginx.",
        "Install nginx: sudo dnf install -y nginx.",
        "Verify installation: rpm -q nginx and dnf list installed nginx.",
        "Enable and start the service: sudo systemctl enable --now nginx.",
        "Confirm the package signature and repository source with dnf info nginx.",
      ],
    },
    commonMistakes: [
      "Using apt commands on RHEL/Fedora or dnf/yum on Debian/Ubuntu",
      "Installing packages without updating repositories first on fresh systems",
      "Confusing rpm -i (direct RPM install) with dnf install (dependency resolution)",
      "Forgetting to enable EPEL or other repositories before searching for packages",
      "Mixing up remove, erase, and autoremove cleanup behaviors",
    ],
    examTraps: [
      "Debian/Ubuntu: apt update vs apt upgrade vs apt install sequence",
      "RHEL/Fedora: dnf install vs rpm -qa query installed packages",
      "zypper (SUSE) vs dnf vs apt distribution-specific commands",
      "Which command shows package dependencies before install—dnf deplist or apt-cache depends",
      "Removing configuration files: apt purge vs apt remove distinction",
    ],
    realWorldScenario:
      "A new Ubuntu web server needs Apache, PHP, and security updates applied weekly. You configure /etc/apt/sources.list, run apt update && apt upgrade, install apache2 with apt install, hold kernel packages if needed with apt-mark hold, and schedule unattended-upgrades—documenting equivalent dnf commands for the RHEL servers in your mixed environment.",
    estimatedStudyMinutes: 25,
    difficulty: "medium",
    prerequisites: ["command-line-basics", "system-services"],
    extraBank: [
      {
        id: "package-management-bank-q8",
        prompt: "Which command installs a package on Debian/Ubuntu?",
        choices: [
          { id: "a", text: "apt install packagename" },
          { id: "b", text: "dnf install packagename" },
          { id: "c", text: "zypper add packagename" },
          { id: "d", text: "rpm -i packagename only" },
        ],
        correctChoiceId: "a",
        explanation: "Debian and Ubuntu use apt (or apt-get) for package installation with dependency resolution.",
      },
    ],
  },
  "system-services": {
    guidedExample: {
      title: "Enable and Troubleshoot a systemd Service",
      steps: [
        "Check service status: systemctl status sshd.",
        "If inactive, start it: sudo systemctl start sshd.",
        "Enable at boot: sudo systemctl enable sshd.",
        "Verify enabled state: systemctl is-enabled sshd.",
        "If failed, inspect logs: journalctl -u sshd -e --no-pager.",
        "After config change, reload and restart: sudo systemctl daemon-reload && sudo systemctl restart sshd.",
      ],
    },
    commonMistakes: [
      "Using service and chkconfig commands instead of systemctl on systemd systems",
      "Forgetting daemon-reload after editing unit files in /etc/systemd/system",
      "Confusing systemctl restart with reload for services supporting reload",
      "Assuming enable starts the service immediately without start command",
      "Mixing up target units (multi-user.target) with individual service units",
    ],
    examTraps: [
      "systemctl enable --now combines enable and start in one command",
      "journalctl -u servicename vs cat /var/log/messages for service logs",
      "Failed state investigation with systemctl status and journalctl -xe",
      "Mask vs disable vs stop—mask prevents manual and automatic start",
      "Wants vs Requires dependency directives in unit file sections",
    ],
    realWorldScenario:
      "After deploying a new API, the api-server.service fails on boot. You run systemctl status to see exit code 1, check journalctl -u api-server for 'permission denied' on a config file, fix permissions with chmod 640 and chown root:apisvc, run daemon-reload, restart the service, and confirm it reaches active (running) before closing the change ticket.",
    estimatedStudyMinutes: 30,
    difficulty: "medium",
    prerequisites: ["command-line-basics", "processes"],
    extraBank: [
      {
        id: "system-services-bank-q8",
        prompt: "After editing a systemd unit file, which command must you run first?",
        choices: [
          { id: "a", text: "systemctl daemon-reload" },
          { id: "b", text: "systemctl reboot" },
          { id: "c", text: "service --reload-all" },
          { id: "d", text: "kill -HUP 1" },
        ],
        correctChoiceId: "a",
        explanation: "systemctl daemon-reload reloads unit file changes before restart or enable takes effect.",
      },
    ],
  },
};

// ─── ITIL Foundation ───
const itilStandard = {
  "service-management": {
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
  },
  "service-value-chain": {
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
  },
  "continual-improvement": {
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
  },
  "problem-management": {
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
  },
  "change-enablement": {
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
  },
  "service-desk": {
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
  },
  "service-level-management": {
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
  },
  "itil-practices": {
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
  },
};

const itilAnchors = {
  "service-value-system": {
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
    realWorldScenario:
      "A regional hospital sees rising demand for telehealth appointments. Leadership applies the SVS: governance approves the initiative, guiding principles emphasize collaboration and iterative delivery, the value chain activities move from engaging clinicians through designing the platform to delivering daily support, and continual improvement tracks patient satisfaction scores to refine scheduling and uptime targets each quarter.",
    estimatedStudyMinutes: 30,
    difficulty: "medium",
    prerequisites: ["service-management", "guiding-principles"],
    extraBank: [
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
  },
  "guiding-principles": {
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
    realWorldScenario:
      "Your IT team plans to replace a 10-year-old ticket system. Instead of a big-bang migration, leadership applies guiding principles: assess current workflows (start where you are), run a two-week pilot with the service desk (progress iteratively), strip unused custom fields before automating routing (optimize and automate), and measure value through reduced resolution time rather than features shipped.",
    estimatedStudyMinutes: 25,
    difficulty: "easy",
    prerequisites: ["service-management"],
    extraBank: [
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
  "incident-management": {
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
    realWorldScenario:
      "At 9 AM Monday, payroll staff cannot access the HR portal. The service desk logs a high-priority incident, the network team identifies a misconfigured firewall rule changed over the weekend, applies a rollback to restore access within 30 minutes, sends status updates to affected managers, and closes the incident—while problem management opens a separate record to review why the change bypassed testing.",
    estimatedStudyMinutes: 25,
    difficulty: "medium",
    prerequisites: ["service-management", "service-desk"],
    extraBank: [
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
  },
};

const files = [
  {
    file: "aws-cloud-practitioner.ts",
    standard: awsStandard,
    anchors: awsAnchors,
  },
  {
    file: "azure-fundamentals.ts",
    standard: azureStandard,
    anchors: azureAnchors,
  },
  {
    file: "linux-plus.ts",
    standard: linuxStandard,
    anchors: linuxAnchors,
  },
  {
    file: "itil-foundation.ts",
    standard: itilStandard,
    anchors: itilAnchors,
  },
];

for (const { file, standard, anchors } of files) {
  const filePath = path.join(ROOT, file);
  let content = fs.readFileSync(filePath, "utf8");

  for (const [topicId, ces] of Object.entries(standard)) {
    content = injectCES(content, topicId, formatStandard(ces));
  }

  for (const [topicId, ces] of Object.entries(anchors)) {
    const { extraBank, ...fullCes } = ces;
    content = injectCES(content, topicId, formatFull(fullCes));
    if (extraBank?.length) {
      content = appendQuestionBank(content, topicId, extraBank);
    }
  }

  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
}

console.log("CES injection complete.");
