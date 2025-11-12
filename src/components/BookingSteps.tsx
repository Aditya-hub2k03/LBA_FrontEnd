import { Calendar, Clock, CreditCard } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Select Your Sport',
    description: 'Choose from Cricket, Badminton, or Pickleball. Each sport has dedicated professional facilities and equipment.',
    icon: Calendar,
    color: 'from-blue-600 to-cyan-500'
  },
  {
    number: '02',
    title: 'Select Your Slot',
    description: 'Pick a convenient time slot that fits your schedule. Morning, afternoon, and evening slots available.',
    icon: Clock,
    color: 'from-cyan-600 to-blue-500'
  },
  {
    number: '03',
    title: 'Make Payment',
    description: 'Complete your booking with secure online payment. Instant confirmation and digital receipt provided.',
    icon: CreditCard,
    color: 'from-blue-700 to-cyan-600'
  }
];

export default function BookingSteps() {
  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Reserve Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Spot</span>
          </h2>
          <p className="text-gray-400 text-lg">Book your slot in just 3 simple steps</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gray-800 border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/50 transition group">
                <div className={`inline-flex bg-gradient-to-br ${step.color} w-16 h-16 rounded-2xl items-center justify-center mb-6 group-hover:scale-110 transition`}>
                  <step.icon className="text-white" size={32} />
                </div>

                <div className="absolute top-8 right-8">
                  <span className="text-6xl font-bold text-gray-700/30">{step.number}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>

                <button className={`mt-6 bg-gradient-to-r ${step.color} text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition opacity-0 group-hover:opacity-100`}>
                  Get Started
                </button>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
