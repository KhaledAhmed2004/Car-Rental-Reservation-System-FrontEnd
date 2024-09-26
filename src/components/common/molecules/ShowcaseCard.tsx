import React from "react";
import { TbEngine, TbCurrencyTaka } from "react-icons/tb";
import { MdOutlineLuggage } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { BsFuelPumpDiesel } from "react-icons/bs";
import PrimaryButton from "../atoms/PrimaryButton";
import { IoSpeedometerOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import { GiCarDoor } from "react-icons/gi";
import { motion } from "framer-motion";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks";

const ShowcaseCard = ({
  carId,
  rating,
  model,
  brand,
  status,
  carType,
  image,
  seats,
  transmission,
  luggageCapacity,
  fuelType,
  mileage,
  doors,
  pricePerHour,
}) => {
  const navigate = useNavigate();
  const handleViewDetails = () => {
    navigate(`/cars/${carId}`); // Navigate to the dynamic route
  };
  // console.log(carId);
  const topContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each child animation
      },
    },
  };
  const topItemVariants = {
    hidden: { y: -20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between children
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  const bottomContainerVariants = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3, // Stagger effect for children
      },
    },
  };

  const bottomItemVariants = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-white h-fit rounded-lg overflow-hidden p-4">
      <motion.div
        variants={topContainerVariants}
        initial="hidden"
        animate="show"
        className="flex items-center gap-2"
      >
        <motion.div
          variants={topItemVariants}
          className="flex items-center gap-1 border-[2px] px-2 py-1 w-fit rounded-lg"
        >
          <FaStar className="text-yellow-500" />
          <div className="flex text-xs">
            <span className="font-semibold">{rating}</span>
            {/* <span className="text-gray-400 ">({ratingCount})</span> */}
          </div>
        </motion.div>
        {/* <motion.span
          variants={topItemVariants}
          className={`p-1 px-2 ${
            status
              ? "bg-green-200 text-green-600 border-green-600"
              : "bg-red-200 text-red-600 border-red-600"
          } font-medium rounded-lg text-xs`}
        >
          {status}
        </motion.span> */}
        <motion.span
          variants={topItemVariants}
          className={`p-1 px-2 ${
            status === "available"
              ? "bg-green-200 text-green-600 border-green-600"
              : "bg-red-200 text-red-600 border-red-600"
          } font-medium rounded-lg text-xs`}
        >
          {status}
        </motion.span>
      </motion.div>
      <div className="h-[185px]">
        <div
          className="h-full bg-contain bg-no-repeat bg-center rounded-lg"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="px-2"
      >
        <h3 className="font-semibold text-xs text-gray-500">{carType}</h3>
        <h4 className="font-semibold text-lg">
          {brand} {model}
        </h4>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-3 items-center justify-center p-2"
      >
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-1 text-blue-500"
        >
          <LuUsers />
          <p className="font-medium">{seats} Persons</p>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-1 text-blue-500 justify-center"
        >
          <TbEngine />
          <p className="font-medium">{transmission}</p>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-1 text-blue-500"
        >
          <MdOutlineLuggage />
          <p className="font-medium">{luggageCapacity} Bags</p>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-1 text-blue-500"
        >
          <BsFuelPumpDiesel />
          <p className="font-medium">{fuelType}</p>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-1 text-blue-500 justify-center"
        >
          <IoSpeedometerOutline />
          <p className="font-medium">{mileage} km/h</p>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-1 justify-center text-blue-500"
        >
          <GiCarDoor />
          <p className="font-medium">{doors} Doors</p>
        </motion.div>
      </motion.div>
      <motion.div
        variants={bottomContainerVariants}
        initial="hidden"
        animate="show"
        className="flex justify-between border-t-2 bg-green-70 pt-2 px-2"
      >
        <motion.div variants={bottomItemVariants} className="flex items-center">
          <TbCurrencyTaka className="text-2xl" />
          <h3 className="font-semibold">
            {pricePerHour}/{" "}
            <span className="text-gray-400 font-medium">hour</span>
          </h3>
        </motion.div>
        <motion.div className="pt-2" variants={bottomItemVariants}>
          <PrimaryButton label="View Details" onClick={handleViewDetails} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ShowcaseCard;
