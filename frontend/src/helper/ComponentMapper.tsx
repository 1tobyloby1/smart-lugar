import ComponentLoader from "./ComponentLoader";
import ComponentTypes from "shared/resources/ComponentTypes";
import Controller from "shared/Models/Controller";
import { useMemo } from "react";
import SubPages from "../components/SubPages";

const ComponentMapper = (controllers: Controller[]) => {
  const showAsTabs = controllers.every((controller) => controller.type === "Temperature_Slider");

  const elements = controllers.map((controller) => {
    return (
      <ComponentLoader
        key={controller.nodeId}
        componentPath={ComponentTypes[controller.type]}
        data={controller}
      />
    );
  });

  if (showAsTabs) return <SubPages controllers={controllers}>{elements}</SubPages>;
  return elements;
};

export default ComponentMapper;
