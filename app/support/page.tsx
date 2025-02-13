import { Phone, PenTool, FileText, Users } from "lucide-react";
import { BRAND } from "@/constants/brand";

const supportChannels = [
  {
    title: "24/7 Emergency Support",
    description: "Available round-the-clock for urgent equipment issues",
    icon: Phone,
    contact: BRAND.contact.phone,
    additional: "Priority response for commercial clients"
  },
  {
    title: "Technical Support",
    description: "Expert technical assistance and troubleshooting",
    icon: PenTool,
    contact: BRAND.contact.technical,
    additional: "Remote diagnostics available"
  },
  {
    title: "Installation Support",
    description: "Professional installation and setup assistance",
    icon: FileText,
    contact: BRAND.contact.installations,
    additional: "Equipment specifications and requirements"
  },
  {
    title: "Maintenance Support",
    description: "Regular maintenance and servicing",
    icon: Users,
    contact: BRAND.contact.maintenance,
    additional: "Scheduled maintenance services"
  }
];

export default function SupportPage() {
  return (
    <div className="pt-20">
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="heading-1 mb-4">Support & Service</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            {BRAND.name} provides comprehensive support services for your kitchen equipment. Our team ensures optimal performance.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {supportChannels.map((channel) => (
              <div key={channel.title} className="bg-white p-6 rounded-lg shadow-sm">
                <channel.icon className="h-12 w-12 text-gray-900 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{channel.title}</h3>
                <p className="text-gray-600 mb-4">{channel.description}</p>
                <div className="text-sm">
                  <p className="font-semibold mb-1">Contact:</p>
                  <p className="text-gray-600">{channel.contact}</p>
                  <p className="text-gray-500 mt-2">{channel.additional}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="heading-2 text-center mb-12">Support Hours</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Regular Support</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: {BRAND.hours.regular.weekdays}</p>
                  <p>Saturday: {BRAND.hours.regular.saturday}</p>
                  <p>Sunday: {BRAND.hours.regular.sunday}</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Emergency Support</h3>
                <div className="space-y-2 text-gray-600">
                  <p>{BRAND.hours.emergency.available}</p>
                  <p>{BRAND.hours.emergency.priority}</p>
                  <p>{BRAND.hours.emergency.team}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 