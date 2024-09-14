import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/common/organisms/Header";
import Footer from "../components/common/organisms/Footer";

const MainLayout = () => {
  return (
    <div className="font-montserrat bg-gray-100">
      <Header />
      <div className="mx-auto max-w-7xl pt-[80px]">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
