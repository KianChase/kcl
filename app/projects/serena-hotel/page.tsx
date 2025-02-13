import { ProjectLayout } from "@/components/layouts/ProjectLayout";

export default function SerenaHotelPage() {
  return (
    <ProjectLayout
      title="Serena Hotel Commercial Kitchen"
      description="High-capacity commercial kitchen installation for luxury hotel chain"
      image="/images/projects/serena.jpg"
      category="Hospitality"
      location="Kampala, Uganda"
      year="2023"
      challenge="Serena Hotel required a high-capacity commercial kitchen capable of serving multiple restaurants and banquet facilities simultaneously. The challenge was to create an efficient workflow that could handle diverse culinary requirements while maintaining the highest standards of food quality and safety."
      solution="We implemented a modular kitchen design with distinct zones for different cuisines and service types. The layout incorporates advanced equipment and technology to optimize food preparation and service flow, while ensuring seamless coordination between different sections."
      results={[
        "Increased daily meal service capacity by 200%",
        "Reduced food preparation time by 35%",
        "Improved energy efficiency by 40%",
        "Enhanced food safety compliance",
        "Streamlined inventory management"
      ]}
      gallery={[
        "/images/projects/serena/gallery-1.jpg",
        "/images/projects/serena/gallery-2.jpg",
        "/images/projects/serena/gallery-3.jpg",
        "/images/projects/serena/gallery-4.jpg"
      ]}
    >
      <section>
        <h2 className="text-2xl font-bold mb-4">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Main Kitchen</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>High-capacity cooking stations</li>
              <li>Advanced refrigeration systems</li>
              <li>Specialized prep areas</li>
              <li>State-of-the-art dishwashing facility</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Banquet Kitchen</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Large-scale food preparation area</li>
              <li>Temperature-controlled plating station</li>
              <li>Mobile serving equipment</li>
              <li>Dedicated storage facilities</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Technology Integration</h2>
        <p className="text-gray-600 mb-4">
          The kitchen features advanced technological solutions to ensure efficient operations:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Digital inventory management system</li>
          <li>Automated temperature monitoring</li>
          <li>Smart energy management controls</li>
          <li>Integrated ordering system</li>
          <li>Real-time kitchen display systems</li>
        </ul>
      </section>
    </ProjectLayout>
  );
} 