import React from "react";

type InputProps = {
  label: string;
  classname: string;
  setBill?: (bill: number) => void;
  setPeople?: (people: number) => void;
};

const Input: React.FC<InputProps> = ({
  label,
  classname,
  setBill,
  setPeople,
}) => {
  return (
    <div className={`${classname}`}>
      <label
        className="mb-2 block font-mono text-sm font-bold text-grayishCyan"
        htmlFor="bill"
      >
        {label}
      </label>
      <input
        type="text"
        placeholder="0"
        className="block h-9 w-64 appearance-none rounded border-gray-200 bg-gray-200 px-4 py-3 text-right font-mono text-xl leading-tight text-veryDarkCyan focus:border-gray-500 focus:outline-none"
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
