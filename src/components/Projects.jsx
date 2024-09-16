import React from "react";
import { PROJECTS } from "../utils/index.utils";

export default function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="py-20 text-center text-4xl">Projects</h2>
      <div>
        {PROJECTS.map((proj, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4 ">
              <img
                src={proj.image}
                alt={proj.title}
                width={150}
                height={150}
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <a className="mb-2 font-semibold" href={proj.link}>{proj.title}</a>
              
              <p className="mb-4 text-neutral-400">{proj.description}</p>
              {proj.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                >
                  {tech}
                </span>
              ))}
                
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
