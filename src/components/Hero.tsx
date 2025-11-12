export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Where Passion Meets Play
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              LAQSHYA
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                BADMINTON ACADEMY
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              "Where Passion Meets Play"
              <br />
              Book • Play • Compete • Repeat
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-blue-500/50 transition transform hover:scale-105">
                Reserve Your Spot
              </button>
              <button className="border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-full font-semibold hover:bg-blue-500/10 transition">
                Learn More
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-8 h-64 flex items-center justify-center">
                <span className="text-white text-6xl">🏸</span>
              </div>
              <div className="bg-gray-800 rounded-2xl p-6 border border-blue-500/20">
                <p className="text-blue-400 font-semibold">Professional Training</p>
                <p className="text-gray-400 text-sm mt-1">Expert coaches available</p>
              </div>
            </div>

            <div className="space-y-4 pt-12">
              <div className="bg-gray-800 rounded-2xl p-6 border border-blue-500/20">
                <p className="text-cyan-400 font-semibold">Premium Courts</p>
                <p className="text-gray-400 text-sm mt-1">World-class facilities</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-600 to-blue-500 rounded-2xl p-8 h-64 flex items-center justify-center">
                <span className="text-white text-6xl">🎾</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
