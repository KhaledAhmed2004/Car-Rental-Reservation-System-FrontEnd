import React from "react";
import Heading from "../../common/atoms/Heading";
import CarTypesCard from "../../common/molecules/CarTypesCard";

const CarTypesSection = () => {
  return (
    <div>
      <div className="text-center">
        {/* <p>Categories</p> */}
        <Heading>Rental Car Types</Heading>
      </div>
      <div className="flex justify-between gap-20">
        <CarTypesCard />
        <CarTypesCard />
        <CarTypesCard />
        <CarTypesCard />
      </div>
    </div>
  );
};

export default CarTypesSection;
