import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

// Array of navigation links for the menu.
const desktopLinks = [
  { id: 1, to: "/", label: "Home" },
  { id: 2, to: "/aboutUs", label: "About Us" },
  { id: 3, to: "/booking", label: "Booking" },
  { id: 4, to: "/car-listing", label: "Car Listing" },
  { id: 4, to: "/dashboard", label: "Dashboard" },
];

const mobileLinks = [
  { id: 1, to: "/dashboard/userOverview", label: "Overview" },
  { id: 2, to: "https://www.aliyun.com", label: "Manage Booking" },
];

const NavMenu = () => {
  // Define the variants for stagger effect
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
      },
    },
  };

  const linkVariants = {
    hidden: {
      opacity: 0,
      y: -20, // Link will appear with an upward motion
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.nav
      className="flex flex-col md:flex-row gap-4 p-4 md:p-0"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* Desktop Navigation Links */}
      <div className="hidden md:flex flex-col md:flex-row gap-4">
        {desktopLinks.map((link) => (
          <motion.div key={link.id} variants={linkVariants}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? "block py-2 px-4 text-blue-700 font-medium underline underline-offset-2"
                  : "block py-2 px-4 text-black hover:bg-gray-200 rounded-md"
              }
            >
              {link.label}
            </NavLink>
          </motion.div>
        ))}
      </div>

      {/* Mobile Navigation Links */}
      <div className="md:hidden flex flex-col gap-4 bg-gray-200 p-4 rounded-lg">
        {mobileLinks.map((link) => (
          <motion.div key={link.id} variants={linkVariants}>
            {link.to.startsWith("http") ? (
              <a
                href={link.to}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 px-4 text-black hover:bg-gray-200 rounded-md"
              >
                {link.label}
              </a>
            ) : (
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-4 text-blue-700 font-medium underline underline-offset-2"
                    : "block py-2 px-4 text-black hover:bg-gray-200 rounded-md"
                }
              >
                {link.label}
              </NavLink>
            )}
          </motion.div>
        ))}
      </div>
    </motion.nav>
  );
};

export default NavMenu;
