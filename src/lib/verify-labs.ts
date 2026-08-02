import type { LabScenarioCatalogEntry } from "@/content/labs/types";
import { getLabScenarioCatalog } from "@/content/labs/catalog";

export interface LabCatalogIssue {
  scenarioId: string;
  message: string;
}

export function verifyLabCatalog(
  entries: LabScenarioCatalogEntry[] = getLabScenarioCatalog()
): LabCatalogIssue[] {
  const issues: LabCatalogIssue[] = [];
  const ids = new Set<string>();

  for (const entry of entries) {
    if (ids.has(entry.id)) {
      issues.push({ scenarioId: entry.id, message: "Duplicate catalog id" });
    }
    ids.add(entry.id);

    if (!entry.title.trim()) {
      issues.push({ scenarioId: entry.id, message: "Missing title" });
    }

    if (entry.availability === "available" && entry.currentDelivery === "web-walkthrough") {
      if (!entry.href) {
        issues.push({
          scenarioId: entry.id,
          message: "Available web walkthrough missing href",
        });
      }
    }

    if (entry.availability === "planned" && entry.href) {
      // Planned cards may still link to docs — OK. No download URLs.
    }

    const vm = entry.vmDelivery;
    if (vm.deliveryMode === "relearn-vm" && vm.availability === "available") {
      issues.push({
        scenarioId: entry.id,
        message:
          "relearn-vm must not be marked available until an appliance ships (Phase A)",
      });
    }

    if (vm.roleLogins) {
      const roleIds = new Set<string>();
      for (const role of vm.roleLogins) {
        if (roleIds.has(role.id)) {
          issues.push({
            scenarioId: entry.id,
            message: `Duplicate role login id: ${role.id}`,
          });
        }
        roleIds.add(role.id);
      }
    }
  }

  return issues;
}
