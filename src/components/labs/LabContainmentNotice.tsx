import { LAB_CONTAINMENT_PRINCIPLES } from "@/content/labs/catalog";

interface LabContainmentNoticeProps {
  className?: string;
}

export function LabContainmentNotice({ className = "" }: LabContainmentNoticeProps) {
  return (
    <div
      className={`rounded-xl border border-border bg-surface-raised/40 p-4 sm:p-5 ${className}`}
      role="region"
      aria-labelledby="lab-containment-heading"
    >
      <h3
        id="lab-containment-heading"
        className="font-serif text-lg font-medium text-foreground"
      >
        Containment principles
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        ReLearn Lab scenarios are designed for local training only. These safeguards
        apply to future appliance packs and to current web walkthroughs.
      </p>
      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
        {LAB_CONTAINMENT_PRINCIPLES.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
