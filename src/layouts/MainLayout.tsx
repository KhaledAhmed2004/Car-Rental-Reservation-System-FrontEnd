import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/common/organisms/Header";
import Footer from "../components/common/organisms/Footer";

const MainLayout = () => {
  return (
    <div className="mx-auto max-w-7xl font-montserrat">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
