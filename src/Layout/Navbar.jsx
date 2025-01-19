import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="pt-10 w-full flex items-center justify-center flex-wrap">
      <nav
        className="w-full flex items-center justify-center gap-10 font-semibold text-xl rounded-2xl transition-all duration-300 lg:w-1/3 h-16 p-3 md:w-2/3 sm:w-2/3 bg-green-900"
      >
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `hover:bg-slate-800 hover:rounded-lg p-2 ${isActive ? "bg-slate-700 rounded-lg " : ""}`
          }
          aria-label="Navigate to Home page"
        >
          Home
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            `hover:bg-slate-800 hover:rounded-lg p-2 ${isActive ? "bg-slate-700 rounded-lg " : ""}`
          }
          aria-label="Navigate to About page"
        >
          About
        </NavLink>
        <NavLink
          to={"/projects"}
          className={({ isActive }) =>
            `hover:bg-slate-800 hover:rounded-lg p-2 ${isActive ? "bg-slate-700 rounded-lg " : ""}`
          }
          aria-label="Navigate to Projects page"
        >
          Projects
        </NavLink>
      </nav>
    </div>
  );
}
