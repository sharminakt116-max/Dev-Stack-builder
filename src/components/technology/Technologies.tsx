import { use } from "react";
import type { Itechnology } from "../../types/technologyType";

interface TechnologiesProps {
  technologyPromise: Promise<Itechnology[]>;
  onAddToStack: (technology: Itechnology) => void;
  selectedStack: Itechnology[];
}

const Technologies = ({
  technologyPromise,
  onAddToStack,
  selectedStack,
}: TechnologiesProps) => {
  const technology = use(technologyPromise);

  return (
<section className="max-w-7xl mx-auto">
      {/* Title */}
      <div className="mb-7">
        <h1 className="text-4xl font-bold text-gray-900">
          Explore the{" "}
          <span className="text-pink-500">Technologies</span>
        </h1>

        <p className="text-gray-400 text-2xl mt-1">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Cards */}
     <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 py-6 gap-6">

        {technology.map((item) => {
          const isSelected = selectedStack.some(
            (tech) => tech.id === item.id
          );

          return (
            <div
              key={item.id}
              className={`rounded-2xl p-6 border shadow-sm transition ${
                isSelected
                  ? "bg-pink-50 border-pink-400"
                  : "bg-white border-gray-300 hover:shadow-md"
              }`}
            >

              {/* Icon & Badge */}
              <div className="flex justify-between items-start mb-6">

                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-10 h-10 object-contain"
                />

                <span className="px-4 py-1.5 text-xs font-semibold rounded-full bg-pink-50 text-pink-500">
                  {item.badge}
                </span>

              </div>

              {/* Name */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {item.name}
              </h3>

              {/* Description */}
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Category, Difficulty & Rating */}
              <div className="flex items-center justify-between text-xs text-slate-500 mb-6">

                <span className="bg-slate-100 text-slate-600 px-3 py-3 rounded-md font-medium">
                  {item.category}
                </span>

                <span className="font-medium">
                  {item.difficulty}
                </span>

                <span className="flex items-center gap-1 font-bold text-slate-800">
                  <span className="text-amber-400 text-lg">
                    ★
                  </span>
                  {item.rating}
                </span>

              </div>

              {/* Add Button */}
              <button
                onClick={() => onAddToStack(item)}
                disabled={isSelected}
                className={`w-full py-4 rounded-xl text-xs font-bold transition ${
                  isSelected
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                {isSelected ? "Added to Stack" : "Add to Stack"}
              </button>

            </div>
          );
        })}

      </div>
    </section>
  );
};

export default Technologies;