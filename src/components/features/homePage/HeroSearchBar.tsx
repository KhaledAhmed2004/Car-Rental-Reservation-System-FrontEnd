import React from "react";
import { DatePicker } from "antd";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";

const HeroSearchBar = () => {
  const { RangePicker } = DatePicker;

  return (
    // Search bar container with animation
    <motion.div
      initial={{ y: 50, opacity: 0 }} // Animate from below with opacity 0
      animate={{ y: 0, opacity: 1 }} // Moves to final position, becoming visible
      transition={{ duration: 0.5, ease: "easeOut" }} // Smooth animation
      className="relative flex justify-center items-center h-full z-50"
    >
      {/* Search bar form */}
      <div className="bg-gray-100 md:h-20 md:w-[85%] lg:w-[70%] flex flex-col md:flex-row p-4 md:p-6 lg:p-8 rounded-lg md:rounded-full items-center justify-between gap-3 md:gap-5 text-left absolute top-[50%] transform -translate-y-1/2 shadow-md lg:shadow-2xl z-50">
        {/* Address input */}
        <div className="flex-1 w-full">
          <label className="block text-sm font-medium text-gray-700">
            Where
          </label>
          <input
            type="text"
            className="w-full focus:outline-none p-2 text-sm border rounded-md pl-2 border-gray-300 hover:border-blue-400"
            placeholder="Enter address"
          />
        </div>

        {/* Divider */}
        <div className="text-gray-300 hidden md:flex md:px-2">|</div>

        {/* Pick up date input */}
        <div className="flex-1 w-full hidden lg:grid">
          <label className="block text-sm font-medium text-gray-700">
            Pick Up
          </label>
          <DatePicker format="DD/MM/YYYY" className="w-full" />
        </div>
        {/* pick up and dropp out */}
        <div className="flex-1 w-full lg:hidden">
          <label className="block text-sm font-medium text-gray-700">
            Pick Up & Drop Off
          </label>
          <RangePicker format="DD/MM/YYYY" className="w-full" />
        </div>

        {/* Divider */}
        <div className="text-gray-300 hidden md:flex md:px-2">|</div>

        {/* Drop off date input */}
        <div className="flex-1 w-full hidden lg:grid">
          <label className="block text-sm font-medium text-gray-700">
            Drop Off
          </label>

          <DatePicker format="DD/MM/YYYY" className="w-full" />
        </div>

        {/* Search button */}
        <button className="bg-blue-500 p-3 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-all">
          <FiSearch className="h-5 w-5 hover:scale-110 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};

export default HeroSearchBar;
