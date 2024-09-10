import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import CarListingPage from "../pages/CarListingPage";
import CarDetailsPage from "../pages/CarDetailsPage";
import SignInpage from "../pages/SignInpage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/aboutUs", element: <AboutUsPage /> },
      { path: "/car-listing", element: <CarListingPage /> },
      { path: "/car/:id", element: <CarDetailsPage /> },
      { path: "/signIn", element: <SignInpage /> },
    ],
  },
]);
export default Router;
