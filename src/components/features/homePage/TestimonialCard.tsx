import React from "react";
import { FaStar } from "react-icons/fa6";

const TestimonialCard = ({ author, review }) => {
  return (
    <div className="border border-gray-300 bg-white rounded-lg p-4 mx-4 w-[350px]">
      <div className="flex items-center gap-2 pb-2">
        <div className="bg-gray-300 h-12 w-12 rounded-full"></div>
        <div>
          <h3 className="text-sm">{author}</h3>
          <FaStar />
        </div>
      </div>
      <p className="">{review}</p>
    </div>
  );
};

export default TestimonialCard;
