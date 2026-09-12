import { Suspense } from "react";
import type { Itechnology } from "./types/technologyType";

import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Technologies from "./components/technology/Technologies";

const technologyFetch = async ():Promise<Itechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const technologyPromise = technologyFetch();

  return (
    <div className="bg-white min-h-screen text-black">
      <Navbar />
      <Banner />

      <Suspense fallback={<h2>Loading...</h2>}>
        <Technologies technologyPromise={technologyPromise} />
      </Suspense>
    </div>
  );
}

export default App;
