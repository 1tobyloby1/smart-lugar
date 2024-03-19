import React, { useState } from "react";
import "./GroupBtn.css";

function GroupBtn() {
  const [selectedOption, setSelectedOption] = useState(0);

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
  };

  const calculateLeftPosition = () => {
    switch (selectedOption) {
      case 0:
        return "0%";
      case 1:
        return "33.33%";
      case 2:
        return "66.66%";
      default:
        return "0%";
    }
  };

  return (
    <div className="button-bar">
      <button
        className=""
        style={{ left: calculateLeftPosition() }}
      >
        Option
      </button>
      <div className="button">
        <button
          className=""
          onClick={() => handleOptionClick(0)}
        >
          Comfort
        </button>
        <button
          className=""
          onClick={() => handleOptionClick(1)}
        >
          ECO
        </button>
        <button
          className=""
          onClick={() => handleOptionClick(2)}
        >
          ECO+
        </button>
      </div>
    </div>
  );
}

export default GroupBtn;
