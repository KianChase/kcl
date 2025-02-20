"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Award, 
  Clock, 
  Users, 
  Wrench,
  ThumbsUp, 
  ChevronRight 
} from "lucide-react";
import { BRAND } from "@/constants/brand";
import Script from "next/script";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { HoverCard } from "@/components/ui/hover-card";
import { ParallaxSection } from "@/components/ui/parallax-section";
import { useState } from "react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "25+ Years of Excellence",
    description: "A legacy of delivering premium quality commercial kitchen solutions across East Africa since 1998.",
    points: [
      "Proven track record of success",
      "Thousands of successful installations",
      "Industry-leading expertise",
      "Continuous innovation"
    ]
  },
  {
    icon: Award,
    title: "Premium Quality Standards",
    description: "We use only the highest grade materials and maintain strict quality control throughout our manufacturing process.",
    points: [
      "Premium grade stainless steel",
      "International quality standards",
      "Rigorous testing protocols",
      "Durability guaranteed"
    ]
  },
  {
    icon: Clock,
    title: "Timely Project Delivery",
    description: "Our efficient project management ensures your kitchen is delivered and installed on schedule.",
    points: [
      "Structured project timelines",
      "Regular progress updates",
      "Efficient installation process",
      "Minimal business disruption"
    ]
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our team of skilled professionals brings extensive experience and expertise to every project.",
    points: [
      "Certified technicians",
      "Experienced designers",
      "Skilled craftsmen",
      "Dedicated project managers"
    ]
  },
  {
    icon: Wrench,
    title: "Comprehensive Support",
    description: "We provide end-to-end support from design to maintenance, ensuring your kitchen operates at peak performance.",
    points: [
      "24/7 emergency support",
      "Regular maintenance services",
      "Technical consultations",
      "Training and guidance"
    ]
  },
  {
    icon: ThumbsUp,
    title: "Client-Centric Approach",
    description: "Your success is our priority. We work closely with you to understand and meet your specific requirements.",
    points: [
      "Customized solutions",
      "Transparent communication",
      "Flexible engagement models",
      "Long-term partnerships"
    ]
  }
];

const testimonials = [
  {
    quote: "Kitchen Commercial Limited's attention to detail and quality workmanship has significantly improved our kitchen's efficiency.",
    author: "John Kimani",
    role: "Executive Chef",
    company: "Sarova Stanley Hotel",
    logo: "/logos/sarova.png",
    image: "/projects/sarova-stanley.jpg"
  },
  {
    quote: "Their expertise in commercial kitchen design helped us create a perfect training facility for our culinary students.",
    author: "Prof. Sarah Odhiambo",
    role: "Director",
    company: "Kenya Utalii College",
    logo: "/logos/utalii.png",
    image: "/projects/utalii.jpg"
  },
  {
    quote: "The quality of their installations and ongoing support has exceeded our expectations.",
    author: "David Mwangi",
    role: "Operations Director",
    company: "Serena Hotels",
    logo: "/logos/serena.png",
    image: "/projects/serena.jpg"
  },
  {
    quote: "Professional team, excellent workmanship, and outstanding after-sales service.",
    author: "Jane Njeri",
    role: "General Manager",
    company: "Sankara Nairobi",
    logo: "/logos/sankara.png",
    image: "/projects/sankara.jpg"
  }
];

const comparisonPoints = [
  {
    feature: "Quality Standards",
    us: "Premium grade stainless steel with international certifications",
    others: "Variable quality materials and standards"
  },
  {
    feature: "Experience",
    us: "25+ years specializing in commercial kitchens",
    others: "Limited experience in commercial projects"
  },
  {
    feature: "Support",
    us: "24/7 emergency support with dedicated technical team",
    others: "Limited support hours and capabilities"
  },
  {
    feature: "Customization",
    us: "Fully customized solutions for your specific needs",
    others: "Limited customization options"
  },
  {
    feature: "Installation",
    us: "Professional installation by certified technicians",
    others: "Outsourced installation teams"
  },
  {
    feature: "Warranty",
    us: "Comprehensive warranty with service guarantee",
    others: "Basic warranty coverage"
  }
];

const faqs = [
  {
    question: "What makes Kitchen Commercial Limited different from other manufacturers?",
    answer: "With 25+ years of experience, we specialize exclusively in commercial kitchen solutions, using premium grade stainless steel and offering 24/7 support. Our expert team provides fully customized solutions backed by comprehensive warranties."
  },
  {
    question: "Do you provide after-sales support?",
    answer: "Yes, we offer comprehensive after-sales support including 24/7 emergency assistance, regular maintenance services, technical consultations, and staff training to ensure your kitchen operates at peak performance."
  },
  {
    question: "What areas do you serve?",
    answer: "We serve all of East Africa from our base in Nairobi, Kenya. Our projects span across Kenya, Uganda, Tanzania, Rwanda, and other neighboring countries."
  },
  {
    question: "What types of kitchens do you specialize in?",
    answer: "We specialize in all types of commercial kitchens including hotels, restaurants, hospitals, schools, universities, and industrial facilities. Each solution is customized to meet specific operational requirements."
  },
  {
    question: "What is your warranty policy?",
    answer: "We provide comprehensive warranties on all our installations, covering both equipment and workmanship. Our service guarantee ensures prompt resolution of any issues that may arise."
  }
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "25+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" }
];

const projects = [
  {
    name: "Kenya Utalii College",
    type: "Educational Institution",
    description: "Complete kitchen facility for East Africa's premier hospitality training institution",
    image: "/projects/utalii.jpg",
    logo: "/logos/utalii.png",
    location: "Nairobi, Kenya"
  },
  {
    name: "Urban Local Bar & Restaurant",
    type: "Restaurant",
    description: "Modern commercial kitchen setup for an upscale dining establishment",
    image: "/projects/urban-local.jpg",
    logo: "/logos/urban-local.png",
    location: "Nairobi, Kenya"
  },
  {
    name: "Dishi na County",
    type: "Restaurant",
    description: "Contemporary kitchen installation for a modern dining experience",
    image: "/projects/dishi-na-county.jpg",
    logo: "/logos/dishi-na-county.png",
    location: "Muthangari, Nairobi"
  },
  {
    name: "Queen's Pizza",
    type: "Restaurant",
    description: "Specialized pizza kitchen with custom equipment setup",
    image: "/projects/queens-pizza.jpg",
    logo: "/logos/queens-pizza.png",
    location: "Nairobi, Kenya"
  },
  {
    name: "Mocha Hotel",
    type: "Hotel",
    description: "Full-scale hotel kitchen installation with premium equipment",
    image: "/projects/mocha-hotel.jpg",
    logo: "/logos/mocha.png",
    location: "Nairobi, Kenya"
  },
  {
    name: "Golden Ice Bistro",
    type: "Restaurant",
    description: "Custom kitchen solution for a modern bistro setting",
    image: "/projects/golden-ice.jpg",
    logo: "/logos/golden-ice.png",
    location: "Nairobi, Kenya"
  },
  {
    name: "Kabarak University",
    type: "Educational Institution",
    description: "Large-scale institutional kitchen for student dining facilities",
    image: "/projects/kabarak.jpg",
    logo: "/logos/kabarak.png",
    location: "Nakuru, Kenya"
  },
  {
    name: "Chicken Papo",
    type: "Fast Food",
    description: "Efficient quick-service restaurant kitchen setup",
    image: "/projects/chicken-papo.jpg",
    logo: "/logos/chicken-papo.png",
    location: "Nairobi, Kenya"
  },
  {
    name: "Clarret Lounge",
    type: "Restaurant & Lounge",
    description: "Upscale kitchen installation for fine dining establishment",
    image: "/projects/clarret.jpg",
    logo: "/logos/clarret.png",
    location: "Nairobi, Kenya"
  },
  {
    name: "Keshkesh Fast Foods",
    type: "Fast Food",
    description: "Modern fast-food kitchen with high-capacity equipment",
    image: "/projects/keshkesh.jpg",
    logo: "/logos/keshkesh.png",
    location: "Nairobi, Kenya"
  },
  {
    name: "Bantu Africa Resort & Spa",
    type: "Resort",
    description: "Comprehensive resort kitchen facility with multiple stations",
    image: "/projects/bantu-africa.jpg",
    logo: "/logos/bantu.png",
    location: "Kenya"
  },
  {
    name: "Wigot Garden",
    type: "Restaurant",
    description: "Custom kitchen solution for outdoor dining venue",
    image: "/projects/wigot.jpg",
    logo: "/logos/wigot.png",
    location: "Nairobi, Kenya"
  },
  {
    name: "Sheraton Regency Hotel",
    type: "Hotel",
    description: "Five-star hotel kitchen installation with premium equipment",
    image: "/projects/sheraton.jpg",
    logo: "/logos/sheraton.png",
    location: "Nairobi, Kenya"
  },
  {
    name: "Kahawa Barracks",
    type: "Military Facility",
    description: "Large-scale institutional kitchen for military dining facility",
    image: "/projects/kahawa.jpg",
    logo: "/logos/kahawa.png",
    location: "Nairobi, Kenya"
  }
];

const projectTypes = [
  "All",
  "Restaurant",
  "Hotel",
  "Educational Institution",
  "Fast Food",
  "Resort",
  "Military Facility"
];

export default function WhyChooseUsPage() {
  const [selectedType, setSelectedType] = useState("All");

  const filteredProjects = projects.filter(project => 
    selectedType === "All" ? true : project.type === selectedType
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Why Choose Kitchen Commercial Limited",
    description: "East Africa's leading commercial kitchen solutions provider with 25+ years of experience",
    provider: {
      "@type": "Organization",
      name: BRAND.name,
      url: `https://${BRAND.domain}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: BRAND.contact.address,
        addressLocality: BRAND.contact.city,
        addressCountry: BRAND.contact.country
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: BRAND.contact.phone,
        email: BRAND.contact.email,
        contactType: "sales"
      }
    },
    offers: {
      "@type": "Offer",
      description: "Commercial Kitchen Solutions",
      areaServed: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: -1.2921,
          longitude: 36.8219
        },
        geoRadius: "2000 km"
      }
    },
    review: testimonials.map(t => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: t.author
      },
      reviewBody: t.quote,
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5"
      }
    })),
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    })),
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": `https://${BRAND.domain}`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Why Choose Us",
          "item": `https://${BRAND.domain}/why-choose-us`
        }
      ]
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <header className="bg-gray-900 text-white py-16" role="banner">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="heading-1 mb-4 gradient-text animate-float">Why Choose Us</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Discover why {BRAND.name} is East Africa's trusted partner for commercial kitchen solutions.
          </p>
        </div>
      </header>

      {/* Breadcrumb Navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-gray-700">Home</Link>
          </li>
          <li>
            <ChevronRight className="h-4 w-4" />
          </li>
          <li className="font-medium text-gray-900">Why Choose Us</li>
        </ol>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-16" role="main">
        {/* Key Reasons Grid */}
        <section aria-labelledby="reasons-title" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <h2 id="reasons-title" className="sr-only">Reasons to Choose Us</h2>
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover-lift smooth-transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-red-50">
                  <reason.icon className="h-6 w-6 text-red-600" />
                </div>
                <h2 className="text-xl font-bold">{reason.title}</h2>
              </div>
              
              <p className="text-gray-600 mb-6">{reason.description}</p>

              <ul className="space-y-3">
                {reason.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="h-5 w-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="h-2 w-2 rounded-full bg-green-500" />
                    </span>
                    <span className="text-sm text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </section>

        {/* Comparison Section */}
        <section aria-labelledby="comparison-title" className="mb-16">
          <h2 id="comparison-title" className="text-2xl font-bold mb-8 text-center">How We Compare</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left bg-gray-50 border-b-2 border-gray-200">Feature</th>
                  <th className="p-4 text-left bg-red-50 border-b-2 border-red-200 text-red-700">
                    {BRAND.name}
                  </th>
                  <th className="p-4 text-left bg-gray-50 border-b-2 border-gray-200">Others</th>
                </tr>
              </thead>
              <tbody>
                {comparisonPoints.map((point, index) => (
                  <tr key={point.feature} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-4 border-b border-gray-200 font-medium">
                      {point.feature}
                    </td>
                    <td className="p-4 border-b border-gray-200 text-green-700">
                      <div className="flex items-center gap-2">
                        <span className="h-5 w-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                          <span className="h-2 w-2 rounded-full bg-green-500" />
                        </span>
                        {point.us}
                      </div>
                    </td>
                    <td className="p-4 border-b border-gray-200 text-gray-600">
                      {point.others}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Testimonials Section */}
        <section aria-labelledby="testimonials-title" className="mb-16">
          <h2 id="testimonials-title" className="text-2xl font-bold mb-8 text-center">Our Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.company}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Company Logo */}
                <div className="relative -mt-10 mb-4 px-6">
                  <div className="bg-white rounded-lg p-2 inline-block shadow-md">
                    <div className="relative w-24 h-16">
                      <Image
                        src={testimonial.logo}
                        alt={`${testimonial.company} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-0">
                  <blockquote className="text-gray-600 mb-4 text-sm italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section aria-labelledby="faq-title" className="mb-16">
          <h2 id="faq-title" className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section aria-labelledby="stats-title" className="mb-16 py-12 bg-gray-50">
          <h2 id="stats-title" className="sr-only">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-red-600 mb-2">
                  <AnimatedCounter
                    from={0}
                    to={parseInt(stat.value)}
                    suffix={stat.value.replace(/[0-9]/g, '')}
                    className="tabular-nums"
                  />
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you create the perfect commercial kitchen solution for your business.
          </p>
          <Link
            href="/consultation"
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>

        {/* Projects Section */}
        <ParallaxSection className="mb-16">
          <h2 id="projects-title" className="text-2xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {projectTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedType === type
                    ? "bg-red-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <HoverCard
                key={project.name}
                title={project.name}
                subtitle={project.type}
                description={project.description}
                image={project.image}
                logo={project.logo}
                location={project.location}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium"
            >
              View All Projects
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </ParallaxSection>
      </main>

      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
} 