import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const navigateToContact = useNavigate();
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Bharti
          </span>

          <ul className="hidden md:flex space-x-8" type="none">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-blue-600 transition-all ${
                    isActive ? "text-blue-600 font-medium" : "text-gray-600"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `hover:text-blue-600 transition-all ${
                    isActive ? "text-blue-600 font-medium" : "text-gray-600"
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills">Skills</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/education">Education</NavLink>
            </li>
            <li>
              <NavLink to="/tools">Tools</NavLink>
            </li>
            {/* <li>
              <NavLink to="/contact">Contact</NavLink>
            </li> */}
          </ul>
          <button
            onClick={() => navigateToContact("/contact")}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all hover:scale-105"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
