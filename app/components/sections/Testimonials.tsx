"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "As Kenya's premier hospitality training institution, we required industrial-grade kitchen facilities. KitchenCraft's installations at Utalii College have withstood years of intensive training sessions.",
    author: "Prof. Charles Musyoki",
    title: "Director, Kenya Utalii College",
    image: "/testimonials/utalii.jpg",
  },
  {
    id: 2,
    quote: "The durability and efficiency of KitchenCraft's installations have significantly enhanced our kitchen operations. Their understanding of commercial kitchen needs is exceptional.",
    author: "Chef Mohammed Hassan",
    title: "Executive Chef, Sarova Stanley Hotel",
    image: "/testimonials/sarova.jpg",
  },
  {
    id: 3,
    quote: "From our main kitchen to our specialized training stations, KitchenCraft's equipment has proven perfect for both educational and commercial use.",
    author: "Jane Wangari",
    title: "Head of Culinary Arts, Top Hospitality School",
    image: "/testimonials/culinary.jpg",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => 
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setCurrentIndex((current) => 
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const previous = () => {
    setCurrentIndex((current) => 
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  return (
    <section className="section-padding bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative">
          <Quote className="absolute text-gray-700 h-32 w-32 -top-6 -left-6" />
          <div className="relative z-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-opacity duration-500 ${
                  index === currentIndex ? "opacity-100" : "opacity-0 absolute inset-0"
                }`}
              >
                <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8 max-w-4xl">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-gray-400">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="absolute right-0 bottom-0 flex gap-2">
            <button
              onClick={previous}
              className="p-2 rounded-full hover:bg-gray-800 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-full hover:bg-gray-800 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 