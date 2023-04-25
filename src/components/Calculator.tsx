// import dollar from '../assets/images/icon-dollar.svg'
import { useState, useEffect } from "react";
import Amounts from "./Amounts";
import Input from "./Input";
import Percentage from "./TipPercentage";
import { ActiveButton, Bill, People } from "../types";

const Calculator = () => {
  const [bill, setBill] = useState<Bill>(null);
  const [tip, setTip] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [people, setPeople] = useState<People>(null);
  const [total, setTotal] = useState(0);
  const [activeButton, setActiveButton] = useState<ActiveButton>(null);

  console.log(bill);
  console.log(tip);
  console.log(people);
  console.log(tipAmount);
  console.log(total);

  useEffect(() => {
    if (
      bill > 0 &&
      tip > 0 &&
      people > 0
    ) {
      const tipAmount = (bill * tip) / 100 / people;
      const totalAmount = bill / people + tipAmount;
      setTipAmount(parseFloat(tipAmount.toFixed(2)));
      setTotal(parseFloat(totalAmount.toFixed(2)));
    }
  }, [bill, tip, people]);

  return (
    <div className="md:h-96 h-full md:w-2/3 rounded-2xl border border-solid border-white bg-White px-6 py-6 shadow">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex w-full flex-col gap-9 md:gap-6">
          <Input
            mode="bill"
            bill={bill}
            label="Bill"
            classname="bill-container"
            setBill={setBill}
          />
          <Percentage
            activeButton={activeButton}
            setActiveButton={setActiveButton}
            setTip={setTip}
          />
          <Input
            mode="people"
            people={people}
            label="Number of People"
            classname="people-container"
            setPeople={setPeople}
          />
        </div>
        <Amounts
          setActiveButton={setActiveButton}
          setTotal={setTotal}
          setTipAmount={setTipAmount}
          setPeople={setPeople}
          setTip={setTip}
          setBill={setBill}
          bill={bill}
          tip={tip}
          people={people}
          tipAmount={tipAmount}
          total={total}
        />
      </div>
    </div>
  );
};

export default Calculator;
