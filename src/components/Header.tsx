import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-blue-500/20">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <span className="text-white font-bold text-xl">LAQSHYA BADMINTON ACADEMY</span>
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-blue-400 transition">Home</button>
            <button onClick={() => scrollToSection('sports')} className="text-gray-300 hover:text-blue-400 transition">Sports</button>
            <button onClick={() => scrollToSection('booking')} className="text-gray-300 hover:text-blue-400 transition">Booking</button>
            <button onClick={() => scrollToSection('benefits')} className="text-gray-300 hover:text-blue-400 transition">Benefits</button>
            <button onClick={() => scrollToSection('amenities')} className="text-gray-300 hover:text-blue-400 transition">Amenities</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-blue-400 transition">Contact</button>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition">
              Book Now
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 space-y-4">
            <button onClick={() => scrollToSection('home')} className="block text-gray-300 hover:text-blue-400 transition">Home</button>
            <button onClick={() => scrollToSection('sports')} className="block text-gray-300 hover:text-blue-400 transition">Sports</button>
            <button onClick={() => scrollToSection('booking')} className="block text-gray-300 hover:text-blue-400 transition">Booking</button>
            <button onClick={() => scrollToSection('benefits')} className="block text-gray-300 hover:text-blue-400 transition">Benefits</button>
            <button onClick={() => scrollToSection('amenities')} className="block text-gray-300 hover:text-blue-400 transition">Amenities</button>
            <button onClick={() => scrollToSection('contact')} className="block text-gray-300 hover:text-blue-400 transition">Contact</button>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition">
              Book Now
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
