import { FaArrowRight } from "react-icons/fa6";
import React, { useRef, useEffect } from "react";
import Cities from "./Cities";
import starGreen from "../assets/images/starGreen.svg";
import "../index.css";

const ShowCity = ({ activeIndex, setActiveIndex }) => {
  const scrollRef = useRef(null);
  const extendedCities = [...Cities, ...Cities, ...Cities];

  const scrollToIndex = (index) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const card = container.children[index];

    if (card) {
      const containerWidth = container.offsetWidth;
      const cardWidth = card.offsetWidth;
      const cardLeft = card.offsetLeft;

      container.scrollTo({
        left: cardLeft - containerWidth / 2 + cardWidth / 2,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    const nextIndex = (activeIndex + 1) % Cities.length;
    setActiveIndex(nextIndex);
    const extendedIndex = nextIndex + Cities.length;
    scrollToIndex(extendedIndex);
  };

  const scrollLeft = () => {
    const prevIndex = (activeIndex - 1 + Cities.length) % Cities.length;
    setActiveIndex(prevIndex);
    const extendedIndex = prevIndex + Cities.length;
    scrollToIndex(extendedIndex);
  };

  useEffect(() => {
    if (scrollRef.current) {
      const middle = Cities.length;
      scrollToIndex(middle);
    }
  }, []);

  return (
    <div className="w-full flex flex-col relative px-4 md:px-8">
      <div className="w-full flex justify-center gap-3 mb-4 items-center">
        <span
          onClick={scrollLeft}
          className="h-12 w-12 flex items-center justify-center bg-white rounded-full cursor-pointer shadow-md hover:scale-105 transition"
        >
          <FaArrowRight className="rotate-180 text-xl text-[#335c30]" />
        </span>
        <span
          onClick={scrollRight}
          className="h-12 w-12 flex items-center justify-center bg-white rounded-full cursor-pointer shadow-md hover:scale-105 transition"
        >
          <FaArrowRight className="text-[#335c30] text-xl" />
        </span>
      </div>
      <div
        id="showCity"
        ref={scrollRef}
        className="w-full flex gap-6 md:gap-12 items-center h-[410px]   md:h-[420px] overflow-x-auto whitespace-nowrap scroll-smooth  scrollbar-hide"
      >
        {extendedCities.map((elem, idx) => (
          <div
            key={idx}
            onClick={() => {
              const selectedIndex = idx % Cities.length;
              setActiveIndex(selectedIndex);
              const extendedIndex = selectedIndex + Cities.length;
              scrollToIndex(extendedIndex);
            }}
            className={`flex-shrink-0  rounded-xl flex flex-col justify-between border border-zinc-300/50 shadow-lg p-6 md:p-8 cursor-pointer transition-all duration-300
            ${activeIndex === idx % Cities.length ? "bg-zinc-200/30 " : "bg-transparent"}
            w-[90vw] sm:w-[400px] md:w-[500px] h-[280px] sm:h-[350px] md:h-[380px]`}
          >
            {/* Stars */}
            <span className="flex gap-1">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <img
                    key={i}
                    src={starGreen}
                    className="w-4 sm:w-5 drop-shadow-sm"
                    alt="star"
                  />
                ))}
            </span>

            <div className="flex flex-col gap-1 md:gap-4">
              <h1 className="text-[5vw] sm:text-[2rem] md:text-[3vw] font-bold">{elem.cityName}</h1>
              <p
                className="w-full text-sm sm:text-lg md:text-xl break-words"
                dangerouslySetInnerHTML={{
                  __html: elem.description
                    .split(" ")
                    .map((word, i) => (i + 1) % 5 === 0 ? word + "<br>" : word)
                    .join(" "),
                }}
              />
            </div>

            <div className="border-t border-white/30 w-full flex pt-2 md:pt-4 justify-between items-center text-sm sm:text-base">
              <h2 className="font-semibold">City Info</h2>
              <div className="flex items-center gap-2 font-medium">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
                  className="w-3 sm:w-4 h-3 sm:h-4"
                  alt="verified"
                />
                Verified
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowCity;
