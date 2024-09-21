import Navbar from "@/components/global/Navbar";
import { Navigate, Outlet } from "react-router-dom";

export const DashboardLayout = () => {
  const connectedWallet = localStorage.getItem("dynamic_connected_wallet_ns");
  if (!connectedWallet) return <Navigate to={"/"} />;

  return (
    <div className="h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};
