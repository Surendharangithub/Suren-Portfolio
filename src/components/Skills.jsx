import React from "react";

function Skills() {
  return (
    <div
      className=" text-slate-900 relative dark:text-white/80  w-full max-w-7xl  mx-auto  z-10 pt-14 md:py-28 overflow-x-hidden overflow-y-hidden"
      id="skills"
    >
      <div className=" text-center text-4xl font-bold font-Inter tracking-wider relative dark:text-white/60">
        Skills
        <div className="  h-2 absolute bottom-0 blur-md right-[50%] transform translate-x-1/2 bg-cyan-200 w-32"></div>
      </div>
      <div className=" flex flex-col md:flex-row w-full gap-5 mt-10">
        <div className=" md:w-1/2 px-4 py-2 w-full">
          
                <img src="./Suren-Portfolio//icons/skillsimage.svg"/>
          
        </div>
        <div className=" w-full md:w-1/2 grid grid-cols-2  md:grid-cols-3 gap-5 lg:grid-cols-5  mb-10 px-4 md:py-20">
          <div className="px-1 py-11 md:py-5 md:w-24 md:h-24 flex justify-center rounded-lg w-full shadow-md hover:scale-110 transition-all duration-200 border border-indigo-300 hover:shadow-lg ">
            <img src="./Suren-Portfolio//icons/html.svg" className="" width={40} height={40} alt="html" />
          </div>
          <div className=" px-1 py-11 md:py-5 md:w-24  md:h-24 w-full flex justify-center rounded-lg shadow-md bg-transparent md:translate-y-8 translate-y-0 hover:scale-110 transition-all duration-200  border border-indigo-300 hover:shadow-lg">
            <img src="./Suren-Portfolio//icons/css.svg" className="" width={40} alt="css" />
          </div>
          <div className="px-1 py-11 md:py-5 md:w-24  md:h-24 flex justify-center rounded-lg w-full shadow-md hover:scale-110 transition-all duration-200 border border-indigo-300 hover:shadow-lg ">
            <img src="./Suren-Portfolio//icons/js.svg" className="" width={40} alt="js" />
          </div>
          <div className=" px-1 py-11 md:py-5 md:w-24  md:h-24 w-full flex justify-center rounded-lg shadow-md bg-transparent md:translate-y-8 translate-y-0 hover:scale-110 transition-all duration-200  border border-indigo-300 hover:shadow-lg">
            <img src="./Suren-Portfolio//icons/react.svg" className="" width={40} alt="react" />
          </div>
          <div className="px-1 py-11 md:py-5 md:w-24 md:mt-7  md:h-24 flex justify-center rounded-lg w-full shadow-md hover:scale-110 transition-all duration-200 border border-indigo-300 hover:shadow-lg ">
            <img
              src="./Suren-Portfolio//icons/tailwind.svg"
              className=""
              width={40}
              alt="tailwind"
            />
          </div>
          <div className="px-1 py-11 md:py-5 md:w-24 md:mt-7  md:h-24 flex justify-center rounded-lg w-full shadow-md hover:scale-110 transition-all duration-200 border border-indigo-300 hover:shadow-lg ">
            <img
              src="./Suren-Portfolio//icons/bootstrap.svg"
              className=""
              width={40}
              alt="bootstrap"
            />
          </div>
          <div className=" px-1 py-11 md:py-5 md:w-24  md:h-24 w-full flex justify-center rounded-lg shadow-md bg-transparent md:translate-y-8 translate-y-0 hover:scale-110 transition-all duration-200 border  border-indigo-300 hover:shadow-lg">
            <img src="./Suren-Portfolio//icons/node.svg" className="" width={40} alt="node" />
          </div>
          <div className="px-1 py-11 md:py-5 md:w-24 flex  md:h-24 justify-center rounded-lg w-full shadow-md hover:scale-110 transition-all duration-200 border border-indigo-300 hover:shadow-lg ">
            <img
              src="./Suren-Portfolio//icons/postman.svg"
              className=""
              width={40}
              alt="postman"
            />
          </div>
          <div className=" px-1 py-11 md:py-5  md:w-24 w-full  md:h-24 flex justify-center rounded-lg shadow-md bg-transparent md:translate-y-8 translate-y-0 hover:scale-110 transition-all duration-200  border border-indigo-300 hover:shadow-lg">
            <img
              src="./Suren-Portfolio//icons/mongodb.svg"
              className=""
              width={40}
              alt="mongodb"
            />
          </div>
          <div className="px-1 py-11 md:py-5 md:w-24 md:mt-8 flex  md:h-24 justify-center rounded-lg w-full shadow-md hover:scale-110 transition-all duration-200 border border-indigo-300 hover:shadow-lg ">
            <img src="./Suren-Portfolio//icons/sql.png" className="" alt="sql" width={40} />
          </div>
        </div>
      </div>

      <div className=" w-24 h-24 -z-10 absolute top-[50%] transition-colors duration-300  rounded-full rotate-45 bg-red-200 -translate-y-1/2 right-[30%] animate-bounce shadow-2xl blur-3xl"></div>
      <div className=" w-24 h-24 -z-10 absolute delay-150 top-[50%] transition-colors duration-300  rounded-full rotate-45 bg-cyan-200 mix-blend-normal -translate-y-1/2 left-[30%] animate-bounce shadow-2xl blur-3xl"></div>
    </div>
  );
}

export default Skills;
