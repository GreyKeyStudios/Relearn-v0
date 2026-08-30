import { type ReactNode } from "react";
import { BottomNav } from "./BottomNav";
import { SideNav } from "./SideNav";
import { ProgressStoreProvider } from "./ProgressStoreProvider";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-full bg-background text-foreground">
      <ProgressStoreProvider>
        <SideNav />
        <main className="min-h-screen px-4 pb-24 pt-4 sm:px-6 lg:ml-60 lg:px-8 lg:pb-12 lg:pt-8 xl:px-10">
          <div className="mx-auto w-full max-w-[1380px]">{children}</div>
        </main>
      </ProgressStoreProvider>
      <BottomNav />
    </div>
  );
}
