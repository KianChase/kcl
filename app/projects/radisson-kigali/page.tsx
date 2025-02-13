import { ProjectLayout } from "@/components/layouts/ProjectLayout";

export default function RadissonKigaliPage() {
  return (
    <ProjectLayout
      title="Radisson Blu Hotel Kitchen"
      description="Complete kitchen installation for new luxury hotel property"
      image="/images/projects/radisson.jpg"
      category="Hospitality"
      location="Kigali, Rwanda"
      year="2022"
      challenge="The new Radisson Blu Hotel required a comprehensive kitchen solution that could serve multiple dining venues while meeting international brand standards. The installation needed to handle high-volume operations while maintaining luxury service levels."
      solution="We designed and implemented a multi-zone kitchen system with specialized areas for different dining venues. The installation includes state-of-the-art equipment and smart systems for efficient operation and monitoring."
      results={[
        "Completed installation ahead of schedule",
        "Exceeded energy efficiency targets",
        "Optimized workflow efficiency",
        "Met all international standards",
        "Achieved perfect safety rating"
      ]}
      gallery={[
        "/images/projects/radisson/gallery-1.jpg",
        "/images/projects/radisson/gallery-2.jpg",
        "/images/projects/radisson/gallery-3.jpg",
        "/images/projects/radisson/gallery-4.jpg"
      ]}
    >
      <section>
        <h2 className="text-2xl font-bold mb-4">Kitchen Zones</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">Main Production Areas</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Hot kitchen with multiple stations</li>
              <li>Cold kitchen and prep area</li>
              <li>Pastry and bakery section</li>
              <li>Butchery and storage</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Support Facilities</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Dish washing and sanitation</li>
              <li>Storage and refrigeration</li>
              <li>Staff facilities</li>
              <li>Waste management</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Smart Systems Integration</h2>
        <div className="bg-gray-50 rounded-lg p-6">
          <p className="text-gray-600 mb-6">
            The kitchen features advanced systems for monitoring and control:
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Monitoring Systems</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Temperature tracking</li>
                <li>Energy consumption</li>
                <li>Equipment performance</li>
                <li>Safety compliance</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Control Systems</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Automated scheduling</li>
                <li>Inventory management</li>
                <li>Maintenance alerts</li>
                <li>Energy optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </ProjectLayout>
  );
} 