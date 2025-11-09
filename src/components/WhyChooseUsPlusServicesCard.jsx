function WhyChooseUsPlusServicesCard({ data }) {
  return (
    <div
      className="flex flex-col items-center text-center px-6 py-10 rounded-2xl bg-[#2a1249]
                 text-white shadow-lg hover:shadow-purple-500/30 transition-all duration-500 transform 
                 hover:-translate-y-2 hover:bg-linear-to-b hover:from-purple-800 hover:to-[#200037]
                 animate-fadeIn"
    >
      <div className="text-5xl mb-3">{data.icon}</div>
      <h3 className="text-xl md:text-2xl font-semibold mb-2">{data.title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{data.desc}</p>
    </div>
  );
}

export default WhyChooseUsPlusServicesCard;
