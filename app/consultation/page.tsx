import ConsultationForm from "@/components/sections/ConsultationForm";

export default function ConsultationPage() {
  return (
    <div className="pt-20">
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="heading-1 mb-4">Schedule a Consultation</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Let&apos;s discuss your kitchen requirements. Our team of experts will help you design 
            the perfect solution for your commercial or institutional kitchen needs.
          </p>
        </div>
      </div>
      <ConsultationForm />
    </div>
  );
} 