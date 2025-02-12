"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const customProjects = [
  {
    title: "Bespoke Kitchen Islands",
    description: "Custom-designed stainless steel islands tailored to specific workflow requirements and space constraints.",
    image: "/custom/island.jpg",
    features: [
      "Client-inspired designs",
      "Ergonomic customization",
      "Integrated storage solutions",
      "Specialized workstations"
    ]
  },
  {
    title: "Specialized Equipment",
    description: "Modified commercial equipment to meet unique operational needs and kitchen layouts.",
    image: "/custom/equipment.jpg",
    features: [
      "Modified dimensions",
      "Custom configurations",
      "Specialized functions",
      "Integrated systems"
    ]
  },
  {
    title: "Inspiration to Reality",
    description: "Turning client inspirations and reference designs into functional stainless steel solutions.",
    image: "/custom/inspiration.jpg",
    features: [
      "Reference-based design",
      "Functional adaptations",
      "Material optimization",
      "Local context integration"
    ]
  }
];

export default function CustomSolutions() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Custom Design Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We transform your inspiration into reality, customizing every detail to match your specific requirements and preferences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {customProjects.map((project) => (
            <div key={project.title} className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <ul className="space-y-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-600">
                    <ArrowRight className="h-4 w-4 text-gray-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Have a specific design in mind?</h3>
            <p className="text-gray-600 mb-4">
              Share your inspiration with us, and we'll help you create the perfect custom solution.
            </p>
            <a
              href="/consultation"
              className="inline-flex items-center text-gray-900 font-semibold hover:text-gray-600"
            >
              Start your custom project
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 