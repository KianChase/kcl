import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import { AdminLayoutContent } from "@/components/admin/AdminLayoutContent";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!await isAuthenticated()) {
    redirect("/admin/login");
  }

  return <AdminLayoutContent>{children}</AdminLayoutContent>;
} 