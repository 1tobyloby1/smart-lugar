import { RouteObject, createBrowserRouter } from "react-router-dom";
import api from "./api";
import Cabin from "shared/Models/Cabin";
import defaultRoutes from "../resources/routes";
import componentMapping from "../helper/ComponentMapper";
import PageLayout from "../components/PageLayout/PageLayout";
import Control from "shared/Models/Control";

const ControlPage = (control: Control) => {
  return (
    <PageLayout title={control.title} subTitle="Placeholder">
      {componentMapping(control.components)}
    </PageLayout>
  );
};

const generateRoutes = async () => {
  let cabin: Cabin;
  let routes = defaultRoutes;

  const response = await api({
    method: "GET",
    url: "/cabin",
  });

  if (response.successful) {
    cabin = response.data[0] as Cabin;

    const newRoutes = cabin.controls.map((control): RouteObject => {
      return {
        path: control.href,
        element: ControlPage(control),
      };
    });

    routes.push(...newRoutes);
  }

  return createBrowserRouter(routes);
};

export default generateRoutes;
