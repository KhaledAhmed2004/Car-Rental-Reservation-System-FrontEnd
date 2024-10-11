import React from "react";
import CarTypesCard from "../../common/molecules/CarTypesCard";
const CarTypesSection = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-center text-4xl pt-7">Our Fleet</h2>
        <div className="flex justify-center">
          <p className="pb-7 px-4 sm:px-0 sm:w-1/2">
            At RENT, we provide a wide variety of vehicles to meet every
            customer's unique needs and preferences.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-6 gap-6">
        <CarTypesCard
          name={"SUVs"}
          backgoundImg={"https://i.ibb.co.com/2SjbnfZ/suvCar.jpg"}
        />
        <CarTypesCard
          name={"Economy Cars"}
          backgoundImg={"https://i.ibb.co.com/swp7sDv/economy-Cars.jpg"}
        />
        <CarTypesCard
          name={"Luxury Cars"}
          backgoundImg={"https://i.ibb.co.com/1sq9ZKH/Luxury-Cars.jpg"}
        />
        <CarTypesCard
          name={"Electric Cars"}
          backgoundImg={"https://i.ibb.co.com/wLqyk5L/Electric-Cars.jpg"}
        />
      </div>
    </div>
  );
};

export default CarTypesSection;
