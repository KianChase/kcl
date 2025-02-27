import { ProjectLayout } from "@/components/layouts/ProjectLayout";

export default function UtaliiCollegePage() {
  return (
    <ProjectLayout
      title="Utalii College Training Kitchen"
      description="Complete kitchen setup for Kenya's premier hospitality training institution"
      image="/images/projects/utalii/gallery-2.jpeg"
      category="Educational"
      location="Nairobi, Kenya"
      year="2023"
      challenge="Utalii College needed to upgrade their training facilities to meet modern industry standards while accommodating a large number of students. The challenge was to create multiple training stations that replicate professional kitchen environments while ensuring safety and efficiency."
      solution="We designed and implemented a comprehensive kitchen solution featuring multiple training stations, each equipped with professional-grade equipment. The layout was optimized for both individual and group training scenarios, with proper spacing and workflow considerations."
      results={[
        "Successfully installed 20 individual training stations",
        "Implemented state-of-the-art safety systems",
        "Increased training capacity by 40%",
        "Reduced energy consumption by 30%",
        "Improved workflow efficiency by 50%"
      ]}
      gallery={[
        "/images/projects/utalii/gallery-1.jfif",
        "/images/projects/utalii/gallery-2.jpeg",
        "/images/projects/utalii/main.jfif",
      ]}
    >
      <section>
        <h2 className="text-2xl font-bold mb-4">Additional Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Specialized demonstration areas with overhead mirrors</li>
          <li>Advanced ventilation and fire suppression systems</li>
          <li>Energy-efficient appliances and lighting</li>
          <li>Custom storage solutions for equipment and ingredients</li>
          <li>Integrated waste management systems</li>
        </ul>
      </section>
    </ProjectLayout>
  );
} 