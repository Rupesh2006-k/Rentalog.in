import React from "react";
import { IoArrowForwardSharp } from "react-icons/io5";
import hero1 from "../assets/images/hero1.png";
import hero2 from "../assets/images/hero2.jpg";
import hero3 from "../assets/images/hero3.jpg";
import hero4 from "../assets/images/hero4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const HeroSection = () => {
  return (
    <div className="min-h-screen max-sm:px-2 px-10 flex flex-col md:flex-row md:items-center w-full overflow-hidden">
      {/* LEFT TEXT SECTION */}
      <div className="px-[6vw] py-[10vw] md:px-[4vw] md:py-0 flex flex-col justify-center gap-[3vw] w-full md:w-[45%] text-center md:text-left">
        <h1 className="font-[HelveticaBold] text-[8vw] sm:text-[6vw] md:text-[4vw] leading-tight mb-4">
          Welcome to <span className="text-[#cc312b]">Rentalog</span>
        </h1>

        <p className="text-gray-700 text-[4vw] sm:text-[3vw] md:text-[1.2vw] leading-relaxed mb-6 max-w-[600px] mx-auto md:mx-0">
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
      <div className="w-full md:w-[55%] flex items-center justify-center p-4 md:p-0">
        <div className="w-full  max-w-[600px] md:max-w-none h-[60vh] sm:h-[70vh] md:h-[60%] lg:h-[85vh] rounded-xl overflow-hidden ">
          <Swiper
            spaceBetween={30}
            effect="fade"
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            modules={[EffectFade, Pagination, Autoplay]}  
            className="w-full h-full"
          >
            {[hero1, hero2, hero3, hero4].map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt={`Slide ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;