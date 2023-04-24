// import dollar from '../assets/images/icon-dollar.svg'
import { useState, useEffect } from "react";
import Amounts from "./Amounts";
import Input from "./Input";
import Percentage from "./TipPercentage";

const Calculator = () => {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [people, setPeople] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (bill > 0 && tip > 0 && people !== null && people > 0) {
      const tipAmount = ((bill * tip) / 100) / people;
      const totalAmount = (bill / people) + tipAmount;
      setTipAmount(parseFloat(tipAmount.toFixed(2)));
      setTotal(parseFloat(totalAmount.toFixed(2)));
    }
  }, [bill, tip, people]);

  return (
    <div className="w-1/2 h-96 rounded-2xl border border-solid border-white bg-White py-8 px-6 shadow">
      <div className="flex gap-8">
        <div className="flex flex-col gap-8 w-full">
          <Input label="Bill" classname="bill-container" setBill={setBill} />
          <Percentage setTip={setTip}  />
          <Input label="Number of People" classname="people-container" setPeople={setPeople} />
        </div>
        <Amounts tipAmount={tipAmount} total={total} />
      </div>
    </div>
  );
};

export default Calculator;
