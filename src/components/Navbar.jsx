import { useState, useEffect } from "react";
import { Menu, ArrowLeft } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY - lastScrollY > 10) {
        setShowNav(false); // hide on scroll down
      } else if (lastScrollY - window.scrollY > 10) {
        setShowNav(true); // show on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // ✅ Smooth scroll helper
  const scrollToSection = (id) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false); // close mobile menu after click
  };

  const linkClass =
    "relative pb-1 cursor-pointer transition-all duration-300 group w-full";

  return (
    <nav className="flex justify-between items-center px-6 md:px-10 py-4 border border-gray-700 bg-[#000000] text-white rounded-full mx-4 mt-4 relative bg-gradient-to-b from-[#090e2b] to-[#0d112f]">
      <div className="flex items-center gap-2">
        <h1 className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-white via-blue-800 to-purple-500 bg-[length:200%_auto] animate-gradient">
          WEJJAJI
        </h1>
      </div>

      {/* ✅ Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-gray-300 ml-auto">
        {["Portfolio", "Pricing", "Testimonials"].map((item) => (
          <li
            key={item}
            className={linkClass}
            onClick={() => scrollToSection(item)}
          >
            <span className="group-hover:text-purple-400 transition-colors duration-300">
              {item}
            </span>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* ✅ Desktop Button */}
      <div className="hidden md:block ml-6">
        <button
          onClick={() => scrollToSection("footer")}
          className="rounded-full cursor-pointer bg-purple-600 hover:bg-purple-700 px-6 py-2 transition duration-300"
        >
          Get in touch
        </button>
      </div>

      {/* ✅ Mobile Toggle */}
      {!open && (
        <button className="md:hidden p-2 z-50" onClick={() => setOpen(true)}>
          <Menu size={24} />
        </button>
      )}

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-opacity-50 backdrop-blur-sm md:hidden transition-opacity duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Mobile Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-[#0d0d2b] border-l border-gray-700 md:hidden z-50 transform transition-transform duration-500 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between w-full px-6 py-4 border-b border-gray-700">
          <button
            className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
            onClick={() => setOpen(false)}
          >
            <ArrowLeft size={24} />
            <span>Back</span>
          </button>
        </div>
        <ul className="flex flex-col items-start gap-6 py-6 px-6 text-gray-300">
          {["Portfolio", "Pricing", "Testimonials"].map((item) => (
            <li
              key={item}
              className={linkClass}
              onClick={() => scrollToSection(item)}
            >
              <span className="group-hover:text-purple-400 transition-colors duration-300">
                {item}
              </span>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
          <button
            onClick={() => scrollToSection("footer")}
            className="rounded-full bg-purple-600 hover:bg-purple-700 px-6 py-2 transition duration-300"
          >
            Get in touch
          </button>
        </ul>
      </div>
    </nav>
  );
}
