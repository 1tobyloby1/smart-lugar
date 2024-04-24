import Controller from "shared/Models/Controller";
import Switch from "react-switch";
import { useEffect, useState } from "react";
import "./Toggle.css";
import Interact from "../../functions/Interact";

function Toggle(props: Controller) {
  const [isChecked, setisChecked] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await Interact(props.nodeId, props.IsEnabled);
      
      if (data !== null) {
        setisChecked(data as boolean);
      }
    })();
  }, [props.nodeId, props.IsEnabled]);

  const handleToggle = async (newValue: boolean) => {
    const methodIdToCall = isChecked ? props.Disable : props.Enable;
    const result = await Interact(props.nodeId, methodIdToCall);
    console.log(result);

    setisChecked(newValue);
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
