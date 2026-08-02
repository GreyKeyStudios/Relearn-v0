import type { LabRoleLogin } from "@/content/labs/types";

interface LabRoleListProps {
  roles: LabRoleLogin[];
  className?: string;
}

export function LabRoleList({ roles, className = "" }: LabRoleListProps) {
  if (roles.length === 0) {
    return <p className={`text-xs text-faint ${className}`}>No roles defined yet.</p>;
  }

  return (
    <ul className={`divide-y divide-hairline ${className}`}>
      {roles.map((role) => (
        <li key={role.id} className="py-2">
          <p className="text-sm font-medium text-foreground">{role.title}</p>
          <p className="text-xs text-faint">{role.role}</p>
          <p className="mt-1 text-sm text-muted-foreground">{role.description}</p>
        </li>
      ))}
    </ul>
  );
}
