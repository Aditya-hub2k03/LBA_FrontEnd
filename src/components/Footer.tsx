import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-blue-500/20">
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Never Miss Any Updates</h3>
            <p className="text-blue-100 mb-6">Subscribe to our newsletter for the latest news, events, and exclusive offers</p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="text-white font-bold">LAQSHYA</span>
            </div>
            <p className="text-gray-400 text-sm">
              Where Passion Meets Play. Premier sports academy offering world-class facilities and professional training.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-blue-400 transition text-sm">Home</a></li>
              <li><a href="#sports" className="text-gray-400 hover:text-blue-400 transition text-sm">Sports</a></li>
              <li><a href="#booking" className="text-gray-400 hover:text-blue-400 transition text-sm">Booking</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Sports</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition text-sm">Cricket</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition text-sm">Badminton</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition text-sm">Pickleball</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-3 mb-4">
              <a href="#" className="bg-gray-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-cyan-500 w-10 h-10 rounded-full flex items-center justify-center transition">
                <Facebook size={18} className="text-white" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-cyan-500 w-10 h-10 rounded-full flex items-center justify-center transition">
                <Instagram size={18} className="text-white" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-cyan-500 w-10 h-10 rounded-full flex items-center justify-center transition">
                <Twitter size={18} className="text-white" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-cyan-500 w-10 h-10 rounded-full flex items-center justify-center transition">
                <Youtube size={18} className="text-white" />
              </a>
            </div>
            <a href="mailto:info@laqshyaacademy.com" className="flex items-center text-gray-400 hover:text-blue-400 transition text-sm">
              <Mail size={16} className="mr-2" />
              info@laqshyaacademy.com
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Laqshya Badminton Academy. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
