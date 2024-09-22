import Navbar from "@/components/global/Navbar";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";

export const DashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = () => {
    navigate("/");
  };
  const { isConnected } = useAccount();
  const [add, setAdd] = useState<string>("");
  useEffect(() => {
    const getdynAdd = async () => {
      const temp = await localStorage.getItem(
        "dynamic_min_authentication_token"
      );
      setAdd(temp as string);
      return temp;
    };
    getdynAdd();
  }, []);
  if (!isConnected && !add)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black">
        <h1 className="text-6xl font-bold mb-4">Not Authenticated</h1>
        <p className="text-xl mb-8">
          Please login to access: {location.pathname}
        </p>
        <div className="space-x-4">
          <button
            onClick={handleHomeClick}
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            Go Back to login
          </button>
        </div>
      </div>
    );
  return (
    <div className="h-screen">
      <div className="w-full bg-[#1C1C1C] border-[#2E2E2E] border-[1px] text-white  px-3 outline-none">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};
