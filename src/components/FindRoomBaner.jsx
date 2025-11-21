
import React from "react";
import banner from "../assets/images/baner.jpg";

const FindRoomBanner = () => {
  return (
    <section className="relative max-xl:flex-col w-full px-4 md:px-16  max-sm:h-auto max-sm:gap-15   h-screen flex flex-col max-sm:justify-around md:flex-row">
      {/* Left Content */}
      <div className="md:w-1/2 flex flex-col justify-center items-start gap-6 mt-6 md:mt-0">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-gray-900">
          Find your room for <br />
          your <span className="text-[#bc3f31]">ability</span>
        </h1>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-md">
          Work from anywhere in the world from beautiful homes with amazing hosts.
        </p>
        <button className="outline-none bg-[#00786f] hover:bg-[#167769] transition-all text-white rounded-lg text-base sm:text-lg md:text-xl py-3 px-6 md:px-8 shadow-lg">
          Explore Places
        </button>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center items-center relative mt-6 md:mt-0">
 <div className=" w-[95%]  sm:w-[80%]  md:w-full  h-56  sm:h-72  md:h-[400px]  xl:h-[600px]  rounded-md overflow-hidden shadow-2xl">
          <img
            src={banner}
            alt="Room Banner"
            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default FindRoomBanner;
