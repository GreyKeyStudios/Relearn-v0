import type { Topic } from "@/content/types";
import { DisclosureSection } from "@/components/ui/DisclosureSection";

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
    <div className="mb-6 flex flex-col gap-0">
      {topic.guidedExample && (
        <DisclosureSection title="Guided Example" titleClassName="text-sky-400">
          <p className="mb-3 font-medium text-zinc-100">{topic.guidedExample.title}</p>
          <ol className="list-inside list-decimal space-y-2 text-sm leading-relaxed text-zinc-300">
            {topic.guidedExample.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </DisclosureSection>
      )}

      {(topic.commonMistakes?.length ?? 0) > 0 && (
        <DisclosureSection
          title="Common Mistakes"
          titleClassName="text-amber-400"
          className="border-amber-900/40"
        >
          <ul className="list-inside list-disc space-y-1.5 text-sm text-zinc-300">
            {topic.commonMistakes!.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </DisclosureSection>
      )}

      {(topic.examTraps?.length ?? 0) > 0 && (
        <DisclosureSection
          title="Exam Traps"
          titleClassName="text-rose-400"
          className="border-rose-900/40"
        >
          <ul className="list-inside list-disc space-y-1.5 text-sm text-zinc-300">
            {topic.examTraps!.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </DisclosureSection>
      )}

      {topic.realWorldScenario && (
        <DisclosureSection
          title="Real-World Scenario"
          titleClassName="text-emerald-400"
        >
          <p className="text-sm leading-relaxed text-zinc-300">
            {topic.realWorldScenario}
          </p>
        </DisclosureSection>
      )}
    </div>
  );
}
