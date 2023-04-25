import React from "react";
import { PercentageProps, ActiveButton } from "../types";

const Percentage: React.FC<PercentageProps> = ({
  setTip,
  activeButton,
  setActiveButton,
}) => {
  const handleButtonClick = (index: ActiveButton, tip: number) => {
    setTip(tip);
    setActiveButton(index);
  };

  return (
    <div className="tip-btns">
      <h3 className="mb-2 font-mono text-grayishCyan">Select Tip %</h3>
      <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 md:gap-2">
        <button
          className={`w-full rounded-md p-4 text-center font-mono text-lg hover:bg-[#9FE8DF] hover:text-[#00494d] md:p-2 ${
            activeButton === 0
              ? "bg-strongCyan text-[#00494d]"
              : "bg-veryDarkCyan text-White"
          }`}
          onClick={() => handleButtonClick(0, 5)}
        >
          5%
        </button>
        <button
          className={`w-full rounded-md p-4 text-center font-mono text-lg hover:bg-[#9FE8DF] hover:text-[#00494d] md:p-2 ${
            activeButton === 1
              ? "bg-strongCyan text-[#00494d]"
              : "bg-veryDarkCyan text-White"
          }`}
          onClick={() => handleButtonClick(1, 10)}
        >
          10%
        </button>
        <button
          className={`w-full rounded-md p-4 text-center font-mono text-lg hover:bg-[#9FE8DF] hover:text-[#00494d] md:p-2 ${
            activeButton === 2
              ? "bg-strongCyan text-[#00494d]"
              : "bg-veryDarkCyan text-White"
          }`}
          onClick={() => handleButtonClick(2, 15)}
        >
          15%
        </button>
        <button
          className={`w-full rounded-md p-2 text-center font-mono text-lg hover:bg-[#9FE8DF] hover:text-[#00494d] ${
            activeButton === 3
              ? "bg-strongCyan text-[#00494d]"
              : "bg-veryDarkCyan text-White"
          }`}
          onClick={() => handleButtonClick(3, 25)}
        >
          25%
        </button>
        <button
          className={`w-full rounded-md p-4 text-center font-mono text-lg hover:bg-[#9FE8DF] hover:text-[#00494d] md:p-2 ${
            activeButton === 4
              ? "bg-strongCyan text-[#00494d]"
              : "bg-veryDarkCyan text-White"
          }`}
          onClick={() => handleButtonClick(4, 50)}
        >
          50%
        </button>
        <div className="tip-input">
          <input
            type="number"
            placeholder="Custom"
            className="w-full appearance-none rounded border-gray-200 bg-gray-200 p-5 text-right font-mono text-lg leading-tight text-veryDarkCyan focus:border-gray-500 focus:outline-none md:p-3"
            onChange={(e) => setTip(e.target.valueAsNumber)}
          />
        </div>
      </div>
    </div>
  );
};

export default Percentage;
