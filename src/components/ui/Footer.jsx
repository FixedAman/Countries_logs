import { useEffect, useState } from "react";
import { FiPhone, FiMapPin, FiPlusCircle } from "react-icons/fi";
import json from "./Footer.json";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const reactIcons = {
    FiPhone: FiPhone,
    FiMapPin: FiMapPin,
    FiPlusCircle: FiPlusCircle,
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    const morphedIcon = json.map((item) => ({
      ...item,
      icon: reactIcons[item.icon],
    }));
    setData(morphedIcon);
  }, []);

  return (
    <footer className="bg-zinc-900 text-white py-8 px-12">
      {/* Main Content Section */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {data.map(({ id, title, icon: Icon }) => (
          <div
            key={id}
            className="flex flex-col items-center text-center space-y-4 bg-zinc-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <span className="text-4xl text-indigo-400 transform transition-transform duration-300 hover:scale-125">
              <Icon />
            </span>
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
        ))}
      </div>

      {/* Navigation Links Section */}
      <div className="container mx-auto border-t border-zinc-700 pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-center">
          {/* Copyright */}
          <div className="text-sm text-gray-400">
            © 2025 All rights reserved. <span className="text-indigo-400">Your Brand</span>
          </div>
          
          {/* Footer Nav Links */}
          <nav className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <NavLink
                  to="/"
                  className="hover:text-indigo-400 transition-colors duration-300"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="hover:text-indigo-400 transition-colors duration-300"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="hover:text-indigo-400 transition-colors duration-300"
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="hover:text-indigo-400 transition-colors duration-300"
                >
                  Services
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
