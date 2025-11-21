/** @format */

import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { motion } from "motion/react";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { BiUser } from "react-icons/bi";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Rentals", path: "/rentals" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Login", path: "/login" },
  { name: "Profile", path: "/profile" },
];

const Menu = ({ closeMenu }) => {
  const [theme, setTheme] = useState(false);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { x: 40, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  return (
    <header className="w-full lg:hidden h-screen absolute top-[10vh] z-40 left-0 bg-white border-t border-gray-300">
      <motion.nav
        className="flex flex-col  items-start px-10 text-3xl gap-8 py-6 tracking-wide text-gray-800 font-semibold uppercase"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {menuItems.map((item) => (
          <motion.div key={item.name} variants={itemVariants}>
            <NavLink
              to={item.path}
              onClick={closeMenu}
              className="transition-all duration-300 hover:text-[#cd3129] hover:translate-x-2 block"
            >
              {item.name}
            </NavLink>
          </motion.div>
        ))}

        <motion.div
          className="flex items-center gap-6 text-3xl"
          variants={itemVariants}
        >
         <button
  onClick={() => setTheme(!theme)}
  className="flex items-center bg-[#ececec]  justify-center gap-2 p-4 rounded-full h-10 text-3xl  transition-colors duration-300  font-medium"
>
  {theme ? (
    <>
      <IoMoonOutline size={25} className="text-gray-800 text-lg" />
      <span>Dark</span>
    </>
  ) : (
    <>
      <IoSunnyOutline size={25} className="text-yellow-400 text-lg" />
      <span>Light</span>
    </>
  )}
</button>

        </motion.div>

        <motion.div
          className="w-full border border-zinc-400 my-4"
          variants={itemVariants}
        ></motion.div>
      </motion.nav>
    </header>
  );
};

export default Menu;
