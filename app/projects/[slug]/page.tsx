import Image from "next/image";
import { Metadata } from "next";
import { getProject } from "@/lib/projects";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/sections/ProjectDetail";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = await getProject(params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.'
    };
  }

  return {
    title: `${project.title} | Kitchen Commercial Limited`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.image }]
    }
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const project = await getProject(params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
} 