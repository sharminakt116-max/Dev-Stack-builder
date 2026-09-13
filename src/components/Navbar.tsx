import Logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-white py-4 border-b border-gray-300 z-50">

      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

       
        <button className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-gray-200">
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

       
        <img src={Logo} alt="Dev Stack"className="h-8"/>
   
        <ul className="hidden md:flex gap-6 py-2">
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

      
        <div className="flex items-center gap-2 md:gap-6">

          <button className="text-gray-700 hover:text-pink-600 font-medium transition">
            Sign In
          </button>

          <button className="gradient-button hover:opacity-90 text-white font-medium px-4 md:px-6 py-2.5 rounded-full transition shadow-sm">
            Sign Up
          </button>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;      