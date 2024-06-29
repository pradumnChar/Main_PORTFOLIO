import React from "react";
import { data } from "../data/data.js";
function Projects() {
  const project = data;

  return (
    <div name="project"
    className="pb-5 w-full h-full md:h-screen text-black-300">
      <div className="max-w-[1000px] mx-auto p-10 flex flex-col justify-center w-full h-full">
        <div className="pb-10">
          <p className="text-4xl font-bold inline border-b-4 text-black-500 border-[#444cf7]">
            Work
          </p>
          <p className="py-4">Check Out My Projects..</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {project.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "130px auto",
              }}
              className="shadow-md shadow-[#444cf7] group container rounded-md 
              flex justify-center text-center  mx-auto content-div p-3 "
            >
              <div className="opacity-0 group-hover:opacity-95 ">
                <span className=" text-1xl font bolder text-black ">
                  {item.name}
                </span>
                <div className="pt-10 text-center ">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-900 font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href={item.live} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
