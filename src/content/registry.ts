import type { Certification } from "./types";
import { aPlus } from "./certifications/a-plus";
import { awsCloudPractitioner } from "./certifications/aws-cloud-practitioner";
import { azureFundamentals } from "./certifications/azure-fundamentals";
import { ccna } from "./certifications/ccna";
import { computerFundamentals } from "./certifications/computer-fundamentals";
import { cysaPlus } from "./certifications/cysa-plus";
import { gitGithub } from "./certifications/git-github";
import { powershell } from "./certifications/powershell";
import { itilFoundation } from "./certifications/itil-foundation";
import { linuxPlus } from "./certifications/linux-plus";
import { networkPlus } from "./certifications/network-plus";
import { securityPlus } from "./certifications/security-plus";
import { soundSynthesis } from "./certifications/sound-synthesis";

export const CERTIFICATIONS: Certification[] = [
  ccna,
  computerFundamentals,
  gitGithub,
  powershell,
  soundSynthesis,
  aPlus,
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
