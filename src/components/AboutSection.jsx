import React from "react";
// import aboutImg from "../media/aboutpic.jpg";
import { ABOUT_TEXT } from "../utils/index.utils";
import Technologies from "./Technologies";
import profilePic from "../media/bikram.jpeg";
import Layout from "../Layout/Layout";

export default function AboutSection() {
  return (
    <Layout
      title="Bikram Rai - About"
      keyword="Bikram Rai, Software Engineer, MERN Stack Developer, Software Engineer Portfolio, Backend Developer, Web Development, JavaScript Developer"
      author="Bikram Rai"
      description="Learn more about Bikram Rai, a passionate Software Engineer specializing in MERN stack development. Discover his skills, professional journey, and commitment to crafting impactful web solutions."
    >
      <div className="border-b border-neutral-900 pb-8 flex flex-col items-center">
        <div className="max-w-5xl w-full flex flex-col lg:flex-row items-center sm:text-start lg:items-start lg:justify-between py-16 px-6">
          {/* Text Section */}
          <div className="lg:w-2/3 w-full text-start lg:text-left ">
            <h3 className="font-semibold text-4xl pb-6 text-red-300 ">
              Hey! I'm Bikram Rai,
              <br /> and I'm a Full-Stack Engineer.
            </h3>
            <p className=" text-zinc-400 text-sm md:text-base sm:text-start">
              {ABOUT_TEXT}
            </p>
          </div>

          {/* Profile Picture */}
          <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
            <img
              className="rounded-full shadow-lg"
              src={profilePic}
              alt="Profile Picture"
              width={250}
              height={250}
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
