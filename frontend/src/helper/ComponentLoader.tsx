import React, { Suspense } from "react";
import Component from "shared/Models/Component";

const loadComponent = async (path: string) => {
  let component;

  try {
    component = await import(`../components/${path}`);
  } catch (error) {
    component = await import(`../components/ErrorComponent`);
  }
  return component;
};

interface ComponentLoaderProps {
  componentPath: string;
  data: Component;
}

const ComponentLoader = (props: ComponentLoaderProps) => {
  const Component = React.lazy(() => loadComponent(props.componentPath));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props.data} />
    </Suspense>
  );
};

export default ComponentLoader;
