import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/common/organisms/Header";

const MainLayout = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
