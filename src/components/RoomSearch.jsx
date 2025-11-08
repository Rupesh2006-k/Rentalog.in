import { MapPin, Search, SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';

export function SearchSection({ onSearch }) {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    city: '',
    minPrice: '',
    maxPrice: '',
    roomType: 'all',
    availability: 'all',
  });

  const handleSearch = () => {
    onSearch(filters);
  };

  return (
    <section className="bg-white py-8 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Search Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-4 border-2 border-teal-100">
          <div className="flex flex-col md:flex-row gap-4">
            {/* City Input */}
            <div className="flex-1 relative">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Enter city name..."
                value={filters.city}
                onChange={(e) => setFilters({ ...filters, city: e.target.value })}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-teal-500 transition-colors"
              />
            </div>

            {/* Filter Toggle Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-6 py-3 border-2 border-gray-200 rounded-xl hover:border-teal-500 transition-colors flex items-center justify-center gap-2"
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span className="hidden sm:inline">Filters</span>
            </button>

            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="bg-teal-600 text-white px-8 py-3 rounded-xl hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
            >
              <Search className="w-5 h-5" />
              Search
            </button>
          </div>

          {/* Expanded Filters */}
          {showFilters && (
            <div className="grid md:grid-cols-4 gap-4 mt-4 pt-4 border-t border-gray-200">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Min Price (₹)</label>
                <input
                  type="number"
                  placeholder="5,000"
                  value={filters.minPrice}
                  onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Max Price (₹)</label>
                <input
                  type="number"
                  placeholder="20,000"
                  value={filters.maxPrice}
                  onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Room Type</label>
                <select
                  value={filters.roomType}
                  onChange={(e) => setFilters({ ...filters, roomType: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-teal-500"
                >
                  <option value="all">All Types</option>
                  <option value="private">Private Room</option>
                  <option value="shared">Shared Room</option>
                  <option value="studio">Studio</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Availability</label>
                <select
                  value={filters.availability}
                  onChange={(e) => setFilters({ ...filters, availability: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-teal-500"
                >
                  <option value="all">Any Time</option>
                  <option value="immediate">Immediate</option>
                  <option value="1month">Within 1 Month</option>
                  <option value="3months">Within 3 Months</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
