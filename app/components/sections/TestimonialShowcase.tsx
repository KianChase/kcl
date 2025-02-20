"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "As Kenya's premier hospitality training institution, we required industrial-grade kitchen facilities. KitchenCraft's installations at Utalii College have withstood years of intensive training sessions.",
    author: "Prof. Charles Musyoki",
    title: "Director, Kenya Utalii College",
    image: "/images/testimonials/charles.jpg",
    logo: "/images/clients/utalii.png"
  },
  {
    id: 2,
    quote: "The team's attention to detail and understanding of commercial kitchen workflows has significantly improved our operational efficiency. Their custom solutions have helped us maintain our high standards of service.",
    author: "James Mwangi",
    title: "Executive Chef, Sarova Stanley",
    image: "/images/testimonials/james.jpg",
    logo: "/images/clients/sarova.svg"
  },
  {
    id: 3,
    quote: "KitchenCraft's expertise in designing and implementing large-scale kitchen facilities has been invaluable. Their solutions have helped us serve our guests better while reducing operational costs.",
    author: "Daniel Kikumu",
    title: "F&B Director, Serena Hotels",
    image: "/images/testimonials/daniel.jpg",
    logo: "/images/clients/serena.svg"
  }
];

export default function TestimonialShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (
      (prevIndex + newDirection + testimonials.length) % testimonials.length
    ));
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gray-900">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-red-500 text-lg font-medium mb-4 tracking-wider"
          >
            TESTIMONIALS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Hear from the industry leaders who trust us with their kitchen installations
          </motion.p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative h-[400px] max-w-4xl mx-auto">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute inset-0"
            >
              <div className="h-full flex flex-col md:flex-row items-center gap-8 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                {/* Client Image & Logo */}
                <div className="relative w-full md:w-1/3 aspect-square rounded-xl overflow-hidden">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].author}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                    <Image
                      src={testimonials[currentIndex].logo}
                      alt="Company logo"
                      width={120}
                      height={40}
                      className="w-auto h-8 object-contain brightness-0 invert"
                    />
                  </div>
                </div>

                {/* Quote */}
                <div className="flex-1 text-center md:text-left">
                  <Quote className="h-8 w-8 text-red-500 mb-4 mx-auto md:mx-0" />
                  <blockquote className="text-xl text-gray-200 mb-6">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonials[currentIndex].author}
                    </div>
                    <div className="text-gray-400">
                      {testimonials[currentIndex].title}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-4">
            <button
              onClick={() => paginate(-1)}
              className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-red-500" : "bg-white/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => paginate(1)}
              className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 