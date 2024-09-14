import React from "react";
import { BiSearch } from "react-icons/bi";
import ShowcaseCard from "../components/common/molecules/ShowcaseCard";

const CarListingPage = () => {
  return (
    <div className="flex gap-4 pt-4">
      <div className="bg-gray-200 h-screen rounded-lg w-[28%]">
        <div className="p-8">
          <div className="relative flex items-center">
            <input
              className="p-3 rounded-lg bg-gray-300 w-full"
              type="text"
              placeholder="Search..."
            />
            <button className="absolute right-2">
              <BiSearch className="text-xl" />
            </button>
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-600">TYPE</p>
          <div className="grid grid-cols-2 mx-auto">
            <div className="items-center flex gap-2">
              <input
                className="h-5 w-5 bg-red-600"
                type="checkbox"
                name="yo"
                id=""
              />
              <span>
                BMW <span className="text-gray-500">(10)</span>
              </span>
            </div>
            <div className="items-center flex gap-2">
              <input className="h-5 w-5" type="checkbox" name="yo" id="" />
              <span>Spots</span>
              <span>
                <span className="text-gray-500">(10)</span>
              </span>
            </div>
            <div className="items-center flex gap-2">
              <input className="h-5 w-5" type="checkbox" name="yo" id="" />
              <span>Spots</span>
              <span>
                <span className="text-gray-500">(10)</span>
              </span>
            </div>
            <div className="items-center flex gap-2">
              <input className="h-5 w-5" type="checkbox" name="yo" id="" />
              <span>Spots</span>
              <span>
                <span className="text-gray-500">(10)</span>
              </span>
            </div>
            <div className="items-center flex gap-2">
              <input className="h-5 w-5" type="checkbox" name="yo" id="" />
              <span>Spots</span>
              <span>
                <span className="text-gray-500">(10)</span>
              </span>
            </div>
            <div className="items-center flex gap-2">
              <input className="h-5 w-5" type="checkbox" name="yo" id="" />
              <span>Spots</span>
              <span>
                <span className="text-gray-500">(10)</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full rounded-lg grid grid-cols-3 gap-4 h-fit">
        <ShowcaseCard />
        <ShowcaseCard />
        <ShowcaseCard />
        <ShowcaseCard />
        <ShowcaseCard />
      </div>
    </div>
  );
};

export default CarListingPage;
