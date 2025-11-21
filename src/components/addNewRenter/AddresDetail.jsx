import React from "react";

const AddressDetail = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form
        id="addressDetails"
        className="w-full max-w-lg bg-white shadow-2xl rounded-2xl p-8 space-y-6 border border-green-300"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Address Details
        </h2>

        {/* Permanent Address */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700" htmlFor="address">
            Permanent Address *
          </label>
          <textarea
            id="address"
            name="address"
            rows={3}
            required
            className="resize-none border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#04a194]"
          />
        </div>

        {/* Country */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700" htmlFor="country">
            Country *
          </label>
          <input
            id="country"
            type="text"
            name="country"
            value="India"
            readOnly
            className="border border-gray-300 rounded-md p-2 bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* State */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700" htmlFor="state">
            State *
          </label>
          <input
            id="state"
            type="text"
            name="state"
            required
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#04a194]"
          />
        </div>

        {/* City */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700" htmlFor="city">
            City *
          </label>
          <input
            id="city"
            type="text"
            name="city"
            required
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#04a194]"
          />
        </div>

        {/* Pincode */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700" htmlFor="pincode">
            Pincode *
          </label>
          <input
            id="pincode"
            type="text"
            name="pincode"
            pattern="[0-9]{6}"
            required
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#04a194]"
          />
        </div>
          <button
          type="submit"
          className="w-full mt-4 bg-[#04a194] text-white py-3 rounded-xl font-semibold hover:bg-[#05aea0] transition-all shadow-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddressDetail;
