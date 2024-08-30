import React from "react";
import { FiSearch } from "react-icons/fi";

const HeroSearchBar = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-100 h-11 w-2/3 flex p-10 rounded-full items-center justify-between gap-5 text-left absolute bottom-5">
        <div>
          <h2>Where</h2>
          <input
            type="text"
            className="w-full"
            placeholder="City, airport, address or hotel"
          />
        </div>
        <div className="text-gray-300">|</div>
        <div className="">
          <div>Pick Up</div>
          <div className="flex">
            <input type="date" name="" id="" />
            <input type="time" name="" id="" />
          </div>
        </div>
        <div className="text-gray-300">|</div>
        <div>
          <div>Drop Off</div>
          <div className="flex">
            <input type="date" name="" id="" />
            <input type="time" name="" id="" />
          </div>
        </div>
        <div className="bg-blue-400 p-2 rounded-full">
          <FiSearch className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default HeroSearchBar;
