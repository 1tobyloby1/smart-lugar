import Header from "./components/Header/Header";
import useIsLandscape from "./hooks/useIsLandscape";
import RotatePage from "./pages/RotatePage";
import routes from "./resources/routes";
import { RouterProvider } from "react-router-dom";

function App() {
  const isLandscape = useIsLandscape();

  return (
    <>
      <Header />
      {isLandscape ? <RouterProvider router={routes} /> : <RotatePage />}
    </>
  );
}

export default App;
