/** @format */

import React from "react";
import SignupForm from "../components/SignupForm";

const SignUp = () => {
  return (
    <div>
<SignupForm/>
      <div className=" h-[20vh] text-gray-700 px-4 py-6 flex flex-col items-center space-y-4">
        <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
          <h3 className="hover:text-[#04a194] cursor-pointer">Home</h3>
          <h3 className="hover:text-[#04a194] cursor-pointer">About</h3>
          <h3 className="hover:text-[#04a194] cursor-pointer">Contact</h3>
          <h3 className="hover:text-[#04a194] cursor-pointer">Privacy</h3>
          <h3 className="hover:text-[#04a194] cursor-pointer">Terms</h3>
          <h3 className="hover:text-[#04a194] cursor-pointer">
            Developer Contact
          </h3>
          <h3 className="hover:text-[#04a194] cursor-pointer">Blog</h3>
          <h3 className="hover:text-[#04a194] cursor-pointer">English</h3>
        </div>

        {/* Copyright */}
        <h1 className="text-xs md:text-sm text-center text-gray-500">
          © 2025 Rentalog from The Virtual World Maker
        </h1>
      </div>
    </div>
  );
};

export default SignUp;
