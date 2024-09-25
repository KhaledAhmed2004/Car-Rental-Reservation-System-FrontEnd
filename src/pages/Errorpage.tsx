import React from "react";
import { useNavigate } from "react-router-dom";

interface ErrorPageProps {
  errorMessage?: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ errorMessage }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Oops! Page not found</h2>
        {errorMessage && (
          <p className="text-lg mb-4 text-gray-600">{errorMessage}</p>
        )}
        <p className="text-lg mb-8 text-gray-600">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate(-1)} // Goes back to the previous page
            className="bg-gray-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-600 transition-colors duration-300"
          >
            Go Back
          </button>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
