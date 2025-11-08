import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logos/logo.png";
import {
  IoMoonOutline,
  IoSunnyOutline,
  IoLanguageOutline,
} from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState(false);

  return (
    <nav
      className="h-[10vh] bg-[#5a5a5a2a] backdrop-blur-md  flex  px-[3vw]  items-center  justify-between  sticky  top-0  z-50">
      {/* Logo */}
      <img src={logo} className="h-[7vh] w-fit" alt="Logo" />

      {/* Links */}
      <div className="hidden lg:flex text-[1.3vw] items-center gap-[3vw] justify-between">
        <Link to="/" className="font-thin">Home</Link>
        <Link to="/rentals">Rentals</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <NavLink to="/login" className='bg-zinc-200 py-2 px-5 rounded-xl   text-[1.1vw] '>Login</NavLink>
        <button onClick={() => setTheme(!theme)} className="text-xl">
          {theme ? <IoMoonOutline /> : <IoSunnyOutline />}
        </button>
      </div>

      {/* Mobile menu icon */}
      <div className="lg:hidden text-2xl max-sm:text-[5vw] cursor-pointer">
        <CiMenuFries />
      </div>
    </nav>
  );
};

export default Navbar;
