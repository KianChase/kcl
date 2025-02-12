"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PenTool, Settings, Wrench, Users } from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "Custom Fabrication",
    description: "Bespoke stainless steel solutions tailored to your needs",
    image: "https://images.unsplash.com/photo-1567159644489-31c8e01c57de?q=80&w=2000",
    features: ["Custom dimensions", "Premium materials", "Quality craftsmanship"]
  },
  {
    icon: Settings,
    title: "Kitchen Planning",
    description: "Expert kitchen layout and workflow optimization",
    image: "https://images.unsplash.com/photo-1588544644883-8aa1ff8c0e48?q=80&w=2000",
    features: ["Space optimization", "3D visualization", "Equipment selection"]
  },
  {
    icon: Wrench,
    title: "Installation",
    description: "Professional setup with minimal disruption",
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=2000",
    features: ["Expert team", "Safety compliance", "Quality assurance"]
  },
  {
    icon: Users,
    title: "Maintenance",
    description: "24/7 support and preventive maintenance",
    image: "https://images.unsplash.com/photo-1581578017093-cd30fce4eeb7?q=80&w=2000",
    features: ["24/7 support", "Rapid response", "Genuine parts"]
  }
];

export default function ServicesShowcase() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            East Africa&apos;s trusted commercial kitchen partner
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <service.icon className="h-8 w-8 text-white mb-3 group-hover:scale-110 transition-transform drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]" />
                  <h3 className="text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 mt-2">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="p-8">
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 