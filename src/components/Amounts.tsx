import React from 'react';

type AmountsProps = {
  tipAmount: number;
  total: number;
};

const Amounts: React.FC<AmountsProps> = ({tipAmount, total}) => {
  return (
    <div className="bg-veryDarkCyan w-full h-80 rounded-lg py-10 p-8 text-White font-mono flex flex-col justify-between">
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-base">Tip Amount</h1>
            <p className="text-sm text-darkGrayishCyan">/ person</p>
          </div>
          {tipAmount > 0 ? (
            <h1 className="text-3xl text-strongCyan">
              ${tipAmount}
            </h1>) : (
              <h1 className="text-3xl text-strongCyan">
              $0.00
            </h1>
            )}
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-base">Total</h1>
            <p className="text-sm text-darkGrayishCyan">/ person</p>
          </div>
          {total > 0 ? (
            <h1 className="text-3xl text-strongCyan">
              ${total}
            </h1>) : (
              <h1 className="text-3xl text-strongCyan">
              $0.00
            </h1>
            )}
        </div>
      </div>
      <div className="self-center">
        <button type="button" className="border-1 bg-strongCyan px-24 h-10 rounded-lg ">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Amounts;