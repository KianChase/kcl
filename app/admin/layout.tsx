import { redirect } from "next/navigation";
import { BRAND } from "@/constants/brand";
import { Inbox, Settings } from "lucide-react";
import Link from "next/link";
import { isAuthenticated } from "@/lib/auth";
import { LogoutButton } from "@/components/admin/LogoutButton";
import { Toaster } from "@/components/ui/toaster";
import { useAdminShortcuts } from "@/lib/keyboard-shortcuts";
import { TooltipProvider } from "@/components/ui/tooltip";

function AdminLayoutContent({ children }: { children: React.ReactNode }) {
  useAdminShortcuts();

  return (
    <div className="min-h-screen bg-gray-50">
      <TooltipProvider>
        <header className="bg-white border-b sticky top-0 z-10">
          {/* <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
            <ShortcutTooltip shortcut={["Alt", "H"]}>
              <Link 
                href="/admin"
                className="text-xl font-semibold text-gray-900 hover:text-red-600 transition-colors"
              >
                <span className="hidden sm:inline">{BRAND.name}</span>
                <span className="text-red-600">Admin</span>
              </Link>
            </ShortcutTooltip>
            <nav className="flex items-center gap-2 sm:gap-6">
              <ShortcutTooltip shortcut={["Alt", "S"]}>
                <Link 
                  href="/admin/submissions" 
                  className="flex items-center gap-2 p-2 text-gray-600 hover:text-red-600 transition-colors"
                >
                  <Inbox className="h-5 w-5" />
                  <span className="hidden sm:inline">Submissions</span>
                </Link>
              </ShortcutTooltip>
              <ShortcutTooltip shortcut={["Alt", "G"]}>
                <Link 
                  href="/admin/settings" 
                  className="flex items-center gap-2 p-2 text-gray-600 hover:text-red-600 transition-colors"
                >
                  <Settings className="h-5 w-5" />
                  <span className="hidden sm:inline">Settings</span>
                </Link>
              </ShortcutTooltip>
              <LogoutButton />
            </nav>
          </div> */}
        </header>
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="max-w-full overflow-x-auto">{children}</div>
        </main>
        <Toaster />
        {/* <ShortcutsDialog /> */}
      </TooltipProvider>
    </div>
  );
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!isAuthenticated()) {
    redirect("/admin/login");
  }

  return <AdminLayoutContent>{children}</AdminLayoutContent>;
} 