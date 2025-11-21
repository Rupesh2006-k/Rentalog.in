// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import logo from "../assets/logos/logo.png";
// import { CiMenuFries } from "react-icons/ci";
// import { RxCross1 } from "react-icons/rx";
// import Menu from "../components/Menu";

// const Navbar = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   return (
//     <nav className="h-[10vh] bg-[#5a5a5a2a] backdrop-blur-md flex px-[3vw] items-center justify-between sticky top-0 z-50">
//       {/* Logo */}
//       <img src={logo} className="h-[7vh] w-fit" alt="Logo" />

//       {/* Desktop Links */}
//       <div className="hidden lg:flex text-[1.3vw] items-center gap-[3vw] justify-between">
//         <Link to="/" className="font-thin">Home</Link>
//         <Link to="/rentals">Rentals</Link>
//         <Link to="/about">About Us</Link>
//         <Link to="/contact">Contact</Link>
//         <NavLink to="/login" className="bg-[#00786f] text-white py-2 px-5 rounded-xl text-[1.1vw]">Login</NavLink>
        
//       </div>

//       {/* Mobile Menu Icon */}
//       <div className="lg:hidden relative text-2xl max-sm:text-[5vw] cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
//         {showMenu ? <RxCross1 /> : <CiMenuFries />}
//       </div>

//       {/* Mobile Menu Overlay */}
//       {showMenu && <Menu closeMenu={() => setShowMenu(false)} />}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logos/logo.png";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import Menu from "../components/Menu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="h-[10vh] bg-[#5a5a5a2a] backdrop-blur-md flex px-[3vw] items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <img src={logo} className="h-[7vh] w-fit" alt="Logo" />

      {/* Desktop Links */}
      <div className="hidden lg:flex text-[1.3vw] items-center gap-[3vw] justify-between">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "text-[#cc312b] font-thin" : "font-thin"}
        >
          Home
        </NavLink>
        <NavLink 
          to="/rentals" 
          className={({ isActive }) => isActive ? "text-[#cc312b]" : ""}
        >
          Rentals
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? "text-[#cc312b]" : ""}
        >
          About Us
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => isActive ? "text-[#cc312b]" : ""}
        >
          Contact
        </NavLink>
        <NavLink 
          to="/login" 
          className={({ isActive }) => 
            `py-2 px-5 rounded-xl text-[1.1vw] ${isActive ? 'bg-[#06a99e] text-white' : 'bg-[#00786f] text-white'}`
          }
        >
          Login
        </NavLink>
      </div>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden relative text-2xl max-sm:text-[5vw] cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? <RxCross1 /> : <CiMenuFries />}
      </div>

      {/* Mobile Menu Overlay */}
      {showMenu && <Menu closeMenu={() => setShowMenu(false)} />}
    </nav>
  );
};

export default Navbar;
