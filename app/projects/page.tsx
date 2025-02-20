import PageHeader from "@/components/PageHeader";
import { ProjectList } from "@/components/ProjectList";
import { BRAND } from "@/constants/brand";
import { getAllProjects, getProjectCategories } from "@/lib/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects | KCL",
  description: "Explore our portfolio of successful commercial kitchen installations across East Africa."
};

export default async function ProjectsPage() {
  const [projects, categories] = await Promise.all([
    getAllProjects(),
    getProjectCategories()
  ]);

  return (
    <div className="pt-20">
      <PageHeader
        title="Our Projects"
        description={`Explore ${BRAND.name}'s portfolio of successful kitchen installations across East Africa. From luxury hotels to educational institutions, discover how we've transformed commercial kitchens.`}
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <ProjectList 
          projects={projects} 
          categories={categories} 
        />
      </div>
    </div>
  );
} 