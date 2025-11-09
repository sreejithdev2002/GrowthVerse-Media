import TestimonialCard from "../components/TestimonialCard";

function Testimonials() {
  const testimonialsData = [
    {
      para: "GrowthVerse Media changed the way we approached digital marketing. Our sales doubled within 3 months!",
      name: "Rahul M",
      role: "Founder, TechUp Solutions",
    },
    {
      para: "Professional, transparent, and result-driven. Their marketing strategies helped us grow consistently.",
      name: "Kavya S",
      role: "CEO, StyleAura",
    },
    {
      para: "Brilliant strategy + execution! The lead quality and conversions improved drastically. Highly recommended!",
      name: "Vikram R",
      role: "Managing Director, VR Constructions",
    },
  ];

  return (
    <section className="px-10 py-16   text-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold mb-3">
          What Our <span className="text-purple-600">Clients Say</span>
        </h2>
        <p className="text-lgtext-gray-300 max-w-2xl mx-auto">
          Hear from the brands that trusted us to scale their business.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {testimonialsData.map((data, index) => (
          <TestimonialCard key={index} data={data} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
