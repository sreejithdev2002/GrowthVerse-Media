function CTA() {
  return (
    <section className="px-10 py-16 bg-linear-to-r  from-purple-900 to-purple-950 text-white flex flex-col items-center text-center rounded-2xl shadow-lg my-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to Grow Your Business?
      </h2>

      <p className="text-lg md:text-xl max-w-2xl text-gray-200 mb-8 leading-relaxed">
        Book a free 30-minute strategy session and discover how we can help
        scale your brand with data-driven marketing that delivers real results.
      </p>

      <button className="px-8 py-3 bg-white text-purple-700 font-semibold rounded-md shadow-md hover:bg-gray-100 transition-all duration-300">
        Book My Free Strategy Call
      </button>

      <p className="mt-4 text-sm text-gray-300">
        No cost. No commitment. Just a roadmap to measurable growth 🚀
      </p>
    </section>
  );
}

export default CTA;
