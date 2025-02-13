import { ProjectLayout } from "@/components/layouts/ProjectLayout";

export default function SafariParkPage() {
  return (
    <ProjectLayout
      title="Safari Park Hotel Kitchen Upgrade"
      description="Modernization of existing kitchen facilities with state-of-the-art equipment"
      image="/images/projects/safari.jpg"
      category="Hospitality"
      location="Nairobi, Kenya"
      year="2022"
      challenge="Safari Park Hotel needed to modernize their existing kitchen facilities while maintaining operational capacity. The main challenge was to upgrade the equipment and workflow without disrupting the hotel's daily operations and maintaining their high service standards."
      solution="We developed a phased implementation plan that allowed for gradual upgrades while keeping essential services running. The modernization included new equipment installation, workflow optimization, and infrastructure improvements."
      results={[
        "Modernized 5 specialized kitchen areas",
        "Reduced operational costs by 25%",
        "Improved food quality consistency",
        "Enhanced workplace safety",
        "Zero operational downtime during upgrade"
      ]}
      gallery={[
        "/images/projects/safari/gallery-1.jpg",
        "/images/projects/safari/gallery-2.jpg",
        "/images/projects/safari/gallery-3.jpg",
        "/images/projects/safari/gallery-4.jpg"
      ]}
    >
      <section>
        <h2 className="text-2xl font-bold mb-4">Upgrade Highlights</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">Equipment Modernization</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Energy-efficient cooking equipment</li>
              <li>Modern refrigeration systems</li>
              <li>Advanced ventilation solutions</li>
              <li>Smart monitoring systems</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Infrastructure Improvements</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Updated electrical systems</li>
              <li>Enhanced plumbing infrastructure</li>
              <li>Improved floor drainage</li>
              <li>Better lighting solutions</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Implementation Strategy</h2>
        <p className="text-gray-600 mb-6">
          Our phased approach ensured minimal disruption to hotel operations while achieving comprehensive modernization:
        </p>
        <ol className="space-y-4 text-gray-600">
          <li className="flex gap-4">
            <span className="font-semibold text-red-600">Phase 1:</span>
            <span>Infrastructure preparation and temporary facilities setup</span>
          </li>
          <li className="flex gap-4">
            <span className="font-semibold text-red-600">Phase 2:</span>
            <span>Equipment replacement and workflow optimization</span>
          </li>
          <li className="flex gap-4">
            <span className="font-semibold text-red-600">Phase 3:</span>
            <span>Technology integration and staff training</span>
          </li>
          <li className="flex gap-4">
            <span className="font-semibold text-red-600">Phase 4:</span>
            <span>Final optimization and performance testing</span>
          </li>
        </ol>
      </section>
    </ProjectLayout>
  );
} 