import type { ReactNode } from "react";

export function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8 space-y-8">
        {children}
      </div>
    </div>
  );
}
