import React from "react";
import { useAppSelector } from "../redux/hooks";
import { useCurrentToken } from "../redux/features/auth/authSlice";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = useAppSelector(useCurrentToken);
  const location = useLocation(); // Get the current location

  if (!token) {
    return (
      <Navigate
        to={"/signIn"}
        state={{ from: location }}
        replace={true}
      ></Navigate>
    );
  }

  return children;
};

export default ProtectedRoute;
