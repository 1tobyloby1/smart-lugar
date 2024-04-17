import { Navigate, RouteObject } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SetupPage from "../pages/SetupPage";

const defaultRoutes:RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
  {
    path: "/setup",
    element: <SetupPage />,
  },
];

export default defaultRoutes;
