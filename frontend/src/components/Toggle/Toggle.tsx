import Controller from "shared/Models/Controller";
import Switch from "react-switch";
import { useState } from "react";
import "./Toggle.css";
import Interact from "../../functions/Interact";
import { toast } from "react-toastify";
import useVariableListener from "../../hooks/useVariableListener";

function Toggle(props: Controller) {
  const [isChecked, setisChecked] = useState(false);
  useVariableListener(props.IsEnabled, setisChecked);

  const handleToggle = async (newValue: boolean) => {
    setisChecked(newValue);

    const methodIdToCall = isChecked ? props.Disable : props.Enable;
    const result = await Interact(props.nodeId, methodIdToCall);

    if (!result.successful) {
      setisChecked(!newValue);
      toast.error("Unable toggle");
    }
  };

  return (
    <Switch
      onChange={handleToggle}
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
