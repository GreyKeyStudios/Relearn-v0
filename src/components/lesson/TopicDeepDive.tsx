import type { Topic } from "@/content/types";
import { DisclosureSection } from "@/components/ui/DisclosureSection";

interface TopicDeepDiveProps {
  topic: Topic;
}

const GO_DEEPER_KIND_LABEL: Record<string, string> = {
  physics: "Physics",
  math: "Math",
  dsp: "DSP",
  electricity: "Electricity",
  history: "History",
  philosophy: "Philosophy",
  code: "Code",
};

export function TopicDeepDive({ topic }: TopicDeepDiveProps) {
  const hasContent =
    topic.guidedExample ||
    (topic.commonMistakes?.length ?? 0) > 0 ||
    (topic.examTraps?.length ?? 0) > 0 ||
    (topic.realWorldTraps?.length ?? 0) > 0 ||
    topic.realWorldScenario ||
    (topic.whenThisFails?.length ?? 0) > 0 ||
    !!topic.teacherReflectionPrompt ||
    (topic.goDeeper?.length ?? 0) > 0;

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

      {(topic.realWorldTraps?.length ?? 0) > 0 && (
        <DisclosureSection
          title="Real-World Traps"
          titleClassName="text-rose-400"
          className="border-rose-900/40"
        >
          <ul className="list-inside list-disc space-y-1.5 text-sm text-zinc-300">
            {topic.realWorldTraps!.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </DisclosureSection>
      )}

      {(topic.whenThisFails?.length ?? 0) > 0 && (
        <DisclosureSection
          title="When This Does Not Work"
          titleClassName="text-orange-400"
          className="border-orange-900/40"
        >
          <ul className="list-inside list-disc space-y-1.5 text-sm text-zinc-300">
            {topic.whenThisFails!.map((item) => (
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

      {topic.teacherReflectionPrompt && (
        <DisclosureSection
          title="Talk it through"
          titleClassName="text-violet-400"
          className="border-violet-900/40"
        >
          <p className="text-sm leading-relaxed text-zinc-300">
            {topic.teacherReflectionPrompt}
          </p>
        </DisclosureSection>
      )}

      {(topic.goDeeper?.length ?? 0) > 0 &&
        topic.goDeeper!.map((lane) => (
          <DisclosureSection
            key={lane.id}
            title={`Go Deeper · ${GO_DEEPER_KIND_LABEL[lane.kind] ?? lane.kind}: ${lane.title}`}
            titleClassName="text-teal-400"
            className="border-teal-900/40"
          >
            <p className="mb-3 whitespace-pre-wrap text-sm leading-relaxed text-zinc-300">
              {lane.body}
            </p>
            <p className="rounded-lg border border-teal-800/50 bg-teal-950/40 px-3 py-2 text-sm text-teal-200">
              <span className="font-medium">Try in FL Studio: </span>
              {lane.flReconnect}
            </p>
          </DisclosureSection>
        ))}
    </div>
  );
}
