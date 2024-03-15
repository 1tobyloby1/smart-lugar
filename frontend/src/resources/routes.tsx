import { Navigate, RouteObject } from "react-router-dom";
import HomePage from "../pages/HomePage";

const defaultRoutes:RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
];

export default defaultRoutes;
