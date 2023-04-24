import React, { useState } from "react";

type PercentageProps = {
  setTip: (tip: number) => void;
};

const Percentage: React.FC<PercentageProps> = ({ setTip }) => {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index: number, tip: number) => {
    setTip(tip);
    setActiveButton(index);
  };

  return (
    <div className="tip-btns">
      <h3 className="mb-2 font-mono text-grayishCyan">Select Tip %</h3>
      <div className="grid w-64 grid-cols-3 gap-2">
        <button
          className={`w-20 rounded-md text-center ${
            activeButton === 0
              ? "bg-strongCyan text-black"
              : "bg-veryDarkCyan text-White"
          } bg-veryDarkCyan p-1 text-White`}
          onClick={() => handleButtonClick(0, 5)}
        >
          5%
        </button>
        <button
          className="w-20 rounded-md bg-veryDarkCyan p-1 text-center text-White"
          onClick={() => handleButtonClick(1, 10)}
        >
          10%
        </button>
        <button
          className="w-20 rounded-md bg-veryDarkCyan p-1 text-center text-White"
          onClick={() => handleButtonClick(2, 15)}
        >
          15%
        </button>
        <button
          className="w-20 rounded-md bg-veryDarkCyan p-1 text-center text-White"
          onClick={() => handleButtonClick(3, 25)}
        >
          25%
        </button>
        <button
          className="w-20 rounded-md bg-veryDarkCyan p-1 text-center text-White"
          onClick={() => handleButtonClick(4, 50)}
        >
          50%
        </button>
        <div className="tip-input">
          <input
            type="text"
            placeholder="Custom"
            className="w-20 appearance-none rounded border border-gray-200 bg-gray-200 p-1 text-right leading-tight text-gray-700 focus:border-gray-500 focus:outline-none"
            onChange={(e) => setTip(e.target.valueAsNumber)}
          />
        </div>
      </div>
    </div>
  );
};

export default Percentage;
