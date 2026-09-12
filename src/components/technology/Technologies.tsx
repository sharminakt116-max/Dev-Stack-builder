
import { use } from "react";
import type { Itechnology } from "../../types/technologyType";

interface TechnologiesProps {
  technologyPromise: Promise<Itechnology[]>;
}

const Technologies = ({ technologyPromise }: TechnologiesProps) => {
  const technology = use(technologyPromise);


  // Tag color
const tagColorMap: Record<string, string> = {
      blue: "bg-sky-50 text-sky-400",
  green: "bg-emerald-50 text-emerald-500",
  orange: "bg-orange-50 text-orange-500",
  purple: "bg-purple-50 text-purple-500",
  emerald: "bg-emerald-50 text-emerald-500",
  sky: "bg-sky-50 text-sky-500",
  red: "bg-red-50 text-red-500",
  amber: "bg-amber-50 text-amber-500",
  rose: "bg-rose-50 text-rose-500",
  cyan: "bg-cyan-50 text-cyan-500",
};

  return (
    <section className="py-12 max-w-7xl mx-auto">
      <div className="mb-7">
        <h1 className="text-4xl font-bold text-gray-900">
          Explore the <span className="text-pink-500">Technologies</span>
        </h1>

        <p className="text-gray-400 text-2xl mt-1">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-7">
        {technology.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl p-6 border border-gray-500 shadow-sm hover:shadow-md transition flex flex-col justify-between"
          >
            {/* Top Row: Icon & Tag */}
            <div className="flex justify-between items-start mb-6">
              <img
                src={item.icon}
                alt={item.name}
                className="w-10 h-10 object-contain"
              />

              <span
                className={`px-4 py-1.5 text-xs font-semibold rounded-full ${
                  tagColorMap[item.tagColor] ||
                  "bg-sky-50 text-sky-400"
                }`}
              >
                {item.tag}
              </span>
            </div>

            {/* Name */}
            <h3 className="text-xl font-extrabold text-slate-900 mb-3">
              {item.name}
            </h3>

            {/* Description */}
            <p className="text-slate-500 text-lg leading-relaxed mb-6">
              {item.description}
            </p>

            {/* Bottom Row */}
            <div className="flex items-center justify-between text-lg text-slate-500">
              <span className="bg-slate-100 text-slate-600 px-3 py-3 rounded-lg font-medium">
                {item.category}
              </span>

              <span className="font-medium text-slate-500">
                {item.level}
              </span>

                <span className="flex items-center gap-1 font-bold text-slate-800">
                <span className="text-amber-400 text-lg">★</span>
                {item.rating}
              </span> 
              </div>
        
  <button className="w-full bg-black text-white py-4 rounded-xl text-xs font-bold">
    Add to Stack
  </button>
 
        
           
           
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;