import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { RiCopyrightLine, RiTwitterLine } from "react-icons/ri";
import { BsLinkedin} from "react-icons/bs";
import logo from "../assets/logos/logo.png";
import { RiTwitterXFill } from "react-icons/ri";
const Footer = () => {
  const animatedLink = "relative inline-block after:block after:h-[2px] after:w-0 after:bg-gray-900 after:transition-all after:duration-300 after:mt-1 hover:after:w-full";

  return (
    <footer className="border-t border-zinc-100 px-4 text-gray-900">
      <div className="max-w-7xl mx-auto py-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-5">
          <img src={logo} alt="Logo" className="w-32" />
          <p>Let's connect with our socials</p>
          <div className="flex flex-wrap gap-4 text-2xl">
            <IoLogoInstagram className="hover:text-pink-600 transition-colors cursor-pointer" />
            <BsLinkedin className="hover:text-blue-700 transition-colors cursor-pointer" />
            <RiTwitterXFill  className=" transition-colors cursor-pointer" />
          </div>
        </div>

        <div>
          <h1 className="font-bold text-lg mb-4">Company</h1>
          <ul className="space-y-2">
            <li className="cursor-pointer"><span className={animatedLink}>About Us</span></li>
            <li className="cursor-pointer"><span className={animatedLink}>Support</span></li>
            <li className="cursor-pointer"><span className={animatedLink}>Privacy Policy</span></li>
            <li className="cursor-pointer"><span className={animatedLink}>Terms and Condition</span></li>
            <li className="cursor-pointer"><span className={animatedLink}>Pricing and Refund</span></li>
            <li className="cursor-pointer"><span className={animatedLink}>Rent Out Room</span></li>
          </ul>
        </div>

        <div>
          <h1 className="font-bold text-lg mb-4">Service</h1>
          <ul className="space-y-2">
            <li><span className={animatedLink}>Property Listing</span></li>
            <li><span className={animatedLink}>Track Payment</span></li>
            <li><span className={animatedLink}>Records</span></li>
            <li><span className={animatedLink}>Rent Calculation</span></li>
          </ul>
        </div>

        <div>
          <h1 className="font-bold text-lg mb-4">Get In Touch</h1>
          <ul className="space-y-2">
            <li>Rupesh@gmail.com</li>
            <li>Gaurav@gmail.com</li>
            <li>rental@rental.in</li>
            <li>Bhopal (MP)</li>
          </ul>
        </div>
      </div>

      <div className="py-6 text-center text-sm border-t border-zinc-100 flex flex-col md:flex-row justify-center items-center gap-2">
        <h1 className="flex justify-center   items-center gap-1">
          Copyright <RiCopyrightLine />| 2025 | The Virtual World Maker | 
        </h1>
        
        <h1>All Rights Reserved.</h1>
      </div>
    </footer>
  );
};

export default Footer;
