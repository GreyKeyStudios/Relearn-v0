/**
 * Reusable lab delivery metadata — cybersecurity and non-cyber labs.
 * Phase A: status/catalog only. No appliance binaries or pack installers.
 */

export type LabDeliveryMode =
  | "web-walkthrough"
  | "build-yourself"
  | "relearn-vm"
  | "external-lab";

export type LabAvailability =
  | "available"
  | "planned"
  | "locked"
  | "deprecated";

export interface LabRoleLogin {
  id: string;
  title: string;
  role: string;
  description: string;
}

export interface LabEnvironmentRequirement {
  deliveryMode: LabDeliveryMode;
  availability: LabAvailability;
  /** Semver-ish appliance version required when deliveryMode is relearn-vm */
  requiredApplianceVersion?: string;
  scenarioPackId?: string;
  scenarioPackVersion?: string;
  supportedProviders?: string[];
  roleLogins?: LabRoleLogin[];
  /** Knowledge node ids or track ids */
  prerequisites?: string[];
  documentationUrl?: string;
  /** In-app walkthrough or overview when available */
  walkthroughHref?: string;
}

export interface LabScenarioCatalogEntry {
  id: string;
  title: string;
  summary: string;
  availability: LabAvailability;
  /** Current learner experience (may differ from future VM pack) */
  currentDelivery: LabDeliveryMode;
  /** Future / primary VM delivery */
  vmDelivery: LabEnvironmentRequirement;
  skills: string[];
  /** Optional link for available web experience */
  href?: string;
}

export interface RelearnApplianceInfo {
  status: "not-released" | "preview" | "released";
  plannedVersion: string;
  primaryFormat: string;
  advancedOption: string;
  osDirection: string;
  scenarioPacksStatus: LabAvailability;
  checksumsStatus: LabAvailability;
  notes: string;
}

export interface LabArchitectureNode {
  id: string;
  label: string;
  children?: LabArchitectureNode[];
}
