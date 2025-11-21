// /** @format */

// import React from "react";
// import userAvatar from "../assets/images/about-2.jpg";

// const Reviews = () => {
//   return (
//     <div className="relative  w-full">
//       {/* Card 1 */}
//       <div className="w-full flex justify-center items-center">
//         <h1 className="text-5xl">
//           {" "}
//           <span className="text-[#c4362d]">R</span>eviews
//         </h1>
//       </div>
//       <div className="  p-10 flex flex-wrap justify-around gap-15">
//         <div className="w-[350px] h-fit  border border-zinc-200  p-4 rounded-lg ">
//           <p className=" mb-3">
//             Thankyou for the great content... Lorem ipsum dolor sit amet
//             consectetur adipisicing elit. Quam, quos? Lorem ipsum dolor sit
//             amet.
//           </p>
//           <div className="flex items-center gap-3">
//             <img
//               src={userAvatar}
//               alt="Dharwee"
//               className="h-10 w-10 object-cover rounded-full"
//             />
//             <span>
//               <h2 className="font-semibold">Dharwee</h2>
//               <h3 className="text-xs text-gray-400">@twitter</h3>
//             </span>
//           </div>
//         </div>
//         <div className="w-[350px] h-fit mt-20 border border-zinc-200 p-4 rounded-lg ">
//           <p className=" mb-3">
//             Thankyou Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//             Quibusdam amet, iure quisquam impedit nesciunt alias corporis ullam
//             excepturi quod tenetur. for the great content... Lorem ipsum dolor
//             sit amet consectetur adipisicing elit. Quam, quos? Lorem ipsum dolor
//             sit amet.
//           </p>
//           <div className="flex items-center gap-3">
//             <img
//               src={userAvatar}
//               alt="Dharwee"
//               className="h-10 w-10 object-cover rounded-full"
//             />
//             <span>
//               <h2 className="font-semibold">Dharwee</h2>
//               <h3 className="text-xs text-gray-400">@twitter</h3>
//             </span>
//           </div>
//         </div>
//         <div className="w-[350px] h-fit border border-zinc-200 p-4 rounded-lg ">
//           <p className=" mb-3">
//             Thankyou for the great content... Lorem ipsum dolor sit amet
//             consectetur adipisicing elit. Quam, quos? Lorem ipsum dolor sit
//             amet.
//           </p>
//           <div className="flex items-center gap-3">
//             <img
//               src={userAvatar}
//               alt="Dharwee"
//               className="h-10 w-10 object-cover rounded-full"
//             />
//             <span>
//               <h2 className="font-semibold">Dharwee</h2>
//               <h3 className="text-xs text-gray-400">@twitter</h3>
//             </span>
//           </div>
//         </div>

//         <div className="w-[350px] h-fit  border border-zinc-200  p-4 rounded-lg ">
//           <p className=" mb-3">
//             Thankyou for the great content... Lorem ipsum dolor sit amet
//             consectetur adipisicing elit. Quam, quos? Lorem ipsum dolor sit
//             amet.
//           </p>
//           <div className="flex items-center gap-3">
//             <img
//               src={userAvatar}
//               alt="Dharwee"
//               className="h-10 w-10 object-cover rounded-full"
//             />
//             <span>
//               <h2 className="font-semibold">Dharwee</h2>
//               <h3 className="text-xs text-gray-400">@twitter</h3>
//             </span>
//           </div>
//         </div>
//         <div className="w-[350px] h-fit mt-20 border border-zinc-200 p-4 rounded-lg ">
//           <p className=" mb-3">
//             Thankyou Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//             Quibusdam amet, iure quisquam impedit nesciunt alias corporis ullam
//             excepturi quod tenetur. for the great content... Lorem ipsum dolor
//             sit amet consectetur adipisicing elit. Quam, quos? Lorem ipsum dolor
//             sit amet.
//           </p>
//           <div className="flex items-center gap-3">
//             <img
//               src={userAvatar}
//               alt="Dharwee"
//               className="h-10 w-10 object-cover rounded-full"
//             />
//             <span>
//               <h2 className="font-semibold">Dharwee</h2>
//               <h3 className="text-xs text-gray-400">@twitter</h3>
//             </span>
//           </div>
//         </div>
//         <div className="w-[350px] h-fit border border-zinc-200 p-4 rounded-lg ">
//           <p className=" mb-3">
//             Thankyou for the great content... Lorem ipsum dolor sit amet
//             consectetur adipisicing elit. Quam, quos? Lorem ipsum dolor sit
//             amet.
//           </p>
//           <div className="flex items-center gap-3">
//             <img
//               src={userAvatar}
//               alt="Dharwee"
//               className="h-10 w-10 object-cover rounded-full"
//             />
//             <span>
//               <h2 className="font-semibold">Dharwee</h2>
//               <h3 className="text-xs text-gray-400">@twitter</h3>
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Reviews;

/** @format */

import React from "react";
import userAvatar from "../assets/images/about-2.jpg";

const Reviews = () => {
  return (
    <div className="relative w-full">
      {/* Title */}
      <div className="w-full flex justify-center items-center">
        <h1 className="text-5xl">
          <span className="text-[#c4362d]">R</span>eviews
        </h1>
      </div>

      {/* Cards Container */}
      <div className="p-10 flex flex-wrap justify-center gap-12  md:gap-20">
        {Array(9)
          .fill(0)
          .map((_, idx) => (
            <div
              key={idx}
              className={`w-full sm:w-[300px] md:w-[350px] ${
                idx % 2 !== 0 ? "mt-10 md:mt-20" : ""
              } border border-zinc-200 p-4 rounded-lg`}
            >
              <p className="mb-3">
                Thankyou for the great content... Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quam, quos? Lorem ipsum dolor sit
                amet.
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={userAvatar}
                  alt="Dharwee"
                  className="h-10 w-10 object-cover rounded-full"
                />
                <span>
                  <h2 className="font-semibold">Dharwee</h2>
                  <h3 className="text-xs text-gray-400">@twitter</h3>
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Reviews;
