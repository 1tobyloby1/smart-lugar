import { useState } from "react";
import Controller from "shared/Models/Controller";
import "./Slider.css";

const Slider = (props: Controller) => {
  const [value, setValue] = useState(50);

  const handleOnChange = (event: any) => {
    setValue(event.target.value);
  };

  const getSliderBackground = () => {
    const percentage = ((value - 0) / (100 - 0)) * 100;
    return `linear-gradient(to right, #F58014 ${percentage}%, #D9D9D9 ${percentage}%)`;
  };

  return (
    <div className="slider-parent">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        className="slider"
        onChange={handleOnChange}
        style={{ background: getSliderBackground() }}
      />
      <span className="slider-current-value">{value} %</span>
    </div>
  );
};

export default Slider;
