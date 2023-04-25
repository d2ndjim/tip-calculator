import React from "react";
import { InputProps } from "../types";

const Input: React.FC<InputProps> = ({
  label,
  classname,
  setBill,
  mode,
  bill,
  people,
  setPeople,
}) => {
  return (
    <div className={`${classname}`}>
      <label
        className="mb-2 block font-mono text-sm font-bold text-grayishCyan"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        type="number"
        placeholder="0"
        value={mode === "bill" ? bill : people}
        className="block md:h-10 h-11 w-full rounded border-gray-200 bg-gray-200 p-4 text-right font-mono text-2xl text-veryDarkCyan focus:border-gray-500 focus:outline-none"
        onChange={(e) => {
          if (setBill) {
            setBill(e.target.valueAsNumber);
          } else if (setPeople) {
            setPeople(e.target.valueAsNumber);
          }
        }}
      />
    </div>
  );
};

export default Input;
