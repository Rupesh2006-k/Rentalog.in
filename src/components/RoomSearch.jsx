/** @format */

import { MapPin, Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

const RoomSearch = ({ onSearch }) => {
  const [showFilters, setShowFilters] = useState(false);

  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      city: "",
      minPrice: "",
      maxPrice: "",
      roomType: "all",
      availability: "all",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Safe check if onSearch exists
    if (typeof onSearch === "function") {
      onSearch(data);
    }
  };

  return (
    <section className="bg-white py-8 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-2xl shadow-lg p-4 border-2 border-teal-100"
        >
          <div className="flex flex-col md:flex-row gap-4">
            {/* City Input */}
            <div className="flex-1 relative">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Enter city name..."
                {...register("city")}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-teal-500 transition-colors"
              />
            </div>

            {/* Filter Toggle Button */}
            <button
              type="button"
              onClick={() => setShowFilters(!showFilters)}
              className="px-6 py-3 border-2 border-gray-200 rounded-xl hover:border-teal-500 transition-colors flex items-center justify-center gap-2"
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span className="hidden sm:inline">Filters</span>
            </button>

            {/* Search Button */}
            <button
              type="submit"
              className="bg-teal-600 text-white px-8 py-3 rounded-xl hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
            >
              <Search className="w-5 h-5" />
              Search
            </button>
          </div>

          {/* Expanded Filters */}
          {showFilters && (
            <div className="grid md:grid-cols-4 gap-4 mt-4 pt-4 border-t border-gray-200">
              {/* Min Price */}
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Min Price (₹)
                </label>
                <input
                  type="number"
                  placeholder="5,000"
                  {...register("minPrice")}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-teal-500"
                />
              </div>

              {/* Max Price */}
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Max Price (₹)
                </label>
                <input
                  type="number"
                  placeholder="20,000"
                  {...register("maxPrice")}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-teal-500"
                />
              </div>

              {/* Room Type */}
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Room Type
                </label>
                <Controller
                  name="roomType"
                  control={control}
                  render={({ field }) => (
                    <select
                      {...field}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-teal-500 bg-white"
                    >
                      <option value="all">All Types</option>
                      <option value="private">Private Room</option>
                      <option value="shared">Shared Room</option>
                      <option value="studio">Studio</option>
                    </select>
                  )}
                />
              </div>

              {/* Availability */}
              <div>
                <label className="block text-sm   mb-2">Availability</label>
                <Controller
                  name="availability"
                  control={control}
                  render={({ field }) => (
                    <select
                      {...field}
                      className="w-full  px-4  py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-teal-500 "
                    >
                      <option value="all">Any Time</option>
                      <option value="immediate">Immediate</option>
                      <option value="1month">Within 1 Month</option>
                      <option value="3months">Within 3 Months</option>
                    </select>
                  )}
                />
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default RoomSearch;
