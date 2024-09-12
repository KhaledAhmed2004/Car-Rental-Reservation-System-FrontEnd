import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import CarListingPage from "../pages/CarListingPage";
import CarDetailsPage from "../pages/CarDetailsPage";
import SignUpPage from "../pages/SignUpPage";
import SignInPage from "../pages/SignInpage";
import DashboardLayout from "../layouts/DashboardLayout";
import UserOverView from "../pages/userDashboard/UserOverView";
import MyBooking from "../pages/userDashboard/MyBooking";
import AdminOverviewPage from "../pages/adminDashboard/AdminOverviewPage";
import ManageCarPage from "../pages/adminDashboard/ManageCarPage";
import ManageBookingsPage from "../pages/adminDashboard/ManageBookingsPage";
import ManageReturnCarPage from "../pages/adminDashboard/ManageReturnCarPage";
import ManageUser from "../pages/adminDashboard/ManageUser";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/aboutUs", element: <AboutUsPage /> },
      { path: "/car-listing", element: <CarListingPage /> },
      { path: "/car/:id", element: <CarDetailsPage /> },
      { path: "/signIn", element: <SignInPage /> },
      { path: "/signUp", element: <SignUpPage /> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "userOverview",
        element: <UserOverView />,
      },
      {
        path: "adminOverview",
        element: <AdminOverviewPage />,
      },
      {
        path: "myBookings",
        element: <MyBooking />,
      },
      {
        path: "manageCar",
        element: <ManageCarPage />,
      },
      {
        path: "manageBookings",
        element: <ManageBookingsPage />,
      },
      {
        path: "manageReturnCar",
        element: <ManageReturnCarPage />,
      },
      {
        path: "manageUser",
        element: <ManageUser />,
      },
    ],
  },
]);
export default Router;
