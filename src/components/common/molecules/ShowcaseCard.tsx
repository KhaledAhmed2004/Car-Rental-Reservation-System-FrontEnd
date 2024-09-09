import React from "react";
import { FiDivideCircle } from "react-icons/fi";
import { IoMdPerson } from "react-icons/io";
import { TbEngine } from "react-icons/tb";
import { TbCurrencyTaka } from "react-icons/tb";

const ShowcaseCard = () => {
  return (
    <div className="bg-gray-400 h-[220px] p-4 rounded-lg justify-center">
      <h2>Rang Rover Sport</h2>
      <div className="flex h-[150px] items-end justify-between">
        <div className="flex items-center">
          <IoMdPerson />
          <p>5</p>
        </div>
        <div className="flex items-center">
          <TbEngine />
          <p>Manual</p>
        </div>
        <div className="flex items-center">
          <TbCurrencyTaka />
          <p>1000/d</p>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseCard;
