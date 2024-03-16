import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PageLayout from "../components/PageLayout/PageLayout";
import GroupBtn from "../components/GroupBtn/GroupBtn";

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
        <GroupBtn />
      </PageLayout>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

export default routes;
