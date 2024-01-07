import React from "react";

function About() {
  return (
    <div
      className=" relative w-full max-w-7xl   mx-auto mt-10"
      id="about"
    >
      <div className=" px-5 md:px-10">
        <div className=" relative">
          <h2 className=" text-center dark:text-white/80 mb-5 pt-2 text-4xl font-Poppins font-bold tracking-wider dark:text-white/85">
            About
          </h2>
          <div className="  h-2 absolute bottom-0 blur-md right-[50%] transform translate-x-1/2 bg-cyan-200 w-32"></div>
        </div>

        <div className="  mt-20 flex flex-col-reverse md:flex-row gap-1 w-full">
          <div className="w-full md:w-1/2 px-5">
            <div className=" w-full flex flex-col max-md:mt-20">
              <p className=" text-4xl font-bold font-Inter dark:text-white text-left">
                Hello, I'm Surendharan
              </p>
              <p className=" text-lg w-full max-w-md mt-8 font-Poppins text-gray-600 text-left mb-2 dark:text-gray-400">
                I'm Surendharan, an Electrical and Electronics Engineer turned
                web developer, passionate about weaving together technology and
                design for seamless online experiences.
              </p>
              <p aria-disabled={'true'} className=" text-lg text-gray-600  font-Poppins w-full max-w-md text-left dark:text-gray-400 mb-2">
                With a degree in Electrical and Electronics Engineering from
                Kongu Engineering College, my journey began in the world of
                circuits and signals. As I delved into the complexities of
                hardware, I discovered my fascination with the dynamic potential
                of software development. This led me to pivot into web
                development, where I found the perfect intersection of my
                technical roots and creative aspirations.
              </p>
            </div>
          </div>
          <div className=" w-full md:w-1/2 px-5 flex justify-center items-center mb-8`">
            <img
              src="./images/profile.jpeg"
              alt="photos"
              width={700}
              height={700}
              className=" rounded-tr-[100px] rounded-bl-[100px]  border-r-2 shadow-xl shadow-red-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
