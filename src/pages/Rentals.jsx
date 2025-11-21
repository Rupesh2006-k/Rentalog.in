/** @format */

import React from "react";
import RoomSearch from "../components/RoomSearch";
import RoomListing from "../components/RoomListing";
import RoomCardDetail from "../components/RoomCardDetails";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import FindRoomBaner from "../components/FindRoomBaner";
const Rentals = () => {
  let value = useSelector((state) => state.viewDetail.value);
  console.log(value);

  return (
    <>
      <div className="w-full">
        <FindRoomBaner />
        <RoomSearch />
        {value ? <RoomCardDetail /> : <RoomListing />}
        <Footer />
      </div>
    </>
  );
};

export default Rentals;
