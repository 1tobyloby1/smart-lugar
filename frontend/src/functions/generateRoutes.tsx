import { RouteObject, createBrowserRouter } from "react-router-dom";
import api from "./api";
import Cabin from "shared/Models/Cabin";
import defaultRoutes from "../resources/routes";
import componentMapping from "../helper/ComponentMapper";
import PageLayout from "../components/PageLayout/PageLayout";
import Zone from "shared/Models/Zone";
import Controller from "shared/Models/Controller";
import { toast } from "react-toastify";

const ZonePage = (zone: Zone, subTitle: string) => {
  const controllers: Controller[] = zone.rooms.map((room) => {
    return room.controllers.map((controller) => {
      return {
        room: room.displayName,
        ...controller,
      };
    });
  }).flat();

  return (
    <PageLayout title={zone.displayName} subTitle={subTitle}>
      {componentMapping(controllers)}
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
    cabin = response.data as Cabin;

    const newRoutes = cabin.zones.map((zone): RouteObject => {
      return {
        path: zone.browseName,
        element: ZonePage(zone, cabin.displayName),
      };
    });

    routes.push(...newRoutes);
  } else {
    toast.error(response.data);
  }

  return createBrowserRouter(routes);
};

export default generateRoutes;
