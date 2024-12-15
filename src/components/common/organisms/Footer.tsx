import React from "react";
import { LuCopyright } from "react-icons/lu";
import Logo from "../atoms/Logo";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="mt-4">
      <div className="px-6 pt-4 bg-white">
        <div className="flex flex-col max-w-7xl mx-auto lg:flex-row lg:justify-between lg:items-start gap-8 md:flex-row md:justify-between md:items-start">
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
