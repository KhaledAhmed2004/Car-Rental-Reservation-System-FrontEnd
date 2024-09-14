import Lottie from "lottie-react";
import React from "react";

const CardWithImage = ({ heading, discripction, animationData }) => {
  return (
    <div className="bg-white rounded-lg items-center text-center p-10 space-y-2 flex flex-col">
      <Lottie animationData={animationData} className="w-full h-[150px]" />
      <h2 className="font-semibold">{heading}</h2>
      <p>{discripction}</p>
    </div>
  );
};

export default CardWithImage;
