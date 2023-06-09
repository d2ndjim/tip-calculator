// import dollar from '../assets/images/icon-dollar.svg'
import { useState, useEffect } from "react";
import Amounts from "./Amounts";
import Input from "./Input";
import Percentage from "./TipPercentage";
import { ActiveButton, Bill, People, Tip } from "../types";

const Calculator = () => {
  const [bill, setBill] = useState<Bill>(null);
  const [tip, setTip] = useState<Tip>(null);
  const [tipAmount, setTipAmount] = useState(0);
  const [people, setPeople] = useState<People>(null);
  const [total, setTotal] = useState(0);
  const [activeButton, setActiveButton] = useState<ActiveButton>(null);

  useEffect(() => {
    if (bill !== null && bill > 0 && tip !== null && tip > 0 && people !== null && people > 0) {
      const tipAmount = (bill * tip) / 100 / people;
      const totalAmount = bill / people + tipAmount;
      setTipAmount(parseFloat(tipAmount.toFixed(2)));
      setTotal(parseFloat(totalAmount.toFixed(2)));
    }
  }, [bill, tip, people]);

  return (
    <div className="h-full rounded-2xl border border-solid border-white bg-White px-6 py-6 shadow md:h-96 md:w-2/3">
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex w-full flex-col gap-9 md:gap-6">
          <Input
            mode="bill"
            bill={bill}
            label="Bill"
            classname="bill-container"
            setBill={setBill}
          />
          <Percentage
            tip={tip}
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
