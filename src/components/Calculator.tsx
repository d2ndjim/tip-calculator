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
      const tipAmount = (bill * tip) / 100 / people;
      const totalAmount = bill / people + tipAmount;
      setTipAmount(parseFloat(tipAmount.toFixed(2)));
      setTotal(parseFloat(totalAmount.toFixed(2)));
    }
  }, [bill, tip, people]);

  return (
    <div className="h-96 w-1/2 rounded-2xl border border-solid border-white bg-White px-6 py-8 shadow">
      <div className="flex gap-8">
        <div className="flex w-full flex-col gap-8">
          <Input label="Bill" classname="bill-container" setBill={setBill} />
          <Percentage setTip={setTip} />
          <Input
            label="Number of People"
            classname="people-container"
            setPeople={setPeople}
          />
        </div>
        <Amounts tipAmount={tipAmount} total={total} />
      </div>
    </div>
  );
};

export default Calculator;
