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
      <div className="border-b border-neutral-900 pb-10 flex flex-col px-6 min-h-screen">
        <div className="flex flex-wrap items-start justify-start pt-5">
          <div className="w-full lg:w-1/2">
            <h1 className="pb-16 text-4xl font-normal tracking-tight lg:mt-16 lg:text-4xl text-red-400 pt-3">
              Hi,{" "}
              <span className="font-semibold bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent">
                I'm Bikram Rai
              </span>
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent pt-3">
              Full Stack Developer
            </span>
            <div className="flex flex-wrap items-start justify-start pt-5">
              <p className="my-2 max-w-xl py-6 text-zinc-400 text-sm md:text-base">
                {HERO_CONTENT} <br />
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:p-16 p-20">
            <div className="flex justify-center">
              <img
                className="rounded-full"
                src={profilePic}
                alt="Profile Picture"
                width={250}
                height={250}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
