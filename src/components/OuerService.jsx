import React from "react";
import { Home, BedDouble, Calculator, Users, Building2 } from "lucide-react";

const services = [
  {
    title: "Rent Out Room",
    description:
      "List your available room with ease, connect with genuine tenants, and manage your rental space professionally without any middleman or confusion.",
    icon: Home,
  },
  {
    title: "Find a Room",
    description:
      "Search and rent verified rooms matching your budget and lifestyle. Get location insights and trusted property options instantly.",
    icon: BedDouble,
  },
  {
    title: "Rent Calculation",
    description:
      "Calculate rent payments accurately and track monthly expenses or income with our smart calculator designed for both owners and tenants.",
    icon: Calculator,
  },
  {
    title: "Tenant Management",
    description:
      "Manage tenant details, agreements, and payment records in one secure dashboard to simplify and organize your rental operations easily.",
    icon: Users,
  },
  {
    title: "Property Listing",
    description:
      "Showcase all your available properties, add detailed information, and attract verified tenants faster with a professional listing interface.",
    icon: Building2,
  },
];

const OurService = () => {
  return (
    <div className=" w-full bg-white text-zinc-800 px-[5vw] py-16 text-center">
      <h2 className="text-3xl  font-semibold mb-14 font-[HelveticaBold]">
        Services We Offer
      </h2>
     

      <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-12 max-w-5xl mx-auto">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className={`border border-zinc-200 bg-gradient-to-br ${service.bgColor} p-10 rounded-2xl shadow-md transform transition-all py-18  duration-300 hover:shadow-xl hover:-translate-y-3 cursor-pointer`}
            >
              <div className="flex justify-center mb-4 text-zinc-800 transition-transform duration-500 hover:scale-110 hover:rotate-6">
                <Icon size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 hover:text-zinc-900">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm opacity-90 hover:opacity-100 transition-opacity duration-300">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurService;
