import React from "react";
import { Home, Search, Wallet, FileText, PlusCircle, Building2 } from "lucide-react";
import { motion } from "motion/react";

export default function DashboardPage2() {
  const cards = [
    { title: "Rental's Details", icon: <Home className="w-8 h-8" /> },
    { title: "Rent Payment Record", icon: <Wallet className="w-8 h-8" /> },
    { title: "Search Renter", icon: <Search className="w-8 h-8" /> },
    { title: "Total Rent Collected", icon: <FileText className="w-8 h-8" /> },
    { title: "Property Listing", icon: <Building2 className="w-8 h-8" /> },
    { title: "Add New Rental", icon: <PlusCircle className="w-8 h-8" /> },
  ];

  const cardVariants = {
    hidden: { opacity: 0,  },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        type: "spring",
        stiffness: 80,
      },
    }),
  };

  return (
    <div className="min-h-screen w-full  px-8 py-6 flex flex-col gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center"
      >
        <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
          Widgets
        </h1>

        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="px-5 py-2.5 bg-teal-600 text-white rounded-xl shadow-md hover:bg-teal-700 transition-all font-medium"
        >
          Create New Rental
        </motion.button>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="h-[200px] bg-white rounded-2xl shadow-md flex flex-col justify-center items-center gap-3 text-xl font-semibold text-gray-700 hover:shadow hover:-translate-y-1 transition-all border border-teal-200 cursor-pointer p-4"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            custom={index}
            whileHover={{ scale: 1.01    }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.div
              initial={{ rotate: 10, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-teal-700"
            >
              {card.icon}   
            </motion.div>
            <p className="text-center">{card.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
