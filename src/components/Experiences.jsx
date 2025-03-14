import React from "react";
import { EXPERIENCES } from "../utils/index.utils";
import Layout from "../Layout/Layout";

export default function Experiences() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Experience</h1>
      <div>
        {EXPERIENCES.map((expe, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{expe.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {expe.role} -{" "}
                <span className="text-purple-400">{expe.company}</span>
              </h6>
              <p className="mb-4 text-neutral-400 ">{expe.description}</p>
              {expe.technologies.map((tech, index) => (
                <sapna
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </sapna>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}
