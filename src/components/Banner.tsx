import React from 'react';
import Image from"../assets/banner-stack.png";

const Banner= () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">

    
      <div className="py-6 max-w-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
          Build Your Ideal <br />

          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
          Explore frontend, backend, database, and tooling options,
          compare them side by side, and put together the stack that
          fits your next project.
        </p>

        <div className="flex items-center gap-4">
          <button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-90 text-white font-medium px-6 py-3 rounded-xl transition">
            Explore Technologies
          </button>

          <button className="border border-gray-300 text-gray-700 hover:bg-red-200 font-medium px-6 py-3 rounded-xl transition">
            Learn More
          </button>
        </div>
      </div>

     
       <div className="w-full md:w-4/10 flex justify-center">
      
        <img
          src={Image}
          alt="Development Stack Illustration"
         
        />
      </div>

    </section>
  );
};




export default Banner;