"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log(formData);
  };

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="heading-2 mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Ready to transform your kitchen? Our team is here to help you create the perfect solution for your needs.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-gray-400 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Visit Our Showroom</h3>
                  <p className="text-gray-600">Industrial Area, Nairobi</p>
                  <p className="text-gray-600">Kenya</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-gray-400 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Call Us</h3>
                  <p className="text-gray-600">+254722291100</p>
                  <p className="text-gray-600">+254 733 000000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-gray-400 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email Us</h3>
                  <p className="text-gray-600">info@kitchencraft.co.ke</p>
                  <p className="text-gray-600">sales@kitchencraft.co.ke</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-gray-400 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Consultation Form */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Request a Consultation</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
                  Project Type
                </label>
                <select
                  id="projectType"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  required
                >
                  <option value="">Select Project Type</option>
                  <option value="commercial">Commercial Kitchen Installation</option>
                  <option value="institutional">Institutional Kitchen Setup</option>
                  <option value="custom">Custom Equipment Design</option>
                  <option value="modification">Equipment Modification</option>
                  <option value="maintenance">Maintenance Service</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Project Details
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  required
                ></textarea>
              </div>

              <div>
                <label htmlFor="inspiration" className="block text-sm font-medium text-gray-700 mb-1">
                  Reference Images (Optional)
                </label>
                <input
                  type="file"
                  id="inspiration"
                  accept="image/*"
                  multiple
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                />
                <p className="mt-1 text-sm text-gray-500">
                  Share images of designs that inspire you
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 