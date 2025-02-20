"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const clients = [
  {
    name: "Utalii College",
    logo: "/images/clients/utalii.png",
    alt: "Kenya Utalii College logo"
  },
  {
    name: "Sarova Hotels",
    logo: "/images/clients/sarova.svg",
    alt: "Sarova Hotels logo"
  },
  {
    name: "Serena Hotels",
    logo: "/images/clients/serena.svg",
    alt: "Serena Hotels logo"
  },
  {
    name: "Sankara Nairobi",
    logo: "/images/clients/sankara.svg",
    alt: "Sankara Nairobi logo"
  },
  {
    name: "Radisson Blu",
    logo: "/images/clients/radisson blue.svg",
    alt: "Radisson Blu Hotels logo"
  },
  {
    name: "Ole Sereni",
    logo: "/images/clients/olesereni.png",
    alt: "Ole Sereni Hotel logo"
  }
];

// Duplicate array for seamless scrolling
const infiniteClients = [...clients, ...clients];

export default function ClientLogos() {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Trusted by Industry Leaders
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            We're proud to work with some of East Africa's most prestigious hospitality and educational institutions
          </motion.p>
        </div>

        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />

          {/* Scrolling Container */}
          <div className="overflow-hidden">
            <motion.div 
              className="flex gap-8 items-center"
              initial={{ x: 0 }}
              animate={{ x: `-${100 / 2}%` }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
              whileHover={{ animationPlayState: "paused" }}
            >
              {infiniteClients.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 w-32 h-20 relative group"
                >
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    fill
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300 client-logo"
                  />
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors rounded-lg" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-sm text-gray-500">
            Join over 500+ satisfied clients across East Africa
          </p>
        </motion.div>
      </div>
    </section>
  );
} 