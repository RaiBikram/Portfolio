import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="pt-6 w-full flex justify-center px-4">
      <nav className="w-full md:w-1/2 lg:w-1/2 max-w-xs flex items-center justify-evenly bg-green-900 h-12 rounded-full shadow-md text-xs sm:text-sm font-extrabold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-2 py-1 flex items-center rounded-full transition duration-200 ${
              isActive ? "bg-green-800 text-white" : "text-white/90 hover:bg-green-800/70"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-2 py-1 flex items-center rounded-full transition duration-200 ${
              isActive ? "bg-green-800 text-white" : "text-white/90 hover:bg-green-800/70"
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `px-2 py-1 flex items-center rounded-full transition duration-200 ${
              isActive ? "bg-green-800 text-white" : "text-white/90 hover:bg-green-800/70"
            }`
          }
        >
          Projects
        </NavLink>
      </nav>
    </div>
  );
}