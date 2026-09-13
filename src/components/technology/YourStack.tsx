import type { Itechnology } from "../../types/technologyType";

interface YourStackProps {
  selectedStack: Itechnology[];
  onRemoveFromStack: (id: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({
  selectedStack,
  onRemoveFromStack,
  onRemoveAll,
}: YourStackProps) => {
  return (
    <aside className="w-full lg:w-80 shrink-0 self-start h-full lg:sticky lg:top-24 lg:mt-[120px]">
      <div className="bg-white border border-gray-300 rounded-3xl p-6 shadow-sm">

        {/* Title */}
        <h2 className="text-xl font-extrabold text-slate-900 mb-1">
          Your Stack
        </h2>

        {/* Dynamic Text */}
        <p className="text-slate-400 text-xs mb-6">
          {selectedStack.length === 0
            ? "No technologies selected yet."
            : `${selectedStack.length} ${
                selectedStack.length === 1
                  ? "technology"
                  : "technologies"
              } selected`}
        </p>

        {/* Stack */}
        <div className="border border-dashed border-gray-200 rounded-2xl py-4 px-4">
          {selectedStack.length === 0 ? (
            <p className="text-slate-400 text-sm font-medium text-center py-4">
              Your stack is empty.
            </p>
          ) : (
            <div className="space-y-3">

              {/* Selected Items */}
              {selectedStack.map((technology) => (
                <div
                  key={technology.id}
                  className="flex items-center justify-between gap-3 p-3 border border-gray-100 rounded-xl"
                >
                  {/* Technology Info */}
                  <div className="flex items-center gap-3">
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="w-8 h-8 object-contain"
                    />

                    <div>
                      <p className="text-sm font-semibold text-slate-700">
                        {technology.name}
                      </p>

                      <p className="text-xs text-slate-400">
                        {technology.category}
                      </p>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => onRemoveFromStack(technology.id)}
                    className="text-red-500 hover:text-red-700 text-lg font-bold"> ×</button>
                </div>
              ))}

              {/* Remove All Button */}
              <button
                onClick={onRemoveAll}
                className="gradient-button w-full py-3 rounded-xl text-white text-xs font-bold hover:opacity-90 transition">
                  Remove All</button>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default YourStack;