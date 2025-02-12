import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Banner from "./components/Banner";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import FloatingContact from "./components/FloatingContact";
import { BRAND } from "@/constants/brand";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${BRAND.name} | Premium Stainless Steel Kitchens`,
  description: `${BRAND.name} is Kenya's leading manufacturer of custom stainless steel kitchens and commercial kitchen equipment. Serving East Africa with world-class craftsmanship.`,
  keywords: [
    "stainless steel kitchen Kenya",
    "commercial kitchen equipment Nairobi",
    "custom kitchen manufacturer East Africa",
    "restaurant equipment Kenya",
    BRAND.name,
    "KCL",
    "commercial kitchens"
  ].join(", "),
  openGraph: {
    title: `${BRAND.name} | Commercial Kitchen Solutions`,
    description: BRAND.tagline,
    url: 'https://kcl.co.ke',
    siteName: BRAND.name,
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BRAND.name} | Commercial Kitchen Solutions`,
    description: BRAND.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://kcl.co.ke'
  },
  authors: [{ name: BRAND.name }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Banner />
        <Navigation />
        <main className="min-h-screen pt-[80px]">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
