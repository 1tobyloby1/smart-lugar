import React, { useState } from 'react';
import './ButtonGroup.css'; // Stylesheet for ButtonGroup component

const ButtonGroup = () => {
  const [selectedOption, setSelectedOption] = useState(1);

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
  };

  // Calculate the left position of the selected option based on its index
  const calculateLeftPosition = () => {
    switch (selectedOption) {
      case 1:
        return '0%';
      case 2:
        return '33.33%';
      case 3:
        return '66.66%';
      default:
        return '0%';
    }
  };

  return (
    <div className="button-group">
      <button
        className="option-button"
        style={{ left: calculateLeftPosition() }}
      >
        Option {selectedOption}
      </button>
      <div className="option-selector">
        <button className="option-selector-button" onClick={() => handleOptionClick(1)}>1</button>
        <button className="option-selector-button" onClick={() => handleOptionClick(2)}>2</button>
        <button className="option-selector-button" onClick={() => handleOptionClick(3)}>3</button>
      </div>
    </div>
  );
};

export default ButtonGroup;
