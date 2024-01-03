import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll"

function Home() {

  const [dark, setDark] = useState(false);
  const [theme, setTheme] = useState("dark");
  const darkHandler = () => {
    setDark((prev) => !prev);
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <motion.section className="relative w-full overflow-x-hidden" id="home">
      <div className=" flex justify-center items-center flex-col w-full max-w-7xl mx-auto">
        <div className=" w-full  flex justify-between px-10 py-5 ">
          <p className=" font-Inter text-2xl font-bold dark:text-white">
            <span className="bg-gradient-to-r font-Poppins from-cyan-950 to-cyan-400 bg-clip-text text-transparent ">
              Suren's Portfolio
            </span>
          
          </p>
          <button onClick={darkHandler} className=" cursor-pointer">
            {dark ? (
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 dark:text-white"
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </motion.svg>
            ) : (
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 dark:text-white"
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </motion.svg>
            )}
          </button>
        </div>
        <div className="w-full  my-auto md:my-40 mt-10 md:px-5">
          <div className=" flex flex-col sm:flex-row w-full gap-10">
            <div className=" w-full  lg:w-1/2 px-10 flex justify-center items-center relative z-10">
              <img
                src="./Suren-Portfolio/images/profile.jpeg"
                alt="avatar"
                className=" rounded-full w-[400px] h-[400px]  border-collapse p-1 border-teal-300 border-e-2"
              />
              <div className="w-[200px] h-[200px] bg-red-300 absolute top-0 left-[90px] -z-10 blur-3xl drop-shadow-lg shadow-red-400 rounded-full"></div>
              <div className="w-[200px] h-[200px] bg-teal-300 absolute bottom-0 right-[90px] -z-10 blur-3xl drop-shadow-lg shadow-teal-400 rounded-full"></div>
            </div>
            <div className=" z-10 w-full lg:w-1/2 px-10 flex justify-center items-center relative">
              <div className=" flex flex-col gap-4 justify-center items-center md:justify-start md:items-start max-sm:mt-5 text-center md:text-left">
                <p className=" dark:text-white/60 text-center md:text-left text-2xl md:text-3xl xl:text-7xl flex  sm:text-7xl bg-transparent dark:bg-black dark:text-white font-Poppins font-bold dark:bg-transparent">
                  I am Surendharan
                </p>
                <p className=" text-gray-600 text-2xl font-Poppins">
                  Full Stack Developer
                </p>
                <div className=" mt-5 flex gap-4 max-md:justify-center justify-start max-md:items-center">
                  <a
                    href="https://github.com/Surendharangithub"
                    target="_blank"
                    rel="noreferrer"
                    className=" px-2 py-2 border-2 border-slate-500 border-dashed rounded-full cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="35"
                      height="35"
                      viewBox="0 0 50 50"
                    >
                      <path
                        fill="rgb(71 85 105)"
                        d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/surendharan/"
                    target="_blank"
                    rel="noreferrer"
                    className=" px-2 py-2 border-2 border-slate-500 border-dashed rounded-full cursor-pointer text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="35"
                      height="35"
                      viewBox="0 0 50 50"
                    >
                      <path
                        fill=" rgb(71 85 105)"
                        d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/its_suren_/"
                    target="_blank"
                    rel="noreferrer"
                    className=" px-2 py-2 border-2 border-slate-500 border-dashed rounded-full cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="35"
                      height="35"
                      viewBox="0 0 50 50"
                    >
                      <path
                        fill=" rgb(71 85 105)"
                        d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="text-stroke text-4xl transition-all delay-100 max-md:text-8xl -z-10 blur-[1px] max-md:hidden">
          Web Developer
        </p>
      </div>
    </motion.section>
  );
}

export default Home;
