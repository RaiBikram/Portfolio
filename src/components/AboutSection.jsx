import React from "react";
import { ABOUT_TEXT } from "../utils/index.utils";
import Technologies from "./Technologies";
import profilePic from "../media/bikram.jpeg";
import Layout from "../Layout/Layout";

export default function AboutSection() {
  return (
    <Layout
      title="Bikram Rai | About"
      keyword="Bikram Rai, Software Engineer, MERN Stack Developer, Software Engineer Portfolio, Backend Developer, Web Development, JavaScript Developer"
      author="Bikram Rai"
      description="Learn more about Bikram Rai, a passionate Software Engineer specializing in MERN stack development. Discover his skills, professional journey, and commitment to crafting impactful web solutions."
    >
      <div className="border-b border-neutral-900 pb-10 flex flex-col px-6">
        {/* Heading Section */}
        <div className="flex justify-center items-center pt-5">
          <h1 className="text-4xl font-semibold py-8 text-center">
            About <span className="text-blue-500">Me</span>
          </h1>
        </div>

        {/* Content Section */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between py-10 lg:gap-20 gap-8">
          <div className="lg:w-2/3 w-full text-center lg:text-left">
            <h3 className="font-semibold text-2xl pb-4 text-red-300">
              Hey! I'm Bikram Rai
            </h3>
            <p className="text-zinc-400 text-sm md:text-base">{ABOUT_TEXT}</p>
          </div>

          {/* Profile Picture */}
          <div className="flex justify-center lg:justify-end lg:ml-10">
            <img
              className="rounded-full shadow-lg w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64"
              src={profilePic}
              alt="Profile Picture"
            />
          </div>
        </div>

        {/* Technologies Section */}
        <div className="w-full">
          <Technologies />
        </div>
      </div>
    </Layout>
  );
}
