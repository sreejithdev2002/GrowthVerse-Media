import CaseStudyCard from "../components/CaseStudyCard";

function CaseStudies() {
  const caseStudiesData = [
    {
      title: "4X Revenue Growth for E-Commerce Fashion Brand",
      desc: "Implemented Meta Ads + Influencer strategy + retargeting funnel resulting in 4X revenue growth in 60 days.",
      points: ["312% Traffic Growth", "4X Sales", "ROAS: 5.6X"],
    },
    {
      title: "Generated 820 Leads for Real Estate Developer",
      desc: "Executed Google Search + YouTube ad funnel to drive high-intent leads at just $86 per qualified lead.",
      points: ["820+ Leads", "CPL: $86", "42 Site Visits"],
    },
    {
      title: "2.7X Growth for EdTech Brand in 90 Days",
      desc: "Combined SEO + Email automation + social media funnel to grow leads and student sign-ups by 2.7X.",
      points: [
        "2.7X Student Signups",
        "188% Organic Growth",
        "37% CAC Reduction",
      ],
    },
  ];

  return (
    <section className="px-6 sm:px-10 py-16   text-white">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-semibold mb-3">Client <span className="text-purple-600">Success Stories</span></h2>
        <p className="text-base text-gray-300 max-w-2xl mx-auto">
          Real businesses. Real results. Here’s how we helped brands scale with
          data-driven marketing strategies.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudiesData.map((data, index) => (
          <CaseStudyCard key={index} data={data} />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="border-2 border-purple-900 text-purple-300 hover:bg-purple-600 hover:text-white transition-all duration-300 px-6 py-2 rounded-md font-medium">
          Explore More
        </button>
      </div>
    </section>
  );
}

export default CaseStudies;
