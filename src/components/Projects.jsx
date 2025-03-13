import React from "react";
import { PROJECTS } from "../utils/index.utils";
import Layout from "../Layout/Layout";

export default function Projects() {
  return (
    <Layout
      title="Bikram Rai | Projects"
      keyword="Bikram Rai Projects, Software Engineering Projects, Full-Stack Projects, MERN Stack Portfolio, React Projects, Node.js Applications"
      author="Bikram Rai"
      description="Explore the projects by Bikram Rai, a Full-Stack Software Engineer specializing in MERN stack development. View web applications, backend systems, and innovative solutions that showcase his expertise."
    >
      <div className="border-b border-neutral-900 pb-20 pt-14">
        <h2 className="text-center text-2xl sm:text-3xl">
          My Recent <span className="font-semibold text-blue-500">Work</span>
        </h2>
        <p className="text-slate-300 pb-10 sm:pb-16 text-center font-extralight text-xs sm:text-sm pt-3">
          Here are a few projects I've worked on recently.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-6">
          {PROJECTS.map((proj, index) => (
            <div
              key={index}
              className="bg-neutral-800 rounded-lg shadow-md overflow-hidden flex flex-col h-full transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-medium mb-2">{proj.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-400 mb-3 flex-grow">
                  {proj.description.length > 120
                    ? `${proj.description.slice(0, 120)}...`
                    : proj.description}
                </p>
                
                <div className="flex flex-wrap mb-3">
                  {proj.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="mr-1 mb-1 rounded bg-purple-900 px-2 py-0.5 text-xs font-medium text-neutral-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between mt-auto pt-2">
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition-colors duration-200 flex items-center justify-center"
                  >
                    Live Demo
                  </a>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}