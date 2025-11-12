import { Heart, Brain, Award, Zap, Wind } from 'lucide-react';

const benefits = [
  {
    title: 'Improved Fitness',
    description: 'Enhance cardiovascular health and build stamina through regular sports activities',
    icon: Heart,
    image: '💪',
    gradient: 'from-blue-600 to-cyan-500'
  },
  {
    title: 'Better Focus',
    description: 'Sharpen mental clarity and concentration with strategic gameplay',
    icon: Brain,
    image: '🎯',
    gradient: 'from-cyan-600 to-blue-500'
  },
  {
    title: 'Cultivates Discipline',
    description: 'Develop self-control and consistent practice habits for success',
    icon: Award,
    image: '🏆',
    gradient: 'from-blue-700 to-cyan-600'
  },
  {
    title: 'Strength Training',
    description: 'Build muscle strength and improve overall body coordination',
    icon: Zap,
    image: '💥',
    gradient: 'from-cyan-700 to-blue-600'
  },
  {
    title: 'Cool Down',
    description: 'Proper recovery sessions to prevent injuries and improve flexibility',
    icon: Wind,
    image: '🧘',
    gradient: 'from-blue-600 to-cyan-500'
  }
];

export default function HealthBenefits() {
  return (
    <section id="benefits" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Health <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Benefits</span>
          </h2>
          <p className="text-gray-400 text-lg">Transform your life through sports</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-blue-500/20 rounded-2xl overflow-hidden hover:border-blue-500/50 transition group"
            >
              <div className={`bg-gradient-to-br ${benefit.gradient} p-12 flex items-center justify-center`}>
                <span className="text-8xl">{benefit.image}</span>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className={`bg-gradient-to-br ${benefit.gradient} w-10 h-10 rounded-lg flex items-center justify-center mr-3`}>
                    <benefit.icon className="text-white" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                </div>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
