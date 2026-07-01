import { CERTIFICATIONS } from "@/content/registry";
import { getAllSimulatorIds } from "@/content/simulators/registry";
import { getAssignment } from "@/lib/content-selectors";
import { getOrderedPracticeAssignments } from "@/lib/curriculum";

export interface CurriculumVerificationIssue {
  certId: string;
  assignmentId: string;
  topicId: string;
  message: string;
}

export function verifyCurriculumLinks(): CurriculumVerificationIssue[] {
  const issues: CurriculumVerificationIssue[] = [];
  const simulatorIds = new Set(getAllSimulatorIds());

  for (const cert of CERTIFICATIONS) {
    for (const domain of cert.domains) {
      for (const topic of domain.topics) {
        const resourceIds = new Set((topic.externalResources ?? []).map((r) => r.id));

        for (const assignment of getOrderedPracticeAssignments(topic.assignments)) {
          const resolved = getAssignment(cert.id, assignment.id);
          if (!resolved) {
            issues.push({
              certId: cert.id,
              assignmentId: assignment.id,
              topicId: topic.id,
              message: "Assignment not resolvable via getAssignment",
            });
          }

          if (assignment.simulatorId && !simulatorIds.has(assignment.simulatorId)) {
            issues.push({
              certId: cert.id,
              assignmentId: assignment.id,
              topicId: topic.id,
              message: `Unknown simulatorId: ${assignment.simulatorId}`,
            });
          }

          if (assignment.externalResourceId && !resourceIds.has(assignment.externalResourceId)) {
            issues.push({
              certId: cert.id,
              assignmentId: assignment.id,
              topicId: topic.id,
              message: `Missing externalResourceId: ${assignment.externalResourceId}`,
            });
          }

          if (
            assignment.type === "external-lab" &&
            !assignment.externalResourceId
          ) {
            issues.push({
              certId: cert.id,
              assignmentId: assignment.id,
              topicId: topic.id,
              message: "External-lab assignment missing externalResourceId",
            });
          }

          if (assignment.type === "simulator" && !assignment.simulatorId) {
            issues.push({
              certId: cert.id,
              assignmentId: assignment.id,
              topicId: topic.id,
              message: "Simulator assignment missing simulatorId",
            });
          }
        }
      }
    }
  }

  return issues;
}

export function smokeTestPaths(): { path: string; ok: boolean; detail: string }[] {
  const ccnaSubnet = getAssignment("ccna", "subnet-cidr-sim");
  const ccnaPt = getAssignment("ccna", "subnet-pt-lab");
  const secCrypto = getAssignment("security-plus", "crypto-matcher-drill");
  const secCert = getAssignment("security-plus", "cert-chain-drill");

  const gitLab = getAssignment("git-github", "git-lab-spot-vc-problem");
  const psLab = getAssignment("powershell", "ps-lab-first-commands");

  return [
    {
      path: "/cert/ccna/lesson/subnetting",
      ok: !!getAssignment("ccna", "subnet-cidr-sim"),
      detail: ccnaSubnet ? "subnetting lesson assignments resolve" : "subnetting assignments missing",
    },
    {
      path: "/cert/ccna/assignment/subnet-cidr-sim",
      ok: !!ccnaSubnet && ccnaSubnet.assignment.simulatorId === "subnet-cidr-drill",
      detail: "CCNA subnet simulator assignment",
    },
    {
      path: "/cert/ccna/simulator/subnet-cidr-drill?topicId=subnetting&assignmentId=subnet-cidr-sim",
      ok: !!ccnaSubnet?.assignment.simulatorId,
      detail: "CCNA subnet simulator route",
    },
    {
      path: "/cert/ccna/assignment/subnet-pt-lab",
      ok: !!ccnaPt && !!ccnaPt.externalResource,
      detail: "CCNA Packet Tracer external lab",
    },
    {
      path: "/cert/security-plus/lesson/cryptography-basics",
      ok: !!secCrypto,
      detail: "Security+ crypto lesson assignments resolve",
    },
    {
      path: "/cert/security-plus/assignment/crypto-matcher-drill",
      ok: !!secCrypto && secCrypto.assignment.simulatorId === "crypto-matcher",
      detail: "Security+ crypto matcher assignment",
    },
    {
      path: "/cert/security-plus/simulator/crypto-matcher?topicId=cryptography-basics&assignmentId=crypto-matcher-drill",
      ok: !!secCrypto?.assignment.simulatorId,
      detail: "Security+ crypto simulator route",
    },
    {
      path: "/cert/security-plus/assignment/cert-chain-drill",
      ok: !!secCert && secCert.assignment.simulatorId === "cert-chain-order",
      detail: "Security+ cert chain assignment",
    },
    {
      path: "/cert/git-github/lesson/git-why-version-control",
      ok: !!getAssignment("git-github", "git-lab-spot-vc-problem"),
      detail: "Git/GitHub Module 1 lesson and lab resolve",
    },
    {
      path: "/cert/git-github/assignment/git-lab-spot-vc-problem",
      ok: !!gitLab && gitLab.assignment.type === "external-lab",
      detail: "Git/GitHub spot-the-problem lab",
    },
    {
      path: "/cert/powershell/lesson/ps-why-the-shell",
      ok: !!getAssignment("powershell", "ps-lab-first-commands"),
      detail: "PowerShell Module 1 lesson and lab resolve",
    },
    {
      path: "/cert/powershell/assignment/ps-lab-first-commands",
      ok: !!psLab && psLab.assignment.type === "external-lab",
      detail: "PowerShell first commands lab",
    },
  ];
}

export { verifyCcnaCesWarnings, verifyAllCesWarnings, verifyCertCesWarnings } from "@/lib/content-expansion";
