import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg">Visit us or reach out for inquiries</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="bg-gray-900 border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/50 transition">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">Location</h3>
                  <p className="text-gray-400">17.6887° N, 83.1774° E</p>
                  <p className="text-gray-400">Visakhapatnam, Andhra Pradesh</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/50 transition">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-cyan-600 to-blue-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">Phone</h3>
                  <p className="text-gray-400">+91 XXX XXX XXXX</p>
                  <p className="text-gray-400">Available 6 AM - 10 PM</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/50 transition">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-blue-700 to-cyan-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">Email</h3>
                  <p className="text-gray-400">info@laqshyaacademy.com</p>
                  <p className="text-gray-400">We reply within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/50 transition">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-cyan-700 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">Working Hours</h3>
                  <p className="text-gray-400">Monday - Sunday</p>
                  <p className="text-gray-400">6:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-blue-500/20 rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=17.6887,83.1774&hl=es;z=14&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '500px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
