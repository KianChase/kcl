import PageHeader from "@/components/PageHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { BRAND } from "@/constants/brand";

const projects = [
  {
    title: "Utalii College Training Kitchen",
    description: "Complete kitchen setup for Kenya's premier hospitality training institution",
    image: "/images/projects/utalii.jpeg",
    category: "Educational",
    location: "Nairobi, Kenya",
    year: "2023",
    href: "/projects/utalii-college"
  },
  {
    title: "Serena Hotel Commercial Kitchen",
    description: "High-capacity commercial kitchen installation for luxury hotel chain",
    image: "/images/projects/serena.jpeg",
    category: "Hospitality",
    location: "Kampala, Uganda",
    year: "2023",
    href: "/projects/serena-hotel"
  },
  {
    title: "Safari Park Hotel Kitchen Upgrade",
    description: "Modernization of existing kitchen facilities with state-of-the-art equipment",
    image: "/images/projects/safari.jpg",
    category: "Hospitality",
    location: "Nairobi, Kenya",
    year: "2022",
    href: "/projects/safari-park"
  },
  {
    title: "Mount Kenya University Culinary Lab",
    description: "State-of-the-art culinary training facility for hospitality students",
    image: "/images/projects/mku.jpg",
    category: "Educational",
    location: "Thika, Kenya",
    year: "2022",
    href: "/projects/mku-culinary"
  },
  {
    title: "Radisson Blu Hotel Kitchen",
    description: "Complete kitchen installation for new luxury hotel property",
    image: "/images/projects/radisson.jpg",
    category: "Hospitality",
    location: "Kigali, Rwanda",
    year: "2022",
    href: "/projects/radisson-kigali"
  },
  {
    title: "KCB Leadership Centre Kitchen",
    description: "Modern kitchen facility for corporate training center",
    image: "/images/projects/kcb.jpg",
    category: "Corporate",
    location: "Karen, Kenya",
    year: "2021",
    href: "/projects/kcb-leadership"
  }
];

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <PageHeader
        title="Our Projects"
        description={`Explore ${BRAND.name}'s portfolio of successful kitchen installations across East Africa.`}
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
} 