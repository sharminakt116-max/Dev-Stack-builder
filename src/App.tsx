import { Suspense, useState } from "react";
import type { Itechnology } from "./types/technologyType";

import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Technologies from "./components/technology/Technologies";
import YourStack from "./components/technology/YourStack";

const technologyFetch = async (): Promise<Itechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();

  return data;
};

function App() {
  // Selected technologies
  const [selectedStack, setSelectedStack] = useState<Itechnology[]>([]);

  // Fetch technology data
  const [technologyPromise] = useState(() => technologyFetch());

  // Add technology to stack
  const handleAddToStack = (technology: Itechnology) => {
    setSelectedStack((prev) => [...prev, technology]);
  };

  // Remove one technology
  const handleRemoveFromStack = (id: string) => {
    setSelectedStack((prev) =>
      prev.filter((technology) => technology.id !== id)
    );
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    setSelectedStack([]);
  };

  return (
    <div className="bg-white min-h-screen text-black">

      <Navbar />

      <Banner />

      {/* Main Container */}
    <main className="max-w-7xl mx-auto px-4 py-9 flex flex-col lg:flex-row gap-8 items-start">

        {/* Technologies */}
        <div className="flex-1 w-full">
          <Suspense
            fallback={
              <h2 className="text-xl font-bold py-10">
                Loading...
              </h2>
            }
          >
            <Technologies
              technologyPromise={technologyPromise}
              onAddToStack={handleAddToStack}
              selectedStack={selectedStack}
            />
          </Suspense>
        </div>

        {/* Your Stack */}
        <YourStack
          selectedStack={selectedStack}
          onRemoveFromStack={handleRemoveFromStack}
          onRemoveAll={handleRemoveAll}
        />

      </main>

    </div>
  );
}

export default App;

