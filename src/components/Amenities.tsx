import { Car, TreePine, Users, Coffee, Armchair, BookOpen } from 'lucide-react';

const amenities = [
  {
    title: 'Plenty of Parking',
    description: 'Spacious parking area with security for your vehicles',
    icon: Car,
    gradient: 'from-blue-600 to-cyan-500'
  },
  {
    title: 'Pleasant Environment',
    description: 'Clean, pollution-free surroundings for healthy sports activities',
    icon: TreePine,
    gradient: 'from-cyan-600 to-blue-500'
  },
  {
    title: 'Professional Trainers',
    description: 'Certified coaches with years of experience in sports training',
    icon: Users,
    gradient: 'from-blue-700 to-cyan-600'
  },
  {
    title: 'Refreshments',
    description: 'Soft drinks and healthy beverages available on-site',
    icon: Coffee,
    gradient: 'from-cyan-700 to-blue-600'
  },
  {
    title: 'Waiting Area',
    description: 'Comfortable seating area for players and spectators',
    icon: Armchair,
    gradient: 'from-blue-600 to-cyan-500'
  },
  {
    title: 'Sports Library',
    description: 'Access to sports books, magazines, and training resources',
    icon: BookOpen,
    gradient: 'from-cyan-600 to-blue-500'
  }
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            World-Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Amenities</span>
          </h2>
          <p className="text-gray-400 text-lg">Everything you need for the perfect sports experience</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-blue-500/20 rounded-2xl overflow-hidden hover:border-blue-500/50 transition group"
            >
              <div className="aspect-video bg-gray-700 flex items-center justify-center border-b border-blue-500/20">
                <div className={`bg-gradient-to-br ${amenity.gradient} w-24 h-24 rounded-2xl flex items-center justify-center group-hover:scale-110 transition`}>
                  <amenity.icon className="text-white" size={48} />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{amenity.title}</h3>
                <p className="text-gray-400">{amenity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
