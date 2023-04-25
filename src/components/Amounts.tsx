import React from "react";
import { AmountsProps } from "../types";

const Amounts: React.FC<AmountsProps> = ({ setTotal, setTipAmount, tipAmount, total, tip, bill, people, setTip, setPeople, setBill, setActiveButton }) => {
  const handleReset = () => {
    setTip(undefined);
    setBill(undefined);
    setPeople(undefined);
    setTipAmount(0);
    setTotal(0);
    setActiveButton(null);
    // setValue(undefined);
  };

  return (
    <div className="flex h-80 w-full flex-col justify-between rounded-lg bg-veryDarkCyan p-8 py-10 font-mono text-White">
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-base">Tip Amount</h1>
            <p className="text-sm text-darkGrayishCyan">/ person</p>
          </div>
          {tipAmount > 0 ? (
            <h1 className="text-3xl text-strongCyan">${tipAmount}</h1>
          ) : (
            <h1 className="text-3xl text-strongCyan">$0.00</h1>
          )}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-base">Total</h1>
            <p className="text-sm text-darkGrayishCyan">/ person</p>
          </div>
          {total > 0 ? (
            <h1 className="text-3xl text-strongCyan">${total}</h1>
          ) : (
            <h1 className="text-3xl text-strongCyan">$0.00</h1>
          )}
        </div>
      </div>
      <div className="self-center w-full">
        <button
          type="button"
          className="border-1 hover:bg-[#9FE8DF] text-xl h-11 text-[#155C59] rounded-lg bg-strongCyan w-full disabled:bg-grayishCyan disabled:text-[#0D686D] disabled:opacity-30 disabled:cursor-default"
          disabled={(tip === 0 || tip === undefined)  && (bill === 0 || undefined) && (people === 0 || undefined)}
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Amounts;
