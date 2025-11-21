/** @format */

import { FiEdit2 } from "react-icons/fi";
import banglore from "../assets/images/banglore.jpg";

export default function Profile() {
  return (
    <div className=" w-full flex justify-center items-center ">
      <div className="bg-white shadow-2xl rounded-xl p-6 md:p-10 w-full max-w-2xl border border-gray-200">
        {/* Profile Image + Edit */}
        <div className="flex flex-col items-center mb-10 relative">
          <img
            src={banglore}
            alt="profile"
            className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover shadow-md"
          />

          {/* Edit Icon */}
          <button className="absolute bottom-2 right-1/3 md:right-[40%] bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-md transition">
            <FiEdit2 size={16} />
          </button>

          <h1 className="mt-4 text-xl font-semibold tracking-wide">Profile</h1>
        </div>

        {/* Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-xl border border-gray-200">
          {/* Name Row */}
          <div className="flex flex-row justify-between items-center bg-white p-4 rounded-xl shadow-sm">
            <h1 className="text-sm font-medium text-gray-700">
              First Name: <span className="font-semibold">Rupesh</span>
            </h1>
            <h1 className="text-sm font-medium text-gray-700">
              Last Name: <span className="font-semibold">Kushwaha</span>
            </h1>
          </div>

          {/* Email */}
          <div className="col-span-2 bg-white p-4 rounded-xl shadow-sm">
            <h2 className="text-sm font-medium text-gray-700">
              Email: <span className="font-semibold">example@gmail.com</span>
            </h2>
          </div>

          {/* Phone */}
          <div className="col-span-2 bg-white p-4 rounded-xl shadow-sm">
            <h3 className="text-sm font-medium text-gray-700">
              Phone: <span className="font-semibold">1234567890</span>
            </h3>
          </div>

          {/* Gender */}
          <div className="col-span-2 bg-white p-4 rounded-xl shadow-sm">
            <label className="text-sm font-medium text-gray-700">
              Gender: <span className="font-semibold">Male</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
