"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, CheckCircle, Clock, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 500,
    label: "Satisfied Clients",
    suffix: "+",
    description: "Across East Africa"
  },
  {
    icon: CheckCircle,
    value: 1000,
    label: "Projects Completed",
    suffix: "+",
    description: "On time and on budget"
  },
  {
    icon: Clock,
    value: 25,
    label: "Years Experience",
    suffix: "+",
    description: "Industry expertise"
  },
  {
    icon: Award,
    value: 100,
    label: "Quality Assurance",
    suffix: "%",
    description: "Guaranteed satisfaction"
  }
];

interface CounterProps {
  value: number;
  suffix?: string;
}

function Counter({ value, suffix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600"
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {inView ? value : 0}{suffix}
      </motion.span>
    </motion.span>
  );
}

export default function Statistics() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Our Impact
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Delivering excellence across East Africa for over two decades
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <stat.icon className="h-8 w-8 text-gray-900 mb-6 group-hover:scale-110 transition-transform" />
              <Counter value={stat.value} suffix={stat.suffix} />
              <div className="mt-2 text-lg font-semibold text-gray-900">
                {stat.label}
              </div>
              <p className="text-gray-600 mt-1">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 