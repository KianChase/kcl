import PageHeader from "@/components/PageHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { BRAND } from "@/constants/brand";
import { Wrench, PenTool, Users, Shield, Clock, Phone } from "lucide-react";

const services = [
  {
    title: "Kitchen Design & Planning",
    description: "Expert kitchen layout and workflow optimization for maximum efficiency",
    icon: PenTool,
    features: [
      "3D visualization and planning",
      "Workflow optimization",
      "Equipment specification",
      "Space planning and layout"
    ]
  },
  {
    title: "Equipment Installation",
    description: "Professional installation of commercial kitchen equipment",
    icon: Wrench,
    features: [
      "Equipment setup and testing",
      "Safety compliance checks",
      "Performance optimization",
      "Staff training"
    ]
  },
  {
    title: "Maintenance & Support",
    description: "Comprehensive maintenance and support services",
    icon: Shield,
    features: [
      "24/7 emergency support",
      "Preventive maintenance",
      "Spare parts supply",
      "Technical assistance"
    ]
  },
  {
    title: "Training Solutions",
    description: "Professional training for kitchen staff and operators",
    icon: Users,
    features: [
      "Equipment operation training",
      "Safety procedures",
      "Maintenance guidelines",
      "Best practices"
    ]
  },
  {
    title: "Consultation Services",
    description: "Expert consultation for kitchen projects",
    icon: Clock,
    features: [
      "Project planning",
      "Budget optimization",
      "Equipment selection",
      "Compliance guidance"
    ]
  },
  {
    title: "Custom Solutions",
    description: "Tailored solutions for unique requirements",
    icon: Phone,
    features: [
      "Custom equipment design",
      "Special installations",
      "Unique space solutions",
      "Specialized requirements"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <PageHeader
        title="Our Services"
        description={`${BRAND.name} provides comprehensive kitchen solutions tailored to your needs.`}
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
} 