import WhyChooseUsPlusServicesCard from "../components/WhyChooseUsPlusServicesCard";

function Services() {
  const servicesData = [
    {
      icon: "📱",
      title: "Social Media Marketing",
      desc: "Boost brand awareness, engage your audience, and convert followers into loyal customers with result-driven social media strategies.",
    },
    {
      icon: "🔍",
      title: "SEO & Google Ranking",
      desc: "Increase organic visibility, rank higher on Google, and attract consistent long-term traffic with powerful SEO strategies.",
    },
    {
      icon: "💰",
      title: "Performance Marketing (Ads)",
      desc: "High-ROI Google & Meta ads focused on conversions, lead generation, and scaling your business profitability.",
    },
    {
      icon: "🎨",
      title: "Brand Identity & Design",
      desc: "Stand out with unique branding, creative designs, and stunning visuals that strengthen brand recall instantly.",
    },
    {
      icon: "🖥️",
      title: "Website & Landing Pages",
      desc: "High-converting, fast-loading, and beautifully designed websites tailored to convert visitors into customers.",
    },
  ];

  return (
    <section className="px-6 md:px-10 py-16 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Our <span className="text-purple-600">Services</span>
        </h2>
        <p className="text-gray-300 text-sm md:text-base mb-10">
          We offer full-stack digital marketing solutions designed to increase
          visibility, build brand authority, and drive measurable business
          growth.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {servicesData.map((data, index) => (
          <WhyChooseUsPlusServicesCard key={index} data={data} />
        ))}
      </div>
    </section>
  );
}

export default Services;
