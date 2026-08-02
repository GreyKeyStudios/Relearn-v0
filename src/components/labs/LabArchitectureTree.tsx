import type { LabArchitectureNode } from "@/content/labs/types";
import { LAB_ARCHITECTURE_TREE } from "@/content/labs/catalog";

function TreeNodes({
  nodes,
  depth = 0,
}: {
  nodes: LabArchitectureNode[];
  depth?: number;
}) {
  return (
    <ul className={depth === 0 ? "space-y-2" : "mt-1 space-y-1 border-l border-hairline pl-3"}>
      {nodes.map((node) => (
        <li key={node.id} className="font-mono text-xs text-muted-foreground sm:text-sm">
          <span className="text-foreground">{node.label}</span>
          {node.children && node.children.length > 0 && (
            <TreeNodes nodes={node.children} depth={depth + 1} />
          )}
        </li>
      ))}
    </ul>
  );
}

interface LabArchitectureTreeProps {
  root?: LabArchitectureNode;
  className?: string;
}

export function LabArchitectureTree({
  root = LAB_ARCHITECTURE_TREE,
  className = "",
}: LabArchitectureTreeProps) {
  return (
    <div
      className={`rounded-xl border border-border bg-surface-raised/40 p-4 sm:p-5 ${className}`}
      aria-labelledby="lab-arch-heading"
    >
      <h3
        id="lab-arch-heading"
        className="font-serif text-lg font-medium text-foreground"
      >
        Lab architecture
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Separate logins provide role-specific files, tools, context, and access.
        Scenario services will use technical isolation beyond ordinary Linux accounts.
      </p>
      <div className="mt-4 overflow-x-auto">
        <p className="mb-2 font-mono text-sm text-foreground">{root.label}</p>
        {root.children && <TreeNodes nodes={root.children} />}
      </div>
    </div>
  );
}
