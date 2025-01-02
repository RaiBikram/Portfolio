import React from "react";
// import aboutImg from "../media/aboutpic.jpg";
import { ABOUT_TEXT } from "../utils/index.utils";
import Technologies from "./Technologies";
import profilePic from "../media/bikram.jpeg";

export default function AboutSection() {
  return (
    <div className="border-b border-neutral-900 pb-8 flex flex-col items-center">
      <div className="max-w-5xl w-full flex flex-col lg:flex-row items-center lg:items-start lg:justify-between py-16 px-6">
        {/* Text Section */}
        <div className="lg:w-2/3 w-full text-center lg:text-left">
          <h3 className="font-semibold text-4xl pb-6 text-red-300">
            Hey! I'm Bikram Rai, and I'm a full-stack engineer.
          </h3>
          <p className=" text-gray-400 text-base leading-relaxed">
            {ABOUT_TEXT}
          </p>
        </div>

        {/* Profile Picture */}
        <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
          <img
            className="rounded-full shadow-lg"
            src={profilePic}
            alt="Profile Picture"
            width={200}
            height={200}
          />
        </div>
      </div>

      {/* Technologies Section */}
      <div className="w-full">
        <Technologies />
      </div>
    </div>
  );
}
