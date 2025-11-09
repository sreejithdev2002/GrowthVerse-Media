import { useState, useEffect } from "react";

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const closeOnScroll = () => setMenuOpen(false);
    window.addEventListener("scroll", closeOnScroll);
    return () => window.removeEventListener("scroll", closeOnScroll);
  }, []);

  const navItems = [
    "Home",
    "Services",
    "Case Studies",
    "About",
    "Testimonials",
    "Contact",
  ];

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4  bg-[#140d19]/90 backdrop-blur-md shadow-md z-50 transition-all duration-300">
      <div className="flex flex-col items-start cursor-pointer select-none">
        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          GrowthVerse Media
        </h1>
        <p className="text-xs md:text-sm text-gray-300">
          Data-Driven Digital Marketing Agency
        </p>
      </div>

      {/* Desktop Navigation */}
      {!isMobile ? (
        <div className="flex items-center gap-8">
          <nav>
            <ul className="flex gap-6 text-white font-medium">
              {navItems.map((item) => (
                <li
                  key={item}
                  className="hover:text-purple-400 cursor-pointer transition-colors duration-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </nav>
          <button className="bg-purple-900 text-white font-medium px-5 py-2 rounded-md shadow-md hover:bg-purple-800 transition duration-300">
            Get Free Consultation
          </button>
        </div>
      ) : (
        <>
          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle Menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white hover:text-purple-600 focus:outline-none z-50 text-2xl transition-all duration-300"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          {/* Mobile Navigation Drawer */}
          <div
            className={`fixed top-0 right-0 h-screen w-full bg-[#1c1225] flex flex-col items-center py-10 z-40 transform transition-transform duration-500 ease-in-out ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <nav className="flex-1">
              <ul className="flex flex-col gap-5 text-lg text-white font-medium text-center">
                {navItems.map((item) => (
                  <li
                    key={item}
                    onClick={() => setMenuOpen(false)}
                    className="cursor-pointer hover:text-purple-400 transition duration-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </nav>
            <button
              onClick={() => setMenuOpen(false)}
              className="bg-purple-900 text-white font-medium px-5 py-2 rounded-md shadow-md mt-6hover:bg-purple-800 transition duration-300"
            >
              Get Free Consultation
            </button>
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
