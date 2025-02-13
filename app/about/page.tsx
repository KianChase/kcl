"use client";

import { content } from "@/config/content";
import ParallaxHero from "@/components/sections/ParallaxHero";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

const valueVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
    },
  }),
};

const teamVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
};

export default function AboutPage() {
  const { story, mission, values, team } = content.about;

  return (
    <div>
      <ParallaxHero
      />

      <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
        {/* Story Section */}
        <AnimatedSection className="mb-20">
          <h2 className="text-3xl font-bold mb-6">{story.title}</h2>
          <div className="prose prose-lg max-w-none">
            {story.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </AnimatedSection>

        {/* Mission Section */}
        <AnimatedSection className="mb-20">
          <h2 className="text-3xl font-bold mb-6">{mission.title}</h2>
          <p className="text-lg text-gray-600">{mission.content}</p>
        </AnimatedSection>

        {/* Values Section */}
        <AnimatedSection className="mb-20">
          <h2 className="text-3xl font-bold mb-8">{values.title}</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {values.items.map((value, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={valueVariants}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Team Section */}
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-6">{team.title}</h2>
          <p className="text-lg text-gray-600 mb-8">{team.content}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.members.map((member, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={teamVariants}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1 text-center group"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1 group-hover:text-red-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
} 