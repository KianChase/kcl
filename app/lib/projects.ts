import { notFound } from "next/navigation";

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  gallery: string[];
  category: string;
  location: string;
  year: string;
  client: string;
  highlights: string[];
}

const projects: Project[] = [
  {
    id: "1",
    slug: "utalii-college",
    title: "Utalii College Training Kitchen",
    description: "Complete kitchen setup for Kenya's premier hospitality training institution",
    image: "/images/projects/utalii/main.jfif",
    gallery: [
      "/images/projects/utalii/gallery-1.jfif",
      "/images/projects/utalii/gallery-2.jpeg",
      "/images/projects/utalii/main.jfif",
      // "/images/projects/utalii/gallery-4.jpg"
    ],
    category: "Educational",
    location: "Nairobi, Kenya",
    year: "2023",
    client: "Kenya Utalii College",
    highlights: [
      "20 individual training stations",
      "State-of-the-art safety systems",
      "Increased training capacity by 40%",
      "Reduced energy consumption by 30%"
    ]
  },
  {
    id: "2",
    slug: "serena-hotel",
    title: "Serena Hotel Commercial Kitchen",
    description: "High-capacity commercial kitchen installation for luxury hotel chain",
    image: "/images/projects/serena/main.jpeg",
    gallery: [
      "/images/projects/serena/gallery-1.jpeg",
      "/images/projects/serena/gallery-2.jpeg",
      "/images/projects/serena/gallery-3.jpeg",
      // "/images/projects/serena/gallery-4.jpg"
    ],
    category: "Hospitality",
    location: "Nairobi, Kenya",
    year: "2023",
    client: "Serena Hotels",
    highlights: [
      "Increased meal service capacity by 200%",
      "Reduced food preparation time by 35%",
      "Improved energy efficiency by 40%",
      "Enhanced food safety compliance"
    ]
  },
  {
    id: "3",
    slug: "queens-pizza",
    title: "Queens Pizza Kitchen Upgrade",
    description: "Modernization of existing kitchen facilities with state-of-the-art equipment",
    image: "/images/projects/queens/main.jpeg",
    gallery: [
      "/images/projects/queens/gallery-1.jpeg",
      "/images/projects/queens/gallery-2.jpeg",
      "/images/projects/queens/gallery-3.jpeg",
      "/images/projects/queens/gallery-4.jpeg"
    ],
    category: "Hospitality",
    location: "Nairobi, Kenya",
    year: "2022",
    client: "Queens Pizza",
    highlights: [
      "Modern cooking equipment",
      "Enhanced ventilation",
      "Energy-efficient systems",
      "Improved workspace layout",
      "Digital control systems"
    ]
  },
  {
    id: "4",
    slug: "sarova-hotel",
    title: "Sarova Hotel Kitchen",
    description: "Complete kitchen installation for new luxury hotel property",
    image: "/images/projects/sarova/main.jpeg",
    gallery: [
      "/images/projects/sarova/gallery-1.jpeg",
      "/images/projects/sarova/gallery-2.jpeg",
      "/images/projects/sarova/gallery-3.jpeg",
      "/images/projects/sarova/gallery-4.jpeg"
    ],
    category: "Hospitality",
    location: "Nairobi, Kenya",
    year: "2022",
    client: "Sarova Hotels",
    highlights: [
      "International standard equipment",
      "Multiple cooking stations",
      "Specialized storage solutions",
      "Advanced safety systems",
      "Staff training program"
    ]
  }
];

export async function getProject(slug: string): Promise<Project> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const project = projects.find(p => p.slug === slug);
  
  if (!project) {
    notFound();
  }
  
  return project;
}

export async function getAllProjects(): Promise<Project[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return projects;
}

export async function getProjectsByCategory(category: string): Promise<Project[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return projects.filter(p => p.category === category);
}

export function getProjectCategories(): string[] {
  const categories = new Set(projects.map(p => p.category));
  return Array.from(categories);
} 