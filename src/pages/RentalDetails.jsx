import React from "react";

const RentalDetails = () => {
  const renters = [
    {
      roomNo: "A1",
      name: "Ganga",
      contact: "9916548888",
      altContact: "9999888888",
      rent: 5500,
      detailsLink: "/renterDetails/685aa4f646c9d820aafa791c",
    },
    {
      roomNo: "1",
      name: "Test",
      contact: "9943545245",
      altContact: "5564268037",
      rent: 40000,
      detailsLink: "/renterDetails/68bf03a6aac393533fa8040f",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Renters' Details
        </h1>

        <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
          <table className="min-w-full text-left border-collapse">
            <thead className="bg-green-100">
              <tr>
                <th className="px-6 py-3 text-gray-700 font-medium border-b">Room No.</th>
                <th className="px-6 py-3 text-gray-700 font-medium border-b">Name</th>
                <th className="px-6 py-3 text-gray-700 font-medium border-b">Contact</th>
                <th className="px-6 py-3 text-gray-700 font-medium border-b">Alternate Contact</th>
                <th className="px-6 py-3 text-gray-700 font-medium border-b">Rent (₹)</th>
                <th className="px-6 py-3 text-gray-700 font-medium border-b">Details</th>
              </tr>
            </thead>
            <tbody>
              {renters.map((renter, index) => (
                <tr
                  key={index}
                  className="hover:bg-green-50 transition-colors duration-200 border-b"
                >
                  <td className="px-6 py-4">{renter.roomNo}</td>
                  <td className="px-6 py-4">{renter.name}</td>
                  <td className="px-6 py-4">{renter.contact}</td>
                  <td className="px-6 py-4">{renter.altContact}</td>
                  <td className="px-6 py-4">{renter.rent}</td>
                  <td className="px-6 py-4">
                    <a
                      href={renter.detailsLink}
                      className="flex items-center justify-center text-green-600 hover:text-green-800"
                    >
                      <img
                        src="/image/icons/eye-icon.svg"
                        alt="View"
                        className="w-5 h-5"
                      />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RentalDetails;
