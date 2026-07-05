import { type ReactNode } from "react";
import { BottomNav } from "./BottomNav";
import { ProgressStoreProvider } from "./ProgressStoreProvider";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="mx-auto flex min-h-full w-full max-w-lg flex-col bg-background text-foreground">
      <ProgressStoreProvider>
        <main className="flex-1 px-4 pb-24 pt-4">{children}</main>
      </ProgressStoreProvider>
      <BottomNav />
    </div>
  );
}
