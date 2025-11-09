import bgImage from "../assets/Images/bg.jpg";

function Hero() {
  return (
    <section className="relative flex flex-col justify-center items-center text-center px-6 md:px-10 py-20 w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Digital marketing background"
          className="w-full h-full object-cover brightness-75"
        />
      </div>

      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10 max-w-3xl space-y-6 animate-fadeIn">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
          Grow Your Brand With{" "}
          <span className="text-purple-400">Data-Driven Digital Marketing</span>
        </h2>

        <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
          We help startups and businesses scale faster through ROI-focused
          marketing strategies that attract customers, boost sales, and build a
          powerful online presence.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
          <button className="bg-purple-900 hover:bg-purple-950 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300">
            Get a Free Strategy Call
          </button>
          <button className="bg-transparent border border-purple-900 text-purple-300 hover:bg-purple-900 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300">
            View Case Studies
          </button>
        </div>

        <p className="text-xs text-gray-400 mt-3">
          No hidden charges. No false promises. Just real growth.
        </p>
      </div>
    </section>
  );
}

export default Hero;
