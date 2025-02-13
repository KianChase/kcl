import { notFound } from "next/navigation";
import Image from "next/image";
import { MotionDiv } from "@/components/motion/MotionDiv";
import { Ruler, Clock, Package } from "lucide-react";
import { BRAND } from "@/constants/brand";
import type { Category } from "@/types/product";
import Breadcrumb from "@/components/Breadcrumb";
import ProductEnquiryForm from "@/components/ProductEnquiryForm";

// Define the product categories and their content
const categoryContent: Record<string, Category> = {
  workstation: {
    title: "Kitchen Workstations",
    description: "Professional kitchen workstations designed for efficiency and durability",
    image: "https://images.unsplash.com/photo-1588544644883-8aa1ff8c0e48?q=80&w=2000",
    products: [
      {
        name: "Standard Workstation",
        description: "A versatile workstation suitable for most commercial kitchen applications",
        features: [
          "Stainless steel construction",
          "Adjustable shelving",
          "Built-in storage",
          "Anti-drip edges",
          "Leveling feet"
        ],
        image: "/products/workstation-standard.jpg",
        dimensions: {
          width: "1200mm",
          depth: "700mm",
          height: "850mm"
        },
        specifications: {
          "Material": "304 Stainless Steel",
          "Gauge": "16",
          "Weight Capacity": "150kg",
          "Assembly": "Required",
          "Warranty": "2 Years"
        },
        priceRange: "KES 75,000 - 95,000",
        leadTime: "2-3 weeks"
      },
      {
        name: "Premium Workstation",
        description: "Advanced workstation with integrated features for professional kitchens",
        features: [
          "Integrated sink",
          "Cutting board station",
          "Temperature-controlled storage",
          "LED lighting",
          "Backsplash included"
        ],
        image: "/products/workstation-premium.jpg",
        dimensions: {
          width: "1500mm",
          depth: "800mm",
          height: "900mm"
        },
        specifications: {
          "Material": "316 Stainless Steel",
          "Gauge": "14",
          "Weight Capacity": "200kg",
          "Assembly": "Professional Installation",
          "Warranty": "5 Years"
        },
        priceRange: "KES 120,000 - 150,000",
        leadTime: "3-4 weeks"
      },
      {
        name: "Custom Workstation",
        description: "Fully customizable workstation designed to your exact specifications",
        features: [
          "Customizable dimensions",
          "Modular design",
          "Specialized storage options",
          "Integrated power outlets",
          "Optional accessories"
        ],
        image: "/products/workstation-custom.jpg",
        dimensions: {
          width: "Custom (1000-2000mm)",
          depth: "Custom (600-900mm)",
          height: "Custom (800-1000mm)"
        },
        specifications: {
          "Material": "304/316 Stainless Steel",
          "Gauge": "14-16 (customizable)",
          "Weight Capacity": "200kg+",
          "Power": "Optional integrated",
          "Installation": "Professional"
        },
        priceRange: "KES 150,000 - 250,000",
        leadTime: "4-5 weeks"
      }
    ]
  },
  sink: {
    title: "Commercial Sinks",
    description: "Heavy-duty stainless steel sinks for commercial kitchens",
    image: "https://images.unsplash.com/photo-1584771145729-0bd9fda6529b?q=80&w=2000",
    products: [
      {
        name: "Single Bowl Sink",
        description: "Deep single bowl sink perfect for washing large pots and equipment",
        features: [
          "Deep bowl design",
          "Backsplash included",
          "Adjustable feet",
          "Sound deadening",
          "Pre-rinse unit compatible"
        ],
        image: "/products/sink-single.jpg",
        dimensions: {
          width: "600mm",
          depth: "600mm",
          height: "850mm"
        },
        specifications: {
          "Material": "304 Stainless Steel",
          "Bowl Depth": "300mm",
          "Gauge": "16",
          "Drain Size": "2 inch",
          "Warranty": "2 Years"
        },
        priceRange: "KES 45,000 - 65,000",
        leadTime: "1-2 weeks"
      },
      {
        name: "Double Bowl Sink",
        description: "Versatile double bowl configuration for efficient washing operations",
        features: [
          "Dual compartments",
          "Drainboard",
          "Commercial grade finish",
          "Heavy gauge steel",
          "Undermount option"
        ],
        image: "/products/sink-double.jpg",
        dimensions: {
          width: "1200mm",
          depth: "600mm",
          height: "850mm"
        },
        specifications: {
          "Material": "304 Stainless Steel",
          "Bowl Depth": "300mm",
          "Gauge": "16",
          "Drain Size": "2 inch",
          "Warranty": "2 Years"
        },
        priceRange: "KES 75,000 - 95,000",
        leadTime: "2-3 weeks"
      },
      {
        name: "Triple Bowl Sink",
        description: "Professional three-compartment sink for wash-rinse-sanitize workflow",
        features: [
          "Three compartment design",
          "Ideal for wash-rinse-sanitize",
          "Large capacity bowls",
          "Professional grade construction",
          "Optional faucet packages"
        ],
        image: "/products/sink-triple.jpg",
        dimensions: {
          width: "1800mm",
          depth: "600mm",
          height: "850mm"
        },
        specifications: {
          "Material": "304 Stainless Steel",
          "Bowl Depth": "300mm",
          "Gauge": "16",
          "Drain Size": "2 inch",
          "Warranty": "2 Years"
        },
        priceRange: "KES 95,000 - 125,000",
        leadTime: "2-3 weeks"
      }
    ]
  },
  ovens: {
    title: "Commercial Ovens",
    description: "High-performance commercial ovens for professional kitchens",
    image: "https://images.unsplash.com/photo-1591261730799-ee4e6c2d16d7?q=80&w=2000",
    products: [
      {
        name: "Convection Oven",
        description: "Professional convection oven with advanced air circulation system",
        features: [
          "Multiple rack positions",
          "Digital controls",
          "Energy efficient",
          "Even heat distribution",
          "Easy cleaning"
        ],
        image: "/products/oven-convection.jpg",
        dimensions: {
          width: "900mm",
          depth: "850mm",
          height: "600mm"
        },
        specifications: {
          "Power": "6.5kW",
          "Voltage": "415V/3Ph",
          "Temperature Range": "50-300°C",
          "Capacity": "4 GN 1/1",
          "Warranty": "2 Years"
        },
        priceRange: "KES 280,000 - 350,000",
        leadTime: "3-4 weeks"
      },
      {
        name: "Combi Oven",
        description: "Versatile combination oven with steam and convection modes",
        features: [
          "Steam and convection modes",
          "Touch screen interface",
          "Recipe storage",
          "Self-cleaning system",
          "HACCP compliant"
        ],
        image: "/products/oven-combi.jpg",
        dimensions: {
          width: "920mm",
          depth: "900mm",
          height: "1800mm"
        },
        specifications: {
          "Power": "18.5kW",
          "Voltage": "415V/3Ph",
          "Temperature Range": "30-300°C",
          "Capacity": "10 GN 1/1",
          "Steam Generation": "Boilerless"
        },
        priceRange: "KES 850,000 - 1,200,000",
        leadTime: "4-6 weeks"
      },
      {
        name: "Deck Oven",
        description: "Traditional deck oven perfect for bakeries and pizzerias",
        features: [
          "Stone deck",
          "Independent temperature controls",
          "Steam injection",
          "Heavy duty construction",
          "Digital display"
        ],
        image: "/products/oven-deck.jpg",
        dimensions: {
          width: "1400mm",
          depth: "1100mm",
          height: "1600mm"
        },
        specifications: {
          "Power": "12kW",
          "Voltage": "415V/3Ph",
          "Temperature Range": "50-450°C",
          "Deck Material": "Refractory Stone",
          "Number of Decks": "2"
        },
        priceRange: "KES 450,000 - 650,000",
        leadTime: "4-5 weeks"
      }
    ]
  },
  hood: {
    title: "Ventilation Hoods",
    description: "Professional kitchen ventilation and exhaust systems",
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=2000",
    products: [
      {
        name: "Wall-Mounted Hood",
        description: "Professional wall-mounted exhaust hood with integrated lighting",
        features: [
          "Stainless steel construction",
          "Integrated lighting",
          "Removable filters",
          "Fire suppression ready",
          "Variable speed control"
        ],
        image: "/products/hood-wall.jpg",
        dimensions: {
          width: "2000mm",
          depth: "1000mm",
          height: "500mm"
        },
        specifications: {
          "Material": "304 Stainless Steel",
          "Filter Type": "Baffle",
          "Lighting": "LED",
          "Air Flow": "2000-2500 CFM",
          "Motor Power": "1.5kW"
        },
        priceRange: "KES 180,000 - 250,000",
        leadTime: "2-3 weeks"
      },
      {
        name: "Island Hood",
        description: "Double-sided island hood for central cooking stations",
        features: [
          "360° access",
          "High efficiency filters",
          "LED lighting",
          "Customizable sizes",
          "Makeup air compatible"
        ],
        image: "/products/hood-island.jpg",
        dimensions: {
          width: "2400mm",
          depth: "1400mm",
          height: "500mm"
        },
        specifications: {
          "Material": "304 Stainless Steel",
          "Filter Type": "Baffle",
          "Lighting": "LED",
          "Air Flow": "3000-3500 CFM",
          "Motor Power": "2.2kW"
        },
        priceRange: "KES 280,000 - 350,000",
        leadTime: "3-4 weeks"
      },
      {
        name: "Condensate Hood",
        description: "Specialized hood for steam and condensate removal",
        features: [
          "Designed for steam equipment",
          "Condensate removal system",
          "Energy efficient",
          "Low maintenance",
          "NSF certified"
        ],
        image: "/products/hood-condensate.jpg",
        dimensions: {
          width: "1800mm",
          depth: "1000mm",
          height: "500mm"
        },
        specifications: {
          "Material": "304 Stainless Steel",
          "Filter Type": "Mesh",
          "Drainage": "Integrated",
          "Air Flow": "1500-2000 CFM",
          "Motor Power": "1.1kW"
        },
        priceRange: "KES 220,000 - 280,000",
        leadTime: "3-4 weeks"
      }
    ]
  },
  tables: {
    title: "Work Tables",
    description: "Durable stainless steel tables and work surfaces",
    image: "https://images.unsplash.com/photo-1557687790-902ede7ab58c?q=80&w=2000",
    products: [
      {
        name: "Standard Work Table",
        description: "Heavy-duty stainless steel work table for general kitchen use",
        features: [
          "16-gauge stainless top",
          "Adjustable undershelf",
          "Galvanized legs",
          "Adjustable feet",
          "Multiple sizes available"
        ],
        image: "/products/table-standard.jpg",
        dimensions: {
          width: "1500mm",
          depth: "600mm",
          height: "850mm"
        },
        specifications: {
          "Material": "304 Stainless Steel",
          "Top Gauge": "16",
          "Undershelf": "18 gauge",
          "Weight Capacity": "200kg",
          "Assembly": "Required"
        },
        priceRange: "KES 45,000 - 65,000",
        leadTime: "1-2 weeks"
      },
      {
        name: "Equipment Stand",
        description: "Reinforced stand designed for heavy kitchen equipment",
        features: [
          "Heavy-duty construction",
          "Reinforced top",
          "Equipment ready",
          "Casters available",
          "Custom heights"
        ],
        image: "/products/table-equipment.jpg",
        dimensions: {
          width: "900mm",
          depth: "750mm",
          height: "600mm"
        },
        specifications: {
          "Material": "304 Stainless Steel",
          "Top Gauge": "14",
          "Frame": "Heavy duty",
          "Weight Capacity": "350kg",
          "Mobility": "Optional casters"
        },
        priceRange: "KES 55,000 - 75,000",
        leadTime: "2-3 weeks"
      },
      {
        name: "Prep Table",
        description: "Multi-functional preparation table with integrated features",
        features: [
          "Cutting board included",
          "Pan storage",
          "Refrigerated base option",
          "Backsplash available",
          "Drawer systems"
        ],
        image: "/products/table-prep.jpg",
        dimensions: {
          width: "1800mm",
          depth: "700mm",
          height: "850mm"
        },
        specifications: {
          "Material": "304 Stainless Steel",
          "Top Gauge": "16",
          "Cutting Board": "HDPE",
          "Storage": "Pan racks included",
          "Options": "Refrigerated base"
        },
        priceRange: "KES 85,000 - 120,000",
        leadTime: "2-3 weeks"
      }
    ]
  },
  custom: {
    title: "Custom Solutions",
    description: "Bespoke stainless steel fabrication for unique requirements",
    image: "https://images.unsplash.com/photo-1567159644489-31c8e01c57de?q=80&w=2000",
    products: [
      {
        name: "Custom Fabrication",
        description: "Tailored stainless steel solutions for your specific needs",
        features: [
          "Made to measure",
          "Specialized applications",
          "Project consultation",
          "Technical drawings",
          "Installation service"
        ],
        image: "/products/custom-fabrication.jpg",
        dimensions: {
          width: "Custom",
          depth: "Custom",
          height: "Custom"
        },
        specifications: {
          "Material": "304/316 Stainless Steel",
          "Finish": "Custom options",
          "Design": "CAD drawings provided",
          "Installation": "Included",
          "Warranty": "5 Years"
        },
        priceRange: "Based on requirements",
        leadTime: "4-6 weeks"
      },
      {
        name: "Kitchen Layout Design",
        description: "Complete kitchen design and planning service",
        features: [
          "3D visualization",
          "Workflow optimization",
          "Equipment specification",
          "Utility planning",
          "Regulatory compliance"
        ],
        image: "/products/custom-design.jpg",
        dimensions: {
          width: "Project specific",
          depth: "Project specific",
          height: "Project specific"
        },
        specifications: {
          "Design Software": "Latest CAD/3D",
          "Documentation": "Full technical package",
          "Consultation": "Multiple sessions",
          "Revisions": "Included",
          "Support": "Project management"
        },
        priceRange: "Project based",
        leadTime: "2-3 weeks"
      },
      {
        name: "Specialized Equipment",
        description: "Custom-built equipment for unique applications",
        features: [
          "Unique requirements",
          "Industry specific solutions",
          "Quality materials",
          "Professional finish",
          "Warranty included"
        ],
        image: "/products/custom-equipment.jpg",
        dimensions: {
          width: "As required",
          depth: "As required",
          height: "As required"
        },
        specifications: {
          "Material": "Application specific",
          "Certification": "Available",
          "Testing": "Included",
          "Documentation": "Full manual",
          "Training": "Available"
        },
        priceRange: "Based on specification",
        leadTime: "6-8 weeks"
      }
    ]
  }
};

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({ params }: PageProps) {
  // Get the category from params
  const { category } = await params;
  
  // Check if category exists
  if (!categoryContent[category]) {
    notFound();
  }

  const categoryData = categoryContent[category];

  return (
    <div className="pt-20">
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="py-4">
            <Breadcrumb
              items={[
                { label: "Products", href: "/products" },
                { label: categoryData.title }
              ]}
            />
          </div>
          
          <div className="py-12 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h1 className="heading-1 mb-4">{categoryData.title}</h1>
              <p className="text-gray-300 text-lg max-w-2xl">
                {categoryData.description}
              </p>
            </div>
            <div className="w-full md:w-1/3">
              <Image
                src={categoryData.image}
                alt={categoryData.title}
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-8">
              {categoryData.products.map((product) => (
                <MotionDiv
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-64">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Package className="h-5 w-5" />
                        <span>{product.priceRange}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="h-5 w-5" />
                        <span>{product.leadTime}</span>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2">Features</h4>
                        <ul className="space-y-2">
                          {product.features.map((feature) => (
                            <li key={feature} className="flex items-center text-gray-600">
                              <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {product.dimensions && (
                        <div>
                          <h4 className="font-semibold mb-2">Dimensions</h4>
                          <div className="flex gap-4">
                            <div className="flex items-center gap-2 text-gray-600">
                              <Ruler className="h-5 w-5" />
                              <span>W: {product.dimensions.width}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <Ruler className="h-5 w-5 rotate-90" />
                              <span>H: {product.dimensions.height}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <Ruler className="h-5 w-5" />
                              <span>D: {product.dimensions.depth}</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {product.specifications && (
                        <div>
                          <h4 className="font-semibold mb-2">Specifications</h4>
                          <dl className="grid grid-cols-2 gap-x-4 gap-y-2">
                            {Object.entries(product.specifications).map(([key, value]) => (
                              <div key={key}>
                                <dt className="text-gray-600 text-sm">{key}</dt>
                                <dd className="font-medium">{value}</dd>
                              </div>
                            ))}
                          </dl>
                        </div>
                      )}
                    </div>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-24">
            <ProductEnquiryForm
              productName={categoryData.products[0].name}
              category={categoryData.title}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static params for all categories
export function generateStaticParams() {
  return Object.keys(categoryContent).map((category) => ({
    category,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { category } = params;
  const categoryData = categoryContent[category];
  
  if (!categoryData) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${categoryData.title} | ${BRAND.name}`,
    description: categoryData.description,
    openGraph: {
      title: `${categoryData.title} - Commercial Kitchen Equipment | ${BRAND.name}`,
      description: categoryData.description,
      images: [{ url: categoryData.image }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${categoryData.title} | ${BRAND.name}`,
      description: categoryData.description,
      images: [categoryData.image],
    },
    keywords: [
      `commercial ${category}`,
      `industrial ${category}`,
      `stainless steel ${category}`,
      `kitchen ${category}`,
      `${BRAND.name} ${category}`,
      'commercial kitchen equipment',
      'Kenya',
      'East Africa'
    ].join(', '),
  };
} 