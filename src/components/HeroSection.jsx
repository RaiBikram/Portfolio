import React from "react";
import { HERO_CONTENT } from "../utils/index.utils";
import profilePic from "../media/bikram.jpeg";
import Layout from "../Layout/Layout";

export default function HeroSection() {
  return (
    <Layout
      title="Bikram Rai - Software Engineer"
      keyword="Bikram Rai, Software Engineer, MERN Stack Developer, Backend Developer, Web Developer, JavaScript, Node.js, React.js, Portfolio"
      author="Bikram Rai"
      description="Hi, I'm Bikram Rai, a passionate Software Engineer. I specialize in building dynamic and responsive web applications using the MERN stack and other modern technologies."
    >
      <div className="border-b border-neutral-900 pb-10 px-6 min-h-screen flex items-center w-full">
        <div className="flex flex-col-reverse lg:flex-row  justify-between gap-10 w-full">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
            <h1 className="text-4xl font-semibold tracking-tight text-red-400">
              Hi,{" "}
              <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent">
                I'm Bikram Rai
              </span>
            </h1>

            <h2 className="text-xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent">
              MERN Stack Developer | Software Engineer
            </h2>

            <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto lg:mx-0">
              {HERO_CONTENT}
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={profilePic}
              alt="Profile Picture"
              className="rounded-full shadow-lg w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
