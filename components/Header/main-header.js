import { useState, useEffect } from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll"; // Use react-scroll for smooth scrolling
import { useRouter } from "next/router";

export default function MainHeader() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // State to track scrolling
  const router = useRouter();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsScrolled(offset > 50); // Trigger the effect after scrolling down 50px
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { label: "Home", to: "home" },
    { label: "About me", to: "about" },
    { label: "Skills", to: "skills" },
    { label: "Experience", to: "experience" },
    { label: "Projects", to: "projects" },
    { label: "Certificates", to: "certificates" },
    { label: "Contact me", to: "contact" },
  ];

  return (
    <header
      className={`flex fixed w-full items-center justify-between ${
        isScrolled ? "backdrop-blur-md bg-gray-900/80 shadow-lg" : "bg-gray-900 shadow-md"
      } top-0 left-0 z-10 px-4 md:px-8 lg:px-24 py-4 transition-all duration-300 ease-in-out font-boska`}
    >
      <div className="p-1 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <Image src="/images/Rahul.png" alt="Logo image" width={175} height={60} />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-10">
        <ul className="flex gap-8">
          {navItems.map((item, index) => (
            <li key={index} className="cursor-pointer">
              <ScrollLink
                className={`text-lg text-gray-100 font-light relative ${
                  router.pathname === `/${item.to}` ? "text-gray-300 underline" : ""
                }`}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={closeMobileMenu}
              >
                {item.label}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hamburger Icon */}
      <button onClick={toggleMobileMenu} className="md:hidden focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-300">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-gray-900 shadow-md w-full">
          <ul className="flex flex-col items-center gap-4 py-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <ScrollLink
                  className={`text-lg text-gray-300 font-light relative ${
                    router.pathname === `/${item.to}` ? "underline" : ""
                  }`}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-80} // Adjust the offset as needed
                  duration={500}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
