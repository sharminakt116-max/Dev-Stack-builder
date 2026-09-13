import { Suspense, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import type { Itechnology } from "./types/technologyType";

import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Technologies from "./components/technology/Technologies";
import YourStack from "./components/technology/YourStack";
import Footer from "./components/Footer";

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
    const alreadyAdded = selectedStack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning("Technology already added!");
      return;
    }

    setSelectedStack((prev) => [...prev, technology]);

    toast.success(`${technology.name} added to stack!`);
  };

  // Remove one technology
  const handleRemoveFromStack = (id: string) => {
    const technology = selectedStack.find(
      (item) => item.id === id
    );

    setSelectedStack((prev) =>
      prev.filter((item) => item.id !== id)
    );

    toast.info(`${technology?.name} removed from stack!`);
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    if (selectedStack.length === 0) return;

    setSelectedStack([]);

    toast.info("All technologies removed!");
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
              <div className="flex justify-center items-center gap-3 py-16">
                
                <div className="w-8 h-8 border-4 border-gray-300 border-t-pink-500 rounded-full animate-spin"></div>

                <p className="text-lg font-semibold text-gray-600">
                  Loading technologies...
                </p>

              </div>
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

      <Footer />

      {/* Toast */}
      <ToastContainer
        position="top-right"
        autoClose={2500}
        theme="light"
      />

    </div>
  );
}

export default App;

