import Controller from "shared/Models/Controller";
import Switch from "react-switch";
import { useEffect, useMemo, useState } from "react";
import "./Toggle.css";
import GetComponentData from "../../functions/GetComponentData";

function Toggle(props: Controller) {
  const [isChecked, setisChecked] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await GetComponentData(props.IsEnabled);
      console.log(data);
      
      if (data !== null) {
        setisChecked(data as boolean);
      }
    })();

  }, []);

  return (
    <Switch
      onChange={(checked) => setisChecked(checked)}
      checked={isChecked}
      width={80}
      height={35}
      handleDiameter={27}
      offColor="#860303"
      onColor="#007528"
      checkedIcon={<div className="toggle-label">ON</div>}
      uncheckedIcon={<div className="toggle-label">OFF</div>}
    />
  );
}

export default Toggle;
