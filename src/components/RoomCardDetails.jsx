/** @format */

import {
  MapPin,
  BadgeCheck,
  Star,
  Wifi,
  Car,
  Utensils,
  Wind,
  ChevronLeft,
  Phone,
  Mail,
  Navigation,
} from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { closePage } from "../features/ViewDetailSlice";

let RoomCardDetail = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  let dispatch = useDispatch();
  // Mock data for room detail
  const images = [
    "https://images.unsplash.com/photo-1743008019164-2d810a54915e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwYmVkcm9vbSUyMHJlbnRhbHxlbnwxfHx8fDE3NjIwNzg1OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1633505765486-e404bbbec654?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc3R1ZGlvJTIwYXBhcnRtZW50fGVufDF8fHx8MTc2MjA3ODU5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1669387448840-610c588f003d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlnaHQlMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2MjA3ODU5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  ];

  const reviews = [
    {
      id: "1",
      name: "Ankit Verma",
      rating: 5,
      comment:
        "Great place! Very clean and the owner is very responsive. Highly recommended.",
      date: "2 weeks ago",
    },
    {
      id: "2",
      name: "Divya Shah",
      rating: 4,
      comment: "Nice location and well-maintained room. Good value for money.",
      date: "1 month ago",
    },
    {
      id: "3",
      name: "Rohan Gupta",
      rating: 5,
      comment:
        "Excellent experience! The amenities are great and location is perfect.",
      date: "2 months ago",
    },
  ];

  const amenities = [
    { icon: Wifi, label: "High-Speed WiFi" },
    { icon: Wind, label: "Air Conditioning" },
    { icon: Car, label: "Parking" },
    { icon: Utensils, label: "Kitchen Access" },
  ];
  return (
    <div className="  min-h-screen">
      {/* Back Button */}
      <div className=" border-b  border-zinc-200 bg-white sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => dispatch(closePage())}
            className="flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Listings
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Image Gallery */}
        <div className="mb-8">
          <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden mb-4">
            <img
              src={images[currentImageIndex]}
              alt="Room"
              className="w-full h-full object-cover"
            />
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "bg-white w-8"
                        : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="grid grid-cols-3 gap-4">
            {images.slice(0, 3).map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`rounded-xl overflow-hidden h-24 ${
                  index === currentImageIndex ? "ring-4 ring-teal-500" : ""
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Basic Info */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-gray-900 mb-2">
                    Cozy Private Room in Andheri West
                  </h1>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-5 h-5" />
                    <span>Andheri West, Mumbai</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-teal-600 text-3xl">₹12,000</div>
                  <div className="text-gray-500 text-sm">per month</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-gray-900 mb-3">Description</h3>
              <p className="text-gray-600 leading-relaxed">
                Beautiful and spacious private room available for rent in the
                heart of Andheri West. The room comes fully furnished with a
                comfortable bed, wardrobe, study table, and chair. Located in a
                safe and well-connected neighborhood with easy access to metro
                stations, bus stops, and local markets. Perfect for working
                professionals and students.
              </p>
            </div>

            <div>
              <h3 className="text-gray-900 mb-4">Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="bg-teal-50 rounded-xl p-4 flex flex-col items-center gap-2 text-center"
                  >
                    <amenity.icon className="w-6 h-6 text-teal-600" />
                    <span className="text-sm text-gray-700">
                      {amenity.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-gray-900 mb-4">Location</h3>
              <div className="bg-gray-100 rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center text-gray-500 w-full h-[400px] relative">
                  <iframe
                    title="Map Preview"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.702268841733!2d72.843501!3d19.119582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7f5fcb7b8bb%3A0x7f70f7b54c1e0e2a!2sAndheri%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709912339465!5m2!1sen!2sin"
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              <button className="mt-4 w-full bg-teal-600 text-white py-3 rounded-xl hover:bg-teal-700 transition-colors flex items-center justify-center gap-2">
                <Navigation className="w-5 h-5" />
                Follow Route
              </button>
            </div>
            <div>
              <h3 className="text-gray-900 mb-4">Reviews</h3>
              <div className="space-y-4">
                {reviews.map((review) => (
                  <div key={review.id} className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white">
                          {review.name[0]}
                        </div>
                        <div>
                          <div className="text-gray-900">{review.name}</div>
                          <div className="text-sm text-gray-500">
                            {review.date}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? "text-yellow-500 fill-yellow-500"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-teal-50 to-amber-50 rounded-2xl p-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-teal-600 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-2xl">
                  PS
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h4 className="text-gray-900">Priya Sharma</h4>
                  <BadgeCheck
                    className="w-5 h-5 text-teal-600"
                    fill="currentColor"
                  />
                </div>
                <p className="text-sm text-gray-600">Property Owner</p>
                <div className="flex items-center justify-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    (24 reviews)
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-teal-600 text-white py-3 rounded-xl hover:bg-teal-700 transition-colors flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Owner
                </button>
                <button className="w-full bg-white text-teal-600 border-2 border-teal-600 py-3 rounded-xl hover:bg-teal-50 transition-colors flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5" />
                  Send Message
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-sm text-gray-600 space-y-2">
                  <p>✓ Verified Owner</p>
                  <p>✓ Quick Response Time</p>
                  <p>✓ 3 years on Loveable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCardDetail;
