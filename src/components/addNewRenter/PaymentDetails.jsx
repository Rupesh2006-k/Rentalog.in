import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";

const PaymentDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPayment, setIsOpenPayment] = useState(false);
  const [selected, setSelected] = useState("");
  const [payment, setPayment] = useState("");
  const options = ["Monthly", "Quarterly", "Half Yearly", "Yearly"];
  const helperText = "Select how often the rent is due.";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        id="roomPaymentDetails"
        className="w-full max-w-lg bg-white shadow-2xl rounded-xl p-8 space-y-6 border border-[#0ec6b7]"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Room & Payment Details
        </h2>

        {/* Check-In Date */}
        <div className="relative">
          <input
            type="date"
            id="checkIn"
            name="checkIn"
            required
            placeholder=" "
            aria-describedby="checkIn_helper"
            className="block w-full px-2.5 pb-2.5 pt-5 text-sm text-gray-900 rounded-t-md border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#04a194] peer"
          />
          <label
            htmlFor="checkIn"
            className="absolute text-sm  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            Check-In Date *
          </label>
        </div>

        {/* Room No */}
        <div className="relative">
          <input
            type="text"
            id="roomNo"
            name="roomNo"
            required
            placeholder=" "
            aria-describedby="roomNo_helper"
            className="block w-full px-2.5 pb-2.5 pt-5 text-sm text-gray-900 rounded-t-md border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#04a194] peer"
          />
          <label
            htmlFor="roomNo"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-105 peer-focus:-translate-y-4"
          >
            Room No *
          </label>
          <p id="roomNo_helper" className="mt-2.5 text-xs text-gray-500">
            Enter the room number. Must be numeric.
          </p>
        </div>

        {/* Rent */}
        <div className="relative">
          <input
            type="text"
            id="rent"
            name="rent"
            pattern="^\d+$"
            required
            placeholder=" "
            aria-describedby="rent_helper"
            className="block w-full px-2.5 pb-2.5 pt-5 text-sm text-gray-900 rounded-t-md border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-[#04a194] peer"
          />
          <label
            htmlFor="rent"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-105 peer-focus:-translate-y-4"
          >
            Rent (₹) *
          </label>
          <p id="rent_helper" className="mt-2.5 text-xs text-gray-500">
            Enter the rent amount in ₹
          </p>
        </div>

        {/* Rent Cycle */}
        <div className="relative w-full">
          <label
            htmlFor="rentCycle"
            className={`absolute text-sm duration-300 transform ${
              selected || isOpen
                ? "-translate-y-4 scale-75 top-2"
                : "top-5 scale-100"
            } z-10 origin-[0] start-2.5 pointer-events-none`}
          ></label>

          <div
            id="rentCycle"
            className="w-full border-b-2 border-gray-300 rounded-t-md cursor-pointer px-2.5 py-2.5 text-sm text-gray-900 peer focus:outline-none"
            onClick={() => {
              setIsOpen(!isOpen);
              setIsOpenPayment(false); // close other dropdown
            }}
          >
            {selected || "Select an option"}
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute w-full bg-white shadow-lg rounded-b-md max-h-40 overflow-auto z-20 mt-1"
              >
                {options.map((option) => (
                  <li
                    key={option}
                    onClick={() => {
                      setSelected(option);
                      setIsOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-[#04a194] hover:text-white cursor-pointer"
                  >
                    {option}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>

          <p className="mt-2.5 text-xs text-gray-500">{helperText}</p>
        </div>

        {/* Advance Payment */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700" htmlFor="advance">
            Advance Payment (Optional)
          </label>
          <input
            id="advance"
            type="text"
            name="advance"
            pattern="^\d+$"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#04a194]"
          />
        </div>

        {/* Payment Method */}
        <div className="relative w-full">
          <label
            htmlFor="paymentMethod"
            className={`absolute text-sm text-gray-500 duration-300 transform ${
              payment || isOpenPayment
                ? "-translate-y-4 scale-75 top-2"
                : "top-5 scale-100"
            } z-10 origin-[0] start-2.5 pointer-events-none`}
          ></label>

          <div
            id="paymentMethod"
            className="w-full border-b-2 border-gray-300 rounded-t-md cursor-pointer px-2.5 py-2.5 text-sm text-gray-900 peer focus:outline-none"
            onClick={() => {
              setIsOpenPayment(!isOpenPayment);
              setIsOpen(false); // close rentCycle dropdown
            }}
          >
            {payment || "Payment Method"}
          </div>

          <AnimatePresence>
            {isOpenPayment && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute w-full bg-white shadow-lg rounded-b-md max-h-40 overflow-auto z-20 mt-1"
              >
                {["UPI", "Cash", "Credit / Debit Card"].map((option, i) => (
                  <li
                    key={i}
                    onClick={() => {
                      setPayment(option);
                      setIsOpenPayment(false); // ✅ fixed here
                    }}
                    className="px-4 py-2 hover:bg-[#04a194] hover:text-white cursor-pointer"
                  >
                    {option}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>

          <p className="mt-2.5 text-xs text-gray-500">{helperText}</p>
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

export default PaymentDetails;
