import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import about1 from "../assets/images/about-1.svg";
import about2 from "../assets/images/about-2.jpg";
import about3 from "../assets/images/about-3.jpg";
import about4 from "../assets/images/about-4.jpg";

const AboutCardItem = ({ item, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.2 1", "0.8 0"], 
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`flex flex-col ${
        index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
      } justify-between  items-center gap-10 max-sm:p-1  shadow rounded-xl overflow-hidden md:p-10`}
    >
      {/* Image */}
      <motion.img
        src={item.img}
        alt={item.title}
        className="w-full md:w-1/2 h-[30vh] md:h-[45vh] object-cover rounded-xl shadow-md hover:scale-101 transition-transform duration-300"
        whileHover={{ scale: 1.01 }}
      />

      {/* Text Section */}
      <div className="md:w-1/2 max-sm:p-1 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-extrabold  mb-4 leading-snug">
          {item.title}
        </h2>
        <p className=" text-base md:text-lg leading-relaxed">
          {item.text}
        </p>
      </div>
    </motion.div>
  );
};

const AboutCard = () => {
  const aboutData = [
    {
      id: 1,
      title: "Simplified Rental Property Management",
      text: "Rentalog helps landlords easily manage rental properties with a clean, secure, and organized dashboard for tracking tenants, payments, and property details effortlessly.",
      img: about1,
    },
    {
      id: 2,
      title: "Efficient Tenant Management",
      text: "Quickly store and access tenant details like names, addresses, and payment history, making tenant tracking and management simple and stress-free.",
      img: about2,
    },
    {
      id: 3,
      title: "Rent Collection and Financial Tracking",
      text: "Easily track rent payments and monitor income trends with clear insights that help landlords make smarter financial decisions.",
      img: about3,
    },
    {
      id: 4,
      title: "User-Friendly Interface & Support",
      text: "Enjoy a clean, intuitive interface and reliable support team that ensure smooth navigation and quick help whenever needed.",
      img: about4,
    },
  ];

  return (
    <div className="w-full  md:px-10 space-y-16 py-10 max-sm:py-1 max-sm:space-y-2">
      {aboutData.map((item, index) => (
        <AboutCardItem key={item.id} item={item} index={index} />
      ))}
    </div>
  );
};

export default AboutCard;
