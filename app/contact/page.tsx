import PageHeader from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { Map } from "@/components/Map";
import { BRAND } from "@/constants/brand";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: [
      BRAND.contact.phone,
      BRAND.contact.phone
    ]
  },
  {
    icon: Mail,
    title: "Email",
    details: [
      BRAND.contact.email,
      BRAND.contact.support
    ]
  },
  {
    icon: MapPin,
    title: "Address",
    details: [
      BRAND.contact.address,
      BRAND.contact.city
    ]
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: [
      BRAND.hours.regular.weekdays,
      BRAND.hours.regular.saturday,
      BRAND.hours.regular.sunday
    ]
  }
];

export default function ContactPage() {
  return (
    <div className="pt-20">
      <PageHeader
        title="Contact Us"
        description="Get in touch with our team for any inquiries or support needs."
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <div className="grid sm:grid-cols-2 gap-8">
                {contactInfo.map((item) => (
                  <div key={item.title} className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-900">
                      <item.icon className="h-5 w-5" />
                      <h3 className="font-semibold">{item.title}</h3>
                    </div>
                    {item.details.map((detail) => (
                      <p key={detail} className="text-gray-600 pl-7">
                        {detail}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Visit Us</h2>
              <div className="aspect-[16/9] w-full rounded-lg overflow-hidden">
                <Map address={`${BRAND.contact.address}, ${BRAND.contact.city}`} />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
} 