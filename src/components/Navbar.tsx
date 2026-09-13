import React from 'react';
import Logo from '../assets/logo-text.png';

const Navbar = () => {
  return (
    <div className="sticky top-0 bg-white py-4 border-b border-gray-300">
      <div className="flex justify-between gap-4 max-w-7xl mx-auto">

        <img src={Logo} alt="" />

        <ul className="flex gap-6 py-2">
          <li>
            <a href="/" className="gradient-text font-semibold">
              Home
            </a>
          </li>

          <li>
            <a href="/">Technologies</a>
          </li>

          <li>
            <a href="/">Projects</a>
          </li>

          <li>
            <a href="/">About</a>
          </li>

          <li>
            <a href="/">Contact</a>
          </li>
        </ul>

        <div className="flex items-center gap-6">

          <button className="text-gray-700 hover:text-pink-600 font-medium transition">
            Sign In
          </button>

          <button className="gradient-button hover:opacity-90 text-white font-medium px-6 py-2.5 rounded-full transition shadow-sm">
            Sign Up
          </button>

        </div>
      </div>
    </div>
  );
};

export default Navbar;

