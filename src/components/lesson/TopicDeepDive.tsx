import type { Topic } from "@/content/types";
import { Card } from "@/components/ui/Card";
import { AlertTriangle, Lightbulb, ListOrdered, Briefcase } from "lucide-react";

interface TopicDeepDiveProps {
  topic: Topic;
}

export function TopicDeepDive({ topic }: TopicDeepDiveProps) {
  const hasContent =
    topic.guidedExample ||
    (topic.commonMistakes?.length ?? 0) > 0 ||
    (topic.examTraps?.length ?? 0) > 0 ||
    topic.realWorldScenario;

  if (!hasContent) return null;

  return (
    <div className="mb-6 flex flex-col gap-4">
      {topic.guidedExample && (
        <Card className="p-4">
          <div className="mb-3 flex items-center gap-2 text-sky-400">
            <ListOrdered className="h-4 w-4" />
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              Guided Example
            </h3>
          </div>
          <p className="mb-3 font-medium text-zinc-100">{topic.guidedExample.title}</p>
          <ol className="list-inside list-decimal space-y-2 text-sm leading-relaxed text-zinc-300">
            {topic.guidedExample.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </Card>
      )}

      {(topic.commonMistakes?.length ?? 0) > 0 && (
        <Card className="border-amber-900/40 p-4">
          <div className="mb-3 flex items-center gap-2 text-amber-400">
            <AlertTriangle className="h-4 w-4" />
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              Common Mistakes
            </h3>
          </div>
          <ul className="list-inside list-disc space-y-1.5 text-sm text-zinc-300">
            {topic.commonMistakes!.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
      )}

      {(topic.examTraps?.length ?? 0) > 0 && (
        <Card className="border-rose-900/40 p-4">
          <div className="mb-3 flex items-center gap-2 text-rose-400">
            <Lightbulb className="h-4 w-4" />
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              Exam Traps
            </h3>
          </div>
          <ul className="list-inside list-disc space-y-1.5 text-sm text-zinc-300">
            {topic.examTraps!.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
      )}

      {topic.realWorldScenario && (
        <Card className="p-4">
          <div className="mb-3 flex items-center gap-2 text-emerald-400">
            <Briefcase className="h-4 w-4" />
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              Real-World Scenario
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-zinc-300">{topic.realWorldScenario}</p>
        </Card>
      )}
    </div>
  );
}
