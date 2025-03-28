import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

function Header() {
  const navigateToContact = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/education", label: "Education" },
  ];

  const renderNavLink = (path, label) => (
    <li key={path}>
      <NavLink
        to={path}
        className={({ isActive }) =>
          `text-base font-medium transition-all duration-200 ${
            isActive ? "text-pink-600" : "text-gray-600 hover:text-pink-600"
          }`
        }
        onClick={() => setIsMenuOpen(false)}
      >
        {label}
      </NavLink>
    </li>
  );

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400 hover:from-rose-400 hover:to-pink-500 transition-all duration-300">
            Bharti
          </span>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-6" type="none">
            {navLinks.map(({ path, label }) => renderNavLink(path, label))}
            <li>
              <button
                onClick={() => navigateToContact("/contact")}
                className="bg-pink-500 text-white px-6 py-2.5 rounded-full font-medium hover:bg-pink-600 transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                Let's Talk
              </button>
            </li>
          </ul>

          <button
            className="md:hidden text-gray-600 hover:text-pink-500 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map(({ path, label }) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive
                        ? "bg-pink-50 text-pink-600"
                        : "text-gray-600 hover:bg-pink-50 hover:text-pink-600"
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </NavLink>
              ))}
              <button
                onClick={() => {
                  navigateToContact("/contact");
                  setIsMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 text-base font-medium text-white bg-pink-500 rounded-md hover:bg-pink-600"
              >
                Let's Talk
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
