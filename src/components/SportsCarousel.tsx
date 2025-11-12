import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const sports = [
  {
    name: 'Cricket',
    icon: '🏏',
    description: 'Professional cricket coaching and practice sessions',
    gradient: 'from-blue-600 to-cyan-500'
  },
  {
    name: 'Badminton',
    icon: '🏸',
    description: 'State-of-the-art badminton courts with expert training',
    gradient: 'from-cyan-600 to-blue-500'
  },
  {
    name: 'Pickleball',
    icon: '🎾',
    description: 'Modern pickleball facilities for all skill levels',
    gradient: 'from-blue-700 to-cyan-600'
  }
];

export default function SportsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % sports.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + sports.length) % sports.length);
  };

  return (
    <section id="sports" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sports We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Offer</span>
          </h2>
          <p className="text-gray-400 text-lg">Choose your passion and start your journey</p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {sports.map((sport, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="grid md:grid-cols-3 gap-6">
                    {sports.map((s, i) => (
                      <div
                        key={i}
                        className={`bg-gradient-to-br ${s.gradient} rounded-2xl p-8 transform transition hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 cursor-pointer`}
                      >
                        <div className="text-center">
                          <div className="text-7xl mb-6">{s.icon}</div>
                          <h3 className="text-2xl font-bold text-white mb-3">{s.name}</h3>
                          <p className="text-blue-100">{s.description}</p>
                          <button className="mt-6 bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
                            Book Now
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition shadow-lg"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {sports.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition ${
                  currentIndex === index ? 'bg-blue-500 w-8' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
