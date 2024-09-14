// import React from "react";
// import { NavLink } from "react-router-dom";
// import { motion, stagger } from "framer-motion";

// // Array of navigation links for the menu.
// const navigationLink = [
//   { id: 1, to: "/", label: "Home" },
//   { id: 2, to: "/aboutUs", label: "About Us" },
//   { id: 3, to: "/booking", label: "Booking" },
//   { id: 4, to: "/car-listing", label: "Car Listing" },
// ];

// const NavMenu = () => {
//   return (
//     <nav className="flex gap-4">
//       {navigationLink.map((link) => (
//         <ul key={link.id}>
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             //transition={}
//           >
//             <NavLink to={link.to}>{link.label}</NavLink>
//           </motion.div>
//         </ul>
//       ))}
//     </nav>
//   );
// };

// export default NavMenu;

import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

// Array of navigation links for the menu.
const navigationLink = [
  { id: 1, to: "/", label: "Home" },
  { id: 2, to: "/aboutUs", label: "About Us" },
  { id: 3, to: "/booking", label: "Booking" },
  { id: 4, to: "/car-listing", label: "Car Listing" },
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
      className="flex gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {navigationLink.map((link) => (
        <motion.ul key={link.id} variants={linkVariants}>
          <NavLink to={link.to}>{link.label}</NavLink>
        </motion.ul>
      ))}
    </motion.nav>
  );
};

export default NavMenu;
