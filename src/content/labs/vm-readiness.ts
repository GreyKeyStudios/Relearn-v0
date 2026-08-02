/** Local-only VM Lab readiness checklist — future gate for appliance-backed labs. */

export interface VmReadinessItem {
  id: string;
  label: string;
  /** Helps learner know where the proof happens */
  where: "host" | "guest" | "both" | "concept";
}

export const VM_READINESS_ITEMS: VmReadinessItem[] = [
  {
    id: "virtualbox-installed",
    label: "VirtualBox installed (official download)",
    where: "host",
  },
  {
    id: "linux-guest-created",
    label: "Linux guest created and boots",
    where: "guest",
  },
  {
    id: "bash-commands",
    label: "Bash starter commands completed in the guest terminal",
    where: "guest",
  },
  {
    id: "snapshot-created",
    label: "Named snapshot created (e.g. clean-first-boot)",
    where: "host",
  },
  {
    id: "failure-introduced",
    label: "Harmless failure introduced inside the guest only",
    where: "guest",
  },
  {
    id: "snapshot-restored",
    label: "Snapshot restored and change verified gone",
    where: "both",
  },
  {
    id: "file-transfer",
    label: "Controlled host ↔ guest file transfer demonstrated",
    where: "both",
  },
  {
    id: "share-disabled",
    label: "Shared folder removed or disabled after the demo",
    where: "host",
  },
  {
    id: "network-mode",
    label: "Guest network mode identified (e.g. NAT)",
    where: "host",
  },
  {
    id: "host-guest-appliance",
    label:
      "I can explain host vs guest vs future ReLearn Lab VM appliance",
    where: "concept",
  },
];

export type VmReadinessChecks = Record<string, boolean>;

export function emptyVmReadinessChecks(): VmReadinessChecks {
  return Object.fromEntries(VM_READINESS_ITEMS.map((i) => [i.id, false]));
}

export function isVmReadinessComplete(checks: VmReadinessChecks): boolean {
  return VM_READINESS_ITEMS.every((i) => checks[i.id] === true);
}

export const VM_READINESS_STORAGE_KEY = "relearn-vm-readiness-v1";
