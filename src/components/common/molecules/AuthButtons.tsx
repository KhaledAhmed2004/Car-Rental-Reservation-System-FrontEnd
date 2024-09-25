import React from "react";
import PrimaryButton from "../atoms/PrimaryButton";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import OutLineButton from "../atoms/OutLineButton";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  logOut,
  useCurrentToken,
} from "../../../redux/features/auth/authSlice";
import { Dropdown, MenuProps } from "antd";

const AuthButtons = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector(useCurrentToken);
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logOut());
  };
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <NavLink to={"dashboard/userOverview"}>Overview</NavLink>,
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Manage Booking
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <div className="flex justify-center">
          <button
            onClick={handleLogout}
            className="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg z-50"
          >
            LogOut
          </button>
        </div>
      ),
    },
  ];

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "circOut" }}
      className="flex gap-2"
    >
      {token ? (
        <Dropdown
          className="hidden md:block"
          menu={{ items }}
          placement="bottomRight"
          arrow
        >
          <div className="h-10 w-10 rounded-full bg-center bg-cover bg-gray-500 cursor-pointer bg-[url(https://i.ibb.co/vcQZhpc/1921098.png)]"></div>
        </Dropdown>
      ) : (
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
