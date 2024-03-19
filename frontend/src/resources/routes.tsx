import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PageLayout from "../components/PageLayout/PageLayout";
import GroupBtn from "../components/GroupBtn/GroupBtn";
import ButtonGroup from "../components/ButtonGroup/ButtonGroup";

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
        <ButtonGroup />
      </PageLayout>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

export default routes;
