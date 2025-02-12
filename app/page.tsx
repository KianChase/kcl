import ParallaxHero from "./components/sections/ParallaxHero";
import ServicesShowcase from "./components/sections/ServicesShowcase";
import ProjectShowcase from "./components/sections/ProjectShowcase";
import Statistics from "./components/sections/Statistics";
import CTASection from "./components/sections/CTASection";
import TestimonialCarousel from "./components/sections/TestimonialCarousel";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <ParallaxHero />

      {/* Key Services */}
      <ServicesShowcase />

      {/* Impact Numbers */}
      <Statistics />

      {/* Featured Projects */}
      <ProjectShowcase />

      {/* Client Stories */}
      <TestimonialCarousel />

      {/* Call to Action */}
      <CTASection />

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
              Our Process
            </h2>
            <p className="text-lg text-gray-600">
              Simple steps to your perfect kitchen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={step.title}
                className="relative bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <span className="block text-6xl font-bold text-gray-200 mb-4">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
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
