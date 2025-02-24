import PageHeader from "@/components/PageHeader";
import { ProjectList } from "@/components/ProjectList";
import { getAllProjects, getProjectCategories } from "@/lib/projects";
import { BRAND } from "@/constants/brand";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Portfolio | ${BRAND.name}`,
  description: "Explore our portfolio of successful commercial kitchen installations across East Africa.",
};

export default async function PortfolioPage() {
  const [projects, categories] = await Promise.all([
    getAllProjects(),
    getProjectCategories()
  ]);

  return (
    <div className="pt-20">
      <PageHeader
        title="Our Portfolio"
        description="Explore our collection of successful kitchen installations and custom solutions across East Africa. From luxury hotels to educational institutions, discover how we've transformed commercial kitchens."
        theme="dark"
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