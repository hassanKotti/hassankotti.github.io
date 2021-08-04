import React from "react";
import hk from "../assets/svg/svg.svg";
import HireMe from "./HireMe"

const Hero = () => {
  return (
    <div className="hero">
      <div className="relative flex flex-col items-center justify-center py-24 lg:flex-row-reverse lg:my-10 lg:justify-around lg:items-center bg-gradient-to-b from-gray-50 to-transparent dark:from-gray-900">
        <div className="flex justify-center mt-6 lg:inline-block">
          <img src={hk} alt="" className="w-48 h-auto lg:w-96 lg:h-auto" />
        </div>
        <div className="flex flex-col items-start justify-center mt-8 lg:justify-around">
          <span className="font-mono text-3xl font-black text-center text-gray-700 lg:text-5xl lg:text-left dark:text-gray-200">
            Hi, I am Hassan. <br></br>I build Web <br></br>& Mobile apps
          </span>
          <HireMe mailto="mailto:hkotti95@gmail.com?subject=hey" />
        </div>
      </div>
      <span className="flex justify-center w-full py-3">
        <svg
          class="w-6 h-6 text-gray-600 dark:text-gray-400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.52 8.46L12 16.95l8.48-8.48-1.41-1.42L12 14.12 4.93 7.05 3.52 8.47z"
            fill="currentColor"
          />
        </svg>
      </span>
    </div>
  );
};

export default Hero;
