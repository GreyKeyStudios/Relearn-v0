import type { Certification } from "./types";
import { awsCloudPractitioner } from "./certifications/aws-cloud-practitioner";
import { azureFundamentals } from "./certifications/azure-fundamentals";
import { ccna } from "./certifications/ccna";
import { cysaPlus } from "./certifications/cysa-plus";
import { itilFoundation } from "./certifications/itil-foundation";
import { linuxPlus } from "./certifications/linux-plus";
import { networkPlus } from "./certifications/network-plus";
import { securityPlus } from "./certifications/security-plus";

export const CERTIFICATIONS: Certification[] = [
  ccna,
  securityPlus,
  networkPlus,
  cysaPlus,
  awsCloudPractitioner,
  azureFundamentals,
  linuxPlus,
  itilFoundation,
];

export function getCertification(id: string): Certification | undefined {
  return CERTIFICATIONS.find((c) => c.id === id);
}

export function getCertificationIds(): string[] {
  return CERTIFICATIONS.map((c) => c.id);
}
