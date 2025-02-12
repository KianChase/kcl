import Image from "next/image";
import { Filter } from "lucide-react";

const galleries = [
  {
    category: "Training Kitchens",
    images: [
      {
        src: "/gallery/training-1.jpg",
        alt: "Student Workstations at Utalii College",
        description: "Individual training stations equipped with professional-grade equipment"
      },
      {
        src: "/gallery/training-2.jpg",
        alt: "Demonstration Kitchen",
        description: "Professional demonstration area with overhead mirrors and student viewing space"
      },
      // Add more training kitchen images
    ]
  },
  {
    category: "Equipment Installations",
    images: [
      {
        src: "/gallery/equipment-1.jpg",
        alt: "Commercial Grade Equipment",
        description: "Industrial cooking equipment installation for large-scale training"
      },
      {
        src: "/gallery/equipment-2.jpg",
        alt: "Specialized Training Equipment",
        description: "Custom-designed equipment for specific culinary techniques"
      },
      // Add more equipment images
    ]
  },
  {
    category: "Storage Solutions",
    images: [
      {
        src: "/gallery/storage-1.jpg",
        alt: "Ingredient Storage System",
        description: "Organized storage solutions for training ingredients and supplies"
      },
      {
        src: "/gallery/storage-2.jpg",
        alt: "Equipment Storage",
        description: "Specialized storage for professional kitchen tools and equipment"
      },
      // Add more storage images
    ]
  }
];

export default function GalleryPage() {
  return (
    <div className="pt-24">
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="heading-1 mb-4">Installation Gallery</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Explore our portfolio of educational kitchen installations across East Africa's leading institutions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {galleries.map((gallery) => (
          <div key={gallery.category} className="mb-16">
            <div className="flex items-center gap-2 mb-8">
              <Filter className="h-6 w-6 text-gray-400" />
              <h2 className="heading-2">{gallery.category}</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gallery.images.map((image) => (
                <div key={image.src} className="group">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-semibold mb-2">{image.alt}</h3>
                  <p className="text-gray-600 text-sm">{image.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 