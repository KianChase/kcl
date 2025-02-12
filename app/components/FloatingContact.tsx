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
    color: `bg-[${BRAND.theme.colors.secondary.DEFAULT}]`
  },
  {
    icon: Phone,
    label: "Call Us",
    href: `tel:${BRAND.contact.phone}`,
    color: `bg-[${BRAND.theme.colors.accent.DEFAULT}]`
  },
  {
    icon: Mail,
    label: "Email",
    href: `mailto:${BRAND.contact.email}`,
    color: `bg-[${BRAND.theme.colors.primary.DEFAULT}]`
  }
];

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-full right-0 mb-4 space-y-3"
          >
            {contactOptions.map((option) => (
              <a
                key={option.label}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 px-4 py-3 rounded-full text-white ${option.color} hover:opacity-90 transition-opacity shadow-lg`}
              >
                <option.icon className="h-5 w-5" />
                <span className="text-sm font-medium">{option.label}</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-full shadow-lg text-white transition-colors ${
          isOpen 
            ? `bg-[${BRAND.theme.colors.primary.DEFAULT}] hover:bg-[${BRAND.theme.colors.primary.light}]` 
            : `bg-[${BRAND.theme.colors.secondary.DEFAULT}] hover:bg-[${BRAND.theme.colors.secondary.dark}]`
        }`}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>
    </div>
  );
} 