import WhyChooseUsPlusServicesCard from "../components/WhyChooseUsPlusServicesCard";

function WhyChooseUs() {
  const whyChooseUsData = [
    {
      icon: "📈",
      title: "ROI-Focused Marketing",
      desc: "Our strategies are designed to increase conversions, revenue, and long-term business growth.",
    },
    {
      icon: "🎯",
      title: "Customized Strategies",
      desc: "Every business is unique, so we tailor campaigns based on your brand, audience, and goals.",
    },
    {
      icon: "⚡",
      title: "Transparent & Fast Execution",
      desc: "Clear communication, weekly reports, and visible improvements from day one — no fluff.",
    },
    {
      icon: "🤝",
      title: "Your Growth Partner",
      desc: "We work with you as a partner, not just a service provider. Your success is our mission.",
    },
  ];

  return (
    <section className="px-6 md:px-10 py-16   text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Why Choose <span className="text-purple-600">GrowthVerse Media?</span>
        </h2>
        <p className="text-gray-300 text-sm md:text-base mb-10">
          Your business deserves more than just marketing — it deserves
          measurable growth. At GrowthVerse Media, we combine creativity, data,
          and strategy to help brands scale with confidence.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {whyChooseUsData.map((data, index) => (
          <WhyChooseUsPlusServicesCard key={index} data={data} />
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
