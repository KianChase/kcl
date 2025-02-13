import { Metadata } from "next";
import { BRAND } from "@/constants/brand";

export const metadata: Metadata = {
  title: `About Us - ${BRAND.name}`,
  description: "Learn about our journey, mission, and the team behind Kitchen Commercial Limited. We are East Africa's leading commercial kitchen solutions provider.",
  openGraph: {
    title: `About Us - ${BRAND.name}`,
    description: "Learn about our journey, mission, and the team behind Kitchen Commercial Limited. We are East Africa's leading commercial kitchen solutions provider.",
    images: [
      {
        url: "/images/og/about.jpg",
        width: 1200,
        height: 630,
        alt: "About Kitchen Commercial Limited",
      },
    ],
  },
}; 