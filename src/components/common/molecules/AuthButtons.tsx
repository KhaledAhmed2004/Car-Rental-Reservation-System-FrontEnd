import React from "react";
import PrimaryButton from "../atoms/PrimaryButton";
import { motion } from "framer-motion";

const AuthButtons = () => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "circOut" }}
      className="flex gap-2"
    >
      <PrimaryButton
        onClick={() => {
          console.log("Login");
        }}
        label={"Login"}
      />
      <PrimaryButton
        onClick={() => {
          console.log("Sing Up");
        }}
        label={"Sign Up"}
      />
    </motion.div>
  );
};

export default AuthButtons;
