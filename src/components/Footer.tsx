
import Image from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-3 py-12">

      {/* Footer Top */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo & Description */}
        <div>
          <img src={Image} alt="Dev Stack Logo" className="h-8" />

          <p className="mt-4 text-slate-500">
            Curated tools, technologies, and resources for developers
            building modern software.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <a href="https://github.com" target="_blank">
              GitHub
            </a>

            <a href="https://twitter.com" target="_blank">
              Twitter
            </a>

            <a href="https://linkedin.com" target="_blank">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Product */}
        <div>
          <h3 className="font-bold mb-4">PRODUCT</h3>

          <div className="flex flex-col gap-2  text-slate-600">
            <a href="/">Home</a>
            <a href="/technologies">Technologies</a>
            <a href="/projects">Projects</a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold mb-4">COMPANY</h3>

          <div className="flex flex-col gap-2  text-slate-600">
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/careers">Careers</a>
          </div>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-bold mb-4">LEGAL</h3>

          <div className="flex flex-col gap-2 text-slate-600">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="flex border-t border-gray-300 mt-10 pt-5">
        <p className="text-slate-600 text-sm">
          © 2026 Dev Stack. All rights reserved.
        </p>

        <div className="flex gap-4 ml-auto  text-slate-600">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;