import ErrorPage from "@/error-page";
import NotFoundPage from "@/not-found";
import Home from "@/screens/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Home />,
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
