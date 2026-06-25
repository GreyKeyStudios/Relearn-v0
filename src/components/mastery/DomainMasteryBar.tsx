import { ProgressBar } from "@/components/ui/ProgressBar";

interface DomainMasteryBarProps {
  domainName: string;
  averageScore: number;
  proficientCount?: number;
  topicCount?: number;
}

export function DomainMasteryBar({
  domainName,
  averageScore,
  proficientCount,
  topicCount,
}: DomainMasteryBarProps) {
  return (
    <div className="mb-2 mt-1">
      {domainName ? (
        <div className="mb-1 flex items-center justify-between gap-2">
          <span className="text-xs font-medium text-zinc-400">{domainName}</span>
          <span className="text-xs text-zinc-500">{averageScore}%</span>
        </div>
      ) : (
        <div className="mb-1 flex justify-end">
          <span className="text-xs text-zinc-500">Mastery {averageScore}%</span>
        </div>
      )}
      <ProgressBar value={averageScore} />
      {proficientCount !== undefined && topicCount !== undefined && topicCount > 0 && (
        <p className="mt-1 text-[10px] text-zinc-600">
          {proficientCount}/{topicCount} topics proficient+
        </p>
      )}
    </div>
  );
}
