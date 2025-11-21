/** @format */

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import agra from "../assets/images/agra.jpg";
import banglore from "../assets/images/banglore.jpg";
import chennai from "../assets/images/chennai.jpg";
import delhi from "../assets/images/delhi.png";

const cards = [
  {
    title: "Agra",
    img: agra,
    desc: "Where timeless Mughal architecture meets vibrant culture, crowned by the iconic Taj Mahal.",
  },
  {
    title: "Bangalore",
    img: banglore,
    desc: "India’s tech powerhouse blending cool weather, startup dreams, and lively cosmopolitan energy.",
  },
  {
    title: "Chennai",
    img: chennai,
    desc: "A coastal city known for temples, classical music, filter coffee, and warm cultural pride.",
  },
  {
    title: "Delhi",
    img: delhi,
    desc: "Historic capital brimming with monuments, markets, diverse food, and unforgettable cultural experiences.",
  },
];

const ServiceAvailable = () => {
  const [cardsToShow, setCardsToShow] = useState(3);
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % cards.length);
  const prev = () => setIndex((i) => (i - 1 + cards.length) % cards.length);

  const formatDescription = (text) => {
    const words = text.split(" ");
    const lines = [];

    for (let i = 0; i < words.length; i += 6) {
      lines.push(words.slice(i, i + 6).join(" "));
    }
    return lines;
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleCards = [];
  for (let i = 0; i < cardsToShow; i++) {
    visibleCards.push(cards[(index + i) % cards.length]);
  }

  return (
    <div className="w-full min-h-[130vh] flex justify-center flex-col items-center">
      <div className="w-full h-32 sm:h-40 md:h-48  flex justify-center items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          Services Available
        </h1>
      </div>

      <div className="w-full h-screen relative">
        <div className="absolute inset-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={cards[index].img}
              src={cards[index].img}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full h-full object-cover absolute inset-0"
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent"></div>
        </div>

        <div
          className=" relative z-10 w-full h-full  flex flex-col lg:flex-row  py-10 sm:py-12 lg:py-16  max-sm:justify-between px-6 sm:px-10 md:px-14 lg:px-20 
          "
        >
          <div className="w-full lg:w-1/2 text-white space-y-4 sm:space-y-6 mb-10 lg:mb-0">
            <motion.h1
              key={cards[index].title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight"
            >
              {cards[index].title}
            </motion.h1>

            <div className="opacity-90 text-base sm:text-lg space-y-1">
              {formatDescription(cards[index].desc).map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  {line}
                </motion.p>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-end items-center space-y-6">
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">
              {visibleCards.map((item, i) => (
                <motion.div
                  key={i}
                  className="w-32 sm:w-36 md:w-40 h-48 sm:h-52 md:h-56 rounded-xl overflow-hidden shadow-lg"
                >
                  <img src={item.img} className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>

            <div className="flex items-center space-x-4 sm:space-x-6 mt-6">
              <button
                onClick={prev}
                className="w-9 h-9 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-md rounded-full text-white text-xl flex items-center justify-center"
              >
                <MdKeyboardArrowLeft />
              </button>

              <button
                onClick={next}
                className="w-9 h-9 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-md rounded-full text-white text-xl flex items-center justify-center"
              >
                <MdKeyboardArrowRight />
              </button>

              <span className="text-white tracking-widest text-base sm:text-lg">
                {String(index + 1).padStart(2, "0")} — {cards.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAvailable;
