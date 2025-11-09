function TestimonialCard({ data }) {
  return (
    <article className="bg-[#1b1321] rounded-xl shadow-md hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 p-6 flex flex-col justify-between h-full hover:-translate-y-1">
      <p className="text-sm text-gray-300 italic leading-relaxed mb-6">
        “{data.para}”
      </p>

      <div className="mt-auto">
        <h3 className="text-base font-semibold text-purple-400">{data.name}</h3>
        <p className="text-xs text-gray-400">{data.role}</p>
      </div>
    </article>
  );
}

export default TestimonialCard;
