import { type ReactNode } from "react";
import { BottomNav } from "./BottomNav";
import { ProgressStoreProvider } from "./ProgressStoreProvider";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="mx-auto flex min-h-full w-full max-w-lg flex-col bg-zinc-950 text-zinc-100">
      <ProgressStoreProvider>
        <main className="flex-1 px-4 pb-24 pt-4">{children}</main>
      </ProgressStoreProvider>
      <BottomNav />
    </div>
  );
}
