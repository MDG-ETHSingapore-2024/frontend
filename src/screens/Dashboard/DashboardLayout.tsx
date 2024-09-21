import Navbar from "@/components/general/Navbar";
import { Outlet } from "react-router-dom";

export const DashboardLayout = () => (
  <div className="dashboard-layout">
    <Navbar />
    <Outlet />
  </div>
);
