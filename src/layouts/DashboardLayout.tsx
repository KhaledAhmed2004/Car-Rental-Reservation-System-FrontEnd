import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Header from "../components/common/organisms/Header";
import { useSelector } from "react-redux";
import { user } from "../redux/features/auth/authSlice"; // Assuming user selector is defined

// Icons
import { LuHistory, LuClipboardList, LuLayoutDashboard } from "react-icons/lu";
import { MdPayment, MdKeyboardReturn } from "react-icons/md";
import { LiaCarSideSolid } from "react-icons/lia";
import { HiOutlineUsers } from "react-icons/hi";
import { Button, Drawer } from "antd";

const DashboardLayout = () => {
  const currentUser = useSelector(user); // Get the current user from the Redux store
  const userRole = currentUser?.role; // Assuming role is part of the user object

  // State for controlling the drawer visibility
  const [drawerVisible, setDrawerVisible] = useState(false);

  // Functions to handle drawer visibility
  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  return (
    <div className="font-montserrat bg-gray-100">
      {/* Header Component */}
      <Header />

      <div className="lg:hidden pt-24 pb-4">
        <Button type="primary" onClick={showDrawer}>
          Open Filters
        </Button>
      </div>

      {/* Drawer for small devices */}
      <Drawer
        title="Filter"
        placement="left"
        onClose={closeDrawer}
        open={drawerVisible}
        className="lg:hidden"
      >
        <div className="h-full w-full bg-white rounded-lg p-6 space-y-1">
          {userRole === "user" ? renderUserLinks() : renderAdminLinks()}
        </div>
      </Drawer>

      {/* Main layout with sidebar and content */}
      <div className="flex gap-4 lg:pt-[96px] mx-auto max-w-7xl">
        {/* Sidebar for large devices */}
        <div className="hidden lg:block h-[calc(100vh-96px)] w-[20%] bg-white rounded-lg p-6 space-y-1">
          {userRole === "user" ? renderUserLinks() : renderAdminLinks()}
        </div>

        {/* Main Content Area */}
        <div className="w-full lg:w-[80%] rounded-lg">
          {/* Renders the child routes here */}
          <Outlet />
        </div>
      </div>
    </div>
  );

  function renderUserLinks() {
    return (
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
        <DashboardNavLink icon={<MdPayment />} to="payment" label="Payments" />
      </>
    );
  }

  function renderAdminLinks() {
    return (
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
    );
  }
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
