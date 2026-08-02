"use client";

import Link from "next/link";
import { Check, Circle, Lock, Unlock } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { KnowledgeDnaViewModel } from "@/lib/knowledge-graph";
import { topicHref } from "@/lib/knowledge-graph";

interface KnowledgeDnaProps {
  view: KnowledgeDnaViewModel;
  className?: string;
}

function StatusIcon({ complete }: { complete: boolean }) {
  return complete ? (
    <Check className="h-3.5 w-3.5 shrink-0 text-emerald-400" aria-hidden />
  ) : (
    <Circle className="h-3.5 w-3.5 shrink-0 text-zinc-500" aria-hidden />
  );
}

function NodeLink({
  title,
  topicRef,
  complete,
}: {
  title: string;
  topicRef?: { certId: string; topicId: string };
  complete?: boolean;
}) {
  const inner = (
    <span className="inline-flex items-center gap-1.5 text-sm">
      {complete != null && <StatusIcon complete={complete} />}
      <span className={complete === false ? "text-muted-foreground" : "text-foreground"}>
        {title}
      </span>
    </span>
  );
  if (!topicRef) {
    return (
      <li className="py-1">
        {inner}
        <span className="ml-2 text-xs text-faint">(coming soon)</span>
      </li>
    );
  }
  return (
    <li className="py-1">
      <Link
        href={topicHref(topicRef)}
        className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300"
      >
        {complete != null && <StatusIcon complete={complete} />}
        {title}
      </Link>
    </li>
  );
}

/**
 * Knowledge DNA — shows how a concept connects across ReLearn
 * (required/recommended prereqs, red/blue/remediation, labs).
 */
export function KnowledgeDna({ view, className = "" }: KnowledgeDnaProps) {
  const { node, required, recommended, redTeam, blueTeam, remediation, labs, missingRequired } =
    view;

  return (
    <section
      className={`rounded-xl border border-border bg-surface-raised/40 p-4 sm:p-5 ${className}`}
      aria-labelledby={`knowledge-dna-${node.id}`}
    >
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <h2
          id={`knowledge-dna-${node.id}`}
          className="font-serif text-xl font-medium text-foreground"
        >
          {node.title}
        </h2>
        <Badge variant="info">Knowledge DNA</Badge>
        <Badge
          variant={
            node.status === "live"
              ? "success"
              : node.status === "partial"
                ? "warning"
                : "default"
          }
        >
          {node.status}
        </Badge>
      </div>
      <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
        {node.description}
      </p>

      {missingRequired.length > 0 && (
        <div
          className="mb-5 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-sm text-amber-100"
          role="status"
        >
          Locked content: finish required prerequisites first —{" "}
          {missingRequired.map((m, i) => (
            <span key={m.id}>
              {i > 0 ? ", " : ""}
              {m.topicRef ? (
                <Link
                  href={topicHref(m.topicRef)}
                  className="underline hover:text-white"
                >
                  {m.title}
                </Link>
              ) : (
                m.title
              )}
            </span>
          ))}
          .
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <h3 className="eyebrow mb-2">Required</h3>
          {required.length === 0 ? (
            <p className="text-xs text-faint">None</p>
          ) : (
            <ul className="divide-y divide-hairline">
              {required.map(({ node: n, complete }) => (
                <NodeLink
                  key={n.id}
                  title={n.title}
                  topicRef={n.topicRef}
                  complete={complete}
                />
              ))}
            </ul>
          )}
        </div>
        <div>
          <h3 className="eyebrow mb-2">Recommended</h3>
          {recommended.length === 0 ? (
            <p className="text-xs text-faint">None</p>
          ) : (
            <ul className="divide-y divide-hairline">
              {recommended.map(({ node: n, complete }) => (
                <NodeLink
                  key={n.id}
                  title={n.title}
                  topicRef={n.topicRef}
                  complete={complete}
                />
              ))}
            </ul>
          )}
        </div>
        <div>
          <h3 className="eyebrow mb-2">Red Team</h3>
          {redTeam.length === 0 ? (
            <p className="text-xs text-faint">None yet</p>
          ) : (
            <ul className="divide-y divide-hairline">
              {redTeam.map((n) => (
                <NodeLink key={n.id} title={n.title} topicRef={n.topicRef} />
              ))}
            </ul>
          )}
        </div>
        <div>
          <h3 className="eyebrow mb-2">Blue Team</h3>
          {blueTeam.length === 0 ? (
            <p className="text-xs text-faint">None yet</p>
          ) : (
            <ul className="divide-y divide-hairline">
              {blueTeam.map((n) => (
                <NodeLink key={n.id} title={n.title} topicRef={n.topicRef} />
              ))}
            </ul>
          )}
        </div>
      </div>

      {remediation.length > 0 && (
        <div className="mt-5">
          <h3 className="eyebrow mb-2">Remediation</h3>
          <ul className="divide-y divide-hairline">
            {remediation.map((n) => (
              <NodeLink key={n.id} title={n.title} topicRef={n.topicRef} />
            ))}
          </ul>
        </div>
      )}

      {labs.length > 0 && (
        <div className="mt-5">
          <h3 className="eyebrow mb-2">Labs</h3>
          <ul className="space-y-2">
            {labs.map((lab) => (
              <li
                key={lab.id}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                {lab.locked ? (
                  <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-zinc-500" aria-hidden />
                ) : (
                  <Unlock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" aria-hidden />
                )}
                <span>
                  {lab.locked || !lab.href ? (
                    <span className="text-foreground">{lab.title}</span>
                  ) : (
                    <Link href={lab.href} className="text-sky-400 hover:text-sky-300">
                      {lab.title}
                    </Link>
                  )}
                  {lab.locked && lab.lockReason && (
                    <span className="mt-0.5 block text-xs text-faint">{lab.lockReason}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
