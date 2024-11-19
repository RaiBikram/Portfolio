import React from "react";
import aboutImg from "../media/aboutpic.jpg";
import { ABOUT_TEXT } from "../utils/index.utils";

export default function AboutSection() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500">&nbsp; Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div
          // className="flex items-center justify-center"
          >
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-24 text-red-300 ">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
