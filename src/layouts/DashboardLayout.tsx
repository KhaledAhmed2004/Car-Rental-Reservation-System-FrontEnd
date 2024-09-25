import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Header from "../components/common/organisms/Header";
import { useSelector } from "react-redux";
import { user } from "../redux/features/auth/authSlice"; // Assuming user selector is defined

// Icons
import { CgProfile } from "react-icons/cg";
import { LuHistory, LuClipboardList, LuLayoutDashboard } from "react-icons/lu";
import { MdPayment, MdKeyboardReturn } from "react-icons/md";
import { LiaCarSideSolid } from "react-icons/lia";
import { HiOutlineUsers } from "react-icons/hi";

const DashboardLayout = () => {
  const currentUser = useSelector(user); // Get the current user from the Redux store
  const userRole = currentUser?.role; // Assuming role is part of the user object

  return (
    <div className="font-montserrat bg-gray-100">
      {/* Header Component */}
      <Header />

      {/* Main layout with sidebar and content */}
      <div className="flex gap-4 pt-[96px] mx-auto max-w-7xl">
        {/* Sidebar */}
        <div className="h-[calc(100vh-96px)] w-[20%] bg-white rounded-lg p-6 space-y-1">
          {/* user-specific links */}
          {userRole === "user" && (
            <>
              <DashboardNavLink
                icon={<LuLayoutDashboard />}
                to="userOverview"
                label="Overview"
              />
              <DashboardNavLink
                icon={<LuHistory />}
                to="myBookings"
                label="My Bookings"
              />
              <DashboardNavLink
                icon={<MdPayment />}
                to="payment"
                label="Payments"
              />
            </>
          )}
          {/* Admin-specific links */}
          {userRole === "admin" && (
            <>
              <DashboardNavLink
                icon={<LuLayoutDashboard />}
                to="adminOverview"
                label="Overview"
              />
              <DashboardNavLink
                icon={<LiaCarSideSolid />}
                to="manageCar"
                label="Manage Cars"
              />
              <DashboardNavLink
                icon={<LuClipboardList />}
                to="manageBookings"
                label="Manage Bookings"
              />
              <DashboardNavLink
                icon={<MdKeyboardReturn />}
                to="manageReturnCar"
                label="Manage Return Cars"
              />
              <DashboardNavLink
                icon={<HiOutlineUsers />}
                to="manageUser"
                label="User Management"
              />
            </>
          )}
        </div>

        {/* Main Content Area */}
        <div className="w-[80%] rounded-lg">
          {/* Renders the child routes here */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

/**
 * DashboardNavLink Component
 * Reusable component for rendering navigation links in the sidebar
 */
const DashboardNavLink = ({ icon, to, label }) => {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <div
          className={`group flex items-center gap-2 font-medium p-2 rounded-lg transition-all ${
            isActive
              ? "bg-slate-100 text-blue-600"
              : "hover:bg-slate-100 hover:text-blue-600"
          }`}
        >
          <span className="mr-2 transition-transform group-hover:translate-x-2">
            {icon}
          </span>
          <span className="transition-transform group-hover:translate-x-2">
            {label}
          </span>
        </div>
      )}
    </NavLink>
  );
};

export default DashboardLayout;
