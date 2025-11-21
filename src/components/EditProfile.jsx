/** @format */

import { FiEdit2 } from "react-icons/fi";
import banglore from "../assets/images/banglore.jpg";
import React, { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useForm } from "react-hook-form";

export default function EditProfile() {
  const { register, handleSubmit, setValue } = useForm();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Select Gender");
  const dropdownRef = useRef();

  const options = ["Female", "Male", "Other"];

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const onSubmit = (data) => {
    console.log({ ...data, gender: selected });
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-4 md:p-8 w-full w-full md:max-w-2xl">
        <div className="flex flex-col items-center mb-8 relative">
          <img
            src={banglore}
            alt="profile"
            className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover"
          />
          <div className="absolute bottom-2 right-1/3 md:right-[42%] bg-green-700 text-white p-2 rounded-full cursor-pointer">
            <FiEdit2 size={16} />
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className=" w-full flex flex-row justify-between items-center gap-8 p-4">
            <div className="flex flex-col w-[50%] ">
              <label className="text-sm font-medium">First Name *</label>
              <input
                autoComplete="off"
                type="text"
                defaultValue="Leslie"
                {...register("firstName")}
                className="border border-gray-300 rounded-lg p-3 mt-1 outline-none focus:ring-2 focus:ring-green-700 w-full"
              />
            </div>

            <div className="flex flex-col ">
              <label className="text-sm font-medium">Last Name *</label>
              <input
                autoComplete="off"
                type="text"
                defaultValue="Cooper"
                {...register("lastName")}
                className="border border-gray-300 rounded-lg p-3 mt-1 outline-none focus:ring-2 focus:ring-green-700 w-full"
              />
            </div>
          </div>

          <div className="flex flex-col col-span-2">
            <label className="text-sm font-medium">Email *</label>
            <input
              autoComplete="off"
              type="email"
              placeholder="example@gmail.com"
              {...register("email")}
              className="border border-gray-300 rounded-lg p-3 mt-1 outline-none focus:ring-2 focus:ring-green-700"
            />
          </div>

          <div className="flex flex-col col-span-2">
            <label className="text-sm font-medium">Phone *</label>
            <input
              autoComplete="off"
              type="text"
              placeholder="+0123-456-789"
              {...register("phone")}
              className="border border-gray-300 rounded-lg p-3 mt-1 outline-none focus:ring-2 focus:ring-green-700"
            />
          </div>

          <div className="flex flex-col col-span-2" ref={dropdownRef}>
            <label className="text-sm font-medium mb-1">Gender *</label>

            <div
              className="border border-gray-300 rounded-lg p-3 flex justify-between items-center cursor-pointer hover:border-green-700 transition"
              onClick={() => setOpen(!open)}
            >
              <span className="text-gray-700">{selected}</span>
              <FiChevronDown
                className={`transition-transform duration-200 ${
                  open ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>

            {open && (
              <ul className="mt-2 border border-gray-300 rounded-lg bg-white shadow-md">
                {options.map((item) => (
                  <li
                    key={item}
                    className="p-3 cursor-pointer hover:bg-green-100"
                    onClick={() => {
                      setSelected(item);
                      setValue("gender", item);
                      setOpen(false);
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </form>

        <div className="mt-8 flex justify-center">
          <button
            onClick={handleSubmit(onSubmit)}
            className="bg-green-800 text-white px-6 py-3 rounded-full hover:bg-green-900 transition"
          >
            Update Changes
          </button>
        </div>
      </div>
    </div>
  );
}
