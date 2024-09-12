import React from "react";
import Header from "../components/common/organisms/Header";
import { NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { LuHistory } from "react-icons/lu";
import { MdPayment } from "react-icons/md";
import { LiaCarSideSolid } from "react-icons/lia";
import { HiOutlineUsers } from "react-icons/hi";
import { LuClipboardList } from "react-icons/lu";
import { MdKeyboardReturn } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";

const DashboardLayout = () => {
  return (
    <div className="mx-auto max-w-7xl font-montserrat">
      <Header />
      <div className="flex gap-4">
        <div className="h-screen w-[20%] bg-gray-200 rounded-lg p-6 space-y-4">
          <div className="flex items-center gap-2">
            <LuLayoutDashboard className="text-2xl" />
            <NavLink to={"userOverview"}>Overview</NavLink>
          </div>
          <div className="flex items-center gap-2">
            <LuLayoutDashboard className="text-2xl" />
            <NavLink to={"adminOverview"}>Overview</NavLink>
          </div>
          <div className="flex items-center gap-2">
            <CgProfile className="text-2xl" />
            <NavLink to={"/profile"}>Profile</NavLink>
          </div>
          <div className="flex gap-2">
            <LuHistory className="text-2xl" />
            <NavLink to={"myBookings"}>Booking History</NavLink>
          </div>
          <div className="flex gap-2">
            <LuHistory className="text-2xl" />
            <NavLink to={"myBookings"}>My Bookings</NavLink>
          </div>
          <div className="flex gap-2">
            <MdPayment className="text-2xl" />
            <NavLink to={"/profile"}>Payments</NavLink>
          </div>
          <div className="flex gap-2">
            <LiaCarSideSolid className="text-2xl" />
            <NavLink to={"manageCar"}>Manage Cars</NavLink>
          </div>
          <div className="flex gap-2">
            <LuClipboardList className="text-2xl" />
            <NavLink to={"manageBookings"}>Manage Bookings</NavLink>
          </div>
          <div className="flex gap-2">
            <MdKeyboardReturn className="text-2xl" />
            <NavLink to={"manageReturnCar"}>Manage Return Cars</NavLink>
          </div>
          <div className="flex gap-2">
            <HiOutlineUsers className="text-2xl" />
            <NavLink to={"manageUser"}>User Management</NavLink>
          </div>
        </div>
        <div className="w-[80%] rounded-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
