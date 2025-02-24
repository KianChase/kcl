"use client";

import { BRAND } from "@/constants/brand";
import { Inbox, Settings } from "lucide-react";
import Link from "next/link";
import { LogoutButton } from "./LogoutButton";
import { Toaster } from "@/components/ui/toaster";
import { useAdminShortcuts } from "@/lib/keyboard-shortcuts";
import { TooltipProvider } from "@/components/ui/tooltip";

export function AdminLayoutContent({ children }: { children: React.ReactNode }) {
  useAdminShortcuts();

  return (
    <div className="min-h-screen bg-gray-50">
      <TooltipProvider>
        <header className="bg-white border-b sticky top-0 z-10">
          {/* Header content */}
        </header>
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="max-w-full overflow-x-auto">{children}</div>
        </main>
        <Toaster />
      </TooltipProvider>
    </div>
  );
} 