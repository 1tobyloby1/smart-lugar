import { useMemo } from "react";
import { findIcon } from "../functions/findIcon";

function RotatePage() {
  const icon = useMemo(() => {
    return <img height={80} src={findIcon("rotate-screen")} alt="Rotate gif" />;
  }, []);

  return (
    <div className="center">
      <h1>Rotate the screen</h1>
      {icon}
    </div>
  );
}

export default RotatePage;
