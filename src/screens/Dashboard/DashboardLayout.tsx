import Navbar from "@/components/global/Navbar";
import { Outlet } from "react-router-dom";

export const DashboardLayout = () => (
  <div className="h-screen">
    <Navbar />
    <Outlet />
  </div>
);
