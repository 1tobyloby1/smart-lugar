import Component from "shared/Models/Component";
import ComponentLoader from "./ComponentLoader";
import ComponentTypes from "shared/resources/ComponentTypes";

const ComponentMapper = (components: Component[]) => {
  return (
    <>
      {components.map((component, index) => {
        return (
          <ComponentLoader
            key={`${component.type}-${index}`}
            componentPath={ComponentTypes[component.type]}
            data={component}
          />
        );
      })}
    </>
  );
};

export default ComponentMapper;
