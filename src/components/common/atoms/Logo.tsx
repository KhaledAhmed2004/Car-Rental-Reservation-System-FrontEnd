import React from "react";
import { motion } from "framer-motion";
const Logo = () => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "circInOut" }}
    >
      <span className="text-3xl font-montserrat_subrayada">R </span>
      <span className="font-montserrat">E </span>
      <span className="font-montserrat">N </span>
      <span className="font-montserrat">T</span>
    </motion.div>
  );
};

export default Logo;
