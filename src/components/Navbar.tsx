import React from "react";
import Logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-white py-4 border-b border-gray-300 z-50">

      {/* Mobile Navbar */}
      <div className="flex md:hidden items-center justify-between px-4">

        {/* Hamburger */}
        <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 512 512"
            fill="currentColor"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
        </button>

        {/* Logo */}
        <img src={Logo} alt="Dev Stack" className="h-8 "/>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-2">
          <button className="text-gray-700 text-sm font-medium">
            Sign In
          </button>

          <button className="gradient-button hover:opacity-90 text-white font-medium px-6 py-2.5 rounded-full 
          transition shadow-sm">Sign Up</button>
        </div>
      </div>


      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-between items-center gap-4 max-w-7xl mx-auto">

        {/* Logo */}
        <img src={Logo} alt="Dev Stack" className="h-8"/>

        {/* Navigation */}
        <ul className="flex gap-6 py-2">
          <li>
            <a href="/" className="gradient-text font-semibold"> Home </a>
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

        {/* Desktop Buttons */}
        <div className="flex items-center gap-6">

          <button className="text-gray-700 hover:text-pink-600 font-medium transition">
            Sign In
          </button>

          <button className="gradient-button hover:opacity-90 text-white font-medium px-6 py-2.5 rounded-full transition shadow-sm">
            Sign Up
          </button>

        </div>
      </div>

    </nav>
  );
};

export default Navbar;

