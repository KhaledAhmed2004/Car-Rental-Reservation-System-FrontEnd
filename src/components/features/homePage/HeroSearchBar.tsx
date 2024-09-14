import React from "react";
import { DatePicker } from "antd";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";

const HeroSearchBar = () => {
  return (
    // Search bar container with animation
    <motion.div
      initial={{ y: 50, opacity: 0 }} // Animate from below with opacity 0
      animate={{ y: 0, opacity: 1 }} // Moves to final position, becoming visible
      transition={{ duration: 0.5, ease: "easeOut" }} // Smooth animation
      className="relative flex justify-center items-center h-full z-50"
    >
      {/* Search bar form */}
      <div className="bg-gray-100 h-20 w-[70%] flex p-10 rounded-full items-center justify-between gap-5 text-left absolute top-[280px] shadow-2xl z-50">
        {/* Address input */}
        <div>
          <label>Where</label>
          <input
            type="text"
            className="w-full focus:outline-none p-1 text-sm border rounded-md pl-2 border-gray-300 hover:border-blue-400"
            placeholder="Enter address"
          />
        </div>

        {/* Divider */}
        <div className="text-gray-300">|</div>

        {/* Pick up date input */}
        <div>
          <label>Pick Up</label>
          <DatePicker format="DD/MM/YYYY" className="w-full" />
        </div>

        {/* Divider */}
        <div className="text-gray-300">|</div>

        {/* Drop off date input */}
        <div>
          <label>Drop Off</label>
          <DatePicker format="DD/MM/YYYY" className="w-full" />
        </div>

        {/* Search button */}
        <div className="bg-blue-500 p-3 rounded-full">
          <FiSearch className="text-white h-5 w-5 hover:scale-110 transition-all" />
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSearchBar;
