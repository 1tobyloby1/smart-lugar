import ComponentLoader from "./ComponentLoader";
import ComponentTypes from "shared/resources/ComponentTypes";
import Controller from "shared/Models/Controller";

const ComponentMapper = (controllers: Controller[]) => {
  return (
    <>
      {controllers.map((controller) => {
        return (
          <ComponentLoader
            key={controller.nodeId}
            componentPath={ComponentTypes[controller.type]}
            data={controller}
          />
        );
      })}
    </>
  );
};

export default ComponentMapper;
