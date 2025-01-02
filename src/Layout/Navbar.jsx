import React from "react";
// import logo from "../media/logo.avif";

import { NavLink } from "react-router-dom";


export default function Navbar() {
  return (
<div className="flex items-center justify-center flex-wrap mt-6 ">
<nav className=" flex flex-wrap  items-center justify-center gap-10 font-extrabolds text-xl bg-green-800 rounded-2xl lg:w-1/3 h-16 p-2 sm:2/3 md:1/3">

<NavLink to={"/"} className={"hover:bg-slate-800 hover:rounded-lg p-2"}>Home</NavLink>
<NavLink to={"/about"} className={"hover:bg-slate-800 hover:rounded-lg p-2"}>About</NavLink>
<NavLink to={"/projects"} className={"hover:bg-slate-800 hover:rounded-lg p-2"}>Projects</NavLink>


 </nav>
</div>
  );
}
