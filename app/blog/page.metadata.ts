import { Metadata } from "next";
import { BRAND } from "@/constants/brand";

export const metadata: Metadata = {
  title: `Blog - Commercial Kitchen Insights | ${BRAND.name}`,
  description: "Expert advice, industry insights, and the latest trends in commercial kitchen design, equipment, and maintenance. Stay updated with our professional kitchen tips.",
  openGraph: {
    title: `Commercial Kitchen Blog | ${BRAND.name}`,
    description: "Expert insights and tips for commercial kitchen design and equipment",
    url: `https://${BRAND.domain}/blog`,
    siteName: BRAND.name,
    locale: 'en_KE',
    type: 'website',
    images: [
      {
        url: `https://${BRAND.domain}/images/og/blog.jpg`,
        width: 1200,
        height: 630,
        alt: "Commercial Kitchen Blog"
      }
    ],
  },
  keywords: [
    "commercial kitchen blog",
    "kitchen design tips",
    "kitchen equipment guide",
    "commercial kitchen maintenance",
    "kitchen industry news",
    "restaurant kitchen tips",
    "kitchen sustainability",
    "professional kitchen advice",
    BRAND.name,
    "kitchen insights"
  ].join(", "),
}; 