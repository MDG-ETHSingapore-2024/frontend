import ErrorPage from "@/error-page";
import NotFoundPage from "@/not-found";
import Dashboard from "@/screens/Dashboard/Dashboard";
import { DashboardLayout } from "@/screens/Dashboard/DashboardLayout";
import Home from "@/screens/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Home />,
  },
  {
    path: "dashboard",
    errorElement: <ErrorPage />,
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
