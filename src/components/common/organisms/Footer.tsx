import React from "react";
import { LuCopyright } from "react-icons/lu";
import Logo from "../atoms/Logo";
import { FaArrowRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="mt-4">
      <div className="border-t-2 px-6 pt-4 rounded-lg bg-white">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 md:flex-row md:justify-between md:items-start">
          {/* Logo and description */}
          <div className="flex flex-col items-start lg:w-1/3 text-left md:w-1/2">
            <Logo />
            <p className="mt-4">
              Rent your perfect car in minutes! Affordable rates, easy booking,
              and a wide selection. Drive away today!
            </p>
          </div>
          {/* Navigation Links */}
          <div className="flex flex-col md:items-start lg:items-center md:w-1/4 lg:w-1/3">
            <ul className="space-y-2">
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
          {/* Legal Links */}
          <div className="flex flex-col md:items-start lg:items-center md:w-1/4  lg:items-star lg:w-1/3">
            <ul className="space-y-2">
              <li>Terms</li>
              <li>Privacy Policy</li>
              <li>Legal Notice</li>
              <li>Accessibility</li>
            </ul>
          </div>
          {/* Newsletter Subscription */}
          <div className="flex flex-col lg:items-star lg:w-1/3 md:items-start md:w-full md:max-w-xs ">
            <h2 className="mb-4">Subscribe to the newsletter</h2>
            <div className="relative w-full max-w-sm flex">
              <input
                className="w-full border-[2px] border-blue-200 p-2 rounded-lg focus:outline-none"
                type="text"
                placeholder="Email..."
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white rounded-lg p-1 hover:scale-110 transition-all">
                <FaArrowRight className="text-xl" />
              </button>
            </div>
          </div>
        </div>
        {/* Footer Bottom Section */}
        <div className="flex flex-col lg:flex-row items-center gap-1 justify-center p-3 mt-4">
          <LuCopyright />
          <p className="text-center lg:text-left">
            © RENT, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
