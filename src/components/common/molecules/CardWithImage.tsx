import Lottie from "lottie-react";
import React from "react";

const CardWithImage = ({ heading, discripction, animationData }) => {
  return (
    <div className="bg-white rounded-lg p-6 space-y-4 flex flex-col items-center text-center shadow-lg w-full sm:w-auto">
      <Lottie
        animationData={animationData}
        className="w-full h-[150px] sm:h-[200px]"
      />
      <h2 className="text-lg font-semibold sm:text-xl">{heading}</h2>
      <p className="text-sm text-gray-600">{discripction}</p>
    </div>
  );
};

export default CardWithImage;
