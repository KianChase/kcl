"use client";

import Image from "next/image";

const installations = [
  {
    name: "Culinary Training Centers",
    description: "State-of-the-art kitchen facilities for Kenya's leading catering schools and colleges",
    image: "/installations/training.jpg",
    details: [
      "Student training stations",
      "Demonstration kitchens",
      "Professional equipment setup",
      "Safety-first design"
    ]
  },
  {
    name: "Kenya Utalii College",
    description: "Complete industrial kitchen setup for East Africa's premier hospitality training institution",
    image: "/installations/utalii.jpg",
    details: [
      "Industrial-grade cooking stations",
      "Training kitchen facilities",
      "Large-scale food preparation areas",
      "Specialized culinary equipment"
    ]
  },
  {
    name: "Sarova Stanley",
    description: "High-capacity commercial kitchen installation for luxury hotel operations",
    image: "/installations/sarova.jpg",
    details: [
      "Commercial kitchen setup",
      "Banquet preparation facilities",
      "Specialized restaurant equipment",
      "Custom storage solutions"
    ]
  },
  {
    name: "Top Hospitality Institutions",
    description: "Specialized training kitchen installations across Kenya",
    image: "/installations/hospitality.jpg",
    details: [
      "Training workstations",
      "Demo kitchen setups",
      "Student practice areas",
      "Modern culinary equipment"
    ]
  }
];

export default function InstallationShowcase() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Our Major Installations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by Kenya&apos;s leading hospitality institutions and luxury hotels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {installations.map((installation) => (
            <div key={installation.name} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image
                  src={installation.image}
                  alt={installation.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{installation.name}</h3>
                <p className="text-gray-600 mb-4">{installation.description}</p>
                <ul className="space-y-2">
                  {installation.details.map((detail) => (
                    <li key={detail} className="flex items-center text-sm text-gray-600">
                      <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 