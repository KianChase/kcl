import ParallaxHero from "./components/sections/ParallaxHero";
import ServicesShowcase from "./components/sections/ServicesShowcase";
import ProjectShowcase from "./components/sections/ProjectShowcase";
import Statistics from "./components/sections/Statistics";
import CTASection from "./components/sections/CTASection";
import TestimonialCarousel from "./components/sections/TestimonialCarousel";
import ClientLogos from "./components/sections/ClientLogos";
import TestimonialShowcase from "./components/sections/TestimonialShowcase";
import ProcessSection from "./components/sections/ProcessSection";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <ParallaxHero />

      {/* Key Services */}
      <ServicesShowcase />

      {/* Client Logos */}
      <ClientLogos />

      {/* Impact Numbers */}
      <Statistics />

      {/* Featured Projects */}
      <ProjectShowcase />

      {/* Client Stories */}
      <TestimonialShowcase />

      {/* Call to Action */}
      <CTASection />

      {/* Process Section */}
      <ProcessSection />
    </>
  );
}

const process = [
  {
    title: "Consultation",
    description: "We visit your site to understand your needs and space requirements"
  },
  {
    title: "Design",
    description: "Our team creates solutions perfect for your specific needs"
  },
  {
    title: "Manufacturing",
    description: "Crafted in our workshop by skilled artisans using premium materials"
  },
  {
    title: "Installation",
    description: "Professional installation and setup by our experienced team"
  }
];
