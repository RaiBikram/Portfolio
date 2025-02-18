import { RiNextjsLine, RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { DiNodejs } from "react-icons/di";

import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { FaGitAlt, FaJava } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { FaUbuntu } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";

export default function Technologies() {
  return (
    <div className=" pb-24">
      <h2 className="my-20 text-center text-4xl font-semibold">
        Professional <span className="text-blue-800">Skillset</span>
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <IoLogoJavascript className="text-7xl text-yellow-500 " />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiNodejs s className="text-7xl  text-green-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-900 " />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400 " />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiTailwindCssFill className="text-7xl  text-blue-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaGitAlt className="text-7xl  text-red-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
        <RiNextjsLine className="text-7xl  text-white" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTypescript className="text-7xl  text-blue-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaJava className="text-7xl  text-red-400" />
        </div>
       
      </div>
      <h2 className="my-20 text-center text-4xl font-semibold">
        {" "}
        <span className="text-blue-800">Tools </span>i use
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <VscVscodeInsiders className="text-7xl  text-blue-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaUbuntu className="text-7xl text-green-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaDiscord className="text-7xl  text-blue-500" />
        </div>
      </div>
    </div>
  );
}
