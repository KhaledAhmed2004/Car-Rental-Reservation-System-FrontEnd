import React from "react";

const CarTypesCard = ({ backgoundImg, name }) => {
  return (
    <div className="h-[270px] w-full overflow-hidden rounded-lg relative">
      <div
        // className="bg-[url(./assets/suvCar.jpg)] bg-center bg-cover bg-no-repeat h-full transition-all hover:scale-110"
        style={{ backgroundImage: `url(${backgoundImg})` }}
        className={`bg-center bg-cover bg-no-repeat h-full transition-all hover:scale-110 w-full`}
      ></div>
      <h2 className="font-semibold text-xl p-4 text-white absolute top-0">
        {name}
      </h2>
    </div>
  );
};

export default CarTypesCard;
