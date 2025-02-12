import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CategoryNotFound() {
  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn&apos;t find the product category you&apos;re looking for.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Products
          </Link>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Available Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              href="/products/workstation"
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">Workstations</h3>
              <p className="text-gray-600">Professional kitchen workstations designed for efficiency</p>
            </Link>
            <Link
              href="/products/sink"
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">Sinks</h3>
              <p className="text-gray-600">Commercial grade stainless steel sinks</p>
            </Link>
            <Link
              href="/products/ovens"
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">Ovens</h3>
              <p className="text-gray-600">High-performance commercial ovens</p>
            </Link>
            {/* Add other categories */}
          </div>
        </div>
      </div>
    </div>
  );
} 