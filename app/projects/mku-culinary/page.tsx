import { ProjectLayout } from "@/components/layouts/ProjectLayout";

export default function MkuCulinaryPage() {
  return (
    <ProjectLayout
      title="Mount Kenya University Culinary Lab"
      description="State-of-the-art culinary training facility for hospitality students"
      image="/images/projects/mku.jpg"
      category="Educational"
      location="Thika, Kenya"
      year="2022"
      challenge="Mount Kenya University needed a modern culinary training facility that could accommodate multiple student groups while providing hands-on experience with professional equipment. The facility needed to meet both educational and industry standards."
      solution="We designed and installed a comprehensive training facility with multiple cooking stations, demonstration areas, and specialized equipment zones. The layout emphasizes both individual learning and collaborative work environments."
      results={[
        "Created 15 individual training stations",
        "Installed professional demonstration kitchen",
        "Integrated digital learning tools",
        "Achieved 100% safety compliance",
        "Increased student capacity by 60%"
      ]}
      gallery={[
        "/images/projects/mku/gallery-1.jpg",
        "/images/projects/mku/gallery-2.jpg",
        "/images/projects/mku/gallery-3.jpg",
        "/images/projects/mku/gallery-4.jpg"
      ]}
    >
      <section>
        <h2 className="text-2xl font-bold mb-4">Training Zones</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Practical Training Area</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Individual workstations</li>
              <li>Professional equipment</li>
              <li>Safety systems</li>
              <li>Storage facilities</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Demonstration Kitchen</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Overhead mirrors</li>
              <li>HD camera system</li>
              <li>Audio equipment</li>
              <li>Student seating</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Specialized Areas</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Pastry section</li>
              <li>Cold kitchen</li>
              <li>Butchery area</li>
              <li>Beverage station</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Educational Features</h2>
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Learning Technology</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Digital recipe management</li>
                <li>Interactive learning displays</li>
                <li>Recording capabilities</li>
                <li>Student progress tracking</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Industry Integration</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Industry-standard procedures</li>
                <li>Professional certification prep</li>
                <li>Real-world scenarios</li>
                <li>Industry partnerships</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </ProjectLayout>
  );
} 