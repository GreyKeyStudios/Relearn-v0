import { LAB_SETUP_STEPS } from "@/content/labs/catalog";

interface LabSetupStepsProps {
  className?: string;
}

export function LabSetupSteps({ className = "" }: LabSetupStepsProps) {
  return (
    <ol className={`space-y-4 ${className}`}>
      {LAB_SETUP_STEPS.map((item) => (
        <li key={item.step} className="flex gap-3">
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-xs font-medium text-muted-foreground"
            aria-hidden
          >
            {item.step}
          </span>
          <div>
            <p className="text-sm font-medium text-foreground">{item.title}</p>
            <p className="mt-1 text-sm text-muted-foreground">{item.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
