import React from "react";
import { InputProps } from "../types";

const Input: React.FC<InputProps> = ({
  label,
  classname,
  setBill,
  setPeople,
  value,
  setValue,
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
        value={value}
        className="block h-9 w-full appearance-none rounded border-gray-200 bg-gray-200 px-4 py-3 text-right font-mono text-xl leading-tight text-veryDarkCyan focus:border-gray-500 focus:outline-none"
        onChange={(e) => {
          setValue(e.target.valueAsNumber);
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
