/** @format */

import React from "react";

const AboutTopText = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center text-center text-black px-4 h-[80vh] md:h-[70vh] sm:h-[50vh] max-sm:h-[35vh]">
        <h1 className="text-[6vw] font-extrabold leading-[1.1] uppercase tracking-tight">
          ✳︎ FIND YOUR SPACE
        </h1>
        <span className="flex  flex-row-reverse">
          <h2 className="text-[6vw] font-bold ">&nbsp;&nbsp;LIVE YOUR LIFE</h2>
          <p className="text-[1.6vw] mt-12 max-sm:mt-4  sm:mt-12 leading-relaxed">
            We make renting simple, <br /> safe, and
            hassle-free&nbsp;&nbsp;&nbsp;
          </p>
        </span>

        <h2 className="text-[6vw] font-extrabold leading-[1.1] uppercase tracking-tight">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; From listing to <br />{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; moving in ✳︎
        </h2>
      </section>
      <div className="  w-full">
        <div className="text-[8vw] h-[50vh] max-sm:h-[20vh] max-md:h-[25vh] max-lg:h-[30vh] w-full leading-[7.5vw]">
          <h1>About </h1>
          <h1>Rentalog</h1>
        </div>
      </div>
    </>
  );
};

export default AboutTopText;
