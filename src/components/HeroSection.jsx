/** @format */
import React from "react";
import { IoArrowForwardSharp } from "react-icons/io5";
import premiumHome from "../assets/images/hero.png";

const HeroSection = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row md:items-center w-full">
      {/* LEFT TEXT SECTION */}
      <div className="px-[6vw] py-[8vw] md:px-[4vw] gap-[3vw] md:py-0 flex flex-col justify-center w-full md:w-[45%] text-center md:text-left">
        <h1 className="font-[HelveticaBold] text-[5.5vw] sm:text-[6vw] md:text-[5vw]  leading-tight  mb-4">
          Welcome to <span className="text-[#cc312b]">Rentalog</span>
        </h1>

        <p className="text-gray-700 text-[4vw] sm:text-[3vw] md:text-[1.2vw] leading-relaxed mb-6">
          {/* Rentalog is the ultimate solution for landlords looking to simplify
          their rent management process. Keep track of your renters' personal
          details, payment history, and much more — all in one place. */}
          Manage your rentals smarter with Rentalog — track tenants, payments,
          and properties effortlessly. Say goodbye to messy spreadsheets and
          hello to simple, stress-free rent management.
        </p>

        <div className="flex justify-center md:justify-start">
          <button className="flex items-center outline-none gap-2 bg-teal-600 text-white w-fit px-8 py-4 rounded-xl text-[4vw] sm:text-[2.5vw] md:text-[1vw] font-medium shadow-md hover:shadow-xl hover:bg-teal-700 active:scale-95 transition-all duration-300">
            Get Started <IoArrowForwardSharp className="text-[1.3em]" />
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE SECTION */}
      <div className="w-full md:w-[55%] flex items-center justify-center">
        <img
          src={premiumHome}
          className="w-full h-auto object-cover md:h-screen"
          alt="Hero"
        />
      </div>
    </div>
  );
};

export default HeroSection;
