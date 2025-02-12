"use client";

import { Wrench, Clock, Shield, PenTool } from "lucide-react";
import { BRAND } from "@/constants/brand";

const services = [
  {
    title: "Equipment Maintenance",
    description: "Regular maintenance to ensure optimal equipment performance",
    icon: Wrench,
    features: [
      "Scheduled inspections",
      "Equipment calibration",
      "Parts replacement",
      "Performance testing"
    ]
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock emergency support for critical equipment issues",
    icon: Clock,
    features: [
      "Emergency response",
      "Technical support",
      "Remote diagnostics",
      "On-site repairs"
    ]
  },
  {
    title: "Installation Service",
    description: "Professional installation of all kitchen equipment",
    icon: PenTool,
    features: [
      "Expert installation",
      "Quality assurance",
      "Safety compliance",
      "Performance testing"
    ]
  },
  {
    title: "Equipment Support",
    description: "Comprehensive support for all installed equipment",
    icon: Shield,
    features: [
      "Technical guidance",
      "Maintenance advice",
      "Operation support",
      "Equipment updates"
    ]
  }
];

export default function MaintenanceServices() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Maintenance & Support Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {BRAND.name} provides comprehensive maintenance and support services to ensure your kitchen equipment operates at peak performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-6 rounded-lg shadow-sm">
              <service.icon className={`h-12 w-12 text-[${BRAND.theme.colors.primary.DEFAULT}] mb-4`} />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="text-sm text-gray-600 flex items-center">
                    <span className={`w-1.5 h-1.5 bg-[${BRAND.theme.colors.accent.DEFAULT}] rounded-full mr-2`}></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Need Support?</h3>
            <p className="text-gray-600 mb-6">
              Our technical team is available 24/7 to assist with any equipment issues.
            </p>
            <div className="space-y-2">
              <p className="font-semibold">Emergency Support Line:</p>
              <a href={`tel:${BRAND.contact.phone}`} className="block text-gray-600 hover:text-gray-900">
                {BRAND.contact.phone}
              </a>
              <a href={`mailto:${BRAND.contact.support}`} className="block text-gray-600 hover:text-gray-900">
                {BRAND.contact.support}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 