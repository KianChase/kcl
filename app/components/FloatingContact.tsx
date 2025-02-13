"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X, MessageCircle, Mail, MessageSquare } from "lucide-react";
import { BRAND } from "@/constants/brand";

const contactOptions = [
  {
    icon: MessageSquare,
    label: "WhatsApp",
    href: BRAND.social.whatsapp,
    color: "bg-green-500",
    hoverColor: "hover:bg-green-600"
  },
  {
    icon: Phone,
    label: "Call Us",
    href: `tel:${BRAND.contact.phone}`,
    color: "bg-blue-500",
    hoverColor: "hover:bg-blue-600"
  },
  {
    icon: Mail,
    label: "Email",
    href: `mailto:${BRAND.contact.email}`,
    color: "bg-red-500",
    hoverColor: "hover:bg-red-600"
  }
];

const buttonVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.8, opacity: 0 },
  hover: { scale: 1.05 }
};

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <div className="absolute bottom-full right-0 mb-4 space-y-3">
            {contactOptions.map((option, index) => (
              <motion.a
                key={option.label}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 px-4 py-3 rounded-full text-white shadow-lg ${option.color} ${option.hoverColor} transition-colors`}
                variants={buttonVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                whileHover="hover"
                transition={{ duration: 0.2, delay: index * 0.1 }}
                aria-label={`Contact us via ${option.label}`}
              >
                <option.icon className="h-5 w-5" />
                <span className="text-sm font-medium whitespace-nowrap">
                  {option.label}
                </span>
              </motion.a>
            ))}
          </div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-full shadow-lg text-white transition-colors ${
          isOpen 
            ? "bg-gray-800 hover:bg-gray-700" 
            : "bg-red-600 hover:bg-red-700"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close contact options" : "Open contact options"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </motion.button>
    </div>
  );
} 