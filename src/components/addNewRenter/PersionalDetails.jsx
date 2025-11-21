/** @format */

import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const PersonalDetails = () => {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  // Watch gender value for display
  const selectedGender = watch("gender", "");

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form
        id="personalDetails"
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg bg-white shadow-2xl rounded-2xl p-8 space-y-6 border border-green-300"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Personal Details
        </h2>

        {/* Full Name */}
        <div className="relative">
          <input
            type="text"
            {...register("name", { required: true })}
            className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#04a194] peer"
            placeholder=" "
          />
          <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#04a194] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-105 peer-focus:-translate-y-4">
            Full Name *
          </label>
          {errors.name && (
            <p className="text-red-600 text-sm mt-1">Name is required</p>
          )}
        </div>

        {/* Gender */}
        <div className="relative">
          <div
            className="block w-full px-2.5 pb-2.5 pt-5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 peer focus-within:border-[#04a194]"
            tabIndex={0}
            onClick={() => setOpen((prev) => !prev)}
            onBlur={() => setTimeout(() => setOpen(false), 200)} // close dropdown on blur, with delay to allow option click
          >
            <div className="flex justify-between items-center cursor-pointer select-none">
              <span className={`${selectedGender ? "text-gray-900" : "text-gray-400"}`}>
                {selectedGender || "Select Gender"}
              </span>
              <motion.span
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                ▼
              </motion.span>
            </div>

            <AnimatePresence>
              {open && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 right-0 bg-white shadow-lg rounded-lg mt-2 z-20 border border-gray-200"
                >
                  {["Male", "Female", "Other"].map((g) => (
                    <li
                      key={g}
                      className="px-4 py-2 hover:bg-[#04a194] cursor-pointer"
                      onClick={() => {
                        setValue("gender", g, { shouldValidate: true });
                        setOpen(false);
                      }}
                    >
                      {g}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <input
            type="hidden"
            {...register("gender", { required: true })}
          />
          <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#04a194]">
            Gender *
          </label>
          {errors.gender && (
            <p className="text-red-600 text-sm mt-1">Gender is required</p>
          )}
        </div>

        {/* DOB */}
        <div className="relative">
          <input
            type="date"
            {...register("dob", { required: true })}
            className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-[#04a194] peer"
            placeholder=" "
          />
          <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#04a194] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-105 peer-focus:-translate-y-4">
            Date of Birth *
          </label>
          {errors.dob && (
            <p className="text-red-600 text-sm mt-1">Date of Birth is required</p>
          )}
        </div>

        {/* Mobile */}
        <div className="relative">
          <input
            type="tel"
            pattern="[0-9]{10}"
            {...register("mobile", {
              required: true,
              pattern: /^[0-9]{10}$/,
            })}
            className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-[#04a194] peer"
            placeholder=" "
          />
          <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#04a194] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-105 peer-focus:-translate-y-4">
            Mobile Number *
          </label>
          {errors.mobile && (
            <p className="text-red-600 text-sm mt-1">
              Mobile must be 10 digits
            </p>
          )}
        </div>

        {/* Email */}
        <div className="relative">
          <input
            type="email"
            {...register("email")}
            className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-[#04a194] peer"
            placeholder=" "
          />
          <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#04a194] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-105 peer-focus:-translate-y-4">
            Email (Optional)
          </label>
        </div>

        {/* Aadhaar */}
        <div className="relative">
          <input
            type="text"
            pattern="[2-9]{1}[0-9]{11}"
            {...register("aadhaar", {
              required: true,
              pattern: /^[2-9]{1}[0-9]{11}$/,
            })}
            className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-[#04a194] peer"
            placeholder=" "
          />
          <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#04a194] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-105 peer-focus:-translate-y-4">
            Aadhaar Number *
          </label>
          {errors.aadhaar && (
            <p className="text-red-600 text-sm mt-1">Invalid Aadhaar number</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-[#04a194] text-white py-3 rounded-xl font-semibold hover:bg-[#05aea0] transition-all shadow-md"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default PersonalDetails;
