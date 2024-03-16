import React, { useState } from 'react'
import './GroupBtn.css'

function GroupBtn() {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonId: any) => {
        setActiveButton(buttonId);
    }

  return (
        <div className="button-bar">
      <button
        className={activeButton === 1 ? 'active' : ''}
        onClick={() => handleButtonClick(1)}
      >
        Comfort
      </button>
      <button
        className={activeButton === 2 ? 'active' : ''}
        onClick={() => handleButtonClick(2)}
      >
        ECO
      </button>
      <button
        className={activeButton === 3 ? 'active' : ''}
        onClick={() => handleButtonClick(3)}
      >
        ECO+
      </button>
    </div>
  )
}

export default GroupBtn