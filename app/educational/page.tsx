import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import MaintenanceServices from "@/components/sections/MaintenanceServices";
import EquipmentCatalog from "@/components/sections/EquipmentCatalog";

const features = [
  {
    title: "Utalii College Installation",
    description: "Complete setup of Kenya's premier hospitality training institution",
    details: [
      "Multiple training kitchens",
      "Professional demonstration areas",
      "Industrial-grade equipment",
      "Specialized storage systems"
    ]
  },
  {
    title: "Student-Focused Design",
    description: "Layouts optimized for learning and practical training",
    details: [
      "Clear sightlines for instruction",
      "Ergonomic workstations",
      "Safety-first design",
      "Efficient workflow patterns"
    ]
  },
  {
    title: "Industry Standards",
    description: "Equipment and setups matching real-world commercial kitchens",
    details: [
      "Commercial-grade appliances",
      "Professional tools and utensils",
      "Industry-standard procedures",
      "Quality control systems"
    ]
  }
];

export default function EducationalPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/educational/hero.jpg"
            alt="Educational Kitchen Installation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h1 className="heading-1 text-white mb-6">
            Educational Kitchen Solutions
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Setting the standard in culinary education with state-of-the-art training facilities across East Africa.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="heading-2 mb-6">
                Trusted by Leading Educational Institutions
              </h2>
              <p className="text-gray-600 mb-8">
                Our installations at Kenya Utalii College and other premier institutions demonstrate our expertise in creating optimal learning environments for culinary education.
              </p>
              <div className="space-y-4">
                {features.map((feature) => (
                  <div key={feature.title} className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {feature.details.map((detail) => (
                        <li key={detail} className="flex items-center text-sm text-gray-600">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <Image
                src="/educational/training.jpg"
                alt="Training Kitchen"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Case Study Section */}
          <div className="bg-gray-50 rounded-lg p-8 mb-20">
            <h2 className="heading-2 text-center mb-12">Featured Installation: Kenya Utalii College</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Project Overview</h3>
                <p className="text-gray-600">
                  Complete design and installation of multiple training kitchens, serving East Africa&apos;s leading hospitality training institution.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>24 individual student workstations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Professional demonstration kitchen</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Industrial-grade equipment installation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Specialized storage and preparation areas</span>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/educational/utalii-1.jpg"
                    alt="Utalii Installation 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/educational/utalii-2.jpg"
                    alt="Utalii Installation 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/educational/utalii-3.jpg"
                    alt="Utalii Installation 3"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/educational/utalii-4.jpg"
                    alt="Utalii Installation 4"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Add Equipment Catalog before Maintenance Services */}
          <EquipmentCatalog />

          {/* Add Maintenance Services before CTA */}
          <MaintenanceServices />

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="heading-2 mb-6">Ready to Create Your Training Facility?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you build the perfect educational kitchen for your institution.
            </p>
            <Link
              href="/consultation"
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-md font-semibold hover:bg-gray-800 transition-colors"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 