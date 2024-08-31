import React from "react";
import { LuCopyright } from "react-icons/lu";
import Logo from "../atoms/Logo";
import { FaArrowRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-30 mt-4 p-6 items-center justify-center ">
      <div className="border-t-[2px] flex justify-between items-center">
        <div className="flex flex-col w-[30%] justify-center">
          <Logo />
          <p>
            Rent your perfect car in minutes! Affordable rates, easy booking,
            and a wide selection. Drive away today!
          </p>
        </div>
        <div className="pl-6 pt-6">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Booking</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="pr-6 pt-6">
          <ul>
            <li>Terms</li>
            <li>Privacy policy</li>
            <li>Legal notice</li>
            <li>Accessibility</li>
          </ul>
        </div>
        <div>
          <h2>Subscribe to the newslatter</h2>
          <div className="relative items-center flex">
            <input
              className="w-full bg-gray-300 p-2 rounded-lg border-none"
              type="text"
              placeholder="Email..."
            />
            <button className="absolute right-2 ">
              <FaArrowRight className="text-2xl" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1 justify-center">
        <LuCopyright />
        <p>copyright RENT, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
