// import React from "react";
// import { TbEngine } from "react-icons/tb";
// import { TbCurrencyTaka } from "react-icons/tb";
// import { MdOutlineLuggage } from "react-icons/md";
// import { FaStar } from "react-icons/fa";
// import { BsFuelPumpDiesel } from "react-icons/bs";
// import PrimaryButton from "../atoms/PrimaryButton";
// import { IoSpeedometerOutline } from "react-icons/io5";
// import { LuUsers } from "react-icons/lu";
// import { GiCarDoor } from "react-icons/gi";
// import { motion } from "framer-motion";

// const ShowcaseCard = () => {
//   const handelClick = () => {
//     console.log("clicked card");
//   };

//   const topContainerVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3, // Delay between each child animation
//       },
//     },
//   };
//   const topItemVariants = {
//     hidden: { y: -20, opacity: 0 },
//     show: { y: 0, opacity: 1 },
//   };

//   // Define animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3, // Delay between children
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: -20, opacity: 0 },
//     show: { y: 0, opacity: 1 },
//   };

//   const bottomContainerVariants = {
//     hidden: { opacity: 0, y: -20 },
//     show: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         staggerChildren: 0.3, // Stagger effect for children
//       },
//     },
//   };

//   const bottomItemVariants = {
//     hidden: { opacity: 0, y: -10 },
//     show: { opacity: 1, y: 0 },
//   };
//   return (
//     <div className="bg-white h-fit rounded-lg overflow-hidden p-4">
//       <motion.div
//         variants={topContainerVariants}
//         initial="hidden"
//         animate="show"
//         className="flex items-center gap-2"
//       >
//         <motion.div
//           variants={topItemVariants}
//           className="flex items-center gap-1 border-[2px] px-2 py-1 w-fit rounded-lg"
//         >
//           <FaStar className="text-yellow-500" />
//           <div className="flex text-xs">
//             <span className="font-semibold">4.8</span>
//             <span className="text-gray-400 ">(120)</span>
//           </div>
//         </motion.div>
//         <motion.span
//           variants={topItemVariants}
//           className="p-1 px-2 bg-green-200 borde border-green-600 text-green-600 font-medium rounded-lg text-xs"
//         >
//           Available
//         </motion.span>
//       </motion.div>
//       <div className="h-[185px]">
//         <div className="h-full bg-[url(./assets/suv.png)] bg-contain bg-no-repeat bg-center rounded-lg"></div>
//       </div>
//       <motion.div
//         initial={{ y: -100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="px-2"
//       >
//         <h3 className="font-semibold text-xs text-gray-500">SUV</h3>
//         <h4 className="font-semibold text-lg">Honda Hybrid 2004</h4>
//       </motion.div>
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="show"
//         className="grid grid-cols-3 items-center justify-center p-2"
//       >
//         <motion.div
//           variants={itemVariants}
//           className="flex items-center gap-1 text-blue-500"
//         >
//           <LuUsers />
//           <p className="font-medium">5 Persons</p>
//         </motion.div>
//         <motion.div
//           variants={itemVariants}
//           className="flex items-center gap-1 text-blue-500 justify-center"
//         >
//           <TbEngine />
//           <p className="font-medium">Manual</p>
//         </motion.div>
//         <motion.div
//           variants={itemVariants}
//           className="flex items-center justify-center gap-1 text-blue-500"
//         >
//           <MdOutlineLuggage />
//           <p className="font-medium">5 Begs</p>
//         </motion.div>
//         <motion.div
//           variants={itemVariants}
//           className="flex items-center gap-1 text-blue-500"
//         >
//           <BsFuelPumpDiesel />
//           <p className="font-medium">Diesel</p>
//         </motion.div>
//         <motion.div
//           variants={itemVariants}
//           className="flex items-center gap-1 text-blue-500 justify-center"
//         >
//           <IoSpeedometerOutline />
//           <p className="font-medium">14 km</p>
//         </motion.div>
//         <motion.div
//           variants={itemVariants}
//           className="flex items-center gap-1 justify-center text-blue-500"
//         >
//           <GiCarDoor />
//           <p className="font-medium">4 Door</p>
//         </motion.div>
//       </motion.div>
//       <motion.div
//         variants={bottomContainerVariants}
//         initial="hidden"
//         animate="show"
//         className="flex justify-between border-t-2 bg-green-70 pt-2 px-2"
//       >
//         <motion.div variants={bottomItemVariants} className="flex items-center">
//           <TbCurrencyTaka className="text-2xl" />
//           <h3 className="font-semibold">
//             100/ <span className="text-gray-400 font-medium">hour</span>
//           </h3>
//         </motion.div>
//         <motion.div variants={bottomItemVariants}>
//           <PrimaryButton label="View Details" onClick={handelClick} />
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default ShowcaseCard;

import React from "react";
import { TbEngine, TbCurrencyTaka } from "react-icons/tb";
import { MdOutlineLuggage } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { BsFuelPumpDiesel } from "react-icons/bs";
import { IoSpeedometerOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import { GiCarDoor } from "react-icons/gi";
import PrimaryButton from "../atoms/PrimaryButton";
import { motion } from "framer-motion";

// Shared animation settings for all card elements
const commonAnimation = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Staggered animation for sections with multiple items
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Stagger each child animation
    },
  },
};

// Individual item animation settings
const itemAnimation = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0 },
};

const ShowcaseCard = () => {
  // Click handler for 'View Details' button
  const handleClick = () => {
    console.log("clicked card");
  };

  return (
    <div className="bg-white h-fit rounded-lg overflow-hidden p-4">
      {/* Rating and Availability Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="flex items-center gap-2"
      >
        {/* Rating */}
        <motion.div
          variants={itemAnimation}
          className="flex items-center gap-1 border-[2px] px-2 py-1 w-fit rounded-lg"
        >
          <FaStar className="text-yellow-500" />
          <div className="flex text-xs">
            <span className="font-semibold">4.8</span>
            <span className="text-gray-400">(120)</span>
          </div>
        </motion.div>

        {/* Availability Status */}
        <motion.span
          variants={itemAnimation}
          className="p-1 px-2 bg-green-200 border border-green-600 text-green-600 font-medium rounded-lg text-xs"
        >
          Available
        </motion.span>
      </motion.div>

      {/* Car Image Section */}
      <div className="h-[185px]">
        <div className="h-full bg-[url(./assets/suv.png)] bg-contain bg-no-repeat bg-center rounded-lg"></div>
      </div>

      {/* Car Details Section */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={commonAnimation}
        className="px-2"
      >
        <h3 className="font-semibold text-xs text-gray-500">SUV</h3>
        <h4 className="font-semibold text-lg">Honda Hybrid 2004</h4>
      </motion.div>

      {/* Car Specifications Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="grid grid-cols-3 items-center justify-center p-2"
      >
        {/* Specification Items */}
        {[
          { icon: <LuUsers />, label: "5 Persons" },
          { icon: <TbEngine />, label: "Manual" },
          { icon: <MdOutlineLuggage />, label: "5 Bags" },
          { icon: <BsFuelPumpDiesel />, label: "Diesel" },
          { icon: <IoSpeedometerOutline />, label: "14 km" },
          { icon: <GiCarDoor />, label: "4 Door" },
        ].map((spec, index) => (
          <motion.div
            key={index}
            variants={itemAnimation}
            className="flex items-center gap-1 text-blue-500"
          >
            {spec.icon}
            <p className="font-medium">{spec.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Pricing and 'View Details' Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="flex justify-between border-t-2 bg-green-70 pt-2 px-2"
      >
        {/* Pricing */}
        <motion.div variants={itemAnimation} className="flex items-center">
          <TbCurrencyTaka className="text-2xl" />
          <h3 className="font-semibold">
            100/ <span className="text-gray-400 font-medium">hour</span>
          </h3>
        </motion.div>

        {/* 'View Details' Button */}
        <motion.div variants={itemAnimation}>
          <PrimaryButton label="View Details" onClick={handleClick} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ShowcaseCard;
