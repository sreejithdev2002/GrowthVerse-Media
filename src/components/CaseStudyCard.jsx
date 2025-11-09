import testImage from "../assets/Images/testImage.jpeg";

function CaseStudyCard({ data }) {
  return (
    <article className="bg-[#1b1321] rounded-xl shadow-lg hover:shadow-purple-500/20 transition-all duration-500 overflow-hidden hover:-translate-y-1 flex flex-col h-full">
      <img
        src={testImage}
        alt={data.title}
        className="w-full h-48 object-cover rounded-t-xl"
      />

      <div className="p-5 flex flex-col grow justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-2">{data.title}</h3>
          <p className="text-sm text-gray-300 mb-3 leading-relaxed min-h-[60px]">
            {data.desc}
          </p>

          <ul className="text-sm text-gray-400 list-disc list-inside space-y-1">
            {data.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        <button className="mt-5 bg-purple-900 hover:bg-purple-800 text-white px-4 py-2 rounded-md transition-all duration-300 w-full">
          Read More
        </button>
      </div>
    </article>
  );
}

export default CaseStudyCard;
