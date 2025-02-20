import { Metadata } from "next";
import { BRAND } from "@/constants/brand";

export const metadata: Metadata = {
  title: `Why Choose Us - Leading Commercial Kitchen Solutions | ${BRAND.name}`,
  description: `East Africa's premier commercial kitchen manufacturer with 25+ years of excellence. Premium stainless steel equipment, 24/7 support, and custom solutions for hotels, restaurants, and institutions. Based in Nairobi, serving all of East Africa.`,
  openGraph: {
    title: `Why Choose Us - Leading Commercial Kitchen Solutions | ${BRAND.name}`,
    description: "25+ years of excellence in commercial kitchen solutions. Premium quality, expert team, and comprehensive support.",
    url: `https://${BRAND.domain}/why-choose-us`,
    siteName: BRAND.name,
    locale: 'en_KE',
    type: 'website',
    images: [
      {
        url: `https://${BRAND.domain}/images/og/why-choose-us.jpg`,
        width: 1200,
        height: 630,
        alt: "Commercial Kitchen Solutions by Kitchen Commercial Limited"
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Why Choose Us - ${BRAND.name}`,
    description: "Discover East Africa's leading commercial kitchen manufacturer",
    images: [`https://${BRAND.domain}/images/og/why-choose-us.jpg`],
  },
  keywords: [
    "commercial kitchen manufacturer Kenya",
    "stainless steel kitchen equipment",
    "kitchen installation East Africa",
    "commercial kitchen solutions",
    "professional kitchen equipment",
    "kitchen design and installation",
    "hotel kitchen equipment",
    "restaurant kitchen solutions",
    "industrial kitchen manufacturer",
    "custom kitchen solutions",
    "commercial kitchen maintenance",
    "kitchen equipment warranty",
    "24/7 kitchen support",
    "Nairobi kitchen manufacturer",
    "East Africa kitchen solutions",
    BRAND.name,
    "KCL Kenya",
    "Kitchen Commercial Limited"
  ].join(", "),
  alternates: {
    canonical: `https://${BRAND.domain}/why-choose-us`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}; 