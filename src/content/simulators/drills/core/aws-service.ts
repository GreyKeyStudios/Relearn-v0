import type { ChoiceDrillItem } from "@/components/simulators/SimulatorRegistry";

export const AWS_SERVICE_POOL: ChoiceDrillItem[] = [
  {
    id: "aws-ec2",
    prompt: "You need resizable virtual servers in the cloud. Which AWS service?",
    choices: [
      { id: "a", text: "Amazon EC2" },
      { id: "b", text: "Amazon S3" },
      { id: "c", text: "AWS Lambda" },
      { id: "d", text: "Amazon RDS" },
    ],
    correctChoiceId: "a",
    weakConcept: "EC2 use case",
  },
  {
    id: "aws-s3",
    prompt: "Store static website assets and backups with 11 9s durability. Best choice?",
    choices: [
      { id: "a", text: "Amazon S3" },
      { id: "b", text: "Amazon EBS" },
      { id: "c", text: "Amazon EFS only" },
      { id: "d", text: "AWS CloudFormation" },
    ],
    correctChoiceId: "a",
    weakConcept: "S3 object storage",
  },
  {
    id: "aws-iam",
    prompt: "Manage users, groups, roles, and permissions across AWS?",
    choices: [
      { id: "a", text: "AWS IAM" },
      { id: "b", text: "Amazon VPC" },
      { id: "c", text: "AWS CloudTrail only" },
      { id: "d", text: "Amazon Route 53" },
    ],
    correctChoiceId: "a",
    weakConcept: "IAM purpose",
  },
  {
    id: "aws-lambda",
    prompt: "Run code without provisioning servers, triggered by events?",
    choices: [
      { id: "a", text: "AWS Lambda" },
      { id: "b", text: "Amazon EC2 Auto Scaling only" },
      { id: "c", text: "Amazon Glacier" },
      { id: "d", text: "AWS Direct Connect" },
    ],
    correctChoiceId: "a",
    weakConcept: "Serverless compute",
  },
  {
    id: "aws-rds",
    prompt: "Managed relational database (MySQL, PostgreSQL)?",
    choices: [
      { id: "a", text: "Amazon RDS" },
      { id: "b", text: "Amazon DynamoDB" },
      { id: "c", text: "Amazon Redshift only for all SQL" },
      { id: "d", text: "Amazon S3" },
    ],
    correctChoiceId: "a",
    weakConcept: "RDS vs DynamoDB",
  },
  {
    id: "aws-vpc",
    prompt: "Isolate resources in a logically separated network in AWS?",
    choices: [
      { id: "a", text: "Amazon VPC" },
      { id: "b", text: "AWS Shield" },
      { id: "c", text: "Amazon CloudFront" },
      { id: "d", text: "AWS Organizations" },
    ],
    correctChoiceId: "a",
    weakConcept: "VPC networking",
  },
  {
    id: "aws-cloudwatch",
    prompt: "Monitor metrics, logs, and set alarms for AWS resources?",
    choices: [
      { id: "a", text: "Amazon CloudWatch" },
      { id: "b", text: "AWS Config only" },
      { id: "c", text: "Amazon SNS only" },
      { id: "d", text: "AWS Trusted Advisor only" },
    ],
    correctChoiceId: "a",
    weakConcept: "CloudWatch monitoring",
  },
  {
    id: "aws-dynamodb",
    prompt: "Fully managed NoSQL key-value/document database at any scale?",
    choices: [
      { id: "a", text: "Amazon DynamoDB" },
      { id: "b", text: "Amazon RDS" },
      { id: "c", text: "Amazon Aurora only" },
      { id: "d", text: "Amazon ElastiCache for persistent docs" },
    ],
    correctChoiceId: "a",
    weakConcept: "DynamoDB use case",
  },
];
