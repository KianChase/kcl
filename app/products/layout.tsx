import { BRAND } from "@/constants/brand";

export const metadata = {
  title: `Products | ${BRAND.name}`,
  description: "Browse our range of professional kitchen equipment and stainless steel solutions.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
} 