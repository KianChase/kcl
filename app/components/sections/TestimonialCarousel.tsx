"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "James Mwangi",
    role: "Executive Chef, Sarova Stanley",
    image: "/testimonials/chef1.jpg",
    quote: "The quality and durability of KitchenCraft's equipment is unmatched. Their custom solutions have transformed our kitchen efficiency.",
    rating: 5
  },
  {
    name: "Sarah Kimani",
    role: "F&B Director, Sankara Nairobi",
    image: "/testimonials/director1.jpg",
    quote: "Working with KitchenCraft was seamless. Their attention to detail and after-sales support is exceptional.",
    rating: 5
  },
  {
    name: "David Ochieng",
    role: "Operations Manager, Ole Sereni",
    image: "/testimonials/manager1.jpg",
    quote: "The custom fabrication quality and local support make KitchenCraft the clear choice for professional kitchens.",
    rating: 5
  }
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:mt-8">
            <div className="relative">
              <h2 className="heading-2 mb-3">What Our Clients Say</h2>
              <p className="text-xl text-gray-500">
                Trusted by East Africa's leading establishments
              </p>
            </div>
          </div>
          
          <div className="mt-8 lg:mt-0">
            <div className="relative">
              <div className="relative h-[400px] overflow-hidden rounded-lg shadow-lg">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === current ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="absolute inset-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gray-900/75" />
                    </div>
                    
                    <div className="relative h-full flex flex-col justify-end p-8">
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <blockquote className="text-xl text-white mb-6">
                        "{testimonial.quote}"
                      </blockquote>
                      <div>
                        <div className="font-semibold text-white">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-300 text-sm">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button
                  onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
                  className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 