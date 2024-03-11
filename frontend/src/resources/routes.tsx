import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PageLayout from "../components/PageLayout/PageLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/air-condition",
    element: (
      <PageLayout title="Other stuff" subTitle="Cabin543">
        content
      </PageLayout>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

export default routes;
