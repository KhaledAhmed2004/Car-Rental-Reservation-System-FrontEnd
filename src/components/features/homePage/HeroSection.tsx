import React from "react";
import HeroSearchBar from "./HeroSearchBar";
import PrimaryButton from "./../../common/atoms/PrimaryButton";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/booking");
  };
  return (
    <div className="relative overflow-hidden w-full h-[calc(100vh-80px)] py-4">
      <div className="w-[70%] mx-auto items-center space-y-8">
        <h1 className="text-6xl text-center">
          Rent a Car In Easiest and Fastest Way
        </h1>
        <div className="flex justify-center">
          <PrimaryButton label="Book Now" onClick={handleClick} />
        </div>
      </div>
      <div className="absolute bottom-[-15px] bg-red-90 left-1/2 transform -translate-x-1/2  w-[90%] bg-[url(./assets/car.png)] bg-contain bg-no-repeat bg-center h-3/4 flex items-end"></div>
      <HeroSearchBar />
    </div>
  );
};

export default HeroSection;
