import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import {FaNodeJs } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
// import { motion,} from "framer-motion";

// const  iconVariants = (duration)=>({
//   initial:{y:-10},
//   animate:{
//     y:[10, -10],
//     transition:{
//       duration :duration,
//       ease:"linear", 
// repeat:Infinity, 
// repeatType:"reverse"
//     }
//   }
// })

export default function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div
        // variants={iconVariants(2.5)}
        // initial="initial"
        // animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400 " />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-900 " />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl  text-green-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaHtml5 className="text-7xl  text-yellow-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaCss3 className="text-7xl  text-blue-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaBootstrap className="text-7xl  text-blue-900" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiTailwindCssFill className="text-7xl  text-blue-500" />
        </div>
      </div>
    </div>
  );
}
