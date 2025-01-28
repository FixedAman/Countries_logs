import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Headers = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-zinc-900 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">YourTravel</div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`absolute md:relative top-0 left-0 w-full md:w-auto md:flex md:items-center bg-gray-900 md:bg-transparent z-10 transition-transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8 items-center p-4 md:p-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-gray-400 ${
                    isActive ? "text-gray-400" : "text-white"
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `hover:text-gray-400 ${
                    isActive ? "text-gray-400" : "text-white"
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/country"
                className={({ isActive }) =>
                  `hover:text-gray-400 ${
                    isActive ? "text-gray-400" : "text-white"
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Country
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Headers;
