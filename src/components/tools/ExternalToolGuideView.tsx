import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { ExternalToolGuide } from "@/content/external-tools/packet-tracer";
import { Card } from "@/components/ui/Card";

interface ExternalToolGuideViewProps {
  guide: ExternalToolGuide;
  certId: string;
}

export function ExternalToolGuideView({ guide, certId }: ExternalToolGuideViewProps) {
  return (
    <div className="flex flex-col gap-4">
      <Card className="p-4">
        <p className="text-sm leading-relaxed text-muted-foreground">{guide.summary}</p>
        <p className="eyebrow mt-3">Platform · {guide.platform}</p>
        <a
          href={guide.downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent hover:border-accent/60"
        >
          <ExternalLink className="h-4 w-4" />
          Download {guide.name}
        </a>
      </Card>

      {guide.sections.map((section) => (
        <Card key={section.title} className="p-4">
          <h2 className="font-serif text-xl font-medium text-foreground">{section.title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{section.body}</p>
          {section.bullets && (
            <ul className="mt-3 list-inside list-disc space-y-1.5 text-sm text-muted-foreground marker:text-primary">
              {section.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </Card>
      ))}

      <p className="text-center text-xs text-faint">
        Return to your{" "}
        <Link href={`/cert/${certId}`} className="text-accent hover:underline">
          cert dashboard
        </Link>{" "}
        when you are ready to continue labs.
      </p>
    </div>
  );
}
