/** @format */

import { useForm } from "react-hook-form";
import logo from "../assets/logos/logo.png";
import facebook from "../assets/logos/facebook.png";
import google from "../assets/logos/google.png";
import { Link, useNavigate } from "react-router";
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log("Login Data ✅", data); // Print email & password
    alert("Login Successful 🚀");
  };

  let navigate = useNavigate();

  return (
    <div className="h-[80vh] flex flex-col items-center justify-center px-4 ">
      {/* Login Card */}
      <div className="p-5 w-full sm:w-3/4 md:w-1/2 lg:w-1/4 rounded border border-[#04a194] max-w-sm flex flex-col items-center bg-white ">
        <img src={logo} alt="Logo" className="h-14 mb-6" />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-6"
        >
          {/* Email Input */}
          <div className="relative z-0 w-full mb-2 group">
            <input
              type="email"
              id="floating_email"
              placeholder=" "
              {...register("email", { required: "Email is required" })}
              className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#04a194] peer ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            <label
              htmlFor="floating_email"
              className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
            peer-focus:start-0 peer-focus:text-[#04a194] 
            peer-placeholder-shown:scale-105 peer-placeholder-shown:translate-y-0 
            peer-focus:scale-105 peer-focus:-translate-y-6"
            >
              Email address
            </label>
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password Input */}
          <div className="relative z-0 w-full mb-2 group">
            <input
              type="password"
              id="floating_password"
              placeholder=" "
              {...register("password", { required: "Password is required" })}
              className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#04a194] peer ${
                errors.password ? "border-red-500" : ""
              }`}
            />
            <label
              htmlFor="floating_password"
              className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
            peer-focus:start-0 peer-focus:text-[#04a194] 
            peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
            peer-focus:scale-105 peer-focus:-translate-y-6"
            >
              Password
            </label>
            {errors.password && (
              <span className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={!isValid}
            className={`mt-2 w-full py-2 rounded font-semibold text-white transition ${
              isValid
                ? "bg-[#04a194] hover:bg-[#037d73]"
                : "bg-[#0ec6b7] cursor-not-allowed"
            }`}
          >
            Log in
          </button>
        </form>

        {/* OR Separator */}
        <div className="flex items-center w-full my-4 text-gray-400 text-sm">
          <hr className="flex-1 border-gray-300" />
          <span className="px-2">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Login with Facebook */}
        <div className="flex w-full justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2 flex-nowrap">
            <img src={google} className="h-8" alt="Google logo" />
            <span className="text-xs">Log in with Google</span>
          </div>

          <div className="flex items-center gap-2 flex-nowrap">
            <img src={facebook} className="h-8" alt="Facebook logo" />
            <span className="text-xs">Log in with Facebook</span>
          </div>
        </div>
        <a href="#" className="text-sm text-[#04a194] mt-2 hover:underline">
          Forgot password?
        </a>
      </div>

      {/* Signup Card */}
      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/4 border border-[#04a194] mt-4 p-4 max-w-sm text-center rounded text-zinc-700 bg-white">
        Don’t have an account?{" "}
        <Link
          onClick={() => {
            navigate("/signup")
          }}
          href="#"
          className="text-[#00c4b5] hover:underline"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
