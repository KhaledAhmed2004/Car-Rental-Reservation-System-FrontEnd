import React from "react";
import SearchBar from "./HeroSearchBar";
import PrimaryButton from "./../../common/atoms/PrimaryButton";
import HeroSearchBar from "./HeroSearchBar";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden w-full h-[calc(100vh-80px)]">
      <h1 className="text-6xl">Rent a Car In Easiest and Fastest Way</h1>

      <div className="absolute bottom-0  w-full bg-[url(./assets/car.png)] bg-contain bg-no-repeat bg-center h-3/4 flex items-end"></div>
      <PrimaryButton label={"Book Now"} onClick={"Booking Action"} />
      <HeroSearchBar />
    </div>
  );
};

export default HeroSection;
