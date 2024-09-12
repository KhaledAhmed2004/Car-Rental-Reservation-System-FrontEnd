import { DatePicker } from "antd";
import React from "react";
import { FiSearch } from "react-icons/fi";

const HeroSearchBar = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-100 h-20 w-[70%] flex p-10 rounded-full items-center justify-between gap-5 text-left absolute bottom-14 shadow-2xl">
        <div className="">
          <label>Where</label>
          <input
            type="text"
            className="w-full focus:outline-none p-1 text-sm border rounded-md pl-2 border-gray-300 hover:border-blue-400"
            placeholder="Enter address"
          />
        </div>
        <div className="text-gray-300">|</div>
        <div className="">
          <label>Pick Up</label>
          <DatePicker format="DD/MM/YYYY" className="w-full" />
        </div>
        <div className="text-gray-300">|</div>
        <div>
          <label>Drop Off</label>
          <DatePicker format="DD/MM/YYYY" className="w-full" />
        </div>
        <div className="bg-blue-500 p-3 rounded-full">
          <FiSearch className="text-white h-5 w-5 hover:scale-110 transition-all" />
        </div>
      </div>
    </div>
  );
};

export default HeroSearchBar;
