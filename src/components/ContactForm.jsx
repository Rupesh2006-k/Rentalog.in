/** @format */

import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // submit handler
  const onSubmit = (data) => {
    console.log("Form Submitted ✅", data);
    alert("Message Sent Successfully 🚀");
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full md:w-1/2 backdrop-blur-md p-8 rounded-2xl border border-gray-200/90 transition hover:shadow space-y-9"
    >
      {/* Full Name */}
      <div className="relative z-0 w-full group">
        <input
          type="text"
          {...register("name", { required: "Full name is required" })}
          id="name"
          className="block py-2.5 px-0 w-full text-sm sm:text-base text-gray-900 bg-transparent border-0 
              border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 
              focus:border-[#009689] peer"
          placeholder=" "
        />
        <label
          htmlFor="name"
          className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 
              top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 
              peer-placeholder-shown:translate-y-0 peer-focus:scale-105 peer-focus:-translate-y-6 
              peer-focus:text-[#009689]"
        >
          Full Name
        </label>
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="relative z-0 w-full group">
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email format",
            },
          })}
          id="email"
          className="block py-2.5 px-0 w-full text-sm sm:text-base text-gray-900 bg-transparent border-0 
              border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 
              focus:border-[#009689] peer"
          placeholder=" "
        />
        <label
          htmlFor="email"
          className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 
              top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 
              peer-placeholder-shown:translate-y-0 peer-focus:scale-105 peer-focus:-translate-y-6 
              peer-focus:text-[#009689]"
        >
          Email Address
        </label>
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div className="relative z-0 w-full group">
        <input
          type="tel"
          {...register("phone", {
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Phone must be 10 digits",
            },
          })}
          id="phone"
          className="block py-2.5 px-0 w-full text-sm sm:text-base text-gray-900 bg-transparent border-0 
              border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 
              focus:border-[#009689] peer"
          placeholder=" "
        />
        <label
          htmlFor="phone"
          className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 
              top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 
              peer-placeholder-shown:translate-y-0 peer-focus:scale-105 peer-focus:-translate-y-6 
              peer-focus:text-[#009689]"
        >
          Phone Number
        </label>
        {errors.phone && (
          <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
        )}
      </div>

      {/* Message */}
      <div className="relative z-0 w-full group">
        <textarea
          {...register("message", { required: "Message is required" })}
          id="message"
          rows="4"
          className="block py-2.5 px-0 w-full text-sm sm:text-base text-gray-900 bg-transparent border-0 
              border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 
              focus:border-[#009689] peer resize-none"
          placeholder=" "
        ></textarea>
        <label
          htmlFor="message"
          className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 
              top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 
              peer-placeholder-shown:translate-y-0 peer-focus:scale-105 peer-focus:-translate-y-6 
              peer-focus:text-[#009689]"
        >
          Message
        </label>
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="text-white bg-[#009689] hover:bg-[#04a194] focus:ring-4 
            focus:outline-none focus:ring-[#04a194]/40 font-medium rounded-lg text-sm sm:text-base 
              px-5 py-3 text-center transition active:scale-95"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
