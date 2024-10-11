import React from "react";
import PrimaryButton from "../atoms/PrimaryButton";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import OutLineButton from "../atoms/OutLineButton";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  logOut,
  useCurrentToken,
} from "../../../redux/features/auth/authSlice";

const AuthButtons = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector(useCurrentToken);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "circOut" }}
      className="flex gap-2"
    >
      {token ? (
        // Show only the logout button when the user is logged in
        <button
          onClick={handleLogout}
          className="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg"
        >
          Log Out
        </button>
      ) : (
        // Show login and sign-up buttons when the user is not logged in
        <>
          <PrimaryButton
            onClick={() => {
              navigate("/signIn");
            }}
            label={"Login"}
          />
          <OutLineButton
            onClick={() => {
              navigate("/signUp");
            }}
            label={"Sign Up"}
          />
        </>
      )}
    </motion.div>
  );
};

export default AuthButtons;
