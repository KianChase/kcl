import ProductCategories from "@/components/sections/ProductCategories";

export default function ProductsPage() {
  return (
    <div className="pt-24">
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="heading-1 mb-4">Our Products</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Explore our comprehensive range of commercial kitchen equipment and custom stainless steel solutions.
          </p>
        </div>
      </div>

      <ProductCategories />
    </div>
  );
} 