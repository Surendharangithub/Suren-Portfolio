import React from "react";
import { Project } from "../constants/Projects";

function Projects() {
  return (
    <section className=" pt-14 md:py-10 w-full overflow-x-hidden" id="projects">
      <div className=" relative">
        <p className=" text-center text-4xl font-semibold font-Inter tracking-wide dark:text-white/60">
          My Projects
        </p>
        <div className="  h-2 absolute bottom-0 blur-md right-[50%] transform translate-x-1/2 bg-cyan-200 w-32"></div>
      </div>
      <div className=" mt-20 w-full  h-fit px-10 columns-1 grid md:grid-cols-2 lg:grid-cols-3 mb-2 gap-10">
        {Project.map((proj) => (
          <div
            className=" w-full h-fit hover:-translate-y-2 translate-y-0 transition-all delay-100   bg-slate-200 px-4 py-2 rounded-md border-cyan-200 border shadow-lg dark:bg-slate-800 dark:shadow-cyan-200"
            key={proj.id}
          >
            <div className=" flex flex-col">
              <div className=" my-2 w-full h-44">
                <img src={proj.projimage} alt="projectImages" className=" w-full h-44 rounded-lg  bg-cover" />
              </div>
              <p className=" mt-2 text-left font-semibold font-Inter mb-5 dark:text-white">
                {proj.name}
              </p>
              <p className=" text-slate-800 dark:text-gray-300 font-Inter line-clamp-3">
                {proj.desc}
              </p>
              <div className=" flex items-end mt-5 gap-2 font-Poppins">
                <a
                  className=" w-1/2 bg-[#1a73e8] text-center  text-white/70 border-transparent rounded-md px-4 py-2 focus:ring-4"
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href={proj.code}
                  target="_blank"
                  rel="noreferrer"
                  className=" w-1/2 border bg-gray-200 dark:bg-transparent focus:ring-gray-200 focus:ring-4  text-center px-4 py-2 dark:text-white/70  border-gray-300 rounded-md"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
