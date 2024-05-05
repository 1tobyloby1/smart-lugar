import { useState } from "react";
import Controller from "shared/Models/Controller";
import "./Slider.css";
import Interact from "../../functions/Interact";
import { toast } from "react-toastify";
import useVariableListener from "../../hooks/useVariableListener";

const Slider = (props: Controller) => {
  const [value, setValue] = useState(50);
  useVariableListener(props.SetPoint!, setValue);

  const handleOnChange = (event: any) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  const handleOnMouseUp = async () => {
    const result = await Interact(props.nodeId, props.SetPoint!, value);
    if (!result.successful) {
      toast.error("Unable to change value");
    }
  };

  const getSliderBackground = () => {
    const percentage = ((value - 0) / (100 - 0)) * 100;
    return `linear-gradient(to right, #F58014 ${percentage}%, #D9D9D9 ${percentage}%)`;
  };

  /*useEffect(() => {
    (async () => {
      const response = await Interact(props.nodeId, props.SetPoint!);
      if (response.successful) {
        setValue(response.data as number);
      }
    })();
  }, [props.nodeId, props.SetPoint]);*/

  return (
    <div className="slider-parent">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        className="slider"
        onChange={handleOnChange}
        onMouseUp={handleOnMouseUp}
        style={{ background: getSliderBackground() }}
      />
      <span className="slider-current-value">{value} %</span>
    </div>
  );
};

export default Slider;
