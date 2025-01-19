import React from "react";
import { PROJECTS } from "../utils/index.utils";
import Layout from "../Layout/Layout";

export default function Projects() {
  return (
    <Layout
    title="Bikram Rai - Projects"
    keyword="Bikram Rai Projects, Software Engineering Projects, Full-Stack Projects, MERN Stack Portfolio, React Projects, Node.js Applications"
    author="Bikram Rai"
    description="Explore the projects by Bikram Rai, a Full-Stack Software Engineer specializing in MERN stack development. View web applications, backend systems, and innovative solutions that showcase his expertise."
  >
  
      <div className="border-b border-neutral-900 pb-20 pt-24">
        {/* <h2 className="py-10 text-center text-3xl">Projects</h2> */}
        <div className="flex flex-wrap gap-6 justify-center ">
          {PROJECTS.map((proj, index) => (
            <div
              key={index}
              className="bg-neutral-800 rounded-lg shadow-md overflow-hidden w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1rem)] "
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{proj.title}</h3>
                <p className="text-sm text-neutral-400 mb-3">
                  {proj.description.length > 50
                    ? `${proj.description.slice(0, 150)}...`
                    : proj.description}
                </p>

                <div className="flex flex-wrap mb-3">
                  {proj.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="mr-2 mb-2 rounded bg-purple-900 px-2 py-1 text-xs font-medium text-neutral-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                  >
                    Live Demo
                  </a>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs bg-gray-700 text-white px-2 py-1 rounded hover:bg-gray-800"
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
