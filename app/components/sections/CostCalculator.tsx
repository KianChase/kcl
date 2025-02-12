"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, ArrowRight } from "lucide-react";

interface Option {
  label: string;
  value: string;
  basePrice: number;
}

const kitchenTypes: Option[] = [
  { label: "Restaurant Kitchen", value: "restaurant", basePrice: 1500000 },
  { label: "Hotel Kitchen", value: "hotel", basePrice: 2500000 },
  { label: "School Kitchen", value: "school", basePrice: 1000000 },
  { label: "Hospital Kitchen", value: "hospital", basePrice: 2000000 }
];

const kitchenSizes: Option[] = [
  { label: "Small (Up to 50m²)", value: "small", basePrice: 1 },
  { label: "Medium (51-100m²)", value: "medium", basePrice: 1.5 },
  { label: "Large (101-200m²)", value: "large", basePrice: 2 },
  { label: "Extra Large (200m²+)", value: "xl", basePrice: 2.5 }
];

export default function CostCalculator() {
  const [type, setType] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [showEstimate, setShowEstimate] = useState(false);

  const calculateEstimate = () => {
    const selectedType = kitchenTypes.find(t => t.value === type);
    const selectedSize = kitchenSizes.find(s => s.value === size);
    
    if (selectedType && selectedSize) {
      return selectedType.basePrice * selectedSize.basePrice;
    }
    return 0;
  };

  const estimate = calculateEstimate();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Calculator className="h-12 w-12 mx-auto mb-4 text-gray-900" />
            <h2 className="heading-2 mb-4">Cost Calculator</h2>
            <p className="text-xl text-gray-600">
              Get an instant estimate for your commercial kitchen project
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="space-y-6">
              {/* Kitchen Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kitchen Type
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {kitchenTypes.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setType(option.value);
                        setShowEstimate(false);
                      }}
                      className={`p-4 text-left rounded-lg border-2 transition-colors ${
                        type === option.value
                          ? "border-gray-900 bg-gray-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="font-medium">{option.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Kitchen Size */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kitchen Size
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {kitchenSizes.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSize(option.value);
                        setShowEstimate(false);
                      }}
                      className={`p-4 text-left rounded-lg border-2 transition-colors ${
                        size === option.value
                          ? "border-gray-900 bg-gray-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="font-medium">{option.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Calculate Button */}
              <button
                onClick={() => setShowEstimate(true)}
                disabled={!type || !size}
                className="w-full py-4 px-6 bg-gray-900 text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 transition-colors"
              >
                Calculate Estimate
              </button>

              {/* Results */}
              {showEstimate && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 p-6 bg-gray-50 rounded-lg"
                >
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-2">
                      Estimated Cost Range
                    </div>
                    <div className="text-3xl font-bold mb-4">
                      KES {(estimate * 0.9).toLocaleString()} - {(estimate * 1.1).toLocaleString()}
                    </div>
                    <p className="text-sm text-gray-500 mb-6">
                      This is a rough estimate. Get an accurate quote by consulting with our team.
                    </p>
                    <a
                      href="/consultation"
                      className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:text-gray-600 transition-colors"
                    >
                      Get Detailed Quote
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 