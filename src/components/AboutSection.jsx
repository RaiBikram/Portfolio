import React from "react";
// import aboutImg from "../media/aboutpic.jpg";
import { ABOUT_TEXT } from "../utils/index.utils";
import Technologies from "./Technologies";
import profilePic from "../media/bikram.jpeg";
export default function AboutSection() {
  return (
    <div className="border-b border-neutral-900 pb-4 justify-center  flex flex-wrap">
      <div className=" justify-center items-center">
        <div className="my-2 max-w-5xl  py-24 text-red-300 w-full flex flex-wrap justify-between">
          <p className="w-2/3">
            {" "}
            <h3 className="justify-start flex lg:justify-start font-semibold text-4xl pb-6">
              Hey! I'm Bikram Rai and I'm a full stack engineer.
            </h3>
            {ABOUT_TEXT}
          </p>
          <div className="flex justify-between">
            <img
              className="rounded-full "
              src={profilePic}
              alt="Image Not Found"
              width={300}
              height={150}
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <Technologies />
      </div>
    </div>
  );
}
