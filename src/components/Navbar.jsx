import React from "react";
import logo from "../media/logo.avif";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav className=" flex items-center justify-between py-6 ">
      <div >
        <img src={logo} alt="Not Found " className="mx-2 w-14 rounded-full" />
      </div>
      <div className="m-8 flex items-center justify-center gap-5 text-2xl pr-30
      ">
        <a href="https://www.linkedin.com/in/raibikraminfo/">
          <FaLinkedin />
        </a>

        <a href="https://github.com/ItsBikramRai">
          <FaSquareGithub />
        </a>
        <a href="https://x.com/BikramRai_">
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
}
