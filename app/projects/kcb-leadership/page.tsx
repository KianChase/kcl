import { ProjectLayout } from "@/components/layouts/ProjectLayout";

export default function KcbLeadershipPage() {
  return (
    <ProjectLayout
      title="KCB Leadership Centre Kitchen"
      description="Modern kitchen facility for corporate training center"
      image="/images/projects/kcb.jpg"
      category="Corporate"
      location="Karen, Kenya"
      year="2021"
      challenge="KCB Leadership Centre required a versatile kitchen facility that could serve both training purposes and daily corporate dining needs. The challenge was to create a space that could efficiently handle varying capacities while maintaining high quality standards."
      solution="We implemented a flexible kitchen design that can easily adapt to different service requirements. The facility features modular equipment and multi-purpose areas that can be reconfigured based on needs, whether for training sessions or regular dining service."
      results={[
        "Flexible capacity from 50 to 200 covers",
        "Multi-purpose training areas",
        "30% reduction in operating costs",
        "Improved service efficiency",
        "Enhanced sustainability features"
      ]}
      gallery={[
        "/images/projects/kcb/gallery-1.jpg",
        "/images/projects/kcb/gallery-2.jpg",
        "/images/projects/kcb/gallery-3.jpg",
        "/images/projects/kcb/gallery-4.jpg"
      ]}
    >
      <section>
        <h2 className="text-2xl font-bold mb-4">Facility Overview</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">Main Kitchen Features</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Modular cooking stations</li>
              <li>Convertible prep areas</li>
              <li>Energy-efficient equipment</li>
              <li>Advanced ventilation system</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Service Areas</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Multi-purpose dining space</li>
              <li>Training configuration options</li>
              <li>Outdoor catering support</li>
              <li>Staff development area</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Sustainability Features</h2>
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Resource Management</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Water recycling system</li>
                <li>Energy monitoring</li>
                <li>Waste reduction program</li>
                <li>Local sourcing initiative</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Green Technologies</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Solar water heating</li>
                <li>LED lighting throughout</li>
                <li>Smart power management</li>
                <li>Eco-friendly refrigeration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Training Capabilities</h2>
        <p className="text-gray-600 mb-6">
          The facility is designed to support various training scenarios and corporate events:
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Team Building</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Cooking challenges</li>
              <li>• Group activities</li>
              <li>• Culinary workshops</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Corporate Events</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Executive dining</li>
              <li>• Conference support</li>
              <li>• Special functions</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Staff Development</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Skills training</li>
              <li>• Safety courses</li>
              <li>• Service excellence</li>
            </ul>
          </div>
        </div>
      </section>
    </ProjectLayout>
  );
} 