import { useState } from "react";
import "./Slider.css";
import Component from "shared/Models/Component";

const Slider = (props: Component) => {
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
