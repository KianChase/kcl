export const content = {
  about: {
    story: {
      title: "Our Story",
      content: `Kitchen Commercial Limited was founded with a vision to revolutionize commercial kitchen installations across East Africa. With decades of combined experience in the hospitality industry, our team understands the unique challenges and requirements of creating efficient, high-performance kitchen spaces.

Our journey began with a simple mission: to provide world-class commercial kitchen solutions that empower businesses to operate at their full potential. From small cafes to large-scale hotel operations, we've built our reputation on delivering excellence in every project.

Today, we continue to lead the industry with innovative designs, cutting-edge equipment integration, and unparalleled service support. Our commitment to quality and customer satisfaction remains at the heart of everything we do.`,
    },
    mission: {
      title: "Our Mission",
      content: "To deliver exceptional commercial kitchen solutions that enhance operational efficiency and enable culinary excellence across East Africa.",
    },
    values: {
      title: "Our Values",
      items: [
        {
          title: "Excellence",
          description: "We strive for excellence in every aspect of our work, from design to installation.",
        },
        {
          title: "Innovation",
          description: "We embrace new technologies and methods to provide cutting-edge solutions.",
        },
        {
          title: "Reliability",
          description: "We build trust through consistent, dependable service and support.",
        },
        {
          title: "Sustainability",
          description: "We prioritize environmentally conscious solutions and practices.",
        },
      ],
    },
    team: {
      title: "Our Leadership Team",
      content: "Our experienced leadership team brings together decades of expertise in commercial kitchen design, installation, and management across East Africa.",
      members: [
        {
          name: "Walter Obonyo",
          role: "Managing Director",
          image: "/images/team/walter-obonyo.jpg",
        },
        {
          name: "Jane Muthoni",
          role: "Technical Director",
          image: "/images/team/jane-muthoni.jpg",
        },
        {
          name: "Kian Chase",
          role: "Operations Manager",
          image: "/images/team/kian-chase.jpg",
        },
      ],
    },
  },

  projects: {
    featured: [
      {
        title: "Dishi na County Program",
        description: "Flagship partnership with Nairobi County Government, launched at Muthangari Primary School, to revolutionize school feeding infrastructure. This pilot project established the blueprint for modernizing kitchen facilities across Nairobi County schools, demonstrating the impact of professional kitchen solutions on student nutrition and wellbeing.",
        image: "/images/projects/dishi-program.jpg",
        location: "Muthangari, Westlands, Nairobi",
        category: "Government",
        year: "2023",
        highlights: [
          "State-of-the-art kitchen facility at Muthangari Primary School",
          "Energy-efficient cooking equipment installation",
          "Comprehensive training for school kitchen staff",
          "Implementation of HACCP food safety standards",
          "Sustainable kitchen design with waste reduction systems",
          "Modern food storage and preparation facilities",
          "Model facility for county-wide school feeding program"
        ],
        impact: {
          pilotSchool: "Muthangari Primary School, Westlands",
          studentsServed: "1,200+",
          mealsPerDay: "2,400+",
          staffTrained: 12,
          plannedExpansion: "16 additional schools"
        }
      },
      {
        title: "Embakasi Barracks Kitchen",
        description: "Complete kitchen facility design and installation for the Kenya Defence Forces Embakasi Barracks, serving over 2,000 personnel daily.",
        image: "/images/projects/embakasi-barracks.jpg",
        location: "Embakasi, Nairobi",
        category: "Military Facility",
        year: "2023",
      },
      {
        title: "Boma Inn Eldoret",
        description: "State-of-the-art commercial kitchen installation for Eldoret's premier business hotel, featuring modern equipment and efficient workflow design.",
        image: "/images/projects/boma-inn-eldoret.jpg",
        location: "Eldoret",
        category: "Hotel",
        year: "2022",
      },
      {
        title: "XS Millionaires Club",
        description: "High-end kitchen and bar setup for one of Nairobi's most exclusive nightlife venues, designed for high-volume service and premium dining.",
        image: "/images/projects/xs-millionaires.jpg",
        location: "Westlands, Nairobi",
        category: "Entertainment Venue",
        year: "2023",
      },
    ],
    categories: [
      {
        name: "Government Projects",
        count: 23,
        image: "/images/categories/government.jpg",
        description: "Supporting public sector initiatives including school feeding programs and institutional kitchens."
      },
      {
        name: "Military Facilities",
        count: 5,
        image: "/images/categories/military.jpg",
      },
      {
        name: "Hotels & Resorts",
        count: 48,
        image: "/images/categories/hotels.jpg",
      },
      {
        name: "Restaurants & Bars",
        count: 156,
        image: "/images/categories/restaurants.jpg",
      },
      {
        name: "Institutions",
        count: 73,
        image: "/images/categories/institutions.jpg",
      },
    ],
    stats: {
      total: 305, // Updated to include government projects
      ongoing: 12,
      locations: ["Nairobi", "Mombasa", "Eldoret", "Kisumu", "Nakuru", "Kampala", "Dar es Salaam"],
      publicSector: {
        schoolsServed: 17,
        studentsImpacted: "10,000+",
        countyPartnerships: 1
      }
    },
  },
}; 