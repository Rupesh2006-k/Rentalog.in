import { MapPin, BadgeCheck } from "lucide-react";
import { useDispatch } from "react-redux";
import { showPage } from "../features/ViewDetailSlice";

const RoomCard = ({ room }) => {

let dispatch =   useDispatch()
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={room.image}
          alt={`Room in ${room.area}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-lg">
          <span className="text-teal-600">
            ₹{room.price.toLocaleString()}/mo
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">
              {room.area}, {room.city}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-gray-700">{room.ownerName}</span>
          {room.verified && (
            <BadgeCheck className="w-5 h-5 text-teal-600" fill="currentColor" />
          )}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            {room.roomType}
          </span>
          <button
            onClick={() => dispatch(showPage())}
            className="text-teal-600 hover:text-teal-700 transition-colors"
          >
            View Details →
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
