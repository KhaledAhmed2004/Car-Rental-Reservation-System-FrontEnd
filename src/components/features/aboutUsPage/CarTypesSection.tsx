import React from "react";
import CarTypesCard from "../../common/molecules/CarTypesCard";
import suvCar from "../../../assets/suvCar.jpg";
import economyCars from "../../../assets/economyCars.jpg";
import LuxuryCars from "../../../assets/LuxuryCars.jpg";
import ElectricCars from "../../../assets/ElectricCars.jpg";
const CarTypesSection = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-center text-4xl pt-7">Our Fleet</h2>
        <div className="flex justify-center">
          <p className="pb-7 w-1/2">
            At RENT, we provide a wide variety of vehicles to meet every
            customer's unique needs and preferences.
          </p>
        </div>
      </div>
      <div className="flex justify-between gap-20">
        <CarTypesCard name={"SUVs"} backgoundImg={suvCar} />
        <CarTypesCard name={"Economy Cars"} backgoundImg={economyCars} />
        <CarTypesCard name={"Luxury Cars"} backgoundImg={LuxuryCars} />
        <CarTypesCard name={"Electric Cars"} backgoundImg={ElectricCars} />
      </div>
    </div>
  );
};

export default CarTypesSection;
