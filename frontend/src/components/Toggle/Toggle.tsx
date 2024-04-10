import { useState } from "react";
import Switch from "react-switch";
import Component from "shared/Models/Component";
import "./Toggle.css";

function Toggle(props: Component) {
  const [isChecked, setisChecked] = useState(false);

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
