import React from "react";
import HeroSearchBar from "./HeroSearchBar";
import PrimaryButton from "./../../common/atoms/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  const navigate = useNavigate();

  // Navigate to the booking page when the "Book Now" button is clicked
  const handleClick = () => {
    navigate("/booking");
  };

  return (
    <div>
      {/* Main container for the hero section with full viewport height */}
      <div className="relative overflow-hidden w-full h-[calc(100vh-80px)] py-4">
        {/* Content container for heading and button */}
        <div className="w-[70%] mx-auto items-center space-y-8 z-[100]">
          {/* Animated heading */}
          <motion.h1
            initial={{ y: 100, opacity: 0 }} // Starts from below and invisible
            animate={{ y: 0, opacity: 1 }} // Moves to final position, becoming visible
            transition={{
              duration: 1,
              type: "spring", // Smooth spring animation
              stiffness: 150, // Bouncy effect
              damping: 10, // Smooths out the bounce
            }}
            className="text-6xl text-center"
          >
            Rent a Car In Easiest and Fastest Way
          </motion.h1>

          {/* Animated container for the "Book Now" button */}
          <motion.div
            initial={{ y: 30, opacity: 0 }} // Starts slightly below and invisible
            animate={{ y: 0, opacity: 1 }} // Moves to final position, becoming visible
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 150,
              damping: 10,
              delay: 0.5, // Delays animation slightly for a smooth transition
            }}
            className="flex justify-center"
          >
            {/* Book Now button using the PrimaryButton component */}
            <PrimaryButton label="Book Now" onClick={handleClick} />
          </motion.div>
        </div>

        {/* Background image with absolute positioning */}
        <div className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-[90%] bg-[url(./assets/car.png)] bg-contain bg-no-repeat bg-center h-3/4 flex items-end"></div>

        {/* White overlay animation that slides upward */}
        <motion.div
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: -1000, opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-white h-full absolute w-full"
        ></motion.div>

        {/* Search bar component */}
        <HeroSearchBar />
      </div>
    </div>
  );
};

export default HeroSection;
