import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleGoBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#CC0595]">
      <h1 className="text-6xl font-bold mb-4">Not Found</h1>
      <p className="text-xl mb-8">Current route: {location.pathname}</p>
      <div className="space-x-4">
        <button
          onClick={handleHomeClick}
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        >
          Home
        </button>
        <button
          onClick={handleGoBackClick}
          className="px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
