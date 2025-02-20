"use client";

import { Product3DViewer } from "@/components/ui/product-viewer-3d";

const productViews = [
  { id: "1", angle: 0, image: "/images/products/cooker-1.jpg" },
  { id: "2", angle: 45, image: "/images/products/cooker-2.jpg" },
  { id: "3", angle: 90, image: "/images/products/cooker-3.jpg" },
  { id: "4", angle: 135, image: "/images/products/cooker-4.jpg" },
  { id: "5", angle: 180, image: "/images/products/cooker-5.jpg" },
  { id: "6", angle: 225, image: "/images/products/cooker-6.jpg" },
  { id: "7", angle: 270, image: "/images/products/cooker-7.jpg" },
  { id: "8", angle: 315, image: "/images/products/cooker-8.jpg" },
];

const features = [
  "High-performance burners",
  "Stainless steel construction",
  "Energy efficient design",
  "Easy-clean surfaces",
  "Safety features",
  "Temperature control"
];

export function ProductDetail() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Product3DViewer
              name="Commercial Gas Range"
              views={productViews}
              features={features}
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">Commercial Gas Range</h1>
            <p className="text-gray-600 mb-8">
              Professional-grade gas range designed for high-volume commercial kitchens.
              Features multiple high-performance burners and robust stainless steel construction.
            </p>
            {/* Add more product details, pricing, etc. */}
          </div>
        </div>
      </div>
    </section>
  );
} 