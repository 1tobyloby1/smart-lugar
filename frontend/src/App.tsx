import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import useIsLandscape from "./hooks/useIsLandscape";
import RotatePage from "./pages/RotatePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import generateRoutes from "./functions/generateRoutes";
import defaultRoutes from "./resources/routes";

function App() {
  const [routes, setRoutes] = useState(createBrowserRouter(defaultRoutes));
  const isLandscape = useIsLandscape();

  const fetchRoutes = async () => {
    try {
      const generatedRoutes = await generateRoutes();
      setRoutes(generatedRoutes);
    } catch (error) {
      console.error("Error generating routes:", error);
    }
  };

  useEffect(() => {
    fetchRoutes();
  }, []);

  return (
    <>
      <Header />
      {isLandscape ? <RouterProvider router={routes} /> : <RotatePage />}
    </>
  );
}

export default App;
