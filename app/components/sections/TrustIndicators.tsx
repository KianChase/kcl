import Image from "next/image";

const clients = [
  {
    name: "Utalii College",
    logo: "/logos/utalii.png",
    description: "Kenya's Premier Hospitality Institution"
  },
  {
    name: "Sarova Hotels",
    logo: "/logos/sarova.png",
    description: "Luxury Hotel Chain"
  },
  {
    name: "Serena Hotels",
    logo: "/logos/serena.png",
    description: "Leading Hotel Group"
  },
  {
    name: "Sankara Nairobi",
    logo: "/logos/sankara.png",
    description: "5-Star Luxury Hotel"
  },
  {
    name: "Ole Sereni",
    logo: "/logos/ole-sereni.png",
    description: "Premium Hotel & Resort"
  }
];

export default function TrustIndicators() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center text-white mb-12">
          <p className="text-sm uppercase tracking-wider mb-2">Trusted By Industry Leaders</p>
          <h2 className="text-2xl font-semibold">Serving East Africa's Most Prestigious Establishments</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {clients.map((client) => (
            <div key={client.name} className="flex flex-col items-center">
              <div className="relative w-32 h-20 mb-4">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain filter brightness-0 invert opacity-80"
                />
              </div>
              <p className="text-gray-400 text-sm text-center">{client.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Join over 500+ satisfied clients across East Africa
          </p>
        </div>
      </div>
    </section>
  );
} 