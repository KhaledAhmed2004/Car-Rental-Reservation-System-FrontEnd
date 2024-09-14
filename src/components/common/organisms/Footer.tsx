import React from "react";
import { LuCopyright } from "react-icons/lu";
import Logo from "../atoms/Logo";
import { FaArrowRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="mt-4 items-center justify-center pb-4">
      <div className="border-[3px] px-6 pt-4 rounded-lg bg-white ">
        <div className="flex justify-between items-center">
          <div className="flex flex-col w-[30%] justify-center">
            <Logo />
            <p>
              Rent your perfect car in minutes! Affordable rates, easy booking,
              and a wide selection. Drive away today!
            </p>
          </div>
          <div className="pl-6 pt-6">
            <ul>
              <motion.li whileHover={{ x: 5 }}>
                <NavLink to={"/"}>Home</NavLink>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <NavLink to={"aboutUs"}>About Us</NavLink>
              </motion.li>

              <motion.li whileHover={{ x: 5, color: "red" }}>
                <NavLink to={"booking"}>Booking</NavLink>
              </motion.li>
              <motion.li whileHover={{ x: 5, color: "red" }}>
                <NavLink to={"car-listing"}>Car Listing</NavLink>
              </motion.li>
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
                className="w-full border-[2px] border-blue-200 p-2 rounded-lg focus:outline-none"
                type="text"
                placeholder="Email..."
              />
              <button className="absolute right-2 bg-blue-600 text-white rounded-lg p-1 hover:scale-110 transition-all">
                <FaArrowRight className="text-xl" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 justify-center p-3 pb-4">
          <LuCopyright />
          <p>copyright RENT, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
