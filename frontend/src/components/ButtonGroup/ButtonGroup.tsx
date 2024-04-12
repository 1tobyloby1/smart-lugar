import { useState } from "react";
import "./ButtonGroup.css";

const ButtonGroup = () => {
  const [selectedOption, setSelectedOption] = useState(1);

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
  };

  const calculateLeftPosition = () => {
    switch (selectedOption) {
      case 1:
        return "0%";
      case 2:
        return "34.995%";
      case 3:
        return "69.99%";
      default:
        return "0%";
    }
  };
 
  return (
    <div className="button-group">
      <button
        className="option-button"
        style={{ left: calculateLeftPosition() }}
      >
        
      </button>
      <div className="option-selector">
        <button
          className="option-selector-button"
          onClick={() => handleOptionClick(1)}
        >
          Comfort
        </button>
        <div className="divider"></div>
        <button
          className="option-selector-button"
          onClick={() => handleOptionClick(2)}
        >
          ECO
        </button>
        <div className="divider"></div>
        <button
          className="option-selector-button"
          onClick={() => handleOptionClick(3)}
        >
          ECO+
        </button>
      </div>
    </div>
  );
};

export default ButtonGroup;
