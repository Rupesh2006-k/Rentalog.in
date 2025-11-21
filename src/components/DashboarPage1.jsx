import React from 'react'
import dashBoardBaner from "../assets/images/dashBoardBaner.jpg";

const DashboarPage1 = () => {
  return (
    <div className=" w-full ">
        <section className="relative  max-sm:mb-10 max-xl:flex-col w-full px-4 md:px-16  max-sm:h-auto max-sm:gap-15   h-screen flex flex-col max-sm:justify-around md:flex-row">
          {/* Left Content */}
          <div className="md:w-1/2 flex flex-col justify-center items-start gap-6 mt-6 md:mt-0">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-gray-900">
              Dashboard
            </h1>
            <p className="text-gray-700  text-3xl">
              Hello <span className="text-red-500"> User </span>, Welcome to
              your Dashboard
            </p>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center items-center relative mt-6 md:mt-0">
            <div className=" w-[95%]  sm:w-[80%]  md:w-full  h-56  sm:h-72  md:h-[400px]  xl:h-[600px]  rounded-md overflow-hidden shadow-2xl">
              <img
                src={dashBoardBaner}
                alt="Room Banner"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </section>
      </div>
  )
}

export default DashboarPage1